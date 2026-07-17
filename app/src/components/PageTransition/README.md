# PageTransition Component

A full-screen page transition overlay that displays the destination page name and swipes upward to reveal the new content when navigating between routes.

## Features

- **Route-aware**: Automatically detects route changes and displays the destination page name
- **Smooth transitions**: Page name fades in with slight upward motion, then overlay swipes up to reveal content
- **Navigation support**: Works with link clicks, browser back/forward, and programmatic navigation
- **Content masking**: New page content is hidden until the overlay fully clears — no flash of content underneath
- **Accessibility**: Respects `prefers-reduced-motion` — uses instant cut instead of animated swipe

## Usage

Wrap your route content at the layout level (already integrated in `App.jsx`):

```jsx
import PageTransition from '@/components/PageTransition';

function App() {
  return (
    <main>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </main>
  );
}
```

## Route Name Mapping

Page names are configured in the `ROUTE_NAMES` object:

```jsx
const ROUTE_NAMES = {
  '/': 'Portfolio',
  '/work': 'Work',
  '/services': 'Services',
  '/contact': 'Contact',
};
```

To add new routes, simply add entries to this object. Unknown routes default to `'Page'`.

## Behavior

1. **Route change detected**: Component monitors `location.pathname` via React Router
2. **Overlay appears**: Full-screen black overlay covers the viewport instantly
3. **Name animates in**: Page name fades in with slight upward motion (0.5s delay)
4. **Brief pause**: Holds for ~0.3s to let the user register the destination
5. **Swipe up**: Overlay translates upward (`translateY(-100%)`) over 0.75s
6. **Content revealed**: New page content becomes visible as overlay clears

## Timing Constants

- `NAME_ANIMATION_DURATION`: 0.5s (page name fade + rise)
- `NAME_ANIMATION_DELAY`: 0.1s (delay before name appears)
- `SWIPE_DURATION`: 0.75s (overlay exit transition)
- Total visible time: ~1.5s per transition

## Accessibility

- Page name uses large, high-contrast text (`text-h2` class, white on black, uppercase)
- Respects `prefers-reduced-motion`: reduces all animations to 0.2s simple fade
- Content is hidden via `visibility: hidden` (not `display: none`) to preserve layout

## Z-Index

Uses `z-[150]` to sit above page content but below the initial load screen (`z-[200]`).

## Navigation Types

Works correctly with:
- `<Link>` component clicks
- Browser back/forward buttons
- Programmatic `navigate()` calls
- Direct URL entry (if route changes)

## Important Notes

1. **First load**: The initial page load does NOT trigger a transition — only subsequent navigation does
2. **Same route**: Navigating to the current route is ignored (no transition)
3. **Content timing**: New page content should be ready to render immediately — this component masks it during the transition, it doesn't delay mounting
