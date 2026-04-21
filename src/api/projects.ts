import { endpoints } from './endpoints'
import { apiGet } from './http/get'
import { apiPost } from './http/post'
import type {
  ApiDataResponse,
  ApiEntity,
  ApiListResponse,
  CreateProjectRequest,
} from './types'

export function createProject(
  payload: CreateProjectRequest,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPost<ApiDataResponse<ApiEntity>>(endpoints.projects.root, payload)
}

export function listProjects(): Promise<ApiListResponse<ApiEntity>> {
  return apiGet<ApiListResponse<ApiEntity>>(endpoints.projects.root)
}

export function getProjectById(projectId: string): Promise<ApiDataResponse<ApiEntity>> {
  return apiGet<ApiDataResponse<ApiEntity>>(endpoints.projects.byId(projectId))
}

export function uploadProjectVideo(
  projectId: string,
  videoFile: File,
): Promise<ApiDataResponse<ApiEntity>> {
  const formData = new FormData()
  formData.append('video', videoFile)

  return apiPost<ApiDataResponse<ApiEntity>>(endpoints.projects.upload(projectId), formData)
}

export function getProjectStatus(
  projectId: string,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiGet<ApiDataResponse<ApiEntity>>(endpoints.projects.status(projectId))
}

export function startProjectProcessing(
  projectId: string,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiPost<ApiDataResponse<ApiEntity>>(endpoints.projects.process(projectId))
}

export function listProjectJobs(
  projectId: string,
): Promise<ApiListResponse<ApiEntity>> {
  return apiGet<ApiListResponse<ApiEntity>>(endpoints.projects.jobs(projectId))
}

export function listProjectClips(
  projectId: string,
): Promise<ApiListResponse<ApiEntity>> {
  return apiGet<ApiListResponse<ApiEntity>>(endpoints.projects.clips(projectId))
}

export function getProjectExport(
  projectId: string,
): Promise<ApiDataResponse<ApiEntity>> {
  return apiGet<ApiDataResponse<ApiEntity>>(endpoints.projects.export(projectId))
}
