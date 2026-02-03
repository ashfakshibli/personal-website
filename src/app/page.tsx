// src/app/page.tsx
// src/app/page.tsx
import HeroSection from '@/components/home/HeroSection';
import LatestNews from '@/components/home/LatestNews';
import AboutPage from '@/app/about/page';
import ProjectsPage from '@/app/projects/page';
import PublicationsPage from '@/app/publications/page';
import AwardsPage from '@/app/awards/page';

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="border-t border-gray-200 dark:border-gray-800" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Main Hero Section with Timeline */}
      <section
        id="home"
        className="relative scroll-mt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <HeroSection />
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className="scroll-mt-20 bg-white dark:bg-gray-900 py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LatestNews />
        </div>
      </section>
      <SectionDivider />

      <section id="about" className="scroll-mt-20 bg-white dark:bg-gray-900">
        <AboutPage embedded />
      </section>
      <SectionDivider />

      <section id="projects" className="scroll-mt-20 bg-white dark:bg-gray-900">
        <ProjectsPage embedded />
      </section>
      <SectionDivider />

      <section id="publications" className="scroll-mt-20 bg-white dark:bg-gray-900">
        <PublicationsPage embedded />
      </section>
      <SectionDivider />

      <section id="awards" className="scroll-mt-20 bg-white dark:bg-gray-900 pb-4">
        <AwardsPage embedded />
      </section>
    </div>
  );
}
