import type { FeatureItem } from '../../types/content'

type FeaturesSectionProps = {
  features: FeatureItem[]
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="w-full bg-white px-4 py-14 md:px-8 lg:px-12" id="features">
      <div className="mx-auto w-full">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Capabilities</p>
        <h2 className="mt-2 max-w-[28ch] font-display text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Everything You Need To Scale Short-Form Content
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300"
            >
              <h3 className="font-display text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
