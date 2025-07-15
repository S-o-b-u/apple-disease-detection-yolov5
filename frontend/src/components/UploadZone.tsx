'use client';
import { useState, useCallback } from 'react';
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
  currentLanguage: keyof typeof translations;
}
export function UploadZone({ onFileUpload, isAnalyzing, currentLanguage }: UploadZoneProps) {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const t = translations[currentLanguage];
  const validateFile = (file: File): string | null => {
    // Check if file exists
    if (!file) {
      return t.upload.validation.noFile;
    }
    // Check file type
    if (!config.supportedFileTypes.includes(file.type)) {
      return t.upload.validation.fileType + ` (${config.supportedFileTypes.join(', ')})`;
    }
    // Check file size
    if (file.size > config.maxFileSize) {
      const maxSizeMB = config.maxFileSize / (1024 * 1024);
      return t.upload.validation.fileSize + ` (${maxSizeMB.toFixed(1)} MB)`;
    }
    // Check if file is empty
    if (file.size === 0) {
      return t.upload.validation.emptyFile;
    }
    // Check if file name is too long
    if (file.name.length > 255) {
      return t.upload.validation.fileNameTooLong;
    }
    return null;
  };
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    setError(null);
    try {
      const files = Array.from(e.dataTransfer.files);
      // Check if multiple files were dropped
      if (files.length > 1) {
        setError(t.upload.validation.multipleFiles);
        return;
      }
      const file = files[0];
      if (!file) {
        setError(t.upload.validation.noFile);
        return;
      }
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }
      onFileUpload(file);
    } catch (error) {
      console.error('Error handling file drop:', error);
      setError(t.upload.validation.generalError);
    }
  }, [onFileUpload, t.upload.validation]);
  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setError(null);
      const files = e.target.files;
      if (!files || files.length === 0) {
        setError(t.upload.validation.noFile);
        return;
      }
      // Check if multiple files were selected
      if (files.length > 1) {
        setError(t.upload.validation.multipleFiles);
        return;
      }
      const file = files[0];
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }
      onFileUpload(file);
      // Reset the input value to allow uploading the same file again
      e.target.value = '';
    } catch (error) {
      console.error('Error handling file selection:', error);
      setError(t.upload.validation.generalError);
    }
  }, [onFileUpload, t.upload.validation]);
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
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 ${
          isDragOver
            ? 'border-cyan-400 bg-cyan-500/10'
            : 'border-white/30 hover:border-white/50'
        } ${GLASSMORPHISM_STYLES.base}`}
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
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                  disabled={isAnalyzing}
                />
                
                <Button
                  asChild
                  size="lg"
                  className={`bg-gradient-to-r ${NEON_GRADIENTS.primary} hover:shadow-lg hover:shadow-purple-500/25 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300`}
                >
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <ImageIcon className="w-5 h-5 mr-2" />
                    Choose Image
                  </label>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-5">
          <div className={`absolute inset-0 bg-gradient-to-br ${NEON_GRADIENTS.primary} animate-pulse`} />
        </div>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4"
        >
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