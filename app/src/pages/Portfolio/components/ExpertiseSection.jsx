const expertise = [
  'DATABASE MANAGEMENT',
  'APP DEVELOPMENT',
  'SYSTEM ARCHITECTURE',
  'WEB DEVELOPMENT',
  'UX DESIGN',
  'APPLICATION INTERFACES',
  'ARTIFICIAL INTELLIGENCE',
];

// Random positioning classes for organized chaos
const randomPositions = [
  'mt-0 ml-0',
  'mt-16 ml-20',
  'mt-6 ml-14',
  'mt-20 ml-8',
  'mt-12 ml-24',
  'mt-4 ml-16',
  'mt-6 ml-84',
];

function ExpertiseSection() {
  return (
    <section className="bg-[#f3f3f3] py-30 px-8 min-h-screen flex items-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-28">
          {expertise.map((item, index) => (
            <p
              key={item}
              className={`text-p text-black uppercase whitespace-nowrap ${randomPositions[index % randomPositions.length]}`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
