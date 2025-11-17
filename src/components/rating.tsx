'use client';

import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  disabled?: boolean;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value: controlledValue,
  onChange,
  max = 5,
  disabled = false,
  readOnly = false,
  size = 'md',
  className,
}) => {
  const [internalValue, setInternalValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const value = controlledValue ?? internalValue;

  const handleClick = (rating: number) => {
    if (!disabled && !readOnly) {
      if (!controlledValue) {
        setInternalValue(rating);
      }
      onChange?.(rating);
    }
  };

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className={cn('inline-flex gap-1', className)}
      onMouseLeave={() => setHoverValue(0)}
    >
      {Array.from({ length: max }, (_, index) => {
        const rating = index + 1;
        const isFilled = rating <= (hoverValue || value);

        return (
          <button
            key={index}
            type='button'
            onClick={() => handleClick(rating)}
            onMouseEnter={() => !readOnly && setHoverValue(rating)}
            disabled={disabled}
            className={cn(
              'transition-all duration-150',
              'focus:outline-none',
              !disabled && !readOnly && 'cursor-pointer hover:scale-110',
              disabled && 'opacity-50 cursor-not-allowed',
              readOnly && 'cursor-default'
            )}
            aria-label={`Rate ${rating} out of ${max}`}
          >
            <svg
              className={cn(
                'border-2 border-black transition-colors',
                sizeClasses[size],
                isFilled
                  ? 'fill-yellow-400 stroke-black'
                  : 'fill-white stroke-black'
              )}
              viewBox='0 0 24 24'
              strokeWidth={2}
            >
              <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

Rating.displayName = 'Rating';
