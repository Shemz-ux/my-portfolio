function Hero() {
  const currentTime = new Date().toLocaleTimeString('en-GB');

  return (
    <section className="relative bg-[#f3f3f3] py-6 px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* Main Heading */}
        <div className="relative mt-90">
          <div className="mb-4">
            <p className="text-p2 text-black text-left uppercase">
              [ SOFTWARE ENGINEER ]
            </p>
          </div>
          <h1 className="text-black uppercase font-light leading-normal whitespace-nowrap">
            DEVELOPING EXPERIENCES
          </h1>
          <h1 className="text-black uppercase font-light leading-normal pl-[356px] -mt-4">
            CREATING WITH VISION
          </h1>
          <div className="mt-6 flex gap-8 items-center">
              <p className="text-p2 text-black uppercase">
                SHEM K. N
              </p>
              <p className="text-p2 text-black uppercase">
                {currentTime} GMT
              </p>
            </div>
          <div>
            <p className="text-p2 text-black text-right uppercase">
              [ DIGITAL DESIGNER ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
