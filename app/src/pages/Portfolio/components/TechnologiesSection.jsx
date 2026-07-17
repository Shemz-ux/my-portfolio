import RevealText from '../../../components/RevealText';

const technologies = [
  ['REACT.js', 'JAVASCRIPT', 'JAVA'],
  ['PYTHON', 'TYPESCRIPT', 'SQL'],
  ['SPRINGBOOT', 'MONGODB', 'TAILWIND'],
  ['AWS', 'FIGMA', 'GRAPHQL'],
];

function TechnologiesSection() {
  return (
    <section className="bg-[#f3f3f3] py-32 px-8">
      <div className="max-w-[1728px] mx-auto">
        <RevealText>
          <p className="text-p2 text-black mb-4 uppercase" data-reveal-text>
            TECHNOLOGIES
          </p>
          <div className="border-t border-black mb-24" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-64 gap-y-24 text-center">
            {technologies.flat().map((tech) => (
              <p
                key={tech}
                className="text-p text-black uppercase leading-relaxed"
                data-reveal-text
              >
                {tech}
              </p>
            ))}
          </div>
        </RevealText>
      </div>
    </section>
  );
}

export default TechnologiesSection;
