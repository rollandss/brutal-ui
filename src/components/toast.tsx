'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { cn } from '../utils/cn';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    const duration = toast.duration ?? 5000;
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
};

interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onClose }) => {
  if (toasts.length === 0) return null;

  return (
    <div className='fixed top-4 right-4 z-50 space-y-4 max-w-md'>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onClose={() => onClose(toast.id)}
        />
      ))}
    </div>
  );
};

interface ToastItemProps {
  toast: Toast;
  onClose: () => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onClose }) => {
  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  };

  return (
    <div
      className={cn(
        'relative p-4 border-4 border-black',
        'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
        'animate-slide-up',
        toast.type === 'success' && 'bg-green-100',
        toast.type === 'error' && 'bg-red-100',
        toast.type === 'info' && 'bg-blue-100',
        toast.type === 'warning' && 'bg-yellow-100'
      )}
      role='alert'
    >
      <button
        onClick={onClose}
        className='absolute top-2 right-2 w-6 h-6 flex items-center justify-center border-2 border-black bg-white font-bold hover:bg-black hover:text-white transition-colors'
        aria-label='Закрити'
      >
        ✕
      </button>
      <div className='flex gap-3 pr-8'>
        <div className='flex-shrink-0 text-2xl'>{icons[toast.type]}</div>
        <div className='flex-1'>
          <h3 className='font-bold text-lg uppercase tracking-wide mb-1'>
            {toast.title}
          </h3>
          {toast.description && (
            <p className='text-sm font-medium'>{toast.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
