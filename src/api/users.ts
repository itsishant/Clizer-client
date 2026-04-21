import { endpoints } from './endpoints'
import { apiGet } from './http/get'
import type { ApiDataResponse, ApiEntity } from './types'

export function getCurrentUserProfile(): Promise<ApiDataResponse<ApiEntity>> {
  return apiGet<ApiDataResponse<ApiEntity>>(endpoints.users.me)
}

export function getUserProfileById(
  userId: string,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiGet<ApiDataResponse<ApiEntity>>(endpoints.users.byId(userId))
}
