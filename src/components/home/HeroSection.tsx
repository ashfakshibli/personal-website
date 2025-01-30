// src/components/home/HeroSection.tsx
'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CompactTimeline from './CompactTimeline';
import { useTheme } from 'next-themes';
import PDFViewer from '@/components/shared/PDFViewer';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HeroSection(): ReactNode {
  const [mounted, setMounted] = useState<boolean>(false);
  const [showResume, setShowResume] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const gradientStyle = {
    background: `radial-gradient(
      circle at center,
      transparent 60%,
      ${resolvedTheme === 'dark' ? '#111827' : 'white'} 100%
    )`
  };

  return (
    <div>
      <PDFViewer isOpen={showResume} onClose={() => setShowResume(false)} />
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
                style={gradientStyle}
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
            <h1 className="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Researcher & Software Engineer
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Computer Science Grad
            </h2>
            
            {/* Skills Tags */}
            <div className="flex justify-center items-center gap-2 md:gap-3 mb-6 md:mb-8">
              {['AI/ML', 'Cybersecurity', 'Mobile Dev'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="px-4 py-2 md:px-5 md:py-2.5
                           bg-blue-100 dark:bg-blue-900 
                           text-blue-800 dark:text-blue-100 
                           rounded-full text-base md:text-lg font-medium
                           shadow-sm dark:shadow-blue-500/20
                           hover:shadow-md transition-shadow duration-200
                           whitespace-nowrap"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            {/* Resume Buttons */}
            <div className="flex justify-center space-x-3">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setShowResume(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 
                         text-white text-sm font-medium rounded-full 
                         shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-0.5 
                         transition-all duration-150
                         flex items-center justify-center gap-1.5"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Resume
              </motion.button>

              <motion.a
                href="/Ashfak_Resume_2025.pdf"
                download="Ashfak_Md_Shibli_Resume.pdf"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 
                         text-white text-sm font-medium rounded-full 
                         shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-0.5 
                         transition-all duration-150
                         flex items-center justify-center gap-1.5"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download
              </motion.a>
            </div>
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
    </div>
  );
}