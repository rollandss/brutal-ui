'use client';

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
      { name: 'Modal', href: '/docs/modal' },
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
      { name: 'Switch', href: '/docs/switch' },
      { name: 'Table', href: '/docs/table' },
      { name: 'Tabs', href: '/docs/tabs' },
      { name: 'Textarea', href: '/docs/textarea' },
      { name: 'Timeline', href: '/docs/timeline' },
      { name: 'Toast', href: '/docs/toast' },
      { name: 'Tooltip', href: '/docs/tooltip' },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className='w-64 bg-white border-r-4 border-black p-6 h-screen sticky top-0 overflow-y-auto'>
      <div className='mb-8'>
        <Link href='/' className='block'>
          <h1 className='text-3xl font-black uppercase mb-2'>🎨 Brutal UI</h1>
          <p className='text-sm font-bold text-gray-600'>v0.1.0</p>
        </Link>
      </div>

      <div className='space-y-6'>
        {navigation.map((section) => (
          <div key={section.name}>
            {section.href ? (
              <Link
                href={section.href}
                className={cn(
                  'block px-4 py-2 font-bold uppercase text-sm border-2 border-black transition-all',
                  pathname === section.href
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-gray-100'
                )}
              >
                {section.name}
              </Link>
            ) : (
              <>
                <h2 className='px-4 py-2 font-bold uppercase text-sm text-gray-600 border-b-2 border-black mb-2'>
                  {section.name}
                </h2>
                <div className='space-y-1'>
                  {section.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        'block px-4 py-2 text-sm font-medium transition-all border-l-4',
                        pathname === child.href
                          ? 'border-black bg-gray-100 font-bold'
                          : 'border-transparent hover:border-gray-300 hover:bg-gray-50'
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
