import { useEffect, useState } from 'react';

// Scroll-spy: the id of the last section whose top has passed 40% of the viewport height. At the very bottom of the page
// the final section wins, so a short last section can still become active.
export function useScrollSpy(ids) {
    const [active, setActive] = useState('');

    useEffect(() => {
        let frame = 0;
        const compute = () => {
            frame = 0;
            const line = window.innerHeight * 0.4;
            let current = '';
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= line) current = id;
            }
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (atBottom && window.scrollY > 0) current = ids[ids.length - 1];
            setActive(current);
        };
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(compute);
        };
        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        return () => {
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            cancelAnimationFrame(frame);
        };
    }, [ids]);

    return active;
}

// True once the page has scrolled past `threshold` pixels.
export function useScrolled(threshold = 8) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let frame = 0;
        const compute = () => {
            frame = 0;
            setScrolled(window.scrollY > threshold);
        };
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(compute);
        };
        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        return () => {
            window.removeEventListener('scroll', schedule);
            cancelAnimationFrame(frame);
        };
    }, [threshold]);

    return scrolled;
}

// Writes the scroll progress (0 to 1) straight to an element's transform, so scrolling never re-renders React.
export function useScrollProgress(ref) {
    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const el = ref.current;
            if (!el) return;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
            el.style.transform = `scaleX(${progress})`;
        };
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        return () => {
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            cancelAnimationFrame(frame);
        };
    }, [ref]);
}
