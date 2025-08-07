import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres')
    .regex(/^[a-zA-Z\sÀ-ſ]+$/, 'El nombre solo puede contener letras y espacios'),
  
  phone: z.string()
    .regex(/^(\+52\s?)?[0-9]{10}$/, 'Formato válido: +52 55 1234 5678 o 5512345678')
    .transform(val => {
      // Normalizar el formato del teléfono
      const cleaned = val.replace(/\D/g, '')
      if (cleaned.length === 10) {
        return `+52 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 6)} ${cleaned.slice(6)}`
      }
      return val
    }),
  
  email: z.string()
    .email('Por favor ingresa un email válido')
    .max(100, 'El email no puede exceder 100 caracteres')
    .toLowerCase(),
  
  service: z.enum(['anillo-compromiso', 'joyeria-personalizada', 'restauracion'], {
    required_error: 'Por favor selecciona un servicio',
    invalid_type_error: 'Servicio no válido'
  }),
  
  message: z.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede exceder 500 caracteres')
    .trim()
})

export type ContactFormData = z.infer<typeof contactSchema>

// Opciones para el select de servicios
export const serviceOptions = [
  { value: 'anillo-compromiso', label: 'Anillos de Compromiso' },
  { value: 'joyeria-personalizada', label: 'Joyería Personalizada' },
  { value: 'restauracion', label: 'Restauración de Joyas' }
] as const

// Esquema para validación de newsletter (si se necesita en el futuro)
export const newsletterSchema = z.object({
  email: z.string().email('Email no válido'),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar los términos y condiciones'
  })
})

export type NewsletterData = z.infer<typeof newsletterSchema>