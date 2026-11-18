import { marquee } from '../data'

// Endless scrolling strip of tech names. Pure CSS; pauses on hover and
// stops entirely for reduced-motion users (see index.css).
export default function Marquee() {
  const row = (hidden) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {marquee.map((t) => (
        <li key={t} className="flex items-center gap-10 whitespace-nowrap font-serif text-2xl text-muted sm:text-3xl">
          {t}
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="marquee overflow-hidden border-y border-line py-6" aria-label="Technologies I work with">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
