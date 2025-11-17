'use client';

import { useState } from 'react';
import { Dropdown } from '../../../src/components/dropdown';
import { Badge } from '../../../src/components/badge';
import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function DropdownDocs() {
  const items = [
    {
      label: 'Profile',
      icon: '👤',
      onClick: () => console.log('Profile opened'),
    },
    {
      label: 'Settings',
      icon: '⚙️',
      onClick: () => console.log('Settings opened'),
    },
    { divider: true } as any,
    {
      label: 'Logout',
      icon: '🚪',
      onClick: () => console.log('Logged out'),
    },
  ];

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Dropdown</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Випадаюче меню з іконками, діленнями та keyboard навігацією.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Dropdown } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Dropdown trigger={<Button>Open Menu</Button>} items={items} />
        </ComponentPreview>
        <CodeBlock
          code={`const items = [
  {
    label: 'Profile',
    icon: '👤',
    onClick: () => console.log('Profile'),
  },
  { divider: true },
  {
    label: 'Logout',
    icon: '🚪',
    onClick: () => console.log('Logout'),
  },
];

<Dropdown
  trigger={<Button>Open Menu</Button>}
  items={items}
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Props
        </h2>
        <div className='overflow-x-auto border-4 border-black'>
          <table className='w-full'>
            <thead className='bg-gray-900 text-white'>
              <tr>
                <th className='px-4 py-3 text-left font-bold uppercase'>
                  Prop
                </th>
                <th className='px-4 py-3 text-left font-bold uppercase'>
                  Type
                </th>
                <th className='px-4 py-3 text-left font-bold uppercase'>
                  Default
                </th>
                <th className='px-4 py-3 text-left font-bold uppercase'>
                  Description
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y-4 divide-black'>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>trigger</td>
                <td className='px-4 py-3 font-mono text-sm'>ReactNode</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Trigger button/element</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>items</td>
                <td className='px-4 py-3 font-mono text-sm'>DropdownItem[]</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Menu items</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>isOpen</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Open/closed state</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
