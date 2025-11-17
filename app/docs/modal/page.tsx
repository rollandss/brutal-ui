'use client';

import { useState } from 'react';
import { Modal } from '../../../src/components/modal';
import { Button } from '../../../src/components/button';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Modal</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Dialog overlays with ESC key support and backdrop click to close.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { Modal } from '@brutal-ui/react';`}
          language='tsx'
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title='Modal Title'
          >
            <p className='mb-4'>
              This is a modal dialog. Press ESC or click outside to close.
            </p>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </Modal>
        </ComponentPreview>
        <CodeBlock
          code={`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title='Modal Title'
>
  <p>This is a modal dialog.</p>
  <Button onClick={() => setIsOpen(false)}>Close</Button>
</Modal>`}
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
                <td className='px-4 py-3 font-mono text-sm'>isOpen</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Controls modal visibility</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onClose</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Called when modal should close</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>title</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Optional modal title</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>size</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"md"</td>
                <td className='px-4 py-3'>Modal size: sm, md, lg, xl</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>
                  closeOnOverlayClick
                </td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>true</td>
                <td className='px-4 py-3'>Close on backdrop click</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Features
        </h2>
        <div className='space-y-4'>
          <div className='p-4 bg-white border-4 border-black'>
            <h3 className='font-bold text-lg mb-2'>⌨️ Keyboard Support</h3>
            <p className='text-gray-700'>
              Press ESC key to close the modal automatically.
            </p>
          </div>
          <div className='p-4 bg-white border-4 border-black'>
            <h3 className='font-bold text-lg mb-2'>🎯 Focus Management</h3>
            <p className='text-gray-700'>
              Focus is trapped inside the modal when open.
            </p>
          </div>
          <div className='p-4 bg-white border-4 border-black'>
            <h3 className='font-bold text-lg mb-2'>📱 Responsive</h3>
            <p className='text-gray-700'>
              Adapts to mobile screens with proper padding.
            </p>
          </div>
          <div className='p-4 bg-white border-4 border-black'>
            <h3 className='font-bold text-lg mb-2'>♿ Accessible</h3>
            <p className='text-gray-700'>
              Includes proper ARIA attributes for screen readers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
