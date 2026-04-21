import type {
  FeatureItem,
  HeroContent,
  StatItem,
  TestimonialItem,
  WorkflowItem,
} from '../types/content'

export type ApiEntity = Record<string, unknown>

export type ApiDataResponse<T> = {
  data: T
}

export type ApiListResponse<T> = {
  data: T[]
}

export type ApiMessageResponse = {
  success: boolean
  message: string
}

export type AuthUser = ApiEntity & {
  id?: string
  email?: string
  name?: string
  role?: string
}

export type AuthResponse = {
  user: AuthUser
  accessToken: string
}

export type SignupRequest = {
  name: string
  email: string
  password: string
  organizationName?: string
  workspaceName?: string
}

export type LoginRequest = {
  email: string
  password: string
}

export type LogoutRequest = {
  refreshToken?: string
}

export type RefreshTokenRequest = {
  refreshToken?: string
}

export type ForgotPasswordRequest = {
  email: string
}

export type ResetPasswordRequest = {
  token: string
  newPassword: string
}

export type CreateOrganizationRequest = {
  name: string
}

export type CreateWorkspaceRequest = {
  organizationId: string
  name: string
}

export type InviteWorkspaceMemberRequest = {
  email: string
  role: string
}

export type PlatformTarget =
  | 'youtube'
  | 'tiktok'
  | 'instagram'
  | 'linkedin'
  | 'x'
  | 'facebook'
  | string

export type CreateProjectRequest = {
  workspaceId: string
  title: string
  description?: string
  platformTargets: PlatformTarget[]
}

export type UpdateClipRequest = {
  title?: string
  description?: string
  startTime?: number
  endTime?: number
  status?: string
}

export type AddCaptionsRequest = {
  language?: string
  style?: string
  content: string
}

export type RequestClipExportRequest = {
  format: string
  resolution: string
}

export type UpdateLandingHeroRequest = {
  title?: string
  subtitle?: string
  image?: string
  cta?: ApiEntity
}

export type UpdateLandingMarqueeRequest = {
  content?: string[] | string
}

export type UpdateLandingFeaturesRequest = {
  features: FeatureItem[]
}

export type UpdateLandingWorkflowRequest = {
  steps: WorkflowItem[]
}

export type UpdateLandingTestimonialsRequest = {
  testimonials: TestimonialItem[]
}

export type UpdateLandingStatsRequest = {
  stats: StatItem[]
}

export type LandingPayload = {
  hero?:
    | (Partial<HeroContent> & {
        cta?: {
          primary?: string
          secondary?: string
        }
        image?: string
      })
    | null
  marquee?: string[] | { content?: string[] | string } | null
  features?: FeatureItem[] | null
  workflow?: WorkflowItem[] | { steps?: WorkflowItem[] } | null
  testimonials?: TestimonialItem[] | null
  stats?: StatItem[] | null
  cta?: ApiEntity | null
}

export type HealthResponse = {
  success: boolean
  status: string
}
