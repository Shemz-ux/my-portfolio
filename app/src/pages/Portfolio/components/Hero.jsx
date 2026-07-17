
import { useEffect, useState } from 'react';

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
    <section className="relative bg-[#f3f3f3] py-6 px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* Main Heading */}
        <div className="relative mt-90">
          <div className="mb-4">
            <p className="text-p2 text-black text-left uppercase">
              [ SOFTWARE ENGINEER ]
            </p>
          </div>
          <h1 className="text-black uppercase font-light leading-normal whitespace-nowrap">
            DEVELOPING EXPERIENCES
          </h1>
          <h1 className="text-black uppercase font-light leading-normal pl-[356px] -mt-4">
            CREATING WITH VISION
          </h1>
          <div className="mt-6 flex gap-8 items-center">
              <p className="text-p2 text-black uppercase">
                SHEM K. N
              </p>
              <p className="text-p2">{formatTime()} GMT</p>
            </div>
          <div>
            <p className="text-p2 text-black text-right uppercase">
              [ DIGITAL DESIGNER ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
