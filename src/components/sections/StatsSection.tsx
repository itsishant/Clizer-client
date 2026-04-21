import type { StatItem } from '../../types/content'

type StatsSectionProps = {
  stats: StatItem[]
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="w-full bg-slate-100 px-4 py-14 md:px-8 lg:px-12" id="pricing">
      <div className="mx-auto w-full">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Performance</p>
        <h2 className="mt-2 max-w-[26ch] font-display text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          The Impact Teams See After Switching To Clizer
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-display text-4xl font-bold tracking-tight text-slate-900">{stat.value}</h3>
              <p className="mt-3 text-sm font-medium text-slate-600">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
