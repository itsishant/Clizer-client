import type { WorkflowItem } from '../../types/content'

type WorkflowSectionProps = {
  steps: WorkflowItem[]
}

export function WorkflowSection({ steps }: WorkflowSectionProps) {
  return (
    <section className="w-full bg-[linear-gradient(140deg,#10252f_0%,#103137_100%)] px-4 py-14 md:px-8 lg:px-12" id="workflow">
      <div className="mx-auto w-full">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-200/70">Workflow</p>
        <h2 className="mt-2 max-w-[30ch] font-display text-3xl font-bold tracking-tight text-teal-50 md:text-5xl">
          From Long-Form Upload To Published Shorts In Minutes
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
            >
              <span className="text-xs font-bold text-teal-200">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-teal-50">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-teal-100/85">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
