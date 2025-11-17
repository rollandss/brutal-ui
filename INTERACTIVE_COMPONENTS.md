# 🎉 Нові інтерактивні компоненти

## Додано 9 нових компонентів!

### 🎚️ 1. Toggle Switch

Потужний перемикач з різними стилями та розмірами.

**Варіанти:**

- `default` - зелений/сірий стандартний стиль
- `brutal` - жовтий/фіолетовий brutal стиль
- `neon` - рожевий неоновий з glow ефектом
- `gradient` - градієнтний фон

**Розміри:**

- `sm` - 40x24px
- `md` - 56x28px (default)
- `lg` - 80x40px

**Функції:**

- Controlled/Uncontrolled режими
- Підтримка іконок (on/off states)
- Disabled стан
- Лейбли
- ToggleGroup для групування

```tsx
<Toggle
  checked={checked}
  onChange={setChecked}
  variant='brutal'
  size='lg'
  label='Enable'
  icon={{ on: '✓', off: '✗' }}
/>
```

---

### 🌪️ 2. Shaker

Компонент що тремтить при взаємодії.

**Triggers:**

- `hover` - тремтіння при наведенні
- `click` - тремтіння при кліку
- `auto` - автоматичне тремтіння з інтервалом
- `manual` - контрольоване ззовні

**Інтенсивність:**

- `low` - легке тремтіння (0.3s)
- `medium` - середнє (0.5s) - default
- `high` - сильне (0.7s, 2 повтори)
- `extreme` - дуже сильне (0.5s, 4 повтори)

```tsx
<Shaker trigger='hover' intensity='medium'>
  <Card>Наведи на мене!</Card>
</Shaker>
```

---

### ⬆️ 3. Bouncer

Компонент що стрибає.

**Triggers:**

- `hover` - стрибок при наведенні
- `click` - стрибок при кліку
- `auto` - одноразовий стрибок при mount
- `continuous` - безкінечні стрибки

**Висота:**

- `low` - низький стрибок (0.5s)
- `medium` - середній (0.7s) - default
- `high` - високий (1s)

```tsx
<Bouncer trigger='hover' height='medium'>
  <Button>Bounce me!</Button>
</Bouncer>
```

---

### 🔄 4. SpinnerBox

Компонент що обертається.

**Швидкість:**

- `slow` - 3s на оберт
- `normal` - 2s (default)
- `fast` - 1s

**Напрямок:**

- `clockwise` - за годинниковою
- `counterclockwise` - проти годинникової

**Triggers:**

- `hover` - обертання при наведенні
- `continuous` - безкінечне обертання

```tsx
<SpinnerBox trigger='hover' speed='normal' direction='clockwise'>
  <div>🎯</div>
</SpinnerBox>
```

---

### 💫 5. Pulser

Компонент з пульсацією (opacity + scale).

**Інтенсивність:**

- `subtle` - scale до 1.02
- `normal` - scale до 1.05 (default)
- `strong` - scale до 1.1

**Швидкість:**

- `slow` - 3s
- `normal` - 2s (default)
- `fast` - 1s

```tsx
<Pulser intensity='normal' speed='normal'>
  <Badge>Pulsing!</Badge>
</Pulser>
```

---

### 🎴 6. FlipCard

Картка що перевертається і показує зворотній бік.

**Triggers:**

- `hover` - flip при наведенні
- `click` - flip при кліку

**Напрямок:**

- `horizontal` - обертання по Y осі
- `vertical` - обертання по X осі

```tsx
<FlipCard
  trigger='hover'
  direction='horizontal'
  front={<div>Front Side</div>}
  back={<div>Back Side</div>}
/>
```

---

### 🎁 7. RevealCard

Картка з прихованим контентом що розкривається.

**Triggers:**

- `hover` - розкриття при наведенні
- `click` - розкриття при кліку

**Ефекти:**

- Плавна зміна opacity
- Smooth height transition
- Збільшення shadow при reveal

```tsx
<RevealCard
  title='Secret Content'
  trigger='hover'
  preview={<div>Preview...</div>}
  content={<div>Hidden content!</div>}
/>
```

---

### 🎭 8. MorphCard

Картка що змінює вміст та колір фону.

**Можливості:**

- Множинні стани (content + color)
- AutoPlay режим з інтервалом
- Indicator dots для навігації
- Click для переходу між станами

```tsx
<MorphCard
  autoPlay
  interval={3000}
  states={[
    { color: '#fef08a', content: <div>State 1</div> },
    { color: '#a5f3fc', content: <div>State 2</div> },
    { color: '#fda4af', content: <div>State 3</div> },
  ]}
/>
```

---

### 📦 9. ToggleGroup

Контейнер для групування Toggle switches.

**Орієнтація:**

- `horizontal` - горизонтальне розміщення (default)
- `vertical` - вертикальне розміщення

```tsx
<ToggleGroup orientation='horizontal'>
  <Toggle label='Option 1' />
  <Toggle label='Option 2' />
  <Toggle label='Option 3' />
</ToggleGroup>
```

---

## 📊 Статистика

### Було:

