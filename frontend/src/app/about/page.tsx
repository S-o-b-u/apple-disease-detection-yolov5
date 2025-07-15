'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Star, ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/Navigation';
import { GLASSMORPHISM_STYLES, NEON_GRADIENTS } from '@/lib/constants';

export default function AboutPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'PhD in Agricultural Engineering with 15+ years in AI research. Pioneer in plant disease detection algorithms.',
      expertise: ['Machine Learning', 'Computer Vision', 'Agricultural AI']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Apple engineer with expertise in mobile applications and user experience design.',
      expertise: ['Product Strategy', 'UX Design', 'Mobile Development']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Lead Plant Pathologist',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Plant pathology expert with 20+ years of field experience in apple disease research.',
      expertise: ['Plant Pathology', 'Disease Research', 'Agricultural Science']
    },
    {
      name: 'James Park',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack engineer specializing in scalable AI systems and cloud infrastructure.',
      expertise: ['System Architecture', 'Cloud Computing', 'AI Infrastructure']
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: '99.2% Accuracy Rate',
      description: 'Industry-leading disease detection accuracy validated by agricultural institutions'
    },
    {
      icon: Users,
      title: '50,000+ Farmers',
      description: 'Trusted by farmers across 25 countries to protect their apple orchards'
    },
    {
      icon: Globe,
      title: '15 Languages',
      description: 'Supporting farmers worldwide with multilingual AI assistance'
    },
    {
      icon: Zap,
      title: '2.3 Second Analysis',
      description: 'Lightning-fast disease detection for immediate action'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'Apple Orchard Owner, Washington',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'This AI system saved my entire harvest last season. Early detection of fire blight allowed me to take immediate action.',
      rating: 5
    },
    {
      name: 'Maria Gonzalez',
      role: 'Agricultural Consultant, California',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The accuracy and speed of diagnosis is remarkable. My clients have seen 40% reduction in crop losses.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Organic Farm Manager, Oregon',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Perfect for organic farming. The treatment recommendations are environmentally conscious and effective.',
      rating: 5
    }
  ];

  const milestones = [
    { year: '2019', event: 'Company founded by agricultural AI researchers' },
    { year: '2020', event: 'First AI model deployed with 85% accuracy' },
    { year: '2021', event: 'Reached 10,000 active users worldwide' },
    { year: '2022', event: 'Achieved 99%+ accuracy, launched mobile app' },
    { year: '2023', event: 'Expanded to 25 countries, 50,000+ users' },
    { year: '2024', event: 'Launched multilingual support and audio guidance' }
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing the boundaries of agricultural AI to solve real-world farming challenges'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Promoting environmentally responsible farming practices through smart technology'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Delivering consistent, accurate results that farmers can depend on'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making advanced AI technology accessible to farmers of all backgrounds'
    }
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Apple Disease AI
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing agriculture with cutting-edge AI technology, helping farmers protect their crops and feed the world sustainably.
            </p>
          </motion.div>

          {/* Company Story */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    Founded in 2019 by a team of agricultural researchers and AI engineers, Apple Disease AI emerged from a simple yet powerful vision: to democratize access to expert plant pathology knowledge through artificial intelligence.
                  </p>
                  <p>
                    After witnessing devastating crop losses due to undetected diseases, our founders combined their expertise in machine learning, computer vision, and plant pathology to create the world's most accurate apple disease detection system.
                  </p>
                  <p>
                    Today, we're proud to serve over 50,000 farmers across 25 countries, helping them protect their harvests and build more sustainable farming practices.
                  </p>
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

          {/* Mission & Values */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Mission & Values</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our mission is to empower farmers with AI-driven insights that protect crops, increase yields, and promote sustainable agriculture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl ${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} border-white/20 text-center transition-all duration-300`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${NEON_GRADIENTS.primary} p-[2px]`}>
                    <div className="w-full h-full rounded-2xl bg-black/50 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/80 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our diverse team of experts combines decades of experience in AI, agriculture, and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} border-white/20 rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                    <p className="text-white/80 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-white/10 text-white/80 text-xs border-white/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Recognized globally for innovation in agricultural AI and sustainable farming solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl ${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} border-white/20 text-center transition-all duration-300`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${NEON_GRADIENTS.secondary} p-[2px]`}>
                    <div className="w-full h-full rounded-2xl bg-black/50 flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-white/80 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Key milestones in our mission to revolutionize agricultural disease detection.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <Card className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl`}>
                        <CardContent className="p-4">
                          <div className="text-cyan-400 font-bold text-lg mb-1">{milestone.year}</div>
                          <div className="text-white/80">{milestone.event}</div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-900" />
                  </motion.div>
                ))}
              </div>
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
              <h2 className="text-3xl font-bold text-white mb-4">What Our Users Say</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Trusted by farmers worldwide to protect their crops and livelihoods.
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
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <Card className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl p-12 max-w-4xl mx-auto`}>
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Crops?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of farmers who trust our AI technology to detect diseases early and save their harvests.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${NEON_GRADIENTS.primary} hover:shadow-lg hover:shadow-purple-500/25 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300`}
                >
                  Start Free Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className={`${GLASSMORPHISM_STYLES.base} ${GLASSMORPHISM_STYLES.hover} border-white/30 text-white px-8 py-3 rounded-xl`}
                >
                  Contact Our Team
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </main>
    </div>
  );
}