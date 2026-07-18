import { useState, useEffect, useRef } from 'react';
import { isTouchDevice } from '../utils/responsive';

export const useImageHoverCycle = (images, options = {}) => {
  const {
    interval = 1000,
    transitionDuration = 500,
  } = options;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const intervalRef = useRef(null);
  const elementRef = useRef(null);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  );
  const isTouch = useRef(
    typeof window !== 'undefined' ? isTouchDevice() : false
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
    if (!elementRef.current || !isTouch.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const shouldCycle = isTouch.current 
      ? isInView && !prefersReducedMotion.current && images.length > 1
      : isHovering && !prefersReducedMotion.current && images.length > 1;

    if (shouldCycle) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    } else if (!isTouch.current && !isHovering) {
      setCurrentIndex(0);
    }
  }, [isHovering, isInView, images.length, interval]);

  const handleMouseEnter = () => {
    if (!isTouch.current) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch.current) {
      setIsHovering(false);
      setCurrentIndex(0);
    }
  };

  return {
    currentIndex,
    isHovering,
    handleMouseEnter,
    handleMouseLeave,
    transitionDuration,
    prefersReducedMotion: prefersReducedMotion.current,
    elementRef,
  };
};
