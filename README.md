# Dawit Bayou Kassie — Portfolio

Personal portfolio site: full-stack developer, platform/DevOps engineer, and
creative designer. Built as a single-page React app with a light/dark theme,
resume-driven content, and section-by-section scroll navigation.

## Stack

- React 19 + Vite 7
- Tailwind CSS (class-based dark mode)
- Framer Motion (scroll-triggered animations)
- Zustand (persisted theme store)
- lucide-react (icons), react-scroll (in-page navigation)

## Structure

- `src/data/resume.js` — all resume content (skills, experience, education,
  projects). Edit this file to update what the site displays; components
  render from it rather than hardcoding copy.
- `src/store/themeStore.js` — persisted light/dark theme state.
- `src/components/` — one component per section (`Hero`, `About`, `Skills`,
  `Experience`, `Education`, `Projects`, `Contact`), plus `Navbar`,
  `Footer`, and `ThemeToggle`.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Deployment

Configured for Vercel (`vite.config.js` sets `base: "/"`). A `deploy` script
(`gh-pages -d dist`) is also available if publishing to GitHub Pages instead.
