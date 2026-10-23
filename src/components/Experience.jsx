import React from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { experience, skills, education, languages, sections } from '../data/content';

const Experience = () => (
    <section id="experience" className="section bg-panel">
        <div className="container-page">
            <SectionHead {...sections.experience} />

            <div className="mt-16 divide-y divide-line border-y border-line">
                {experience.map((job) => (
                    <Reveal key={job.role + job.period} as="article" className="grid gap-6 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:gap-20">
                        <div className="lg:sticky lg:top-28 lg:self-start">
                            <h3 className="font-serif text-3xl leading-[1.15]">{job.role}</h3>
                            <p className="mt-2 text-muted">{job.org}</p>
                            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
                                {job.period} &middot; {job.place}
                            </p>
                        </div>
                        <ul className="space-y-4 leading-[1.7]">
                            {job.points.map((p) => (
                                <li key={p} className="flex gap-4">
                                    <span aria-hidden="true" className="mt-[0.8rem] h-px w-5 shrink-0 bg-accent" />
                                    <span className="max-w-[40rem]">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>

            <div className="mt-24 grid gap-16 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
                <Reveal>
                    <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Skills</h3>
                    <dl className="mt-6 divide-y divide-line border-y border-line">
                        {skills.map(([label, value]) => (
                            <div key={label} className="grid gap-1.5 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8">
                                <dt className="font-medium">{label}</dt>
                                <dd className="text-[0.95rem] leading-relaxed text-muted">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
                <Reveal delay={80}>
                    <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Education</h3>
                    <ul className="mt-6 divide-y divide-line border-y border-line">
                        {education.map((e) => (
                            <li key={e.title} className="py-5">
                                <p className="font-medium">{e.title}</p>
                                <p className="mt-1 text-sm text-muted">
                                    {e.place} &middot; {e.year}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-8 text-sm text-muted">
                        <span className="font-mono text-xs uppercase tracking-wider">Languages </span>
                        {languages}
                    </p>
                </Reveal>
            </div>
        </div>
    </section>
);

export default Experience;
