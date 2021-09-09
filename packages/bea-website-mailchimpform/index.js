import '../bea-website-button/index.js';

const isFR = navigator.languages.includes('fr') || navigator.languages.includes('FR-fr');

/**
 * Entry point element
 * @hideconstructor
 * @example
 * <bea-website-mailchimpform></bea-website-mailchimpform>
 */
window.customElements.define('bea-website-mailchimpform', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).innerHTML = `<style>
  @import "./node_modules/@bea-org/bea-color/index.css";

  :host {
    display: grid;
    position: relative;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: center;
    justify-items: center;
  }

  form {
    display: contents;
  }

  input {
    width: 100%;
    padding: 15px 25px;
    font-size: 16px;
    border: none;
    border-radius: 100px;
    color: var(--bea-color-black);
    box-sizing: border-box;
  }

  input::placeholder {
    color: var(--bea-color-black);
    opacity: .3;
  }

  input:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px var(--bea-color-grey);
  }

  bea-website-button {
    background-color: var(--bea-color-blue);
    padding: 20px 40px;
  }
</style>
<form action="https://gives.us8.list-manage.com/subscribe/post?u=9478a676a23e73e9922afc992&amp;id=9e77fea305"
  method="post" target="_blank" novalidate>
  <input type="email" value="" name="EMAIL" placeholder="${isFR ? 'Entrez votre adresse email' : 'Enter your email'}">
  <input type="submit" style="display: none;">
  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
      name="b_9478a676a23e73e9922afc992_9e77fea305" tabindex="-1" value=""></div>
  <bea-website-button>${isFR ? 'M\'inscrire' : 'Subscribe'}</bea-website-button>
</form>`;

    const submitButton = this.shadowRoot.querySelector('bea-website-button');
    const form = this.shadowRoot.querySelector('form');

    submitButton.addEventListener('click', () => {
      this.dispatchEvent(new Event('submit', {
        bubbles: true,
      }));
      form.submit();
    });

    form.addEventListener('submit', (event) => {
      this.dispatchEvent(new Event('submit', event));
    });
  }
});
