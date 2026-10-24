#!/usr/bin/env node
/**
 * Runs after `vite build` and `vite build --ssr` (see the build script). Everything a crawler, an AI assistant or a job
 * platform reads is produced here from src/data/content.js, so the facts are written once:
 *
 *   dist/index.html      the page rendered to HTML (React takes it over in the browser), with title, canonical, social cards
 *                        and structured data (Person, ProfilePage, WebSite)
 *   dist/resume.html     the resume as a plain, fast page        -> /resume
 *   dist/projects.html   the systems and open-source work        -> /projects
 *   dist/llms.txt, llms-full.txt, resume.json, robots.txt, sitemap.xml, <indexnow key>.txt
 *
 * The site address comes from VITE_SITE_URL in .env.production. Optional: VITE_GOOGLE_SITE_VERIFICATION,
 * VITE_BING_SITE_VERIFICATION and VITE_INDEXNOW_KEY (each is written out only when set).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { loadEnv } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const env = loadEnv('production', root, 'VITE_');
const SITE = (env.VITE_SITE_URL || '').replace(/\/+$/, '');
if (!/^https?:\/\//.test(SITE)) {
    console.error('VITE_SITE_URL is not set. Put the public address of the site in .env.production (no trailing slash).');
    process.exit(1);
}
const today = new Date().toISOString().slice(0, 10);

const c = await import(pathToFileURL(path.join(root, 'src/data/content.js')).href);
const { person, seo, proof, atAGlance, capabilities, production, openSource, showcase, demos, experience, skills, education, languages } = c;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');
const last = (url) => url.replace(/\/+$/, '').split('/').pop();
const [city, country] = person.location.split(',').map((s) => s.trim());
const write = (name, text) => fs.writeFileSync(path.join(dist, name), text);

/* ---------- structured data ---------- */
const id = (frag) => ({ '@id': `${SITE}/#${frag}` });
const alumni = [...new Set(education.map((e) => e.place))].map((name) => ({
    '@type': /universit|institute/i.test(name) ? 'CollegeOrUniversity' : 'EducationalOrganization',
    name,
}));
const personNode = {
    '@type': 'Person',
    '@id': `${SITE}/#person`,
    name: person.name,
    jobTitle: person.role,
    description: seo.summary,
    url: `${SITE}/`,
    image: `${SITE}/profile-720.jpg`,
    email: `mailto:${person.email}`,
    address: { '@type': 'PostalAddress', addressLocality: city, addressCountry: seo.countryCode },
    homeLocation: { '@type': 'Place', name: person.location },
    knowsLanguage: seo.spoken.map((l) => ({ '@type': 'Language', name: l.name, alternateName: l.code })),
    knowsAbout: seo.topics,
    hasOccupation: { '@type': 'Occupation', name: 'Software engineer', occupationLocation: { '@type': 'City', name: city } },
    alumniOf: alumni,
    sameAs: [person.github, person.linkedin],
    mainEntityOfPage: `${SITE}/`,
};
const websiteNode = {
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: `${SITE}/`,
    name: person.name,
    description: seo.description,
    inLanguage: 'en',
    publisher: id('person'),
};
const profileNode = (url, name, description) => ({
    '@type': 'ProfilePage',
    '@id': `${url}#profile`,
    url,
    name,
    description,
    inLanguage: 'en',
    dateModified: today,
    isPartOf: id('website'),
    about: id('person'),
    mainEntity: id('person'),
});
const crumbs = (...items) => ({
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: url })),
});

/* ---------- head tags ---------- */
const verification = [
    env.VITE_GOOGLE_SITE_VERIFICATION && `<meta name="google-site-verification" content="${esc(env.VITE_GOOGLE_SITE_VERIFICATION)}" />`,
    env.VITE_BING_SITE_VERIFICATION && `<meta name="msvalidate.01" content="${esc(env.VITE_BING_SITE_VERIFICATION)}" />`,
].filter(Boolean);

