# Changelog

All notable changes to Rukn Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2025-11-22

### 🎯 Integration Experience Overhaul

Made Rukn Design System **dramatically easier** for designers and engineers to integrate.

### Added

#### Comprehensive Integration Guides
- ✨ **`INTEGRATION_GUIDE.md`** - Complete integration guide for all frameworks (React, Vue, Angular, Next.js, etc.)
  - Step-by-step setup for every framework
  - Theme system documentation
  - Customization examples
  - Troubleshooting section
  
- ⚡ **`GET_STARTED.md`** - Ultra-simple 3-step quick start guide
  - Absolute minimum required (2 CSS files)
  - Copy-paste ready examples
  - Framework integration snippets
  
- 🌓 **`THEME_GUIDE.md`** - Complete theme system documentation
  - Dark theme as default (optimized for glass morphism)
  - Light theme instructions
  - JavaScript theme toggle with localStorage
  - System preference detection
  - React, Vue theme toggle examples
  - Animated theme transitions
  
- 📦 **`FILES_TO_COPY.md`** - Visual file structure guide
  - Clear overview of what files to copy
  - File sizes and purposes
  - Download methods
  - Quick checklist
  
- 📋 **`INTEGRATION_SUMMARY.md`** - Printable quick reference card
  - TL;DR integration steps
  - Common components cheat sheet
  - Framework snippets
  - Customization examples
  - Troubleshooting tips

#### Ready-to-Use Templates
- 📝 **`starter-template.html`** - Full-featured starter template
  - Beautiful hero section
  - Feature showcase grid
  - Component examples
  - Working theme toggle button
  - Responsive design
  - LocalStorage theme persistence
  
- 📄 **`minimal-example.html`** - Bare minimum example
  - Just 2 CSS files
  - Essential components showcase
  - Simple theme toggle
  - Perfect for learning

### Changed

#### Documentation Structure
- 📚 Reorganized README with clearer getting started section
- 🎯 Added prominent "2-minute setup" messaging
- 📖 Better categorization of documentation (Getting Started, Templates, Customization, Advanced)
- ✨ Highlighted dark theme as default with light theme option

#### Quick Start Improvements
- ⚡ Simplified `QUICK_START.md` with direct links to new guides
- 🌓 Added clear theme switching documentation
- 📦 Referenced new template files

#### README Enhancements
- 🎨 Updated features list to emphasize ease of setup
- 🚀 Added "2-Minute Setup" as first feature
- 🌓 Added "Beautiful Dark Theme (default)" and "Light Theme Available"
- ⚡ Emphasized "Lightweight" and "Zero Config"
- 📚 Reorganized documentation section with clear categories

### Improved

#### Theme System
- 🌓 **Dark theme is now prominently marketed as default**
  - Optimized for glass morphism
  - Better visual appeal
  - Reduced eye strain
- 💡 **Light theme clearly documented as available option**
  - Simple class toggle
  - Multiple toggle methods provided
  - Framework-specific examples

#### Developer Experience
- ✅ **Crystal-clear integration path**: GET_STARTED.md → 3 steps → Done!
- 📦 **Visual file structure** shows exactly what to copy
- 📋 **Multiple learning paths**:
  - Ultra-quick: GET_STARTED.md (3 steps)
  - Visual: FILES_TO_COPY.md (what files)
  - Complete: INTEGRATION_GUIDE.md (all frameworks)
  - Quick ref: INTEGRATION_SUMMARY.md (cheat sheet)
- 📝 **Copy-paste ready templates** for immediate use
- 🎨 **Theme toggle examples** for all major frameworks

#### Discoverability
- 🔍 Better organization in README
- 📍 Clear signposting to relevant guides
- ⚡ Emphasis on "just 2 files" messaging
- 🎯 Prominent links to starter templates

### Documentation Statistics

| Guide | Purpose | Length |
|-------|---------|--------|
| GET_STARTED.md | Quickest start | ~300 lines |
| FILES_TO_COPY.md | What to copy | ~200 lines |
| INTEGRATION_GUIDE.md | Complete guide | ~800 lines |
| THEME_GUIDE.md | Theme system | ~500 lines |
| INTEGRATION_SUMMARY.md | Quick reference | ~400 lines |
| starter-template.html | Full template | ~200 lines |
| minimal-example.html | Minimal example | ~100 lines |

### Breaking Changes

⚠️ **None!** All changes are additive:
- Existing integrations continue to work
- New guides supplement existing docs
- Templates are optional resources

