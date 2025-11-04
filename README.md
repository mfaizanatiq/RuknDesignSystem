# 🏛️ Rukn Design System

> **Rukn** (Arabic: رُكن, meaning "pillar" or "foundation") — A modern, framework-agnostic CSS design system built with glass morphism and iOS motion principles.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
[![Version](https://img.shields.io/badge/version-1.3.1-blue.svg)](https://github.com/yourusername/rukn)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## ✨ Features

- 🎨 **150+ Design Tokens** — Comprehensive W3C-compliant CSS variables (`--r-` prefix)
- 🪟 **Glass Morphism** — Beautiful frosted glass effects with animated light refraction
- 📱 **iOS Motion Design** — Apple HIG-inspired easing curves and spring animations
- 🎯 **Framework Agnostic** — Pure CSS, works with React, Vue, Angular, or vanilla JS
- 🌓 **Modern UI Components** — Buttons, inputs, cards, modals, drawers, and more
- 📐 **Complete Layout System** — Responsive grids, flexbox utilities, and containers
- ♿ **Accessible** — WCAG-compliant with `prefers-reduced-motion` support
- 🚀 **Zero Dependencies** — Pure CSS, no build step required
- 📦 **NPM Ready** — Easy integration via `@ruknds/core`

## 🚀 Quick Start

### Option 1: CDN (Fastest)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Rukn Design System -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ruknds/core/design-system-variables.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ruknds/core/design-system.css">
</head>
<body>
  <button class="ds-btn ds-btn-primary">Hello Rukn!</button>
</body>
</html>
```

### Option 2: NPM

```bash
npm install @ruknds/core
```

```javascript
// Import in your project
import '@ruknds/core/design-system-variables.css';
import '@ruknds/core/design-system.css';
```

### Option 3: Download

1. Download `design-system-variables.css` and `design-system.css`
2. Link them in your HTML:

```html
<link rel="stylesheet" href="path/to/design-system-variables.css">
<link rel="stylesheet" href="path/to/design-system.css">
```

## 📚 Documentation

- **[Live Demo](https://YOUR-NETLIFY-URL.netlify.app/)** — Interactive showcase
- **[Components](https://YOUR-NETLIFY-URL.netlify.app/components.html)** — Full component library
- **[Quick Start Guide](./QUICK_START.md)** — 60-second setup
- **[Design Tokens](./docs/DESIGN_TOKENS.md)** — All CSS variables
- **[Integration Guide](./docs/INTEGRATION.md)** — Framework integration
- **[Additional Docs](./docs/)** — All documentation

## 🎨 Component Showcase

```html
<!-- Glass Morphism Button -->
<button class="ds-btn ds-btn-primary">Primary Action</button>

<!-- Card with Glass Effect -->
<div class="ds-card">
  <h3 class="ds-card-title">Beautiful Card</h3>
  <p class="ds-card-content">With glass morphism effects</p>
</div>

<!-- Modal with Elevation System -->
<div class="ds-modal" id="myModal">
  <div class="ds-modal-content">
    <h2>Modal Title</h2>
    <div class="ds-modal-card">
      <p>Nested card with elevation</p>
    </div>
  </div>
</div>

<!-- Icon Placeholder with Refraction -->
<div class="ds-icon-placeholder ds-icon-placeholder-primary">
  <svg><!-- Your icon --></svg>
</div>
```

## 🎯 Design Tokens

Rukn uses W3C-compliant design tokens with the `--r-` prefix:

```css
/* Typography */
--r-font-heading: 'Space Grotesk', sans-serif;
--r-font-body: 'Space Grotesk', sans-serif;

/* Colors */
--r-color-primary: 210 100% 50%;
--r-color-accent: 280 100% 60%;

/* Spacing */
--r-space-1: 0.25rem;  /* 4px */
--r-space-2: 0.5rem;   /* 8px */
--r-space-4: 1rem;     /* 16px */

/* iOS Motion */
--r-ease-ios-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--r-spring-smooth: cubic-bezier(0.5, 1.25, 0.75, 1);
```

## 🌐 Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 88+

## 📦 NPM Package

```json
{
  "name": "@ruknds/core",
  "version": "1.3.1",
  "description": "Modern glass morphism design system with iOS motion",
  "main": "design-system.css",
  "types": "types.d.ts"
}
```

## 🚀 Deployment

This project is configured for automatic deployment to Netlify:

### Deploy to Netlify (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Deploy to Netlify"
git push origin main
```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Import your GitHub repository
   - Netlify auto-detects configuration
   - Deploy! 🎉

### Manual Hosting

Simply upload these files to any static hosting:
- `index.html`
- `components.html`
- `design-system.css`
- `design-system-variables.css`
- `modal-drawer-helpers.js`

## 🗺️ Project Structure

```
FaizanDS/
├── index.html                      # 🏠 Landing page
├── components.html                 # 🧩 Components showcase
├── design-system.css               # 🎨 Main stylesheet
├── design-system-variables.css     # 🎯 Design tokens (150+)
├── modal-drawer-helpers.js         # ⚙️ Helper utilities
├── package.json                    # 📦 NPM package config
├── types.d.ts                      # 📘 TypeScript definitions
├── LICENSE                         # ⚖️ MIT License
├── README.md                       # 📖 This file
├── QUICK_START.md                  # ⚡ 60-second setup
├── _redirects                      # 🔀 Netlify redirects
├── netlify.toml                    # ⚙️ Netlify config
├── robots.txt                      # 🤖 SEO
├── sitemap.xml                     # 🗺️ SEO
├── .gitignore                      # 🚫 Git ignore
├── .npmignore                      # 📦 NPM ignore
└── docs/                           # 📚 Documentation
    ├── DESIGN_TOKENS.md            # Token reference
    ├── INTEGRATION.md              # Integration guide
    ├── DESIGN_SYSTEM_DOCS.md       # Design system docs
    └── ...                         # More guides
```

## 🎨 Why Rukn?

### Open Source First
- 🌍 **Community-Driven** — Built for and by developers
- 🆓 **Forever Free** — MIT licensed, use anywhere
- 🤝 **Collaborative** — We welcome contributions
- 📖 **Transparent** — All decisions documented publicly

### Modern Design Principles
- ✨ **Glass Morphism** — Elegant frosted glass effects
- 🎬 **iOS Motion** — Smooth, natural animations
- 📱 **Mobile-First** — Responsive by default
- ♿ **Accessible** — WCAG 2.1 AA compliant

### Developer Experience
- ⚡ **Zero Config** — Just link the CSS
- 📦 **Tiny Size** — ~70KB gzipped
- 🔧 **Customizable** — Override any token
- 📚 **Well Documented** — Clear examples

## 🛣️ Roadmap

### ✅ Completed (v1.3.1)
- Glass morphism design system
- iOS motion principles
- 150+ design tokens
- Responsive layout system
- Icon placeholders with refraction
- Modal elevation system
- Full navbar variations

### 🚧 In Progress (v1.4.0)
- Additional form components
- Data visualization components
- Advanced animation utilities
- Theme customization tools

### 📋 Planned (v2.0.0)
- Dark mode support
- Additional color themes
- Component variants
- Advanced layout patterns
- Accessibility enhancements

### 💡 Community Requests
- More icon sets
- Custom color palette generator
- Figma design kit
- Storybook integration

## 📝 Changelog

### v1.3.1 (2024-11-05)
- ✨ Added glass refraction icon placeholders
- 🎨 Implemented modal elevation system
- 🐛 Fixed cursor z-index above modals
- 📱 Improved mobile navigation

### v1.3.0 (2024-11-04)
- ✨ iOS motion design system
- 🎨 Modern floating navbar
- 📐 Complete layout system
- ♿ Reduced motion support

### v1.2.0 (2024-11-03)
- Initial public release
- Glass morphism components
- W3C-compliant tokens

## 👨‍💻 Author

**Faizan Atiq**
- 💼 [LinkedIn](https://www.linkedin.com/in/mfaizanatiq/)
- 🐙 [GitHub](https://github.com/yourusername)
- 📧 [Contact](mailto:your.email@example.com)

## 🤝 Contributing

We welcome contributions! This is a community-driven project.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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

[Live Demo](https://YOUR-URL.netlify.app) • [Documentation](./QUICK_START.md) • [NPM](https://www.npmjs.com/package/@ruknds/core)

</div>
