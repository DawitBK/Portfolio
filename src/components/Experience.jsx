import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Professional <span className="text-gradient">Experience</span></h2>

                    <div className="space-y-12 relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2"></div>

                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot */}
                                <div className={`absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border-4 border-slate-50 dark:border-slate-900 md:-translate-x-1/2 z-10 translate-y-1.5 md:translate-y-1 ${exp.current ? 'bg-emerald-500' : 'bg-brand-500'}`}></div>

                                {/* Content Card */}
                                <div className="w-full pl-12 md:w-1/2 md:px-12">
                                    <div className={`p-6 bg-white dark:bg-slate-950 border rounded-xl transition-all group ${exp.current ? 'border-emerald-500/40 hover:border-emerald-500/70 shadow-lg shadow-emerald-500/5' : 'border-slate-200 dark:border-slate-800 hover:border-brand-500/30'} ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        {exp.current && (
                                            <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                                                Current
                                            </span>
                                        )}
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-gray-200 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">{exp.title}</h3>
                                        <h4 className="text-violet-600 dark:text-violet-400 font-medium mb-1">{exp.company}</h4>
                                        <p className="text-sm text-slate-500 dark:text-gray-500 mb-4">{exp.period} {exp.location ? `| ${exp.location}` : ''}</p>
                                        {exp.description && (
                                            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                                                {exp.description}
                                            </p>
                                        )}
                                        {exp.highlights && (
                                            <ul className={`space-y-2 text-sm text-slate-600 dark:text-gray-400 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                                {exp.highlights.map((h, i) => (
                                                    <li key={i} className="leading-relaxed">{h}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                {/* Empty space for alternate side */}
                                <div className="hidden md:block w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
