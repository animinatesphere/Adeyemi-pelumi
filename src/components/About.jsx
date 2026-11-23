import { about, profile } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed">
          {about.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="self-start">
          <figure className="overflow-hidden rounded-2xl border border-line bg-white">
            <img
              src={profile.photo}
              alt={`${profile.name}, ${profile.role.toLowerCase()}`}
              width="400"
              height="400"
              loading="lazy"
              className="block aspect-square h-auto w-full object-cover"
            />
            <figcaption className="flex items-center justify-between px-4 py-3 text-sm">
              <span>{profile.name}</span>
              <span className="text-xs text-muted">{profile.handle}</span>
            </figcaption>
          </figure>
          <div className="mt-4 rounded-2xl border border-line bg-white/50 p-6">
            <p className="text-xs text-accent">Looking for</p>
            <p className="mt-3 leading-relaxed">{about.lookingFor}</p>
          </div>
        </Reveal>
      </div>

      <Reveal as="h3" className="mt-20 text-xs text-muted">
        What I can take on
      </Reveal>
      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {about.offers.map((o, i) => (
          <Reveal key={o.title} delay={i * 0.05} className="bg-paper p-6 sm:p-8">
            <p className="font-semibold text-2xl">{o.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{o.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="h3" className="mt-20 text-xs text-muted">
        How I work
      </Reveal>
      <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {about.principles.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 0.05}>
            <p className="mt-2 font-medium">{p.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
