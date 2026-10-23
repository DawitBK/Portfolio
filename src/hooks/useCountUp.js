import { useEffect, useState } from 'react';
import { useReducedMotion } from './useMediaQuery';

const easeOutCubic = (t) => 1 - (1 - t) ** 3;

// Counts from 0 to `target` once `active` is true. With reduced motion the final value is returned straight away.
export function useCountUp(target, active, duration = 1400) {
    const reduced = useReducedMotion();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!active || reduced) return undefined;
        let frame = 0;
        const start = performance.now();
        const tick = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            setValue(target * easeOutCubic(progress));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [active, reduced, target, duration]);

    return reduced ? target : value;
}
