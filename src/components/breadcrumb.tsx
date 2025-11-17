'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className,
}) => {
  return (
    <nav
      aria-label='Breadcrumb'
      className={cn('flex items-center flex-wrap gap-2', className)}
    >
      <ol className='flex items-center flex-wrap gap-2'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className='flex items-center gap-2'>
              {item.href || item.onClick ? (
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className={cn(
                    'font-bold uppercase text-sm',
                    'transition-colors duration-200',
                    'hover:text-gray-600',
                    isLast
                      ? 'text-black cursor-default pointer-events-none'
                      : 'text-gray-500 hover:underline decoration-4'
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={cn(
                    'font-bold uppercase text-sm',
                    isLast ? 'text-black' : 'text-gray-500'
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span
                  className='text-black font-bold text-lg'
                  aria-hidden='true'
                >
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
