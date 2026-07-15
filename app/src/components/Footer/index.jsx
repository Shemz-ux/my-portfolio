import { Link } from 'react-router-dom';
import { footerConfig } from './index.copy';

function Footer() {
  return (
    <footer className="bg-black py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="font-['Jost'] font-light text-[clamp(3rem,6vw,5.3125rem)] leading-none text-white mb-4 uppercase">
            {footerConfig.heading}
          </h2>
          <span className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] text-white uppercase">
            {footerConfig.contactLabel}
          </span>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Navigation */}
          <div className="font-['Jost'] font-light text-[clamp(2rem,4vw,4rem)] text-white leading-normal uppercase">
            {footerConfig.navigation.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-white lg:text-right space-y-1 uppercase">
            <p>{footerConfig.contactInfo.email}</p>
            <p>{footerConfig.contactInfo.timezone}</p>
            <p>{footerConfig.contactInfo.location}</p>
            <div className="mt-8 flex gap-8 lg:justify-end">
              {footerConfig.contactInfo.social.map((platform) => (
                <p key={platform}>{platform}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-white hover:opacity-60 transition-opacity uppercase"
          >
            {footerConfig.backToTopLabel}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
