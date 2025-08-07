'use client'

import Button from '@/components/ui/Button'

const services = [
  {
    name: 'Anillos de Compromiso',
    description: 'Creamos el anillo que garantizará un "sí" inolvidable. Cada diamante es seleccionado por nuestros expertos y cada diseño es único - nunca repetimos una pieza. El resultado: el momento más importante de sus vidas, eternizado en oro.',
    features: [
      'Diamantes certificados',
      'Oro 18k y platino',
      'Diseño personalizado',
      'Garantía de por vida'
    ],
    whatsappMessage: 'Buenos días. Estamos buscando crear el anillo de compromiso perfecto para nuestro momento especial. ¿Podrían ayudarnos a diseñar una pieza única que capture nuestro amor?'
  },
  {
    name: 'Joyería Personalizada',
    description: 'Usted tiene una historia que merece ser contada en oro. Nuestro proceso de diseño personalizado convierte sus memorias más preciadas en una joya que habla sin palabras de quién es y a quién ama.',
    features: [
      'Consultoría de diseño',
      'Bocetos digitales 3D',
      'Materiales premium',
      'Proceso colaborativo'
    ],
    whatsappMessage: 'Buenos días. Tengo una historia especial que me gustaría convertir en una joya única. ¿Podríamos agendar una consulta para transformar mis memorias en oro?'
  },
  {
    name: 'Restauración',
    description: 'Devolvemos la vida a las joyas familiares más preciadas. Utilizamos técnicas especializadas para restaurar no solo su belleza original, sino el valor sentimental que creía perdido. Cada pieza restaurada viene con documentación completa del proceso.',
    features: [
      'Evaluación gratuita',
      'Técnicas tradicionales',
      'Preservación histórica',
      'Antes y después documentado'
    ],
    whatsappMessage: 'Buenos días. Tengo una joya familiar con mucho valor sentimental que necesita restauración. ¿Podrían ayudarme a devolver la vida a estas memorias familiares?'
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
            Cada servicio que ofrecemos nace de una promesa: eternizar los momentos que importan. 
            Desde crear el anillo que sellará su compromiso hasta devolver la vida a las joyas que 
            guardan la historia de su familia.
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
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto relative z-10">
              Cada cliente es único y cada proyecto especial. Contáctanos para 
              discutir tu idea y crear algo verdaderamente extraordinario.
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