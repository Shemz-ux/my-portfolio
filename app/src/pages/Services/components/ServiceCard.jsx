import { useFadeIn } from '@/hooks/useFadeIn';

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const [serviceRef, serviceVisible] = useFadeIn();

  return (
    <div
      ref={serviceRef}
      className={`p-8 border border-[#0A0A0A]/10 rounded-2xl hover:border-[#0A0A0A]/30 transition-all duration-1000 ${
        serviceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A0A0A] mb-4">
        <Icon className="text-white" size={24} />
      </div>
      <h2 className="text-2xl font-semibold text-[#0A0A0A] mb-3">
        {service.title}
      </h2>
      <p className="text-[#9CA3AF] mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;
