import { useHoverReveal } from '../../hooks/useHoverReveal';

function HoverRevealText({ 
  children, 
  staggerDelay = 0.04, 
  duration = 0.6,
  ease = 'power3.out',
  className = '',
  as: Component = 'div',
  onMouseEnter,
  onMouseLeave,
  isHovered = null,
}) {
  const {
    containerRef,
    handleMouseEnter: internalHandleMouseEnter,
    handleMouseLeave: internalHandleMouseLeave,
  } = useHoverReveal({
    staggerDelay,
    duration,
    ease,
    externalIsHovered: isHovered,
  });

  const handleMouseEnter = (e) => {
    internalHandleMouseEnter();
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e) => {
    internalHandleMouseLeave();
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <Component 
      ref={containerRef} 
      className={className}
      onMouseEnter={isHovered === null ? handleMouseEnter : onMouseEnter}
      onMouseLeave={isHovered === null ? handleMouseLeave : onMouseLeave}
    >
      {children}
    </Component>
  );
}

export default HoverRevealText;
