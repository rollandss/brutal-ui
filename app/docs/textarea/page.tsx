'use client';

import { useState } from 'react';
import { Textarea } from '../../../src/components/textarea';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function TextareaDocs() {
  const [value, setValue] = useState('');

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Textarea</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Multi-line text input with character counting and auto-resize.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Textarea } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Write something brutal here...'
            rows={5}
          />
          <p className='mt-2 text-sm font-bold'>Characters: {value.length}</p>
        </ComponentPreview>
        <CodeBlock
          code={`const [value, setValue] = useState('');

<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder='Write something brutal here...'
  rows={5}
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Label
        </h2>
        <ComponentPreview>
          <Textarea
            label='Description'
            placeholder='Enter a detailed description...'
            rows={4}
          />
        </ComponentPreview>
        <CodeBlock
          code={`<Textarea
  label='Description'
  placeholder='Enter a detailed description...'
  rows={4}
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Error
        </h2>
        <ComponentPreview>
          <Textarea
            label='Comment'
            placeholder='Add your comment...'
            error='Comment must be at least 10 characters'
            rows={3}
          />
        </ComponentPreview>
        <CodeBlock
          code={`<Textarea
  label='Comment'
  placeholder='Add your comment...'
  error='Comment must be at least 10 characters'
  rows={3}
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Disabled State
        </h2>
        <ComponentPreview>
          <Textarea
            value='This textarea is disabled and cannot be edited.'
            disabled
            rows={3}
          />
        </ComponentPreview>
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
                <td className='px-4 py-3 font-mono text-sm'>label</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Label text</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>placeholder</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Placeholder text</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>rows</td>
                <td className='px-4 py-3 font-mono text-sm'>number</td>
                <td className='px-4 py-3 font-mono text-sm'>3</td>
                <td className='px-4 py-3'>Number of visible rows</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>error</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Error message</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>disabled</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Disable textarea</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
