'use client'

import Button from '@/components/ui/Button'

const services = [
  {
    name: 'Anillos de Compromiso',
    description: 'Diseños exclusivos que nunca se repiten. Diamantes certificados, oro 18k, proceso personalizado completo.',
    features: [
      'Diseño irrepetible garantizado',
      'Diamantes GIA certificados',
      'Solo materiales premium',
      'Garantía de exclusividad'
    ],
    whatsappMessage: 'Hola, buscamos crear un anillo de compromiso único. ¿Podrían ayudarnos con el proceso de diseño personalizado?'
  },
  {
    name: 'Joyería Personalizada',
    description: 'Piezas completamente originales basadas en su historia personal. Proceso colaborativo de diseño desde boceto hasta entrega.',
    features: [
      'Consulta de diseño especializada',
      'Modelado 3D previo',
      'Materiales de alta gama',
      'Exclusividad garantizada'
    ],
    whatsappMessage: 'Me interesa crear una joya personalizada única. ¿Podríamos agendar una consulta para discutir mi proyecto?'
  },
  {
    name: 'Restauración Premium',
    description: 'Restauración de joyas familiares con técnicas tradicionales. Evaluación gratuita y documentación completa del proceso.',
    features: [
      'Evaluación sin costo',
      'Técnicas artesanales tradicionales',
      'Preservación de valor histórico',
      'Documentación fotográfica completa'
    ],
    whatsappMessage: 'Tengo una joya familiar que requiere restauración especializada. ¿Podrían evaluarla sin costo?'
  }
]

export default function Services() {
  const handleServiceInquiry = (message: string) => {
    const url = `https://wa.me/525512345678?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxury-dark mb-4 md:mb-6">
            Nuestros
            <span className="text-luxury-gold block">Servicios</span>
          </h2>
          <p className="text-base md:text-xl text-luxury-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Tres servicios especializados que garantizan exclusividad absoluta. 
            Cada proyecto es único, cada resultado irrepetible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative bg-luxury-dark border border-luxury-gold/20 rounded-2xl p-6 md:p-8 shadow-lg group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-luxury-gold/60 before:absolute before:inset-0 before:bg-gradient-to-br before:from-luxury-gold/0 before:via-luxury-gold/0 before:to-luxury-gold/5 before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100 after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-2xl after:bg-gradient-to-br after:from-luxury-gold/20 after:via-transparent after:to-luxury-gold/10 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-luxury-gold/10 rounded-full transform translate-x-4 -translate-y-4 group-hover:bg-luxury-gold/30 transition-all duration-500" />
              
              {/* Sparkle effects */}
              <div className="absolute top-4 left-6 w-1 h-1 bg-luxury-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:animate-pulse" />
              <div className="absolute top-8 right-8 w-1 h-1 bg-luxury-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 group-hover:animate-pulse" />
              <div className="absolute bottom-6 left-8 w-1 h-1 bg-luxury-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500 group-hover:animate-pulse" />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-center group-hover:text-luxury-gold transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-1.5 md:space-y-2 mb-6 md:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-200">
                      <span className="text-luxury-gold mr-2 md:mr-3 text-base md:text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <div className="text-center">
                  <Button
                    onClick={() => handleServiceInquiry(service.whatsappMessage)}
                    className="w-full min-h-[44px] text-sm md:text-base group-hover:bg-luxury-gold-secondary transition-colors duration-300"
                  >
                    Solicitar Consulta
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="relative bg-luxury-dark rounded-2xl p-8 text-white group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.25)] border border-luxury-gold/20 hover:border-luxury-gold/40 before:absolute before:inset-0 before:bg-gradient-to-br before:from-luxury-gold/0 before:to-luxury-gold/5 before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100">
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 relative z-10 group-hover:text-luxury-gold transition-colors duration-300">
              Proyecto Especial
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto relative z-10">
              ¿Tiene una visión única? Creamos piezas completamente originales 
              según sus especificaciones exactas.
            </p>
            <Button
              onClick={() => handleServiceInquiry('¡Hola! Tengo un proyecto especial en mente y me gustaría discutir las posibilidades con ustedes. ¿Podemos agendar una consulta?')}
              variant="secondary"
              className="!bg-white/10 !backdrop-blur-md !border-white/30 !text-white hover:!bg-white hover:!text-luxury-dark relative z-20"
            >
              <span className="relative z-30 drop-shadow-sm">Consulta Personalizada</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}