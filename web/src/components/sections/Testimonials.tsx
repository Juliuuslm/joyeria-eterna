'use client'

const testimonial = {
  name: 'Ana Sofía Herrera',
  location: 'Polanco, CDMX',
  service: 'Anillo de Compromiso',
  rating: 5,
  quote: 'María no solo diseñó un anillo, diseñó el momento perfecto. Tres meses después, aún recibo felicitaciones por "la propuesta más hermosa". Cada vez que veo su anillo, recuerdo el momento que cambió nuestras vidas para siempre.',
  date: 'Octubre 2024',
  image: '👩‍🦰' // Emoji as placeholder for image
}

const additionalTestimonials = [
  {
    name: 'Carlos M.',
    service: 'Propuesta en Cancún',
    quote: 'Para mi propuesta en Cancún necesitaba algo extraordinario. María creó una pieza que brilló más que el atardecer caribeño. Ella dijo sí antes de ver el anillo.',
    rating: 5
  },
  {
    name: 'Lucia R.',
    service: 'Restauración Premium',
    quote: 'La joya de mi abuela parecía perdida para siempre. María no solo la restauró, devolvió las memorias que creímos perdidas.',
    rating: 5
  },
  {
    name: 'Miguel A.',
    service: 'Anillo Exclusivo',
    quote: 'Pieza única - Nunca la han repetido. El proceso fue perfecto, resultado extraordinario.',
    rating: 5
  }
]

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-2xl ${
          i < rating ? 'text-luxury-gold' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ))
  }

  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxury-dark mb-4 md:mb-6">
            Lo que Dicen
            <span className="text-luxury-gold block">Nuestros Clientes</span>
          </h2>
          <p className="text-base md:text-xl text-luxury-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Más que clientes satisfechos, hemos creado historias de amor eternas. 
            Cada testimonio refleja un momento único que ayudamos a eternizar en oro y diamantes.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="bg-luxury-dark backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-luxury-gold/20">
            <div className="text-center mb-6 md:mb-8">
              <div className="flex justify-center mb-3 md:mb-4">
                {renderStars(testimonial.rating)}
              </div>
            </div>
            
            <blockquote className="text-base md:text-xl text-gray-200 leading-relaxed text-center mb-6 md:mb-8 italic">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="text-center">
              <h4 className="font-serif text-lg md:text-xl font-bold text-white mb-2">
                {testimonial.name}
              </h4>
              <p className="text-sm md:text-base text-gray-200 mb-1">
                {testimonial.service} • {testimonial.location}
              </p>
              <p className="text-sm md:text-base text-luxury-gold font-medium">
                {testimonial.date}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {additionalTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-luxury-dark/90 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-luxury-dark transition-all duration-300 hover:scale-105 border border-luxury-gold/20"
            >
              <div className="flex justify-center mb-2 md:mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-200 mb-3 md:mb-4 text-center italic text-sm md:text-base">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="text-center">
                <h5 className="font-serif font-bold text-white mb-1 text-sm md:text-base">
                  {testimonial.name}
                </h5>
                <p className="text-xs text-luxury-gold">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators - Premium Badges */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Rating Badge */}
            <div className="bg-luxury-dark/90 backdrop-blur-sm border-2 border-luxury-gold/60 rounded-full px-6 py-3 hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="font-bold text-luxury-gold text-lg md:text-xl">⭐ 5.0</div>
                <div className="text-xs text-gray-300 font-medium">Calificación</div>
              </div>
            </div>
            
            {/* Clients Badge */}
            <div className="bg-luxury-dark/90 backdrop-blur-sm border-2 border-luxury-gold/60 rounded-full px-6 py-3 hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="font-bold text-luxury-gold text-lg md:text-xl">500+</div>
                <div className="text-xs text-gray-300 font-medium">Clientes Felices</div>
              </div>
            </div>
            
            {/* Satisfaction Badge */}
            <div className="bg-luxury-dark/90 backdrop-blur-sm border-2 border-luxury-gold/60 rounded-full px-6 py-3 hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="font-bold text-luxury-gold text-lg md:text-xl">💎 100%</div>
                <div className="text-xs text-gray-300 font-medium">Satisfacción</div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="bg-luxury-dark/90 backdrop-blur-sm border-2 border-luxury-gold/60 rounded-full px-6 py-3 hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="font-bold text-luxury-gold text-lg md:text-xl">8+</div>
                <div className="text-xs text-gray-300 font-medium">Años Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}