import type { TestimonialItem } from '../../types/content'

type TestimonialsSectionProps = {
  testimonials: TestimonialItem[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="w-full bg-white px-4 py-14 md:px-8 lg:px-12" id="testimonials">
      <div className="mx-auto w-full">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Social proof</p>
        <h2 className="mt-2 max-w-[25ch] font-display text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Trusted By Fast-Growing Creator Teams
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <blockquote className="text-base font-semibold leading-relaxed text-amber-950">{item.quote}</blockquote>
              <p className="mt-5 text-sm font-bold text-amber-900">{item.name}</p>
              <span className="text-sm text-amber-700">{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
