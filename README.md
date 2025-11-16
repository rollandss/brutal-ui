# 🎨 Brutal UI

A **brutal/neobrutalist** UI component library for React with TypeScript support.

## Features

- 🎯 **Brutal Design** - Thick borders, bold shadows, raw aesthetics
- 🎨 **Tailwind CSS** - Built with Tailwind utility classes
- 📦 **TypeScript** - Full type safety
- ♿ **Accessible** - ARIA attributes and semantic HTML
- 🚀 **Tree-shakable** - Only import what you need
- 🎭 **Customizable** - Override styles with className

## Installation

```bash
npm install @brutal-ui/react
# or
yarn add @brutal-ui/react
# or
pnpm add @brutal-ui/react
```

Make sure you have Tailwind CSS installed and configured in your project.

### Tailwind Configuration

Add the library path to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@brutal-ui/react/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Usage

```tsx
import { Button, Card, Badge, Alert } from '@brutal-ui/react';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome to Brutal UI</Card.Title>
      </Card.Header>
      <Card.Content>
        <p>A bold, in-your-face design system.</p>
        <Badge variant='success'>Active</Badge>
      </Card.Content>
      <Card.Footer>
        <Button variant='primary'>Get Started</Button>
      </Card.Footer>
    </Card>
  );
}
```

## Components

### Button

```tsx
<Button variant='primary' size='md'>
  Click Me
</Button>
```

**Variants:** `primary`, `secondary`, `danger`, `success`, `outline`, `ghost`  
**Sizes:** `sm`, `md`, `lg`

### Input

```tsx
<Input
  label='Email'
  type='email'
  placeholder='your@email.com'
  error='Invalid email'
/>
```

### Card

```tsx
<Card variant='elevated'>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Content>Card content goes here</Card.Content>
  <Card.Footer>Footer content</Card.Footer>
</Card>
```

**Variants:** `default`, `bordered`, `elevated`

### Badge

```tsx
<Badge variant='primary' size='md'>
  New
</Badge>
```

**Variants:** `default`, `primary`, `success`, `danger`, `warning`, `info`  
**Sizes:** `sm`, `md`, `lg`

### Alert

```tsx
<Alert variant='success' title='Success!'>
  Your changes have been saved.
</Alert>
```

**Variants:** `info`, `success`, `warning`, `danger`

## Design Principles

- **Thick borders (2-4px)** - Bold, black borders on everything
- **Box shadows** - Offset shadows (4px, 6px, 8px, 12px) for depth
- **Bold typography** - Uppercase text with wide letter-spacing
- **High contrast** - Black and white base with vibrant accent colors
- **No gradients** - Solid colors only
- **Raw & unpolished** - Intentionally rough around the edges

## Color Palette

```js
{
  black: '#000000',
  white: '#FFFFFF',
  red: '#EF4444',
  green: '#10B981',
  blue: '#3B82F6',
  yellow: '#F59E0B',
  purple: '#8B5CF6',
  pink: '#EC4899',
}
```

## Roadmap

- [ ] Select
- [ ] Checkbox
- [ ] Radio
- [ ] Switch
- [ ] Tabs
- [ ] Modal
- [ ] Toast
- [ ] Tooltip
- [ ] Dropdown
- [ ] Progress
- [ ] Skeleton
- [ ] Table
- [ ] Pagination

## License

MIT © CRM Team
