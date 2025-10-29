# Сайт для фотосалона

Веб-сайт для фотосалона с адаптивным дизайном для десктопа и мобильных устройств.

## Технологии

- HTML5
- CSS3
- JavaScript (ES6+)

## Цветовая палитра

- **Background Primary**: `#FAF6F4`
- **Background Secondary**: `#F4EFEC`
- **Text Primary**: `#393839`
- **Text Secondary**: `#393839 (60%)`
- **Accent Green**: `#707863`
- **Button Primary**: `#CECBB5`

## Типографика

### Десктоп версия

#### Kepler Std Display
- 88pt - Display / Statistic
- 64pt - H1 / Display / Caps
- 48pt - H2 / Italic Display
- 48pt - H2 / Display
- 48pt - H2 / Display Caps
- 32pt - H3 / Display
- 32pt - Display Caps / Gallery
- 24pt - Display / Subtitle Italic
- 16pt - Display / Label

### Aktiv Grotesk Corp
- 20pt CAPS Regular - Lead Caps
- 20pt Regular - Lead
- 20pt Medium - Lead
- 16pt CAPS Regular - Button Caps
- 16pt Medium - Strong
- 16pt Medium - Strong Caps
- 16pt Regular - Default
- 12pt Regular - Small
- 12pt Regular - Small Caps

### Мобильная версия (до 768px)

#### Kepler Std Display - Mobile
- 40pt - Display / Contacts
- 40pt - H1 / Display / Caps
- 28pt - H2 / Italic Display
- 28pt - H2 / Display Caps
- 28pt - Display / Contacts Menu
- 20pt - Display / Gallery
- 16pt - Italic Display / Gallery
- 16pt - Display / Label

#### Aktiv Grotesk Corp - Mobile
- 20pt Regular - Menu Item
- 13pt CAPS Regular - Button Caps
- 13pt Medium - Title Case
- 13pt Medium - Strong
- 13pt Medium - Strong Caps
- 13pt Regular - Default
- 10pt Regular - Small
- 12pt Regular - Small Caps

## Структура проекта

```
/
├── index.html          # Главная страница
├── styles.css          # Стили и типографика
├── script.js           # JavaScript для интерактивности
└── README.md           # Документация
```

## Запуск

Просто откройте `index.html` в браузере или используйте локальный сервер:

```bash
# Python 3
python -m http.server 8000

# Node.js (с http-server)
npx http-server
```

Затем откройте http://localhost:8000 в браузере.

## Адаптивность

Сайт полностью адаптирован для:
- Десктопов (1200px+)
- Планшетов (768px - 1200px)
- Мобильных устройств (до 768px)

