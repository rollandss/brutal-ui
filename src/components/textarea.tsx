'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      disabled,
      resize = 'vertical',
      ...props
    },
    ref
  ) => {
    const textareaId = React.useId();

    return (
      <div className='w-full'>
        {label && (
          <label
            htmlFor={textareaId}
            className='block mb-2 text-sm font-bold uppercase tracking-wide'
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
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
            resize === 'none' && 'resize-none',
            resize === 'vertical' && 'resize-y',
            resize === 'horizontal' && 'resize-x',
            resize === 'both' && 'resize',
            className
          )}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : undefined
          }
          {...props}
        />

        {error && (
          <p
            id={`${textareaId}-error`}
            className='mt-2 text-sm font-bold text-red-500'
          >
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${textareaId}-helper`} className='mt-2 text-sm text-gray-600'>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
