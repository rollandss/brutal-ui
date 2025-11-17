'use client';

import { useState } from 'react';
import { Rating } from '../../../src/components/rating';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function RatingDocs() {
  const [rating, setRating] = useState(3);

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Rating</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Зірковий рейтинг з hover preview та read-only режимом.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Rating } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Interactive Rating
        </h2>
        <ComponentPreview>
          <div>
            <Rating value={rating} onChange={setRating} />
            <p className='mt-4 font-bold'>Current Rating: {rating}/5</p>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`const [rating, setRating] = useState(3);

<Rating value={rating} onChange={setRating} />
<p>Current Rating: {rating}/5</p>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Read-Only
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <div>
              <Rating value={5} readOnly />
              <span className='ml-2 font-bold'>5.0 (Perfect)</span>
            </div>
            <div>
              <Rating value={4} readOnly />
              <span className='ml-2 font-bold'>4.0 (Great)</span>
            </div>
            <div>
              <Rating value={3} readOnly />
              <span className='ml-2 font-bold'>3.0 (Good)</span>
            </div>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Rating value={5} readOnly />
<Rating value={4} readOnly />
<Rating value={3} readOnly />`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Sizes
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <Rating value={4} size='sm' readOnly />
            <Rating value={4} size='md' readOnly />
            <Rating value={4} size='lg' readOnly />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Rating value={4} size='sm' />
<Rating value={4} size='md' />
<Rating value={4} size='lg' />`}
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
                <td className='px-4 py-3 font-mono text-sm'>number</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Rating value (0-5)</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onChange</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Change handler</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>readOnly</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Disable interaction</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>size</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"md"</td>
                <td className='px-4 py-3'>sm | md | lg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
