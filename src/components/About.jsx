import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-ink-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-kicker">01 / About</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">About Me</h2>

                    <div className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
                        <div className="md:col-span-3">
                            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                                {resumeData.personalInfo.summary}
                            </p>
                            <p className="text-slate-500 dark:text-gray-500 text-sm mt-4">
                                {resumeData.personalInfo.languages}
                            </p>
                        </div>

                        <div className="md:col-span-2 grid grid-cols-2 gap-4">
                            {resumeData.stats.map((stat) => (
                                <div key={stat.label} className="text-center p-5 card rounded-xl">
                                    <h3 className="text-2xl md:text-3xl font-bold text-brand-600 dark:text-brand-400">{stat.value}</h3>
                                    <p className="text-xs md:text-sm text-slate-500 dark:text-gray-500 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
