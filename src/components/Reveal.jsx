import React, { useEffect, useRef } from 'react';

// Fades a block in once as it scrolls into view. Without IntersectionObserver the block is simply visible.
const Reveal = ({ as: Tag = 'div', className = '', delay = 0, children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        if (!('IntersectionObserver' in window)) {
            el.classList.add('is-visible');
            return undefined;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
            {children}
        </Tag>
    );
};

export default Reveal;
