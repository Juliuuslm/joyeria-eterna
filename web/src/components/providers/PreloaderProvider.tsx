'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import Preloader from '@/components/ui/Preloader'

interface PreloaderContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined)

export function usePreloader() {
  const context = useContext(PreloaderContext)
  if (context === undefined) {
    throw new Error('usePreloader must be used within a PreloaderProvider')
  }
  return context
}

interface PreloaderProviderProps {
  children: ReactNode
}

export function PreloaderProvider({ children }: PreloaderProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simular carga inicial - en producción esto podría ser cuando recursos críticos terminen de cargar
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 segundos mínimo de preloader

    return () => clearTimeout(timer)
  }, [])

  const handleLoadComplete = () => {
    // Pequeño delay para transición suave
    setTimeout(() => {
      setShowContent(true)
    }, 300)
  }

  return (
    <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Preloader onLoadComplete={handleLoadComplete} />}
      <div className={`transition-opacity duration-500 ${showContent || !isLoading ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </PreloaderContext.Provider>
  )
}