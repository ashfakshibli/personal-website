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
      {/* Outer ring with gradient */}
      <div
        className="fixed w-10 h-10 pointer-events-none z-[9999] rounded-full"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: 'transform 0.2s ease-out',
          opacity: isVisible ? 1 : 0,
          background: 'linear-gradient(45deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2))',
          border: '2px solid rgba(147,51,234,0.3)',
          backdropFilter: 'blur(4px)',
          animation: 'pulse 2s infinite'
        }}
      />
      {/* Inner ring */}
      <div
        className="fixed w-5 h-5 pointer-events-none z-[9999] rounded-full"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          transition: 'transform 0.1s ease-out',
          opacity: isVisible ? 1 : 0,
          border: '2px solid rgba(59,130,246,0.5)',
          background: 'rgba(59,130,246,0.1)'
        }}
      />
      {/* Center dot */}
      <div
        className="fixed w-2 h-2 pointer-events-none z-[9999] rounded-full"
        style={{
          transform: `translate(${position.x - 1}px, ${position.y - 1}px)`,
          transition: 'transform 0.05s ease-out',
          opacity: isVisible ? 1 : 0,
          background: 'rgb(59,130,246)',
          boxShadow: '0 0 10px rgba(59,130,246,0.5)'
        }}
      />
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @keyframes pulse {
          0% { transform: translate(${position.x - 20}px, ${position.y - 20}px) scale(1); }
          50% { transform: translate(${position.x - 20}px, ${position.y - 20}px) scale(1.1); }
          100% { transform: translate(${position.x - 20}px, ${position.y - 20}px) scale(1); }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;