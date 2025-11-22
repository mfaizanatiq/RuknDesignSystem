# 🌓 Rukn Theme System Guide

Complete guide to using and customizing Rukn's dark and light themes.

---

## 🎨 Default Theme: Dark

Rukn's dark theme is the **default** and is optimized for:
- ✨ **Glass morphism effects** - Looks stunning with frosted glass
- 🌌 **Premium feel** - Modern, elegant, and professional
- 👁️ **Eye comfort** - Reduced eye strain for long sessions
- 🎯 **High contrast** - Perfect accessibility and readability

---

## 💡 Switching to Light Theme

### Method 1: Remove the `dark` Class

The simplest way to enable light theme:

```html
<!-- Dark theme (default) -->
<html lang="en" class="dark">

<!-- Light theme -->
<html lang="en">
```

### Method 2: JavaScript Toggle

Add a theme toggle button:

```html
<button onclick="document.documentElement.classList.toggle('dark')">
  Toggle Theme
</button>
```

### Method 3: With LocalStorage (Recommended)

Remember user's preference across page loads:

```html
<button onclick="toggleTheme()">Toggle Theme</button>

<script>
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  
  // Save preference
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Load saved preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  }
});
</script>
```

---

## 🎯 Advanced: Theme Toggle Component

Create a beautiful theme toggle with icons:

```html
<!-- In your HTML -->
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
  <i class="ph ph-moon theme-icon-dark" style="display: none;"></i>
  <i class="ph ph-sun theme-icon-light"></i>
</button>

<style>
.theme-toggle {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all var(--r-transition-base) var(--r-ease-ios-standard);
  z-index: 100;
}

.theme-toggle:hover {
  transform: rotate(15deg) scale(1.1);
}
</style>

<script>
function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle('dark');
  
  // Save preference
  const theme = html.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  
  // Update icon
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  const darkIcon = document.querySelector('.theme-icon-dark');
  const lightIcon = document.querySelector('.theme-icon-light');
  
  if (isDark) {
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline-block';
  } else {
    darkIcon.style.display = 'inline-block';
    lightIcon.style.display = 'none';
  }
}

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon();
});
</script>
```

---

## 🌍 Respecting System Preferences

Auto-detect user's system theme preference:

```javascript
// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply on page load (if no saved preference)
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    // Use saved preference
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } else {
    // Use system preference
    if (!prefersDark) {
      document.documentElement.classList.remove('dark');
    }
  }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // Only auto-switch if user hasn't set a preference
  if (!localStorage.getItem('theme')) {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});
```

---

## 🎨 Theme Colors Reference

### Dark Theme (Default)
```css
.dark {
  --background: 220 5% 4%;           /* Deep dark blue-black */
  --foreground: 210 15% 92%;         /* Soft white text */
  --primary: 352 100% 63%;           /* Warm red */
  --accent: 18 100% 63%;             /* Warm orange */
  --card: 220 7% 7%;                 /* Slightly lighter than background */
  --border: 0 0% 100% / 0.06;        /* Subtle borders */
}
```

### Light Theme
```css
:root {
  --background: 220 20% 98%;         /* Soft off-white */
  --foreground: 220 15% 8%;          /* Dark text */
  --primary: 352 95% 58%;            /* Warm red */
  --accent: 18 90% 65%;              /* Warm orange */
  --card: 0 0% 100% / 0.7;           /* Semi-transparent white */
  --border: 220 15% 85% / 0.5;       /* Light gray borders */
}
```

---

## 🎨 Customizing Theme Colors

### Override Specific Colors

Create a custom theme by overriding variables:

```css
/* custom-theme.css */

/* Light theme customization */
:root {
  --primary: 280 100% 60%;    /* Purple primary */
  --accent: 180 80% 50%;      /* Cyan accent */
}

/* Dark theme customization */
.dark {
  --primary: 280 100% 70%;    /* Lighter purple for dark mode */
  --accent: 180 80% 60%;      /* Lighter cyan for dark mode */
  --background: 240 10% 5%;   /* Slightly different dark background */
}
```

Include after Rukn's CSS:
```html
<link rel="stylesheet" href="styles/design-system-variables.css">
<link rel="stylesheet" href="styles/design-system.css">
<link rel="stylesheet" href="custom-theme.css">
```

### Create Multiple Themes

```html
<style>
/* Ocean Theme */
.theme-ocean {
  --primary: 210 100% 50%;    /* Ocean blue */
  --accent: 195 80% 60%;      /* Light cyan */
}

/* Forest Theme */
.theme-forest {
  --primary: 140 60% 45%;     /* Forest green */
  --accent: 80 70% 50%;       /* Lime accent */
}

/* Sunset Theme */
.theme-sunset {
  --primary: 10 90% 55%;      /* Orange-red */
  --accent: 30 100% 60%;      /* Golden yellow */
}
</style>

<script>
function applyTheme(themeName) {
  const html = document.documentElement;
  
  // Remove all theme classes
  html.classList.remove('theme-ocean', 'theme-forest', 'theme-sunset');
  
  // Add selected theme
  if (themeName) {
    html.classList.add(`theme-${themeName}`);
  }
  
  // Save preference
  localStorage.setItem('color-theme', themeName);
}

// Load saved color theme
window.addEventListener('DOMContentLoaded', () => {
  const savedColorTheme = localStorage.getItem('color-theme');
  if (savedColorTheme) {
    applyTheme(savedColorTheme);
  }
});
</script>

<!-- Theme selector -->
<select onchange="applyTheme(this.value)">
  <option value="">Default</option>
  <option value="ocean">Ocean</option>
  <option value="forest">Forest</option>
  <option value="sunset">Sunset</option>
</select>
```

---

## 📱 Framework Integration

### React Theme Toggle

```jsx
import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || 
                       (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button onClick={toggleTheme} className="btn-outline">
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
```

### Vue Theme Toggle

```vue
<template>
  <button @click="toggleTheme" class="btn-outline">
    {{ isDark ? '☀️ Light' : '🌙 Dark' }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDark: true
    }
  },
  mounted() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || 
                       (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    this.isDark = prefersDark;
    this.applyTheme();
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      this.applyTheme();
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
</script>
```

---

## 🎯 Best Practices

1. **Default to Dark** - Rukn's glass morphism looks best in dark mode
2. **Save Preferences** - Always use localStorage to remember user choice
3. **Smooth Transitions** - Add transition effects for theme changes
4. **Test Both Themes** - Ensure your content looks good in both modes
5. **Respect System** - Consider system preference if no saved choice
6. **Accessible Toggle** - Make theme toggle obvious and easy to find

---

## 🌟 Advanced: Animated Theme Transition

Add smooth transitions when switching themes:

```css
* {
  transition: background-color var(--r-transition-base) var(--r-ease-ios-standard),
              color var(--r-transition-base) var(--r-ease-ios-standard),
              border-color var(--r-transition-base) var(--r-ease-ios-standard);
}

/* Disable transitions on first load */
.preload * {
  transition: none !important;
}
```

```javascript
// Prevent transition on page load
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('preload');
  setTimeout(() => {
    document.body.classList.remove('preload');
  }, 100);
});
```

---

## 📚 See Also

- [Integration Guide](./INTEGRATION_GUIDE.md) - How to set up Rukn
- [Quick Start](./QUICK_START.md) - Get started in 60 seconds
- [Foundation](./foundation.html) - View all design tokens live
- [Components](./components.html) - See all components in both themes

---

<div align="center">

**Built with ❤️ for both dark and light mode lovers**

[GitHub](https://github.com/mfaizanatiq/RuknDesignSystem) • [Documentation](./README.md)

</div>

