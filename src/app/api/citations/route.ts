// src/app/api/citations/route.ts
import { NextResponse } from 'next/server';
import { publications } from '@/data/publications';

async function searchPaper(paper: typeof publications[0], retryCount = 0): Promise<any> {
  try {
    // Add exponential backoff delay
    if (retryCount > 0) {
      const delay = Math.pow(2, retryCount) * 1000; // 2s, 4s, 8s, etc.
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    const query = encodeURIComponent(`${paper.title} ${paper.authors[0]}`);
    const response = await fetch(
      `https://api.semanticscholar.org/graph/v1/paper/search?query=${query}&fields=title,year,citationCount`,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    // Handle rate limiting
    if (response.status === 429 && retryCount < 3) {
      return searchPaper(paper, retryCount + 1);
    }

    if (!response.ok) {
      // Return paper without citation count on error
      return {
        id: paper.id,
        citationCount: 0
      };
    }

    const data = await response.json();
    const matchedPaper = data.data?.[0];

    return {
      id: paper.id,
      citationCount: matchedPaper?.citationCount || 0
    };
  } catch (error) {
    console.error(`Error searching for paper "${paper.title}":`, error);
    // Return paper without citation count on error
    return {
      id: paper.id,
      citationCount: 0
    };
  }
}

export async function GET() {
  try {
    // Process papers sequentially with delays
    const results = [];
    for (const paper of publications) {
      const result = await searchPaper(paper);
      results.push(result);
      // Add delay between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json(results, {
      headers: {
        'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Failed to fetch citations:', error);
    // Return all papers with 0 citations on error
    const fallbackResults = publications.map(paper => ({
      id: paper.id,
      citationCount: 0
    }));
    return NextResponse.json(fallbackResults);
  }
}