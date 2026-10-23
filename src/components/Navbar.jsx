import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { person } from '../data/content';

const links = [
    ['What I do', '#capabilities'],
    ['Lifecycle', '#lifecycle'],
    ['Work', '#work'],
    ['Live demos', '#demos'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${scrolled || open ? 'border-b border-line bg-paper/90 backdrop-blur' : 'bg-transparent'}`}>
            <div className="container-page flex h-16 items-center justify-between">
                <a href="#top" className="font-serif text-xl">
                    Dawit Bayou Kassie
                </a>
                <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
                    {links.map(([label, href]) => (
                        <a key={href} href={href} className="text-sm text-muted transition-colors hover:text-ink">
                            {label}
                        </a>
                    ))}
                    <ThemeToggle />
                    <a href={person.resume} className="btn btn-ghost !px-4 !py-2" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                </nav>
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="rounded-md border border-line px-3 py-1.5 text-sm"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>
            {open && (
                <nav id="mobile-menu" className="container-page flex flex-col gap-1 pb-5 md:hidden" aria-label="Mobile">
                    {links.map(([label, href]) => (
                        <a key={href} href={href} onClick={() => setOpen(false)} className="border-t border-line py-3 text-base">
                            {label}
                        </a>
                    ))}
                    <a href={person.resume} className="border-t border-line py-3 text-base" target="_blank" rel="noreferrer">
                        Resume (PDF)
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