function head({ title, description, pathname, type = 'website', graph }) {
    const url = `${SITE}${pathname}`;
    const image = `${SITE}/og-image.png`;
    const alt = `${person.name}, ${person.role} in ${person.location}`;
    return [
        `<title>${esc(title)}</title>`,
        `<meta name="description" content="${esc(description)}" />`,
        '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />',
        `<link rel="canonical" href="${url}" />`,
        `<meta name="author" content="${esc(person.name)}" />`,
        `<meta property="og:type" content="${type}" />`,
        `<meta property="og:site_name" content="${esc(person.name)}" />`,
        `<meta property="og:title" content="${esc(title)}" />`,
        `<meta property="og:description" content="${esc(description)}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:locale" content="en_US" />`,
        `<meta property="og:image" content="${image}" />`,
        '<meta property="og:image:width" content="1200" />',
        '<meta property="og:image:height" content="630" />',
        `<meta property="og:image:alt" content="${esc(alt)}" />`,
        '<meta name="twitter:card" content="summary_large_image" />',
        `<meta name="twitter:title" content="${esc(title)}" />`,
        `<meta name="twitter:description" content="${esc(description)}" />`,
        `<meta name="twitter:image" content="${image}" />`,
        `<meta name="twitter:image:alt" content="${esc(alt)}" />`,
        `<link rel="alternate" type="text/markdown" href="${SITE}/llms-full.txt" title="${esc(person.name)}, full profile as text" />`,
        `<link rel="me" href="${person.github}" />`,
        `<link rel="me" href="${person.linkedin}" />`,
        ...verification,
        `<script type="application/ld+json">${json({ '@context': 'https://schema.org', '@graph': graph })}</script>`,
    ].join('\n  ');
}

/* ---------- home page: the built page plus the rendered React tree ---------- */
// A browser has IntersectionObserver, so the page starts "not seen yet"; Node has none, so give the render one that never
// fires. That keeps the HTML identical to the first render in the browser, which is what hydration needs.
globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
};
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const rendered = render();
if (!rendered.includes(person.name) || !rendered.includes('<h1')) {
    console.error('The page did not render to HTML as expected. Not writing dist/index.html.');
    process.exit(1);
}
let home = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!home.includes('<!--seo-head-->') || !home.includes('<div id="root"></div>')) {
    console.error('index.html lost its <!--seo-head--> or empty root marker.');
    process.exit(1);
}
home = home
    .replace(
        '<!--seo-head-->',
        head({
            title: seo.title,
            description: seo.description,
            pathname: '/',
            type: 'profile',
            graph: [websiteNode, profileNode(`${SITE}/`, seo.title, seo.description), personNode],
        })
    )
    .replace('<div id="root"></div>', () => `<div id="root">${rendered}</div>`);
write('index.html', home);

