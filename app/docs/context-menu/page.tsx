'use client';

import { ContextMenu } from '../../../src/components/context-menu';
import { Badge } from '../../../src/components/badge';
import { Card, CardContent } from '../../../src/components/card';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';
import { useToast } from '../../../src/components/toast';

export default function ContextMenuDocs() {
  const { addToast } = useToast();

  const menuItems = [
    {
      label: 'Copy',
      icon: '📋',
      shortcut: 'Ctrl+C',
      onClick: () => addToast({ title: 'Copied!', type: 'success' }),
    },
    {
      label: 'Paste',
      icon: '📄',
      shortcut: 'Ctrl+V',
      onClick: () => addToast({ title: 'Pasted!', type: 'info' }),
    },
    { divider: true } as any,
    {
      label: 'Delete',
      icon: '🗑️',
      shortcut: 'Del',
      onClick: () => addToast({ title: 'Deleted!', type: 'error' }),
    },
  ];

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Context Menu</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Контекстне меню при right-click.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { ContextMenu } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <ContextMenu items={menuItems}>
            <Card>
              <CardContent>
                <p className='text-center py-12 font-bold'>
                  Right-click here to see context menu
                </p>
              </CardContent>
            </Card>
          </ContextMenu>
        </ComponentPreview>
        <CodeBlock
          code={`<ContextMenu
  items={[
    {
      label: 'Copy',
      icon: '📋',
      shortcut: 'Ctrl+C',
      onClick: () => console.log('Copy'),
    },
    { divider: true },
    {
      label: 'Delete',
      icon: '🗑️',
      onClick: () => console.log('Delete'),
    },
  ]}
>
  <Card>
    <CardContent>
      Right-click here
    </CardContent>
  </Card>
</ContextMenu>`}
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
                <td className='px-4 py-3 font-mono text-sm'>items</td>
                <td className='px-4 py-3 font-mono text-sm'>
                  ContextMenuItem[]
                </td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Menu items</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>children</td>
                <td className='px-4 py-3 font-mono text-sm'>ReactNode</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Trigger element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
