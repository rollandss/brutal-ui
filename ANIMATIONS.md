# 🎬 Animation Library Documentation

## Нові анімації та ефекти

### 🆕 Додані Keyframe анімації

#### 1. **Tilt** - хитання з боку в бік

```css
@keyframes tilt;
```

- Плавне хитання від -3° до +3°
- Використання: `.animate-tilt`
- Тривалість: 2s infinite

#### 2. **Rubber Band** - ефект гумки

```css
@keyframes rubber-band;
```

- Розтягування та стискання об'єкта
- Використання: `.animate-rubber-band`
- Тривалість: 1s

#### 3. **Jello** - желейний ефект

```css
@keyframes jello;
```

- Skew трансформація в різні боки
- Використання: `.animate-jello`
- Тривалість: 1s

#### 4. **Swing** - гойдання

```css
@keyframes swing;
```

- Обертання як маятник (15° → -10° → 5° → -5° → 0°)
- Використання: `.animate-swing`
- Тривалість: 1s

#### 5. **Flip** - перевертання

```css
@keyframes flip;
```

- Обертання на 360° по осі Y з perspective
- Використання: `.animate-flip`
- Тривалість: 1s

#### 6. **Tada** - ефект "тада!"

```css
@keyframes tada;
```

- Комбінація scale та rotate для ефекту презентації
- Використання: `.animate-tada`
- Тривалість: 1s

#### 7. **Zoom In** - наближення

```css
@keyframes zoom-in;
```

- Поява з масштабуванням від 0.3 до 1
- Використання: `.animate-zoom-in`
- Тривалість: 0.5s

#### 8. **Bounce In** - стрибок при появі

```css
@keyframes bounce-in;
```

- Поява з ефектом відскоку
- Використання: `.animate-bounce-in`
- Тривалість: 0.6s

#### 9. **Roll In** - котіння

```css
@keyframes roll-in;
```

- Котіння з лівого боку з обертанням
- Використання: `.animate-roll-in`
- Тривалість: 0.6s

---

### 🎯 Нові Hover ефекти

#### `.hover-tilt:hover`

3D ефект нахилу з perspective

```css
transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
```

#### `.hover-shake:hover`

Тремтіння при наведенні

```css
animation: shake 0.5s ease-in-out;
```

#### `.hover-jello:hover`

Желейний ефект

```css
animation: jello 0.8s ease;
```

#### `.hover-rubber-band:hover`

Ефект розтягування гумки

```css
animation: rubber-band 0.8s ease;
```

#### `.hover-swing:hover`

Гойдання

```css
animation: swing 0.6s ease;
```

---

### 📦 Нові Компоненти

## 1. **Sticker Component**

### Опис

Яскраві, інтерактивні стікери в brutal стилі з різними анімаціями та кольорами.

### Props

| Prop        | Type                                                                          | Default       | Description            |
| ----------- | ----------------------------------------------------------------------------- | ------------- | ---------------------- |
| `emoji`     | string                                                                        | '⭐'          | Emoji для відображення |
| `text`      | string                                                                        | -             | Текст під emoji        |
| `variant`   | 'rotate-left' \| 'rotate-right' \| 'bounce' \| 'wiggle' \| 'float' \| 'pulse' | 'rotate-left' | Тип анімації           |
| `color`     | 'yellow' \| 'pink' \| 'blue' \| 'green' \| 'orange' \| 'purple' \| 'red'      | 'yellow'      | Колір фону             |
| `size`      | 'sm' \| 'md' \| 'lg' \| 'xl'                                                  | 'md'          | Розмір стікера         |
| `onClick`   | () => void                                                                    | -             | Callback при кліку     |
| `className` | string                                                                        | -             | Додаткові CSS класи    |

### Варіанти анімацій

- `rotate-left` - обертання на -12°, hover повертає до 0°
- `rotate-right` - обертання на +12°, hover повертає до 0°
- `bounce` - стрибок один раз, hover - continuous bounce
- `wiggle` - хитання (hover активує)
- `float` - плавання вгору-вниз
- `pulse` - пульсація

### Кольори

