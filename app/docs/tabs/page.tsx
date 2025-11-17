'use client';

import { useState } from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../../../src/components/tabs';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function TabsDocs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Tabs</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Organize content into tabbed sections with smooth transitions.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@brutal-ui/react';`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value='tab1'>Profile</TabsTrigger>
              <TabsTrigger value='tab2'>Settings</TabsTrigger>
              <TabsTrigger value='tab3'>About</TabsTrigger>
            </TabsList>

            <TabsContent value='tab1'>
              <div className='p-6 bg-gray-50 border-4 border-black'>
                <h3 className='text-xl font-bold mb-4'>Profile Information</h3>
                <p>View and edit your profile details here.</p>
              </div>
            </TabsContent>

            <TabsContent value='tab2'>
              <div className='p-6 bg-gray-50 border-4 border-black'>
                <h3 className='text-xl font-bold mb-4'>Settings</h3>
                <p>Manage your account settings and preferences.</p>
              </div>
            </TabsContent>

            <TabsContent value='tab3'>
              <div className='p-6 bg-gray-50 border-4 border-black'>
                <h3 className='text-xl font-bold mb-4'>About</h3>
                <p>Learn more about this application.</p>
              </div>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
        <CodeBlock
          code={`const [activeTab, setActiveTab] = useState('tab1');

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value='tab1'>Profile</TabsTrigger>
    <TabsTrigger value='tab2'>Settings</TabsTrigger>
    <TabsTrigger value='tab3'>About</TabsTrigger>
  </TabsList>
  
  <TabsContent value='tab1'>
    <div className='p-6 bg-gray-50 border-4 border-black'>
      <h3>Profile Information</h3>
      <p>Your profile content...</p>
    </div>
  </TabsContent>
  
  <TabsContent value='tab2'>
    <div className='p-6 bg-gray-50 border-4 border-black'>
      <h3>Settings</h3>
      <p>Your settings content...</p>
    </div>
  </TabsContent>
</Tabs>`}
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
                  Tabs
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
                <td className='px-4 py-3'>Active tab value</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onValueChange</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Tab change handler</td>
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
                  TabsTrigger
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
                <td className='px-4 py-3'>Tab identifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
