# Rukn Design System

**رُكن** - *Arabic for "pillar" or "foundation"*

A modern, framework-agnostic CSS design system built on the pillars of great design - beautiful glass morphism effects, Space Grotesk typography, and comprehensive design tokens.

🌐 **[View Live Showcase](index.html)** | 📚 **[Component Examples](example.html)** | 🎨 **[Design Tokens](DESIGN_TOKENS.md)**

## 🎯 Features

- **Framework Agnostic** - Works with React, Vue, Angular, vanilla JS, or any framework
- **No Dependencies** - Pure CSS with CSS variables
- **Space Grotesk Typography** - Beautiful, modern font for all headings
- **Arabic Support** - Rubik font for beautiful Arabic text rendering
- **Comprehensive Design Tokens** - Spacing, sizing, typography, colors, and more
- **Fully Customizable** - Change colors, spacing, and styles via CSS variables
- **Modular** - Use only what you need
- **Dark Mode Ready** - Built-in dark theme support with smooth transitions
- **Responsive** - Mobile-first approach tested on all devices
- **Accessible** - WCAG 2.1 AA compliant with proper focus states
- **Glass Morphism** - Natural frosted glass effects throughout
- **Custom Cursor** - Artistic custom cursor for a unique feel
- **Modern Floating Navbar** - Rounded, centered navbar with iOS-style scroll effects
- **Complete Layout System** - Grid, Flexbox, Container utilities with responsive breakpoints
- **iOS Motion Design** - Apple-inspired easing curves and spring animations

## 📦 Files

### Core Files
- **`design-system-variables.css`** - CSS variable definitions (colors, spacing, typography, etc.)
- **`design-system.css`** - All UI component styles
- **`modal-drawer-helpers.js`** - JavaScript helpers for modals and drawers

### Documentation
- **`README.md`** - This documentation
- **`DESIGN_TOKENS.md`** - Complete design tokens reference
- **`INTEGRATION.md`** - Framework integration guides
- **`SHOWCASE.md`** - Showcase website documentation

### Website
- **`index.html`** - Main landing page and showcase
- **`components.html`** - Foundation tokens & components with side navigation ⭐
- **`example.html`** - Detailed component examples
- **`robots.txt`** - SEO crawler instructions
- **`sitemap.xml`** - SEO sitemap

## 🚀 Quick Start

### NPM Installation

```bash
npm install @your-org/rukn
```

Then import in your project:

```javascript
import '@your-org/rukn/design-system-variables.css';
import '@your-org/rukn/design-system.css';
```

### CDN (Quick Testing)

```html
<link rel="stylesheet" href="https://cdn.example.com/rukn@1.2.1/design-system-variables.css">
<link rel="stylesheet" href="https://cdn.example.com/rukn@1.2.1/design-system.css">
```

### Option 1: Full System (Recommended)

Include both files in your HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="design-system-variables.css">
  <link rel="stylesheet" href="design-system.css">
</head>
<body>
  <button class="btn-primary">Click Me</button>
</body>
</html>
```

### Option 2: Custom Variables

Use your own CSS variables and just include the component styles:

```html
<head>
  <!-- Your custom variables -->
  <style>
    :root {
      --primary: 220 70% 50%;
      --foreground: 0 0% 100%;
      /* ... */
    }
  </style>
  <link rel="stylesheet" href="design-system.css">
</head>
```

### Option 3: NPM/CDN (Future)

```bash
npm install @your-org/design-system
```

```html
<link rel="stylesheet" href="https://cdn.example.com/design-system.css">
```

## 🎨 Components

### Buttons

```html
<!-- Primary (Default Action - White text) -->
<button class="btn-primary">Save</button>

<!-- Secondary (Important but less prominent) -->
<button class="btn-secondary">Cancel</button>

<!-- Outline (Subtle with border) -->
<button class="btn-outline">Learn More</button>

<!-- Ghost (Minimal) -->
<button class="btn-ghost">Skip</button>

<!-- Tertiary (Very subtle) -->
<button class="btn-tertiary">Details</button>

