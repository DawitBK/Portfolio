import { create } from 'zustand';

// Small shared UI state: the command palette and the one-line confirmation toast.
export const useUiStore = create((set) => ({
    paletteOpen: false,
    openPalette: () => set({ paletteOpen: true }),
    closePalette: () => set({ paletteOpen: false }),
    togglePalette: () => set((s) => ({ paletteOpen: !s.paletteOpen })),

    toast: null,
    showToast: (message) => set({ toast: { id: Date.now(), message } }),
    clearToast: () => set({ toast: null }),
}));
