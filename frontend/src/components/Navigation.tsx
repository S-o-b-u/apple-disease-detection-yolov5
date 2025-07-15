'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SUPPORTED_LANGUAGES, GLASSMORPHISM_STYLES } from '@/lib/constants';
import { translations } from '@/lib/translations';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function Navigation({ currentLanguage, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  
  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${GLASSMORPHISM_STYLES.base} border-b border-white/10`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Apple Disease AI
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              {t.navigation.home}
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              {t.navigation.about}
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              {t.navigation.contact}
            </a>
            
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className={`${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} text-white`}
              >
                <Globe className="w-4 h-4 mr-2" />
                {SUPPORTED_LANGUAGES.find(lang => lang.code === currentLanguage)?.flag}
              </Button>
              
              {showLanguageMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute right-0 mt-2 w-48 ${GLASSMORPHISM_STYLES.base} rounded-2xl shadow-lg`}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-white hover:bg-white/20 first:rounded-t-2xl last:rounded-b-2xl transition-colors ${
                        currentLanguage === lang.code ? 'bg-white/20' : ''
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            <a href="#" className="block text-white/80 hover:text-white transition-colors">
              {t.navigation.home}
            </a>
            <a href="#" className="block text-white/80 hover:text-white transition-colors">
              {t.navigation.about}
            </a>
            <a href="#" className="block text-white/80 hover:text-white transition-colors">
              {t.navigation.contact}
            </a>
            
            <div className="border-t border-white/20 pt-4">
              <p className="text-white/60 text-sm mb-2">{t.navigation.language}</p>
              <div className="space-y-2">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-white transition-colors ${
                      currentLanguage === lang.code ? 'bg-white/20' : 'hover:bg-white/10'
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}