'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Brutal Input - Текстове поле з brutal дизайном
 *
 * @example
 * <Input label="Email" placeholder="your@email.com" />
 * <Input label="Пароль" type="password" error="Неправильний пароль" />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId();

    return (
      <div className='w-full'>
        {label && (
          <label
            htmlFor={inputId}
            className='block mb-2 text-sm font-bold uppercase tracking-wide'
          >
            {label}
          </label>
        )}

        <div className='relative'>
          {leftIcon && (
            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500'>
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full px-4 py-3',
              'border-4 border-black',
              'bg-white text-black',
              'font-medium',
              'placeholder:text-gray-400',
              'transition-all duration-200',
              'focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-black',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error && 'border-red-500 focus:ring-red-500',
              leftIcon && 'pl-12',
              rightIcon && 'pr-12',
              className
            )}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            {...props}
          />

          {rightIcon && (
            <div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500'>
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p
            id={`${inputId}-error`}
            className='mt-2 text-sm font-bold text-red-500'
          >
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${inputId}-helper`} className='mt-2 text-sm text-gray-600'>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
