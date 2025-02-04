// src/components/publications/PublicationCard.tsx
interface PublicationCardProps {
    publication: {
      title: string;
      authors: string[];
      venue: string;
      year: number;
      type: 'Conference' | 'Journal' | 'Poster' | 'Book Chapter';
      doi?: string;
      link?: string;
      description: string;
      publisher?: string;
    };
  }
  
  export default function PublicationCard({ publication }: PublicationCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="p-6">
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-900">{publication.title}</h3>
              <span 
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                  publication.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                  publication.type === 'Journal' ? 'bg-green-100 text-green-800' :
                  publication.type === 'Poster' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}
              >
                {publication.type}
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              {publication.authors.join(', ')}
            </p>
          </div>
  
          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">Venue:</span> {publication.venue}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Year:</span> {publication.year}
              {publication.publisher && ` • ${publication.publisher}`}
            </p>
          </div>
  
          <p className="text-gray-600 mb-4">
            {publication.description}
          </p>
  
          <div className="flex gap-4">
            {publication.doi && (
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                DOI: {publication.doi}
              </a>
            )}
            {publication.link && (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Publication
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }