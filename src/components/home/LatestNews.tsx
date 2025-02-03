'use client';

import React from 'react';
import { motion } from 'framer-motion';

// News item type definition
interface NewsItem {
  date: Date;
  content: string;
  isHighlight?: boolean;
}

const unsortedNewsItems: NewsItem[] = [
  {
    date: new Date('2024-05-15'),
    content: '🎯 Started as Full Time Software Engineer at Athlete Den LLC',
    isHighlight: true
  },
  {
    date: new Date('2024-05-15'),
    content: '📝 AbuseGPT paper published in IEEE Xplore Digital Library',
    isHighlight: true
  },
  {
    date: new Date('2024-05-20'),
    content: '🎯 Presented research poster at IEEE S&P 2024 in San Francisco',
    isHighlight: true
  },
  {
    date: new Date('2024-04-30'),
    content: '🎤 Presented AbuseGPT paper at IEEE ISDFS 2024',
    isHighlight: true
  },
  {
    date: new Date('2024-04-01'),
    content: '🎓 Successfully defended MS Thesis on SMS Phishing Detection',
    isHighlight: true
  },
  {
    date: new Date('2024-02-10'),
    content: '🤖 Volunteered as First Lego League Robotics competition manager at Tennessee Tech',
  },
  {
    date: new Date('2024-01-10'),
    content: '📝 Published research paper in IEEE ISDFS 2024',
  }
];

export default function LatestNews() {
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

  const isRecent = (date: Date) => date >= threeMonthsAgo;

  return (
    <div className="py-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
      >
        Latest News
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {[...unsortedNewsItems]
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`
              p-4 rounded-lg shadow-md transition-all duration-300
              ${item.isHighlight || isRecent(item.date)
                ? 'bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500'
                : 'bg-white dark:bg-gray-800'}
              ${isRecent(item.date) ? 'transform hover:scale-102' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
            `}
          >
            <div className="flex items-start gap-4">
              <div className="min-w-[100px] text-sm text-gray-500 dark:text-gray-400">
                {item.date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex-1">
                <p className={`
                  ${item.isHighlight || isRecent(item.date)
                    ? 'text-blue-800 dark:text-blue-200 font-medium'
                    : 'text-gray-700 dark:text-gray-300'}
                `}>
                  {item.content}
                  {(item.isHighlight || isRecent(item.date)) && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
                      New
                    </span>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}