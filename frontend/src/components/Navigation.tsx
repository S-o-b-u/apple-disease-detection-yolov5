"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SUPPORTED_LANGUAGES, GLASSMORPHISM_STYLES } from "@/lib/constants";
import { translations } from "@/lib/translations";

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function Navigation({
  currentLanguage,
  onLanguageChange,
}: NavigationProps) {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 inset-x-0 mx-auto w-[95%] md:w-[70%] px-6 py-3 backdrop-blur-md border border-white/10 bg-white/5 rounded-full flex items-center justify-between z-50"
    >
      {/* Logo + Name */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow">
          <Leaf className="w-4 h-4 text-white" />
        </div>
        <a href="/">
          <span className="text-white text-lg font-semibold tracking-wide">
            Apple Disease AI
          </span>
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        <a
          href="/"
          className="text-white/80 hover:text-white text-sm font-medium transition-colors"
        >
          {t.navigation.home}
        </a>
        <a
          href="/about"
          className="text-white/80 hover:text-white text-sm font-medium transition-colors"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-white/80 hover:text-white text-sm font-medium transition-colors"
        >
          Contact Us
        </a>

        {/* Language Dropdown */}
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="text-white px-2 py-1 hover:bg-white/10 transition rounded-full"
          >
            <Globe className="w-4 h-4 mr-1" />
            {
              SUPPORTED_LANGUAGES.find(
                (lang) => lang.code === currentLanguage
              )?.flag
            }
          </Button>

          {showLanguageMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-40 bg-black/80 backdrop-blur-lg text-white rounded-xl shadow-xl overflow-hidden z-50"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setShowLanguageMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 ${
                    currentLanguage === lang.code ? "bg-white/10" : ""
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

      {/* Mobile Burger */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 right-4 w-56 bg-black/90 rounded-xl shadow-xl p-4 text-white flex flex-col space-y-3 z-50 md:hidden"
          >
            <a
              href="/"
              className="text-sm hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.navigation.home}
            </a>
            <a
              href="/about"
              className="text-sm hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>

            {/* Language Selector */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-xs mb-1 text-white/60">Language</div>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm px-2 py-1 rounded-md w-full text-left hover:bg-white/10 ${
                    currentLanguage === lang.code ? "bg-white/10" : ""
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
