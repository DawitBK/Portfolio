import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../data/resume';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education & <span className="text-gradient">Certifications</span></h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {resumeData.education.map((edu, index) => {
                            const Icon = index === 0 ? GraduationCap : Award;
                            return (
                                <div key={index} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-brand-500/30 transition-all">
                                    <div className="shrink-0 w-11 h-11 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-gray-200">{edu.degree}</h3>
                                        <p className="text-violet-600 dark:text-violet-400 text-sm font-medium">{edu.institution}</p>
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
