'use client';

import { useState } from 'react';
import { Navigation } from '../components/Navigation';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='flex min-h-screen'>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className='lg:hidden fixed top-4 left-4 z-50 bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
      >
        <div className='w-6 h-6 flex flex-col justify-center space-y-1'>
          <span className='block w-6 h-0.5 bg-black'></span>
          <span className='block w-6 h-0.5 bg-black'></span>
          <span className='block w-6 h-0.5 bg-black'></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Navigation - Desktop & Mobile */}
      <div className={`
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64
        transform transition-transform duration-200 ease-in-out lg:transition-none
      `}>
        <Navigation onItemClick={() => setMobileMenuOpen(false)} />
      </div>

      {/* Main Content */}
      <main className='flex-1 lg:ml-0 bg-gray-50'>
        <div className='max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8'>
          {children}
        </div>
      </main>
    </div>
  );
}
