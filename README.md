# Portfolio Website

My take on a modern portfolio website showcasing my projects and services with smooth animations and interactive UI elements.

## 🚀 Key Technologies

### Frontend Framework
- **React 19** - Latest React with improved performance and concurrent features
- **Vite 8** - Lightning-fast build tool and dev server
- **React Router DOM 7** - Client-side routing with nested layouts

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework with latest features
- **Lucide React** - Beautiful, consistent icon library
- **Custom Components** - Reusable UI components with modern design patterns

### Animation & Interactions
- **GSAP 3** - Professional-grade animation library for smooth, performant animations
- **Lenis** - Smooth scroll library for enhanced scrolling experience
- **SplitType** - Advanced text animation and manipulation
- **tw-animate-css** - Tailwind-integrated CSS animations

## ✨ Key Features

### 🎨 Interactive Components
- **HoverFadeImage** - Image transitions with hover effects
- **HoverRevealText** - Text reveal animations on hover
- **ParallaxHoverImage** - Parallax effects for dynamic visual depth
- **RevealText** - Scroll-triggered text animations
- **PageTransition** - Smooth page transitions between routes
- **LoadScreen** - Custom loading screen for initial page load

### 📱 Responsive Design
- Mobile-first approach with breakpoints for all screen sizes
- Fluid typography and spacing
- Adaptive layouts for optimal viewing on any device

### 🎯 User Experience
- **Smooth Scrolling** - Lenis integration for buttery-smooth scroll behavior
- **Scroll to Top** - Automatic scroll restoration on route changes
- **Loading States** - Elegant loading screen with completion callbacks
- **Navigation** - Sticky navbar with responsive menu

### 📄 Pages
- **Portfolio** - Showcase of featured projects with detailed tech stacks
- **Work** - Professional work experience and achievements
- **Services** - Service offerings and capabilities
- **Contact** - Contact information and inquiry form

### 🏗️ Architecture
- Component-based structure with clear separation of concerns
- Custom hooks for reusable logic (`useLenis`, `ScrollToTop`)
- Service layer for API integrations
- Utility functions for common operations
- Centralized styling with Tailwind configuration

## 🛠️ Project Structure

```
app/
├── src/
│   ├── assets/          # Images, icons, and static assets
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route-based page components
│   ├── services/        # API and external service integrations
│   ├── styling/         # Global styles and Tailwind config
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Root application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global CSS and Tailwind imports
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 📦 Installation

```bash
cd app
npm install
```

## 🚀 Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

Builds the application for production in the `dist` folder.

## 👀 Preview

```bash
npm run preview
```

Preview the production build locally.

## 🧹 Linting

```bash
npm run lint
```

Run ESLint to check code quality and consistency.

## 🌐 Deployment

Deployed on Vercel with automatic deployments from the main branch.

## 🎨 Design Philosophy

- **Performance First** - Optimized animations and lazy loading
- **Accessibility** - Semantic HTML and ARIA attributes
- **Modern Aesthetics** - Clean, minimalist design with purposeful animations
- **User-Centric** - Intuitive navigation and clear information hierarchy

## 📄 License

Private - All rights reserved by SD Atelier Ltd.

---

Built with ❤️ using React, Vite, and modern web technologies
