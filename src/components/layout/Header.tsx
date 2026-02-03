'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSun, FiMoon, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { useTheme } from 'next-themes';

const navigation = [
  { name: 'Home', href: '/#home', sectionId: 'home' },
  { name: 'News', href: '/#news', sectionId: 'news' },
  { name: 'About', href: '/#about', sectionId: 'about' },
  { name: 'Projects', href: '/#projects', sectionId: 'projects' },
  { name: 'Publications', href: '/#publications', sectionId: 'publications' },
  { name: 'Awards', href: '/#awards', sectionId: 'awards' },
];

const socialLinks = [
  { 
    icon: FaGithub, 
    href: 'https://github.com/ashfakshibli',
    label: 'GitHub'
  },
  { 
    icon: FaLinkedin, 
    href: 'https://www.linkedin.com/in/ashfak-md-shibli/',
    label: 'LinkedIn'
  },
  { 
    icon: SiGooglescholar, 
    href: 'https://scholar.google.com/citations?user=-Py4nOsAAAAJ',
    label: 'Google Scholar'
  },
  {
    icon: FiMail,
    href: 'mailto:shibli.emon@gmail.com',
    label: 'Email'
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScrollState();
    window.addEventListener('scroll', handleScrollState, { passive: true });

    if (pathname !== '/') {
      const routeSectionMap: Record<string, string> = {
        '/': 'home',
        '/about': 'about',
        '/projects': 'projects',
        '/publications': 'publications',
        '/awards': 'awards'
      };
      setActiveSection(routeSectionMap[pathname] || 'home');
      return () => {
        window.removeEventListener('scroll', handleScrollState);
      };
    }

    const sectionIds = navigation.map((item) => item.sectionId);
    const getHashSection = () => {
      const hash = window.location.hash.replace('#', '');
      return sectionIds.includes(hash) ? hash : null;
    };

    const handleHashChange = () => {
      const hashSection = getHashSection();
      if (hashSection) {
        setActiveSection(hashSection);
      } else if (!window.location.hash) {
        setActiveSection('home');
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const targetLine = 96;
        const bestEntry = visible.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top - targetLine) -
            Math.abs(b.boundingClientRect.top - targetLine)
        )[0];
        const nextSection = bestEntry?.target.id;

        if (nextSection && sectionIds.includes(nextSection)) {
          setActiveSection(nextSection);
        }
      },
      {
        root: null,
        rootMargin: '-72px 0px -55% 0px',
        threshold: [0.05, 0.15, 0.3, 0.5, 0.7]
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScrollState);
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${isScrolled 
              ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' 
              : 'bg-white dark:bg-gray-900'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
      {/* Logo/Brand with Social Links */}
      <div className="flex items-center space-x-2 sm:space-x-4">
      <Link 
      href="/#home" 
      className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 whitespace-nowrap pl-8"
      >
      Ashfak Md Shibli
      </Link>

      {/* Social Links */}
      <div className="flex items-center space-x-0.5 sm:space-x-1 pl-2 sm:pl-4 border-l border-gray-200 dark:border-gray-700">
      {socialLinks.map(({ icon: Icon, href, label }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 sm:p-1.5 text-gray-600 hover:text-gray-900 dark:text-gray-300 
                  dark:hover:text-white transition-colors duration-300
                  hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
        aria-label={label}
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
      ))}
      </div>
      </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navigation.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveSection(item.sectionId)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                    isActive
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === 'dark' ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === 'dark' ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = activeSection === item.sectionId;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                      isActive
                        ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                        : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => {
                      setActiveSection(item.sectionId);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
