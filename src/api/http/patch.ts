import { apiRequest, type ApiRequestOptions } from './request'

type PatchOptions = Omit<ApiRequestOptions, 'body'>

export function apiPatch<T>(
  path: string,
  body?: ApiRequestOptions['body'],
  options: PatchOptions = {},
): Promise<T> {
  return apiRequest<T>(path, 'PATCH', {
    ...options,
    body,
  })
}
