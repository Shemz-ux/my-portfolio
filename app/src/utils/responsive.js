export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

export const getViewportWidth = () => {
  if (typeof window === 'undefined') return 0;
  return window.innerWidth;
};

export const breakpoints = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
};

export const isBreakpoint = {
  mobile: () => getViewportWidth() < breakpoints.mobile,
  tablet: () => getViewportWidth() >= breakpoints.mobile && getViewportWidth() < breakpoints.tablet,
  desktop: () => getViewportWidth() >= breakpoints.tablet,
};
