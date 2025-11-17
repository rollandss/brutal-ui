'use client';

import { ReactNode } from 'react';

interface ComponentPreviewProps {
  title?: string;
  children: ReactNode;
}

export function ComponentPreview({ title, children }: ComponentPreviewProps) {
  return (
    <div className='my-6 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
      {title && (
        <div className='border-b-4 border-black bg-gray-100 px-6 py-3'>
          <h3 className='text-lg font-bold uppercase'>{title}</h3>
        </div>
      )}
      <div className='p-6'>{children}</div>
    </div>
  );
}
