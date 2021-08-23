var Y=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var x=(i,e,t)=>(Y(i,e,"read from private field"),t?t.call(i):e.get(i)),E=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},k=(i,e,t,s)=>(Y(i,e,"write to private field"),s?s.call(i,t):e.set(i,t),t);var j=(i,e,t)=>(Y(i,e,"access private method"),t);document.fonts.add(new FontFace("Mulish","url(node_modules/@bea-org/bea-font/mulish.woff2)"));document.fonts.add(new FontFace("Pangram","url(node_modules/@bea-org/bea-font/pangram-regular.woff2)"));document.fonts.add(new FontFace("Pangram","url(node_modules/@bea-org/bea-font/pangram-bold.woff2)",{weight:700}));document.fonts.add(new FontFace("Pangram","url(node_modules/@bea-org/bea-font/pangram-extrabold.woff2)",{weight:800}));window.customElements.define("bea-a",class extends HTMLElement{static get observedAttributes(){return["href","target"]}constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    color: #6091FF;
    transition-property: color, text-shadow;
    transition-duration: .4s;
  }

  :host([selected]) {
    pointer-events: none;
  }

  :host([selected]),
  :host(:hover) {
    color: #3E66BF;
    text-shadow: 0 0 .5px currentColor, 0 0 .5px currentColor, 0 0 .5px currentColor;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
<a href="">
  <slot></slot>
</a>`,this._a=this.shadowRoot.querySelector("a")}attributeChangedCallback(i,e,t){switch(i){case"href":case"target":this._a[i]=t;break;default:break}}get href(){return this.getAttribute("href")}set href(i){this.setAttribute("href",i)}get target(){return this.getAttribute("target")}set target(i){this.setAttribute("target",i)}});window.customElements.define("bea-logo",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
  }

  #background {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #6091FF;
  }

  :host([icon]) #background {
    display: block;
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  :host([icon]) svg {
    top: 52.5%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
  }

  :host([light]:not([icon])) path:nth-of-type(2) {
    fill: white;
  }

  :host([icon]:not([light])) path:nth-of-type(2) {
    fill: white;
  }

  :host([light]) #background {
    background-color: white;
  }
</style>
<div id="background"></div>`,fetch("node_modules/@bea-org/bea-logo/logo.svg").then(i=>i.text()).then(i=>{let e=document.createElement("template");e.innerHTML=i,this.shadowRoot.appendChild(e.content.cloneNode(!0))})}});window.customElements.define("bea-website-menu",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`
      <style>
        :host {
          display: grid;
          grid-auto-flow: column;
          gap: 32px;
          position: relative;
          contain: content;
          justify-content: center;
          align-items: center;
        }

        bea-logo {
          width: 40px;
          height: 40px;
        }
      </style>
      <a href="#home"><bea-logo icon></bea-logo></a>
      <bea-a href="#principle">Principe</bea-a>
      <bea-a href="#trust">Confiance</bea-a>
      <bea-a href="#community">Communaut\xE9</bea-a>
    `}});window.customElements.define("bea-website-backgroundcircle",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    display: grid;
    position: relative;
    overflow: hidden;
    contain: content;
    width: 100px;
    height: 100px;
    color: #C9DAFF;
    align-items: center;
    justify-items: center;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    --animation-scale: .95;
    --size-ratio: 1;
  }

  svg {
    width: calc(var(--size) * var(--size-ratio));
    height: calc(var(--size) * var(--size-ratio));
  }

  circle {
    fill: currentColor;
    will-change: transform;
    animation-duration: 10s;
    animation-name: breath;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    transform-origin: center;
  }

  @keyframes breath {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(var(--animation-scale));
    }
  }
