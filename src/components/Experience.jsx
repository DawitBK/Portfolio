import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import Skills from './Skills';
import { experience, education, languages, sections } from '../data/content';

const isCurrent = (job) => /present/i.test(job.period);

const Role = ({ job, index, open, onToggle }) => {
    const current = isCurrent(job);
    const panel = `role-panel-${index}`;
    return (
        <Reveal as="li" delay={index * 70} className="relative pl-12 md:pl-[4.5rem]">
            <span
                aria-hidden="true"
                className={`absolute left-0 top-7 z-10 flex h-8 w-8 items-center justify-center rounded-full border md:h-10 md:w-10 ${current ? 'border-transparent bg-gradient-to-br from-accent to-accent-2 text-on-accent shadow-glow' : 'border-line bg-panel text-muted'}`}
            >
                <Icon name="briefcase" size={16} />
            </span>
            <article className={`card clip transition-shadow duration-300 ${open ? 'shadow-lift' : ''}`}>
                <h3>
                    <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={panel}
                        onClick={onToggle}
                        className={`group flex w-full items-start justify-between gap-5 p-5 text-left md:p-8 ${open ? '' : 'pb-2 md:pb-3'}`}
                    >
                        <span className="min-w-0">
                            <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted">
                                {job.period}
                                <span aria-hidden="true">/</span>
                                {job.place}
                                {current && <span className="rounded-full border border-accent/40 bg-accent-soft px-2 py-0.5 text-[0.62rem] text-accent">Current</span>}
                            </span>
                            <span className="mt-3 block font-serif text-[1.75rem] leading-[1.12] md:text-4xl">{job.role}</span>
                            <span className="mt-1.5 block text-muted">{job.org}</span>
                        </span>
                        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition duration-300 group-hover:border-accent/60 group-hover:text-ink">
                            <Icon name="chevronDown" size={18} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                        </span>
                    </button>
                </h3>
                {!open && <p className="line-clamp-2 px-5 pb-6 text-[0.95rem] leading-relaxed text-muted md:px-8 md:pb-8">{job.points[0]}</p>}
                <div id={panel} inert={!open} className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                        <ul className="space-y-3.5 border-t border-line px-5 pb-6 pt-6 leading-[1.7] md:px-8 md:pb-8">
                            {job.points.map((p) => (
                                <li key={p} className="flex gap-4">
                                    <span aria-hidden="true" className="mt-[0.8rem] h-px w-5 shrink-0 bg-accent" />
                                    <span className="max-w-[46rem]">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </Reveal>
    );
};

const Experience = () => {
    const [openRoles, setOpenRoles] = useState(() => new Set([0]));
    const allOpen = openRoles.size === experience.length;
    const toggle = (i) =>
        setOpenRoles((prev) => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
        });

    return (
        <section id="experience" className="section !pb-14 md:!pb-16">
            <div className="container-page">
                <SectionHead {...sections.experience} />

                <Reveal className="mt-12 flex justify-end md:mt-14">
                    <button
                        type="button"
                        onClick={() => setOpenRoles(allOpen ? new Set() : new Set(experience.map((_, i) => i)))}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-2 text-sm text-muted transition duration-200 hover:border-accent/60 hover:text-ink"
                    >
                        <Icon name={allOpen ? 'minus' : 'plus'} size={14} />
                        {allOpen ? 'Collapse all roles' : 'Expand all roles'}
                    </button>
                </Reveal>

                <ol className="relative mt-5 space-y-4 before:absolute before:bottom-8 before:left-4 before:top-10 before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-line before:to-line md:before:left-5">
                    {experience.map((job, i) => (
                        <Role key={job.role + job.period} job={job} index={i} open={openRoles.has(i)} onToggle={() => toggle(i)} />
                    ))}
                </ol>

                <Skills />

                <Reveal className="mt-24 md:mt-28">
                    <h3 className="font-serif text-4xl leading-[1.08] md:text-5xl">Education</h3>
                    <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {education.map((e) => (
                            <li key={e.title} className="spot card flex gap-4 p-6">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/15">
                                    <Icon name="cap" size={22} />
                                </span>
                                <div>
                                    <p className="font-semibold leading-snug">{e.title}</p>
                                    <p className="mt-1.5 text-sm text-muted">{e.place}</p>
                                    <p className="mt-3 font-mono text-xs text-accent">{e.year}</p>
                                </div>
                            </li>
                        ))}
                        <li className="spot card flex gap-4 p-6 md:max-lg:col-span-2">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/15">
                                <Icon name="globe" size={22} />
                            </span>
                            <div>
                                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Languages</p>
                                <p className="mt-2 font-semibold leading-snug">{languages}</p>
                            </div>
                        </li>
                    </ul>
                </Reveal>
            </div>
        </section>
    );
};

export default Experience;
