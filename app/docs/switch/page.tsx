'use client';

import { useState } from 'react';
import { Switch } from '../../../src/components/switch';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function SwitchDocs() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Switch</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Toggle switches for binary on/off settings with smooth animations.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Switch } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Switch
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            label={`Notifications (${enabled ? 'ON' : 'OFF'})`}
          />
        </ComponentPreview>
        <CodeBlock
          code={`const [enabled, setEnabled] = useState(true);

<Switch
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
  label={\`Notifications (\${enabled ? 'ON' : 'OFF'})\`}
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Without Label
        </h2>
        <ComponentPreview>
          <Switch checked={true} onChange={() => {}} />
        </ComponentPreview>
        <CodeBlock code={`<Switch checked={true} onChange={() => {}} />`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Multiple Switches
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <Switch checked={true} onChange={() => {}} label='Dark Mode' />
            <Switch
              checked={false}
              onChange={() => {}}
              label='Email Notifications'
            />
            <Switch
              checked={true}
              onChange={() => {}}
              label='Push Notifications'
            />
            <Switch checked={false} onChange={() => {}} label='Auto-save' />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Disabled State
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <Switch checked={false} disabled label='Disabled OFF' />
            <Switch checked={true} disabled label='Disabled ON' />
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
                <td className='px-4 py-3 font-mono text-sm'>checked</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Controlled checked state</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onChange</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Change event handler</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>label</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Label text</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>disabled</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Disable switch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
