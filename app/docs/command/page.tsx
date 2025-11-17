'use client';

import { useState } from 'react';
import { Command } from '../../../src/components/command';
import { Badge } from '../../../src/components/badge';
import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function CommandDocs() {
  const [isOpen, setIsOpen] = useState(false);

  const commands = [
    {
      id: '1',
      label: 'Створити файл',
      keywords: ['new', 'file'],
      icon: '📄',
      onSelect: () => console.log('Файл створено'),
    },
    {
      id: '2',
      label: 'Відкрити налаштування',
      keywords: ['settings', 'config'],
      icon: '⚙️',
      onSelect: () => console.log('Налаштування відкрито'),
    },
    {
      id: '3',
      label: 'Зберегти документ',
      keywords: ['save', 'document'],
      icon: '💾',
      onSelect: () => console.log('Документ збережено'),
    },
  ];

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Command</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Командна палітра для швидкого доступу (Cmd+K стиль).
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Command } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Button onClick={() => setIsOpen(true)}>Open Command Palette</Button>

          <Command
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            items={commands}
            placeholder='Type a command...'
          />
        </ComponentPreview>
        <CodeBlock
          code={`const [isOpen, setIsOpen] = useState(false);

const commands = [
  {
    id: '1',
    label: 'Створити файл',
    keywords: ['new', 'file'],
    icon: '📄',
    onSelect: () => console.log('Create file'),
  },
];

<Command
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  items={commands}
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
                <td className='px-4 py-3 font-mono text-sm'>isOpen</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Open/closed state</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onClose</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Close handler</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>items</td>
                <td className='px-4 py-3 font-mono text-sm'>CommandItem[]</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Array of commands</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
