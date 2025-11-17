'use client';

import { useState } from 'react';
import { Popover } from '../../../src/components/popover';
import { Badge } from '../../../src/components/badge';
import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function PopoverDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Popover</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Плаваючий контент з click/hover тригерами, 4 позиції.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Popover } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Click Trigger
        </h2>
        <ComponentPreview>
          <Popover
            trigger={<Button>Click Me</Button>}
            content={
              <div className='p-4'>
                <h3 className='font-bold mb-2'>Popover Title</h3>
                <p>This is the popover content.</p>
              </div>
            }
          />
        </ComponentPreview>
        <CodeBlock
          code={`<Popover
  trigger={<Button>Click Me</Button>}
  content={
    <div>
      <h3>Popover Title</h3>
      <p>This is the popover content.</p>
    </div>
  }
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Positions
        </h2>
        <ComponentPreview>
          <div className='flex gap-4 justify-center'>
            <Popover
              trigger={<Button size='sm'>Top</Button>}
              content={<div className='p-4'>Top position</div>}
              position='top'
            />
            <Popover
              trigger={<Button size='sm'>Bottom</Button>}
              content={<div className='p-4'>Bottom position</div>}
              position='bottom'
            />
            <Popover
              trigger={<Button size='sm'>Left</Button>}
              content={<div className='p-4'>Left position</div>}
              position='left'
            />
            <Popover
              trigger={<Button size='sm'>Right</Button>}
              content={<div className='p-4'>Right position</div>}
              position='right'
            />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Popover position='top' trigger={...} content={...} />
<Popover position='bottom' trigger={...} content={...} />
<Popover position='left' trigger={...} content={...} />
<Popover position='right' trigger={...} content={...} />`}
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
                <td className='px-4 py-3'>Trigger element</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>content</td>
                <td className='px-4 py-3 font-mono text-sm'>ReactNode</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Popover content</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>position</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"bottom"</td>
                <td className='px-4 py-3'>top | bottom | left | right</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
