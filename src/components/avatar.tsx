'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  fallback,
  size = 'md',
  shape = 'circle',
  className,
}) => {
  const [imageError, setImageError] = React.useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl',
  };

  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-lg',
  };

  const getFallbackText = () => {
    if (fallback) return fallback;
    if (alt) {
      return alt
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return '?';
  };

  const showImage = src && !imageError;

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        'border-4 border-black',
        'font-bold uppercase',
        'bg-gray-200',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        'overflow-hidden',
        sizeClasses[size],
        shapeClasses[shape],
        className
      )}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className='w-full h-full object-cover'
        />
      ) : (
        <span className='text-black select-none'>{getFallbackText()}</span>
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 5,
  className,
}) => {
  const childArray = React.Children.toArray(children);
  const visibleChildren = childArray.slice(0, max);
  const remainingCount = Math.max(0, childArray.length - max);

  return (
    <div className={cn('flex items-center', className)}>
      {visibleChildren.map((child, index) => (
        <div
          key={index}
          className='inline-flex'
          style={{ marginLeft: index > 0 ? '-12px' : '0' }}
        >
          {child}
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className={cn(
            'inline-flex items-center justify-center',
            'w-12 h-12 rounded-full',
            'border-4 border-black',
            'bg-gray-300 text-black',
            'font-bold text-sm',
            'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
            '-ml-3'
          )}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
