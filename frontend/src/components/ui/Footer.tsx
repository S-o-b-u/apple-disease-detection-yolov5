'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Code,
  Coffee,
  Users,
  Award,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from 'lucide-react';

export function SixthSenseFooter() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const teamStats = [
    { icon: Users, label: 'Team Members', value: '6', color: 'text-blue-400' },
    { icon: Code, label: 'Lines of Code', value: '1000K+', color: 'text-green-400' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞', color: 'text-yellow-400' },
    { icon: Award, label: 'Projects Built', value: '12+', color: 'text-purple-400' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sixthsense', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sixthsense', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:team@sixthsense.tech', label: 'Email', color: 'hover:text-red-400' }
  ];

  const techStack = ['Python','Fast API', 'Yolov5','React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion',  ];

  return (
    <footer className="w-full py-12 px-4 mt-auto bg-transparent text-white">
      <div className="max-w-6xl mx-auto">

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <stat.icon
                className={`w-8 h-8 mx-auto mb-3 ${stat.color} ${hoveredStat === index ? 'animate-bounce' : ''}`}
              />
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Content */}
        <div className="space-y-8">
          {/* Copyright */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/90 font-medium text-center lg:text-left"
            >
              © {new Date().getFullYear()} SixthSense — All Rights Reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-end gap-2 flex-wrap text-white/80"
            >
              <span>Built with</span>
              {/* <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-yellow-400 text-lg"
              >
                💡
              </motion.span>
              <span>and</span> */}
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>by Team SixthSense from</span>
              <span className="font-semibold text-white hover:text-white transition-colors cursor-default">
                GNIT (Guru Nanak Institute of Technology)
              </span>
            </motion.div>
          </div>

          {/* Tech Stack + Social Links */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-white/60 text-sm mr-2">Tech used:</span>
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-end gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-6 pt-4 text-sm border-t border-white/10"
          >
            <a
              href="/about"
              className="text-white/60 hover:text-white transition-colors duration-300 hover:underline flex items-center gap-1"
            >
              About Us
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-white/40">•</span>
            <a
              href="/contact"
              className="text-white/60 hover:text-white transition-colors duration-300 hover:underline flex items-center gap-1"
            >
              Contact Us
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-6 border-t border-white/10 text-center"
          >
            <p className="text-white/60 text-sm italic mb-3">
              "Empowering agriculture through innovative AI solutions" <br />
              <span className="text-lime-400 text-xs">(कृषि में नवाचार लाने के लिए एआई का सहारा)</span>
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
