import { useEffect, useRef } from 'react';

// Fades a block in once as it scrolls into view. Without IntersectionObserver the block is simply visible.
const Reveal = ({ as: tag = 'div', className = '', delay = 0, children, ...rest }) => {
    const Component = tag;
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
            { threshold: 0.1, rootMargin: '0px 0px -4% 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Component ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
            {children}
        </Component>
    );
};

export default Reveal;
