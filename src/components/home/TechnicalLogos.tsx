// src/components/home/TechnicalLogos.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython,
  SiSwift,
  SiDotnet,
  SiCplusplus,
  SiFirebase,
  SiGooglecloud,
  SiMysql,
  SiMongodb,
  SiGit,
  SiJira,
  SiPytorch,
  SiDocker
} from 'react-icons/si';

const techGroups = [
  {
    name: "Languages & ML",
    items: [
      { icon: SiPython, color: '#3776AB', name: 'Python' },
      { icon: SiPytorch, color: '#EE4C2C', name: 'PyTorch' },
      { icon: SiSwift, color: '#F05138', name: 'Swift' },
      { icon: SiDotnet, color: '#239120', name: 'C#' },
      { icon: SiCplusplus, color: '#00599C', name: 'C++' }
    ]
  },
  {
    name: "Cloud & DevOps",
    items: [
      { icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
      { icon: SiGooglecloud, color: '#4285F4', name: 'Google Cloud' },
      { icon: SiDocker, color: '#2496ED', name: 'Docker' }
    ]
  },
  {
    name: "Databases & Tools",
    items: [
      { icon: SiMysql, color: '#4479A1', name: 'MySQL' },
      { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
      { icon: SiGit, color: '#F05032', name: 'Git' },
      { icon: SiJira, color: '#0052CC', name: 'Jira' }
    ]
  }
];

export default function TechnicalLogos() {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg px-4 py-2">
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 text-center"
      >
        Tech Stack
      </motion.h3>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap md:flex-nowrap items-center md:justify-between justify-center gap-y-3 px-2"
      >
        {techGroups.map((group, groupIndex) => (
          <React.Fragment key={group.name}>
            <div className="flex items-center gap-2 flex-wrap md:flex-nowrap justify-center">
              {group.items.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (groupIndex * group.items.length + index) * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 rounded-full 
                                  transform transition-all duration-200 group-hover:scale-110 -z-10" />
                    <div className="p-2">
                      <tech.icon 
                        className="w-5 h-5 transition-transform duration-200"
                        style={{ color: tech.color }}
                        title={tech.name}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {groupIndex < techGroups.length - 1 && (
              <div className="hidden md:block h-6 w-px bg-gray-200 dark:bg-gray-700 mx-4 flex-shrink-0" />
            )}
            {groupIndex < techGroups.length - 1 && (
              <div className="w-full md:hidden border-t border-gray-200 dark:border-gray-700" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}