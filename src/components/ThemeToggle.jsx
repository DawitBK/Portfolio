import { useSyncExternalStore } from 'react';
import { useThemeStore } from '../store/themeStore';
import Icon from './Icon';

const subscribeNothing = () => () => {};

const ThemeToggle = ({ className = '' }) => {
    const stored = useThemeStore((s) => s.theme);
    const toggleTheme = useThemeStore((s) => s.toggleTheme);
    // The page is rendered at build time, where the system theme is unknown: show the light button until mounted so the
    // markup matches, then follow the real theme.
    const mounted = useSyncExternalStore(subscribeNothing, () => true, () => false);
    const theme = mounted ? stored : 'light';
    const next = theme === 'dark' ? 'light' : 'dark';
    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-panel/70 text-muted backdrop-blur transition duration-200 hover:border-accent/60 hover:text-ink ${className}`}
        >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
        </button>
    );
};

export default ThemeToggle;
