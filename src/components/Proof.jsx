import React from 'react';
import { proof } from '../data/content';

const Proof = () => (
    <section className="border-t border-line" aria-label="In numbers">
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
    </section>
);

export default Proof;
