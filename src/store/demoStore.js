import { create } from 'zustand';

const TIMEOUT_MS = 9000;

// Whether the live demos are answering, and the "please try again" dialog shown when someone opens one while they are not.
// "unknown" covers every case where the answer could not be read (no network, the status endpoint missing in development).
// Only a definite "offline" ever holds a visitor back; "unknown" behaves exactly like "online".
export const useDemoStore = create((set, get) => ({
    status: 'unknown', // 'unknown' | 'online' | 'offline'
    checking: false,
    checkedAt: null,
    dialogUrl: null,

    check: async ({ fresh = false } = {}) => {
        if (get().checking) return get().status;
        set({ checking: true });
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
        let status = 'unknown';
        try {
            const reply = await fetch(`/api/demo-status${fresh ? `?t=${Date.now()}` : ''}`, { signal: controller.signal, cache: 'no-store' });
            const body = reply.ok ? await reply.json() : null;
            if (body?.online === true) status = 'online';
            else if (body?.online === false) status = 'offline';
        } catch {
            status = 'unknown';
        } finally {
            clearTimeout(timer);
        }
        set({ status, checking: false, checkedAt: Date.now() });
        return status;
    },

    openDialog: (url) => set({ dialogUrl: url }),
    closeDialog: () => set({ dialogUrl: null }),
}));
