import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

export const useHoverReveal = (options = {}) => {
  const {
    staggerDelay = 0.04,
    duration = 0.6,
    ease = 'power3.out',
    externalIsHovered = null,
  } = options;

  const containerRef = useRef(null);
  const splitInstancesRef = useRef([]);
  const timelineRef = useRef(null);
  const [internalIsHovered, setInternalIsHovered] = useState(false);
  const isHovered = externalIsHovered !== null ? externalIsHovered : internalIsHovered;
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
    if (!containerRef.current) return;

    const container = containerRef.current;
    const textElements = container.querySelectorAll('[data-hover-reveal-text]');

    if (textElements.length === 0) return;

    const setupSplitText = () => {
      splitInstancesRef.current.forEach((split) => {
        if (split && split.revert) {
          split.revert();
        }
      });
      splitInstancesRef.current = [];

      const allWords = [];

      textElements.forEach((element) => {
        const split = new SplitType(element, {
          types: 'lines,words',
          tagName: 'span',
        });

        splitInstancesRef.current.push(split);

        if (split.lines) {
          split.lines.forEach((line) => {
            gsap.set(line, {
              overflow: 'hidden',
              display: 'block',
            });
          });
        }

        if (split.words) {
          split.words.forEach((word) => {
            gsap.set(word, {
              display: 'inline-block',
              willChange: 'transform, opacity',
            });
            allWords.push(word);
          });
        }
      });

      if (prefersReducedMotion.current) {
        gsap.set(allWords, { y: 0, opacity: isHovered ? 1 : 0 });
      } else {
        gsap.set(allWords, {
          y: isHovered ? 0 : '100%',
          opacity: isHovered ? 1 : 0,
        });
      }
    };

    setupSplitText();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setupSplitText();
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      clearTimeout(resizeTimeout);

      splitInstancesRef.current.forEach((split) => {
        if (split && split.revert) {
          split.revert();
        }
      });

      splitInstancesRef.current = [];

      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || splitInstancesRef.current.length === 0) return;

    const container = containerRef.current;
    const textElements = container.querySelectorAll('[data-hover-reveal-text]');
    const allWords = [];

    splitInstancesRef.current.forEach((split) => {
      if (split.words) {
        allWords.push(...split.words);
      }
    });

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    if (prefersReducedMotion.current) {
      gsap.to(allWords, {
        opacity: isHovered ? 1 : 0,
        duration: 0.3,
      });
    } else {
      if (isHovered) {
        timelineRef.current = gsap.to(allWords, {
          y: 0,
          opacity: 1,
          duration: duration,
          ease: ease,
          stagger: staggerDelay,
          clearProps: 'willChange',
        });
      } else {
        timelineRef.current = gsap.to(allWords, {
          y: '100%',
          opacity: 0,
          duration: duration * 0.7,
          ease: 'power2.in',
          stagger: staggerDelay * 0.5,
        });
      }
    }
  }, [isHovered, staggerDelay, duration, ease]);

  const handleMouseEnter = () => setInternalIsHovered(true);
  const handleMouseLeave = () => setInternalIsHovered(false);

  return {
    containerRef,
    handleMouseEnter,
    handleMouseLeave,
    isHovered,
  };
};
