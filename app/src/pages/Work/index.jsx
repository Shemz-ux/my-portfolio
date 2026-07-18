import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import HoverFadeImage from '../../components/HoverFadeImage';
import RevealText from '../../components/RevealText';
import HoverRevealText from '../../components/HoverRevealText';
import { projectPlaceholders } from '../../assets/images/placeholders';

const projects = [
  {
    id: 1,
    title: 'WEBSITE 1',
    tech: 'REACT JS, EXPRESS JS, POSTGRES, CLOUDFLARE',
    description: 'WEBSITE DESIGN & DEVELOPMENT',
    images: projectPlaceholders.workProject1,
  },
  {
    id: 2,
    title: 'WEBSITE 2',
    tech: 'REACT JS, EXPRESS JS, POSTGRES, CLOUDFLARE',
    description: 'WEBSITE DESIGN & DEVELOPMENT',
    images: projectPlaceholders.workProject2,
  },
];

function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] py-6 sm:py-8 px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* Header Section */}
        <RevealText>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
            <div className="flex flex-wrap items-baseline gap-4 sm:gap-8">
              <h2 className="text-black uppercase" data-reveal-text>
                MY WORK
              </h2>
              <span className="text-p2 text-black uppercase" data-reveal-text>
                [ WEBSITES ]
              </span>
            </div>

            {/* Navigation Arrows - Larger touch targets */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={handlePrevious}
                className="p-3 sm:p-2 hover:opacity-60 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous project"
              >
                <ChevronLeft size={34} strokeWidth={0.5} className="text-black" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 sm:p-2 hover:opacity-60 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Next project"
              >
                <ChevronRight size={34} strokeWidth={0.5} className="text-black" />
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-black/20 mb-8 sm:mb-12 md:mb-16" />
        </RevealText>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4 sm:space-y-6">
              {/* Project Image Placeholder */}
              <div 
                className="h-[280px] sm:h-[350px] md:h-[400px] lg:h-[466px] w-full transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <HoverFadeImage
                  images={project.images}
                  alt={`${project.title} screenshots`}
                  className="bg-[#d9d9d9]"
                />
              </div>

              {/* Project Info */}
              <HoverRevealText isHovered={hoveredProject === project.id}>
                <h3 className="text-black uppercase mb-2" data-hover-reveal-text>
                  {project.title}
                </h3>
                <p className="text-p2 text-black uppercase mb-1" data-hover-reveal-text>
                  {project.tech}
                </p>
                <p className="text-p2 text-black uppercase" data-hover-reveal-text>
                  {project.description}
                </p>
              </HoverRevealText>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
