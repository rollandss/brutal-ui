'use client';

import { useState } from 'react';
import { Radio, RadioGroup } from '../../../src/components/radio';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function RadioDocs() {
  const [value, setValue] = useState('option1');

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Radio</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Radio buttons for single selection from multiple options.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { Radio, RadioGroup } from '@brutal-ui/react';`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <RadioGroup value={value} onValueChange={setValue}>
            <Radio value='option1' label='Option 1' />
            <Radio value='option2' label='Option 2' />
            <Radio value='option3' label='Option 3' />
          </RadioGroup>
          <p className='mt-4 font-bold'>Selected: {value}</p>
        </ComponentPreview>
        <CodeBlock
          code={`const [value, setValue] = useState('option1');

<RadioGroup value={value} onValueChange={setValue}>
  <Radio value='option1' label='Option 1' />
  <Radio value='option2' label='Option 2' />
  <Radio value='option3' label='Option 3' />
</RadioGroup>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Disabled Options
        </h2>
        <ComponentPreview>
          <RadioGroup value='available' onValueChange={() => {}}>
            <Radio value='available' label='Available' />
            <Radio value='disabled1' label='Disabled option' disabled />
            <Radio value='disabled2' label='Another disabled' disabled />
          </RadioGroup>
        </ComponentPreview>
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Use Case: Payment Method
        </h2>
        <ComponentPreview>
          <RadioGroup value='card' onValueChange={() => {}}>
            <Radio value='card' label='💳 Credit Card' />
            <Radio value='paypal' label='🅿️ PayPal' />
            <Radio value='crypto' label='₿ Cryptocurrency' />
            <Radio value='bank' label='🏦 Bank Transfer' />
          </RadioGroup>
        </ComponentPreview>
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Props
        </h2>
        <div className='overflow-x-auto border-4 border-black mb-4'>
          <table className='w-full'>
            <thead className='bg-gray-900 text-white'>
              <tr>
                <th
                  className='px-4 py-3 text-left font-bold uppercase'
                  colSpan={4}
                >
                  RadioGroup
                </th>
              </tr>
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
                <td className='px-4 py-3 font-mono text-sm'>value</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Selected value</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onValueChange</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Value change handler</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='overflow-x-auto border-4 border-black'>
          <table className='w-full'>
            <thead className='bg-gray-900 text-white'>
              <tr>
                <th
                  className='px-4 py-3 text-left font-bold uppercase'
                  colSpan={4}
                >
                  Radio
                </th>
              </tr>
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
                <td className='px-4 py-3 font-mono text-sm'>value</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Radio button value</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>label</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Label text</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>disabled</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Disable radio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
