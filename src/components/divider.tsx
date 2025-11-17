'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'medium' | 'thick';
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 'medium',
  label,
  className,
}) => {
  const thicknessClasses = {
    thin: orientation === 'horizontal' ? 'border-t-2' : 'border-l-2',
    medium: orientation === 'horizontal' ? 'border-t-4' : 'border-l-4',
    thick: orientation === 'horizontal' ? 'border-t-8' : 'border-l-8',
  };

  if (label && orientation === 'horizontal') {
    return (
      <div className={cn('flex items-center gap-4 my-4', className)}>
        <div
          className={cn('flex-1 border-black', thicknessClasses[thickness])}
        />
        <span className='font-bold uppercase text-sm text-gray-600'>
          {label}
        </span>
        <div
          className={cn('flex-1 border-black', thicknessClasses[thickness])}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'border-black',
        thicknessClasses[thickness],
        orientation === 'horizontal' ? 'w-full my-4' : 'h-full mx-4',
        className
      )}
      role='separator'
      aria-orientation={orientation}
    />
  );
};

Divider.displayName = 'Divider';
