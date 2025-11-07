/**
 * Rukn UI - Complete Web Component Library
 * 100% Vanilla JavaScript - Zero Dependencies
 * 
 * Size: ~15KB minified, ~5KB gzipped
 * Browser Support: Chrome 67+, Firefox 63+, Safari 10.1+, Edge 79+
 * 
 * Usage:
 *   <script src="components/rukn-ui.js" type="module"></script>
 *   
 *   <!-- Then use components -->
 *   <rukn-button variant="primary">Click Me</rukn-button>
 *   <rukn-card>
 *     <h3>Card Title</h3>
 *     <p>Card content</p>
 *   </rukn-card>
 * 
 * Works in: Vanilla HTML, React, Vue, Angular, Svelte, and any framework
 * 
 * NOTE: Layout components (navbar, sidebar, footer) are separate files.
 * Import them individually if needed:
 *   <script src="components/rukn-navbar.js"></script>
 *   <script src="components/rukn-sidebar.js"></script>
 *   <script src="components/rukn-footer.js"></script>
 */

/* ========================================
   BUTTON COMPONENT
   ======================================== */

class RuknButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'loading'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'md';
    const disabled = this.hasAttribute('disabled');
    const loading = this.hasAttribute('loading');
    const icon = this.getAttribute('icon');
    
    const classes = [
      `btn-${variant}`,
      `btn-${size}`,
      loading ? 'btn-loading' : ''
    ].filter(Boolean).join(' ');
    
    this.innerHTML = `
      <button class="${classes}" ${disabled ? 'disabled' : ''}>
        ${icon ? `<i class="${icon}" style="margin-right: 8px;"></i>` : ''}
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('rukn-button', RuknButton);

/* ========================================
   BADGE COMPONENT
   ======================================== */

class RuknBadge extends HTMLElement {
  static get observedAttributes() {
    return ['variant'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    const variant = this.getAttribute('variant') || 'neutral';
    
    this.innerHTML = `
      <span class="ds-badge ds-badge-${variant}">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('rukn-badge', RuknBadge);

/* ========================================
   CARD COMPONENT
   ======================================== */

