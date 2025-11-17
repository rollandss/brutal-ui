'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
}

/**
 * Brutal Switch - Перемикач з brutal дизайном
 *
 * @example
 * <Switch label="Увімкнути сповіщення" checked={enabled} onCheckedChange={setEnabled} />
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
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
              'relative block h-8 w-14 cursor-pointer',
              'border-4 border-black bg-gray-200',
              'transition-all duration-200',
              'peer-checked:bg-green-400',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              'peer-focus-visible:ring-4 peer-focus-visible:ring-offset-4 peer-focus-visible:ring-black'
            )}
          >
            <span
              className={cn(
                'absolute top-0 left-0 h-6 w-6',
                'bg-black',
                'transition-transform duration-200',
                'peer-checked:translate-x-6'
              )}
            />
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

Switch.displayName = 'Switch';
