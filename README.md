# Dawit Bayou Kassie: portfolio

Personal portfolio of a solutions architect and full-stack engineer. A single-page React app with light and dark themes that follow the system setting, a keyboard command palette, an interactive delivery lifecycle, a filterable skills explorer and a sandbox demo login for the live systems.

Live: [dawitbkportfolio.vercel.app](https://dawitbkportfolio.vercel.app)

## Stack

- React 19 and Vite 7
- Tailwind CSS 3 with CSS-variable colour tokens (class-based dark mode)
- Zustand for the theme and UI stores
- No animation or icon libraries: motion is CSS and small hooks, icons are inline SVG. Everything honours `prefers-reduced-motion`.

## Structure

- `src/data/content.js`: every word of the site (profile, capabilities, lifecycle, projects, demos, showcases, skills). Edit this to change what the site says.
- `src/data/demoAccess.js`: the shared sandbox administrator login shown in the Demos section.
- `src/data/ui.js`: presentation-only labels and groupings.
- `src/components/`: one component per section, plus the command palette, system map, copy buttons and toast.
- `src/hooks/`, `src/lib/`: scroll, in-view, count-up and pointer effects; clipboard and navigation helpers.
- `src/store/`: theme and UI state.
- `public/`: portrait, resume PDF, `robots.txt`, `sitemap.xml`. `resume/` holds the resume source (`resume.html`) and its PDF.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Deployment

Vercel builds every push to `main` (`vite.config.js` sets `base: "/"`). A `deploy` script (`gh-pages -d dist`) exists for GitHub Pages.