<!-- Destructive (Dangerous actions - White text) -->
<button class="btn-destructive">Delete</button>

<!-- Link Style -->
<button class="btn-link">Read More</button>
```

**Button Colors:**
- **Primary & Destructive** - White text (#ffffff) with text shadow for maximum contrast
- **Secondary, Outline, Ghost, Tertiary** - Foreground color (adapts to theme)
- **Link** - Primary color (adapts to theme)

#### Button Sizes

```html
<button class="btn-primary btn-sm">Small</button>
<button class="btn-primary btn-md">Medium</button>
<button class="btn-primary btn-lg">Large</button>
<button class="btn-primary btn-icon">⚙️</button>
```

#### Disabled State

```html
<button class="btn-primary" disabled>Disabled</button>
```

### Inputs

```html
<!-- Text Input -->
<input type="text" class="ds-input" placeholder="Enter text">

<!-- Textarea -->
<textarea class="ds-textarea" placeholder="Enter message"></textarea>

<!-- Select -->
<select class="ds-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Checkbox

```html
<!-- Basic Checkbox -->
<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox">
  <span class="ds-checkbox-label">Accept terms and conditions</span>
</label>

<!-- Checked by default -->
<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox" checked>
  <span class="ds-checkbox-label">Remember me</span>
</label>

<!-- Disabled -->
<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox" disabled>
  <span class="ds-checkbox-label">Disabled option</span>
</label>

<!-- Sizes -->
<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox ds-checkbox-sm">
  <span class="ds-checkbox-label">Small checkbox</span>
</label>

<label class="ds-checkbox-wrapper">
  <input type="checkbox" class="ds-checkbox ds-checkbox-lg">
  <span class="ds-checkbox-label">Large checkbox</span>
</label>
```

**Features:**
- Animated checkmark
- Glass morphism styling
- Size variants (sm, default, lg)
- Hover & focus states
- Accessible

### Radio Group

```html
<!-- Vertical Radio Group -->
<div class="ds-radio-group">
  <label class="ds-radio-wrapper">
    <input type="radio" name="plan" class="ds-radio" value="free" checked>
    <span class="ds-radio-label">Free Plan</span>
  </label>
  
  <label class="ds-radio-wrapper">
    <input type="radio" name="plan" class="ds-radio" value="pro">
    <span class="ds-radio-label">Pro Plan</span>
  </label>
  
  <label class="ds-radio-wrapper">
    <input type="radio" name="plan" class="ds-radio" value="enterprise">
    <span class="ds-radio-label">Enterprise Plan</span>
  </label>
</div>

<!-- Horizontal Radio Group -->
<div class="ds-radio-group ds-radio-group-row">
  <label class="ds-radio-wrapper">
    <input type="radio" name="size" class="ds-radio" value="s">
    <span class="ds-radio-label">Small</span>
  </label>
  
  <label class="ds-radio-wrapper">
    <input type="radio" name="size" class="ds-radio" value="m" checked>
    <span class="ds-radio-label">Medium</span>
  </label>
  
  <label class="ds-radio-wrapper">
    <input type="radio" name="size" class="ds-radio" value="l">
    <span class="ds-radio-label">Large</span>
  </label>
</div>

<!-- Sizes -->
<label class="ds-radio-wrapper">
  <input type="radio" name="example" class="ds-radio ds-radio-sm">
  <span class="ds-radio-label">Small radio</span>
</label>

<label class="ds-radio-wrapper">
  <input type="radio" name="example" class="ds-radio ds-radio-lg">
  <span class="ds-radio-label">Large radio</span>
</label>
```

**Features:**
- Animated selection
- Vertical or horizontal layout
- Size variants (sm, default, lg)
- Mutually exclusive selection
- Accessible

### Switch / Toggle

