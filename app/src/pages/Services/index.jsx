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
        <div className="mb-16">
          <h1 className="text-h2 font-light mb-4 uppercase tracking-tight">
            SERVICES
          </h1>
          <div className="w-full h-[1px] bg-black"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <p className="text-p2 uppercase tracking-wide">
              WHAT I CAN HELP YOU WITH?
            </p>
          </div>

          {/* Right Column - Services List */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <div key={index}>
                <p className="text-h4 font-light uppercase tracking-tight py-6">
                  {service}
                </p>
                {index < services.length - 1 && (
                  <div className="w-full h-[1px] bg-black"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
