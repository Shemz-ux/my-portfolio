import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { navConfig } from './index.copy';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const prefersReducedMotion = useRef(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOverlayRef.current || !menuContentRef.current) return;

    gsap.set(menuOverlayRef.current, { y: '-100%' });
    gsap.set(menuContentRef.current, { opacity: 0 });
  }, []);

  useEffect(() => {
    if (!menuOverlayRef.current || !menuContentRef.current) return;

    const reducedMotion = prefersReducedMotion.current;
    const duration = reducedMotion ? 0.3 : 0.8;
    const ease = reducedMotion ? 'none' : 'power3.inOut';

    if (menuOpen) {
      const tl = gsap.timeline();
      tl.to(menuOverlayRef.current, {
        y: '0%',
        duration: duration,
        ease: ease
      })
      .to(menuContentRef.current, {
        opacity: 1,
        duration: reducedMotion ? 0.2 : 0.4,
        ease: 'power2.out'
      }, '-=0.3');
    } else {
      const tl = gsap.timeline();
      tl.to(menuContentRef.current, {
        opacity: 0,
        duration: reducedMotion ? 0.1 : 0.3,
        ease: 'power2.in'
      })
      .to(menuOverlayRef.current, {
        y: '-100%',
        duration: duration,
        ease: ease
      }, '-=0.1');
    }
  }, [menuOpen]);

  const formatTime = () => {
    return currentTime.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Europe/London',
      hour12: false
    });
  };

  return (
    <>
      {/* Main Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f3f3f3]">
        <div className="max-w-[1728px] mx-auto px-8 py-8 flex items-center justify-between">
          {/* Logo - Centered */}
          <Link 
            to="/" 
            className="absolute left-1/2 -translate-x-1/2 hover:opacity-60 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dcoilkm8r/image/upload/v1784236694/SK_Designz_Logo_qj8bfb.png" 
              alt="SK Designz Logo" 
              className="h-30"
            />
            {/* <h1 className="text-p2 font-bold">SHEM N</h1> */}
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto p-2 text-black hover:opacity-60 transition-opacity"
            aria-label="Toggle menu"
          >
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div 
        ref={menuOverlayRef}
        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        style={{ 
          willChange: 'transform',
          pointerEvents: menuOpen ? 'auto' : 'none'
        }}
      >
        <div ref={menuContentRef} style={{ willChange: 'opacity' }}>
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 p-2 text-white hover:opacity-60 transition-opacity"
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={1} />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-8">
            {navConfig.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-h3 text-white hover:opacity-60 transition-opacity uppercase tracking-wide ${
                  location.pathname === link.href ? 'opacity-100' : 'opacity-80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info in Overlay */}
          <div className="absolute bottom-16 left-16 text-p2 text-white/60 leading-relaxed">
            <p className="text-p2">{navConfig.contactInfo.email}</p>
            <p className="text-p2">{formatTime()} GMT</p>
            <p className="text-p2">{navConfig.contactInfo.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
