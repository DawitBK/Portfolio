const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const behaviourFor = (instant) => (instant ? 'instant' : prefersReducedMotion() ? 'auto' : 'smooth');

// Scrolls to a section (the CSS scroll offset accounts for the fixed navigation), keeps the address bar in step and moves
// keyboard focus to the target so assistive technology follows the jump.
export function goTo(id, { instant = false } = {}) {
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: behaviourFor(instant) });
        history.replaceState(null, '', window.location.pathname);
        return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: behaviourFor(instant), block: 'start' });
    history.replaceState(null, '', `#${id}`);
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
}

export const downloadFile = (href, name) => {
    const a = document.createElement('a');
    a.href = href;
    a.download = name;
    a.rel = 'noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export const openExternal = (url) => window.open(url, '_blank', 'noopener,noreferrer');
