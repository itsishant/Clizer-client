import { apiRequest, type ApiRequestOptions } from './request'

type PutOptions = Omit<ApiRequestOptions, 'body'>

export function apiPut<T>(
  path: string,
  body?: ApiRequestOptions['body'],
  options: PutOptions = {},
): Promise<T> {
  return apiRequest<T>(path, 'PUT', {
    ...options,
    body,
  })
}
