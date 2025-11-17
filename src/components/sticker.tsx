import React from 'react';
import { cn } from '../utils/cn';

export interface StickerProps {
  emoji?: string;
  text?: string;
  variant?:
    | 'rotate-left'
    | 'rotate-right'
    | 'bounce'
    | 'wiggle'
    | 'float'
    | 'pulse';
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'orange' | 'purple' | 'red';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

const colorClasses = {
  yellow: 'bg-yellow-300',
  pink: 'bg-pink-300',
  blue: 'bg-blue-300',
  green: 'bg-green-300',
  orange: 'bg-orange-300',
  purple: 'bg-purple-300',
  red: 'bg-red-300',
};

const sizeClasses = {
  sm: 'text-2xl p-2 min-w-[60px] min-h-[60px]',
  md: 'text-3xl p-3 min-w-[80px] min-h-[80px]',
  lg: 'text-4xl p-4 min-w-[100px] min-h-[100px]',
  xl: 'text-5xl p-6 min-w-[120px] min-h-[120px]',
};

const animationClasses = {
  'rotate-left': '-rotate-12 hover:rotate-0 transition-transform duration-300',
  'rotate-right': 'rotate-12 hover:rotate-0 transition-transform duration-300',
  bounce: 'animate-bounce-once hover:animate-bounce',
  wiggle: 'hover:animate-wiggle',
  float: 'animate-float',
  pulse: 'animate-pulse',
};

export const Sticker: React.FC<StickerProps> = ({
  emoji = '⭐',
  text,
  variant = 'rotate-left',
  color = 'yellow',
  size = 'md',
  className,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center',
        'border-4 border-black',
        'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
        'font-black uppercase',
        'cursor-pointer select-none',
        'hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
        'hover:translate-y-[-2px]',
        'active:translate-y-[2px]',
        'active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
        colorClasses[color],
        sizeClasses[size],
        animationClasses[variant],
        className
      )}
      onClick={onClick}
      style={{ textShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)' }}
    >
      <span className='block'>{emoji}</span>
      {text && (
        <span className='text-xs sm:text-sm mt-1 text-black'>{text}</span>
      )}
    </div>
  );
};

export interface StickerGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const StickerGroup: React.FC<StickerGroupProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-4 items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  );
};
