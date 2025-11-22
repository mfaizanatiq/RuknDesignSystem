# 🎯 Rukn Design System - Integration Summary

**Your quick reference card for integrating Rukn.**

---

## 📋 TL;DR

1. Copy `styles/` folder
2. Link 2 CSS files in HTML
3. Use classes like `btn-primary`, `ds-card`, `ds-input`
4. Dark theme by default (remove `class="dark"` for light)

**Done!** 🎉

---

## 📦 What to Copy

**Minimum (CSS Only):**
```
✅ styles/design-system-variables.css  (15KB)
✅ styles/design-system.css            (45KB)
```

**Optional (Web Components):**
```
☐ components/rukn-navbar.js    (3KB)
☐ components/rukn-footer.js    (1KB)
☐ components/rukn-ui.js        (8KB)
```

---

## 🔗 How to Link

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  
  <!-- Rukn CSS (Required) -->
  <link rel="stylesheet" href="styles/design-system-variables.css">
  <link rel="stylesheet" href="styles/design-system.css">
</head>
<body>
  <!-- Start building! -->
</body>
</html>
```

---

## 🌓 Theme Toggle

**Default: Dark** (beautiful glass morphism)

**Switch to Light:**
```html
<!-- Remove dark class -->
<html lang="en">
```

**JavaScript Toggle:**
```javascript
document.documentElement.classList.toggle('dark');
```

**With localStorage:**
```javascript
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
  }
});
```

---

## 🧩 Common Components

### Buttons
```html
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-outline">Outline</button>
<button class="btn-ghost">Ghost</button>
<button class="btn-destructive">Delete</button>
```

### Form Inputs
```html
<input type="text" class="ds-input" placeholder="Text">
<textarea class="ds-textarea" placeholder="Message"></textarea>
<select class="ds-select">...</select>
```

### Form Controls
```html
<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox">
  <span>Label</span>
</label>

<label class="ds-switch-wrapper">
  <input type="checkbox" class="ds-switch">
  <span>Toggle</span>
</label>
```

### Cards
```html
<div class="ds-card">
  <h3>Title</h3>
  <p>Content</p>
</div>
```

### Badges
```html
<span class="ds-badge ds-badge-primary">New</span>
<span class="ds-badge ds-badge-success">Active</span>
<span class="ds-badge ds-badge-warning">Beta</span>
<span class="ds-badge ds-badge-error">Error</span>
```

### Layout
```html
<!-- Container -->
<div class="ds-container">Content</div>

<!-- Grid -->
<div class="ds-grid ds-grid-cols-3 ds-gap-4">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>

<!-- Flex -->
<div class="ds-flex ds-justify-between ds-items-center">
  <div>Left</div>
  <div>Right</div>
</div>
```

---

## 🎨 Customization

### Override Colors
```css
/* custom.css */
:root {
  --primary: 280 100% 70%;  /* Purple */
  --accent: 180 80% 50%;    /* Cyan */
}

.dark {
  --primary: 280 100% 75%;  /* Lighter for dark mode */
}
```

Load after Rukn:
```html
<link rel="stylesheet" href="styles/design-system-variables.css">
<link rel="stylesheet" href="styles/design-system.css">
<link rel="stylesheet" href="custom.css">
```

### Available Tokens
- `--primary` - Brand color
- `--accent` - Accent color
- `--background` - Page background
- `--foreground` - Text color
- `--border` - Border color
- `--r-radius-lg` - Border radius
- `--r-font-heading` - Heading font
- `--r-font-body` - Body font

[See all 150+ tokens →](./foundation.html)

---

## 🔧 Framework Integration

### React
```javascript
import './styles/design-system-variables.css';
import './styles/design-system.css';
```

### Vue
```vue
<style>
@import './styles/design-system-variables.css';
@import './styles/design-system.css';
</style>
```

### Next.js (App Router)
```javascript
// app/layout.js
import '../styles/design-system-variables.css';
import '../styles/design-system.css';

export default function RootLayout({ children }) {
  return <html className="dark"><body>{children}</body></html>;
}
```

### Angular
```json
// angular.json
{
  "styles": [
    "src/styles/design-system-variables.css",
    "src/styles/design-system.css"
  ]
}
```

### Vite
```javascript
// main.js
import './styles/design-system-variables.css';
import './styles/design-system.css';
```

---

## 📱 Responsive

All components are mobile-first and responsive.

**Breakpoints:**
- Mobile: Default (< 768px)
- Tablet: `ds-md-*` (≥ 768px)
- Desktop: `ds-lg-*` (≥ 1024px)

**Example:**
```html
<!-- 1 col mobile, 2 col tablet, 3 col desktop -->
<div class="ds-grid ds-grid-cols-1 ds-md-grid-cols-2 ds-lg-grid-cols-3">
  <div>Item</div>
</div>
```

---

## ✅ Checklist

Installation:
- [ ] Downloaded Rukn
- [ ] Copied `styles/` folder
- [ ] Linked CSS in HTML
- [ ] Tested in browser

Theme:
- [ ] Confirmed dark theme works
- [ ] Tested light theme
- [ ] Added theme toggle (optional)

Components:
- [ ] Used buttons
- [ ] Used form inputs
- [ ] Used cards
- [ ] Checked responsive behavior

Customization (optional):
- [ ] Overrode brand colors
- [ ] Customized fonts
- [ ] Tested custom theme

---

## 📚 Resources

**Quick Start:**
- [GET STARTED](./GET_STARTED.md) - Simplest guide (3 steps)
- [Minimal Example](./minimal-example.html) - Bare minimum code
- [Starter Template](./starter-template.html) - Full-featured starter

**Detailed Guides:**
- [Integration Guide](./INTEGRATION_GUIDE.md) - Complete integration
- [Theme Guide](./THEME_GUIDE.md) - Dark/light themes
- [Files to Copy](./FILES_TO_COPY.md) - What you need

**Reference:**
- [Components](./components.html) - All components live
- [Design Tokens](./foundation.html) - All variables
- [README](./README.md) - Full documentation

---

## 🆘 Troubleshooting

**Styles not working?**
- ✅ Check file paths
- ✅ Load variables CSS before component CSS
- ✅ Clear browser cache

**Colors wrong?**
- ✅ Use HSL format: `--primary: 352 95% 58%;`
- ✅ Don't use `hsl()` wrapper or hex

**Theme toggle not working?**
- ✅ Check `dark` class on `<html>`
- ✅ Inspect element in DevTools

---

## 💡 Pro Tips

1. **Start with starter template** - Copy [starter-template.html](./starter-template.html)
2. **Dark is default** - Optimized for glass morphism
3. **Use design tokens** - Reference `--r-space-4` instead of hardcoding
4. **Mobile first** - Design for mobile, enhance for desktop
5. **Customize early** - Override colors at project start

---

## 📊 Quick Stats

| Feature | Status |
|---------|--------|
| CSS Files | 2 (60KB total) |
| Components | 50+ |
| Design Tokens | 150+ |
| Dependencies | 0 |
| Build Tools | None |
| Frameworks | All |
| Browser Support | 95%+ |
| Bundle Size | ~30KB gzipped |

---

<div align="center>

**Print this page for quick reference!** 📄

[GitHub](https://github.com/mfaizanatiq/RuknDesignSystem) • [Documentation](./README.md) • [Live Demo](https://rukn.design)

</div>

