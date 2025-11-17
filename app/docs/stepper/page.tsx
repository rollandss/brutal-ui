'use client';

import { useState } from 'react';
import { Stepper } from '../../../src/components/stepper';
import { Badge } from '../../../src/components/badge';
import { Button } from '../../../src/components/button';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function StepperDocs() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Stepper</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Покроковий процес з візуальною індикацією прогресу.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Stepper } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Stepper
            currentStep={currentStep}
            onStepClick={setCurrentStep}
            steps={[
              { title: 'Акаунт', description: 'Створити акаунт' },
              { title: 'Профіль', description: 'Заповнити інформацію' },
              { title: 'Налаштування', description: 'Встановити параметри' },
              { title: 'Завершення', description: 'Підтвердити дані' },
            ]}
          />
          <div className='flex gap-4 mt-8'>
            <Button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              variant='secondary'
            >
              ← Назад
            </Button>
            <Button
              onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              disabled={currentStep === 4}
              variant='primary'
            >
              Далі →
            </Button>
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`const [currentStep, setCurrentStep] = useState(1);

<Stepper
  currentStep={currentStep}
  onStepClick={setCurrentStep}
  steps={[
    { title: 'Акаунт', description: 'Створити акаунт' },
    { title: 'Профіль', description: 'Заповнити інформацію' },
    { title: 'Налаштування', description: 'Встановити параметри' },
    { title: 'Завершення', description: 'Підтвердити дані' },
  ]}
/>`}
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
                <td className='px-4 py-3 font-mono text-sm'>steps</td>
                <td className='px-4 py-3 font-mono text-sm'>Step[]</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Array of steps</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>currentStep</td>
                <td className='px-4 py-3 font-mono text-sm'>number</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Current active step (1-based)</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onStepClick</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Step click handler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
