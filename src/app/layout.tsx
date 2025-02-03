// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from './providers';
import CustomCursor from '@/components/shared/CustomCursor';
import ScrollIndicator from '@/components/shared/ScrollIndicator';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ashfak Md Shibli - Software Engineer & Researcher',
  description: 'Professional portfolio of Ashfak Md Shibli - Software Engineer and Computer Science Researcher',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-all duration-300">
            <CustomCursor />
            <Header />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <ScrollIndicator />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}