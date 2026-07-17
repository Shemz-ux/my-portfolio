import { ChevronRight } from 'lucide-react';
import RevealText from '../../components/RevealText';

function Services() {
  const services = [
    'WEB DEVELOPMENT',
    'UI/UX DESIGN',
    'SHOPIFY DEVELOPMENT',
    'NO CODE DEVELOPMENT (WEBFLOW & FRAMER)',
    'INTERACTIVE ANIMATIONS (GSAP & CSS)',
    '3D EXPERIENCES (THREE.JS & R3F)',
  ];

  return (
    <div className="min-h-screen bg-[#f3f3f3] px-8 py-16">
      <div className="max-w-[1728px] mx-auto">
        {/* Header */}
        <RevealText>
          <div className="mb-16">
            <h1 className="text-h2 font-light mb-4 uppercase tracking-tight" data-reveal-text>
              SERVICES
            </h1>
            <div className="w-full h-[1px] bg-black"></div>
          </div>
        </RevealText>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <RevealText>
            <div>
              <p className="text-p2 uppercase tracking-wide" data-reveal-text>
                WHAT I CAN HELP YOU WITH?
              </p>
            </div>
          </RevealText>

          {/* Right Column - Services List */}
          <RevealText>
            <div className="space-y-0">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-4 py-6 cursor-pointer">
                    <ChevronRight 
                      className="opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0" 
                      size={34} 
                      strokeWidth={1.0}
                    />
                    <p className="text-h4 font-light uppercase tracking-tight leading-relaxed transition-transform duration-300 ease-out group-hover:translate-x-2" data-reveal-text>
                      {service}
                    </p>
                  </div>
                  {index < services.length - 1 && (
                    <div className="w-full h-[1px] bg-black"></div>
                  )}
                </div>
              ))}
            </div>
          </RevealText>
        </div>
      </div>
    </div>
  );
}

export default Services;
