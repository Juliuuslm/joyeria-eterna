'use client'

const values = [
  {
    title: 'Excelencia Artesanal',
    description: 'Cada pieza creada con técnicas tradicionales garantizando calidad excepcional. Nuestros artesanos dominan técnicas centenarias que se combinan con innovación contemporánea.'
  },
  {
    title: 'Exclusividad',
    description: 'Trabajamos con oro, platino y diamantes certificados para piezas exclusivas. Cada joya es única, diseñada especialmente para quien la llevará con orgullo.'
  },
  {
    title: 'Legado Familiar',
    description: 'Creamos joyas que se transmiten de generación en generación. Nuestras piezas están hechas para perdurar, llevando historias y memorias a través del tiempo.'
  }
]

export default function Values() {
  return (
    <section id="valores" className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-luxury-gold rounded-full" />
        <div className="absolute top-32 right-16 w-24 h-24 border border-luxury-gold rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-32 h-32 border border-luxury-gold rounded-full" />
        <div className="absolute bottom-40 right-10 w-16 h-16 border border-luxury-gold rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Nuestros
            <span className="text-luxury-gold block">Valores</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Los principios que guían cada decisión, cada diseño y cada interacción 
            con nuestros clientes. Estos valores son el corazón de Joyería Eterna.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="card-luxury text-center group hover:scale-105 transition-all duration-300"
            >
              {/* Content */}
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-200 leading-relaxed">
                {value.description}
              </p>
              
              {/* Decorative line */}
              <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-white font-light italic mb-6">
              "En Joyería Eterna, no solo vendemos joyas; creamos memorias, 
              celebramos momentos y construimos legados que perdurarán para siempre."
            </blockquote>
            <cite className="text-luxury-gold font-semibold">
              — María González Rodríguez, Fundadora
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}