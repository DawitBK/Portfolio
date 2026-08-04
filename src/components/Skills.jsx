import React from 'react';
import { motion } from 'framer-motion';
import { Server, GitBranch, Layout, Cloud, Database, ShieldCheck, Bot, Palette } from 'lucide-react';
import { resumeData } from '../data/resume';

const categoryIcons = {
    backend: Server,
    architecture: GitBranch,
    frontend: Layout,
    platformDevops: Cloud,
    database: Database,
    identitySecurity: ShieldCheck,
    aiEngineering: Bot,
    design: Palette,
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-ink-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-kicker">02 / Skills</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900 dark:text-white">Technical Skills</h2>
                    <p className="text-slate-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-14">
                        A full-stack toolkit spanning backend, architecture, frontend, cloud infrastructure, data, identity, and applied AI.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {Object.entries(resumeData.skills).map(([category, items], index) => {
                            const meta = resumeData.skillGroupMeta[category] || { label: category };
                            const Icon = categoryIcons[category] || Layout;
                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.04 }}
                                    className="p-6 card rounded-xl"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-9 h-9 rounded-lg flex items-center justify-center bg-brand-500/10 text-brand-600 dark:text-brand-400">
                                            <Icon size={18} />
                                        </span>
                                        <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-700 dark:text-gray-300">
                                            {meta.label}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 bg-slate-100 dark:bg-ink-800/60 text-slate-700 dark:text-gray-300 text-xs rounded-md border border-slate-200 dark:border-ink-800"
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