</style>
<svg id="bubble" width="1" height="1" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx=".5" cy=".5" r=".5" />
</svg>`;let i=this.shadowRoot.querySelector("svg");new ResizeObserver(t=>{let s=t[0].contentRect.width,r=t[0].contentRect.height,o=Math.max(s,r);i.style.setProperty("--size",`${o}px`)}).observe(this)}});var G=class extends Set{dispatch(e){for(let t of this)t(e)}};var T,M,L,I,z,W,P,S=class extends G{constructor(){super();E(this,z);E(this,M,void 0);E(this,L,void 0);E(this,I,void 0);E(this,P,()=>{k(this,I,requestAnimationFrame(x(this,P))),k(this,M,window.performance.now()),this.deltaTime=x(this,M)-x(this,L),this.smoothDeltatime+=(this.deltaTime-this.smoothDeltatime)*.05,this.timeScale=this.deltaTime/x(S,T),this.smoothTimeScale=this.smoothDeltatime/x(S,T),k(this,L,x(this,M)),this.dispatch()});j(this,z,W).call(this),document.addEventListener("visibilitychange",()=>{j(this,z,W).call(this)})}add(e){return this.size||(j(this,z,W).call(this),x(this,P).call(this)),super.add(e)}delete(e){let t=super.delete(e);return this.size||cancelAnimationFrame(x(this,I)),t}clear(){cancelAnimationFrame(x(this,I)),super.clear()}},V=S;T=new WeakMap,M=new WeakMap,L=new WeakMap,I=new WeakMap,z=new WeakSet,W=function(){k(this,M,k(this,L,window.performance.now())),this.deltaTime=x(S,T),this.smoothDeltatime=this.deltaTime,this.timeScale=1,this.smoothTimeScale=this.timeScale},P=new WeakMap,E(V,T,1e3/60);var _=new V;var Q=1,J=2,X=4,ee=8,te=class extends HTMLElement{constructor(){super();this._updateBound=this.update.bind(this),this._pauseFlag=0,new IntersectionObserver(t=>{let s=!1;for(let r of t)r.isIntersecting&&(s=!0);s?this._pauseFlag&=~J:this._pauseFlag|=J}).observe(this),document.addEventListener("visibilitychange",()=>{document.hidden?this._pauseFlag|=X:this._pauseFlag&=~X})}connectedCallback(){this._pauseFlag&=~ee,document.hidden&&(this._pauseFlag|=X),this._pauseFlag&Q||this.update()}disconnectedCallback(){this._pauseFlag|=ee}get _pauseFlag(){return this.__pauseFlag}set _pauseFlag(e){this.__pauseFlag!==e&&(this.__pauseFlag=e,this.__pauseFlag?_.delete(this._updateBound):_.add(this._updateBound))}play(){this._pauseFlag&=~Q}pause(){this._pauseFlag|=Q}get paused(){return!!this._pauseFlag}update(){}},ie=te;var $=class{constructor({width:e=1,height:t=1,columns:s=1,rows:r=1,positions:o=!0,normals:n=!0,uvs:a=!0,indices:p=!0}={}){let u=s+1,c=r+1;o&&(this.positions=new Float32Array((s+1)*(r+1)*3)),n&&(this.normals=new Float32Array((s+1)*(r+1)*3)),a&&(this.uvs=new Float32Array((s+1)*(r+1)*2));for(let h=0;h<c;h++){let l=1-h/r,d=h/r*t-t*.5;for(let f=0;f<u;f++){let b=f/s,m=h*u+f;o&&(this.positions[m*3]=b*e-e*.5,this.positions[m*3+1]=d),n&&(this.normals[m*3+2]=1),a&&(this.uvs[m*2]=b,this.uvs[m*2+1]=1-l)}}if(p){let h=s*r*6;h<2**8?this.indices=new Uint8Array(h):h<2**16?this.indices=new Uint16Array(h):this.indices=new Uint32Array(h);for(let l=0;l<r;l++)for(let d=0;d<s;d++){let f=d+u*l,b=d+u*(l+1),m=d+1+u*(l+1),R=d+1+u*l,y=l*s+d;this.indices[y*6]=f,this.indices[y*6+1]=R,this.indices[y*6+2]=b,this.indices[y*6+3]=b,this.indices[y*6+4]=R,this.indices[y*6+5]=m}}}};var F=class{constructor({gl:e,geometry:t=void 0,program:s=void 0}){this.gl=e;let r=e.getExtension("OES_vertex_array_object");r&&(this.gl.createVertexArray=r.createVertexArrayOES.bind(r),this.gl.bindVertexArray=r.bindVertexArrayOES.bind(r)),this._vertexArray=this.gl.createVertexArray(),t&&s&&this.add({geometry:t,program:s})}add({geometry:e=void 0,program:t=void 0}={}){this.bind(),t.attributes.set(e.attributes),e.indices&&e.indices.buffer.bind(),this.unbind()}bind(){this.gl.bindVertexArray(this._vertexArray)}unbind(){this.gl.bindVertexArray(null)}};var C=class{constructor({gl:e,data:t=void 0,width:s=void 0,height:r=void 0,target:o=e.TEXTURE_2D,level:n=0,internalFormat:a=e.RGBA8||e.RGBA,format:p=e.RGBA,type:u=e.UNSIGNED_BYTE,autoGenerateMipmap:c=!0,minFilter:h=c?e.LINEAR_MIPMAP_LINEAR:e.LINEAR,magFilter:l=e.LINEAR,wrapS:d=e.CLAMP_TO_EDGE,wrapT:f=e.CLAMP_TO_EDGE,flipY:b=!1}){this.gl=e,this._texture=this.gl.createTexture(),this._width=s,this._height=r,this._dataWidth=void 0,this._dataHeight=void 0,this._target=o,this._unit=0,this.autoGenerateMipmap=c,this.level=n,this.internalFormat=a,this.format=p,this.type=u,this.minFilter=h,this.magFilter=l,this.wrapS=d,this.wrapT=f,this.flipY=b,this.data=t}generateMipmap(){this.bind(),this.gl.generateMipmap(this._target),this.unbind()}set data(e){this._data=e,this._data&&this._data.length===void 0&&(this._dataWidth=this._data.width||this._data.videoWidth,this._dataHeight=this._data.height||this._data.videoHeight),this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.gl instanceof WebGLRenderingContext&&this._data&&this._data.length===void 0?this.gl.texImage2D(this._target,this.level,this.internalFormat,this.format,this.type,this._data):this.gl.texImage2D(this._target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this._data||null),this.autoGenerateMipmap&&this.gl.generateMipmap(this._target),this.unbind()}get data(){return this._data}set width(e){this._width=e,this.data=this.data}get width(){return this._width||this._dataWidth}set height(e){this._height=e,this.data=this.data}get height(){return this._height||this._dataHeight}set minFilter(e){this._minFilter!==e&&(this._minFilter=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_MIN_FILTER,this._minFilter),this.unbind())}get minFilter(){return this._minFilter}set magFilter(e){this._magFilter!==e&&(this._magFilter=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_MAG_FILTER,this._magFilter),this.unbind())}get magFilter(){return this._magFilter}set wrapS(e){this._wrapS!==e&&(this._wrapS=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_WRAP_S,this._wrapS),this.unbind())}get wrapS(){return this._wrapS}set wrapT(e){this._wrapT!==e&&(this._wrapT=e,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_WRAP_T,this._wrapT),this.unbind())}get wrapT(){return this._wrapT}set flipY(e){this._flipY!==e&&(this._flipY=e,this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this._flipY),this.unbind())}get flipY(){return this._flipY}bind({unit:e=0}={}){this._unit=e,this.gl.activeTexture(this.gl.TEXTURE0+e),this.gl.bindTexture(this._target,this._texture)}unbind({unit:e=this._unit}={}){this.gl.activeTexture(this.gl.TEXTURE0+e),this.gl.bindTexture(this._target,null)}clone(){return new C(this)}};var H=class{constructor({gl:e,geometry:t=void 0,program:s=void 0}){this.gl=e,this._vertexArrays=new Map,this._boundTextures=new Set,this.geometry=t,this.program=s}get program(){return this._program}set program(e){this._program=e;let t=this._vertexArrays.get(this.geometry);t.get(this._program)||t.set(this._program,new F({gl:this.gl,geometry:this.geometry,program:this.program}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._vertexArrays.has(this.geometry)||this._vertexArrays.set(this.geometry,new Map)}get vertexArray(){return this._vertexArrays.get(this.geometry).get(this.program)}bind(){this.program.use(),this.vertexArray.bind();for(let[e,t]of this.program.uniformTypes)if(t.startsWith("sampler")){let s=this.program.uniforms.get(e);s instanceof C&&(s.bind({unit:this.program.textureUnits.get(e)}),this._boundTextures.add(s))}}draw(e={}){e=Object.assign({bind:!1,uniforms:{}},e),this.program.use();for(let[t,s]of Object.entries(e.uniforms))this.program.uniforms.set(t,s);e.bind&&this.bind(),this.geometry.draw(e),e.bind&&this.unbind()}unbind(){this.vertexArray.unbind();for(let e of this._boundTextures)e.unbind(),this._boundTextures.delete(e)}};var N=class{constructor({gl:e,data:t=null,target:s=e.ARRAY_BUFFER,usage:r=e.STATIC_DRAW}){this.gl=e,this.target=s,this.usage=r,this._buffer=this.gl.createBuffer(),t&&(this.data=t)}set data(e){this._data=e,this.bind(),this.gl.bufferData(this.target,this._data,this.usage),this.unbind()}get data(){return this._data}bind({target:e=this.target,index:t=void 0,offset:s=0,size:r=void 0}={}){t===void 0?this.gl.bindBuffer(e,this._buffer):r===void 0?this.gl.bindBufferBase(e,t,this._buffer):this.gl.bindBufferRange(e,t,this._buffer,s,r)}unbind({target:e=this.target,index:t=void 0,offset:s=0,size:r=void 0}={}){t===void 0?this.gl.bindBuffer(e,null):r===void 0?this.gl.bindBufferBase(e,t,null):this.gl.bindBufferRange(e,t,null,s,r)}};var Re=new Map([[WebGLRenderingContext.BYTE,Int8Array],[WebGLRenderingContext.UNSIGNED_BYTE,Uint8Array],[WebGLRenderingContext.SHORT,Int16Array],[WebGLRenderingContext.UNSIGNED_SHORT,Uint16Array],[WebGLRenderingContext.INT,Int32Array],[WebGLRenderingContext.UNSIGNED_INT,Uint32Array],[WebGLRenderingContext.FLOAT,Float32Array]]),ke=new Map([[Int8Array,WebGLRenderingContext.BYTE],[Uint8Array,WebGLRenderingContext.UNSIGNED_BYTE],[Int16Array,WebGLRenderingContext.SHORT],[Uint16Array,WebGLRenderingContext.UNSIGNED_SHORT],[Int32Array,WebGLRenderingContext.INT],[Uint32Array,WebGLRenderingContext.UNSIGNED_INT],[Float32Array,WebGLRenderingContext.FLOAT],[Float64Array,WebGLRenderingContext.FLOAT]]),v=class{constructor({gl:e,data:t=null,target:s=e.ARRAY_BUFFER,size:r=1,componentType:o=ke.get(t==null?void 0:t.constructor),byteOffset:n=0,normalized:a=!1,byteStride:p=0,count:u=(t==null?void 0:t.length)/r||1,divisor:c=0}){this.gl=e,this.data=t,this.size=r,this.componentType=o,this.byteOffset=n,this.normalized=a,this.byteStride=p,this.count=u,this.divisor=c,this._buffer=t instanceof N?t:new N({gl:e,data:t,target:s})}get buffer(){return this._buffer}get typedArray(){return new(Re.get(this.componentType))(this.buffer.data,this.byteOffset,this.count*this.size)}};var B=class{constructor({gl:e,positions:t=null,normals:s=null,uvs:r=null,attributes:o={},indices:n=null}){this.gl=e,this.indices=null,this.gl.getExtension("OES_element_index_uint"),this._drawElementsInstanced=()=>{},this._drawArraysInstanced=()=>{};let a=this.gl.getExtension("ANGLE_instanced_arrays");a?(this._drawElementsInstanced=a.drawElementsInstancedANGLE.bind(a),this._drawArraysInstanced=a.drawArraysInstancedANGLE.bind(a)):this.gl.drawElementsInstanced&&(this._drawElementsInstanced=this.gl.drawElementsInstanced.bind(this.gl),this._drawArraysInstanced=this.gl.drawArraysInstanced.bind(this.gl)),this.attributes=new Map(o instanceof Map?o:Object.entries(o)),t&&this.attributes.set("position",new v({gl:e,data:t,size:3})),s&&this.attributes.set("normal",new v({gl:e,data:s,size:3})),r&&this.attributes.set("uv",new v({gl:e,data:r,size:2}));for(let[p,u]of this.attributes)u instanceof v||this.attributes.set(p,new v(Object.assign({gl:e},u)));n&&(this.indices=new v({gl:this.gl,target:this.gl.ELEMENT_ARRAY_BUFFER,...n.length!==void 0?{data:n}:n}))}draw({mode:e=this.gl.TRIANGLES,elements:t=!!this.indices,count:s=t?this.indices.count:this.attributes.get("position").count,offset:r=this.indices?this.indices.byteOffset:0,type:o=t?this.indices.componentType:null,first:n=0,instanceCount:a=void 0}={}){t?a!==void 0?this._drawElementsInstanced(e,s,o,r,a):this.gl.drawElements(e,s,o,r):a!==void 0?this._drawArraysInstanced(e,n,s,a):this.gl.drawArrays(e,n,s)}};var g=class{static addChunks(e="void main() {}",t){for(let[s,r]of t)switch(s){case"start":e=e.replace(/^(#version .*?\n(\s*precision highp float;\s)?)?([\s\S]*)/,`$1
${r}
$3`);break;case"end":e=e.replace(/(}\s*$)/,`
${r}
$1`);break;case"main":e=e.replace(/(\bvoid\b +\bmain\b[\s\S]*?{\s*)/,`$1
${r}
`);break;default:e=e.replace(s,r)}return e}constructor({vertex:e=`#version 300 es
      void main() {
        gl_Position = vec4(0., 0., 0., 1.);
      }
    `,fragment:t=`#version 300 es
      precision highp float;

      out vec4 fragColor;

      void main() {
        fragColor = vec4(1.);
      }
    `,vertexChunks:s=[],fragmentChunks:r=[],uniforms:o={},dataTypeConctructors:n={Vector2:class extends Float32Array{constructor(){super(2)}},Vector3:class extends Float32Array{constructor(){super(3)}},Vector4:class extends Float32Array{constructor(){super(4)}},Matrix3:class extends Float32Array{constructor(){super([1,0,0,0,1,0,0,0,1])}},Matrix4:class extends Float32Array{constructor(){super([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},Texture:class{},TextureCube:class{}}}={}){this.uniforms=o,this.uniformTypes=new Map,this._dataTypeConctructors=n,this._vertex=g.addChunks(e,s),this._fragment=g.addChunks(t,r),this._parseUniforms()}get vertex(){return this._vertex}set vertex(e){this._vertex=e,this._parseUniforms()}get fragment(){return this._fragment}set fragment(e){this._fragment=e,this._parseUniforms()}_createUniform(e,t,s){if(!s)this.uniformTypes.set(e,t);else{this.uniformTypes.set(e,`${t}array`);for(let n=0;n<s;n++)this.uniformTypes.set(`${e}[${n}]`,t)}let r,o;if(/bool/.test(t))isNaN(s)?r=!1:r=new Array(s).fill(!1);else if(/float|double/.test(t))isNaN(s)?r=0:r=new Array(s).fill(0);else if(/int|uint/.test(t))isNaN(s)?r=0:r=new Array(s).fill(0);else if(/sampler2D/.test(t))isNaN(s)?r=new this._dataTypeConctructors.Texture:r=new Array(s).fill(void 0).map(n=>new this._dataTypeConctructors.Texture);else if(/samplerCube/.test(t))isNaN(s)?r=new this._dataTypeConctructors.TextureCube:r=new Array(s).fill(void 0).map(n=>new this._dataTypeConctructors.TextureCube);else if(o=/(.?)vec(\d)/.exec(t)){let n=o[2];isNaN(s)?r=new this._dataTypeConctructors[`Vector${n}`]:r=new Array(s).fill(void 0).map(a=>new this._dataTypeConctructors[`Vector${n}`])}else if(o=/mat(\d)/.exec(t)){let n=o[1];isNaN(s)?r=new this._dataTypeConctructors[`Matrix${n}`]:r=new Array(s).fill(void 0).map(a=>new this._dataTypeConctructors[`Matrix${n}`])}else r=void 0;return r}_parseUniforms(){let e={};this.uniformTypes.clear();for(let t of[this.vertex,this.fragment]){let s=new Map,r=/struct\s*(.*)\s*{\s*([\s\S]*?)}/g,o=/^\s*(.[^ ]+) (.[^ ;[\]]+)\[? *(\d+)? *\]?/gm,n;for(;n=r.exec(t);){let u=n[1],c=n[2],h={},l;for(;l=o.exec(c);){let[,d,f,b]=l,m=parseInt(b);h[f]={type:d,arrayLength:m}}s.set(u,h)}let a=/^\s*uniform (highp|mediump|lowp)? *(.[^ ]+) (.[^ ;[\]]+)\[? *(\d+)? *\]?/gm,p;for(;p=a.exec(t);){let[,,u,c,h]=p,l=s.get(u);if(l)for(let d of Object.keys(l))c=`${c}.${d}`,e[c]=this._createUniform(c,l[d].type,l[d].arrayLength);else{let d=parseInt(h);e[c]=this._createUniform(c,u,d)}}}for(let[t,s]of Object.entries(e))t in this.uniforms||(this.uniforms[t]=s);for(let t of Object.keys(this.uniforms))t in e||delete this.uniforms[t]}};var O=class{constructor({gl:e,shader:t=new g,transformFeedbackVaryings:s=void 0}){this.gl=e,this._webGL1=this.gl.getParameter(this.gl.VERSION).startsWith("WebGL 1.0"),this._shader=t instanceof g?t:new g(t),this._program=e.createProgram(),this._attachedShaders=new Map,this._textureUnits=new Map,this._vertexAttribDivisor=()=>{};let r=this.gl.getExtension("ANGLE_instanced_arrays");r?this._vertexAttribDivisor=r.vertexAttribDivisorANGLE.bind(r):this.gl.vertexAttribDivisor&&(this._vertexAttribDivisor=this.gl.vertexAttribDivisor.bind(this.gl));let o=this;class n extends Map{set(c,{buffer:h=void 0,location:l=o._attributesLocations.get(c),size:d=1,componentType:f=e.FLOAT,normalized:b=!1,byteStride:m=0,byteOffset:R=0,divisor:y=0}={}){if(c instanceof Map){for(let[Ee,Me]of c)this.set(Ee,Me);return}h.bind(),l===void 0&&(l=e.getAttribLocation(o._program,c),o._attributesLocations.set(c,l)),l!==-1&&(e.enableVertexAttribArray(l),o._webGL1||f===e.FLOAT||f===e.HALF_FLOAT?(f===e.UNSIGNED_INT&&(f=e.FLOAT),e.vertexAttribPointer(l,d,f,b,m,R)):e.vertexAttribIPointer(l,d,f,m,R),o._vertexAttribDivisor(l,y)),h.unbind(),super.set(c,{buffer:h,size:d,componentType:f,normalized:b,byteStride:m,byteOffset:R})}}let a=(u,c)=>{let h=o._uniformLocations.get(u);if(h===void 0&&(h=e.getUniformLocation(o._program,u),o._uniformLocations.set(u,h)),h===null)return;let l=o.uniformTypes.get(u);if(l==="float"||l==="bool")e.uniform1f(h,c);else if(l==="vec2")e.uniform2fv(h,c);else if(l==="vec3")e.uniform3fv(h,c);else if(l==="vec4")e.uniform4fv(h,c);else if(l==="int")e.uniform1i(h,c);else if(l==="ivec2")e.uniform2iv(h,c);else if(l==="ivec3")e.uniform3iv(h,c);else if(l==="ivec4")e.uniform4iv(h,c);else if(l==="mat3")e.uniformMatrix3fv(h,!1,c);else if(l==="mat4")e.uniformMatrix4fv(h,!1,c);else if(l.startsWith("sampler"))e.uniform1i(h,o._textureUnits.get(u));else if(l.endsWith("array"))for(let d=0;d<c.length;d++)a(`${u}[${d}]`,c[d]);else if(c instanceof Object)for(let d of Object.keys(c))a(`${u}.${d}`,c[d])};class p extends Map{set(c,h){h!==void 0&&(a(c,h),o._shader.uniforms[c]=h,super.set(c,h))}}s&&this.gl.transformFeedbackVaryings(this._program,s,e.INTERLEAVED_ATTRIBS),this.attributes=new n,this.uniforms=new p,this._updateShader(this.gl.VERTEX_SHADER,this._shader.vertex),this._updateShader(this.gl.FRAGMENT_SHADER,this._shader.fragment)}set vertexShader(e){this._shader.vertex=e,this._updateShader(this.gl.VERTEX_SHADER,this._shader.vertex)}get vertexShader(){return this._shader.vertex}set fragmentShader(e){this._shader.fragment=e,this._updateShader(this.gl.FRAGMENT_SHADER,this._shader.fragment)}get fragmentShader(){return this._shader.fragment}get uniformTypes(){return this._shader.uniformTypes}get textureUnits(){return this._textureUnits}use(){this.gl.useProgram(this._program)}_updateShader(e,t){if(!t)return;if(this._webGL1)if(t=t.replace(/#version.*?\n/g,""),t=t.replace(/\btexture\b/g,"texture2D"),t=t.replace(/\buvec(.)\b/g,"vec$1"),t=t.replace(/\bflat\b/g,""),e===this.gl.VERTEX_SHADER)t=t.replace(/(^\s*)\bin\b/gm,"$1attribute"),t=t.replace(/(^\s*)\bout\b/gm,"$1varying");else{t=t.replace(/(^\s*)\bin\b/gm,"$1varying");let n=/out vec4 (.*?);/.exec(t);if(n){let a=n[1];t=t.replace(/out.*?;/,""),t=t.replace(new RegExp(`\\b${a}\\b`,"g"),"gl_FragColor")}}let s=this.gl.createShader(e);this.gl.shaderSource(s,t),this.gl.compileShader(s);let r=this.gl.getShaderInfoLog(s);if(this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS))r&&console.warn(r);else{let n=/ERROR: 0:(\d+):/.exec(r);if(n){let a=parseFloat(n[1]),p=t.split(`
