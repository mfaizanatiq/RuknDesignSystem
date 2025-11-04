# Design System Integration Guide

Quick guide for integrating this design system into your projects.

## 🚀 Quick Integration Steps

### Step 1: Copy Files

Copy these files to your project:
```
design-system/
  ├── design-system-variables.css
  ├── design-system.css
  └── README.md
```

### Step 2: Include in Your HTML

Add to your `<head>`:

```html
<link rel="stylesheet" href="path/to/design-system-variables.css">
<link rel="stylesheet" href="path/to/design-system.css">
```

### Step 3: Customize Variables (Optional)

Edit `design-system-variables.css` to match your brand:

```css
:root {
  --primary: 220 70% 50%; /* Your brand color */
  /* ... */
}
```

### Step 4: Use Classes

Start using the design system classes:

```html
<button class="btn-primary">Click Me</button>
<input class="ds-input" placeholder="Enter text">
```

## 📦 Integration Methods

### Method 1: Direct File Copy (Simplest)

1. Copy `design-system/` folder to your project
2. Link CSS files in HTML
3. Done!

### Method 2: NPM Package (For Distribution)

If you want to publish it as an NPM package:

```bash
cd design-system
npm publish
```

Then in other projects:

```bash
npm install @your-org/design-system
```

```html
<link rel="stylesheet" href="node_modules/@your-org/design-system/design-system-variables.css">
<link rel="stylesheet" href="node_modules/@your-org/design-system/design-system.css">
```

### Method 3: CDN (For Quick Testing)

Upload to a CDN and link:

```html
<link rel="stylesheet" href="https://cdn.example.com/design-system-variables.css">
<link rel="stylesheet" href="https://cdn.example.com/design-system.css">
```

### Method 4: Build Tool Integration

#### Vite / Webpack

```javascript
// In your main entry file
import './design-system/design-system-variables.css';
import './design-system/design-system.css';
```

#### Next.js

```javascript
// pages/_app.js or app/layout.js
import '../design-system/design-system-variables.css';
import '../design-system/design-system.css';
```

#### Create React App

```javascript
// src/index.js
import './design-system/design-system-variables.css';
import './design-system/design-system.css';
```

## 🎨 Framework-Specific Examples

### React

```jsx
import './design-system-variables.css';
import './design-system.css';

function MyComponent() {
  return (
    <div>
      <button className="btn-primary">React Button</button>
      <input className="ds-input" placeholder="Type here" />
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <button class="btn-primary">Vue Button</button>
    <input class="ds-input" placeholder="Type here" />
  </div>
</template>

<style>
@import './design-system-variables.css';
@import './design-system.css';
</style>
```

### Angular

**Option A: Global Styles**

`angular.json`:
```json
{
  "styles": [
    "src/design-system/design-system-variables.css",
    "src/design-system/design-system.css"
  ]
}
```

**Option B: Component Styles**

```typescript
@Component({
  selector: 'app-my-component',
  styleUrls: [
    '../../design-system/design-system-variables.css',
    '../../design-system/design-system.css'
  ],
  template: `
    <button class="btn-primary">Angular Button</button>
  `
})
```

### Svelte

```svelte
<script>
  // Component logic
</script>

<style>
  @import '../design-system/design-system-variables.css';
  @import '../design-system/design-system.css';
</style>

<button class="btn-primary">Svelte Button</button>
```

## 🔧 Customization

### Override Variables

Create your own CSS file after the design system:

```css
/* my-custom-styles.css */
:root {
  --primary: 220 70% 50%; /* Override primary color */
  --radius: 1rem; /* Larger border radius */
}
```

Include after design system:

```html
<link rel="stylesheet" href="design-system-variables.css">
<link rel="stylesheet" href="design-system.css">
<link rel="stylesheet" href="my-custom-styles.css">
```

### Extend Components

Add your own styles that work with the design system:

```css
/* custom-components.css */
.my-special-button {
  /* Uses design system base */
  @extend .btn-primary;
  
  /* Add custom styling */
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
}
```

Or override:

```css
.btn-primary {
  /* Your custom primary button style */
}
```

## 🌙 Dark Mode

### Automatic (CSS)

The design system automatically applies dark mode when `.dark` class is present:

```html
<html class="dark">
  <!-- Dark theme active -->
</html>
```

### JavaScript Toggle

```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Set dark mode
document.documentElement.classList.add('dark');

// Remove dark mode
document.documentElement.classList.remove('dark');
```

### React Hook

```javascript
import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return [isDark, setIsDark];
}
```

## 📱 Responsive Considerations

The design system includes responsive styles, but you may want to add your own:

```css
@media (max-width: 768px) {
  .btn-primary {
    width: 100%; /* Full width on mobile */
  }
}
```

## 🎯 Best Practices

1. **Always include variables first**: `design-system-variables.css` before `design-system.css`
2. **Customize variables, not classes**: Change colors via CSS variables
3. **Don't modify core files**: Create override files instead
4. **Use semantic class names**: Combine design system classes with your own
5. **Test dark mode**: Ensure your customizations work in both themes

## 🐛 Troubleshooting

### Styles not applying?

1. Check file paths are correct
2. Ensure variables CSS is loaded before component CSS
3. Check browser console for 404 errors
4. Verify CSS variables are in HSL format

### Colors not showing?

Make sure variables use HSL format without `hsl()`:

```css
/* ✅ Correct */
--primary: 352 95% 58%;

/* ❌ Wrong */
--primary: hsl(352, 95%, 58%);
--primary: #FF4154;
```

### Buttons not styled?

1. Ensure both CSS files are loaded
2. Check class names are correct: `btn-primary` not `button-primary`
3. Verify no conflicting styles override the design system

## 📚 Next Steps

1. Read `README.md` for complete documentation
2. Check `example.html` for live examples
3. Customize variables to match your brand
4. Start building with the design system!

## 🆕 New Components (Modal, Navbar, Drawer)

### Modal Example

```html
<!-- Overlay -->
<div class="ds-modal-overlay"></div>

<!-- Modal -->
<div class="ds-modal">
  <div class="ds-modal-content">
    <div class="ds-modal-header">
      <h3 class="ds-modal-title">Title</h3>
    </div>
    <div>Content</div>
    <div class="ds-modal-footer">
      <button class="btn-primary">OK</button>
    </div>
  </div>
  <button class="ds-modal-close">✕</button>
</div>
```

### Navbar Example

```html
<nav class="ds-navbar">
  <div class="ds-navbar-container">
    <a href="#" class="ds-navbar-brand">Logo</a>
    <nav class="ds-navbar-nav">
      <button class="btn-outline btn-sm">Menu</button>
    </nav>
  </div>
</nav>
<div class="ds-navbar-spacer"></div>
```

### Drawer Example

```html
<div class="ds-drawer-overlay"></div>
<div class="ds-drawer">
  <div class="ds-drawer-handle"></div>
  <div class="ds-drawer-header">
    <h3 class="ds-drawer-title">Title</h3>
    <button class="ds-drawer-close">✕</button>
  </div>
  <div class="ds-drawer-content">Content</div>
</div>
```

## 💡 Tips

- Start with the example file to see all components
- Customize variables early in your project
- Use browser DevTools to inspect component styles
- Combine design system classes with your own utility classes
- **Modal/Drawer**: Use JavaScript to toggle `display: none/flex` or integrate with your framework's state management
- **Navbar**: Remember to add `.ds-navbar-spacer` after the navbar for proper content spacing

