'use client';

import { useState } from 'react';
import { FileUpload } from '../../../src/components/file-upload';
import { Badge } from '../../../src/components/badge';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';

export default function FileUploadDocs() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>File Upload</h1>
          <Badge variant='success'>New</Badge>
        </div>
        <p className='text-xl text-gray-700'>
          Drag & drop завантаження з file list та max size валідацією.
        </p>
      </div>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={`import { FileUpload } from '@brutal-ui/react';`} />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <div>
            <FileUpload
              label='Upload Files'
              onChange={setFiles}
              accept='image/*'
              maxSize={5}
            />
            {files.length > 0 && (
              <div className='mt-4'>
                <p className='font-bold mb-2'>Selected Files:</p>
                <ul className='list-disc list-inside'>
                  {files.map((file, index) => (
                    <li key={index}>
                      {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ComponentPreview>
        <CodeBlock
          code={`const [files, setFiles] = useState<File[]>([]);

<FileUpload
  label='Upload Files'
  onChange={setFiles}
  accept='image/*'
  maxSize={5}
/>

{files.map((file) => (
  <div key={file.name}>{file.name}</div>
))}`}
        />
      </section>

      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Multiple Files
        </h2>
        <ComponentPreview>
          <FileUpload
            label='Upload Multiple Files'
            onChange={(files) => console.log(files)}
            multiple
          />
        </ComponentPreview>
        <CodeBlock
          code={`<FileUpload
  label='Upload Multiple Files'
  onChange={(files) => console.log(files)}
  multiple
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
                <td className='px-4 py-3 font-mono text-sm'>label</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Upload label</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>onChange</td>
                <td className='px-4 py-3 font-mono text-sm'>function</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>File change handler</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>accept</td>
                <td className='px-4 py-3 font-mono text-sm'>string</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Accepted file types</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>maxSize</td>
                <td className='px-4 py-3 font-mono text-sm'>number</td>
                <td className='px-4 py-3 font-mono text-sm'>-</td>
                <td className='px-4 py-3'>Max size in MB</td>
              </tr>
              <tr>
                <td className='px-4 py-3 font-mono text-sm'>multiple</td>
                <td className='px-4 py-3 font-mono text-sm'>boolean</td>
                <td className='px-4 py-3 font-mono text-sm'>false</td>
                <td className='px-4 py-3'>Allow multiple files</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
