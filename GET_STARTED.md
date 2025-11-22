# 🚀 Get Started with Rukn Design System

**The simplest integration guide ever.**

---

## 📦 What You Need

Just **2 CSS files**:
1. `styles/design-system-variables.css` (Design tokens)
2. `styles/design-system.css` (Component styles)

That's it! No JavaScript, no build tools, no dependencies.

---

## ⚡ 3 Steps to Start

### Step 1: Download

```bash
git clone https://github.com/mfaizanatiq/RuknDesignSystem.git
```

Or [download ZIP](https://github.com/mfaizanatiq/RuknDesignSystem/archive/refs/heads/master.zip)

### Step 2: Copy Files

Copy the `styles/` folder to your project:

```
your-project/
  ├── styles/
  │   ├── design-system-variables.css  ← Copy this
  │   └── design-system.css            ← Copy this
  └── index.html
```

### Step 3: Link CSS

Add to your HTML `<head>`:

```html
<link rel="stylesheet" href="styles/design-system-variables.css">
<link rel="stylesheet" href="styles/design-system.css">
```

**Done!** 🎉

---

## 🎨 Your First Page

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  
  <!-- Rukn CSS -->
  <link rel="stylesheet" href="styles/design-system-variables.css">
  <link rel="stylesheet" href="styles/design-system.css">
</head>
<body>
  
  <div class="ds-container" style="padding: 2rem;">
    <h1>Hello Rukn! 🏛️</h1>
    <button class="btn-primary">Get Started</button>
  </div>
  
</body>
</html>
```

Save as `index.html` and open in your browser. Beautiful dark theme ready!

---

## 🌓 Light Theme?

Remove `dark` from the `<html>` tag:

```html
<!-- Dark (default) -->
<html lang="en" class="dark">

<!-- Light -->
<html lang="en">
```

Or toggle with JavaScript:
```html
<button onclick="document.documentElement.classList.toggle('dark')">
  Toggle Theme
</button>
```

---

## 🧩 Add Components

Use class names to style elements:

```html
<!-- Buttons -->
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-outline">Outline</button>

<!-- Input -->
<input type="text" class="ds-input" placeholder="Type here">

<!-- Card -->
<div class="ds-card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>

<!-- Badge -->
<span class="ds-badge ds-badge-primary">New</span>

<!-- Checkbox -->
<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox">
  <span>Accept terms</span>
</label>
```

See all components in [components.html](./components.html)

---

## 📱 Responsive Grid

```html
<!-- 3 column grid on desktop, 1 on mobile -->
<div class="ds-grid ds-grid-cols-1 ds-md-grid-cols-2 ds-lg-grid-cols-3 ds-gap-4">
  <div class="ds-card">Item 1</div>
  <div class="ds-card">Item 2</div>
  <div class="ds-card">Item 3</div>
</div>
```

---

## 🎨 Customize Colors

Create `custom.css`:

```css
:root {
  --primary: 280 100% 70%;  /* Purple */
  --accent: 180 80% 50%;    /* Cyan */
}
```

Load after Rukn:
```html
<link rel="stylesheet" href="styles/design-system-variables.css">
<link rel="stylesheet" href="styles/design-system.css">
<link rel="stylesheet" href="custom.css">
```

See all tokens in [foundation.html](./foundation.html)

---

## 🔧 Framework Integration

### React
```jsx
import './styles/design-system-variables.css';
import './styles/design-system.css';

function App() {
  return <button className="btn-primary">Hello</button>;
}
```

### Vue
```vue
<style>
@import './styles/design-system-variables.css';
@import './styles/design-system.css';
</style>

<template>
  <button class="btn-primary">Hello</button>
</template>
```

### Next.js
```javascript
// app/layout.js
import '../styles/design-system-variables.css';
import '../styles/design-system.css';

export default function RootLayout({ children }) {
  return <html className="dark"><body>{children}</body></html>;
}
```

---

## 📚 Examples

- **[Minimal Example](./minimal-example.html)** - Bare minimum (2 files)
- **[Starter Template](./starter-template.html)** - Feature-complete starter
- **[All Components](./components.html)** - Full component showcase
- **[Design Tokens](./foundation.html)** - All CSS variables

---

## 🆘 Need Help?

- 📘 [Complete Integration Guide](./INTEGRATION_GUIDE.md) - Detailed guide for all use cases
- 🌓 [Theme Guide](./THEME_GUIDE.md) - Dark/light theme system
- 🐛 [Report Issues](https://github.com/mfaizanatiq/RuknDesignSystem/issues)
- 💬 [GitHub Discussions](https://github.com/mfaizanatiq/RuknDesignSystem/discussions)

---

## ✅ Checklist

- [ ] Downloaded Rukn
- [ ] Copied `styles/` folder
- [ ] Linked CSS in HTML
- [ ] Opened in browser
- [ ] Tried dark/light theme
- [ ] Built something beautiful! 🚀

---

<div align="center">

**That's it! You're ready to build.**

[View Examples](./components.html) • [Read Full Docs](./README.md) • [Star on GitHub](https://github.com/mfaizanatiq/RuknDesignSystem) ⭐

</div>

