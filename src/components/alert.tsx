import React from 'react';
import { cn } from '../utils/cn';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  icon?: React.ReactNode;
}

/**
 * Brutal Alert - Сповіщення з brutal дизайном
 *
 * @example
 * <Alert variant="success" title="Успіх">
 *   Дані збережено успішно!
 * </Alert>
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, icon, children, ...props }, ref) => {
    const defaultIcons = {
      info: (
        <svg
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      success: (
        <svg
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      warning: (
        <svg
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
          />
        </svg>
      ),
      danger: (
        <svg
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    };

    return (
      <div
        ref={ref}
        role='alert'
        className={cn(
          'relative p-4',
          'border-4 border-black',
          'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',

          // Варіанти
          variant === 'info' && 'bg-blue-100',
          variant === 'success' && 'bg-green-100',
          variant === 'warning' && 'bg-yellow-100',
          variant === 'danger' && 'bg-red-100',

          className
        )}
        {...props}
      >
        <div className='flex gap-3'>
          <div className='flex-shrink-0'>{icon || defaultIcons[variant]}</div>

          <div className='flex-1'>
            {title && (
              <h3 className='font-bold text-lg uppercase tracking-wide mb-1'>
                {title}
              </h3>
            )}
            <div className='text-sm font-medium'>{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
