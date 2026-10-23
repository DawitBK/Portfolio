import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { copyText } from '../lib/clipboard';
import { composeLinks } from '../lib/mail';
import { useUiStore } from '../store/uiStore';

// A split button. The main part opens Gmail's compose window with the recipient filled in. The arrow opens a short
// menu for visitors who use something else: Outlook, Yahoo Mail, their default mail app, or just copying the address.
const EmailMe = ({ address }) => {
    const links = composeLinks(address);
    const [open, setOpen] = useState(false);
    const root = useRef(null);
    const toggle = useRef(null);
    const showToast = useUiStore((s) => s.showToast);

    useEffect(() => {
        if (!open) return undefined;
        const away = (e) => {
            if (root.current && !root.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('pointerdown', away);
        return () => document.removeEventListener('pointerdown', away);
    }, [open]);

    useEffect(() => {
        if (open) root.current?.querySelector('[role="menuitem"]')?.focus();
    }, [open]);

    const close = (refocus) => {
        setOpen(false);
        if (refocus) toggle.current?.focus();
    };

    const onMenuKey = (e) => {
        const items = [...root.current.querySelectorAll('[role="menuitem"]')];
        const i = items.indexOf(document.activeElement);
        if (e.key === 'Escape') {
            e.preventDefault();
            close(true);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            items[(i + 1) % items.length].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            items[(i - 1 + items.length) % items.length].focus();
        } else if (e.key === 'Home') {
            e.preventDefault();
            items[0].focus();
        } else if (e.key === 'End') {
            e.preventDefault();
            items[items.length - 1].focus();
        } else if (e.key === 'Tab') {
            setOpen(false);
        }
    };

    const copy = async () => {
        const ok = await copyText(address);
        showToast(ok ? 'Email address copied' : 'Copy blocked. Select the address by hand.');
        close(true);
    };

    const item =
        'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-ink transition-colors hover:bg-accent-soft focus-visible:bg-accent-soft';

    return (
        <div ref={root} className="relative inline-flex">
            <a href={links.gmail} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-r-none">
                <Icon name="mail" size={16} />
                Email me
            </a>
            <button
                ref={toggle}
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label="Email with another mail service"
                onClick={() => setOpen((v) => !v)}
                className="btn btn-primary rounded-l-none border-l border-black/15 px-3"
            >
                <Icon name="chevronDown" size={16} />
            </button>
            {open && (
                <div
                    role="menu"
                    aria-label="Email options"
                    onKeyDown={onMenuKey}
                    className="absolute bottom-full left-0 z-30 mb-2 w-72 max-w-[calc(100vw-3rem)] rounded-xl border border-line bg-panel p-1.5 shadow-lift"
                >
                    <p className="px-3 pb-1 pt-2 font-mono text-[0.68rem] uppercase tracking-wider text-muted">Opens with {address}</p>
                    <a role="menuitem" href={links.gmail} target="_blank" rel="noopener noreferrer" onClick={() => close(false)} className={item}>
                        <Icon name="mail" size={16} />
                        Gmail
                    </a>
                    <a role="menuitem" href={links.outlook} target="_blank" rel="noopener noreferrer" onClick={() => close(false)} className={item}>
                        <Icon name="mail" size={16} />
                        Outlook
                    </a>
                    <a role="menuitem" href={links.yahoo} target="_blank" rel="noopener noreferrer" onClick={() => close(false)} className={item}>
                        <Icon name="mail" size={16} />
                        Yahoo Mail
                    </a>
                    <a role="menuitem" href={links.app} onClick={() => close(false)} className={item}>
                        <Icon name="mail" size={16} />
                        Default mail app
                    </a>
                    <button type="button" role="menuitem" onClick={copy} className={item}>
                        <Icon name="copy" size={16} />
                        Copy the address
                    </button>
                </div>
            )}
        </div>
    );
};

export default EmailMe;
