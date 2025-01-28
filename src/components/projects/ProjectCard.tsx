// src/components/projects/ProjectCard.tsx
interface ProjectCardProps {
    project: {
      title: string;
      period: string;
      description: string;
      technologies: string[];
      highlights: string[];
      category: 'Professional' | 'Research';
    };
  }
  
  export default function ProjectCard({ project }: ProjectCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {project.period}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="text-sm">{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }