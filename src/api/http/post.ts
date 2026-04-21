import { apiRequest, type ApiRequestOptions } from './request'

type PostOptions = Omit<ApiRequestOptions, 'body'>

export function apiPost<T>(
  path: string,
  body?: ApiRequestOptions['body'],
  options: PostOptions = {},
): Promise<T> {
  return apiRequest<T>(path, 'POST', {
    ...options,
    body,
  })
}
