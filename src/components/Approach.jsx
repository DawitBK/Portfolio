import React from 'react';
import Reveal from './Reveal';
import { principles } from '../data/content';

const Approach = () => (
    <section id="approach" className="section">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
                <p className="kicker mb-4">How I work</p>
                <h2 className="h-section">Four habits that run through everything above.</h2>
            </Reveal>
            <ol className="divide-y divide-line border-y border-line">
                {principles.map(({ title, body }, i) => (
                    <Reveal key={title} as="li" className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr]">
                        <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                            <h3 className="font-serif text-2xl">{title}</h3>
                            <p className="mt-2 leading-relaxed text-muted">{body}</p>
                        </div>
                    </Reveal>
                ))}
            </ol>
        </div>
    </section>
);

export default Approach;
