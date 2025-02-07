// src/app/publications/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const publications = [
  {
    title: "Use of LLM-based Generative AI Chatbots for Smishing Attacks and Defenses",
    authors: ["A. M. Shibli", "M. M. A. Pritom"],
    venue: "45th IEEE Symposium on Security and Privacy",
    venueShort: "IEEE S&P",
    year: 2024,
    location: "San Francisco, CA",
    logo: "/images/logos/IEEE_SP.png",
    type: "Poster",
    link: "https://sp2024.ieee-security.org/downloads/SP24-posters/sp24posters-final19.pdf",
    description: "Novel research on generative AI for SMS phishing detection and defense",
    tags: ["AI/ML", "Cybersecurity", "LLMs"]
  },
  {
    title: "AbuseGPT: Abuse of Generative AI ChatBots to Create Smishing Campaigns",
    authors: ["A. M. Shibli", "M. M. A. Pritom", "M. Gupta"],
    venue: "12th International Symposium on Digital Forensics and Security",
    venueShort: "ISDFS",
    year: 2024,
    location: "San Antonio, TX",
    logo: "/images/logos/ieee.jpg",
    type: "Conference",
    link: "https://ieeexplore.ieee.org/document/10527300",
    doi: "10.1109/ISDFS60797.2024.10527300",
    description: "Research on AI-driven security threats in mobile communications",
    tags: ["Security", "AI", "Mobile"]
  },
  {
    title: "Survey on Security Attacks in Connected and Autonomous Vehicular Systems",
    authors: ["S. M. Mostaq Hossain", "S. Banik", "T. Banik", "A. M. Shibli"],
    venue: "IEEE International Conference on Computing",
    venueShort: "ICOCO",
    year: 2023,
    location: "Langkawi, Malaysia",
    logo: "/images/logos/ieee.jpg",
    type: "Conference",
    link: "https://ieeexplore.ieee.org/document/10397929",
    doi: "10.1109/ICOCO59262.2023.10397929",
    description: "Comprehensive analysis of autonomous vehicle security vulnerabilities",
    tags: ["Security", "IoT", "Vehicles"]
  },
  {
    title: "Developing a Vision-Based Driving Assistance System",
    authors: ["Shibli, A.M.", "Hoque, M.M.", "Alam, L."],
    venue: "Emerging Technologies in Data Mining and Information Security",
    venueShort: "Springer AISC",
    year: 2019,
    logo: "/images/logos/springer.jpg",
    type: "Book Chapter",
    link: "https://doi.org/10.1007/978-981-13-1951-8_71",
    doi: "10.1007/978-981-13-1951-8_71",
    publisher: "Springer",
    description: "Computer vision system for real-time driver monitoring",
    tags: ["Computer Vision", "AI", "Safety"]
  }
];

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Research work in AI, Cybersecurity, and Computer Vision
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => window.open(pub.link, '_blank')}
              className="rounded-lg border border-gray-200 dark:border-gray-700
                        bg-white dark:bg-gray-800 p-6 
                        shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                        dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)]
                        transition-all duration-300 hover:scale-[1.01] cursor-pointer
                        hover:shadow-lg dark:hover:shadow-gray-700/30"
            >
              <div className="flex items-start gap-6">
                {/* Logo Section */}
                <div className="relative w-16 h-16 flex-shrink-0 bg-white dark:bg-white rounded-xl shadow-md overflow-hidden">
                  <Image
                    src={pub.logo}
                    alt={pub.venueShort}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex-1">
                  {/* Title and Links */}
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white 
                                 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {pub.title}
                    </h2>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(pub.link, '_blank');
                      }}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 
                               dark:hover:text-blue-300 transition-colors flex-shrink-0
                               hover:bg-blue-50 dark:hover:bg-blue-900/30 p-2 rounded-lg"
                      aria-label="View Publication"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Authors */}
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {pub.authors.join(", ")}
                  </p>

                  {/* Venue Info */}
                  <div className="mt-2">
                    <p className="text-sm text-gray-900 dark:text-white font-medium">
                      {pub.venue} ({pub.venueShort})
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {`${pub.year}${pub.location ? ` · ${pub.location}` : ''}`}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {pub.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full 
                                 text-sm font-medium bg-blue-50 text-blue-700 
                                 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full 
                               text-sm font-medium bg-gray-100 text-gray-700 
                               dark:bg-gray-700 dark:text-gray-300"
                    >
                      {pub.type}
                    </span>
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