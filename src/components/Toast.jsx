import { useEffect } from 'react';
import { useUiStore } from '../store/uiStore';
import Icon from './Icon';

// One short confirmation line. The live region is always mounted so screen readers announce text changes.
const Toast = () => {
    const toast = useUiStore((s) => s.toast);
    const clearToast = useUiStore((s) => s.clearToast);

    useEffect(() => {
        if (!toast) return undefined;
        const timer = setTimeout(clearToast, 2400);
        return () => clearTimeout(timer);
    }, [toast, clearToast]);

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4" role="status" aria-live="polite">
            {toast && (
                <p key={toast.id} className="scope-dark flex animate-pop items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-2.5 text-sm text-ink shadow-pop">
                    <Icon name="check" size={15} className="text-ok" />
                    {toast.message}
                </p>
            )}
        </div>
    );
};

export default Toast;
