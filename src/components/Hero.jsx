import { motion, useReducedMotion } from 'framer-motion'
import { profile, stats } from '../data'
import CountUp from './CountUp'
import AdireBand from './AdireBand'

const ease = [0.22, 1, 0.36, 1]

// Each word slides up from behind a mask, one after another.
function Words({ text, start = 0, reduce }) {
  return text.split(' ').map((w, i) => (
    <span key={i} className="inline-block overflow-hidden mr-[0.22em] pb-[0.1em] align-bottom">
      {reduce ? (
        w
      ) : (
        <motion.span
          className="inline-block"
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease, delay: start + i * 0.08 }}
        >
          {w}
        </motion.span>
      )}{' '}
    </span>
  ))
}

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
        }

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-36 pb-20 sm:pt-44">
      <motion.p {...fade(0)} className="mb-8 flex items-center gap-3 text-xs text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kola opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-kola" />
        </span>
        Available for full-time & contract roles
      </motion.p>

      <h1 className="text-5xl font-bold leading-[0.98] sm:text-7xl md:text-8xl">
        <Words text={`${profile.name},`} start={0.1} reduce={reduce} />
        <br />
        <span className="text-muted">
          <Words text={`${profile.role.toLowerCase()}.`} start={0.35} reduce={reduce} />
        </span>
      </h1>

      <motion.p {...fade(0.55)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
        {profile.headline}
      </motion.p>

      <motion.div {...fade(0.65)} className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          See my work
        </a>
        {profile.cv && (
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            Download CV
          </a>
        )}
        <a href={profile.github} target="_blank" rel="noreferrer" className="px-3 py-3 text-sm text-muted hover:text-ink">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-3 py-3 text-sm text-muted hover:text-ink">
          LinkedIn ↗
        </a>
      </motion.div>

      <motion.div {...fade(0.7)} className="-mx-6 mt-16 overflow-hidden sm:mx-0 sm:rounded-lg">
        <AdireBand />
      </motion.div>

      <motion.dl {...fade(0.75)} className="mt-10 grid gap-6 border-t border-line pt-8 grid-cols-2 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-xs text-muted">{s.label}</dt>
            <dd className="mt-2 text-3xl font-semibold">
              <CountUp value={s.value} />
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
