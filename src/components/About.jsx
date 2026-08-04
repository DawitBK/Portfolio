import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About <span className="text-gradient">Me</span></h2>

                    <div className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
                        <p className="md:col-span-3 text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                            {resumeData.personalInfo.summary}
                        </p>

                        <div className="md:col-span-2 grid grid-cols-2 gap-4">
                            {resumeData.stats.map((stat) => (
                                <div key={stat.label} className="text-center p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</h3>
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