/* ---------- plain pages: /resume and /projects ---------- */
const css = `
:root{color-scheme:light dark;--paper:#f7f8fa;--panel:#fff;--ink:#0d1219;--muted:#505965;--line:#dee3ea;--accent:#0c708c}
@media(prefers-color-scheme:dark){:root{--paper:#090c10;--panel:#10151b;--ink:#e9edf1;--muted:#949eab;--line:#212933;--accent:#60cbe0}}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:400 1.0625rem/1.65 Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
a{color:var(--accent);text-underline-offset:3px}a:hover{text-decoration-thickness:2px}
header,main,footer{max-width:46rem;margin:0 auto;padding:0 1.25rem}
header{display:flex;flex-wrap:wrap;gap:.5rem 1.5rem;align-items:center;justify-content:space-between;padding-top:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--line)}
header a.brand{font-weight:600;color:var(--ink);text-decoration:none}nav{display:flex;gap:1.25rem;flex-wrap:wrap;font-size:.95rem}
h1,h2,h3{font-family:'Instrument Serif',Georgia,serif;font-weight:400;line-height:1.15;letter-spacing:-.01em}
h1{font-size:clamp(2.2rem,6vw,3.2rem);margin:2.5rem 0 .25rem}h2{font-size:1.9rem;margin:2.75rem 0 .5rem;border-top:1px solid var(--line);padding-top:1.5rem}h3{font-size:1.35rem;margin:1.5rem 0 .1rem}
.lede{font-size:1.2rem;color:var(--muted);margin:.25rem 0 1rem}.meta{color:var(--muted);margin:0 0 .5rem;font-size:.95rem}
ul{padding-left:1.2rem}li{margin:.35rem 0}dt{font-weight:600;margin-top:1rem}dd{margin:.15rem 0 0;color:var(--muted)}
.chips{display:flex;flex-wrap:wrap;gap:.4rem;padding:0;list-style:none}.chips li{margin:0;border:1px solid var(--line);background:var(--panel);border-radius:999px;padding:.1rem .7rem;font-size:.85rem;color:var(--muted)}
footer{margin-top:4rem;padding-top:1.5rem;padding-bottom:3rem;border-top:1px solid var(--line);color:var(--muted);font-size:.9rem}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
`;
const nav = `<nav aria-label="Site"><a href="/">Portfolio</a><a href="/resume">Resume</a><a href="/projects">Projects</a><a href="${esc(person.github)}">GitHub</a><a href="${esc(person.linkedin)}">LinkedIn</a></nav>`;

function plainPage({ pathname, title, description, graph, body }) {
    const font = home.match(/<link href="https:\/\/fonts\.googleapis\.com[^>]+>/)?.[0] ?? '';
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  ${head({ title, description, pathname, graph })}
  ${font}
  <style>${css}</style>
</head>
<body>
<header><a class="brand" href="/">${esc(person.name)}</a>${nav}</header>
<main id="main">
${body}
</main>
<footer><p>&copy; ${new Date().getFullYear()} ${esc(person.name)} · ${esc(person.location)} · <a href="mailto:${esc(person.email)}">${esc(person.email)}</a></p></footer>
</body>
</html>
`;
}

const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const chips = (items) => `<ul class="chips">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

const resumeBody = `
<h1>${esc(person.name)}</h1>
<p class="lede">${esc(person.role)} · ${esc(person.location)}</p>
<p>${esc(person.lead)}</p>
<p>${esc(atAGlance.find(([k]) => k === 'Open to')?.[1] ?? '')}</p>
<p><a href="mailto:${esc(person.email)}">${esc(person.email)}</a> · <a href="${esc(person.github)}">GitHub</a> · <a href="${esc(person.linkedin)}">LinkedIn</a> · <a href="${esc(person.resume)}">Download the PDF</a></p>
<h2>Experience</h2>
${experience.map((e) => `<h3>${esc(e.role)}</h3><p class="meta">${esc(e.org)} · ${esc(e.period)} · ${esc(e.place)}</p>${list(e.points.map(esc))}`).join('\n')}
<h2>Skills</h2>
<dl>${skills.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
<h2>Education</h2>
${list(education.map((e) => `${esc(e.title)}, ${esc(e.place)}, ${esc(e.year)}`))}
<h2>Languages</h2>
<p>${esc(languages)}</p>`;

const projectsBody = `
<h1>Projects and systems</h1>
<p class="lede">What ${esc(person.name)} has built: three enterprise platforms for an employer, four open-source applications and public showcases of the private systems.</p>
<h2>Enterprise platforms (employer systems, private source)</h2>
${production.map((p) => `<h3>${esc(p.title)}</h3><p class="meta">${esc(p.tag)}</p><p>${esc(p.summary)}</p>${chips(p.facts)}`).join('\n')}
<h2>${esc(openSource.title)}</h2>
<p>${esc(openSource.summary)}</p>
${chips(openSource.facts)}
${list(openSource.links.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>: ${esc(l.note)}`))}
<h2>${esc(showcase.title)}</h2>
<p>${esc(showcase.summary)}</p>
${list(showcase.links.map((l) => `<a href="${esc(l.url)}">${esc(l.name)} (${esc(l.kind)})</a>: ${esc(l.note)} <a href="${esc(l.demo)}">Live demo</a>`))}
<h2>Live demos</h2>
<p>Company-neutral editions on demo data; they run on one machine, so one may occasionally be offline.</p>
${list(demos.map((d) => `<a href="${esc(d.url)}">${esc(d.name)}</a> (${esc(d.kind)}): ${esc(d.note)}`))}`;

const resumeTitle = `Resume of ${person.name} · ${person.role}, ${person.location}`;
const resumeDescription = `${person.name}'s resume: ${person.role} in ${person.location}. Experience, skills, education and contact details.`;
const projectsTitle = `Projects and systems by ${person.name} · identity, documents, ERP, SaaS`;
const projectsDescription = `Enterprise platforms and open-source applications built by ${person.name}: single sign-on, document management, visitor management, retail ERP and multi-tenant SaaS.`;

