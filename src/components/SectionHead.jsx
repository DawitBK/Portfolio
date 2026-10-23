import React from 'react';
import Reveal from './Reveal';

// Kicker, headline and a one-paragraph standfirst: the same opening for every section.
const SectionHead = ({ kicker, title, lede, className = '' }) => (
    <Reveal className={className}>
        <p className="kicker mb-5">{kicker}</p>
        <h2 className="h-section max-w-3xl">{title}</h2>
        {lede && <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-muted">{lede}</p>}
    </Reveal>
);

export default SectionHead;
