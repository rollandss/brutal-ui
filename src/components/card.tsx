import React from 'react';
import { cn } from '../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Brutal Card - Контейнер з brutal дизайном
 *
 * @example
 * <Card>
 *   <h2>Заголовок</h2>
 *   <p>Контент картки</p>
 * </Card>
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = 'default', padding = 'md', children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white',
          'border-4 border-black',

          // Варіанти
          variant === 'default' && ['shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'],
          variant === 'bordered' && ['shadow-none'],
          variant === 'elevated' && [
            'shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
          ],

          // Padding
          padding === 'none' && 'p-0',
          padding === 'sm' && 'p-4',
          padding === 'md' && 'p-6',
          padding === 'lg' && 'p-8',

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card Header - Шапка картки
 */
export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('border-b-4 border-black pb-4 mb-4', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

/**
 * Card Title - Заголовок картки
 */
export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-bold uppercase tracking-wide', className)}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

/**
 * Card Content - Контент картки
 */
export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));

CardContent.displayName = 'CardContent';

/**
 * Card Footer - Підвал картки
 */
export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('border-t-4 border-black pt-4 mt-4', className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';
