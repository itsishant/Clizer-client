const accessTokenStorageKey = 'clizer_access_token'

let accessToken = readInitialToken()

function readInitialToken(): string | null {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage.getItem(accessTokenStorageKey)
}

export function getAccessToken(): string | null {
  return accessToken
}

export function setAccessToken(token: string): void {
  accessToken = token

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(accessTokenStorageKey, token)
  }
}

export function clearAccessToken(): void {
  accessToken = null

  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(accessTokenStorageKey)
  }
}
