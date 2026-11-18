import Reveal from './Reveal'

export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20 sm:py-28">
      <Reveal className="mb-12 flex items-baseline gap-4 border-b border-line pb-4">
        <span className="font-mono text-xs text-accent">{index}</span>
        <h2 className="font-serif text-4xl sm:text-5xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}
