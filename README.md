# Hexcode — Portfolio

Minimal portfolio for Adeyemi Pelumi Daniel. React 19 + Vite + Tailwind CSS v4, with Framer Motion for scroll reveals, the hero headline, count-up stats, image reveals and the menu marker. Everything turns off for reduced-motion users. No GSAP.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Edit content

Everything (bio, projects, experience, skills, links) is in `src/data.js`.
Your CV is served from `public/Adeyemi_Pelumi_Daniel_CV.pdf` — replace that file when you update it.

## SEO

`npm run build` also pre-renders the page into `dist/index.html` (so Google sees the full text without running JavaScript), adds Person structured data, and writes `sitemap.xml` and `robots.txt`.
If you move to your own domain, change the one line in `src/site.js`.

## Deploy to Vercel

Push to GitHub → import the repo on vercel.com → framework "Vite" → Deploy. No config needed.

## Structure

```
src/
  data.js              all content
  components/
    Nav.jsx            sticky header
    Hero.jsx           intro + stats
    About.jsx          bio, what I'm looking for, what I can take on, how I work
    CaseStudy.jsx      Cleaniq deep dive with system map
    Work.jsx           other projects with "What I built" toggle
    Experience.jsx     summary + roles
    Skills.jsx         toolkit grid
    Contact.jsx        dark footer CTA, copy-email button
    Reveal.jsx         fade-up on scroll (respects reduced motion)
    Shot.jsx           screenshot reveal on scroll
    CountUp.jsx        stats count up when visible
    Marquee.jsx        scrolling tech strip under the hero
    ScrollProgress.jsx progress bar at the top of the page
```
