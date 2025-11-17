'use client';

import { useState } from 'react';
import { Progress } from '../../../src/components/progress';
import { Button } from '../../../src/components/button';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function ProgressDocs() {
  const [value, setValue] = useState(65);

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Progress</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Progress bars and indicators with multiple color variants.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Progress } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <div>
              <div className='flex justify-between mb-2'>
                <span className='font-bold'>Loading</span>
                <span className='font-bold'>{value}%</span>
              </div>
              <Progress value={value} />
            </div>
            <div className='flex gap-2'>
              <Button
                onClick={() => setValue(Math.max(0, value - 10))}
                size='sm'
                disabled={value === 0}
              >
                -10%
              </Button>
              <Button
                onClick={() => setValue(Math.min(100, value + 10))}
                size='sm'
                disabled={value === 100}
              >
                +10%
              </Button>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`const [value, setValue] = useState(65);

<Progress value={value} />`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Color Variants
        </h2>
        <ComponentPreview>
          <div className='space-y-6'>
            <div>
              <span className='font-bold mb-2 block'>Primary (Black)</span>
              <Progress value={75} color='primary' />
            </div>
            <div>
              <span className='font-bold mb-2 block'>Success (Green)</span>
              <Progress value={80} color='success' />
            </div>
            <div>
              <span className='font-bold mb-2 block'>Warning (Yellow)</span>
              <Progress value={45} color='warning' />
            </div>
            <div>
              <span className='font-bold mb-2 block'>Danger (Red)</span>
              <Progress value={25} color='danger' />
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Progress value={75} color='primary' />
<Progress value={80} color='success' />
<Progress value={45} color='warning' />
<Progress value={25} color='danger' />`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Use Cases
        </h2>
        <ComponentPreview>
          <div className='space-y-6'>
            <div>
              <div className='flex justify-between mb-2'>
                <span className='font-bold'>File Upload</span>
                <span className='text-sm'>3 of 5 files</span>
              </div>
              <Progress value={60} color='primary' />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <span className='font-bold'>Profile Completion</span>
                <span className='text-sm'>8/10 steps</span>
              </div>
              <Progress value={80} color='success' />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <span className='font-bold'>Storage Usage</span>
                <span className='text-sm'>89 GB of 100 GB</span>
              </div>
              <Progress value={89} color='warning' />
            </div>
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
                <td className='px-4 py-3 font-mono text-sm'>value</td>
                <td className='px-4 py-3 font-mono text-sm'>number</td>
                <td className='px-4 py-3 font-mono text-sm'>0</td>
                <td className='px-4 py-3'>Progress value (0-100)</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>color</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"primary"</td>
                <td className='px-4 py-3'>Color variant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
