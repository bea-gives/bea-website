var Ee=Object.defineProperty;var Ae=(i,t)=>{for(var e in t)Ee(i,e,{get:t[e],enumerable:!0})};var Ht=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(Ht(i,t,"read from private field"),e?e.call(i):t.get(i)),a=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},o=(i,t,e,n)=>(Ht(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e);var R=(i,t,e)=>(Ht(i,t,"access private method"),e);document.fonts.add(new FontFace("Mulish","url(node_modules/@beagives/bea-font/mulish.woff2)"));document.fonts.add(new FontFace("Pangram","url(node_modules/@beagives/bea-font/pangram-regular.woff2)"));document.fonts.add(new FontFace("Pangram","url(node_modules/@beagives/bea-font/pangram-bold.woff2)",{weight:700}));document.fonts.add(new FontFace("Pangram","url(node_modules/@beagives/bea-font/pangram-extrabold.woff2)",{weight:800}));window.customElements.define("bea-logo",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
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
    left: 20%;
    top: 24%;
    width: 60%;
    height: 60%;
  }

  :host([light]:not([icon])) path:first-of-type {
    fill: white;
  }

  :host([icon]:not([light])) path:first-of-type {
    fill: white;
  }

  :host([light]) #background {
    background-color: white;
  }
</style>
<div id="background"></div>
<svg width="577" height="515" viewBox="0 0 577 515" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M560.108 71.5534C541.428 37.0715 430.908 -78.3952 288.096 88.7779L92.5563 304.144C88.1382 309.01 88.2861 316.644 92.8891 321.323L279.781 511.269C284.383 515.946 291.748 515.951 296.356 511.28L526.094 278.379C573.72 231.843 594.122 135.314 560.108 71.5534Z"
    fill="#6091FF" />
  <path
    d="M261.154 43.2483C263.795 45.7716 263.869 49.9183 261.481 52.6829C260.846 53.4189 260.21 54.1597 259.573 54.9052L56.6047 276.928C53.982 279.797 49.5124 279.99 46.7838 277.222C17.9151 247.932 1.90533e-06 207.091 0 161.912C-4.02145e-06 72.8008 69.6965 0.562138 155.672 0.562134C196.368 0.562132 233.417 16.7483 261.154 43.2483Z"
    fill="#FBD874" />
