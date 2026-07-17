import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const ROUTE_NAMES = {
  '/': '[ Home ]',
  '/work': '[ Work ]',
  '/services': '[ Services ]',
  '/contact': '[ Contact ]',
};

const SWIPE_DURATION = 1.2;
const NAME_ANIMATION_DURATION = 0.5;
const NAME_ANIMATION_DELAY = 0.05;

function PageTransition({ children }) {
  const location = useLocation();
  const [displayName, setDisplayName] = useState('');
  const overlayRef = useRef(null);
  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const previousPathRef = useRef(location.pathname);
  const timelineRef = useRef(null);
  const prefersReducedMotion = useRef(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (!overlayRef.current || !nameRef.current || !contentRef.current) return;

    gsap.set(overlayRef.current, { y: '-100%' });
    gsap.set(nameRef.current, { opacity: 0, y: 15 });
    gsap.set(contentRef.current, { opacity: 1, pointerEvents: 'auto' });
  }, []);

  useEffect(() => {
    if (previousPathRef.current === location.pathname) {
      return;
    }

    if (!overlayRef.current || !nameRef.current || !contentRef.current) return;

    const pageName = ROUTE_NAMES[location.pathname] || 'Page';
    setDisplayName(pageName);

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline();
    timelineRef.current = tl;

    const reducedMotion = prefersReducedMotion.current;
    const swipeDuration = reducedMotion ? 0.3 : SWIPE_DURATION;
    const swipeEase = reducedMotion ? 'none' : 'power3.inOut';

    tl.set(overlayRef.current, { y: '0%' })
      .set(contentRef.current, { opacity: 0, pointerEvents: 'none' })
      .set(nameRef.current, { opacity: 0, y: 15 })
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: reducedMotion ? 0.2 : NAME_ANIMATION_DURATION,
        ease: reducedMotion ? 'none' : 'power2.out',
        delay: reducedMotion ? 0 : NAME_ANIMATION_DELAY
      })
      .to({}, { duration: 0.4 })
      .to(overlayRef.current, {
        y: '-100%',
        duration: swipeDuration,
        ease: swipeEase
      })
      .set(contentRef.current, { opacity: 1, pointerEvents: 'auto' });

    previousPathRef.current = location.pathname;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [location.pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[150] bg-black flex items-center justify-center pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div
          ref={nameRef}
          className="text-white text-p2 font-light tracking-tight uppercase"
          style={{ willChange: 'opacity, transform' }}
        >
          {displayName}
        </div>
      </div>
      <div ref={contentRef}>
        {children}
      </div>
    </>
  );
}

export default PageTransition;
