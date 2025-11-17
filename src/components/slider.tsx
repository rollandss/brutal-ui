'use client';

import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  label?: string;
  showValue?: boolean;
  className?: string;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value: controlledValue,
      onChange,
      disabled = false,
      label,
      showValue = true,
      className,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(min);
    const value = controlledValue ?? internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      if (!controlledValue) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const percentage = ((value - min) / (max - min)) * 100;

    return (
      <div className={cn('w-full', className)}>
        {(label || showValue) && (
          <div className='flex items-center justify-between mb-4'>
            {label && (
              <label className='text-sm font-bold uppercase'>{label}</label>
            )}
            {showValue && (
              <span className='text-sm font-bold bg-black text-white px-3 py-1 border-2 border-black'>
                {value}
              </span>
            )}
          </div>
        )}

        <div className='relative h-8 flex items-center'>
          {/* Track */}
          <div className='absolute w-full h-4 bg-gray-200 border-4 border-black'>
            {/* Fill */}
            <div
              className='h-full bg-black transition-all duration-150'
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Thumb */}
          <input
            ref={ref}
            type='range'
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            className={cn(
              'relative w-full h-8 appearance-none bg-transparent cursor-pointer',
              'focus:outline-none',
              'disabled:cursor-not-allowed disabled:opacity-50',
              '[&::-webkit-slider-thumb]:appearance-none',
              '[&::-webkit-slider-thumb]:w-8',
              '[&::-webkit-slider-thumb]:h-8',
              '[&::-webkit-slider-thumb]:bg-white',
              '[&::-webkit-slider-thumb]:border-4',
              '[&::-webkit-slider-thumb]:border-black',
              '[&::-webkit-slider-thumb]:cursor-pointer',
              '[&::-webkit-slider-thumb]:transition-all',
              '[&::-webkit-slider-thumb]:hover:scale-110',
              '[&::-webkit-slider-thumb]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
              '[&::-moz-range-thumb]:appearance-none',
              '[&::-moz-range-thumb]:w-8',
              '[&::-moz-range-thumb]:h-8',
              '[&::-moz-range-thumb]:bg-white',
              '[&::-moz-range-thumb]:border-4',
              '[&::-moz-range-thumb]:border-black',
              '[&::-moz-range-thumb]:cursor-pointer',
              '[&::-moz-range-thumb]:transition-all',
              '[&::-moz-range-thumb]:hover:scale-110',
              '[&::-moz-range-thumb]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            )}
          />
        </div>

        <div className='flex justify-between mt-2 text-xs font-bold text-gray-600'>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