</svg>`}});window.customElements.define("bea-website-backgroundcircle",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
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
</svg>`;let i=this.shadowRoot.querySelector("svg");new ResizeObserver(e=>{let n=e[0].contentRect.width,r=e[0].contentRect.height,c=Math.max(n,r);i.style.setProperty("--size",`${c}px`)}).observe(this)}});var It=class extends Set{dispatch(t){for(let e of this)e(t)}};var J,D,Q,tt,et,$t,xt,vt=class extends It{constructor(){super();a(this,et);a(this,D,void 0);a(this,Q,void 0);a(this,tt,void 0);a(this,xt,()=>{o(this,tt,requestAnimationFrame(s(this,xt))),o(this,D,window.performance.now()),this.deltaTime=s(this,D)-s(this,Q),this.smoothDeltatime+=(this.deltaTime-this.smoothDeltatime)*.05,this.timeScale=this.deltaTime/s(vt,J),this.smoothTimeScale=this.smoothDeltatime/s(vt,J),o(this,Q,s(this,D)),this.dispatch()});R(this,et,$t).call(this),document.addEventListener("visibilitychange",()=>{R(this,et,$t).call(this)})}add(t){return this.size||(R(this,et,$t).call(this),s(this,xt).call(this)),super.add(t)}delete(t){let e=super.delete(t);return this.size||cancelAnimationFrame(s(this,tt)),e}clear(){cancelAnimationFrame(s(this,tt)),super.clear()}},qt=vt;J=new WeakMap,D=new WeakMap,Q=new WeakMap,tt=new WeakMap,et=new WeakSet,$t=function(){o(this,D,o(this,Q,window.performance.now())),this.deltaTime=s(vt,J),this.smoothDeltatime=this.deltaTime,this.timeScale=1,this.smoothTimeScale=this.timeScale},xt=new WeakMap,a(qt,J,1e3/60);var bt=new qt;var Vt=1,Qt=2,Wt=4,te=8,C,k,x,L,S,ee=class extends HTMLElement{constructor(){super();a(this,x);a(this,C,void 0);a(this,k,()=>console.log("DamdomTickerElement.callback needs to be set"));new IntersectionObserver(e=>{let n=!1;for(let r of e)r.isIntersecting&&(n=!0);n?o(this,x,s(this,x,L)&~Qt,S):o(this,x,s(this,x,L)|Qt,S)}).observe(this),document.addEventListener("visibilitychange",()=>{document.hidden?o(this,x,s(this,x,L)|Wt,S):o(this,x,s(this,x,L)&~Wt,S)})}connectedCallback(){o(this,x,s(this,x,L)&~te,S),document.hidden&&o(this,x,s(this,x,L)|Wt,S),s(this,x,L)&Vt||s(this,k).call(this)}disconnectedCallback(){o(this,x,s(this,x,L)|te,S)}play(){o(this,x,s(this,x,L)&~Vt,S)}pause(){o(this,x,s(this,x,L)|Vt,S)}get paused(){return!!s(this,x,L)}set callback(t){bt.delete(s(this,k)),o(this,k,t),s(this,C)||bt.add(s(this,k))}};C=new WeakMap,k=new WeakMap,x=new WeakSet,L=function(){return s(this,C)},S=function(t){s(this,C)!==t&&(o(this,C,t),s(this,C)?bt.delete(s(this,k)):bt.add(s(this,k)))};var ie=ee;var Pt=class{constructor({width:t=1,height:e=1,columns:n=1,rows:r=1,positions:c=!0,normals:l=!0,uvs:h=!0,indices:d=!0,facingUp:p=!1}={}){let b=n+1,T=r+1;c&&(this.positions=new Float32Array((n+1)*(r+1)*3)),l&&(this.normals=new Float32Array((n+1)*(r+1)*3)),h&&(this.uvs=new Float32Array((n+1)*(r+1)*2));for(let u=0;u<T;u++){let m=1-u/r,f=(u/r*e-e*.5)*(p?-1:1);for(let E=0;E<b;E++){let w=E/n,_=u*b+E,P=p?2:1;c&&(this.positions[_*3]=w*t-t*.5,this.positions[_*3+P]=f);let A=p?1:2;l&&(this.normals[_*3+A]=1),h&&(this.uvs[_*2]=w,this.uvs[_*2+1]=1-m)}}if(d){let u=n*r*6;u<2**8?this.indices=new Uint8Array(u):u<2**16?this.indices=new Uint16Array(u):this.indices=new Uint32Array(u);for(let m=0;m<r;m++)for(let f=0;f<n;f++){let E=f+b*m,w=f+b*(m+1),_=f+1+b*(m+1),P=f+1+b*m,A=m*n+f;this.indices[A*6]=E,this.indices[A*6+1]=P,this.indices[A*6+2]=w,this.indices[A*6+3]=w,this.indices[A*6+4]=P,this.indices[A*6+5]=_}}}};var wt,zt,Gt,Ct=class{constructor({gl:t,geometry:e=void 0,program:n=void 0}){a(this,wt,void 0);a(this,zt,void 0);a(this,Gt,void 0);this.gl=t,o(this,zt,e),o(this,Gt,n);let r=t.getExtension("OES_vertex_array_object");r&&(this.gl.createVertexArray=r.createVertexArrayOES.bind(r),this.gl.bindVertexArray=r.bindVertexArrayOES.bind(r)),o(this,wt,this.gl.createVertexArray()),e&&n&&this.add({geometry:e,program:n})}add({geometry:t=void 0,program:e=void 0}={}){this.bind(),e.attributes.set(t.attributes),t.indices&&t.indices.buffer.bind(),this.unbind()}bind(){this.gl.bindVertexArray(s(this,wt))}unbind(){this.gl.bindVertexArray(null)}};wt=new WeakMap,zt=new WeakMap,Gt=new WeakMap;var it,st,nt,yt,Et,v,At,O,B,U,Y,H,jt=class{constructor({gl:t,data:e=void 0,width:n=void 0,height:r=void 0,target:c=t.TEXTURE_2D,level:l=0,internalFormat:h=t.RGBA8||t.RGBA,format:d=t.RGBA,type:p=t.UNSIGNED_BYTE,autoGenerateMipmap:b=!0,minFilter:T=b?t.LINEAR_MIPMAP_LINEAR:t.LINEAR,magFilter:u=t.LINEAR,wrapS:m=t.CLAMP_TO_EDGE,wrapT:f=t.CLAMP_TO_EDGE,flipY:E=!1}){a(this,it,void 0);a(this,st,void 0);a(this,nt,void 0);a(this,yt,void 0);a(this,Et,void 0);a(this,v,void 0);a(this,At,0);a(this,O,void 0);a(this,B,void 0);a(this,U,void 0);a(this,Y,void 0);a(this,H,void 0);this.gl=t,o(this,it,this.gl.createTexture()),o(this,st,n),o(this,nt,r),o(this,v,c),this.autoGenerateMipmap=b,this.level=l,this.internalFormat=h,this.format=d,this.type=p,this.minFilter=T,this.magFilter=u,this.wrapS=m,this.wrapT=f,this.flipY=E,this.data=e}generateMipmap(){this.bind(),this.gl.generateMipmap(s(this,v)),this.unbind()}set data(t){this._data=t,this._data&&this._data.length===void 0&&(o(this,yt,this._data.width||this._data.videoWidth),o(this,Et,this._data.height||this._data.videoHeight)),this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.gl instanceof WebGLRenderingContext&&this._data&&this._data.length===void 0?this.gl.texImage2D(s(this,v),this.level,this.internalFormat,this.format,this.type,this._data):this.gl.texImage2D(s(this,v),this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this._data||null),this.autoGenerateMipmap&&this.gl.generateMipmap(s(this,v)),this.unbind()}get data(){return this._data}set width(t){o(this,st,t),this.data=this.data}get width(){return s(this,st)||s(this,yt)}set height(t){o(this,nt,t),this.data=this.data}get height(){return s(this,nt)||s(this,Et)}set minFilter(t){s(this,H)!==t&&(o(this,H,t),this.bind(),this.gl.texParameteri(s(this,v),this.gl.TEXTURE_MIN_FILTER,s(this,H)),this.unbind())}get minFilter(){return s(this,H)}set magFilter(t){s(this,Y)!==t&&(o(this,Y,t),this.bind(),this.gl.texParameteri(s(this,v),this.gl.TEXTURE_MAG_FILTER,s(this,Y)),this.unbind())}get magFilter(){return s(this,Y)}set wrapS(t){s(this,U)!==t&&(o(this,U,t),this.bind(),this.gl.texParameteri(s(this,v),this.gl.TEXTURE_WRAP_S,s(this,U)),this.unbind())}get wrapS(){return s(this,U)}set wrapT(t){s(this,B)!==t&&(o(this,B,t),this.bind(),this.gl.texParameteri(s(this,v),this.gl.TEXTURE_WRAP_T,s(this,B)),this.unbind())}get wrapT(){return s(this,B)}set flipY(t){s(this,O)!==t&&(o(this,O,t),this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,s(this,O)),this.unbind())}get flipY(){return s(this,O)}get glTexture(){return s(this,it)}bind({unit:t=0}={}){o(this,At,t),this.gl.activeTexture(this.gl.TEXTURE0+t),this.gl.bindTexture(s(this,v),s(this,it))}unbind({unit:t=s(this,At)}={}){this.gl.activeTexture(this.gl.TEXTURE0+t),this.gl.bindTexture(s(this,v),null)}clone(){return new jt(this)}},Nt=jt;it=new WeakMap,st=new WeakMap,nt=new WeakMap,yt=new WeakMap,Et=new WeakMap,v=new WeakMap,At=new WeakMap,O=new WeakMap,B=new WeakMap,U=new WeakMap,Y=new WeakMap,H=new WeakMap;var rt,ot,q,Rt,Mt,se,Dt=class{constructor({gl:t,geometry:e=void 0,program:n=void 0}){a(this,Mt);a(this,rt,new Set);a(this,ot,new Map);a(this,q,void 0);a(this,Rt,void 0);this.gl=t,this.geometry=e,this.program=n}get program(){return s(this,q)}set program(t){o(this,q,t),R(this,Mt,se).call(this)}get geometry(){return s(this,Rt)}set geometry(t){o(this,Rt,t),R(this,Mt,se).call(this)}get vertexArray(){return s(this,ot).get(this.geometry).get(this.program)}bind(){this.program.use(),this.vertexArray.bind();for(let[t,{type:e}]of this.program.uniformData)if(e.startsWith("sampler")){let n=this.program.uniforms.get(t);n instanceof Nt&&(n.bind({unit:this.program.textureUnits.get(t)}),s(this,rt).add(n))}}draw({mode:t=this.gl.TRIANGLES,bind:e=!1,uniforms:n={},instanceCount:r=void 0,...c}={}){e&&this.bind();for(let[l,h]of Object.entries(n))this.program.uniforms.set(l,h);this.geometry.draw({mode:t,instanceCount:r,...c}),e&&this.unbind()}unbind(){this.vertexArray.unbind();for(let t of s(this,rt))t.unbind(),s(this,rt).delete(t)}};rt=new WeakMap,ot=new WeakMap,q=new WeakMap,Rt=new WeakMap,Mt=new WeakSet,se=function(){if(!this.program||!this.geometry)return;let t=s(this,ot).get(this.geometry);t||(t=new Map,s(this,ot).set(this.geometry,t)),t.get(s(this,q))||t.set(s(this,q),new Ct({gl:this.gl,geometry:this.geometry,program:this.program}))};var $,ht,at=class{constructor({gl:t,data:e=null,target:n=t.ARRAY_BUFFER,usage:r=t.STATIC_DRAW}){a(this,$,void 0);a(this,ht,void 0);this.gl=t,this.target=n,this.usage=r,o(this,$,this.gl.createBuffer()),e&&(this.data=e)}set data(t){o(this,ht,t),this.bind(),this.gl.bufferData(this.target,s(this,ht),this.usage),this.unbind()}get data(){return s(this,ht)}bind({target:t=this.target,index:e=void 0,offset:n=0,size:r=void 0}={}){e===void 0?this.gl.bindBuffer(t,s(this,$)):r===void 0?this.gl.bindBufferBase(t,e,s(this,$)):this.gl.bindBufferRange(t,e,s(this,$),n,r)}unbind({target:t=this.target,index:e=void 0,offset:n=0,size:r=void 0}={}){e===void 0?this.gl.bindBuffer(t,null):r===void 0?this.gl.bindBufferBase(t,e,null):this.gl.bindBufferRange(t,e,null,n,r)}};$=new WeakMap,ht=new WeakMap;var Re=new Map([[WebGLRenderingContext.BYTE,Int8Array],[WebGLRenderingContext.UNSIGNED_BYTE,Uint8Array],[WebGLRenderingContext.SHORT,Int16Array],[WebGLRenderingContext.UNSIGNED_SHORT,Uint16Array],[WebGLRenderingContext.INT,Int32Array],[WebGLRenderingContext.UNSIGNED_INT,Uint32Array],[WebGLRenderingContext.FLOAT,Float32Array]]),Me=new Map([[Int8Array,WebGLRenderingContext.BYTE],[Uint8Array,WebGLRenderingContext.UNSIGNED_BYTE],[Int16Array,WebGLRenderingContext.SHORT],[Uint16Array,WebGLRenderingContext.UNSIGNED_SHORT],[Int32Array,WebGLRenderingContext.INT],[Uint32Array,WebGLRenderingContext.UNSIGNED_INT],[Float32Array,WebGLRenderingContext.FLOAT],[Float64Array,WebGLRenderingContext.FLOAT]]),Tt,F=class{constructor({gl:t,data:e=null,target:n=t.ARRAY_BUFFER,size:r=1,componentType:c=Me.get(e instanceof at?(T=>(T=e.data)==null?void 0:T.constructor)():e==null?void 0:e.constructor),byteOffset:l=0,normalized:h=!1,byteStride:d=0,count:p=(e==null?void 0:e.length)/r||1,divisor:b=0}){a(this,Tt,void 0);this.gl=t,this.data=e,this.size=r,this.componentType=c,this.byteOffset=l,this.normalized=h,this.byteStride=d,this.count=p,this.divisor=b,o(this,Tt,e instanceof at?e:new at({gl:t,data:e,target:n}))}get buffer(){return s(this,Tt)}get typedArray(){return new(Re.get(this.componentType))(this.buffer.data,this.byteOffset,this.count*this.size)}};Tt=new WeakMap;var V,W,Ot=class{constructor({gl:t,positions:e=null,normals:n=null,uvs:r=null,attributes:c={},indices:l=null}){a(this,V,void 0);a(this,W,void 0);this.gl=t,this.indices=null,this.gl.getExtension("OES_element_index_uint"),o(this,V,()=>{}),o(this,W,()=>{});let h=this.gl.getExtension("ANGLE_instanced_arrays");h?(o(this,V,h.drawElementsInstancedANGLE.bind(h)),o(this,W,h.drawArraysInstancedANGLE.bind(h))):this.gl.drawElementsInstanced&&(o(this,V,this.gl.drawElementsInstanced.bind(this.gl)),o(this,W,this.gl.drawArraysInstanced.bind(this.gl))),this.attributes=new Map(c instanceof Map?c:Object.entries(c)),e&&this.attributes.set("position",new F({gl:t,data:e,size:3})),n&&this.attributes.set("normal",new F({gl:t,data:n,size:3})),r&&this.attributes.set("uv",new F({gl:t,data:r,size:2}));for(let[d,p]of this.attributes)p instanceof F||this.attributes.set(d,new F({gl:t,...p}));l&&(this.indices=new F({gl:this.gl,target:this.gl.ELEMENT_ARRAY_BUFFER,...l.length!==void 0?{data:l}:l}))}draw({mode:t=this.gl.TRIANGLES,elements:e=!!this.indices,count:n=e?this.indices.count:this.attributes.get("position").count,offset:r=this.indices?this.indices.byteOffset:0,type:c=e?this.indices.componentType:null,first:l=0,instanceCount:h=void 0}={}){e?h!==void 0?s(this,V).call(this,t,n,c,r,h):this.gl.drawElements(t,n,c,r):h!==void 0?s(this,W).call(this,t,l,n,h):this.gl.drawArrays(t,l,n)}};V=new WeakMap,W=new WeakMap;var ne=`#version 300 es
void main() {
  gl_Position = vec4(0., 0., 0., 1.);
}`,re=`#version 300 es
precision highp float;

out vec4 fragColor;

void main() {
  fragColor = vec4(1.);
}`;var Xt=i=>{let t=new Map,e=new Map,n=/struct\s*(.*)\s*{\s*([\s\S]*?)}/g,r=/^\s*(?:highp|mediump|lowp)?\s*(.[^ ]+) (.[^ ;[\]]+)\[? *(\d+)? *\]?/gm;for(let[,h,d]of i.matchAll(n)){let p={};for(let[,b,T,u]of d.matchAll(r)){let m=parseInt(u);p[T]={type:b,...m?{arrayLength:m}:{}}}e.set(h,p)}let c=/^\s*uniform (?:highp|mediump|lowp)? *(.[^ ]+) (.[^ ;[\]]+)\[? *(\d+)? *\]?/gm,l=(h,d,p=null)=>{let b=e.get(d);if(b){for(let[u,m]of Object.entries(b))l(`${h}.${u}`,m.type,m.arrayLength);return}let T={type:d,...p?{arrayLength:p}:{}};t.set(h,T)};for(let[,h,d,p]of i.matchAll(c))l(d,h,parseInt(p));return t};var Kt=new Map([["float","uniform1f"],["vec2","uniform2fv"],["vec3","uniform3fv"],["vec4","uniform4fv"],["int","uniform1i"],["ivec2","uniform2iv"],["ivec3","uniform3iv"],["ivec4","uniform4iv"],["uint","uniform1ui"],["uvec2","uniform2uiv"],["uvec3","uniform3uiv"],["uvec4","uniform4uiv"],["bool","uniform1i"],["bvec2","uniform2iv"],["bvec3","uniform3iv"],["bvec4","uniform4iv"],["mat2","uniformMatrix2fv"],["mat3","uniformMatrix3fv"],["mat4","uniformMatrix4fv"],["sampler2D","uniform1i"],["samplerCube","uniform1i"]]),y,ct,j,z,G,Lt,_t,X,dt,pt,ut,mt,K,Bt,lt=class{constructor({gl:t,uniforms:e={},vertex:n=ne,fragment:r=re,transformFeedbackVaryings:c=void 0}){a(this,K);a(this,y,void 0);a(this,ct,new Map);a(this,j,new Map);a(this,z,"");a(this,G,"");a(this,Lt,new Map);a(this,_t,new Map);a(this,X,new Map);a(this,dt,new Map);a(this,pt,new Map);a(this,ut,void 0);a(this,mt,(t,e)=>{var c;if(e===void 0)return;let n=(c=this.uniformData.get(t.replace(/\[\d*\]/,"")))==null?void 0:c.type;if(e instanceof Object&&!n){for(let l of[...Object.keys(e),...Object.keys(Object.getPrototypeOf(e))])s(this,mt).call(this,e[0]!==void 0?`${t}[${l}]`:`${t}.${l}`,e[l]);return}let r=s(this,pt).get(t);r===void 0&&(r=this.gl.getUniformLocation(s(this,y),t),s(this,pt).set(t,r)),r!==null&&(n.startsWith("mat")?this.gl[Kt.get(n)](r,!1,e):n.startsWith("sampler")?this.gl[Kt.get(n)](r,s(this,j).get(t)):this.gl[Kt.get(n)](r,e))});this.gl=t,o(this,z,n),o(this,G,r),o(this,y,t.createProgram()),o(this,ut,c);let l,h=this.gl.getExtension("ANGLE_instanced_arrays");h?l=h.vertexAttribDivisorANGLE.bind(h):this.gl.vertexAttribDivisor&&(l=this.gl.vertexAttribDivisor.bind(this.gl));let d=this;class p extends Map{set(u,{buffer:m=void 0,location:f=s(d,dt).get(u),size:E=1,componentType:w=t.FLOAT,normalized:_=!1,byteStride:P=0,byteOffset:A=0,divisor:ve=0}={}){if(u instanceof Map){for(let[we,ye]of u)this.set(we,ye);return}m.bind(),f===void 0&&(f=t.getAttribLocation(s(d,y),u),s(d,dt).set(u,f)),f!==-1&&(t.enableVertexAttribArray(f),d.gl instanceof WebGLRenderingContext||w===t.FLOAT||w===t.HALF_FLOAT?(w===t.UNSIGNED_INT&&(w=t.FLOAT),t.vertexAttribPointer(f,E,w,_,P,A)):t.vertexAttribIPointer(f,E,w,P,A),l(f,ve)),m.unbind(),super.set(u,{buffer:m,size:E,componentType:w,normalized:_,byteStride:P,byteOffset:A})}}class b extends Map{set(u,m){var f;return s(f=d,mt).call(f,u,m),super.set(u,m)}}s(this,ut)&&this.gl.transformFeedbackVaryings(s(this,y),s(this,ut),t.SEPARATE_ATTRIBS),R(this,K,Bt).call(this,this.gl.VERTEX_SHADER,s(this,z)),R(this,K,Bt).call(this,this.gl.FRAGMENT_SHADER,s(this,G)),this.attributes=new p,this.uniforms=new b(Object.entries(e))}set vertex(t){o(this,z,t),R(this,K,Bt).call(this,this.gl.VERTEX_SHADER,s(this,z))}get vertex(){return s(this,z)}set fragment(t){o(this,G,t),R(this,K,Bt).call(this,this.gl.FRAGMENT_SHADER,s(this,G))}get fragment(){return s(this,G)}get uniformData(){return s(this,X)}get textureUnits(){return s(this,j)}use(){this.gl.useProgram(s(this,y))}};y=new WeakMap,ct=new WeakMap,j=new WeakMap,z=new WeakMap,G=new WeakMap,Lt=new WeakMap,_t=new WeakMap,X=new WeakMap,dt=new WeakMap,pt=new WeakMap,ut=new WeakMap,mt=new WeakMap,K=new WeakSet,Bt=function(t,e){if(!e)return;if(t===this.gl.VERTEX_SHADER?o(this,Lt,Xt(e)):o(this,_t,Xt(e)),o(this,X,new Map([...s(this,Lt),...s(this,_t)])),this.gl instanceof WebGLRenderingContext)if(e=e.replace(/#version.*?\n/g,""),e=e.replace(/\btexture\b/g,"texture2D"),e=e.replace(/\buvec(.)\b/g,"vec$1"),e=e.replace(/\bflat\b/g,""),t===this.gl.VERTEX_SHADER)e=e.replace(/(^\s*)\bin\b/gm,"$1attribute"),e=e.replace(/(^\s*)\bout\b/gm,"$1varying");else{e=e.replace(/(^\s*)\bin\b/gm,"$1varying");let l=/out vec4 (.*?);/.exec(e);if(l){let h=l[1];e=e.replace(/out.*?;/,""),e=e.replace(new RegExp(`\\b${h}\\b`,"g"),"gl_FragColor")}}let n=this.gl.createShader(t);this.gl.shaderSource(n,e),this.gl.compileShader(n);let r=this.gl.getShaderInfoLog(n);if(this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS))r&&console.warn(r);else{let l=/ERROR: 0:(\d+):/.exec(r);if(l){let h=parseFloat(l[1]),d=e.split(`
`),p=t===this.gl.VERTEX_SHADER?"Vertex Shader":"Fragment Shader";throw console.groupCollapsed(`${p} source`),console.warn(e),console.groupEnd(),new Error(`${p}: ${r}
at: ${d[h-1].replace(/^\s*/,"")}`)}else throw new Error(r)}let c=s(this,ct).get(t);if(c&&(this.gl.detachShader(s(this,y),c),this.gl.deleteShader(c)),this.gl.attachShader(s(this,y),n),this.gl.deleteShader(n),s(this,ct).set(t,n),s(this,ct).size===2){this.gl.linkProgram(s(this,y));let l=this.gl.getProgramInfoLog(s(this,y));if(this.gl.getProgramParameter(s(this,y),this.gl.LINK_STATUS))l&&console.warn(l);else throw new Error(l);s(this,dt).clear(),s(this,pt).clear(),this.use(),s(this,j).clear();let h=0;for(let[d,p]of s(this,X))p.type.startsWith("sampler")&&(s(this,j).set(d,h),h++);if(this.uniforms){for(let d of this.uniforms.keys())s(this,X).has(d)||this.uniforms.delete(d);for(let[d,p]of this.uniforms)s(this,mt).call(this,d,p)}}};var Ut=class extends Dt{constructor({gl:t,width:e=void 0,height:n=void 0,columns:r=void 0,rows:c=void 0,normals:l=!1,uvs:h=!1,attributes:d=void 0,facingUp:p=!1,program:b=new lt({gl:t,vertex:`#version 300 es

      in vec3 position;

      void main() {
        gl_Position = vec4(position, 1.);
      }`})}){super({gl:t,geometry:new Ot(Object.assign({gl:t,attributes:d},new Pt({width:e,height:n,columns:r,rows:c,normals:l,uvs:h,facingUp:p}))),program:b})}};var M,Zt=class extends HTMLElement{constructor(){super();a(this,M,void 0);this.attachShadow({mode:"open"}).innerHTML=`
      <style>
        :host {
          display: block;
          position: relative;
          width: 300px;
          height: 150px;
        }
        
        canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      </style>
      <canvas></canvas>
    `,this.canvas=this.shadowRoot.querySelector("canvas"),o(this,M,this.canvas.getContext("webgl2")),s(this,M)||o(this,M,this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl")),new ResizeObserver(e=>{let n=e[0].contentRect.width*window.devicePixelRatio,r=e[0].contentRect.height*window.devicePixelRatio;this.canvas.width=n,this.canvas.height=r,s(this,M).viewport(0,0,n,r),this.uniforms.set("resolution",[n,r]),this.draw()}).observe(this.canvas),this.object=new Ut({gl:s(this,M),width:2,height:2,program:new lt({gl:s(this,M),uniforms:{resolution:[this.canvas.width,this.canvas.height]},vertex:`#version 300 es
in vec3 position;
void main() {
  gl_Position = vec4(position, 1.);
}`,fragment:`#version 300 es
precision highp float;

uniform vec2 resolution;
out vec4 fragColor;

void main() {
  fragColor = vec4(gl_FragCoord.xy / resolution, 0., 1.);
}`})})}connectedCallback(){this.hasAttribute("fragment")&&(this.fragment=this.getAttribute("fragment"))}get fragment(){return this.object.program.fragment}set fragment(t){this.object.program.fragment=t,this.draw()}get uniforms(){return this.object.program.uniforms}get gl(){return s(this,M)}draw(t){s(this,M).clear(s(this,M).COLOR_BUFFER_BIT),this.object.draw({bind:!0,...t})}};M=new WeakMap;customElements.define("damdom-glslcanvas",Zt);var ft,oe=i=>{ft||(ft=document.createElement("br"),ft.style.display="none",document.body.appendChild(ft)),ft.style.color=i;let t=/rgba?\s*\(\s*(\d*),\s*(\d*)\s*,\s*(\d*)\s*(,\s*([.\d]*))?\s*\)/.exec(getComputedStyle(ft).getPropertyValue("color"));return t?[parseInt(t[1])/255,parseInt(t[2])/255,parseInt(t[3])/255,t[5]!==void 0?parseFloat(t[5]):1]:null};var Jt=1e-6,St=typeof Float32Array!="undefined"?Float32Array:Array,ae=Math.random;var Di=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var i=0,t=arguments.length;t--;)i+=arguments[t]*arguments[t];return Math.sqrt(i)});var g={};Ae(g,{add:()=>Ie,angle:()=>Je,ceil:()=>Pe,clone:()=>_e,copy:()=>ke,create:()=>he,cross:()=>qe,dist:()=>ai,distance:()=>pe,div:()=>oi,divide:()=>de,dot:()=>He,equals:()=>ii,exactEquals:()=>ei,floor:()=>Ce,forEach:()=>ci,fromValues:()=>Se,inverse:()=>Ue,len:()=>si,length:()=>me,lerp:()=>$e,max:()=>Ge,min:()=>ze,mul:()=>ri,multiply:()=>ce,negate:()=>Be,normalize:()=>Ye,random:()=>Ve,rotate:()=>Ze,round:()=>Ne,scale:()=>De,scaleAndAdd:()=>Oe,set:()=>Fe,sqrDist:()=>hi,sqrLen:()=>li,squaredDistance:()=>ue,squaredLength:()=>fe,str:()=>ti,sub:()=>ni,subtract:()=>le,transformMat2:()=>We,transformMat2d:()=>je,transformMat3:()=>Xe,transformMat4:()=>Ke,zero:()=>Qe});function he(){var i=new St(2);return St!=Float32Array&&(i[0]=0,i[1]=0),i}function _e(i){var t=new St(2);return t[0]=i[0],t[1]=i[1],t}function Se(i,t){var e=new St(2);return e[0]=i,e[1]=t,e}function ke(i,t){return i[0]=t[0],i[1]=t[1],i}function Fe(i,t,e){return i[0]=t,i[1]=e,i}function Ie(i,t,e){return i[0]=t[0]+e[0],i[1]=t[1]+e[1],i}function le(i,t,e){return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i}function ce(i,t,e){return i[0]=t[0]*e[0],i[1]=t[1]*e[1],i}function de(i,t,e){return i[0]=t[0]/e[0],i[1]=t[1]/e[1],i}function Pe(i,t){return i[0]=Math.ceil(t[0]),i[1]=Math.ceil(t[1]),i}function Ce(i,t){return i[0]=Math.floor(t[0]),i[1]=Math.floor(t[1]),i}function ze(i,t,e){return i[0]=Math.min(t[0],e[0]),i[1]=Math.min(t[1],e[1]),i}function Ge(i,t,e){return i[0]=Math.max(t[0],e[0]),i[1]=Math.max(t[1],e[1]),i}function Ne(i,t){return i[0]=Math.round(t[0]),i[1]=Math.round(t[1]),i}function De(i,t,e){return i[0]=t[0]*e,i[1]=t[1]*e,i}function Oe(i,t,e,n){return i[0]=t[0]+e[0]*n,i[1]=t[1]+e[1]*n,i}function pe(i,t){var e=t[0]-i[0],n=t[1]-i[1];return Math.hypot(e,n)}function ue(i,t){var e=t[0]-i[0],n=t[1]-i[1];return e*e+n*n}function me(i){var t=i[0],e=i[1];return Math.hypot(t,e)}function fe(i){var t=i[0],e=i[1];return t*t+e*e}function Be(i,t){return i[0]=-t[0],i[1]=-t[1],i}function Ue(i,t){return i[0]=1/t[0],i[1]=1/t[1],i}function Ye(i,t){var e=t[0],n=t[1],r=e*e+n*n;return r>0&&(r=1/Math.sqrt(r)),i[0]=t[0]*r,i[1]=t[1]*r,i}function He(i,t){return i[0]*t[0]+i[1]*t[1]}function qe(i,t,e){var n=t[0]*e[1]-t[1]*e[0];return i[0]=i[1]=0,i[2]=n,i}function $e(i,t,e,n){var r=t[0],c=t[1];return i[0]=r+n*(e[0]-r),i[1]=c+n*(e[1]-c),i}function Ve(i,t){t=t||1;var e=ae()*2*Math.PI;return i[0]=Math.cos(e)*t,i[1]=Math.sin(e)*t,i}function We(i,t,e){var n=t[0],r=t[1];return i[0]=e[0]*n+e[2]*r,i[1]=e[1]*n+e[3]*r,i}function je(i,t,e){var n=t[0],r=t[1];return i[0]=e[0]*n+e[2]*r+e[4],i[1]=e[1]*n+e[3]*r+e[5],i}function Xe(i,t,e){var n=t[0],r=t[1];return i[0]=e[0]*n+e[3]*r+e[6],i[1]=e[1]*n+e[4]*r+e[7],i}function Ke(i,t,e){var n=t[0],r=t[1];return i[0]=e[0]*n+e[4]*r+e[12],i[1]=e[1]*n+e[5]*r+e[13],i}function Ze(i,t,e,n){var r=t[0]-e[0],c=t[1]-e[1],l=Math.sin(n),h=Math.cos(n);return i[0]=r*h-c*l+e[0],i[1]=r*l+c*h+e[1],i}function Je(i,t){var e=i[0],n=i[1],r=t[0],c=t[1],l=Math.sqrt(e*e+n*n)*Math.sqrt(r*r+c*c),h=l&&(e*r+n*c)/l;return Math.acos(Math.min(Math.max(h,-1),1))}function Qe(i){return i[0]=0,i[1]=0,i}function ti(i){return"vec2("+i[0]+", "+i[1]+")"}function ei(i,t){return i[0]===t[0]&&i[1]===t[1]}function ii(i,t){var e=i[0],n=i[1],r=t[0],c=t[1];return Math.abs(e-r)<=Jt*Math.max(1,Math.abs(e),Math.abs(r))&&Math.abs(n-c)<=Jt*Math.max(1,Math.abs(n),Math.abs(c))}var si=me,ni=le,ri=ce,oi=de,ai=pe,hi=ue,li=fe,ci=function(){var i=he();return function(t,e,n,r,c,l){var h,d;for(e||(e=2),n||(n=0),r?d=Math.min(r*e+n,t.length):d=t.length,h=n;h<d;h+=e)i[0]=t[h],i[1]=t[h+1],c(i,i,l),t[h]=i[0],t[h+1]=i[1];return t}}();var N=class extends Float32Array{static distance(t,e){return g.distance(t,e)}constructor(t=[0,0]){super(t);return this}get x(){return this[0]}set x(t){this[0]=t}get y(){return this[1]}set y(t){this[1]=t}set(t,e){return g.set(this,t,e),this}copy(t){return g.copy(this,t),this}add(t){return g.add(this,this,t),this}multiply(t){return g.multiply(this,this,t),this}get size(){return g.length(this)}get squaredSize(){return g.squaredLength(this)}subtract(t){return g.subtract(this,this,t),this}negate(t=this){return g.negate(this,t),this}cross(t,e){return g.cross(this,t,e),this}scale(t){return g.scale(this,this,t),this}normalize(){return g.normalize(this,this)}dot(t){return g.dot(this,t)}distance(t){return N.distance(this,t)}equals(t){return g.exactEquals(this,t)}applyMatrix3(t){return g.transformMat3(this,this,t),this}applyMatrix4(t){return g.transformMat4(this,this,t),this}rotate(t,e){g.rotate(this,this,t,e)}lerp(t,e){g.lerp(this,this,t,e)}clone(){return new N(this)}};var ge=15,I,gt,kt,Z,Yt,be;window.customElements.define("bea-website-button",(be=class extends ie{constructor(){super();a(this,I,void 0);a(this,gt,void 0);a(this,kt,void 0);a(this,Z,void 0);a(this,Yt,()=>{s(this,gt).lerp(s(this,Z),.2),s(this,I).draw({uniforms:{color:oe(getComputedStyle(this).getPropertyValue("background-color")),pointerPosition:s(this,gt)}})});this.callback=s(this,Yt),this.attachShadow({mode:"open"}).innerHTML=`<style>
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
<slot>Button</slot>`,o(this,kt,this.shadowRoot.querySelector("#focusable")),o(this,Z,new N),o(this,gt,new N),o(this,I,this.shadowRoot.querySelector("damdom-glslcanvas")),s(this,I).style.setProperty("--hover-margin",`${ge}px`),s(this,I).fragment=`#version 300 es
    precision highp float;
    
    uniform vec4 color;
    uniform vec2 pointerPosition;
    uniform vec2 resolution;
    out vec4 fragColor;
    
    void main() {
      vec2 boxSize = (resolution - ${(ge*devicePixelRatio).toFixed(1)} * 2.);
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
    }`;let i;new ResizeObserver(()=>i=s(this,I).getBoundingClientRect()).observe(this),window.addEventListener("resize",()=>i=s(this,I).getBoundingClientRect()),window.addEventListener("pointermove",t=>{!i||(s(this,Z).x=(t.clientX-i.x)/i.width*2-1,s(this,Z).y=-((t.clientY-i.y)/i.height*2-1))})}focus(){s(this,kt).focus()}},I=new WeakMap,gt=new WeakMap,kt=new WeakMap,Z=new WeakMap,Yt=new WeakMap,be));var xe=navigator.languages.includes("fr")||navigator.languages.includes("FR-fr");window.customElements.define("bea-website-mailchimpform",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  @import "./node_modules/@beagives/bea-color/index.css";

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
  <input type="email" value="" name="EMAIL" placeholder="${xe?"Entrez votre adresse email":"Enter your email"}">
  <input type="submit" style="display: none;">
  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
      name="b_9478a676a23e73e9922afc992_9e77fea305" tabindex="-1" value=""></div>
  <bea-website-button>${xe?"M'inscrire":"Subscribe"}</bea-website-button>
</form>`;let i=this.shadowRoot.querySelector("bea-website-button"),t=this.shadowRoot.querySelector("form");i.addEventListener("click",()=>{this.dispatchEvent(new Event("submit",{bubbles:!0})),t.submit()}),t.addEventListener("submit",e=>{this.dispatchEvent(new Event("submit",e))})}});window.customElements.define("bea-website-animatedtext",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`
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
    `,this._spans=[],this._content=this.shadowRoot.querySelector("#content")}connectedCallback(){this._compute()}async show(){return this._changeVisibility(!1)}async hide(){return this._changeVisibility(!0)}async _changeVisibility(i){if(i===this.hidden)return;this.hidden=i,this.style.pointerEvents=this.hidden?"none":"";let t=[];for(let[e,n]of this._spans.entries()){n.style.transformOrigin="50% 75%";let r=this.hidden?600:800,c=n.animate([{transform:`translateY(0) scaleX(1) scaleY(${this.hidden?1:0})`,opacity:this.hidden?1:0},{transform:"translateY(-5px) scaleX(.8) scaleY(1.2)",opacity:this.hidden?.6:1,offset:this.hidden?.4:.65},{transform:`translateY(0) scaleX(1) scaleY(${this.hidden?0:1}`,opacity:this.hidden?0:1}],{fill:"both",duration:r,delay:r/16*e,easing:this.hidden?"cubic-bezier(.6,0,.3,-0.4)":"cubic-bezier(.6,1.45,.6,1)"});t.push(c.finished)}await Promise.all(t)}_compute(){this._spans=[],this._content.innerHTML="";for(let i of this.childNodes){if(i.nodeType!==Node.TEXT_NODE){this._content.appendChild(i.cloneNode());continue}for(let t of i.textContent){let e=document.createElement("span");e.innerHTML=t===" "?"&nbsp;":t,this._spans.push(e),this._content.appendChild(e)}}}get textContent(){return super.textContent}set textContent(i){super.textContent=i,this._compute()}get innerHTML(){return super.innerHTML}set innerHTML(i){super.innerHTML=i,this._compute()}});window.customElements.define("bea-icon",class extends HTMLElement{static get observedAttributes(){return["icon"]}constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
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
<div id="icon-container"></div>`,this._iconContainer=this.shadowRoot.querySelector("#icon-container")}attributeChangedCallback(i,t,e){switch(i){case"icon":this._loadIcon(e);break}}async _loadIcon(i){let t=await fetch(`node_modules/@beagives/bea-icon/${i}.svg`).then(e=>e.text());this._iconContainer.innerHTML=t}get icon(){return this.getAttribute("icon")}set icon(i){this.setAttribute("icon",i)}});var Ft=navigator.languages.includes("fr")||navigator.languages.includes("FR-fr");window.customElements.define("bea-website-home",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  @import "./node_modules/@beagives/bea-color/index.css";

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
    -webkit-mask-image: url(./node_modules/@beagives/bea-website-home/video-mask.svg);
    mask-image: url(./node_modules/@beagives/bea-website-home/video-mask.svg);
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
    <span>${Ft?"le don":"donation<br>made"}</span>
    <bea-website-animatedtext></bea-website-animatedtext>
  </h2>
  <p>${Ft?"L\u2019application mobile b\xE9n\xE9vole qui simplifie <span>(enfin)</span> le don aux associations":"The nonprofit app making donation <span>(finally)</span> effortless"}</p>
  <bea-website-button id="emailformbutton">${Ft?"Tenez-moi inform\xE9(e)":"Keep me posted!"}</bea-website-button>
</div>
<div id="media">
  <bea-website-backgroundcircle></bea-website-backgroundcircle>
  <div id="phone">
    <video id="phone" poster="node_modules/@beagives/bea-website-home/poster.jpg" autoplay loop muted playsinline>
      <source src="node_modules/@beagives/bea-website-home/userflow.webm" type="video/webm">
      <source src="node_modules/@beagives/bea-website-home/userflow.mp4" type="video/mp4">
    </video>
  </div>
  </damo-animation-lottie>
</div>
<div id="overlay"></div>
<section id="emailformpopin" hidden>
  <div id="emailformtitle">${Ft?"On vous en dit plus bient\xF4t !":"We'll be in touch soon!"}</div>
  <bea-website-mailchimpform></bea-website-mailchimpform>
  <button id="emailformclosebutton">
    <bea-icon icon="close" type="fill"></bea-icon>
  </button>
</section>`,this.shadowRoot.querySelector("#emailformbutton").addEventListener("click",()=>{this.toggleAttribute("emailformopen",!0)}),this.shadowRoot.querySelector("#emailformclosebutton").addEventListener("click",()=>this.toggleAttribute("emailformopen",!1)),this.shadowRoot.querySelector("#overlay").addEventListener("click",()=>this.toggleAttribute("emailformopen",!1)),this.shadowRoot.querySelector("#emailformpopin").addEventListener("submit",()=>this.toggleAttribute("emailformopen",!1));let e=this.shadowRoot.querySelector("bea-website-animatedtext"),n=1500,r=Ft?["facile","s\xE9curis\xE9","sur-mesure"]:["easy","secure","on-demand"],c=["var(--bea-color-green)","var(--bea-color-blue)","var(--bea-color-coral)"],l=-1,h=async()=>{await e.hide(),l=(l+1)%r.length,e.innerHTML=r[l],e.style.color=c[l],await e.show(),setTimeout(h,n)};h()}});window.customElements.define("bea-website",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  @import "./node_modules/@beagives/bea-color/index.css";

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
<bea-website-home></bea-website-home>`}});
//# sourceMappingURL=index.js.map
