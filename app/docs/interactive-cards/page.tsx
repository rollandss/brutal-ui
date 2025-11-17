'use client';

import { FlipCard, RevealCard, MorphCard } from '../../../src/components/interactive-cards';
import { Card, CardContent } from '../../../src/components/card';
import { Button } from '../../../src/components/button';
import { Badge } from '../../../src/components/badge';

export default function InteractiveCardsPage() {
  const morphStates = [
    { color: '#fef08a', content: <div className='text-center p-4'><span className='text-2xl'>☀️</span><br/>Day Mode</div> },
    { color: '#a5f3fc', content: <div className='text-center p-4'><span className='text-2xl'>🌊</span><br/>Ocean Mode</div> },
    { color: '#fda4af', content: <div className='text-center p-4'><span className='text-2xl'>🌸</span><br/>Spring Mode</div> },
  ];

  return (
    <div className='w-full'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-4 border-b-4 border-black pb-4'>
        🎴 Interactive Cards
      </h1>
      <p className='text-base sm:text-lg mb-6 sm:mb-8'>
        Інтерактивні картки з 3D ефектами, розкриттям та морфінгом.
      </p>

      {/* FlipCard */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          🔄 FlipCard
        </h2>
        <p className='mb-4 text-sm sm:text-base'>
          3D flip картка з front і back контентом. Horizontal або vertical flip.
        </p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
          {/* Hover Horizontal */}
          <div className='space-y-2'>
            <h3 className='font-bold text-sm sm:text-base'>Hover - Horizontal</h3>
            <FlipCard
              trigger='hover'
              direction='horizontal'
              front={(
                <div className='h-32 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold border-4 border-black'>
                  <div className='text-center'>
                    <span className='text-2xl'>🎨</span>
                    <p className='text-sm'>Front Side</p>
                  </div>
                </div>
              )}
              back={(
                <div className='h-32 bg-gradient-to-r from-pink-400 to-yellow-500 flex items-center justify-center text-white font-bold border-4 border-black'>
                  <div className='text-center'>
                    <span className='text-2xl'>✨</span>
                    <p className='text-sm'>Back Side</p>
                  </div>
                </div>
              )}
            />
          </div>

          {/* Click Vertical */}
          <div className='space-y-2'>
            <h3 className='font-bold text-sm sm:text-base'>Click - Vertical</h3>
            <FlipCard
              trigger='click'
              direction='vertical'
              front={(
                <div className='h-32 bg-gradient-to-b from-green-400 to-blue-500 flex items-center justify-center text-white font-bold border-4 border-black'>
                  <div className='text-center'>
                    <span className='text-2xl'>📱</span>
                    <p className='text-sm'>Click me</p>
                  </div>
                </div>
              )}
              back={(
                <div className='h-32 bg-gradient-to-b from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold border-4 border-black'>
                  <div className='text-center'>
                    <span className='text-2xl'>🎉</span>
                    <p className='text-sm'>Flipped!</p>
                  </div>
                </div>
              )}
            />
          </div>

          {/* Profile Card */}
          <div className='space-y-2'>
            <h3 className='font-bold text-sm sm:text-base'>Profile Card</h3>
            <FlipCard
              trigger='hover'
              direction='horizontal'
              front={(
                <div className='h-32 bg-white border-4 border-black flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center text-xl'>👤</div>
                    <p className='font-bold text-sm'>John Doe</p>
                  </div>
                </div>
              )}
              back={(
                <div className='h-32 bg-gray-100 border-4 border-black p-3 flex flex-col justify-center text-xs'>
                  <p className='font-bold mb-1'>Frontend Dev</p>
                  <p>React, TS, CSS</p>
                  <p>5+ years exp</p>
                </div>
              )}
            />
          </div>
        </div>

        <div className='bg-blue-50 border-2 border-black p-3 sm:p-4'>
          <h4 className='font-bold mb-2 text-sm sm:text-base'>Props:</h4>
          <ul className='text-xs sm:text-sm space-y-1'>
            <li><code>trigger: 'hover' | 'click'</code></li>
            <li><code>direction: 'horizontal' | 'vertical'</code></li>
            <li><code>front: ReactNode</code> - Front content</li>
            <li><code>back: ReactNode</code> - Back content</li>
          </ul>
        </div>
      </section>

      {/* RevealCard */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          🎁 RevealCard
        </h2>
        <p className='mb-4 text-sm sm:text-base'>
          Картка з прихованим контентом що розкривається з preview.
        </p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
          {/* Hover Reveal */}
          <div className='space-y-2'>
            <h3 className='font-bold text-sm sm:text-base'>Hover Reveal</h3>
            <RevealCard
              title='Secret Recipe'
              trigger='hover'
              preview={(
                <div className='p-4 text-center bg-yellow-100 border-2 border-black'>
                  <span className='text-2xl'>🍪</span>
                  <p className='text-sm font-bold mt-2'>Cookies</p>
                  <p className='text-xs'>Hover to see recipe</p>
                </div>
              )}
              content={(
                <div className='p-4 bg-yellow-50 text-xs'>
                  <h4 className='font-bold mb-2'>Ingredients:</h4>
                  <ul className='space-y-1'>
                    <li>• 2 cups flour</li>
                    <li>• 1 cup sugar</li>
                    <li>• 1/2 cup butter</li>
                    <li>• 2 eggs</li>
                  </ul>
                </div>
              )}
            />
          </div>

          {/* Click Reveal */}
          <div className='space-y-2'>
            <h3 className='font-bold text-sm sm:text-base'>Click Reveal</h3>
            <RevealCard
              title='Surprise Box'
              trigger='click'
              preview={(
                <div className='p-4 text-center bg-purple-100 border-2 border-black'>
                  <span className='text-2xl'>🎁</span>
                  <p className='text-sm font-bold mt-2'>Gift Box</p>
                  <p className='text-xs'>Click to open</p>
                </div>
              )}
              content={(
                <div className='p-4 bg-purple-50 text-center text-xs'>
                  <div className='text-2xl mb-2'>🎉✨🎈</div>
                  <p className='font-bold'>Congratulations!</p>
                  <p>You won a prize!</p>
                </div>
              )}
            />
          </div>

          {/* Info Card */}
          <div className='space-y-2'>
            <h3 className='font-bold text-sm sm:text-base'>Info Card</h3>
            <RevealCard
              title='Features'
              trigger='hover'
              preview={(
                <div className='p-4 text-center bg-green-100 border-2 border-black'>
                  <span className='text-2xl'>📋</span>
                  <p className='text-sm font-bold mt-2'>Features</p>
                  <p className='text-xs'>See details</p>
                </div>
              )}
              content={(
                <div className='p-4 bg-green-50 text-xs'>
                  <ul className='space-y-1'>
                    <li>✅ Responsive</li>
                    <li>✅ TypeScript</li>
                    <li>✅ Accessible</li>
                    <li>✅ Customizable</li>
                  </ul>
                </div>
              )}
            />
          </div>
        </div>

        <div className='bg-green-50 border-2 border-black p-3 sm:p-4'>
          <h4 className='font-bold mb-2 text-sm sm:text-base'>Props:</h4>
          <ul className='text-xs sm:text-sm space-y-1'>
            <li><code>title: string</code> - Card title</li>
            <li><code>trigger: 'hover' | 'click'</code></li>
            <li><code>preview: ReactNode</code> - Preview content</li>
            <li><code>content: ReactNode</code> - Hidden content</li>
          </ul>
        </div>
      </section>

      {/* MorphCard */}
      <section className='mb-8 sm:mb-12 bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          🎭 MorphCard
        </h2>
        <p className='mb-4 text-sm sm:text-base'>
          Картка-карусель що змінює контент та колір. AutoPlay режим.
        </p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
          {/* Auto Play */}
          <div className='space-y-2'>
            <h3 className='font-bold text-sm sm:text-base'>Auto Play (3s)</h3>
            <MorphCard
              autoPlay
              interval={3000}
              states={morphStates}
            />
          </div>

          {/* Manual Control */}
          <div className='space-y-2'>
            <h3 className='font-bold text-sm sm:text-base'>Manual Control</h3>
            <MorphCard
              autoPlay={false}
              states={[
                { color: '#e879f9', content: <div className='p-4'><h3 className='font-bold'>UI Design</h3><p className='text-sm'>Modern interfaces</p></div> },
                { color: '#60a5fa', content: <div className='p-4'><h3 className='font-bold'>Development</h3><p className='text-sm'>React & TypeScript</p></div> },
                { color: '#34d399', content: <div className='p-4'><h3 className='font-bold'>Animation</h3><p className='text-sm'>Smooth interactions</p></div> },
              ]}
            />
          </div>
        </div>

        <div className='bg-pink-50 border-2 border-black p-3 sm:p-4'>
          <h4 className='font-bold mb-2 text-sm sm:text-base'>Props:</h4>
          <ul className='text-xs sm:text-sm space-y-1'>
            <li><code>autoPlay?: boolean</code> - Auto play mode</li>
            <li><code>interval?: number</code> - Auto play interval (ms)</li>
            <li><code>states: Array&lt;&#123;color: string, content: ReactNode&#125;&gt;</code></li>
          </ul>
        </div>
      </section>

      {/* Code Examples */}
      <section className='bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-4'>
          Usage Examples
        </h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>FlipCard</h3>
            <div className='overflow-x-auto'>
              <pre className='bg-gray-100 border-4 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm whitespace-pre'>
{`<FlipCard
  trigger="hover"
  direction="horizontal"
  front={<div>Front content</div>}
  back={<div>Back content</div>}
/>`}
              </pre>
            </div>
          </div>
          <div>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>RevealCard</h3>
            <div className='overflow-x-auto'>
              <pre className='bg-gray-100 border-4 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm whitespace-pre'>
{`<RevealCard
  title="Secret"
  trigger="hover"
  preview={<div>Preview content</div>}
  content={<div>Hidden content</div>}
/>`}
              </pre>
            </div>
          </div>
          <div>
            <h3 className='font-bold mb-2 text-sm sm:text-base'>MorphCard</h3>
            <div className='overflow-x-auto'>
              <pre className='bg-gray-100 border-4 border-black p-3 sm:p-4 font-mono text-xs sm:text-sm whitespace-pre'>
{`<MorphCard
  autoPlay
  interval={3000}
  states={[
    { color: '#fef08a', content: <div>State 1</div> },
    { color: '#a5f3fc', content: <div>State 2</div> },
    { color: '#fda4af', content: <div>State 3</div> },
  ]}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}