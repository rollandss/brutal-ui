'use client';

import { useState } from 'react';
import { Toggle, ToggleGroup } from '../../../src/components/toggle';
import { Card, CardContent } from '../../../src/components/card';

export default function TogglePage() {
  const [toggleStates, setToggleStates] = useState({
    default: false,
    brutal: true,
    neon: false,
    gradient: true,
    sm: false,
    md: true,
    lg: false,
    icon1: true,
    icon2: false,
    icon3: true,
  });

  return (
    <div className='w-full'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-4 border-b-4 border-black pb-4'>
        🎚️ Toggle Component
      </h1>
      <p className='text-base sm:text-lg mb-6 sm:mb-8'>
        Brutal toggle switches з різними стилями, розмірами та іконками.
      </p>

      {/* Variants */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Варіанти стилів
        </h2>
        <ToggleGroup orientation='vertical' className='sm:orientation-horizontal'>
          <Toggle
            checked={toggleStates.default}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, default: checked })
            }
            variant='default'
            label='Default'
          />
          <Toggle
            checked={toggleStates.brutal}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, brutal: checked })
            }
            variant='brutal'
            label='Brutal'
          />
          <Toggle
            checked={toggleStates.neon}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, neon: checked })
            }
            variant='neon'
            label='Neon'
          />
          <Toggle
            checked={toggleStates.gradient}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, gradient: checked })
            }
            variant='gradient'
            label='Gradient'
          />
        </ToggleGroup>
      </section>

      {/* Sizes */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Розміри
        </h2>
        <ToggleGroup orientation='vertical' className='sm:orientation-horizontal'>
          <Toggle
            checked={toggleStates.sm}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, sm: checked })
            }
            size='sm'
            label='Small'
          />
          <Toggle
            checked={toggleStates.md}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, md: checked })
            }
            size='md'
            label='Medium'
          />
          <Toggle
            checked={toggleStates.lg}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, lg: checked })
            }
            size='lg'
            label='Large'
          />
        </ToggleGroup>
      </section>

      {/* With Icons */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          З іконками
        </h2>
        <ToggleGroup orientation='vertical' className='sm:orientation-horizontal'>
          <Toggle
            checked={toggleStates.icon1}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, icon1: checked })
            }
            variant='brutal'
            icon={{ on: '✓', off: '✗' }}
            label='Check'
          />
          <Toggle
            checked={toggleStates.icon2}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, icon2: checked })
            }
            variant='neon'
            icon={{ on: '🌙', off: '☀️' }}
            label='Theme'
          />
          <Toggle
            checked={toggleStates.icon3}
            onChange={(checked) =>
              setToggleStates({ ...toggleStates, icon3: checked })
            }
            variant='gradient'
            icon={{ on: '🔊', off: '🔇' }}
            label='Sound'
          />
        </ToggleGroup>
      </section>

      {/* Disabled State */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Disabled
        </h2>
        <ToggleGroup orientation='vertical' className='sm:orientation-horizontal'>
          <Toggle checked disabled label='Disabled On' />
          <Toggle checked={false} disabled label='Disabled Off' />
        </ToggleGroup>
      </section>

      {/* Vertical Group */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Вертикальна група
        </h2>
        <ToggleGroup orientation='vertical'>
          <Toggle checked variant='default' label='Option 1' />
          <Toggle checked={false} variant='brutal' label='Option 2' />
          <Toggle checked variant='neon' label='Option 3' />
        </ToggleGroup>
      </section>

      {/* Code Example */}
      <section className='bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Usage Example
        </h2>
        <div className='overflow-x-auto'>
          <pre className='bg-gray-100 border-4 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm whitespace-pre'>
            {`import { Toggle, ToggleGroup } from '@brutal-ui/react';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleGroup>
      <Toggle
        checked={checked}
        onChange={setChecked}
        variant="brutal"
        size="lg"
        label="Enable Feature"
        icon={{ on: '✓', off: '✗' }}
      />
    </ToggleGroup>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Props Table */}
      <section className='mt-8 sm:mt-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Props
        </h2>
        <div className='overflow-x-auto -mx-4 sm:mx-0'>
          <div className='min-w-[640px] px-4 sm:px-0'>
            <table className='w-full border-4 border-black'>
              <thead className='bg-black text-white'>
                <tr>
                  <th className='border-2 border-black p-2 sm:p-3 text-left font-bold text-xs sm:text-sm'>
                    Prop
                  </th>
                  <th className='border-2 border-black p-2 sm:p-3 text-left font-bold text-xs sm:text-sm'>
                    Type
                  </th>
                  <th className='border-2 border-black p-2 sm:p-3 text-left font-bold text-xs sm:text-sm'>
                    Default
                  </th>
                  <th className='border-2 border-black p-2 sm:p-3 text-left font-bold text-xs sm:text-sm'>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className='font-mono text-xs sm:text-sm'>
                <tr className='bg-gray-50'>
                  <td className='border-2 border-black p-2 sm:p-3 font-bold'>checked</td>
                  <td className='border-2 border-black p-2 sm:p-3'>boolean</td>
                  <td className='border-2 border-black p-2 sm:p-3'>false</td>
                  <td className='border-2 border-black p-2 sm:p-3'>
                    Контрольований стан toggle
                  </td>
                </tr>
                <tr>
                  <td className='border-2 border-black p-2 sm:p-3 font-bold'>
                    onChange
                  </td>
                  <td className='border-2 border-black p-2 sm:p-3'>
                    (checked: boolean) =&gt; void
                  </td>
                  <td className='border-2 border-black p-2 sm:p-3'>-</td>
                  <td className='border-2 border-black p-2 sm:p-3'>
                    Callback при зміні стану
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border-2 border-black p-2 sm:p-3 font-bold'>variant</td>
                  <td className='border-2 border-black p-2 sm:p-3'>
                    default | brutal | neon | gradient
                  </td>
                  <td className='border-2 border-black p-2 sm:p-3'>default</td>
                  <td className='border-2 border-black p-2 sm:p-3'>Варіант стилю</td>
                </tr>
                <tr>
                  <td className='border-2 border-black p-2 sm:p-3 font-bold'>size</td>
                  <td className='border-2 border-black p-2 sm:p-3'>sm | md | lg</td>
                  <td className='border-2 border-black p-2 sm:p-3'>md</td>
                  <td className='border-2 border-black p-2 sm:p-3'>Розмір toggle</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border-2 border-black p-2 sm:p-3 font-bold'>label</td>
                  <td className='border-2 border-black p-2 sm:p-3'>string</td>
                  <td className='border-2 border-black p-2 sm:p-3'>-</td>
                  <td className='border-2 border-black p-2 sm:p-3'>Текст лейбла</td>
                </tr>
                <tr>
                  <td className='border-2 border-black p-2 sm:p-3 font-bold'>icon</td>
                  <td className='border-2 border-black p-2 sm:p-3'>
                    {`{ on: string; off: string }`}
                  </td>
                  <td className='border-2 border-black p-2 sm:p-3'>-</td>
                  <td className='border-2 border-black p-2 sm:p-3'>
                    Іконки для on/off станів
                  </td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border-2 border-black p-2 sm:p-3 font-bold'>
                    disabled
                  </td>
                  <td className='border-2 border-black p-2 sm:p-3'>boolean</td>
                  <td className='border-2 border-black p-2 sm:p-3'>false</td>
                  <td className='border-2 border-black p-2 sm:p-3'>Вимкнений стан</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
