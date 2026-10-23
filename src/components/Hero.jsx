import React from 'react';
import { person, headline, atAGlance } from '../data/content';

const Hero = () => (
    <section id="top" className="pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="container-page grid items-end gap-14 lg:grid-cols-[1.35fr_1fr]">
            <div>
                <p className="kicker mb-6">{person.role}</p>
                <h1 className="font-serif text-[2.9rem] leading-[1.02] sm:text-6xl md:text-7xl">
                    {headline.map((line, i) => (
                        <span key={line} className={`block ${i === headline.length - 1 ? 'italic text-accent' : ''}`}>
                            {line}
                        </span>
                    ))}
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{person.lead}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                    <a href="#work" className="btn btn-primary">
                        See the work
                    </a>
                    <a href="#demos" className="btn btn-ghost">
                        Open the live demos
                    </a>
                    <a href={person.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
                        Download resume
                    </a>
                </div>
            </div>

            <aside className="lg:justify-self-end" aria-label="At a glance">
                <div className="overflow-hidden rounded-xl border border-line bg-panel">
                    <img
                        src="/profile-720.webp"
                        alt="Portrait of Dawit Bayou Kassie"
                        width="720"
                        height="732"
                        className="aspect-[4/3] w-full bg-panel object-cover object-[50%_18%]"
                        fetchpriority="high"
                    />
                    <dl className="divide-y divide-line text-sm">
                        {atAGlance.map(([label, value]) => (
                            <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-4 px-5 py-3.5">
                                <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">{label}</dt>
                                <dd>{value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </aside>
        </div>
    </section>
);

export default Hero;
