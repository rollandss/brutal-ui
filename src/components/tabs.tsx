'use client';

import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const value = controlledValue ?? internalValue;

  const handleValueChange = (newValue: string) => {
    setInternalValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div className={cn('w-full', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            value,
            onValueChange: handleValueChange,
          });
        }
        return child;
      })}
    </div>
  );
};

Tabs.displayName = 'Tabs';

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, value, onValueChange, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex border-4 border-black bg-gray-100 p-1 gap-1',
          className
        )}
        role='tablist'
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement, {
              value,
              onValueChange,
            });
          }
          return child;
        })}
      </div>
    );
  }
);

TabsList.displayName = 'TabsList';

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  currentValue?: string;
  onValueChange?: (value: string) => void;
}

export const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  TabsTriggerProps
>(
  (
    { className, value, currentValue, onValueChange, children, ...props },
    ref
  ) => {
    const isActive = value === currentValue;

    return (
      <button
        ref={ref}
        type='button'
        role='tab'
        aria-selected={isActive}
        className={cn(
          'px-6 py-3 font-bold uppercase text-sm',
          'border-4 border-black',
          'transition-all duration-200',
          'hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
          'active:translate-y-0.5',
          'focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-black',
          isActive
            ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            : 'bg-white text-black',
          className
        )}
        onClick={() => onValueChange?.(value)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  currentValue?: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, currentValue, children, ...props }, ref) => {
    if (value !== currentValue) return null;

    return (
      <div
        ref={ref}
        role='tabpanel'
        className={cn('mt-4 animate-fade-in', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = 'TabsContent';
