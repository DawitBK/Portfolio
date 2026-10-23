import React from 'react';
import Reveal from './Reveal';
import { demos } from '../data/content';

const Demos = () => (
    <section id="demos" className="section bg-panel">
        <div className="container-page">
            <Reveal className="max-w-2xl">
                <p className="kicker mb-4">Live demos</p>
                <h2 className="h-section">Try the systems, signed in through one identity provider.</h2>
                <p className="mt-5 leading-relaxed text-muted">
                    These are company-neutral editions running on demo data. The identity portal is the launcher; the other demos sign in through it. The back ends run on a single machine, so a demo can occasionally be offline.
                </p>
            </Reveal>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {demos.map((d) => (
                    <li key={d.name} className="bg-panel">
                        <a href={d.url} target="_blank" rel="noreferrer" className="group flex h-full flex-col justify-between gap-8 p-6 transition-colors hover:bg-accent-soft">
                            <div>
                                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">{d.kind}</p>
                                <h3 className="mt-2 font-serif text-2xl">{d.name}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted">{d.note}</p>
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
