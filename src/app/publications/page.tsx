// src/app/publications/page.tsx
'use client';
'use client';

import { useState, useEffect } from 'react';
import PublicationCard from '@/components/publications/PublicationCard';
import { publications } from '@/data/publications';

type CitationData = {
  [key: string]: number;
};

export default function PublicationsPage() {
  const [citations, setCitations] = useState<CitationData>({});
  const [loadingCitations, setLoadingCitations] = useState(true);

  useEffect(() => {
    const fetchCitations = async () => {
      try {
        const response = await fetch('/api/citations');
        if (!response.ok) throw new Error('Failed to fetch citations');
        const data = await response.json();
        
        // Convert array to object with id as key
        const citationMap = data.reduce((acc: CitationData, paper: any) => {
          acc[paper.id] = paper.citationCount || 0;
          return acc;
        }, {});
        
        setCitations(citationMap);
      } catch (err) {
        console.error('Error fetching citations:', err);
      } finally {
        setLoadingCitations(false);
      }
    };

    fetchCitations();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Publications
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Recent research in cybersecurity and AI
        </p>
      </div>

      <div className="space-y-4">
        {publications.map((publication) => (
          <PublicationCard 
            key={publication.id}
            publication={publication}
            citationCount={citations[publication.id]}
            isLoadingCitations={loadingCitations}
          />
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>Citation data provided by Semantic Scholar</p>
      </div>
    </div>
  );
}