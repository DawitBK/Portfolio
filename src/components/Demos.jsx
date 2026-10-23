import React, { useState } from 'react';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import { demos, sections } from '../data/content';
import { demoAccess } from '../data/demoAccess';

const CopyField = ({ label, value }) => {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            /* clipboard blocked: the value is on screen to select by hand */
        }
    };
    return (
        <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">{label}</p>
            <div className="mt-2 flex items-stretch overflow-hidden rounded-md border border-line bg-paper">
                <code className="flex-1 select-all break-all px-4 py-3 font-mono text-[0.95rem]">{value}</code>
                <button type="button" onClick={copy} className="border-l border-line px-4 text-sm font-medium text-accent transition-colors hover:bg-accent-soft" aria-label={`Copy ${label.toLowerCase()}`}>
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

const Access = () => (
    <Reveal className="mt-14 grid gap-10 rounded-xl border border-line bg-paper p-7 md:p-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
        <div>
            <p className="kicker mb-4">Demo access</p>
            <h3 className="font-serif text-4xl leading-[1.1]">{demoAccess.title}</h3>
            <p className="mt-4 max-w-xl text-[1.02rem] leading-[1.7] text-muted">{demoAccess.lede}</p>
            <ol className="mt-7 space-y-3 text-[0.98rem] leading-relaxed">
                {demoAccess.steps.map((s, i) => (
                    <li key={s} className="flex gap-4">
                        <span className="font-mono text-xs leading-[1.9] text-accent">{String(i + 1).padStart(2, '0')}</span>
                        <span>{s}</span>
                    </li>
                ))}
            </ol>
            <ul className="mt-7 flex flex-wrap gap-2">
                {demoAccess.roles.map((r) => (
                    <li key={r} className="chip">
                        {r}
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex flex-col gap-5 self-center">
            <CopyField label="Email" value={demoAccess.email} />
            <CopyField label="Password" value={demoAccess.password} />
            <a href={demoAccess.portal} target="_blank" rel="noreferrer" className="btn btn-primary mt-1">
                Open the identity portal
            </a>
            <p className="text-sm leading-relaxed text-muted">{demoAccess.note}</p>
        </div>
    </Reveal>
);

const Demos = () => (
    <section id="demos" className="section bg-panel">
        <div className="container-page">
            <SectionHead {...sections.demos} />
            <Access />
            <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {demos.map((d) => (
                    <li key={d.name} className="bg-panel">
                        <a href={d.url} target="_blank" rel="noreferrer" className="group flex h-full min-h-[13rem] flex-col justify-between gap-10 p-7 transition-colors hover:bg-accent-soft">
                            <div>
                                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">{d.kind}</p>
                                <h3 className="mt-3 font-serif text-3xl leading-tight">{d.name}</h3>
                                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{d.note}</p>
                            </div>
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                                Open demo <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Demos;