- `yellow` - жовтий (#fef08a)
- `pink` - рожевий (#fda4af)
- `blue` - синій (#93c5fd)
- `green` - зелений (#86efac)
- `orange` - помаранчевий (#fdba74)
- `purple` - фіолетовий (#d8b4fe)
- `red` - червоний (#fca5a5)

### Розміри

- `sm` - 60x60px, text-2xl
- `md` - 80x80px, text-3xl (default)
- `lg` - 100x100px, text-4xl
- `xl` - 120x120px, text-5xl

### Приклад використання

```tsx
import { Sticker, StickerGroup } from '@brutal-ui/react';

function MyComponent() {
  return (
    <StickerGroup>
      <Sticker
        emoji='💀'
        text='Brutal'
        color='yellow'
        variant='rotate-left'
        size='lg'
        onClick={() => console.log('Clicked!')}
      />
      <Sticker emoji='🔥' text='Hot' color='orange' variant='float' />
    </StickerGroup>
  );
}
```

---

## 2. **AnimatedIcon Component**

### Опис

Анімовані іконки/емоджі з різними ефектами для прикраси інтерфейсу.

### Props

| Prop        | Type                                                                                                                       | Default  | Description               |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------- |
| `icon`      | string                                                                                                                     | -        | Emoji або текстова іконка |
| `animation` | 'spin' \| 'bounce' \| 'pulse' \| 'wiggle' \| 'float' \| 'swing' \| 'shake' \| 'flip' \| 'rubber-band' \| 'jello' \| 'tada' | 'bounce' | Тип анімації              |
| `size`      | 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'                                                                             | 'md'     | Розмір іконки             |
| `className` | string                                                                                                                     | -        | Додаткові CSS класи       |
| `onClick`   | () => void                                                                                                                 | -        | Callback при кліку        |

### Розміри

- `sm` - text-2xl
- `md` - text-4xl (default)
- `lg` - text-6xl
- `xl` - text-8xl
- `2xl` - text-9xl
- `3xl` - 12rem

### Приклад використання

```tsx
import { AnimatedIcon, IconGrid } from '@brutal-ui/react';

function MyComponent() {
  return (
    <IconGrid columns={4}>
      <AnimatedIcon icon='🎯' animation='spin' size='lg' />
      <AnimatedIcon icon='⚡' animation='bounce' size='lg' />
      <AnimatedIcon icon='💫' animation='pulse' size='lg' />
      <AnimatedIcon icon='🌟' animation='wiggle' size='lg' />
    </IconGrid>
  );
}
```

---

### 🎨 Stagger Animations

Для списків елементів доданий stagger effect:

```css
.stagger-fade-in > * {
  animation: fade-in 0.5s ease-out;
}
```

Кожен дочірній елемент з'являється з затримкою:

- 1-й елемент: 0.1s delay
- 2-й елемент: 0.2s delay
- 3-й елемент: 0.3s delay
- і так далі до 6-го (0.6s delay)

### Використання

```tsx
<div className='stagger-fade-in'>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
  <Card>Item 4</Card>
</div>
```

---

## 📊 Повний список анімацій

### Базові (вже були)

1. `fade-in` - поява
2. `slide-up` - виїзд знизу
3. `shake` - тремтіння
4. `bounce` - стрибок
5. `pulse` - пульсація
6. `wiggle` - хитання
7. `float` - плавання
8. `glow` - світіння

### Нові

9. `tilt` - хитання з боку в бік
10. `rubber-band` - ефект гумки
11. `jello` - желейний ефект
12. `swing` - гойдання
13. `flip` - перевертання
14. `tada` - ефект презентації
15. `zoom-in` - наближення
16. `bounce-in` - стрибок при появі
17. `roll-in` - котіння

### Всього: **17 анімацій** + **8 hover ефектів**

---

## 🎪 Демо секції на головній сторінці

1. **Brutal Stickers** - 10 інтерактивних стікерів
2. **Animation Showcase** - 8 кнопок з демо анімацій
3. **Hover Effects Showcase** - 8 карток з різними hover ефектами
4. **Animated Icons Gallery** - 12 анімованих іконок

---

## 🚀 Performance

Всі анімації оптимізовані:

- Використання `transform` та `opacity` для GPU acceleration
- `will-change` автоматично додається при необхідності
- Респект до `prefers-reduced-motion` для accessibility

```css
@media (prefers-reduced-motion: reduce) {
  /* Всі анімації вимикаються */
}
```

---

## 📝 Accessibility

- Всі інтерактивні елементи мають `cursor: pointer`
- Hover states чітко видні
- Підтримка клавіатурної навігації
- Автоматична підтримка reduced motion
- Text shadows для кращої читабельності

---

## 🎯 Best Practices

### Коли використовувати різні анімації:

- **bounce, tada** - для привернення уваги, важливих елементів
- **float, pulse** - для фонових елементів, декору
- **swing, wiggle** - для інтерактивних елементів
- **flip, spin** - для loading states, переходів
- **rubber-band, jello** - для playful UI, ігрових інтерфейсів
- **zoom-in, bounce-in, roll-in** - для entrance анімацій
- **fade-in, slide-up** - для subtle появ контенту

### Performance tips:

1. Не використовуйте більше 5-6 анімацій одночасно на екрані
2. Для списків використовуйте stagger animations
3. Для критичного контенту краще fade-in без складних transform
4. Infinite анімації (pulse, float) використовуйте помірно

---

## 📦 Експортовані компоненти

```typescript
// Стікери
export { Sticker, StickerGroup } from '@brutal-ui/react';
export type { StickerProps, StickerGroupProps } from '@brutal-ui/react';

// Анімовані іконки
export { AnimatedIcon, IconGrid } from '@brutal-ui/react';
export type { AnimatedIconProps, IconGridProps } from '@brutal-ui/react';
```

---

Made with 💀 by Brutal UI Team
