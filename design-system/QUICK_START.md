# 🚀 Quick Start - Rukn Design System

Get up and running in **under 60 seconds**.

## Installation

### NPM (Recommended)

```bash
npm install @ruknds/core
```

### Yarn

```bash
yarn add @ruknds/core
```

### CDN (No Installation Required)

```html
<!-- Add to your HTML <head> -->
<link rel="stylesheet" href="https://unpkg.com/@ruknds/core@latest/design-system.css">
```

---

## Usage

### 1. Import in JavaScript/TypeScript Projects

#### React / Next.js

```jsx
// In your main App.js or _app.js
import '@ruknds/core';

function App() {
  return (
    <div>
      <button className="btn-primary">Click Me</button>
      <div className="ds-card">Hello Rukn!</div>
    </div>
  );
}
```

#### Vue / Nuxt

```javascript
// In your main.js
import '@ruknds/core';

// Or in nuxt.config.js
export default {
  css: ['@ruknds/core']
}
```

#### Svelte / SvelteKit

```javascript
// In your +layout.svelte or main component
<script>
  import '@ruknds/core';
</script>
```

#### Angular

```typescript
// In angular.json under "styles"
"styles": [
  "node_modules/@ruknds/core/design-system.css",
  "src/styles.css"
]
```

---

### 2. Import in HTML (CDN)

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App with Rukn</title>
  
  <!-- Rukn Design System -->
  <link rel="stylesheet" href="https://unpkg.com/@ruknds/core@latest/design-system.css">
  
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

## Dark Mode

Rukn is dark mode first. Toggle by adding/removing the `dark` class on `<html>`:

```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Force light mode
document.documentElement.classList.remove('dark');

// Force dark mode
document.documentElement.classList.add('dark');
```

---

## Customization

Override CSS variables in your own stylesheet:

```css
:root {
  --r-color-primary: 280 100% 70%;  /* HSL values */
  --r-font-heading: 'Your Font', sans-serif;
  --r-radius-lg: 16px;
}
```

---

## Next Steps

- 📚 [View All Components](components.html)
- 🎨 [Design Tokens Reference](DESIGN_TOKENS.md)
- 🔧 [Framework Integration Guides](INTEGRATION.md)
- 💡 [Component Examples](example.html)

---

## Need Help?

- 📖 [Full Documentation](README.md)
- 🐛 [Report Issues](https://github.com/ruknds/core/issues)
- 💬 [Join Discussions](https://github.com/ruknds/core/discussions)
- ⭐ [Star on GitHub](https://github.com/ruknds/core)

---

**Built with ❤️ by the Rukn Community**  
MIT Licensed • Free Forever • Open Source

