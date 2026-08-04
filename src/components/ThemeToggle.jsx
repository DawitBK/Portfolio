import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className={`relative w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-gray-400 hover:text-brand-500 hover:border-brand-500/50 transition-colors cursor-pointer ${className}`}
        >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};

export default ThemeToggle;
