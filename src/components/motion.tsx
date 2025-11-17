import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

export interface ShakerProps {
  children: React.ReactNode;
  trigger?: 'hover' | 'click' | 'auto' | 'manual';
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  duration?: number;
  interval?: number;
  shake?: boolean;
  className?: string;
}

const intensityClasses = {
  low: 'animate-[shake_0.3s_ease-in-out]',
  medium: 'animate-[shake_0.5s_ease-in-out]',
  high: 'animate-[shake_0.7s_ease-in-out_2]',
  extreme: 'animate-[shake_0.5s_ease-in-out_4]',
};

export const Shaker: React.FC<ShakerProps> = ({
  children,
  trigger = 'hover',
  intensity = 'medium',
  duration = 500,
  interval = 3000,
  shake: manualShake,
  className,
}) => {
  const [isShaking, setIsShaking] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (trigger === 'auto') {
      intervalRef.current = setInterval(() => {
        triggerShake();
      }, interval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [trigger, interval]);

  useEffect(() => {
    if (manualShake !== undefined) {
      setIsShaking(manualShake);
    }
  }, [manualShake]);

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, duration);
  };

  const handleClick = () => {
    if (trigger === 'click') {
      triggerShake();
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      triggerShake();
    }
  };

  return (
    <div
      className={cn(
        'inline-block',
        isShaking && intensityClasses[intensity],
        (trigger === 'click' || trigger === 'hover') && 'cursor-pointer',
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );
};

export interface BouncerProps {
  children: React.ReactNode;
  trigger?: 'hover' | 'click' | 'auto' | 'continuous';
  height?: 'low' | 'medium' | 'high';
  className?: string;
}

const bounceClasses = {
  low: 'hover:animate-[bounce_0.5s_ease-in-out]',
  medium: 'hover:animate-[bounce_0.7s_ease-in-out]',
  high: 'hover:animate-[bounce_1s_ease-in-out]',
};

export const Bouncer: React.FC<BouncerProps> = ({
  children,
  trigger = 'hover',
  height = 'medium',
  className,
}) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    if (trigger === 'click') {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 700);
    }
  };

  return (
    <div
      className={cn(
        'inline-block',
        trigger === 'hover' && bounceClasses[height],
        trigger === 'continuous' && 'animate-bounce',
        trigger === 'click' && isBouncing && 'animate-bounce-once',
        (trigger === 'click' || trigger === 'hover') && 'cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export interface SpinnerBoxProps {
  children: React.ReactNode;
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'clockwise' | 'counterclockwise';
  trigger?: 'hover' | 'continuous';
  className?: string;
}

const spinClasses = {
  slow: {
    clockwise: 'hover:animate-[brutal-spin_3s_linear_infinite]',
    counterclockwise: 'hover:animate-[brutal-spin_3s_linear_infinite_reverse]',
  },
  normal: {
    clockwise: 'hover:animate-[brutal-spin_2s_linear_infinite]',
    counterclockwise: 'hover:animate-[brutal-spin_2s_linear_infinite_reverse]',
  },
  fast: {
    clockwise: 'hover:animate-[brutal-spin_1s_linear_infinite]',
    counterclockwise: 'hover:animate-[brutal-spin_1s_linear_infinite_reverse]',
  },
};

const continuousSpinClasses = {
  slow: {
    clockwise: 'animate-[brutal-spin_3s_linear_infinite]',
    counterclockwise: 'animate-[brutal-spin_3s_linear_infinite_reverse]',
  },
  normal: {
    clockwise: 'animate-[brutal-spin_2s_linear_infinite]',
    counterclockwise: 'animate-[brutal-spin_2s_linear_infinite_reverse]',
  },
  fast: {
    clockwise: 'animate-[brutal-spin_1s_linear_infinite]',
    counterclockwise: 'animate-[brutal-spin_1s_linear_infinite_reverse]',
  },
};

export const SpinnerBox: React.FC<SpinnerBoxProps> = ({
  children,
  speed = 'normal',
  direction = 'clockwise',
  trigger = 'hover',
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-block',
        trigger === 'hover'
          ? spinClasses[speed][direction]
          : continuousSpinClasses[speed][direction],
        trigger === 'hover' && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};

export interface PulserProps {
  children: React.ReactNode;
  intensity?: 'subtle' | 'normal' | 'strong';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export const Pulser: React.FC<PulserProps> = ({
  children,
  intensity = 'normal',
  speed = 'normal',
  className,
}) => {
  const speedDuration = {
    slow: '3s',
    normal: '2s',
    fast: '1s',
  };

  const intensityScale = {
    subtle: '1.02',
    normal: '1.05',
    strong: '1.1',
  };

  return (
    <div
      className={cn('inline-block animate-pulse', className)}
      style={{
        animationDuration: speedDuration[speed],
      }}
    >
      {children}
    </div>
  );
};
