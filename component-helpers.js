/**
 * Rukn Design System - Component Helpers
 * JavaScript utilities for interactive components
 * 
 * Dependencies: None (vanilla JavaScript)
 * Browser Support: Modern browsers (ES6+)
 */

/* ========================================
   TOOLTIP HELPERS
   ======================================== */

/**
 * Initialize tooltips on elements with data-tooltip attribute
 * Usage: <button data-tooltip="Help text" data-tooltip-side="top">Button</button>
 */
function initTooltips() {
  const elements = document.querySelectorAll('[data-tooltip]');
  
  elements.forEach(element => {
    // Skip if already initialized
    if (element.querySelector('.ds-tooltip')) return;
    
    const tooltipText = element.getAttribute('data-tooltip');
    const side = element.getAttribute('data-tooltip-side') || 'top';
    
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'ds-tooltip';
    tooltip.setAttribute('data-side', side);
    tooltip.setAttribute('data-state', 'closed');
    tooltip.textContent = tooltipText;
    
    // Ensure parent has relative positioning
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.position === 'static') {
      element.style.position = 'relative';
    }
    
    // Add tooltip to element
    element.appendChild(tooltip);
    
    // Show on hover
    element.addEventListener('mouseenter', () => {
      tooltip.setAttribute('data-state', 'open');
    });
    
    element.addEventListener('mouseleave', () => {
      tooltip.setAttribute('data-state', 'closed');
    });
    
    // Show on focus (keyboard accessibility)
    element.addEventListener('focus', () => {
      tooltip.setAttribute('data-state', 'open');
    });
    
    element.addEventListener('blur', () => {
      tooltip.setAttribute('data-state', 'closed');
    });
  });
}

/**
 * Create and show a tooltip programmatically
 * @param {HTMLElement} element - Element to attach tooltip to
 * @param {string} text - Tooltip text
 * @param {string} side - Position: 'top', 'bottom', 'left', 'right'
 */
function showTooltip(element, text, side = 'top') {
  // Remove existing tooltip if any
  const existing = element.querySelector('.ds-tooltip');
  if (existing) existing.remove();
  
  // Create tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'ds-tooltip';
  tooltip.setAttribute('data-side', side);
  tooltip.setAttribute('data-state', 'open');
  tooltip.textContent = text;
  
  element.style.position = 'relative';
  element.appendChild(tooltip);
  
  return tooltip;
}

/**
 * Hide tooltip
 * @param {HTMLElement} element - Element with tooltip
 */
function hideTooltip(element) {
  const tooltip = element.querySelector('.ds-tooltip');
  if (tooltip) {
    tooltip.setAttribute('data-state', 'closed');
  }
}

/* ========================================
   TOAST / NOTIFICATION HELPERS
   ======================================== */

// Toast queue and configuration
const toastConfig = {
  position: 'top-right', // 'top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'
  duration: 4000, // Default duration in ms
  maxToasts: 5 // Maximum toasts to show at once
};

let toastContainer = null;
let toastQueue = [];

/**
 * Initialize toast container
 * @param {string} position - Container position
 */
function initToastContainer(position = 'top-right') {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = `ds-toast-container ds-toast-container-${position}`;
    document.body.appendChild(toastContainer);
  }
  toastConfig.position = position;
}

/**
 * Show a toast notification
 * @param {Object} options - Toast configuration
 * @param {string} options.title - Toast title
 * @param {string} options.description - Toast description (optional)
 * @param {string} options.variant - 'success', 'error', 'warning', 'info' (default)
 * @param {number} options.duration - Duration in ms (default: 4000)
 * @param {string} options.icon - Custom icon (optional)
 * @returns {HTMLElement} The toast element
 */
