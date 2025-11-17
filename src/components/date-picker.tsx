'use client';

import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  disabled?: boolean;
  label?: string;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value: controlledValue,
  onChange,
  disabled = false,
  label,
  minDate,
  maxDate,
  className,
}) => {
  const [internalValue, setInternalValue] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const value = controlledValue ?? internalValue;
  const [currentMonth, setCurrentMonth] = useState(
    new Date(value.getFullYear(), value.getMonth(), 1)
  );

  const handleDateSelect = (date: Date) => {
    if (!disabled) {
      if (!controlledValue) {
        setInternalValue(date);
      }
      onChange?.(date);
      setIsOpen(false);
    }
  };

  const monthNames = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({
    length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1,
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('uk-UA');
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const isSelected = (day: number) => {
    return (
      value.getDate() === day &&
      value.getMonth() === currentMonth.getMonth() &&
      value.getFullYear() === currentMonth.getFullYear()
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className={cn('relative w-full', className)}>
      {label && (
        <label className='block text-sm font-bold uppercase mb-2'>
          {label}
        </label>
      )}

      <button
        type='button'
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          'w-full px-4 py-3 text-left',
          'bg-white border-4 border-black',
          'font-bold uppercase text-sm',
          'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
          'transition-all duration-200',
          'focus:outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          !disabled && 'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
          'flex items-center justify-between'
        )}
      >
        <span>📅 {formatDate(value)}</span>
        <svg
          className={cn(
            'w-5 h-5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && !disabled && (
        <div className='absolute z-50 mt-2 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 w-full max-w-sm'>
          {/* Month Navigation */}
          <div className='flex items-center justify-between mb-4'>
            <button
              onClick={prevMonth}
              className='p-2 border-2 border-black hover:bg-gray-100'
            >
              ←
            </button>
            <span className='font-bold uppercase text-sm'>
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button
              onClick={nextMonth}
              className='p-2 border-2 border-black hover:bg-gray-100'
            >
              →
            </button>
          </div>

          {/* Day Names */}
          <div className='grid grid-cols-7 gap-1 mb-2'>
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day) => (
              <div
                key={day}
                className='text-center text-xs font-bold text-gray-600 p-1'
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className='grid grid-cols-7 gap-1'>
            {emptyDays.map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {days.map((day) => {
              const disabled = isDateDisabled(day);
              const selected = isSelected(day);

              return (
                <button
                  key={day}
                  onClick={() =>
                    !disabled &&
                    handleDateSelect(
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth(),
                        day
                      )
                    )
                  }
                  disabled={disabled}
                  className={cn(
                    'p-2 text-sm font-bold border-2 border-black',
                    'transition-all duration-150',
                    selected && 'bg-black text-white',
                    !selected && !disabled && 'hover:bg-gray-100',
                    disabled && 'opacity-30 cursor-not-allowed'
                  )}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

DatePicker.displayName = 'DatePicker';
