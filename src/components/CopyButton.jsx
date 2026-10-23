import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { copyText } from '../lib/clipboard';
import { useUiStore } from '../store/uiStore';

// Copies `value`, flips to "Copied" for a moment and raises the shared toast. If the browser blocks the clipboard the
// toast says so, and the value is always on screen to select by hand.
const CopyButton = ({ value, label, className = '', compact = false }) => {
    const [done, setDone] = useState(false);
    const timer = useRef(0);
    const showToast = useUiStore((s) => s.showToast);

    useEffect(() => () => clearTimeout(timer.current), []);

    const onClick = async () => {
        const ok = await copyText(value);
        showToast(ok ? `${label} copied` : `Copy blocked. Select the ${label.toLowerCase()} by hand.`);
        if (!ok) return;
        setDone(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setDone(false), 1800);
    };

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`Copy ${label.toLowerCase()}`}
            className={`inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors ${done ? 'text-ok' : 'text-accent hover:bg-accent-soft'} ${className}`}
        >
            <Icon name={done ? 'check' : 'copy'} size={16} />
            {!compact && <span aria-hidden="true">{done ? 'Copied' : 'Copy'}</span>}
            <span className="sr-only" aria-live="polite">
                {done ? 'Copied' : ''}
            </span>
        </button>
    );
};

export default CopyButton;