`),u=e===this.gl.VERTEX_SHADER?"Vertex Shader":"Fragment Shader";throw console.groupCollapsed(`${u} source`),console.warn(t),console.groupEnd(),new Error(`${u}: ${r}
at: ${p[a-1].replace(/^\s*/,"")}`)}else throw new Error(r)}let o=this._attachedShaders.get(e);if(o&&(this.gl.detachShader(this._program,o),this.gl.deleteShader(o)),this.gl.attachShader(this._program,s),this.gl.deleteShader(s),this._attachedShaders.set(e,s),this._attachedShaders.size===2){this.gl.linkProgram(this._program);let n=this.gl.getProgramInfoLog(this._program);if(this.gl.getProgramParameter(this._program,this.gl.LINK_STATUS))n&&console.warn(n);else throw new Error(n);this._attributesLocations=new Map,this._uniformLocations=new Map,this.use(),this.uniforms.clear(),this._textureUnits.clear();let a=0;for(let[p,u]of Object.entries(this._shader.uniforms))this.uniformTypes.get(p).startsWith("sampler")&&(this._textureUnits.set(p,a),a++),this.uniforms.set(p,u)}}};var U=class extends H{constructor({gl:e,width:t=void 0,height:s=void 0,columns:r=void 0,rows:o=void 0,normals:n=!1,uvs:a=!1,attributes:p=void 0,program:u=new O({gl:e,shader:new g({vertexChunks:[["start",`
            in vec3 position;
          `],["end",`
            gl_Position = vec4(position, 1.);
          `]]})})}){super({gl:e,geometry:new B(Object.assign({gl:e,attributes:p},new $({width:t,height:s,columns:r,rows:o,normals:n,uvs:a}))),program:u})}};var K=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`
      <style>
        :host {
          display: block;
          touch-action: none;
        }
        
        canvas {
          width: 100%;
          height: 100%;
          max-height: 100%;
        }
      </style>
      <canvas></canvas>
    `,this.canvas=this.shadowRoot.querySelector("canvas"),this.gl=this.canvas.getContext("webgl2"),this.gl||(this.gl=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl")),new ResizeObserver(t=>{let s=t[0].contentRect.width,r=t[0].contentRect.height;this.canvas.width=s*window.devicePixelRatio,this.canvas.height=r*window.devicePixelRatio,this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.object.program.uniforms.set("glslCanvasSize",[s,r]),this.draw()}).observe(this.canvas),this.object=new U({gl:this.gl,width:2,height:2}),this.object.bind()}get shader(){return this._shader}set shader(e){var t,s;this._shader=e,this.object.program=new O({gl:this.gl,shader:new g({uniforms:{glslCanvasSize:[this.canvas.width,this.canvas.height],...this._shader.uniforms},vertexChunks:[["end",`
            vPosition = position.xy;
            gl_Position = vec4(position, 1.);
          `],...(t=this._shader.vertexChunks)!=null?t:[],["start",`
            uniform vec2 glslCanvasSize;
            in vec3 position;
            out vec2 vPosition;
          `]],fragmentChunks:[...(s=this._shader.fragmentChunks)!=null?s:[],["start",`
            uniform vec2 glslCanvasSize;
            in vec2 vPosition;
          `]]})}),this.object.bind(),this.draw()}get uniforms(){return this.object.program.uniforms}draw(e){this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.object.draw(e)}};customElements.define("damo-glslcanvas",K);var D=document.createElement("br");D.style.display="none";document.body.appendChild(D);var q=class{static styleToRGBA(e){D.style.color=e;let t=/rgba?\s*\(\s*(\d*),\s*(\d*)\s*,\s*(\d*)\s*(,\s*([.\d]*))?\s*\)/.exec(getComputedStyle(D).getPropertyValue("color"));return t?[parseInt(t[1])/255,parseInt(t[2])/255,parseInt(t[3])/255,t[5]!==void 0?parseFloat(t[5]):1]:null}static RGBToHSL(e,t=[]){let s=e[0],r=e[1],o=e[2],n=Math.max(s,r,o),a=Math.min(s,r,o),p,u,c=(a+n)/2;if(a===n)p=0,u=0;else{let h=n-a;switch(u=c<=.5?h/(n+a):h/(2-n-a),n){case s:p=(r-o)/h+(r<o?6:0);break;case r:p=(o-s)/h+2;break;case o:p=(s-r)/h+4;break}p/=6}return t[0]=p,t[1]=u,t[2]=c,t}static hexToRGB(e){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:null}static rgbToHex(e){let t="#";for(let s of e){let r=Math.floor(s*255).toString(16);t+=r.length==1?"0"+r:r}return t}};var Z=typeof Float32Array!="undefined"?Float32Array:Array;var wt=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var i=0,e=arguments.length;e--;)i+=arguments[e]*arguments[e];return Math.sqrt(i)});function Te(){var i=new Z(2);return Z!=Float32Array&&(i[0]=0,i[1]=0),i}function se(i,e){return i[0]=e[0],i[1]=e[1],i}function re(i,e,t){return i[0]=e,i[1]=t,i}function ne(i,e,t){return i[0]=e[0]+t[0],i[1]=e[1]+t[1],i}function ae(i,e,t){return i[0]=e[0]-t[0],i[1]=e[1]-t[1],i}function oe(i,e,t){return i[0]=e[0]*t[0],i[1]=e[1]*t[1],i}function he(i,e,t){return i[0]=e[0]*t,i[1]=e[1]*t,i}function ce(i,e){var t=e[0]-i[0],s=e[1]-i[1];return Math.hypot(t,s)}function le(i){var e=i[0],t=i[1];return Math.hypot(e,t)}function de(i){var e=i[0],t=i[1];return e*e+t*t}function ue(i,e){return i[0]=-e[0],i[1]=-e[1],i}function pe(i,e){var t=e[0],s=e[1],r=t*t+s*s;return r>0&&(r=1/Math.sqrt(r)),i[0]=e[0]*r,i[1]=e[1]*r,i}function fe(i,e){return i[0]*e[0]+i[1]*e[1]}function me(i,e,t){var s=e[0]*t[1]-e[1]*t[0];return i[0]=i[1]=0,i[2]=s,i}function be(i,e,t,s){var r=e[0],o=e[1];return i[0]=r+s*(t[0]-r),i[1]=o+s*(t[1]-o),i}function ge(i,e,t){var s=e[0],r=e[1];return i[0]=t[0]*s+t[3]*r+t[6],i[1]=t[1]*s+t[4]*r+t[7],i}function xe(i,e,t){var s=e[0],r=e[1];return i[0]=t[0]*s+t[4]*r+t[12],i[1]=t[1]*s+t[5]*r+t[13],i}function ve(i,e,t,s){var r=e[0]-t[0],o=e[1]-t[1],n=Math.sin(s),a=Math.cos(s);return i[0]=r*a-o*n+t[0],i[1]=r*n+o*a+t[1],i}function we(i,e){return i[0]===e[0]&&i[1]===e[1]}var Mt=function(){var i=Te();return function(e,t,s,r,o,n){var a,p;for(t||(t=2),s||(s=0),r?p=Math.min(r*t+s,e.length):p=e.length,a=s;a<p;a+=t)i[0]=e[a],i[1]=e[a+1],o(i,i,n),e[a]=i[0],e[a+1]=i[1];return e}}();var A=class extends Float32Array{static distance(e,t){return ce(e,t)}constructor(e=[0,0]){super(e);return this}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}set(e,t){return re(this,e,t),this}copy(e){return se(this,e),this}add(e){return ne(this,this,e),this}multiply(e){return oe(this,this,e),this}get size(){return le(this)}get squaredSize(){return de(this)}subtract(e){return ae(this,this,e),this}negate(e=this){return ue(this,e),this}cross(e,t){return me(this,e,t),this}scale(e){return he(this,this,e),this}normalize(){return pe(this,this)}dot(e){return fe(this,e)}distance(e){return A.distance(this,e)}equals(e){return we(this,e)}applyMatrix3(e){return ge(this,this,e),this}applyMatrix4(e){return xe(this,this,e),this}rotate(e,t){ve(this,this,e,t)}lerp(e,t){be(this,this,e,t)}clone(){return new A(this)}};var w=class{static powerIn(e,t=2){return Math.pow(e,t)}static powerOut(e,t=2){return 1-Math.abs(Math.pow(e-1,t))}static powerInOut(e,t=2){return e<.5?w.powerIn(e*2,t)/2:w.powerOut(e*2-1,t)/2+.5}static backIn(e,t=1.7){return(1+t)*e*e*e-t*e*e}static backOut(e,t=1.7){return 1+(1+t)*Math.pow(e-1,3)+t*Math.pow(e-1,2)}static backInOut(e,t=1.7){return e<.5?w.backIn(e*2,t)/2:w.backOut(e*2-1,t)/2+.5}};var ye=new Map,_e=(i,e,{duration:t=0,delay:s=0,easing:r=a=>a,onupdate:o=()=>{},fill:n="none"}={})=>{let a=0,p,u=new Promise(d=>p=d),c=ye.get(i);c||(c=new Set,ye.set(i,c));let h=new Map(Object.entries(e));for(let d of c)for(let f of h.keys())d.delete(f);c.add(h);for(let[d,f]of h)f instanceof Array||h.set(d,[i[d],f]);let l=()=>{t=t||1,a+=_.deltaTime;let d,f=!0;if(a<=s?(d=0,f=n==="both"||n==="backwards"):a>=s+t?d=1:(d=Math.max(a-s,0)/t,d=r(d)),f)for(let[b,m]of h)i[b]=(m[1]-m[0])*d+m[0];o(),d===1&&(n!=="both"&&n!=="forwards"&&_.delete(l),p())};return l(),_.add(l),{finished:u,cancel:()=>{_.delete(l)}}};var Ae=15;window.customElements.define("bea-website-button",class extends ie{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
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

  damo-glslcanvas {
    position: absolute;
    width: calc(100% + var(--hover-margin) * 2);
    height: calc(100% + var(--hover-margin) * 2);
    top: calc(var(--hover-margin) * -1);
    left: calc(var(--hover-margin) * -1);
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: .5;
  }

  path {
    fill: red;
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
<damo-glslcanvas></damo-glslcanvas>
<button id="focusable"></button>
<slot>Button</slot>
<!-- <svg width="218" height="84" viewBox="0 0 218 84" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M0 29.9373C0 15.9659 10.6496 4.35013 24.4408 3.27898C80.7305 -1.09299 137.27 -1.09299 193.559 3.27898C207.35 4.35013 218 15.9659 218 29.9372V54.0627C218 68.0341 207.35 79.6499 193.559 80.721C137.27 85.093 80.7305 85.093 24.4408 80.721C10.6496 79.6499 0 68.0341 0 54.0628V29.9373Z" />
</svg> -->`,this._focusable=this.shadowRoot.querySelector("#focusable"),this._pointerPosition=new A,this._pointerPositionEased=new A,this._pointerHover=0,this._glslCanvas=this.shadowRoot.querySelector("damo-glslcanvas"),this._glslCanvas.style.setProperty("--hover-margin",`${Ae}px`),this._glslCanvas.shader={fragmentChunks:[["start",`
          uniform vec4 color;
          uniform vec2 pointerPosition;
          uniform float pointerHover;
        `],["end",`
          vec2 boxSize = (glslCanvasSize - ${Ae.toFixed(1)} * 2.);
          vec2 marginSizeRatio = glslCanvasSize / boxSize;
          vec2 aspectRatio = vec2(boxSize.x / boxSize.y, 1.);

          float pointerDistance = max(0., 1. - distance(vPosition * aspectRatio * marginSizeRatio, pointerPosition * aspectRatio * marginSizeRatio) * .3);
          pointerDistance = smoothstep(0., 1., pointerDistance);
          if(pointerPosition.x == 0. && pointerPosition.y == 0. ) pointerDistance = 0.;

          vec2 boxPosition = vPosition;
          boxPosition *= marginSizeRatio;
          boxPosition.y *= 1. + -(cos(boxPosition.x * 1.67) * .5 + .5) * .2;
          boxPosition.x *= aspectRatio.x;
          // boxPosition *= 1. - pointerDistance * .3;
          vec2 size = vec2(aspectRatio.x, .8);
          vec4 borderRadius = vec4(.55);
          borderRadius.xy = (boxPosition.x > 0.0) ? borderRadius.xy : borderRadius.zw;
          borderRadius.x = (boxPosition.y > 0.0) ? borderRadius.x : borderRadius.y;
          vec2 q = abs(boxPosition) - size + borderRadius.x;
          float df = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x;
          df -= pointerDistance * .2;
          df -= cos((1. - pointerHover) * (1. - pointerDistance) * 8.) * (1. - pointerHover) * .1 * smoothstep(0., .1, pointerHover);

          float aa = 1. / min(glslCanvasSize.x, glslCanvasSize.y) * 1.5;
          float opacity = 1. - smoothstep(-aa, 0., df);
          fragColor = vec4(color.rgb * opacity * color.a, opacity * color.a);
          // fragColor = vec4(vec3(df), 1.);
          // fragColor = vec4(vec3(pointerDistance), 1.);
        `]]};let i;new ResizeObserver(()=>i=this._glslCanvas.getBoundingClientRect()).observe(this),window.addEventListener("resize",()=>i=this._glslCanvas.getBoundingClientRect()),this._pointerHovering=!1,this.addEventListener("pointerenter",e=>{i=this._glslCanvas.getBoundingClientRect(),this._pointerHovering=!0,_e(this,{_pointerHover:1},{duration:600,easing:t=>w.powerInOut(t)})}),this.addEventListener("pointerleave",e=>{this._pointerHovering=!1}),window.addEventListener("pointermove",e=>{!i||(this._pointerPosition.x=(e.clientX-i.x)/i.width*2-1,this._pointerPosition.y=-((e.clientY-i.y)/i.height*2-1))})}focus(){this._focusable.focus()}update(){this._pointerHovering||(this._pointerHover+=-this._pointerHover*.2),this._pointerPositionEased.lerp(this._pointerPosition,.2),this._glslCanvas.draw({uniforms:{color:q.styleToRGBA(getComputedStyle(this).getPropertyValue("background-color")),pointerHover:this._pointerHover,pointerPosition:this._pointerPositionEased}})}});window.customElements.define("bea-website-mailchimpform",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
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
  <input type="email" value="" name="EMAIL" placeholder="Entrez votre adresse email">
  <input type="submit" style="display: none;">
  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
      name="b_9478a676a23e73e9922afc992_9e77fea305" tabindex="-1" value=""></div>
  <bea-website-button>M'inscrire</bea-website-button>
</form>`;let i=this.shadowRoot.querySelector("bea-website-button"),e=this.shadowRoot.querySelector("form");i.addEventListener("click",()=>{this.dispatchEvent(new Event("submit",{bubbles:!0})),e.submit()}),e.addEventListener("submit",t=>{this.dispatchEvent(new Event("submit",t))})}});window.customElements.define("bea-website-animatedtext",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        slot {
          display: none;
        }

        #content {
          display: contents;
        }

        #content span {
          will-change: transform, opacity;
          margin-right: -4px;
          display: inline-block;
        }
      </style>
      <slot></slot>
      <div id="content"></div>
    `,this._spans=[],this._content=this.shadowRoot.querySelector("#content")}connectedCallback(){this._compute()}async show(){return this._changeVisibility(!1)}async hide(){return this._changeVisibility(!0)}async _changeVisibility(i){if(i===this.hidden)return;this.hidden=i,this.style.pointerEvents=this.hidden?"none":"";let e=[];for(let[t,s]of this._spans.entries()){s.style.transformOrigin="50% 75%";let r=this.hidden?600:800,o=s.animate([{transform:`translateY(0) scaleX(1) scaleY(${this.hidden?1:0})`,opacity:this.hidden?1:0},{transform:"translateY(-5px) scaleX(.8) scaleY(1.2)",opacity:this.hidden?.6:1,offset:this.hidden?.4:.65},{transform:`translateY(0) scaleX(1) scaleY(${this.hidden?0:1}`,opacity:this.hidden?0:1}],{fill:"both",duration:r,delay:r/16*t,easing:this.hidden?"cubic-bezier(.6,0,.3,-0.4)":"cubic-bezier(.6,1.45,.6,1)"});e.push(o.finished)}await Promise.all(e)}_compute(){this._spans=[],this._content.innerHTML="";for(let i of this.childNodes){if(i.nodeType!==Node.TEXT_NODE){this._content.appendChild(i.cloneNode());continue}for(let e of i.textContent){let t=document.createElement("span");t.innerHTML=e===" "?"&nbsp;":e,this._spans.push(t),this._content.appendChild(t)}}}get textContent(){return super.textContent}set textContent(i){super.textContent=i,this._compute()}get innerHTML(){return super.innerHTML}set innerHTML(i){super.innerHTML=i,this._compute()}});window.customElements.define("bea-icon",class extends HTMLElement{static get observedAttributes(){return["icon"]}constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    --stroke-width: 1px;
    --size: 25px;
    --icon-size: 100%;
    display: block;
    position: relative;
    width: var(--size);
    height: var(--size);
    box-sizing: border-box;
    color: black;
  }

  :host([type=fill]), :host([type=stroke]) {
    --icon-size: 33%;
    border-radius: 50%;
  }
  
  :host([type=fill]) {
    color: white;
    background-color: black;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  }

  :host([type=stroke]) {
    border: var(--stroke-width) solid;
  }

  :host([type=fill]) path {
    stroke: white;
  }

  #icon-container {
    display: contents;
    padding: inherit;
  }

  svg {
    padding: inherit;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  svg * {
    stroke-width: var(--stroke-width);
    vector-effect: non-scaling-stroke;
    fill: currentColor;
  }

  :host([type=fill]) svg, :host([type=stroke]) svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }
