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
- `public/`: portrait, resume PDF, share picture (`robots.txt`, `sitemap.xml`, `llms.txt` and the rest are generated at build time). `resume/` holds the resume source (`resume.html`) and its PDF.

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

- **Vercel settings.** The site deploys from `main` to the Vercel project `portfolio`. That project holds two production variables read by `api/demo-status.js` to show whether the live demos are online: `DEMO_HEALTH_URL`, the public health address of the demo server's identity service, and `DEMO_SIGNIN_URL`, the public sign-in settings address of one product app (`.../app-api/retail-os/api/v1/auth/oidc/config`). The demos count as online only when both answer, so "online" means a visitor can sign in, not just that a process is running. In development the status check is simply unavailable and the page behaves as if the demos are up. To inspect or change the variable on a new machine: `vercel link --project portfolio`, then `vercel env ls` (the `.vercel/` folder is git-ignored).
- **The resume PDF.** `resume/resume.html` is the source. Run `node scripts/make-resume-pdf.mjs` (it explains the one-time Playwright install) to rebuild the PDF in `resume/` and `public/`, then commit both.

The demo sandbox login is public by design and lives in `src/data/demoAccess.js`. The demo servers themselves run on one PC with Docker Compose, from a private platform repository.

## Search and AI visibility

The page is a React app, but the production build ships it already rendered, so search engines and AI crawlers that do not run scripts read the same text a visitor sees. `npm run build` is three steps: the browser build, a server build of the same page (`src/entry-server.jsx`), and `scripts/postbuild.mjs`, which writes the HTML into `dist/index.html` and generates, from `src/data/content.js` only (the facts are written once): the title, description, canonical link, social cards and JSON-LD (`WebSite`, `ProfilePage`, `Person`); the plain `/resume` and `/projects` pages; `llms.txt` and `llms-full.txt` for AI assistants; `resume.json` (the JSON Resume format job platforms read); `robots.txt` (search and AI crawlers named and welcome); `sitemap.xml`; and the IndexNow key file.

- The public address is `VITE_SITE_URL` in `.env.production`. When the site moves to its own domain, change that one line and redeploy.
- `VITE_GOOGLE_SITE_VERIFICATION` and `VITE_BING_SITE_VERIFICATION` take the "HTML tag" codes from Search Console and Bing Webmaster Tools; they are written out only when set.
- After a deploy, `npm run indexnow` pings Bing, Yandex and the other IndexNow engines with every page in the sitemap. Google takes the sitemap through Search Console instead.
- `npm run make:og` redraws the 1200x630 share picture (`public/og-image.png`) from the same data (needs Playwright, see the script).
- Search ranking is earned, not set: the build makes the site readable and describable; links from other sites, a domain of its own and time do the rest.

## Deployment

Vercel builds every push to `main` (`vite.config.js` sets `base: "/"`). A `deploy` script (`gh-pages -d dist`) exists for GitHub Pages.
