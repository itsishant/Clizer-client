import { Button } from '../ui/Button'

export function CtaSection() {
  return (
    <section className="w-full bg-[radial-gradient(circle_at_14%_16%,rgba(255,174,125,0.24),transparent_36%),linear-gradient(145deg,#171a20_0%,#272e39_100%)] px-4 py-14 md:px-8 lg:px-12">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-5 rounded-3xl border border-white/20 bg-white/5 p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-300">Ready to grow faster</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            Build Your Shorts Engine With Clizer
          </h2>
          <span className="mt-3 inline-block text-base text-slate-200">
            Start free and publish your first short in minutes.
          </span>
        </div>
        <Button label="Generate My First Clips" />
      </div>
    </section>
  )
}
