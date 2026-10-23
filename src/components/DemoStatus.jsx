import Icon from './Icon';
import CopyButton from './CopyButton';
import { person } from '../data/content';
import { composeLinks } from '../lib/mail';
import { useDemoStore } from '../store/demoStore';

const clock = (ms) => new Date(ms).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// Two ways to reach me, shared by the notice and the dialog: email (Gmail compose, filled in) and phone (tap to call on a
// phone, copy on a computer).
export const ReachMe = () => (
    <div className="flex flex-wrap items-center gap-3">
        <a href={composeLinks(person.email).gmail} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2.5">
            <Icon name="mail" size={15} />
            Email me
        </a>
        <span className="inline-flex items-center overflow-hidden rounded-lg border border-line bg-panel/70">
            <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors hover:text-accent">
                <Icon name="phone" size={15} />
                {person.phone}
            </a>
            <CopyButton value={person.phone} label="Phone number" compact className="h-10 w-10 border-l border-line" />
        </span>
    </div>
);

export const TryAgain = ({ className = 'btn btn-primary !px-5 !py-2.5' }) => {
    const check = useDemoStore((s) => s.check);
    const checking = useDemoStore((s) => s.checking);
    return (
        <button type="button" onClick={() => check({ fresh: true })} disabled={checking} className={`${className} disabled:opacity-70`}>
            <Icon name="refresh" size={15} className={checking ? 'animate-spin motion-reduce:animate-none' : ''} />
            {checking ? 'Checking...' : 'Try again'}
        </button>
    );
};

// A small live indicator: green when the demo server answers, amber when it does not. Nothing is shown when the answer
// could not be read, because a guess would only worry visitors for no reason.
export const DemoStatusPill = () => {
    const status = useDemoStore((s) => s.status);
    const checking = useDemoStore((s) => s.checking);
    const checkedAt = useDemoStore((s) => s.checkedAt);
    if (!checkedAt && !checking) return null;
    if (checkedAt && status === 'unknown') return null;

    const first = !checkedAt;
    const tone = first ? 'bg-muted' : status === 'online' ? 'bg-ok' : 'bg-warn';
    const label = first ? 'Checking the demo server' : status === 'online' ? 'Demo server online' : 'Demo server offline';
    return (
        <p role="status" className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/80 px-3.5 py-1.5 text-sm text-ink backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
                {status === 'online' && !first && <span aria-hidden="true" className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:animate-none" />}
                <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${tone}`} />
            </span>
            {label}
            {checkedAt && <span className="font-mono text-[0.7rem] text-muted">checked {clock(checkedAt)}</span>}
        </p>
    );
};

const OfflineNotice = () => {
    const checkedAt = useDemoStore((s) => s.checkedAt);
    return (
        <div className="mt-5 flex flex-col gap-6 rounded-2xl border border-warn/40 bg-warn/10 p-6 md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
            <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-warn/40 bg-panel text-warn">
                    <Icon name="server" size={20} />
                </span>
                <div>
                    <h3 className="font-serif text-3xl leading-[1.1]">The demo server is resting</h3>
                    <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
                        The demos run on a server of my own, and it is offline at the moment. That usually means a restart, a power cut or maintenance. Please try again in a few minutes.
                        If you would like to see the systems sooner, write or call and I will bring them back up or walk you through them live.
                    </p>
                    {checkedAt && <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-wider text-muted">Last checked {clock(checkedAt)}</p>}
                </div>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-3">
                <TryAgain />
                <ReachMe />
            </div>
        </div>
    );
};

const DemoStatus = () => {
    const status = useDemoStore((s) => s.status);
    return (
        <div className="mt-8 md:mt-10">
            <DemoStatusPill />
            {status === 'offline' && <OfflineNotice />}
        </div>
    );
};

export default DemoStatus;
