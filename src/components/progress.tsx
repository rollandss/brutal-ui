'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value,
      max = 100,
      showLabel = false,
      size = 'md',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div
          className={cn(
            'relative overflow-hidden',
            'border-4 border-black bg-gray-200',
            size === 'sm' && 'h-2',
            size === 'md' && 'h-4',
            size === 'lg' && 'h-6'
          )}
          role='progressbar'
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        >
          <div
            className={cn(
              'h-full transition-all duration-300 ease-out',
              'relative',
              variant === 'default' && 'bg-black',
              variant === 'success' && 'bg-green-500',
              variant === 'warning' && 'bg-yellow-400',
              variant === 'danger' && 'bg-red-500'
            )}
            style={{ width: `${percentage}%` }}
          >
            {showLabel && size !== 'sm' && (
              <span
                className={cn(
                  'absolute inset-0 flex items-center justify-center',
                  'text-xs font-bold uppercase',
                  variant === 'default' || variant === 'danger'
                    ? 'text-white'
                    : 'text-black'
                )}
              >
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
