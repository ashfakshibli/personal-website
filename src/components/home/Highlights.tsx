// src/components/home/Highlights.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaShieldAlt, 
  FaMobileAlt, 
  FaDatabase,
  FaCode,
  FaChartLine
} from 'react-icons/fa';

const highlights = [
  {
    icon: FaBrain,
    title: 'AI & Machine Learning',
    description: 'Developing innovative ML models for sports analytics and security applications'
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity',
    description: 'Research in SMS phishing detection and healthcare data protection'
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Development',
    description: 'iOS app development with ML model integration and cloud services'
  },
  {
    icon: FaDatabase,
    title: 'Backend Development',
    description: 'Secure API architecture and database system design'
  },
  {
    icon: FaCode,
    title: 'Programming',
    description: 'Python, Swift, C#, JavaScript, and more'
  },
  {
    icon: FaChartLine,
    title: 'Research',
    description: 'Published research in top security conferences'
  }
];

export default function Highlights() {
  return (
    <div className="py-12 transition-theme">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Technical Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="rounded-lg border border-gray-200 dark:border-gray-700
                     bg-white dark:bg-gray-800 p-6 
                     shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                     dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)]"
          >
            <div className="flex items-center mb-4">
              <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}