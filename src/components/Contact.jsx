import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { resumeData } from '../data/resume';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-ink-950">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-kicker">06 / Contact</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Let's Work Together</h2>
                    <p className="text-slate-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        Currently building out enterprise platforms full-time, and open to select freelance,
                        consulting, and collaboration opportunities in full-stack, cloud/DevOps engineering, and applied AI.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="flex items-center justify-center gap-3 px-8 py-4 card rounded-xl hover:border-brand-500/50 transition-colors group">
                            <Mail size={20} className="text-brand-500" />
                            <span className="text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white">{resumeData.personalInfo.email}</span>
                        </a>
                        <a href={`tel:${resumeData.personalInfo.phone}`} className="flex items-center justify-center gap-3 px-8 py-4 card rounded-xl hover:border-brand-500/50 transition-colors group">
                            <Phone size={20} className="text-brand-500" />
                            <span className="text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white">{resumeData.personalInfo.phone}</span>
                        </a>
                    </div>

                    <div className="flex justify-center gap-8">
                        <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <Github size={28} />
                        </a>
                        <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-gray-500 hover:text-brand-500 transition-colors">
                            <Linkedin size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
