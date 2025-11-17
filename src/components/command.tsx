'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

export interface CommandItem {
  id: string;
  label: string;
  keywords?: string[];
  icon?: React.ReactNode;
  onSelect: () => void;
}

export interface CommandProps {
  items: CommandItem[];
  placeholder?: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Command: React.FC<CommandProps> = ({
  items,
  placeholder = 'Введіть команду...',
  isOpen,
  onClose,
  className,
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = items.filter((item) => {
    const searchLower = search.toLowerCase();
    const matchLabel = item.label.toLowerCase().includes(searchLower);
    const matchKeywords = item.keywords?.some((keyword) =>
      keyword.toLowerCase().includes(searchLower)
    );
    return matchLabel || matchKeywords;
  });

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].onSelect();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black/50 z-50'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Command Palette */}
      <div
        className={cn(
          'fixed top-20 left-1/2 -translate-x-1/2',
          'w-full max-w-2xl',
          'bg-white border-4 border-black',
          'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
          'z-50',
          className
        )}
      >
        {/* Search Input */}
        <div className='border-b-4 border-black p-4'>
          <input
            ref={inputRef}
            type='text'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={placeholder}
            className='w-full text-lg font-bold uppercase outline-none'
          />
        </div>

        {/* Results */}
        <div className='max-h-[400px] overflow-y-auto'>
          {filteredItems.length === 0 ? (
            <div className='p-8 text-center text-gray-500 font-bold uppercase'>
              Нічого не знайдено
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  item.onSelect();
                  onClose();
                }}
                className={cn(
                  'w-full px-6 py-4 text-left',
                  'flex items-center gap-4',
                  'font-bold uppercase text-sm',
                  'border-b-4 border-black last:border-b-0',
                  'transition-colors duration-150',
                  index === selectedIndex
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                )}
              >
                {item.icon && <span className='text-xl'>{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className='border-t-4 border-black p-3 bg-gray-50'>
          <div className='flex items-center justify-between text-xs font-bold text-gray-600 uppercase'>
            <span>↑↓ Навігація</span>
            <span>↵ Вибрати</span>
            <span>ESC Закрити</span>
          </div>
        </div>
      </div>
    </>
  );
};

Command.displayName = 'Command';
