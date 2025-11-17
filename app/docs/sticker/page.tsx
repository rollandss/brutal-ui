'use client';

import { Sticker, StickerGroup } from '../../../src/components/sticker';
import { ToastProvider, useToast } from '../../../src/components/toast';

function StickerPageContent() {
  const { addToast } = useToast();

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <h1 className='text-5xl font-black uppercase mb-4 border-b-4 border-black pb-4'>
        🎨 Sticker Component
      </h1>
      <p className='text-lg mb-8'>
        Brutal стікери - яскраві, інтерактивні елементи з різними анімаціями та
        кольорами.
      </p>

      {/* Basic Stickers */}
      <section className='mb-12 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Basic Stickers
        </h2>
        <StickerGroup>
          <Sticker emoji='⭐' text='Star' />
          <Sticker emoji='💀' text='Brutal' color='pink' />
          <Sticker emoji='🔥' text='Hot' color='orange' />
          <Sticker emoji='💎' text='Gem' color='purple' />
        </StickerGroup>
      </section>

      {/* Sizes */}
      <section className='mb-12 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Sizes
        </h2>
        <StickerGroup>
          <Sticker emoji='🎯' text='Small' size='sm' />
          <Sticker emoji='🎯' text='Medium' size='md' />
          <Sticker emoji='🎯' text='Large' size='lg' />
          <Sticker emoji='🎯' text='XL' size='xl' />
        </StickerGroup>
      </section>

      {/* Colors */}
      <section className='mb-12 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Colors
        </h2>
        <StickerGroup>
          <Sticker emoji='🌈' text='Yellow' color='yellow' />
          <Sticker emoji='🌈' text='Pink' color='pink' />
          <Sticker emoji='🌈' text='Blue' color='blue' />
          <Sticker emoji='🌈' text='Green' color='green' />
          <Sticker emoji='🌈' text='Orange' color='orange' />
          <Sticker emoji='🌈' text='Purple' color='purple' />
          <Sticker emoji='🌈' text='Red' color='red' />
        </StickerGroup>
      </section>

      {/* Animations */}
      <section className='mb-12 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Animations
        </h2>
        <StickerGroup>
          <Sticker emoji='↪️' text='Rotate L' variant='rotate-left' />
          <Sticker emoji='↩️' text='Rotate R' variant='rotate-right' />
          <Sticker emoji='⬆️' text='Bounce' variant='bounce' />
          <Sticker emoji='↔️' text='Wiggle' variant='wiggle' />
          <Sticker emoji='☁️' text='Float' variant='float' />
          <Sticker emoji='💫' text='Pulse' variant='pulse' />
        </StickerGroup>
      </section>

      {/* Interactive */}
      <section className='mb-12 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Interactive (Click Me!)
        </h2>
        <StickerGroup>
          <Sticker
            emoji='🎉'
            text='Party'
            color='pink'
            variant='wiggle'
            onClick={() =>
              addToast({ title: '🎉 Party Time!', type: 'success' })
            }
          />
          <Sticker
            emoji='🚀'
            text='Launch'
            color='blue'
            variant='float'
            onClick={() => addToast({ title: '🚀 To the Moon!', type: 'info' })}
          />
          <Sticker
            emoji='⚡'
            text='Power'
            color='yellow'
            variant='bounce'
            onClick={() =>
              addToast({ title: '⚡ Supercharged!', type: 'warning' })
            }
          />
          <Sticker
            emoji='❤️'
            text='Love'
            color='red'
            variant='pulse'
            onClick={() => addToast({ title: '❤️ Love it!', type: 'success' })}
          />
        </StickerGroup>
      </section>

      {/* Custom Collection */}
      <section className='mb-12 bg-gradient-to-br from-purple-200 to-pink-200 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          🎪 Mega Collection
        </h2>
        <StickerGroup>
          <Sticker
            emoji='💀'
            text='Brutal'
            color='yellow'
            variant='rotate-left'
            size='lg'
          />
          <Sticker
            emoji='🔥'
            text='Fire'
            color='orange'
            variant='float'
            size='md'
          />
          <Sticker
            emoji='⭐'
            text='Star'
            color='blue'
            variant='pulse'
            size='md'
          />
          <Sticker
            emoji='💎'
            text='Diamond'
            color='purple'
            variant='rotate-right'
            size='lg'
          />
          <Sticker
            emoji='🎨'
            text='Art'
            color='pink'
            variant='wiggle'
            size='md'
          />
          <Sticker
            emoji='⚡'
            text='Fast'
            color='yellow'
            variant='bounce'
            size='md'
          />
          <Sticker
            emoji='🚀'
            text='Rocket'
            color='blue'
            variant='rotate-left'
            size='lg'
          />
          <Sticker
            emoji='💯'
            text='100'
            color='green'
            variant='pulse'
            size='md'
          />
          <Sticker
            emoji='🎯'
            text='Target'
            color='red'
            variant='float'
            size='md'
          />
          <Sticker
            emoji='✨'
            text='Magic'
            color='purple'
            variant='rotate-right'
            size='lg'
          />
          <Sticker
            emoji='🌟'
            text='Shine'
            color='yellow'
            variant='wiggle'
            size='md'
          />
          <Sticker
            emoji='🎭'
            text='Drama'
            color='pink'
            variant='bounce'
            size='md'
          />
        </StickerGroup>
      </section>

      {/* Code Example */}
      <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Usage Example
        </h2>
        <pre className='bg-gray-100 border-4 border-black p-4 overflow-x-auto font-mono text-sm'>
          {`import { Sticker, StickerGroup } from '@brutal-ui/react';

function MyComponent() {
  return (
    <StickerGroup>
      <Sticker 
        emoji="💀" 
        text="Brutal" 
        color="yellow"
        variant="rotate-left"
        size="lg"
        onClick={() => console.log('Clicked!')}
      />
      <Sticker 
        emoji="🔥" 
        text="Hot" 
        color="orange"
        variant="float"
      />
    </StickerGroup>
  );
}`}
        </pre>
      </section>

      {/* Props Table */}
      <section className='mt-12 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Props
        </h2>
        <div className='overflow-x-auto'>
          <table className='w-full border-4 border-black'>
            <thead className='bg-black text-white'>
              <tr>
                <th className='border-2 border-black p-3 text-left font-bold'>
                  Prop
                </th>
                <th className='border-2 border-black p-3 text-left font-bold'>
                  Type
                </th>
                <th className='border-2 border-black p-3 text-left font-bold'>
                  Default
                </th>
                <th className='border-2 border-black p-3 text-left font-bold'>
                  Description
                </th>
              </tr>
            </thead>
            <tbody className='font-mono text-sm'>
              <tr className='bg-gray-50'>
                <td className='border-2 border-black p-3 font-bold'>emoji</td>
                <td className='border-2 border-black p-3'>string</td>
                <td className='border-2 border-black p-3'>⭐</td>
                <td className='border-2 border-black p-3'>
                  Emoji для відображення
                </td>
              </tr>
              <tr>
                <td className='border-2 border-black p-3 font-bold'>text</td>
                <td className='border-2 border-black p-3'>string</td>
                <td className='border-2 border-black p-3'>-</td>
                <td className='border-2 border-black p-3'>Текст під emoji</td>
              </tr>
              <tr className='bg-gray-50'>
                <td className='border-2 border-black p-3 font-bold'>variant</td>
                <td className='border-2 border-black p-3'>
                  rotate-left | rotate-right | bounce | wiggle | float | pulse
                </td>
                <td className='border-2 border-black p-3'>rotate-left</td>
                <td className='border-2 border-black p-3'>Тип анімації</td>
              </tr>
              <tr>
                <td className='border-2 border-black p-3 font-bold'>color</td>
                <td className='border-2 border-black p-3'>
                  yellow | pink | blue | green | orange | purple | red
                </td>
                <td className='border-2 border-black p-3'>yellow</td>
                <td className='border-2 border-black p-3'>Колір фону</td>
              </tr>
              <tr className='bg-gray-50'>
                <td className='border-2 border-black p-3 font-bold'>size</td>
                <td className='border-2 border-black p-3'>sm | md | lg | xl</td>
                <td className='border-2 border-black p-3'>md</td>
                <td className='border-2 border-black p-3'>Розмір стікера</td>
              </tr>
              <tr>
                <td className='border-2 border-black p-3 font-bold'>onClick</td>
                <td className='border-2 border-black p-3'>() =&gt; void</td>
                <td className='border-2 border-black p-3'>-</td>
                <td className='border-2 border-black p-3'>
                  Callback при кліку
                </td>
              </tr>
              <tr className='bg-gray-50'>
                <td className='border-2 border-black p-3 font-bold'>
                  className
                </td>
                <td className='border-2 border-black p-3'>string</td>
                <td className='border-2 border-black p-3'>-</td>
                <td className='border-2 border-black p-3'>
                  Додаткові CSS класи
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default function StickerPage() {
  return (
    <ToastProvider>
      <StickerPageContent />
    </ToastProvider>
  );
}
