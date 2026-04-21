import { endpoints } from './endpoints'
import { apiGet } from './http/get'
import { apiPatch } from './http/patch'
import { apiPost } from './http/post'
import type {
  AddCaptionsRequest,
  ApiDataResponse,
  ApiEntity,
  RequestClipExportRequest,
  UpdateClipRequest,
} from './types'

export function getClipById(clipId: string): Promise<ApiDataResponse<ApiEntity>> {
  return apiGet<ApiDataResponse<ApiEntity>>(endpoints.clips.byId(clipId))
}

export function updateClip(
  clipId: string,
  payload: UpdateClipRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPatch<ApiDataResponse<ApiEntity>>(endpoints.clips.byId(clipId), payload)
}

export function addClipCaptions(
  clipId: string,
  payload: AddCaptionsRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPost<ApiDataResponse<ApiEntity>>(endpoints.clips.captions(clipId), payload)
}

export function requestClipExport(
  clipId: string,
  payload: RequestClipExportRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPost<ApiDataResponse<ApiEntity>>(endpoints.clips.export(clipId), payload)
}
