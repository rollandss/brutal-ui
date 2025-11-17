'use client';

import { useState } from 'react';
import { ColorPicker } from '../../../src/components/color-picker';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function ColorPickerDocs() {
  const [color, setColor] = useState('#FF0000');

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Color Picker</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Вибір кольору з пресетами та hex input.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { ColorPicker } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <ColorPicker label='Choose Color' value={color} onChange={setColor} />
          <p className='mt-4 font-bold'>Selected: {color}</p>
        </ComponentPreview>
        <CodeBlock
          code={`const [color, setColor] = useState('#FF0000');

<ColorPicker
  label='Choose Color'
  value={color}
  onChange={setColor}
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
                <td className='px-4 py-3 font-mono text-sm'>value</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Selected color (hex)</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onChange</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Change handler</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>presetColors</td>
                <td className='px-4 py-3 font-mono text-sm'>string[]</td>
                <td className='px-4 py-3 font-mono text-sm'>defaults</td>
                <td className='px-4 py-3'>Array of preset colors</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
