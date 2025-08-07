import { ButtonHTMLAttributes, ReactNode, useState } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 200)
    if (props.onClick) {
      props.onClick(e)
    }
  }

  const baseClasses = 'font-semibold rounded-lg relative overflow-hidden transform transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.98]'
  
  const variants = {
    primary: 'bg-luxury-gold hover:bg-luxury-gold-secondary text-white hover:shadow-[0_12px_32px_rgba(218,165,32,0.4)] hover:scale-[1.05] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:group-hover:translate-x-[100%] before:transition-transform before:duration-700',
    secondary: 'border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white hover:shadow-[0_8px_24px_rgba(218,165,32,0.3)] hover:scale-[1.03] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-luxury-gold/10 before:to-transparent before:translate-x-[-100%] before:group-hover:translate-x-[100%] before:transition-transform before:duration-600'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-8 py-3 text-base min-h-[48px]',
    lg: 'px-10 py-4 text-lg min-h-[56px]'
  }

  return (
    <button
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        isClicked && 'animate-pulse',
        className
      )}
      {...props}
      onClick={handleClick}
    >
      <span className="relative z-10 transition-all duration-300">
        {children}
      </span>
      
      {/* Ripple effect */}
      {isClicked && (
        <span className="absolute inset-0 rounded-lg bg-white/30 animate-ping" />
      )}
    </button>
  )
}