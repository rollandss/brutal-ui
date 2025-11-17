'use client';

import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';
import { Badge } from '../../../src/components/badge';

export default function ButtonDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Button</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Interactive button component with ripple effect and multiple variants.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { Button } from '@brutal-ui/react';`}
          language='tsx'
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Variants
        </h2>
        <ComponentPreview>
          <div className='flex flex-wrap gap-4'>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='success'>Success</Button>
            <Button variant='danger'>Danger</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Button variant='primary'>Primary</Button>
<Button variant='secondary'>Secondary</Button>
<Button variant='success'>Success</Button>
<Button variant='danger'>Danger</Button>
<Button variant='outline'>Outline</Button>
<Button variant='ghost'>Ghost</Button>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Sizes
        </h2>
        <ComponentPreview>
          <div className='flex flex-wrap items-center gap-4'>
            <Button size='sm'>Small</Button>
            <Button size='md'>Medium</Button>
            <Button size='lg'>Large</Button>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Button size='sm'>Small</Button>
<Button size='md'>Medium</Button>
<Button size='lg'>Large</Button>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          States
        </h2>
        <ComponentPreview>
          <div className='flex flex-wrap gap-4'>
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Button>Normal</Button>
<Button disabled>Disabled</Button>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Icons
        </h2>
        <ComponentPreview>
          <div className='flex flex-wrap gap-4'>
            <Button>
              <span className='mr-2'>💾</span>
              Save
            </Button>
            <Button variant='danger'>
              <span className='mr-2'>🗑️</span>
              Delete
            </Button>
            <Button variant='success'>
              <span className='mr-2'>✓</span>
              Confirm
            </Button>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Button>
  <span className='mr-2'>💾</span>
  Save
</Button>
<Button variant='danger'>
  <span className='mr-2'>🗑️</span>
  Delete
</Button>`}
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
                <td className='px-4 py-3 font-mono text-sm'>variant</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"primary"</td>
                <td className='px-4 py-3'>Button style variant</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>size</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"md"</td>
                <td className='px-4 py-3'>Button size</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>disabled</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Disable button interactions</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onClick</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Click event handler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
