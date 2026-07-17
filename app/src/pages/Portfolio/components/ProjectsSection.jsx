import HoverFadeImage from '../../../components/HoverFadeImage';
import { projectPlaceholders } from '../../../assets/images/placeholders';

const projects = [
  {
    title: 'AITC',
    description: 'REACT APP, PROFESSIONAL DEVELOPMENT PLATFORM',
    role: 'ROLE: WEB DESIGN, FULL-STACK',
    techStack: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'POSTGRES'],
    url: '#', // Replace with actual project URL
    images: projectPlaceholders.aitc,
  },
  {
    title: 'FO Perpsectives',
    description: 'REACT APP, CAREERS PLATFORM',
    role: 'ROLE: WEB DESIGN, FULL-STACK',
    techStack: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'POSTGRES', 'CLOUDFLARE'],
    url: '#', // Replace with actual project URL
    images: projectPlaceholders.foPerspectives,
  },
];

function ProjectsSection() {
  return (
    <section className="bg-[#020108] py-24 px-8">
      <div className="max-w-[1728px] mx-auto space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={project.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image - Left side for even indices, right side for odd */}
              <div className={`h-[450px] transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 ${isEven ? '' : 'lg:order-2'}`}>
                <HoverFadeImage 
                  images={project.images}
                  alt={`${project.title} project screenshots`}
                  className="bg-[#f3f3f3]"
                />
              </div>
              
              {/* Content - Right side for even indices, left side for odd */}
              <div className={`text-white ${isEven ? '' : 'lg:order-1'}`}>
                <div className="flex items-baseline gap-4 mb-8">
                  <h2 className="uppercase">
                    {project.title}
                  </h2>
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-p2 uppercase hover:opacity-70 transition-opacity whitespace-nowrap"
                  >
                    [ OPEN ]
                  </a>
                </div>
                <p className="text-p2 mb-2 uppercase">
                  {project.description}
                </p>
                <p className="text-p2 mb-4 uppercase">
                  {project.role}
                </p>
                <div className="text-p2 uppercase">
                  <p className="text-p2 mb-2">TECH STACK:</p>
                  <ul className="custom-bullets ml-8 space-y-1">
                    {project.techStack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
