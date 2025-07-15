interface Config {
  apiUrl: string;
  maxFileSize: number; // in bytes
  supportedFileTypes: string[];
  defaultLanguage: string;
}

export const config: Config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  maxFileSize: parseInt(process.env.NEXT_PUBLIC_MAX_FILE_SIZE || '10485760', 10),
  supportedFileTypes: ['image/jpeg', 'image/png', 'image/webp'],
  defaultLanguage: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE || 'en',
};

// Validate configuration
if (!config.apiUrl) {
  throw new Error('API URL is not configured. Please set NEXT_PUBLIC_API_URL environment variable.');
}

if (isNaN(config.maxFileSize) || config.maxFileSize <= 0) {
  throw new Error('Invalid max file size configuration. Please check NEXT_PUBLIC_MAX_FILE_SIZE environment variable.');
}