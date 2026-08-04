import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Lock } from 'lucide-react';
import { resumeData } from '../data/resume';

const EnterpriseCard = ({ project }) => (
    <div className="card rounded-xl p-6">
        <div className="flex justify-between items-start mb-4">
            <Folder size={30} className="text-brand-500" />
            <span title="Proprietary work; details generalized for confidentiality" className="text-slate-400 dark:text-gray-500">
                <Lock size={16} />
            </span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-gray-200 mb-2">{project.title}</h3>
        <p className="text-slate-500 dark:text-gray-400 text-sm mb-4">{project.description}</p>
        {project.highlights && (
            <ul className="space-y-1.5 text-sm text-slate-600 dark:text-gray-400 mb-5">
                {project.highlights.map((h, i) => (
                    <li key={i} className="leading-relaxed pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-brand-500">{h}</li>
                ))}
            </ul>
        )}
        <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    {t}
                </span>
            ))}
        </div>
    </div>
);

const PersonalCard = ({ project }) => (
    <div className="card rounded-xl p-6 flex flex-col">
        <div className="flex justify-between items-start mb-4">
            <Folder size={30} className="text-brand-500" />
            <div className="flex gap-3">
                {project.links?.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">
                        <Github size={18} />
                    </a>
                )}
                {project.links?.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">
                        <ExternalLink size={18} />
                    </a>
                )}
            </div>
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-gray-200 mb-2">{project.title}</h3>
        <p className="text-slate-500 dark:text-gray-400 text-sm mb-6 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map(t => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    {t}
                </span>
            ))}
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-ink-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-kicker">05 / Work</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900 dark:text-white">Featured Work</h2>
                    <p className="text-slate-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16">
                        Enterprise platforms built as the lead engineer, alongside independent and freelance projects.
                    </p>

                    <div className="mb-16">
                        <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-gray-300 flex items-center gap-2">
                            Enterprise Platforms
                            <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-slate-100 dark:bg-ink-800 text-slate-500 dark:text-gray-400 border border-slate-200 dark:border-ink-800">generalized for confidentiality</span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {resumeData.projects.enterprise.map((project, index) => (
                                <EnterpriseCard key={index} project={project} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-gray-300">Personal & Freelance Projects</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {resumeData.projects.personal.map((project, index) => (
                                <PersonalCard key={index} project={project} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
