import { DetectionResult } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const TIMEOUT_DURATION = 30000; // 30 seconds timeout

export async function detectDisease(file: File): Promise<DetectionResult[]> {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_DURATION);

    try {
      const response = await fetch(`${API_BASE_URL}/detect`, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 413) {
          throw new Error('Image file size is too large');
        } else if (response.status === 415) {
          throw new Error('Unsupported image format');
        } else if (response.status === 503) {
          throw new Error('Detection service is currently unavailable');
        } else {
          throw new Error(`Detection failed: ${response.statusText || 'Unknown error'}`);
        }
      }

      const data = await response.json();
      return data.results;
    } catch (fetchError) {
      if (fetchError.name === 'AbortError') {
        throw new Error('Detection request timed out. Please try again.');
      }
      throw fetchError;
    }
  } catch (error) {
    console.error('Error during disease detection:', error);
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Unable to connect to the detection service. Please check your internet connection.');
    }
    throw error;
  }
}