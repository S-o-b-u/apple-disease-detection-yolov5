import { DetectionResult } from '@/types';

export const mockDetectionResults: DetectionResult[] = [
  {
    disease: 'Apple Scab',
    confidence: 0.87,
    severity: 'Medium',
    coordinates: {
      x: 120,
      y: 150,
      width: 80,
      height: 60
    },
    treatment: {
      title: 'Apple Scab Treatment',
      description: 'Apple scab is a fungal disease that affects apple trees, causing dark spots on leaves and fruit.',
      steps: [
        'Remove and dispose of fallen leaves',
        'Apply fungicide spray during wet conditions',
        'Prune for better air circulation',
        'Use resistant apple varieties'
      ],
      audioUrl: '/audio/apple-scab-treatment.mp3'
    }
  },
  {
    disease: 'Fire Blight',
    confidence: 0.73,
    severity: 'High',
    coordinates: {
      x: 200,
      y: 100,
      width: 60,
      height: 70
    },
    treatment: {
      title: 'Fire Blight Treatment',
      description: 'Fire blight is a bacterial disease that can kill apple trees if not treated promptly.',
      steps: [
        'Prune affected branches 12 inches below visible symptoms',
        'Sterilize pruning tools between cuts',
        'Apply copper-based bactericides',
        'Avoid high-nitrogen fertilizers'
      ],
      audioUrl: '/audio/fire-blight-treatment.mp3'
    }
  }
];

export const simulateDetection = (file: File): Promise<DetectionResult[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDetectionResults);
    }, 3000);
  });
};