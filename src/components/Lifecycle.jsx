import { useRef, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { lifecycle, securityByDesign, sections } from '../data/content';
import { securityIcons } from '../data/ui';
import { splitList } from '../lib/text';

const count = lifecycle.length;
const pad = (n) => String(n).padStart(2, '0');

const Lifecycle = () => {
    const [active, setActive] = useState(0);
    const tabs = useRef([]);
    const scroller = useRef(null);
    const stage = lifecycle[active];

    // On narrow screens the track scrolls sideways: keep the chosen stage centred without moving the page.
    const centre = (i) => {
        const box = scroller.current;
        const tab = tabs.current[i];
        if (!box || !tab || box.scrollWidth <= box.clientWidth) return;
        box.scrollTo({ left: tab.offsetLeft - (box.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' });
    };

    const go = (i, moveFocus = false) => {
        const next = (i + count) % count;
        setActive(next);
        centre(next);
        if (moveFocus) tabs.current[next]?.focus();
    };

    const onKeyDown = (event) => {
        const keys = {
            ArrowRight: active + 1,
            ArrowDown: active + 1,
            ArrowLeft: active - 1,
            ArrowUp: active - 1,
            Home: 0,
            End: count - 1,
        };
        if (!(event.key in keys)) return;
        event.preventDefault();
        go(keys[event.key], true);
    };

    return (
        <section id="lifecycle" className="section scope-dark clip border-y border-line bg-paper text-ink">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="bg-grid fade-mask absolute inset-0 opacity-40" />
                <div className="absolute -left-40 top-20 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.14),transparent)]" />
                <div className="absolute -right-40 bottom-0 h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent-2)/0.14),transparent)]" />
            </div>

            <div className="container-page relative">
                <SectionHead {...sections.lifecycle} />

                <Reveal className="mt-14 md:mt-16">
                    <div className="relative pb-0 md:pb-12">
                        <div ref={scroller} className="hide-scrollbar -mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0">
                            <div role="tablist" aria-label="Delivery lifecycle stages" onKeyDown={onKeyDown} className="relative flex min-w-max gap-2 md:grid md:min-w-0 md:grid-cols-7 md:gap-0">
                                <div aria-hidden="true" className="absolute left-[calc(100%/14)] right-[calc(100%/14)] top-5 hidden h-px bg-line md:block">
                                    <div className="h-full origin-left bg-gradient-to-r from-accent to-accent-2 transition-transform duration-700 ease-out" style={{ transform: `scaleX(${active / (count - 1)})` }} />
                                </div>
                                {lifecycle.map((s, i) => {
                                    const on = i === active;
                                    const done = i < active;
                                    return (
                                        <button
                                            key={s.stage}
                                            ref={(el) => {
                                                tabs.current[i] = el;
                                            }}
                                            type="button"
                                            role="tab"
                                            id={`stage-tab-${i}`}
                                            aria-selected={on}
                                            aria-controls="stage-panel"
                                            tabIndex={on ? 0 : -1}
                                            onClick={() => go(i)}
                                            className="group relative flex w-[7.5rem] shrink-0 flex-col items-center gap-3 rounded-xl px-1 pb-2 text-center md:w-auto"
                                        >
                                            <span
                                                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-mono text-xs transition duration-300 ${
                                                    on
                                                        ? 'scale-110 border-transparent bg-gradient-to-br from-accent to-accent-2 text-on-accent shadow-glow'
                                                        : done
                                                          ? 'border-accent/60 bg-accent-soft text-accent'
                                                          : 'border-line bg-panel text-muted group-hover:border-accent/50 group-hover:text-ink'
                                                }`}
                                            >
                                                {done ? <Icon name="check" size={16} strokeWidth={2.2} /> : pad(i + 1)}
                                            </span>
                                            <span className={`text-[0.8rem] leading-tight transition-colors duration-300 lg:text-sm ${on ? 'font-medium text-ink' : 'text-muted group-hover:text-ink'}`}>{s.stage}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div aria-hidden="true" className="pointer-events-none absolute inset-x-[calc(100%/14)] bottom-0 hidden h-9 md:block">
                            <svg className="h-full w-full" viewBox="0 0 100 36" preserveAspectRatio="none">
                                <path d="M100 0C100 34 0 34 0 4" fill="none" stroke="rgb(var(--line))" strokeWidth="1.5" strokeDasharray="5 6" vectorEffect="non-scaling-stroke" />
                            </svg>
                            <span className="absolute -left-[5px] top-0 h-0 w-0 border-x-[5px] border-b-[8px] border-x-transparent border-b-[rgb(var(--muted))]" />
                            <span className="absolute left-1/2 top-[1.65rem] -translate-x-1/2 bg-paper px-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">feedback</span>
                        </div>
                    </div>

                    <div
                        role="tabpanel"
                        id="stage-panel"
                        aria-labelledby={`stage-tab-${active}`}
                        tabIndex={0}
                        className="card relative mt-8 clip bg-panel/80 p-6 backdrop-blur md:mt-10 md:p-10"
                    >
                        <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-8 select-none font-serif text-[11rem] leading-none text-ink/[0.04] md:text-[16rem]">
                            {pad(active + 1)}
                        </span>
                        <div key={active} className="relative grid animate-fade grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                                    Stage {pad(active + 1)} of {pad(count)}
                                </p>
                                <h3 className="mt-3 font-serif text-4xl leading-[1.05] md:text-5xl">{stage.stage}</h3>
                                <p className="mt-5 max-w-2xl text-[1.02rem] leading-[1.75] md:text-[1.08rem]">{stage.practice}</p>
                            </div>
                            <div className="lg:border-l lg:border-line lg:pl-10">
                                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Produces</p>
                                <ul className="mt-4 space-y-2.5">
                                    {splitList(stage.produces).map((item) => (
                                        <li key={item} className="flex items-center gap-3 rounded-xl border border-line bg-paper/60 px-4 py-3 text-[0.95rem]">
                                            <Icon name="doc" size={18} className="shrink-0 text-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="relative mt-8 flex items-center justify-between gap-3 border-t border-line pt-5">
                            <button type="button" onClick={() => go(active - 1)} className="btn btn-ghost !px-4 !py-2" aria-label={`Previous stage: ${lifecycle[(active - 1 + count) % count].stage}`}>
                                <Icon name="arrowRight" size={15} className="rotate-180" />
                                Previous
                            </button>
                            <span className="whitespace-nowrap font-mono text-xs text-muted" aria-hidden="true">
                                {pad(active + 1)} / {pad(count)}
                            </span>
                            <button type="button" onClick={() => go(active + 1)} className="btn btn-ghost !px-4 !py-2" aria-label={`Next stage: ${lifecycle[(active + 1) % count].stage}`}>
                                Next
                                <Icon name="arrowRight" size={15} />
                            </button>
                        </div>
                    </div>
                </Reveal>

                <Reveal className="mt-24 md:mt-28">
                    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
                        <div>
                            <h3 className="font-serif text-4xl leading-[1.08] md:text-5xl">Security by design</h3>
                            <p className="lede mt-4 max-w-md">Six properties I design for from the first diagram, and check again before release.</p>
                        </div>
                        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-0">
                            {securityByDesign.map(([label, text]) => (
                                <li key={label} className="spot card flex gap-4 p-5">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/15">
                                        <Icon name={securityIcons[label] ?? 'shield'} size={20} />
                                    </span>
                                    <div>
                                        <p className="font-mono text-xs uppercase tracking-wider text-accent">{label}</p>
                                        <p className="mt-2 text-[0.93rem] leading-relaxed">{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Lifecycle;
