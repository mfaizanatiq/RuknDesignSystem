# Ethereal Background Effects

**Feature:** Soft light refraction backgrounds  
**Style:** Ambient atmospheric lighting  
**Implementation:** CSS animations with radial gradients

---

## 🎨 Design Concept

Ethereal backgrounds simulate **soft light passing through glass prisms**, creating an immersive, atmospheric environment that complements Rukn's glass morphism aesthetic.

### Key Principles:
1. **Subtle, Not Distracting** - Low opacity (0.3-0.7)
2. **Smooth Movement** - Slow animations (25-45 seconds)
3. **Primary Colors** - Uses design tokens (--primary, --accent)
4. **Heavy Blur** - 60-100px blur for soft diffusion
5. **Layered** - Multiple radial gradients for depth

---

## 🌟 Background Variations by Page

### 1. **index.html** - Most Dramatic
**Animation:** `ambientShift` (45s) + `ambientPulse` (25s)  
**Colors:** Primary + Accent  
**Blur:** 80px + 100px (dual layer)  
**Effect:** Rotating, pulsing ambient light

**Code:**
```css
body::before {
  background: 
    radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.12) 0%, transparent 40%),
    radial-gradient(circle at 70% 40%, hsl(var(--accent) / 0.10) 0%, transparent 45%),
    radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.08) 0%, transparent 35%),
    radial-gradient(circle at 85% 75%, hsl(var(--accent) / 0.09) 0%, transparent 38%);
  animation: ambientShift 45s ease-in-out infinite;
  filter: blur(80px);
  opacity: 0.7;
}

body::after {
  background: radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.03) 0%, transparent 70%);
  animation: ambientPulse 25s ease-in-out infinite alternate;
  filter: blur(100px);
}
```

---

### 2. **components.html** - Subtle & Professional
**Animation:** `subtleFloat` (40s)  
**Colors:** Primary + Accent  
**Blur:** 70px  
**Effect:** Gentle floating light

**Code:**
```css
body::before {
  background: 
    radial-gradient(circle at 15% 25%, hsl(var(--primary) / 0.08) 0%, transparent 50%),
    radial-gradient(circle at 85% 15%, hsl(var(--accent) / 0.06) 0%, transparent 45%),
    radial-gradient(circle at 50% 90%, hsl(var(--primary) / 0.05) 0%, transparent 40%);
  animation: subtleFloat 40s ease-in-out infinite;
  filter: blur(70px);
  opacity: 0.5;
}
```

---

### 3. **foundation.html** - Prismatic Rainbow
**Animation:** `prismaticShift` (35s)  
**Colors:** Primary + Accent + Success + Warning  
**Blur:** 65px  
**Effect:** Multi-color prismatic refraction

**Code:**
```css
body::before {
  background: 
    radial-gradient(circle at 25% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 30%, hsl(var(--accent) / 0.08) 0%, transparent 45%),
    radial-gradient(circle at 50% 85%, hsl(var(--success) / 0.06) 0%, transparent 40%),
    radial-gradient(circle at 10% 60%, hsl(var(--warning) / 0.04) 0%, transparent 35%);
  animation: prismaticShift 35s ease-in-out infinite;
  filter: blur(65px);
  opacity: 0.6;
}
```

---

## 🎬 Animations

### ambientShift (Landing Page)
**Duration:** 45 seconds  
**Movement:** Translates + rotates slowly  
**Opacity:** Varies 0.4 - 0.7

```css
@keyframes ambientShift {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.7;
  }
  25% {
    transform: translate(3%, 4%) rotate(90deg);
    opacity: 0.5;
  }
  50% {
    transform: translate(-2%, 6%) rotate(180deg);
    opacity: 0.6;
  }
  75% {
    transform: translate(5%, -3%) rotate(270deg);
    opacity: 0.4;
  }
}
```

---

### subtleFloat (Components Page)
**Duration:** 40 seconds  
**Movement:** Gentle translate + scale  
**Opacity:** Varies 0.5 - 0.7

```css
@keyframes subtleFloat {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(3%, 3%) scale(1.05);
    opacity: 0.7;
  }
}
```

