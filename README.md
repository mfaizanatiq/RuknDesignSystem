# 🏛️ Rukn Design System

> **Rukn** (Arabic: رُكن, Urdu: رکن, meaning "pillar" or "foundation") — A modern, framework-agnostic CSS design system built with glass morphism, Web Components, and smooth motion principles.

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/mfaizanatiq/RuknDesignSystem)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## ✨ Features

- ⚡ **2-Minute Setup** — Just copy 2 CSS files, no build tools or dependencies needed
- 🌓 **Beautiful Dark Theme** — Optimized glass morphism effects (default theme)
- 🎨 **150+ Design Tokens** — Comprehensive W3C-compliant CSS variables (`--r-` prefix)
- 🪟 **Glass Morphism** — Stunning frosted glass effects with animated light refraction
- 📱 **Rukn Motion Design** — Smooth iOS-inspired easing curves and spring animations
- 🧩 **Web Components** — Optional vanilla JS components, zero dependencies
- 🎯 **Framework Agnostic** — Works with React, Vue, Angular, Svelte, or plain HTML
- 🌓 **Light Theme Available** — Toggle with a single class change
- 📐 **Complete Layout System** — Responsive grids, flexbox utilities, and containers
- ♿ **Accessible** — WCAG 2.1 AA compliant with `prefers-reduced-motion` support
- 🚀 **Lightweight** — ~30KB gzipped (CSS + optional JS)
- 🌍 **Multi-language Support** — Built-in Arabic and Urdu support with RTL layout
- 🎨 **Easy to Customize** — Override any color or token with CSS variables

## 🚀 Quick Start

### ⚡ Get Started in 2 Minutes

**Step 1:** Download the design system
```bash
git clone https://github.com/mfaizanatiq/RuknDesignSystem.git
```

**Step 2:** Copy the `styles/` folder to your project

**Step 3:** Use the [starter template](./starter-template.html) or add to your HTML:

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
  
  <!-- Optional: Phosphor Icons -->
  <script src="https://unpkg.com/@phosphor-icons/web@2.0.3"></script>
</head>
<body>
  <!-- Start building! -->
  <div class="ds-container" style="padding: 2rem;">
    <h1>Hello Rukn! 🏛️</h1>
    <button class="btn-primary">Get Started</button>
    
    <div class="ds-card" style="margin-top: 2rem; padding: 1.5rem;">
      <h3>Beautiful Glass Card</h3>
      <p>With stunning glass morphism effects.</p>
    </div>
  </div>
</body>
</html>
```

**That's it!** 🎉

### 📖 Complete Integration Guide

- **[📘 Integration Guide](./INTEGRATION_GUIDE.md)** - Complete setup guide for all frameworks
- **[🌓 Theme Guide](./THEME_GUIDE.md)** - How to use dark/light themes
- **[🚀 Quick Start](./QUICK_START.md)** - 60-second setup
- **[📝 Starter Template](./starter-template.html)** - Copy-paste ready template

### 🌓 Theme System

**Dark theme is default** (optimized for glass morphism)

To enable light theme, remove the `dark` class:
```html
<!-- Dark theme (default) -->
<html lang="en" class="dark">

