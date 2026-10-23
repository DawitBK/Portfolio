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
                sunken: token('sunken'),
                ink: token('ink'),
                muted: token('muted'),
                line: token('line'),
                accent: token('accent'),
                'accent-2': token('accent-2'),
                'accent-soft': token('accent-soft'),
                'on-accent': token('on-accent'),
                ok: token('ok'),
            },
            fontFamily: {
                sans: ['Inter', '"Inter Fallback"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
                serif: ['"Instrument Serif"', '"Instrument Serif Fallback"', 'Georgia', 'serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            maxWidth: { page: '72rem' },
            boxShadow: {
                card: '0 1px 2px rgb(var(--shadow) / 0.05), 0 12px 32px -14px rgb(var(--shadow) / 0.16)',
                lift: '0 2px 4px rgb(var(--shadow) / 0.06), 0 22px 44px -16px rgb(var(--shadow) / 0.28)',
                pop: '0 24px 80px -12px rgb(var(--shadow) / 0.45)',
                glow: '0 0 0 1px rgb(var(--accent) / 0.35), 0 10px 36px -10px rgb(var(--accent) / 0.45)',
            },
            keyframes: {
                rise: { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'none' } },
                fade: { from: { opacity: '0' }, to: { opacity: '1' } },
                pop: { from: { opacity: '0', transform: 'translateY(-8px) scale(0.98)' }, to: { opacity: '1', transform: 'none' } },
                ping: { '75%, 100%': { transform: 'scale(2.4)', opacity: '0' } },
            },
            animation: {
                rise: 'rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both',
                fade: 'fade 0.5s ease both',
                pop: 'pop 0.22s cubic-bezier(0.2, 0.8, 0.2, 1) both',
                ping: 'ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
        },
    },
    plugins: [],
}
