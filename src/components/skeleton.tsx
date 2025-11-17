import React from 'react';

export interface BrutalSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the skeleton (e.g., '100px', '50%', 'full')
   */
  width?: string | number;
  /**
   * Height of the skeleton (e.g., '20px', '2rem')
   */
  height?: string | number;
  /**
   * Border radius (0 for sharp brutal style)
   */
  radius?: string | number;
  /**
   * Additional CSS class names
   */
  className?: string;
}

/**
 * BrutalSkeleton - Skeleton loading component with brutal shimmer animation
 *
 * @example
 * ```tsx
 * <BrutalSkeleton width="200px" height="20px" />
 * <BrutalSkeleton width="100%" height="3rem" className="mb-4" />
 * ```
 */
export const BrutalSkeleton = React.forwardRef<
  HTMLDivElement,
  BrutalSkeletonProps
>(
  (
    {
      width = '100%',
      height = '20px',
      radius = 0,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const inlineStyle: React.CSSProperties = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      borderRadius: typeof radius === 'number' ? `${radius}px` : radius,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`brutal-skeleton ${className}`.trim()}
        style={inlineStyle}
        aria-busy='true'
        aria-live='polite'
        {...props}
      />
    );
  }
);

BrutalSkeleton.displayName = 'BrutalSkeleton';

/**
 * Pre-configured skeleton for text lines
 */
export const BrutalSkeletonText = ({
  lines = 3,
  ...props
}: { lines?: number } & Omit<BrutalSkeletonProps, 'height'>) => (
  <div className='space-y-2'>
    {Array.from({ length: lines }).map((_, i) => (
      <BrutalSkeleton
        key={i}
        height='1rem'
        width={i === lines - 1 ? '60%' : '100%'}
        {...props}
      />
    ))}
  </div>
);

/**
 * Pre-configured skeleton for cards
 */
export const BrutalSkeletonCard = (props: BrutalSkeletonProps) => (
  <div className='brutal-border p-4 space-y-3'>
    <BrutalSkeleton width='60%' height='1.5rem' {...props} />
    <BrutalSkeletonText lines={2} {...props} />
  </div>
);
