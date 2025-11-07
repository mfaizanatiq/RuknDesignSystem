/**
 * Rukn Footer - Web Component
 * 100% Vanilla JavaScript - No frameworks
 * SEO-Friendly: Uses semantic HTML5 footer with proper navigation and structured content
 * 
 * Usage:
 *   <rukn-footer></rukn-footer>
 */

class RuknFooter extends HTMLElement {
  connectedCallback() {
    // SEO: Set semantic role
    this.setAttribute('role', 'contentinfo');
    this.setAttribute('aria-label', 'Footer');
    
    this.innerHTML = `
      <footer role="contentinfo" style="padding: var(--r-space-12) var(--r-space-6); text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
        <div class="ds-container">
          <div style="margin-bottom: var(--r-space-6);">
            <div style="font-size: var(--r-font-size-2xl); font-weight: var(--r-font-weight-bold); margin-bottom: var(--r-space-2);">
              <span style="color: hsl(var(--primary));" aria-hidden="true">◆</span> 
              <span>Rukn Design System</span>
            </div>
            <p class="arabic-text" style="color: hsl(var(--foreground) / 0.6);" lang="ar" aria-label="Rukn in Arabic">رُكن</p>
          </div>
          
          <nav aria-label="Footer navigation" style="display: flex; justify-content: center; gap: var(--r-space-6); margin-bottom: var(--r-space-6); flex-wrap: wrap;">
            <a href="index.html" title="Home - Rukn Design System" style="color: hsl(var(--foreground) / 0.7); text-decoration: none; transition: color var(--r-transition-fast);">Home</a>
            <a href="foundation.html" title="Foundation - Design Tokens & System" style="color: hsl(var(--foreground) / 0.7); text-decoration: none; transition: color var(--r-transition-fast);">Foundation</a>
            <a href="components.html" title="Components - UI Component Library" style="color: hsl(var(--foreground) / 0.7); text-decoration: none; transition: color var(--r-transition-fast);">Components</a>
            <a href="index.html#pricing" title="Pricing - Free & Open Source" style="color: hsl(var(--foreground) / 0.7); text-decoration: none; transition: color var(--r-transition-fast);">Pricing</a>
            <a href="index.html#roadmap" title="Roadmap - Future Plans" style="color: hsl(var(--foreground) / 0.7); text-decoration: none; transition: color var(--r-transition-fast);">Roadmap</a>
            <a href="index.html#about" title="About - Our Mission" style="color: hsl(var(--foreground) / 0.7); text-decoration: none; transition: color var(--r-transition-fast);">About</a>
            <a href="https://www.linkedin.com/in/mfaizanatiq/" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn" style="color: hsl(var(--foreground) / 0.7); text-decoration: none; transition: color var(--r-transition-fast);">LinkedIn</a>
            <a href="https://github.com/mfaizanatiq/RuknDesignSystem" target="_blank" rel="noopener noreferrer" title="View on GitHub - Open Source Repository" style="color: hsl(var(--foreground) / 0.7); text-decoration: none; transition: color var(--r-transition-fast);">GitHub</a>
          </nav>
          
          <p style="color: hsl(var(--foreground) / 0.5); font-size: var(--r-font-size-sm);">
            Built with ❤️ for designers and developers everywhere
          </p>
          
          <p style="color: hsl(var(--foreground) / 0.4); font-size: var(--r-font-size-xs); margin-top: var(--r-space-4);">
            MIT Licensed • Open Source Forever • © ${new Date().getFullYear()} Rukn Design System
          </p>
        </div>
      </footer>
    `;
  }
}

customElements.define('rukn-footer', RuknFooter);

