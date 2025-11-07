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
  }
  
  _getFoundationSidebar() {
    return `
      <div class="sidebar-section">
        <h4 class="sidebar-title">Foundation</h4>
        <ul class="sidebar-nav">
          <li><a href="#colors" class="sidebar-link"><i class="ph-fill ph-palette"></i> Colors</a></li>
          <li><a href="#typography" class="sidebar-link"><i class="ph-fill ph-text-aa"></i> Typography</a></li>
          <li><a href="#spacing" class="sidebar-link"><i class="ph-fill ph-arrows-out-cardinal"></i> Spacing</a></li>
          <li><a href="#sizes" class="sidebar-link"><i class="ph-fill ph-resize"></i> Sizes</a></li>
          <li><a href="#radius" class="sidebar-link"><i class="ph-fill ph-shapes"></i> Border Radius</a></li>
          <li><a href="#surfaces" class="sidebar-link"><i class="ph-fill ph-stack"></i> Surfaces</a></li>
          <li><a href="#shadows" class="sidebar-link"><i class="ph-fill ph-sun-dim"></i> Shadows</a></li>
          <li><a href="#borders" class="sidebar-link"><i class="ph-fill ph-square-half"></i> Border Widths</a></li>
          <li><a href="#motion" class="sidebar-link"><i class="ph-fill ph-pulse"></i> Rukn Motion</a></li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h4 class="sidebar-title">Layouts</h4>
        <ul class="sidebar-nav">
          <li><a href="#container" class="sidebar-link"><i class="ph-fill ph-container"></i> Container</a></li>
          <li><a href="#grid" class="sidebar-link"><i class="ph-fill ph-grid-four"></i> Grid System</a></li>
          <li><a href="#flexbox" class="sidebar-link"><i class="ph-fill ph-arrows-out"></i> Flexbox</a></li>
          <li><a href="#responsive" class="sidebar-link"><i class="ph-fill ph-devices"></i> Responsive</a></li>
        </ul>
      </div>
      
      <div class="sidebar-section" style="border-top: 1px solid hsl(var(--border)); padding-top: var(--space-6);">
        <a href="components.html"><button class="btn-primary btn-sm" style="width: 100%;">
          <i class="ph ph-stack" style="margin-right: 8px;"></i>
          View Components
        </button></a>
        <a href="index.html" style="margin-top: var(--r-space-2); display: block;">
          <button class="btn-outline btn-sm" style="width: 100%;">
            <i class="ph ph-arrow-left" style="margin-right: 8px;"></i>
            Back to Home
          </button>
        </a>
      </div>
    `;
  }
  
  _getComponentsSidebar() {
    return `
      <div class="sidebar-section">
        <h4 class="sidebar-title">UI Components</h4>
        <ul class="sidebar-nav">
          <li><a href="#buttons" class="sidebar-link"><i class="ph-fill ph-cursor-click"></i> Buttons</a></li>
          <li><a href="#inputs" class="sidebar-link"><i class="ph-fill ph-text-box"></i> Inputs</a></li>
          <li><a href="#checkbox" class="sidebar-link"><i class="ph-fill ph-check-square"></i> Checkbox</a></li>
          <li><a href="#radio" class="sidebar-link"><i class="ph-fill ph-radio-button"></i> Radio Group</a></li>
          <li><a href="#switch" class="sidebar-link"><i class="ph-fill ph-toggle-right"></i> Switch</a></li>
          <li><a href="#slider" class="sidebar-link"><i class="ph-fill ph-sliders-horizontal"></i> Slider</a></li>
          <li><a href="#formfield" class="sidebar-link"><i class="ph-fill ph-text-align-left"></i> Form Field</a></li>
          <li><a href="#icon-placeholder" class="sidebar-link"><i class="ph-fill ph-shapes"></i> Icon Placeholders</a></li>
          <li><a href="#card" class="sidebar-link"><i class="ph-fill ph-frame-corners"></i> Card</a></li>
          <li><a href="#badge" class="sidebar-link"><i class="ph-fill ph-tag"></i> Badges</a></li>
          <li><a href="#modal" class="sidebar-link"><i class="ph-fill ph-frame"></i> Modal</a></li>
          <li><a href="#drawer" class="sidebar-link"><i class="ph-fill ph-sidebar"></i> Drawer</a></li>
          <li><a href="#navbar" class="sidebar-link"><i class="ph-fill ph-navigation-arrow"></i> Navbar</a></li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h4 class="sidebar-title">Feedback</h4>
        <ul class="sidebar-nav">
          <li><a href="#tooltip" class="sidebar-link"><i class="ph-fill ph-chat-circle-dots"></i> Tooltip</a></li>
          <li><a href="#alert" class="sidebar-link"><i class="ph-fill ph-warning-circle"></i> Alert</a></li>
          <li><a href="#toast" class="sidebar-link"><i class="ph-fill ph-bell"></i> Toast</a></li>
          <li><a href="#progress" class="sidebar-link"><i class="ph-fill ph-circle-notch"></i> Progress</a></li>
          <li><a href="#spinner" class="sidebar-link"><i class="ph ph-spinner"></i> Spinner</a></li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h4 class="sidebar-title">Effects</h4>
        <ul class="sidebar-nav">
          <li><a href="#glass" class="sidebar-link"><i class="ph-fill ph-sparkle"></i> Glass Morphism</a></li>
        </ul>
      </div>
      
      <div class="sidebar-section" style="border-top: 1px solid hsl(var(--border)); padding-top: var(--space-6);">
        <a href="foundation.html"><button class="btn-outline btn-sm" style="width: 100%;">
          <i class="ph ph-cube" style="margin-right: 8px;"></i>
          View Foundation
        </button></a>
        <a href="index.html" style="margin-top: var(--r-space-2); display: block;">
          <button class="btn-outline btn-sm" style="width: 100%;">
            <i class="ph ph-arrow-left" style="margin-right: 8px;"></i>
            Back to Home
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

