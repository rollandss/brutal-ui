'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  onValueChange?: (value: string) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, onValueChange, disabled, value, ...props }, ref) => {
    const inputId = React.useId();

    return (
      <div className={cn('flex items-center gap-3', className)}>
        <div className='relative'>
          <input
            ref={ref}
            id={inputId}
            type='radio'
            value={value}
            className='peer sr-only'
            disabled={disabled}
            onChange={(e) => {
              props.onChange?.(e);
              if (e.target.checked && value) {
                onValueChange?.(value.toString());
              }
            }}
            {...props}
          />
          <label
            htmlFor={inputId}
            className={cn(
              'flex h-6 w-6 cursor-pointer items-center justify-center rounded-full',
              'border-4 border-black bg-white',
              'transition-all duration-200',
              'peer-checked:bg-black',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              'peer-focus-visible:ring-4 peer-focus-visible:ring-offset-4 peer-focus-visible:ring-black',
              'hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
              'active:translate-y-0.5'
            )}
          >
            <span
              className={cn(
                'h-2 w-2 rounded-full bg-white transition-opacity',
                'opacity-0 peer-checked:opacity-100'
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

Radio.displayName = 'Radio';

export interface RadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onValueChange,
  children,
  className,
}) => {
  return (
    <div className={cn('space-y-3', className)} role='radiogroup'>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Radio) {
          return React.cloneElement(child as React.ReactElement<RadioProps>, {
            checked: child.props.value === value,
            onValueChange,
          });
        }
        return child;
      })}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';
