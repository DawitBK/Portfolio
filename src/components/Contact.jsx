import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { resumeData } from '../data/resume';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full blur-3xl mix-blend-screen"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl mix-blend-screen"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Work <span className="text-blue-500">Together</span></h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        I'm currently available for freelance projects and full-time opportunities.
                        If you're looking for a developer who cares about user experience and code quality, let's talk.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500 transition-colors group">
                            <Mail className="text-blue-500 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 group-hover:text-white">{resumeData.personalInfo.email}</span>
                        </a>
                        <a href={`tel:${resumeData.personalInfo.phone}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-green-500 transition-colors group">
                            <Phone className="text-green-500 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 group-hover:text-white">{resumeData.personalInfo.phone}</span>
                        </a>
                    </div>

                    <div className="flex justify-center gap-8 mb-12">
                        <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Github size={32} />
                        </a>
                        <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                            <Linkedin size={32} />
                        </a>
                    </div>

                    <div className="border-t border-slate-900 pt-8">
                        <p className="text-gray-600 text-sm">
                            &copy; {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
