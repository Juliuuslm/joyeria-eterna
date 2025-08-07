'use client'

import { useState, useEffect } from 'react'
import Button from './Button'

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Catálogo', href: '#catalogo' },
  { name: 'Testimonios', href: '#testimonios' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-luxury-dark/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#inicio')}
              className="flex items-center space-x-3 transition-all duration-300 hover:scale-105 group"
            >
              <img 
                src="/logo.png" 
                alt="Joyería Eterna Logo" 
                className="h-10 w-auto group-hover:brightness-110 transition-all duration-300"
              />
              <span className={`text-xl font-serif font-bold transition-colors duration-300 hidden sm:block ${
                isScrolled 
                  ? 'text-luxury-dark group-hover:text-luxury-gold' 
                  : 'text-white group-hover:text-luxury-gold'
              }`}>
                Joyería Eterna
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-[0.98] group ${
                    isScrolled
                      ? 'text-luxury-dark hover:text-luxury-gold'
                      : 'text-white hover:text-luxury-gold'
                  } before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-luxury-gold before:transition-all before:duration-300 before:transform before:-translate-x-1/2 hover:before:w-full`}
                >
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contacto')}
              size="sm"
            >
              Agendar Cita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled
                  ? 'text-luxury-dark hover:text-luxury-gold'
                  : 'text-white hover:text-luxury-gold'
              }`}
              aria-label="Abrir menú"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-dark/95 backdrop-blur-md border-t border-luxury-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-luxury-gold block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 relative overflow-hidden group hover:bg-luxury-gold/10 rounded-lg active:scale-[0.98] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-0 before:bg-luxury-gold before:transition-all before:duration-300 before:transform before:-translate-y-1/2 hover:before:h-full"
                >
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection('#contacto')}
                  size="sm"
                  className="w-full"
                >
                  Agendar Cita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}