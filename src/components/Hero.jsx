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
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-24 left-10 w-72 h-72 bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/20 dark:bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,theme(colors.slate.400)_1px,transparent_0)] dark:[background-image:radial-gradient(circle_at_1px_1px,theme(colors.slate.700)_1px,transparent_0)] [background-size:32px_32px] opacity-[0.15]"></div>
                <div className="absolute inset-0 grain-overlay mix-blend-overlay opacity-40 dark:opacity-[0.06] pointer-events-none"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-xs mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Open to select freelance & consulting work
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight">
                        {name.split(" ")[0]} <br />
                        <span className="text-gradient">
                            {name.split(" ").slice(1).join(" ")}
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 font-medium mb-2">
                        {title}
                    </h2>
                    <p className="text-brand-600 dark:text-brand-400 font-mono text-sm md:text-base mb-6">
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
                            className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-medium flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
                        >
                            View Work <ArrowRight size={20} />
                        </Link>
                        <a
                            href="/Dawit-Bayou-Kassie-Resume.pdf"
                            download="Dawit_Bayou_Kassie_Resume.pdf"
                            className="px-8 py-3 border border-slate-300 dark:border-gray-700 hover:border-brand-500 hover:text-brand-500 text-slate-700 dark:text-gray-300 rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:flex justify-center"
                >
                    <div className="relative w-full max-w-sm aspect-square">
                        <div className="absolute -inset-4 rounded-[2.5rem] border border-dashed border-brand-500/20 animate-spin-slow"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-fuchsia-600 rounded-[2rem] rotate-6 opacity-30 blur-2xl animate-float"></div>
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-gradient-to-b from-slate-100 to-slate-200 dark:from-ink-900 dark:to-ink-950">
                            <img
                                src="/profile.png"
                                alt={name}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating stat badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-5 py-4 shadow-glow-lg animate-float-slow"
                        >
                            <p className="text-2xl font-bold text-gradient leading-none">{firstStat.value}</p>
                            <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 whitespace-nowrap">{firstStat.label}</p>
                        </motion.div>
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
                <ChevronDown size={28} className="animate-bounce" />
            </Link>
        </section>
    );
};

export default Hero;
