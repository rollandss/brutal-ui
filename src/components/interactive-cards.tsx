import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  trigger?: 'hover' | 'click';
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  trigger = 'hover',
  direction = 'horizontal',
  className,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (trigger === 'click') {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className={cn('relative', className)}
      style={{ perspective: '1000px' }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700',
          trigger === 'click' && 'cursor-pointer',
          isFlipped
            ? direction === 'horizontal'
              ? 'rotate-y-180'
              : 'rotate-x-180'
            : ''
        )}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front */}
        <div
          className={cn(
            'absolute w-full h-full backface-hidden',
            'bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
          )}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className={cn(
            'absolute w-full h-full backface-hidden',
            'bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
            direction === 'horizontal' ? 'rotate-y-180' : 'rotate-x-180'
          )}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export interface RevealCardProps {
  title: string;
  preview: React.ReactNode;
  content: React.ReactNode;
  trigger?: 'hover' | 'click';
  className?: string;
}

export const RevealCard: React.FC<RevealCardProps> = ({
  title,
  preview,
  content,
  trigger = 'hover',
  className,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    if (trigger === 'click') {
      setIsRevealed(!isRevealed);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsRevealed(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsRevealed(false);
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        'bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
        'transition-all duration-500',
        isRevealed && 'shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
        trigger === 'click' && 'cursor-pointer',
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='p-6'>
        <h3 className='text-2xl font-black uppercase mb-4 border-b-4 border-black pb-2'>
          {title}
        </h3>

        <div
          className={cn(
            'transition-all duration-500',
            isRevealed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
          )}
        >
          {preview}
        </div>

        <div
          className={cn(
            'transition-all duration-500',
            isRevealed ? 'opacity-100 mt-4' : 'opacity-0 h-0 overflow-hidden'
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export interface MorphCardProps {
  states: {
    content: React.ReactNode;
    color: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export const MorphCard: React.FC<MorphCardProps> = ({
  states,
  autoPlay = false,
  interval = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (autoPlay && states.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % states.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, states.length]);

  const nextState = () => {
    setCurrentIndex((prev) => (prev + 1) % states.length);
  };

  const currentState = states[currentIndex];

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        'border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
        'transition-all duration-700 ease-in-out',
        'cursor-pointer hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
        'hover:translate-y-[-4px]',
        className
      )}
      style={{ backgroundColor: currentState.color }}
      onClick={nextState}
    >
      <div className='p-6 transition-all duration-500'>
        {currentState.content}
      </div>

      {/* Indicator dots */}
      {states.length > 1 && (
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
          {states.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={cn(
                'w-3 h-3 rounded-full border-2 border-black transition-all',
                index === currentIndex ? 'bg-black scale-125' : 'bg-white'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};
