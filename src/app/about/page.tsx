'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaBrain,
  FaCode,
  FaGraduationCap,
  FaLock,
  FaServer,
  FaUsers
} from 'react-icons/fa';
import {
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiGit,
  SiGooglecloud,
  SiJavascript,
  SiMysql,
  SiPytorch,
  SiPython,
  SiSwift
} from 'react-icons/si';

interface EducationItem {
  logo?: string;
  school: string;
  degree: string;
  year: string;
  gpa: string;
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

interface CollaborationItem {
  institution: string;
  period: string;
  focus: string;
  highlights: string[];
}

const educationInfo: EducationItem[] = [
  {
    logo: '/images/logos/tntech.png',
    school: 'Tennessee Technological University',
    degree: 'MS in Computer Science',
    year: 'Aug 2023 - Aug 2024',
    gpa: '4.00/4.00',
    focus: 'AI and cybersecurity research within the joint MS program.'
  },
  {
    logo: '/images/logos/njit.png',
    school: 'New Jersey Institute of Technology',
    degree: 'MS in Computer Science',
    year: 'Sep 2022 - May 2023',
    gpa: '4.00/4.00',
    focus: 'Healthcare security, static analysis, and TA/RA foundations'
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
    focus: 'Leading ML pipeline architecture, mobile AI optimization, and analytics infrastructure.',
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
    organization: 'Samsung Research',
    role: 'Lead Software Engineer',
    year: 'Jul 2018 - Aug 2022',
    focus: 'Delivered secure cloud-connected products and automated testing systems.',
    tools: ['Swift', 'C#', 'REST APIs', 'NoSQL', 'WinAppDriver']
  }
];

const researchCollaborations: CollaborationItem[] = [
  {
    institution: 'Speed Lab, Florida Atlantic University',
    period: 'Jul 2024 - Current',
    focus: 'Industry research collaborator for adversarial security analysis on multimodal models.',
    highlights: [
      'Adversarial attack experiments on LLM/VLM workflows',
      'Prompt-engineering based threat-generation analysis',
      'Dataset curation for automated vehicle security scenarios'
    ]
  },
  {
    institution: 'University of Tennessee Chattanooga',
    period: 'Jul 2024 - Current',
    focus: 'Collaboration on iterative evaluation frameworks for vision-language model research.',
    highlights: [
      'Generator-evaluator loop analysis for multimodal systems',
      'Document-understanding evaluation strategy design',
      'Study of iterative refinement vulnerabilities and quality patterns'
    ]
  }
];

const technicalSkills = [
  {
    icon: FaBrain,
    name: 'ML and AI Systems',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'BERT/CNN pipelines']
  },
  {
    icon: FaLock,
    name: 'Security Research',
    items: ['SMS Phishing Defense', 'STRIDE Modeling', 'Adversarial Evaluation']
  },
  {
    icon: FaCode,
    name: 'Data and Visualization',
    items: ['pandas/NumPy', 'NetworkX', 'Graphviz', 'D3.js']
  }
];

const tools = [
  { icon: SiPython, name: 'Python' },
  { icon: SiSwift, name: 'Swift' },
  { icon: SiDotnet, name: 'C#' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiPytorch, name: 'PyTorch' },
  { icon: SiGooglecloud, name: 'GCP' },
  { icon: SiFirebase, name: 'Firebase' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiGit, name: 'Git' }
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
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2
                                 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                      >
                        GPA: {edu.gpa}
                      </span>
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

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaUsers className="mr-3 text-blue-600 dark:text-blue-400" />
            Research Collaborations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchCollaborations.map((collab) => (
              <motion.div key={collab.institution} whileHover={{ scale: 1.02 }}>
                <StandardCard>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{collab.institution}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{collab.period}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">{collab.focus}</p>
                  <ul className="mt-4 space-y-2">
                    {collab.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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
            <FaBrain className="mr-3 text-blue-600 dark:text-blue-400" />
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkills.map((skill) => (
              <motion.div key={skill.name} whileHover={{ scale: 1.02 }}>
                <StandardCard>
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="ml-3 font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-sm text-gray-600 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </StandardCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaServer className="mr-3 text-blue-600 dark:text-blue-400" />
            Tools and Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool) => (
              <motion.div key={tool.name} whileHover={{ scale: 1.05 }}>
                <StandardCard>
                  <div className="flex items-center justify-center">
                    <tool.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <span className="ml-2 text-gray-900 dark:text-white">{tool.name}</span>
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