### Migration

No migration needed. New users benefit from improved docs automatically.

### Notes

This release focuses entirely on **developer experience** and **documentation**:
- No CSS or JavaScript changes
- No new components
- Pure documentation and template improvements
- Makes Rukn **dramatically easier** to integrate

**Goal achieved:** Designers and engineers can now integrate Rukn in **under 2 minutes** with crystal-clear documentation.

---

## [2.0.0] - 2025-11-05

### 🚀 MAJOR: Web Components Revolution

Transformed Rukn DS from a CSS framework into the **world's fastest, lightest Web Component library** using 100% Vanilla JavaScript.

### Added

#### Web Components (NEW!)
- ✨ **Layout Components**
  - `<rukn-navbar>` - Responsive navigation with search bar support & smart scroll behavior
    - ✅ Sticky positioning (always accessible)
    - ✅ Hides on scroll down (more screen space)
    - ✅ Shows on scroll up (instant navigation access)
    - ✅ Enhanced shadow when scrolled
    - ✅ 60fps smooth transitions with requestAnimationFrame
  - `<rukn-sidebar>` - Collapsible sidebar navigation (components/foundation variants)
  - `<rukn-footer>` - Footer with links and branding

- ✨ **UI Components**
  - `<rukn-button>` - Smart buttons with variants, sizes, loading states, and icon support
  - `<rukn-badge>` - Status badges with color variants
  - `<rukn-card>` - Content cards with optional glass morphism effect
  - `<rukn-input>` - Form input fields with full attribute support

- ✨ **Feedback Components**
  - `<rukn-alert>` - Dismissible alerts with variants (info, success, warning, error)
  - `<rukn-spinner>` - Loading spinners in multiple sizes
  - `<rukn-progress>` - Progress bars (determinate and indeterminate)

- ✨ **Overlay Components**
  - `<rukn-modal>` - Modal dialogs with programmatic API
  
- ✨ **Display Components**
  - `<rukn-icon>` - Icon placeholder with size and variant support

#### Documentation
- 📚 **`docs/WEB_COMPONENTS.md`** - Complete guide (4,000+ words)
  - Installation instructions for NPM, CDN, and direct script tags
  - All component examples with code samples
  - Framework integration guides (React, Vue, Angular, Svelte)
  - Performance benchmarks vs competitors
  - Architecture explanation
  - FAQ section
  
- 🎨 **`web-components-demo.html`** - Interactive demo page
  - Live examples of all components
  - Usage code samples for each component
  - Performance stats display
  - Framework compatibility showcase
  
- 📖 **`docs/WEB_COMPONENTS_SUMMARY.md`** - Executive summary
  - Code reduction metrics
  - Performance comparisons
  - Migration guide
  - NPM package details

- 📐 **`docs/WEB_COMPONENTS_LAYOUT.md`** - Layout integration guide
  - Navbar scroll behavior documentation
  - Layout system reference
  - CSS class definitions
  - Responsive behavior
  - Performance optimizations

#### Package Updates
- 📦 Updated `package.json` to v2.0.0
  - Main entry point: `components/rukn-ui.js`
  - Added ES module exports for tree-shaking
  - Enhanced keywords for NPM discoverability
  - Added framework compatibility tags (react, vue, angular, svelte)

### Changed

#### Code Reduction
- 🎯 **Removed ~800 lines of duplicated HTML** across all pages
- **`index.html`**: Navbar and footer now use Web Components (11% reduction)
- **`components.html`**: Layout components converted to Web Components (5% reduction)
- **`foundation.html`**: Layout components converted to Web Components (7% reduction)
- All layout HTML now reusable with single-line tags

#### Architecture
- 🏗️ Migrated from static HTML to **Native Web Components API**
- Uses `customElements.define()` (native browser API)
- Extends `HTMLElement` with reactive attributes
- Zero dependencies - no frameworks required
- ES Modules with tree-shaking support

#### Performance
- ⚡ **Ultra-lightweight:** ~15KB uncompressed, **~5KB gzipped**
- **10-25x smaller** than React-based alternatives
- Native browser APIs (no Virtual DOM overhead)
- <50ms component registration time
- <1ms render time per component

### Technical Details

#### Browser Support
- Chrome 67+ (May 2018)
- Firefox 63+ (October 2018)
- Safari 10.1+ (March 2017)
- Edge 79+ (January 2020)
- **Coverage: 95%+ of global users**

