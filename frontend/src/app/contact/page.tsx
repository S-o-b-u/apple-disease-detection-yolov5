"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { GLASSMORPHISM_STYLES, NEON_GRADIENTS } from "@/lib/constants";
import SplitText from "@/components/animations/SplitText";
import ShinyText from "@/components/animations/ShinyText";
import { translations } from "@/lib/translations";

export default function ContactPage() {
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "hi">("en");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const t = translations[currentLanguage].contact;
  const tForm = t.form;
  const tInfo = t.info;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xjkovppw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while sending your message.");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: tInfo.locationTitle,
      content: tInfo.locationContent,
    },
    {
      icon: Phone,
      title: tInfo.phoneTitle,
      content: tInfo.phoneContent,
    },
    {
      icon: Mail,
      title: tInfo.emailTitle,
      content: tInfo.emailContent,
    },
    {
      icon: Clock,
      title: tInfo.hoursTitle,
      content: tInfo.hoursContent,
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1BEZieAfFz/?mibextid=qi2Omg",
    },
    { icon: Twitter, href: "#" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/guru-nanak-institute-of-technology-9b0ab9159",
    },
    { icon: Instagram, href: "https://www.instagram.com/gurunanakinstitute" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-6 text-center">
              <SplitText
                text={t.heading}
                className="text-4xl md:text-5xl font-extrabold text-white"
                delay={80}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>
            <div className="text-center px-4">
              <ShinyText
                text={t.description}
                speed={4}
                className="text-lg md:text-xl max-w-2xl mx-auto text-white/80"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card
                className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-white">
                    {tForm.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {tForm.successTitle}
                      </h3>
                      <p className="text-white/80">{tForm.successSubtitle}</p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className={`mt-4 bg-gradient-to-r ${NEON_GRADIENTS.primary} text-white`}
                      >
                        {tForm.sendAnother}
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1 text-white text-sm">
                            {tForm.nameLabel}{" "}
                            <span className="text-white">*</span>
                          </label>
                          <Input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder={tForm.namePlaceholder}
                            className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50`}
                          />
                        </div>
                        <div>
                          <label className="block mb-1 text-white text-sm">
                            {tForm.phoneLabel}
                          </label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={tForm.phonePlaceholder}
                            className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block mb-1 text-white text-sm">
                          {tForm.emailLabel}{" "}
                          <span className="text-white">*</span>
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={tForm.emailPlaceholder}
                          className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50`}
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-white text-sm">
                          {tForm.subjectLabel}{" "}
                          <span className="text-white">*</span>
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder={tForm.subjectPlaceholder}
                          className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50`}
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-white text-sm">
                          {tForm.messageLabel}{" "}
                          <span className="text-white">*</span>
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder={tForm.messagePlaceholder}
                          className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50 min-h-[120px]`}
                        />
                      </div>
                      <Button
                        type="submit"
                        className={`w-full bg-gradient-to-r ${NEON_GRADIENTS.primary} text-white py-3 rounded-xl`}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {tForm.submitButton}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 flex items-start gap-4 rounded-2xl ${GLASSMORPHISM_STYLES.base} border-white/20 h-full`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${NEON_GRADIENTS.primary} p-[2px]`}
                  >
                    <div className="w-full h-full rounded-xl bg-black/50 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-white/80 whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Map & Social */}
          <div className="mt-10 space-y-6">
            <Card
              className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl overflow-hidden max-w-4xl mx-auto`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">
                  {t.location}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video w-full h-[280px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.086268781775!2d88.3790179745803!3d22.61029793279586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02764c40a1cbe7%3A0x6e3fc1531d1cb33!2sGuru%20Nanak%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1752687634134!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl max-w-4xl mx-auto`}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-center text-xl font-semibold">
                  {t.social}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center gap-6 pt-2 pb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${NEON_GRADIENTS.primary} p-[2px]`}
                  >
                    <div className="w-full h-full rounded-xl bg-black/50 flex items-center justify-center">
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
