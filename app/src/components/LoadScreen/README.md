# LoadScreen Component

A full-screen loading overlay with an animated percentage counter that displays only on the first page load of a session.

## Features

- **Session-gated**: Shows only on first load using `sessionStorage` — won't replay on subsequent navigation or refreshes within the same browser session
- **GSAP count-up animation**: Smoothly tweens from 0% to 100% with non-linear easing (faster in middle, easing at start/end)
- **Simulated progress**: Fixed 2.2s duration, not tied to actual asset loading
- **Swipe-up exit**: Reuses the same upward transition as the page transition overlay for visual consistency
- **Accessibility**: Respects `prefers-reduced-motion` — uses instant fade instead of swipe for users with motion sensitivity

## Usage

Mount at the root layout level (already integrated in `App.jsx`):

```jsx
import LoadScreen from '@/components/LoadScreen';

function App() {
  const [loadScreenComplete, setLoadScreenComplete] = useState(false);

  return (
    <>
      <LoadScreen onComplete={() => setLoadScreenComplete(true)} />
      {/* Rest of app */}
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onComplete` | function | - | Callback fired when the loader finishes and exits (optional) |

## Behavior

1. **First load check**: On mount, checks `sessionStorage` for `portfolio_load_screen_shown` key
2. **If not shown**: Displays full-screen black overlay with percentage counter
3. **Count-up**: GSAP tweens the counter from 0 to 100 over 2.2s with `power2.inOut` easing
4. **Hold**: Pauses briefly at 100% (200ms) for visual emphasis
5. **Exit**: Swipes upward (`translateY(-100%)`) over 0.9s, then calls `onComplete`
6. **If already shown**: Skips entirely and immediately calls `onComplete`

## SessionStorage Key

**Key**: `portfolio_load_screen_shown`  
**Value**: `'true'` (set after first display)  
**Scope**: Per browser session — cleared when all tabs/windows close

## Timing Constants

- `LOAD_DURATION`: 2.2s (count-up animation)
- `HOLD_DURATION`: 0.2s (pause at 100%)
- `EXIT_DURATION`: 0.9s (swipe-up transition)
- Total: ~3.3s from mount to complete

## Accessibility

- Counter uses large, high-contrast text (`text-h1` class, white on black)
- Respects `prefers-reduced-motion`: reduces exit animation to 0.3s simple fade
- Counter itself is kept (informational, not purely decorative)

## Z-Index

Uses `z-[200]` to ensure it sits above all other content, including the page transition overlay (`z-[150]`).
