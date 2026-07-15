const projects = [
  {
    title: 'AITC',
    description: 'REACT APP, PROFESSIONAL DEVELOPMENT PLATFORM',
    role: 'ROLE: WEB DESIGN, FULL-STACK',
    techStack: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'POSTGRES'],
    link: '[OPEN]',
  },
  {
    title: 'FO P.',
    description: 'REACT APP, CAREERS PLATFORM',
    role: 'ROLE: WEB DESIGN, FULL-STACK',
    techStack: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'POSTGRES', 'CLOUDFLARE'],
    link: '[OPEN]',
  },
];

function ProjectsSection() {
  return (
    <section className="bg-[#020108] py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* First Project - Right Aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="bg-[#d9d9d9] h-[507px]" />
          <div className="text-white">
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="font-['Jost'] font-light text-[clamp(3rem,6vw,5.3125rem)] leading-none uppercase">
                {projects[0].title}
              </h2>
              <span className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] uppercase">
                {projects[0].link}
              </span>
            </div>
            <p className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] mb-2 uppercase">
              {projects[0].description}
            </p>
            <p className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] mb-4 uppercase">
              {projects[0].role}
            </p>
            <div className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] uppercase">
              <p className="mb-2">TECH STACK:</p>
              <ul className="list-disc ml-8 space-y-1">
                {projects[0].techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Second Project - Left Aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-white lg:order-1">
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="font-['Jost'] font-light text-[clamp(3rem,6vw,5.3125rem)] leading-none uppercase">
                {projects[1].title}
              </h2>
              <span className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] uppercase">
                {projects[1].link}
              </span>
            </div>
            <p className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] mb-2 uppercase">
              {projects[1].description}
            </p>
            <p className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] mb-4 uppercase">
              {projects[1].role}
            </p>
            <div className="font-['Jost'] font-extralight text-[clamp(0.875rem,1.5vw,1.25rem)] uppercase">
              <p className="mb-2">TECH STACK:</p>
              <ul className="list-disc ml-8 space-y-1">
                {projects[1].techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#d9d9d9] h-[507px] lg:order-2" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
