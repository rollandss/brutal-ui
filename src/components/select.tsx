'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../utils/cn';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  className?: string;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select an option',
      disabled = false,
      label,
      error,
      className,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
      if (!disabled) {
        onChange?.(optionValue);
        setIsOpen(false);
      }
    };

    return (
      <div ref={ref} className={cn('relative', className)}>
        {label && (
          <label className='block text-sm font-bold uppercase mb-2'>
            {label}
          </label>
        )}

        <div ref={selectRef} className='relative'>
          <button
            type='button'
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
            className={cn(
              'w-full px-4 py-3 text-left',
              'bg-white border-4 border-black',
              'font-bold uppercase text-sm',
              'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
              'transition-all duration-200',
              'focus:outline-none',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              !disabled && 'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
              error && 'border-red-500',
              'flex items-center justify-between'
            )}
          >
            <span className={!selectedOption ? 'text-gray-400' : ''}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <svg
              className={cn(
                'w-5 h-5 transition-transform duration-200',
                isOpen && 'rotate-180'
              )}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>

          {isOpen && !disabled && (
            <div
              className={cn(
                'absolute z-50 w-full mt-2',
                'bg-white border-4 border-black',
                'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
                'max-h-60 overflow-auto'
              )}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type='button'
                  onClick={() => handleSelect(option.value)}
                  disabled={option.disabled}
                  className={cn(
                    'w-full px-4 py-3 text-left',
                    'font-bold uppercase text-sm',
                    'transition-colors duration-150',
                    'border-b-4 border-black last:border-b-0',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    option.value === value
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100',
                    !option.disabled && 'cursor-pointer'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {error && (
          <p className='mt-2 text-sm font-bold text-red-500 uppercase'>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
