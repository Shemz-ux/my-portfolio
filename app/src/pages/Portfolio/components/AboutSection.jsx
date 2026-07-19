import RevealText from '../../../components/RevealText';

function AboutSection() {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Bio Text */}
          <RevealText className="text-white leading-relaxed">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light" data-reveal-text>
                I'm Shem, founder of SD Atelier, a digital agency delivering full-stack solutions from UI/UX design to APIs, and databases, across both web and app development.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300" data-reveal-text>
                With an engineering background and a genuine love for design, I bring both precision and vision to every project.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400" data-reveal-text>
                By day, I work full-time as a software developer. When I'm not building solutions there, I'm creating them here.
              </p>
            </div>
          </RevealText>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[530px] lg:h-[530px] rounded-full border border-white bg-gray-700" >
              <img 
                src="https://res.cloudinary.com/dcoilkm8r/image/upload/v1784234458/SK_avatar_xlnmhz.png" 
                alt="Avatar" 
                className="w-full h-full rounded-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
