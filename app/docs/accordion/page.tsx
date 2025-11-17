'use client';

import { Accordion, AccordionItem } from '../../../src/components/accordion';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function AccordionDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Accordion</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Collapsible content sections with smooth animations.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { Accordion, AccordionItem } from '@brutal-ui/react';`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Single Mode
        </h2>
        <ComponentPreview>
          <Accordion type='single'>
            <AccordionItem value='item-1' trigger='What is Brutal UI?'>
              <p>
                Brutal UI is a React component library with neobrutalist design.
                Bold borders, bright colors, and sharp shadows for modern web
                design!
              </p>
            </AccordionItem>

            <AccordionItem value='item-2' trigger='How to install?'>
              <p className='mb-2'>Simply install the package:</p>
              <code className='block bg-black text-white p-4 border-4 border-black font-mono text-sm'>
                npm install @brutal-ui/react
              </code>
            </AccordionItem>

            <AccordionItem
              value='item-3'
              trigger='What components are available?'
            >
              <ul className='list-disc list-inside space-y-1'>
                <li>Button with ripple effect</li>
                <li>Modal with ESC/overlay close</li>
                <li>Switch, Checkbox, Radio</li>
                <li>Tabs, Accordion, Toast</li>
                <li>And many more!</li>
              </ul>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
        <CodeBlock
          code={`<Accordion type='single'>
  <AccordionItem value='item-1' trigger='What is Brutal UI?'>
    <p>Brutal UI is a React component library...</p>
  </AccordionItem>
  
  <AccordionItem value='item-2' trigger='How to install?'>
    <p>Simply install the package...</p>
  </AccordionItem>
</Accordion>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Multiple Mode
        </h2>
        <ComponentPreview>
          <Accordion type='multiple'>
            <AccordionItem value='feature-1' trigger='🎯 Bold Design'>
              <p>
                Thick borders and strong shadows create a powerful visual
                presence.
              </p>
            </AccordionItem>

            <AccordionItem value='feature-2' trigger='♿ Accessible'>
              <p>
                All components include proper ARIA attributes and keyboard
                navigation.
              </p>
            </AccordionItem>

            <AccordionItem value='feature-3' trigger='⚡ Performance'>
              <p>Tree-shakable components optimized for modern bundlers.</p>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
        <CodeBlock
          code={`<Accordion type='multiple'>
  <AccordionItem value='feature-1' trigger='Bold Design'>
    <p>Thick borders and strong shadows...</p>
  </AccordionItem>
  
  <AccordionItem value='feature-2' trigger='Accessible'>
    <p>Proper ARIA attributes...</p>
  </AccordionItem>
</Accordion>`}
        />
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
                  Accordion
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
                <td className='px-4 py-3 font-mono text-sm'>type</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"single"</td>
                <td className='px-4 py-3'>Mode: single or multiple</td>
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
                  AccordionItem
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
                <td className='px-4 py-3'>Unique identifier</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>trigger</td>
                <td className='px-4 py-3 font-mono text-sm'>ReactNode</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Trigger button content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
