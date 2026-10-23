import React from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { principles, sections } from '../data/content';

const Approach = () => (
    <section id="approach" className="section">
        <div className="container-page grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:gap-20">
            <SectionHead {...sections.approach} className="lg:sticky lg:top-28 lg:self-start" />
            <ol className="divide-y divide-line border-y border-line">
                {principles.map(({ title, body }, i) => (
                    <Reveal key={title} as="li" className="grid gap-4 py-10 sm:grid-cols-[3.5rem_1fr]">
                        <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                            <h3 className="font-serif text-3xl leading-[1.15]">{title}</h3>
                            <p className="mt-3 max-w-[36rem] text-[1.02rem] leading-[1.7] text-muted">{body}</p>
                        </div>
                    </Reveal>
                ))}
            </ol>
        </div>
    </section>
);

export default Approach;
