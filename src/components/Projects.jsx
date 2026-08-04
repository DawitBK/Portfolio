import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Lock } from 'lucide-react';
import { resumeData } from '../data/resume';

const ProjectCard = ({ project, accent = 'green' }) => {
    const accentClasses = {
        green: "hover:border-emerald-500/50 group-hover:text-emerald-400 text-emerald-500",
        brand: "hover:border-brand-500/50 group-hover:text-brand-400 text-brand-500",
    };
    const tagClasses = {
        green: "text-emerald-600 dark:text-emerald-500/80 bg-emerald-500/10",
        brand: "text-brand-600 dark:text-brand-400 bg-brand-500/10",
    };

    return (
        <div className={`bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-all hover:transform hover:-translate-y-1 group flex flex-col ${accent === 'green' ? 'hover:border-emerald-500/50' : 'hover:border-brand-500/50'}`}>
            <div className="flex justify-between items-start mb-4">
                <Folder size={36} className={accent === 'green' ? 'text-emerald-500' : 'text-brand-500'} />
                <div className="flex gap-4">
                    {project.confidential && (
                        <span title="Proprietary — details generalized for confidentiality" className="text-slate-400 dark:text-gray-500">
                            <Lock size={18} />
                        </span>
                    )}
                    {project.links?.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">
                            <Github size={20} />
                        </a>
                    )}
                    {project.links?.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className={`text-lg font-bold text-slate-800 dark:text-gray-200 mb-2 transition-colors ${accent === 'green' ? 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400' : 'group-hover:text-brand-500 dark:group-hover:text-brand-400'}`}>
                {project.title}
            </h3>
            <p className="text-slate-500 dark:text-gray-400 text-sm mb-6 flex-1">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                    <span key={t} className={`text-xs font-mono px-2 py-1 rounded ${tagClasses[accent]}`}>
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-gradient">Work</span></h2>
                    <p className="text-slate-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16">
                        Enterprise platforms built as the primary engineer, alongside independent and freelance projects.
                    </p>

                    <div className="mb-16">
                        <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-gray-300 flex items-center gap-2">
                            Enterprise Platforms
                            <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">details generalized — proprietary</span>
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {resumeData.projects.enterprise.map((project, index) => (
                                <ProjectCard key={index} project={project} accent="brand" />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-gray-300">Personal & Freelance Projects</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {resumeData.projects.personal.map((project, index) => (
                                <ProjectCard key={index} project={project} accent="green" />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
