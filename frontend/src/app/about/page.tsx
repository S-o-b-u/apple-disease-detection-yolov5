"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Heart, Shield, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { GLASSMORPHISM_STYLES, NEON_GRADIENTS } from "@/lib/constants";

export default function AboutPage() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const teamMembers = [
    {
      name: "Souvik Rahut",
      role: "AI Research Lead",
      image: "images/souvik.jpg",
      bio: "PhD, 15+ yrs in AI for agriculture.",
      expertise: ["Machine Learning", "Computer Vision"],
    },
    {
      name: "Shriparna Prasad",
      role: "Head of Product",
      image: "images/shriparna.jpeg",
      bio: "Ex-Apple, mobile & UX expert.",
      expertise: ["Product", "UX Design"],
    },
    {
      name: "Snehasish Saha",
      role: "Plant Pathologist",
      image: "images/snehasish.jpg",
      bio: "20+ yrs in apple disease research.",
      expertise: ["Pathology", "Field Research"],
    },
    {
      name: "Trishan Dewanji",
      role: "Plant Pathologist",
      image: "images/trishhan.jpg",
      bio: "20+ yrs in apple disease research.",
      expertise: ["Pathology", "Field Research"],
    },
    {
      name: "Sekh Arif Ali",
      role: "Plant Pathologist",
      image: "images/arif.jpg",
      bio: "20+ yrs in apple disease research.",
      expertise: ["Pathology", "Field Research"],
    },
    {
      name: "Soumyadip Banerjee",
      role: "Plant Pathologist",
      image: "images/brahmon.jpg",
      bio: "20+ yrs in apple disease research.",
      expertise: ["Pathology", "Field Research"],
    },
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      role: "Apple Orchard Owner, Washington",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "This AI system saved my entire harvest last season. Early detection of fire blight allowed me to take immediate action.",
      rating: 5,
    },
    {
      name: "Maria Gonzalez",
      role: "Agricultural Consultant, California",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "The accuracy and speed of diagnosis is remarkable. My clients have seen 40% reduction in crop losses.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Organic Farm Manager, Oregon",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "Perfect for organic farming. The treatment recommendations are environmentally conscious and effective.",
      rating: 5,
    },
  ];

  const milestones = [
    { year: "2019", event: "Company founded by agricultural AI researchers" },
    { year: "2020", event: "First AI model deployed with 85% accuracy" },
    { year: "2021", event: "Reached 10,000 active users worldwide" },
    { year: "2022", event: "Achieved 99%+ accuracy, launched mobile app" },
    { year: "2023", event: "Expanded to 25 countries, 50,000+ users" },
    { year: "2024", event: "Launched multilingual support and audio guidance" },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "Pushing the boundaries of agricultural AI to solve real-world farming challenges",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description:
        "Promoting environmentally responsible farming practices through smart technology",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Delivering consistent, accurate results that farmers can depend on",
    },
    {
      icon: Users,
      title: "Accessibility",
      description:
        "Making advanced AI technology accessible to farmers of all backgrounds",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />

      <main className="relative mt-5 z-10 pt-24 pb-16">
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
              We're revolutionizing agriculture with cutting-edge AI technology,
              helping farmers protect their crops and feed the world
              sustainably.
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
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    Launched in 2025 by a team of AI developers and agricultural
                    tech enthusiasts, our Apple Leaf Disease Detection system
                    was built with a vision to make cutting-edge plant health
                    diagnostics accessible to all farmers.
                  </p>
                  <p>
                    Combining the power of YOLOv5 and PyTorch for real-time
                    object detection, we designed a FastAPI backend that
                    generates accurate disease reports, actionable treatment
                    advice, and even Hindi voice guidance for native
                    accessibility.
                  </p>
                  <p>
                    The frontend, developed using Next.js, Tailwind CSS, and
                    Framer Motion, delivers a seamless and modern user
                    experience, while MongoDB powers our secure data storage.
                    Our mission is to help farmers diagnose diseases faster,
                    reduce crop loss, and promote sustainable apple farming
                    across the globe.
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Mission & Values
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our mission is to empower farmers with AI-driven insights that
                protect crops, increase yields, and promote sustainable
                agriculture.
              </p>
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

          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                The people who built this platform.
              </p>
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

          {/* Timeline */}
          {/* <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Key milestones in our mission to revolutionize agricultural
                disease detection.
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
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <Card
                        className={`${GLASSMORPHISM_STYLES.base} border-white/20 rounded-2xl`}
                      >
                        <CardContent className="p-4">
                          <div className="text-cyan-400 font-bold text-lg mb-1">
                            {milestone.year}
                          </div>
                          <div className="text-white/80">{milestone.event}</div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-900" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section> */}

          {/* Testimonials */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Trusted by farmers worldwide to protect their crops and
                livelihoods.
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

          {/* Call to Action */}
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
                Ready to Protect Your Crops?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of farmers who trust our AI technology to detect
                diseases early and save their harvests.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  Start Free Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl"
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
