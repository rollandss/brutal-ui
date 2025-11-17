'use client';

import { Tooltip } from '../../../src/components/tooltip';
import { Badge } from '../../../src/components/badge';
import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function TooltipDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Tooltip</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Contextual information on hover with multiple positioning options.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Tooltip } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Positions
        </h2>
        <ComponentPreview>
          <div className='flex flex-wrap justify-center gap-8 p-8'>
            <Tooltip content='This appears on top' position='top'>
              <Button>Top</Button>
            </Tooltip>

            <Tooltip content='This appears on the right' position='right'>
              <Button>Right</Button>
            </Tooltip>

            <Tooltip content='This appears on bottom' position='bottom'>
              <Button>Bottom</Button>
            </Tooltip>

            <Tooltip content='This appears on the left' position='left'>
              <Button>Left</Button>
            </Tooltip>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Tooltip content='This appears on top' position='top'>
  <Button>Top</Button>
</Tooltip>

<Tooltip content='This appears on the right' position='right'>
  <Button>Right</Button>
</Tooltip>

<Tooltip content='This appears on bottom' position='bottom'>
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content='This appears on the left' position='left'>
  <Button>Left</Button>
</Tooltip>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Delay
        </h2>
        <ComponentPreview>
          <div className='flex gap-4'>
            <Tooltip content='Instant tooltip' delay={0}>
              <Button>No Delay</Button>
            </Tooltip>

            <Tooltip content='500ms delay' delay={500}>
              <Button>500ms Delay</Button>
            </Tooltip>

            <Tooltip content='1 second delay' delay={1000}>
              <Button>1s Delay</Button>
            </Tooltip>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Tooltip content='Instant tooltip' delay={0}>
  <Button>No Delay</Button>
</Tooltip>

<Tooltip content='500ms delay' delay={500}>
  <Button>500ms Delay</Button>
</Tooltip>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Use Cases
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <Tooltip content='Save your changes (Ctrl+S)'>
                <Button>💾 Save</Button>
              </Tooltip>
              <span className='text-sm text-gray-600'>
                Action with keyboard shortcut
              </span>
            </div>

            <div className='flex items-center gap-4'>
              <Tooltip content='This feature is currently in beta testing'>
                <Badge variant='warning'>Beta</Badge>
              </Tooltip>
              <span className='text-sm text-gray-600'>Status explanation</span>
            </div>

            <div className='flex items-center gap-4'>
              <Tooltip content='john.doe@example.com'>
                <span className='font-bold underline decoration-dashed cursor-help'>
                  John Doe
                </span>
              </Tooltip>
              <span className='text-sm text-gray-600'>
                Additional information
              </span>
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
                <td className='px-4 py-3 font-mono text-sm'>content</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Tooltip text</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>position</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"top"</td>
                <td className='px-4 py-3'>top | bottom | left | right</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>delay</td>
                <td className='px-4 py-3 font-mono text-sm'>number</td>
                <td className='px-4 py-3 font-mono text-sm'>200</td>
                <td className='px-4 py-3'>Delay before showing (ms)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
