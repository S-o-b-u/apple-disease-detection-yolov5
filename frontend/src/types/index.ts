export interface DetectionResult {
  disease: string;
  confidence: number;
  severity: string;
  coordinates: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  imageUrl: string;     // ✅ Add this
  reportUrl: string;    // ✅ Add this
  treatment: {
    title: string;
    description: string;
    steps: string[];
    audioUrl: string;
  };
}


export interface UploadedImage {
  file: File;
  url: string;
  results?: DetectionResult[];
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface AppState {
  uploadedImage: UploadedImage | null;
  isAnalyzing: boolean;
  currentLanguage: Language;
  darkMode: boolean;
  showResults: boolean;
}