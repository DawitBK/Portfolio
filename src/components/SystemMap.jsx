import { useState } from 'react';
import Icon from './Icon';
import { heroGuarantees } from '../data/content';
import { guaranteeRules, mapApps } from '../data/ui';
import { useReducedMotion } from '../hooks/useMediaQuery';

const CYCLE_MS = 5200;
const ALL_IDS = mapApps.map((a) => a.id);
const NO_RULE = { identity: false, apps: [], db: false, via: [''] };

// How many earlier guarantees share this one's `where`, so two guarantees on the same project can name different mechanisms.
const occurrence = (i) => heroGuarantees.slice(0, i).filter((g) => g.where === heroGuarantees[i].where).length;
const viaOf = (i) => {
    const rule = guaranteeRules[heroGuarantees[i].where] ?? NO_RULE;
    return rule.via[occurrence(i)] ?? rule.via[0] ?? '';
};

// Wide layout: identity on the left, two vertical buses, applications in the middle, the database on the right.
const WIDE = (() => {
    const top = 34;
    const step = 58;
    const h = 42;
    const apps = mapApps.map((a, i) => {
        const y = top + i * step;
        return { ...a, x: 280, y, w: 170, h, cy: y + h / 2 };
    });
    const cy = (apps[0].cy + apps[apps.length - 1].cy) / 2;
    return {
        view: `0 0 720 ${top + (apps.length - 1) * step + h + 14}`,
        identity: { x: 0, y: cy - 52, w: 170, h: 104 },
        db: { x: 560, y: cy - 72, w: 160, h: 144 },
        apps: apps.map((a) => ({
            ...a,
            inPath: `M170 ${cy} H225 V${a.cy} H280`,
            outPath: `M450 ${a.cy} H505 V${cy} H560`,
            ports: [
                [280, a.cy],
                [450, a.cy],
            ],
        })),
        cy,
        headers: [
            [0, 'IDENTITY'],
            [280, 'APPLICATIONS'],
            [560, 'DATABASE'],
        ],
        identityPort: [170, cy],
        dbPort: [560, cy],
    };
})();

// Narrow layout: identity on top, a spine down the middle with the applications hanging off it, the database at the bottom.
const NARROW = (() => {
    const apps = mapApps.map((a, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const y = 140 + row * 54;
        const edge = col ? 190 : 150;
        const cy = y + 20;
        return {
            ...a,
            x: col ? 190 : 0,
            y,
            w: 150,
            h: 40,
            cy,
            inPath: `M170 100 V${cy} H${edge}`,
            outPath: `M${edge} ${cy} H170 V342`,
            ports: [[edge, cy]],
        };
    });
    return {
        view: '0 0 340 462',
        identity: { x: 50, y: 6, w: 240, h: 94 },
        db: { x: 40, y: 342, w: 260, h: 112 },
        apps,
        identityPort: [170, 100],
        dbPort: [170, 342],
    };
})();

const Port = ({ at, lit }) => <circle cx={at[0]} cy={at[1]} r="3.5" className="map-port" data-lit={lit} />;

const Diagram = ({ geo, wide, lit, onHover, label }) => (
    <svg viewBox={geo.view} role="img" aria-label={label} className="mx-auto h-auto w-full max-w-[44rem] min-[1800px]:max-w-[54rem]">
        {wide &&
            geo.headers.map(([x, text]) => (
                <text key={text} x={x} y="12" className="fill-muted font-mono" fontSize="10" letterSpacing="1.6">
                    {text}
                </text>
            ))}

        {geo.apps.map((a) => (
            <g key={a.id}>
                <path d={a.inPath} className="map-edge" />
                <path d={a.outPath} className="map-edge" />
            </g>
        ))}
        {geo.apps.map((a) => (
            <g key={`lit-${a.id}`}>
                {lit.inEdges.includes(a.id) && <path d={a.inPath} className="map-edge-lit" />}
                {lit.outEdges.includes(a.id) && <path d={a.outPath} className="map-edge-lit" />}
            </g>
        ))}

        <g className="map-node" data-lit={lit.identity} data-soft={lit.identitySoft}>
            <rect x={geo.identity.x} y={geo.identity.y} width={geo.identity.w} height={geo.identity.h} rx="14" />
            <text x={geo.identity.x + 16} y={geo.identity.y + 32} className="fill-ink font-sans" fontSize="16" fontWeight="600">
                Identity
            </text>
            <text x={geo.identity.x + 16} y={geo.identity.y + 56} className="fill-muted font-mono" fontSize="11">
                OpenID Connect, PKCE
            </text>
            <text x={geo.identity.x + 16} y={geo.identity.y + 76} className="fill-muted font-mono" fontSize="11">
                Back-channel logout
            </text>
        </g>
        <Port at={geo.identityPort} lit={lit.identity} />

        {geo.apps.map((a) => (
            <g key={a.id} className="map-node cursor-default" data-lit={lit.apps.includes(a.id)} data-soft={lit.appsSoft} onMouseEnter={() => onHover(a.id)} onMouseLeave={() => onHover(null)}>
                <rect x={a.x} y={a.y} width={a.w} height={a.h} rx="10" />
                <text x={a.x + 16} y={a.cy} dominantBaseline="central" className="fill-ink font-sans" fontSize="14" fontWeight="500">
                    {a.label}
                </text>
                {a.ports.map((p) => (
                    <Port key={p.join('-')} at={p} lit={lit.apps.includes(a.id)} />
                ))}
            </g>
        ))}

        <g className="map-node" data-lit={lit.db} data-soft={lit.dbSoft}>
            <rect x={geo.db.x} y={geo.db.y} width={geo.db.w} height={geo.db.h} rx="14" />
            <text x={geo.db.x + 16} y={geo.db.y + 32} className="fill-ink font-sans" fontSize="16" fontWeight="600">
                PostgreSQL
            </text>
            {['Row-level security', 'Triggers', 'Hash-chained audit'].map((line, i) => (
                <text key={line} x={geo.db.x + 16} y={geo.db.y + 58 + i * 20} className="fill-muted font-mono" fontSize="11">
                    {line}
                </text>
            ))}
        </g>
        <Port at={geo.dbPort} lit={lit.db} />
    </svg>
);

