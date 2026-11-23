import { experience, profile } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <Reveal className="mb-14 max-w-2xl text-lg leading-relaxed">{profile.summary}</Reveal>
      <ol>
        {experience.map((e, i) => (
          <Reveal
            as="li"
            key={e.company}
            delay={i * 0.05}
            className="grid gap-4 border-t border-line py-8 md:grid-cols-[1fr_2fr]"
          >
            <div>
              <h3 className="font-medium">{e.company}</h3>
              {e.place && <p className="mt-1 text-sm text-muted">{e.place}</p>}
              {e.period && <p className="mt-1 text-xs text-muted">{e.period}</p>}
            </div>
            <div>
              <p className="font-semibold text-2xl">{e.role}</p>
              <ul className="mt-3 space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="text-sm leading-relaxed text-muted">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
