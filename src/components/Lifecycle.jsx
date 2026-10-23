import React from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { lifecycle, securityByDesign, sections } from '../data/content';

const Lifecycle = () => (
    <section id="lifecycle" className="section bg-panel">
        <div className="container-page">
            <SectionHead {...sections.lifecycle} />

            <ol className="mt-16 divide-y divide-line border-y border-line">
                {lifecycle.map(({ stage, practice, produces }, i) => (
                    <Reveal as="li" key={stage} className="grid gap-5 py-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:gap-20">
                        <div className="flex items-baseline gap-5">
                            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="font-serif text-3xl leading-[1.15]">{stage}</h3>
                        </div>
                        <div>
                            <p className="max-w-[40rem] text-[1.02rem] leading-[1.7]">{practice}</p>
                            <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-wider text-muted">
                                Produces <span className="ml-2 normal-case tracking-normal text-accent">{produces}</span>
                            </p>
                        </div>
                    </Reveal>
                ))}
            </ol>

            <Reveal className="mt-20">
                <h3 className="font-serif text-4xl leading-[1.1]">Security by design</h3>
                <p className="mt-4 max-w-2xl text-lg leading-[1.7] text-muted">Six properties I design for from the first diagram, and check again before release.</p>
                <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                    {securityByDesign.map(([label, text]) => (
                        <div key={label} className="bg-paper p-6">
                            <dt className="font-mono text-xs uppercase tracking-wider text-accent">{label}</dt>
                            <dd className="mt-3 text-[0.98rem] leading-relaxed">{text}</dd>
                        </div>
                    ))}
                </dl>
            </Reveal>
        </div>
    </section>
);

export default Lifecycle;
