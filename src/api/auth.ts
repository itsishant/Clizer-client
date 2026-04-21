import { endpoints } from './endpoints'
import { apiGet } from './http/get'
import { apiPost } from './http/post'
import { clearAccessToken, setAccessToken } from './tokenStore'
import type {
  ApiMessageResponse,
  AuthResponse,
  AuthUser,
  ForgotPasswordRequest,
  LoginRequest,
  LogoutRequest,
  RefreshTokenRequest,
  ResetPasswordRequest,
  SignupRequest,
} from './types'

export async function signup(payload: SignupRequest): Promise<AuthResponse> {
  const response = await apiPost<AuthResponse>(endpoints.auth.signup, payload, {
    withAuth: false,
  })

  setAccessToken(response.accessToken)
  return response
}

export async function login(payload: LoginRequest): Promise<AuthResponse> {
  const response = await apiPost<AuthResponse>(endpoints.auth.login, payload, {
    withAuth: false,
  })

  setAccessToken(response.accessToken)
  return response
}

export async function logout(payload: LogoutRequest = {}): Promise<ApiMessageResponse> {
  const response = await apiPost<ApiMessageResponse>(endpoints.auth.logout, payload)
  clearAccessToken()
  return response
}

export async function refreshAccessToken(
  payload: RefreshTokenRequest = {},
): Promise<AuthResponse> {
  const response = await apiPost<AuthResponse>(endpoints.auth.refresh, payload, {
    withAuth: false,
  })

  setAccessToken(response.accessToken)
  return response
}

export function forgotPassword(
  payload: ForgotPasswordRequest,
): Promise<ApiMessageResponse> {
  return apiPost<ApiMessageResponse>(endpoints.auth.forgotPassword, payload, {
    withAuth: false,
  })
}

export function resetPassword(
  payload: ResetPasswordRequest,
): Promise<ApiMessageResponse> {
  return apiPost<ApiMessageResponse>(endpoints.auth.resetPassword, payload, {
    withAuth: false,
  })
}

export function getAuthenticatedUser(): Promise<{ user: AuthUser }> {
  return apiGet<{ user: AuthUser }>(endpoints.auth.me)
}
