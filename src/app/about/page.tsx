'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaCode,
  FaGraduationCap
} from 'react-icons/fa';

interface EducationItem {
  logo?: string;
  school: string;
  degree: string;
  year: string;
  gpa?: string;
  focus: string;
}

interface ExperienceItem {
  logo?: string;
  organization: string;
  role: string;
  year: string;
  focus: string;
  tools: string[];
}

const educationInfo: EducationItem[] = [
  {
    logo: '/images/logos/tntech.png',
    school: 'Tennessee Technological University',
    degree: 'M.S. in Computer Science',
    year: 'Aug 2023 – Jul 2024',
    gpa: '4.00/4.00',
    focus: 'Graduate research in AI and cybersecurity. Degree conferred July 26, 2024.'
  },
  {
    logo: '/images/logos/njit.png',
    school: 'New Jersey Institute of Technology',
    degree: 'Graduate Studies in Computer Science',
    year: 'Sep 2022 – Aug 2023',
    focus: 'Graduate study and research in healthcare security, static analysis, and threat modeling before transferring to Tennessee Tech.'
  },
  {
    logo: '/images/logos/CUET_logo.png',
    school: 'Chittagong University of Engineering and Technology',
    degree: 'BSc in Computer Science and Engineering',
    year: 'Mar 2013 - Nov 2017',
    gpa: '3.53/4.00',
    focus: 'Core software engineering and systems background.'
  }
];

const experienceInfo: ExperienceItem[] = [
  {
    logo: '/images/logos/athleteden.png',
    organization: 'Athlete Den',
    role: 'Software Engineer',
    year: 'May 2024 - Current',
    focus: 'Leading ML pipeline architecture, production AI workflows, and analytics infrastructure.',
    tools: ['Python', 'PyTorch', 'Google Cloud', 'Firebase', 'Computer Vision']
  },
  {
    logo: '/images/logos/athleteden.png',
    organization: 'Athlete Den',
    role: 'Software Engineer Intern',
    year: 'May 2023 - Aug 2023',
    focus: 'Built early model-training and data-labeling workflows for sports analytics prototypes.',
    tools: ['Python', 'Labeling Pipeline', 'GCP', 'Data Processing']
  },
  {
    logo: '/images/logos/tntech.png',
    organization: 'Tennessee Technological University',
    role: 'Graduate Teaching Assistant',
    year: 'Aug 2023 - May 2024',
    focus: 'Developed SMS phishing detection systems and mentored 100+ students per semester.',
    tools: ['BERT', 'Python', 'D3.js', 'NetworkX', 'Graphviz']
  },
  {
    logo: '/images/logos/njit.png',
    organization: 'New Jersey Institute of Technology',
    role: 'Graduate Research and Teaching Assistant',
    year: 'Sep 2022 - May 2023',
    focus: 'Worked on PHI leakage detection, STRIDE modeling, and static analysis research.',
    tools: ['Python', 'Machine Learning', 'STRIDE', 'Static Analysis']
  },
  {
    logo: '/images/logos/samsung.png',
    organization: 'Samsung R&D Institute Bangladesh',
    role: 'Software Engineer → Senior Software Engineer → Lead Software Engineer',
    year: 'Jul 2018 – Aug 2022',
    focus: 'Delivered secure cloud-connected products and automated testing systems.',
    tools: ['Swift', 'C#', 'REST APIs', 'NoSQL', 'WinAppDriver']
  }
];

function StandardCard({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-800 p-6
                shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07),0_10px_20px_-2px_rgba(255,255,255,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function AboutPage({ embedded = false }: { embedded?: boolean }) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 ${
        embedded ? 'py-8' : 'min-h-screen py-16'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
        >
          About
        </motion.h2>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaGraduationCap className="mr-3 text-blue-600 dark:text-blue-400" />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {educationInfo.map((edu) => (
              <motion.div key={edu.school} whileHover={{ scale: 1.02 }} className="h-full">
                <StandardCard className="h-full min-h-[248px] flex flex-col">
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 bg-white dark:bg-white rounded-full p-2 flex items-center justify-center flex-shrink-0">
                      {edu.logo ? (
                        <Image
                          src={edu.logo}
                          alt={edu.school}
                          fill
                          className="object-contain p-2"
                        />
                      ) : (
                        <FaGraduationCap className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white leading-tight min-h-[42px]">
                        {edu.school}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{edu.degree}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{edu.year}</p>
                      {edu.gpa && (
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2
                                   bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                        >
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{edu.focus}</p>
                </StandardCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaCode className="mr-3 text-blue-600 dark:text-blue-400" />
            Experience
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experienceInfo.map((exp) => (
              <motion.div
                key={`${exp.organization}-${exp.role}-${exp.year}`}
                whileHover={{ scale: 1.02 }}
              >
                <StandardCard>
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 bg-white dark:bg-white rounded-full p-2 flex items-center justify-center">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={exp.organization}
                          fill
                          className="object-contain p-2"
                        />
                      ) : (
                        <FaCode className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{exp.organization}</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{exp.role}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{exp.year}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{exp.focus}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={`${exp.role}-${tool}`}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                                 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </StandardCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
