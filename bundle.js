(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=r[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=new Map,n={set(e,n,r){t.has(e)||t.set(e,new Map);const i=t.get(e);i.has(n)||0===i.size?i.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(e,n)=>t.has(e)&&t.get(e).get(n)||null,remove(e,n){if(!t.has(e))return;const r=t.get(e);r.delete(n),0===r.size&&t.delete(e)}},r="transitionend",i=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),s=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),o=e=>s(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(i(e)):null,l=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,a=[],c=(e,t=[],n=e)=>"function"==typeof e?e(...t):n,u=/[^.]*(?=\..*)\.|.*/,d=/\..*/,g=/::\d+$/,f={};let h=1;const p={mouseenter:"mouseover",mouseleave:"mouseout"},m=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function b(e,t){return t&&`${t}::${h++}`||e.uidEvent||h++}function _(e){const t=b(e);return e.uidEvent=t,f[t]=f[t]||{},f[t]}function y(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function v(e,t,n){const r="string"==typeof t,i=r?n:t||n;let s=C(e);return m.has(s)||(s=e),[r,i,s]}function w(e,t,n,r,i){if("string"!=typeof t||!e)return;let[s,o,l]=v(t,n,r);if(t in p){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const a=_(e),c=a[l]||(a[l]={}),d=y(c,o,s?n:null);if(d)return void(d.oneOff=d.oneOff&&i);const g=b(o,t.replace(u,"")),f=s?function(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const l of s)if(l===o)return T(i,{delegateTarget:o}),r.oneOff&&S.off(e,i.type,t,n),n.apply(o,[i])}}(e,n,o):function(e,t){return function n(r){return T(r,{delegateTarget:e}),n.oneOff&&S.off(e,r.type,t),t.apply(e,[r])}}(e,o);f.delegationSelector=s?n:null,f.callable=o,f.oneOff=i,f.uidEvent=g,c[g]=f,e.addEventListener(l,f,s)}function E(e,t,n,r,i){const s=y(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function A(e,t,n,r){const i=t[n]||{};for(const[s,o]of Object.entries(i))s.includes(r)&&E(e,t,n,o.callable,o.delegationSelector)}function C(e){return e=e.replace(d,""),p[e]||e}const S={on(e,t,n,r){w(e,t,n,r,!1)},one(e,t,n,r){w(e,t,n,r,!0)},off(e,t,n,r){if("string"!=typeof t||!e)return;const[i,s,o]=v(t,n,r),l=o!==t,a=_(e),c=a[o]||{},u=t.startsWith(".");if(void 0===s){if(u)for(const n of Object.keys(a))A(e,a,n,t.slice(1));for(const[n,r]of Object.entries(c)){const i=n.replace(g,"");l&&!t.includes(i)||E(e,a,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(c).length)return;E(e,a,o,s,i?n:null)}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const r=l();let i=null,s=!0,o=!0,a=!1;t!==C(t)&&r&&(i=r.Event(t,n),r(e).trigger(i),s=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),a=i.isDefaultPrevented());const c=T(new Event(t,{bubbles:s,cancelable:!0}),n);return a&&c.preventDefault(),o&&e.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function T(e,t={}){for(const[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}const O=S;function $(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function L(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const D={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${L(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${L(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=$(e.dataset[r])}return t},getDataAttribute:(e,t)=>$(e.getAttribute(`data-bs-${L(t)}`))},N=class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=s(t)?D.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...s(t)?D.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[r,i]of Object.entries(t)){const t=e[r],o=s(t)?"element":null==(n=t)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)}var n}},j=class extends N{constructor(e,t){super(),(e=o(e))&&(this._element=e,this._config=this._getConfig(t),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),O.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){((e,t,n=!0)=>{if(!n)return void c(e);const i=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(r,o),c(e))};t.addEventListener(r,o),setTimeout((()=>{s||t.dispatchEvent(new Event(r))}),i)})(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return n.get(o(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}},x=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t?t.split(",").map((e=>i(e))).join(","):null},M={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!(e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")))(e)&&(e=>{if(!s(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t})(e)))},getSelectorFromElement(e){const t=x(e);return t&&M.findOne(t)?t:null},getElementFromSelector(e){const t=x(e);return t?M.findOne(t):null},getMultipleElementsFromSelector(e){const t=x(e);return t?M.find(t):[]}},k=M,q=".bs.collapse",F=`show${q}`,I=`shown${q}`,P=`hide${q}`,z=`hidden${q}`,Y=`click${q}.data-api`,K="show",W="collapse",B="collapsing",R=`:scope .${W} .${W}`,Q='[data-bs-toggle="collapse"]',V={parent:null,toggle:!0},U={parent:"(null|element)",toggle:"boolean"};class H extends j{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=k.find(Q);for(const e of n){const t=k.getSelectorFromElement(e),n=k.find(t).filter((e=>e===this._element));null!==t&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return V}static get DefaultType(){return U}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>H.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(O.trigger(this._element,F).defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove(W),this._element.classList.add(B),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(B),this._element.classList.add(W,K),this._element.style[t]="",O.trigger(this._element,I)}),this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(O.trigger(this._element,P).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,this._element.offsetHeight,this._element.classList.add(B),this._element.classList.remove(W,K);for(const e of this._triggerArray){const t=k.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(B),this._element.classList.add(W),O.trigger(this._element,z)}),this._element,!0)}_isShown(e=this._element){return e.classList.contains(K)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=o(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Q);for(const t of e){const e=k.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=k.find(R,this._config.parent);return k.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=H.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}var J,Z;O.on(document,Y,Q,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const e of k.getMultipleElementsFromSelector(this))H.getOrCreateInstance(e,{toggle:!1}).toggle()})),J=H,Z=()=>{const e=l();if(e){const t=J.NAME,n=e.fn[t];e.fn[t]=J.jQueryInterface,e.fn[t].Constructor=J,e.fn[t].noConflict=()=>(e.fn[t]=n,J.jQueryInterface)}},"loading"===document.readyState?(a.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of a)e()})),a.push(Z)):Z(),e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;const G=document.querySelector(".card_article"),X=document.querySelector(".navbar-brand"),ee=document.querySelector(".card_img"),te=document.querySelectorAll(".range_images"),ne=document.querySelectorAll(".work_images");function re(){document.documentElement.clientWidth<=560?(ee.style.display="none",G.style.position="initial"):(ee.style.display="block",G.style.position="absolute")}function ie(){let e=document.documentElement.clientWidth;switch(!0){case e<=1300&&e>1020:return G.style.width="600px";case e<=1020&&e>940:return G.style.width="555px";case e<=940&&e>865:return G.style.width="510px";case e<=865&&e>670:return G.style.width="461px";case e<=670&&e>560:return G.style.width="390px";case e<=560:return G.style.width="auto";default:G.style.width="643px"}}document.addEventListener("DOMContentLoaded",(function(){ie(),re(),window.addEventListener("resize",re),window.addEventListener("resize",ie),X.addEventListener("click",(function(){window.location.reload()})),function(){const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.replace("unvisible","visible"),t.unobserve(e.target))}))}),{rootMargin:"0px",threshold:.4});te.forEach((t=>e.observe(t))),ne.forEach((t=>e.observe(t)))}()}))})();