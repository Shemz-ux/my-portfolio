import HoverFadeImage from '../../../components/HoverFadeImage';
import RevealText from '../../../components/RevealText';
import { projectPlaceholders } from '../../../assets/images/placeholders';

const projects = [
  {
    title: 'OC',
    description: 'REACT APP, L&D CONSULTANCY',
    role: 'ROLE: WEB DESIGN, API DESIGN, DATABASE DESIGN',
    techStack: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'MONGODB'],
    url: 'https://opportunitycentral-app.vercel.app/', // Replace with actual project URL
    images: projectPlaceholders.oc,
  },
  {
    title: 'Studio',
    description: 'STUDIO BOOKING PLATFORM',
    role: 'ROLE: UI/UX DESIGN, PROTOTYPING',
    techStack: ['FIGMA', 'EXCALIDRAW'],
    url: 'https://www.figma.com/make/tES61YQdjJTJnXbTXj558H/Studio-Booking-Website-Design?code-node-id=0-9&p=f&t=4pHIQQZg67geGZTk-0&fullscreen=1', // Replace with actual project URL
    images: projectPlaceholders.studio,
  },
  {
    title: 'AITC',
    description: 'REACT APP, PROFESSIONAL DEVELOPMENT',
    role: 'ROLE: WEB DESIGN, FULL-STACK',
    techStack: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS'],
    url: 'https://www.aitc.network/', // Replace with actual project URL
    images: projectPlaceholders.aitc,
  },
  {
    title: 'FO Perpsectives',
    description: 'REACT APP, CAREERS PLATFORM',
    role: 'ROLE: WEB DESIGN, FULL-STACK',
    techStack: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'POSTGRES', 'CLOUDFLARE'],
    url: 'https://www.foperspectives.co.uk/', // Replace with actual project URL
    images: projectPlaceholders.foPerspectives,
  },
];

function ProjectsSection() {
  return (
    <section className="bg-[#020108] py-12 sm:py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto space-y-12 sm:space-y-16 md:space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={project.title} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Image - Left side for even indices, right side for odd */}
              <div className={`w-full aspect-[1.84/1] transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 ${isEven ? '' : 'lg:order-2'}`}>
                <HoverFadeImage 
                  images={project.images}
                  alt={`${project.title} project screenshots`}
                  className="bg-black"
                />
              </div>
              
              {/* Content - Right side for even indices, left side for odd */}
              <RevealText className={`text-white ${isEven ? '' : 'lg:order-1'}`}>
                <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <h2 className="uppercase" data-reveal-text>
                    {project.title}
                  </h2>
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-p2 uppercase hover:opacity-70 transition-opacity whitespace-nowrap"
                    data-reveal-text
                  >
                    [ OPEN ]
                  </a>
                </div>
                <p className="text-p2 mb-2 uppercase" data-reveal-text>
                  {project.description}
                </p>
                <p className="text-p2 mb-4 uppercase" data-reveal-text>
                  {project.role}
                </p>
                <div className="text-p2 uppercase">
                  <p className="text-p2 mb-2" data-reveal-text>TECH STACK:</p>
                  <ul className="ml-4 sm:ml-8 space-y-1 list-none">
                    {project.techStack.map((tech) => (
                      <li key={tech} className="pl-4 sm:pl-6" data-reveal-text>-- {tech}</li>
                    ))}
                  </ul>
                </div>
              </RevealText>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
