# 📄 Rukn Design System - Quick Reference Card

**Print this page for instant reference!**

---

## ⚡ 2-Minute Setup

```bash
# 1. Download
git clone https://github.com/mfaizanatiq/RuknDesignSystem.git

# 2. Copy these 2 files:
#    ✅ styles/design-system-variables.css
#    ✅ styles/design-system.css
```

```html
<!-- 3. Link in HTML -->
<html lang="en" class="dark">
<head>
  <link rel="stylesheet" href="styles/design-system-variables.css">
  <link rel="stylesheet" href="styles/design-system.css">
</head>
```

**Done!** 🎉

---

## 🌓 Theme Toggle

```html
<!-- Dark (default) -->
<html class="dark">

<!-- Light -->
<html>
```

```javascript
// Toggle with JS
document.documentElement.classList.toggle('dark');

// Save preference
localStorage.setItem('theme', 
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'
);
```

---

## 🧩 Common Components

```html
<!-- Buttons -->
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-outline">Outline</button>

<!-- Inputs -->
<input type="text" class="ds-input" placeholder="Text">
<textarea class="ds-textarea"></textarea>
<select class="ds-select">...</select>

<!-- Card -->
<div class="ds-card">
  <h3>Title</h3>
  <p>Content</p>
</div>

<!-- Badge -->
<span class="ds-badge ds-badge-primary">New</span>

<!-- Checkbox -->
<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox">
  <span>Label</span>
</label>

<!-- Switch -->
<label class="ds-switch-wrapper">
  <input type="checkbox" class="ds-switch">
  <span>Toggle</span>
</label>

<!-- Grid -->
<div class="ds-grid ds-grid-cols-3 ds-gap-4">
  <div>1</div><div>2</div><div>3</div>
</div>
```

---

## 🎨 Customize Colors

```css
/* custom.css */
:root {
  --primary: 280 100% 70%;  /* HSL format */
  --accent: 180 80% 50%;
}

.dark {
  --primary: 280 100% 75%;  /* Lighter for dark */
}
```

---

## 🔧 Framework Integration

```javascript
// React/Next.js/Vite
import './styles/design-system-variables.css';
import './styles/design-system.css';

// Vue
<style>
@import './styles/design-system-variables.css';
@import './styles/design-system.css';
</style>

// Angular (angular.json)
"styles": [
  "src/styles/design-system-variables.css",
  "src/styles/design-system.css"
]
```

---

## 📱 Responsive

```html
<!-- 1 col mobile, 2 tablet, 3 desktop -->
<div class="ds-grid ds-grid-cols-1 ds-md-grid-cols-2 ds-lg-grid-cols-3">
  <div>Item</div>
</div>
```

**Breakpoints:**
- Mobile: < 768px
- Tablet: ≥ 768px (`.ds-md-*`)
- Desktop: ≥ 1024px (`.ds-lg-*`)

---

## 🎯 Key Design Tokens

```css
/* Colors */
--primary          /* Brand color */
--accent           /* Accent color */
--background       /* Page bg */
--foreground       /* Text color */
--border           /* Borders */

/* Spacing */
--r-space-1  /* 4px */
--r-space-4  /* 16px */
--r-space-8  /* 32px */

/* Radius */
--r-radius-sm   /* 4px */
--r-radius-lg   /* 12px */
--r-radius-full /* Circle */

/* Fonts */
--r-font-heading
--r-font-body
```

---

## 📚 Resources

- **[GET_STARTED.md](./GET_STARTED.md)** - 3-step guide
- **[starter-template.html](./starter-template.html)** - Full template
- **[minimal-example.html](./minimal-example.html)** - Minimal example
- **[INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)** - Complete guide
- **[THEME_GUIDE.md](./THEME_GUIDE.md)** - Theme system
- **[components.html](./components.html)** - All components
- **[foundation.html](./foundation.html)** - Design tokens

---

## 🆘 Troubleshooting

**Styles not working?**
→ Check file paths, load variables CSS first

**Colors wrong?**
→ Use HSL format: `--primary: 352 95% 58%;`

**Theme not toggling?**
→ Check `dark` class on `<html>` element

---

## ✅ Checklist

- [ ] Copied 2 CSS files
- [ ] Linked in HTML `<head>`
- [ ] Tested dark theme
- [ ] Tested light theme
- [ ] Used components
- [ ] Customized colors (optional)
- [ ] Built something beautiful! 🚀

---

<div align="center">

**That's all you need! 🏛️**

[GitHub](https://github.com/mfaizanatiq/RuknDesignSystem) • [Docs](./README.md) • [Demo](https://rukn.design)

</div>

