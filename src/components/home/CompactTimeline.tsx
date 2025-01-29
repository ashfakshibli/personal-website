// src/components/home/CompactTimeline.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';

const timelineData = [
  {
    year: '2024',
    role: 'Software Engineer',
    description: 'Building AI Sports Analytics',
    company: 'Athlete Den LLC',
    logo: '/images/logos/athleteden.png',
  },
  {
    year: '2023',
    mainContent: {
      role: 'MS Computer Science',
      description: 'Artificial Intelligence and Cybersecurity',
      institutions: [
        {
          name: 'Tennessee Tech',
          logo: '/images/logos/tntech.png',
        },
        {
          name: 'NJIT',
          logo: '/images/logos/njit.png',
        }
      ]
    },
    extraContent: {
      logo: '/images/logos/lego-league.png',
      title: 'First Lego League',
      subtitle: 'Robotics Competition Volunteer'
    }
  },
  {
    year: '2022',
    role: 'Lead Software Engineer',
    description: 'Innovation Lead',
    company: 'Samsung R&D',
    logo: '/images/logos/samsung.png',
  }
];

export default function CompactTimeline() {
  const { theme } = useTheme();

  return (
    <div className="relative w-full">
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative h-[500px]">
        {/* Curved path */}
        <svg className="absolute w-full h-full" style={{ zIndex: 0 }}>
          <path
            d="M 100 100 Q 300 50, 500 150 T 900 100"
            fill="none"
            stroke={theme === 'dark' ? '#374151' : '#E5E7EB'}
            strokeWidth="2"
          />
        </svg>

        {/* Timeline Items for Desktop */}
        {timelineData.map((item, index) => (
          <TimelineItemDesktop key={index} item={item} index={index} />
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-8 py-4">
        {timelineData.map((item, index) => (
          <TimelineItemMobile key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

const TimelineItemDesktop = ({ item, index }) => {
  const positions = [
    { x: '10%', y: '20%' },
    { x: '45%', y: '40%' },
    { x: '85%', y: '0%' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="absolute"
      style={{
        left: positions[index].x,
        top: positions[index].y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <TimelineContent item={item} />
    </motion.div>
  );
};

const TimelineItemMobile = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="flex flex-col items-center bg-white dark:bg-gray-800 
                 rounded-lg p-6 shadow-lg dark:shadow-gray-700"
    >
      <TimelineContent item={item} />
    </motion.div>
  );
};

const TimelineContent = ({ item }) => {
  return (
    <div className="text-center">
      {/* Year */}
      <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
        {item.year}
      </div>

      {'mainContent' in item ? (
        // Education/Dual Institution Content
        <div>
          <div className="flex justify-center space-x-4 mb-2">
            {item.mainContent.institutions.map((institution) => (
              <motion.div
                key={institution.name}
                whileHover={{ scale: 1.1 }}
                className="relative w-16 h-16 md:w-20 md:h-20 
                         bg-white dark:bg-white rounded-full 
                         shadow-lg dark:shadow-gray-700 p-3"
              >
                <Image
                  src={institution.logo}
                  alt={institution.name}
                  fill
                  className="object-contain p-1"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-sm font-medium mt-1 text-gray-900 dark:text-white">
            {item.mainContent.role}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-300">
            {item.mainContent.description}
          </div>

          {/* Extra Content (e.g., Lego League) */}
          {item.extraContent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-12 h-12 md:w-16 md:h-16 mx-auto mb-1 
                         bg-white dark:bg-white rounded-full 
                         shadow-lg dark:shadow-gray-700 p-2"
              >
                <Image
                  src={item.extraContent.logo}
                  alt={item.extraContent.title}
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="text-xs font-medium text-gray-900 dark:text-white">
                {item.extraContent.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {item.extraContent.subtitle}
              </div>
            </motion.div>
          )}
        </div>
      ) : (
        // Standard Timeline Item
        <div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 
                     bg-white dark:bg-white rounded-full 
                     shadow-lg dark:shadow-gray-700 p-3"
          >
            <Image
              src={item.logo}
              alt={item.role}
              fill
              className="object-contain p-2"
            />
          </motion.div>
          <div className="text-sm md:text-base font-medium text-gray-900 dark:text-white">
            {item.role}
          </div>
          <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
            {item.company}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {item.description}
          </div>
        </div>
      )}
    </div>
  );
};