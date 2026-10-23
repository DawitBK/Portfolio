import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { capabilities, sections } from '../data/content';
import { capabilityGroups, capabilityMeta } from '../data/ui';

const FALLBACK = { icon: 'cube', groups: [], tags: [] };
const items = capabilities.map((c, i) => ({ ...c, index: i, meta: capabilityMeta[c.title] ?? FALLBACK }));

const Capabilities = () => {
    const [filter, setFilter] = useState('All');
    const matches = (item) => filter === 'All' || item.meta.groups.includes(filter);
    const shown = items.filter(matches).length;
    const filters = ['All', ...capabilityGroups];

    return (
        <section id="capabilities" className="section">
            <div className="container-page">
                <SectionHead {...sections.capabilities} />

                <Reveal delay={80} className="mt-10 flex flex-col gap-4 md:mt-12 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p id="cap-filter-label" className="sr-only">
                            Explore by area
                        </p>
                        <div role="group" aria-labelledby="cap-filter-label" className="flex flex-wrap gap-2">
                            {filters.map((name) => {
                                const on = filter === name;
                                const count = name === 'All' ? items.length : items.filter((i) => i.meta.groups.includes(name)).length;
                                return (
                                    <button
                                        key={name}
                                        type="button"
                                        aria-pressed={on}
                                        onClick={() => setFilter(name)}
                                        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition duration-200 ${on ? 'border-transparent bg-ink text-paper' : 'border-line bg-panel/70 text-muted hover:border-accent/60 hover:text-ink'}`}
                                    >
                                        {name}
                                        <span className={`font-mono text-[0.68rem] ${on ? 'text-paper/70' : 'text-muted'}`}>{count}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <p className="font-mono text-[0.7rem] text-muted" role="status">
                        Explore by area. Showing {shown} of {items.length}
                    </p>
                </Reveal>

                <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
                    {items.map((item) => {
                        const on = matches(item);
                        return (
                            <Reveal as="li" key={item.title} delay={(item.index % 3) * 70} className="md:max-lg:last:col-span-2">
                                <article
                                    className={`spot card group h-full p-6 transition duration-300 md:p-7 ${on ? (filter === 'All' ? '' : 'border-accent/45') : 'scale-[0.985] opacity-35 saturate-0'}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/15 transition duration-300 group-hover:scale-105 group-hover:ring-accent/40">
                                            <Icon name={item.meta.icon} size={22} />
                                        </span>
                                        <span className="font-mono text-xs text-muted">{String(item.index + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight">{item.title}</h3>
                                    <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{item.body}</p>
                                    {item.meta.tags.length > 0 && (
                                        <ul className="mt-5 flex flex-wrap gap-1.5">
                                            {item.meta.tags.map((tag) => (
                                                <li key={tag} className="chip transition-colors duration-300 group-hover:border-accent/30 group-hover:text-ink">
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </article>
                            </Reveal>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Capabilities;