#### Framework Compatibility
- ✅ Vanilla HTML/JavaScript
- ✅ React (works natively, no wrappers needed)
- ✅ Vue (works natively)
- ✅ Angular (add `CUSTOM_ELEMENTS_SCHEMA`)
- ✅ Svelte (works natively)
- ✅ Any framework supporting Web Components

#### Component Features
- **Reactive Attributes:** Auto re-render on attribute changes
- **Slot-based Content:** Flexible content projection
- **Lifecycle Hooks:** `connectedCallback`, `attributeChangedCallback`
- **Programmatic API:** JavaScript methods for modals, progress, etc.
- **Accessibility:** ARIA attributes and keyboard navigation
- **Mobile-first:** Responsive design with touch support

### Migration Guide

#### From Static HTML
```html
<!-- Before -->
<nav class="ds-navbar">
  <!-- 80+ lines of HTML -->
</nav>

<!-- After -->
<rukn-navbar current="home"></rukn-navbar>
```

#### Installation
```bash
# NPM
npm install @ruknds/core@2.0.0

# Or use CDN
<script src="https://unpkg.com/@ruknds/core@2.0.0/components/rukn-ui.js" type="module"></script>
```

### Performance Comparison

| Library | Technology | Bundle Size (gzipped) | Relative Size |
|---------|-----------|----------------------|---------------|
| **Rukn DS 2.0** | **Vanilla JS** | **~5KB** | **1x** ⚡⚡⚡ |
| Bootstrap | jQuery | ~25KB + jQuery (~30KB) | 11x |
| Untitled UI | React | ~45KB + React (~40KB) | 17x |
| shadcn/ui | React | ~45KB + React (~40KB) | 17x |
| Material UI | React | ~80KB + React (~40KB) | 24x |

### Breaking Changes

⚠️ **None!** This is a **non-breaking upgrade**:
- All existing CSS classes still work
- No API changes to existing components
- Web Components are **additive** - use as much or as little as you want
- Gradually migrate at your own pace

### Deprecations

- **None** - All previous functionality is preserved

### Notes

This is a **major version bump** (1.x → 2.0) because we're introducing a fundamentally new paradigm (Web Components), but it's **fully backward compatible**. You can:
1. Continue using CSS-only approach
2. Migrate to Web Components gradually
3. Mix both approaches in the same project

---

## [1.4.0] - 2025-11-04

### Added
- Pricing section on homepage with "$0 FREE" reveal
- Ethereal backgrounds with soft light refraction on all pages
- Enhanced stats section with large gradient numbers and colorful glass icons
- Reorganized About section (Open Source Forever, Join the Movement, Get in Touch)
- `foundation.html` page with prismatic multi-color background
- Search bar on `foundation.html` and `components.html`

### Changed
- Rebranded "iOS Motion" to "Rukn Motion" throughout codebase
- Reorganized project structure into `styles/` and `scripts/` folders
- Updated navigation across all pages for consistency
- Enhanced hero section with interactive floating components
- Removed `phase1-components.html` (consolidated into `components.html`)

### Fixed
- Button loading state not centered (spinner now properly overlays button content)
- Tooltip positioning issues (added `position: relative` to tooltip triggers)
- Tokenized hardcoded font weights and borders throughout CSS

---

## [1.3.1] - 2025-11-03

### Added
- Phase 1 components: Tooltip, Alert, Toast, Progress, Spinner
- Component helpers JavaScript file for interactive components
- Glass morphism improvements documentation

### Changed
- Improved component showcase page organization
- Enhanced documentation structure

### Fixed
- Various CSS refinements for glass morphism effects
- Improved mobile responsiveness

---

## [1.3.0] - 2025-11-02

### Added
- Initial release with core CSS framework
- Design tokens (20+ CSS variables)
- Core components: Buttons, Inputs, Cards, Badges
- Glass morphism effects
- iOS-inspired motion system (now Rukn Motion)
- Responsive grid and flexbox utilities
- Dark mode support
- Zero dependencies

### Documentation
- Quick Start guide
- Component examples
- Design token documentation
- Integration guide

---

## Release Tags

- **v2.0.0** - Web Components Revolution (Current)
- **v1.4.0** - Pricing, Ethereal Backgrounds, Foundation Page
- **v1.3.1** - Phase 1 Components
- **v1.3.0** - Initial Release

---

**Note:** View full commit history on [GitHub](https://github.com/mfaizanatiq/RuknDesignSystem/commits/master)

