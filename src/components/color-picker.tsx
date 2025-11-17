'use client';

import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  presetColors?: string[];
  disabled?: boolean;
  label?: string;
  className?: string;
}

const defaultPresets = [
  '#000000',
  '#FFFFFF',
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
  '#00FFFF',
  '#FFA500',
  '#800080',
  '#FFC0CB',
  '#A52A2A',
  '#808080',
  '#FFD700',
  '#4B0082',
];

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value: controlledValue,
  onChange,
  presetColors = defaultPresets,
  disabled = false,
  label,
  className,
}) => {
  const [internalValue, setInternalValue] = useState('#000000');
  const value = controlledValue ?? internalValue;

  const handleChange = (newColor: string) => {
    if (!disabled) {
      if (!controlledValue) {
        setInternalValue(newColor);
      }
      onChange?.(newColor);
    }
  };

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className='block text-sm font-bold uppercase mb-2'>
          {label}
        </label>
      )}

      <div className='space-y-4'>
        {/* Color Preview & Input */}
        <div className='flex items-center gap-4'>
          <div
            className='w-16 h-16 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            style={{ backgroundColor: value }}
          />

          <input
            type='color'
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            className={cn(
              'w-full h-16 cursor-pointer',
              'border-4 border-black',
              'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          />

          <input
            type='text'
            value={value.toUpperCase()}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            className={cn(
              'px-4 py-3 w-32',
              'bg-white border-4 border-black',
              'font-bold uppercase text-sm text-center',
              'focus:outline-none',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          />
        </div>

        {/* Preset Colors */}
        <div>
          <p className='text-xs font-bold uppercase text-gray-600 mb-2'>
            Preset Colors
          </p>
          <div className='grid grid-cols-5 gap-2'>
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => handleChange(color)}
                disabled={disabled}
                className={cn(
                  'w-full h-10',
                  'border-4 border-black',
                  'transition-all duration-150',
                  'focus:outline-none',
                  color === value
                    ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] scale-110'
                    : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105',
                  disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                )}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ColorPicker.displayName = 'ColorPicker';
