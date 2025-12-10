import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured <span className="text-green-500">Projects</span></h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resumeData.projects.map((project, index) => (
                            <div key={index} className="bg-slate-900/50 border border-slate-800 hover:border-green-500/50 rounded-xl p-6 transition-all hover:transform hover:-translate-y-1 group">
                                <div className="flex justify-between items-start mb-4">
                                    <Folder size={40} className="text-green-500" />
                                    <div className="flex gap-4">
                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.links.live && (
                                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-green-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 h-12 overflow-hidden line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-mono text-green-500/80 bg-green-500/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
