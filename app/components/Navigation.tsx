'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../src/utils/cn';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Docs', href: '/docs' },
  {
    name: 'Components',
    children: [
      { name: 'Accordion', href: '/docs/accordion' },
      { name: 'Alert', href: '/docs/alert' },
      { name: 'Avatar', href: '/docs/avatar' },
      { name: 'Badge', href: '/docs/badge' },
      { name: 'Breadcrumb', href: '/docs/breadcrumb' },
      { name: 'Button', href: '/docs/button' },
      { name: 'Card', href: '/docs/card' },
      { name: 'Checkbox', href: '/docs/checkbox' },
      { name: 'Chip', href: '/docs/chip' },
      { name: 'Collapsible', href: '/docs/collapsible' },
      { name: 'ColorPicker', href: '/docs/color-picker' },
      { name: 'Command', href: '/docs/command' },
      { name: 'Confetti', href: '/docs/confetti' },
      { name: 'ContextMenu', href: '/docs/context-menu' },
      { name: 'DatePicker', href: '/docs/date-picker' },
      { name: 'Divider', href: '/docs/divider' },
      { name: 'Drawer', href: '/docs/drawer' },
      { name: 'Dropdown', href: '/docs/dropdown' },
      { name: 'FileUpload', href: '/docs/file-upload' },
      { name: 'Input', href: '/docs/input' },
      { name: 'InteractiveCards', href: '/docs/interactive-cards' },
      { name: 'Modal', href: '/docs/modal' },
      { name: 'Motion', href: '/docs/motion' },
      { name: 'Pagination', href: '/docs/pagination' },
      { name: 'Popover', href: '/docs/popover' },
      { name: 'Progress', href: '/docs/progress' },
      { name: 'Radio', href: '/docs/radio' },
      { name: 'Rating', href: '/docs/rating' },
      { name: 'Select', href: '/docs/select' },
      { name: 'Separator', href: '/docs/separator' },
      { name: 'Skeleton', href: '/docs/skeleton' },
      { name: 'Slider', href: '/docs/slider' },
      { name: 'Spinner', href: '/docs/spinner' },
      { name: 'Stepper', href: '/docs/stepper' },
      { name: 'Sticker', href: '/docs/sticker' },
      { name: 'Switch', href: '/docs/switch' },
      { name: 'Table', href: '/docs/table' },
      { name: 'Tabs', href: '/docs/tabs' },
      { name: 'Textarea', href: '/docs/textarea' },
      { name: 'Timeline', href: '/docs/timeline' },
      { name: 'Toast', href: '/docs/toast' },
      { name: 'Toggle', href: '/docs/toggle' },
      { name: 'Tooltip', href: '/docs/tooltip' },
    ],
  },
];

interface NavigationProps {
  onItemClick?: () => void;
}

export function Navigation({ onItemClick }: NavigationProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(['Components']);

  const toggleSection = (sectionName: string) => {
    setOpenSections(prev => 
      prev.includes(sectionName)
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  return (
    <nav className='w-full h-screen bg-white border-r-4 border-black p-4 sm:p-6 overflow-y-auto'>
      <div className='mb-6 lg:mb-8'>
        <Link href='/' className='block' onClick={onItemClick}>
          <h1 className='text-2xl sm:text-3xl font-black uppercase mb-2'>🎨 Brutal UI</h1>
          <p className='text-xs sm:text-sm font-bold text-gray-600'>v0.1.0</p>
        </Link>
      </div>

      <div className='space-y-4 sm:space-y-6'>
        {navigation.map((section) => (
          <div key={section.name}>
            {section.href ? (
              <Link
                href={section.href}
                onClick={onItemClick}
                className={cn(
                  'block px-3 sm:px-4 py-2 font-bold uppercase text-xs sm:text-sm border-2 border-black transition-all',
                  pathname === section.href
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-gray-100 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                )}
              >
                {section.name}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => toggleSection(section.name)}
                  className='w-full flex items-center justify-between px-3 sm:px-4 py-2 font-bold uppercase text-xs sm:text-sm text-gray-600 border-b-2 border-black mb-2 hover:bg-gray-50 transition-colors'
                >
                  <span>{section.name}</span>
                  <span className={cn(
                    'transform transition-transform duration-200',
                    openSections.includes(section.name) ? 'rotate-90' : ''
                  )}>
                    ▶
                  </span>
                </button>
                <div className={cn(
                  'overflow-hidden transition-all duration-200',
                  openSections.includes(section.name) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                )}>
                  <div className='space-y-1 pb-2'>
                    {section.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onItemClick}
                        className={cn(
                          'block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all border-l-4',
                          pathname === child.href
                            ? 'border-black bg-gray-100 font-bold'
                            : 'border-transparent hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100'
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
