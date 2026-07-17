import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { navConfig } from './index.copy';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
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
      )}
    </>
  );
}

export default Navbar;
