import { endpoints } from './endpoints'
import { apiGet } from './http/get'
import { apiPost } from './http/post'
import type {
  ApiDataResponse,
  ApiEntity,
  ApiListResponse,
  CreateOrganizationRequest,
} from './types'

export function createOrganization(
  payload: CreateOrganizationRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPost<ApiDataResponse<ApiEntity>>(endpoints.organizations.root, payload)
}

export function listOrganizations(): Promise<ApiListResponse<ApiEntity>> {
  return apiGet<ApiListResponse<ApiEntity>>(endpoints.organizations.root)
}

export function getOrganizationById(
  organizationId: string,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiGet<ApiDataResponse<ApiEntity>>(endpoints.organizations.byId(organizationId))
}
