import { Code, Smartphone, Globe, Palette } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';
import ServiceCard from './components/ServiceCard';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with React, Vue, and modern frameworks.',
    features: ['Responsive Design', 'API Integration', 'Performance Optimization'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    features: ['React Native', 'Flutter', 'Progressive Web Apps'],
  },
  {
    icon: Globe,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development from frontend to backend infrastructure.',
    features: ['Node.js', 'Database Design', 'Cloud Deployment'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love.',
    features: ['User Research', 'Prototyping', 'Design Systems'],
  },
];

function Services() {
  const [ref, isVisible] = useFadeIn();

  return (
    <div className="min-h-screen">
      <section className="max-w-[1400px] mx-auto px-8 py-24">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-6xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Comprehensive solutions to help you build and grow your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
