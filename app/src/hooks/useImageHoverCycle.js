import { useState, useEffect, useRef } from 'react';

export const useImageHoverCycle = (images, options = {}) => {
  const {
    interval = 1000, // ~1.4s per image
    transitionDuration = 500, // 500ms crossfade
  } = options;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      prefersReducedMotion.current = mediaQuery.matches;

      const handleChange = (e) => {
        prefersReducedMotion.current = e.matches;
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (isHovering && !prefersReducedMotion.current && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isHovering, images.length, interval]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Smoothly fade back to first image
    setCurrentIndex(0);
  };

  return {
    currentIndex,
    isHovering,
    handleMouseEnter,
    handleMouseLeave,
    transitionDuration,
    prefersReducedMotion: prefersReducedMotion.current,
  };
};
