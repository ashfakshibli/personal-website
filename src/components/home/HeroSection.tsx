// src/components/home/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import CompactTimeline from './CompactTimeline';

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column - Profile Section (5 columns) */}
      <div className="lg:col-span-5 flex flex-col items-center">
        {/* Profile Image */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-lg aspect-[4/3]"
        >
        <div className="relative w-full h-full">
            <Image
            src="/images/profile-nyc.jpg"
            alt="Profile with NYC skyline"
            fill
            className="object-cover"
            priority
            />
            {/* Vignette border */}
            <div className="absolute inset-0" 
            style={{ 
                background: `
                radial-gradient(
                    circle at center,
                    transparent 60%,
                    white 100%
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
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Software Engineer &
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Computer Science Researcher
          </h2>
          
          {/* Specializations */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['AI/ML', 'Cybersecurity', 'Mobile Development'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/ashfakshibli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaGithub className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashfak-md-shibli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=your-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <SiGooglescholar className="h-7 w-7" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column - Timeline (7 columns) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="lg:col-span-7"
      >
        <CompactTimeline />
      </motion.div>
    </div>
  );
}