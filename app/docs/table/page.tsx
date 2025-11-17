'use client';

import { Table } from '../../../src/components/table';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function TableDocs() {
  const columns = [
    { header: 'Name', key: 'name' as const },
    { header: 'Email', key: 'email' as const },
    { header: 'Role', key: 'role' as const },
    {
      header: 'Status',
      key: 'status' as const,
      render: (item: { status: string }) => (
        <Badge variant={item.status === 'Active' ? 'success' : 'danger'}>
          {item.status}
        </Badge>
      ),
    },
  ];

  const data = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'User',
      status: 'Inactive',
    },
  ];

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Table</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Таблиця даних з striped/hoverable режимами та кастомним рендерингом.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { Table } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <Table columns={columns} data={data} />
        </ComponentPreview>
        <CodeBlock
          code={`const columns = [
  { header: 'Name', key: 'name' },
  { header: 'Email', key: 'email' },
  { header: 'Role', key: 'role' },
];

const data = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

<Table columns={columns} data={data} />`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Striped & Hoverable
        </h2>
        <ComponentPreview>
          <Table columns={columns} data={data} striped hoverable />
        </ComponentPreview>
        <CodeBlock
          code={`<Table columns={columns} data={data} striped hoverable />`}
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
                <td className='px-4 py-3 font-mono text-sm'>columns</td>
                <td className='px-4 py-3 font-mono text-sm'>Column[]</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Column definitions</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>data</td>
                <td className='px-4 py-3 font-mono text-sm'>T[]</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Table data</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>striped</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Striped rows</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>hoverable</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Hover effect</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
