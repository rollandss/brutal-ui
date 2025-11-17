'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface Step {
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  className,
}) => {
  return (
    <div className={cn('w-full', className)}>
      <div className='flex items-center justify-between'>
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={index}>
              <div className='flex flex-col items-center flex-1'>
                {/* Step Circle */}
                <button
                  onClick={() => onStepClick?.(stepNumber)}
                  disabled={!onStepClick}
                  className={cn(
                    'w-12 h-12 rounded-full',
                    'border-4 border-black',
                    'font-bold text-lg',
                    'transition-all duration-200',
                    'focus:outline-none',
                    isCompleted && [
                      'bg-green-500 text-white',
                      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                    ],
                    isActive && [
                      'bg-black text-white',
                      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                      'scale-110',
                    ],
                    !isActive &&
                      !isCompleted && [
                        'bg-white text-black',
                        'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
                      ],
                    onStepClick &&
                      !isCompleted &&
                      'cursor-pointer hover:scale-105'
                  )}
                >
                  {isCompleted ? '✓' : stepNumber}
                </button>

                {/* Step Info */}
                <div className='mt-3 text-center'>
                  <p
                    className={cn(
                      'font-bold uppercase text-sm',
                      isActive || isCompleted ? 'text-black' : 'text-gray-500'
                    )}
                  >
                    {step.title}
                  </p>
                  {step.description && (
                    <p className='text-xs text-gray-600 mt-1'>
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {!isLast && (
                <div
                  className={cn(
                    'flex-1 h-1 mx-2 mt-[-50px]',
                    'border-t-4 border-black',
                    isCompleted && 'bg-green-500'
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

Stepper.displayName = 'Stepper';
