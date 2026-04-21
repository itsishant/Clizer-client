import { endpoints } from './endpoints'
import { apiGet } from './http/get'
import type { HealthResponse } from './types'

export function getHealthStatus(): Promise<HealthResponse> {
  return apiGet<HealthResponse>(endpoints.health, {
    withAuth: false,
  })
}