write('resume.html', plainPage({
    pathname: '/resume',
    title: resumeTitle,
    description: resumeDescription,
    graph: [websiteNode, profileNode(`${SITE}/resume`, resumeTitle, resumeDescription), personNode, crumbs(['Portfolio', `${SITE}/`], ['Resume', `${SITE}/resume`])],
    body: resumeBody,
}));
write('projects.html', plainPage({
    pathname: '/projects',
    title: projectsTitle,
    description: projectsDescription,
    graph: [
        websiteNode,
        {
            '@type': 'CollectionPage',
            '@id': `${SITE}/projects#page`,
            url: `${SITE}/projects`,
            name: projectsTitle,
            description: projectsDescription,
            inLanguage: 'en',
            isPartOf: id('website'),
            about: id('person'),
            mainEntity: {
                '@type': 'ItemList',
                itemListElement: [
                    ...openSource.links.map((l, i) => ({
                        '@type': 'ListItem',
                        position: i + 1,
                        item: { '@type': 'SoftwareSourceCode', name: l.label, description: l.note, codeRepositoryUrl: l.url, programmingLanguage: 'TypeScript', author: id('person') },
                    })),
                    ...showcase.links.map((l, i) => ({
                        '@type': 'ListItem',
                        position: openSource.links.length + i + 1,
                        item: { '@type': 'CreativeWork', name: `${l.name} showcase`, description: l.note, url: l.url, author: id('person') },
                    })),
                ],
            },
        },
        personNode,
        crumbs(['Portfolio', `${SITE}/`], ['Projects', `${SITE}/projects`]),
    ],
    body: projectsBody,
}));

/* ---------- text for AI assistants ---------- */
const tests = proof.map((p) => `${p.value} ${p.label}`);
const llms = `# ${person.name}

> ${seo.summary}

Based in ${person.location}. Contact: ${person.email}. Open to: ${atAGlance.find(([k]) => k === 'Open to')?.[1]}

## Pages
- [Portfolio](${SITE}/): ${seo.description}
- [Resume](${SITE}/resume): experience, skills, education and contact details
- [Projects and systems](${SITE}/projects): enterprise platforms, open-source applications and showcases
- [Resume as PDF](${SITE}${person.resume})
- [Resume as JSON Resume](${SITE}/resume.json)
- [Everything in one text file](${SITE}/llms-full.txt)

## Code and profiles
${openSource.links.map((l) => `- [${l.label}](${l.url}): ${l.note}`).join('\n')}
${showcase.links.map((l) => `- [${l.name} showcase](${l.url}): ${l.note} Source is private; access on request.`).join('\n')}
- [GitHub](${person.github})
- [LinkedIn](${person.linkedin})

## Optional
${demos.map((d) => `- [${d.name}](${d.url}): ${d.kind}. ${d.note}`).join('\n')}
`;
const full = `# ${person.name}, ${person.role}

${seo.summary}

${person.lead}

## At a glance
${atAGlance.map(([k, v]) => `- ${k}: ${v}`).join('\n')}
- Languages: ${languages}
- Email: ${person.email}
- GitHub: ${person.github}
- LinkedIn: ${person.linkedin}

## In numbers
${tests.map((t) => `- ${t}`).join('\n')}

## What I do
${capabilities.map((x) => `### ${x.title}\n${x.body}`).join('\n\n')}

