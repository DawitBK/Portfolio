import { useThemeStore } from '../store/themeStore';
import Icon from './Icon';

const ThemeToggle = ({ className = '' }) => {
    const theme = useThemeStore((s) => s.theme);
    const toggleTheme = useThemeStore((s) => s.toggleTheme);
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
