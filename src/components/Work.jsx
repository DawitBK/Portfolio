import React from 'react';
import Reveal from './Reveal';
import { production, openSource } from '../data/content';

const Stack = ({ items }) => (
    <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((s) => (
            <li key={s} className="chip">
                {s}
            </li>
        ))}
    </ul>
);

const Points = ({ items }) => (
    <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed">
        {items.map((p) => (
            <li key={p} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                <span>{p}</span>
            </li>
        ))}
    </ul>
);

const Work = () => (
    <section id="work" className="section">
        <div className="container-page">
            <Reveal>
                <p className="kicker mb-4">Selected work</p>
                <h2 className="h-section max-w-2xl">What I built, and what stops it from breaking.</h2>
            </Reveal>

            <h3 className="mt-16 border-b border-line pb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">Production systems</h3>
            <div className="divide-y divide-line">
                {production.map((item) => (
                    <Reveal key={item.title} as="article" className="grid gap-6 py-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
                        <div>
                            <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">{item.tag}</p>
                            <h4 className="mt-2 font-serif text-3xl">{item.title}</h4>
                            <p className="mt-3 text-sm font-medium text-accent">{item.proof}</p>
                        </div>
                        <div>
                            <p className="text-lg leading-relaxed">{item.summary}</p>
                            <Points items={item.points} />
                            <Stack items={item.stack} />
                        </div>
                    </Reveal>
                ))}
            </div>

            <h3 className="mt-16 border-b border-line pb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">Open source</h3>
            <div className="divide-y divide-line">
                {openSource.map((item) => (
                    <Reveal key={item.title} as="article" className="grid gap-6 py-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
                        <div>
                            <h4 className="font-serif text-3xl">{item.title}</h4>
                            <div className="mt-4 flex flex-col items-start gap-1.5 text-sm">
                                <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href={item.url} target="_blank" rel="noreferrer">
                                    View on GitHub
                                </a>
                                {item.extraLink && (
                                    <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href={item.extraLink.url} target="_blank" rel="noreferrer">
                                        {item.extraLink.label}
                                    </a>
                                )}
                            </div>
                        </div>
                        <div>
                            <p className="text-lg leading-relaxed">{item.summary}</p>
                            <Points items={item.points} />
                            <Stack items={item.stack} />
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Work;
