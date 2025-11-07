# 🧪 Testing Guide - Rukn DS v2.0 Web Components

## Quick Test Checklist

### 1. Test Navbar Scroll Behavior

**Open:** `index.html` in your browser

**Steps:**
1. ✅ Page loads with navbar visible at top
2. ✅ Scroll down slowly (past 100px) → Navbar gets shadow
3. ✅ Keep scrolling down (past 150px) → Navbar slides up and hides
4. ✅ Scroll up a little → Navbar immediately slides back down
5. ✅ Scroll to top → Navbar returns to original state

**Expected:**
- Smooth 60fps transitions
- No layout jumps or flickers
- Navbar always accessible when scrolling up

---

### 2. Test Components Page Layout

**Open:** `components.html` in your browser

**Steps:**
1. ✅ Navbar appears with search bar
2. ✅ Sidebar is fixed on left side
3. ✅ Main content has proper margins
4. ✅ Scroll down → Navbar hides
5. ✅ Scroll up → Navbar appears
6. ✅ Try search bar (typing should work)
7. ✅ Click sidebar links → Smooth scroll to sections

**Expected:**
- Sidebar stays in place while scrolling
- No content overlap
- Search bar functional
- All links working

---

### 3. Test Foundation Page

**Open:** `foundation.html` in your browser

**Steps:**
1. ✅ Same navbar + sidebar layout as components page
2. ✅ Check that all design tokens are displayed
3. ✅ Test scroll behavior (same as above)

**Expected:**
- Identical layout to components.html
- All foundation content visible

---

### 4. Test Web Components Demo

**Open:** `web-components-demo.html` in your browser

**Steps:**
1. ✅ All UI components render correctly
2. ✅ Test button variants (primary, secondary, outline, ghost)
3. ✅ Test loading button (spinner appears)
4. ✅ Test badges (different colors)
5. ✅ Test alerts (dismiss functionality)
6. ✅ Test progress bars (animations smooth)
7. ✅ Test spinners (different sizes)

**Expected:**
- All components styled correctly
- Interactive features working
- Glass morphism effects visible
- Smooth animations

---

### 5. Test Mobile Responsive

**Use:** Browser DevTools (F12) → Device Toolbar

**Steps:**
1. ✅ Switch to mobile view (iPhone/Android)
2. ✅ Navbar shows hamburger menu
3. ✅ Click hamburger → Mobile menu drops down
4. ✅ Sidebar hidden by default on mobile
5. ✅ Test scroll behavior on mobile
6. ✅ All buttons and links tappable

**Expected:**
- Clean mobile layout
- No horizontal scrolling
- Touch-friendly elements

---

### 6. Test Performance

**Use:** Browser DevTools → Performance tab

**Steps:**
1. ✅ Record performance while scrolling
2. ✅ Check FPS (should be 60fps)
3. ✅ Check frame time (<16ms)
4. ✅ No layout thrashing
5. ✅ Smooth animations

**Expected:**
- 60fps scrolling
- No dropped frames
- Low CPU usage

---

## Common Issues & Fixes

### Issue: Navbar not hiding on scroll
**Fix:** Ensure you've scrolled past 150px threshold

### Issue: Layout looks broken
**Fix:** Hard refresh browser (Ctrl+F5 / Cmd+Shift+R)

### Issue: Components not rendering
**Fix:** Check browser console for errors
**Fix:** Ensure all .js files are loaded

### Issue: Scroll is janky
**Fix:** Try Chrome/Edge (best performance)
**Fix:** Close other tabs (reduce CPU usage)

---

## Browser Support

### ✅ Fully Supported
- Chrome 67+ (May 2018)
- Firefox 63+ (October 2018)
- Safari 10.1+ (March 2017)
- Edge 79+ (January 2020)

### ⚠️ Partial Support
- IE11 (Requires polyfills, not recommended)

### ❌ Not Supported
- IE10 and below

---

## Test Results Template

```
✅ Navbar scroll behavior working
✅ Layouts respected on all pages
✅ Sidebar fixed positioning correct
✅ All UI components rendering
✅ Mobile responsive working
✅ Performance is 60fps
✅ Search bar functional
✅ Glass morphism effects visible
✅ All animations smooth

Issues found:
- [List any issues here]

Browser tested: Chrome 120
OS: macOS 14
Date: 2025-11-05
```

---

## Need Help?

- Check `docs/WEB_COMPONENTS_LAYOUT.md` for layout details
- Check `docs/WEB_COMPONENTS.md` for component usage
- Check browser console for errors
- Check GitHub Issues for known problems

---

**Happy Testing! 🚀**
