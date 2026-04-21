import { apiRequest, type ApiRequestOptions } from './request'

type GetOptions = Omit<ApiRequestOptions, 'body'>

export function apiGet<T>(path: string, options: GetOptions = {}): Promise<T> {
  return apiRequest<T>(path, 'GET', options)
}
