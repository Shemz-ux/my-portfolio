import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import TechnologiesSection from './components/TechnologiesSection';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsSection />
      <TechnologiesSection />
      <AboutSection />
      <ExpertiseSection />
    </div>
  );
}

export default Portfolio;
