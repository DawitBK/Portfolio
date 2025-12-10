import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About <span className="text-blue-500">Me</span></h2>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                {resumeData.personalInfo.summary}
                            </p>
                            <div className="flex gap-4">
                                <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-800 w-1/3">
                                    <h3 className="text-2xl font-bold text-blue-400">2+</h3>
                                    <p className="text-sm text-gray-500">Years Experience</p>
                                </div>
                                <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-800 w-1/3">
                                    <h3 className="text-2xl font-bold text-purple-400">10+</h3>
                                    <p className="text-sm text-gray-500">Projects Completed</p>
                                </div>
                                <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-800 w-1/3">
                                    <h3 className="text-2xl font-bold text-green-400">2</h3>
                                    <p className="text-sm text-gray-500">Certifications</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-200">Technical Skills</h3>
                            <div className="space-y-6">
                                {Object.entries(resumeData.skills).map(([category, items]) => (
                                    <div key={category}>
                                        <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">{category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-slate-900 text-gray-300 text-sm rounded-full border border-slate-800 hover:border-blue-500/50 transition-colors cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
