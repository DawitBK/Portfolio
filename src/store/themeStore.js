import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const KEY = 'portfolio-theme';
const THEME_COLOUR = { light: '#f7f8fa', dark: '#090c10' };

const darkQuery = () => (typeof window !== 'undefined' ? window.matchMedia?.('(prefers-color-scheme: dark)') : undefined);
const systemTheme = () => (darkQuery()?.matches ? 'dark' : 'light');

const applyTheme = (theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOUR[theme]);
};

// Only a deliberate choice is written to storage. A visitor who never touches the toggle keeps following the system
// setting, including when it changes while the page is open.
const choiceStorage = {
    getItem: (name) => {
        try {
            return localStorage.getItem(name);
        } catch {
            return null;
        }
    },
    setItem: (name, value) => {
        try {
            if (JSON.parse(value).state.chosen) localStorage.setItem(name, value);
        } catch {
            /* storage blocked: the choice simply lasts for this visit */
        }
    },
    removeItem: (name) => {
        try {
            localStorage.removeItem(name);
        } catch {
            /* nothing to remove */
        }
    },
};

export const useThemeStore = create()(
    persist(
        (set, get) => ({
            theme: systemTheme(),
            chosen: false,
            toggleTheme: () => {
                const next = get().theme === 'dark' ? 'light' : 'dark';
                applyTheme(next);
                set({ theme: next, chosen: true });
            },
        }),
        {
            name: KEY,
            storage: createJSONStorage(() => choiceStorage),
            partialize: (state) => ({ theme: state.theme, chosen: state.chosen }),
            // A value saved by an earlier version has a theme but no flag: that was a deliberate choice too.
            merge: (persisted, current) => ({
                ...current,
                ...persisted,
                chosen: persisted?.chosen ?? Boolean(persisted?.theme),
            }),
            onRehydrateStorage: () => (state) => {
                if (state) applyTheme(state.theme);
            },
        }
    )
);

darkQuery()?.addEventListener('change', (event) => {
    if (useThemeStore.getState().chosen) return;
    const next = event.matches ? 'dark' : 'light';
    applyTheme(next);
    useThemeStore.setState({ theme: next });
});
