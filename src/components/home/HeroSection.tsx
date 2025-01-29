// src/components/home/HeroSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import CompactTimeline from './CompactTimeline';
import { useTheme } from 'next-themes';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Profile Section */}
      <div className="lg:col-span-5 flex flex-col items-center px-4 md:px-0">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-sm md:max-w-lg aspect-[4/3]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/profile-nyc.jpg"
              alt="Profile with NYC skyline"
              fill
              className="object-cover rounded-lg"
              priority
            />
            {/* Vignette overlay */}
            <div 
              className="absolute inset-0 rounded-lg" 
              style={{ 
                background: `
                  radial-gradient(
                    circle at center,
                    transparent 60%,
                    ${theme === 'dark' ? '#111827' : 'white'} 100%
                  )
                `
              }}
            />
          </div>
        </motion.div>

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-6 md:mt-8 w-full"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Software Engineer &
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Computer Science Researcher
          </h2>
          
          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            {['AI/ML', 'Cybersecurity', 'Mobile Development'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="px-3 py-1.5 md:px-4 md:py-2 
                         bg-blue-100 dark:bg-blue-900 
                         text-blue-800 dark:text-blue-100 
                         rounded-full text-sm md:text-base font-medium
                         shadow-sm dark:shadow-blue-500/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Social Links */}
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-4 md:space-x-6"
            >
              {[
                { Icon: FaGithub, href: 'https://github.com/ashfakshibli' },
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ashfak-md-shibli/' },
                { Icon: SiGooglescholar, href: 'https://scholar.google.com/citations?user=your-id' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 
                           dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Icon className="h-6 w-6 md:h-7 md:w-7" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="lg:col-span-7 w-full overflow-x-hidden px-4 md:px-0"
      >
        <CompactTimeline />
      </motion.div>
    </div>
  );
}