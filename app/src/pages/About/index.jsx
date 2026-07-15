import { useFadeIn } from '@/hooks/useFadeIn';

function About() {
  const [ref, isVisible] = useFadeIn();

  return (
    <div className="min-h-screen">
      <section
        ref={ref}
        className={`max-w-[1400px] mx-auto px-8 py-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-6xl font-bold text-[#0A0A0A] mb-8 tracking-tight">
          About Us
        </h1>
        <div className="max-w-3xl">
          <p className="text-lg text-[#9CA3AF] mb-6 leading-relaxed">
            We're a team of passionate developers and designers dedicated to creating
            exceptional web experiences. Our mission is to help businesses and
            individuals bring their digital visions to life.
          </p>
          <p className="text-lg text-[#9CA3AF] mb-6 leading-relaxed">
            With years of experience in modern web development, we specialize in
            building fast, secure, and beautiful applications using the latest
            technologies.
          </p>
          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            Whether you're a startup looking to launch your first product or an
            established business seeking to modernize your digital presence, we're
            here to help you succeed.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