// What is lit for the selected guarantee, or for the application under the pointer.
function litState(active, hover) {
    if (hover) {
        return { identity: false, identitySoft: true, db: false, dbSoft: true, apps: [hover], appsSoft: false, inEdges: [hover], outEdges: [hover] };
    }
    const rule = guaranteeRules[heroGuarantees[active].where] ?? NO_RULE;
    const apps = rule.apps === 'all' ? ALL_IDS : rule.apps;
    return {
        identity: rule.identity,
        identitySoft: false,
        db: rule.db,
        dbSoft: false,
        apps: rule.apps === 'all' ? [] : apps,
        appsSoft: rule.apps === 'all',
        inEdges: rule.identity ? apps : [],
        outEdges: rule.db ? apps : [],
    };
}

const MAP_LABEL = 'Diagram. One identity service signs people in to six applications, which all keep their data in PostgreSQL with row-level security, triggers and a hash-chained audit trail.';

const SystemMap = () => {
    const reduced = useReducedMotion();
    const [active, setActive] = useState(0);
    const [hover, setHover] = useState(null);
    const [paused, setPaused] = useState(false);
    const [autoplay, setAutoplay] = useState(true);
    const cycling = autoplay && !reduced;
    const lit = litState(active, hover);

    return (
        <figure
            aria-label="Guarantees and where they are enforced"
            className="scope-dark relative clip rounded-2xl border border-line bg-paper text-ink shadow-lift"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.22),transparent)]" />
            <div className="relative flex items-center gap-3 border-b border-line px-5 py-3">
                <span aria-hidden="true" className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">guarantees</span>
                <span className="ml-auto hidden font-mono text-[0.7rem] text-accent sm:inline">all backed by tests</span>
                {!reduced && (
                    <button
                        type="button"
                        onClick={() => setAutoplay((v) => !v)}
                        aria-pressed={!autoplay}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[0.68rem] text-muted transition-colors hover:border-accent/60 hover:text-ink"
                    >
                        {autoplay ? (
                            <span aria-hidden="true" className="flex gap-[2px]">
                                <i className="h-2.5 w-[2px] bg-current" />
                                <i className="h-2.5 w-[2px] bg-current" />
                            </span>
                        ) : (
                            <Icon name="play" size={11} />
                        )}
                        {autoplay ? 'Pause tour' : 'Play tour'}
                    </button>
                )}
            </div>

            <div className="relative grid grid-cols-1 gap-8 p-5 md:p-7 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] xl:items-center xl:gap-10">
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-1">
                    {heroGuarantees.map(({ text, where }, i) => {
                        const on = i === active;
                        return (
                            <li key={text}>
                                <button
                                    type="button"
                                    aria-pressed={on}
                                    onClick={() => setActive(i)}
                                    className={`relative flex h-full w-full items-start gap-3 clip rounded-xl border px-4 py-3.5 text-left transition-colors duration-300 ${on ? 'border-accent/50 bg-accent/10' : 'border-line bg-panel/50 hover:border-accent/35'}`}
                                >
                                    <span aria-hidden="true" className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${on ? 'bg-accent text-on-accent' : 'bg-sunken text-ok'}`}>
                                        <Icon name="check" size={12} strokeWidth={2.4} />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-[0.95rem] leading-snug">{text}</span>
                                        <span className={`mt-1.5 block font-mono text-[0.7rem] ${on ? 'text-accent' : 'text-muted'}`}>
                                            {where} <span aria-hidden="true">/</span> {viaOf(i)}
                                        </span>
                                    </span>
                                    {on && cycling && (
                                        <span
                                            key={`${active}-${autoplay}`}
                                            aria-hidden="true"
                                            onAnimationEnd={() => setActive((a) => (a + 1) % heroGuarantees.length)}
                                            className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent"
                                            style={{ animation: `sweep ${CYCLE_MS}ms linear forwards`, animationPlayState: paused ? 'paused' : 'running' }}
                                        />
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                <div>
                    <div className="md:hidden">
                        <Diagram geo={NARROW} wide={false} lit={lit} onHover={setHover} label={MAP_LABEL} />
                    </div>
                    <div className="hidden md:block">
                        <Diagram geo={WIDE} wide lit={lit} onHover={setHover} label={MAP_LABEL} />
                    </div>
                </div>
            </div>

            <figcaption className="relative border-t border-line px-5 py-3 font-mono text-[0.7rem] text-muted">
                From the projects below. 3,000+ tests across the three employer systems.
            </figcaption>
        </figure>
    );
};

export default SystemMap;
