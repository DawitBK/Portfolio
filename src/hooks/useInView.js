import { useEffect, useState } from 'react';

// Returns [ref callback, seen]. `seen` flips to true once the element has been on screen and stays true.
export function useInView({ threshold = 0.3, rootMargin = '0px' } = {}) {
    const [node, setNode] = useState(null);
    const [seen, setSeen] = useState(() => typeof IntersectionObserver === 'undefined');

    useEffect(() => {
        if (!node || seen) return undefined;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSeen(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [node, seen, threshold, rootMargin]);

    return [setNode, seen];
}
