# Z-Index Hierarchy System

## Overview
A well-defined z-index layering system for the Rukn Design System that ensures proper stacking order of UI components, with modals and overlays appearing above the navbar.

## 🎯 Problem Solved
Previously, the navbar had z-index: 9999, which was too close to modal overlays (10000). This created potential layering conflicts and made the system hard to maintain. The new system provides clear separation between layers.

## 📊 Layer System

### Visual Hierarchy (Bottom to Top)

```
┌─────────────────────────────────────────┐
│  7000-7999: Loading Overlays, Spinners  │ ← Highest (Blocks everything)
├─────────────────────────────────────────┤
│  6000-6999: Toasts, Notifications       │
├─────────────────────────────────────────┤
│  5000-5999: Tooltips, Popovers          │
├─────────────────────────────────────────┤
│  4000-4999: Modals, Dialogs             │ ← Above Navbar
├─────────────────────────────────────────┤
│  3000-3999: Drawers, Side Panels        │ ← Above Navbar
├─────────────────────────────────────────┤
│  2000-2999: Navbar, Sticky Headers      │ ← Navbar Layer
├─────────────────────────────────────────┤
│  1000-1999: Dropdowns, Mobile Menu      │
├─────────────────────────────────────────┤
│  0-999: Base Content                    │ ← Lowest
└─────────────────────────────────────────┘
```

## 🎨 CSS Variables

### Available Z-Index Tokens

```css
:root {
  --z-dropdown: 1000;    /* Dropdowns, popovers, mobile menu */
  --z-navbar: 2000;      /* Sticky navigation, headers */
  --z-drawer: 3000;      /* Drawers, side panels */
  --z-modal: 4000;       /* Modals, dialogs */
  --z-tooltip: 5000;     /* Tooltips, floating help */
  --z-toast: 6000;       /* Toasts, notifications */
  --z-spinner: 7000;     /* Loading overlays */
}
```

### Usage in Components

```css
/* Using CSS variables */
.my-modal {
  z-index: var(--z-modal);
}

/* Direct value (for specific offsets) */
.my-modal-overlay {
  z-index: 4000;
}

.my-modal-content {
  z-index: 4001;
}
```

## 📋 Component Z-Index Reference

| Component | Z-Index | CSS Variable | Notes |
|-----------|---------|--------------|-------|
| **Navbar** | 2000 | `--z-navbar` | Sticky top navigation |
| **Mobile Dropdown** | 1999 | - | Just below navbar |
| **Drawer Overlay** | 3000 | `--z-drawer` | Above navbar |
| **Drawer Content** | 3001 | - | Above overlay |
| **Modal Overlay** | 4000 | `--z-modal` | Above navbar & drawers |
| **Modal Content** | 4001 | - | Above overlay |
| **Tooltip** | 5000 | `--z-tooltip` | Above modals |
| **Toast Container** | 6000 | `--z-toast` | Above tooltips |
| **Spinner Overlay** | 7000 | `--z-spinner` | Highest layer |

## 🔧 Implementation Details

### Before (Old System)
```css
/* Problems with old approach */
.ds-navbar { z-index: 9999; }        /* Too high! */
.ds-modal-overlay { z-index: 10000; } /* Only 1 step above navbar */
.ds-drawer-overlay { z-index: 9000; } /* Below navbar - wrong! */
```

### After (New System)
```css
/* Clean, organized hierarchy with enforced precedence */
.ds-navbar { 
  position: fixed !important; 
  z-index: 2000 !important; 
}
.ds-modal-overlay { 
  position: fixed !important;
  z-index: 4000 !important;  /* 2000 steps above navbar */
}
.ds-drawer-overlay { 
  position: fixed !important;
  z-index: 3000 !important;  /* Above navbar, below modals */
}
```

**Note:** All z-index values use `!important` to ensure the hierarchy is enforced regardless of CSS specificity conflicts.

## ✅ Expected Behavior

### ✓ Correct Layering
- ✅ **Modals appear above navbar** (4000 > 2000)
- ✅ **Drawers appear above navbar** (3000 > 2000)
- ✅ **Tooltips appear above modals** (5000 > 4000)
- ✅ **Toasts appear above everything except spinners** (6000)
- ✅ **Loading spinners block all interaction** (7000)
- ✅ **Navbar stays above page content** (2000 > 0-999)
- ✅ **Mobile menu appears in dropdown layer** (1999)

### ✓ Interaction Flows

**Opening a Modal:**
1. User clicks navbar button
2. Modal overlay appears (z-index: 4000)
3. Modal content appears (z-index: 4001)
4. Navbar still visible but behind modal overlay ✓

**Opening a Drawer:**
1. User triggers drawer
2. Drawer overlay appears (z-index: 3000)
3. Drawer content slides in (z-index: 3001)
4. Navbar behind drawer overlay ✓

**Showing a Toast:**
1. Action completes
2. Toast appears (z-index: 6000)
3. Toast visible above all other UI including open modals ✓

## 🧪 Testing

### Test File
Open `z-index-test.html` to verify the hierarchy:

```bash
# Open in browser
open z-index-test.html
```

### Manual Testing Steps

1. **Navbar vs Modal Test**
   - Open the test page
   - Click "Open Modal" button
   - ✅ Modal should appear fully above navbar
   - ❌ If navbar appears through modal = FAIL

2. **Navbar vs Drawer Test**
   - Click "Open Drawer" button
   - ✅ Drawer should appear above navbar
   - ❌ If navbar blocks drawer = FAIL

