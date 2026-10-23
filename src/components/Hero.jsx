import React from 'react';
import { person, headline, atAGlance, heroGuarantees } from '../data/content';

const Hero = () => (
    <section id="top" className="pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-20">
            <div className="flex flex-col justify-between gap-14">
                <div>
                    <p className="kicker mb-6 flex items-center gap-3">
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
                        {person.role}
                    </p>
                    <h1 className="font-serif text-[2.9rem] leading-[1.02] sm:text-6xl md:text-7xl xl:text-[5.5rem] 2xl:text-[6.25rem]">
                        {headline.map((line, i) => (
                            <span key={line} className={`block ${i === headline.length - 1 ? 'italic text-accent' : ''}`}>
                                {line}
                            </span>
                        ))}
                    </h1>
                    <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-muted xl:text-xl 2xl:max-w-3xl">{person.lead}</p>
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

                <figure className="max-w-2xl overflow-hidden 2xl:max-w-3xl rounded-xl border border-[#262d34] bg-[#0e1114] text-[#e8eaed] shadow-sm">
                    <div className="flex items-center justify-between border-b border-[#262d34] px-5 py-3">
                        <span className="font-mono text-[0.7rem] uppercase tracking-wider text-[#7d8791]">guarantees</span>
                        <span className="font-mono text-[0.7rem] text-[#5ec8dc]">all backed by tests</span>
                    </div>
                    <ul className="space-y-3 px-5 py-5 font-mono text-[0.82rem] leading-snug">
                        {heroGuarantees.map(({ text, where }) => (
                            <li key={text} className="flex items-start gap-3">
                                <span aria-hidden="true" className="text-[#5ec8dc]">&#10003;</span>
                                <span className="flex-1">{text}</span>
                                <span className="shrink-0 text-[#7d8791]">{where}</span>
                            </li>
                        ))}
                    </ul>
                    <figcaption className="border-t border-[#262d34] px-5 py-3 font-mono text-[0.7rem] text-[#7d8791]">
                        From the projects below. 3,000+ tests across the three employer systems.
                    </figcaption>
                </figure>
            </div>

            <aside className="lg:flex lg:w-full lg:max-w-[36rem] lg:justify-self-end" aria-label="At a glance">
                <div className="flex w-full flex-col overflow-hidden rounded-xl border border-line bg-panel">
                    <img
                        src="/profile-720.webp"
                        alt="Portrait of Dawit Bayou Kassie"
                        width="720"
                        height="732"
                        className="aspect-square min-h-0 w-full bg-panel object-cover object-[48%_0%] lg:aspect-auto lg:flex-1"
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
