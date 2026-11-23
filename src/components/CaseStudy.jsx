import { caseStudy as c } from '../data'
import Reveal from './Reveal'
import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import Shot from './Shot'

function Box({ children, strong }) {
  return (
    <li
      className={`rounded-lg border px-3 py-2 text-center text-xs ${
        strong ? 'border-ink bg-ink text-paper' : 'border-line bg-paper'
      }`}
    >
      {children}
    </li>
  )
}

function Column({ label, items, strong }) {
  return (
    <div>
      <p className="mb-3 text-center text-xs text-muted">{label}</p>
      <ul className="space-y-2">
        {items.map((it) => (
          <Box key={it} strong={strong}>
            {it}
          </Box>
        ))}
      </ul>
    </div>
  )
}

const Arrow = () => (
  <span aria-hidden className="animate-nudge hidden self-center text-accent md:block">
    →
  </span>
)

export default function CaseStudy() {
  const reduce = useReducedMotion()
  return (
    <Section id="work" index="02" title="Case study">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="font-semibold text-4xl sm:text-6xl">{c.title}</h3>
          <div className="flex gap-4 text-sm">
            {c.links.map((l) => (
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
        <p className="mt-3 text-lg text-muted">{c.subtitle}</p>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="text-xs text-muted">My role</p>
          <p className="mt-2">{c.role}</p>
          {c.period && <p className="mt-1 text-xs text-muted">{c.period}</p>}
          <p className="mt-6 text-xs text-muted">What I own</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {c.owned.map((o) => (
              <li key={o} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
                {o}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-xs text-muted">The brief</p>
          <p className="mt-2 text-lg leading-relaxed">{c.brief}</p>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <Shot>
        <a
          href={c.links[0]?.href}
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
        >
          <img src={c.siteImage.src} alt={c.siteImage.alt} loading="lazy" width="1440" height="814" className="block h-auto w-full" />
        </a>
        </Shot>
        <p className="mt-3 text-xs text-muted">The public website — booking, quotes and app downloads</p>
      </Reveal>

      <Reveal className="mt-10 rounded-2xl bg-indigo p-6 sm:p-10">
        <p className="text-xs text-white/60">Cleaniq Service Pro — the worker app on the App Store</p>
        <ul className="mt-6 grid grid-cols-3 gap-3 sm:gap-6">
          {c.appImages.map((img, i) => (
            <motion.li
              key={img.src}
              // middle phone sits a little higher, like a product shot
              className={i === 1 ? 'sm:-translate-y-6' : ''}
              initial={reduce ? false : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduce ? undefined : { y: -10 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : i * 0.12 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width="600"
                height="1298"
                className="block h-auto w-full rounded-xl shadow-lg"
              />
            </motion.li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-14 rounded-2xl border border-line bg-white/50 p-6 sm:p-8">
        <p className="text-xs text-muted">How it fits together</p>
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          <Column label="People come in via" items={c.system.inputs} />
          <Arrow />
          <Column label="Core" items={c.system.core} strong />
          <Arrow />
          <Column label="Services" items={c.system.services} />
          <Arrow />
          <Column label="Team works in" items={c.system.outputs} />
        </div>
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {c.modules.map((m, i) => (
          <Reveal key={m.title} delay={(i % 3) * 0.05} className="border-t border-line pt-5">
            <h4 className="mt-1 font-semibold text-2xl">{m.title}</h4>
            <ul className="mt-3 space-y-2">
              {m.points.map((pt) => (
                <li key={pt} className="text-sm leading-relaxed text-muted">
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <ul className="flex flex-wrap gap-2">
          {c.stack.map((s) => (
            <li key={s} className="rounded-full border border-line px-3 py-1 text-[11px] text-muted">
              {s}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
