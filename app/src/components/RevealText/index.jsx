import { useScrollReveal } from '../../hooks/useScrollReveal';

function RevealText({ 
  children, 
  staggerDelay = 0.04, 
  triggerStart = 'top 85%',
  duration = 0.6,
  ease = 'power3.out',
  className = '',
  as: Component = 'div',
}) {
  const containerRef = useScrollReveal({
    staggerDelay,
    triggerStart,
    duration,
    ease,
  });

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
}

export default RevealText;