```html
<!-- Basic Switch -->
<label class="ds-switch-wrapper">
  <input type="checkbox" class="ds-switch">
  <span class="ds-switch-label">Enable notifications</span>
</label>

<!-- Checked by default -->
<label class="ds-switch-wrapper">
  <input type="checkbox" class="ds-switch" checked>
  <span class="ds-switch-label">Dark mode</span>
</label>

<!-- Disabled -->
<label class="ds-switch-wrapper">
  <input type="checkbox" class="ds-switch" disabled>
  <span class="ds-switch-label">Disabled feature</span>
</label>

<!-- Sizes -->
<label class="ds-switch-wrapper">
  <input type="checkbox" class="ds-switch ds-switch-sm">
  <span class="ds-switch-label">Small switch</span>
</label>

<label class="ds-switch-wrapper">
  <input type="checkbox" class="ds-switch ds-switch-lg">
  <span class="ds-switch-label">Large switch</span>
</label>
```

**Features:**
- Smooth sliding animation
- Glass morphism styling
- Size variants (sm, default, lg)
- Works with JavaScript toggles
- Accessible

### Label

```html
<!-- Basic Label -->
<label class="ds-label">Email Address</label>
<input type="email" class="ds-input" placeholder="you@example.com">

<!-- Required Field -->
<label class="ds-label ds-label-required">Password</label>
<input type="password" class="ds-input">

<!-- Optional Field -->
<label class="ds-label ds-label-optional">Phone Number</label>
<input type="tel" class="ds-input">

<!-- Sizes -->
<label class="ds-label ds-label-sm">Small label</label>
<label class="ds-label">Default label</label>
<label class="ds-label ds-label-lg">Large label</label>
```

**Features:**
- Required indicator (*)
- Optional indicator
- Size variants
- Semantic HTML

### Form Field (with Validation)

```html
<!-- Basic Form Field -->
<div class="ds-form-field">
  <label class="ds-label ds-label-required">Username</label>
  <input type="text" class="ds-input" placeholder="johndoe">
  <span class="ds-form-field-helper">Choose a unique username</span>
</div>

<!-- Error State -->
<div class="ds-form-field has-error">
  <label class="ds-label ds-label-required">Email</label>
  <input type="email" class="ds-input" value="invalid-email">
  <span class="ds-form-field-error">Please enter a valid email address</span>
</div>

<!-- Success State -->
<div class="ds-form-field has-success">
  <label class="ds-label ds-label-required">Password</label>
  <input type="password" class="ds-input" value="••••••••">
  <span class="ds-form-field-success">Strong password</span>
</div>

<!-- Complete Form Example -->
<form class="ds-card">
  <div class="ds-form-field">
    <label class="ds-label ds-label-required">Full Name</label>
    <input type="text" class="ds-input" placeholder="John Doe">
  </div>
  
  <div class="ds-form-field">
    <label class="ds-label ds-label-required">Email</label>
    <input type="email" class="ds-input" placeholder="john@example.com">
    <span class="ds-form-field-helper">We'll never share your email</span>
  </div>
  
  <div class="ds-form-field">
    <label class="ds-label ds-label-optional">Bio</label>
    <textarea class="ds-textarea" placeholder="Tell us about yourself"></textarea>
  </div>
  
  <label class="ds-checkbox-wrapper">
    <input type="checkbox" class="ds-checkbox">
    <span class="ds-checkbox-label">I agree to the terms</span>
  </label>
  
  <button type="submit" class="btn-primary" style="margin-top: 1rem;">Submit</button>
</form>
```

**Features:**
- Validation states (error, success)
- Helper text
- Error messages with icons
- Consistent spacing
- Works with all input types

### Slider / Range

