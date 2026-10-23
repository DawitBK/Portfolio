import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';
import { ReachMe } from './DemoStatus';
import { openExternal } from '../lib/nav';
import { useDemoStore } from '../store/demoStore';

// Shown when someone opens a demo while the demo server is known to be offline. It says so plainly, offers a retry (and
// opens the demo for them if it is back), lets them go ahead anyway in case the check was wrong, and gives two ways to reach me.
const Panel = ({ url }) => {
    const closeDialog = useDemoStore((s) => s.closeDialog);
    const check = useDemoStore((s) => s.check);
    const checking = useDemoStore((s) => s.checking);
    const [back, setBack] = useState(false);
    const [stillOffline, setStillOffline] = useState(false);
    const panel = useRef(null);
    const primary = useRef(null);

    useEffect(() => {
        const previous = document.activeElement;
        const overflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const focus = setTimeout(() => primary.current?.focus(), 60);
        const onKey = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeDialog();
                return;
            }
            if (event.key !== 'Tab' || !panel.current) return;
            const items = [...panel.current.querySelectorAll('a[href], button:not([disabled])')];
            if (!items.length) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        return () => {
            clearTimeout(focus);
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = overflow;
            previous?.focus?.();
        };
    }, [closeDialog]);

    const retry = async () => {
        setStillOffline(false);
        const status = await check({ fresh: true });
        if (status === 'offline') setStillOffline(true);
        else setBack(true);
    };

    return (
        <div
            className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) closeDialog();
            }}
        >
            <div ref={panel} role="dialog" aria-modal="true" aria-labelledby="offline-title" aria-describedby="offline-text" className="relative w-full max-w-lg animate-pop rounded-2xl border border-line bg-paper p-6 text-ink shadow-pop sm:p-8">
                <button type="button" onClick={closeDialog} aria-label="Close" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-sunken hover:text-ink">
                    <Icon name="close" size={18} />
                </button>
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl border bg-panel ${back ? 'border-ok/40 text-ok' : 'border-warn/40 text-warn'}`}>
                    <Icon name={back ? 'check' : 'server'} size={22} />
                </span>
                <h2 id="offline-title" className="mt-5 font-serif text-3xl leading-[1.1]">
                    {back ? 'The demo server is back' : 'The demo server is resting'}
                </h2>
                <p id="offline-text" className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                    {back
                        ? 'It is answering again. You can open the demo now.'
                        : 'The demos run on a server of my own, and it is offline at the moment, for example during a restart, a power cut or maintenance. Please try again in a few minutes. If you would like to see the systems sooner, write or call and I will bring them back up or walk you through them live.'}
                </p>
                <p role="status" aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm text-warn">
                    {stillOffline ? 'Still offline. Please try again in a few minutes.' : ''}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                    {back ? (
                        <a ref={primary} href={url} target="_blank" rel="noopener noreferrer" onClick={closeDialog} className="btn btn-primary !px-5 !py-2.5">
                            Open the demo
                            <Icon name="arrowUpRight" size={15} />
                        </a>
                    ) : (
                        <button ref={primary} type="button" onClick={retry} disabled={checking} className="btn btn-primary !px-5 !py-2.5 disabled:opacity-70">
                            <Icon name="refresh" size={15} className={checking ? 'animate-spin motion-reduce:animate-none' : ''} />
                            {checking ? 'Checking...' : 'Try again'}
                        </button>
                    )}
                    {!back && (
                        <button
                            type="button"
                            onClick={() => {
                                openExternal(url);
                                closeDialog();
                            }}
                            className="btn btn-ghost !px-5 !py-2.5"
                        >
                            Open anyway
                        </button>
                    )}
                </div>

                <div className="mt-6 border-t border-line pt-5">
                    <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-wider text-muted">Or reach me directly</p>
                    <ReachMe />
                </div>
            </div>
        </div>
    );
};

const DemoOfflineDialog = () => {
    const url = useDemoStore((s) => s.dialogUrl);
    if (!url) return null;
    return createPortal(<Panel url={url} />, document.body);
};

export default DemoOfflineDialog;
