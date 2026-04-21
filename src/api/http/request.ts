import { API_BASE_URL } from '../config'
import { getAccessToken } from '../tokenStore'

export type ApiRequestOptions = Omit<
  RequestInit,
  'method' | 'body' | 'headers' | 'credentials'
> & {
  headers?: HeadersInit
  body?: BodyInit | Record<string, unknown> | null
  withAuth?: boolean
}

export class ApiError extends Error {
  status: number
  details: unknown

  constructor(message: string, status: number, details?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.details = details
  }
}

function shouldUseBodyInit(body: unknown): body is BodyInit {
  if (typeof body === 'string') {
    return true
  }

  if (body instanceof FormData || body instanceof Blob || body instanceof URLSearchParams) {
    return true
  }

  if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
    return true
  }

  if (typeof ReadableStream !== 'undefined' && body instanceof ReadableStream) {
    return true
  }

  return false
}

function toRequestBody(body: ApiRequestOptions['body']): BodyInit | undefined {
  if (body === null || body === undefined) {
    return undefined
  }

  if (shouldUseBodyInit(body)) {
    return body
  }

  return JSON.stringify(body)
}

function createHeaders(
  body: ApiRequestOptions['body'],
  customHeaders?: HeadersInit,
  withAuth: boolean = true,
): Headers {
  const headers = new Headers(customHeaders)

  if (withAuth) {
    const accessToken = getAccessToken()
    if (accessToken && !headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
  }

  if (
    body !== null &&
    body !== undefined &&
    !(body instanceof FormData) &&
    !headers.has('Content-Type')
  ) {
    headers.set('Content-Type', 'application/json')
  }

  return headers
}

function parseRawBody(rawBody: string): unknown {
  if (rawBody.length === 0) {
    return null
  }

  try {
    return JSON.parse(rawBody) as unknown
  } catch {
    return rawBody
  }
}

function getErrorMessage(details: unknown, fallbackMessage: string): string {
  if (!details || typeof details !== 'object') {
    return fallbackMessage
  }

  const maybeMessage = (details as { message?: unknown }).message
  if (typeof maybeMessage === 'string' && maybeMessage.length > 0) {
    return maybeMessage
  }

  return fallbackMessage
}

async function parseResponse<T>(response: Response): Promise<T> {
  const rawBody = await response.text()
  const details = parseRawBody(rawBody)

  if (!response.ok) {
    throw new ApiError(
      getErrorMessage(details, `Request failed with status ${response.status}`),
      response.status,
      details,
    )
  }

  return details as T
}

export function apiRequest<T>(
  path: string,
  method: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  const { body, headers, withAuth = true, ...rest } = options

  return fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    method,
    headers: createHeaders(body, headers, withAuth),
    body: toRequestBody(body),
    credentials: 'include',
  }).then(parseResponse<T>)
}
