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

## Working on another machine

Everything the site needs is in this repository: `git clone https://github.com/DawitBK/Portfolio.git`, `npm install`, `npm run dev`. No secret is needed to run or build it.

Two things live outside git on purpose:

- **Vercel settings.** The site deploys from `main` to the Vercel project `portfolio`. That project holds one production variable, `DEMO_HEALTH_URL`, the public health address of the demo server's identity service, read by `api/demo-status.js` to show whether the live demos are online. In development the status check is simply unavailable and the page behaves as if the demos are up. To inspect or change the variable on a new machine: `vercel link --project portfolio`, then `vercel env ls` (the `.vercel/` folder is git-ignored).
- **The resume PDF.** `resume/resume.html` is the source. Run `node scripts/make-resume-pdf.mjs` (it explains the one-time Playwright install) to rebuild the PDF in `resume/` and `public/`, then commit both.

The demo sandbox login is public by design and lives in `src/data/demoAccess.js`. The demo servers themselves run on one PC, described in the [meridian-infra](https://github.com/DawitBK/meridian-infra) runbook.

## Deployment

Vercel builds every push to `main` (`vite.config.js` sets `base: "/"`). A `deploy` script (`gh-pages -d dist`) exists for GitHub Pages.
