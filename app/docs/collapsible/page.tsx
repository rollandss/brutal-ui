'use client';

import { Collapsible } from '../../../src/components/collapsible';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function CollapsibleDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Collapsible</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Згортання та розгортання контенту.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Collapsible } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <Collapsible trigger='What is Brutal UI?' defaultOpen>
              <p>
                Brutal UI is a React component library with neobrutalist design.
                Bold borders, bright colors, and sharp shadows!
              </p>
            </Collapsible>

            <Collapsible trigger='How to install?'>
              <p className='mb-2'>Install via npm:</p>
              <code className='block bg-black text-white p-4 font-mono text-sm'>
                npm install @brutal-ui/react
              </code>
            </Collapsible>

            <Collapsible trigger='Features'>
              <ul className='list-disc list-inside space-y-1'>
                <li>39 components</li>
                <li>TypeScript support</li>
                <li>Tailwind CSS</li>
                <li>Fully accessible</li>
              </ul>
            </Collapsible>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Collapsible trigger='What is Brutal UI?' defaultOpen>
  <p>Brutal UI is a React component library...</p>
</Collapsible>

<Collapsible trigger='How to install?'>
  <code>npm install @brutal-ui/react</code>
</Collapsible>`}
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
                <td className='px-4 py-3 font-mono text-sm'>trigger</td>
                <td className='px-4 py-3 font-mono text-sm'>ReactNode</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Trigger button content</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>children</td>
                <td className='px-4 py-3 font-mono text-sm'>ReactNode</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Collapsible content</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>defaultOpen</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Initially open</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
