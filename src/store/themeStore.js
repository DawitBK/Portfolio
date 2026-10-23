import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const applyThemeClass = (theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
};

// Until the visitor picks one, follow the operating system.
const systemTheme = () =>
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const useThemeStore = create()(
    persist(
        (set, get) => ({
            theme: systemTheme(),
            toggleTheme: () => {
                const next = get().theme === 'dark' ? 'light' : 'dark';
                applyThemeClass(next);
                set({ theme: next });
            },
        }),
        {
            name: 'portfolio-theme',
            onRehydrateStorage: () => (state) => {
                if (state) applyThemeClass(state.theme);
            },
        }
    )
);
