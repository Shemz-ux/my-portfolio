import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const STORAGE_KEY = 'portfolio_load_screen_shown';
const LOAD_DURATION = 2.2;
const HOLD_DURATION = 0.2;
const EXIT_DURATION = 0.8;

function LoadScreen({ onComplete }) {
  const [shouldShow, setShouldShow] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const overlayRef = useRef(null);
  const percentageRef = useRef({ value: 0 });
  const prefersReducedMotion = useRef(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const hasShown = sessionStorage.getItem(STORAGE_KEY);
    
    if (!hasShown) {
      setShouldShow(true);
      sessionStorage.setItem(STORAGE_KEY, 'true');
      
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setTimeout(() => {
              exitAnimation();
            }, HOLD_DURATION * 1000);
          }
        });

        tl.to(percentageRef.current, {
          value: 100,
          duration: LOAD_DURATION,
          ease: 'power2.inOut',
          onUpdate: () => {
            setPercentage(Math.floor(percentageRef.current.value));
          }
        });
      });

      return () => ctx.revert();
    } else {
      onComplete?.();
    }
  }, [onComplete]);

  const exitAnimation = () => {
    if (!overlayRef.current) return;

    const exitEase = prefersReducedMotion.current ? 'none' : 'power3.inOut';
    const exitDuration = prefersReducedMotion.current ? 0.3 : EXIT_DURATION;

    gsap.to(overlayRef.current, {
      y: '-100%',
      duration: exitDuration,
      ease: exitEase,
      onComplete: () => {
        onComplete?.();
      }
    });
  };

  if (!shouldShow) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] bg-[#f3f3f3] flex items-center justify-center"
      style={{ willChange: 'transform' }}
    >
      <div className="text-black text-h3 font-light tracking-tight">
        {percentage}%
      </div>
    </div>
  );
}

export default LoadScreen;
