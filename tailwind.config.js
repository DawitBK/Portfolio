/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                paper: token('paper'),
                panel: token('panel'),
                ink: token('ink'),
                muted: token('muted'),
                line: token('line'),
                accent: token('accent'),
                'accent-soft': token('accent-soft'),
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
                serif: ['"Instrument Serif"', 'Georgia', 'serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
            },
            maxWidth: { page: '72rem' },
        },
    },
    plugins: [],
}
