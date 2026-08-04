import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Cloud, ShieldCheck, Bot, Palette } from 'lucide-react';
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

const iconBgClasses = {
    brand: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    fuchsia: "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400",
};

const categoryIcons = {
    frontend: Layout,
    backend: Server,
    database: Database,
    platformDevops: Cloud,
    identitySecurity: ShieldCheck,
    aiEngineering: Bot,
    design: Palette,
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-ink-900/60">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="section-kicker">02 / Skills</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical <span className="text-gradient">Skills</span></h2>
                    <p className="text-slate-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-14">
                        A full-stack toolkit spanning frontend, backend, data, infrastructure, identity, and AI-assisted engineering workflows.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(resumeData.skills).map(([category, items], index) => {
                            const meta = resumeData.skillGroupMeta[category] || { label: category, color: 'brand' };
                            const Icon = categoryIcons[category] || Layout;
                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="p-6 glass-card rounded-xl hover:shadow-glow transition-shadow"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconBgClasses[meta.color] || iconBgClasses.brand}`}>
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
                                                className={`px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 text-sm rounded-full border transition-colors cursor-default ${colorClasses[meta.color] || colorClasses.brand}`}
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
