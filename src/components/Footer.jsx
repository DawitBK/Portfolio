import React from 'react';
import { person } from '../data/content';

const Footer = () => (
    <footer className="border-t border-line py-8">
        <div className="container-page flex flex-col justify-between gap-2 text-sm text-muted sm:flex-row">
            <p>
                &copy; {new Date().getFullYear()} {person.name}
            </p>
            <p>
                Built with React, Vite and Tailwind.{' '}
                <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href="https://github.com/DawitBK/Portfolio" target="_blank" rel="noreferrer">
                    Source on GitHub
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;
