'use client';

import { useState } from 'react';
import { DatePicker } from '../../../src/components/date-picker';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function DatePickerDocs() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Date Picker</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Календар для вибору дати з українською локалізацією.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { DatePicker } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <DatePicker label='Select Date' value={date} onChange={setDate} />
        </ComponentPreview>
        <CodeBlock
          code={`const [date, setDate] = useState(new Date());

<DatePicker
  label='Select Date'
  value={date}
  onChange={setDate}
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
                <td className='px-4 py-3 font-mono text-sm'>value</td>
                <td className='px-4 py-3 font-mono text-sm'>Date</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Selected date</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onChange</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Change handler</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>minDate</td>
                <td className='px-4 py-3 font-mono text-sm'>Date</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Minimum selectable date</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>maxDate</td>
                <td className='px-4 py-3 font-mono text-sm'>Date</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Maximum selectable date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
