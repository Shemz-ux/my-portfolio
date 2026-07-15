import { Link } from 'react-router-dom';

function ContactSection() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="font-['Jost'] font-light text-[clamp(3rem,6vw,5.3125rem)] leading-none text-white mb-4 uppercase">
            LET'S GET TO WORK
          </h2>
          <span className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] text-white uppercase">
            [CONTACT]
          </span>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Navigation */}
          <div className="font-['Jost'] font-light text-[clamp(2rem,4vw,4rem)] text-white leading-normal uppercase">
            <Link to="/" className="block hover:opacity-60 transition-opacity">
              HOME
            </Link>
            <Link to="/work" className="block hover:opacity-60 transition-opacity">
              WORK
            </Link>
            <Link to="/contact" className="block hover:opacity-60 transition-opacity">
              CONTACT
            </Link>
          </div>

          {/* Contact Info */}
          <div className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-white lg:text-right space-y-1 uppercase">
            <p>SDSTUDIOS.CO.UK@GMAIL.COM</p>
            <p>TIME ZONE - GMT</p>
            <p>LONDON</p>
            <p className="mt-8">INSTAGRAM</p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-white hover:opacity-60 transition-opacity uppercase"
          >
            [BACK TO TOP]
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
