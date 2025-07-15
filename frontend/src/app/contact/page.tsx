'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Navigation } from '@/components/Navigation';
import { GLASSMORPHISM_STYLES, NEON_GRADIENTS } from '@/lib/constants';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Agriculture Tech Drive\nSilicon Valley, CA 94025\nUnited States'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@applediseaseai.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM PST\nSaturday: 10:00 AM - 4:00 PM PST\nSunday: Closed'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get in touch with our team of agricultural AI experts. We're here to help you protect your crops and maximize your harvest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                      <p className="text-white/80">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className={`mt-4 bg-gradient-to-r ${NEON_GRADIENTS.primary} hover:shadow-lg hover:shadow-purple-500/25 text-white font-medium rounded-xl`}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="fullName" className="block text-white/80 text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50 ${
                              errors.fullName ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your full name"
                          />
                          {errors.fullName && (
                            <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50`}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50 ${
                            errors.email ? 'border-red-500' : ''
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50 ${
                            errors.subject ? 'border-red-500' : ''
                          }`}
                          placeholder="What can we help you with?"
                        />
                        {errors.subject && (
                          <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className={`${GLASSMORPHISM_STYLES.base} border-white/30 text-white placeholder:text-white/50 min-h-[120px] ${
                            errors.message ? 'border-red-500' : ''
                          }`}
                          placeholder="Tell us more about your inquiry..."
                        />
                        {errors.message && (
                          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-gradient-to-r ${NEON_GRADIENTS.primary} hover:shadow-lg hover:shadow-purple-500/25 text-white font-medium py-3 rounded-xl transition-all duration-300`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl ${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} border-white/20 transition-all duration-300`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${NEON_GRADIENTS.primary} p-[2px] mb-4`}>
                      <div className="w-full h-full rounded-xl bg-black/50 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-white/80 whitespace-pre-line">{info.content}</p>
                  </motion.div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <Card className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl overflow-hidden`}>
                <CardHeader>
                  <CardTitle className="text-white">Our Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-white/60 mx-auto mb-2" />
                      <p className="text-white/60">Interactive Map</p>
                      <p className="text-white/40 text-sm">Google Maps integration would be embedded here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl`}>
                <CardHeader>
                  <CardTitle className="text-white">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${NEON_GRADIENTS.primary} p-[2px] transition-all duration-300`}
                        aria-label={social.label}
                      >
                        <div className="w-full h-full rounded-xl bg-black/50 flex items-center justify-center hover:bg-black/30 transition-colors">
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}