import type { ContactFormData } from './validations'

const STORAGE_KEYS = {
  CONTACT_FORM_DRAFT: 'joyeria_eterna_contact_draft',
  USER_PREFERENCES: 'joyeria_eterna_preferences',
  VISIT_COUNT: 'joyeria_eterna_visits'
} as const

// Utilidad para verificar si localStorage está disponible
const isLocalStorageAvailable = (): boolean => {
  try {
    return typeof window !== 'undefined' && 'localStorage' in window
  } catch {
    return false
  }
}

// Utilidad genérica para obtener datos del localStorage
const getFromStorage = <T>(key: string, defaultValue: T): T => {
  if (!isLocalStorageAvailable()) return defaultValue
  
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.warn(`Error reading from localStorage key "${key}":`, error)
    return defaultValue
  }
}

// Utilidad genérica para guardar datos en localStorage
const setToStorage = <T>(key: string, value: T): void => {
  if (!isLocalStorageAvailable()) return
  
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.warn(`Error writing to localStorage key "${key}":`, error)
  }
}

// Utilidad para remover datos del localStorage
const removeFromStorage = (key: string): void => {
  if (!isLocalStorageAvailable()) return
  
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.warn(`Error removing from localStorage key "${key}":`, error)
  }
}

// === CONTACT FORM DRAFT ===

/**
 * Guarda un borrador del formulario de contacto
 */
export const saveFormDraft = (formData: Partial<ContactFormData>): void => {
  const draft = {
    ...formData,
    timestamp: Date.now(),
    version: '1.0'
  }
  setToStorage(STORAGE_KEYS.CONTACT_FORM_DRAFT, draft)
}

/**
 * Recupera el borrador del formulario de contacto
 */
export const getFormDraft = (): Partial<ContactFormData> | null => {
  const draft = getFromStorage<any>(STORAGE_KEYS.CONTACT_FORM_DRAFT, null)
  
  if (!draft) return null
  
  // Verificar que el draft no sea muy antiguo (7 días)
  const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000)
  if (draft.timestamp && draft.timestamp < sevenDaysAgo) {
    clearFormDraft()
    return null
  }
  
  // Remover campos de metadatos antes de retornar
  const { timestamp, version, ...formData } = draft
  return formData
}

/**
 * Limpia el borrador del formulario de contacto
 */
export const clearFormDraft = (): void => {
  removeFromStorage(STORAGE_KEYS.CONTACT_FORM_DRAFT)
}

// === USER PREFERENCES ===

interface UserPreferences {
  hasVisited: boolean
  preferredContactMethod: 'whatsapp' | 'email' | 'phone' | null
  interestedServices: string[]
  lastVisit: number
}

/**
 * Guarda las preferencias del usuario
 */
export const saveUserPreferences = (preferences: Partial<UserPreferences>): void => {
  const current = getUserPreferences()
  const updated = {
    ...current,
    ...preferences,
    lastVisit: Date.now()
  }
  setToStorage(STORAGE_KEYS.USER_PREFERENCES, updated)
}

/**
 * Recupera las preferencias del usuario
 */
export const getUserPreferences = (): UserPreferences => {
  return getFromStorage<UserPreferences>(STORAGE_KEYS.USER_PREFERENCES, {
    hasVisited: false,
    preferredContactMethod: null,
    interestedServices: [],
    lastVisit: Date.now()
  })
}

/**
 * Limpia las preferencias del usuario
 */
export const clearUserPreferences = (): void => {
  removeFromStorage(STORAGE_KEYS.USER_PREFERENCES)
}

// === VISIT TRACKING ===

/**
 * Incrementa el contador de visitas
 */
export const incrementVisitCount = (): number => {
  const currentCount = getVisitCount()
  const newCount = currentCount + 1
  setToStorage(STORAGE_KEYS.VISIT_COUNT, newCount)
  
  // Marcar que el usuario ha visitado
  saveUserPreferences({ hasVisited: true })
  
  return newCount
}

/**
 * Obtiene el número de visitas
 */
export const getVisitCount = (): number => {
  return getFromStorage<number>(STORAGE_KEYS.VISIT_COUNT, 0)
}

/**
 * Resetea el contador de visitas
 */
export const resetVisitCount = (): void => {
  removeFromStorage(STORAGE_KEYS.VISIT_COUNT)
}

// === ANALYTICS HELPERS ===

/**
 * Obtiene datos básicos de analítica del usuario
 */
export const getAnalyticsData = () => {
  const preferences = getUserPreferences()
  const visitCount = getVisitCount()
  
  return {
    isReturningUser: preferences.hasVisited && visitCount > 1,
    visitCount,
    lastVisit: preferences.lastVisit,
    preferredContactMethod: preferences.preferredContactMethod,
    interestedServices: preferences.interestedServices
  }
}

/**
 * Limpia todos los datos del localStorage
 */
export const clearAllStorageData = (): void => {
  Object.values(STORAGE_KEYS).forEach(key => {
    removeFromStorage(key)
  })
}

// === EXPORT TYPES ===
export type { UserPreferences }