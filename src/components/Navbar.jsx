import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
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
                            className="text-gray-300 hover:text-blue-400 font-medium cursor-pointer transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={resumeData.personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={resumeData.personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-6 flex flex-col space-y-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-blue-400 text-lg font-medium cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex space-x-6 mt-4 pt-4 border-t border-slate-800">
                        <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Github /></a>
                        <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin /></a>
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="text-gray-400 hover:text-white"><Mail /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
