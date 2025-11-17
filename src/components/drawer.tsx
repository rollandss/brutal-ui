'use client';

import React, { useEffect } from 'react';
import { cn } from '../utils/cn';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = 'right',
  children,
  title,
  size = 'md',
  className,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    left: {
      sm: 'w-64',
      md: 'w-80',
      lg: 'w-96',
    },
    right: {
      sm: 'w-64',
      md: 'w-80',
      lg: 'w-96',
    },
    top: {
      sm: 'h-64',
      md: 'h-80',
      lg: 'h-96',
    },
    bottom: {
      sm: 'h-64',
      md: 'h-80',
      lg: 'h-96',
    },
  };

  const positionClasses = {
    left: 'left-0 top-0 h-full',
    right: 'right-0 top-0 h-full',
    top: 'top-0 left-0 w-full',
    bottom: 'bottom-0 left-0 w-full',
  };

  const slideClasses = {
    left: isOpen ? 'translate-x-0' : '-translate-x-full',
    right: isOpen ? 'translate-x-0' : 'translate-x-full',
    top: isOpen ? 'translate-y-0' : '-translate-y-full',
    bottom: isOpen ? 'translate-y-0' : 'translate-y-full',
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black transition-opacity duration-300 z-40',
          isOpen ? 'opacity-50' : 'opacity-0'
        )}
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed bg-white border-4 border-black z-50',
          'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
          'transition-transform duration-300',
          positionClasses[position],
          sizeClasses[position][size],
          slideClasses[position],
          className
        )}
        role='dialog'
        aria-modal='true'
      >
        {/* Header */}
        {title && (
          <div className='flex items-center justify-between p-6 border-b-4 border-black'>
            <h2 className='text-2xl font-black uppercase'>{title}</h2>
            <button
              onClick={onClose}
              className={cn(
                'p-2 hover:bg-gray-100 transition-colors',
                'border-2 border-black',
                'focus:outline-none'
              )}
              aria-label='Close drawer'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        )}

        {/* Content */}
        <div className='p-6 overflow-y-auto h-full'>{children}</div>
      </div>
    </>
  );
};

Drawer.displayName = 'Drawer';
