import RevealText from '../../../components/RevealText';

const expertise = [
  'DATABASE MANAGEMENT',
  'APP DEVELOPMENT',
  'SYSTEM ARCHITECTURE',
  'WEB DEVELOPMENT',
  'UX DESIGN',
  'APPLICATION INTERFACES',
  'ARTIFICIAL INTELLIGENCE',
  'APPLICATION TESTING',
];

// Random positioning classes for desktop organized chaos
const randomPositions = [
  'lg:mt-0 lg:ml-0',
  'lg:mt-16 lg:ml-20',
  'lg:mt-6 lg:ml-14',
  'lg:mt-20 lg:ml-8',
  'lg:mt-12 lg:ml-24',
  'lg:mt-4 lg:ml-16',
  'lg:mt-6 lg:ml-54',
  'lg:mt-10 lg:ml-95',
];

function ExpertiseSection() {
  return (
    <section className="bg-[#f3f3f3] py-16 sm:py-24 md:py-32 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto w-full">
        <RevealText>
          <h2 className="text-p2 font-bold text-black mb-8 sm:mb-12 text-center" data-reveal-text>[ SKILLSET ]</h2>
          {/* Grid layout for mobile/tablet */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 mt-8 sm:mt-12 lg:hidden">
            {expertise.map((item) => (
              <p
                key={item}
                className="text-p text-black uppercase leading-relaxed text-center"
                data-reveal-text
              >
                {item}
              </p>
            ))}
          </div>
          {/* Random positioning for desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-x-16 gap-y-28 mt-20">
            {expertise.map((item, index) => (
              <p
                key={item}
                className={`text-p text-black uppercase whitespace-nowrap leading-relaxed ${randomPositions[index % randomPositions.length]}`}
                data-reveal-text
              >
                {item}
              </p>
            ))}
          </div>
        </RevealText>
      </div>
    </section>
  );
}

export default ExpertiseSection;
