import DamdomTickerElement from '@damienmortini/damdom-ticker/index.js'
import '@damienmortini/damdom-glslcanvas/index.js'
import { styleToRGBA } from '@damienmortini/math/Color.js'
import Vector2 from '@damienmortini/math/Vector2.js'

const HOVER_MARGIN = 15

/**
 * @hideconstructor
 * @example
 * <bea-website-button></bea-website-button>
 */
window.customElements.define('bea-website-button', class extends DamdomTickerElement {
  #glslCanvas
  #pointerPositionEased
  #focusable
  #pointerPosition

  constructor() {
    super()

    this.callback = this.#update

    this.attachShadow({ mode: 'open' }).innerHTML = `<style>
  :host {
    background-color: lightgrey;
    border-radius: 50%;
    font-family: Pangram, sans-serif;
    font-weight: 700;
    display: grid;
    align-content: center;
    justify-content: center;
    position: relative;
    padding: 30px;
    color: white;
    touch-action: none;
    cursor: pointer;
  }

  damdom-glslcanvas {
    position: absolute;
    width: calc(100% + var(--hover-margin) * 2);
    height: calc(100% + var(--hover-margin) * 2);
    top: calc(var(--hover-margin) * -1);
    left: calc(var(--hover-margin) * -1);
  }

  slot {
    position: relative;
    display: block;
    pointer-events: none;
  }

  #focusable {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    border: none;
    background: none;
    padding: 0;
  }
</style>
<damdom-glslcanvas></damdom-glslcanvas>
<button id="focusable"></button>
<slot>Button</slot>`

    this.#focusable = this.shadowRoot.querySelector('#focusable')

    this.#pointerPosition = new Vector2()
    this.#pointerPositionEased = new Vector2()

    this.#glslCanvas = this.shadowRoot.querySelector('damdom-glslcanvas')
    this.#glslCanvas.style.setProperty('--hover-margin', `${HOVER_MARGIN}px`)
    this.#glslCanvas.fragment = `#version 300 es
    precision highp float;
    
    uniform vec4 color;
    uniform vec2 pointerPosition;
    uniform vec2 resolution;
    out vec4 fragColor;
    
    void main() {
      vec2 boxSize = (resolution - ${(HOVER_MARGIN * devicePixelRatio).toFixed(1)} * 2.);
      vec2 marginSizeRatio = resolution / boxSize;
      vec2 aspectRatio = vec2(boxSize.x / boxSize.y, 1.);
      vec2 position = (gl_FragCoord.xy / resolution) * 2. - 1.;

      float pointerDistance = max(0., 1. - distance(position * aspectRatio * marginSizeRatio, pointerPosition * aspectRatio * marginSizeRatio) * .3);
      pointerDistance = smoothstep(0., 1., pointerDistance);
      if(pointerPosition.x == 0. && pointerPosition.y == 0. ) pointerDistance = 0.;

      vec2 boxPosition = position;
      boxPosition *= marginSizeRatio;
      boxPosition.y *= 1. + -(cos(boxPosition.x * 1.67) * .5 + .5) * .2;
      boxPosition.x *= aspectRatio.x;
      vec2 size = vec2(aspectRatio.x, .8);
      vec4 borderRadius = vec4(.55);
      borderRadius.xy = (boxPosition.x > 0.0) ? borderRadius.xy : borderRadius.zw;
      borderRadius.x = (boxPosition.y > 0.0) ? borderRadius.x : borderRadius.y;
      vec2 q = abs(boxPosition) - size + borderRadius.x;
      float df = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x;
      df -= pointerDistance * .2;

      float aa = 1. / min(boxSize.x, boxSize.y);
      float opacity = 1. - smoothstep(-aa, aa, df);
      fragColor = vec4(color.rgb * opacity * color.a, opacity * color.a);
    }`

    let canvasBoundingClientRect
    new ResizeObserver(() => canvasBoundingClientRect = this.#glslCanvas.getBoundingClientRect()).observe(this)
    window.addEventListener('resize', () => canvasBoundingClientRect = this.#glslCanvas.getBoundingClientRect())

    window.addEventListener('pointermove', (event) => {
      if (!canvasBoundingClientRect) return
      this.#pointerPosition.x = (event.clientX - canvasBoundingClientRect.x) / canvasBoundingClientRect.width * 2 - 1
      this.#pointerPosition.y = -((event.clientY - canvasBoundingClientRect.y) / canvasBoundingClientRect.height * 2 - 1)
    })
  }

  focus() {
    this.#focusable.focus()
  }

  #update = () => {
    this.#pointerPositionEased.lerp(this.#pointerPosition, .2)
    this.#glslCanvas.draw({
      uniforms: {
        color: styleToRGBA(getComputedStyle(this).getPropertyValue('background-color')),
        pointerPosition: this.#pointerPositionEased,
      },
    })
  }
})
