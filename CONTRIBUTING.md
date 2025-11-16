# Contributing to Brutal UI

## Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/brutal-ui.git
cd brutal-ui
```

2. Install dependencies:

```bash
npm install
```

3. Start development mode:

```bash
npm run dev
```

4. Build the library:

```bash
npm run build
```

## Project Structure

```
brutal-ui/
├── src/
│   ├── components/     # React components
│   ├── utils/          # Utility functions
│   └── index.ts        # Main export file
├── examples/           # HTML examples
├── dist/               # Build output
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

## Adding a New Component

1. Create a new file in `src/components/`:

```tsx
// src/components/your-component.tsx
import React from 'react';
import { cn } from '../utils/cn';

export interface YourComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'other';
}

export const YourComponent = React.forwardRef<
  HTMLDivElement,
  YourComponentProps
>(({ className, variant = 'default', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'border-4 border-black',
        'font-bold uppercase',
        variant === 'default' && 'bg-white',
        className
      )}
      {...props}
    />
  );
});

YourComponent.displayName = 'YourComponent';
```

2. Export it in `src/index.ts`:

```typescript
export { YourComponent } from './components/your-component';
export type { YourComponentProps } from './components/your-component';
```

3. Update README.md with usage examples

4. Build and test:

```bash
npm run build
npm run type-check
```

## Design Principles

When creating components, follow these brutal design principles:

1. **Thick Borders**: Use 2-4px solid black borders
2. **Box Shadows**: Offset shadows (4px, 6px, 8px, 12px)
3. **Bold Typography**: Uppercase, wide letter-spacing
4. **High Contrast**: Black/white base with vibrant accents
5. **No Gradients**: Solid colors only
6. **Accessibility**: Always include ARIA attributes

## Code Style

- Use TypeScript for type safety
- Use `React.forwardRef` for all components
- Use `displayName` for debugging
- Use Tailwind CSS classes
- Follow existing component patterns
- Add JSDoc comments

## Testing

Before submitting a PR:

1. Build succeeds: `npm run build`
2. TypeScript checks pass: `npm run type-check`
3. Linting passes: `npm run lint`
4. Test in a real React project

## Publishing

Only maintainers can publish:

```bash
npm version patch|minor|major
npm publish
git push --tags
```

## Questions?

Open an issue on GitHub!
