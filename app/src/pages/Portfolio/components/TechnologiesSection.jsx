const technologies = [
  ['REACT.js', 'JAVASCRIPT', 'JAVA'],
  ['PYTHON', 'TYPESCRIPT', 'SQL'],
  ['SPRINGBOOT', 'MONGODB', 'TAILWIND'],
  ['AWS', 'FIGMA', 'GRAPHQL'],
];

function TechnologiesSection() {
  return (
    <section className="bg-[#f3f3f3] py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        <p className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-black mb-8 uppercase">
          TECHNOLOGIES
        </p>
        <div className="border-t border-black mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
          {technologies.flat().map((tech) => (
            <p
              key={tech}
              className="font-['Jost'] font-light text-[clamp(2rem,4vw,4rem)] leading-none text-black uppercase"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
