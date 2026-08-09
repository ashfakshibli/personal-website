// src/components/home/Timeline.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const timelineEntries = [
  {
    id: 1,
    period: 'Aug 2023 – Jul 2024',
    role: 'M.S. in Computer Science',
    organization: 'Tennessee Technological University',
    logo: '/images/logos/tntech.png',
    description: 'Graduate research in AI and cybersecurity. Degree conferred July 26, 2024.',
    delay: 0.2
  },
  {
    id: 2,
    period: 'Sep 2022 – Aug 2023',
    role: 'Graduate Studies in Computer Science',
    organization: 'New Jersey Institute of Technology',
    logo: '/images/logos/njit.png',
    description: 'Graduate study and research in healthcare security, static analysis, and threat modeling before transferring to Tennessee Tech.',
    delay: 0.4
  },
  {
    id: 3,
    period: '2023 - Present',
    role: 'Software Engineer',
    organization: 'AthleteDen',
    logo: '/images/logos/athleteden.png',
    description: 'Leading AI-driven sports technology development',
    delay: 0.6
  },
  {
    id: 4,
    period: '2018 - 2022',
    role: 'Software Engineer → Senior Software Engineer → Lead Software Engineer',
    organization: 'Samsung R&D Institute Bangladesh',
    logo: '/images/logos/samsung.png',
    description: 'Led development of major applications and innovation initiatives',
    delay: 0.8
  }
];

export default function Timeline() {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Photo Section */}
      <motion.div 
        className="lg:col-span-4 photo-container h-[600px] lg:sticky lg:top-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/profile-nyc.jpg"
          alt="Profile photo with NYC skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="photo-overlay" />
      </motion.div>

      {/* Timeline Section */}
      <div className="lg:col-span-8 timeline-container">
        {timelineEntries.map((entry) => (
          <motion.div
            key={entry.id}
            className="timeline-entry"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: entry.delay, duration: 0.5 }}
          >
            <div className="bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{entry.role}</h3>
                  <p className="text-gray-600">{entry.organization}</p>
                  <p className="text-sm text-gray-500">{entry.period}</p>
                </div>
                <div className="logo-container w-16 h-16 relative">
                  <Image
                    src={entry.logo}
                    alt={`${entry.organization} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700">{entry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
