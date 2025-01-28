// src/app/projects/page.tsx
import ProjectCard from '@/components/projects/ProjectCard';

const projects = [
  {
    title: 'AthleteDen AI Sports Analysis',
    period: '2023-Current',
    description: 'AI-powered sports analytics platform using machine learning and computer vision.',
    technologies: ['Swift', 'Python', 'CoreML', 'Vision', 'Firebase'],
    highlights: [
      'Developed camera feed to detect athlete activity like baseball',
      'Trained and optimized ML model for mobile platform',
      'Implemented server-side data handling for the application',
      'Patent-pending technology for sports performance analysis'
    ],
    category: 'Professional'
  },
  {
    title: 'SMS Phishing Detection Research',
    period: '2023',
    description: 'Comprehensive system for detecting and preventing SMS-based phishing attacks.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Explainable AI'],
    highlights: [
      'Created novel Smish Score system for threat detection',
      'Analyzed various SMS phishing patterns',
      'Integrated with ChatGPT and other AI models',
      'Published research at IEEE conferences'
    ],
    category: 'Research'
  },
  {
    title: 'Samsung Family Hub',
    period: '2018-2022',
    description: 'Smart refrigerator application with cloud integration and real-time updates.',
    technologies: ['Swift', 'Realm DB', 'Firebase'],
    highlights: [
      'Developed layered REST API communications',
      'Engineered robust database system with 99% crash reduction',
      'Implemented comprehensive error handling and notifications',
      'Maintained 13% test coverage for critical components'
    ],
    category: 'Professional'
  },
  {
    title: 'Samsung Galaxy Buds Windows App',
    period: '2020-2022',
    description: 'Windows application for Samsung Galaxy Buds with firmware update capabilities.',
    technologies: ['C#', '.NET', 'Bluetooth', 'REST APIs'],
    highlights: [
      'Implemented secure Bluetooth communication protocols',
      'Developed encrypted data transmission system',
      'Created FOTA update mechanism',
      'Maintained 15% unit test coverage'
    ],
    category: 'Professional'
  },
  {
    title: 'Healthcare Data Protection Research',
    period: '2022',
    description: 'Analysis of Protected Health Information (PHI) leakage in applications.',
    technologies: ['Python', 'Java', 'Static Analysis'],
    highlights: [
      'Developed automated static analysis system',
      'Implemented STRIDE threat modeling',
      'Created comprehensive dataset of PHI leakage patterns',
      'Enhanced healthcare application security'
    ],
    category: 'Research'
  },
  {
    title: 'Vision-Based Driving Assistance',
    period: '2017',
    description: 'Driver attention monitoring system using computer vision.',
    technologies: ['OpenCV', 'Dlib', 'Deepgaze', 'Java', 'Python'],
    highlights: [
      'Implemented face and gaze direction detection',
      'Achieved 89% accuracy in real-world testing',
      'Won Best Paper award at conference',
      'Created practical demonstration system'
    ],
    category: 'Research'
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      {/* Project Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Professional Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter(project => project.category === 'Professional')
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Research Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter(project => project.category === 'Research')
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}