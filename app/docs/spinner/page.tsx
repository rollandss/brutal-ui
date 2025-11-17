'use client';

import { Spinner, Loader } from '../../../src/components/spinner';
import { Badge } from '../../../src/components/badge';
import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';
import { useState } from 'react';

export default function SpinnerDocs() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Spinner</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Індикатор завантаження + Loader з fullScreen варіантом.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { Spinner, Loader } from '@brutal-ui/react';`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Spinner Sizes
        </h2>
        <ComponentPreview>
          <div className='flex gap-8 items-center'>
            <Spinner size='sm' />
            <Spinner size='md' />
            <Spinner size='lg' />
            <Spinner size='xl' />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Spinner size='sm' />
<Spinner size='md' />
<Spinner size='lg' />
<Spinner size='xl' />`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Loader Component
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <div className='relative h-32 border-4 border-black p-4'>
              <Loader text='Loading...' />
            </div>
            <Button onClick={() => setShowLoader(true)}>
              Show Full Screen Loader
            </Button>
          </div>

          {showLoader && <Loader text='Loading data...' fullScreen />}
        </ComponentPreview>
        <CodeBlock
          code={`// Inline loader
<div className='relative'>
  <Loader text='Loading...' />
</div>

// Full screen loader
<Loader
  text='Loading data...'
  fullScreen
  onCancel={() => setShowLoader(false)}
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
                <td className='px-4 py-3 font-mono text-sm'>size</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"md"</td>
                <td className='px-4 py-3'>sm | md | lg | xl (Spinner)</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>text</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Loading text (Loader)</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>fullScreen</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Full screen mode (Loader)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
