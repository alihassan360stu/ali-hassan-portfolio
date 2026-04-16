import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium'
    
    const variants = {
      default: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
      secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
      outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent',
      success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    }
    
    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-sm',
      lg: 'px-3 py-1 text-base'
    }

    return (
      <motion.span
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
