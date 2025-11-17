'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  decorative?: boolean;
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  label,
  decorative = true,
  className,
}) => {
  if (label && orientation === 'horizontal') {
    return (
      <div
        className={cn('flex items-center gap-4 my-6', className)}
        role={decorative ? 'presentation' : 'separator'}
        aria-orientation={orientation}
      >
        <div className='flex-1 border-t-4 border-black' />
        <span className='font-bold uppercase text-sm text-black px-4 py-2 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
          {label}
        </span>
        <div className='flex-1 border-t-4 border-black' />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'border-black',
        orientation === 'horizontal'
          ? 'border-t-4 w-full my-6'
          : 'border-l-4 h-full mx-6',
        className
      )}
      role={decorative ? 'presentation' : 'separator'}
      aria-orientation={orientation}
    />
  );
};

Separator.displayName = 'Separator';
