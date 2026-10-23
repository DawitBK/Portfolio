import React from 'react';
import Reveal from './Reveal';
import { experience, skills, education, languages } from '../data/content';

const Experience = () => (
    <section id="experience" className="section bg-panel">
        <div className="container-page">
            <Reveal>
                <p className="kicker mb-4">Experience</p>
                <h2 className="h-section max-w-2xl">Where I have done this work.</h2>
            </Reveal>

            <div className="mt-14 divide-y divide-line border-y border-line">
                {experience.map((job) => (
                    <Reveal key={job.role + job.period} as="article" className="grid gap-5 py-9 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
                        <div>
                            <h3 className="font-serif text-2xl">{job.role}</h3>
                            <p className="mt-1 text-muted">{job.org}</p>
                            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
                                {job.period} &middot; {job.place}
                            </p>
                        </div>
                        <ul className="space-y-2.5 leading-relaxed">
                            {job.points.map((p) => (
                                <li key={p} className="flex gap-3">
                                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>

            <div className="mt-20 grid gap-14 lg:grid-cols-[1.6fr_1fr]">
                <Reveal>
                    <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Skills</h3>
                    <dl className="mt-5 divide-y divide-line border-y border-line">
                        {skills.map(([label, value]) => (
                            <div key={label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                                <dt className="font-medium">{label}</dt>
                                <dd className="text-sm leading-relaxed text-muted">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
                <Reveal delay={80}>
                    <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Education</h3>
                    <ul className="mt-5 divide-y divide-line border-y border-line">
                        {education.map((e) => (
                            <li key={e.title} className="py-4">
                                <p className="font-medium">{e.title}</p>
                                <p className="text-sm text-muted">
                                    {e.place} &middot; {e.year}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-sm text-muted">
                        <span className="font-mono text-xs uppercase tracking-wider">Languages </span>
                        {languages}
                    </p>
                </Reveal>
            </div>
        </div>
    </section>
);

export default Experience;
