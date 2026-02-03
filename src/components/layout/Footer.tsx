// src/components/layout/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: shibli.emon@gmail.com</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ashfakshibli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ashfak-md-shibli/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://scholar.google.com/citations?user=-Py4nOsAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <SiGooglescholar className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#publications" className="text-gray-300 hover:text-white">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-300 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#awards" className="text-gray-300 hover:text-white">
                  Awards
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Ashfak Md Shibli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
