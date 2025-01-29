// src/app/page.tsx
import HeroSection from '@/components/home/HeroSection';
import Highlights from '@/components/home/Highlights';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Main Hero Section with Timeline */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <HeroSection />
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Highlights />
        </div>
      </section>
    </div>
  );
}