'use client'

interface SectionDividerProps {
  variant?: 'diamond' | 'line'
  className?: string
}

export default function SectionDivider({ variant = 'line', className = '' }: SectionDividerProps) {
  if (variant === 'diamond') {
    return (
      <div className={`flex items-center justify-center py-12 md:py-16 ${className}`}>
        <div className="flex items-center w-full max-w-2xl">
          {/* Left line */}
          <div className="flex-1 h-px bg-luxury-gold/60"></div>
          
          {/* Diamond center */}
          <div className="mx-6 md:mx-8 relative">
            <div className="w-4 h-4 border-2 border-luxury-gold transform rotate-45 bg-white relative z-10 animate-pulse"></div>
            <div className="absolute inset-0 w-4 h-4 border border-luxury-gold/70 transform rotate-45 scale-110 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Right line */}
          <div className="flex-1 h-px bg-luxury-gold/60"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center py-8 md:py-10 ${className}`}>
      <div className="flex items-center w-full max-w-xl">
        {/* Left line */}
        <div className="flex-1 h-px bg-luxury-gold/50"></div>
        
        {/* Center dot */}
        <div className="mx-4 w-2 h-2 rounded-full bg-luxury-gold/70"></div>
        
        {/* Right line */}
        <div className="flex-1 h-px bg-luxury-gold/50"></div>
      </div>
    </div>
  )
}