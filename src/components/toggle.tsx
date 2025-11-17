import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'brutal' | 'neon' | 'gradient';
  label?: string;
  icon?: { on: string; off: string };
  className?: string;
}

const sizeClasses = {
  sm: {
    container: 'w-10 h-6',
    thumb: 'w-4 h-4',
    translate: 'translate-x-4',
    text: 'text-sm',
  },
  md: {
    container: 'w-14 h-7',
    thumb: 'w-5 h-5',
    translate: 'translate-x-7',
    text: 'text-base',
  },
  lg: {
    container: 'w-20 h-10',
    thumb: 'w-8 h-8',
    translate: 'translate-x-10',
    text: 'text-lg',
  },
};

const variantClasses = {
  default: {
    on: 'bg-green-500',
    off: 'bg-gray-300',
    thumb:
      'bg-white border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
  },
  brutal: {
    on: 'bg-yellow-400',
    off: 'bg-purple-400',
    thumb:
      'bg-white border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]',
  },
  neon: {
    on: 'bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]',
    off: 'bg-gray-700',
    thumb: 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]',
  },
  gradient: {
    on: 'bg-gradient-to-r from-purple-500 to-pink-500',
    off: 'bg-gradient-to-r from-gray-400 to-gray-500',
    thumb:
      'bg-white border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
  },
};

export const Toggle: React.FC<ToggleProps> = ({
  checked: controlledChecked,
  onChange,
  disabled = false,
  size = 'md',
  variant = 'default',
  label,
  icon,
  className,
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const checked =
    controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !checked;
    if (onChange) {
      onChange(newChecked);
    } else {
      setInternalChecked(newChecked);
    }
  };

  const sizes = sizeClasses[size];
  const variants = variantClasses[variant];

  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <button
        type='button'
        role='switch'
        aria-checked={checked}
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          'relative inline-flex items-center rounded-full border-4 border-black transition-all duration-300',
          sizes.container,
          checked ? variants.on : variants.off,
          disabled && 'opacity-50 cursor-not-allowed',
          !disabled && 'cursor-pointer hover:scale-105',
          'brutal-pressable'
        )}
      >
        <span
          className={cn(
            'inline-block rounded-full transition-all duration-300 transform',
            sizes.thumb,
            variants.thumb,
            checked ? sizes.translate : 'translate-x-1',
            'flex items-center justify-center font-bold'
          )}
        >
          {icon && (
            <span className='text-xs'>{checked ? icon.on : icon.off}</span>
          )}
        </span>
      </button>
      {label && (
        <span
          className={cn(
            'font-bold select-none',
            sizes.text,
            disabled && 'opacity-50'
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export interface ToggleGroupProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  children,
  orientation = 'horizontal',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex gap-4',
        orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
        className
      )}
    >
      {children}
    </div>
  );
};
