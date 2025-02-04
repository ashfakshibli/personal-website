// src/components/publications/PublicationCard.tsx
import { motion } from 'framer-motion';
import { FiExternalLink, FiLoader } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import Image from 'next/image';

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: string;
  link?: string;
  doi?: string;
  description?: string;
  image?: string;
}

interface PublicationCardProps {
  publication: Publication;
  citationCount?: number;
  isLoadingCitations?: boolean;
}

export default function PublicationCard({ 
  publication, 
  citationCount, 
  isLoadingCitations = false 
}: PublicationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
      <div className="p-4">
        <div className="flex gap-4">
          {/* Left Column */}
          <div className="flex-grow">
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {publication.title}
            </h3>

            {/* Authors */}
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {publication.authors.join(', ')}
            </p>

            {/* Venue */}
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 italic">
              {publication.venue}
            </p>

            {/* Description */}
            {publication.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {publication.description}
              </p>
            )}

            {/* Links */}
            <div className="mt-3 flex flex-wrap items-center gap-4">
              {publication.type && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {publication.type}
                </span>
              )}

              {publication.link && (
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <FiExternalLink className="w-4 h-4" />
                  View Paper
                </a>
              )}

              {publication.doi && (
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  DOI
                </a>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-end gap-2 min-w-[120px]">
            {/* Year */}
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {publication.year}
            </span>

            {/* Image */}
            <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 p-2">
              <Image
                src={publication.image || '/api/placeholder/200/200'}
                alt={publication.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Citations */}
            {isLoadingCitations ? (
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <SiGooglescholar className="w-4 h-4" />
                <FiLoader className="w-4 h-4 animate-spin" />
              </div>
            ) : citationCount !== undefined ? (
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                <SiGooglescholar className="w-4 h-4" />
                {citationCount} citations
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}