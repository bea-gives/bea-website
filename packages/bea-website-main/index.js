import '../bea-font/index.js';

import '../bea-website-menu/index.js';
import '../bea-website-home/index.js';

/**
 * Entry point element
 * @hideconstructor
 * @example
 * <bea-website-main></bea-website-main>
 */
window.customElements.define('bea-website-main', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).innerHTML = `<style>
  @import "./node_modules/@bea-org/bea-color/index.css";

  :host {
    display: block;
    position: relative;
    contain: content;
    overflow: hidden auto;
    font-family: 'Mulish', sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  #header {
    position: absolute;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    gap: 12px;
  }

  bea-logo {
    width: 40px;
    height: 40px;
  }

  #name {
    margin: 0;
    color: var(--bea-color-blue);
    font-weight: bolder;
    font-size: 24px;
    font-family: Pangram;
  }

  bea-website-home {
    height: 100%;
  }

  @media (min-width: 1024px) {
    #header {
      top: 40px;
      left: 80px;
    }
  }

  @media (max-width: 1024px) {
    #header {
      top: 24px;
      left: 16px;
    }
  }
</style>
<div id="header">
  <bea-logo icon></bea-logo>
  <h1 id="name">Béa</h1>
</div>
<!-- <bea-website-menu></bea-website-menu> -->
<bea-website-home></bea-website-home>`;
  }
});
