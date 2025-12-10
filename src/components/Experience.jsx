import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Professional <span className="text-purple-500">Experience</span></h2>

                    <div className="space-y-12 relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 md:-translate-x-1/2"></div>

                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 md:-translate-x-1/2 z-10 translate-y-1.5 md:translate-y-0"></div>

                                {/* Content Card */}
                                <div className="w-full pl-12 md:w-1/2 md:px-12">
                                    <div className={`p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-all group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-xl font-bold text-gray-200 group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                                        <h4 className="text-purple-400 font-medium mb-1">{exp.company}</h4>
                                        <p className="text-sm text-gray-500 mb-4">{exp.period} | {exp.location || 'Remote'}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty space for alternate side */}
                                <div className="hidden md:block w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
