'use client';

import { useState } from 'react';
import { Input } from '../../../src/components/input';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function InputDocs() {
  const [value, setValue] = useState('');

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Input</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Text input fields with labels, placeholders, and error states.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { Input } from '@brutal-ui/react';`}
          language='tsx'
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Input
            label='Email'
            type='email'
            placeholder='your@email.com'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </ComponentPreview>
        <CodeBlock
          code={`const [value, setValue] = useState('');

<Input
  label='Email'
  type='email'
  placeholder='your@email.com'
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Error
        </h2>
        <ComponentPreview>
          <Input
            label='Password'
            type='password'
            placeholder='••••••••'
            error='Password must be at least 8 characters'
          />
        </ComponentPreview>
        <CodeBlock
          code={`<Input
  label='Password'
  type='password'
  placeholder='••••••••'
  error='Password must be at least 8 characters'
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Disabled State
        </h2>
        <ComponentPreview>
          <Input label='Username' value='john_doe_123' disabled />
        </ComponentPreview>
        <CodeBlock
          code={`<Input
  label='Username'
  value='john_doe_123'
  disabled
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Different Types
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <Input label='Text' type='text' placeholder='Enter text' />
            <Input label='Email' type='email' placeholder='your@email.com' />
            <Input label='Password' type='password' placeholder='••••••••' />
            <Input label='Number' type='number' placeholder='123' />
            <Input label='Search' type='search' placeholder='Search...' />
          </div>
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
                <td className='px-4 py-3'>Input label text</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>type</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"text"</td>
                <td className='px-4 py-3'>HTML input type</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>placeholder</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Placeholder text</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>error</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Error message to display</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>disabled</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Disable input</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
