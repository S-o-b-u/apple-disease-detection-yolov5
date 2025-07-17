"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { UploadZone } from "@/components/UploadZone";
import { ResultsPanel } from "@/components/ResultsPanel";
import { LoadingScreen } from "@/components/LoadingScreen";
import type { UploadedImage, DetectionResult } from "@/types";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";
import { translations, commonTranslations } from "@/lib/translations";
import { detectDisease } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "hi">("en");
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [results, setResults] = useState<DetectionResult[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const t = translations[currentLanguage];
  const toastText = commonTranslations;
  const { toast } = useToast();

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const supportedLang = SUPPORTED_LANGUAGES.find((lang) => lang.code === browserLang);
    if (supportedLang && (supportedLang.code === "en" || supportedLang.code === "hi")) {
      setCurrentLanguage(supportedLang.code);
    }
  }, []);

  const handleFileUpload = async (file: File) => {
    setIsAnalyzing(true);
    setShowResults(false);

    const imageUrl = URL.createObjectURL(file);
    const newImage: UploadedImage = {
      file,
      url: imageUrl,
    };

    setUploadedImage(newImage);

    try {
      const detectionResults = await detectDisease(file);
      
      if (detectionResults.length === 0) {
        toast({
          variant: "destructive",
          title: toastText.error.title[currentLanguage],
          description: "No diseases detected in the image. Please try with a different image.",
        });
        setShowResults(false);
      } else {
        setResults(detectionResults);
        setShowResults(true);
        toast({
          title: toastText.success.title[currentLanguage],
          description: toastText.success.detection[currentLanguage],
        });
      }
    } catch (error: unknown) {
      console.error("Detection failed:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      
      const getErrorDescription = (message: string) => {
        if (message.includes("Failed to fetch") || message.includes("NetworkError")) {
          return toastText.error.network[currentLanguage];
        } else if (message.includes("Invalid response format") || message.includes("Missing required fields")) {
          return "Server returned invalid data. Please try again.";
        } else {
          return toastText.error.detection[currentLanguage];
        }
      };

      toast({
        variant: "destructive",
        title: toastText.error.title[currentLanguage],
        description: getErrorDescription(errorMessage),
      });
      setResults([]);
      setShowResults(false);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewAnalysis = () => {
    setUploadedImage(null);
    setResults([]);
    setShowResults(false);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navigation */}
      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={(lang) => setCurrentLanguage(lang as "en" | "hi")}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {isAnalyzing ? (
            <LoadingScreen key="loading" currentLanguage={currentLanguage} />
          ) : showResults && uploadedImage ? (
            <ResultsPanel
              key="results"
              image={uploadedImage}
              results={results}
              currentLanguage={currentLanguage}
              onNewAnalysis={handleNewAnalysis}
            />
          ) : (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex items-center justify-center p-4 pt-24"
            >
              <div className="w-full max-w-4xl">
                {/* Hero Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {t.title}
                  </h1>
                  <p className="text-xl text-white/80 max-w-2xl mx-auto">
                    {t.subtitle}
                  </p>
                </motion.div>

                {/* Upload Zone */}
                <UploadZone
                  onFileUpload={handleFileUpload}
                  isAnalyzing={isAnalyzing}
                  currentLanguage={currentLanguage}
                />

                {/* Features Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                >
                  {[
                    {
                      title:
                        currentLanguage === "en"
                          ? "AI-Powered Detection"
                          : "एआई-संचालित पहचान",
                      description:
                        currentLanguage === "en"
                          ? "Advanced machine learning algorithms for accurate disease identification"
                          : "सटीक रोग पहचान के लिए उन्नत मशीन लर्निंग एल्गोरिदम",
                      icon: "🤖",
                    },
                    {
                      title:
                        currentLanguage === "en"
                          ? "Instant Results"
                          : "तत्काल परिणाम",
                      description:
                        currentLanguage === "en"
                          ? "Get detailed analysis and treatment recommendations in seconds"
                          : "सेकंड में विस्तृत विश्लेषण और उपचार सुझाव प्राप्त करें",
                      icon: "⚡",
                    },
                    {
                      title:
                        currentLanguage === "en"
                          ? "Expert Guidance"
                          : "विशेषज्ञ मार्गदर्शन",
                      description:
                        currentLanguage === "en"
                          ? "Professional treatment plans and prevention strategies"
                          : "पेशेवर उपचार योजनाएं और रोकथाम रणनीतियां",
                      icon: "🌿",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/60">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
