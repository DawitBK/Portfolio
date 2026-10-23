import Icon from './Icon';
import Reveal from './Reveal';
import CopyButton from './CopyButton';
import { demoAccess } from '../data/demoAccess';
import { gateClick } from '../lib/demoGate';

const Field = ({ label, value }) => (
    <div>
        <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">{label}</p>
        <div className="mt-2 flex flex-col items-stretch clip rounded-lg sm:flex-row border border-line bg-sunken/70 transition-colors focus-within:border-accent/60">
            <code className="min-w-0 flex-1 select-all break-all px-4 py-3 font-mono text-[0.95rem]">{value}</code>
            <CopyButton value={value} label={label} className="border-t border-line px-4 py-2.5 sm:border-l sm:border-t-0 sm:py-0" />
        </div>
    </div>
);

const DemoAccess = () => (
    <Reveal id="access" className="mt-12 md:mt-14">
        <div className="spot card grid grid-cols-1 gap-10 p-6 md:p-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
            <div>
                <p className="kicker mb-4">Demo access</p>
                <h3 className="font-serif text-4xl leading-[1.08] md:text-[2.75rem]">{demoAccess.title}</h3>
                <p className="lede mt-4 max-w-xl">{demoAccess.lede}</p>
                <ol className="mt-8 space-y-0">
                    {demoAccess.steps.map((s, i) => (
                        <li key={s} className="relative flex gap-4 pb-6 last:pb-0">
                            {i < demoAccess.steps.length - 1 && <span aria-hidden="true" className="absolute left-[0.95rem] top-9 h-[calc(100%-2.25rem)] w-px bg-line" />}
                            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-soft font-mono text-xs text-accent">{i + 1}</span>
                            <span className="pt-1 text-[0.98rem] leading-relaxed">{s}</span>
                        </li>
                    ))}
                </ol>
                <ul className="mt-8 flex flex-wrap gap-2">
                    {demoAccess.roles.map((r) => (
                        <li key={r} className="chip">
                            {r}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="scope-dark relative flex flex-col gap-5 self-center clip rounded-2xl border border-line bg-paper p-6 text-ink shadow-lift md:p-7">
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.2),transparent)]" />
                <p className="relative inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                    <Icon name="key" size={14} className="text-accent" />
                    Sandbox sign-in
                </p>
                <div className="relative flex flex-col gap-5">
                    <Field label="Email" value={demoAccess.email} />
                    <Field label="Password" value={demoAccess.password} />
                    <a href={demoAccess.portal} target="_blank" rel="noreferrer" onClick={gateClick(demoAccess.portal)} className="btn btn-primary mt-1">
                        Open the identity portal
                        <Icon name="arrowUpRight" size={16} />
                    </a>
                    <p className="text-sm leading-relaxed text-muted">{demoAccess.note}</p>
                </div>
            </div>
        </div>
    </Reveal>
);

export default DemoAccess;
