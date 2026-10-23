// A small hand-drawn icon set (24 px grid, 1.7 stroke). Brand marks are filled; everything else is stroked.
const stroked = {
    arrowRight: (
        <>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </>
    ),
    arrowUpRight: (
        <>
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
        </>
    ),
    arrowUp: (
        <>
            <path d="M12 19V5" />
            <path d="m6 11 6-6 6 6" />
        </>
    ),
    search: (
        <>
            <circle cx="11" cy="11" r="6.5" />
            <path d="m20 20-4-4" />
        </>
    ),
    sun: (
        <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
        </>
    ),
    moon: <path d="M20.5 13A8.5 8.5 0 1 1 11 3.5a6.5 6.5 0 0 0 9.5 9.5z" />,
    copy: (
        <>
            <rect x="9" y="9" width="11" height="11" rx="2.5" />
            <path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15" />
        </>
    ),
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    download: (
        <>
            <path d="M12 4v11" />
            <path d="m7 11 5 5 5-5" />
            <path d="M5 20h14" />
        </>
    ),
    mail: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m4 7.5 8 5.5 8-5.5" />
        </>
    ),
    phone: <path d="M6.6 3.5h2.8l1.4 3.8-1.9 1.3a10.5 10.5 0 0 0 5.5 5.5l1.3-1.9 3.8 1.4v2.8a2.5 2.5 0 0 1-2.7 2.5C10.7 18.4 5.6 13.3 4.1 6.2A2.5 2.5 0 0 1 6.6 3.5z" />,
    pin: (
        <>
            <path d="M12 21s7-5.8 7-11.2A7 7 0 0 0 5 9.8C5 15.2 12 21 12 21z" />
            <circle cx="12" cy="9.8" r="2.4" />
        </>
    ),
    clock: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </>
    ),
    lock: (
        <>
            <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
            <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
        </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    play: <path d="m8 5.5 11 6.5-11 6.5z" />,
    doc: (
        <>
            <path d="M6 3h8l4 4v14H6z" />
            <path d="M14 3v4h4" />
            <path d="M9 12h6M9 16h6" />
        </>
    ),
    db: (
        <>
            <ellipse cx="12" cy="6" rx="8" ry="3" />
            <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
            <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </>
    ),
    // capabilities
    blueprint: (
        <>
            <rect x="3" y="3.5" width="7.5" height="6" rx="1.6" />
            <rect x="13.5" y="14.5" width="7.5" height="6" rx="1.6" />
            <path d="M6.75 9.5V14a2 2 0 0 0 2 2h4.75" />
        </>
    ),
    server: (
        <>
            <rect x="3.5" y="4" width="17" height="6.5" rx="2" />
            <rect x="3.5" y="13.5" width="17" height="6.5" rx="2" />
            <path d="M7.5 7.25h.01M7.5 16.75h.01" />
        </>
    ),
    layout: (
        <>
            <rect x="3" y="4" width="18" height="16" rx="2.5" />
            <path d="M3 9h18M9 9v11" />
        </>
    ),
    cube: (
        <>
            <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9z" />
            <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
        </>
    ),
    shield: (
        <>
            <path d="M12 3 19.5 6v6c0 4.4-3.1 7.6-7.5 9-4.4-1.4-7.5-4.6-7.5-9V6z" />
            <path d="m8.6 12 2.4 2.4 4.4-4.8" />
        </>
    ),
    sparkle: (
        <>
            <path d="M11 3.5 12.9 9l5.6 1.9-5.6 1.9L11 18.4 9.1 12.8 3.5 10.9 9.1 9z" />
            <path d="M19 3.5v4M17 5.5h4" />
        </>
    ),
    terminal: (
        <>
            <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
            <path d="m7 10 3 2.5L7 15M12.5 15H17" />
        </>
    ),
    verify: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12.3 2.8 2.7 5.4-5.5" />
        </>
    ),
    people: (
        <>
            <circle cx="9" cy="8.5" r="3.2" />
            <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
            <circle cx="17.2" cy="9.5" r="2.4" />
            <path d="M17.5 14.6c2.3.2 3.9 1.9 3.9 4.4" />
        </>
    ),
    // security by design
    key: (
        <>
            <circle cx="8" cy="15.5" r="4" />
            <path d="m11 12.5 8-8M16 7.5l2.5 2.5" />
        </>
    ),
    layers: (
        <>
            <path d="m12 3 9 5-9 5-9-5z" />
            <path d="m3 12.5 9 5 9-5M3 17l9 5 9-5" />
        </>
    ),
    link: (
        <>
            <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
            <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
        </>
    ),
    refresh: (
        <>
            <path d="M20 12a8 8 0 1 1-2.6-5.9" />
            <path d="M20 4v5h-5" />
        </>
    ),
    badge: (
        <>
            <circle cx="12" cy="9" r="5.5" />
            <path d="m9.7 9 1.7 1.7 3-3.2M8.6 13.7 7.5 21l4.5-2.4 4.5 2.4-1.1-7.3" />
        </>
    ),
    briefcase: (
        <>
            <rect x="3" y="7" width="18" height="13" rx="2.5" />
            <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18" />
        </>
    ),
    cap: (
        <>
            <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5z" />
            <path d="M6.5 12v4.5c0 1.2 2.5 2.5 5.5 2.5s5.5-1.3 5.5-2.5V12M21.5 9.5V15" />
        </>
    ),
    globe: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3z" />
        </>
    ),
};

const filled = {
    github: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3',
    linkedin: 'M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z',
};

const Icon = ({ name, size = 18, className = '', strokeWidth = 1.7 }) => {
    if (filled[name]) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
                <path d={filled[name]} />
            </svg>
        );
    }
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
            className={className}
        >
            {stroked[name]}
        </svg>
    );
};

export default Icon;
