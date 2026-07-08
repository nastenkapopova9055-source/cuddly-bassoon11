# Сервисный инженер радиосети — ЭР-Телеком Холдинг

Лендинг профессии «Сервисный инженер радиосети» на **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS** и **Ant Design**. Адаптивная вёрстка, интерактивная
мини-игра на canvas и анимированные человечки на отзывах.

## Стек

- Next.js 14+ (App Router, SSR)
- TypeScript
- Tailwind CSS
- Ant Design 5 (`@ant-design/nextjs-registry` для SSR-стилей)
- Чистый CSS-канвас для игры (без сторонних зависимостей)

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

Сборка и прод-запуск:

```bash
npm run build
npm run start
```

## Деплой на Vercel

1. Залей репозиторий на GitHub.
2. В Vercel выбери **New Project → Import** этого репозитория.
3. Framework Preset определится автоматически как **Next.js**.
4. Root Directory — `.` (корень проекта, где `package.json`).
5. Нажми **Deploy**. Vercel сам выполнит `npm install` и `next build`.

## Структура

```
app/
  layout.tsx        # AntdRegistry + ConfigProvider (тема, локаль ru_RU)
  page.tsx          # компоновка секций
  globals.css       # Tailwind + кастомные анимации (reveal, dancer, hero)
components/
  Header.tsx        # фиксированная шапка + мобильный Drawer (AntD)
  Hero.tsx
  About.tsx
  Responsibilities.tsx
  Skills.tsx        # вкладки на AntD Tabs
  Career.tsx
  Benefits.tsx
  Game.tsx          # canvas-симулятор инженера (клавиатура/тач)
  Testimonials.tsx  # танцующие человечки по полу имени
  Footer.tsx
  Reveal.tsx        # появление при скролле (IntersectionObserver)
  SectionLabel.tsx
  Providers.tsx     # Ant Design ConfigProvider
lib/
  content.ts        # весь текстовый контент
  scroll.ts         # плавный скролл к якорям
```

## Особенности

- **Интерактив** — управляй инженером (WASD/стрелки на ПК, свайп на телефоне),
  чини сломанные устройства.
- **Отзывы** — для каждого имени танцует человечек, соответствующий полу
  (мужчина 🕺 / женщина 💃).
- Полностью адаптивно: мобильное меню, сетки перестраиваются под размер экрана.
