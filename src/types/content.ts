export type NavItem = {
  label: string
  href: string
}

export type HeroContent = {
  brand: string
  badge: string
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
  trustText: string
  nav: NavItem[]
  clipSource: string
  clipCountText: string
  clips: string[]
  metrics: string[]
}

export type FeatureItem = {
  title: string
  description: string
}

export type WorkflowItem = {
  title: string
  description: string
}

export type TestimonialItem = {
  quote: string
  name: string
  role: string
}

export type StatItem = {
  label: string
  value: string
}

export type LandingContent = {
  hero: HeroContent
  marquee: string[]
  features: FeatureItem[]
  workflow: WorkflowItem[]
  testimonials: TestimonialItem[]
  stats: StatItem[]
}
