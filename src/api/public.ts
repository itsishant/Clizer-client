import { content as fallbackContent } from '../data/content'
import type { HeroContent, LandingContent, WorkflowItem } from '../types/content'
import { endpoints } from './endpoints'
import { apiGet } from './http/get'
import type { ApiDataResponse, LandingPayload } from './types'

type LandingResponse = LandingPayload | ApiDataResponse<LandingPayload>

export type GetPublicLandingOptions = {
  signal?: AbortSignal
  fallback?: LandingContent
}

function isApiDataResponse(response: LandingResponse): response is ApiDataResponse<LandingPayload> {
  return typeof response === 'object' && response !== null && 'data' in response
}

function unwrapLandingResponse(response: LandingResponse): LandingPayload {
  if (isApiDataResponse(response) && typeof response.data === 'object' && response.data !== null) {
    return response.data
  }

  return response as LandingPayload
}

function normalizeHero(
  hero: LandingPayload['hero'],
  fallbackHero: HeroContent,
): HeroContent {
  if (!hero) {
    return fallbackHero
  }

  const primaryCta = hero.primaryCta ?? hero.cta?.primary ?? fallbackHero.primaryCta
  const secondaryCta = hero.secondaryCta ?? hero.cta?.secondary ?? fallbackHero.secondaryCta

  return {
    ...fallbackHero,
    ...hero,
    primaryCta,
    secondaryCta,
  }
}

function normalizeMarquee(
  marquee: LandingPayload['marquee'],
  fallbackMarquee: string[],
): string[] {
  if (Array.isArray(marquee)) {
    return marquee
  }

  if (marquee && typeof marquee === 'object' && 'content' in marquee) {
    const { content } = marquee

    if (Array.isArray(content)) {
      return content
    }

    if (typeof content === 'string') {
      return [content]
    }
  }

  return fallbackMarquee
}

function normalizeWorkflow(
  workflow: LandingPayload['workflow'],
  fallbackWorkflow: WorkflowItem[],
): WorkflowItem[] {
  if (Array.isArray(workflow)) {
    return workflow
  }

  if (workflow && typeof workflow === 'object' && 'steps' in workflow) {
    const { steps } = workflow

    if (Array.isArray(steps)) {
      return steps
    }
  }

  return fallbackWorkflow
}

export async function getPublicLanding(
  options: GetPublicLandingOptions = {},
): Promise<LandingContent> {
  const response = await apiGet<LandingResponse>(endpoints.public.landing, {
    withAuth: false,
    signal: options.signal,
  })

  const payload = unwrapLandingResponse(response)
  const fallback = options.fallback ?? fallbackContent

  return {
    hero: normalizeHero(payload.hero, fallback.hero),
    marquee: normalizeMarquee(payload.marquee, fallback.marquee),
    features: payload.features ?? fallback.features,
    workflow: normalizeWorkflow(payload.workflow, fallback.workflow),
    testimonials: payload.testimonials ?? fallback.testimonials,
    stats: payload.stats ?? fallback.stats,
  }
}
