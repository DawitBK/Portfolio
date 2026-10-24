import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used only by scripts/postbuild.mjs to write the page's HTML into dist/index.html at build time.
export const render = () => renderToString(<App />)
