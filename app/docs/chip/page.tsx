'use client';

import { useState } from 'react';
import { Chip } from '../../../src/components/chip';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function ChipDocs() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind']);

  const handleDelete = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Chip</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Теги та чіпси з можливістю видалення та іконками.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Chip } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <div className='flex gap-2'>
            <Chip>Default</Chip>
            <Chip variant='primary'>Primary</Chip>
            <Chip variant='success'>Success</Chip>
            <Chip variant='warning'>Warning</Chip>
            <Chip variant='danger'>Error</Chip>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Chip>Default</Chip>
<Chip variant='primary'>Primary</Chip>
<Chip variant='success'>Success</Chip>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Delete
        </h2>
        <ComponentPreview>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <Chip key={tag} onDelete={() => handleDelete(tag)}>
                {tag}
              </Chip>
            ))}
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind']);

{tags.map((tag) => (
  <Chip
    key={tag}
    onDelete={() => setTags(tags.filter(t => t !== tag))}
  >
    {tag}
  </Chip>
))}`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Icons
        </h2>
        <ComponentPreview>
          <div className='flex gap-2'>
            <Chip icon='⚛️'>React</Chip>
            <Chip icon='🔷' variant='primary'>
              TypeScript
            </Chip>
            <Chip icon='🟢' variant='success'>
              Node.js
            </Chip>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Chip icon='⚛️'>React</Chip>
<Chip icon='🔷' variant='primary'>TypeScript</Chip>`}
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
                <td className='px-4 py-3 font-mono text-sm'>children</td>
                <td className='px-4 py-3 font-mono text-sm'>ReactNode</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Chip content</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>variant</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"default"</td>
                <td className='px-4 py-3'>Color variant</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>icon</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Optional icon</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onDelete</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Delete handler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
