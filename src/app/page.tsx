// src/app/page.tsx
// src/app/page.tsx
import HeroSection from '@/components/home/HeroSection';
import LatestNews from '@/components/home/LatestNews';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Main Hero Section with Timeline */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <HeroSection />
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-white dark:bg-gray-900 py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LatestNews />
        </div>
      </section>
    </div>
  );
}