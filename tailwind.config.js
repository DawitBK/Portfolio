/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe',
                    300: '#a5b4fc', 400: '#818cf8',
                    500: '#6366f1', 600: '#4f46e5', 700: '#4338ca',
                    800: '#3730a3', 900: '#312e81', 950: '#1e1b4b',
                },
                ink: {
                    950: '#000000', // page surface
                    900: '#0a0a0a', // alternate section tint
                    850: '#141414', // card / raised surface
                    800: '#1f1f1f', // border
                },
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            boxShadow: {
                brand: '0 4px 20px rgba(99,102,241,0.28)',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease forwards',
            },
            keyframes: {
                fadeUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
            },
        },
    },
    plugins: [],
}