---

### prismaticShift (Foundation Page)
**Duration:** 35 seconds  
**Movement:** Translates + rotates with color shift  
**Opacity:** Varies 0.4 - 0.6

```css
@keyframes prismaticShift {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.6;
  }
  33% {
    transform: translate(4%, -3%) rotate(120deg);
    opacity: 0.4;
  }
  66% {
    transform: translate(-3%, 4%) rotate(240deg);
    opacity: 0.5;
  }
}
```

---

## 🎨 Visual Effect

### What Users See:
1. **Soft colored light** moving slowly in the background
2. **Primary blue** and **purple accent** colors diffused
3. **Glass elements** appear to sit in front of light
4. **Depth perception** - light behind glass creates realism
5. **Calm atmosphere** - slow, meditative movement

### Technical Details:
- **Fixed position** - Stays in place during scroll
- **Pointer-events: none** - Doesn't interfere with interactions
- **Z-index: 0** - Always behind content
- **Heavy blur** - Creates soft, diffused light
- **Low opacity** - Subtle, not overwhelming

---

## ♿ Accessibility

### Reduced Motion Support
Add to CSS:

```css
@media (prefers-reduced-motion: reduce) {
  body::before,
  body::after {
    animation: none !important;
    opacity: 0.3;
  }
}
```

**Note:** Consider adding this for users who prefer less motion.

---

## 🎯 Color Customization

### Change Background Colors:
Simply update design tokens:

```css
:root {
  --primary: 210 100% 50%;   /* Blue light */
  --accent: 280 100% 60%;    /* Purple light */
  --success: 142 76% 36%;    /* Green light (foundation.html) */
  --warning: 38 92% 50%;     /* Yellow light (foundation.html) */
}
```

The ethereal backgrounds automatically adapt!

---

## 💡 Usage Tips

### Best Practices:
1. **Keep opacity low** (0.3-0.7) for readability
2. **Use heavy blur** (60-100px) for soft diffusion
3. **Slow animations** (25-45s) for calm effect
4. **Multiple layers** for depth and richness
5. **Primary colors** for brand consistency

### What to Avoid:
- ❌ High opacity (>0.8) - too distracting
- ❌ Fast animations (<15s) - too jarring
- ❌ Sharp gradients - defeats the "ethereal" feel
- ❌ Too many colors - creates visual noise
- ❌ Small blur (<40px) - looks harsh

---

## 🌈 Effect Description

### Simulates:
- Soft studio lighting
- Light through frosted glass
- Atmospheric depth
- Environmental ambience
- Prismatic color diffusion

### Enhances:
- Glass morphism components
- Overall aesthetic cohesion
- Premium feel
- Brand identity
- User immersion

---

## 🔧 Performance

### Optimization:
- ✅ Uses `::before` and `::after` pseudo-elements (no extra DOM)
- ✅ Fixed positioning (no repaints on scroll)
- ✅ CSS-only (no JavaScript)
- ✅ GPU-accelerated (transform, filter)
- ✅ Minimal performance impact

### Browser Support:
- ✅ Chrome/Edge 88+ (full support)
- ✅ Firefox 85+ (full support)
- ✅ Safari 14+ (full support)
- ✅ Mobile browsers (optimized)

---

## 📝 Implementation Checklist

- [x] Landing page (index.html) - Dual-layer ambient
- [x] Components page (components.html) - Subtle float
- [x] Foundation page (foundation.html) - Prismatic multi-color
- [x] Z-index management (content above background)
- [x] Pointer-events: none (no interaction blocking)
- [x] Slow, smooth animations (25-45s)
- [x] Uses design tokens for colors
- [ ] Optional: Add reduced-motion support

---

## 🎭 Visual Identity

The ethereal backgrounds are now part of Rukn's visual identity:

**Rukn = Glass Morphism + Soft Light Refraction**

Like looking at a beautiful app through frosted glass with soft studio lighting behind it. Premium, calming, immersive.

---

**Last Updated:** November 5, 2025  
**Status:** ✅ Implemented across all pages  
**Impact:** Significantly enhances the glass morphism aesthetic






