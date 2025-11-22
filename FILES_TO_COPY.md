# 📦 Files to Copy - Rukn Design System

Quick reference showing exactly what files you need.

---

## 🎯 Minimum Required (Just CSS)

Copy these **2 files** to your project:

```
your-project/
  └── styles/
      ├── design-system-variables.css   ← Design tokens (Required)
      └── design-system.css             ← Component styles (Required)
```

**That's it!** This gives you:
- ✅ All design tokens
- ✅ All CSS components (buttons, cards, forms, etc.)
- ✅ Dark & light themes
- ✅ Responsive layout system
- ✅ Glass morphism effects

---

## 🧩 Optional: Web Components

If you want navigation and advanced components, also copy:

```
your-project/
  ├── styles/
  │   ├── design-system-variables.css
  │   └── design-system.css
  └── components/
      ├── rukn-navbar.js    ← Navigation bar
      ├── rukn-sidebar.js   ← Sidebar navigation
      ├── rukn-footer.js    ← Footer
      └── rukn-ui.js        ← UI components (buttons, alerts, etc.)
```

**Benefits:**
- ✅ Pre-built navigation components
- ✅ Works in any framework (React, Vue, Angular, etc.)
- ✅ Only ~3KB gzipped
- ✅ Zero dependencies

---

## 📁 Full Package (Everything)

For a complete local copy:

```
your-project/
  ├── styles/
  │   ├── design-system-variables.css
  │   └── design-system.css
  ├── components/
  │   ├── rukn-navbar.js
  │   ├── rukn-sidebar.js
  │   ├── rukn-footer.js
  │   └── rukn-ui.js
  ├── scripts/
  │   ├── component-helpers.js
  │   └── modal-drawer-helpers.js
  └── docs/
      └── (optional documentation)
```

---

## 💾 Download Methods

### Method 1: Git Clone
```bash
git clone https://github.com/mfaizanatiq/RuknDesignSystem.git
cd RuknDesignSystem
# Copy the files you need to your project
```

### Method 2: Download ZIP
1. Go to [GitHub](https://github.com/mfaizanatiq/RuknDesignSystem)
2. Click "Code" → "Download ZIP"
3. Extract and copy the files you need

### Method 3: Individual Files
Download individual files directly from GitHub:
- [design-system-variables.css](https://raw.githubusercontent.com/mfaizanatiq/RuknDesignSystem/master/styles/design-system-variables.css)
- [design-system.css](https://raw.githubusercontent.com/mfaizanatiq/RuknDesignSystem/master/styles/design-system.css)

---

## 🔗 How to Link

### Basic (CSS Only)
```html
<head>
  <link rel="stylesheet" href="styles/design-system-variables.css">
  <link rel="stylesheet" href="styles/design-system.css">
</head>
```

### With Web Components
```html
<head>
  <!-- CSS (Required) -->
  <link rel="stylesheet" href="styles/design-system-variables.css">
  <link rel="stylesheet" href="styles/design-system.css">
  
  <!-- Web Components (Optional) -->
  <script src="components/rukn-navbar.js" defer></script>
  <script src="components/rukn-footer.js" defer></script>
  <script src="components/rukn-ui.js" type="module"></script>
</head>
```

---

## 📊 File Sizes

| File | Size | Purpose |
|------|------|---------|
| `design-system-variables.css` | ~15KB | Design tokens |
| `design-system.css` | ~45KB | Components |
| `rukn-navbar.js` | ~3KB | Navigation |
| `rukn-footer.js` | ~1KB | Footer |
| `rukn-sidebar.js` | ~4KB | Sidebar |
| `rukn-ui.js` | ~8KB | UI components |
| **Total (CSS only)** | **~60KB** | **~25KB gzipped** |
| **Total (with JS)** | **~76KB** | **~30KB gzipped** |

---

## ✅ Quick Checklist

- [ ] Downloaded Rukn from GitHub
- [ ] Copied `styles/design-system-variables.css`
- [ ] Copied `styles/design-system.css`
- [ ] Linked CSS in HTML `<head>`
- [ ] Opened page in browser
- [ ] Saw beautiful dark theme! 🎉

**Optional:**
- [ ] Copied `components/` folder for Web Components
- [ ] Linked component scripts in HTML
- [ ] Used `<rukn-navbar>` and other components

---

## 🆘 Need Help?

- 📖 [GET STARTED Guide](./GET_STARTED.md) - Step-by-step walkthrough
- 📋 [Starter Template](./starter-template.html) - Ready-to-use HTML
- 🐛 [Report Issues](https://github.com/mfaizanatiq/RuknDesignSystem/issues)

---

<div align="center">

**Simple, isn't it?** 🏛️

Just 2 CSS files to get started!

[View Examples](./components.html) • [Read Docs](./README.md)

</div>

