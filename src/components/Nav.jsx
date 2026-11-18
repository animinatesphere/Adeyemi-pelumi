import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

// Sections that count as each menu item (the "More work" list belongs to Work).
const sectionToLink = { about: '#about', work: '#work', projects: '#work', experience: '#experience', skills: '#skills', contact: '#contact' }

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  // Highlight the menu item for whichever section is in the middle of the screen.
  useEffect(() => {
    const els = Object.keys(sectionToLink)
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(sectionToLink[e.target.id])
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    const atTop = () => window.scrollY < 200 && setActive('')
    window.addEventListener('scroll', atTop, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', atTop)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-paper/85 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-2xl italic leading-none">
          {profile.handle.toLowerCase()}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                className={`relative py-1 transition-colors hover:text-ink ${active === l.href ? 'text-ink' : ''}`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          Hire me
        </a>
      </nav>
    </header>
  )
}
