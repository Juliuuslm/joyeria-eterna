'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, serviceOptions, type ContactFormData } from '@/lib/validations'
import { saveFormDraft, clearFormDraft, getFormDraft } from '@/lib/storage'
import Button from '@/components/ui/Button'
import { clsx } from 'clsx'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: undefined,
      message: ''
    }
  })

  // Watch form values para auto-save
  const watchedValues = watch()

  // Cargar draft al montar el componente
  useState(() => {
    const draft = getFormDraft()
    if (draft) {
      Object.entries(draft).forEach(([key, value]) => {
        setValue(key as keyof ContactFormData, value)
      })
    }
  })

  // Auto-save draft cada vez que cambian los valores
  useState(() => {
    if (Object.values(watchedValues).some(val => val && val.length > 0)) {
      saveFormDraft(watchedValues)
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Crear mensaje para WhatsApp
      const whatsappMessage = `¡Hola! Me contacto desde la página web de Joyería Eterna.

👤 *Nombre:* ${data.name}
📞 *Teléfono:* ${data.phone}
✉️ *Email:* ${data.email}
📎 *Servicio de interés:* ${serviceOptions.find(opt => opt.value === data.service)?.label}

💬 *Mensaje:*
${data.message}

¡Espero su respuesta!`

      // Simular envío (en producción podría ser una API)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Abrir WhatsApp
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappURL = `https://wa.me/525512345678?text=${encodedMessage}`
      window.open(whatsappURL, '_blank')

      // Limpiar formulario y draft
      reset()
      clearFormDraft()
      setSubmitStatus('success')

      // Reset status después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)

    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2 transition-colors duration-300 hover:text-luxury-gold cursor-pointer">
          Nombre Completo *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          placeholder="Tu nombre completo"
          className={clsx(
            'w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold transform hover:scale-[1.02] hover:bg-white/15 focus:scale-[1.02] focus:bg-white/15 focus:shadow-[0_8px_24px_rgba(218,165,32,0.15)]',
            errors.name 
              ? 'border-red-400 focus:border-red-400 animate-shake' 
              : 'border-white/30 focus:border-luxury-gold'
          )}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2 transition-colors duration-300 hover:text-luxury-gold cursor-pointer">
          Teléfono *
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder="+52 55 1234 5678"
          className={clsx(
            'w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold transform hover:scale-[1.02] hover:bg-white/15 focus:scale-[1.02] focus:bg-white/15 focus:shadow-[0_8px_24px_rgba(218,165,32,0.15)]',
            errors.phone 
              ? 'border-red-400 focus:border-red-400 animate-shake' 
              : 'border-white/30 focus:border-luxury-gold'
          )}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-300">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2 transition-colors duration-300 hover:text-luxury-gold cursor-pointer">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder="tu@email.com"
          className={clsx(
            'w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold transform hover:scale-[1.02] hover:bg-white/15 focus:scale-[1.02] focus:bg-white/15 focus:shadow-[0_8px_24px_rgba(218,165,32,0.15)]',
            errors.email 
              ? 'border-red-400 focus:border-red-400 animate-shake' 
              : 'border-white/30 focus:border-luxury-gold'
          )}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
        )}
      </div>

      {/* Servicio */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-200 mb-2 transition-colors duration-300 hover:text-luxury-gold cursor-pointer">
          Servicio de Interés *
        </label>
        <select
          {...register('service')}
          id="service"
          className={clsx(
            'w-full px-4 py-3 rounded-lg bg-white/10 border text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold transform hover:scale-[1.02] hover:bg-white/15 focus:scale-[1.02] focus:bg-white/15 focus:shadow-[0_8px_24px_rgba(218,165,32,0.15)]',
            errors.service 
              ? 'border-red-400 focus:border-red-400 animate-shake' 
              : 'border-white/30 focus:border-luxury-gold'
          )}
        >
          <option value="" className="bg-luxury-dark text-gray-300">
            Selecciona un servicio
          </option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value} className="bg-luxury-dark">
              {option.label}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-300">{errors.service.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2 transition-colors duration-300 hover:text-luxury-gold cursor-pointer">
          Mensaje *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          placeholder="Cuéntanos sobre tu proyecto, ideas, o cualquier pregunta que tengas..."
          className={clsx(
            'w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-300 resize-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold transform hover:scale-[1.02] hover:bg-white/15 focus:scale-[1.02] focus:bg-white/15 focus:shadow-[0_8px_24px_rgba(218,165,32,0.15)]',
            errors.message 
              ? 'border-red-400 focus:border-red-400 animate-shake' 
              : 'border-white/30 focus:border-luxury-gold'
          )}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-300">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full relative"
          size="lg"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
              Enviando...
            </div>
          ) : (
            'Enviar Mensaje por WhatsApp'
          )}
        </Button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
          <p className="text-green-300 text-sm text-center">
            ✓ ¡Mensaje enviado exitosamente! Te redirigimos a WhatsApp.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
          <p className="text-red-300 text-sm text-center">
            ✗ Hubo un error al enviar el mensaje. Por favor inténtalo de nuevo.
          </p>
        </div>
      )}

      {/* Privacy Note */}
      <div className="text-center">
        <p className="text-xs text-gray-300 leading-relaxed">
          Al enviar este formulario, aceptas que nos contactemos contigo para brindarte información 
          sobre nuestros servicios. Tu privacidad es importante para nosotros.
        </p>
      </div>
    </form>
  )
}