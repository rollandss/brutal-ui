'use client';

import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem: React.FC<
  AccordionItemProps & {
    isOpen?: boolean;
    onToggle?: () => void;
  }
> = ({ trigger, children, className, isOpen, onToggle }) => {
  return (
    <div
      className={cn(
        'border-4 border-black bg-white',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        className
      )}
    >
      <button
        type='button'
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between',
          'px-6 py-4',
          'text-left font-bold uppercase text-lg',
          'hover:bg-gray-50',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-4 focus:ring-inset focus:ring-black'
        )}
        aria-expanded={isOpen}
      >
        {trigger}
        <span
          className={cn(
            'text-2xl font-black transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className='px-6 py-4 border-t-4 border-black animate-slide-up'>
          {children}
        </div>
      )}
    </div>
  );
};

AccordionItem.displayName = 'AccordionItem';

export interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  defaultValue,
  children,
  className,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const handleToggle = (value: string) => {
    if (type === 'single') {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
    } else {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          const isOpen = openItems.includes(child.props.value);
          return React.cloneElement(child, {
            isOpen,
            onToggle: () => handleToggle(child.props.value),
          } as any);
        }
        return child;
      })}
    </div>
  );
};

Accordion.displayName = 'Accordion';
