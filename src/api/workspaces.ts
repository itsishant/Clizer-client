import { endpoints } from './endpoints'
import { apiGet } from './http/get'
import { apiPost } from './http/post'
import type {
  ApiDataResponse,
  ApiEntity,
  ApiListResponse,
  ApiMessageResponse,
  CreateWorkspaceRequest,
  InviteWorkspaceMemberRequest,
} from './types'

export function createWorkspace(
  payload: CreateWorkspaceRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPost<ApiDataResponse<ApiEntity>>(endpoints.workspaces.root, payload)
}

export function getWorkspaceById(
  workspaceId: string,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiGet<ApiDataResponse<ApiEntity>>(endpoints.workspaces.byId(workspaceId))
}

export function inviteWorkspaceMember(
  workspaceId: string,
  payload: InviteWorkspaceMemberRequest,
): Promise<ApiMessageResponse> {
  return apiPost<ApiMessageResponse>(endpoints.workspaces.invite(workspaceId), payload)
}

export function listWorkspaceMembers(
  workspaceId: string,
): Promise<ApiListResponse<ApiEntity>> {
  return apiGet<ApiListResponse<ApiEntity>>(endpoints.workspaces.members(workspaceId))
}
