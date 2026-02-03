'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NewsItem {
  date: string; // YYYY-MM-DD
  content: string;
  isHighlight?: boolean;
  link?: {
    url: string;
    text: string;
  };
  links?: {
    url: string;
    text: string;
  }[];
  location?: string;
  conference?: string;
  subtitle?: string;
}

const unsortedNewsItems: NewsItem[] = [
  {
    date: '2025-12-15',
    content: 'Received Employee of the Year award at Athlete Den',
    isHighlight: true,
    link: {
      url: '/awards',
      text: 'View Award'
    },
    location: 'New York, USA'
  },
  {
    date: '2025-11-10',
    content: 'Received Eminence Award 2025 (MS Best Paper) from Tennessee Tech University',
    isHighlight: true,
    link: {
      url: '/awards',
      text: 'View Award'
    },
    location: 'Cookeville, TN, USA'
  },
  {
    date: '2025-06-04',
    content: 'Presented paper "SmishViz: Towards A Graph-based Visualization System for Monitoring and Characterizing Ongoing Smishing Threats" at ACM CODASPY 2025',
    isHighlight: true,
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3714393.3726499',
        text: 'View Paper'
      },
      {
        url: 'https://smishviz.com',
        text: 'View Demo'
      }
    ],
    location: 'Pittsburgh, PA, USA',
    conference: 'ACM CODASPY 2025'
  },
  {
    date: '2024-05-20',
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
    date: '2024-05-14',
    content: 'Started as Full Time Software Engineer at Athlete Den LLC',
    isHighlight: true,
    link: {
      url: '/projects#athlete-den',
      text: 'View Project'
    },
    location: 'New York, USA'
  },
  {
    date: '2024-05-14',
    content: 'AbuseGPT paper published in IEEE Xplore Digital Library',
    isHighlight: true,
    link: {
      url: 'https://ieeexplore.ieee.org/abstract/document/10527300',
      text: 'View Publication'
    }
  },
  {
    date: '2024-04-29',
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
    date: '2024-03-31',
    content: 'Successfully defended MS Thesis on Cybersecurity and AI',
    subtitle: 'Smishing (SMS Phishing) Attacks and Defenses: Current Concerns, Campaign Infrastructures, and Towards A Scoring-based Defense System',
    isHighlight: true,
    location: 'Tennessee Tech University, TN, USA'
  },
  {
    date: '2024-02-10',
    content: 'Volunteered as First Lego League Robotics competition manager',
    location: 'Tennessee Tech University, TN, USA'
  },
  {
    date: '2023-12-15',
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
  const formatDate = (date: string) => {
    const [year, month, day] = date.split('-').map(Number);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[month - 1]} ${day}, ${year}`;
  };

  const openExternal = (url: string) => {
    const popup = window.open(url, '_blank', 'noopener,noreferrer');
    if (popup) popup.opener = null;
  };

  return (
    <div className="py-6">
      <motion.h2
        initial={false}
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
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((item, index) => (
            <motion.div
              key={index}
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex"
            >
              {/* Date column */}
              <div className="flex-none w-[120px] text-xs whitespace-nowrap text-gray-500 dark:text-gray-400 text-right pr-4 self-center">
                {formatDate(item.date)}
              </div>

              {/* Timeline dot */}
              <div className={`
                absolute left-[109px] top-1/2 -translate-y-1/2 z-10
                w-4 h-4 rounded-full border-2 border-white dark:border-gray-800
                ${item.isHighlight
                  ? 'bg-blue-500 dark:bg-blue-400'
                  : 'bg-gray-300 dark:bg-gray-600'}
              `} />

              {/* Content */}
              <div 
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the card click
                    if (item.link?.url) {
                      openExternal(item.link.url);
                    } else if (item.links && item.links.length === 1) {
                      openExternal(item.links[0].url);
                    }
                  }}
                className={`
                  flex-grow ml-8 p-4 rounded-lg transition-all duration-300
                  ${item.isHighlight
                    ? 'bg-blue-50 dark:bg-blue-900/30'
                    : 'bg-white dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-700'}
                  ${(item.link || (item.links && item.links.length === 1)) ? 'cursor-pointer hover:shadow-md' : ''}
              `}>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <p className={`
                        font-medium
                        ${item.isHighlight
                          ? 'text-blue-800 dark:text-blue-200'
                          : 'text-gray-900 dark:text-gray-100'}
                      `}>
                        {item.content}
                        {item.isHighlight && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
                            New
                          </span>
                        )}
                      </p>

                      {item.links ? (
                        <div className="flex-none flex gap-2 flex-wrap">
                          {item.links.map((link, linkIndex) => (
                            <button
                              key={linkIndex}
                              onClick={(e) => {
                                e.stopPropagation();
                                openExternal(link.url);
                              }}
                              className="text-sm text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap focus:outline-none group/link"
                            >
                              {link.text}
                              <svg className="inline-block w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </button>
                          ))}
                        </div>
                      ) : item.link && (
                        <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the card click
                            if (item.link?.url) {
                              openExternal(item.link.url);
                            }
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
