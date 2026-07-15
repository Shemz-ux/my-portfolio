import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function HeroSection({ heroRef, heroVisible }) {
  return (
    <section
      ref={heroRef}
      className={`max-w-[1400px] mx-auto px-8 py-24 text-center transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h1 className="text-6xl md:text-7xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
        Build Something
        <br />
        <span className="text-[#9CA3AF]">Amazing Today</span>
      </h1>
      <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto mb-8">
        Create beautiful, modern web experiences with our cutting-edge platform.
        Everything you need to build your next project.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A0A0A] text-white rounded-full text-sm font-medium hover:bg-[#0A0A0A]/90 transition-colors"
      >
        Get Started
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}

export default HeroSection;
