import { Zap, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with modern technology for optimal performance.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and reliability you can trust.',
  },
  {
    icon: Sparkles,
    title: 'Modern Design',
    description: 'Beautiful, responsive design that works everywhere.',
  },
];

function FeaturesSection({ featuresRef, featuresVisible }) {
  return (
    <section
      ref={featuresRef}
      className={`max-w-[1400px] mx-auto px-8 py-24 transition-all duration-1000 delay-300 ${
        featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-4xl font-bold text-[#0A0A0A] text-center mb-16">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0A0A0A] mb-6">
                <Icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#9CA3AF]">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturesSection;
