'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NewsItem {
  date: Date;
  content: string;
  isHighlight?: boolean;
  link?: {
    url: string;
    text: string;
  };
  location?: string;
  conference?: string;
  subtitle?: string;
}

const unsortedNewsItems: NewsItem[] = [
  {
    date: new Date('2024-05-20'),
    content: 'Presented research poster on SMS Phishing Detection using LLMs',
    isHighlight: true,
    link: {
      url: 'https://sp2024.ieee-security.org/downloads/SP24-posters/sp24posters-final19.pdf',
      text: 'View Poster'
    },
    location: 'San Francisco, CA, USA',
    conference: '45th IEEE Symposium on Security and Privacy (IEEE S&P)'
  },
  {
    date: new Date('2024-05-14'),
    content: 'Started as Full Time Software Engineer at Athlete Den LLC',
    isHighlight: true,
    link: {
      url: '/projects#athlete-den',
      text: 'View Project'
    },
    location: 'New York, USA'
  },
  {
    date: new Date('2024-05-14'),
    content: 'AbuseGPT paper published in IEEE Xplore Digital Library',
    isHighlight: true,
    link: {
      url: 'https://ieeexplore.ieee.org/abstract/document/10527300',
      text: 'View Publication'
    }
  },
  {
    date: new Date('2024-04-29'),
    content: 'Presented AbuseGPT paper',
    isHighlight: true,
    location: 'San Antonio, TX, USA',
    conference: '12th International Symposium on Digital Forensics and Security (IEEE ISDFS)',
    link: {
      url: 'https://ieeexplore.ieee.org/abstract/document/10527300',
      text: 'View Paper'
    }
  },
  {
    date: new Date('2024-03-31'),
    content: 'Successfully defended MS Thesis on Cybersecurity and AI',
    subtitle: 'Smishing (SMS Phishing) Attacks and Defenses: Current Concerns, Campaign Infrastructures, and Towards A Scoring-based Defense System',
    isHighlight: true,
    location: 'Tennessee Tech University, TN, USA'
  },
  {
    date: new Date('2024-02-10'),
    content: 'Volunteered as First Lego League Robotics competition manager',
    location: 'Tennessee Tech University, TN, USA'
  },
  {
    date: new Date('2023-12-15'),
    content: 'Survey paper on Connected and Autonomous Vehicles Security published',
    link: {
      url: 'https://ieeexplore.ieee.org/abstract/document/10397929',
      text: 'View Paper'
    },
    conference: 'IEEE International Conference on Computing (ICOCO)',
    location: 'Langkawi, Malaysia'
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

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-[116px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-6">
          {[...unsortedNewsItems]
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex"
            >
              {/* Date column */}
              <div className="flex-none w-[120px] text-xs whitespace-nowrap text-gray-500 dark:text-gray-400 text-right pr-4 self-center">
                {item.date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>

              {/* Timeline dot */}
              <div className={`
                absolute left-[109px] top-1/2 -translate-y-1/2 z-10
                w-4 h-4 rounded-full border-2 border-white dark:border-gray-800
                ${item.isHighlight || isRecent(item.date)
                  ? 'bg-blue-500 dark:bg-blue-400'
                  : 'bg-gray-300 dark:bg-gray-600'}
              `} />

              {/* Content */}
              <div 
                onClick={() => item.link && window.open(item.link.url, '_blank')}
                className={`
                  flex-grow ml-8 p-4 rounded-lg transition-all duration-300
                  ${item.isHighlight || isRecent(item.date)
                    ? 'bg-blue-50 dark:bg-blue-900/30'
                    : 'bg-white dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-700'}
                  ${item.link ? 'cursor-pointer hover:shadow-md' : ''}
              `}>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <p className={`
                        font-medium
                        ${item.isHighlight || isRecent(item.date)
                          ? 'text-blue-800 dark:text-blue-200'
                          : 'text-gray-900 dark:text-gray-100'}
                      `}>
                        {item.content}
                        {(item.isHighlight || isRecent(item.date)) && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
                            New
                          </span>
                        )}
                      </p>

                      {item.link && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the card click
                            window.open(item.link.url, '_blank');
                          }}
                          className="flex-none text-sm text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap focus:outline-none group/link"
                        >
                          {item.link.text}
                          <svg className="inline-block w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    {item.subtitle && (
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 italic">
                        {item.subtitle}
                      </p>
                    )}
                    
                    <div className="mt-1 text-sm space-y-0.5">
                      {item.location && (
                        <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
                      )}
                      {item.conference && (
                        <p className="text-gray-500 dark:text-gray-500 italic">{item.conference}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}