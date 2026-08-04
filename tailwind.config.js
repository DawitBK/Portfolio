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
                    50: '#f4f4f8', 100: '#e6e6ef',
                    700: '#2b2b3d', 800: '#1c1c2a', 850: '#15151f',
                    900: '#100f18', 950: '#0a0a10',
                },
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            boxShadow: {
                glow: '0 0 0 1px rgba(99,102,241,0.15), 0 8px 30px -8px rgba(99,102,241,0.35)',
                'glow-lg': '0 0 0 1px rgba(99,102,241,0.2), 0 20px 60px -15px rgba(99,102,241,0.4)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease forwards',
                'fade-up': 'fadeUp 0.6s ease forwards',
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 9s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s infinite',
                'spin-slow': 'spin 14s linear infinite',
            },
            keyframes: {
                fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
                fadeUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-14px)' },
                },
                shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
            },
        },
    },
    plugins: [],
}