```html
<!-- Basic Slider -->
<div class="ds-slider-wrapper">
  <label class="ds-label">Volume</label>
  <input type="range" class="ds-slider" min="0" max="100" value="50">
</div>

<!-- Slider with Value Display -->
<div class="ds-slider-wrapper">
  <div class="ds-slider-value">
    <label class="ds-label">Brightness</label>
    <span class="ds-slider-value-current">75%</span>
  </div>
  <input type="range" class="ds-slider" min="0" max="100" value="75">
</div>

<!-- Slider with Min/Max Labels -->
<div class="ds-slider-wrapper">
  <label class="ds-label">Price Range</label>
  <input type="range" class="ds-slider" min="0" max="1000" value="500" step="50">
  <div class="ds-slider-value">
    <span>$0</span>
    <span>$1000</span>
  </div>
</div>

<!-- Disabled -->
<div class="ds-slider-wrapper">
  <label class="ds-label">Disabled</label>
  <input type="range" class="ds-slider" min="0" max="100" value="30" disabled>
</div>

<!-- Sizes -->
<input type="range" class="ds-slider ds-slider-sm" min="0" max="100" value="40">
<input type="range" class="ds-slider" min="0" max="100" value="50">
<input type="range" class="ds-slider ds-slider-lg" min="0" max="100" value="60">
```

**Features:**
- Custom styled thumb
- Glass morphism aesthetic
- Size variants (sm, default, lg)
- Smooth dragging
- Works with JavaScript for value display

**JavaScript Example for Slider:**
```html
<div class="ds-slider-wrapper">
  <div class="ds-slider-value">
    <label class="ds-label">Volume</label>
    <span class="ds-slider-value-current" id="volume-value">50</span>
  </div>
  <input type="range" class="ds-slider" min="0" max="100" value="50" id="volume-slider">
</div>

<script>
  const slider = document.getElementById('volume-slider');
  const valueDisplay = document.getElementById('volume-value');
  
  slider.addEventListener('input', (e) => {
    valueDisplay.textContent = e.target.value;
  });
</script>
```

### Cards

```html
<div class="ds-card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>
```

### Badges

```html
<span class="ds-badge ds-badge-neutral">Neutral</span>
<span class="ds-badge ds-badge-primary">Primary</span>
<span class="ds-badge ds-badge-success">Success</span>
<span class="ds-badge ds-badge-warning">Warning</span>
<span class="ds-badge ds-badge-destructive">Destructive</span>
```

### Glass Morphism

```html
<div class="ds-glass">
  Glass morphism container with natural blur effect
</div>
```

**Features:**
- Natural glass-like transparency
- Enhanced backdrop blur (60px)
- Subtle gradients for depth
- Soft edge highlights
- High saturation for vibrant colors behind glass
- Perfect for overlays and floating elements

**Tips:**
- Works best over colorful or textured backgrounds
- Automatically adjusts in dark mode
- Combines well with cards and modals
- Text remains readable with enhanced contrast

### Scrollbars

```html
<div class="ds-scrollbar" style="overflow-y: auto; max-height: 300px;">
  <!-- Scrollable content -->
</div>
```

### Modal/Dialog

```html
<!-- Modal Overlay -->
<div class="ds-modal-overlay"></div>

<!-- Modal Container -->
<div class="ds-modal">
  <!-- Modal Content (scrollable) -->
  <div class="ds-modal-content ds-modal-scroll">
    <!-- Modal Header -->
    <div class="ds-modal-header ds-modal-header-left">
      <h3 class="ds-modal-title">Modal Title</h3>
      <p class="ds-modal-description">Modal description text</p>
    </div>
    
    <!-- Modal Body -->
    <div>
      <p>Modal content goes here</p>
    </div>
    
    <!-- Modal Footer -->
    <div class="ds-modal-footer ds-modal-footer-row">
      <button class="btn-secondary btn-sm">Cancel</button>
      <button class="btn-primary btn-sm">Confirm</button>
    </div>
  </div>
  
  <!-- Close Button -->
  <button class="ds-modal-close">✕</button>
</div>
```

**Features:**
- **Natural glass morphism** - Enhanced blur (60px) with soft gradients
- **Readable text** - Improved contrast with subtle shadows
- **Soft buttons** - Translucent controls with backdrop blur
- Responsive (mobile-friendly)
- Scrollable content area
- Custom close button with glass effect
- Animated entrance/exit with smooth scaling

### Navbar

