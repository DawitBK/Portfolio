// Copies text and reports whether it worked. Uses the async clipboard API where the browser allows it and falls back to
// a hidden textarea; when both are blocked the caller can tell the visitor to select the text by hand.
export async function copyText(text) {
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch {
        /* permission denied or insecure context: try the legacy route */
    }
    const previous = document.activeElement;
    try {
        const field = document.createElement('textarea');
        field.value = text;
        field.setAttribute('readonly', '');
        field.style.cssText = 'position:fixed;top:-1000px;left:0;opacity:0';
        document.body.appendChild(field);
        field.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(field);
        return ok;
    } catch {
        return false;
    } finally {
        previous?.focus?.({ preventScroll: true });
    }
}
