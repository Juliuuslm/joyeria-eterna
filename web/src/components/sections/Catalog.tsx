'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

const categories = [
  { id: 'all', name: 'Todos', count: 16 },
  { id: 'anillos', name: 'Anillos de Compromiso', count: 4 },
  { id: 'alianzas', name: 'Alianzas de Boda', count: 4 },
  { id: 'collares', name: 'Collares y Pulseras', count: 4 },
  { id: 'pendientes', name: 'Pendientes', count: 4 },
]

const products = [
  // Anillos de Compromiso
  {
    id: 1,
    category: 'anillos',
    name: 'Anillo Solitario Clásico',
    material: 'Oro 18k y Diamante',
    description: 'Diseño atemporal con diamante certificado',
    image: '/images/catalog/Anillo Solitario clasico.jpg'
  },
  {
    id: 2,
    category: 'anillos',
    name: 'Anillo Vintage Elegante',
    material: 'Platino y Diamantes',
    description: 'Inspirado en diseños clásicos europeos',
    image: '/images/catalog/Anillo Solitario vintage.jpg'
  },
  {
    id: 3,
    category: 'anillos',
    name: 'Anillo Moderno Minimalista',
    material: 'Oro 18k y Diamante',
    description: 'Líneas limpias y elegancia contemporánea',
    image: '/images/catalog/Anillo Moderno minimalista.jpg'
  },
  {
    id: 4,
    category: 'anillos',
    name: 'Anillo Halo Radiante',
    material: 'Platino y Diamantes',
    description: 'Diamante central rodeado de brillantes',
    image: '/images/catalog/Anillo Halo radiante.jpeg'
  },
  // Alianzas de Boda
  {
    id: 5,
    category: 'alianzas',
    name: 'Alianza Clásica Lisa',
    material: 'Oro 18k',
    description: 'Elegancia tradicional en oro macizo',
    image: '/images/catalog/Alianza Clasica lisa.jpg'
  },
  {
    id: 6,
    category: 'alianzas',
    name: 'Alianza con Diamantes',
    material: 'Platino y Diamantes',
    description: 'Brillantes incrustados en banda continua',
    image: '/images/catalog/Alianza Con diamantes.jpg'
  },
  {
    id: 7,
    category: 'alianzas',
    name: 'Alianza Texturizada',
    material: 'Oro 18k',
    description: 'Acabado martillado artesanal único',
    image: '/images/catalog/Alianza texturizada.jpg'
  },
  {
    id: 8,
    category: 'alianzas',
    name: 'Alianza Bicolor',
    material: 'Oro 18k y Platino',
    description: 'Combinación sofisticada de metales',
    image: '/images/catalog/Alianza bicolor.jpg'
  },
  // Collares y Pulseras
  {
    id: 9,
    category: 'collares',
    name: 'Collar de Diamantes',
    material: 'Oro 18k y Diamantes',
    description: 'Cadena delicada con diamantes graduados',
    image: '/images/catalog/Collar De  diamantes.jpg'
  },
  {
    id: 10,
    category: 'collares',
    name: 'Pulsera Tennis',
    material: 'Platino y Diamantes',
    description: 'Línea continua de diamantes brillantes',
    image: '/images/catalog/Pulsera tennis.jpg'
  },
  {
    id: 11,
    category: 'collares',
    name: 'Collar Perlas y Oro',
    material: 'Oro 18k y Perlas',
    description: 'Elegancia clásica atemporal',
    image: '/images/catalog/Collar Perlas y oro.jpg'
  },
  {
    id: 12,
    category: 'collares',
    name: 'Pulsera Artesanal',
    material: 'Platino',
    description: 'Diseño exclusivo trabajado a mano',
    image: '/images/catalog/Pulsera artesanal.jpg'
  },
  // Pendientes
  {
    id: 13,
    category: 'pendientes',
    name: 'Pendientes Solitario',
    material: 'Oro 18k y Diamantes',
    description: 'Clásicos diamantes en garras de oro',
    image: '/images/catalog/Anillo solitario.webp'
  },
  {
    id: 14,
    category: 'pendientes',
    name: 'Pendientes Largos',
    material: 'Platino y Piedras Preciosas',
    description: 'Elegantes pendientes con movimiento',
    image: '/images/catalog/Pendientes largos.jpg'
  },
  {
    id: 15,
    category: 'pendientes',
    name: 'Pendientes Aro',
    material: 'Oro 18k',
    description: 'Diseño moderno y versátil',
    image: '/images/catalog/Pendientes aro.jpg'
  },
  {
    id: 16,
    category: 'pendientes',
    name: 'Pendientes Vintage',
    material: 'Platino y Diamantes',
    description: 'Inspiración art déco sofisticada',
    image: '/images/catalog/Pendientes vintage.jpg'
  },
]

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const handleProductInquiry = (product) => {
    const message = `¡Hola! Me interesa conocer más información sobre el ${product.name} en ${product.material}. ¿Podrían darme más detalles sobre disponibilidad y precio?`
    const url = `https://wa.me/525512345678?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const openModal = (product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  return (
    <section id="catalogo" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxury-dark mb-6">
            Nuestro
            <span className="text-luxury-gold block">Catálogo</span>
          </h2>
          <p className="text-lg md:text-xl text-luxury-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección de joyas artesanales de alta gama. 
            Cada pieza está cuidadosamente elaborada con materiales premium y técnicas tradicionales.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-luxury-gold text-white shadow-lg'
                  : 'bg-white/60 text-luxury-dark hover:bg-white/80 hover:shadow-md'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-luxury-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] group relative before:absolute before:inset-0 before:bg-gradient-to-t before:from-luxury-gold/0 before:to-luxury-gold/0 before:hover:from-luxury-gold/5 before:hover:to-luxury-gold/0 before:transition-all before:duration-500 before:rounded-2xl before:opacity-0 hover:before:opacity-100"
            >
              {/* Product Image */}
              <div 
                className="aspect-square relative overflow-hidden cursor-pointer"
                onClick={() => openModal(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                {/* Sparkle effect overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-luxury-gold rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-luxury-gold rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="bg-luxury-gold rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 rotate-0 group-hover:rotate-12 shadow-lg group-hover:shadow-2xl">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-luxury-gold font-medium mb-2">
                  {product.material}
                </p>
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">
                    Consultar precio
                  </span>
                  <Button
                    onClick={() => handleProductInquiry(product)}
                    size="sm"
                    className="text-sm"
                  >
                    Solicitar Info
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-luxury-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="aspect-square">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8">
                  <h3 className="font-serif text-3xl font-bold text-luxury-dark mb-4">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-luxury-gold font-semibold text-lg mb-4">
                    {selectedProduct.material}
                  </p>
                  <p className="text-luxury-dark-secondary mb-6 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-luxury-dark mb-3">Características:</h4>
                    <ul className="space-y-2 text-sm text-luxury-dark-secondary">
                      <li className="flex items-center">
                        <span className="text-luxury-gold mr-2">✓</span>
                        Materiales certificados de alta calidad
                      </li>
                      <li className="flex items-center">
                        <span className="text-luxury-gold mr-2">✓</span>
                        Diseño artesanal único
                      </li>
                      <li className="flex items-center">
                        <span className="text-luxury-gold mr-2">✓</span>
                        Garantía de por vida
                      </li>
                      <li className="flex items-center">
                        <span className="text-luxury-gold mr-2">✓</span>
                        Posibilidad de personalización
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => handleProductInquiry(selectedProduct)}
                    className="w-full"
                  >
                    Solicitar Información por WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-luxury-dark rounded-2xl p-8 text-white">
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Creamos piezas completamente personalizadas según tus ideas y estilo. 
              Agenda una consulta gratuita para discutir tu proyecto especial.
            </p>
            <Button
              onClick={() => {
                const message = '¡Hola! Me interesa crear una pieza de joyería completamente personalizada. ¿Podríamos agendar una consulta gratuita para discutir mi proyecto?'
                const url = `https://wa.me/525512345678?text=${encodeURIComponent(message)}`
                window.open(url, '_blank')
              }}
              variant="secondary"
              className="!bg-white/10 !backdrop-blur-md !border-white/30 !text-white hover:!bg-white hover:!text-luxury-dark relative z-20"
            >
              <span className="relative z-30 drop-shadow-sm">Solicitar Diseño Personalizado</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}