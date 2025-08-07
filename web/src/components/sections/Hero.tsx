'use client'

import Button from '@/components/ui/Button'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsAppContact = () => {
    const message = 'Buenos días. Mi pareja y yo estamos listos para crear nuestro momento eterno. ¿Cuándo podríamos conocer el proceso para diseñar nuestro anillo de compromiso?'
    const url = `https://wa.me/525512345678?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://r-storage.novalabss.com/u/635943e3-93c9-4aac-9485-8445691a8a87.jpg"
          alt="Joyería de lujo - Anillos y collares elegantes"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-luxury-dark/85" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-luxury-gold rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-luxury-gold rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-luxury-gold rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-luxury-gold rounded-full" />
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 md:mb-6 animate-fade-in-up">
            <span className="block">Joyería</span>
            <span className="text-luxury-gold block">Eterna</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl mb-4 md:mb-6 text-luxury-pearl font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            El Anillo Que Hará Que Diga Sí Para Siempre
          </p>

          {/* Trust Badges Compact */}
          <div className="mb-6 md:mb-8 flex flex-wrap justify-center gap-2 md:gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center bg-white/8 backdrop-blur-md border border-luxury-gold/60 rounded-full px-3 py-1">
              <span className="text-luxury-gold font-bold text-xs md:text-sm">CERTIFICACIÓN GIA</span>
            </div>
            <div className="inline-flex items-center bg-white/8 backdrop-blur-md border border-luxury-gold/60 rounded-full px-3 py-1">
              <span className="text-luxury-gold font-bold text-xs md:text-sm">GARANTÍA DE POR VIDA</span>
            </div>
            <div className="inline-flex items-center bg-white/8 backdrop-blur-md border border-luxury-gold/60 rounded-full px-3 py-1">
              <span className="text-luxury-gold font-bold text-xs md:text-sm">ORO 18K & PLATINO</span>
            </div>
          </div>

          {/* Exclusivity Badge */}
          <div className="flex justify-center mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3">
              <span className="text-white font-medium text-sm md:text-base">🔥 Solo 2 citas exclusivas disponibles en enero</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              onClick={() => scrollToSection('#catalogo')}
              variant="secondary"
              size="lg"
              className="text-base md:text-xl min-h-[56px] px-8 md:px-12 relative overflow-hidden group transition-all duration-500 bg-luxury-gold backdrop-blur-md border-2 border-luxury-gold text-white hover:bg-luxury-gold-secondary hover:shadow-[0_16px_48px_rgba(218,165,32,0.4)] active:scale-[0.98] font-bold before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:group-hover:translate-x-[100%] before:transition-transform before:duration-700"
            >
              <span className="relative z-20 drop-shadow-sm">Ver Anillos Únicos</span>
            </Button>
          </div>

          {/* Secondary Action */}
          <div className="mt-4 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
            <button
              onClick={handleWhatsAppContact}
              className="text-luxury-pearl hover:text-white transition-colors duration-300 text-sm md:text-base underline decoration-luxury-gold underline-offset-4 hover:decoration-white"
            >
              o reserve su cita exclusiva →
            </button>
          </div>

          
          {/* Trust Indicators - Subtle */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 text-xs text-gray-400 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center justify-center">
              <span className="text-luxury-gold mr-2">✓</span>
              <span>Diamantes Seleccionados</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-luxury-gold mr-2">✓</span>
              <span>Diseño Personalizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#nosotros')}
          className="text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}