function showToast({ 
  title, 
  description = '', 
  variant = 'info', 
  duration = toastConfig.duration,
  icon = null
}) {
  // Initialize container if needed
  if (!toastContainer) {
    initToastContainer();
  }
  
  // Remove oldest toast if at max capacity
  if (toastQueue.length >= toastConfig.maxToasts) {
    removeToast(toastQueue[0]);
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `ds-toast ds-toast-${variant}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  
  // Default icons
  const defaultIcons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
    destructive: '✕'
  };
  
  const iconText = icon || defaultIcons[variant] || defaultIcons.info;
  
  // Build toast HTML
  toast.innerHTML = `
    <div class="ds-toast-icon">${iconText}</div>
    <div class="ds-toast-content">
      <div class="ds-toast-title">${title}</div>
      ${description ? `<div class="ds-toast-description">${description}</div>` : ''}
    </div>
    <button class="ds-toast-close" aria-label="Close notification">✕</button>
  `;
  
  // Add to container
  toastContainer.appendChild(toast);
  toastQueue.push(toast);
  
  // Close button handler
  const closeBtn = toast.querySelector('.ds-toast-close');
  closeBtn.addEventListener('click', () => {
    removeToast(toast);
  });
  
  // Auto-remove after duration
  if (duration > 0) {
    setTimeout(() => {
      removeToast(toast);
    }, duration);
  }
  
  return toast;
}

/**
 * Remove a toast
 * @param {HTMLElement} toast - Toast element to remove
 */
function removeToast(toast) {
  if (!toast || !toast.parentElement) return;
  
  toast.setAttribute('data-state', 'closing');
  
  // Wait for animation to complete
  setTimeout(() => {
    toast.remove();
    toastQueue = toastQueue.filter(t => t !== toast);
  }, 250);
}

/**
 * Convenience methods for different toast types
 */
const toast = {
  success: (title, description, duration) => 
    showToast({ title, description, variant: 'success', duration }),
    
  error: (title, description, duration) => 
    showToast({ title, description, variant: 'error', duration }),
    
  warning: (title, description, duration) => 
    showToast({ title, description, variant: 'warning', duration }),
    
  info: (title, description, duration) => 
    showToast({ title, description, variant: 'info', duration }),
    
  custom: showToast
};

/* ========================================
   ALERT HELPERS
   ======================================== */

/**
 * Create an alert
 * @param {Object} options - Alert configuration
 * @param {string} options.title - Alert title
 * @param {string} options.description - Alert description
 * @param {string} options.variant - 'info', 'success', 'warning', 'error'
 * @param {boolean} options.dismissible - Show close button (default: true)
 * @param {string} options.icon - Custom icon (optional)
 * @returns {HTMLElement} The alert element
 */
function createAlert({
  title,
  description,
  variant = 'info',
  dismissible = true,
  icon = null
}) {
  const alert = document.createElement('div');
  alert.className = `ds-alert ds-alert-${variant}`;
  alert.setAttribute('role', 'alert');
  
  // Default icons
  const defaultIcons = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✕',
    destructive: '✕'
  };
  
  const iconText = icon || defaultIcons[variant];
  
  alert.innerHTML = `
    <div class="ds-alert-icon">${iconText}</div>
    <div class="ds-alert-content">
      <div class="ds-alert-title">${title}</div>
      ${description ? `<div class="ds-alert-description">${description}</div>` : ''}
    </div>
    ${dismissible ? '<button class="ds-alert-close" aria-label="Close alert">✕</button>' : ''}
  `;
  
  // Add close handler
  if (dismissible) {
    const closeBtn = alert.querySelector('.ds-alert-close');
    closeBtn.addEventListener('click', () => {
      alert.style.animation = 'ds-fade-in 0.2s ease-out reverse';
      setTimeout(() => alert.remove(), 200);
    });
  }
  
  return alert;
}

/**
 * Show an alert in a container
 * @param {string|HTMLElement} container - Container selector or element
 * @param {Object} options - Alert options (same as createAlert)
 */
function showAlert(container, options) {
  const containerEl = typeof container === 'string' 
    ? document.querySelector(container) 
    : container;
    
  if (!containerEl) {
    console.error('Alert container not found');
    return null;
  }
  
  const alert = createAlert(options);
  containerEl.appendChild(alert);
  return alert;
}

/* ========================================
   PROGRESS HELPERS
   ======================================== */

/**
 * Update progress bar
 * @param {HTMLElement} progressBar - Progress bar element (.ds-progress-bar)
 * @param {number} value - Progress value (0-100)
 */
function updateProgress(progressBar, value) {
  const clampedValue = Math.max(0, Math.min(100, value));
  progressBar.style.width = `${clampedValue}%`;
}

/**
 * Update circular progress
 * @param {HTMLElement} progressCircle - Progress circle element (.ds-progress-circle)
 * @param {number} value - Progress value (0-100)
 */
function updateCircularProgress(progressCircle, value) {
  const clampedValue = Math.max(0, Math.min(100, value));
  const fillCircle = progressCircle.querySelector('.ds-progress-circle-fill');
  const textElement = progressCircle.querySelector('.ds-progress-circle-text');
  
  if (fillCircle) {
    // Calculate stroke-dashoffset (100 is full circle)
    const offset = 100 - clampedValue;
    fillCircle.style.strokeDashoffset = offset;
  }
  
  if (textElement) {
    textElement.textContent = `${Math.round(clampedValue)}%`;
  }
}

/**
 * Animate progress from current to target value
 * @param {HTMLElement} progressBar - Progress bar element
 * @param {number} targetValue - Target progress value (0-100)
 * @param {number} duration - Animation duration in ms (default: 500)
 */
function animateProgress(progressBar, targetValue, duration = 500) {
  const currentWidth = parseFloat(progressBar.style.width) || 0;
  const startTime = performance.now();
  
  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = currentWidth + (targetValue - currentWidth) * eased;
    
    updateProgress(progressBar, currentValue);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  
  requestAnimationFrame(animate);
}

/* ========================================
   SPINNER HELPERS
   ======================================== */

/**
 * Show loading overlay with spinner
 * @returns {HTMLElement} The overlay element
 */
function showLoadingOverlay() {
  // Remove existing overlay if any
  hideLoadingOverlay();
  
  const overlay = document.createElement('div');
  overlay.className = 'ds-spinner-overlay';
  overlay.id = 'ds-loading-overlay';
  overlay.innerHTML = '<div class="ds-spinner ds-spinner-primary"></div>';
  
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  
  return overlay;
}

/**
 * Hide loading overlay
 */
function hideLoadingOverlay() {
  const overlay = document.getElementById('ds-loading-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 200);
  }
}

/**
 * Set button to loading state
 * @param {HTMLElement} button - Button element
 */
function setButtonLoading(button) {
  button.classList.add('btn-loading');
  button.setAttribute('disabled', 'true');
  button.setAttribute('aria-busy', 'true');
}

/**
 * Remove loading state from button
 * @param {HTMLElement} button - Button element
 */
function removeButtonLoading(button) {
  button.classList.remove('btn-loading');
  button.removeAttribute('disabled');
  button.removeAttribute('aria-busy');
}

/* ========================================
   INITIALIZATION
   ======================================== */

/**
 * Initialize all components on DOM ready
 */
function initRuknComponents() {
  // Initialize tooltips
  initTooltips();
  
  // Initialize alerts close functionality
  document.querySelectorAll('.ds-alert-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const alert = e.target.closest('.ds-alert');
      if (alert) {
        alert.style.animation = 'ds-fade-in 0.2s ease-out reverse';
        setTimeout(() => alert.remove(), 200);
      }
    });
  });
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRuknComponents);
} else {
  initRuknComponents();
}

/* ========================================
   EXPORT FOR MODULE USAGE
   ======================================== */

// For ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    // Tooltips
    initTooltips,
    showTooltip,
    hideTooltip,
    
    // Toasts
    initToastContainer,
    showToast,
    removeToast,
    toast,
    
    // Alerts
    createAlert,
    showAlert,
    
    // Progress
    updateProgress,
    updateCircularProgress,
    animateProgress,
    
    // Spinners
    showLoadingOverlay,
    hideLoadingOverlay,
    setButtonLoading,
    removeButtonLoading,
    
    // Init
    initRuknComponents
  };
}

// For global usage
if (typeof window !== 'undefined') {
  window.RuknDS = {
    // Tooltips
    initTooltips,
    showTooltip,
    hideTooltip,
    
    // Toasts
    initToastContainer,
    showToast,
    removeToast,
    toast,
    
    // Alerts
    createAlert,
    showAlert,
    
    // Progress
    updateProgress,
    updateCircularProgress,
    animateProgress,
    
    // Spinners
    showLoadingOverlay,
    hideLoadingOverlay,
    setButtonLoading,
    removeButtonLoading,
    
    // Init
    initRuknComponents
  };
}

