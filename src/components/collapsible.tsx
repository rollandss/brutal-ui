'use client';

import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface CollapsibleProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  trigger,
  children,
  defaultOpen = false,
  disabled = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn('border-4 border-black bg-white', className)}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          'w-full px-6 py-4',
          'flex items-center justify-between',
          'font-bold uppercase text-sm text-left',
          'transition-colors duration-150',
          'border-b-4 border-black',
          disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-100 cursor-pointer'
        )}
      >
        <span>{trigger}</span>
        <svg
          className={cn(
            'w-6 h-6 transition-transform duration-200',
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

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className='p-6'>{children}</div>
      </div>
    </div>
  );
};

Collapsible.displayName = 'Collapsible';
