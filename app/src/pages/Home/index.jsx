import { useFadeIn } from '@/hooks/useFadeIn';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';

function Home() {
  const [heroRef, heroVisible] = useFadeIn();
  const [featuresRef, featuresVisible] = useFadeIn();

  return (
    <div className="min-h-screen">
      <HeroSection heroRef={heroRef} heroVisible={heroVisible} />
      <FeaturesSection featuresRef={featuresRef} featuresVisible={featuresVisible} />
    </div>
  );
}

export default Home;
