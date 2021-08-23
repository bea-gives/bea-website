import '../bea-website-backgroundcircle/index.js';
import '../bea-website-button/index.js';
import '../bea-website-mailchimpform/index.js';
import '../bea-website-animatedtext/index.js';
import '../bea-icon/index.js';

/**
 * Entry point element
 * @hideconstructor
 * @example
 * <bea-website-home></bea-website-home>
 */
window.customElements.define('bea-website-home', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).innerHTML = `<style>
  @import "./node_modules/@bea-org/bea-website-home/index.css";
</style>
<div id="content">
  <h2>
    <!-- <bea-icon id="asterisk" icon="asterisk" type="fill"></bea-icon> -->
    <span id="logo">Béa</span>
    <span>le don</span>
    <bea-website-animatedtext></bea-website-animatedtext>
  </h2>
  <p>L’application mobile bénévole qui simplifie <span>(enfin)</span> le don aux associations</p>
  <bea-website-button id="emailformbutton">Tenez-moi informé(e)</bea-website-button>
</div>
<div id="media">
  <bea-website-backgroundcircle></bea-website-backgroundcircle>
  <div id="phone">
    <video id="phone" poster="node_modules/@bea-org/bea-website-home/poster.png" autoplay loop muted playsinline>
      <source src="node_modules/@bea-org/bea-website-home/userflow.webm" type="video/webm">
      <source src="node_modules/@bea-org/bea-website-home/userflow.mp4" type="video/mp4">
    </video>
  </div>
  </damo-animation-lottie>
</div>
<div id="overlay"></div>
<section id="emailformpopin" hidden>
  <div id="emailformtitle">On vous en dit plus bientôt !</div>
  <bea-website-mailchimpform></bea-website-mailchimpform>
  <button id="emailformclosebutton">
    <bea-icon icon="close" type="fill"></bea-icon>
  </button>
</section>`;

    this.shadowRoot.querySelector('#emailformbutton').addEventListener('click', () => {
      this.toggleAttribute('emailformopen', true);
    });

    const closeButton = this.shadowRoot.querySelector('#emailformclosebutton');
    closeButton.addEventListener('click', () => this.toggleAttribute('emailformopen', false));

    const overlay = this.shadowRoot.querySelector('#overlay');
    overlay.addEventListener('click', () => this.toggleAttribute('emailformopen', false));

    this.shadowRoot.querySelector('#emailformpopin').addEventListener('submit', () => this.toggleAttribute('emailformopen', false));

    const animatedText = this.shadowRoot.querySelector('bea-website-animatedtext');
    const delay = 1500;
    const words = ['facile', 'sécurisé', 'sur-mesure'];
    const colors = ['var(--bea-color-green)', 'var(--bea-color-blue)', 'var(--bea-color-coral)'];
    let index = -1;
    const changeText = async () => {
      await animatedText.hide();
      index = (index + 1) % words.length;
      animatedText.innerHTML = words[index];
      animatedText.style.color = colors[index];
      await animatedText.show();
      setTimeout(changeText, delay);
    };
    changeText();
  }
});
