import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const page = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The production build ships the page already rendered (scripts/postbuild.mjs), so search engines and AI crawlers that
// do not run scripts still read it. React then takes it over; in development the root is empty and is simply rendered.
if (root.hasChildNodes()) hydrateRoot(root, page)
else createRoot(root).render(page)