<!-- Light theme -->
<html lang="en">
```

**Toggle with JavaScript:**
```javascript
document.documentElement.classList.toggle('dark');
```

See the [Theme Guide](./THEME_GUIDE.md) for advanced theming options.

## 📚 Documentation

### 🚀 Getting Started (Pick One)
- **[⚡ GET STARTED](./GET_STARTED.md)** — **Simplest guide** - 3 steps, you're done!
- **[📄 Quick Reference](./QUICK_REFERENCE.md)** — **Print this!** One-page cheat sheet
- **[📦 Files to Copy](./FILES_TO_COPY.md)** — What files you need (just 2!)
- **[📘 Integration Guide](./INTEGRATION_GUIDE.md)** — Complete guide for all frameworks
- **[🚀 Quick Start](./QUICK_START.md)** — 60-second overview

### 📝 Templates & Examples
- **[📄 Minimal Example](./minimal-example.html)** — Absolute minimum (2 CSS files)
- **[📋 Starter Template](./starter-template.html)** — Full-featured starter
- **[🧩 Components Showcase](./components.html)** — Live examples of all components

### 🎨 Customization
- **[🌓 Theme Guide](./THEME_GUIDE.md)** — Dark/Light themes & customization
- **[🎨 Design Tokens](./foundation.html)** — All CSS variables with live color picker

### 🔧 Advanced
- **[🌐 Web Components](./components/README.md)** — Optional vanilla JS components
- **[📁 All Documentation](./docs/)** — Complete docs directory

## 🎨 Component Showcase

Rukn provides **ready-to-use CSS classes** - no JavaScript required!

### Buttons & Forms

```html
<!-- Buttons with Glass Morphism -->
<button class="btn-primary">Primary Action</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-outline">Outline</button>

<!-- Form Inputs -->
<input type="text" class="ds-input" placeholder="Enter text">
<textarea class="ds-textarea" placeholder="Enter message"></textarea>

<!-- Form Controls -->
<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox">
  <span>Accept terms</span>
</label>

<label class="ds-switch-wrapper">
  <input type="checkbox" class="ds-switch">
  <span>Enable feature</span>
</label>
```

### Cards & Badges

```html
<!-- Card with Glass Effect -->
<div class="ds-card">
  <h3>Beautiful Card</h3>
  <p>With stunning glass morphism effects</p>
</div>

<!-- Badges -->
<span class="ds-badge ds-badge-primary">New</span>
<span class="ds-badge ds-badge-success">Active</span>
```

**[See all 50+ components →](./components.html)**

### Web Components (Vanilla JavaScript)

```html
<!-- Include Web Components -->
<script src="components/rukn-navbar.js" defer></script>
<script src="components/rukn-ui.js" type="module"></script>

<!-- Use Custom Elements -->
<rukn-navbar current="home"></rukn-navbar>

<rukn-button variant="primary">Click Me</rukn-button>
<rukn-card>Content here</rukn-card>
<rukn-alert variant="info">This is an alert</rukn-alert>
```

## 🎯 Design Tokens

Rukn uses W3C-compliant design tokens with the `--r-` prefix:

```css
/* Typography */
--r-font-heading: 'Space Grotesk', sans-serif;
--r-font-body: 'Space Grotesk', sans-serif;
--r-font-arabic: 'IBM Plex Sans Arabic', sans-serif;
--r-font-urdu: 'Noto Nastaliq Urdu', serif;

/* Colors */
--primary: 210 100% 50%;
--accent: 280 100% 60%;
--background: 0 0% 3%;
--foreground: 0 0% 98%;

/* Spacing */
--r-space-1: 0.25rem;  /* 4px */
--r-space-2: 0.5rem;   /* 8px */
--r-space-4: 1rem;     /* 16px */