## Enterprise platforms (employer systems, private source)
${production.map((p) => `### ${p.title}\n${p.summary}\n${p.facts.map((f) => `- ${f}`).join('\n')}`).join('\n\n')}

## ${openSource.title}
${openSource.summary}

${openSource.links.map((l) => `- [${l.label}](${l.url}): ${l.note}`).join('\n')}

## Experience
${experience.map((e) => `### ${e.role}, ${e.org} (${e.period}, ${e.place})\n${e.points.map((p) => `- ${p}`).join('\n')}`).join('\n\n')}

## Skills
${skills.map(([k, v]) => `- ${k}: ${v}`).join('\n')}

## Education
${education.map((e) => `- ${e.title}, ${e.place}, ${e.year}`).join('\n')}
`;
write('llms.txt', llms);
write('llms-full.txt', full);

const resumeJson = {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
        name: person.name,
        label: person.role,
        image: `${SITE}/profile-720.jpg`,
        email: person.email,
        url: `${SITE}/`,
        summary: seo.summary,
        location: { city, countryCode: seo.countryCode, region: country },
        profiles: [
            { network: 'GitHub', username: last(person.github), url: person.github },
            { network: 'LinkedIn', username: last(person.linkedin), url: person.linkedin },
        ],
    },
    work: experience.map((e) => ({
        name: e.org,
        position: e.role,
        location: e.place,
        startDate: e.start,
        ...(e.end ? { endDate: e.end } : {}),
        summary: e.points[0],
        highlights: e.points,
    })),
    education: education.map((e) => {
        const [studyType, ...area] = e.title.includes(', ') ? e.title.split(', ') : ['Certification', e.title.replace(/ Certification$/, '')];
        return { institution: e.place, area: area.join(', '), studyType, endDate: e.year };
    }),
    skills: skills.map(([name, text]) => ({ name, keywords: text.split(/[,;]\s*/).filter(Boolean) })),
    languages: seo.spoken.map((l) => ({ language: l.name, fluency: l.level === 'native' ? 'Native speaker' : 'Fluent' })),
    projects: openSource.links.map((l) => ({ name: l.label, description: l.note, url: l.url })),
    meta: { version: 'v1.0.0', canonical: `${SITE}/resume.json`, lastModified: new Date().toISOString() },
};
write('resume.json', `${JSON.stringify(resumeJson, null, 2)}\n`);

/* ---------- robots, sitemap, IndexNow ---------- */
const bots = [
    'Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot', 'YandexBot', 'Baiduspider',
    'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
    'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Meta-ExternalAgent', 'Amazonbot', 'CCBot', 'cohere-ai', 'MistralAI-User',
];
write('robots.txt', `# Everyone is welcome to read and index this site, including search engines and AI assistants.\nUser-agent: *\nAllow: /\n\n${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n')}\nSitemap: ${SITE}/sitemap.xml\n`);

const urls = ['/', '/resume', '/projects', person.resume];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')}\n</urlset>\n`);

if (env.VITE_INDEXNOW_KEY) write(`${env.VITE_INDEXNOW_KEY}.txt`, env.VITE_INDEXNOW_KEY);

console.log(`postbuild: ${SITE} · home rendered (${rendered.length} chars) · resume, projects, llms.txt, llms-full.txt, resume.json, robots.txt, sitemap.xml${env.VITE_INDEXNOW_KEY ? ', IndexNow key' : ''}`);
