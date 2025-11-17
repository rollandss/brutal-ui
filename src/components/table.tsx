'use client';

import React from 'react';
import { cn } from '../utils/cn';

export interface TableColumn<T = any> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  width?: string;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  striped?: boolean;
  hoverable?: boolean;
  className?: string;
}

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  striped = false,
  hoverable = true,
  className,
}: TableProps<T>) => {
  return (
    <div className={cn('overflow-x-auto border-4 border-black', className)}>
      <table className='w-full'>
        <thead className='bg-black text-white'>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className='px-4 py-3 text-left font-bold uppercase text-sm'
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y-4 divide-black'>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                'transition-colors duration-150',
                striped && rowIndex % 2 === 1 && 'bg-gray-50',
                hoverable && 'hover:bg-gray-100'
              )}
            >
              {columns.map((column) => (
                <td key={column.key} className='px-4 py-3 font-medium'>
                  {column.render
                    ? column.render(row)
                    : row[column.key]?.toString() || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && (
        <div className='text-center py-8 text-gray-500 font-bold uppercase'>
          No data available
        </div>
      )}
    </div>
  );
};

Table.displayName = 'Table';
