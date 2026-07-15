import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'WEBSITE 1',
    tech: 'REACT JS, EXPRESS JS, POSTGRES, CLOUDFLARE',
    description: 'WEBSITE DESIGN & DEVELOPMENT',
    image: null, // Placeholder
  },
  {
    id: 2,
    title: 'WEBSITE 1',
    tech: 'REACT JS, EXPRESS JS, POSTGRES, CLOUDFLARE',
    description: 'WEBSITE DESIGN & DEVELOPMENT',
    image: null, // Placeholder
  },
];

function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-baseline gap-8">
            <h1 className="font-['Jost'] font-light text-[clamp(3rem,6vw,5.3125rem)] leading-none text-black uppercase">
              MY WORK
            </h1>
            <span className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-black uppercase">
              [ WEBSITES ]
            </span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevious}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} strokeWidth={1} className="text-black" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Next project"
            >
              <ChevronRight size={24} strokeWidth={1} className="text-black" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {projects.map((project) => (
            <div key={project.id} className="space-y-6">
              {/* Project Image Placeholder */}
              <div className="bg-[#d9d9d9] h-[466px] w-full" />

              {/* Project Info */}
              <div>
                <h2 className="font-['Jost'] font-light text-[clamp(2rem,4vw,4rem)] leading-none text-black uppercase mb-2">
                  {project.title}
                </h2>
                <p className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-black uppercase mb-1">
                  {project.tech}
                </p>
                <p className="font-['Jost'] font-light text-[clamp(0.875rem,1.5vw,1.25rem)] text-black uppercase">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="border-t border-black/20 mb-16" />
      </div>
    </div>
  );
}

export default Work;
