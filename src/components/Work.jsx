import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data'
import Reveal from './Reveal'
import Section from './Section'
import Shot from './Shot'

function Project({ p }) {
  const [open, setOpen] = useState(false)
  const hasMore = p.highlights.length > 0

  return (
    <Reveal as="article" className="group border-b border-line py-10 first:pt-0" delay={0.05}>
      <div className="grid gap-6 md:grid-cols-[120px_1fr]">
        <div className="text-sm text-muted">
          <div>{p.tag}</div>
        </div>

        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="text-3xl font-semibold sm:text-4xl">
              {p.title}
              <span className="ml-3 align-middle font-sans text-sm text-muted">{p.year}</span>
            </h3>
            <div className="flex gap-4 text-sm">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>

          {p.image && (
            <Shot className="mt-6">
            <a
              href={p.links[0]?.href}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border border-line bg-white shadow-sm"
            >
              <img
                src={p.image.src}
                alt={p.image.alt}
                loading="lazy"
                width={p.image.width || 1440}
                height={p.image.height || 814}
                className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </a>
            </Shot>
          )}

          <p className="mt-6 max-w-2xl leading-relaxed text-muted">{p.description}</p>

          {p.stack.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-[11px] text-muted">
                  {s}
                </li>
              ))}
            </ul>
          )}

          {hasMore && (
            <>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="mt-6 text-xs text-ink transition-colors hover:text-accent"
              >
                {open ? '− Hide details' : '+ What I built'}
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    {p.highlights.map((h) => (
                      <li key={h} className="mt-3 flex max-w-2xl gap-3 text-sm leading-relaxed first:mt-5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <Section id="projects" index="03" title="More work">
      {projects.map((p) => (
        <Project key={p.title} p={p} />
      ))}
    </Section>
  )
}