3. **Toast Visibility Test**
   - Open a modal
   - Click "Show Toast" button
   - ✅ Toast should appear above modal
   - ❌ If toast hidden by modal = FAIL

4. **Spinner Test**
   - Open modal and drawer
   - Click "Show Spinner" button
   - ✅ Spinner should block all UI
   - ❌ If spinner behind other elements = FAIL

### DevTools Inspection

```javascript
// Check z-index in browser console
const navbar = document.querySelector('.ds-navbar');
const modal = document.querySelector('.ds-modal-overlay');

console.log('Navbar z-index:', getComputedStyle(navbar).zIndex);
// Expected: "2000"

console.log('Modal z-index:', getComputedStyle(modal).zIndex);
// Expected: "4000"
```

## 📁 Files Modified

### CSS Variables
**File:** `styles/design-system-variables.css`
- Added z-index CSS custom properties
- Lines: 418-428

```css
--z-dropdown: 1000;
--z-navbar: 2000;
--z-drawer: 3000;
--z-modal: 4000;
--z-tooltip: 5000;
--z-toast: 6000;
--z-spinner: 7000;
```

### Component Styles
**File:** `styles/design-system.css`

**Changes:**
1. Added z-index hierarchy documentation (lines 1416-1429)
2. Updated navbar: 9999 → 2000
3. Updated navbar dropdown: 9998 → 1999
4. Updated modal overlay: 10000 → 4000
5. Updated modal content: 10001 → 4001
6. Updated drawer overlay: 9000 → 3000
7. Updated drawer content: 9001 → 3001
8. Updated tooltip: 10000 → 5000
9. Updated toast: 10002 → 6000
10. Updated spinner: 10000 → 7000

## 🎯 Best Practices

### When to Use Each Layer

**Dropdown Layer (1000-1999)**
- Dropdown menus
- Select options
- Autocomplete suggestions
- Mobile navigation menu
- Context menus

**Navbar Layer (2000-2999)**
- Main navigation bar
- Sticky headers
- Fixed app bars
- Persistent UI chrome

**Drawer Layer (3000-3999)**
- Side navigation drawers
- Bottom sheets
- Slide-out panels
- Settings panels

**Modal Layer (4000-4999)**
- Dialog boxes
- Confirmation modals
- Lightboxes
- Alerts/Confirms
- Form dialogs

**Tooltip Layer (5000-5999)**
- Tooltips
- Floating help text
- Inline popovers
- Contextual hints

**Toast Layer (6000-6999)**
- Success messages
- Error notifications
- Info alerts
- Temporary feedback

**Spinner Layer (7000-7999)**
- Full-page loading states
- Blocking operations
- Critical overlays
- "Processing" states

### Custom Z-Index Values

If you need custom z-index values, follow this pattern:

```css
/* Good: Within the layer range */
.my-custom-dropdown {
  z-index: 1500; /* Within dropdown layer 1000-1999 */
}

/* Good: Using variable with offset */
.my-special-modal {
  z-index: calc(var(--z-modal) + 10);
}

/* Bad: Random high number */
.my-element {
  z-index: 99999; /* Don't do this! */
}
```

## 🚀 Migration Guide

### Updating Existing Components

If you have custom components using old z-index values:

**Before:**
```css
.my-overlay {
  z-index: 9999;
}
```

**After:**
```css
.my-overlay {
  /* Determine correct layer */
  z-index: var(--z-modal); /* If it's a modal */
  /* or */
  z-index: var(--z-drawer); /* If it's a drawer */
}
```

### Decision Tree

```
Is it a modal/dialog? → use --z-modal (4000)
Is it a drawer/panel? → use --z-drawer (3000)
Is it a tooltip? → use --z-tooltip (5000)
Is it a toast/notification? → use --z-toast (6000)
Is it a loading overlay? → use --z-spinner (7000)
Is it the navbar? → use --z-navbar (2000)
Is it a dropdown? → use --z-dropdown (1000)
```

## 📊 Browser Compatibility

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ CSS custom properties fully supported
- ✅ No JavaScript dependencies
- ✅ Works with CSS-in-JS solutions
- ✅ Compatible with utility frameworks (Tailwind, etc.)

## 🔗 Related Documentation

- [Mobile Navbar Improvements](./MOBILE_NAVBAR_IMPROVEMENTS.md)
- [Component Architecture](./COMPONENT_ARCHITECTURE.md)
- [Design System Docs](./DESIGN_SYSTEM_DOCS.md)
- [Rukn Design Language](./RUKN_DESIGN_LANGUAGE.md)

## 💡 Troubleshooting

### Issue: Modal appears behind navbar

**Cause:** Modal using old z-index or no z-index  
**Fix:** Apply `z-index: var(--z-modal)` or `z-index: 4000`

### Issue: Tooltip hidden by modal

**Cause:** Tooltip z-index too low  
**Fix:** Ensure tooltip uses `z-index: var(--z-tooltip)` (5000)

### Issue: Toast not visible

**Cause:** Toast container z-index insufficient  
**Fix:** Apply `z-index: var(--z-toast)` (6000)

### Issue: Custom component layering wrong

**Cause:** Using arbitrary z-index value  
**Fix:** Use appropriate CSS variable from the system

---

**Version:** 2.1.0  
**Last Updated:** November 6, 2025  
**Status:** ✅ Complete & Production Ready

