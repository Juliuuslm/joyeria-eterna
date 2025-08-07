'use client'

const footerLinks = {
  empresa: [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Nuestra Historia', href: '#nosotros' },
    { name: 'Valores', href: '#valores' },
  ],
  servicios: [
    { name: 'Anillos de Compromiso', href: '#servicios' },
    { name: 'Joyería Personalizada', href: '#servicios' },
    { name: 'Restauración', href: '#servicios' },
  ],
  contacto: [
    { name: 'Agendar Cita', href: '#contacto' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Ubicación', href: '#contacto' },
  ],
}

const horarios = [
  'Lunes - Viernes: 10:00 - 19:00',
  'Sábados: 10:00 - 17:00',
  'Domingos: Cerrado',
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-luxury-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Empresa */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-luxury-gold">
              Joyería Eterna
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Creando piezas de alta joyería que perduran en el tiempo.
              Ubicados en el corazón de Polanco, CDMX.
            </p>
            <div className="space-y-1 text-sm text-gray-300">
              {footerLinks.empresa.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block hover:text-luxury-gold transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-luxury-gold">
              Servicios
            </h3>
            <div className="space-y-1 text-sm text-gray-300">
              {footerLinks.servicios.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block hover:text-luxury-gold transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-luxury-gold">
              Contacto
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Polanco, Ciudad de México</p>
              <p>📞 +52 55 1234 5678</p>
              <p>✉š maria.gonzalez@joyeriaeterna.com</p>
              <div className="space-y-1 pt-2">
                {footerLinks.contacto.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block hover:text-luxury-gold transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-luxury-gold">
              Horarios
            </h3>
            <div className="space-y-1 text-sm text-gray-300">
              {horarios.map((horario, index) => (
                <p key={index}>{horario}</p>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-luxury-gold">
                Síguenos
              </h4>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a 
                  href="https://facebook.com/joyeriaeterna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 bg-luxury-gold/10 hover:bg-luxury-gold/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_16px_rgba(218,165,32,0.3)]"
                >
                  <svg className="w-5 h-5 text-luxury-gold group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/joyeriaeterna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 bg-luxury-gold/10 hover:bg-luxury-gold/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_16px_rgba(218,165,32,0.3)]"
                >
                  <svg className="w-5 h-5 text-luxury-gold group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/525512345678?text=¡Hola! Me interesa conocer más sobre Joyería Eterna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 bg-luxury-gold/10 hover:bg-luxury-gold/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_16px_rgba(218,165,32,0.3)]"
                >
                  <svg className="w-5 h-5 text-luxury-gold group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-luxury-gold/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; 2025 Joyería Eterna. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">
              Creado con amor y dedicación en Polanco, CDMX
            </p>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-luxury-gold/10">
            <p className="text-xs text-gray-400">
              Powered by <span className="text-luxury-gold hover:text-luxury-gold-secondary transition-colors duration-300 font-medium">Novalabss</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}