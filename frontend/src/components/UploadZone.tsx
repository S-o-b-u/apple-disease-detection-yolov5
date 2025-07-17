'use client';

import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Image as ImageIcon, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { GLASSMORPHISM_STYLES, NEON_GRADIENTS } from '@/lib/constants';
import { config } from '@/lib/config';
import { translations } from '@/lib/translations';

interface UploadZoneProps {
  onFileUpload: (file: File) => void;
  isAnalyzing: boolean;
  currentLanguage: string;
}

export function UploadZone({ onFileUpload, isAnalyzing, currentLanguage }: UploadZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = translations[currentLanguage as keyof typeof translations];

  const validateFile = (file: File): string | null => {
    if (!config.supportedFileTypes.includes(file.type)) {
      return t.upload.validation.fileType;
    }
    if (file.size > config.maxFileSize) {
      return t.upload.validation.fileSize;
    }
    return null;
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    setError(null);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    onFileUpload(file);
  }, [onFileUpload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    onFileUpload(file);
  }, [onFileUpload]);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">{t.upload.title}</h2>
        <p className="text-white/60">{t.upload.subtitle}</p>
      </div>

      {/* Clickable Upload Box */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer ${
          isDragOver
            ? 'border-cyan-400 bg-cyan-500/10'
            : 'border-white/30 hover:border-white/50'
        } ${GLASSMORPHISM_STYLES.base}`}
        onClick={openFilePicker}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="p-12">
          <AnimatePresence mode="wait">
            {isAnalyzing ? (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <Loader2 className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-spin" />
                <p className="text-white font-medium">{t.upload.analyzing}</p>
                <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="upload"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${NEON_GRADIENTS.primary} p-[2px]`}>
                  <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-white text-lg font-medium mb-2">{t.upload.subtitle}</p>
                <p className="text-white/60 text-sm mb-6">{t.upload.formats}</p>
                <Button
                  type="button"
                  onClick={openFilePicker}
                  size="lg"
                  className={`bg-gradient-to-r ${NEON_GRADIENTS.primary} hover:shadow-lg hover:shadow-purple-500/25 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300`}
                >
                  <ImageIcon className="w-5 h-5 mr-2" />
                  Choose Image
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelect}
          disabled={isAnalyzing}
        />

        {/* Animated Background Blur Gradient */}
        <div className="absolute inset-0 opacity-5">
          <div className={`absolute inset-0 bg-gradient-to-br ${NEON_GRADIENTS.primary} animate-pulse`} />
        </div>
      </motion.div>

      {error && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
          <Alert className="border-red-500/50 bg-red-500/10">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-red-400">
              {error}
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </motion.div>
  );
}
