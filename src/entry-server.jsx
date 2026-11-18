import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used only at build time (scripts/prerender.js) to write the page's HTML
// into dist/index.html, so search engines see real content without running JS.
export function render() {
  return renderToString(<App />)
}