```html
<!-- Navbar -->
<nav class="ds-navbar">
  <div class="ds-navbar-container">
    <!-- Brand -->
    <a href="#" class="ds-navbar-brand">
      <span class="ds-navbar-logo">🚀</span>
      <span>My App</span>
    </a>
    
    <!-- Navigation -->
    <nav class="ds-navbar-nav">
      <div class="ds-navbar-menu">
        <button class="btn-outline btn-sm">Home</button>
        <button class="btn-outline btn-sm">About</button>
        <button class="btn-primary btn-sm">Sign In</button>
      </div>
    </nav>
  </div>
</nav>

<!-- Spacer for content below navbar -->
<div class="ds-navbar-spacer"></div>
```

**Features:**
- Fixed position at top
- Backdrop blur effect
- Responsive design
- Mobile-friendly menu options
- Use `.ds-navbar-spacer` for content spacing

### Drawer (Bottom Sheet)

```html
<!-- Drawer Overlay -->
<div class="ds-drawer-overlay"></div>

<!-- Drawer Container -->
<div class="ds-drawer">
  <!-- Handle -->
  <div class="ds-drawer-handle"></div>
  
  <!-- Header -->
  <div class="ds-drawer-header">
    <h3 class="ds-drawer-title">Drawer Title</h3>
    <button class="ds-drawer-close">✕</button>
  </div>
  
  <!-- Content -->
  <div class="ds-drawer-content ds-scrollbar">
    <p>Drawer content goes here</p>
  </div>
  
  <!-- Footer -->
  <div class="ds-drawer-footer">
    <button class="btn-secondary btn-sm">Cancel</button>
    <button class="btn-primary btn-sm">Save</button>
  </div>
</div>
```

**Drawer Variants:**

```html
<!-- Bottom Drawer (default) -->
<div class="ds-drawer">...</div>

<!-- Left Drawer -->
<div class="ds-drawer ds-drawer-left">...</div>

<!-- Right Drawer -->
<div class="ds-drawer ds-drawer-right">...</div>
```

**Features:**
- Slide-in animations
- Mobile bottom sheet style
- Draggable handle (visual indicator)
- Scrollable content
- Side drawer variants (left/right)

**JavaScript Helpers:**

For easier modal/drawer management, use the included `modal-drawer-helpers.js`:

```html
<script src="modal-drawer-helpers.js"></script>

<script>
  // Open modal
  openModal('myModal', 'myModalOverlay');
  
  // Close modal
  closeModal('myModal', 'myModalOverlay');
  
  // Open drawer
  openDrawer('myDrawer', 'myDrawerOverlay');
  
  // Close drawer
  closeDrawer('myDrawer', 'myDrawerOverlay');
</script>
```

Or use with data attributes:
```html
<button onclick="openModal('exampleModal')">Open Modal</button>
```

The helper automatically:
- Prevents background scrolling
- Closes on overlay click
- Closes on ESC key
- Closes on close button click

## 🎨 Customization

### Colors

Modify `design-system-variables.css`:

```css
:root {
  --primary: 220 70% 50%; /* Your brand color */
  --destructive: 0 84% 60%;
  /* ... */
}
```

### Border Radius

```css
:root {
  --radius: 0.75rem; /* Default */
  /* Change to 0.5rem for sharper corners */
  /* Or 1rem for rounder corners */
}
```

### Dark Mode

Add `.dark` class to your root element or use `[data-theme="dark"]`:

```html
<html class="dark">
  <!-- Dark theme will be applied -->
</html>
```

Or toggle via JavaScript:

```javascript
document.documentElement.classList.toggle('dark');
```

## 📐 CSS Variables Reference

### Required Variables

```css
--background          /* Page background */
--foreground          /* Primary text color */
--primary             /* Primary brand color (HSL) */
--primary-foreground  /* Text on primary color */
--secondary           /* Secondary color */
--muted               /* Muted/subdued background */
--muted-foreground    /* Muted text color */
--destructive         /* Error/danger color */
--destructive-foreground
--border              /* Border color */
--input               /* Input border color */
--ring                /* Focus ring color */
--radius              /* Border radius base */
```

