import { Link } from 'react-router-dom';
import RevealText from '../../../components/RevealText';

function ContactSection() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        <RevealText>
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-white mb-4 uppercase" data-reveal-text>
              LET'S GET TO WORK
            </h2>
            <span className="text-p2 text-white uppercase" data-reveal-text>
              [CONTACT]
            </span>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Navigation */}
            <div className="text-h3 text-white leading-normal uppercase">
              <Link to="/" className="block hover:opacity-60 transition-opacity" data-reveal-text>
                HOME
              </Link>
              <Link to="/work" className="block hover:opacity-60 transition-opacity" data-reveal-text>
                WORK
              </Link>
              <Link to="/contact" className="block hover:opacity-60 transition-opacity" data-reveal-text>
                CONTACT
              </Link>
            </div>

            {/* Contact Info */}
            <div className="text-p2 text-white lg:text-right space-y-1 uppercase">
              <p data-reveal-text>SDSTUDIOS.CO.UK@GMAIL.COM</p>
              <p data-reveal-text>TIME ZONE - GMT</p>
              <p data-reveal-text>LONDON</p>
              <p className="mt-8" data-reveal-text>INSTAGRAM</p>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-p2 text-white hover:opacity-60 transition-opacity uppercase"
              data-reveal-text
            >
              [BACK TO TOP]
            </button>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

export default ContactSection;
