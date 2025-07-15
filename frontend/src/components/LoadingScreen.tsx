'use client';

import { motion } from 'framer-motion';
import { Leaf, Zap, Brain, Shield } from 'lucide-react';
import { NEON_GRADIENTS } from '@/lib/constants';

interface LoadingScreenProps {
  currentLanguage: string;
}

export function LoadingScreen({ currentLanguage }: LoadingScreenProps) {
  const features = [
    { icon: Brain, text: currentLanguage === 'en' ? 'AI Analysis' : 'एआई विश्लेषण' },
    { icon: Zap, text: currentLanguage === 'en' ? 'Real-time Detection' : 'रियल-टाइम डिटेक्शन' },
    { icon: Shield, text: currentLanguage === 'en' ? 'Accurate Results' : 'सटीक परिणाम' },
    { icon: Leaf, text: currentLanguage === 'en' ? 'Plant Health' : 'पौधे का स्वास्थ्य' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="text-center space-y-8">
        {/* Main Loading Animation */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${NEON_GRADIENTS.primary} p-1`}
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <Leaf className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"
          />
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">
            {currentLanguage === 'en' ? 'Analyzing Your Image...' : 'आपकी छवि का विश्लेषण किया जा रहा है...'}
          </h2>
          <p className="text-white/60">
            {currentLanguage === 'en' ? 'Please wait while our AI processes your apple leaf' : 'कृपया प्रतीक्षा करें जबकि हमारा एआई आपके सेब के पत्ते को प्रोसेस करता है'}
          </p>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center space-y-2"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: 'easeInOut' }}
              className={`h-full bg-gradient-to-r ${NEON_GRADIENTS.primary}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}