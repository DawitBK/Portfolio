import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';
import { demos, openSource, person, showcase } from '../data/content';
import { demoAccess } from '../data/demoAccess';
import { navLinks, subTargets } from '../data/ui';
import { copyText } from '../lib/clipboard';
import { composeLinks } from '../lib/mail';
import { downloadFile, goTo, openExternal } from '../lib/nav';
import { useThemeStore } from '../store/themeStore';
import { useUiStore } from '../store/uiStore';

const GROUPS = ['Go to', 'Actions', 'Live demos', 'Code'];

function buildCommands({ theme, toggleTheme, showToast }) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const copy = async (value, what) => {
        const ok = await copyText(value);
        showToast(ok ? `${what} copied` : `Copy blocked. Select the ${what.toLowerCase()} by hand.`);
    };

    const goto = [{ id: 'top', label: 'Top of the page' }, ...navLinks, ...subTargets].map(({ id, label }) => ({
        id: `go-${id}`,
        group: 'Go to',
        label,
        hint: id === 'top' ? 'Home' : `#${id}`,
        keywords: 'section jump scroll navigate',
        icon: 'arrowRight',
        run: () => goTo(id),
    }));

    const actions = [
        { id: 'copy-email', label: 'Copy demo login email', hint: 'Sandbox account', keywords: 'demo sign in username copy clipboard', icon: 'copy', run: () => copy(demoAccess.email, 'Demo email') },
        { id: 'copy-password', label: 'Copy demo login password', hint: 'Sandbox account', keywords: 'demo sign in secret copy clipboard', icon: 'copy', run: () => copy(demoAccess.password, 'Demo password') },
        { id: 'open-portal', label: 'Open the identity portal', hint: 'Start the demos here', keywords: 'sso sign in login portal demo', icon: 'arrowUpRight', run: () => openExternal(demoAccess.portal) },
        { id: 'theme', label: `Switch to ${nextTheme} theme`, hint: 'Appearance', keywords: 'dark light mode colour color appearance toggle', icon: theme === 'dark' ? 'sun' : 'moon', run: toggleTheme },
        { id: 'resume', label: 'Download resume', hint: 'PDF', keywords: 'cv pdf download', icon: 'download', run: () => downloadFile(person.resume, person.resume.split('/').pop()) },
        { id: 'email', label: 'Email Dawit', hint: person.email, keywords: 'contact mail write hire', icon: 'mail', run: () => openExternal(composeLinks(person.email).gmail) },
        { id: 'github', label: 'GitHub profile', hint: 'github.com/DawitBK', keywords: 'code repositories', icon: 'github', run: () => openExternal(person.github) },
        { id: 'linkedin', label: 'LinkedIn profile', hint: 'linkedin.com/in/dawit-b-kassie', keywords: 'social network', icon: 'linkedin', run: () => openExternal(person.linkedin) },
    ].map((c) => ({ ...c, group: 'Actions' }));

    const live = demos.map((d) => ({
        id: `demo-${d.name}`,
        group: 'Live demos',
        label: `Open ${d.name}`,
        hint: d.kind,
        keywords: `demo live ${d.note}`,
        icon: 'globe',
        run: () => openExternal(d.url),
    }));

    const code = [
        ...showcase.links.map((l) => ({ id: `showcase-${l.kind}`, label: `Showcase repo: ${l.name}`, hint: l.kind, keywords: 'github repository private platform', url: l.url })),
        ...openSource.links.map((l) => ({ id: `repo-${l.label}`, label: `Source: ${l.label}`, hint: l.note, keywords: 'github repository open source code', url: l.url })),
    ].map(({ url, ...c }) => ({ ...c, group: 'Code', icon: 'github', run: () => openExternal(url) }));

    return [...goto, ...actions, ...live, ...code];
}

const isSubsequence = (needle, haystack) => {
    let i = 0;
    for (const ch of haystack) if (ch === needle[i]) i += 1;
    return i === needle.length;
};

