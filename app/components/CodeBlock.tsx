'use client';

import { useState } from 'react';
import { cn } from '../../src/utils/cn';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'tsx', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='my-4 border-4 border-black bg-gray-900 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
      {title && (
        <div className='flex items-center justify-between border-b-4 border-black bg-gray-800 px-4 py-2'>
          <span className='text-sm font-bold uppercase'>{title}</span>
          <span className='text-xs font-mono text-gray-400'>{language}</span>
        </div>
      )}
      <div className='relative'>
        <pre className='overflow-x-auto p-4'>
          <code className='text-sm font-mono'>{code}</code>
        </pre>
        <button
          onClick={copyCode}
          className={cn(
            'absolute top-2 right-2 px-3 py-1 text-xs font-bold uppercase',
            'border-2 border-white transition-all',
            copied
              ? 'bg-green-500 text-white'
              : 'bg-white text-black hover:bg-gray-200'
          )}
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
