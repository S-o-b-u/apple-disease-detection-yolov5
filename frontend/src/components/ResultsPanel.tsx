'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download, Play, Pause, RotateCcw, MapPin,
  AlertTriangle, Shield, Activity, Loader2, AlertCircle
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { DetectionResult, UploadedImage } from '@/types';
import { GLASSMORPHISM_STYLES, NEON_GRADIENTS } from '@/lib/constants';
import { translations } from '@/lib/translations';

interface ResultsPanelProps {
  image: UploadedImage;
  results: DetectionResult[];
  currentLanguage: string;
  onNewAnalysis: () => void;
}

export function ResultsPanel({ image, results, currentLanguage, onNewAnalysis }: ResultsPanelProps) {
  const [selectedResult, setSelectedResult] = useState<DetectionResult | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [showMarkers, setShowMarkers] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const t = translations[currentLanguage as keyof typeof translations];

  const handlePlayAudio = async (audioUrl: string) => {
    try {
      setAudioError(null);
      if (!audioRef.current) {
        audioRef.current = new Audio();
      }

      if (isPlayingAudio) {
        audioRef.current.pause();
        setIsPlayingAudio(false);
        return;
      }

      setIsLoadingAudio(true);
      audioRef.current.src = audioUrl;

      audioRef.current.onerror = () => {
        setAudioError(t.results.audioError);
        setIsLoadingAudio(false);
        setIsPlayingAudio(false);
      };

      audioRef.current.onloadeddata = () => {
        setIsLoadingAudio(false);
      };

      audioRef.current.onended = () => {
        setIsPlayingAudio(false);
      };

      await audioRef.current.play();
      setIsPlayingAudio(true);
    } catch (error) {
      console.error('Error playing audio:', error);
      setAudioError(t.results.audioError);
      setIsLoadingAudio(false);
      setIsPlayingAudio(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'Low': return 'bg-green-500/20 text-green-400 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'High': return <AlertTriangle className="w-4 h-4" />;
      case 'Medium': return <Activity className="w-4 h-4" />;
      case 'Low': return <Shield className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-8"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{t.results.title}</h2>
          <p className="text-white/60">Analysis complete - {results.length} issues detected</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Image Display */}
          <div className="xl:col-span-2">
            <Card className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl overflow-hidden`}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Detected Image</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMarkers(!showMarkers)}
                  className="text-white hover:bg-white/20"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {showMarkers ? 'Hide' : 'Show'} Markers
                </Button>
              </CardHeader>
              <CardContent className="relative">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    ref={imageRef}
                    src={results[0]?.imageUrl || image.url}
                    alt="Analyzed leaf"
                    className="w-full h-auto max-h-96 object-contain bg-black/20"
                  />
                  {/* Animated Markers */}
                  {/* {showMarkers && (
                    <AnimatePresence>
                      {results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute bg-red-500/20 border border-red-400 rounded-md cursor-pointer backdrop-blur-sm"
                          style={{
                            left: `${result.coordinates.x}px`,
                            top: `${result.coordinates.y}px`,
                            width: `${result.coordinates.width}px`,
                            height: `${result.coordinates.height}px`,
                          }}
                          onClick={() => setSelectedResult(result)}
                        >
                          <div className="absolute -top-6 left-0 bg-red-600 text-white text-xs px-2 py-0.5 rounded shadow">
                            {result.disease}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  )} */}
                </div>
              </CardContent>
            </Card>
            
          </div>

          {/* Detection Details */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Backend PDF Download */}
              {results[0]?.reportUrl && (
                <a
                  href={results[0].reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={`flex-1 text-center bg-gradient-to-r ${NEON_GRADIENTS.primary} hover:shadow-lg hover:shadow-purple-500/25 text-white font-medium px-4 py-2 rounded-xl`}
                >
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download Report
                </a>
              )}
              <Button
                onClick={onNewAnalysis}
                variant="outline"
                className={`flex-1 ${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} border-white/30 text-white rounded-xl`}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                {t.results.newAnalysis}
              </Button>
            </div>

            {/* Result List */}
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedResult === result ? 'ring-2 ring-purple-500/50 border-purple-500/50' : 'hover:border-white/40'
                  }`}
                  onClick={() => setSelectedResult(result)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg">{result.disease}</CardTitle>
                      <Badge className={`${getSeverityColor(result.severity)} border`}>
                        {getSeverityIcon(result.severity)}
                        <span className="ml-1">{result.severity}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/60 text-sm">{t.results.confidence}</span>
                        <span className="text-white text-sm font-medium">
                          {(result.confidence * 100).toFixed(1)}%
                        </span>
                      </div>
                      <Progress value={result.confidence * 100} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (result.treatment.audioUrl) {
                              handlePlayAudio(result.treatment.audioUrl);
                            }
                          }}
                          disabled={isLoadingAudio}
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20"
                        >
                          {isLoadingAudio ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              {t.results.audioLoading}
                            </>
                          ) : isPlayingAudio ? (
                            <>
                              <Pause className="w-4 h-4 mr-2" />
                              {t.results.playAudio}
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              {t.results.playAudio}
                            </>
                          )}
                        </Button>
                        {audioError && (
                          <Alert variant="destructive" className="py-2">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{audioError}</AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Treatment Modal */}
        <AnimatePresence>
          {selectedResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedResult(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`w-full max-w-2xl max-h-[80vh] overflow-y-auto ${GLASSMORPHISM_STYLES.base} rounded-2xl`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedResult.treatment.title}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedResult(null)}
                      className="text-white/60 hover:text-white"
                    >
                      ×
                    </Button>
                  </div>

                  <p className="text-white/80 mb-6">{selectedResult.treatment.description}</p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">{t.treatment.steps}</h4>
                    <div className="space-y-3">
                      {selectedResult.treatment.steps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${NEON_GRADIENTS.primary} flex items-center justify-center text-white text-sm font-medium flex-shrink-0`}>
                            {index + 1}
                          </div>
                          <p className="text-white/80">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          onEnded={() => setIsPlayingAudio(false)}
          onError={() => setIsPlayingAudio(false)}
        />
      </div>
    </motion.div>
  );
}
