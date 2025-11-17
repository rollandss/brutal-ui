'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
}

/**
 * Brutal Checkbox - Чекбокс з brutal дизайном
 *
 * @example
 * <Checkbox label="Я погоджуюсь з умовами" checked={agreed} onCheckedChange={setAgreed} />
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, onCheckedChange, disabled, ...props }, ref) => {
    const inputId = React.useId();

    return (
      <div className={cn('flex items-center gap-3', className)}>
        <div className='relative'>
          <input
            ref={ref}
            id={inputId}
            type='checkbox'
            className='peer sr-only'
            disabled={disabled}
            onChange={(e) => {
              props.onChange?.(e);
              onCheckedChange?.(e.target.checked);
            }}
            {...props}
          />
          <label
            htmlFor={inputId}
            className={cn(
              'flex h-6 w-6 cursor-pointer items-center justify-center',
              'border-4 border-black bg-white',
              'transition-all duration-200',
              'peer-checked:bg-black peer-checked:text-white',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              'peer-focus-visible:ring-4 peer-focus-visible:ring-offset-4 peer-focus-visible:ring-black',
              'hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
              'active:translate-y-0.5'
            )}
          >
            <svg
              className={cn(
                'h-4 w-4 transition-opacity',
                'opacity-0 peer-checked:opacity-100'
              )}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <polyline points='20 6 9 17 4 12' />
            </svg>
          </label>
        </div>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'text-sm font-bold uppercase tracking-wide',
              disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
