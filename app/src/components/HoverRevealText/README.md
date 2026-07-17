# HoverRevealText Component

A reusable hover-triggered text reveal animation component that creates a "rising from the ground" effect using GSAP and SplitType. Text animates in when hovering over the component or a parent element.

## Features

- **Hover-triggered animation**: Words cascade in on mouse enter, reverse on mouse leave
- **Waterfall stagger**: Words animate in sequence across lines
- **Reversible**: Smoothly animates back down when hover ends
- **Accessibility**: Respects `prefers-reduced-motion` preference
- **Customizable**: Configurable stagger delay, duration, and easing
- **Clean cleanup**: Properly removes SplitType instances on unmount

## Usage

### Basic Usage

Wrap text content with `HoverRevealText` and add the `data-hover-reveal-text` attribute to elements you want to animate:

```jsx
import HoverRevealText from '../../components/HoverRevealText';

function MyComponent() {
  return (
    <HoverRevealText>
      <h3 data-hover-reveal-text>Project Title</h3>
      <p data-hover-reveal-text>Project description</p>
    </HoverRevealText>
  );
}
```

### Triggered by Parent Element Hover

You can trigger the animation when hovering over a different element (like an image):

```jsx
<div 
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <img src="project.jpg" alt="Project" />
</div>

<HoverRevealText
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <h3 data-hover-reveal-text>Shows on image hover</h3>
</HoverRevealText>
```

### Custom Configuration

```jsx
<HoverRevealText
  staggerDelay={0.06}        // Delay between each word (default: 0.04)
  duration={0.7}             // Animation duration per word (default: 0.6)
  ease="power2.out"          // GSAP easing function (default: "power3.out")
  className="my-custom-class"
  as="section"               // Render as different element (default: "div")
>
  <h2 data-hover-reveal-text>Custom animated text</h2>
</HoverRevealText>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to render (required) |
| `staggerDelay` | number | 0.04 | Delay in seconds between each word animation |
| `duration` | number | 0.6 | Animation duration per word in seconds |
| `ease` | string | "power3.out" | GSAP easing function |
| `className` | string | "" | Additional CSS classes for container |
| `as` | string | "div" | HTML element to render as container |
| `onMouseEnter` | function | - | Additional mouse enter handler |
| `onMouseLeave` | function | - | Additional mouse leave handler |

## Important Notes

1. **Always add `data-hover-reveal-text` attribute** to text elements you want to animate
2. **Reversible animation**: Text animates out when hover ends
3. **Reduced motion**: Automatically uses simple opacity fade for users with motion preferences
4. **Memory management**: Component handles cleanup of GSAP/SplitType instances

## Animation Behavior

- **On hover**: Words rise from `translateY(100%)` to `translateY(0)` with opacity fade-in
- **On hover end**: Words descend back to `translateY(100%)` with opacity fade-out (faster)
- Each line wrapper has `overflow: hidden` to create the "ground" mask effect
- Stagger creates a continuous waterfall motion across all text elements

## Difference from RevealText

- **RevealText**: Scroll-triggered, fires once when entering viewport
- **HoverRevealText**: Hover-triggered, reversible animation on mouse enter/leave

## Browser Support

Requires modern browsers with support for:
- CSS transforms
- Mouse events
- `prefers-reduced-motion` media query
