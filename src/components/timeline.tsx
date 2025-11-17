'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  variant?: 'default' | 'compact';
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  variant = 'default',
  className,
}) => {
  return (
    <div className={cn('relative', className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className='relative pb-8 last:pb-0'>
            {/* Line */}
            {!isLast && (
              <div className='absolute left-4 top-8 bottom-0 w-1 bg-black' />
            )}

            <div className='flex items-start gap-4'>
              {/* Icon/Dot */}
              <div
                className={cn(
                  'flex-shrink-0 flex items-center justify-center',
                  'bg-white border-4 border-black',
                  'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                  'z-10',
                  variant === 'default' ? 'w-12 h-12' : 'w-8 h-8'
                )}
              >
                {item.icon || <div className='w-3 h-3 bg-black rounded-full' />}
              </div>

              {/* Content */}
              <div className='flex-1 pt-1'>
                <div className='bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                  <div className='flex items-start justify-between gap-4 mb-2'>
                    <h3 className='font-bold uppercase text-lg'>
                      {item.title}
                    </h3>
                    {item.date && (
                      <span className='text-sm font-bold text-gray-600 whitespace-nowrap'>
                        {item.date}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className='text-sm text-gray-700'>{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Timeline.displayName = 'Timeline';
