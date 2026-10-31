import Icon from './Icon';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { production, openSource, sections } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { formatNumber, leadingNumber } from '../lib/text';

const Facts = ({ items, className = '' }) => (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
        {items.map((f) => (
            <li key={f} className="chip">
                {f}
            </li>
        ))}
    </ul>
);

// The lead fact of each employer system ("831 automated tests") becomes a headline figure; the rest stay as chips.
const Lead = ({ fact }) => {
    const [ref, seen] = useInView({ threshold: 0.6 });
    const { n, rest } = leadingNumber(fact);
    const shown = useCountUp(n ?? 0, seen, 1300);
    if (n === null) return <p className="font-mono text-sm text-accent">{fact}</p>;
    return (
        <p ref={ref} className="flex items-baseline gap-3">
            <span className="sr-only">{fact}</span>
            <span aria-hidden="true" className="font-serif text-5xl leading-none tracking-[-0.02em] tabular-nums text-gradient">
                {formatNumber(shown)}
            </span>
            <span aria-hidden="true" className="font-mono text-xs leading-tight text-muted">
                {rest}
            </span>
        </p>
    );
};

const Points = ({ items, className = '' }) => (
    <ul className={`space-y-3 ${className}`}>
        {items.map((p) => (
            <li key={p} className="flex gap-3 text-[0.95rem] leading-[1.7]">
                <span aria-hidden="true" className="mt-[0.8rem] h-px w-4 shrink-0 bg-accent" />
                <span>{p}</span>
            </li>
        ))}
    </ul>
);

const Stack = ({ items }) => (
    <p className="font-mono text-[0.72rem] leading-relaxed text-muted">
        <span className="sr-only">Built with: </span>
        {items.join(' · ')}
    </p>
);

const Work = () => (
    <section id="work" className="section">
        <div className="container-page">
            <SectionHead {...sections.work} />

            <ul className="mt-14 grid grid-cols-1 gap-4 md:mt-16 md:gap-5 lg:grid-cols-2">
                {production.map((item, i) => (
                    <Reveal as="li" key={item.title} delay={(i % 2) * 80}>
                        <article className="spot card group relative flex h-full flex-col clip p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8">
                            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-sunken/70 px-3 py-1 font-mono text-[0.68rem] uppercase leading-snug tracking-wider text-muted">
                                <Icon name="lock" size={12} />
                                {item.tag}
                            </p>
                            <h3 className="mt-6 font-serif text-[2rem] leading-[1.1]">{item.title}</h3>
                            <div className="mt-5">
                                <Lead fact={item.facts[0]} />
                            </div>
                            <p className="mt-5 text-[0.95rem] leading-[1.7] text-muted">{item.summary}</p>
                            <Points items={item.points} className="mt-6 flex-1 border-t border-line pt-6" />
                            <Facts items={item.facts.slice(1)} className="mt-6" />
                            <div className="mt-5">
                                <Stack items={item.stack} />
                            </div>
                        </article>
                    </Reveal>
                ))}
            </ul>

            <Reveal className="mt-4 md:mt-5">
                <div className="scope-dark relative clip rounded-2xl border border-line bg-paper p-6 text-ink shadow-lift md:p-10">
                    <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.2),transparent)]" />
                    <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
                        <div>
                            <p className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-accent">
                                <Icon name="github" size={14} />
                                Open source
                            </p>
                            <h3 className="mt-4 font-serif text-[2rem] leading-[1.1] md:text-4xl">{openSource.title}</h3>
                        </div>
                        <div className="self-end">
                            <p className="text-[0.97rem] leading-[1.7] text-muted">{openSource.summary}</p>
                            <Facts items={openSource.facts} className="mt-6" />
                        </div>
                    </div>
                    <ul className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {openSource.links.map(({ label, url, summary, points, stack }) => (
                            <li key={label}>
                                <article className="flex h-full flex-col rounded-xl border border-line bg-panel/70 p-6 md:p-7">
                                    <div className="flex items-start justify-between gap-3">
                                        <h4 className="font-serif text-[1.65rem] leading-[1.15]">{label}</h4>
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sunken text-ink">
                                            <Icon name="github" size={18} />
                                        </span>
                                    </div>
                                    <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{summary}</p>
                                    <Points items={points} className="mt-5 flex-1" />
                                    <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-5">
                                        <Stack items={stack} />
                                        <a href={url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-accent">
                                            View on GitHub
                                            <Icon name="arrowUpRight" size={15} className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            <span className="sr-only">: {label} (opens in a new tab)</span>
                                        </a>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
        </div>
    </section>
);

export default Work;
