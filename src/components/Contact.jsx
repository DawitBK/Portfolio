import React from 'react';
import Reveal from './Reveal';
import { person } from '../data/content';

const rows = [
    ['Email', person.email, `mailto:${person.email}`],
    ['Phone', person.phone, `tel:${person.phone.replace(/\s/g, '')}`],
    ['GitHub', 'github.com/DawitBK', person.github],
    ['LinkedIn', 'linkedin.com/in/dawit-b-kassie', person.linkedin],
];

const Contact = () => (
    <section id="contact" className="section">
        <div className="container-page grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <Reveal>
                <p className="kicker mb-5">Contact</p>
                <h2 className="font-serif text-5xl leading-[1.05] md:text-6xl">
                    Have a system that has to be right?
                    <span className="block italic text-accent">Let&apos;s talk.</span>
                </h2>
                <p className="mt-8 max-w-lg text-lg leading-[1.7] text-muted">
                    I am open to senior engineering, architecture and technical lead roles, in Addis Ababa or remote. Email gets the fastest reply.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                    <a href={`mailto:${person.email}`} className="btn btn-primary">
                        Email me
                    </a>
                    <a href={person.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
                        Download resume
                    </a>
                </div>
            </Reveal>
            <Reveal delay={80}>
                <dl className="divide-y divide-line border-y border-line">
                    {rows.map(([label, text, href]) => (
                        <div key={label} className="grid grid-cols-[6rem_1fr] gap-4 py-5">
                            <dt className="font-mono text-xs uppercase tracking-wider text-muted">{label}</dt>
                            <dd>
                                <a href={href} className="underline decoration-line underline-offset-[5px] transition-colors hover:decoration-accent" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                                    {text}
                                </a>
                            </dd>
                        </div>
                    ))}
                    <div className="grid grid-cols-[6rem_1fr] gap-4 py-5">
                        <dt className="font-mono text-xs uppercase tracking-wider text-muted">Location</dt>
                        <dd>{person.location}</dd>
                    </div>
                </dl>
            </Reveal>
        </div>
    </section>
);

export default Contact;
