import React from 'react';
import Reveal from './Reveal';
import { proof, capabilities } from '../data/content';

const Proof = () => (
    <section className="border-t border-line">
        <div className="container-page">
            <dl className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
                {proof.map(({ value, label }) => (
                    <div key={label} className="px-0 py-12 md:px-8 md:first:pl-0">
                        <dt className="font-serif text-6xl leading-none">{value}</dt>
                        <dd className="mt-4 max-w-[14rem] text-sm leading-snug text-muted">{label}</dd>
                    </div>
                ))}
            </dl>
        </div>
        <div className="border-t border-line">
            <div className="container-page grid gap-12 py-20 md:grid-cols-3 md:gap-14">
                {capabilities.map(({ title, body }, i) => (
                    <Reveal key={title} delay={i * 80}>
                        <h2 className="font-serif text-3xl leading-[1.15]">{title}</h2>
                        <p className="mt-4 text-[1.02rem] leading-[1.7] text-muted">{body}</p>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Proof;
