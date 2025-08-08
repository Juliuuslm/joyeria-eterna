'use client'

const contactInfo = {
  address: {
    street: 'Av. Presidente Masaryk 123',
    neighborhood: 'Polanco V Sección',
    city: 'Ciudad de México',
    zipCode: '11560',
    full: 'Av. Presidente Masaryk 123, Polanco V Sección, 11560 Ciudad de México, CDMX'
  },
  phone: '+52 55 1234 5678',
  email: 'maria.gonzalez@joyeriaeterna.com',
  whatsapp: '525512345678',
  hours: {
    weekdays: 'Lunes - Viernes: 10:00 - 19:00',
    saturday: 'Sábados: 10:00 - 17:00',
    sunday: 'Domingos: Cerrado'
  }
}

export default function Contact() {
  const handleMapClick = () => {
    const address = encodeURIComponent(contactInfo.address.full)
    window.open(`https://maps.google.com/?q=${address}`, '_blank')
  }

  const handlePhoneClick = () => {
    window.open(`tel:${contactInfo.phone}`, '_blank')
  }

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = 'Hola, me interesa agendar una consulta privada para conocer las colecciones exclusivas de Joyería Eterna. ¿Cuándo tienen disponibilidad?'
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxury-dark mb-4 md:mb-6">
            Reserve Su
            <span className="text-luxury-gold block">Consulta Exclusiva</span>
          </h2>
          <p className="text-base md:text-xl text-luxury-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Atendemos por cita previa en nuestro atelier de Polanco. 
            <strong className="text-luxury-gold">Consulta gratuita y sin compromiso.</strong>
          </p>
        </div>

        {/* Simplified Contact - Primary CTAs */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-dark mb-6 md:mb-8">
            Contacto Directo
          </h3>
          
          {/* Primary Contact Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            {/* WhatsApp CTA - Primary */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto flex-1 relative overflow-hidden group transition-all duration-500 bg-green-600 hover:bg-green-700 text-white hover:shadow-[0_12px_32px_rgba(34,197,94,0.4)] active:scale-[0.98] font-bold py-4 px-8 rounded-2xl flex items-center justify-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:group-hover:translate-x-[100%] before:transition-transform before:duration-700"
            >
              <svg className="w-6 h-6 mr-3 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
              </svg>
              <span className="relative z-10 text-lg">Consulta WhatsApp</span>
            </button>
            
            {/* Phone CTA - Secondary */}
            <button
              onClick={handlePhoneClick}
              className="w-full sm:w-auto flex-1 relative overflow-hidden group transition-all duration-500 bg-luxury-gold hover:bg-luxury-gold-secondary text-luxury-dark hover:shadow-[0_12px_32px_rgba(218,165,32,0.4)] active:scale-[0.98] font-bold py-4 px-8 rounded-2xl flex items-center justify-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:group-hover:translate-x-[100%] before:transition-transform before:duration-700"
            >
              <svg className="w-6 h-6 mr-3 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative z-10 text-lg">Llamar Ahora</span>
            </button>
          </div>
          
          <p className="text-luxury-dark-secondary mt-4 text-sm">
            Respuesta en menos de 2 horas • Atención personalizada
          </p>
        </div>

        {/* Simplified Location Info */}
        <div className="bg-luxury-dark rounded-2xl p-6 md:p-8 text-center text-white max-w-4xl mx-auto">
          <h4 className="font-serif text-xl md:text-2xl font-bold mb-4">
            Nuestra Boutique en Polanco
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h5 className="font-semibold text-luxury-gold mb-2">Ubicación</h5>
              <p className="text-gray-200 text-sm">
                {contactInfo.address.street}<br/>
                {contactInfo.address.neighborhood}<br/>
                {contactInfo.address.city}, {contactInfo.address.zipCode}
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-luxury-gold mb-2">Horarios</h5>
              <div className="text-gray-200 text-sm space-y-1">
                <p>{contactInfo.hours.weekdays}</p>
                <p>{contactInfo.hours.saturday}</p>
                <p className="text-luxury-gold">{contactInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleMapClick}
            className="relative overflow-hidden group transition-all duration-400 bg-white/10 backdrop-blur-md border-2 border-luxury-gold/70 text-white hover:border-luxury-gold hover:bg-white/15 hover:shadow-[0_8px_24px_rgba(218,165,32,0.25)] active:scale-[0.98] font-semibold py-3 px-6 rounded-xl inline-flex items-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-luxury-gold/8 before:to-transparent before:translate-x-[-100%] before:group-hover:translate-x-[100%] before:transition-transform before:duration-600"
          >
            <span className="relative z-10">Ver en Google Maps</span>
            <svg className="w-4 h-4 ml-2 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}