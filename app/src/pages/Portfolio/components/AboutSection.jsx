import RevealText from '../../../components/RevealText';

function AboutSection() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Bio Text */}
          <RevealText className="text-h4 text-white leading-normal uppercase">
            <p className="mb-4" data-reveal-text>HI,</p>
            <p className="mb-4" data-reveal-text>
              "MY NAME IS SHEM THE
              <br />
              FOUNDER OF SD ATELIER A DIGITAL
            </p>
            <p className="mb-4" data-reveal-text>AGENCY THAT SPECIALISES IN</p>
            <p className="mb-4" data-reveal-text>WEB DESIGN AND APP</p>
            <p className="mb-4" data-reveal-text>DEVELOPMENT, I HAVE AN EXTENSIVE</p>
            <p className="mb-4" data-reveal-text>BACKGROUND ENGINEERING WITH A</p>
            <p className="mb-4" data-reveal-text>LOVE FOR DESIGN. WHEN I AM NOT</p>
            <p className="mb-4" data-reveal-text>CREATING SOLUTIONS I WORK AS A</p>
            <p data-reveal-text>SOFTWARE DEVELOPER FULL TIME."</p>
          </RevealText>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[530px] h-[530px] rounded-full border border-white bg-gray-700" >
              <img 
                src="https://res.cloudinary.com/dcoilkm8r/image/upload/v1784234458/SK_avatar_xlnmhz.png" 
                alt="Avatar" 
                className="w-full h-full rounded-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
