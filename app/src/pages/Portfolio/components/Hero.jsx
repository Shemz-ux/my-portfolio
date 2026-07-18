import { useEffect, useState } from 'react';
import RevealText from '../../../components/RevealText';

function Hero() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = () => {
      return currentTime.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/London',
        hour12: false
      });
    };

  return (
    <section className="relative bg-[#f3f3f3] py-6 px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto">
        <RevealText>
          {/* Main Heading */}
          <div className="relative mt-16 sm:mt-24 md:mt-32 lg:mt-90">
            <div className="mb-4">
              <p className="text-p2 text-black text-left uppercase" data-reveal-text>
                [ SOFTWARE ENGINEER ]
              </p>
            </div>
            <h1 className="text-black uppercase font-light leading-tight sm:leading-normal" data-reveal-text>
              DEVELOPING EXPERIENCES
            </h1>
            <h1 className="text-black uppercase font-light leading-tight sm:leading-normal sm:pl-8 md:pl-16 lg:pl-[356px] sm:-mt-2 md:-mt-4" data-reveal-text>
              CREATING WITH VISION
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 sm:gap-8 items-center">
                <p className="text-p2 text-black uppercase" data-reveal-text>
                  SHEM K. N
                </p>
                <p className="text-p2" data-reveal-text>{formatTime()} GMT</p>
              </div>
            <div>
              <p className="text-p2 text-black text-right uppercase" data-reveal-text>
                [ DIGITAL DESIGNER ]
              </p>
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

export default Hero;
