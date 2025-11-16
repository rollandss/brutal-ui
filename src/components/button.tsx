import React from 'react';
import { cn } from '../utils/cn';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'outline'
    | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

/**
 * Brutal Button - Кнопка з brutal дизайном
 *
 * @example
 * <Button variant="primary" size="md">Клік</Button>
 * <Button variant="danger" loading>Видалити</Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Базові стилі
      'relative inline-flex items-center justify-center',
      'font-bold uppercase tracking-wide',
      'border-4 border-black',
      'transition-all duration-200',
      'focus:outline-none focus:ring-4 focus:ring-offset-4',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'active:translate-y-1',

      // Розміри
      size === 'sm' && 'px-4 py-2 text-xs',
      size === 'md' && 'px-6 py-3 text-sm',
      size === 'lg' && 'px-8 py-4 text-base',

      // Варіанти
      variant === 'primary' && [
        'bg-black text-white',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
        'active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      ],
      variant === 'secondary' && [
        'bg-white text-black',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
        'active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      ],
      variant === 'danger' && [
        'bg-red-500 text-white',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        'hover:bg-red-600',
        'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
        'active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      ],
      variant === 'success' && [
        'bg-green-500 text-white',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        'hover:bg-green-600',
        'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
        'active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      ],
      variant === 'outline' && [
        'bg-transparent text-black',
        'hover:bg-black hover:text-white',
      ],
      variant === 'ghost' && [
        'bg-transparent text-black border-transparent',
        'hover:bg-gray-100',
      ],

      // Full width
      fullWidth && 'w-full',

      className
    );

    return (
      <button
        ref={ref}
        className={baseStyles}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className='animate-spin -ml-1 mr-3 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
