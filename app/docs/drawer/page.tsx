'use client';

import { useState } from 'react';
import { Drawer } from '../../../src/components/drawer';
import { Badge } from '../../../src/components/badge';
import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function DrawerDocs() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Drawer</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Висувна панель з 4 сторін (left/right/top/bottom), ESC для закриття.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Drawer } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <div className='flex gap-4'>
            <Button onClick={() => setLeftOpen(true)}>Open Left Drawer</Button>
            <Button onClick={() => setRightOpen(true)}>
              Open Right Drawer
            </Button>
          </div>

          <Drawer
            isOpen={leftOpen}
            onClose={() => setLeftOpen(false)}
            position='left'
            title='Left Drawer'
          >
            <div className='space-y-4'>
              <p>This is a left drawer content.</p>
              <p>You can put any content here.</p>
              <Button onClick={() => setLeftOpen(false)}>Close</Button>
            </div>
          </Drawer>

          <Drawer
            isOpen={rightOpen}
            onClose={() => setRightOpen(false)}
            position='right'
            title='Right Drawer'
          >
            <div className='space-y-4'>
              <p>This is a right drawer content.</p>
              <Button onClick={() => setRightOpen(false)}>Close</Button>
            </div>
          </Drawer>
        </ComponentPreview>
        <CodeBlock
          code={`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>
  Open Drawer
</Button>

<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position='left'
  title='Drawer Title'
>
  <p>Drawer content goes here...</p>
</Drawer>`}
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
                <td className='px-4 py-3 font-mono text-sm'>position</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"right"</td>
                <td className='px-4 py-3'>left | right | top | bottom</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>size</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"md"</td>
                <td className='px-4 py-3'>sm | md | lg | xl</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
