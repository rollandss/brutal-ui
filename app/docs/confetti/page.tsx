'use client';

import { useState } from 'react';
import { Confetti } from '../../../src/components/confetti';
import { Badge } from '../../../src/components/badge';
import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function ConfettiDocs() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Confetti</h1>
          <Badge variant='success'>Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Celebrate with animated confetti particles! 🎉
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Confetti } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <div className='relative min-h-[200px]'>
            <Button
              onClick={() => {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 3000);
              }}
              variant='success'
            >
              🎉 Celebrate!
            </Button>
            {showConfetti && <Confetti active={true} />}
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`const [showConfetti, setShowConfetti] = useState(false);

<Button
  onClick={() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }}
>
  Celebrate!
</Button>

{showConfetti && <Confetti active={true} />}`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Customization
        </h2>
        <p className='mb-4 text-lg'>
          Control duration, particle count, and animation speed:
        </p>
        <CodeBlock
          code={`<Confetti 
  active={true}
  duration={5000}
  particleCount={150}
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Use Cases
        </h2>
        <div className='space-y-4 bg-gray-50 border-4 border-black p-6'>
          <div className='flex items-start gap-3'>
            <span className='text-2xl'>✅</span>
            <div>
              <strong className='font-bold block mb-1'>
                Successful Actions
              </strong>
              <p className='text-gray-700'>
                Form submission, account creation, checkout completion
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-2xl'>🎯</span>
            <div>
              <strong className='font-bold block mb-1'>Achievements</strong>
              <p className='text-gray-700'>
                Milestone reached, level up, streak completed
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='text-2xl'>🎊</span>
            <div>
              <strong className='font-bold block mb-1'>Special Events</strong>
              <p className='text-gray-700'>
                Birthday, anniversary, winning a contest
              </p>
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
                <td className='px-4 py-3 font-mono text-sm'>active</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Trigger confetti animation</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>duration</td>
                <td className='px-4 py-3 font-mono text-sm'>number</td>
                <td className='px-4 py-3 font-mono text-sm'>3000</td>
                <td className='px-4 py-3'>Duration in milliseconds</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>particleCount</td>
                <td className='px-4 py-3 font-mono text-sm'>number</td>
                <td className='px-4 py-3 font-mono text-sm'>100</td>
                <td className='px-4 py-3'>Number of particles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
