import Icon from './Icon';
import Reveal from './Reveal';
import CopyButton from './CopyButton';
import { person } from '../data/content';

const rows = [
    { label: 'Email', text: person.email, href: `mailto:${person.email}`, icon: 'mail', copy: true },
    { label: 'Phone', text: person.phone, href: `tel:${person.phone.replace(/\s/g, '')}`, icon: 'phone', copy: true },
    { label: 'GitHub', text: 'github.com/DawitBK', href: person.github, icon: 'github' },
    { label: 'LinkedIn', text: 'linkedin.com/in/dawit-b-kassie', href: person.linkedin, icon: 'linkedin' },
];

const Contact = () => (
    <section id="contact" className="section !pt-6 md:!pt-10">
        <div className="container-page">
            <Reveal>
                <div className="scope-dark relative clip rounded-3xl border border-line bg-paper p-6 text-ink shadow-lift sm:p-10 xl:p-16">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                        <div className="bg-grid fade-mask absolute inset-0 opacity-40" />
                        <div className="absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.22),transparent)]" />
                        <div className="absolute -bottom-48 -right-32 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent-2)/0.22),transparent)]" />
                    </div>

                    <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:items-center">
                        <div>
                            <p className="kicker mb-5">Contact</p>
                            <h2 className="font-serif text-[2.75rem] leading-[1.04] tracking-[-0.012em] sm:text-6xl">
                                Have a system that has to be right?
                                <span className="text-gradient block pr-2 italic">Let&apos;s talk.</span>
                            </h2>
                            <p className="lede mt-7 max-w-lg">I am open to senior engineering, architecture and technical lead roles, in Addis Ababa or remote. Email gets the fastest reply.</p>
                            <div className="mt-9 flex flex-wrap gap-3">
                                <a href={`mailto:${person.email}`} className="btn btn-primary">
                                    <Icon name="mail" size={16} />
                                    Email me
                                </a>
                                <a href={person.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
                                    <Icon name="download" size={16} />
                                    Download resume
                                </a>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {rows.map(({ label, text, href, icon, copy }) => (
                                <li key={label} className="spot flex items-center gap-2 rounded-xl border border-line bg-panel/70 pr-2 backdrop-blur transition duration-300 hover:border-accent/50">
                                    <a href={href} className="group flex min-w-0 flex-1 items-center gap-3 p-3 sm:gap-4 sm:p-4" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sunken text-accent">
                                            <Icon name={icon} size={19} />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block font-mono text-[0.68rem] uppercase tracking-wider text-muted">{label}</span>
                                            <span className="block break-all text-[0.95rem] leading-snug group-hover:text-accent">{text}</span>
                                        </span>
                                    </a>
                                    {copy && <CopyButton value={text} label={label} compact className="h-10 w-10 shrink-0 rounded-lg" />}
                                </li>
                            ))}
                            <li className="flex items-center gap-4 rounded-xl border border-dashed border-line p-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sunken text-accent">
                                    <Icon name="pin" size={19} />
                                </span>
                                <div>
                                    <span className="block font-mono text-[0.68rem] uppercase tracking-wider text-muted">Location</span>
                                    <span className="block text-[0.98rem]">{person.location}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

export default Contact;
