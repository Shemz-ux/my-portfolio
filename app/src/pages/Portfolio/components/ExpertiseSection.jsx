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

// Random positioning classes for organized chaos
const randomPositions = [
  'mt-0 ml-0',
  'mt-16 ml-20',
  'mt-6 ml-14',
  'mt-20 ml-8',
  'mt-12 ml-24',
  'mt-4 ml-16',
  'mt-6 ml-54',
  'mt-10 ml-95',
];

function ExpertiseSection() {
  return (
    <section className="bg-[#f3f3f3] py-30 px-8 min-h-screen flex items-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <RevealText>
          <h2 className="text-p2 font-bold text-black mb-12 text-center" data-reveal-text>[ SKILLSET ]</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-28 mt-20">
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
