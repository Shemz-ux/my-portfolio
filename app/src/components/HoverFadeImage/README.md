# HoverFadeImage Component

A reusable React component that displays a smooth crossfade carousel of images on hover.

## Features

- **Smooth crossfade transitions** between images (500ms with cubic-bezier easing)
- **Auto-cycling** on hover (~1.4s per image)
- **Accessibility**: Respects `prefers-reduced-motion` preference
- **No layout shift**: Images are absolutely positioned within a container
- **Reusable**: Accepts an array of images as a prop

## Usage

```jsx
import HoverFadeImage from '../components/HoverFadeImage';

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
];

<HoverFadeImage 
  images={images}
  alt="Project screenshots"
  className="bg-gray-200"
/>
```

## Props

- `images` (array, required): Array of image URLs or data URIs
- `alt` (string, optional): Alt text for images (default: 'Project image')
- `className` (string, optional): Additional CSS classes for the container

## Behavior

- **On hover**: Auto-cycles through images with crossfade
- **On mouse leave**: Fades back to the first image
- **Reduced motion**: Disables auto-cycling for users with `prefers-reduced-motion: reduce`

## Related Hook

Uses `useImageHoverCycle` hook from `/hooks/useImageHoverCycle.js`
