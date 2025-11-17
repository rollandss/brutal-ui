# Brutal UI Documentation Structure

## 📁 Структура проекту

```
app/
├── components/           # Shared UI components
│   ├── Navigation.tsx   # Sidebar navigation
│   ├── CodeBlock.tsx    # Code syntax display with copy button
│   └── ComponentPreview.tsx # Component demo container
├── docs/                # Documentation pages
│   ├── layout.tsx       # Docs layout with navigation
│   ├── page.tsx         # Main docs landing page
│   ├── alert/
│   │   └── page.tsx     # Alert component docs
│   ├── button/
│   │   └── page.tsx     # Button component docs
│   ├── card/
│   │   └── page.tsx     # Card component docs
│   ├── input/
│   │   └── page.tsx     # Input component docs
│   └── modal/
│       └── page.tsx     # Modal component docs
└── page.tsx             # Homepage with component showcase
```

## 🎨 Що створено

### 1. **Navigation Component** (`app/components/Navigation.tsx`)

- Бічна навігація для всієї документації
- Автоматичне підсвічування активної сторінки
- Згруповані посилання на компоненти

### 2. **CodeBlock Component** (`app/components/CodeBlock.tsx`)

- Відображення коду з підсвіткою синтаксису
- Кнопка копіювання коду
- Підтримка різних мов програмування

### 3. **ComponentPreview Component** (`app/components/ComponentPreview.tsx`)

- Контейнер для live демо компонентів
- Стилізований під Brutal UI дизайн

### 4. **Docs Layout** (`app/docs/layout.tsx`)

- Загальний layout для всіх сторінок документації
- Інтеграція Navigation sidebar
- Responsive дизайн

### 5. **Docs Landing Page** (`app/docs/page.tsx`)

- Головна сторінка документації
- Getting Started секція
- Огляд всіх компонентів з посиланнями
- Design Principles

### 6. **Component Pages**

Окремі сторінки з повною документацією для:

- ✅ Alert - варіанти, приклади, API
- ✅ Button - варіанти, розміри, стани, API
- ✅ Card - варіанти, композиція, API
- ✅ Input - типи, states, error handling
- ✅ Modal - features, keyboard support, API

## 🚀 Як додати нову сторінку документації

1. Створіть папку в `app/docs/[component-name]/`
2. Додайте `page.tsx` з документацією
3. Використовуйте компоненти: `CodeBlock`, `ComponentPreview`, `Badge`
4. Оновіть navigation в `app/components/Navigation.tsx`

### Приклад структури сторінки:

```tsx
'use client';

import { YourComponent } from '../../../src/components/your-component';
import { CodeBlock } from '../../components/CodeBlock';
import { ComponentPreview } from '../../components/ComponentPreview';
import { Badge } from '../../../src/components/badge';

export default function YourComponentDocs() {
  return (
    <div className='space-y-8'>
      {/* Header */}
      <div className='border-b-4 border-black pb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-5xl font-black uppercase'>Component Name</h1>
          <Badge variant="success">Stable</Badge>
        </div>
        <p className='text-xl text-gray-700'>Description</p>
      </div>

      {/* Import */}
      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Import
        </h2>
        <CodeBlock code={\`import { Component } from '@brutal-ui/react';\`} />
      </section>

      {/* Examples */}
      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Basic Usage
        </h2>
        <ComponentPreview>
          <YourComponent />
        </ComponentPreview>
        <CodeBlock code={\`<YourComponent />\`} />
      </section>

      {/* Props Table */}
      <section>
        <h2 className='text-3xl font-bold uppercase mb-4 border-b-4 border-black pb-2'>
          Props
        </h2>
        <div className='overflow-x-auto border-4 border-black'>
          <table className='w-full'>
            {/* Props table */}
          </table>
        </div>
      </section>
    </div>
  );
}
```

## 📝 TODO: Додати документацію для компонентів

- [ ] Accordion
- [ ] Badge
- [ ] Checkbox
- [ ] Confetti
- [ ] Progress
- [ ] Radio
- [ ] Skeleton
- [ ] Switch
- [ ] Tabs
- [ ] Textarea
- [ ] Toast
- [ ] Tooltip

## 🎯 Features

- ✅ Live component previews
- ✅ Copy-paste ready code examples
- ✅ Props documentation tables
- ✅ Navigation sidebar
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Brutal UI styling throughout
