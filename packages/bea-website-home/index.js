import '../bea-website-backgroundcircle/index.js';
import '../bea-website-button/index.js';
import '../bea-website-mailchimpform/index.js';
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
  :host {
    display: grid;
    position: relative;
    line-height: 1;
    grid-auto-columns: minmax(0, 1fr);
    font-family: Pangram;
    justify-items: center;
    align-items: center;
  }

  bea-website-backgroundcircle {
    position: absolute;
    width: 200%;
    height: 200%;
  }

  #media {
    grid-area: media;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #phone {
    max-height: 80vh;
    max-width: 80vw;
    /* filter: drop-shadow(40px 30px 30px #6B7F9933); */
    animation-duration: 3s;
    animation-name: float;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    -webkit-mask-image: url(node_modules/@bea-org/bea-website-home/video-mask.png);
    -webkit-mask-size: 100% 100%;
  }

  #text {
    grid-area: text;
    color: var(--bea-color-blue);
    display: grid;
    max-width: 380px;
  }

  h2 {
    font-weight: 700;
    white-space: nowrap;
    margin: 0;
  }

  h2 span:nth-of-type(2),
  h2 span:nth-of-type(3) {
    display: block;
  }

  h2 span:nth-of-type(2) {
    color: var(--bea-color-darkblue);
  }

  h2 span:nth-of-type(3) {
    color: var(--bea-color-green);
  }

  p {
    color: var(--bea-color-darkblue);
    margin: 0;
    font-style: normal;
    font-weight: bold;
    line-height: 1.2;
  }

  #emailformpopup {
    display: grid;
    background-color: var(--bea-color-ivory);
    border-radius: 25px;
    padding: 50px 45px;
    gap: 45px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 560px;
    box-sizing: border-box;
    box-shadow: 40px 30px 30px #6b7f9933;
    will-change: transform, opacity, visibility;
    transition-property: transform, opacity, visibility;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0.43, 1.84, 0.48, 0.99);
    transform: translate(-50%, -50%)
  }

  :host(:not([emailformopen])) #emailformpopup {
    transform: translateY(-50px) translate(-50%, -50%);
    opacity: 0;
    transition-duration: .3s;
    visibility: hidden;
    transition-timing-function: ease-in-out;
  }

  #emailformtitle {
    font-size: 32px;
    color: #001A70;
    font-weight: 700;
  }

  #emailformclosebutton {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 0;
    left: calc(100% + 24px);
    cursor: pointer;
    background-color: var(--bea-color-ivory);
    display: grid;
    align-content: center;
    justify-content: center;
    color: var(--bea-color-darkblue);
    transition-property: transform;
    transition-duration: .4s;
    border-radius: 24px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  }

  #emailformclosebutton:hover {
    transform: rotate(90deg);
  }

  #emailformclosebutton bea-icon {
    color: currentColor;
    height: 12px;
    width: 12px;
  }

  #emailformbutton {
    grid-area: emailbutton;
    font-size: 22px;
    /* bottom: 40px;
    left: 50%;
    transform: translateX(-50%); */
  }

  #overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bea-color-darkblue);
    opacity: 0.6;
    transition-property: opacity;
    transition-duration: .6s;
  }

  :host(:not([emailformopen])) #overlay {
    opacity: 0;
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    :host {
      grid-template-areas: "text media"
        "emailbutton emailbutton";
      grid-template-rows: minmax(0, 1fr) 0;
    }

    #emailformbutton {
      margin-top: -120px;
    }

    #text {
      gap: 30px;
    }

    h2 {
      font-size: 88px;
    }

    p {
      font-size: 24px;
    }

    bea-website-backgroundcircle {
      left: calc(-200% * var(--animation-scale));
    }
  }

  @media (max-width: 1024px) {
    :host {
      grid-template-areas: "emailbutton""text""media";
      grid-template-rows: 84px auto auto;
    }

    #emailformbutton {
      font-size: 16px;
      padding: 20px 25px;
      justify-self: right;
      margin-right: 16px;
    }

    #text {
      max-width: 280px;
      gap: 26px;
    }

    #phone {
      margin-top: 32px;
    }

    h2 {
      font-size: 56px;
    }

    p {
      font-size: 18px;
    }

    bea-website-backgroundcircle {
      width: 1024px;
      height: 1024px;
      top: 100px;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(-10px);
    }
  }
</style>
<div id="text">
  <h2>
    <span>Béa</span>
    <span>le don</span>
    <span>facile</span>
  </h2>
  <p>L’application mobile bénévole qui simplifie le don aux associations</p>
</div>
<!-- <img id="phone" src="node_modules/@bea-org/bea-website-home/phone.svg"> -->
<div id="media">
  <bea-website-backgroundcircle></bea-website-backgroundcircle>
  <video id="phone" autoplay loop muted playsinline src="node_modules/@bea-org/bea-website-home/userflow.mp4"></video>
</div>
<bea-website-button id="emailformbutton">Ça m’intéresse</bea-website-button>
<div id="overlay"></div>
<section id="emailformpopup" hidden>
  <div id="emailformtitle">On vous en dit plus bientôt !</div>
  <bea-website-mailchimpform></bea-website-mailchimpform>
  <a href="javascript:;" id="emailformclosebutton">
    <bea-icon icon="close"></bea-icon>
  </a>
</section>`;

    const emailFormPopup = this.shadowRoot.querySelector('#emailformpopup');

    const emailFormButton = this.shadowRoot.querySelector('#emailformbutton');
    emailFormButton.addEventListener('click', () => {
      this.toggleAttribute('emailformopen', true);
    });

    const closeButton = this.shadowRoot.querySelector('#emailformclosebutton');
    closeButton.addEventListener('click', () => this.toggleAttribute('emailformopen', false));

    emailFormPopup.addEventListener('submit', () => this.toggleAttribute('emailformopen', false));
  }
});
