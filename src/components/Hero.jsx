import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download, MapPin, ChevronDown } from 'lucide-react';
import { resumeData } from '../data/resume';

const Hero = () => {
    const { name, title, tagline, location, summary } = resumeData.personalInfo;
    const firstStat = resumeData.stats[0];

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none [background-image:radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] dark:[background-image:radial-gradient(circle_at_1px_1px,theme(colors.ink.800)_1px,transparent_0)] [background-size:32px_32px] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-ink-800 bg-slate-50 dark:bg-ink-850 text-slate-600 dark:text-gray-400 font-medium text-xs mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Open to select freelance & consulting work
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight text-slate-900 dark:text-white">
                        {name}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-brand-600 dark:text-brand-400 font-semibold mb-2">
                        {title}
                    </h2>
                    <p className="text-slate-500 dark:text-gray-500 font-mono text-sm md:text-base mb-6">
                        {tagline}
                    </p>
                    <p className="text-slate-600 dark:text-gray-400 text-lg max-w-lg mb-6 leading-relaxed">
                        {summary.split(". ")[0]}.
                    </p>
                    <p className="flex items-center gap-2 text-slate-500 dark:text-gray-500 text-sm mb-10">
                        <MapPin size={16} /> {location}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm hover:shadow-brand"
                        >
                            View Work <ArrowRight size={18} />
                        </Link>
                        <a
                            href="/Dawit-Bayou-Kassie-Resume.pdf"
                            download="Dawit_Bayou_Kassie_Resume.pdf"
                            className="px-6 py-3 border border-slate-200 dark:border-ink-800 hover:border-brand-500 text-slate-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                        >
                            Download CV <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="relative hidden md:flex justify-center"
                >
                    <div className="relative w-full max-w-sm aspect-square">
                        <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-ink-800 shadow-lg bg-slate-100 dark:bg-ink-900">
                            <img
                                src="/profile.png"
                                alt={name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Stat badge */}
                        <div className="absolute -bottom-5 -left-5 card rounded-xl px-5 py-4">
                            <p className="text-2xl font-bold text-brand-600 dark:text-brand-400 leading-none">{firstStat.value}</p>
                            <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 whitespace-nowrap">{firstStat.label}</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-gray-600 hover:text-brand-500 cursor-pointer transition-colors hidden sm:flex"
                aria-label="Scroll to About section"
            >
                <ChevronDown size={24} />
            </Link>
        </section>
    );
};

export default Hero;
