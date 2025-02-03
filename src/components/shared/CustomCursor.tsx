'use client';

import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-8 h-8 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          transition: 'transform 0.15s ease-out',
          opacity: isVisible ? 1 : 0,
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(4px)',
          border: '2px solid white'
        }}
      />
      <div
        className="fixed w-2 h-2 pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          transition: 'transform 0.1s ease-out',
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
};

export default CustomCursor;