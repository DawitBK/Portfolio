// Draws the 1200x630 picture that shows when the site is shared (public/og-image.png), from the same data as the page.
//
//   npm i --no-save playwright && npx playwright install chromium     (once per machine; not a project dependency on purpose)
//   npm run make:og
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { person, proof, seo } from '../src/data/content.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let playwright;
try {
    playwright = await import('playwright');
} catch {
    console.error('Playwright is not installed. Run: npm i --no-save playwright && npx playwright install chromium');
    process.exit(1);
}

const portrait = `data:image/jpeg;base64,${fs.readFileSync(path.join(root, 'public', 'profile-720.jpg')).toString('base64')}`;
const stats = proof.slice(0, 3);
const html = `<!doctype html><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:#090c10;color:#e9edf1;font-family:Georgia,'Times New Roman',serif;position:relative;overflow:hidden}
.glow{position:absolute;inset:0;background:radial-gradient(760px 420px at 85% 10%,rgba(96,203,224,.22),transparent 70%),radial-gradient(640px 380px at 5% 105%,rgba(135,165,255,.18),transparent 70%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:48px 48px}
.wrap{position:absolute;inset:0;padding:64px 72px;display:flex;justify-content:space-between;align-items:center;gap:48px}
.kicker{font:600 20px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#60cbe0;margin-bottom:28px}
h1{font-weight:400;font-size:84px;line-height:1.02;letter-spacing:-.02em}
.role{margin-top:22px;font:400 30px/1.3 Arial,sans-serif;color:#a9b3bf}
.stats{display:flex;gap:44px;margin-top:44px}
.stat b{display:block;font:400 52px/1 Georgia,serif;color:#e9edf1}.stat span{display:block;margin-top:8px;font:400 17px/1.3 Arial,sans-serif;color:#949eab;max-width:200px}
.photo{flex:none;width:300px;height:300px;border-radius:50%;background:url(${portrait}) center/cover;border:4px solid rgba(96,203,224,.55);box-shadow:0 0 0 12px rgba(96,203,224,.08)}
</style><div class="glow"></div><div class="grid"></div>
<div class="wrap"><div>
<div class="kicker">${person.location}</div>
<h1>${person.name}</h1>
<div class="role">${person.role}</div>
<div class="stats">${stats.map((s) => `<div class="stat"><b>${s.value}</b><span>${s.label}</span></div>`).join('')}</div>
</div><div class="photo"></div></div>`;

const file = path.join(os.tmpdir(), 'og-card.html');
fs.writeFileSync(file, html);
const browser = await playwright.chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(file).href);
await page.screenshot({ path: path.join(root, 'public', 'og-image.png') });
await browser.close();
fs.rmSync(file, { force: true });
console.log(`public/og-image.png written (${seo.title})`);
