// src/components/home/HeroSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CompactTimeline from './CompactTimeline';
import TechGraph from './TechGraph';
import TechnicalLogos from './TechnicalLogos';
import PDFViewer from '@/components/shared/PDFViewer';

const SHOW_LEGACY_TECH_STACK = false;

export default function HeroSection() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div>
      <PDFViewer
        isOpen={showResume}
        onClose={() => setShowResume(false)}
        fileUrl="/Ashfak_Shibli_CV_January_2026.pdf"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Profile Section */}
        <div className="lg:col-span-5 flex flex-col items-center px-4 md:px-0 lg:h-[500px] lg:justify-start">
          {/* Profile Image */}
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-[300px] mt-0 mb-5"
          >
            <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg">
              <Image
                src="/images/ashfak-headshot.jpg"
                alt="Ashfak Md Shibli"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center w-full space-y-3"
          >
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Researcher & Software Engineer
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              MS, Computer Science
            </h2>
            
            {/* Skills Tags */}
            <div className="flex justify-center items-center gap-2 my-4">
              {['AI/ML', 'Cybersecurity', 'Application Dev'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="px-3 py-1.5 md:px-4 md:py-2
                           bg-blue-100 dark:bg-blue-900 
                           text-blue-800 dark:text-blue-100 
                           rounded-full text-sm md:text-base font-medium
                           shadow-sm dark:shadow-blue-500/20
                           hover:shadow-md transition-shadow duration-200
                           whitespace-nowrap"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            {/* CV Buttons */}
            <div className="flex justify-center space-x-3 mt-5">
              <motion.button
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setShowResume(true)}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 
                         text-white text-xs md:text-sm font-medium rounded-full 
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
                View CV
              </motion.button>

              <motion.a
                href="/Ashfak_Shibli_CV_January_2026.pdf"
                download
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="px-3.5 py-1.5 bg-gray-600 hover:bg-gray-700 
                         text-white text-xs md:text-sm font-medium rounded-full 
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
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-7">
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full overflow-x-hidden px-4 md:px-0"
          >
            <CompactTimeline />
          </motion.div>
        </div>
      </div>

      {/* Full-Width Tech Stack */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="w-full max-w-7xl mx-auto px-4 md:px-0 -mt-2"
      >
        <div className="space-y-3">
          <TechGraph />
          {SHOW_LEGACY_TECH_STACK && <TechnicalLogos />}
        </div>
      </motion.div>
    </div>
  );
}
