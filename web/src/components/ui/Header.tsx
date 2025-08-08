'use client'

import { useState, useEffect } from 'react'
import Button from './Button'

const navigation = [
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Catálogo', href: '#catalogo' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-luxury-gold/10'
          : 'bg-luxury-dark/85 backdrop-blur-md'
      }`}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between px-4 transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#inicio')}
              className="flex items-center space-x-3 transition-all duration-500 hover:scale-[1.02] group relative"
            >
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Joyería Eterna Logo" 
                  className={`transition-all duration-500 group-hover:brightness-110 ${
                    isScrolled ? 'h-8 w-auto' : 'h-10 w-auto'
                  }`}
                />
                <div className="absolute inset-0 bg-luxury-gold/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 blur-md"></div>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold transition-all duration-500 ${
                  isScrolled 
                    ? 'text-luxury-dark group-hover:text-luxury-gold text-lg' 
                    : 'text-white group-hover:text-luxury-gold text-xl'
                }`}>
                  Joyería Eterna
                </span>
                <span className={`font-light text-xs tracking-wider transition-all duration-500 ${
                  isScrolled 
                    ? 'text-luxury-dark/60 group-hover:text-luxury-gold/80' 
                    : 'text-white/70 group-hover:text-luxury-gold/90'
                }`}>
                  ALTA JOYERÍA
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] group ${
                    isScrolled
                      ? 'text-luxury-dark hover:text-luxury-gold'
                      : 'text-white hover:text-luxury-gold'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Elegant underline animation */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent group-hover:w-full transition-all duration-500"></div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-luxury-gold/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </button>
              ))}
            </div>
          </nav>

          {/* Premium CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('#contacto')}
              size="sm"
              className="relative overflow-hidden group bg-luxury-gold hover:bg-luxury-gold-secondary text-white font-medium px-6 py-2 rounded-full transition-all duration-500 hover:shadow-[0_8px_25px_rgba(218,165,32,0.3)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:group-hover:translate-x-[100%] before:transition-transform before:duration-700"
            >
              <span className="relative z-10">Reservar Cita</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-full transition-all duration-500 hover:scale-110 active:scale-95 ${
                isScrolled
                  ? 'text-luxury-dark hover:text-luxury-gold hover:bg-luxury-gold/10'
                  : 'text-white hover:text-luxury-gold hover:bg-white/10'
              }`}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <svg
                className="h-6 w-6 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Premium Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-luxury-dark/98 backdrop-blur-xl border-t border-luxury-gold/30">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-luxury-gold block px-6 py-4 text-lg font-medium w-full text-left transition-all duration-500 relative overflow-hidden group hover:bg-luxury-gold/15 rounded-xl active:scale-[0.98]"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute left-0 top-1/2 w-1 h-0 bg-luxury-gold transition-all duration-500 transform -translate-y-1/2 group-hover:h-full rounded-r"></div>
                </button>
              ))}
              <div className="pt-6 px-2">
                <Button
                  onClick={() => scrollToSection('#contacto')}
                  size="lg"
                  className="w-full relative overflow-hidden group bg-luxury-gold hover:bg-luxury-gold-secondary text-white font-bold py-4 rounded-xl transition-all duration-500 hover:shadow-[0_8px_25px_rgba(218,165,32,0.4)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:group-hover:translate-x-[100%] before:transition-transform before:duration-700"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Reservar Cita Exclusiva</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
                <p className="text-center text-white/60 text-sm mt-3 font-light">
                  ✨ Agenda casi completa - espacios limitados
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}