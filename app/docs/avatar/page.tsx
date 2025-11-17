'use client';

import { Avatar, AvatarGroup } from '../../../src/components/avatar';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function AvatarDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Avatar</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Аватар користувача з fallback та групування.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { Avatar, AvatarGroup } from '@brutal-ui/react';`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <div className='flex gap-4 items-center'>
            <Avatar src='https://i.pravatar.cc/150?img=1' alt='John Doe' />
            <Avatar fallback='JS' alt='Jane Smith' />
            <Avatar fallback='BJ' alt='Bob Johnson' size='lg' />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Avatar src='https://i.pravatar.cc/150' alt='John Doe' />
<Avatar fallback='JS' alt='Jane Smith' />
<Avatar fallback='BJ' alt='Bob Johnson' size='lg' />`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Sizes & Shapes
        </h2>
        <ComponentPreview>
          <div className='flex gap-4 items-center'>
            <Avatar fallback='SM' size='sm' />
            <Avatar fallback='MD' size='md' />
            <Avatar fallback='LG' size='lg' />
            <Avatar fallback='XL' size='xl' />
          </div>
          <div className='flex gap-4 items-center mt-4'>
            <Avatar fallback='SQ' shape='square' />
            <Avatar fallback='CI' shape='circle' />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Avatar fallback='SM' size='sm' />
<Avatar fallback='MD' size='md' />
<Avatar fallback='LG' size='lg' />

<Avatar fallback='SQ' shape='square' />
<Avatar fallback='CI' shape='circle' />`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Avatar Group
        </h2>
        <ComponentPreview>
          <AvatarGroup max={3}>
            <Avatar fallback='JD' alt='John Doe' />
            <Avatar fallback='JS' alt='Jane Smith' />
            <Avatar fallback='BJ' alt='Bob Johnson' />
            <Avatar fallback='AW' alt='Alice Williams' />
            <Avatar fallback='CB' alt='Charlie Brown' />
          </AvatarGroup>
        </ComponentPreview>
        <CodeBlock
          code={`<AvatarGroup max={3}>
  <Avatar fallback='JD' alt='John Doe' />
  <Avatar fallback='JS' alt='Jane Smith' />
  <Avatar fallback='BJ' alt='Bob Johnson' />
  <Avatar fallback='AW' alt='Alice Williams' />
  <Avatar fallback='CB' alt='Charlie Brown' />
</AvatarGroup>`}
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
                <td className='px-4 py-3 font-mono text-sm'>src</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Image URL</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>fallback</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Fallback text/initials</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>size</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"md"</td>
                <td className='px-4 py-3'>sm | md | lg | xl</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>shape</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"circle"</td>
                <td className='px-4 py-3'>circle | square</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
