import React from 'react';
import { resumeData } from '../data/resume';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-ink-900 border-t border-slate-200 dark:border-ink-800 py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-gray-600">
                <p>&copy; {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.</p>
                <p>Built with React, Tailwind CSS & Framer Motion.</p>
            </div>
        </footer>
    );
};

export default Footer;