function scoreOf(cmd, terms) {
    const label = cmd.label.toLowerCase();
    const haystack = `${label} ${cmd.keywords ?? ''} ${cmd.hint ?? ''}`.toLowerCase();
    let total = 0;
    for (const t of terms) {
        if (label.startsWith(t)) total += 100;
        else if (label.split(/[\s/:-]+/).some((w) => w.startsWith(t))) total += 80;
        else if (label.includes(t)) total += 60;
        else if (haystack.includes(t)) total += 40;
        else if (t.length > 2 && isSubsequence(t, label)) total += 15;
        else return 0;
    }
    return total;
}

// Empty query: grouped in a fixed order. With a query: one flat list, best match first.
function arrange(commands, query) {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) {
        const rows = [];
        for (const group of GROUPS) {
            const items = commands.filter((c) => c.group === group);
            if (!items.length) continue;
            rows.push({ type: 'header', label: group });
            items.forEach((item) => rows.push({ type: 'item', item }));
        }
        return numbered(rows);
    }
    return numbered(
        commands
            .map((item, order) => ({ item, order, score: scoreOf(item, terms) }))
            .filter((r) => r.score > 0)
            .sort((a, b) => b.score - a.score || a.order - b.order)
            .map(({ item }) => ({ type: 'item', item }))
    );
}

// Gives each selectable row its position among the selectable rows (headers do not count).
function numbered(rows) {
    let n = 0;
    return rows.map((row) => (row.type === 'item' ? { ...row, index: n++ } : row));
}

const optionId = (item) => `palette-opt-${item.id.replace(/[^a-z0-9-]/gi, '_')}`;

