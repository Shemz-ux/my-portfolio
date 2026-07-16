function AboutSection() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio Text */}
          <div className="text-h4 text-white leading-normal uppercase">
            <p className="mb-4">HI,</p>
            <p className="mb-4">
              "MY NAME IS SHEM THE
              <br />
              FOUNDER OF SD ATELIER A DIGITAL
            </p>
            <p className="mb-4">AGENCY THAT SPECIALISES IN</p>
            <p className="mb-4">WEB DESIGN AND APP</p>
            <p className="mb-4">DEVELOPMENT, I HAVE AN EXTENSIVE</p>
            <p className="mb-4">BACKGROUND ENGINEERING WITH A</p>
            <p className="mb-4">LOVE FOR DESIGN. WHEN I AM NOT</p>
            <p className="mb-4">CREATING SOLUTIONS I WORK AS A</p>
            <p>SOFTWARE DEVELOPER FULL TIME."</p>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[613px] h-[613px] rounded-full border border-white bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
