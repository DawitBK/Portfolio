// Renders resume/resume.html to an A4 PDF and copies it to public/, so the website serves the same file.
//
//   npm i -D playwright && npx playwright install chromium     (once per machine; not a project dependency on purpose)
//   node scripts/make-resume-pdf.mjs
//
// Edit resume/resume.html (the single source of the resume), run this, check the PDF still fits two pages, then commit
// both the HTML and the PDF.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'resume', 'resume.html');
const built = path.join(root, 'resume', 'Dawit-Bayou-Kassie-Resume.pdf');
const served = path.join(root, 'public', 'Dawit-Bayou-Kassie-Resume.pdf');

let playwright;
try {
    playwright = await import('playwright');
} catch {
    console.error('Playwright is not installed. Run: npm i -D playwright && npx playwright install chromium');
    process.exit(1);
}

const browser = await playwright.chromium.launch();
try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(source).href);
    await page.pdf({ path: built, format: 'A4', printBackground: true, preferCSSPageSize: true });
} finally {
    await browser.close();
}
fs.copyFileSync(built, served);
console.log(`wrote ${path.relative(root, built)} and copied it to ${path.relative(root, served)}`);