const Palette = () => {
    const close = useUiStore((s) => s.closePalette);
    const showToast = useUiStore((s) => s.showToast);
    const theme = useThemeStore((s) => s.theme);
    const toggleTheme = useThemeStore((s) => s.toggleTheme);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const input = useRef(null);
    const closeButton = useRef(null);
    const list = useRef(null);

    const commands = useMemo(() => buildCommands({ theme, toggleTheme, showToast }), [theme, toggleTheme, showToast]);
    const rows = useMemo(() => arrange(commands, query), [commands, query]);
    const items = useMemo(() => rows.filter((r) => r.type === 'item').map((r) => r.item), [rows]);
    const current = items.length ? Math.min(active, items.length - 1) : -1;

    // Modal behaviour: remember the opener, lock page scroll, make the page behind inert, restore everything on close.
    useEffect(() => {
        const opener = document.activeElement;
        const root = document.getElementById('root');
        const html = document.documentElement;
        root.inert = true;
        html.style.overflow = 'hidden';
        input.current?.focus();
        return () => {
            root.inert = false;
            html.style.overflow = '';
            if (opener && document.contains(opener)) opener.focus({ preventScroll: true });
        };
    }, []);

    useEffect(() => {
        if (current < 0) return;
        document.getElementById(optionId(items[current]))?.scrollIntoView({ block: 'nearest' });
    }, [current, items]);

    const run = (cmd) => {
        close();
        // Wait a beat so the dialog is gone and focus is back on the page before the action runs.
        setTimeout(cmd.run, 80);
    };

    const onKeyDown = (event) => {
        const last = items.length - 1;
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                if (items.length) setActive(current >= last ? 0 : current + 1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (items.length) setActive(current <= 0 ? last : current - 1);
                break;
            case 'PageDown':
                event.preventDefault();
                if (items.length) setActive(Math.min(last, current + 5));
                break;
            case 'PageUp':
                event.preventDefault();
                if (items.length) setActive(Math.max(0, current - 5));
                break;
            case 'Enter':
                if (current >= 0) {
                    event.preventDefault();
                    run(items[current]);
                }
                break;
            case 'Escape':
                event.preventDefault();
                close();
                break;
            case 'Tab': {
                // Keep focus inside the dialog: it holds two controls, the field and the close button.
                const stops = [input.current, closeButton.current].filter(Boolean);
                const at = stops.indexOf(document.activeElement);
                const next = event.shiftKey ? (at <= 0 ? stops.length - 1 : at - 1) : at === stops.length - 1 ? 0 : at + 1;
                event.preventDefault();
                stops[next]?.focus();
                break;
            }
            default:
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex animate-fade items-start justify-center bg-black/55 px-4 pt-[10vh] backdrop-blur-sm sm:pt-[14vh]"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) close();
            }}
        >
            <div role="dialog" aria-modal="true" aria-label="Command palette" onKeyDown={onKeyDown} className="w-full max-w-xl animate-pop clip rounded-2xl border border-line bg-panel text-ink shadow-pop">
                <div className="flex items-center gap-3 border-b border-line px-4 focus-within:shadow-[inset_0_-2px_0_rgb(var(--accent))]">
                    <Icon name="search" size={18} className="shrink-0 text-muted" />
                    <input
                        ref={input}
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value);
                            setActive(0);
                        }}
                        role="combobox"
                        aria-expanded="true"
                        aria-controls="palette-list"
                        aria-autocomplete="list"
                        aria-activedescendant={current >= 0 ? optionId(items[current]) : undefined}
                        aria-label="Search sections, demos and actions"
                        placeholder="Search sections, demos and actions"
                        autoComplete="off"
                        spellCheck="false"
                        className="h-14 min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-muted"
                    />
                    <button ref={closeButton} type="button" onClick={close} aria-label="Close the command palette" className="kbd !h-6 !px-2 transition-colors hover:border-accent/60 hover:text-ink">
                        Esc
                    </button>
                </div>

                <ul id="palette-list" ref={list} role="listbox" aria-label="Results" className="max-h-[min(24rem,52vh)] overflow-y-auto overscroll-contain p-2">
                    {rows.map((row) => {
                        if (row.type === 'header') {
                            return (
                                <li key={`h-${row.label}`} role="presentation" className="px-3 pb-1 pt-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted first:pt-1">
                                    {row.label}
                                </li>
                            );
                        }
                        const { item, index } = row;
                        const on = index === current;
                        return (
                            <li
                                key={item.id}
                                id={optionId(item)}
                                role="option"
                                aria-selected={on}
                                onMouseMove={() => on || setActive(index)}
                                onClick={() => run(item)}
                                className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 ${on ? 'bg-accent-soft text-ink' : 'text-ink'}`}
                            >
                                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${on ? 'bg-panel text-accent' : 'bg-sunken text-muted'}`}>
                                    <Icon name={item.icon} size={16} />
                                </span>
                                <span className="min-w-0 flex-1 truncate text-[0.95rem]">{item.label}</span>
                                <span className="hidden shrink-0 truncate font-mono text-[0.68rem] text-muted sm:block sm:max-w-[10rem]">{query ? `${item.group}` : item.hint}</span>
                            </li>
                        );
                    })}
                    {!items.length && (
                        <li role="presentation" className="px-3 py-8 text-center text-sm text-muted">
                            Nothing matches &ldquo;{query}&rdquo;. Try a section, a demo name or &ldquo;resume&rdquo;.
                        </li>
                    )}
                </ul>
                <p className="sr-only" role="status">
                    {items.length ? `${items.length} results` : 'No results'}
                </p>

                <div className="flex items-center justify-between gap-4 border-t border-line px-4 py-2.5 font-mono text-[0.68rem] text-muted" aria-hidden="true">
                    <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <kbd className="kbd">&uarr;</kbd>
                            <kbd className="kbd">&darr;</kbd>
                            move
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="kbd">&crarr;</kbd>
                            select
                        </span>
                    </span>
                    <span className="flex items-center gap-1">
                        <kbd className="kbd">esc</kbd>
                        close
                    </span>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Palette;
