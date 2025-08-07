// === BUSINESS TYPES ===

export interface BusinessInfo {
  name: string
  owner: string
  location: string
  yearsInBusiness: number
  phone: string
  email: string
  whatsapp: string
  description: string
}

export interface Service {
  name: string
  icon: string
  description: string
  features?: string[]
  whatsappMessage?: string
}

export interface Value {
  title: string
  icon: string
  description: string
}

export interface Testimonial {
  name: string
  location?: string
  service: string
  rating: number
  quote: string
  date: string
  image?: string
}

// === FORM TYPES ===

export interface ContactFormData {
  name: string
  phone: string
  email: string
  service: 'anillo-compromiso' | 'joyeria-personalizada' | 'restauracion'
  message: string
}

export interface NewsletterData {
  email: string
  acceptTerms: boolean
}

// === UI COMPONENT TYPES ===

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface NavigationItem {
  name: string
  href: string
}

export interface ServiceOption {
  value: string
  label: string
}

// === STORAGE TYPES ===

export interface UserPreferences {
  hasVisited: boolean
  preferredContactMethod: 'whatsapp' | 'email' | 'phone' | null
  interestedServices: string[]
  lastVisit: number
}

export interface FormDraft {
  timestamp: number
  version: string
  data: Partial<ContactFormData>
}

// === ANALYTICS TYPES ===

export interface AnalyticsData {
  isReturningUser: boolean
  visitCount: number
  lastVisit: number
  preferredContactMethod: string | null
  interestedServices: string[]
}

// === API TYPES ===

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface ContactSubmission {
  id: string
  timestamp: number
  formData: ContactFormData
  status: 'pending' | 'sent' | 'failed'
  whatsappUrl?: string
}

// === SEO TYPES ===

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
}

// === ANIMATION TYPES ===

export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: string
}

export interface CounterProps {
  end: number
  duration: number
  suffix?: string
  prefix?: string
}

// === ERROR TYPES ===

export interface FormError {
  field: string
  message: string
  code?: string
}

export interface ValidationError {
  errors: FormError[]
  isValid: boolean
}

// === UTILITY TYPES ===

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// === COMPONENT STATE TYPES ===

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'
export type FormStatus = 'idle' | 'validating' | 'valid' | 'invalid'

// === THEME TYPES ===

export interface ThemeColors {
  luxury: {
    dark: string
    gold: string
    pearl: string
    'dark-secondary': string
    'gold-secondary': string
  }
}

export interface FontConfig {
  serif: string[]
  sans: string[]
}

// === BUSINESS DATA STRUCTURE ===

export interface BusinessData {
  business: BusinessInfo
  services: Service[]
  values: Value[]
  testimonials: Testimonial[]
  contact: {
    address: {
      street: string
      neighborhood: string
      city: string
      zipCode: string
      full: string
    }
    hours: {
      weekdays: string
      saturday: string
      sunday: string
    }
  }
}