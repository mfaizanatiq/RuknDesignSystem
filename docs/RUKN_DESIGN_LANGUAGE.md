# Rukn Design Language Guide
**رُكن - The Foundation of Modern Glass Morphism**

> **Philosophy:** Every component must embody Rukn's signature glass morphism aesthetic with Rukn-inspired motion design. We don't copy—we adapt patterns while maintaining our unique visual identity.

---

## 🎨 Core Design Principles

### 1. Glass Morphism First
**Every component should feel like light passing through frosted glass**

```css
/* ✅ The Rukn Way - Natural Glass Effect */
.rukn-component {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.08) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: saturate(1.8) blur(60px) brightness(1.1);
  -webkit-backdrop-filter: saturate(1.8) blur(60px) brightness(1.1);
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.15),
    inset 0 -1px 1px rgba(255, 255, 255, 0.08),
    0 10px 40px rgba(0, 0, 0, 0.3);
}

/* ❌ Generic Solid Style - Not Rukn */
.generic-component {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Key Elements:**
- 🌫️ **Backdrop Blur** - Minimum 40px, ideally 60px for depth
- 🎨 **Saturation Boost** - 1.5-1.8x for vibrant colors behind glass
- ✨ **Subtle Gradients** - Light refraction simulation
- 💎 **Edge Highlights** - Inset shadows for prismatic effect
- 🌓 **Transparency Layers** - Multiple alpha levels for depth

---

### 2. Rukn Motion Design
**Animations should feel natural, smooth, and spring-based**

```css
/* ✅ Rukn Motion - Smooth & Natural */
.rukn-interactive {
  transition: all var(--r-transition-base) var(--r-ease-ios-smooth);
  will-change: transform, box-shadow;
}

.rukn-interactive:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.rukn-interactive:active {
  transform: scale(0.97);
  transition-duration: var(--r-transition-instant);
}

/* ❌ Generic Hover - Abrupt */
.generic-hover:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: 0.3s ease;
}
```

**Motion Tokens:**
```css
/* Use these exclusively */
--r-transition-instant: 50ms;    /* Micro-interactions */
--r-transition-fast: 150ms;      /* Buttons, toggles */
--r-transition-base: 250ms;      /* Cards, modals */
--r-transition-slow: 350ms;      /* Complex animations */

/* Easing Curves - Apple HIG Inspired */
--r-ease-ios-standard: cubic-bezier(0.4, 0.0, 0.2, 1);     /* Default */
--r-ease-ios-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);   /* Enter */
--r-ease-ios-accelerate: cubic-bezier(0.4, 0.0, 1, 1);     /* Exit */
--r-ease-ios-smooth: cubic-bezier(0.4, 0.0, 0.6, 1);       /* Smooth */

/* Spring Animations */
--r-spring-snappy: cubic-bezier(0.5, 1.8, 0.75, 1.2);      /* Quick bounce */
--r-spring-smooth: cubic-bezier(0.5, 1.25, 0.75, 1);       /* Gentle bounce */
--r-spring-bouncy: cubic-bezier(0.5, 2.0, 0.7, 1.3);       /* Playful */
```

---

### 3. Clean Modern Aesthetic
**Minimalism with purpose, every element earns its place**

#### Typography
```css
/* Always use Space Grotesk for headings */
font-family: var(--r-font-heading);  /* Space Grotesk */
font-family: var(--r-font-body);     /* Space Grotesk */
font-family: var(--r-font-arabic);   /* Rubik (RTL) */
font-family: var(--r-font-mono);     /* JetBrains Mono (code) */

/* Font weights - Use sparingly */
--r-font-weight-normal: 400;    /* Body text */
--r-font-weight-medium: 500;    /* Labels, buttons */
--r-font-weight-semibold: 600;  /* Headings */
--r-font-weight-bold: 700;      /* Emphasis */
```

#### Spacing
```css
/* Use the Rukn spacing scale */
--r-space-1: 0.25rem;   /* 4px  - Tight */
--r-space-2: 0.5rem;    /* 8px  - Compact */
--r-space-3: 0.75rem;   /* 12px - Small */
--r-space-4: 1rem;      /* 16px - Base */
--r-space-6: 1.5rem;    /* 24px - Medium */
--r-space-8: 2rem;      /* 32px - Large */
--r-space-12: 3rem;     /* 48px - XLarge */
--r-space-16: 4rem;     /* 64px - XXLarge */
```

#### Border Radius
```css
/* Consistent curves */
--r-radius-sm: 0.375rem;   /* 6px  - Tight corners */
--r-radius-md: 0.5rem;     /* 8px  - Default */
--r-radius-lg: 0.75rem;    /* 12px - Cards */
--r-radius-xl: 1rem;       /* 16px - Modals */
--r-radius-2xl: 1.5rem;    /* 24px - Large cards */
--r-radius-3xl: 2rem;      /* 32px - Hero sections */
--r-radius-full: 9999px;   /* Pills, badges */
```

---

## 🎯 Component Adaptation Rules

### Rule 1: Glass Over Solid
**Transform solid backgrounds into glass layers**

```css
/* Untitled UI Style (Solid) */
.untitled-tooltip {
  background: #1f2937;
  border: 1px solid #374151;
}

