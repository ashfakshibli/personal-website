// src/components/home/CompactTimeline.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const timelineData = [
  {
    year: '2024',
    role: 'Software Engineer',
    description: 'Building AI Sports Analytics',
    logo: '/images/logos/athleteden.png',
    position: { x: '10%', y: '20%' }
  },
  {
    year: '2023',
    mainContent: {
      role: 'MS Computer Science',
      description: 'Artificial Intelligence and Cybersecurity',
      logos: [
        {
          src: '/images/logos/tntech.png',
          alt: 'Tennessee Tech'
        },
        {
          src: '/images/logos/njit.png',
          alt: 'NJIT'
        }
      ]
    },
    extraContent: {
      logo: '/images/logos/lego-league.png',
      title: 'Robotics Competition',
      subtitle: 'Volunteer'
    },
    position: { x: '45%', y: '40%' }
  },
  {
    year: '2022',
    role: 'Lead Software Engineer',
    description: 'Innovation Lead',
    logo: '/images/logos/samsung.png',
    position: { x: '85%', y: '0%' }
  }
];

export default function CompactTimeline() {
  return (
    <div className="relative h-[500px] w-full">
      {/* Spiral path (SVG) */}
      <svg className="absolute w-full h-full" style={{ zIndex: 0 }}>
        <path
          d="M 100 100 Q 300 50, 500 150 T 900 100"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="2"
        />
      </svg>

      {/* Timeline Items */}
      {timelineData.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="absolute"
          style={{
            left: item.position.x,
            top: item.position.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Year number */}
          <div className="text-sm font-medium text-blue-600 mb-2 text-center">
            {item.year}
          </div>

          {'mainContent' in item ? (
            // 2023 with dual logos
            <div className="text-center">
              <div className="flex justify-center space-x-4 mb-2">
                {item.mainContent.logos.map((logo, i) => (
                  <motion.div
                    key={logo.alt}
                    whileHover={{ scale: 1.1 }}
                    className="relative w-20 h-20 bg-white rounded-full shadow-lg p-3"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain p-1"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm font-medium mt-1">{item.mainContent.role}</div>
              <div className="text-xs text-gray-600">{item.mainContent.description}</div>

              {/* Lego League below */}
              {item.extraContent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-16 h-16 mx-auto mb-1"
                  >
                    <Image
                      src={item.extraContent.logo}
                      alt={item.extraContent.title}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  <div className="text-xs font-medium">{item.extraContent.title}</div>
                  <div className="text-xs text-gray-500">{item.extraContent.subtitle}</div>
                </motion.div>
              )}
            </div>
          ) : (
            // Standard timeline item (2024 and 2022)
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-24 h-24 mx-auto mb-2 bg-white rounded-full shadow-lg p-3"
              >
                <Image
                  src={item.logo}
                  alt={item.role}
                  fill
                  className="object-contain p-2"
                />
              </motion.div>
              <div className="text-sm font-medium">{item.role}</div>
              <div className="text-xs text-gray-600">{item.description}</div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}