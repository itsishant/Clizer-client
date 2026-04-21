import type { HeroContent } from '../../types/content'
import { Button } from '../ui/Button'

type HeroSectionProps = {
  hero: HeroContent
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <header className="w-full border-b border-white/10 bg-[radial-gradient(circle_at_14%_18%,rgba(255,196,132,0.34),transparent_35%),radial-gradient(circle_at_86%_82%,rgba(136,201,255,0.3),transparent_40%),linear-gradient(145deg,#101a32_0%,#1a2344_48%,#141935_100%)] px-4 py-6 text-white md:px-8 lg:px-12">
      <nav className="mx-auto flex w-full items-center justify-between gap-4">
        <a className="font-display text-3xl font-bold tracking-tight" href="#top">
          {hero.brand}
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {hero.nav.map((item) => (
            <a
              key={item.label}
              className="text-lg font-medium text-slate-100/90 transition hover:text-white"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button label="Sign In" variant="ghost" />
      </nav>

      <div className="mx-auto mt-8 grid w-full gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
        <div>
          <p className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-amber-100">
            {hero.badge}
          </p>
          <h1 className="mt-4 max-w-[15ch] font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-6xl xl:text-8xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-slate-200 md:text-[1.75rem] md:leading-[1.35]">
            {hero.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button label={hero.primaryCta} />
            <Button label={hero.secondaryCta} variant="secondary" />
          </div>
          <p className="mt-4 text-[1.8rem] text-slate-200/90 md:text-3xl">{hero.trustText}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {hero.metrics.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-slate-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-b from-slate-950/95 to-slate-950/85 shadow-[0_18px_48px_rgba(9,16,37,0.45)]">
          <div className="border-b border-white/15 px-4 py-3">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-rose-400"></span>
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-amber-400"></span>
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400"></span>
          </div>
          <div className="p-4 text-slate-200 md:p-6">
            <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-lg font-medium md:text-xl">
              {hero.clipSource}
            </p>
            <div className="mt-5 flex gap-2">
              <span className="block h-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-400" style={{ width: '19%' }}></span>
              <span className="block h-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-400" style={{ width: '28%' }}></span>
              <span className="block h-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-400" style={{ width: '17%' }}></span>
              <span className="block h-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-400" style={{ width: '23%' }}></span>
            </div>
            <p className="mt-4 text-xl font-semibold text-emerald-300 md:text-2xl">{hero.clipCountText}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-xl leading-relaxed text-slate-200 md:text-3xl md:leading-[1.4]">
              {hero.clips.map((clip) => (
                <li key={clip}>{clip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
