import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { skills } from '../data/content';
import { splitBracket, splitList } from '../lib/text';

const groups = skills.map(([label, value]) => ({ label, items: splitList(value).map((text) => ({ text, parts: splitBracket(text) })) }));

// An explorable matrix: pick an area, or type to light up matching skills across every area. Nothing is removed, so the
// layout never jumps and every skill stays on the page.
const Skills = () => {
    const [area, setArea] = useState('All');
    const [query, setQuery] = useState('');
    const needle = query.trim().toLowerCase();

    const inArea = (g) => area === 'All' || g.label === area;
    const hit = (item) => !needle || item.text.toLowerCase().includes(needle);
    const matches = groups.filter(inArea).reduce((sum, g) => sum + g.items.filter(hit).length, 0);
    const total = groups.reduce((sum, g) => sum + g.items.length, 0);

    return (
        <Reveal id="skills" className="mt-24 md:mt-28">
            <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-end lg:gap-16">
                <div>
                    <p className="kicker mb-4">Skills</p>
                    <h3 className="font-serif text-4xl leading-[1.08] md:text-5xl">Explore the toolbox.</h3>
                </div>
                <div className="mt-6 lg:mt-0">
                    <label htmlFor="skill-filter" className="sr-only">
                        Filter skills
                    </label>
                    <div className="relative">
                        <Icon name="search" size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                            id="skill-filter"
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Filter skills, for example PostgreSQL"
                            autoComplete="off"
                            className="w-full rounded-xl border border-line bg-panel py-3 pl-11 pr-4 text-[0.95rem] text-ink placeholder:text-muted focus:border-accent/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                        />
                    </div>
                </div>
            </div>

            <div role="group" aria-label="Filter skills by area" className="mt-6 flex flex-wrap gap-2">
                {['All', ...groups.map((g) => g.label)].map((name) => {
                    const on = area === name;
                    return (
                        <button
                            key={name}
                            type="button"
                            aria-pressed={on}
                            onClick={() => setArea(name)}
                            className={`rounded-full border px-3.5 py-1.5 text-sm transition duration-200 ${on ? 'border-transparent bg-ink text-paper' : 'border-line bg-panel/70 text-muted hover:border-accent/60 hover:text-ink'}`}
                        >
                            {name}
                        </button>
                    );
                })}
            </div>
            <p className="mt-4 font-mono text-[0.7rem] text-muted" role="status">
                {needle || area !== 'All' ? `${matches} of ${total} skills shown` : `${total} skills across ${groups.length} areas`}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {groups.map((g) => {
                    const visible = inArea(g) && (!needle || g.items.some(hit));
                    return (
                        <section key={g.label} aria-label={g.label} className={`spot card p-5 transition duration-300 md:p-6 ${visible ? '' : 'scale-[0.985] opacity-30 saturate-0'}`}>
                            <h4 className="flex items-baseline justify-between gap-3 text-base font-semibold tracking-tight">
                                {g.label}
                                <span className="font-mono text-[0.68rem] font-normal text-muted">{String(g.items.length).padStart(2, '0')}</span>
                            </h4>
                            <ul className="mt-4 flex flex-wrap gap-1.5">
                                {g.items.map((item) => {
                                    const lit = needle && inArea(g) && hit(item);
                                    return (
                                        <li
                                            key={item.text}
                                            className={`chip !rounded-lg !py-1.5 font-sans !text-[0.78rem] !leading-snug transition duration-200 ${lit ? '!border-accent/60 !bg-accent-soft !text-ink' : needle ? 'opacity-45' : 'hover:border-accent/40 hover:text-ink'}`}
                                        >
                                            {item.parts[0]}
                                            {item.parts[1] && <span className="ml-1 opacity-70">({item.parts[1]})</span>}
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    );
                })}
            </div>
        </Reveal>
    );
};

export default Skills;
