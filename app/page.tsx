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

  return (
    <div className='p-8'>
      {showConfetti && <Confetti active={showConfetti} duration={3000} />}

      <div className='max-w-6xl mx-auto space-y-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1
            className='text-8xl font-black uppercase mb-4 animate-bounce-once'
            style={{ textShadow: '6px 6px 0px rgba(0, 0, 0, 1)' }}
          >
            🎨 Brutal UI
          </h1>
          <p className='text-2xl font-bold text-black bg-white border-4 border-black inline-block px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-slide-up mb-6'>
            Next.js 16 + App Router + 20+ Components
          </p>
          <div className='flex justify-center gap-4 mt-6'>
            <Link href='/docs'>
              <Button variant='primary' size='lg'>
                📖 Documentation
              </Button>
            </Link>
            <a
              href='https://github.com/yourusername/brutal-ui'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='secondary' size='lg'>
                💻 GitHub
              </Button>
            </a>
          </div>
        </div>

        {/* Alerts */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
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
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
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
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
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
        <section className='space-y-6'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4 bg-white p-6'>
            Cards
          </h2>
          <div className='grid gap-6 md:grid-cols-3'>
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
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Tooltips
          </h2>
          <div className='flex flex-wrap gap-4'>
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
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4 flex items-center justify-between'>
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
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Buttons with Ripple
          </h2>
          <div className='flex flex-wrap gap-4'>
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
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
            Spinner & Rating
          </h2>
          <div className='space-y-6'>
            <div>
              <h3 className='font-bold mb-4'>Spinners</h3>
              <div className='flex items-center gap-6'>
                <Spinner size='sm' />
                <Spinner size='md' />
                <Spinner size='lg' />
              </div>
            </div>

            <Divider />

            <div>
              <h3 className='font-bold mb-4'>Rating</h3>
              <Rating value={rating} onChange={setRating} size='lg' />
              <p className='mt-2 font-bold'>Ваш рейтинг: {rating} / 5</p>
            </div>
          </div>
        </section>

        {/* File Upload */}
        <section className='bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
          <h2 className='text-3xl font-bold uppercase mb-6 border-b-4 border-black pb-4'>
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
            <p className='mt-4 font-bold'>Завантажено файлів: {files.length}</p>
          )}
        </section>

        {/* Footer */}
        <footer className='text-center mt-12 pt-8 border-t-4 border-black'>
          <p className='text-xl font-bold mb-4'>
            Made with 💀 by CRM Team · Brutal UI v0.1.0
          </p>
          <div className='flex justify-center gap-4'>
            <a
              href='https://github.com/yourusername/brutal-ui'
              className='brutal-pressable brutal-ripple px-6 py-3 bg-black text-white border-4 border-black font-bold uppercase text-sm inline-block'
            >
              GitHub
            </a>
            <a
              href='https://www.npmjs.com/package/@brutal-ui/react'
              className='brutal-pressable brutal-ripple px-6 py-3 bg-red-500 text-white border-4 border-black font-bold uppercase text-sm inline-block'
            >
              NPM
            </a>
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
