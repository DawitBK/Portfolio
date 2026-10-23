import React from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { capabilities, sections } from '../data/content';

const Capabilities = () => (
    <section id="capabilities" className="section">
        <div className="container-page">
            <SectionHead {...sections.capabilities} />
            <ul className="mt-16 grid gap-x-14 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {capabilities.map(({ title, body }, i) => (
                    <Reveal as="li" key={title} delay={(i % 3) * 80} className="border-t border-line pt-6">
                        <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</p>
                        <h3 className="mt-3 font-serif text-3xl leading-[1.15]">{title}</h3>
                        <p className="mt-4 text-[1.02rem] leading-[1.7] text-muted">{body}</p>
                    </Reveal>
                ))}
            </ul>
        </div>
    </section>
);

export default Capabilities;
