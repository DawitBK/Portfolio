import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Icon from './Icon';
import { person } from '../data/content';
import { navLinks } from '../data/ui';
import { useScrollProgress, useScrolled, useScrollSpy } from '../hooks/useScroll';
import { useUiStore } from '../store/uiStore';
import { modKey } from '../lib/platform';

const spyIds = navLinks.map((l) => l.id);

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const scrolled = useScrolled(8);
    const active = useScrollSpy(spyIds);
    const progress = useRef(null);
    const menuButton = useRef(null);
    const openPalette = useUiStore((s) => s.openPalette);
    useScrollProgress(progress);

    useEffect(() => {
        if (!open) return undefined;
        const onKey = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
                menuButton.current?.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    const solid = scrolled || open;

    return (
        <>
            <a
                href="#main"
                className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform focus:translate-y-0"
            >
                Skip to content
            </a>
            <header className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 ${solid ? 'border-b border-line/80 bg-paper/75 shadow-[0_1px_0_rgb(var(--shadow)/0.03)] backdrop-blur-xl' : 'border-b border-transparent bg-transparent'}`}>
                <div className="container-page flex h-16 items-center justify-between gap-4">
                    <a href="#top" className="group flex shrink-0 items-center gap-3" aria-label={`${person.name}, back to the top`}>
                        <span className="flex h-9 min-w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 px-2.5 font-serif text-[1.02rem] italic leading-none tracking-tight text-on-accent shadow-card transition-transform duration-300 group-hover:rotate-[-6deg]" aria-hidden="true">
                            DBK
                        </span>
                        <span className="hidden font-serif text-xl min-[440px]:inline lg:hidden xl:inline">{person.name}</span>
                    </a>

                    <nav className="hidden items-center gap-0.5 rounded-full border border-line bg-panel/70 p-1 backdrop-blur lg:flex" aria-label="Primary">
                        {navLinks.map(({ id, label }) => {
                            const current = active === id;
                            return (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    aria-current={current ? 'location' : undefined}
                                    className={`rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200 ${current ? 'bg-ink text-paper' : 'text-muted hover:bg-sunken hover:text-ink'}`}
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={openPalette}
                            className="hidden h-9 items-center gap-2.5 rounded-full border border-line bg-panel/70 px-3 text-sm text-muted backdrop-blur transition duration-200 hover:border-accent/60 hover:text-ink md:inline-flex"
                            aria-label="Open the command palette"
                            aria-keyshortcuts="Control+K Meta+K"
                        >
                            <Icon name="search" size={15} />
                            <span className="hidden xl:inline">Search</span>
                            <span className="hidden items-center gap-1 xl:flex" aria-hidden="true">
                                <kbd className="kbd">{modKey}</kbd>
                                <kbd className="kbd">K</kbd>
                            </span>
                        </button>
                        <ThemeToggle />
                        <a href={person.resume} className="btn btn-ghost hidden !px-3.5 !py-2 md:inline-flex" target="_blank" rel="noreferrer">
                            Resume
                        </a>
                        <button
                            ref={menuButton}
                            type="button"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel/70 text-ink backdrop-blur lg:hidden"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label={open ? 'Close the menu' : 'Open the menu'}
                            onClick={() => setOpen((v) => !v)}
                        >
                            <Icon name={open ? 'close' : 'menu'} size={17} />
                        </button>
                    </div>
                </div>

                <div ref={progress} aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2" />

                {open && (
                    <nav id="mobile-menu" className="container-page animate-fade pb-6 lg:hidden" aria-label="Mobile">
                        <ul className="divide-y divide-line border-t border-line">
                            {navLinks.map(({ id, label }) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        onClick={() => setOpen(false)}
                                        aria-current={active === id ? 'location' : undefined}
                                        className={`flex items-center justify-between py-3.5 text-lg ${active === id ? 'text-accent' : ''}`}
                                    >
                                        {label}
                                        <Icon name="arrowRight" size={16} className="text-muted" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex gap-3">
                            <button
                                type="button"
                                className="btn btn-ghost flex-1"
                                onClick={() => {
                                    setOpen(false);
                                    openPalette();
                                }}
                            >
                                <Icon name="search" size={16} />
                                Search the site
                            </button>
                            <a href={person.resume} className="btn btn-primary flex-1" target="_blank" rel="noreferrer">
                                Resume (PDF)
                            </a>
                        </div>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Navbar;