/* Rukn Motion */
--r-ease-ios-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--r-spring-smooth: cubic-bezier(0.5, 1.25, 0.75, 1);
```

**Full token reference:** See [foundation.html](./foundation.html) or [docs/DESIGN_TOKENS.md](./docs/DESIGN_TOKENS.md)

## 🌐 Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 88+

## 🗺️ Project Structure

```
RuknDS/
├── index.html                      # 🏠 Landing page
├── foundation.html                 # 🎨 Design tokens & layouts
├── components.html                 # 🧩 UI components showcase
├── example.html                    # 📋 Component examples
├── styles/                         # 🎨 Stylesheets
│   ├── design-system-variables.css # Design tokens (150+)
│   └── design-system.css           # Component styles
├── components/                     # 🧩 Web Components
│   ├── rukn-navbar.js              # Navigation component
│   ├── rukn-sidebar.js             # Sidebar component
│   ├── rukn-footer.js              # Footer component
│   ├── rukn-ui.js                  # All UI components
│   └── README.md                   # Components guide
├── scripts/                         # ⚙️ JavaScript helpers
│   ├── component-helpers.js        # Component utilities
│   └── modal-drawer-helpers.js     # Modal/drawer helpers
├── docs/                           # 📚 Documentation
│   ├── DESIGN_TOKENS.md            # Token reference
│   ├── INTEGRATION.md              # Integration guide
│   ├── RUKN_DESIGN_LANGUAGE.md     # Design guidelines
│   └── ...                         # More guides
├── package.json                    # 📦 Package config
├── types.d.ts                      # 📘 TypeScript definitions
├── LICENSE                         # ⚖️ MIT License
├── README.md                       # 📖 This file
├── QUICK_START.md                  # ⚡ Quick setup guide
├── CHANGELOG.md                    # 📝 Version history
└── netlify.toml                    # ⚙️ Netlify config
```

## 🎨 Why Rukn?

### Open Source First
- 🌍 **Community-Driven** — Built for and by developers
- 🆓 **Forever Free** — MIT licensed, use anywhere
- 🤝 **Collaborative** — We welcome contributions
- 📖 **Transparent** — All decisions documented publicly

### Modern Design Principles
- ✨ **Glass Morphism** — Elegant frosted glass effects
- 🎬 **Rukn Motion** — Smooth, natural animations
- 📱 **Mobile-First** — Responsive by default
- ♿ **Accessible** — WCAG 2.1 AA compliant
- 🌍 **Multi-language** — Arabic and Urdu support with RTL

### Developer Experience
- ⚡ **Zero Config** — Just link the CSS
- 📦 **Lightweight** — ~70KB gzipped (CSS + JS)
- 🔧 **Customizable** — Override any token
- 📚 **Well Documented** — Clear examples and guides
- 🧩 **Web Components** — Native browser standard, no framework needed

## 🛣️ Roadmap

### ✅ Completed (v2.0.0)
- Glass morphism design system
- Rukn motion principles
- 150+ design tokens
- Responsive layout system
- Web Components (navbar, sidebar, footer, UI components)
- Multi-language support (Arabic, Urdu, RTL)
- Icon placeholders with refraction
- Modal elevation system
- Full navbar variations

### 🚧 In Progress
- Additional form components
- Data visualization components
- Advanced animation utilities
- NPM package publishing

### 📋 Planned
- Additional color themes
- More component variants
- Advanced layout patterns
- Accessibility enhancements
- Figma design kit

### 💡 Community Requests
- More icon sets
- Custom color palette generator
- Figma design kit
- Storybook integration

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

### Recent Highlights

**v2.0.0 (2025-11-05)**
- ✨ Web Components revolution (12 components)
- 🌍 Multi-language support (Arabic, Urdu, RTL)
- 🎨 Primary color picker
- ♿ Improved accessibility
- 🐛 Fixed z-index and layout issues

**v1.3.1 (2024-11-05)**
- ✨ Added glass refraction icon placeholders
- 🎨 Implemented modal elevation system
- 🐛 Fixed cursor z-index above modals
- 📱 Improved mobile navigation

## 👨‍💻 Author

**M Faizan Atiq**
- 💼 [LinkedIn](https://www.linkedin.com/in/mfaizanatiq/)
- 🐙 [GitHub](https://github.com/mfaizanatiq)
- 📧 Contact: mfaizanatiq@gmail.com

## 🤝 Contributing

We welcome contributions! This is a community-driven project.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Repository:** https://github.com/mfaizanatiq/RuknDesignSystem

## 📄 License

MIT License — see [LICENSE](./LICENSE) for details.

**TL;DR:** Use it anywhere, modify it freely, just keep the license notice.

## 🙏 Acknowledgments

- Inspired by Apple's Human Interface Guidelines
- Glass morphism design trends
- The amazing open source community

---

<div align="center">

**Built with ❤️ for the open source community**

[GitHub Repository](https://github.com/mfaizanatiq/RuknDesignSystem) • [Documentation](./QUICK_START.md) • [Report Issues](https://github.com/mfaizanatiq/RuknDesignSystem/issues)

</div>
