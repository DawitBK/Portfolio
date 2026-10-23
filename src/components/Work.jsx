import React from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { production, openSource, sections } from '../data/content';

const Facts = ({ items }) => (
    <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((f) => (
            <li key={f} className="chip">
                {f}
            </li>
        ))}
    </ul>
);

const Work = () => (
    <section id="work" className="section">
        <div className="container-page">
            <SectionHead {...sections.work} />

            <ul className="mt-16 grid gap-6 md:grid-cols-3">
                {production.map((item, i) => (
                    <Reveal as="li" key={item.title} delay={i * 80} className="flex flex-col rounded-xl border border-line bg-panel p-7">
                        <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">{item.tag}</p>
                        <h3 className="mt-3 font-serif text-3xl leading-[1.12]">{item.title}</h3>
                        <p className="mt-4 flex-1 text-[0.98rem] leading-[1.7] text-muted">{item.summary}</p>
                        <Facts items={item.facts} />
                    </Reveal>
                ))}
            </ul>

            <Reveal className="mt-6 grid gap-8 rounded-xl border border-line bg-panel p-7 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
                <div>
                    <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Open source</p>
                    <h3 className="mt-3 font-serif text-3xl leading-[1.12]">{openSource.title}</h3>
                    <p className="mt-4 text-[0.98rem] leading-[1.7] text-muted">{openSource.summary}</p>
                    <Facts items={openSource.facts} />
                </div>
                <ul className="divide-y divide-line self-center border-y border-line">
                    {openSource.links.map(({ label, note, url }) => (
                        <li key={label}>
                            <a href={url} target="_blank" rel="noreferrer" className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-accent">
                                <span>
                                    <span className="font-medium">{label}</span>
                                    <span className="ml-3 text-sm text-muted">{note}</span>
                                </span>
                                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </div>
    </section>
);

export default Work;
