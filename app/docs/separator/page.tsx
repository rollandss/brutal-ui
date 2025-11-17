'use client';

import { Separator } from '../../../src/components/separator';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function SeparatorDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Separator</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Розділювач контенту з можливістю додавання тексту.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Separator } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Horizontal Separator
        </h2>
        <ComponentPreview>
          <div>
            <p>Content above separator</p>
            <Separator />
            <p>Content below separator</p>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<p>Content above</p>
<Separator />
<p>Content below</p>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Label
        </h2>
        <ComponentPreview>
          <div>
            <p>Section One</p>
            <Separator label='OR' />
            <p>Section Two</p>
          </div>
        </ComponentPreview>
        <CodeBlock code={`<Separator label='OR' />`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Vertical Separator
        </h2>
        <ComponentPreview>
          <div className='flex items-center h-20'>
            <div className='px-4'>Left</div>
            <Separator orientation='vertical' />
            <div className='px-4'>Right</div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<div className='flex items-center'>
  <div>Left</div>
  <Separator orientation='vertical' />
  <div>Right</div>
</div>`}
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
                <td className='px-4 py-3 font-mono text-sm'>orientation</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"horizontal"</td>
                <td className='px-4 py-3'>horizontal | vertical</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>label</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Optional label text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
