// Used only to print the right modifier key in hints (the shortcut itself accepts both Ctrl and Cmd).
export const isApple = typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || '');
export const modKey = isApple ? '⌘' : 'Ctrl';
