import React from 'react';
import { cn } from '../utils/cn';

export interface AnimatedIconProps {
  icon: string;
  animation?:
    | 'spin'
    | 'bounce'
    | 'pulse'
    | 'wiggle'
    | 'float'
    | 'swing'
    | 'shake'
    | 'flip'
    | 'rubber-band'
    | 'jello'
    | 'tada';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
  xl: 'text-8xl',
  '2xl': 'text-9xl',
  '3xl': 'text-[12rem]',
};

const animationClasses = {
  spin: 'animate-[brutal-spin_2s_linear_infinite]',
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  wiggle: 'animate-wiggle',
  float: 'animate-float',
  swing: 'animate-swing',
  shake: 'animate-shake',
  flip: 'animate-flip',
  'rubber-band': 'animate-rubber-band',
  jello: 'animate-jello',
  tada: 'animate-tada',
};

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon,
  animation = 'bounce',
  size = 'md',
  className,
  onClick,
}) => {
  return (
    <span
      className={cn(
        'inline-block select-none',
        sizeClasses[size],
        animationClasses[animation],
        onClick && 'cursor-pointer hover:scale-110 transition-transform',
        className
      )}
      onClick={onClick}
      style={{ textShadow: '3px 3px 0px rgba(0, 0, 0, 0.2)' }}
    >
      {icon}
    </span>
  );
};

export interface IconGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6;
}

export const IconGrid: React.FC<IconGridProps> = ({
  children,
  className,
  columns = 4,
}) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  return (
    <div
      className={cn(
        'grid gap-6 place-items-center',
        gridCols[columns],
        className
      )}
    >
      {children}
    </div>
  );
};
