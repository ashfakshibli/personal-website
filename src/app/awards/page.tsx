'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAward, FaMedal, FaStar, FaTrophy } from 'react-icons/fa';

interface AwardItem {
  title: string;
  organization: string;
  period: string;
  category: 'Research' | 'Industry' | 'Professional';
  description: string;
  logo: string;
  icon: React.ComponentType<{ className?: string }>;
}

const awards: AwardItem[] = [
  {
    title: 'Eminence Award 2025 - MS Best Paper',
    organization: 'Tennessee Technological University, College of Engineering',
    period: '2025',
    category: 'Research',
    description:
      'Recognized for best paper contributions from the MS research track, reflecting impact in cybersecurity and AI research output.',
    logo: '/images/logos/tntech.png',
    icon: FaTrophy
  },
  {
    title: 'Employee of the Year',
    organization: 'Athlete Den',
    period: '2025',
    category: 'Industry',
    description:
      'Awarded for technical leadership in AI model architecture, mobile optimization, and product commercialization support.',
    logo: '/images/logos/athleteden.png',
    icon: FaAward
  },
  {
    title: 'ICON of the Month',
    organization: 'Samsung Research',
    period: 'May 2019, Nov 2020',
    category: 'Industry',
    description:
      'Two-time recognition for engineering excellence and high-impact execution across consumer product initiatives.',
    logo: '/images/logos/samsung.png',
    icon: FaStar
  },
  {
    title: 'Outstanding Collaborator',
    organization: 'Samsung Research',
    period: '2021',
    category: 'Professional',
    description:
      'Recognition for cross-team collaboration and delivery effectiveness on mobile and desktop engineering programs.',
    logo: '/images/logos/samsung.png',
    icon: FaMedal
  },
  {
    title: 'Best Paper Award',
    organization: 'International Conference on Emerging Technologies in Data Mining and Information Security',
    period: 'Feb 2018',
    category: 'Research',
    description:
      'Best paper recognition for early vision-based driving assistance research work and conference presentation impact.',
    logo: '/images/logos/springer.jpg',
    icon: FaTrophy
  }
];

const stats = [
  { label: 'Total Recognitions', value: '5' },
  { label: 'Latest Milestone', value: '2026' },
  { label: 'Focus Areas', value: 'Research + Industry' }
];

export default function AwardsPage({ embedded = false }: { embedded?: boolean }) {
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
          Awards
        </motion.h2>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-lg border border-gray-200 dark:border-gray-700
                         bg-white dark:bg-gray-800 p-5
                         shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                         dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)]"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
            </motion.div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={`${award.title}-${award.period}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.01 }}
              className="rounded-lg border border-gray-200 dark:border-gray-700
                         bg-white dark:bg-gray-800 p-6 h-full
                         shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                         dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full bg-white p-2 shadow-md flex-shrink-0">
                    <Image
                      src={award.logo}
                      alt={award.organization}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {award.title}
                    </h2>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {award.organization}
                    </p>
                  </div>
                </div>

                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                             bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 whitespace-nowrap"
                >
                  {award.period}
                </span>
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300">{award.description}</p>

              <div className="mt-4 flex items-center gap-3">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                             bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {award.category}
                </span>
                <award.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
