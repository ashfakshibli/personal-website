// src/app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaCode, FaBrain, FaLock, FaMobileAlt, FaServer } from 'react-icons/fa';
import { SiPytorch, SiPython, SiSwift, SiDotnet, SiFirebase, SiGooglecloud } from 'react-icons/si';

const educationInfo = [
  {
    logo: '/images/logos/tntech.png',
    school: 'Tennessee Tech',
    degree: 'MS in Computer Science',
    year: '2023-2024',
    focus: 'AI & Cybersecurity'
  },
  {
    logo: '/images/logos/njit.png',
    school: 'NJIT',
    degree: 'MS in Computer Science',
    year: '2022-2023',
    focus: 'Healthcare Security'
  }
];

const experienceInfo = [
  {
    logo: '/images/logos/athleteden.png',
    company: 'Athlete Den LLC',
    role: 'Software Engineer',
    year: '2023-Present',
    focus: 'AI Sports Analytics'
  },
  {
    logo: '/images/logos/samsung.png',
    company: 'Samsung R&D',
    role: 'Lead Engineer',
    year: '2018-2022',
    focus: 'Mobile Development'
  }
];

const technicalSkills = [
  {
    icon: SiPytorch,
    name: 'Machine Learning',
    items: ['PyTorch', 'Computer Vision', 'Deep Learning']
  },
  {
    icon: FaLock,
    name: 'Cybersecurity',
    items: ['Threat Detection', 'STRIDE Modeling', 'Data Protection']
  },
  {
    icon: FaMobileAlt,
    name: 'Mobile Dev',
    items: ['iOS (Swift)', 'React Native', 'Firebase']
  }
];

const tools = [
  { icon: SiPython, name: 'Python' },
  { icon: SiSwift, name: 'Swift' },
  { icon: SiDotnet, name: 'C#' },
  { icon: SiFirebase, name: 'Firebase' },
  { icon: SiGooglecloud, name: 'GCP' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaGraduationCap className="mr-3 text-blue-600 dark:text-blue-400" />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationInfo.map((edu) => (
              <motion.div
                key={edu.school}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-gray-200 dark:border-gray-700
                          bg-white dark:bg-gray-800 p-6 
                          shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                          dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)]"
              >
                <div className="flex items-center">
                  <div className="relative w-16 h-16 bg-white dark:bg-white rounded-full p-2">
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{edu.school}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{edu.degree}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.year}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaCode className="mr-3 text-blue-600 dark:text-blue-400" />
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceInfo.map((exp) => (
              <motion.div
                key={exp.company}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-gray-200 dark:border-gray-700
                          bg-white dark:bg-gray-800 p-6 
                          shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                          dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)]"
              >
                <div className="flex items-center">
                  <div className="relative w-16 h-16 bg-white dark:bg-white rounded-full p-2">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{exp.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{exp.year}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technical Skills Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaBrain className="mr-3 text-blue-600 dark:text-blue-400" />
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-gray-200 dark:border-gray-700
                          bg-white dark:bg-gray-800 p-6 
                          shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                          dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)]"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h3 className="ml-3 font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 dark:text-gray-300">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools & Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaServer className="mr-3 text-blue-600 dark:text-blue-400" />
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-4 rounded-lg border border-gray-200 
                          dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <tool.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-gray-900 dark:text-white">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}