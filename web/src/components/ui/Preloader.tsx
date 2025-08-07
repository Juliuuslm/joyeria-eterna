'use client'

import { useEffect, useState } from 'react'

interface PreloaderProps {
  onLoadComplete?: () => void
}

export default function Preloader({ onLoadComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simular progreso de carga
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          // Esperar un poco más para mostrar el 100% antes de desaparecer
          setTimeout(() => {
            setIsLoading(false)
            if (onLoadComplete) {
              onLoadComplete()
            }
          }, 500)
          return 100
        }
        return prev + Math.random() * 15 + 5 // Incremento aleatorio pero suave
      })
    }, 100)

    // Cleanup
    return () => clearInterval(progressInterval)
  }, [onLoadComplete])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-luxury-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-luxury-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-20 h-20 border border-luxury-gold/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border border-luxury-gold/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-luxury-gold/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center space-y-8 text-center relative z-10">
        {/* Logo Container */}
        <div className="relative">
          {/* Rotating Ring */}
          <div className="absolute -inset-6 border-2 border-transparent border-t-luxury-gold rounded-full animate-spin"></div>
          <div className="absolute -inset-4 border border-transparent border-t-luxury-gold/50 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '3s'}}></div>
          
          {/* Logo */}
          <div className="relative z-10 bg-luxury-dark-secondary rounded-full p-6 shadow-2xl">
            <img 
              src="/logo.png" 
              alt="Joyería Eterna" 
              className="w-20 h-20 animate-pulse"
              style={{animationDuration: '2s'}}
            />
          </div>
          
          {/* Sparkle Effects */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-luxury-gold rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-luxury-gold rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 -right-3 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide">
            Joyería Eterna
          </h1>
          <p className="text-luxury-gold font-medium tracking-widest text-sm uppercase">
            Piezas de Alta Gama
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 bg-luxury-dark-secondary rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-luxury-gold to-luxury-gold-secondary rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Progress Text */}
        <div className="text-white/70 text-sm font-medium">
          Creando experiencia de lujo... {Math.round(progress)}%
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  )
}