"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Heart, Shield, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { GLASSMORPHISM_STYLES, NEON_GRADIENTS } from "@/lib/constants";
import { translations } from "@/lib/translations";

const AVAILABLE_LANGUAGES = ["en", "hi"] as const;
type Language = (typeof AVAILABLE_LANGUAGES)[number];

export default function AboutPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const t = translations[currentLanguage]?.about ?? translations["en"].about;

  const teamMembers = t.teamMembers ?? [];


  const testimonials = t.testimonials ?? [];
  const coreValues = (t.values ?? []).map((val, i) => {
    const icons = [Target, Heart, Shield, Users];
    return {
      ...val,
      icon: icons[i % icons.length],
    };
  });

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={(lang: Language) => setCurrentLanguage(lang)}
      />

      <main className="relative mt-5 z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.heading}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t.subheading}
            </p>
          </motion.div>

          {/* Story */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {t.storyTitle}
                </h2>
                <div className="space-y-4 text-white/80">
                  {(t.story ?? []).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Apple orchard"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </motion.section>

          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t.missionTitle}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">{t.missionDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl ${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} border-white/20 text-center transition-all duration-300`}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${NEON_GRADIENTS.primary} p-[2px]`}
                  >
                    <div className="w-full h-full rounded-2xl bg-black/50 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/80 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t.teamTitle}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">{t.teamDesc}</p>
            </div>

            <div className="flex flex-row flex-nowrap justify-center gap-6 overflow-x-auto scrollbar-hide pb-2">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} border-white/20 rounded-xl shadow-lg flex flex-col items-center w-48 min-w-[12rem] p-4 transition-all duration-300`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/30 shadow mb-2"
                  />
                  <h3 className="text-base font-bold text-white mb-0.5 text-center">
                    {member.name}
                  </h3>
                  <p className="text-green-400 text-xs mb-1 font-medium text-center">
                    {member.role}
                  </p>
                  <p className="text-white/70 text-xs mb-2 text-center">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white/10 text-white/80 text-[10px] px-2 py-0.5 rounded-full border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t.testimonialsTitle}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                {t.testimonialsDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} border-white/20 rounded-2xl p-6 transition-all duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-white/80 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <Card
              className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl p-12 max-w-4xl mx-auto`}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {t.ctaTitle}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                {t.ctaDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  {t.ctaButton1}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl"
                >
                  {t.ctaButton2}
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
