// src/app/publications/page.tsx
import PublicationCard from '@/components/publications/PublicationCard';

const publications = [
  {
    title: "Use of LLM-based Generative AI Chatbots for Smishing Attacks and Defenses",
    authors: ["A. M. Shibli", "M. M. A. Pritom"],
    venue: "2024 45th IEEE Symposium on Security and Privacy",
    year: 2024,
    type: "Poster",
    link: "https://sp2024.ieee-security.org/downloads/SP24-posters/sp24posters-final19.pdf",
    description: "Research on using LLM-based chatbots for detecting and defending against SMS-based phishing attacks."
  },
  {
    title: "AbuseGPT: Abuse of Generative AI ChatBots to Create Smishing Campaigns",
    authors: ["A. M. Shibli", "M. M. A. Pritom", "M. Gupta"],
    venue: "2024 12th International Symposium on Digital Forensics and Security (ISDFS)",
    year: 2024,
    type: "Conference",
    doi: "10.1109/ISDFS60797.2024.10527300",
    description: "Groundbreaking research exploring the intersection of generative AI and cybersecurity threats, focusing on SMS-based phishing campaigns."
  },
  {
    title: "Survey on Security Attacks in Connected and Autonomous Vehicular Systems",
    authors: ["S. M. Mostaq Hossain", "S. Banik", "T. Banik", "A. M. Shibli"],
    venue: "2023 IEEE International Conference on Computing (ICOCO)",
    year: 2023,
    type: "Conference",
    doi: "10.1109/ICOCO59262.2023.10397929",
    description: "Comprehensive survey of security vulnerabilities and attack vectors in connected and autonomous vehicles."
  },
  {
    title: "Developing a Vision-Based Driving Assistance System",
    authors: ["Shibli, A.M.", "Hoque, M.M.", "Alam, L."],
    venue: "Emerging Technologies in Data Mining and Information Security, Advances in Intelligent Systems and Computing",
    year: 2019,
    type: "Book Chapter",
    doi: "10.1007/978-981-13-1951-8_71",
    publisher: "Springer",
    description: "Development of a computer vision-based system for monitoring driver attention and providing real-time assistance."
  }
];

export default function PublicationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Recent Publications</h2>
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Research Impact</h2>
        <p className="text-gray-600">
          My research focuses on cybersecurity, particularly in mobile security and autonomous systems. 
          Recent work explores the intersection of AI and security, investigating both potential threats 
          and defensive applications of emerging technologies.
        </p>
      </div>
    </div>
  );
}