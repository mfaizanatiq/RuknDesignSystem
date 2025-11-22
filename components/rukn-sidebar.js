/**
 * Rukn Sidebar - Web Component
 * 100% Vanilla JavaScript - No frameworks
 * 
 * Usage:
 *   <rukn-sidebar type="foundation"></rukn-sidebar>
 *   <rukn-sidebar type="components"></rukn-sidebar>
 * 
 * Attributes:
 *   type - Sidebar type (foundation|components)
 */

class RuknSidebar extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type') || 'components';
    
    // Create elements that will be inserted as siblings (not children)
    const backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    backdrop.id = `sidebarBackdrop-${this._uid}`;
    
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.id = `sidebar-${this._uid}`;
    sidebar.setAttribute('role', 'navigation');
    sidebar.setAttribute('aria-label', type === 'foundation' ? 'Foundation Navigation' : 'Components Navigation');
    sidebar.innerHTML = type === 'foundation' ? this._getFoundationSidebar() : this._getComponentsSidebar();
    
    const toggle = document.createElement('button');
    toggle.className = 'sidebar-toggle';
    toggle.id = `sidebarToggle-${this._uid}`;
    toggle.setAttribute('data-i18n-aria-label', 'sidebar.toggle');
    toggle.setAttribute('aria-label', 'Toggle sidebar');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<i class="ph-bold ph-list" style="font-size: 24px;"></i>';
    
    // Insert elements as siblings to this component (not children)
    const parent = this.parentNode;
    if (parent) {
      parent.insertBefore(backdrop, this);
      parent.insertBefore(sidebar, this);
      parent.insertBefore(toggle, this);
    }
    
    // Store references for cleanup
    this._backdrop = backdrop;
    this._sidebar = sidebar;
    this._toggle = toggle;
    
    this._initSidebar();
    this._applyTranslations();
    
    // Listen for language changes
    document.addEventListener('rukn:languagechange', () => {
      this._applyTranslations();
    });
  }
  
  _applyTranslations() {
    const lang = document.documentElement.lang || 'en';
    const translations = (typeof window !== 'undefined' && window.ruknTranslations) ? window.ruknTranslations : {};
    const fallback = translations.en || {};
    const current = translations[lang] || fallback;
    
    if (this._sidebar) {
      this._sidebar.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        const value = current[key] ?? fallback[key];
        if (value !== undefined) {
          el.textContent = value;
        }
      });
    }
    
    if (this._toggle) {
      this._toggle.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (!key) return;
        const value = current[key] ?? fallback[key];
        if (value !== undefined) {
          el.setAttribute('aria-label', value);
        }
      });
    }
  }
  
  _getFoundationSidebar() {
    return `
      <div class="sidebar-section">
        <h4 class="sidebar-title" data-i18n="sidebar.foundation.title">Foundation</h4>
        <ul class="sidebar-nav">
          <li><a href="#colors" class="sidebar-link"><i class="ph-fill ph-palette"></i> <span data-i18n="sidebar.foundation.colors">Colors</span></a></li>
          <li><a href="#typography" class="sidebar-link"><i class="ph-fill ph-text-aa"></i> <span data-i18n="sidebar.foundation.typography">Typography</span></a></li>
          <li><a href="#spacing" class="sidebar-link"><i class="ph-fill ph-arrows-out-cardinal"></i> <span data-i18n="sidebar.foundation.spacing">Spacing</span></a></li>
          <li><a href="#sizes" class="sidebar-link"><i class="ph-fill ph-resize"></i> <span data-i18n="sidebar.foundation.sizes">Sizes</span></a></li>
          <li><a href="#radius" class="sidebar-link"><i class="ph-fill ph-shapes"></i> <span data-i18n="sidebar.foundation.radius">Border Radius</span></a></li>
          <li><a href="#surfaces" class="sidebar-link"><i class="ph-fill ph-stack"></i> <span data-i18n="sidebar.foundation.surfaces">Surfaces</span></a></li>
          <li><a href="#shadows" class="sidebar-link"><i class="ph-fill ph-sun-dim"></i> <span data-i18n="sidebar.foundation.shadows">Shadows</span></a></li>
          <li><a href="#borders" class="sidebar-link"><i class="ph-fill ph-square-half"></i> <span data-i18n="sidebar.foundation.borders">Border Widths</span></a></li>
          <li><a href="#motion" class="sidebar-link"><i class="ph-fill ph-pulse"></i> <span data-i18n="sidebar.foundation.motion">Rukn Motion</span></a></li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h4 class="sidebar-title" data-i18n="sidebar.foundation.layouts">Layouts</h4>
        <ul class="sidebar-nav">
          <li><a href="#container" class="sidebar-link"><i class="ph-fill ph-container"></i> <span data-i18n="sidebar.foundation.container">Container</span></a></li>
          <li><a href="#grid" class="sidebar-link"><i class="ph-fill ph-grid-four"></i> <span data-i18n="sidebar.foundation.grid">Grid System</span></a></li>
          <li><a href="#flexbox" class="sidebar-link"><i class="ph-fill ph-arrows-out"></i> <span data-i18n="sidebar.foundation.flexbox">Flexbox</span></a></li>
          <li><a href="#responsive" class="sidebar-link"><i class="ph-fill ph-devices"></i> <span data-i18n="sidebar.foundation.responsive">Responsive</span></a></li>
        </ul>
      </div>
      
      <div class="sidebar-section" style="border-top: 1px solid hsl(var(--border)); padding-top: var(--space-6);">
        <a href="components.html"><button class="btn-primary btn-sm" style="width: 100%;">
          <i class="ph ph-stack" style="margin-right: 8px;"></i>
          <span data-i18n="sidebar.foundation.viewComponents">View Components</span>
        </button></a>
        <a href="index.html" style="margin-top: var(--r-space-2); display: block;">
          <button class="btn-outline btn-sm" style="width: 100%;">
            <i class="ph ph-arrow-left" style="margin-right: 8px;"></i>
            <span data-i18n="sidebar.foundation.backHome">Back to Home</span>
          </button>
        </a>
      </div>
    `;
  }
  
  _getComponentsSidebar() {
    return `
      <div class="sidebar-section">
        <h4 class="sidebar-title" data-i18n="sidebar.components.title">UI Components</h4>
        <ul class="sidebar-nav">
          <li><a href="#buttons" class="sidebar-link"><i class="ph-fill ph-cursor-click"></i> <span data-i18n="sidebar.components.buttons">Buttons</span></a></li>
          <li><a href="#inputs" class="sidebar-link"><i class="ph-fill ph-text-box"></i> <span data-i18n="sidebar.components.inputs">Inputs</span></a></li>
          <li><a href="#checkbox" class="sidebar-link"><i class="ph-fill ph-check-square"></i> <span data-i18n="sidebar.components.checkbox">Checkbox</span></a></li>
          <li><a href="#radio" class="sidebar-link"><i class="ph-fill ph-radio-button"></i> <span data-i18n="sidebar.components.radio">Radio Group</span></a></li>
          <li><a href="#switch" class="sidebar-link"><i class="ph-fill ph-toggle-right"></i> <span data-i18n="sidebar.components.switch">Switch</span></a></li>
          <li><a href="#slider" class="sidebar-link"><i class="ph-fill ph-sliders-horizontal"></i> <span data-i18n="sidebar.components.slider">Slider</span></a></li>
          <li><a href="#formfield" class="sidebar-link"><i class="ph-fill ph-text-align-left"></i> <span data-i18n="sidebar.components.formfield">Form Field</span></a></li>
          <li><a href="#icon-placeholder" class="sidebar-link"><i class="ph-fill ph-shapes"></i> <span data-i18n="sidebar.components.iconPlaceholder">Icon Placeholders</span></a></li>
          <li><a href="#card" class="sidebar-link"><i class="ph-fill ph-frame-corners"></i> <span data-i18n="sidebar.components.card">Card</span></a></li>
          <li><a href="#badge" class="sidebar-link"><i class="ph-fill ph-tag"></i> <span data-i18n="sidebar.components.badge">Badges</span></a></li>
          <li><a href="#modal" class="sidebar-link"><i class="ph-fill ph-frame"></i> <span data-i18n="sidebar.components.modal">Modal</span></a></li>
          <li><a href="#drawer" class="sidebar-link"><i class="ph-fill ph-sidebar"></i> <span data-i18n="sidebar.components.drawer">Drawer</span></a></li>
          <li><a href="#navbar" class="sidebar-link"><i class="ph-fill ph-navigation-arrow"></i> <span data-i18n="sidebar.components.navbar">Navbar</span></a></li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h4 class="sidebar-title" data-i18n="sidebar.components.feedback">Feedback</h4>
        <ul class="sidebar-nav">
          <li><a href="#tooltip" class="sidebar-link"><i class="ph-fill ph-chat-circle-dots"></i> <span data-i18n="sidebar.components.tooltip">Tooltip</span></a></li>
          <li><a href="#alert" class="sidebar-link"><i class="ph-fill ph-warning-circle"></i> <span data-i18n="sidebar.components.alert">Alert</span></a></li>
          <li><a href="#toast" class="sidebar-link"><i class="ph-fill ph-bell"></i> <span data-i18n="sidebar.components.toast">Toast</span></a></li>
          <li><a href="#progress" class="sidebar-link"><i class="ph-fill ph-circle-notch"></i> <span data-i18n="sidebar.components.progress">Progress</span></a></li>
          <li><a href="#spinner" class="sidebar-link"><i class="ph ph-spinner"></i> <span data-i18n="sidebar.components.spinner">Spinner</span></a></li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h4 class="sidebar-title" data-i18n="sidebar.components.effects">Effects</h4>
        <ul class="sidebar-nav">
          <li><a href="#glass" class="sidebar-link"><i class="ph-fill ph-sparkle"></i> <span data-i18n="sidebar.components.glass">Glass Morphism</span></a></li>
        </ul>
      </div>
      
      <div class="sidebar-section" style="border-top: 1px solid hsl(var(--border)); padding-top: var(--space-6);">
        <a href="foundation.html"><button class="btn-outline btn-sm" style="width: 100%;">
          <i class="ph ph-cube" style="margin-right: 8px;"></i>
          <span data-i18n="sidebar.components.viewFoundation">View Foundation</span>
        </button></a>
        <a href="index.html" style="margin-top: var(--r-space-2); display: block;">
          <button class="btn-outline btn-sm" style="width: 100%;">
            <i class="ph ph-arrow-left" style="margin-right: 8px;"></i>
            <span data-i18n="sidebar.components.backHome">Back to Home</span>
          </button>
        </a>
      </div>
    `;
  }
  
  _initSidebar() {
    const sidebar = this._sidebar;
    const backdrop = this._backdrop;
    const toggle = this._toggle;
    
    if (!sidebar || !toggle) return;
    
    // Toggle sidebar
    toggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('open');
      backdrop?.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close on backdrop click
    backdrop?.addEventListener('click', () => {
      sidebar.classList.remove('open');
      backdrop.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Active state based on scroll
    this._updateActiveNav();
    this._scrollHandler = () => this._updateActiveNav();
    window.addEventListener('scroll', this._scrollHandler, { passive: true });
  }
  
  disconnectedCallback() {
    // Cleanup when component is removed
    if (this._scrollHandler) {
      window.removeEventListener('scroll', this._scrollHandler);
    }
    
    // Remove inserted elements
    if (this._backdrop && this._backdrop.parentNode) {
      this._backdrop.parentNode.removeChild(this._backdrop);
    }
    if (this._sidebar && this._sidebar.parentNode) {
      this._sidebar.parentNode.removeChild(this._sidebar);
    }
    if (this._toggle && this._toggle.parentNode) {
      this._toggle.parentNode.removeChild(this._toggle);
    }
  }
  
  _updateActiveNav() {
    if (!this._sidebar) return;
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = this._sidebar.querySelectorAll('.sidebar-link');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const isActive = link.getAttribute('href') === `#${current}`;
      if (isActive) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
  
  get _uid() {
    if (!this.__uid) {
      this.__uid = Math.random().toString(36).substr(2, 9);
    }
    return this.__uid;
  }
}

customElements.define('rukn-sidebar', RuknSidebar);

