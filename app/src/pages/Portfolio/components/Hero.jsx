function Hero() {
  const currentTime = new Date().toLocaleTimeString('en-GB');

  return (
    <section className="relative bg-[#f3f3f3] py-8 px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* Top Info */}
        <div className="flex justify-between items-start mb-32">
          <div>
            <p className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-black uppercase">
              [ SOFTWARE DEVELOPER ]
            </p>
            <div className="mt-64">
              <p className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-black uppercase">
                SHEM K. N
              </p>
              <p className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-black uppercase">
                {currentTime} BST
              </p>
            </div>
          </div>
          
          <div>
            <p className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-black text-right uppercase">
              [ DIGITAL DESIGNER ]
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-2">
          <h1 className="font-['Jost'] font-light text-[clamp(3rem,8vw,8rem)] leading-none text-black uppercase">
            DEVELOPING EXPERIENCES
          </h1>
          <h1 className="font-['Jost'] font-light text-[clamp(3rem,8vw,8rem)] leading-none text-black uppercase pl-[clamp(2rem,20vw,21.25rem)]">
            CREATING WITH VISION
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
