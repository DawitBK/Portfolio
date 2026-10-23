import { lazy, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Capabilities from './components/Capabilities';
import Lifecycle from './components/Lifecycle';
import Work from './components/Work';
import Demos from './components/Demos';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { usePointerEffects } from './hooks/usePointerEffects';
import { goTo } from './lib/nav';
import { useUiStore } from './store/uiStore';

// The command palette is only needed after Ctrl or Cmd + K, so it loads as its own small chunk.
const loadPalette = () => import('./components/Palette');
const Palette = lazy(loadPalette);

function App() {
    const paletteOpen = useUiStore((s) => s.paletteOpen);
    const togglePalette = useUiStore((s) => s.togglePalette);
    usePointerEffects();

    useEffect(() => {
        const onKey = (event) => {
            if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'k') {
                event.preventDefault();
                togglePalette();
            }
        };
        document.addEventListener('keydown', onKey);
        // The page is built in the browser, so honour a #section in the address once it exists.
        const hash = window.location.hash.slice(1);
        const jump = hash ? requestAnimationFrame(() => goTo(hash, { instant: true })) : 0;
        // Fetch the palette in the background once the page is idle, so the first open is instant.
        const prefetch = setTimeout(loadPalette, 2500);
        return () => {
            document.removeEventListener('keydown', onKey);
            clearTimeout(prefetch);
            cancelAnimationFrame(jump);
        };
    }, [togglePalette]);

    return (
        <>
            <Navbar />
            <main id="main" tabIndex={-1}>
                <Hero />
                <Proof />
                <Capabilities />
                <Lifecycle />
                <Work />
                <Demos />
                <Experience />
                <Contact />
            </main>
            <Footer />
            <Toast />
            {paletteOpen && (
                <Suspense fallback={null}>
                    <Palette />
                </Suspense>
            )}
        </>
    );
}

export default App;