- 41 компонент
- 17 анімацій
- 8 hover ефектів

### Стало:

- **50 компонентів** (+9) 🎨
- 17 анімацій
- 8 hover ефектів
- **3 нові демо секції** на головній

---

## 🎯 Секції на головній сторінці

### 1. 🎚️ Toggle Switches Section

- Демо всіх 4 варіантів стилів
- 3 розміри
- Приклади з іконками
- Повністю інтерактивно

### 2. 🎭 Motion Effects Section

- Shaker (hover для тремтіння)
- Bouncer (hover для стрибків)
- SpinnerBox (hover для обертання)
- Pulser (continuous пульсація)
- Яскравий gradient фон

### 3. 🎴 Interactive Cards Section

- FlipCard з horizontal flip
- RevealCard з прихованим контентом
- MorphCard з autoPlay (3 стани)
- Grid layout 1x3

---

## 🎨 Використання

### Базове використання Toggle

```tsx
import { Toggle } from '@brutal-ui/react';
import { useState } from 'react';

function MyComponent() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Toggle
      checked={enabled}
      onChange={setEnabled}
      variant='brutal'
      label='Dark Mode'
    />
  );
}
```

### Motion Effects

```tsx
import { Shaker, Bouncer, Pulser } from '@brutal-ui/react';

function MyComponent() {
  return (
    <>
      <Shaker trigger='hover' intensity='high'>
        <Button>Shake on hover!</Button>
      </Shaker>

      <Bouncer trigger='click' height='medium'>
        <Card>Click to bounce!</Card>
      </Bouncer>

      <Pulser intensity='strong' speed='fast'>
        <Badge>Always pulsing!</Badge>
      </Pulser>
    </>
  );
}
```

### Interactive Cards

```tsx
import { FlipCard, RevealCard, MorphCard } from '@brutal-ui/react';

function MyComponent() {
  return (
    <>
      <FlipCard
        trigger='hover'
        front={<div>Hover me!</div>}
        back={<div>Surprise!</div>}
      />

      <RevealCard
        title='Mystery Box'
        trigger='click'
        preview={<div>Click to reveal</div>}
        content={<div>Secret content!</div>}
      />

      <MorphCard
        autoPlay
        interval={2000}
        states={[
          { color: '#fef08a', content: <div>☀️ Day</div> },
          { color: '#1e293b', content: <div>🌙 Night</div> },
        ]}
      />
    </>
  );
}
```

---

## 🔧 CSS доповнення

Додано utility classes для 3D transforms:

```css
.rotate-y-180 {
  transform: rotateY(180deg);
}

.rotate-x-180 {
  transform: rotateX(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
```

---

## ✨ Особливості

### Performance

- ✅ GPU acceleration для flip/morph
- ✅ Оптимізовані transitions
- ✅ RequestAnimationFrame для smooth animations
- ✅ No layout thrashing

### Accessibility

- ✅ ARIA roles (role="switch" для Toggle)
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Screen reader friendly

### Responsive

- ✅ Adaptive sizing для всіх компонентів
- ✅ Touch-friendly на мобільних
- ✅ Responsive grid layouts

---

## 📚 Документація

Створено документацію:

- `/docs/toggle` - повна документація Toggle switches

---

## 🎪 Live Demo

Всі компоненти можна побачити на:

- **Головна сторінка** - http://localhost:3000

  - Toggle Switches section
  - Motion Effects section
  - Interactive Cards section

- **Toggle Docs** - http://localhost:3000/docs/toggle
  - Всі варіанти
  - Розміри
  - З іконками
  - Disabled states
  - Props table

---

## 📦 Експорт

Всі компоненти експортовані в `src/index.ts`:

```typescript
// Toggle
export { Toggle, ToggleGroup } from './components/toggle';
export type { ToggleProps, ToggleGroupProps } from './components/toggle';

// Motion
export { Shaker, Bouncer, SpinnerBox, Pulser } from './components/motion';
export type {
  ShakerProps,
  BouncerProps,
  SpinnerBoxProps,
  PulserProps,
} from './components/motion';

// Interactive Cards
export {
  FlipCard,
  RevealCard,
  MorphCard,
} from './components/interactive-cards';
export type {
  FlipCardProps,
  RevealCardProps,
  MorphCardProps,
} from './components/interactive-cards';
```

---

## 🚀 Наступні кроки

Можна ще додати:

- [ ] Slider з brutal стилем
- [ ] Tabs з анімованими переходами
- [ ] Accordion з різними ефектами
- [ ] Carousel з brutal navigation
- [ ] Progress bar з різними стилями
- [ ] Notification center
- [ ] Command palette
- [ ] Gesture controls (swipe, pinch)

---

## 🎉 Підсумок

**Додано:**

- ✅ 9 нових компонентів
- ✅ 3 нові демо секції
- ✅ Документація для Toggle
- ✅ CSS utilities для 3D transforms
- ✅ Повна типізація TypeScript
- ✅ Accessibility підтримка

**Brutal UI тепер має 50 компонентів!** 🎨

Made with 💀 by Brutal UI Team
