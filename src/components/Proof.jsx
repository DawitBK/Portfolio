import React from 'react';
import Reveal from './Reveal';
import { proof, capabilities } from '../data/content';

const Proof = () => (
    <section className="border-t border-line">
        <div className="container-page">
            <dl className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
                {proof.map(({ value, label }) => (
                    <div key={label} className="px-0 py-10 md:px-8 md:first:pl-0">
                        <dt className="font-serif text-5xl">{value}</dt>
                        <dd className="mt-2 max-w-[14rem] text-sm leading-snug text-muted">{label}</dd>
                    </div>
                ))}
            </dl>
        </div>
        <div className="border-t border-line">
            <div className="container-page grid gap-10 py-16 md:grid-cols-3">
                {capabilities.map(({ title, body }, i) => (
                    <Reveal key={title} delay={i * 80}>
                        <h2 className="font-serif text-2xl">{title}</h2>
                        <p className="mt-3 leading-relaxed text-muted">{body}</p>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Proof;
