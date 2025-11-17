'use client';

import { ToastProvider, useToast } from '../../../src/components/toast';
import { Badge } from '../../../src/components/badge';
import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

function ToastDemo() {
  const { addToast } = useToast();

  return (
    <div className='flex flex-wrap gap-4'>
      <Button
        onClick={() =>
          addToast({ title: 'Operation successful!', type: 'success' })
        }
        variant='success'
      >
        Success Toast
      </Button>

      <Button
        onClick={() =>
          addToast({ title: 'Something went wrong!', type: 'error' })
        }
        variant='danger'
      >
        Error Toast
      </Button>

      <Button
        onClick={() =>
          addToast({ title: 'Please be careful!', type: 'warning' })
        }
      >
        Warning Toast
      </Button>

      <Button
        onClick={() =>
          addToast({ title: 'Here is some information.', type: 'info' })
        }
      >
        Info Toast
      </Button>
    </div>
  );
}

export default function ToastDocs() {
  return (
    <ToastProvider>
      <div className='space-y-8'>
        <div className='border-b-4 border-black pb-6'>
          <div className='flex items-center gap-4 mb-4'>
            <h1 className='text-5xl font-black uppercase'>Toast</h1>
            <Badge variant='success'>Stable</Badge>
          </div>
          <p className='text-xl text-gray-700'>
            Temporary notification messages with automatic dismiss.
          </p>
        </div>

        <section>
          <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
            Import
          </h2>
          <CodeBlock
            code={`import { ToastProvider, useToast } from '@brutal-ui/react';`}
          />
        </section>

        <section>
          <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
            Setup
          </h2>
          <p className='mb-4 text-lg'>
            Wrap your app with ToastProvider at the root level:
          </p>
          <CodeBlock
            code={`import { ToastProvider } from '@brutal-ui/react';

function App() {
  return (
    <ToastProvider>
      {/* Your app content */}
    </ToastProvider>
  );
}`}
          />
        </section>

        <section>
          <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
            Basic Usage
          </h2>
          <ComponentPreview>
            <ToastDemo />
          </ComponentPreview>
          <CodeBlock
            code={`import { useToast } from '@brutal-ui/react';

function MyComponent() {
  const { addToast } = useToast();

  return (
    <Button
      onClick={() => 
        addToast({ 
          message: 'Operation successful!', 
          type: 'success' 
        })
      }
    >
      Show Toast
    </Button>
  );
}`}
          />
        </section>

        <section>
          <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
            Toast Types
          </h2>
          <div className='space-y-4'>
            <div className='bg-green-100 border-4 border-black p-4'>
              <strong className='font-bold'>Success:</strong> For positive
              confirmations
            </div>
            <div className='bg-red-100 border-4 border-black p-4'>
              <strong className='font-bold'>Error:</strong> For failures or
              problems
            </div>
            <div className='bg-yellow-100 border-4 border-black p-4'>
              <strong className='font-bold'>Warning:</strong> For cautionary
              messages
            </div>
            <div className='bg-blue-100 border-4 border-black p-4'>
              <strong className='font-bold'>Info:</strong> For general
              information
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
            Props
          </h2>
          <div className='overflow-x-auto border-4 border-black'>
            <table className='w-full'>
              <thead className='bg-gray-900 text-white'>
                <tr>
                  <th
                    className='px-4 py-3 text-left font-bold uppercase'
                    colSpan={4}
                  >
                    addToast Options
                  </th>
                </tr>
                <tr>
                  <th className='px-4 py-3 text-left font-bold uppercase'>
                    Option
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
                  <td className='px-4 py-3 font-mono text-sm'>message</td>
                  <td className='px-4 py-3 font-mono text-sm'>string</td>
                  <td className='px-4 py-3 font-mono text-sm'>-</td>
                  <td className='px-4 py-3'>Toast message text</td>
                </tr>
                <tr>
                  <td className='px-4 py-3 font-mono text-sm'>type</td>
                  <td className='px-4 py-3 font-mono text-sm'>string</td>
                  <td className='px-4 py-3 font-mono text-sm'>"info"</td>
                  <td className='px-4 py-3'>
                    success | error | warning | info
                  </td>
                </tr>
                <tr>
                  <td className='px-4 py-3 font-mono text-sm'>duration</td>
                  <td className='px-4 py-3 font-mono text-sm'>number</td>
                  <td className='px-4 py-3 font-mono text-sm'>3000</td>
                  <td className='px-4 py-3'>Duration in milliseconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </ToastProvider>
  );
}
