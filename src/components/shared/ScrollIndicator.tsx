'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight * 0.3) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-40 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center space-y-2">
        <span className="text-sm text-gray-600 dark:text-gray-300 writing-mode-vertical transform rotate-180"
              style={{ writingMode: 'vertical-rl' }}>
          Scroll for more
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-9 border-2 border-gray-600 dark:border-gray-300 rounded-full relative"
        >
          <motion.div
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-300 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;