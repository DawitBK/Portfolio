import React from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { production, openSource, sections } from '../data/content';

const Stack = ({ items }) => (
    <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((s) => (
            <li key={s} className="chip">
                {s}
            </li>
        ))}
    </ul>
);

const Points = ({ items }) => (
    <ul className="mt-6 space-y-4 text-[0.98rem] leading-[1.7]">
        {items.map((p) => (
            <li key={p} className="flex gap-4">
                <span aria-hidden="true" className="mt-[0.8rem] h-px w-5 shrink-0 bg-accent" />
                <span className="max-w-[40rem]">{p}</span>
            </li>
        ))}
    </ul>
);

const Entry = ({ index, left, children }) => (
    <Reveal as="article" className="grid gap-8 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs text-accent">{String(index).padStart(2, '0')}</p>
            {left}
        </div>
        <div>{children}</div>
    </Reveal>
);

const Group = ({ label }) => (
    <h3 className="mt-20 border-b border-line pb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted first:mt-0">{label}</h3>
);

const Link = ({ href, children }) => (
    <a className="underline decoration-line underline-offset-[5px] transition-colors hover:decoration-accent" href={href} target="_blank" rel="noreferrer">
        {children}
    </a>
);

const Work = () => (
    <section id="work" className="section">
        <div className="container-page">
            <SectionHead {...sections.work} />

            <div className="mt-20">
                <Group label="Production systems" />
                <div className="divide-y divide-line">
                    {production.map((item, i) => (
                        <Entry
                            key={item.title}
                            index={i + 1}
                            left={
                                <>
                                    <h4 className="mt-3 font-serif text-4xl leading-[1.1]">{item.title}</h4>
                                    <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-wider text-muted">{item.tag}</p>
                                    <p className="mt-5 inline-block rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">{item.proof}</p>
                                </>
                            }
                        >
                            <p className="max-w-[40rem] text-xl leading-[1.6]">{item.summary}</p>
                            <Points items={item.points} />
                            <Stack items={item.stack} />
                        </Entry>
                    ))}
                </div>

                <Group label="Open source" />
                <div className="divide-y divide-line">
                    {openSource.map((item, i) => (
                        <Entry
                            key={item.title}
                            index={production.length + i + 1}
                            left={
                                <>
                                    <h4 className="mt-3 font-serif text-4xl leading-[1.1]">{item.title}</h4>
                                    <div className="mt-5 flex flex-col items-start gap-2 text-sm">
                                        <Link href={item.url}>View on GitHub</Link>
                                        {item.extraLink && <Link href={item.extraLink.url}>{item.extraLink.label}</Link>}
                                    </div>
                                </>
                            }
                        >
                            <p className="max-w-[40rem] text-xl leading-[1.6]">{item.summary}</p>
                            <Points items={item.points} />
                            <Stack items={item.stack} />
                        </Entry>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Work;
