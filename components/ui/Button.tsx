'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2',
          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'md' && 'px-8 py-4',
          size === 'lg' && 'px-10 py-5 text-lg',
          variant === 'primary' &&
            'bg-gradient-to-r from-primary-600 to-purple-600 hover:shadow-2xl hover:shadow-primary-500/50',
          variant === 'secondary' &&
            'border-2 border-primary-500/50 hover:bg-primary-500/10',
          variant === 'ghost' && 'hover:bg-white/5',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button