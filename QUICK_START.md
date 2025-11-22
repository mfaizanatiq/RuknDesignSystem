# 🚀 Quick Start - Rukn Design System

Get up and running in **under 60 seconds**.

---

## ⚡ Super Quick Start

### 1. Download
```bash
git clone https://github.com/mfaizanatiq/RuknDesignSystem.git
```

### 2. Copy Files
Copy the `styles/` folder to your project:
- `styles/design-system-variables.css`
- `styles/design-system.css`

### 3. Use Starter Template
Copy [starter-template.html](./starter-template.html) or see the basic setup below.

---

## 📖 Need More Details?

- **[📘 Complete Integration Guide](./INTEGRATION_GUIDE.md)** - Detailed setup for all frameworks
- **[🌓 Theme Guide](./THEME_GUIDE.md)** - How to use dark/light themes
- **[📝 Starter Template](./starter-template.html)** - Ready-to-use HTML template

---

---

## Usage

### 1. Basic HTML Setup

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App with Rukn</title>
  
  <!-- Rukn Design System -->
  <link rel="stylesheet" href="styles/design-system-variables.css">
  <link rel="stylesheet" href="styles/design-system.css">
  
  <!-- Optional: Phosphor Icons -->
  <script src="https://unpkg.com/@phosphor-icons/web@2.0.3"></script>
</head>
<body>
  
  <!-- Use Rukn Components -->
  <button class="btn-primary">Primary Button</button>
  <input type="text" class="ds-input" placeholder="Enter text">
  <div class="ds-card">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </div>
  
</body>
</html>
```

### 2. With Web Components (Optional)

If you want to use the Web Components (navbar, sidebar, etc.):

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App with Rukn</title>
  
  <!-- Rukn Design System CSS -->
  <link rel="stylesheet" href="styles/design-system-variables.css">
  <link rel="stylesheet" href="styles/design-system.css">
  
  <!-- Rukn Web Components -->
  <script src="components/rukn-navbar.js" defer></script>
  <script src="components/rukn-footer.js" defer></script>
  <script src="components/rukn-ui.js" type="module"></script>
</head>
<body>
  
  <!-- Use Web Components -->
  <rukn-navbar current="home"></rukn-navbar>
  
  <main>
    <h1>Your Content</h1>
    <rukn-button variant="primary">Click Me</rukn-button>
  </main>
  
  <rukn-footer></rukn-footer>
  
</body>
</html>
```

**Note:** Make sure the `components/` folder is in your project directory.

---

## Basic Components

### Buttons

```html
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-outline">Outline</button>
<button class="btn-ghost">Ghost</button>
<button class="btn-destructive">Delete</button>

<!-- With icons -->
<button class="btn-primary">
  <i class="ph ph-rocket-launch"></i>
  Launch
</button>
```

### Inputs

```html
<input type="text" class="ds-input" placeholder="Enter text">
<textarea class="ds-textarea" placeholder="Enter message"></textarea>
<select class="ds-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Cards

```html
<div class="ds-card">
  <h3>Card Title</h3>
  <p>Card content</p>
  <button class="btn-primary">Action</button>
</div>
```

### Form Controls

```html
<!-- Checkbox -->
<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox">
  <span>Accept terms</span>
</label>

<!-- Radio -->
<label class="ds-radio-wrapper">
  <input type="radio" class="ds-radio" name="option">
  <span>Option 1</span>
</label>

<!-- Switch -->
<label class="ds-switch-wrapper">
  <input type="checkbox" class="ds-switch" checked>
  <span>Dark Mode</span>
</label>
```

### Badges

```html
<span class="ds-badge ds-badge-primary">New</span>
<span class="ds-badge ds-badge-secondary">Beta</span>
<span class="ds-badge ds-badge-success">Active</span>
<span class="ds-badge ds-badge-warning">Warning</span>
<span class="ds-badge ds-badge-error">Error</span>
```

---

## Layout System

### Container

```html
<div class="ds-container">
  <!-- Content will be centered with max-width 1280px -->
</div>

<!-- Different sizes -->
<div class="ds-container ds-container-sm">Small container</div>
<div class="ds-container ds-container-lg">Large container</div>
```

### Grid

```html
<!-- 3 column grid -->
<div class="ds-grid ds-grid-cols-3 ds-gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop -->
<div class="ds-grid ds-grid-cols-1 ds-md-grid-cols-2 ds-lg-grid-cols-3 ds-gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Flexbox

```html
<div class="ds-flex ds-justify-between ds-items-center ds-flex-gap-4">
  <div>Left</div>
  <div>Right</div>
</div>
```

---

## 🌓 Theme System

**Dark theme is the default** (optimized for glass morphism)

### Switch to Light Theme

Simply remove the `dark` class:
```html
<!-- Dark theme (default) -->
<html lang="en" class="dark">

<!-- Light theme -->
<html lang="en">
```

### Toggle with JavaScript
```javascript
// Toggle between dark/light
document.documentElement.classList.toggle('dark');

// Set specific theme
document.documentElement.classList.add('dark');    // Force dark
document.documentElement.classList.remove('dark'); // Force light
```

**[📘 See Theme Guide](./THEME_GUIDE.md)** for advanced theming with localStorage, system preferences, and more.

---

## Customization

Override CSS variables in your own stylesheet:

```css
:root {
  --primary: 280 100% 70%;  /* HSL values */
  --r-font-heading: 'Your Font', sans-serif;
  --r-radius-lg: 16px;
}
```

**See [foundation.html](./foundation.html) for a live color picker and all available tokens.**

---

## Multi-language Support

Rukn supports Arabic and Urdu with automatic RTL layout:

```html
<!-- Include language fonts -->
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Use data-i18n attributes for translations -->
<h1 data-i18n="index.hero.heading">Design System</h1>
```

The navbar includes a language switcher. See [components/rukn-navbar.js](./components/rukn-navbar.js) for implementation details.

---

## Next Steps

- 📚 [View All Components](./components.html)
- 🎨 [Design Tokens Reference](./foundation.html)
- 🧩 [Web Components Guide](./components/README.md)
- 🔧 [Framework Integration](./docs/INTEGRATION.md)
- 💡 [Component Examples](./example.html)

---

## Need Help?

- 📖 [Full Documentation](./README.md)
- 🐛 [Report Issues](https://github.com/mfaizanatiq/RuknDesignSystem/issues)
- 💬 [GitHub Discussions](https://github.com/mfaizanatiq/RuknDesignSystem/discussions)
- ⭐ [Star on GitHub](https://github.com/mfaizanatiq/RuknDesignSystem)

---

**Built with ❤️ by the Rukn Community**  
MIT Licensed • Free Forever • Open Source
