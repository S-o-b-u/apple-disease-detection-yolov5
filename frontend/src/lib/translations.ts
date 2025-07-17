export const commonTranslations = {
  error: {
    title: {
      en: 'Error',
      hi: 'त्रुटि',
    },
    detection: {
      en: 'Failed to analyze image. Please try again.',
      hi: 'छवि का विश्लेषण करने में विफल। कृपया पुनः प्रयास करें।',
    },
    unknown: {
      en: 'An unexpected error occurred. Please try again.',
      hi: 'एक अनपेक्षित त्रुटि हुई। कृपया पुनः प्रयास करें।',
    },
    retry: {
      en: 'Try Again',
      hi: 'पुनः प्रयास करें',
    },
    network: {
      en: 'Network error. Please check your connection.',
      hi: 'नेटवर्क त्रुटि। कृपया अपना कनेक्शन जांचें।',
    },
  },
  success: {
    title: {
      en: 'Success',
      hi: 'सफलता',
    },
    detection: {
      en: 'Image analysis completed successfully.',
      hi: 'छवि विश्लेषण सफलतापूर्वक पूरा हुआ।',
    },
  },
} as const;

export const translations = {
  en: {
    title: 'Apple Leaf Disease Detection',
    subtitle: 'AI-powered disease detection for healthier crops',
    upload: {
      title: 'Upload Leaf Image',
      subtitle: 'Drag & drop your apple leaf image or click to browse',
      formats: 'Supports JPG, PNG, WEBP (Max 10MB)',
      analyzing: 'Analyzing image...',
      error: 'Upload failed. Please try again.',
      validation: {
        fileType: 'Please upload a valid image file',
        fileSize: 'File size must be less than',
        required: 'Please select an image to analyze',
        noFile: 'No file selected',
        emptyFile: 'The selected file is empty',
        fileNameTooLong: 'File name is too long (max 255 characters)',
        multipleFiles: 'Please upload only one file at a time',
        generalError: 'An error occurred while processing the file',
      },
    },
    results: {
      title: 'Detection Results',
      confidence: 'Confidence',
      severity: 'Severity',
      treatment: 'Treatment',
      download: 'Download Report',
      playAudio: 'Play Instructions',
      newAnalysis: 'New Analysis',
      audioError: 'Failed to play audio instructions. Please try again.',
      audioLoading: 'Loading audio...',
    },
    treatment: {
      steps: 'Treatment Steps',
      prevention: 'Prevention Tips',
      monitoring: 'Monitoring',
    },
    navigation: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
    },
  },
  hi: {
    title: 'सेब के पत्ते की बीमारी की पहचान',
    subtitle: 'स्वस्थ फसलों के लिए AI-संचालित रोग का पता लगाना',
    upload: {
      title: 'पत्ती की छवि अपलोड करें',
      subtitle: 'अपनी सेब की पत्ती की छवि को खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
      formats: 'JPG, PNG, WEBP समर्थित है (अधिकतम 10MB)',
      analyzing: 'छवि का विश्लेषण किया जा रहा है...',
      error: 'अपलोड असफल। कृपया पुनः प्रयास करें।',
      validation: {
        fileType: 'कृपया एक वैध छवि फ़ाइल अपलोड करें',
        fileSize: 'फ़ाइल का आकार इससे कम होना चाहिए',
        required: 'विश्लेषण के लिए कृपया एक छवि चुनें',
        noFile: 'कोई फ़ाइल नहीं चुनी गई',
        emptyFile: 'चयनित फ़ाइल खाली है',
        fileNameTooLong: 'फ़ाइल का नाम बहुत लंबा है (अधिकतम 255 अक्षर)',
        multipleFiles: 'कृपया एक समय में एक ही फ़ाइल अपलोड करें',
        generalError: 'फ़ाइल को प्रोसेस करते समय एक त्रुटि हुई',
      },
    },
    results: {
      title: 'पहचान परिणाम',
      confidence: 'विश्वास',
      severity: 'गंभीरता',
      treatment: 'उपचार',
      download: 'रिपोर्ट डाउनलोड करें',
      playAudio: 'निर्देश सुनें',
      newAnalysis: 'नया विश्लेषण',
      audioError: 'ऑडियो निर्देश चलाने में विफल। कृपया पुनः प्रयास करें।',
      audioLoading: 'ऑडियो लोड हो रहा है...',
    },
    treatment: {
      steps: 'उपचार के चरण',
      prevention: 'रोकथाम के सुझाव',
      monitoring: 'निगरानी',
    },
    navigation: {
      home: 'मुख्य पृष्ठ',
      about: 'के बारे में',
      contact: 'संपर्क',
      language: 'भाषा',
    },
  },
} as const;

export type LanguageCode = keyof typeof translations;
