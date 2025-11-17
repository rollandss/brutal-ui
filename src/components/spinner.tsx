'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-4',
    lg: 'w-16 h-16 border-4',
    xl: 'w-24 h-24 border-8',
  };

  return (
    <div
      className={cn(
        'inline-block rounded-full border-black border-t-transparent',
        'animate-spin',
        sizeClasses[size],
        className
      )}
      role='status'
      aria-label='Loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

Spinner.displayName = 'Spinner';

export interface LoaderProps {
  text?: string;
  fullScreen?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  text = 'Loading...',
  fullScreen = false,
  size = 'lg',
  className,
}) => {
  const content = (
    <div className='flex flex-col items-center gap-4'>
      <Spinner size={size} />
      {text && <p className='font-bold uppercase text-lg'>{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className={cn(
          'fixed inset-0 z-50',
          'flex items-center justify-center',
          'bg-white/90',
          className
        )}
      >
        {content}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-center p-8', className)}>
      {content}
    </div>
  );
};

Loader.displayName = 'Loader';
