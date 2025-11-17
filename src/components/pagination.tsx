'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPrevNext?: boolean;
  maxVisible?: number;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showPrevNext = true,
  maxVisible = 7,
  className,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftSiblingIndex = Math.max(currentPage - 1, 1);
      const rightSiblingIndex = Math.min(currentPage + 1, totalPages);

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

      pages.push(1);

      if (shouldShowLeftDots) {
        pages.push('...');
      }

      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      if (shouldShowRightDots) {
        pages.push('...');
      }

      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  const buttonClass = (isActive: boolean, isDisabled: boolean = false) =>
    cn(
      'px-4 py-2 min-w-[44px] h-[44px]',
      'font-bold uppercase text-sm',
      'border-4 border-black',
      'transition-all duration-200',
      'focus:outline-none',
      isActive && [
        'bg-black text-white',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      ],
      !isActive &&
        !isDisabled && [
          'bg-white text-black',
          'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
          'hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
          'active:translate-y-1',
        ],
      isDisabled && 'opacity-50 cursor-not-allowed'
    );

  return (
    <nav
      role='navigation'
      aria-label='Pagination'
      className={cn('flex items-center justify-center gap-2', className)}
    >
      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={buttonClass(false, currentPage === 1)}
          aria-label='Previous page'
        >
          ←
        </button>
      )}

      {pages.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={buttonClass(page === currentPage)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ) : (
          <span
            key={index}
            className='px-2 font-bold text-gray-400'
            aria-hidden='true'
          >
            {page}
          </span>
        )
      )}

      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={buttonClass(false, currentPage === totalPages)}
          aria-label='Next page'
        >
          →
        </button>
      )}
    </nav>
  );
};

Pagination.displayName = 'Pagination';
