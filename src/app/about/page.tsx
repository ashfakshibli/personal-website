// src/app/about/page.tsx
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/images/profile.jpg" // Add your profile image
              alt="Ashfak Md Shibli"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="https://github.com/ashfakshibli" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/ashfak-md-shibli/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900">
              <FaGoogle className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              I am a Software Engineer and Computer Science Researcher specializing in artificial intelligence,
              cybersecurity, and software engineering. With a Master's degree in Computer Science (4.0/4.0 GPA)
              from Tennessee Tech University and New Jersey Institute of Technology, I combine academic excellence
              with practical industry experience.
            </p>
            <p className="text-lg mb-4">
              Currently, I'm leading the development of patent-pending AI technology at AthleteDen, focusing on
              innovative solutions in sports analytics through machine learning and computer vision.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-xl">Master of Science in Computer Science</h3>
            <p className="text-gray-600">Tennessee Tech University & New Jersey Institute of Technology</p>
            <p className="text-gray-600">2022-2024 | GPA: 4.00/4.00</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-xl">Bachelor of Science in Computer Science and Engineering</h3>
            <p className="text-gray-600">Chittagong University of Engineering and Technology</p>
            <p className="text-gray-600">2013-2017 | GPA: 3.53/4.00</p>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-3">Cybersecurity</h3>
            <p className="text-gray-600">
              SMS phishing detection, mobile security, and threat modeling for healthcare applications
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-3">Machine Learning</h3>
            <p className="text-gray-600">
              Computer vision, deep learning for sports analytics, and activity detection
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-3">Software Engineering</h3>
            <p className="text-gray-600">
              Mobile application development, cloud architecture, and secure system design
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-xl">Software Engineer</h3>
            <p className="text-gray-600">AthleteDen | 2023-Present</p>
            <ul className="list-disc list-inside mt-3 text-gray-600">
              <li>Leading development of patent-pending AI sports technology</li>
              <li>Implementing computer vision solutions for athletic performance analysis</li>
              <li>Developing mobile applications with ML integration</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-xl">Lead Software Engineer</h3>
            <p className="text-gray-600">Samsung R&D Institute | 2018-2022</p>
            <ul className="list-disc list-inside mt-3 text-gray-600">
              <li>Led development of major applications including Family Hub and Galaxy Buds</li>
              <li>Managed innovation initiatives and technical knowledge base</li>
              <li>Implemented security-focused solutions and automated testing frameworks</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}