# Rukn Design Tokens

**رُكن** - Complete reference for all design tokens

Built on the pillars of great design, Rukn provides a comprehensive token system for consistent, scalable interfaces.

---

## 📝 Table of Contents

1. [Typography](#typography)
2. [Spacing](#spacing)
3. [Sizing](#sizing)
4. [Colors](#colors)
5. [Shadows](#shadows)
6. [Borders & Radius](#borders--radius)
7. [Z-Index](#z-index)
8. [Transitions](#transitions)

---

## 🔤 Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-heading` | 'Space Grotesk', system-ui | All headings (h1-h6) |
| `--font-body` | System UI fonts | Body text, paragraphs |
| `--font-mono` | Monospace fonts | Code, technical content |
| `--font-arabic` | 'Rubik', system-ui | Arabic text support |

**Font Sources:**
- **Space Grotesk** - Google Fonts - Headings and English UI
- **Rubik** - Google Fonts - Arabic language support ([Reference](https://fonts.google.com/specimen/Rubik?lang=ar_Arab))
- System fonts - Native OS fonts for optimal performance

**Example:**
```css
h1 {
  font-family: var(--font-heading);
}

p {
  font-family: var(--font-body);
}

code {
  font-family: var(--font-mono);
}

/* Arabic text */
.arabic-text {
  font-family: var(--font-arabic);
}
```

**Arabic Language Support:**
```html
<!-- RTL Support -->
<div lang="ar" dir="rtl">
  <h1>عنوان بالعربية</h1>
  <p>نص بالعربية</p>
</div>

<!-- Or use utility class -->
<span class="arabic-text">رُكن</span>

<!-- Inline Arabic in LTR context -->
<span class="arabic-text inline">رُكن</span>
```

### Font Sizes

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--font-size-xs` | 0.75rem | 12px | Captions, fine print |
| `--font-size-sm` | 0.875rem | 14px | Small text, labels |
| `--font-size-base` | 1rem | 16px | Body text (default) |
| `--font-size-md` | 1.125rem | 18px | Large body text |
| `--font-size-lg` | 1.25rem | 20px | Subheadings, h5 |
| `--font-size-xl` | 1.5rem | 24px | Medium headings, h4 |
| `--font-size-2xl` | 1.875rem | 30px | Large headings, h3 |
| `--font-size-3xl` | 2.25rem | 36px | Larger headings, h2 |
| `--font-size-4xl` | 3rem | 48px | Hero headings, h1 |
| `--font-size-5xl` | 3.75rem | 60px | Display text |

**Utility Classes:**
```html
<p class="ds-text-xs">Extra small text</p>
<p class="ds-text-sm">Small text</p>
<p class="ds-text-base">Base text</p>
<p class="ds-text-lg">Large text</p>
<h1 class="ds-text-4xl">Hero heading</h1>
```

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `--font-weight-light` | 300 | Light emphasis |
| `--font-weight-normal` | 400 | Body text |
| `--font-weight-medium` | 500 | Subtle emphasis |
| `--font-weight-semibold` | 600 | Headings, emphasis |
| `--font-weight-bold` | 700 | Strong emphasis |

**Utility Classes:**
```html
<p class="ds-font-light">Light text</p>
<p class="ds-font-normal">Normal text</p>
<p class="ds-font-medium">Medium text</p>
<p class="ds-font-semibold">Semibold text</p>
<p class="ds-font-bold">Bold text</p>
```

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--line-height-none` | 1 | Tight spacing, icons |
| `--line-height-tight` | 1.25 | Headings |
| `--line-height-snug` | 1.375 | Subheadings |
| `--line-height-normal` | 1.5 | Body text (default) |
| `--line-height-relaxed` | 1.625 | Comfortable reading |
| `--line-height-loose` | 2 | Spacious text |

**Utility Classes:**
```html
<p class="ds-leading-tight">Tight line height</p>
<p class="ds-leading-normal">Normal line height</p>
<p class="ds-leading-loose">Loose line height</p>
```

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--letter-spacing-tighter` | -0.05em | Large headings |
| `--letter-spacing-tight` | -0.025em | Headings |
| `--letter-spacing-normal` | 0 | Body text |
| `--letter-spacing-wide` | 0.025em | Buttons, labels |
| `--letter-spacing-wider` | 0.05em | Uppercase text |
| `--letter-spacing-widest` | 0.1em | All caps headings |

**Utility Classes:**
```html
<h1 class="ds-tracking-tighter">Tight tracking</h1>
<p class="ds-tracking-normal">Normal tracking</p>
<button class="ds-tracking-wide">Button</button>
```

---

## 📏 Spacing

Based on **4px base unit** for consistent rhythm.

### Spacing Scale

| Token | Size | Pixels | Common Usage |
|-------|------|--------|--------------|
| `--space-0` | 0 | 0px | No spacing |
| `--space-px` | 1px | 1px | Borders |
| `--space-0-5` | 0.125rem | 2px | Tiny gaps |
| `--space-1` | 0.25rem | 4px | Minimal spacing |
| `--space-2` | 0.5rem | 8px | Compact spacing |
| `--space-3` | 0.75rem | 12px | Small spacing |
| `--space-4` | 1rem | 16px | Base spacing |
| `--space-5` | 1.25rem | 20px | Medium spacing |
| `--space-6` | 1.5rem | 24px | Comfortable spacing |
| `--space-8` | 2rem | 32px | Large spacing |
| `--space-10` | 2.5rem | 40px | Extra large spacing |
| `--space-12` | 3rem | 48px | Section spacing |
| `--space-16` | 4rem | 64px | Major sections |
| `--space-20` | 5rem | 80px | Large sections |
| `--space-24` | 6rem | 96px | Hero spacing |
| `--space-32` | 8rem | 128px | Maximum spacing |

**Example Usage:**
```css
.card {
  padding: var(--space-6); /* 24px */
  margin-bottom: var(--space-8); /* 32px */
  gap: var(--space-4); /* 16px */
}
```

### Legacy Spacing (Backward Compatibility)

| Token | Size |
|-------|------|
| `--spacing-xs` | 0.25rem (4px) |
| `--spacing-sm` | 0.5rem (8px) |
| `--spacing-md` | 1rem (16px) |
| `--spacing-lg` | 1.5rem (24px) |
| `--spacing-xl` | 2rem (32px) |
| `--spacing-2xl` | 3rem (48px) |

---

## 📐 Sizing

### Component Sizes

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--size-xs` | 1.5rem | 24px | Extra small elements |
| `--size-sm` | 2rem | 32px | Small buttons, inputs |
| `--size-md` | 2.5rem | 40px | Default buttons, inputs |
| `--size-lg` | 3rem | 48px | Large buttons |
| `--size-xl` | 3.5rem | 56px | Extra large buttons |
| `--size-2xl` | 4rem | 64px | Hero buttons |

### Icon Sizes

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--icon-xs` | 0.75rem | 12px | Tiny icons |
| `--icon-sm` | 1rem | 16px | Small icons |
| `--icon-md` | 1.25rem | 20px | Default icons |
| `--icon-lg` | 1.5rem | 24px | Large icons |
| `--icon-xl` | 2rem | 32px | Extra large icons |

### Container Max Widths

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--container-xs` | 20rem | 320px | Mobile |
| `--container-sm` | 24rem | 384px | Small mobile |
| `--container-md` | 28rem | 448px | Large mobile |
| `--container-lg` | 32rem | 512px | Tablet portrait |
| `--container-xl` | 36rem | 576px | Small tablet |
| `--container-2xl` | 42rem | 672px | Tablet landscape |
| `--container-3xl` | 48rem | 768px | Small desktop |
| `--container-4xl` | 56rem | 896px | Medium desktop |
| `--container-5xl` | 64rem | 1024px | Large desktop |
| `--container-6xl` | 72rem | 1152px | XL desktop |
| `--container-7xl` | 80rem | 1280px | 2XL desktop |

---

## 🎨 Colors

See `design-system-variables.css` for complete color tokens.

### Color Token Format

All colors use HSL format **without** the `hsl()` wrapper:

```css
--primary: 352 95% 58%; /* ✅ Correct */
--primary: hsl(352, 95%, 58%); /* ❌ Wrong */
```

**Usage:**
```css
.element {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

### Core Color Tokens

- `--background` - Page background
- `--foreground` - Primary text color
- `--primary` - Brand color
- `--primary-foreground` - Text on primary
- `--secondary` - Secondary color
- `--destructive` - Error/danger color
- `--warning` - Warning color
- `--success` - Success color
- `--muted` - Muted/subdued background
- `--border` - Border color
- `--ring` - Focus ring color

---

## 🌑 Shadows

Pre-defined shadow tokens for consistent elevation.

| Token | Shadow | Usage |
|-------|--------|-------|
| `--shadow-xs` | Minimal | Subtle elevation |
| `--shadow-sm` | Small | Cards, inputs |
| `--shadow-base` | Base | Buttons |
| `--shadow-md` | Medium | Dropdowns |
| `--shadow-lg` | Large | Modals |
| `--shadow-xl` | Extra large | Dialogs |
| `--shadow-2xl` | Maximum | Hero elements |
| `--shadow-inner` | Inner | Inset effects |

**Example:**
```css
.card {
  box-shadow: var(--shadow-md);
}

.modal {
  box-shadow: var(--shadow-xl);
}
```

---

## 🔲 Borders & Radius

### Border Widths

| Token | Size | Usage |
|-------|------|-------|
| `--border-width-0` | 0 | No border |
| `--border-width-1` | 1px | Default border |
| `--border-width-2` | 2px | Emphasized border |
| `--border-width-4` | 4px | Strong border |
| `--border-width-8` | 8px | Maximum border |

### Border Radius

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--radius-none` | 0 | 0px | Sharp corners |
| `--radius-sm` | 0.25rem | 4px | Subtle rounding |
| `--radius-base` | 0.375rem | 6px | Base rounding |
| `--radius-md` | 0.5rem | 8px | Medium rounding |
| `--radius-lg` | 0.75rem | 12px | Large rounding |
| `--radius-xl` | 1rem | 16px | Extra large |
| `--radius-2xl` | 1.5rem | 24px | Very round |
| `--radius-3xl` | 2rem | 32px | Maximum rounding |
| `--radius-full` | 9999px | Full | Pills, circles |

**Legacy:**
- `--radius` = 0.75rem (12px) - Used throughout design system

---

## 📚 Z-Index

Stacking order tokens for layered UI elements.

| Token | Value | Usage |
|-------|-------|-------|
| `--z-index-dropdown` | 1000 | Dropdown menus |
| `--z-index-sticky` | 1020 | Sticky headers |
| `--z-index-fixed` | 1030 | Fixed elements |
| `--z-index-modal-backdrop` | 1040 | Modal overlay |
| `--z-index-modal` | 1050 | Modal dialogs |
| `--z-index-popover` | 1060 | Popovers |
| `--z-index-tooltip` | 1070 | Tooltips (highest) |

**Example:**
```css
.modal-overlay {
  z-index: var(--z-index-modal-backdrop);
}

.modal {
  z-index: var(--z-index-modal);
}
```

---

## ⏱️ Transitions

Timing tokens for consistent animations.

### Duration

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | 150ms | Quick interactions |
| `--transition-base` | 200ms | Default transitions |
| `--transition-slow` | 300ms | Smooth transitions |
| `--transition-slower` | 500ms | Emphasis transitions |

### Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-in` | cubic-bezier(0.4, 0, 1, 1) | Accelerate |
| `--ease-out` | cubic-bezier(0, 0, 0.2, 1) | Decelerate |
| `--ease-in-out` | cubic-bezier(0.4, 0, 0.2, 1) | Smooth both |

**Example:**
```css
.button {
  transition: all var(--transition-base) var(--ease-out);
}

.modal {
  transition: opacity var(--transition-slow) var(--ease-in-out);
}
```

---

## 🎯 Usage Examples

### Creating a Card

```css
.my-card {
  padding: var(--space-6);
  margin-bottom: var(--space-8);
  background: hsl(var(--card));
  border: var(--border-width-1) solid hsl(var(--border));
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.my-card h3 {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: var(--space-3);
}

.my-card p {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: hsl(var(--muted-foreground));
}
```

### Creating a Button

```css
.my-button {
  height: var(--size-md);
  padding: 0 var(--space-6);
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  border-radius: var(--radius-full);
  transition: all var(--transition-base) var(--ease-out);
  box-shadow: var(--shadow-sm);
}

.my-button:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### Creating a Modal

```css
.my-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--z-index-modal);
  max-width: var(--container-lg);
  padding: var(--space-6);
  background: hsl(var(--card));
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
}

.my-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-index-modal-backdrop);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
}

.my-modal-title {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-4);
}
```

---

## 📝 Best Practices

1. **Use tokens, not hard-coded values**
   ```css
   /* ✅ Good */
   padding: var(--space-4);
   
   /* ❌ Bad */
   padding: 16px;
   ```

2. **Maintain spacing rhythm**
   - Use multiples of 4px (space-1 through space-32)
   - Stick to the scale for consistency

3. **Typography hierarchy**
   - Use Space Grotesk for all headings
   - Use system fonts for body text
   - Use monospace for code

4. **Consistent shadows**
   - Use predefined shadow tokens
   - Don't create custom shadows

5. **Responsive spacing**
   ```css
   /* Scale up on larger screens */
   padding: var(--space-4);
   
   @media (min-width: 768px) {
     padding: var(--space-6);
   }
   ```

---

## 🔄 Migration Guide

### From Hard-coded Values

```css
/* Before */
.card {
  padding: 24px;
  margin-bottom: 32px;
  font-size: 18px;
  border-radius: 12px;
}

/* After */
.card {
  padding: var(--space-6);
  margin-bottom: var(--space-8);
  font-size: var(--font-size-md);
  border-radius: var(--radius-lg);
}
```

### From Old Typography

```css
/* Before */
h1 {
  font-size: 48px;
  font-weight: 700;
}

/* After */
h1 {
  font-family: var(--font-heading); /* Space Grotesk */
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tighter);
}
```

---

**Version:** 1.2.1  
**Updated:** November 2025  
**Design System:** Rukn (رُكن)
**Font:** Space Grotesk for headings  
**Base Unit:** 4px spacing scale

