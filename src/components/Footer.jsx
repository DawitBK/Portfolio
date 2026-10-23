import Icon from './Icon';
import { person } from '../data/content';
import { goTo } from '../lib/nav';

const Footer = () => (
    <footer className="border-t border-line py-8">
        <div className="container-page flex flex-col items-start justify-between gap-4 text-sm text-muted md:flex-row md:items-center">
            <p>
                &copy; {new Date().getFullYear()} {person.name}
            </p>
            <p>
                Built with React, Vite and Tailwind.{' '}
                <a className="underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent" href="https://github.com/DawitBK/Portfolio" target="_blank" rel="noreferrer">
                    Source on GitHub
                </a>
            </p>
            <button
                type="button"
                onClick={() => goTo('top')}
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-panel/70 px-3.5 py-1.5 transition duration-200 hover:border-accent/60 hover:text-ink"
            >
                Back to top
                <Icon name="arrowUp" size={14} />
            </button>
        </div>
    </footer>
);

export default Footer;
