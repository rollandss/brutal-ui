'use client';

import { Alert } from '../../../src/components/alert';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';
import { Badge } from '../../../src/components/badge';

export default function AlertDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Alert</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Display important messages and notifications with different severity
          levels.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { Alert } from '@brutal-ui/react';`}
          language='tsx'
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Variants
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <Alert variant='success' title='Success!'>
              Your changes have been saved successfully.
            </Alert>
            <Alert variant='danger' title='Error!'>
              Something went wrong. Please try again.
            </Alert>
            <Alert variant='warning' title='Warning!'>
              This action cannot be undone.
            </Alert>
            <Alert variant='info' title='Information'>
              New features are available in this version.
            </Alert>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Alert variant='success' title='Success!'>
  Your changes have been saved successfully.
</Alert>

<Alert variant='danger' title='Error!'>
  Something went wrong. Please try again.
</Alert>

<Alert variant='warning' title='Warning!'>
  This action cannot be undone.
</Alert>

<Alert variant='info' title='Information'>
  New features are available in this version.
</Alert>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Without Title
        </h2>
        <ComponentPreview>
          <Alert variant='info'>This is a simple alert without a title.</Alert>
        </ComponentPreview>
        <CodeBlock
          code={`<Alert variant='info'>
  This is a simple alert without a title.
</Alert>`}
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
                <td className='px-4 py-3 font-mono text-sm'>variant</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"info"</td>
                <td className='px-4 py-3'>
                  Alert type: info, success, warning, danger
                </td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>title</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Optional alert title</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>icon</td>
                <td className='px-4 py-3 font-mono text-sm'>ReactNode</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Custom icon (replaces default)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
