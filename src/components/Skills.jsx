import { skills } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" index="05" title="Toolkit">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.05}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">{s.group}</h3>
            <ul className="space-y-1.5">
              {s.items.map((it) => (
                <li key={it} className="text-lg">
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
