import { endpoints } from './endpoints'
import { apiGet } from './http/get'
import { apiPut } from './http/put'
import type {
  ApiDataResponse,
  ApiEntity,
  ApiListResponse,
  LandingPayload,
  UpdateLandingFeaturesRequest,
  UpdateLandingHeroRequest,
  UpdateLandingMarqueeRequest,
  UpdateLandingStatsRequest,
  UpdateLandingTestimonialsRequest,
  UpdateLandingWorkflowRequest,
} from './types'

type LandingResponse = LandingPayload | ApiDataResponse<LandingPayload>

function isApiDataResponse(response: LandingResponse): response is ApiDataResponse<LandingPayload> {
  return typeof response === 'object' && response !== null && 'data' in response
}

function unwrapLandingResponse(response: LandingResponse): LandingPayload {
  if (isApiDataResponse(response) && typeof response.data === 'object' && response.data !== null) {
    return response.data
  }

  return response as LandingPayload
}

export async function getAdminLanding(): Promise<LandingPayload> {
  const response = await apiGet<LandingResponse>(endpoints.admin.landing)
  return unwrapLandingResponse(response)
}

export function updateLandingHero(
  payload: UpdateLandingHeroRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPut<ApiDataResponse<ApiEntity>>(endpoints.admin.landingHero, payload)
}

export function updateLandingMarquee(
  payload: UpdateLandingMarqueeRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPut<ApiDataResponse<ApiEntity>>(endpoints.admin.landingMarquee, payload)
}

export function updateLandingFeatures(
  payload: UpdateLandingFeaturesRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPut<ApiDataResponse<ApiEntity>>(endpoints.admin.landingFeatures, payload)
}

export function updateLandingWorkflow(
  payload: UpdateLandingWorkflowRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPut<ApiDataResponse<ApiEntity>>(endpoints.admin.landingWorkflow, payload)
}

export function updateLandingTestimonials(
  payload: UpdateLandingTestimonialsRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPut<ApiDataResponse<ApiEntity>>(endpoints.admin.landingTestimonials, payload)
}

export function updateLandingStats(
  payload: UpdateLandingStatsRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPut<ApiDataResponse<ApiEntity>>(endpoints.admin.landingStats, payload)
}

export function listAdminUsers(): Promise<ApiListResponse<ApiEntity>> {
  return apiGet<ApiListResponse<ApiEntity>>(endpoints.admin.users)
}

export function listAdminProjects(): Promise<ApiListResponse<ApiEntity>> {
  return apiGet<ApiListResponse<ApiEntity>>(endpoints.admin.projects)
}

export function listAdminJobs(): Promise<ApiListResponse<ApiEntity>> {
  return apiGet<ApiListResponse<ApiEntity>>(endpoints.admin.jobs)
}
