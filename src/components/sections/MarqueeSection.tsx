type MarqueeSectionProps = {
  items: string[]
}

export function MarqueeSection({ items }: MarqueeSectionProps) {
  const loop = [...items, ...items]

  return (
    <section className="relative w-full overflow-hidden border-y border-slate-200/80 bg-white/90" aria-label="Trusted by">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee items-center py-3">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="mr-8 inline-flex items-center gap-3 whitespace-nowrap px-2 text-base font-semibold text-slate-600">
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          </span>
        ))}
      </div>
    </section>
  )
}
