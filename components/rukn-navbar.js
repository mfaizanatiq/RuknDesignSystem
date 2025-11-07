/**
 * Rukn Navbar - Web Component
 * 100% Vanilla JavaScript - No frameworks, no dependencies
 * SEO-Friendly: Uses semantic HTML5 nav element with proper ARIA labels
 * 
 * Usage:
 *   <rukn-navbar current="home"></rukn-navbar>
 *   <rukn-navbar current="components" search></rukn-navbar>
 * 
 * Attributes:
 *   current - Active page (home|foundation|components)
 *   search  - Show search bar (boolean attribute)
 */

class RuknNavbar extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute('current') || '';
    const hasSearch = this.hasAttribute('search');
    
    // SEO: Set semantic role
    this.setAttribute('role', 'navigation');
    this.setAttribute('aria-label', 'Main navigation');
    
    const dropdownId = `navDropdown-${this._uid}`;
    const toggleId = `navToggle-${this._uid}`;

    this.innerHTML = `
      <nav class="ds-navbar ds-navbar-full" id="navbar-${this._uid}" role="navigation" aria-label="Primary">
        <div class="ds-navbar-container" style="gap: var(--r-space-4);">
          <a href="index.html" class="ds-navbar-brand" title="Rukn Design System - Homepage" aria-label="Rukn Design System Home">
            <span class="ds-navbar-logo" aria-hidden="true">◆</span>
            <span>Rukn</span>
          </a>
          
          ${hasSearch ? `
          <div style="flex: 1; max-width: 600px; position: relative;" role="search">
            <label for="navSearch" class="sr-only">Search documentation</label>
            <i class="ph ph-magnifying-glass" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: hsl(var(--foreground) / 0.5); font-size: 16px; pointer-events: none;" aria-hidden="true"></i>
            <input 
              type="search" 
              id="navSearch" 
              name="search"
              class="ds-input" 
              placeholder="Quick search..."
              aria-label="Search documentation"
              style="padding: var(--r-space-2) var(--r-space-3) var(--r-space-2) 40px; font-size: var(--r-font-size-sm); background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); height: 36px;"
            >
          </div>
          ` : ''}
          
          <nav class="ds-navbar-nav" role="navigation" aria-label="Main menu">
            <div class="ds-navbar-menu">
              <a href="index.html" class="btn-ghost btn-sm" ${current === 'home' ? 'aria-current="page"' : ''} title="Home - Rukn Design System">Home</a>
              <a href="foundation.html" class="btn-ghost btn-sm" ${current === 'foundation' ? 'aria-current="page"' : ''} title="Foundation - Design Tokens & System">Foundation</a>
              <a href="components.html" class="btn-ghost btn-sm" ${current === 'components' ? 'aria-current="page"' : ''} title="Components - UI Component Library">Components</a>
              <a href="index.html#pricing" class="btn-ghost btn-sm" title="Pricing - Free & Open Source">Pricing</a>
              <a href="index.html#roadmap" class="btn-ghost btn-sm" title="Roadmap - Future Plans">Roadmap</a>
              <a href="index.html#about" class="btn-ghost btn-sm" title="About - Our Mission">About</a>
              <a href="https://github.com/mfaizanatiq/RuknDesignSystem" class="btn-primary btn-sm" target="_blank" rel="noopener noreferrer" title="View on GitHub - Open Source Repository" aria-label="View Rukn Design System on GitHub">
                <i class="ph ph-github-logo" style="margin-right: 4px;" aria-hidden="true"></i>
                GitHub
              </a>
            </div>
            
            <button class="ds-navbar-hamburger" id="${toggleId}" aria-label="Toggle menu" aria-controls="${dropdownId}" aria-expanded="false" aria-haspopup="true">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </nav>
      
      <div class="ds-navbar-mobile-dropdown" id="${dropdownId}" role="menu" aria-label="Mobile navigation menu" hidden aria-hidden="true">
        <div class="ds-navbar-menu">
          <a href="index.html" class="btn-ghost btn-sm" role="menuitem" ${current === 'home' ? 'aria-current="page"' : ''}><i class="ph ph-house" aria-hidden="true"></i> <span>Home</span></a>
          <a href="foundation.html" class="btn-ghost btn-sm" role="menuitem" ${current === 'foundation' ? 'aria-current="page"' : ''}><i class="ph ph-cube" aria-hidden="true"></i> <span>Foundation</span></a>
          <a href="components.html" class="btn-ghost btn-sm" role="menuitem" ${current === 'components' ? 'aria-current="page"' : ''}><i class="ph ph-stack" aria-hidden="true"></i> <span>Components</span></a>
          <a href="index.html#pricing" class="btn-ghost btn-sm" role="menuitem"><i class="ph ph-currency-dollar" aria-hidden="true"></i> <span>Pricing</span></a>
          <a href="index.html#roadmap" class="btn-ghost btn-sm" role="menuitem"><i class="ph ph-map-trifold" aria-hidden="true"></i> <span>Roadmap</span></a>
          <a href="index.html#about" class="btn-ghost btn-sm" role="menuitem"><i class="ph ph-info" aria-hidden="true"></i> <span>About</span></a>
          <a href="https://github.com/mfaizanatiq/RuknDesignSystem" class="btn-primary btn-sm" target="_blank" rel="noopener noreferrer" role="menuitem" aria-label="View on GitHub">
            <i class="ph-fill ph-github-logo" aria-hidden="true"></i> <span>GitHub</span>
          </a>
        </div>
      </div>
      <div class="ds-navbar-spacer" aria-hidden="true"></div>
    `;
    
    // Initialize mobile menu
    this._initMobileMenu();
    
    // Initialize scroll behavior
    this._initScrollBehavior();
  }
  
  _initMobileMenu() {
    const toggle = this.querySelector(`#navToggle-${this._uid}`);
    const dropdown = this.querySelector(`#navDropdown-${this._uid}`);
    
    if (toggle && dropdown) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        dropdown.classList.toggle('open');
      });
    }
  }
  
  _initScrollBehavior() {
    const navbar = this.querySelector(`#navbar-${this._uid}`);
    if (!navbar) {
      console.warn('Rukn Navbar: Could not find navbar element');
      return;
    }
    
    let ticking = false;
    const scrollThreshold = 50;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Always visible and sticky, just enhance when scrolled
      if (scrollTop > scrollThreshold) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      ticking = false;
    };
    
    // Initial call to set correct state
    handleScroll();
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    this._cleanupScroll = () => {
      window.removeEventListener('scroll', onScroll);
    };
    
    console.log('✅ Rukn Navbar: Sticky scroll behavior initialized');
  }
  
  disconnectedCallback() {
    // Clean up scroll listener when component is removed
    if (this._cleanupScroll) {
      this._cleanupScroll();
    }
  }
  
  // Generate unique ID for this instance
  get _uid() {
    if (!this.__uid) {
      this.__uid = Math.random().toString(36).substr(2, 9);
    }
    return this.__uid;
  }
}

// Register custom element (native browser API)
customElements.define('rukn-navbar', RuknNavbar);

