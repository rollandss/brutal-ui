import { Badge } from '../../src/components/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../../src/components/card';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className='space-y-8'>
      <div className='border-b-4 border-black pb-6'>
        <h1 className='text-6xl font-black uppercase mb-4'>Documentation</h1>
        <p className='text-xl font-medium text-gray-700'>
          Brutal UI - A bold, unapologetic design system for React
        </p>
        <div className='flex gap-3 mt-4'>
          <Badge variant='primary'>v0.1.0</Badge>
          <Badge variant='success'>TypeScript</Badge>
          <Badge variant='info'>React 19</Badge>
        </div>
      </div>

      <section className='space-y-4'>
        <h2 className='text-3xl font-bold uppercase border-b-4 border-black pb-2'>
          Getting Started
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='bg-gray-900 text-white p-4 border-4 border-black font-mono text-sm'>
              npm install @brutal-ui/react
            </div>
            <p className='mt-4 text-gray-700'>
              Make sure you have Tailwind CSS installed and configured in your
              project.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Basic Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='bg-gray-900 text-white p-4 border-4 border-black font-mono text-sm overflow-x-auto'>
              {`import { Button, Card, Badge } from '@brutal-ui/react';

function App() {
  return (
    <Card>
      <h2>Welcome to Brutal UI</h2>
      <Badge variant="success">Active</Badge>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}`}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='space-y-4'>
        <h2 className='text-3xl font-bold uppercase border-b-4 border-black pb-2'>
          Components
        </h2>

        <div className='grid gap-4 md:grid-cols-2'>
          {[
            {
              name: 'Alert',
              description: 'Display important messages',
              href: '/docs/alert',
            },
            {
              name: 'Badge',
              description: 'Labels and tags',
              href: '/docs/badge',
            },
            {
              name: 'Button',
              description: 'Interactive buttons with ripple',
              href: '/docs/button',
            },
            {
              name: 'Card',
              description: 'Containers with header/footer',
              href: '/docs/card',
            },
            {
              name: 'Checkbox',
              description: 'Binary selection input',
              href: '/docs/checkbox',
            },
            {
              name: 'Input',
              description: 'Text input fields',
              href: '/docs/input',
            },
            {
              name: 'Modal',
              description: 'Dialog overlays',
              href: '/docs/modal',
            },
            {
              name: 'Progress',
              description: 'Progress indicators',
              href: '/docs/progress',
            },
            {
              name: 'Radio',
              description: 'Single selection from options',
              href: '/docs/radio',
            },
            {
              name: 'Switch',
              description: 'Toggle switches',
              href: '/docs/switch',
            },
            {
              name: 'Tabs',
              description: 'Tabbed navigation',
              href: '/docs/tabs',
            },
            {
              name: 'Toast',
              description: 'Notification system',
              href: '/docs/toast',
            },
          ].map((component) => (
            <Link
              key={component.href}
              href={component.href}
              className='block p-4 bg-white border-4 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all'
            >
              <h3 className='text-xl font-bold uppercase mb-2'>
                {component.name}
              </h3>
              <p className='text-sm text-gray-600'>{component.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className='space-y-4'>
        <h2 className='text-3xl font-bold uppercase border-b-4 border-black pb-2'>
          Design Principles
        </h2>

        <Card>
          <CardContent className='space-y-4'>
            <div>
              <h3 className='text-xl font-bold mb-2'>🎯 Bold & Unapologetic</h3>
              <p className='text-gray-700'>
                Thick borders, strong shadows, and high contrast create a
                powerful visual presence.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-2'>🎨 Raw Aesthetics</h3>
              <p className='text-gray-700'>
                No subtle gradients or soft edges. Every element is sharp,
                clear, and intentional.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-2'>♿ Accessibility First</h3>
              <p className='text-gray-700'>
                All components include proper ARIA attributes and keyboard
                navigation support.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-2'>⚡ Performance</h3>
              <p className='text-gray-700'>
                Tree-shakable components built with TypeScript and optimized for
                modern bundlers.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
