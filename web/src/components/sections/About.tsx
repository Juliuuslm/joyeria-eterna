'use client'

import { useState, useEffect } from 'react'

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const timer = setInterval(() => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration, hasStarted])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [hasStarted])

  return (
    <span className="text-luxury-gold font-bold text-3xl md:text-5xl">
      {count}{suffix}
    </span>
  )
}

const stats = [
  {
    number: 8,
    suffix: '',
    label: 'Años de Experiencia',
    description: 'Perfeccionando técnicas artesanales'
  },
  {
    number: 200,
    suffix: '+',
    label: 'Diseños Únicos',
    description: 'Nunca repetidos, siempre exclusivos'
  },
  {
    number: 150,
    suffix: '+',
    label: 'Clientes Exclusivos',
    description: 'Historias únicas, joyas únicas'
  },
  {
    number: 100,
    suffix: '%',
    label: 'Artesanal',
    description: 'Técnica tradicional, diseño contemporáneo'
  }
]

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxury-dark mb-4 md:mb-6">
            Ocho Años Perfeccionando
            <span className="text-luxury-gold block">el Arte de lo Único</span>
          </h2>
          <p className="text-base md:text-xl text-luxury-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Ubicados en Polanco, nos especializamos en crear piezas completamente únicas. 
            Cada diseño nace de una historia personal y nunca se repite, garantizando 
            que su joya sea tan exclusiva como el momento que representa.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div>
            <div className="bg-luxury-dark rounded-2xl p-6 md:p-8 shadow-lg border border-luxury-gold/20">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Nuestra Historia
              </h3>
              <p className="text-sm md:text-base text-gray-200 mb-3 md:mb-4 leading-relaxed">
                Fundada en 2017 por María González, gemóloga certificada con especialización 
                en diseño de alta joyería. Establecimos nuestro atelier en Polanco para 
                atender clientela que valora la exclusividad absoluta.
              </p>
              <p className="text-sm md:text-base text-gray-200 mb-3 md:mb-4 leading-relaxed">
                Trabajamos exclusivamente con oro 18k, platino y diamantes certificados. 
                Cada pieza se diseña desde cero y nunca se reproduce, garantizando 
                exclusividad total para nuestros clientes.
              </p>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                <strong className="text-luxury-gold">Política de exclusividad:</strong> Una vez creada 
                su joya, el diseño se archiva permanentemente. Su pieza será única en el mundo.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-luxury-dark shadow-lg rounded-2xl p-6 md:p-8 border border-luxury-gold/30">
              <div className="text-center">
                <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 md:mb-6 relative">
                  <img
                    src="/images/maria-gonzales.jpeg"
                    alt="María González Rodríguez - Fundadora de Joyería Eterna"
                    className="w-full h-full object-cover rounded-full border-3 border-luxury-gold shadow-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-luxury-gold/50"></div>
                </div>
                <h4 className="font-serif text-lg md:text-xl font-bold text-white mb-2">
                  María González Rodríguez
                </h4>
                <p className="text-sm md:text-base text-gray-200 mb-2">Fundadora y Diseñadora Principal</p>
                <p className="text-xs text-luxury-gold font-medium mb-3 md:mb-4">Miembro Certificado del Consejo Mexicano de Joyería</p>
                <p className="text-xs md:text-sm text-gray-200 italic">
                  "Cada joya es una promesa de eternidad, 
                  un legado que trasciende el tiempo."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div id="stats-section" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-luxury-dark/90 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-luxury-dark transition-all duration-300 border border-luxury-gold/20">
              <div className="mb-2">
                <Counter 
                  end={stat.number} 
                  duration={2000} 
                  suffix={stat.suffix}
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-200">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}