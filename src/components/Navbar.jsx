import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-ink-950/80 backdrop-blur-md py-4 shadow-lg shadow-slate-900/5' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold text-gradient">
                    DBK.
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            spy={true}
                            activeClass="text-brand-500 dark:text-brand-400"
                            className="text-slate-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 font-medium cursor-pointer transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 pl-2 border-l border-slate-200 dark:border-white/10">
                        <a
                            href={resumeData.personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-gray-300 focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Scroll progress */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-500 via-violet-500 to-fuchsia-500 transition-[width] duration-150" style={{ width: `${progress}%` }}></div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-ink-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-700 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 text-lg font-medium cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex space-x-6 mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                        <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"><Github /></a>
                        <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"><Linkedin /></a>
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"><Mail /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
