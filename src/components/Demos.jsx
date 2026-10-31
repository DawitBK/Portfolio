import Icon from './Icon';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import DemoAccess from './DemoAccess';
import Showcase from './Showcase';
import DemoStatus from './DemoStatus';
import { demos, sections } from '../data/content';
import { demoAccess } from '../data/demoAccess';
import { gateClick } from '../lib/demoGate';
import { hostOf } from '../lib/text';

const isOriginal = (d) => /first version/i.test(d.kind);

const DemoCard = ({ demo, index }) => {
    const original = isOriginal(demo);
    return (
        <Reveal as="li" delay={(index % 3) * 70} className="sm:max-lg:last:col-span-2">
            <a
                href={demo.url}
                target="_blank"
                rel="noreferrer"
                onClick={gateClick(demo.url)}
                className={`spot card group flex h-full flex-col clip transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:-translate-y-1 focus-visible:shadow-lift ${original ? 'border-dashed' : ''}`}
            >
                <div className="flex items-center gap-3 border-b border-line bg-sunken/70 px-4 py-2.5">
                    <span aria-hidden="true" className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-line" />
                        <span className="h-2 w-2 rounded-full bg-line" />
                        <span className="h-2 w-2 rounded-full bg-line" />
                    </span>
                    <span className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-panel px-2.5 py-1 font-mono text-[0.68rem] text-muted">
                        <Icon name="lock" size={10} className="shrink-0" />
                        <span className="truncate">{hostOf(demo.url)}</span>
                    </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                        <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">{demo.kind}</p>
                        {demo.url === demoAccess.portal && <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-2.5 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-wider text-on-accent">Start here</span>}
                        {original && <span className="rounded-full border border-dashed border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-muted">Original</span>}
                    </div>
                    <h4 className="mt-4 font-serif text-[1.9rem] leading-[1.1]">{demo.name}</h4>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{demo.note}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-accent">
                        Open demo
                        <Icon name="arrowUpRight" size={15} className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <span className="sr-only">: {demo.name} (opens in a new tab)</span>
                    </span>
                </div>
            </a>
        </Reveal>
    );
};

const Demos = () => (
    <section id="demos" className="section border-y border-line bg-sunken/50">
        <div className="container-page">
            <SectionHead {...sections.demos} />
            <DemoStatus />
            <DemoAccess />
            <Showcase />

            <Reveal className="mt-16 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end sm:gap-4 md:mt-20">
                <h3 className="font-serif text-4xl leading-[1.08] md:text-5xl">All demos</h3>
                <p className="font-mono text-xs text-muted">{demos.length} live editions on demo data</p>
            </Reveal>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
                {demos.map((d, i) => (
                    <DemoCard key={d.name} demo={d} index={i} />
                ))}
            </ul>
        </div>
    </section>
);

export default Demos;
