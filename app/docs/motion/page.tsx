'use client';

import { useState } from 'react';
import { Shaker, Bouncer, SpinnerBox, Pulser } from '../../../src/components/motion';
import { Card, CardContent } from '../../../src/components/card';
import { Button } from '../../../src/components/button';
import { Badge } from '../../../src/components/badge';

export default function MotionPage() {
  const [manualShake, setManualShake] = useState(false);

  const triggerShake = () => {
    setManualShake(true);
    setTimeout(() => setManualShake(false), 100);
  };

  return (
    <div className='w-full'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-4 border-b-4 border-black pb-4'>
        🎭 Motion Components
      </h1>
      <p className='text-base sm:text-lg mb-6 sm:mb-8'>
        Wrapper компоненти що додають анімаційні ефекти до будь-якого контенту.
      </p>

      {/* Shaker */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          🌪️ Shaker
        </h2>
        <p className='mb-4 text-sm sm:text-base'>
          Компонент що тремтить при взаємодії. 4 інтенсивності, різні тригери.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Hover Trigger</h3>
            <Shaker trigger='hover' intensity='medium'>
              <Button variant='primary' size='sm'>Наведи мишку</Button>
            </Shaker>
          </div>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Click Trigger</h3>
            <Shaker trigger='click' intensity='high'>
              <Badge variant='primary'>Клікни мене</Badge>
            </Shaker>
          </div>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Auto Trigger</h3>
            <Shaker trigger='auto' intensity='low'>
              <Card className='p-2 text-center text-xs sm:text-sm'>Auto shake</Card>
            </Shaker>
          </div>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Manual</h3>
            <Shaker trigger='manual' intensity='extreme'>
              <Button variant='secondary' size='sm' onClick={triggerShake}>
                Shake!
              </Button>
            </Shaker>
          </div>
        </div>

        <div className='mt-6 bg-yellow-50 border-2 border-black p-3 sm:p-4'>
          <h4 className='font-bold mb-2 text-sm sm:text-base'>Інтенсивність:</h4>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
            <Shaker trigger='hover' intensity='low'>
              <Badge variant='default' className='text-xs'>Low</Badge>
            </Shaker>
            <Shaker trigger='hover' intensity='medium'>
              <Badge variant='primary' className='text-xs'>Medium</Badge>
            </Shaker>
            <Shaker trigger='hover' intensity='high'>
              <Badge variant='danger' className='text-xs'>High</Badge>
            </Shaker>
            <Shaker trigger='hover' intensity='extreme'>
              <Badge variant='warning' className='text-xs'>Extreme</Badge>
            </Shaker>
          </div>
        </div>
      </section>

      {/* Bouncer */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          ⬆️ Bouncer
        </h2>
        <p className='mb-4 text-sm sm:text-base'>
          Компонент що стрибає. 3 висоти, різні тригери.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Hover</h3>
            <Bouncer trigger='hover' height='medium'>
              <Button variant='primary'>Bounce hover</Button>
            </Bouncer>
          </div>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Click</h3>
            <Bouncer trigger='click' height='high'>
              <Badge variant='success'>Click bounce</Badge>
            </Bouncer>
          </div>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Auto</h3>
            <Bouncer trigger='auto' height='low'>
              <Card className='p-2 text-center text-xs sm:text-sm'>Auto bounce</Card>
            </Bouncer>
          </div>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Continuous</h3>
            <Bouncer trigger='continuous' height='medium'>
              <Badge variant='info' className='text-xs'>Always bounce</Badge>
            </Bouncer>
          </div>
        </div>
      </section>

      {/* SpinnerBox */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          🔄 SpinnerBox
        </h2>
        <p className='mb-4 text-sm sm:text-base'>
          Компонент що обертається. Контроль швидкості та напрямку.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Hover Trigger</h3>
            <div className='flex flex-col sm:flex-row gap-2'>
              <SpinnerBox trigger='hover' speed='normal' direction='clockwise'>
                <Badge variant='primary' className='text-xs'>Clockwise</Badge>
              </SpinnerBox>
              <SpinnerBox trigger='hover' speed='normal' direction='counterclockwise'>
                <Badge variant='danger' className='text-xs'>Counter</Badge>
              </SpinnerBox>
            </div>
          </div>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Continuous</h3>
            <div className='flex flex-col sm:flex-row gap-2'>
              <SpinnerBox trigger='continuous' speed='slow' direction='clockwise'>
                <span className='text-2xl'>🎯</span>
              </SpinnerBox>
              <SpinnerBox trigger='continuous' speed='fast' direction='counterclockwise'>
                <span className='text-2xl'>⚡</span>
              </SpinnerBox>
            </div>
          </div>
        </div>
      </section>

      {/* Pulser */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          💫 Pulser
        </h2>
        <p className='mb-4 text-sm sm:text-base'>
          Компонент з пульсацією (opacity + scale). Безкінечна анімація.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4 text-center'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Subtle</h3>
            <Pulser intensity='subtle' speed='normal'>
              <Badge variant='default'>Тихо пульсує</Badge>
            </Pulser>
          </div>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4 text-center'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Normal</h3>
            <Pulser intensity='normal' speed='normal'>
              <Badge variant='primary'>Нормально</Badge>
            </Pulser>
          </div>
          <div className='bg-gray-50 border-2 border-black p-3 sm:p-4 text-center'>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Strong</h3>
            <Pulser intensity='strong' speed='normal'>
              <Badge variant='warning'>Сильно пульсує</Badge>
            </Pulser>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className='bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Usage Examples
        </h2>
        <div className='space-y-4'>
          <div>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Shaker</h3>
            <div className='overflow-x-auto'>
              <pre className='bg-gray-100 border-4 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm whitespace-pre'>
{`<Shaker trigger="hover" intensity="medium">
  <Button>Shake on hover</Button>
</Shaker>`}
              </pre>
            </div>
          </div>
          <div>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Bouncer</h3>
            <div className='overflow-x-auto'>
              <pre className='bg-gray-100 border-4 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm whitespace-pre'>
{`<Bouncer trigger="click" height="high">
  <Card>Bounce on click</Card>
</Bouncer>`}
              </pre>
            </div>
          </div>
          <div>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>SpinnerBox</h3>
            <div className='overflow-x-auto'>
              <pre className='bg-gray-100 border-4 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm whitespace-pre'>
{`<SpinnerBox trigger="continuous" speed="fast" direction="clockwise">
  <div>🎯</div>
</SpinnerBox>`}
              </pre>
            </div>
          </div>
          <div>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>Pulser</h3>
            <div className='overflow-x-auto'>
              <pre className='bg-gray-100 border-4 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm whitespace-pre'>
{`<Pulser intensity="strong" speed="normal">
  <Badge>Always pulsing</Badge>
</Pulser>`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}