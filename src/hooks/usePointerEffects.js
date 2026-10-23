import { useEffect } from 'react';
import { useReducedMotion } from './useMediaQuery';

// One delegated pointer listener for the whole page:
//  - any element with the `spot` class receives --mx and --my (pointer position inside it) for the spotlight;
//  - an element with data-parallax receives --px and --py (-1 to 1 across the viewport) for the hero glow drift.
// Nothing here touches React state. It is skipped for reduced motion and for touch-only devices.
export function usePointerEffects() {
    const reduced = useReducedMotion();

    useEffect(() => {
        if (reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
        let frame = 0;
        let last = null;

        const apply = () => {
            frame = 0;
            if (!last) return;
            const { clientX, clientY, target } = last;
            const spot = target instanceof Element ? target.closest('.spot') : null;
            if (spot) {
                const rect = spot.getBoundingClientRect();
                spot.style.setProperty('--mx', `${clientX - rect.left}px`);
                spot.style.setProperty('--my', `${clientY - rect.top}px`);
            }
            const stage = document.querySelector('[data-parallax]');
            if (stage) {
                stage.style.setProperty('--px', ((clientX / window.innerWidth) * 2 - 1).toFixed(3));
                stage.style.setProperty('--py', ((clientY / window.innerHeight) * 2 - 1).toFixed(3));
            }
        };

        const onMove = (event) => {
            last = event;
            if (!frame) frame = requestAnimationFrame(apply);
        };

        document.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            document.removeEventListener('pointermove', onMove);
            cancelAnimationFrame(frame);
        };
    }, [reduced]);
}