class RuknCard extends HTMLElement {
  connectedCallback() {
    const glass = this.hasAttribute('glass');
    const className = glass ? 'ds-glass' : 'ds-card';
    
    this.innerHTML = `
      <div class="${className}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('rukn-card', RuknCard);

/* ========================================
   ALERT COMPONENT
   ======================================== */

class RuknAlert extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'dismissible'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    const variant = this.getAttribute('variant') || 'info';
    const title = this.getAttribute('title') || '';
    const dismissible = this.hasAttribute('dismissible');
    
    const icons = {
      info: 'ℹ',
      success: '✓',
      warning: '⚠',
      error: '✕',
      destructive: '✕'
    };
    
    this.innerHTML = `
      <div class="ds-alert ds-alert-${variant}">
        <div class="ds-alert-icon">${icons[variant]}</div>
        <div class="ds-alert-content">
          ${title ? `<div class="ds-alert-title">${title}</div>` : ''}
          <div class="ds-alert-description">
            <slot></slot>
          </div>
        </div>
        ${dismissible ? '<button class="ds-alert-close">✕</button>' : ''}
      </div>
    `;
    
    if (dismissible) {
      const closeBtn = this.querySelector('.ds-alert-close');
      closeBtn?.addEventListener('click', () => {
        this.style.animation = 'ds-fade-in 0.2s ease-out reverse';
        setTimeout(() => this.remove(), 200);
      });
    }
  }
}

customElements.define('rukn-alert', RuknAlert);

/* ========================================
   SPINNER COMPONENT
   ======================================== */

class RuknSpinner extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'variant'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    const size = this.getAttribute('size') || '';
    const variant = this.getAttribute('variant') || 'primary';
    
    const classes = [
      'ds-spinner',
      size ? `ds-spinner-${size}` : '',
      variant !== 'primary' ? `ds-spinner-${variant}` : ''
    ].filter(Boolean).join(' ');
    
    this.innerHTML = `<div class="${classes}"></div>`;
  }
}

customElements.define('rukn-spinner', RuknSpinner);

/* ========================================
   PROGRESS COMPONENT
   ======================================== */

class RuknProgress extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'variant', 'indeterminate'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    const value = parseInt(this.getAttribute('value') || '0');
    const variant = this.getAttribute('variant') || '';
    const indeterminate = this.hasAttribute('indeterminate');
    
    const classes = [
      'ds-progress',
      variant ? `ds-progress-${variant}` : '',
      indeterminate ? 'ds-progress-indeterminate' : ''
    ].filter(Boolean).join(' ');
    
    this.innerHTML = `
      <div class="${classes}">
        <div class="ds-progress-bar" style="width: ${indeterminate ? '40%' : value + '%'}"></div>
      </div>
    `;
  }
  
  // Helper method to update progress
  setValue(value) {
    this.setAttribute('value', value);
  }
}

customElements.define('rukn-progress', RuknProgress);

/* ========================================
   MODAL COMPONENT
   ======================================== */

class RuknModal extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('modal-id') || 'modal';
    const title = this.getAttribute('title') || '';
    
    this.innerHTML = `
      <div class="ds-modal-overlay" id="${id}-overlay" style="display: none;"></div>
      <div class="ds-modal" id="${id}" style="display: none;">
        <div class="ds-modal-content ds-modal-scroll">
          ${title ? `
          <div class="ds-modal-header ds-modal-header-left">
            <h3 class="ds-modal-title">${title}</h3>
          </div>
          ` : ''}
          <div>
            <slot></slot>
          </div>
        </div>
        <button class="ds-modal-close" onclick="this.closest('rukn-modal').close()">✕</button>
      </div>
    `;
  }
  
  open() {
    const modal = this.querySelector('.ds-modal');
    const overlay = this.querySelector('.ds-modal-overlay');
    
    if (modal && overlay) {
      modal.style.display = 'flex';
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }
  
  close() {
    const modal = this.querySelector('.ds-modal');
    const overlay = this.querySelector('.ds-modal-overlay');
    
    if (modal && overlay) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
}

customElements.define('rukn-modal', RuknModal);

/* ========================================
   INPUT COMPONENT
   ======================================== */

class RuknInput extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder', 'type', 'value', 'disabled'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    const type = this.getAttribute('type') || 'text';
    const placeholder = this.getAttribute('placeholder') || '';
    const value = this.getAttribute('value') || '';
    const disabled = this.hasAttribute('disabled');
    
    this.innerHTML = `
      <input 
        type="${type}" 
        class="ds-input" 
        placeholder="${placeholder}"
        value="${value}"
        ${disabled ? 'disabled' : ''}
      >
    `;
  }
  
  get value() {
    return this.querySelector('input')?.value || '';
  }
  
  set value(val) {
    const input = this.querySelector('input');
    if (input) input.value = val;
  }
}

customElements.define('rukn-input', RuknInput);

/* ========================================
   ICON PLACEHOLDER COMPONENT
   ======================================== */

class RuknIcon extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'circle'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    const variant = this.getAttribute('variant') || '';
    const size = this.getAttribute('size') || 'md';
    const circle = this.hasAttribute('circle');
    
    const classes = [
      'ds-icon-placeholder',
      size ? `ds-icon-placeholder-${size}` : '',
      variant ? `ds-icon-placeholder-${variant}` : '',
      circle ? 'ds-icon-placeholder-circle' : ''
    ].filter(Boolean).join(' ');
    
    this.innerHTML = `
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('rukn-icon', RuknIcon);

// Export for convenience (if used as module)
export {
  RuknButton,
  RuknBadge,
  RuknCard,
  RuknAlert,
  RuknSpinner,
  RuknProgress,
  RuknModal,
  RuknInput,
  RuknIcon
};

console.log('✨ Rukn UI Web Components loaded - 100% Vanilla JavaScript, Zero Dependencies');

