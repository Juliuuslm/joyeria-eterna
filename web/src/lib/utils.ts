import { clsx, type ClassValue } from 'clsx'

/**
 * Utilidad para combinar clases CSS condicionalmente
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/**
 * Formatea un número de teléfono mexicano
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.length === 10) {
    return `+52 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 6)} ${cleaned.slice(6)}`
  }
  
  if (cleaned.length === 12 && cleaned.startsWith('52')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 8)} ${cleaned.slice(8)}`
  }
  
  return phone
}

/**
 * Valida si un string es un email válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Genera un mensaje de WhatsApp formateado
 */
export function generateWhatsAppMessage(data: {
  name: string
  phone: string
  email: string
  service: string
  message: string
}): string {
  return `¡Hola! Me contacto desde la página web de Joyería Eterna.

👤 *Nombre:* ${data.name}
📞 *Teléfono:* ${data.phone}
✉️ *Email:* ${data.email}
📎 *Servicio de interés:* ${data.service}

💬 *Mensaje:*
${data.message}

¡Espero su respuesta!`
}

/**
 * Genera URL de WhatsApp con mensaje pre-formateado
 */
export function generateWhatsAppURL(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`
}

/**
 * Trunca un texto a una longitud específica
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Capitaliza la primera letra de cada palabra
 */
export function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (letter) => letter.toUpperCase())
}

/**
 * Formatea una fecha en español
 */
export function formatDate(date: Date | string | number): string {
  const d = new Date(date)
  return d.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Formatea un precio en pesos mexicanos
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(amount)
}

/**
 * Debounce function para optimizar rendimiento
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}

/**
 * Throttle function para limitar ejecuciones
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Obtiene las iniciales de un nombre
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/**
 * Valida si una cadena contiene solo letras y espacios
 */
export function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\sÀ-ſ]+$/
  return nameRegex.test(name.trim())
}

/**
 * Genera un ID único simple
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * Convierte un texto a slug (URL-friendly)
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .trim()
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Remover guiones duplicados
}

/**
 * Determina si es un dispositivo móvil
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

/**
 * Copia texto al portapapeles
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Error copying to clipboard:', error)
    return false
  }
}

/**
 * Formatea números con separadores de miles
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-MX').format(num)
}