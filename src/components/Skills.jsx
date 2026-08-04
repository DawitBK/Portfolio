import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const colorClasses = {
    brand: "border-brand-500/30 hover:border-brand-500/60 text-brand-600 dark:text-brand-400",
    violet: "border-violet-500/30 hover:border-violet-500/60 text-violet-600 dark:text-violet-400",
    emerald: "border-emerald-500/30 hover:border-emerald-500/60 text-emerald-600 dark:text-emerald-400",
    amber: "border-amber-500/30 hover:border-amber-500/60 text-amber-600 dark:text-amber-400",
    rose: "border-rose-500/30 hover:border-rose-500/60 text-rose-600 dark:text-rose-400",
    cyan: "border-cyan-500/30 hover:border-cyan-500/60 text-cyan-600 dark:text-cyan-400",
    fuchsia: "border-fuchsia-500/30 hover:border-fuchsia-500/60 text-fuchsia-600 dark:text-fuchsia-400",
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical <span className="text-gradient">Skills</span></h2>
                    <p className="text-slate-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-14">
                        A full-stack toolkit spanning frontend, backend, data, infrastructure, identity, and AI-assisted engineering workflows.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(resumeData.skills).map(([category, items], index) => {
                            const meta = resumeData.skillGroupMeta[category] || { label: category, color: 'brand' };
                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-lg hover:shadow-slate-900/5 transition-all"
                                >
                                    <h3 className={`text-sm uppercase tracking-wider font-semibold mb-4 ${colorClasses[meta.color]?.split(' ').slice(2).join(' ')}`}>
                                        {meta.label}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map(skill => (
                                            <span
                                                key={skill}
                                                className={`px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-gray-300 text-sm rounded-full border transition-colors cursor-default ${colorClasses[meta.color] || colorClasses.brand}`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
