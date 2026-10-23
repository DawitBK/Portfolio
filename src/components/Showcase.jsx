import Icon from './Icon';
import Reveal from './Reveal';
import { showcase } from '../data/content';
import { gateClick } from '../lib/demoGate';

const repoPath = (url) => url.replace(/^https?:\/\//, '');

// Public showcase repositories for the three private platforms: each card carries the repository and the live demo.
const Showcase = () => (
    <Reveal id="showcases" className="mt-16 md:mt-20">
        <div className="scope-dark relative clip rounded-3xl border border-line bg-paper p-6 text-ink shadow-lift md:p-10 xl:p-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="bg-dots absolute inset-0 opacity-40 fade-mask" />
                <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.2),transparent)]" />
                <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent-2)/0.18),transparent)]" />
            </div>

            <div className="relative lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
                <div>
                    <p className="kicker mb-4">Private code, public proof</p>
                    <h3 className="font-serif text-4xl leading-[1.06] md:text-5xl">{showcase.title}</h3>
                </div>
                <p className="lede mt-4 max-w-xl lg:mt-0">{showcase.summary}</p>
            </div>

            <ul className="relative mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
                {showcase.links.map(({ name, kind, url, demo, note }) => (
                    <li key={name}>
                        <article className="spot group flex h-full flex-col rounded-2xl border border-line bg-panel/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                            <div className="flex items-center justify-between">
                                <span className="rounded-md border border-accent/40 bg-accent-soft px-2.5 py-1 font-mono text-xs font-medium tracking-wider text-accent">{kind}</span>
                                <Icon name="github" size={20} className="text-muted transition-colors group-hover:text-ink" />
                            </div>
                            <h4 className="mt-6 font-serif text-3xl leading-[1.1]">{name}</h4>
                            <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{note}</p>
                            <p className="mt-5 truncate font-mono text-[0.7rem] text-muted">{repoPath(url)}</p>
                            <div className="mt-4 flex flex-wrap gap-2.5">
                                <a href={url} target="_blank" rel="noreferrer" className="btn btn-ghost !px-4 !py-2.5">
                                    <Icon name="github" size={15} />
                                    Showcase repo
                                    <span className="sr-only"> for the {name.toLowerCase()} (opens in a new tab)</span>
                                </a>
                                <a href={demo} target="_blank" rel="noreferrer" onClick={gateClick(demo)} className="btn btn-primary !px-4 !py-2.5">
                                    Live demo
                                    <Icon name="arrowUpRight" size={15} />
                                    <span className="sr-only"> of the {name.toLowerCase()} (opens in a new tab)</span>
                                </a>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    </Reveal>
);

export default Showcase;
