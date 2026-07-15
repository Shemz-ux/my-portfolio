const expertise = [
  'UX DESIGN',
  'APP DEVELOPMENT',
  'SYSTEM ARCHITECTURE',
  'WEB DEVELOPMENT',
  'DATABASE MANAGEMENT',
  'APPLICATION INTERFACES',
  'ARTIFICIAL INTELLIGENCE',
];

function ExpertiseSection() {
  return (
    <section className="bg-[#f3f3f3] py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        <p className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-black text-center mb-16 uppercase">
          [EXPERTISE]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8">
          {expertise.map((item) => (
            <p
              key={item}
              className="font-['Jost'] font-light text-[clamp(2rem,4vw,4rem)] leading-none text-black uppercase"
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
