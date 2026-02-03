'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  location?: string;
  logo?: string;
  type: string;
  link?: string;
  description: string;
  tags: string[];
}

const underReviewPublications: Publication[] = [
  {
    title: 'Secure Yet Fragile: Adversarial Vulnerabilities of Federated Vision-Language Models in Medical AI',
    authors: ['A. M. Shibli', 'A. Imteaj', 'et al.'],
    venue: 'Nature Scientific Reports',
    venueShort: 'Nature Sci Reports',
    year: 2026,
    logo: '/images/logos/springer.jpg',
    type: 'Under Review',
    description: 'Journal manuscript on adversarial vulnerabilities in federated VLM systems for medical AI.',
    tags: ['AI Security', 'Medical AI', 'VLMs', 'Federated Learning']
  },
  {
    title: 'IterVLM: An Iterative Evaluation Framework for Vision-Language Models',
    authors: ['A. M. Shibli', 'et al.'],
    venue: 'Manuscript',
    venueShort: 'IterVLM',
    year: 2026,
    logo: '/images/logos/ieee.jpg',
    type: 'Under Review',
    description: 'Framework for iterative generator-evaluator analysis and quality tracking in VLM pipelines.',
    tags: ['VLMs', 'Evaluation', 'Multimodal AI', 'Iterative Systems']
  },
  {
    title: 'Short Message Service (SMS) Phishing: Attack Characterization, Defense Landscape, and Future Directions',
    authors: ['M. M. A. Pritom', 'A. M. Shibli', 'S. M. M. Hossain', 'M. Mia', 'S. M. Sanjari'],
    venue: 'IEEE Access',
    venueShort: 'IEEE Access',
    year: 2025,
    logo: '/images/logos/ieee.jpg',
    type: 'Under Review',
    description: 'Comprehensive study of SMS phishing attacks, current defenses, and open research directions.',
    tags: ['Smishing', 'Cybersecurity', 'Threat Modeling', 'Defense']
  }
];

const publishedPublications: Publication[] = [
  {
    title: 'SmishViz: Towards A Graph-based Visualization System for Monitoring and Characterizing Ongoing Smishing Threats',
    authors: ['Seyed Mohammad Sanjari', 'Ashfak Md Shibli', 'Maraz Mia', 'Maanak Gupta', 'Mir Mehedi Ahsan Pritom'],
    venue: 'ACM Conference on Data and Application Security and Privacy',
    venueShort: 'ACM CODASPY',
    year: 2025,
    location: 'Pittsburgh, PA',
    logo: '/images/logos/acm.gif',
    type: 'Conference',
    link: 'https://dl.acm.org/doi/10.1145/3714393.3726499',
    description: 'Graph-based visualization system for monitoring and characterizing ongoing smishing threats. Visualization software: https://smishviz.com/',
    tags: ['Security', 'Visualization', 'Smishing', 'Graph']
  },
  {
    title: 'Use of LLM-based Generative AI Chatbots for Smishing Attacks and Defenses',
    authors: ['A. M. Shibli', 'M. M. A. Pritom'],
    venue: '45th IEEE Symposium on Security and Privacy',
    venueShort: 'IEEE S&P',
    year: 2024,
    location: 'San Francisco, CA',
    logo: '/images/logos/IEEE_SP.png',
    type: 'Poster',
    link: 'https://sp2024.ieee-security.org/downloads/SP24-posters/sp24posters-final19.pdf',
    description: 'Novel research on generative AI for SMS phishing detection and defense.',
    tags: ['AI/ML', 'Cybersecurity', 'LLMs']
  },
  {
    title: 'AbuseGPT: Abuse of Generative AI ChatBots to Create Smishing Campaigns',
    authors: ['A. M. Shibli', 'M. M. A. Pritom', 'M. Gupta'],
    venue: '12th International Symposium on Digital Forensics and Security',
    venueShort: 'ISDFS',
    year: 2024,
    location: 'San Antonio, TX',
    logo: '/images/logos/ieee.jpg',
    type: 'Conference',
    link: 'https://ieeexplore.ieee.org/document/10527300',
    description: 'Research on AI-driven security threats in mobile communications.',
    tags: ['Security', 'AI', 'Mobile']
  },
  {
    title: 'Survey on Security Attacks in Connected and Autonomous Vehicular Systems',
    authors: ['S. M. Mostaq Hossain', 'S. Banik', 'T. Banik', 'A. M. Shibli'],
    venue: 'IEEE International Conference on Computing',
    venueShort: 'ICOCO',
    year: 2023,
    location: 'Langkawi, Malaysia',
    logo: '/images/logos/ieee.jpg',
    type: 'Conference',
    link: 'https://ieeexplore.ieee.org/document/10397929',
    description: 'Comprehensive analysis of autonomous vehicle security vulnerabilities.',
    tags: ['Security', 'IoT', 'Vehicles']
  },
  {
    title: 'Developing a Vision-Based Driving Assistance System',
    authors: ['Shibli, A.M.', 'Hoque, M.M.', 'Alam, L.'],
    venue: 'Emerging Technologies in Data Mining and Information Security',
    venueShort: 'Springer AISC',
    year: 2019,
    logo: '/images/logos/springer.jpg',
    type: 'Book Chapter',
    link: 'https://doi.org/10.1007/978-981-13-1951-8_71',
    description: 'Computer vision system for real-time driver monitoring.',
    tags: ['Computer Vision', 'AI', 'Safety']
  }
];

function PublicationCard({ pub, delay }: { pub: Publication; delay: number }) {
  const hasLink = Boolean(pub.link);
  const openLink = () => {
    if (pub.link) {
      window.open(pub.link, '_blank');
    }
  };

  return (
    <motion.div
      key={pub.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onClick={hasLink ? openLink : undefined}
      className={`rounded-lg border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-800 p-6
                shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)]
                transition-all duration-300 hover:scale-[1.01]
                ${hasLink ? 'cursor-pointer hover:shadow-lg dark:hover:shadow-gray-700/30' : ''}`}
    >
      <div className="flex items-start gap-6">
        <div className="relative w-16 h-16 flex-shrink-0 bg-white dark:bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center">
          {pub.logo ? (
            <Image
              src={pub.logo}
              alt={pub.venueShort}
              fill
              className="object-contain p-2"
            />
          ) : (
            <FaFileAlt className="w-6 h-6 text-gray-500" />
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {pub.title}
            </h2>

            {hasLink && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openLink();
                }}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400
                         dark:hover:text-blue-300 transition-colors flex-shrink-0
                         hover:bg-blue-50 dark:hover:bg-blue-900/30 p-2 rounded-lg"
                aria-label="View Publication"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </button>
            )}
          </div>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {pub.authors.join(', ')}
          </p>

          <div className="mt-2">
            <p className="text-sm text-gray-900 dark:text-white font-medium">
              {pub.venue} ({pub.venueShort})
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {`${pub.year}${pub.location ? ` · ${pub.location}` : ''}`}
            </p>
          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {pub.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {pub.tags.map((tag) => (
              <span
                key={`${pub.title}-${tag}`}
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
  );
}

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Research work in AI, Cybersecurity, and Computer Vision
          </p>
        </motion.div>

        <section className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Under Review
          </motion.h2>
          <div className="space-y-8">
            {underReviewPublications.map((pub, index) => (
              <PublicationCard
                key={pub.title}
                pub={pub}
                delay={index * 0.08}
              />
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Published
          </motion.h2>
          <div className="space-y-8">
            {publishedPublications.map((pub, index) => (
              <PublicationCard
                key={pub.title}
                pub={pub}
                delay={0.2 + index * 0.08}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
