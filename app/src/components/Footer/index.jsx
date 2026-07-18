import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { footerConfig } from './index.copy';

function Footer() {
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
    <footer className="bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* Main CTA */}
        <div className="mb-16 sm:mb-20 md:mb-26">
          <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
            <h2 className="text-h2 text-white uppercase">
              {footerConfig.heading}
            </h2>
            <span className="text-p2 text-white uppercase whitespace-nowrap">
              {footerConfig.contactLabel}
            </span>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 mb-12 sm:mb-16">
          {/* Navigation */}
          <div className="text-h3 text-white mt-0 sm:mt-12 md:mt-25 leading-normal uppercase">
            {footerConfig.navigation.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="mb-2 block hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-white mt-0 sm:mt-16 md:mt-35 lg:text-right space-y-1 uppercase">
            <p className="text-p2">{footerConfig.contactInfo.email}</p>
            <p className="text-p2">{formatTime()} GMT</p>
            <p className="text-p2">{footerConfig.contactInfo.location}</p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-6 sm:gap-8 lg:justify-end">
              {footerConfig.contactInfo.social.map((platform) => (
                <a 
                  key={platform.label}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-p2 hover:opacity-60 transition-opacity min-h-[44px] flex items-center"
                >
                  {platform.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-p2 text-white hover:opacity-60 transition-opacity uppercase min-h-[44px] px-4 py-2"
          >
            {footerConfig.backToTopLabel}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
