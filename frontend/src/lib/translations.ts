export const commonTranslations = {
  error: {
    title: {
      en: "Error",
      hi: "त्रुटि",
    },
    detection: {
      en: "Failed to analyze image. Please try again.",
      hi: "छवि का विश्लेषण करने में विफल। कृपया पुनः प्रयास करें।",
    },
    unknown: {
      en: "An unexpected error occurred. Please try again.",
      hi: "एक अनपेक्षित त्रुटि हुई। कृपया पुनः प्रयास करें।",
    },
    retry: {
      en: "Try Again",
      hi: "पुनः प्रयास करें",
    },
    network: {
      en: "Network error. Please check your connection.",
      hi: "नेटवर्क त्रुटि। कृपया अपना कनेक्शन जांचें।",
    },
  },
  success: {
    title: {
      en: "Success",
      hi: "सफलता",
    },
    detection: {
      en: "Image analysis completed successfully.",
      hi: "छवि विश्लेषण सफलतापूर्वक पूरा हुआ।",
    },
  },
} as const;

export const translations = {
  en: {
    title: "Apple Leaf Disease Detection",
    subtitle: "AI-powered disease detection for healthier crops",
    upload: {
      title: "Upload Leaf Image",
      subtitle: "Drag & drop your apple leaf image or click to browse",
      formats: "Supports JPG, PNG, WEBP (Max 10MB)",
      analyzing: "Analyzing image...",
      error: "Upload failed. Please try again.",
      validation: {
        fileType: "Please upload a valid image file",
        fileSize: "File size must be less than",
        required: "Please select an image to analyze",
        noFile: "No file selected",
        emptyFile: "The selected file is empty",
        fileNameTooLong: "File name is too long (max 255 characters)",
        multipleFiles: "Please upload only one file at a time",
        generalError: "An error occurred while processing the file",
      },
    },
    results: {
      title: "Detection Results",
      confidence: "Confidence",
      severity: "Severity",
      treatment: "Treatment",
      download: "Download Report",
      playAudio: "Play Instructions",
      newAnalysis: "New Analysis",
      audioError: "Failed to play audio instructions. Please try again.",
      audioLoading: "Loading audio...",
    },
    treatment: {
      steps: "Treatment Steps",
      prevention: "Prevention Tips",
      monitoring: "Monitoring",
    },
    navigation: {
      home: "Home",
      about: "About",
      contact: "Contact",
      language: "Language",
    },
    contact: {
      heading: "Talk to Your AI Crop Doctor Now 🩺",
      description:
        "Reach out to protect your crops with early detection, fast diagnosis, and expert AI guidance.",
      form: {
        heading: "Send us a Message",
        successTitle: "Message Sent Successfully!",
        successSubtitle: "Thank you for contacting us. We'll get back to you soon.",
        nameLabel: "Full Name",
        namePlaceholder: "Your full name",
        phoneLabel: "Phone Number",
        phonePlaceholder: "(555) 123-4567",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Subject",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        submitButton: "Send Message",
        sendAnother: "Send Another Message",
      },
      location: "Our Location",
      social: "Grow with Us Online 🌱",
      info: {
        locationTitle: "Location",
        locationContent:
          "157/F, Nilgunj Rd, Sahid Colony, Panihati, Khardaha, West Bengal 700114",
        phoneTitle: "Phone Number",
        phoneContent: "9432012681 / 9073683911 / 9073322523",
        emailTitle: "Email",
        emailContent: "contact@applediseaseai.com",
        hoursTitle: "Business Hours",
        hoursContent: "Mon - Fri: 9 AM – 6 PM\nSat: 10 AM – 4 PM\nSun: Closed",
      },
    },
  },
  hi: {
    title: "सेब के पत्ते की बीमारी की पहचान",
    subtitle: "स्वस्थ फसलों के लिए AI-संचालित रोग का पता लगाना",
    upload: {
      title: "पत्ती की छवि अपलोड करें",
      subtitle: "अपनी सेब की पत्ती की छवि को खींचें और छोड़ें या ब्राउज़ करें",
      formats: "JPG, PNG, WEBP समर्थित है (अधिकतम 10MB)",
      analyzing: "छवि का विश्लेषण किया जा रहा है...",
      error: "अपलोड असफल। कृपया पुनः प्रयास करें।",
      validation: {
        fileType: "कृपया एक वैध छवि फ़ाइल अपलोड करें",
        fileSize: "फ़ाइल का आकार इससे कम होना चाहिए",
        required: "विश्लेषण के लिए कृपया एक छवि चुनें",
        noFile: "कोई फ़ाइल नहीं चुनी गई",
        emptyFile: "चयनित फ़ाइल खाली है",
        fileNameTooLong: "फ़ाइल का नाम बहुत लंबा है (अधिकतम 255 अक्षर)",
        multipleFiles: "कृपया एक समय में एक ही फ़ाइल अपलोड करें",
        generalError: "फ़ाइल को प्रोसेस करते समय एक त्रुटि हुई",
      },
    },
    results: {
      title: "पहचान परिणाम",
      confidence: "विश्वास",
      severity: "गंभीरता",
      treatment: "उपचार",
      download: "रिपोर्ट डाउनलोड करें",
      playAudio: "निर्देश सुनें",
      newAnalysis: "नया विश्लेषण",
      audioError: "ऑडियो निर्देश चलाने में विफल। कृपया पुनः प्रयास करें।",
      audioLoading: "ऑडियो लोड हो रहा है...",
    },
    treatment: {
      steps: "उपचार के चरण",
      prevention: "रोकथाम के सुझाव",
      monitoring: "निगरानी",
    },
    navigation: {
      home: "मुख्य पृष्ठ",
      about: "के बारे में",
      contact: "संपर्क",
      language: "भाषा",
    },
    contact: {
      heading: "अभी बात करें अपने AI फसल चिकित्सक से 🩺",
      description:
        "अपनी फसलों की सुरक्षा के लिए समय रहते पहचान करें, तेज़ निदान पाएं और विशेषज्ञ AI मार्गदर्शन लें।",
      form: {
        heading: "हमें एक संदेश भेजें",
        successTitle: "संदेश सफलतापूर्वक भेजा गया!",
        successSubtitle:
          "हमसे संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।",
        nameLabel: "पूरा नाम",
        namePlaceholder: "आपका पूरा नाम",
        phoneLabel: "फोन नंबर",
        phonePlaceholder: "(५५५) १२३-४५६७",
        emailLabel: "ईमेल",
        emailPlaceholder: "you@example.com",
        subjectLabel: "विषय",
        subjectPlaceholder: "विषय दर्ज करें",
        messageLabel: "संदेश",
        messagePlaceholder: "यहाँ अपना संदेश लिखें...",
        submitButton: "संदेश भेजें",
        sendAnother: "एक और संदेश भेजें",
      },
      location: "हमारा स्थान",
      social: "ऑनलाइन हमारे साथ बढ़ें 🌱",
      info: {
        locationTitle: "स्थान",
        locationContent:
          "157/F, नीलगंज रोड, शहीद कॉलोनी, पनिहाटी, खरदाहा, पश्चिम बंगाल 700114",
        phoneTitle: "फ़ोन नंबर",
        phoneContent: "९४३२०१२६८१ / ९०७३६८३९११ / ९०७३३२२५२३",
        emailTitle: "ईमेल",
        emailContent: "contact@applediseaseai.com",
        hoursTitle: "कारोबार का समय",
        hoursContent: "सोम - शुक्र: 9 बजे – 6 बजे\nशनिवार: 10 बजे – 4 बजे\nरविवार: बंद",
      },
    },
  },
} as const;

export type LanguageCode = keyof typeof translations;