/* ✅ Rukn Adaptation (Glass) */
.ds-tooltip {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.08) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: saturate(1.5) blur(40px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}
```

### Rule 2: Spring Animations
**Replace linear transitions with spring-based motion**

```css
/* Generic Style */
.generic-dropdown {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

/* ✅ Rukn Style */
.ds-dropdown {
  transition: all var(--r-transition-base) var(--r-spring-smooth);
  animation: dropdownSlideIn var(--r-transition-base) var(--r-spring-smooth);
}

@keyframes dropdownSlideIn {
  0% {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### Rule 3: Elevation System
**Use our modal elevation system for layered components**

```css
/* Base Layer - Subtle glass */
.ds-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

/* Elevated Layer - Enhanced glass */
.ds-modal .ds-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* Top Layer - Maximum glass effect */
.ds-tooltip,
.ds-popover {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px) saturate(1.8);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
```

---

## 🎨 New Component Template

### Standard Rukn Component Structure

```css
/* ========================================
   COMPONENT NAME
   Brief description of purpose
   ======================================== */

.ds-component {
  /* Layout */
  display: flex;
  align-items: center;
  gap: var(--r-space-2);
  padding: var(--r-space-3);
  
  /* Glass Morphism */
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.08) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--r-radius-lg);
  backdrop-filter: saturate(1.5) blur(40px);
  -webkit-backdrop-filter: saturate(1.5) blur(40px);
  
  /* Shadows & Depth */
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 4px 16px rgba(0, 0, 0, 0.15);
  
  /* Typography */
  font-family: var(--r-font-body);
  font-size: var(--r-font-size-sm);
  color: hsl(var(--foreground));
  
  /* Animation */
  transition: all var(--r-transition-base) var(--r-ease-ios-smooth);
  will-change: transform, box-shadow;
}

/* Hover State - Subtle lift */
.ds-component:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 8px 24px rgba(0, 0, 0, 0.2);
}

/* Active State - Spring feedback */
.ds-component:active {
  transform: scale(0.98);
  transition-duration: var(--r-transition-instant);
}

/* Focus State - Accessible */
.ds-component:focus,
.ds-component:focus-visible {
  outline: 2px solid hsl(var(--primary) / 0.5);
  outline-offset: 2px;
}

/* Disabled State */
.ds-component:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Size Variants */
.ds-component-sm {
  padding: var(--r-space-2);
  font-size: var(--r-font-size-xs);
}

.ds-component-lg {
  padding: var(--r-space-4);
  font-size: var(--r-font-size-md);
}

/* Color Variants */
.ds-component-primary {
  background: linear-gradient(135deg,
    hsl(var(--primary) / 0.12) 0%,
    hsl(var(--primary) / 0.08) 100%
  );
  border-color: hsl(var(--primary) / 0.2);
  color: hsl(var(--primary));
}

.ds-component-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%,
    hsl(var(--primary) / 0.15) 0%,
    transparent 60%
  );
  border-radius: inherit;
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .ds-component {
    transition-duration: 0.01ms !important;
    animation: none !important;
  }
}
```

---

## 🎯 Component Examples: Rukn Way

### Example 1: Tooltip (Rukn Style)

```css
/* ========================================
   TOOLTIP - Glass Morphism Floating Info
   ======================================== */

.ds-tooltip {
  position: absolute;
  z-index: 10000;
  padding: var(--r-space-2) var(--r-space-3);
  max-width: 200px;
  
  /* Enhanced Glass for Floating Elements */
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.08) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--r-radius-lg);
  backdrop-filter: saturate(1.8) blur(40px) brightness(1.1);
  -webkit-backdrop-filter: saturate(1.8) blur(40px) brightness(1.1);
  
  /* Deep Shadow for Elevation */
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  /* Typography */
  font-size: var(--r-font-size-xs);
  font-weight: var(--r-font-weight-medium);
  color: hsl(var(--foreground));
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  line-height: var(--r-line-height-snug);
  
  /* Entrance Animation */
  animation: tooltipFadeIn var(--r-transition-fast) var(--r-spring-smooth);
  opacity: 0;
}

.ds-tooltip[data-state="open"] {
  opacity: 1;
}

/* Tooltip Arrow - Glass Effect */
.ds-tooltip::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  transform: rotate(45deg);
}

/* Position Variants */
.ds-tooltip[data-side="top"]::before {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-top: none;
  border-left: none;
}

.ds-tooltip[data-side="bottom"]::before {
  top: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-bottom: none;
  border-right: none;
}

@keyframes tooltipFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.94) translateY(-4px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```

### Example 2: Alert (Rukn Style)

```css
/* ========================================
   ALERT - Inline Notification Banner
   ======================================== */

.ds-alert {
  display: flex;
  align-items: flex-start;
  gap: var(--r-space-3);
  padding: var(--r-space-4);
  border-radius: var(--r-radius-xl);
  
  /* Subtle Glass Background */
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  transition: all var(--r-transition-base) var(--r-ease-ios-smooth);
}

/* Alert Icon */
.ds-alert-icon {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Alert Content */
.ds-alert-content {
  flex: 1;
}

.ds-alert-title {
  font-weight: var(--r-font-weight-semibold);
  font-size: var(--r-font-size-sm);
  margin-bottom: var(--r-space-1);
  color: hsl(var(--foreground));
}

.ds-alert-description {
  font-size: var(--r-font-size-sm);
  color: hsl(var(--foreground) / 0.8);
  line-height: var(--r-line-height-relaxed);
}

/* Variant: Info */
.ds-alert-info {
  background: linear-gradient(135deg,
    hsl(var(--primary) / 0.08) 0%,
    hsl(var(--primary) / 0.04) 100%
  );
  border-color: hsl(var(--primary) / 0.2);
}

.ds-alert-info .ds-alert-icon {
  color: hsl(var(--primary));
}

/* Variant: Success */
.ds-alert-success {
  background: linear-gradient(135deg,
    hsl(var(--success) / 0.08) 0%,
    hsl(var(--success) / 0.04) 100%
  );
  border-color: hsl(var(--success) / 0.2);
}

.ds-alert-success .ds-alert-icon {
  color: hsl(var(--success));
}

/* Variant: Warning */
.ds-alert-warning {
  background: linear-gradient(135deg,
    hsl(var(--warning) / 0.08) 0%,
    hsl(var(--warning) / 0.04) 100%
  );
  border-color: hsl(var(--warning) / 0.2);
}

.ds-alert-warning .ds-alert-icon {
  color: hsl(var(--warning));
}

/* Variant: Error */
.ds-alert-error {
  background: linear-gradient(135deg,
    hsl(var(--destructive) / 0.08) 0%,
    hsl(var(--destructive) / 0.04) 100%
  );
  border-color: hsl(var(--destructive) / 0.2);
}

.ds-alert-error .ds-alert-icon {
  color: hsl(var(--destructive));
}

/* Close Button */
.ds-alert-close {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--r-radius-full);
  color: hsl(var(--foreground) / 0.6);
  cursor: pointer;
  transition: all var(--r-transition-fast) var(--r-ease-ios-smooth);
}

.ds-alert-close:hover {
  background: rgba(255, 255, 255, 0.12);
  color: hsl(var(--foreground));
  transform: scale(1.1);
}

.ds-alert-close:active {
  transform: scale(0.95);
}
```

### Example 3: Avatar (Rukn Style)

```css
/* ========================================
   AVATAR - User Profile Image
   ======================================== */

.ds-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--r-radius-full);
  overflow: hidden;
  
  /* Glass Border Effect */
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  transition: all var(--r-transition-base) var(--r-ease-ios-smooth);
}

/* Avatar Image */
.ds-avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Avatar Fallback (Initials) */
.ds-avatar-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,
    hsl(var(--primary) / 0.2) 0%,
    hsl(var(--primary) / 0.1) 100%
  );
  color: hsl(var(--primary));
  font-weight: var(--r-font-weight-semibold);
  font-size: var(--r-font-size-sm);
  text-transform: uppercase;
}

/* Hover Effect */
.ds-avatar:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Size Variants */
.ds-avatar-xs {
  width: 1.5rem;
  height: 1.5rem;
}

.ds-avatar-sm {
  width: 2rem;
  height: 2rem;
}

.ds-avatar-lg {
  width: 3rem;
  height: 3rem;
}

.ds-avatar-xl {
  width: 4rem;
  height: 4rem;
}

/* Status Badge */
.ds-avatar-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: var(--r-radius-full);
  border: 2px solid hsl(var(--background));
  background: hsl(var(--success));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.ds-avatar-badge-offline {
  background: hsl(var(--muted));
}

.ds-avatar-badge-busy {
  background: hsl(var(--destructive));
}

/* Avatar Group */
.ds-avatar-group {
  display: flex;
  align-items: center;
}

.ds-avatar-group .ds-avatar {
  margin-left: -0.5rem;
  border: 2px solid hsl(var(--background));
}

.ds-avatar-group .ds-avatar:first-child {
  margin-left: 0;
}

.ds-avatar-group .ds-avatar:hover {
  z-index: 1;
}
```

---

## 📋 Implementation Checklist

For every new component, ensure:

### Visual Design
- [ ] Uses glass morphism background (gradient + blur)
- [ ] Has subtle border with alpha transparency
- [ ] Includes inset shadow for depth
- [ ] Uses Rukn spacing scale (--r-space-*)
- [ ] Uses Rukn border radius (--r-radius-*)
- [ ] Color uses HSL format: `hsl(var(--color))`

### Animation
- [ ] Uses Rukn transition tokens (--r-transition-*)
- [ ] Uses iOS easing curves (--r-ease-ios-*)
- [ ] Has smooth hover state (lift or scale)
- [ ] Has tactile active state (scale down)
- [ ] Includes `will-change` for performance
- [ ] Supports `prefers-reduced-motion`

### Accessibility
- [ ] Proper focus states with outline
- [ ] Works with keyboard navigation
- [ ] Includes ARIA labels where needed
- [ ] Color contrast meets WCAG AA
- [ ] Works with screen readers

### Responsiveness
- [ ] Mobile-first breakpoints
- [ ] Touch-friendly sizes (min 44px)
- [ ] Adapts to different screen sizes
- [ ] Maintains glass effect on mobile

### Code Quality
- [ ] Uses semantic CSS class names (ds-*)
- [ ] Well-commented sections
- [ ] Consistent with existing patterns
- [ ] Minimal specificity
- [ ] No !important flags

---

## 🚫 What NOT to Do

### ❌ Don't Copy Generic Styles
```css
/* ❌ Generic shadow component */
.component {
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

### ❌ Don't Use Linear Transitions
```css
/* ❌ Abrupt animation */
.component {
  transition: all 0.3s linear;
}
```

### ❌ Don't Ignore Glass Morphism
```css
/* ❌ Solid backgrounds */
.component {
  background: #1f2937;
  border: 1px solid #374151;
}
```

### ❌ Don't Use Fixed Colors
```css
/* ❌ Hard-coded colors */
.component {
  color: #ffffff;
  background: #3b82f6;
}
```

### ❌ Don't Skip Mobile Optimization
```css
/* ❌ Desktop-only sizing */
.component {
  padding: 0.5rem;
  min-height: 32px;
}
```

---

## ✅ Quick Reference: Rukn vs Generic

| Aspect | ❌ Generic | ✅ Rukn Way |
|--------|-----------|-------------|
| **Background** | `background: #fff` | `background: linear-gradient(...)` + `backdrop-filter` |
| **Border** | `border: 1px solid #e5e5e5` | `border: 1px solid rgba(255,255,255,0.15)` |
| **Shadow** | `box-shadow: 0 2px 4px rgba(0,0,0,0.1)` | Multi-layer with inset highlights |
| **Transition** | `transition: 0.3s ease` | `var(--r-transition-base) var(--r-ease-ios-smooth)` |
| **Hover** | `box-shadow: ...` | `transform: translateY(-2px)` + enhanced shadow |
| **Active** | No feedback | `transform: scale(0.97)` |
| **Colors** | `#3b82f6` | `hsl(var(--primary))` |
| **Spacing** | `padding: 8px` | `padding: var(--r-space-2)` |
| **Radius** | `border-radius: 4px` | `border-radius: var(--r-radius-md)` |

---

## 🎨 Color Semantic Tokens

Always use semantic color tokens:

```css
/* Primary Actions */
hsl(var(--primary))              /* Brand color */
hsl(var(--primary-foreground))   /* Text on primary */

/* Status Colors */
hsl(var(--success))              /* Positive actions */
hsl(var(--warning))              /* Caution */
hsl(var(--destructive))          /* Errors, deletion */

/* Neutrals */
hsl(var(--foreground))           /* Primary text */
hsl(var(--muted-foreground))     /* Secondary text */
hsl(var(--border))               /* Borders */

/* Backgrounds */
hsl(var(--background))           /* Page background */
hsl(var(--card))                 /* Card background */
```

With opacity:
```css
hsl(var(--primary) / 0.1)        /* 10% opacity */
hsl(var(--primary) / 0.5)        /* 50% opacity */
```

---

## 📚 Resources

### Internal References
- `design-system.css` - Existing component styles
- `design-system-variables.css` - All design tokens
- `docs/GLASS_MORPHISM_IMPROVEMENTS.md` - Glass effect details

### Inspiration (Adapt, Don't Copy)
- Apple Human Interface Guidelines - Motion design
- iOS Design System - Spring animations
- Glass UI - Transparency effects

---

**Remember:** Rukn is not a clone of any design system. We take inspiration from patterns (Untitled UI's component structure) but implement them with our unique glass morphism aesthetic and Rukn motion design principles. Every component should feel unmistakably "Rukn."

---

**Last Updated:** November 4, 2025  
**Maintained by:** Rukn Design System Team

