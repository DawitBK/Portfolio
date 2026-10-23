import { useEffect } from 'react';
import { useDemoStore } from '../store/demoStore';

const EVERY_MS = 60000;
const MIN_GAP_MS = 20000;

// Keeps the demo status fresh without being noisy: one check when the page opens, one a minute while the tab is visible,
// and one when the visitor comes back to the tab after a while away.
export function useDemoPolling() {
    useEffect(() => {
        const { check } = useDemoStore.getState();
        const recheck = () => {
            if (document.visibilityState !== 'visible') return;
            const { checkedAt } = useDemoStore.getState();
            if (!checkedAt || Date.now() - checkedAt >= MIN_GAP_MS) check();
        };
        check();
        const timer = setInterval(recheck, EVERY_MS);
        document.addEventListener('visibilitychange', recheck);
        window.addEventListener('focus', recheck);
        return () => {
            clearInterval(timer);
            document.removeEventListener('visibilitychange', recheck);
            window.removeEventListener('focus', recheck);
        };
    }, []);
}
