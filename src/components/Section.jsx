export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20 sm:py-28">
      <div className="mb-12 border-b border-line pb-4">
        <h2 className="text-4xl font-semibold sm:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}
