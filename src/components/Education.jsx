import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../data/resume';

const Education = () => {
    return (
        <section id="education" className="py-24 bg-slate-50 dark:bg-ink-900">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-kicker">04 / Education</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Education & Certifications</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {resumeData.education.map((edu, index) => {
                            const Icon = index === 0 ? GraduationCap : Award;
                            return (
                                <div key={index} className="flex gap-4 p-6 card rounded-xl">
                                    <div className="shrink-0 w-11 h-11 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-gray-200">{edu.degree}</h3>
                                        <p className="text-brand-600 dark:text-brand-400 text-sm font-medium">{edu.institution}</p>
                                        <p className="text-slate-500 dark:text-gray-500 text-sm mt-1">{edu.year}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