### Optional Variables

```css
--warning             /* Warning color */
--success             /* Success color */
--accent              /* Accent color */
--card                /* Card background */
--popover             /* Popover background */
```

### HSL Format

All color variables use HSL format **without** `hsl()`:

```css
/* ✅ Correct */
--primary: 352 95% 58%;

/* ❌ Wrong */
--primary: hsl(352, 95%, 58%);
```

In styles, they're used as: `hsl(var(--primary))`

## 🔧 Framework Integration

### React

```jsx
import './design-system-variables.css';
import './design-system.css';

function App() {
  return (
    <button className="btn-primary">Click Me</button>
  );
}
```

### Vue

```vue
<template>
  <button class="btn-primary">Click Me</button>
</template>

<style>
@import './design-system-variables.css';
@import './design-system.css';
</style>
```

### Angular

In `angular.json`:

```json
{
  "styles": [
    "src/design-system/design-system-variables.css",
    "src/design-system/design-system.css"
  ]
}
```

Or in component:

```typescript
@Component({
  styleUrls: [
    '../../design-system/design-system-variables.css',
    '../../design-system/design-system.css'
  ]
})
```

### Vanilla JS / HTML

```html
<link rel="stylesheet" href="design-system-variables.css">
<link rel="stylesheet" href="design-system.css">
```

## 🎯 Usage Examples

### Form

```html
<form class="ds-card">
  <h2>Contact Us</h2>
  
  <label>
    Name
    <input type="text" class="ds-input" placeholder="Your name">
  </label>
  
  <label>
    Email
    <input type="email" class="ds-input" placeholder="your@email.com">
  </label>
  
  <label>
    Message
    <textarea class="ds-textarea" placeholder="Your message"></textarea>
  </label>
  
  <div style="display: flex; gap: 0.5rem;">
    <button type="submit" class="btn-primary">Send</button>
    <button type="button" class="btn-secondary">Cancel</button>
  </div>
</form>
```

### Card with Actions

```html
<div class="ds-card">
  <h3>Product Title</h3>
  <p>Product description here</p>
  
  <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
    <button class="btn-primary btn-sm">Buy Now</button>
    <button class="btn-outline btn-sm">Learn More</button>
  </div>
</div>
```

## 🔍 Browser Support

- Chrome/Edge: ✅ Latest 2 versions
- Firefox: ✅ Latest 2 versions
- Safari: ✅ Latest 2 versions
- Mobile browsers: ✅ iOS Safari, Chrome Mobile

**CSS Features Used:**
- CSS Variables (Custom Properties)
- `backdrop-filter` (with fallback)
- `linear-gradient`
- Modern CSS transitions

## 📝 License

MIT License - Use freely in your projects.

## 🤝 Contributing

Feel free to customize and extend this design system for your needs!

## 📚 Additional Resources

### Combining with Tailwind

If you use Tailwind CSS, you can use both together:

```html
<link rel="stylesheet" href="design-system.css">
<!-- Tailwind after design system -->
<link rel="stylesheet" href="tailwind.css">
```

### Combining with Bootstrap

The design system classes use different naming (`.btn-primary` vs `.btn.btn-primary`), so they won't conflict.

## 🐛 Troubleshooting

### Colors not showing?

Make sure CSS variables are defined and use HSL format:
```css
--primary: 352 95% 58%; /* ✅ Correct */
--primary: #FF4154;     /* ❌ Wrong */
```

### Buttons not styled?

Ensure `design-system.css` is loaded after `design-system-variables.css`.

### Dark mode not working?

Add `.dark` class to your root element:
```html
<html class="dark">
```

## 💡 Tips

1. **Customize Variables First** - Change colors/spacing in `design-system-variables.css`
2. **Override Styles** - Add your own CSS after the design system
3. **Use Classes Together** - Combine size and variant classes: `btn-primary btn-lg`
4. **Responsive** - Buttons automatically adapt to mobile (min-height: 44px)

## 📞 Support

For questions or issues, please refer to your project's documentation or create an issue in your repository.

