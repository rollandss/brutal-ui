'use client';

import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function BadgeDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Badge</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Labels and tags for categorization and status indication.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Badge } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Variants
        </h2>
        <ComponentPreview>
          <div className='flex flex-wrap gap-3'>
            <Badge variant='default'>Default</Badge>
            <Badge variant='primary'>Primary</Badge>
            <Badge variant='success'>Success</Badge>
            <Badge variant='danger'>Danger</Badge>
            <Badge variant='warning'>Warning</Badge>
            <Badge variant='info'>Info</Badge>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Badge variant='default'>Default</Badge>
<Badge variant='primary'>Primary</Badge>
<Badge variant='success'>Success</Badge>
<Badge variant='danger'>Danger</Badge>
<Badge variant='warning'>Warning</Badge>
<Badge variant='info'>Info</Badge>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Sizes
        </h2>
        <ComponentPreview>
          <div className='flex flex-wrap items-center gap-3'>
            <Badge size='sm'>Small</Badge>
            <Badge size='md'>Medium</Badge>
            <Badge size='lg'>Large</Badge>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Badge size='sm'>Small</Badge>
<Badge size='md'>Medium</Badge>
<Badge size='lg'>Large</Badge>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Use Cases
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <span className='font-bold'>Status:</span>
              <Badge variant='success'>Active</Badge>
              <Badge variant='danger'>Inactive</Badge>
              <Badge variant='warning'>Pending</Badge>
            </div>
            <div className='flex items-center gap-3'>
              <span className='font-bold'>Tags:</span>
              <Badge variant='info'>React</Badge>
              <Badge variant='info'>TypeScript</Badge>
              <Badge variant='info'>Tailwind</Badge>
            </div>
            <div className='flex items-center gap-3'>
              <span className='font-bold'>Priority:</span>
              <Badge variant='danger'>High</Badge>
              <Badge variant='warning'>Medium</Badge>
              <Badge variant='default'>Low</Badge>
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
                <td className='px-4 py-3 font-mono text-sm'>variant</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"default"</td>
                <td className='px-4 py-3'>Badge color variant</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>size</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"md"</td>
                <td className='px-4 py-3'>Badge size: sm, md, lg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
