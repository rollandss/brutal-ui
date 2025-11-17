'use client';

import { useState } from 'react';
import { Select } from '../../../src/components/select';
import { Slider } from '../../../src/components/slider';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function SelectDocs() {
  const [value, setValue] = useState('');

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Select</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Випадаючий список для вибору опцій.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Select } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Select
            label='Country'
            options={[
              { value: 'ua', label: '🇺🇦 Ukraine' },
              { value: 'us', label: '🇺🇸 United States' },
              { value: 'gb', label: '🇬🇧 United Kingdom' },
              { value: 'de', label: '🇩🇪 Germany' },
            ]}
            value={value}
            onChange={setValue}
            placeholder='Select a country...'
          />
        </ComponentPreview>
        <CodeBlock
          code={`const [value, setValue] = useState('');

<Select
  label='Country'
  options={[
    { value: 'ua', label: '🇺🇦 Ukraine' },
    { value: 'us', label: '🇺🇸 United States' },
  ]}
  value={value}
  onChange={setValue}
  placeholder='Select a country...'
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
                <td className='px-4 py-3 font-mono text-sm'>options</td>
                <td className='px-4 py-3 font-mono text-sm'>SelectOption[]</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Array of options</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>value</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Selected value</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onChange</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Change handler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