</style>
<div id="icon-container"></div>`,this._iconContainer=this.shadowRoot.querySelector("#icon-container")}attributeChangedCallback(i,e,t){switch(i){case"icon":this._loadIcon(t);break}}async _loadIcon(i){let e=await fetch(`node_modules/@bea-org/bea-icon/${i}.svg`).then(t=>t.text());this._iconContainer.innerHTML=e}get icon(){return this.getAttribute("icon")}set icon(i){this.setAttribute("icon",i)}});window.customElements.define("bea-website-home",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  @import "./node_modules/@bea-org/bea-color/index.css";

  :host {
    display: grid;
    position: relative;
    line-height: 1;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-areas: "content media";
    font-family: Pangram;
    justify-items: center;
    align-items: center;
  }

  bea-website-backgroundcircle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    width: 100%;
    height: 100%;
    filter: drop-shadow(40px 30px 30px #6B7F9933);
  }

  #phone video {
    width: 100%;
    height: 100%;
    -webkit-mask-image: url(./node_modules/@bea-org/bea-website-home/video-mask.svg);
    mask-image: url(./node_modules/@bea-org/bea-website-home/video-mask.svg);
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  #content {
    grid-area: content;
    color: var(--bea-color-blue);
    display: grid;
    max-width: calc(100% - 100px);
    grid-auto-columns: minmax(0, 1fr);
    justify-items: left;
  }

  h2 {
    position: relative;
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

  p {
    color: var(--bea-color-darkblue);
    margin: 0;
    font-style: normal;
    font-weight: bold;
    line-height: 1.2;
  }

  #content p span {
    color: var(--bea-color-blue);
  }

  #emailformpopin {
    display: grid;
    background-color: var(--bea-color-ivory);
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 560px;
    max-width: calc(100% - 32px);
    box-sizing: border-box;
    box-shadow: 40px 30px 30px #6b7f9933;
    will-change: transform, opacity, visibility;
    transition-property: transform, opacity, visibility;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0.43, 1.84, 0.48, 0.99);
    transform: translate(-50%, -50%)
  }

  :host(:not([emailformopen])) #emailformpopin {
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

  #emailformclosebutton,
  #asterisk {
    position: absolute;
    cursor: pointer;
    transition-property: transform;
    transition-duration: .4s;
  }

  #emailformclosebutton:hover,
  #asterisk:hover {
    transform: rotate(90deg);
  }

  #emailformclosebutton {
    background: none;
    border: none;
    padding: 0;
  }

  #emailformclosebutton bea-icon {
    background-color: var(--bea-color-ivory);
    color: var(--bea-color-darkblue);
    --size: 50px;
    --icon-size: 12px;
  }

  #asterisk {
    --size: 0.57em;
    background-color: var(--bea-color-blue);
    left: 1.95em;
  }

  #emailformbutton {
    background-color: var(--bea-color-green);
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

  @media (min-width: 1280px) {
    :host {
      grid-template-rows: minmax(0, 1fr) 0;
    }

    #phone {
      max-width: 80vw;
      max-height: 80vh;
      animation-duration: 3s;
      animation-name: float;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
    }

    #emailformbutton {
      font-size: 22px;
    }

    #emailformpopin {
      padding: 50px 45px;
      gap: 45px;
    }

    #emailformclosebutton {
      top: 0;
      left: calc(100% + 24px);
    }

    #content {
      width: 520px;
      gap: 30px;
    }

    h2 {
      font-size: 88px;
    }

    #logo {
      font-size: 100px;
    }

    p {
      font-size: 24px;
      max-width: 380px;
    }

    bea-website-backgroundcircle {
      left: -10%;
      width: 120%;
      justify-items: start;
      --size-ratio: 2;
    }
  }

  @media (max-width: 1280px) {
    :host {
      grid-template-areas: "emailbutton""content""media";
      grid-template-rows: 84px auto auto;
      gap: 32px;
    }

    #emailformbutton {
      font-size: 16px;
      padding: 20px 24px;
    }

    #emailformclosebutton {
      bottom: calc(100% + 24px);
      right: 0;
    }

    #emailformpopin {
      padding: 30px 24px;
      gap: 24px;
    }

    bea-website-mailchimpform {
      grid-template-columns: 1fr;
    }

    #content {
      width: 260px;
      gap: 26px;
      margin-top: -16px;
    }

    #media {
      padding-bottom: 32px;
    }

    #phone {
      width: 260px;
    }

    h2 {
      font-size: 50px;
    }

    #logo {
      font-size: 56px;
    }

    p {
      font-size: 18px;
      max-width: 300px;
    }

    bea-website-backgroundcircle {
      top: 96px;
      height: calc(100% - 96px);
      --size-ratio: 2;
      align-items: start;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(5px);
    }

    100% {
      transform: translateY(-5px);
    }
  }
</style>
<div id="content">
  <h2>
    <!-- <bea-icon id="asterisk" icon="asterisk" type="fill"></bea-icon> -->
    <span id="logo">B\xE9a</span>
    <span>le don</span>
    <bea-website-animatedtext></bea-website-animatedtext>
  </h2>
  <p>L\u2019application mobile b\xE9n\xE9vole qui simplifie <span>(enfin)</span> le don aux associations</p>
  <bea-website-button id="emailformbutton">Tenez-moi inform\xE9(e)</bea-website-button>
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
  <div id="emailformtitle">On vous en dit plus bient\xF4t !</div>
  <bea-website-mailchimpform></bea-website-mailchimpform>
  <button id="emailformclosebutton">
    <bea-icon icon="close" type="fill"></bea-icon>
  </button>
</section>`,this.shadowRoot.querySelector("#emailformbutton").addEventListener("click",()=>{this.toggleAttribute("emailformopen",!0)}),this.shadowRoot.querySelector("#emailformclosebutton").addEventListener("click",()=>this.toggleAttribute("emailformopen",!1)),this.shadowRoot.querySelector("#overlay").addEventListener("click",()=>this.toggleAttribute("emailformopen",!1)),this.shadowRoot.querySelector("#emailformpopin").addEventListener("submit",()=>this.toggleAttribute("emailformopen",!1));let t=this.shadowRoot.querySelector("bea-website-animatedtext"),s=1500,r=["facile","s\xE9curis\xE9","sur-mesure"],o=["var(--bea-color-green)","var(--bea-color-blue)","var(--bea-color-coral)"],n=-1,a=async()=>{await t.hide(),n=(n+1)%r.length,t.innerHTML=r[n],t.style.color=o[n],await t.show(),setTimeout(a,s)};a()}});window.customElements.define("bea-website",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
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
  <h1 id="name">B\xE9a</h1>
</div>
<!-- <bea-website-menu></bea-website-menu> -->
<bea-website-home></bea-website-home>`}});
