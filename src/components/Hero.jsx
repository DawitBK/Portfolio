import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';
import { resumeData } from '../data/resume';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Hello, I'm</span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
                        {resumeData.personalInfo.name.split(" ")[0]} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            {resumeData.personalInfo.name.split(" ").slice(1).join(" ")}
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-8">
                        {resumeData.personalInfo.role}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
                        {resumeData.personalInfo.summary.split(".")[0]}. Building scalable applications and intuitive user experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-blue-500/25"
                        >
                            View Work <ArrowRight size={20} />
                        </Link>
                        <a
                            href="/Dawit Bayou Kassie Resume.pdf" // Updated path
                            download="Dawit_Bayou_Kassie_Resume.pdf"
                            className="px-8 py-3 border border-gray-700 hover:border-blue-400 hover:text-blue-400 text-gray-300 rounded-full font-medium flex items-center justify-center gap-2 transition-all"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-20 blur-xl"></div>
                        <div className="relative w-full h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 flex flex-col justify-center items-center shadow-2xl">
                            {/* Code Snippet/Abstract Graphic */}
                            <div className="w-full space-y-3">
                                <div className="h-2 w-1/3 bg-slate-700 rounded animate-pulse"></div>
                                <div className="h-2 w-2/3 bg-slate-700 rounded animate-pulse delay-75"></div>
                                <div className="h-2 w-1/2 bg-slate-700 rounded animate-pulse delay-150"></div>
                                <div className="mt-8 p-4 bg-slate-950 rounded-lg border border-slate-800/50 font-mono text-sm text-green-400">
                                    <p>&gt; const developer = &#123;</p>
                                    <p className="pl-4">&nbsp;&nbsp;name: "{resumeData.personalInfo.name}",</p>
                                    <p className="pl-4">&nbsp;&nbsp;skills: ["React", "Node", "DevOps"],</p>
                                    <p className="pl-4">&nbsp;&nbsp;passion: "Clean Code"</p>
                                    <p>&#125;;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
