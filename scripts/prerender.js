// Runs after `vite build`. Puts the rendered page into dist/index.html,
// adds structured data (who you are, for Google), and writes sitemap.xml
// and robots.txt. Content comes from src/data.js, the address from src/site.js.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { SITE_URL } from '../src/site.js'
import { profile, marquee, caseStudy } from '../src/data.js'

const { render } = await import('../dist-ssr/entry-server.js')

const url = `${SITE_URL}/`
const today = new Date().toISOString().slice(0, 10)

const person = {
  '@type': 'Person',
  '@id': `${url}#person`,
  name: profile.name,
  alternateName: ['Pelumi Adeyemi', 'Adeyemi Pelumi', 'Pelumi Daniel Adeyemi', profile.handle, `${profile.handle} developer`],
  jobTitle: ['Full-Stack Developer', 'Tech Lead'],
  description: profile.summary,
  url,
  image: `${SITE_URL}${profile.photo}`,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Ibadan', addressCountry: 'NG' },
  worksFor: [
    { '@type': 'Organization', name: caseStudy.title, url: caseStudy.links[0].href },
    { '@type': 'Organization', name: 'SiteOrbit', url: 'https://siteorbit.space' },
  ],
  knowsAbout: marquee,
}

const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'ProfilePage', '@id': url, url, name: `${profile.name} — ${profile.role}`, dateModified: today, mainEntity: { '@id': `${url}#person` } },
    { '@type': 'WebSite', '@id': `${url}#website`, url, name: `${profile.name} (${profile.handle})`, author: { '@id': `${url}#person` } },
    person,
  ],
}

let html = readFileSync('dist/index.html', 'utf8')
html = html
  .replaceAll('__SITE_URL__', SITE_URL)
  .replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
  .replace('</head>', `  <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>\n  </head>`)
writeFileSync('dist/index.html', html)

writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${url}</loc><lastmod>${today}</lastmod></url>
</urlset>
`,
)
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

rmSync('dist-ssr', { recursive: true, force: true })
console.log('Prerendered dist/index.html, wrote sitemap.xml and robots.txt')
