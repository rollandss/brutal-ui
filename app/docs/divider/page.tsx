'use client';

import { Divider } from '../../../src/components/divider';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function DividerDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Divider</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Розділювач контенту з текстом, горизонтальний/вертикальний.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Divider } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Horizontal
        </h2>
        <ComponentPreview>
          <div>
            <p>Content above</p>
            <Divider />
            <p>Content below</p>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<p>Content above</p>
<Divider />
<p>Content below</p>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Label
        </h2>
        <ComponentPreview>
          <div>
            <Divider label='OR' />
            <Divider label='CONTINUE WITH' />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Divider label='OR' />
<Divider label='CONTINUE WITH' />`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Vertical
        </h2>
        <ComponentPreview>
          <div className='flex items-center h-32'>
            <div className='flex-1 text-center'>Left Section</div>
            <Divider orientation='vertical' />
            <div className='flex-1 text-center'>Middle Section</div>
            <Divider orientation='vertical' />
            <div className='flex-1 text-center'>Right Section</div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<div className='flex items-center'>
  <div>Left</div>
  <Divider orientation='vertical' />
  <div>Right</div>
</div>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Thickness
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <Divider thickness='thin' />
            <Divider thickness='medium' />
            <Divider thickness='thick' />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Divider thickness='thin' />
<Divider thickness='medium' />
<Divider thickness='thick' />`}
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
                <td className='px-4 py-3'>Optional label</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>thickness</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"medium"</td>
                <td className='px-4 py-3'>thin | medium | thick</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
