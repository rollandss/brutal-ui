'use client';

import { Timeline } from '../../../src/components/timeline';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function TimelineDocs() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Timeline</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Часова шкала подій з візуальним представленням історії.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Timeline } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Timeline
            items={[
              {
                title: 'Проект створено',
                description: 'Ініціалізація нового проекту Brutal UI',
                date: '01.01.2024',
              },
              {
                title: 'Перша версія',
                description: 'Випуск v0.1.0 з базовими компонентами',
                date: '15.02.2024',
              },
              {
                title: 'Додано документацію',
                description: 'Повна документація для всіх компонентів',
                date: '01.03.2024',
              },
              {
                title: 'Версія 1.0',
                description: 'Стабільний реліз з 30+ компонентами',
                date: '17.11.2024',
              },
            ]}
          />
        </ComponentPreview>
        <CodeBlock
          code={`<Timeline
  items={[
    {
      title: 'Проект створено',
      description: 'Ініціалізація нового проекту',
      date: '01.01.2024',
    },
    {
      title: 'Перша версія',
      description: 'Випуск v0.1.0',
      date: '15.02.2024',
    },
  ]}
/>`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          With Icons
        </h2>
        <ComponentPreview>
          <Timeline
            items={[
              {
                title: 'Реєстрація',
                description: 'Користувач створив акаунт',
                date: '10:30',
                icon: '👤',
              },
              {
                title: 'Email підтверджено',
                description: 'Підтвердження електронної пошти',
                date: '10:32',
                icon: '✉️',
              },
              {
                title: 'Перший вхід',
                description: 'Користувач увійшов в систему',
                date: '10:35',
                icon: '🔓',
              },
            ]}
          />
        </ComponentPreview>
        <CodeBlock
          code={`<Timeline
  items={[
    {
      title: 'Реєстрація',
      description: 'Користувач створив акаунт',
      date: '10:30',
      icon: '👤',
    },
    // ... more items
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
                <td className='px-4 py-3 font-mono text-sm'>items</td>
                <td className='px-4 py-3 font-mono text-sm'>TimelineItem[]</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Array of timeline items</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>variant</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>"default"</td>
                <td className='px-4 py-3'>default | compact</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
