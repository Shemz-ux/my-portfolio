# RevealText Component

A reusable scroll-triggered text reveal animation component that creates a "rising from the ground" effect using GSAP and SplitType.

## Features

- **Waterfall stagger animation**: Words cascade in sequence across lines
- **Viewport-triggered**: Animates when element enters viewport
- **Accessibility**: Respects `prefers-reduced-motion` preference
- **Customizable**: Configurable stagger delay, trigger point, duration, and easing
- **Clean cleanup**: Properly removes SplitType instances and ScrollTrigger listeners on unmount

## Usage

### Basic Usage

Wrap any text content with `RevealText` and add the `data-reveal-text` attribute to elements you want to animate:

```jsx
import RevealText from '../../components/RevealText';

function MyComponent() {
  return (
    <RevealText>
      <h1 data-reveal-text>This heading will animate</h1>
      <p data-reveal-text>This paragraph will animate too</p>
    </RevealText>
  );
}
```

### Custom Configuration

```jsx
<RevealText
  staggerDelay={0.06}        // Delay between each word (default: 0.04)
  triggerStart="top 80%"     // When to trigger (default: "top 85%")
  duration={0.7}             // Animation duration per word (default: 0.6)
  ease="power2.out"          // GSAP easing function (default: "power3.out")
  className="my-custom-class"
  as="section"               // Render as different element (default: "div")
>
  <h2 data-reveal-text>Custom animated text</h2>
</RevealText>
```

### Multiple Text Elements

The stagger carries through continuously across all `data-reveal-text` elements:

```jsx
<RevealText>
  <h1 data-reveal-text>Main Heading</h1>
  <p data-reveal-text>First paragraph that continues the waterfall</p>
  <p data-reveal-text>Second paragraph that continues the cascade</p>
</RevealText>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to render (required) |
| `staggerDelay` | number | 0.04 | Delay in seconds between each word animation |
| `triggerStart` | string | "top 85%" | ScrollTrigger start position |
| `duration` | number | 0.6 | Animation duration per word in seconds |
| `ease` | string | "power3.out" | GSAP easing function |
| `className` | string | "" | Additional CSS classes for container |
| `as` | string | "div" | HTML element to render as container |

## Important Notes

1. **Always add `data-reveal-text` attribute** to text elements you want to animate
2. **Preserve text wrapping**: SplitType maintains responsive line breaks
3. **Single trigger**: Animation fires once when element enters viewport
4. **Reduced motion**: Automatically uses simple opacity fade for users with motion preferences
5. **Memory management**: Component handles cleanup of GSAP/SplitType instances

## Animation Behavior

- Words start at `translateY(100%)` and `opacity: 0` (hidden below mask)
- Animate to `translateY(0)` and `opacity: 1` (visible at rest position)
- Each line wrapper has `overflow: hidden` to create the "ground" mask effect
- Stagger creates a continuous waterfall motion across all text elements

## Browser Support

Requires modern browsers with support for:
- CSS transforms
- IntersectionObserver (via GSAP ScrollTrigger)
- `prefers-reduced-motion` media query
