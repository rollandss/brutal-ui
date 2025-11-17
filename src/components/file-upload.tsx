'use client';

import React, { useRef, useState } from 'react';
import { cn } from '../utils/cn';

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  label?: string;
  error?: string;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  multiple = false,
  maxSize,
  onChange,
  disabled = false,
  label,
  error,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const newFiles = Array.from(fileList);

    // Filter by max size if specified
    const validFiles = maxSize
      ? newFiles.filter((file) => file.size <= maxSize)
      : newFiles;

    setFiles(validFiles);
    onChange?.(validFiles);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (!disabled) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange?.(newFiles);
  };

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className='block text-sm font-bold uppercase mb-2'>
          {label}
        </label>
      )}

      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={cn(
          'relative border-4 border-dashed border-black',
          'bg-white p-8 text-center',
          'transition-all duration-200',
          'cursor-pointer',
          dragActive && 'bg-gray-100 border-solid',
          disabled && 'opacity-50 cursor-not-allowed',
          error && 'border-red-500'
        )}
        onClick={() => !disabled && inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type='file'
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
          className='hidden'
        />

        <div className='flex flex-col items-center gap-4'>
          <svg
            className='w-16 h-16 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
            />
          </svg>

          <div>
            <p className='font-bold uppercase text-sm mb-1'>
              {dragActive ? 'Drop files here' : 'Drag & Drop files here'}
            </p>
            <p className='text-xs text-gray-600 uppercase font-bold'>
              or click to browse
            </p>
          </div>

          {maxSize && (
            <p className='text-xs text-gray-500 font-bold'>
              Max size: {formatFileSize(maxSize)}
            </p>
          )}
        </div>
      </div>

      {error && (
        <p className='mt-2 text-sm font-bold text-red-500 uppercase'>{error}</p>
      )}

      {/* File list */}
      {files.length > 0 && (
        <div className='mt-4 space-y-2'>
          {files.map((file, index) => (
            <div
              key={index}
              className='flex items-center justify-between p-3 bg-white border-4 border-black'
            >
              <div className='flex items-center gap-3 flex-1 min-w-0'>
                <svg
                  className='w-6 h-6 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                <div className='flex-1 min-w-0'>
                  <p className='font-bold text-sm truncate'>{file.name}</p>
                  <p className='text-xs text-gray-600 font-bold'>
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className='p-2 hover:bg-gray-100 transition-colors border-2 border-black ml-2'
                aria-label='Remove file'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={3}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

FileUpload.displayName = 'FileUpload';
