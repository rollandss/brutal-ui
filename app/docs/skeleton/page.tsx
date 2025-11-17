'use client';

import {
  BrutalSkeleton,
  BrutalSkeletonText,
  BrutalSkeletonCard,
} from '../../../src/components/skeleton';
import { Badge } from '../../../src/components/badge';
import { Card, CardHeader, CardContent } from '../../../src/components/card';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function SkeletonDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Skeleton</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Loading placeholders with pulse animation for better UX.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock
          code={`import { BrutalSkeleton, BrutalSkeletonText, BrutalSkeletonCard } from '@brutal-ui/react';`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Shapes
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            <BrutalSkeleton width='100%' height='3rem' />
            <BrutalSkeleton width='75%' height='2rem' />
            <BrutalSkeleton width='50%' height='2rem' />
            <BrutalSkeleton width='8rem' height='8rem' radius='50%' />
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`<BrutalSkeleton width='100%' height='3rem' />
<BrutalSkeleton width='75%' height='2rem' />
<BrutalSkeleton width='50%' height='2rem' />
<BrutalSkeleton width='8rem' height='8rem' radius='50%' />`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Card Loading
        </h2>
        <ComponentPreview>
          <Card variant='elevated'>
            <CardHeader>
              <div className='flex items-center gap-4'>
                <BrutalSkeleton width='4rem' height='4rem' radius='50%' />
                <div className='flex-1 space-y-2'>
                  <BrutalSkeleton width='33%' height='1.5rem' />
                  <BrutalSkeleton width='50%' height='1rem' />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className='space-y-3'>
                <BrutalSkeleton width='100%' height='1rem' />
                <BrutalSkeleton width='100%' height='1rem' />
                <BrutalSkeleton width='66%' height='1rem' />
              </div>
            </CardContent>
          </Card>
        </ComponentPreview>
        <CodeBlock
          code={`<Card variant='elevated'>
  <CardHeader>
    <div className='flex items-center gap-4'>
      <Skeleton className='h-16 w-16 rounded-full' />
      <div className='flex-1 space-y-2'>
        <Skeleton className='h-6 w-1/3' />
        <Skeleton className='h-4 w-1/2' />
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <div className='space-y-3'>
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-2/3' />
    </div>
  </CardContent>
</Card>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          List Loading
        </h2>
        <ComponentPreview>
          <div className='space-y-4'>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className='flex items-center gap-4 p-4 border-4 border-black'
              >
                <BrutalSkeleton width='3rem' height='3rem' radius='0.5rem' />
                <div className='flex-1 space-y-2'>
                  <BrutalSkeleton width='25%' height='1.25rem' />
                  <BrutalSkeleton width='50%' height='1rem' />
                </div>
              </div>
            ))}
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`{[1, 2, 3].map((i) => (
  <div key={i} className='flex items-center gap-4 p-4 border-4 border-black'>
    <BrutalSkeleton width='3rem' height='3rem' radius='0.5rem' />
    <div className='flex-1 space-y-2'>
      <BrutalSkeleton width='25%' height='1.25rem' />
      <BrutalSkeleton width='50%' height='1rem' />
    </div>
  </div>
))}`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Use Cases
        </h2>
        <div className='space-y-4 bg-gray-50 border-4 border-black p-6'>
          <div className='flex items-start gap-3'>
            <span className='text-2xl'>📄</span>
            <div>
              <strong className='font-bold block mb-1'>Content Loading</strong>
              <p className='text-gray-700'>
                Articles, blog posts, product details
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-2xl'>👤</span>
            <div>
              <strong className='font-bold block mb-1'>Profile Pages</strong>
              <p className='text-gray-700'>
                User avatars, names, bio information
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-2xl'>🖼️</span>
            <div>
              <strong className='font-bold block mb-1'>Media Galleries</strong>
              <p className='text-gray-700'>Image grids, video thumbnails</p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-2xl'>📊</span>
            <div>
              <strong className='font-bold block mb-1'>Data Tables</strong>
              <p className='text-gray-700'>Loading rows while fetching data</p>
            </div>
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
                <td className='px-4 py-3 font-mono text-sm'>className</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>
                  Custom styles (width, height, etc.)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
