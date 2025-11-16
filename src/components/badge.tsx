import React from 'react';
import { cn } from '../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Brutal Badge - Мітка/тег з brutal дизайном
 *
 * @example
 * <Badge variant="success">Активний</Badge>
 * <Badge variant="danger" size="sm">Помилка</Badge>
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = 'default', size = 'md', children, ...props },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          'border-2 border-black',
          'font-bold uppercase tracking-wide',
          'whitespace-nowrap',

          // Розміри
          size === 'sm' && 'px-2 py-0.5 text-xs',
          size === 'md' && 'px-3 py-1 text-sm',
          size === 'lg' && 'px-4 py-1.5 text-base',

          // Варіанти
          variant === 'default' && 'bg-gray-200 text-black',
          variant === 'primary' && 'bg-black text-white',
          variant === 'success' && 'bg-green-400 text-black',
          variant === 'danger' && 'bg-red-400 text-white',
          variant === 'warning' && 'bg-yellow-400 text-black',
          variant === 'info' && 'bg-blue-400 text-white',

          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
