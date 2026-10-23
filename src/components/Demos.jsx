import React from 'react';
import SectionHead from './SectionHead';
import { demos, sections } from '../data/content';

const Demos = () => (
    <section id="demos" className="section bg-panel">
        <div className="container-page">
            <SectionHead {...sections.demos} />
            <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {demos.map((d) => (
                    <li key={d.name} className="bg-panel">
                        <a href={d.url} target="_blank" rel="noreferrer" className="group flex h-full min-h-[13rem] flex-col justify-between gap-10 p-7 transition-colors hover:bg-accent-soft">
                            <div>
                                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">{d.kind}</p>
                                <h3 className="mt-3 font-serif text-3xl leading-tight">{d.name}</h3>
                                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{d.note}</p>
                            </div>
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                                Open demo <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Demos;
