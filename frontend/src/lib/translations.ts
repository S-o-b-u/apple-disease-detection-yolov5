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
        successSubtitle:
          "Thank you for contacting us. We'll get back to you soon.",
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
    about: {
      teamMembers: [
        {
          name: "Souvik Rahut",
          role: "AI Research Lead",
          image: "images/souvik.jpg",
          bio: "PhD, 15+ yrs in AI for agriculture.",
          expertise: ["Machine Learning", "Computer Vision"],
        },
        {
          name: "Shriparna Prasad",
          role: "Head of Product",
          image: "images/shriparna.jpeg",
          bio: "Ex-Apple, mobile & UX expert.",
          expertise: ["Product", "UX Design"],
        },
        {
          name: "Snehasish Saha",
          role: "Plant Pathologist",
          image: "images/snehasish.jpg",
          bio: "20+ yrs in apple disease research.",
          expertise: ["Pathology", "Field Research"],
        },
        {
          name: "Trishan Dewanji",
          role: "Plant Pathologist",
          image: "images/trishhan.jpg",
          bio: "20+ yrs in apple disease research.",
          expertise: ["Pathology", "Field Research"],
        },
        {
          name: "Sk Arif Ali",
          role: "Plant Pathologist",
          image: "images/arif.jpg",
          bio: "20+ yrs in apple disease research.",
          expertise: ["Pathology", "Field Research"],
        },
        {
          name: "Soumodip Banerjee",
          role: "Plant Pathologist",
          image: "images/brahmon.jpg",
          bio: "20+ yrs in apple disease research.",
          expertise: ["Pathology", "Field Research"],
        },
      ],

      heading: "Meet Your Smart Apple Disease AI",
      subheading:
        "We're revolutionizing agriculture with cutting-edge AI technology, helping farmers protect their crops and feed the world sustainably.",
      storyTitle: "Our Story",
      story: [
        "Launched in 2025 by a team of AI developers and agricultural tech enthusiasts, our Apple Leaf Disease Detection system was built with a vision to make cutting-edge plant health diagnostics accessible to all farmers.",
        "Combining the power of YOLOv5 and PyTorch for real-time object detection, we designed a FastAPI backend that generates accurate disease reports, actionable treatment advice, and even Hindi voice guidance for native accessibility.",
        "The frontend, developed using Next.js, Tailwind CSS, and Framer Motion, delivers a seamless and modern user experience, while MongoDB powers our secure data storage. Our mission is to help farmers diagnose diseases faster, reduce crop loss, and promote sustainable apple farming across the globe.",
      ],
      missionTitle: "Mission & Values",
      missionDesc:
        "Our mission is to empower farmers with AI-driven insights that protect crops, increase yields, and promote sustainable agriculture.",
      teamTitle: "Meet Our Team",
      teamDesc: "The people who built this platform.",
      testimonialsTitle: "What Our Users Say",
      testimonialsDesc:
        "Trusted by farmers worldwide to protect their crops and livelihoods.",
      ctaTitle: "Ready to Protect Your Crops?",
      ctaDesc:
        "Join thousands of farmers who trust our AI technology to detect diseases early and save their harvests.",
      ctaButton1: "Start Free Analysis",
      ctaButton2: "Contact Our Team",
      values: [
        {
          title: "Innovation",
          description:
            "Pushing the boundaries of agricultural AI to solve real-world farming challenges",
        },
        {
          title: "Sustainability",
          description:
            "Promoting environmentally responsible farming practices through smart technology",
        },
        {
          title: "Reliability",
          description:
            "Delivering consistent, accurate results that farmers can depend on",
        },
        {
          title: "Accessibility",
          description:
            "Making advanced AI technology accessible to farmers of all backgrounds",
        },
      ],
      
        // ...other existing fields
        testimonials: [
          {
            name: "Robert Johnson",
            role: "Apple Orchard Owner, Washington",
            image:
              "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
            quote:
              "This AI system saved my entire harvest last season. Early detection of fire blight allowed me to take immediate action.",
            rating: 5,
          },
          {
            name: "Maria Gonzalez",
            role: "Agricultural Consultant, California",
            image:
              "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
            quote:
              "The accuracy and speed of diagnosis is remarkable. My clients have seen 40% reduction in crop losses.",
            rating: 5,
          },
          {
            name: "David Kim",
            role: "Organic Farm Manager, Oregon",
            image:
              "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
            quote:
              "Perfect for organic farming. The treatment recommendations are environmentally conscious and effective.",
            rating: 5,
          },
        ],
      
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
        hoursContent:
          "सोम - शुक्र: 9 बजे – 6 बजे\nशनिवार: 10 बजे – 4 बजे\nरविवार: बंद",
      },
    },
    about: {
      teamMembers: [
        {
          name: "सौविक रहुत",
          role: "एआई अनुसंधान प्रमुख",
          image: "images/souvik.jpg",
          bio: "पीएचडी, 15+ वर्षों का कृषि एआई अनुभव।",
          expertise: ["मशीन लर्निंग", "कंप्यूटर विज़न"],
        },
        {
          name: "श्रीपर्णा प्रसाद",
          role: "उत्पाद प्रमुख",
          image: "images/shriparna.jpeg",
          bio: "पूर्व-Apple, मोबाइल और UX विशेषज्ञ।",
          expertise: ["उत्पाद", "UX डिज़ाइन"],
        },
        {
          name: "स्नेहशीष साहा",
          role: "पौधा रोग विशेषज्ञ",
          image: "images/snehasish.jpg",
          bio: "सेब रोग अनुसंधान में 20+ वर्षों का अनुभव।",
          expertise: ["पैथोलॉजी", "फील्ड अनुसंधान"],
        },
        {
          name: "त्रिशन देवानजी",
          role: "पौधा रोग विशेषज्ञ",
          image: "images/trishhan.jpg",
          bio: "सेब रोग अनुसंधान में 20+ वर्षों का अनुभव।",
          expertise: ["पैथोलॉजी", "फील्ड अनुसंधान"],
        },
        {
          name: "स्क अरीफ अली",
          role: "पौधा रोग विशेषज्ञ",
          image: "images/arif.jpg",
          bio: "सेब रोग अनुसंधान में 20+ वर्षों का अनुभव।",
          expertise: ["पैथोलॉजी", "फील्ड अनुसंधान"],
        },
        {
          name: "सौम्यदीप बनर्जी",
          role: "पौधा रोग विशेषज्ञ",
          image: "images/brahmon.jpg",
          bio: "सेब रोग अनुसंधान में 20+ वर्षों का अनुभव।",
          expertise: ["पैथोलॉजी", "फील्ड अनुसंधान"],
        },
      ],

      heading: "मिलिए हमारे स्मार्ट सेब रोग निदान से",
      subheading:
        "हम अत्याधुनिक एआई तकनीक के साथ कृषि में क्रांति ला रहे हैं, जिससे किसान अपनी फसलों की रक्षा कर सकें और टिकाऊ रूप से दुनिया का पोषण कर सकें।",
      storyTitle: "हमारी कहानी",
      story: [
        "2025 में एआई डेवलपर्स और कृषि तकनीकी उत्साही लोगों की एक टीम द्वारा शुरू की गई, हमारी ऐप्पल लीफ डिज़ीज़ डिटेक्शन प्रणाली को सभी किसानों के लिए अत्याधुनिक पौध स्वास्थ्य निदान को सुलभ बनाने के उद्देश्य से बनाया गया था।",
        "YOLOv5 और PyTorch की शक्ति का उपयोग करके वास्तविक समय में रोग पहचान के लिए, हमने एक FastAPI बैकएंड डिज़ाइन किया जो सटीक रिपोर्ट, उपचार की सलाह और हिंदी वॉइस गाइडेंस प्रदान करता है।",
        "Next.js, Tailwind CSS और Framer Motion के साथ विकसित हमारा फ्रंटएंड एक आधुनिक उपयोगकर्ता अनुभव देता है, और MongoDB हमारे सुरक्षित डेटा स्टोरेज को संचालित करता है। हमारा मिशन किसानों को तेज़ निदान, कम फसल क्षति और टिकाऊ सेब खेती के लिए सक्षम बनाना है।",
      ],
      missionTitle: "मिशन और मूल्य",
      missionDesc:
        "हमारा मिशन है किसानों को एआई-संचालित जानकारी के साथ सशक्त बनाना जो फसलों की रक्षा करें, उत्पादन बढ़ाएं और टिकाऊ कृषि को बढ़ावा दें।",
      teamTitle: "हमारी टीम से मिलिए",
      teamDesc: "वे लोग जिन्होंने इस प्लेटफॉर्म को बनाया।",
      testimonialsTitle: "हमारे उपयोगकर्ताओं की राय",
      testimonialsDesc:
        "दुनियाभर के किसान अपनी फसलों और आजीविका की रक्षा के लिए हम पर भरोसा करते हैं।",
      ctaTitle: "क्या आप अपनी फसलों की रक्षा के लिए तैयार हैं?",
      ctaDesc:
        "उन हज़ारों किसानों में शामिल हों जो हमारे एआई तकनीक पर भरोसा करते हैं रोगों की जल्दी पहचान और फसल की सुरक्षा के लिए।",
      ctaButton1: "नि:शुल्क विश्लेषण शुरू करें",
      ctaButton2: "हमारी टीम से संपर्क करें",
      values: [
        {
          title: "नवाचार",
          description:
            "वास्तविक कृषि समस्याओं को हल करने के लिए एग्रीकल्चर एआई की सीमाओं को आगे बढ़ाना",
        },
        {
          title: "टिकाऊपन",
          description:
            "स्मार्ट तकनीक के माध्यम से पर्यावरण-सम्मत खेती को बढ़ावा देना",
        },
        {
          title: "विश्वसनीयता",
          description: "ऐसे सटीक परिणाम देना जिन पर किसान भरोसा कर सकें",
        },
        {
          title: "सुलभता",
          description: "प्रत्येक किसान तक उन्नत एआई तकनीक को पहुँचाना",
        },
      ],
      testimonials: [
        {
          name: "रॉबर्ट जॉनसन",
          role: "सेब बागान मालिक, वॉशिंगटन",
          image:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
          quote:
            "इस एआई सिस्टम ने पिछले सीज़न में मेरी पूरी फसल को बचा लिया। फायर ब्लाइट का जल्दी पता चलने से मैं तुरंत कार्रवाई कर सका।",
          rating: 5,
        },
        {
          name: "मारिया गोंजालेज़",
          role: "कृषि सलाहकार, कैलिफ़ोर्निया",
          image:
            "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
          quote:
            "इसकी सटीकता और तेजी से निदान अद्भुत है। मेरे ग्राहकों की फसल हानि में 40% की कमी आई है।",
          rating: 5,
        },
        {
          name: "डेविड किम",
          role: "जैविक फार्म मैनेजर, ओरेगन",
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
          quote:
            "जैविक खेती के लिए आदर्श। उपचार सुझाव पर्यावरण के अनुकूल और प्रभावी हैं।",
          rating: 5,
        },
      ],
    },
  },
} as const;
export type LanguageCode = keyof typeof translations;
