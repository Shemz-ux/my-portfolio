import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import HoverFadeImage from '../../components/HoverFadeImage';
import RevealText from '../../components/RevealText';
import HoverRevealText from '../../components/HoverRevealText';
import { projectPlaceholders } from '../../assets/images/placeholders';

gsap.registerPlugin(Draggable);

const projects = [
  {
    id: 1,
    title: 'OPPORTUNITY CENTRAL',
    tech: 'REACT JS, EXPRESS JS, POSTGRES, CLOUDFLARE',
    description: 'WEBSITE DESIGN & DEVELOPMENT',
    images: projectPlaceholders.oc,
  },
  {
    id: 2,
    title: 'AITC',
    tech: 'REACT JS, EXPRESS JS, POSTGRES, CLOUDFLARE',
    description: 'WEBSITE DESIGN & DEVELOPMENT',
    images: projectPlaceholders.aitc,
  },
  {
    id: 3,
    title: 'FO PERSPECTIVES',
    tech: 'VUE JS, NODE JS, MONGODB, AWS',
    description: 'E-COMMERCE PLATFORM',
    images: projectPlaceholders.foPerspectives,
  },
  {
    id: 4,
    title: 'STUDIO',
    tech: 'FIGMA PROTOTYPING',
    description: 'WEB DESIGN',
    images: projectPlaceholders.studio,
  },
  {
    id: 5,
    title: 'WARHEADS',
    tech: 'JAVASCRIPT, HTML, CSS',
    description: 'UI/UX DESIGN, GAME DEVELOPMENT, ARTIFICIAL INTELLIGENCE',
    images: projectPlaceholders.warHeads,
  }
];

function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });
  
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const draggableInstance = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const snapToCard = (index) => {
    if (!trackRef.current || !containerRef.current) return;
    
    const card = trackRef.current.children[index];
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 32;
    
    const targetX = -(index * (cardWidth + gap));
    
    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.6,
      ease: 'power2.out',
      onUpdate: () => {
        const totalWidth = projects.length * (cardWidth + gap) - gap;
        const containerWidth = containerRef.current.offsetWidth;
        const maxScroll = totalWidth - containerWidth;
        const currentScroll = Math.abs(gsap.getProperty(trackRef.current, 'x'));
        const progress = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
        setScrollProgress(Math.min(100, progress));
      },
    });
    
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    snapToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    snapToCard(newIndex);
  };

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    const card = trackRef.current.children[0];
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 32;
    const totalWidth = projects.length * (cardWidth + gap) - gap;
    const containerWidth = containerRef.current.offsetWidth;
    const maxX = 0;
    const minX = -(totalWidth - containerWidth);

    draggableInstance.current = Draggable.create(trackRef.current, {
      type: 'x',
      bounds: { minX, maxX },
      inertia: true,
      snap: (endValue) => {
        const index = Math.round(-endValue / (cardWidth + gap));
        const clampedIndex = Math.max(0, Math.min(projects.length - 1, index));
        setCurrentIndex(clampedIndex);
        return -(clampedIndex * (cardWidth + gap));
      },
      onDrag: function() {
        const maxScroll = totalWidth - containerWidth;
        const currentScroll = Math.abs(this.x);
        const progress = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
        setScrollProgress(Math.min(100, progress));
      },
      onThrowUpdate: function() {
        const maxScroll = totalWidth - containerWidth;
        const currentScroll = Math.abs(this.x);
        const progress = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
        setScrollProgress(Math.min(100, progress));
      },
    })[0];

    return () => {
      if (draggableInstance.current) {
        draggableInstance.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (draggableInstance.current) {
        draggableInstance.current.kill();
        draggableInstance.current = null;
      }
      
      setTimeout(() => {
        if (!trackRef.current || !containerRef.current) return;
        
        const card = trackRef.current.children[0];
        if (!card) return;

        const cardWidth = card.offsetWidth;
        const gap = 32;
        const totalWidth = projects.length * (cardWidth + gap) - gap;
        const containerWidth = containerRef.current.offsetWidth;
        const maxX = 0;
        const minX = -(totalWidth - containerWidth);

        draggableInstance.current = Draggable.create(trackRef.current, {
          type: 'x',
          bounds: { minX, maxX },
          inertia: true,
          snap: (endValue) => {
            const index = Math.round(-endValue / (cardWidth + gap));
            const clampedIndex = Math.max(0, Math.min(projects.length - 1, index));
            setCurrentIndex(clampedIndex);
            return -(clampedIndex * (cardWidth + gap));
          },
          onDrag: function() {
            const maxScroll = totalWidth - containerWidth;
            const currentScroll = Math.abs(this.x);
            const progress = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
            setScrollProgress(Math.min(100, progress));
          },
          onThrowUpdate: function() {
            const maxScroll = totalWidth - containerWidth;
            const currentScroll = Math.abs(this.x);
            const progress = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
            setScrollProgress(Math.min(100, progress));
          },
        })[0];
        
        snapToCard(currentIndex);
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

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
          <div className="border-t border-black/20 mb-8 sm:mb-12 md:mb-16" style={{ width: '100%' }} />
        </RevealText>

        {/* Draggable Carousel */}
        <div ref={containerRef} className="overflow-hidden mb-16 sm:mb-24">
          <div
            ref={trackRef}
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            style={{ willChange: 'transform' }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full lg:w-[calc(50%-1rem)] space-y-4 sm:space-y-6"
              >
                {/* Project Image */}
                <div
                  className="h-[280px] sm:h-[350px] md:h-[400px] lg:h-[466px] w-full transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1"
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
                <HoverRevealText isHovered={isMobile || hoveredProject === project.id}>
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

        {/* Progress Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="h-[2px] bg-black/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-black origin-left"
              style={{
                width: `${scrollProgress}%`,
                transition: 'width 0.1s ease-out',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
