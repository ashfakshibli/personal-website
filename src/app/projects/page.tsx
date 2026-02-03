// src/app/projects/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiPython, SiSwift, SiFirebase, SiGooglecloud, SiDotnet, SiSharp, SiPytorch, SiOpencv } from 'react-icons/si';
import { FaBrain, FaChartLine, FaDatabase, FaMobileAlt, FaServer, FaShieldAlt } from 'react-icons/fa';

const projects = [
  {
    category: "Professional",
    items: [
      {
        title: 'AI Sports Analysis Platform',
        logo: '/images/logos/athleteden_short.png',
        company: 'Athlete Den LLC',
        period: 'May 2024 - Current (Intern: May 2023 - Aug 2023)',
        description: 'Patent-pending AI-powered sports analytics platform',
        technologies: [
          { icon: SiSwift, name: 'Swift' },
          { icon: SiPython, name: 'Python' },
          { icon: SiPytorch, name: 'PyTorch' },
          { icon: SiOpencv, name: 'OpenCV' },
          { icon: SiFirebase, name: 'Firebase' },
          { icon: SiGooglecloud, name: 'GCP' }
        ],
        highlights: [
          'Real-time athlete activity detection',
          'Mobile-optimized ML models',
          'Cloud infrastructure integration',
          'Patent-pending technology'
        ]
      },
      {
        title: 'Samsung Family Hub',
        logo: '/images/logos/family-hub.png',
        company: 'Samsung R&D',
        period: '2018-2022',
        description: 'Smart refrigerator application with cloud connectivity',
        technologies: [
          { icon: SiSwift, name: 'Swift' },
          { icon: SiFirebase, name: 'Firebase' }
        ],
        highlights: [
          'Secure API architecture',
          '99% crash reduction',
          'Real-time notifications',
          'Multi-threaded data handling'
        ]
      },
      {
        title: 'Samsung Galaxy Buds',
        logo: '/images/logos/galaxy-buds.png',
        company: 'Samsung R&D',
        period: '2020-2022',
        description: 'Windows application for Galaxy Buds management',
        technologies: [
          { icon: SiDotnet, name: 'ASP.NET' },
          { icon: SiSharp, name: 'C#' },
          { icon: FaMobileAlt, name: 'Bluetooth Security Protocols' }
        ],
        highlights: [
          'Secure firmware updates',
          'Bluetooth protocol implementation',
          'Encrypted data transmission',
          'Automated testing framework'
        ]
      }
    ]
  },
  {
    category: "Research",
    items: [
      {
        title: 'SMS Phishing Detection',
        logo: '/images/logos/tntech.png',
        company: 'Tennessee Tech',
        period: '2023',
        description: 'Novel system for detecting SMS-based phishing attacks',
        technologies: [
          { icon: SiPython, name: 'Python' },
          { icon: SiPytorch, name: 'PyTorch' },
          { icon: FaBrain, name: 'ML and AI' },
          { icon: FaChartLine, name: 'Data Visualization' },
          { icon: FaShieldAlt, name: 'Threat Scoring' }
        ],
        highlights: [
          'Custom threat detection scoring',
          'AI model integration',
          'Pattern analysis system',
          'Published research'
        ]
      },
      {
        title: 'Healthcare Data Protection',
        logo: '/images/logos/njit.png',
        company: 'NJIT',
        period: '2022',
        description: 'PHI leakage analysis in healthcare applications',
        technologies: [
          { icon: SiPython, name: 'Python' },
          { icon: FaDatabase, name: 'Static Analysis' },
          { icon: FaShieldAlt, name: 'Threat Modeling' },
          { icon: FaShieldAlt, name: 'Security Testing' }
        ],
        highlights: [
          'Static analysis system',
          'STRIDE threat modeling',
          'Automated security testing',
          'Healthcare compliance'
        ]
      }
    ]
  },
  {
    category: "Personal",
    items: [
      {
        title: 'AI Course Advisor',
        logo: '/window.svg',
        company: 'Personal Project',
        period: '2025',
        description: 'LLM-powered web app for intelligent academic course advising.',
        technologies: [
          { icon: SiPython, name: 'Python' },
          { icon: SiGooglecloud, name: 'Gemini API' },
          { icon: FaServer, name: 'Flask Backend' },
          { icon: FaChartLine, name: 'CI/CD Deployment' }
        ],
        highlights: [
          'Built recommendation flow from course + preference analysis',
          'Implemented backend architecture in Flask',
          'Automated deployment pipeline from GitHub',
          'Delivered functional advisor demo experience'
        ]
      },
      {
        title: 'Generalized Price Tracker',
        logo: '/globe.svg',
        company: 'Personal Project',
        period: '2025',
        description: 'Generalized e-commerce price monitoring system using LLM-assisted extraction.',
        technologies: [
          { icon: SiPython, name: 'Python' },
          { icon: FaBrain, name: 'Claude API' },
          { icon: FaDatabase, name: 'Data Extraction Pipeline' },
          { icon: FaChartLine, name: 'Price Change Monitoring' }
        ],
        highlights: [
          'Designed universal page parsing without site-specific DOM rules',
          'Automated price-change detection across diverse websites',
          'Used LLM-guided extraction for flexible scraping workflows',
          'Built reusable monitoring architecture for future expansion'
        ]
      }
    ]
  }
];

export default function ProjectsPage({ embedded = false }: { embedded?: boolean }) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 ${
        embedded ? 'py-8' : 'min-h-screen py-16'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {projects.map((section, sectionIndex) => (
            <div key={section.category} className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.08 }}
                className="text-xl font-semibold text-gray-900 dark:text-white"
              >
                {section.category}
              </motion.h3>

              <div className="space-y-6">
                {section.items.map((project, index) => (
                  <motion.div
                    key={`${section.category}-${project.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + (index + 1) * 0.06 }}
                    className="rounded-lg border border-gray-200 dark:border-gray-700
                            bg-white dark:bg-gray-800 p-6 
                            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                            dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)]
                            transition-all duration-300 h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-6">
                      <div className="flex items-center">
                        <div className="relative w-16 h-16 bg-white dark:bg-white rounded-full p-2 flex-shrink-0">
                          <Image
                            src={project.logo}
                            alt={project.company}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {project.title}
                          </h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">{project.company}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{project.period}</p>
                        </div>
                      </div>
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                             bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 whitespace-nowrap"
                      >
                        {section.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <div
                            key={`${project.title}-${tech.name}`}
                            className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                          >
                            <tech.icon className="w-4 h-4 text-gray-600 dark:text-gray-300 mr-1" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Highlights
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
