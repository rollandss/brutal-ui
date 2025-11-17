'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../src/components/button';
import { Modal } from '../src/components/modal';
import { Switch } from '../src/components/switch';
import { Checkbox } from '../src/components/checkbox';
import { Radio, RadioGroup } from '../src/components/radio';
import { Textarea } from '../src/components/textarea';
import { Progress } from '../src/components/progress';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../src/components/tabs';
import { Accordion, AccordionItem } from '../src/components/accordion';
import { ToastProvider, useToast } from '../src/components/toast';
import { Confetti } from '../src/components/confetti';
import { Alert } from '../src/components/alert';
import { Badge } from '../src/components/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../src/components/card';
import { Input } from '../src/components/input';
import { Tooltip } from '../src/components/tooltip';
import { BrutalSkeleton } from '../src/components/skeleton';
import { Select } from '../src/components/select';
import { Slider } from '../src/components/slider';
import { Breadcrumb } from '../src/components/breadcrumb';
import { Pagination } from '../src/components/pagination';
import { Dropdown } from '../src/components/dropdown';
import { Table } from '../src/components/table';
import { Avatar, AvatarGroup } from '../src/components/avatar';
import { Chip } from '../src/components/chip';
import { Divider } from '../src/components/divider';
import { Drawer } from '../src/components/drawer';
import { Popover } from '../src/components/popover';
import { Spinner, Loader } from '../src/components/spinner';
import { Rating } from '../src/components/rating';
import { FileUpload } from '../src/components/file-upload';
import { Sticker, StickerGroup } from '../src/components/sticker';
import { AnimatedIcon, IconGrid } from '../src/components/animated-icon';
import { Toggle, ToggleGroup } from '../src/components/toggle';
import { Shaker, Bouncer, SpinnerBox, Pulser } from '../src/components/motion';
import {
  FlipCard,
  RevealCard,
  MorphCard,
} from '../src/components/interactive-cards';

function HomePageContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [switchEnabled, setSwitchEnabled] = useState(true);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [radioValue, setRadioValue] = useState('option1');
  const [activeTab, setActiveTab] = useState('tab1');
  const [progress, setProgress] = useState(65);
  const [showConfetti, setShowConfetti] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const [selectValue, setSelectValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rating, setRating] = useState(3);
  const [files, setFiles] = useState<File[]>([]);
  const [animationDemo, setAnimationDemo] = useState<string>('');
  const [toggles, setToggles] = useState({
    toggle1: false,
    toggle2: true,
    toggle3: false,
    toggle4: true,
  });

  const triggerAnimation = (anim: string) => {
    setAnimationDemo(anim);
    setTimeout(() => setAnimationDemo(''), 1000);
  };

  return (
    <div className='p-8'>
      {showConfetti && <Confetti active={showConfetti} duration={3000} />}

      <div className='max-w-7xl mx-auto space-y-8 lg:space-y-12'>
        {/* Header */}
        <div className='text-center mb-12 px-4'>
          <h1
            className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase mb-4 animate-bounce-once'
            style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 1)' }}
          >
            🎨 Brutal UI
          </h1>
          <p className='text-base sm:text-xl md:text-2xl font-bold text-black bg-white border-3 sm:border-4 border-black inline-block px-4 sm:px-6 md:px-8 py-3 md:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-slide-up mb-6'>
            Next.js 16 + App Router + 50+ Components
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 max-w-md mx-auto sm:max-w-none'>
            <Link href='/docs' className='w-full sm:w-auto'>
              <Button variant='primary' size='lg' className='w-full sm:w-auto'>
                📖 Documentation
              </Button>
            </Link>
            <a
              href='https://github.com/rollandss/brutal-ui'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto'
            >
              <Button
                variant='secondary'
                size='lg'
                className='w-full sm:w-auto'
              >
                💻 GitHub
              </Button>
            </a>
          </div>
        </div>

        {/* Stats/Metrics Cards */}
        <section className='space-y-4 sm:space-y-6'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4 bg-white p-4 sm:p-6'>
            📊 Statistics
          </h2>
          <div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            <Card className='bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-black text-white hover:translate-y-[-4px] transition-transform duration-200'>
              <CardContent className='p-4 sm:p-6'>
                <div className='text-3xl sm:text-4xl font-black mb-2'>39+</div>
                <div className='text-base sm:text-lg font-bold uppercase'>
                  Components
                </div>
                <div className='text-xs sm:text-sm opacity-90 mt-1'>
                  Ready to use
                </div>
              </CardContent>
            </Card>

            <Card className='bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-black text-white hover:translate-y-[-4px] transition-transform duration-200'>
              <CardContent className='p-4 sm:p-6'>
                <div className='text-3xl sm:text-4xl font-black mb-2'>100%</div>
                <div className='text-base sm:text-lg font-bold uppercase'>
                  TypeScript
                </div>
                <div className='text-xs sm:text-sm opacity-90 mt-1'>
                  Fully typed
                </div>
              </CardContent>
            </Card>

            <Card className='bg-gradient-to-br from-green-400 to-green-600 border-4 border-black text-white hover:translate-y-[-4px] transition-transform duration-200'>
              <CardContent className='p-4 sm:p-6'>
                <div className='text-3xl sm:text-4xl font-black mb-2'>⚡</div>
                <div className='text-base sm:text-lg font-bold uppercase'>
                  Fast
                </div>
                <div className='text-xs sm:text-sm opacity-90 mt-1'>
                  Optimized builds
                </div>
              </CardContent>
            </Card>

            <Card className='bg-gradient-to-br from-orange-400 to-orange-600 border-4 border-black text-white hover:translate-y-[-4px] transition-transform duration-200'>
              <CardContent className='p-4 sm:p-6'>
                <div className='text-3xl sm:text-4xl font-black mb-2'>🎨</div>
                <div className='text-base sm:text-lg font-bold uppercase'>
                  Brutal
                </div>
                <div className='text-xs sm:text-sm opacity-90 mt-1'>
                  Bold design
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Brutal Stickers Section */}
        <section className='bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-200 border-3 sm:border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-6 text-center animate-wiggle'>
            🎉 Brutal Stickers
          </h2>
          <StickerGroup className='mb-8'>
            <Sticker
              emoji='💀'
              text='BRUTAL'
              color='yellow'
              variant='rotate-left'
              size='lg'
              onClick={() => addToast({ title: '💀 Brutal!', type: 'success' })}
            />
            <Sticker
              emoji='🔥'
              text='HOT'
              color='orange'
              variant='float'
              size='md'
              onClick={() =>
                addToast({ title: '🔥 On Fire!', type: 'warning' })
              }
            />
            <Sticker
              emoji='⭐'
              text='STAR'
              color='blue'
              variant='pulse'
              size='md'
              onClick={() => addToast({ title: '⭐ Amazing!', type: 'info' })}
            />
            <Sticker
              emoji='💎'
              text='GEM'
              color='purple'
              variant='rotate-right'
              size='lg'
              onClick={() =>
                addToast({ title: '💎 Precious!', type: 'success' })
              }
            />
            <Sticker
              emoji='🎨'
              text='ART'
              color='pink'
              variant='wiggle'
              size='md'
              onClick={() => addToast({ title: '🎨 Creative!', type: 'info' })}
            />
            <Sticker
              emoji='⚡'
              text='FAST'
              color='yellow'
              variant='bounce'
              size='md'
              onClick={() =>
                addToast({ title: '⚡ Lightning!', type: 'warning' })
              }
            />
            <Sticker
              emoji='🚀'
              text='LAUNCH'
              color='blue'
              variant='rotate-left'
              size='lg'
              onClick={() => {
                setShowConfetti(true);
                addToast({ title: '🚀 Launched!', type: 'success' });
                setTimeout(() => setShowConfetti(false), 3000);
              }}
            />
            <Sticker
              emoji='💯'
              text='PERFECT'
              color='green'
              variant='pulse'
              size='md'
              onClick={() =>
                addToast({ title: '💯 Perfect!', type: 'success' })
              }
            />
            <Sticker
              emoji='🎯'
              text='TARGET'
              color='red'
              variant='float'
              size='md'
              onClick={() => addToast({ title: '🎯 On Point!', type: 'info' })}
            />
            <Sticker
              emoji='✨'
              text='MAGIC'
              color='purple'
              variant='rotate-right'
              size='lg'
              onClick={() => addToast({ title: '✨ Magical!', type: 'info' })}
            />
          </StickerGroup>
          <p className='text-center text-sm font-bold opacity-80'>
            Click на стікери щоб побачити тости! 👆
          </p>
        </section>

        {/* Animation Showcase */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            🎬 Animation Showcase
          </h2>
          <div className='grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
            <Button
              variant='primary'
              onClick={() => triggerAnimation('animate-rubber-band')}
              className='h-24'
            >
              Rubber Band
            </Button>
            <Button
              variant='secondary'
              onClick={() => triggerAnimation('animate-jello')}
              className='h-24'
            >
              Jello
            </Button>
            <Button
              variant='success'
              onClick={() => triggerAnimation('animate-swing')}
              className='h-24'
            >
              Swing
            </Button>
            <Button
              variant='danger'
              onClick={() => triggerAnimation('animate-flip')}
              className='h-24'
            >
              Flip
            </Button>
            <Button
              variant='danger'
              onClick={() => triggerAnimation('animate-tada')}
              className='h-24'
            >
              Tada
            </Button>
            <Button
              variant='secondary'
              onClick={() => triggerAnimation('animate-zoom-in')}
              className='h-24'
            >
              Zoom In
            </Button>
            <Button
              variant='primary'
              onClick={() => triggerAnimation('animate-bounce-in')}
              className='h-24'
            >
              Bounce In
            </Button>
            <Button
              variant='secondary'
              onClick={() => triggerAnimation('animate-roll-in')}
              className='h-24'
            >
              Roll In
            </Button>
          </div>

          {animationDemo && (
            <div className='mt-8 flex justify-center'>
              <Card
                className={`bg-gradient-to-br from-purple-400 to-pink-400 border-4 border-black text-white ${animationDemo}`}
              >
                <CardContent className='p-8 text-center'>
                  <div className='text-6xl mb-4'>🎪</div>
                  <div className='text-2xl font-black uppercase'>
                    Animation Demo!
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        {/* Hover Effects Showcase */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            🖱️ Hover Effects
          </h2>
          <div className='grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
            <Card className='hover-lift cursor-pointer bg-gradient-to-br from-blue-300 to-blue-500 border-4 border-black'>
              <CardContent className='p-4 text-center'>
                <div className='text-3xl mb-2'>⬆️</div>
                <div className='font-bold text-sm'>Hover Lift</div>
              </CardContent>
            </Card>

            <Card className='hover-grow cursor-pointer bg-gradient-to-br from-green-300 to-green-500 border-4 border-black'>
              <CardContent className='p-4 text-center'>
                <div className='text-3xl mb-2'>🔍</div>
                <div className='font-bold text-sm'>Hover Grow</div>
              </CardContent>
            </Card>

            <Card className='hover-rotate cursor-pointer bg-gradient-to-br from-yellow-300 to-yellow-500 border-4 border-black'>
              <CardContent className='p-4 text-center'>
                <div className='text-3xl mb-2'>🔄</div>
                <div className='font-bold text-sm'>Hover Rotate</div>
              </CardContent>
            </Card>

            <Card className='hover-tilt cursor-pointer bg-gradient-to-br from-pink-300 to-pink-500 border-4 border-black'>
              <CardContent className='p-4 text-center'>
                <div className='text-3xl mb-2'>📐</div>
                <div className='font-bold text-sm'>Hover Tilt</div>
              </CardContent>
            </Card>

            <Card className='hover-shake cursor-pointer bg-gradient-to-br from-red-300 to-red-500 border-4 border-black'>
              <CardContent className='p-4 text-center'>
                <div className='text-3xl mb-2'>🌪️</div>
                <div className='font-bold text-sm'>Hover Shake</div>
              </CardContent>
            </Card>

            <Card className='hover-jello cursor-pointer bg-gradient-to-br from-purple-300 to-purple-500 border-4 border-black'>
              <CardContent className='p-4 text-center'>
                <div className='text-3xl mb-2'>🍮</div>
                <div className='font-bold text-sm'>Hover Jello</div>
              </CardContent>
            </Card>

            <Card className='hover-rubber-band cursor-pointer bg-gradient-to-br from-orange-300 to-orange-500 border-4 border-black'>
              <CardContent className='p-4 text-center'>
                <div className='text-3xl mb-2'>🎸</div>
                <div className='font-bold text-sm'>Hover Rubber</div>
              </CardContent>
            </Card>

            <Card className='hover-swing cursor-pointer bg-gradient-to-br from-teal-300 to-teal-500 border-4 border-black'>
              <CardContent className='p-4 text-center'>
                <div className='text-3xl mb-2'>🎭</div>
                <div className='font-bold text-sm'>Hover Swing</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Toggle Switches Section */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            🎚️ Toggle Switches
          </h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold mb-3'>Варіанти стилів</h3>
              <ToggleGroup>
                <Toggle
                  checked={toggles.toggle1}
                  onChange={(checked) =>
                    setToggles({ ...toggles, toggle1: checked })
                  }
                  variant='default'
                  label='Default'
                />
                <Toggle
                  checked={toggles.toggle2}
                  onChange={(checked) =>
                    setToggles({ ...toggles, toggle2: checked })
                  }
                  variant='brutal'
                  label='Brutal'
                />
                <Toggle
                  checked={toggles.toggle3}
                  onChange={(checked) =>
                    setToggles({ ...toggles, toggle3: checked })
                  }
                  variant='neon'
                  label='Neon'
                />
                <Toggle
                  checked={toggles.toggle4}
                  onChange={(checked) =>
                    setToggles({ ...toggles, toggle4: checked })
                  }
                  variant='gradient'
                  label='Gradient'
                />
              </ToggleGroup>
            </div>

            <div>
              <h3 className='text-lg font-bold mb-3'>Розміри</h3>
              <ToggleGroup>
                <Toggle checked size='sm' label='Small' />
                <Toggle checked size='md' label='Medium' />
                <Toggle checked size='lg' label='Large' />
              </ToggleGroup>
            </div>

            <div>
              <h3 className='text-lg font-bold mb-3'>З іконками</h3>
              <ToggleGroup>
                <Toggle
                  checked
                  variant='brutal'
                  icon={{ on: '✓', off: '✗' }}
                  label='Check'
                />
                <Toggle
                  checked={false}
                  variant='neon'
                  icon={{ on: '🌙', off: '☀️' }}
                  label='Theme'
                />
                <Toggle
                  checked
                  variant='gradient'
                  icon={{ on: '🔊', off: '🔇' }}
                  label='Sound'
                />
              </ToggleGroup>
            </div>
          </div>
        </section>

        {/* Motion Effects Section */}
        <section className='bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-6 text-center'>
            🎭 Motion Effects
          </h2>
          <div className='grid gap-6 grid-cols-2 md:grid-cols-4'>
            <div className='text-center'>
              <Shaker trigger='hover' intensity='medium'>
                <Card className='bg-yellow-300 border-4 border-black'>
                  <CardContent className='p-6'>
                    <div className='text-4xl mb-2'>🌪️</div>
                    <div className='font-bold text-sm'>Shaker</div>
                    <div className='text-xs mt-1'>Hover me!</div>
                  </CardContent>
                </Card>
              </Shaker>
            </div>

            <div className='text-center'>
              <Bouncer trigger='hover' height='medium'>
                <Card className='bg-pink-300 border-4 border-black'>
                  <CardContent className='p-6'>
                    <div className='text-4xl mb-2'>⬆️</div>
                    <div className='font-bold text-sm'>Bouncer</div>
                    <div className='text-xs mt-1'>Hover me!</div>
                  </CardContent>
                </Card>
              </Bouncer>
            </div>

            <div className='text-center'>
              <SpinnerBox trigger='hover' speed='normal'>
                <Card className='bg-blue-300 border-4 border-black'>
                  <CardContent className='p-6'>
                    <div className='text-4xl mb-2'>🔄</div>
                    <div className='font-bold text-sm'>Spinner</div>
                    <div className='text-xs mt-1'>Hover me!</div>
                  </CardContent>
                </Card>
              </SpinnerBox>
            </div>

            <div className='text-center'>
              <Pulser intensity='normal' speed='normal'>
                <Card className='bg-purple-300 border-4 border-black'>
                  <CardContent className='p-6'>
                    <div className='text-4xl mb-2'>💫</div>
                    <div className='font-bold text-sm'>Pulser</div>
                    <div className='text-xs mt-1'>Always on!</div>
                  </CardContent>
                </Card>
              </Pulser>
            </div>
          </div>
          <p className='text-center text-sm font-bold opacity-80 mt-6'>
            Наведи курсор щоб побачити ефекти! 🎯
          </p>
        </section>

        {/* Interactive Cards Section */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            🎴 Interactive Cards
          </h2>
          <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
            <div>
              <h3 className='text-lg font-bold mb-3 text-center'>Flip Card</h3>
              <FlipCard
                trigger='hover'
                direction='horizontal'
                className='h-64'
                front={
                  <div className='flex flex-col items-center justify-center h-full p-6'>
                    <div className='text-6xl mb-4'>🎴</div>
                    <div className='text-xl font-black uppercase'>
                      Front Side
                    </div>
                    <div className='text-sm mt-2'>Hover to flip!</div>
                  </div>
                }
                back={
                  <div className='flex flex-col items-center justify-center h-full p-6 bg-gradient-to-br from-purple-300 to-pink-300'>
                    <div className='text-6xl mb-4'>✨</div>
                    <div className='text-xl font-black uppercase'>
                      Back Side
                    </div>
                    <div className='text-sm mt-2'>Amazing!</div>
                  </div>
                }
              />
            </div>

            <div>
              <h3 className='text-lg font-bold mb-3 text-center'>
                Reveal Card
              </h3>
              <RevealCard
                title='Hover Me'
                trigger='hover'
                className='h-64'
                preview={
                  <div className='text-center'>
                    <div className='text-4xl mb-2'>🎁</div>
                    <p className='text-sm'>
                      Наведи курсор щоб побачити сюрприз...
                    </p>
                  </div>
                }
                content={
                  <div className='text-center'>
                    <div className='text-5xl mb-3'>🎉</div>
                    <p className='font-bold text-lg'>Сюрприз!</p>
                    <p className='text-sm mt-2'>
                      Це прихований контент який з'являється при hover!
                    </p>
                  </div>
                }
              />
            </div>

            <div>
              <h3 className='text-lg font-bold mb-3 text-center'>Morph Card</h3>
              <MorphCard
                autoPlay
                interval={2500}
                className='h-64'
                states={[
                  {
                    color: '#fef08a',
                    content: (
                      <div className='text-center'>
                        <div className='text-5xl mb-3'>🌞</div>
                        <div className='font-black text-xl'>State 1</div>
                        <div className='text-sm mt-2'>Yellow vibes</div>
                      </div>
                    ),
                  },
                  {
                    color: '#a5f3fc',
                    content: (
                      <div className='text-center'>
                        <div className='text-5xl mb-3'>🌊</div>
                        <div className='font-black text-xl'>State 2</div>
                        <div className='text-sm mt-2'>Cyan waves</div>
                      </div>
                    ),
                  },
                  {
                    color: '#fda4af',
                    content: (
                      <div className='text-center'>
                        <div className='text-5xl mb-3'>🌸</div>
                        <div className='font-black text-xl'>State 3</div>
                        <div className='text-sm mt-2'>Pink dreams</div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Animated Icons Gallery */}
        <section className='bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 border-3 sm:border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-6 text-center'>
            🎪 Animated Icons
          </h2>
          <IconGrid columns={4} className='mb-8'>
            <AnimatedIcon icon='🎯' animation='spin' size='lg' />
            <AnimatedIcon icon='⚡' animation='bounce' size='lg' />
            <AnimatedIcon icon='💫' animation='pulse' size='lg' />
            <AnimatedIcon icon='🌟' animation='wiggle' size='lg' />
            <AnimatedIcon icon='🎨' animation='float' size='lg' />
            <AnimatedIcon icon='🎭' animation='swing' size='lg' />
            <AnimatedIcon icon='🔥' animation='shake' size='lg' />
            <AnimatedIcon icon='💎' animation='flip' size='lg' />
            <AnimatedIcon icon='🎸' animation='rubber-band' size='lg' />
            <AnimatedIcon icon='🍮' animation='jello' size='lg' />
            <AnimatedIcon icon='🎉' animation='tada' size='lg' />
            <AnimatedIcon icon='⭐' animation='bounce' size='lg' />
          </IconGrid>
          <p className='text-center text-sm font-bold opacity-80'>
            12 різних анімацій для іконок! 🎬
          </p>
        </section>

        {/* Feature Highlights with hover effects */}
        <section className='space-y-4 sm:space-y-6'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4 bg-white p-4 sm:p-6'>
            ✨ Features
          </h2>
          <div className='grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2'>
            <Card className='group hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300'>
              <CardContent className='p-4 sm:p-6'>
                <div className='text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300'>
                  🚀
                </div>
                <h3 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-3'>
                  Next.js 16
                </h3>
                <p className='text-sm sm:text-base'>
                  Побудовано на останній версії Next.js з App Router та Server
                  Components
                </p>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300'>
              <CardContent className='p-4 sm:p-6'>
                <div className='text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300'>
                  💎
                </div>
                <h3 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-3'>
                  Brutalism First
                </h3>
                <p className='text-sm sm:text-base'>
                  Товсті рамки, яскраві тіні та жирний дизайн для сміливих
                  проектів
                </p>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300'>
              <CardContent className='p-4 sm:p-6'>
                <div className='text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300'>
                  🎯
                </div>
                <h3 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-3'>
                  Accessible
                </h3>
                <p className='text-sm sm:text-base'>
                  Повна підтримка клавіатурної навігації та screen readers
                </p>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300'>
              <CardContent className='p-4 sm:p-6'>
                <div className='text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300'>
                  📱
                </div>
                <h3 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-3'>
                  Responsive
                </h3>
                <p className='text-sm sm:text-base'>
                  Адаптивний дизайн для всіх розмірів екранів від мобільних до
                  десктопу
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            Alerts
          </h2>
          <div className='space-y-4'>
            <Alert variant='success' title='Успіх!'>
              Дані успішно збережено в базі даних.
            </Alert>
            <Alert variant='danger' title='Помилка!'>
              Не вдалося підключитися до сервера. Спробуйте пізніше.
            </Alert>
            <Alert variant='warning' title='Увага!'>
              Ваш пароль буде змінено через 3 дні.
            </Alert>
            <Alert variant='info' title='Інформація'>
              Нова версія додатку доступна для завантаження.
            </Alert>
          </div>
        </section>

        {/* Badges & Tags */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            Badges & Tags
          </h2>
          <div className='flex flex-wrap gap-3'>
            <Badge variant='default'>Default</Badge>
            <Badge variant='primary'>Primary</Badge>
            <Badge variant='success'>Active</Badge>
            <Badge variant='danger'>Error</Badge>
            <Badge variant='warning'>Warning</Badge>
            <Badge variant='info'>New</Badge>
            <Badge size='sm'>Small</Badge>
            <Badge size='lg'>Large</Badge>
          </div>
        </section>

        {/* Input Fields */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            Input Fields
          </h2>
          <div className='space-y-4'>
            <Input
              label='Email'
              type='email'
              placeholder='your@email.com'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input
              label='Password'
              type='password'
              placeholder='••••••••'
              error='Password must be at least 8 characters'
            />
            <Input
              label='Username'
              type='text'
              placeholder='john_doe'
              disabled
              value='john_doe_123'
            />
          </div>
        </section>

        {/* Cards */}
        <section className='space-y-4 sm:space-y-6'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4 bg-white p-4 sm:p-6'>
            Cards
          </h2>
          <div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <Card variant='default'>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='mb-4'>Стандартна картка з 8px тінню.</p>
                <Badge variant='primary'>Featured</Badge>
              </CardContent>
              <CardFooter>
                <Button variant='primary' className='w-full'>
                  Action
                </Button>
              </CardFooter>
            </Card>

            <Card variant='elevated'>
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='mb-4'>Картка з великою 12px тінню.</p>
                <Badge variant='success'>New</Badge>
              </CardContent>
              <CardFooter>
                <Button variant='secondary' className='w-full'>
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card variant='bordered'>
              <CardHeader>
                <CardTitle>Bordered Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='mb-4'>Картка без тіні, тільки рамка.</p>
                <Badge variant='warning'>Soon</Badge>
              </CardContent>
              <CardFooter>
                <Button variant='outline' className='w-full'>
                  Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Tooltips */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            Tooltips
          </h2>
          <div className='flex flex-wrap gap-3 sm:gap-4'>
            <Tooltip content='Підказка зверху' position='top'>
              <Button variant='primary'>Top</Button>
            </Tooltip>
            <Tooltip content='Підказка знизу' position='bottom'>
              <Button variant='secondary'>Bottom</Button>
            </Tooltip>
            <Tooltip content='Підказка зліва' position='left'>
              <Button variant='success'>Left</Button>
            </Tooltip>
            <Tooltip content='Підказка справа' position='right'>
              <Button variant='danger'>Right</Button>
            </Tooltip>
          </div>
        </section>

        {/* Skeleton Loading */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4 flex items-center justify-between'>
            Skeleton Loading
            <Button
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 2000);
              }}
              size='sm'
            >
              Toggle
            </Button>
          </h2>
          {loading ? (
            <div className='space-y-4'>
              <BrutalSkeleton height='24px' width='60%' />
              <BrutalSkeleton height='20px' width='80%' />
              <BrutalSkeleton height='20px' width='70%' />
              <BrutalSkeleton height='120px' width='100%' />
            </div>
          ) : (
            <div className='space-y-4'>
              <h3 className='text-xl font-bold'>Content Loaded!</h3>
              <p>This is the actual content that appears after loading.</p>
              <p>Skeleton loading provides a better user experience.</p>
              <div className='h-32 bg-gray-100 border-4 border-black flex items-center justify-center'>
                <span className='font-bold text-2xl'>📦 Content Area</span>
              </div>
            </div>
          )}
        </section>

        {/* Buttons */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            Buttons with Ripple
          </h2>
          <div className='flex flex-wrap gap-3 sm:gap-4'>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='danger'>Danger</Button>
            <Button variant='success'>Success</Button>
            <Button
              onClick={() => {
                setShowConfetti(true);
                addToast({ title: 'Confetti! 🎉', type: 'success' });
                setTimeout(() => setShowConfetti(false), 3000);
              }}
            >
              Launch Confetti 🎉
            </Button>
          </div>
        </section>

        {/* Modal */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Modal (ESC to close)
          </h2>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title='Brutal Modal 💀'
          >
            <div className='space-y-4'>
              <p>Це модальне вікно з brutal дизайном!</p>
              <p>Натисніть ESC або клікніть поза вікном, щоб закрити.</p>
              <div className='flex gap-4'>
                <Button onClick={() => setModalOpen(false)} variant='primary'>
                  Закрити
                </Button>
                <Button variant='secondary'>Скасувати</Button>
              </div>
            </div>
          </Modal>
        </section>

        {/* Switch & Checkbox */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Switch & Checkbox
          </h2>
          <div className='space-y-4'>
            <Switch
              checked={switchEnabled}
              onChange={(e) => setSwitchEnabled(e.target.checked)}
              label={`Сповіщення (${switchEnabled ? 'ON' : 'OFF'})`}
            />
            <Checkbox
              checked={checkbox1}
              onChange={(e) => setCheckbox1(e.target.checked)}
              label='Я погоджуюсь з умовами'
            />
            <Checkbox
              checked={checkbox2}
              onChange={(e) => setCheckbox2(e.target.checked)}
              label='Підписатись на розсилку'
            />
          </div>
        </section>

        {/* Radio Group */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Radio Group
          </h2>
          <RadioGroup value={radioValue} onValueChange={setRadioValue}>
            <Radio value='option1' label='Опція 1 - Найкраща' />
            <Radio value='option2' label='Опція 2 - Добра' />
            <Radio value='option3' label='Опція 3 - Нормальна' />
          </RadioGroup>
          <p className='mt-4 font-bold'>Вибрано: {radioValue}</p>
        </section>

        {/* Textarea */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Textarea
          </h2>
          <Textarea
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            placeholder='Напишіть щось brutal тут...'
            rows={5}
          />
          <p className='mt-2 text-sm font-bold'>
            Символів: {textareaValue.length}
          </p>
        </section>

        {/* Progress Bars */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Progress Bars
          </h2>
          <div className='space-y-6'>
            <div>
              <div className='flex justify-between mb-2'>
                <span className='font-bold'>Завантаження</span>
                <span className='font-bold'>{progress}%</span>
              </div>
              <Progress value={progress} color='primary' />
            </div>

            <div>
              <span className='font-bold mb-2 block'>Успіх</span>
              <Progress value={80} color='success' />
            </div>

            <div>
              <span className='font-bold mb-2 block'>Увага</span>
              <Progress value={45} color='warning' />
            </div>

            <div>
              <span className='font-bold mb-2 block'>Помилка</span>
              <Progress value={25} color='danger' />
            </div>

            <div className='flex gap-4'>
              <Button
                onClick={() => setProgress(Math.max(0, progress - 10))}
                variant='secondary'
                disabled={progress === 0}
              >
                -10%
              </Button>
              <Button
                onClick={() => setProgress(Math.min(100, progress + 10))}
                variant='primary'
                disabled={progress === 100}
              >
                +10%
              </Button>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Tabs Navigation
          </h2>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value='tab1'>Профіль</TabsTrigger>
              <TabsTrigger value='tab2'>Налаштування</TabsTrigger>
              <TabsTrigger value='tab3'>Про нас</TabsTrigger>
            </TabsList>

            <TabsContent value='tab1'>
              <div className='p-6 bg-gray-50 border-4 border-black mt-4'>
                <h3 className='text-xl font-bold mb-4'>Профіль користувача</h3>
                <p>
                  Тут буде інформація про ваш профіль. Brutal UI робить це
                  стильно! 💀
                </p>
              </div>
            </TabsContent>

            <TabsContent value='tab2'>
              <div className='p-6 bg-gray-50 border-4 border-black mt-4'>
                <h3 className='text-xl font-bold mb-4'>Налаштування</h3>
                <p>Змінюйте налаштування вашого акаунту тут.</p>
              </div>
            </TabsContent>

            <TabsContent value='tab3'>
              <div className='p-6 bg-gray-50 border-4 border-black mt-4'>
                <h3 className='text-xl font-bold mb-4'>Про Brutal UI</h3>
                <p>
                  Neobrutalism - це дизайн тренд з жирними рамками, яскравими
                  кольорами та чіткими тінями.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Accordion */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Accordion
          </h2>
          <Accordion type='single'>
            <AccordionItem value='item-1' trigger='Що таке Brutal UI?'>
              <p>
                Brutal UI - це React бібліотека компонентів у стилі
                neobrutalism. Жирні рамки, яскраві кольори, чіткі тіні - все для
                сучасного веб-дизайну!
              </p>
            </AccordionItem>

            <AccordionItem value='item-2' trigger='Як використовувати?'>
              <p className='mb-2'>Просто встановіть пакет:</p>
              <code className='block bg-black text-white p-4 border-4 border-black font-mono text-sm'>
                npm install @brutal-ui/react
              </code>
            </AccordionItem>

            <AccordionItem value='item-3' trigger='Які компоненти доступні?'>
              <ul className='list-disc list-inside space-y-1'>
                <li>Button з ripple ефектом</li>
                <li>Modal з ESC/overlay close</li>
                <li>Switch, Checkbox, Radio</li>
                <li>Textarea з підрахунком символів</li>
                <li>Progress bars (4 кольори)</li>
                <li>Tabs навігація</li>
                <li>Accordion (single/multiple)</li>
                <li>Toast notifications</li>
                <li>Confetti анімація 🎉</li>
              </ul>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Toast Demo */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Toast Notifications
          </h2>
          <div className='flex flex-wrap gap-4'>
            <Button
              onClick={() =>
                addToast({ title: 'Успішно збережено! ✓', type: 'success' })
              }
            >
              Success Toast
            </Button>
            <Button
              onClick={() =>
                addToast({ title: "Помилка з'єднання ✗", type: 'error' })
              }
              variant='danger'
            >
              Error Toast
            </Button>
            <Button
              onClick={() =>
                addToast({ title: 'Увага! Перевірте дані ⚠', type: 'warning' })
              }
              variant='secondary'
            >
              Warning Toast
            </Button>
            <Button
              onClick={() =>
                addToast({ title: 'Інформація для вас ℹ', type: 'info' })
              }
              variant='secondary'
            >
              Info Toast
            </Button>
          </div>
        </section>

        {/* Select & Slider */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Select & Slider
          </h2>
          <div className='space-y-6'>
            <Select
              label='Виберіть країну'
              options={[
                { value: 'ua', label: '🇺🇦 Україна' },
                { value: 'us', label: '🇺🇸 США' },
                { value: 'gb', label: '🇬🇧 Великобританія' },
                { value: 'de', label: '🇩🇪 Німеччина' },
                { value: 'fr', label: '🇫🇷 Франція' },
              ]}
              value={selectValue}
              onChange={setSelectValue}
              placeholder='Оберіть країну...'
            />

            <Slider
              label='Гучність'
              value={sliderValue}
              onChange={setSliderValue}
              min={0}
              max={100}
              step={5}
            />
          </div>
        </section>

        {/* Breadcrumb */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Breadcrumb
          </h2>
          <Breadcrumb
            items={[
              { label: 'Home', href: '#' },
              { label: 'Components', href: '#' },
              { label: 'Breadcrumb' },
            ]}
          />
        </section>

        {/* Pagination */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Pagination
          </h2>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
          <p className='mt-4 text-center font-bold'>
            Поточна сторінка: {currentPage}
          </p>
        </section>

        {/* Dropdown & Popover */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Dropdown & Popover
          </h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown
              trigger={<Button>Open Menu</Button>}
              items={[
                {
                  label: 'Profile',
                  icon: '👤',
                  onClick: () =>
                    addToast({ title: 'Profile clicked', type: 'info' }),
                },
                {
                  label: 'Settings',
                  icon: '⚙️',
                  onClick: () =>
                    addToast({ title: 'Settings clicked', type: 'info' }),
                },
                { divider: true } as any,
                {
                  label: 'Logout',
                  icon: '🚪',
                  onClick: () =>
                    addToast({ title: 'Logged out', type: 'success' }),
                },
              ]}
            />

            <Popover
              trigger={<Button variant='secondary'>Hover Me</Button>}
              content={
                <div className='p-4'>
                  <strong>Popover Content</strong>
                  <br />
                  Це спливаюче вікно!
                </div>
              }
              position='top'
              triggerOn='hover'
            />

            <Popover
              trigger={<Button variant='success'>Click Me</Button>}
              content={
                <div className='p-4'>
                  <strong>Click Popover</strong>
                  <br />
                  Клікніть поза, щоб закрити
                </div>
              }
              position='bottom'
            />
          </div>
        </section>

        {/* Table */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Table
          </h2>
          <Table
            columns={[
              { key: 'name', header: 'Name', width: '30%' },
              { key: 'role', header: 'Role', width: '30%' },
              {
                key: 'status',
                header: 'Status',
                width: '20%',
                render: (row) => (
                  <Badge
                    variant={row.status === 'Active' ? 'success' : 'default'}
                  >
                    {row.status}
                  </Badge>
                ),
              },
              {
                key: 'actions',
                header: 'Actions',
                width: '20%',
                render: () => (
                  <Button size='sm' variant='outline'>
                    Edit
                  </Button>
                ),
              },
            ]}
            data={[
              { name: 'John Doe', role: 'Developer', status: 'Active' },
              { name: 'Jane Smith', role: 'Designer', status: 'Active' },
              { name: 'Bob Johnson', role: 'Manager', status: 'Inactive' },
              { name: 'Alice Brown', role: 'Developer', status: 'Active' },
            ]}
            striped
            hoverable
          />
        </section>

        {/* Avatar & Chips */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Avatar & Chips
          </h2>
          <div className='space-y-6'>
            <div>
              <h3 className='font-bold mb-4'>Avatars</h3>
              <div className='flex items-center gap-4'>
                <Avatar size='sm' fallback='JD' />
                <Avatar size='md' fallback='AB' />
                <Avatar size='lg' fallback='CD' />
                <Avatar size='xl' fallback='EF' shape='square' />
              </div>
            </div>

            <div>
              <h3 className='font-bold mb-4'>Avatar Group</h3>
              <AvatarGroup max={4}>
                <Avatar fallback='A1' />
                <Avatar fallback='B2' />
                <Avatar fallback='C3' />
                <Avatar fallback='D4' />
                <Avatar fallback='E5' />
                <Avatar fallback='F6' />
              </AvatarGroup>
            </div>

            <Divider label='Chips' />

            <div className='flex flex-wrap gap-3'>
              <Chip variant='default'>Default</Chip>
              <Chip variant='primary' icon='🎨'>
                Primary
              </Chip>
              <Chip variant='success' icon='✓'>
                Success
              </Chip>
              <Chip
                variant='danger'
                onDelete={() =>
                  addToast({ title: 'Chip deleted', type: 'info' })
                }
              >
                Deletable
              </Chip>
              <Chip variant='warning' size='sm'>
                Small
              </Chip>
              <Chip variant='primary' size='lg'>
                Large
              </Chip>
            </div>
          </div>
        </section>

        {/* Dividers */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Dividers
          </h2>
          <div className='space-y-4'>
            <p>Content above thin divider</p>
            <Divider thickness='thin' />
            <p>Content between dividers</p>
            <Divider thickness='medium' />
            <p>Content with label divider</p>
            <Divider thickness='thick' label='Section' />
            <p>Content after thick divider</p>
          </div>
        </section>

        {/* Drawer */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Drawer
          </h2>
          <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>

          <Drawer
            isOpen={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            position='right'
            size='md'
            title='Brutal Drawer'
          >
            <div className='space-y-4'>
              <p className='font-bold'>Це бічна панель що висувається!</p>
              <p>Можна розміщувати будь-який контент:</p>
              <ul className='list-disc list-inside space-y-2'>
                <li>Форми</li>
                <li>Навігацію</li>
                <li>Додаткову інформацію</li>
                <li>Будь-що інше!</li>
              </ul>
              <Divider />
              <Button
                onClick={() => setDrawerOpen(false)}
                variant='primary'
                fullWidth
              >
                Close Drawer
              </Button>
            </div>
          </Drawer>
        </section>

        {/* Spinner & Rating */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            Spinner & Rating
          </h2>
          <div className='space-y-4 sm:space-y-6'>
            <div>
              <h3 className='font-bold mb-3 sm:mb-4 text-base sm:text-lg'>
                Spinners
              </h3>
              <div className='flex items-center gap-4 sm:gap-6'>
                <Spinner size='sm' />
                <Spinner size='md' />
                <Spinner size='lg' />
              </div>
            </div>

            <Divider />

            <div>
              <h3 className='font-bold mb-3 sm:mb-4 text-base sm:text-lg'>
                Rating
              </h3>
              <Rating value={rating} onChange={setRating} size='lg' />
              <p className='mt-2 font-bold text-sm sm:text-base'>
                Ваш рейтинг: {rating} / 5
              </p>
            </div>
          </div>
        </section>

        {/* File Upload */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            File Upload
          </h2>
          <FileUpload
            label='Завантажити файли'
            accept='image/*,.pdf'
            multiple
            maxSize={5 * 1024 * 1024}
            onChange={setFiles}
          />
          {files.length > 0 && (
            <p className='mt-4 font-bold text-sm sm:text-base'>
              Завантажено файлів: {files.length}
            </p>
          )}
        </section>

        {/* Timeline/Steps */}
        <section className='bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4'>
            🗓️ Development Timeline
          </h2>
          <div className='space-y-4 sm:space-y-6'>
            <div className='flex gap-3 sm:gap-4 group'>
              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 border-3 sm:border-4 border-black flex items-center justify-center font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform'>
                  ✓
                </div>
                <div className='w-1 flex-1 bg-black mt-2 min-h-[40px]'></div>
              </div>
              <div className='flex-1 pb-4 sm:pb-6'>
                <h3 className='text-lg sm:text-xl font-bold mb-1 sm:mb-2'>
                  Design System Created
                </h3>
                <p className='text-xs sm:text-sm text-gray-700 mb-2'>
                  Створено базовий design system з brutal стилями
                </p>
                <Badge variant='success' size='sm'>
                  Completed
                </Badge>
              </div>
            </div>

            <div className='flex gap-3 sm:gap-4 group'>
              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 border-3 sm:border-4 border-black flex items-center justify-center font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform'>
                  2
                </div>
                <div className='w-1 flex-1 bg-black mt-2 min-h-[40px]'></div>
              </div>
              <div className='flex-1 pb-4 sm:pb-6'>
                <h3 className='text-lg sm:text-xl font-bold mb-1 sm:mb-2'>
                  39+ Components Built
                </h3>
                <p className='text-xs sm:text-sm text-gray-700 mb-2'>
                  Розроблено всі основні компоненти з повною типізацією
                </p>
                <Badge variant='primary' size='sm'>
                  In Progress
                </Badge>
              </div>
            </div>

            <div className='flex gap-3 sm:gap-4 group'>
              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500 border-3 sm:border-4 border-black flex items-center justify-center font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform'>
                  3
                </div>
                <div className='w-1 flex-1 bg-black mt-2 min-h-[40px]'></div>
              </div>
              <div className='flex-1 pb-4 sm:pb-6'>
                <h3 className='text-lg sm:text-xl font-bold mb-1 sm:mb-2'>
                  Documentation & Examples
                </h3>
                <p className='text-xs sm:text-sm text-gray-700 mb-2'>
                  Створено повну документацію з live examples
                </p>
                <Badge variant='info' size='sm'>
                  Active
                </Badge>
              </div>
            </div>

            <div className='flex gap-3 sm:gap-4 group'>
              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 border-3 sm:border-4 border-black flex items-center justify-center font-black text-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform'>
                  4
                </div>
              </div>
              <div className='flex-1'>
                <h3 className='text-lg sm:text-xl font-bold mb-1 sm:mb-2'>
                  NPM Package Release
                </h3>
                <p className='text-xs sm:text-sm text-gray-700 mb-2'>
                  Публікація пакету на npm для широкого використання
                </p>
                <Badge variant='default' size='sm'>
                  Coming Soon
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter/CTA Section */}
        <section className='bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 border-3 sm:border-4 border-black p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'>
          <div className='text-center max-w-2xl mx-auto'>
            <h2
              className='text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-3 sm:mb-4'
              style={{ textShadow: '3px 3px 0px rgba(0, 0, 0, 1)' }}
            >
              🚀 Ready to Build?
            </h2>
            <p className='text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8'>
              Почніть створювати брутальні інтерфейси вже сьогодні!
            </p>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto'>
              <Input
                type='email'
                placeholder='your@email.com'
                className='flex-1'
              />
              <Button variant='primary' size='lg' className='whitespace-nowrap'>
                Get Started
              </Button>
            </div>
            <p className='text-xs sm:text-sm mt-3 sm:mt-4 font-bold opacity-80'>
              Підпишіться на оновлення та нові компоненти
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className='text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-3 sm:border-t-4 border-black px-4'>
          <p className='text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4'>
            Made with 💀 by CRM Team · Brutal UI v0.1.0
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
            <a
              href='https://github.com/rollandss/brutal-ui'
              className='brutal-pressable brutal-ripple px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white border-3 sm:border-4 border-black font-bold uppercase text-xs sm:text-sm inline-block hover:translate-y-[-2px] transition-transform'
            >
              GitHub
            </a>
            <a
              href='https://www.npmjs.com/package/@brutal-ui/react'
              className='brutal-pressable brutal-ripple px-5 sm:px-6 py-2.5 sm:py-3 bg-red-500 text-white border-3 sm:border-4 border-black font-bold uppercase text-xs sm:text-sm inline-block hover:translate-y-[-2px] transition-transform'
            >
              NPM
            </a>
            <Link
              href='/docs'
              className='brutal-pressable brutal-ripple px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-white border-3 sm:border-4 border-black font-bold uppercase text-xs sm:text-sm inline-block hover:translate-y-[-2px] transition-transform'
            >
              Docs
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <ToastProvider>
      <HomePageContent />
    </ToastProvider>
  );
}
