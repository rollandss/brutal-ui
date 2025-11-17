# 🎯 GitHub Pages Deployment - Quick Start

## ✅ Що вже готово:

1. **Next.js конфігурація** (`next.config.mjs`):

   - Static export увімкнено
   - Base path налаштовано для GitHub Pages
   - Images оптимізація вимкнена для static export

2. **GitHub Actions** (`.github/workflows/deploy.yml`):

   - Автоматичний білд при push до `main`
   - Деплой на GitHub Pages
   - Білд бібліотеки + Next.js сайту

3. **Файли конфігурації**:
   - `.nojekyll` - для правильної роботи Next.js на GitHub Pages
   - `.gitignore` - оновлено для Next.js
   - `package.json` - скрипти готові

## 🚀 Кроки для деплою:

### 1. Створіть репозиторій на GitHub

```
Назва: brutal-ui (або будь-яка інша)
Публічний або приватний
```

### 2. Запушіть код

```bash
git init
git add .
git commit -m "feat: brutal ui library with 39 components"
git branch -M main
git remote add origin https://github.com/rollandss/brutal-ui.git
git push -u origin main
```

### 3. Увімкніть GitHub Pages

```
1. Відкрийте Settings вашого репозиторію
2. Pages (бокова панель)
3. Source: GitHub Actions
4. Збережіть
```

### 4. Готово!

Всі URL вже налаштовані на `rollandss/brutal-ui`.
Якщо зміните назву репозиторію, оновіть `basePath` в `next.config.mjs`.

**У `README.md`:**

- Замініть всі `yourusername` на ваш GitHub username

**У `next.config.mjs`** (якщо назва репозиторію інша):

```js
basePath: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME' : '',
```

Потім запушіть:

```bash
git add .
git commit -m "chore: update repository URLs"
git push
```

## 📍 Де буде сайт:

```
https://rollandss.github.io/brutal-ui/
```

## 🔍 Як перевірити білд локально:

```bash
# Білд
npm run build

# Перегляд (встановить serve глобально якщо потрібно)
npx serve out
```

Сайт буде на `http://localhost:3000`

## ⚡ Швидкий старт (копіюй-пастни):

```bash
git init
git add .
git commit -m "feat: brutal ui library with 39 components"
git branch -M main
git remote add origin https://github.com/rollandss/brutal-ui.git
git push -u origin main
```

Після пушу:

1. GitHub Settings → Pages → Source: GitHub Actions
2. Зачекайте 2-3 хвилини
3. Відкрийте `https://rollandss.github.io/brutal-ui/`

## 📚 Що буде на сайті:

- Головна сторінка з усіма 39 компонентами
- Документація кожного компонента в `/docs`
- Інтерактивні приклади
- Live preview кожного компонента

## 🎨 Структура сторінок:

```
/ - Головна (демо всіх компонентів)
/docs - Документація
/docs/button - Button docs
/docs/input - Input docs
... (усі 39 компонентів)
```

## 🐛 Якщо щось не працює:

1. **404 на GitHub Pages:**

   - Перевірте що Source = "GitHub Actions"
   - Перевірте Actions tab на помилки

2. **CSS не завантажується:**

   - Файл `.nojekyll` має бути в `/public`
   - Перевірте що він закомічений

3. **Білд падає:**
   - Перевірте Actions → Workflows → Build logs
   - Спробуйте `npm run build` локально

---

## 📦 Альтернативи GitHub Pages:

### Vercel (найпростіше):

```bash
npm i -g vercel
vercel
```

### Netlify:

1. Netlify.com → New site
2. Connect GitHub
3. Build: `npm run build`
4. Publish: `out`

---

Готово! 🎉 Ваша Brutal UI бібліотека буде доступна онлайн!
