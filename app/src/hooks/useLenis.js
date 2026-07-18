import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isTouchDevice } from '../utils/responsive';

gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = isTouchDevice();

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: !prefersReducedMotion && !isTouch,
      smoothTouch: false,
      wrapper: window,
      content: document.documentElement,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      lenis.options.smoothWheel = !e.matches;
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      lenis.destroy();
      mediaQuery.removeEventListener('change', handleMotionChange);
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);
};
