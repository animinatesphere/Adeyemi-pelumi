import { useState } from 'react'
import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="text-xs text-paper/50">
            Contact
          </p>
          <h2 className="mt-6 font-semibold text-5xl leading-[1.05] sm:text-7xl">
            Have a role or a product
            <br />
            <span className="text-paper/60">that needs building?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
          >
            Email me
          </a>
          <button
            onClick={copy}
            className="rounded-full border border-paper/20 px-6 py-3 text-sm transition-colors hover:border-paper"
          >
            {copied ? 'Copied ✓' : profile.email}
          </button>
        </Reveal>

        <Reveal delay={0.15} className="mt-20 grid gap-6 border-t border-paper/15 pt-8 text-sm sm:grid-cols-4">
          <div>
            <p className="text-paper/50">Based in</p>
            <p className="mt-1">{profile.location}</p>
          </div>
          <div>
            <p className="text-paper/50">Phone</p>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="mt-1 block hover:text-accent">
              {profile.phone}
            </a>
          </div>
          <div>
            <p className="text-paper/50">GitHub</p>
            <a href={profile.github} target="_blank" rel="noreferrer" className="mt-1 block hover:text-accent">
              animinatesphere ↗
            </a>
          </div>
          <div>
            <p className="text-paper/50">LinkedIn</p>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-1 block hover:text-accent">
              Adeyemi Pelumi Daniel ↗
            </a>
          </div>
        </Reveal>

        <p className="mt-20 text-xs text-paper/40">
          © {new Date().getFullYear()} {profile.name} · Built with React & Tailwind
        </p>
      </div>
    </section>
  )
}
