'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  onDelete?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'default',
  size = 'md',
  onDelete,
  icon,
  className,
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const variantClasses = {
    default: 'bg-gray-200 text-black',
    primary: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    warning: 'bg-yellow-400 text-black',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2',
        'font-bold uppercase',
        'border-2 border-black',
        'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {icon && <span className='inline-flex'>{icon}</span>}
      <span>{children}</span>
      {onDelete && (
        <button
          onClick={onDelete}
          className={cn(
            'inline-flex items-center justify-center',
            'w-4 h-4 rounded-full',
            'hover:bg-black/20 transition-colors',
            'focus:outline-none'
          )}
          aria-label='Remove'
        >
          <svg
            className='w-3 h-3'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      )}
    </span>
  );
};

Chip.displayName = 'Chip';
