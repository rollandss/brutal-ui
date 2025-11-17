'use client';

import React, { useEffect } from 'react';
import { cn } from '../utils/cn';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  className?: string;
}

/**
 * Brutal Modal - Модальне вікно з brutal дизайном
 *
 * @example
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Заголовок">
 *   Контент модального вікна
 * </Modal>
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in'
      role='dialog'
      aria-modal='true'
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Overlay */}
      <div
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden='true'
      />

      {/* Modal Content */}
      <div
        className={cn(
          'relative w-full bg-white',
          'border-4 border-black',
          'shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
          'animate-slide-up',
          'max-h-[90vh] overflow-y-auto',

          // Розміри
          size === 'sm' && 'max-w-md',
          size === 'md' && 'max-w-lg',
          size === 'lg' && 'max-w-2xl',
          size === 'xl' && 'max-w-4xl',

          className
        )}
      >
        {/* Header */}
        {title && (
          <div className='flex items-center justify-between border-b-4 border-black p-6'>
            <h2
              id='modal-title'
              className='text-2xl font-bold uppercase tracking-wide'
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className='ml-4 flex h-10 w-10 items-center justify-center border-4 border-black bg-white font-bold transition-all hover:bg-black hover:text-white active:translate-y-0.5'
              aria-label='Закрити'
            >
              ✕
            </button>
          </div>
        )}

        {/* Body */}
        <div className='p-6'>{children}</div>
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';
