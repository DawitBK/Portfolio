#!/usr/bin/env node
// Tells Bing, Yandex and the other IndexNow search engines that the pages changed, so they fetch them now instead of
// whenever they next visit. Run it after a deploy:  npm run build && vercel deploy ... && npm run indexnow
// Reads the site address and the key from .env.production and the page list from dist/sitemap.xml. (Google does not take
// IndexNow pings: it needs the sitemap submitted once in Search Console.)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const env = loadEnv('production', root, 'VITE_');
const site = (env.VITE_SITE_URL || '').replace(/\/+$/, '');
const key = env.VITE_INDEXNOW_KEY;
if (!site || !key) {
    console.error('VITE_SITE_URL and VITE_INDEXNOW_KEY must be set in .env.production.');
    process.exit(1);
}
const sitemap = path.join(root, 'dist', 'sitemap.xml');
if (!fs.existsSync(sitemap)) {
    console.error('dist/sitemap.xml is missing. Run: npm run build');
    process.exit(1);
}
const urlList = [...fs.readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

// The key file must already be live, or the engines ignore the ping.
const keyLocation = `${site}/${key}.txt`;
const check = await fetch(keyLocation).catch(() => null);
if (!check?.ok || (await check.text()).trim() !== key) {
    console.error(`${keyLocation} is not live yet. Deploy first, then run this again.`);
    process.exit(1);
}

const response = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(site).host, key, keyLocation, urlList }),
});
console.log(`IndexNow answered ${response.status} for ${urlList.length} pages (200 or 202 means accepted).`);
process.exit(response.status === 200 || response.status === 202 ? 0 : 1);
