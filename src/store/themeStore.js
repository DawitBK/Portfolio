import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const applyThemeClass = (theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
};

export const useThemeStore = create()(
    persist(
        (set, get) => ({
            theme: 'dark',
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
