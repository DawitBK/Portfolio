import { useSyncExternalStore } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import SystemMap from './SystemMap';
import { person, headline, atAGlance } from '../data/content';
import { useUiStore } from '../store/uiStore';
import { modKey } from '../lib/platform';

const clock = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'Africa/Addis_Ababa' });
const subscribeClock = (onChange) => {
    const timer = setInterval(onChange, 20000);
    return () => clearInterval(timer);
};
const useAddisTime = () =>
    useSyncExternalStore(
        subscribeClock,
        () => clock.format(new Date()),
        () => ''
    );

const Hero = () => {
    const openPalette = useUiStore((s) => s.openPalette);
    const time = useAddisTime();
    const lastLine = headline.length - 1;

    return (
        <section id="top" className="relative pb-10 pt-28 md:pb-16 md:pt-36">
            <div aria-hidden="true" data-parallax className="pointer-events-none absolute inset-x-0 top-0 h-[52rem] clip">
                <div className="bg-grid fade-mask absolute inset-0 opacity-60" />
                <div
                    className="absolute -right-48 -top-48 h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.2),transparent)] will-change-transform"
                    style={{ transform: 'translate3d(calc(var(--px, 0) * -28px), calc(var(--py, 0) * -20px), 0)' }}
                />
                <div
                    className="absolute -left-56 top-48 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent-2)/0.14),transparent)] will-change-transform"
                    style={{ transform: 'translate3d(calc(var(--px, 0) * 22px), calc(var(--py, 0) * 16px), 0)' }}
                />
            </div>

            <div className="container-page relative grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
                <div className="flex flex-col justify-center">
                    <p className="kicker mb-7 animate-rise before:hidden">
                        <span aria-hidden="true" className="relative flex h-2 w-2">
                            <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                            <span className="relative h-2 w-2 rounded-full bg-accent" />
                        </span>
                        {person.role}
                    </p>
                    <h1 className="font-serif text-[2.9rem] leading-[1.02] tracking-[-0.015em] sm:text-6xl md:text-7xl xl:text-[5.5rem] 2xl:text-[6.25rem]">
                        {headline.map((line, i) => (
                            <span key={line} className="block animate-rise" style={{ animationDelay: `${120 + i * 110}ms` }}>
                                {i === lastLine ? (
                                    <span className="relative inline-block pr-2 italic">
                                        <span className="text-gradient">{line}</span>
                                        <svg aria-hidden="true" className="absolute -bottom-1 left-0 h-3 w-full md:h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="hero-underline" x1="0" x2="1">
                                                    <stop offset="0" style={{ stopColor: 'rgb(var(--accent))' }} />
                                                    <stop offset="1" style={{ stopColor: 'rgb(var(--accent-2))' }} />
                                                </linearGradient>
                                            </defs>
                                            <path className="draw" pathLength="1" d="M3 8C40 2 92 11 142 5s48-1 55 2" fill="none" stroke="url(#hero-underline)" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                    </span>
                                ) : (
                                    line
                                )}
                            </span>
                        ))}
                    </h1>
                    <p className="mt-9 max-w-2xl animate-rise text-lg leading-[1.7] text-muted [animation-delay:480ms] xl:text-xl 2xl:max-w-3xl">{person.lead}</p>
                    <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:600ms]">
                        <a href="#work" className="btn btn-primary">
                            See the work
                            <Icon name="arrowRight" size={16} />
                        </a>
                        <a href="#demos" className="btn btn-ghost">
                            Open the live demos
                        </a>
                        <a href={person.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
                            <Icon name="download" size={16} />
                            Download resume
                        </a>
                    </div>
                    <p className="mt-6 hidden animate-rise items-center gap-2 text-sm text-muted [animation-delay:720ms] md:flex">
                        <button type="button" onClick={openPalette} className="inline-flex items-center gap-2 rounded-md transition-colors hover:text-ink">
                            Press
                            <span className="flex items-center gap-1" aria-hidden="true">
                                <kbd className="kbd">{modKey}</kbd>
                                <kbd className="kbd">K</kbd>
                            </span>
                            <span className="sr-only">Control K</span>
                            to jump to any section, demo or action
                        </button>
                    </p>
                </div>

                <aside className="w-full animate-rise [animation-delay:260ms] md:max-w-none lg:max-w-[34rem] lg:justify-self-end 2xl:max-w-[40rem]" aria-label="At a glance">
                    <div className="rounded-[1.6rem] bg-gradient-to-br from-accent/55 via-line to-accent-2/45 p-px shadow-lift">
                        <div className="clip rounded-[1.55rem] bg-panel md:grid md:grid-cols-2 lg:block">
                            <div className="relative">
                                <picture>
                                    <source srcSet="/profile-720.webp" type="image/webp" />
                                    <img
                                        src="/profile-720.jpg"
                                        alt="Portrait of Dawit Bayou Kassie"
                                        width="720"
                                        height="732"
                                        className="aspect-square w-full bg-sunken object-cover object-[48%_0%]"
                                        fetchPriority="high"
                                        decoding="async"
                                    />
                                </picture>
                                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
                                <p className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
                                    Open to senior roles
                                </p>
                                <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md">
                                    <Icon name="pin" size={13} />
                                    {person.location.split(',')[0]}
                                    {time && (
                                        <>
                                            <span aria-hidden="true" className="text-white/50">/</span>
                                            <Icon name="clock" size={13} />
                                            <span>
                                                {time}
                                                <span className="sr-only"> local time</span>
                                            </span>
                                        </>
                                    )}
                                </p>
                            </div>
                            <dl className="divide-y divide-line text-sm md:self-center lg:self-auto">
                                {atAGlance.map(([label, value]) => (
                                    <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-4 px-5 py-3.5">
                                        <dt className="pt-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted">{label}</dt>
                                        <dd>{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="container-page relative mt-14 md:mt-20">
                <Reveal>
                    <SystemMap />
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
