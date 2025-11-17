'use client';

import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../../../src/components/card';
import { Button } from '../../../src/components/button';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function CardDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Card</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Versatile container component with header, content, and footer
          sections.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from '@brutal-ui/react';`}
          language='tsx'
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the card content. You can put any content here.</p>
            </CardContent>
            <CardFooter>
              <Button variant='primary'>Action</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
        <CodeBlock
          code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This is the card content.</p>
  </CardContent>
  <CardFooter>
    <Button variant='primary'>Action</Button>
  </CardFooter>
</Card>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Variants
        </h2>
        <ComponentPreview>
          <div className='grid gap-6 md:grid-cols-3'>
            <Card variant='default'>
              <CardHeader>
                <CardTitle>Default</CardTitle>
              </CardHeader>
              <CardContent>
                <p>8px shadow</p>
              </CardContent>
            </Card>

            <Card variant='elevated'>
              <CardHeader>
                <CardTitle>Elevated</CardTitle>
              </CardHeader>
              <CardContent>
                <p>12px shadow</p>
              </CardContent>
            </Card>

            <Card variant='bordered'>
              <CardHeader>
                <CardTitle>Bordered</CardTitle>
              </CardHeader>
              <CardContent>
                <p>No shadow</p>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<Card variant='default'>...</Card>
<Card variant='elevated'>...</Card>
<Card variant='bordered'>...</Card>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Badge
        </h2>
        <ComponentPreview>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle>Product Card</CardTitle>
                <Badge variant='success'>New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className='mb-4'>Check out our latest product release!</p>
              <Badge variant='info'>Featured</Badge>
            </CardContent>
            <CardFooter>
              <Button variant='primary' className='w-full'>
                Learn More
              </Button>
            </CardFooter>
          </Card>
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
                <td className='px-4 py-3 font-mono text-sm'>variant</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"default"</td>
                <td className='px-4 py-3'>Card style variant</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>padding</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"md"</td>
                <td className='px-4 py-3'>Padding size: none, sm, md, lg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
