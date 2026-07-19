import { useImageHoverCycle } from '../../hooks/useImageHoverCycle';

function HoverFadeImage({ images, alt = 'Project image', className = '' }) {
  const {
    currentIndex,
    handleMouseEnter,
    handleMouseLeave,
    transitionDuration,
    prefersReducedMotion,
    elementRef,
  } = useImageHoverCycle(images, {
    interval: 1400,
    transitionDuration: 500,
  });

  if (!images || images.length === 0) {
    return (
      <div className={`relative w-full h-full bg-[#f3f3f3] ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          No images
        </div>
      </div>
    );
  }

  return (
    <div
      ref={elementRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${alt} ${index + 1}`}
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            opacity: currentIndex === index ? 1 : 0,
            transition: prefersReducedMotion
              ? 'none'
              : `opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            pointerEvents: currentIndex === index ? 'auto' : 'none',
          }}
        />
      ))}
    </div>
  );
}

export default HoverFadeImage;
