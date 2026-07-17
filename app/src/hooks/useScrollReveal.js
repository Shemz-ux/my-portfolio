import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (options = {}) => {
  const {
    staggerDelay = 0.04,
    triggerStart = 'top 85%',
    duration = 0.6,
    ease = 'power3.out',
  } = options;

  const containerRef = useRef(null);
  const splitInstancesRef = useRef([]);
  const scrollTriggerRef = useRef(null);
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
    const textElements = container.querySelectorAll('[data-reveal-text]');

    if (textElements.length === 0) return;

    if (prefersReducedMotion.current) {
      gsap.set(textElements, { opacity: 1 });
      return;
    }

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
            display: 'block',
            lineHeight: '1.6',
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

        gsap.set(split.words, {
          y: '100%',
          opacity: 0,
        });
      }
    });

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: container,
      start: triggerStart,
      once: true,
      onEnter: () => {
        gsap.to(allWords, {
          y: 0,
          opacity: 1,
          duration: duration,
          ease: ease,
          stagger: staggerDelay,
          clearProps: 'willChange',
        });
      },
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      splitInstancesRef.current.forEach((split) => {
        if (split && split.revert) {
          split.revert();
        }
      });

      splitInstancesRef.current = [];
    };
  }, [staggerDelay, triggerStart, duration, ease]);

  return containerRef;
};
