!function(t){var e={};function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e,i){var s=i(4),a=i(5),n=null;function r(t){return setTimeout(t,0)}t.exports=function(t,e){var i=document,o="string"==typeof t?i.querySelector(t):t,d=a({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),c={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},l={activate:function(t){if(!c.active){T(),c.active=!0,c.paused=!1,c.nodeFocusedBeforeActivation=i.activeElement;var e=t&&t.onActivate?t.onActivate:d.onActivate;return e&&e(),u(),l}},deactivate:h,pause:function(){!c.paused&&c.active&&(c.paused=!0,_())},unpause:function(){c.paused&&c.active&&(c.paused=!1,u())}};return l;function h(t){if(c.active){_(),c.active=!1,c.paused=!1;var e=t&&void 0!==t.onDeactivate?t.onDeactivate:d.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:d.returnFocusOnDeactivate)&&r(function(){A(c.nodeFocusedBeforeActivation)}),l}}function u(){if(c.active)return n&&n.pause(),n=l,T(),r(function(){A(m())}),i.addEventListener("focusin",v,!0),i.addEventListener("mousedown",E,!0),i.addEventListener("touchstart",E,!0),i.addEventListener("click",f,!0),i.addEventListener("keydown",g,!0),l}function _(){if(c.active&&n===l)return i.removeEventListener("focusin",v,!0),i.removeEventListener("mousedown",E,!0),i.removeEventListener("touchstart",E,!0),i.removeEventListener("click",f,!0),i.removeEventListener("keydown",g,!0),n=null,l}function p(t){var e=d[t],s=e;if(!e)return null;if("string"==typeof e&&!(s=i.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(s=e()))throw new Error("`"+t+"` did not return a node");return s}function m(){var t;if(!(t=null!==p("initialFocus")?p("initialFocus"):o.contains(i.activeElement)?i.activeElement:c.firstTabbableNode||p("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}function E(t){o.contains(t.target)||(d.clickOutsideDeactivates?h({returnFocus:!s.isFocusable(t.target)}):t.preventDefault())}function v(t){o.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),A(c.mostRecentlyFocusedNode||m()))}function g(t){if(!1!==d.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void h();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(T(),t.shiftKey&&t.target===c.firstTabbableNode)return t.preventDefault(),void A(c.lastTabbableNode);t.shiftKey||t.target!==c.lastTabbableNode||(t.preventDefault(),A(c.firstTabbableNode))}(t)}function f(t){d.clickOutsideDeactivates||o.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function T(){var t=s(o);c.firstTabbableNode=t[0]||m(),c.lastTabbableNode=t[t.length-1]||m()}function A(t){t!==i.activeElement&&(t&&t.focus?(t.focus(),c.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):A(m()))}}},function(t,e,i){var s=i(7),a=null;function n(t){t&&t.focus&&t!==document.activeElement&&(t.focus(),"input"===t.tagName.toLowerCase()&&t.select())}t.exports=function(t,e){var i=[],r=null,o=null,d=null,c=!1,l=!1,h=null,u="string"==typeof t?document.querySelector(t):t,_=e||{};_.returnFocusOnDeactivate=!e||void 0===e.returnFocusOnDeactivate||e.returnFocusOnDeactivate,_.escapeDeactivates=!e||void 0===e.escapeDeactivates||e.escapeDeactivates;var p={activate:function(t){if(!c){var e={onActivate:t&&void 0!==t.onActivate?t.onActivate:_.onActivate};return c=!0,l=!1,d=document.activeElement,e.onActivate&&e.onActivate(),E(),p}},deactivate:m,pause:function(){!l&&c&&(l=!0,v())},unpause:function(){l&&c&&(l=!1,E())}};return p;function m(t){if(c){var e={returnFocus:t&&void 0!==t.returnFocus?t.returnFocus:_.returnFocusOnDeactivate,onDeactivate:t&&void 0!==t.onDeactivate?t.onDeactivate:_.onDeactivate};return v(),e.onDeactivate&&e.onDeactivate(),e.returnFocus&&setTimeout(function(){n(d)},0),c=!1,l=!1,this}}function E(){if(c)return a&&a.pause(),a=p,S(),setTimeout(function(){n(function(){var t;if(!(t=null!==g("initialFocus")?g("initialFocus"):u.contains(document.activeElement)?document.activeElement:i[0]||g("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}())},0),document.addEventListener("focus",A,!0),document.addEventListener("click",T,!0),document.addEventListener("mousedown",f,!0),document.addEventListener("touchstart",f,!0),document.addEventListener("keydown",C,!0),p}function v(){if(c&&a===p)return document.removeEventListener("focus",A,!0),document.removeEventListener("click",T,!0),document.removeEventListener("mousedown",f,!0),document.removeEventListener("touchstart",f,!0),document.removeEventListener("keydown",C,!0),a=null,p}function g(t){var e=_[t],i=e;if(!e)return null;if("string"==typeof e&&!(i=document.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(i=e()))throw new Error("`"+t+"` did not return a node");return i}function f(t){_.clickOutsideDeactivates&&!u.contains(t.target)&&m({returnFocus:!1})}function T(t){_.clickOutsideDeactivates||u.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function A(t){u.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation(),"function"==typeof t.target.blur&&t.target.blur(),h&&function(t){if(t.shiftKey)return n(o);n(r)}(h))}function C(t){"Tab"!==t.key&&9!==t.keyCode||function(t){if(S(),t.target.hasAttribute("tabindex")&&Number(t.target.getAttribute("tabindex"))<0)return h=t;t.preventDefault();var e=i.indexOf(t.target);t.shiftKey?t.target===r||-1===i.indexOf(t.target)?n(o):n(i[e-1]):t.target===o?n(r):n(i[e+1])}(t),!1!==_.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&m()}function S(){i=s(u),r=i[0],o=i[i.length-1]}}},function(t,e,i){},,function(t,e){var i=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],s=i.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function n(t,e){e=e||{};var i,n,o,d=[],h=[],_=new u(t.ownerDocument||t),p=t.querySelectorAll(s);for(e.includeContainer&&a.call(t,s)&&(p=Array.prototype.slice.apply(p)).unshift(t),i=0;i<p.length;i++)r(n=p[i],_)&&(0===(o=c(n))?d.push(n):h.push({documentOrder:i,tabIndex:o,node:n}));return h.sort(l).map(function(t){return t.node}).concat(d)}function r(t,e){return!(!o(t,e)||function(t){return function(t){return h(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||c(t)<0)}function o(t,e){return e=e||new u(t.ownerDocument||t),!(t.disabled||function(t){return h(t)&&"hidden"===t.type}(t)||e.isUntouchable(t))}n.isTabbable=function(t,e){if(!t)throw new Error("No node provided");return!1!==a.call(t,s)&&r(t,e)},n.isFocusable=function(t,e){if(!t)throw new Error("No node provided");return!1!==a.call(t,d)&&o(t,e)};var d=i.concat("iframe").join(",");function c(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function l(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function h(t){return"INPUT"===t.tagName}function u(t){this.doc=t,this.cache=[]}u.prototype.hasDisplayNone=function(t,e){if(t===this.doc.documentElement)return!1;var i=function(t,e){for(var i=0,s=t.length;i<s;i++)if(e(t[i]))return t[i]}(this.cache,function(e){return e===t});if(i)return i[1];var s=!1;return"none"===(e=e||this.doc.defaultView.getComputedStyle(t)).display?s=!0:t.parentNode&&(s=this.hasDisplayNone(t.parentNode)),this.cache.push([t,s]),s},u.prototype.isUntouchable=function(t){if(t===this.doc.documentElement)return!1;var e=this.doc.defaultView.getComputedStyle(t);return!!this.hasDisplayNone(t,e)||"hidden"===e.visibility},t.exports=n},function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var s=arguments[e];for(var a in s)i.call(s,a)&&(t[a]=s[a])}return t};var i=Object.prototype.hasOwnProperty},function(t,e){},function(t,e){t.exports=function(t,e){e=e||{};var i,s,a,n=t.ownerDocument||t,r=[],o=[],d=function(t){var e=[];return function(i){if(i===t.documentElement)return!1;var s=t.defaultView.getComputedStyle(i);return!!function i(s,a){if(s===t.documentElement)return!1;for(var n=0,r=e.length;n<r;n++)if(e[n][0]===s)return e[n][1];a=a||t.defaultView.getComputedStyle(s);var o=!1;"none"===a.display?o=!0:s.parentNode&&(o=i(s.parentNode));e.push([s,o]);return o}(i,s)||"hidden"===s.visibility}}(n),c=["input","select","a[href]","textarea","button","[tabindex]"],l=t.querySelectorAll(c.join(","));if(e.includeContainer){var h=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;c.some(function(e){return h.call(t,e)})&&(l=Array.prototype.slice.apply(l)).unshift(t)}for(var u=0,_=l.length;u<_;u++)i=l[u],s=parseInt(i.getAttribute("tabindex"),10),(a=isNaN(s)?i.tabIndex:s)<0||"INPUT"===i.tagName&&"hidden"===i.type||i.disabled||d(i,n)||(0===a?r.push(i):o.push({index:u,tabIndex:a,node:i}));var p=o.sort(function(t,e){return t.tabIndex===e.tabIndex?t.index-e.index:t.tabIndex-e.tabIndex}).map(function(t){return t.node});return Array.prototype.push.apply(p,r),p}},function(t,e){},function(t,e,i){"use strict";i.r(e);i(2);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var s=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class a{static attachTo(t){return new a(t,new s)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var n=a;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const r={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},o={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},d={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let c,l;function h(t=window,e=!1){if(void 0===l||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){return e=!0}})}catch(t){}l=e}return!!l&&{passive:!0}}const u=["touchstart","pointerdown","mousedown","keydown"],_=["touchend","pointerup","mouseup"];let p=[];class m extends s{static get cssClasses(){return r}static get strings(){return o}static get numbers(){return d}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(m.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(()=>this.deactivate_()),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=m.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(m.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(m.cssClasses.FG_DEACTIVATION));const{ROOT:t,UNBOUNDED:e}=m.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(u.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):_.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){u.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),_.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=m;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&void 0!==t&&i.type!==t.type||(e.isActivated=!0,e.isProgrammatic=void 0===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&p.length>0&&p.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(void 0!==t&&(p.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{p=[],e.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=m.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:s}=m.cssClasses,{DEACTIVATION_TIMEOUT_MS:a}=m.numbers;this.layoutInternal_();let n="",r="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();n=`${t.x}px, ${t.y}px`,r=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,n),this.adapter_.updateCssVariable(e,r),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),a)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let i;return{startPoint:i={x:(i=e?function(t,e,i){const{x:s,y:a}=e,n=s+i.left,r=a+i.top;let o,d;return"touchstart"===t.type?(o=(t=t).changedTouches[0].pageX-n,d=t.changedTouches[0].pageY-r):(o=(t=t).pageX-n,d=t.pageY-r),{x:o,y:d}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:i.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=m.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},d.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=m.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=void 0,m.numbers.TAP_DELAY_MS)}deactivate_(){const t=this.activationState_;if(!t.isActivated)return;const e=Object.assign({},t);t.isProgrammatic?(requestAnimationFrame(()=>this.animateDeactivation_(e)),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(e),this.resetActivationState_()}))}deactivate(){this.deactivate_()}animateDeactivation_({wasActivatedByPointer:t,wasElementMadeActive:e}){(t||e)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+m.numbers.PADDING})(),this.initialSize_=Math.floor(t*m.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:s}=m.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(s,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=m.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(m.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(m.cssClasses.BG_FOCUSED))}}var E=m;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class v extends n{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const i=new v(t);return void 0!==e&&(i.unbounded=e),i}static createAdapter(t){const e=function(t){const e=["matches","webkitMatchesSelector","msMatchesSelector"];let i="matches";for(let s=0;s<e.length;s++){const a=e[s];if(a in t){i=a;break}}return i}(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let i=c;if("boolean"==typeof c&&!e)return i;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const s=t.CSS.supports("--css-vars","yes"),a=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return i=!(!s&&!a||function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const s=t.getComputedStyle(i),a=null!==s&&"solid"===s.borderTopStyle;return i.remove(),a}(t)),e||(c=i),i})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,i)=>t.root_.addEventListener(e,i,h()),deregisterInteractionHandler:(e,i)=>t.root_.removeEventListener(e,i,h()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,h()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,h()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,i)=>t.root_.style.setProperty(e,i),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new E(v.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class g{}g.prototype.root_,g.prototype.unbounded,g.prototype.disabled;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const f={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed"},T={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},A={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class C extends s{static get strings(){return A}static get cssClasses(){return f}static get numbers(){return T}static get defaultAdapter(){return{hasClass:()=>{},addClass:()=>{},removeClass:()=>{},setStyle:()=>{},getTopAppBarHeight:()=>{},registerNavigationIconInteractionHandler:()=>{},deregisterNavigationIconInteractionHandler:()=>{},notifyNavigationIconClicked:()=>{},registerScrollHandler:()=>{},deregisterScrollHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},getViewportScrollY:()=>0,getTotalActionItems:()=>0}}constructor(t){super(Object.assign(C.defaultAdapter,t)),this.navClickHandler_=(()=>this.adapter_.notifyNavigationIconClicked()),this.scrollHandler_=(()=>{})}init(){this.adapter_.registerNavigationIconInteractionHandler("click",this.navClickHandler_)}destroy(){this.adapter_.deregisterNavigationIconInteractionHandler("click",this.navClickHandler_)}initScrollHandler(){this.adapter_.registerScrollHandler(this.scrollHandler_)}destroyScrollHandler(){this.adapter_.deregisterScrollHandler(this.scrollHandler_)}}var S=C;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var I=class extends S{constructor(t){super(t),this.wasScrolled_=!1,this.scrollHandler_=(()=>this.fixedScrollHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}fixedScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(f.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(f.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var L=class extends S{constructor(t){super(t),this.isCollapsed=!1,this.scrollHandler_=(()=>this.shortAppBarScrollHandler_())}init(){super.init();const t=this.adapter_.hasClass(f.SHORT_COLLAPSED_CLASS);this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(f.SHORT_HAS_ACTION_ITEM_CLASS),t||(this.adapter_.registerScrollHandler(this.scrollHandler_),this.shortAppBarScrollHandler_())}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}shortAppBarScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.isCollapsed&&(this.adapter_.removeClass(f.SHORT_COLLAPSED_CLASS),this.isCollapsed=!1):this.isCollapsed||(this.adapter_.addClass(f.SHORT_COLLAPSED_CLASS),this.isCollapsed=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const y=0;var b=class extends S{constructor(t){super(t),this.lastScrollPosition_=this.adapter_.getViewportScrollY(),this.topAppBarHeight_=this.adapter_.getTopAppBarHeight(),this.wasDocked_=!0,this.isDockedShowing_=!0,this.currentAppBarOffsetTop_=0,this.isCurrentlyBeingResized_=!1,this.resizeThrottleId_=y,this.resizeDebounceId_=y,this.scrollHandler_=(()=>this.topAppBarScrollHandler_()),this.resizeHandler_=(()=>this.topAppBarResizeHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.setStyle("top","")}checkForUpdate_(){const t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>t,s=e&&i;if(s)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return s}moveTopAppBar_(){if(this.checkForUpdate_()){let t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-T.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}}topAppBarScrollHandler_(){const t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())}topAppBarResizeHandler_(){this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(()=>{this.resizeThrottleId_=y,this.throttledResizeHandler_()},T.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(()=>{this.topAppBarScrollHandler_(),this.isCurrentlyBeingResized_=!1,this.resizeDebounceId_=y},T.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)}throttledResizeHandler_(){const t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.topAppBarScrollHandler_()}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class O extends n{constructor(...t){super(...t),this.navIcon_,this.iconRipples_,this.scrollTarget_}initialize(t=(t=>v.attachTo(t))){this.navIcon_=this.root_.querySelector(A.NAVIGATION_ICON_SELECTOR);const e=[].slice.call(this.root_.querySelectorAll(A.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map(e=>{const i=t(e);return i.unbounded=!0,i})}destroy(){this.iconRipples_.forEach(t=>t.destroy()),super.destroy()}setScrollTarget(t){this.foundation_.destroyScrollHandler(),this.scrollTarget_=t,this.foundation_.initScrollHandler()}static attachTo(t){return new O(t)}getDefaultFoundation(){const t=Object.assign({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setStyle:(t,e)=>this.root_.style.setProperty(t,e),getTopAppBarHeight:()=>this.root_.clientHeight,registerNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.addEventListener(t,e)},deregisterNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.removeEventListener(t,e)},notifyNavigationIconClicked:()=>{this.emit(A.NAVIGATION_EVENT,{})},registerScrollHandler:t=>this.scrollTarget_.addEventListener("scroll",t),deregisterScrollHandler:t=>this.scrollTarget_.removeEventListener("scroll",t),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),getViewportScrollY:()=>this.scrollTarget_[this.scrollTarget_===window?"pageYOffset":"scrollTop"],getTotalActionItems:()=>this.root_.querySelectorAll(A.ACTION_ITEM_SELECTOR).length});let e;return this.scrollTarget_=window,e=this.root_.classList.contains(f.SHORT_CLASS)?new L(t):this.root_.classList.contains(f.FIXED_CLASS)?new I(t):new b(t)}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const R={ROOT:"mdc-drawer",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",ANIMATE:"mdc-drawer--animate",OPENING:"mdc-drawer--opening",CLOSING:"mdc-drawer--closing"},D={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",SCRIM_SELECTOR:".mdc-drawer-scrim",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class w extends s{static get strings(){return D}static get cssClasses(){return R}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},elementHasClass:()=>{},notifyClose:()=>{},notifyOpen:()=>{},saveFocus:()=>{},restoreFocus:()=>{},focusActiveNavigationItem:()=>{},trapFocus:()=>{},releaseFocus:()=>{}}}constructor(t){super(Object.assign(w.defaultAdapter,t)),this.animationFrame_=0,this.animationTimer_=0}destroy(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)}open(){this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter_.addClass(R.OPEN),this.adapter_.addClass(R.ANIMATE),this.runNextAnimationFrame_(()=>{this.adapter_.addClass(R.OPENING)}),this.adapter_.saveFocus())}close(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter_.addClass(R.CLOSING)}opened(){}closed(){}isOpen(){return this.adapter_.hasClass(R.OPEN)}isOpening(){return this.adapter_.hasClass(R.OPENING)}isClosing(){return this.adapter_.hasClass(R.CLOSING)}handleKeydown(t){const{keyCode:e,key:i}=t;("Escape"===i||27===e)&&this.close()}handleTransitionEnd(t){const{OPENING:e,CLOSING:i,OPEN:s,ANIMATE:a,ROOT:n}=R;t.target instanceof Element&&this.adapter_.elementHasClass(t.target,n)&&(this.isClosing()?(this.adapter_.removeClass(s),this.adapter_.restoreFocus(),this.closed(),this.adapter_.notifyClose()):(this.adapter_.focusActiveNavigationItem(),this.opened(),this.adapter_.notifyOpen()),this.adapter_.removeClass(a),this.adapter_.removeClass(e),this.adapter_.removeClass(i))}runNextAnimationFrame_(t){cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(()=>{this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(t,0)})}}var F=w;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var N=class extends F{opened(){this.adapter_.trapFocus()}closed(){this.adapter_.releaseFocus()}handleScrimClick(){this.close()}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const H={ROOT:"mdc-list",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated"},x={ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`.${H.LIST_ITEM_CLASS} button:not(:disabled), \n  .${H.LIST_ITEM_CLASS} a`,FOCUSABLE_CHILD_ELEMENTS:`.${H.LIST_ITEM_CLASS} button:not(:disabled), .${H.LIST_ITEM_CLASS} a,\n  .${H.LIST_ITEM_CLASS} input[type="radio"]:not(:disabled),\n  .${H.LIST_ITEM_CLASS} input[type="checkbox"]:not(:disabled)`,ENABLED_ITEMS_SELECTOR:".mdc-list-item:not(.mdc-list-item--disabled)"},M=["input","button","textarea","select"];class k extends s{static get strings(){return x}static get cssClasses(){return H}static get defaultAdapter(){return{getListItemCount:()=>{},getFocusedElementIndex:()=>{},setAttributeForElementIndex:()=>{},removeAttributeForElementIndex:()=>{},addClassForElementIndex:()=>{},removeClassForElementIndex:()=>{},focusItemAtIndex:()=>{},setTabIndexForListItemChildren:()=>{},followHref:()=>{},toggleCheckbox:()=>{}}}constructor(t){super(Object.assign(k.defaultAdapter,t)),this.wrapFocus_=!1,this.isVertical_=!0,this.isSingleSelectionList_=!1,this.selectedIndex_=-1,this.useActivatedClass_=!1}setWrapFocus(t){this.wrapFocus_=t}setVerticalOrientation(t){this.isVertical_=t}setSingleSelection(t){this.isSingleSelectionList_=t}setUseActivatedClass(t){this.useActivatedClass_=t}setSelectedIndex(t){if(t===this.selectedIndex_)return;const e=this.useActivatedClass_?H.LIST_ITEM_ACTIVATED_CLASS:H.LIST_ITEM_SELECTED_CLASS;this.selectedIndex_>=0&&(this.adapter_.removeAttributeForElementIndex(this.selectedIndex_,x.ARIA_SELECTED),this.adapter_.removeClassForElementIndex(this.selectedIndex_,e),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",-1)),t>=0&&this.adapter_.getListItemCount()>t&&(this.selectedIndex_=t,this.adapter_.setAttributeForElementIndex(this.selectedIndex_,x.ARIA_SELECTED,!0),this.adapter_.addClassForElementIndex(this.selectedIndex_,e),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",0),0!==this.selectedIndex_&&this.adapter_.setAttributeForElementIndex(0,"tabindex",-1))}handleFocusIn(t,e){e>=0&&this.adapter_.setTabIndexForListItemChildren(e,0)}handleFocusOut(t,e){e>=0&&this.adapter_.setTabIndexForListItemChildren(e,-1)}handleKeydown(t,e,i){const s="ArrowLeft"===t.key||37===t.keyCode,a="ArrowUp"===t.key||38===t.keyCode,n="ArrowRight"===t.key||39===t.keyCode,r="ArrowDown"===t.key||40===t.keyCode,o="Home"===t.key||36===t.keyCode,d="End"===t.key||35===t.keyCode,c="Enter"===t.key||13===t.keyCode,l="Space"===t.key||32===t.keyCode;let h=this.adapter_.getFocusedElementIndex();if(!(-1===h&&(h=i)<0))if(this.isVertical_&&r||!this.isVertical_&&n)this.preventDefaultEvent_(t),this.focusNextElement(h);else if(this.isVertical_&&a||!this.isVertical_&&s)this.preventDefaultEvent_(t),this.focusPrevElement(h);else if(o)this.preventDefaultEvent_(t),this.focusFirstElement();else if(d)this.preventDefaultEvent_(t),this.focusLastElement();else if(c||l){e&&(this.isSingleSelectionList_&&(this.setSelectedIndex(h),this.preventDefaultEvent_(t)),this.adapter_.followHref(h)),this.adapter_.toggleCheckbox(i)&&this.preventDefaultEvent_(t)}}handleClick(t,e){-1!==t&&(e&&this.adapter_.toggleCheckbox(t),this.isSingleSelectionList_&&this.setSelectedIndex(t))}preventDefaultEvent_(t){const e=`${t.target.tagName}`.toLowerCase();-1===M.indexOf(e)&&t.preventDefault()}focusNextElement(t){let e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return;e=0}this.adapter_.focusItemAtIndex(e)}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return;e=this.adapter_.getListItemCount()-1}this.adapter_.focusItemAtIndex(e)}focusFirstElement(){this.adapter_.getListItemCount()>0&&this.adapter_.focusItemAtIndex(0)}focusLastElement(){const t=this.adapter_.getListItemCount()-1;t>=0&&this.adapter_.focusItemAtIndex(t)}}var V=k;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function P(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class B extends n{constructor(...t){super(...t),this.handleKeydown_,this.handleClick_,this.focusInEventListener_,this.focusOutEventListener_}static attachTo(t){return new B(t)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("click",this.handleClick_),this.root_.removeEventListener("focusin",this.focusInEventListener_),this.root_.removeEventListener("focusout",this.focusOutEventListener_)}initialSyncWithDOM(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("focusin",this.focusInEventListener_),this.root_.addEventListener("focusout",this.focusOutEventListener_),this.root_.addEventListener("click",this.handleClick_),this.layout(),this.initializeListType()}layout(){const t=this.root_.getAttribute(x.ARIA_ORIENTATION);this.vertical=t!==x.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(t=>{t.setAttribute("tabindex",-1)}),[].slice.call(this.root_.querySelectorAll(x.FOCUSABLE_CHILD_ELEMENTS)).forEach(t=>t.setAttribute("tabindex",-1))}getListItemIndex_(t){let e=t.target,i=-1;for(;!e.classList.contains(H.LIST_ITEM_CLASS)&&!e.classList.contains(H.ROOT);)e=e.parentElement;return e.classList.contains(H.LIST_ITEM_CLASS)&&(i=this.listElements.indexOf(e)),i}handleFocusInEvent_(t){const e=this.getListItemIndex_(t);this.foundation_.handleFocusIn(t,e)}handleFocusOutEvent_(t){const e=this.getListItemIndex_(t);this.foundation_.handleFocusOut(t,e)}handleKeydownEvent_(t){const e=this.getListItemIndex_(t);e>=0&&this.foundation_.handleKeydown(t,t.target.classList.contains(H.LIST_ITEM_CLASS),e)}handleClickEvent_(t){const e=this.getListItemIndex_(t),i=!P(t.target,x.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(e,i)}initializeListType(){const t=this.root_.querySelector(`.${H.LIST_ITEM_ACTIVATED_CLASS}, .${H.LIST_ITEM_SELECTED_CLASS}`);t&&(t.classList.contains(H.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(t))}set vertical(t){this.foundation_.setVerticalOrientation(t)}get listElements(){return[].slice.call(this.root_.querySelectorAll(x.ENABLED_ITEMS_SELECTOR))}set wrapFocus(t){this.foundation_.setWrapFocus(t)}set singleSelection(t){this.foundation_.setSingleSelection(t)}set selectedIndex(t){this.foundation_.setSelectedIndex(t)}getDefaultFoundation(){return new V(Object.assign({getListItemCount:()=>this.listElements.length,getFocusedElementIndex:()=>this.listElements.indexOf(document.activeElement),setAttributeForElementIndex:(t,e,i)=>{const s=this.listElements[t];s&&s.setAttribute(e,i)},removeAttributeForElementIndex:(t,e)=>{const i=this.listElements[t];i&&i.removeAttribute(e)},addClassForElementIndex:(t,e)=>{const i=this.listElements[t];i&&i.classList.add(e)},removeClassForElementIndex:(t,e)=>{const i=this.listElements[t];i&&i.classList.remove(e)},focusItemAtIndex:t=>{const e=this.listElements[t];e&&e.focus()},setTabIndexForListItemChildren:(t,e)=>{const i=this.listElements[t];[].slice.call(i.querySelectorAll(x.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach(t=>t.setAttribute("tabindex",e))},followHref:t=>{const e=this.listElements[t];e&&e.href&&e.click()},toggleCheckbox:t=>{let e=!1;const i=this.listElements[t];return[].slice.call(i.querySelectorAll(x.CHECKBOX_RADIO_SELECTOR)).forEach(t=>{const i=document.createEvent("Event");i.initEvent("change",!0,!0),t.checked&&"radio"===t.type||(t.checked=!t.checked,t.dispatchEvent(i)),e=!0}),e}}))}}var U=i(0),G=i.n(U);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class z extends n{constructor(...t){super(...t),this.previousFocus_,this.handleKeydown_,this.handleTransitionEnd_,this.focusTrapFactory_,this.focusTrap_,this.scrim_,this.handleScrimClick_,this.list_}static attachTo(t){return new z(t)}get open(){return this.foundation_.isOpen()}set open(t){t?this.foundation_.open():this.foundation_.close()}initialize(t=G.a,e=(t=>new B(t))){const i=this.root_.querySelector(`.${V.cssClasses.ROOT}`);i&&(this.list_=e(i),this.list_.wrapFocus=!0),this.focusTrapFactory_=t}initialSyncWithDOM(){const{MODAL:t}=F.cssClasses;if(this.root_.classList.contains(t)){const{SCRIM_SELECTOR:t}=F.strings;this.scrim_=this.root_.parentElement.querySelector(t),this.handleScrimClick_=(()=>this.foundation_.handleScrimClick()),this.scrim_.addEventListener("click",this.handleScrimClick_),this.focusTrap_=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e=G.a){return e(t,{clickOutsideDeactivates:!0,initialFocus:!1,escapeDeactivates:!1,returnFocusOnDeactivate:!1})}(this.root_,this.focusTrapFactory_)}this.handleKeydown_=(t=>this.foundation_.handleKeydown(t)),this.handleTransitionEnd_=(t=>this.foundation_.handleTransitionEnd(t)),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("transitionend",this.handleTransitionEnd_)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("transitionend",this.handleTransitionEnd_),this.list_&&this.list_.destroy();const{MODAL:t}=F.cssClasses;this.root_.classList.contains(t)&&(this.scrim_.removeEventListener("click",this.handleScrimClick_),this.open=!1)}getDefaultFoundation(){const t=Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),elementHasClass:(t,e)=>t.classList.contains(e),saveFocus:()=>{this.previousFocus_=document.activeElement},restoreFocus:()=>{const t=this.previousFocus_&&this.previousFocus_.focus;this.root_.contains(document.activeElement)&&t&&this.previousFocus_.focus()},focusActiveNavigationItem:()=>{const t=this.root_.querySelector(`.${V.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`);t&&t.focus()},notifyClose:()=>this.emit(D.CLOSE_EVENT,{},!0),notifyOpen:()=>this.emit(D.OPEN_EVENT,{},!0),trapFocus:()=>this.focusTrap_.activate(),releaseFocus:()=>this.focusTrap_.deactivate()}),{DISMISSIBLE:e,MODAL:i}=F.cssClasses;if(this.root_.classList.contains(e))return new F(t);if(this.root_.classList.contains(i))return new N(t);throw new Error(`MDCDrawer: Failed to instantiate component. Supported variants are ${e} and ${i}.`)}}const q=z.attachTo(document.querySelector(".mdc-drawer")),W=O.attachTo(document.getElementById("app-bar"));W.setScrollTarget(document.getElementById("main-content")),W.listen("MDCTopAppBar:nav",()=>{q.open=!q.open});const K=new v(document.querySelector(".mdc-icon-button-print"));K.unbounded=!0,K.listen("click",()=>{window.print()});var X=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Y{static attachTo(t){return new Y(t,new X)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var $=Y;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const j={ROOT:"mdc-menu",MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group"},Z={SELECTED_EVENT:"MDCMenu:selected",ARIA_SELECTED_ATTR:"aria-selected",LIST_SELECTOR:".mdc-list",CHECKBOX_SELECTOR:'input[type="checkbox"]'};var Q=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const J={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},tt={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'},et={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67},it={BOTTOM:1,CENTER:2,RIGHT:4,FLIP_RTL:8},st={TOP_LEFT:0,TOP_RIGHT:it.RIGHT,BOTTOM_LEFT:it.BOTTOM,BOTTOM_RIGHT:it.BOTTOM|it.RIGHT,TOP_START:it.FLIP_RTL,TOP_END:it.FLIP_RTL|it.RIGHT,BOTTOM_START:it.BOTTOM|it.FLIP_RTL,BOTTOM_END:it.BOTTOM|it.RIGHT|it.FLIP_RTL};class at extends Q{static get cssClasses(){return J}static get strings(){return tt}static get numbers(){return et}static get Corner(){return st}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>!1,hasAnchor:()=>!1,notifyClose:()=>{},notifyOpen:()=>{},isElementInContainer:()=>!1,isRtl:()=>!1,setTransformOrigin:()=>{},isFocused:()=>!1,saveFocus:()=>{},restoreFocus:()=>{},isFirstElementFocused:()=>{},isLastElementFocused:()=>{},focusFirstElement:()=>{},focusLastElement:()=>{},getInnerDimensions:()=>({}),getAnchorDimensions:()=>({}),getWindowDimensions:()=>({}),getBodyDimensions:()=>({}),getWindowScroll:()=>({}),setPosition:()=>{},setMaxHeight:()=>{}}}constructor(t){super(Object.assign(at.defaultAdapter,t)),this.isOpen_=!1,this.openAnimationEndTimerId_=0,this.closeAnimationEndTimerId_=0,this.animationRequestId_=0,this.dimensions_,this.anchorCorner_=st.TOP_START,this.anchorMargin_={top:0,right:0,bottom:0,left:0},this.measures_=null,this.quickOpen_=!1,this.hoistedElement_=!1,this.isFixedPosition_=!1,this.position_={x:0,y:0}}init(){const{ROOT:t,OPEN:e}=at.cssClasses;if(!this.adapter_.hasClass(t))throw new Error(`${t} class required in root element.`);this.adapter_.hasClass(e)&&(this.isOpen_=!0)}destroy(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)}setAnchorCorner(t){this.anchorCorner_=t}setAnchorMargin(t){this.anchorMargin_.top="number"==typeof t.top?t.top:0,this.anchorMargin_.right="number"==typeof t.right?t.right:0,this.anchorMargin_.bottom="number"==typeof t.bottom?t.bottom:0,this.anchorMargin_.left="number"==typeof t.left?t.left:0}setIsHoisted(t){this.hoistedElement_=t}setFixedPosition(t){this.isFixedPosition_=t}setAbsolutePosition(t,e){this.position_.x=this.typeCheckisFinite_(t)?t:0,this.position_.y=this.typeCheckisFinite_(e)?e:0}setQuickOpen(t){this.quickOpen_=t}handleBodyClick(t){const e=t.target;this.adapter_.isElementInContainer(e)||this.close()}handleKeydown(t){const{keyCode:e,key:i,shiftKey:s}=t,a="Tab"===i||9===e;"Escape"===i||27===e?this.close():a&&(this.adapter_.isLastElementFocused()&&!s?(this.adapter_.focusFirstElement(),t.preventDefault()):this.adapter_.isFirstElementFocused()&&s&&(this.adapter_.focusLastElement(),t.preventDefault()))}getAutoLayoutMeasurements_(){let t=this.adapter_.getAnchorDimensions();const e=this.adapter_.getWindowDimensions(),i=this.adapter_.getBodyDimensions(),s=this.adapter_.getWindowScroll();return t||(t={x:this.position_.x,y:this.position_.y,top:this.position_.y,bottom:this.position_.y,left:this.position_.x,right:this.position_.x,height:0,width:0}),{viewport:e,bodyDimensions:i,windowScroll:s,viewportDistance:{top:t.top,right:e.width-t.right,left:t.left,bottom:e.height-t.bottom},anchorHeight:t.height,anchorWidth:t.width,surfaceHeight:this.dimensions_.height,surfaceWidth:this.dimensions_.width}}getOriginCorner_(){let t=st.TOP_LEFT;const{viewportDistance:e,anchorHeight:i,anchorWidth:s,surfaceHeight:a,surfaceWidth:n}=this.measures_,r=Boolean(this.anchorCorner_&it.BOTTOM),o=r?e.top+i+this.anchorMargin_.bottom:e.top+this.anchorMargin_.top,d=a-(r?e.bottom-this.anchorMargin_.bottom:e.bottom+i-this.anchorMargin_.top);d>0&&a-o<d&&(t|=it.BOTTOM);const c=this.adapter_.isRtl(),l=Boolean(this.anchorCorner_&it.FLIP_RTL),h=Boolean(this.anchorCorner_&it.RIGHT),u=h&&!c||!h&&l&&c,_=n-(u?e.left+s+this.anchorMargin_.right:e.left+this.anchorMargin_.left),p=n-(u?e.right-this.anchorMargin_.right:e.right+s-this.anchorMargin_.left);return(_<0&&u&&c||h&&!u&&_<0||p>0&&_<p)&&(t|=it.RIGHT),t}getHorizontalOriginOffset_(t){const{anchorWidth:e}=this.measures_,i=Boolean(t&it.RIGHT),s=Boolean(this.anchorCorner_&it.RIGHT);if(i){const t=s?e-this.anchorMargin_.left:this.anchorMargin_.right;return this.hoistedElement_||this.isFixedPosition_?t-(this.measures_.viewport.width-this.measures_.bodyDimensions.width):t}return s?e-this.anchorMargin_.right:this.anchorMargin_.left}getVerticalOriginOffset_(t){const{anchorHeight:e}=this.measures_,i=Boolean(t&it.BOTTOM),s=Boolean(this.anchorCorner_&it.BOTTOM);let a=0;return a=i?s?e-this.anchorMargin_.top:-this.anchorMargin_.bottom:s?e+this.anchorMargin_.bottom:this.anchorMargin_.top}getMenuSurfaceMaxHeight_(t){let e=0;const{viewportDistance:i}=this.measures_,s=Boolean(t&it.BOTTOM),{MARGIN_TO_EDGE:a}=at.numbers;return s?(e=i.top+this.anchorMargin_.top-a,this.anchorCorner_&it.BOTTOM||(e+=this.measures_.anchorHeight)):(e=i.bottom-this.anchorMargin_.bottom+this.measures_.anchorHeight-a,this.anchorCorner_&it.BOTTOM&&(e-=this.measures_.anchorHeight)),e}autoPosition_(){this.measures_=this.getAutoLayoutMeasurements_();const t=this.getOriginCorner_(),e=this.getMenuSurfaceMaxHeight_(t),i=t&it.BOTTOM?"bottom":"top";let s=t&it.RIGHT?"right":"left";const a=this.getHorizontalOriginOffset_(t),n=this.getVerticalOriginOffset_(t);let r={[s]:a||"0",[i]:n||"0"};const{anchorWidth:o,surfaceWidth:d}=this.measures_;o/d>et.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.hoistedElement_||this.isFixedPosition_)&&(r=this.adjustPositionForHoistedElement_(r));for(const t in r)r.hasOwnProperty(t)&&"0"!==r[t]&&(r[t]=`${parseInt(r[t],10)}px`);this.adapter_.setTransformOrigin(`${s} ${i}`),this.adapter_.setPosition(r),this.adapter_.setMaxHeight(e?e+"px":""),this.measures_=null}adjustPositionForHoistedElement_(t){const{windowScroll:e,viewportDistance:i}=this.measures_;for(const s in t)t.hasOwnProperty(s)&&(i.hasOwnProperty(s)&&(t[s]=parseInt(t[s],10)+i[s]),this.isFixedPosition_||("top"===s?t[s]=parseInt(t[s],10)+e.y:"bottom"===s?t[s]=parseInt(t[s],10)-e.y:"left"===s?t[s]=parseInt(t[s],10)+e.x:"right"===s&&(t[s]=parseInt(t[s],10)-e.x)));return t}open(){this.adapter_.saveFocus(),this.quickOpen_||this.adapter_.addClass(at.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame(()=>{this.adapter_.addClass(at.cssClasses.OPEN),this.dimensions_=this.adapter_.getInnerDimensions(),this.autoPosition_(),this.quickOpen_?this.adapter_.notifyOpen():this.openAnimationEndTimerId_=setTimeout(()=>{this.openAnimationEndTimerId_=0,this.adapter_.removeClass(at.cssClasses.ANIMATING_OPEN),this.adapter_.notifyOpen()},et.TRANSITION_OPEN_DURATION)}),this.isOpen_=!0}close(){this.quickOpen_||this.adapter_.addClass(at.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(()=>{this.adapter_.removeClass(at.cssClasses.OPEN),this.quickOpen_?this.adapter_.notifyClose():this.closeAnimationEndTimerId_=setTimeout(()=>{this.closeAnimationEndTimerId_=0,this.adapter_.removeClass(at.cssClasses.ANIMATING_CLOSED),this.adapter_.notifyClose()},et.TRANSITION_CLOSE_DURATION)}),this.isOpen_=!1,this.maybeRestoreFocus_()}maybeRestoreFocus_(){(this.adapter_.isFocused()||this.adapter_.isElementInContainer(document.activeElement))&&this.adapter_.restoreFocus()}isOpen(){return this.isOpen_}typeCheckisFinite_(t){return"number"==typeof t&&isFinite(t)}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const nt={ROOT:"mdc-list",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated"},rt={ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`.${nt.LIST_ITEM_CLASS} button:not(:disabled), \n  .${nt.LIST_ITEM_CLASS} a`,FOCUSABLE_CHILD_ELEMENTS:`.${nt.LIST_ITEM_CLASS} button:not(:disabled), .${nt.LIST_ITEM_CLASS} a,\n  .${nt.LIST_ITEM_CLASS} input[type="radio"]:not(:disabled),\n  .${nt.LIST_ITEM_CLASS} input[type="checkbox"]:not(:disabled)`,ENABLED_ITEMS_SELECTOR:".mdc-list-item:not(.mdc-list-item--disabled)"},ot=["input","button","textarea","select"];class dt extends X{static get strings(){return rt}static get cssClasses(){return nt}static get defaultAdapter(){return{getListItemCount:()=>{},getFocusedElementIndex:()=>{},setAttributeForElementIndex:()=>{},removeAttributeForElementIndex:()=>{},addClassForElementIndex:()=>{},removeClassForElementIndex:()=>{},focusItemAtIndex:()=>{},setTabIndexForListItemChildren:()=>{},followHref:()=>{},toggleCheckbox:()=>{}}}constructor(t){super(Object.assign(dt.defaultAdapter,t)),this.wrapFocus_=!1,this.isVertical_=!0,this.isSingleSelectionList_=!1,this.selectedIndex_=-1,this.useActivatedClass_=!1}setWrapFocus(t){this.wrapFocus_=t}setVerticalOrientation(t){this.isVertical_=t}setSingleSelection(t){this.isSingleSelectionList_=t}setUseActivatedClass(t){this.useActivatedClass_=t}setSelectedIndex(t){if(t===this.selectedIndex_)return;const e=this.useActivatedClass_?nt.LIST_ITEM_ACTIVATED_CLASS:nt.LIST_ITEM_SELECTED_CLASS;this.selectedIndex_>=0&&(this.adapter_.removeAttributeForElementIndex(this.selectedIndex_,rt.ARIA_SELECTED),this.adapter_.removeClassForElementIndex(this.selectedIndex_,e),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",-1)),t>=0&&this.adapter_.getListItemCount()>t&&(this.selectedIndex_=t,this.adapter_.setAttributeForElementIndex(this.selectedIndex_,rt.ARIA_SELECTED,!0),this.adapter_.addClassForElementIndex(this.selectedIndex_,e),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",0),0!==this.selectedIndex_&&this.adapter_.setAttributeForElementIndex(0,"tabindex",-1))}handleFocusIn(t,e){e>=0&&this.adapter_.setTabIndexForListItemChildren(e,0)}handleFocusOut(t,e){e>=0&&this.adapter_.setTabIndexForListItemChildren(e,-1)}handleKeydown(t,e,i){const s="ArrowLeft"===t.key||37===t.keyCode,a="ArrowUp"===t.key||38===t.keyCode,n="ArrowRight"===t.key||39===t.keyCode,r="ArrowDown"===t.key||40===t.keyCode,o="Home"===t.key||36===t.keyCode,d="End"===t.key||35===t.keyCode,c="Enter"===t.key||13===t.keyCode,l="Space"===t.key||32===t.keyCode;let h=this.adapter_.getFocusedElementIndex();if(!(-1===h&&(h=i)<0))if(this.isVertical_&&r||!this.isVertical_&&n)this.preventDefaultEvent_(t),this.focusNextElement(h);else if(this.isVertical_&&a||!this.isVertical_&&s)this.preventDefaultEvent_(t),this.focusPrevElement(h);else if(o)this.preventDefaultEvent_(t),this.focusFirstElement();else if(d)this.preventDefaultEvent_(t),this.focusLastElement();else if(c||l){e&&(this.isSingleSelectionList_&&(this.setSelectedIndex(h),this.preventDefaultEvent_(t)),this.adapter_.followHref(h)),this.adapter_.toggleCheckbox(i)&&this.preventDefaultEvent_(t)}}handleClick(t,e){-1!==t&&(e&&this.adapter_.toggleCheckbox(t),this.isSingleSelectionList_&&this.setSelectedIndex(t))}preventDefaultEvent_(t){const e=`${t.target.tagName}`.toLowerCase();-1===ot.indexOf(e)&&t.preventDefault()}focusNextElement(t){let e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return;e=0}this.adapter_.focusItemAtIndex(e)}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return;e=this.adapter_.getListItemCount()-1}this.adapter_.focusItemAtIndex(e)}focusFirstElement(){this.adapter_.getListItemCount()>0&&this.adapter_.focusItemAtIndex(0)}focusLastElement(){const t=this.adapter_.getListItemCount()-1;t>=0&&this.adapter_.focusItemAtIndex(t)}}var ct=dt;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const lt=["input","button","textarea","select"];class ht extends X{static get cssClasses(){return j}static get strings(){return Z}static get defaultAdapter(){return{addClassToElementAtIndex:()=>{},removeClassFromElementAtIndex:()=>{},addAttributeToElementAtIndex:()=>{},removeAttributeFromElementAtIndex:()=>{},elementContainsClass:()=>{},closeSurface:()=>{},getElementIndex:()=>{},getParentElement:()=>{},getSelectedElementIndex:()=>{},notifySelected:()=>{}}}constructor(t){super(Object.assign(ht.defaultAdapter,t)),this.closeAnimationEndTimerId_=0}destroy(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()}handleKeydown(t){const{key:e,keyCode:i}=t,s="Tab"===e||9===i;"Space"===e||32===i||("Enter"===e||13===i)?this.handleAction_(t):s&&this.adapter_.closeSurface()}handleClick(t){this.handleAction_(t)}handleAction_(t){const e=this.getListItem_(t.target);e&&(this.handleSelection_(e),this.preventDefaultEvent_(t))}handleSelection_(t){const e=this.adapter_.getElementIndex(t);e<0||(this.adapter_.notifySelected({index:e}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout(()=>{const i=this.getSelectionGroup_(t);null!==i&&this.handleSelectionGroup_(i,e)},at.numbers.TRANSITION_CLOSE_DURATION))}handleSelectionGroup_(t,e){const i=this.adapter_.getSelectedElementIndex(t);i>=0&&(this.adapter_.removeAttributeFromElementAtIndex(i,Z.ARIA_SELECTED_ATTR),this.adapter_.removeClassFromElementAtIndex(i,j.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(e,j.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(e,Z.ARIA_SELECTED_ATTR,"true")}getSelectionGroup_(t){let e=this.adapter_.getParentElement(t),i=this.adapter_.elementContainsClass(e,j.MENU_SELECTION_GROUP);for(;!i&&!this.adapter_.elementContainsClass(e,ct.cssClasses.ROOT);)e=this.adapter_.getParentElement(e),i=this.adapter_.elementContainsClass(e,j.MENU_SELECTION_GROUP);return i?e:null}getListItem_(t){let e=this.adapter_.elementContainsClass(t,ct.cssClasses.LIST_ITEM_CLASS);for(;!e;){if(!(t=this.adapter_.getParentElement(t)))return null;e=this.adapter_.elementContainsClass(t,ct.cssClasses.LIST_ITEM_CLASS)}return t}preventDefaultEvent_(t){const e=`${t.target.tagName}`.toLowerCase();-1===lt.indexOf(e)&&t.preventDefault()}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ut{static attachTo(t){return new ut(t,new Q)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var _t=ut;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let pt;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class mt extends _t{constructor(...t){super(...t),this.previousFocus_,this.anchorElement,this.firstFocusableElement_,this.lastFocusableElement_,this.handleKeydown_,this.handleBodyClick_,this.registerBodyClickListener_,this.deregisterBodyClickListener_}static attachTo(t){return new mt(t)}initialSyncWithDOM(){this.root_.parentElement&&this.root_.parentElement.classList.contains(J.ANCHOR)&&(this.anchorElement=this.root_.parentElement),this.root_.classList.contains(J.FIXED)&&this.setFixedPosition(!0),this.handleKeydown_=(t=>this.foundation_.handleKeydown(t)),this.handleBodyClick_=(t=>this.foundation_.handleBodyClick(t)),this.registerBodyClickListener_=(()=>document.body.addEventListener("click",this.handleBodyClick_)),this.deregisterBodyClickListener_=(()=>document.body.removeEventListener("click",this.handleBodyClick_)),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener(tt.OPENED_EVENT,this.registerBodyClickListener_),this.root_.addEventListener(tt.CLOSED_EVENT,this.deregisterBodyClickListener_)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener(tt.OPENED_EVENT,this.registerBodyClickListener_),this.root_.removeEventListener(tt.CLOSED_EVENT,this.deregisterBodyClickListener_),super.destroy()}get open(){return this.foundation_.isOpen()}set open(t){if(t){const t=this.root_.querySelectorAll(tt.FOCUSABLE_ELEMENTS);this.firstFocusableElement_=t.length>0?t[0]:null,this.lastFocusableElement_=t.length>0?t[t.length-1]:null,this.foundation_.open()}else this.foundation_.close()}hoistMenuToBody(){document.body.appendChild(this.root_.parentElement.removeChild(this.root_)),this.setIsHoisted(!0)}setIsHoisted(t){this.foundation_.setIsHoisted(t)}setMenuSurfaceAnchorElement(t){this.anchorElement=t}setFixedPosition(t){t?this.root_.classList.add(J.FIXED):this.root_.classList.remove(J.FIXED),this.foundation_.setFixedPosition(t)}setAbsolutePosition(t,e){this.foundation_.setAbsolutePosition(t,e),this.setIsHoisted(!0)}setAnchorCorner(t){this.foundation_.setAnchorCorner(t)}setAnchorMargin(t){this.foundation_.setAnchorMargin(t)}set quickOpen(t){this.foundation_.setQuickOpen(t)}getDefaultFoundation(){return new at(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),hasAnchor:()=>!!this.anchorElement,notifyClose:()=>this.emit(at.strings.CLOSED_EVENT,{}),notifyOpen:()=>this.emit(at.strings.OPENED_EVENT,{}),isElementInContainer:t=>this.root_===t||this.root_.contains(t),isRtl:()=>"rtl"===getComputedStyle(this.root_).getPropertyValue("direction"),setTransformOrigin:t=>{this.root_.style[`${function(t,e=!1){if(void 0===pt||e){const e="transform"in t.document.createElement("div").style?"transform":"webkitTransform";pt=e}return pt}(window)}-origin`]=t}},this.getFocusAdapterMethods_(),this.getDimensionAdapterMethods_()))}getFocusAdapterMethods_(){return{isFocused:()=>document.activeElement===this.root_,saveFocus:()=>{this.previousFocus_=document.activeElement},restoreFocus:()=>{this.root_.contains(document.activeElement)&&this.previousFocus_&&this.previousFocus_.focus&&this.previousFocus_.focus()},isFirstElementFocused:()=>this.firstFocusableElement_&&this.firstFocusableElement_===document.activeElement,isLastElementFocused:()=>this.lastFocusableElement_&&this.lastFocusableElement_===document.activeElement,focusFirstElement:()=>this.firstFocusableElement_&&this.firstFocusableElement_.focus&&this.firstFocusableElement_.focus(),focusLastElement:()=>this.lastFocusableElement_&&this.lastFocusableElement_.focus&&this.lastFocusableElement_.focus()}}getDimensionAdapterMethods_(){return{getInnerDimensions:()=>({width:this.root_.offsetWidth,height:this.root_.offsetHeight}),getAnchorDimensions:()=>this.anchorElement&&this.anchorElement.getBoundingClientRect(),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{this.root_.style.left="left"in t?t.left:null,this.root_.style.right="right"in t?t.right:null,this.root_.style.top="top"in t?t.top:null,this.root_.style.bottom="bottom"in t?t.bottom:null},setMaxHeight:t=>{this.root_.style.maxHeight=t}}}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Et extends ${constructor(...t){super(...t),this.handleKeydown_,this.handleClick_,this.focusInEventListener_,this.focusOutEventListener_}static attachTo(t){return new Et(t)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("click",this.handleClick_),this.root_.removeEventListener("focusin",this.focusInEventListener_),this.root_.removeEventListener("focusout",this.focusOutEventListener_)}initialSyncWithDOM(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("focusin",this.focusInEventListener_),this.root_.addEventListener("focusout",this.focusOutEventListener_),this.root_.addEventListener("click",this.handleClick_),this.layout(),this.initializeListType()}layout(){const t=this.root_.getAttribute(rt.ARIA_ORIENTATION);this.vertical=t!==rt.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(t=>{t.setAttribute("tabindex",-1)}),[].slice.call(this.root_.querySelectorAll(rt.FOCUSABLE_CHILD_ELEMENTS)).forEach(t=>t.setAttribute("tabindex",-1))}getListItemIndex_(t){let e=t.target,i=-1;for(;!e.classList.contains(nt.LIST_ITEM_CLASS)&&!e.classList.contains(nt.ROOT);)e=e.parentElement;return e.classList.contains(nt.LIST_ITEM_CLASS)&&(i=this.listElements.indexOf(e)),i}handleFocusInEvent_(t){const e=this.getListItemIndex_(t);this.foundation_.handleFocusIn(t,e)}handleFocusOutEvent_(t){const e=this.getListItemIndex_(t);this.foundation_.handleFocusOut(t,e)}handleKeydownEvent_(t){const e=this.getListItemIndex_(t);e>=0&&this.foundation_.handleKeydown(t,t.target.classList.contains(nt.LIST_ITEM_CLASS),e)}handleClickEvent_(t){const e=this.getListItemIndex_(t),i=!P(t.target,rt.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(e,i)}initializeListType(){const t=this.root_.querySelector(`.${nt.LIST_ITEM_ACTIVATED_CLASS}, .${nt.LIST_ITEM_SELECTED_CLASS}`);t&&(t.classList.contains(nt.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(t))}set vertical(t){this.foundation_.setVerticalOrientation(t)}get listElements(){return[].slice.call(this.root_.querySelectorAll(rt.ENABLED_ITEMS_SELECTOR))}set wrapFocus(t){this.foundation_.setWrapFocus(t)}set singleSelection(t){this.foundation_.setSingleSelection(t)}set selectedIndex(t){this.foundation_.setSelectedIndex(t)}getDefaultFoundation(){return new ct(Object.assign({getListItemCount:()=>this.listElements.length,getFocusedElementIndex:()=>this.listElements.indexOf(document.activeElement),setAttributeForElementIndex:(t,e,i)=>{const s=this.listElements[t];s&&s.setAttribute(e,i)},removeAttributeForElementIndex:(t,e)=>{const i=this.listElements[t];i&&i.removeAttribute(e)},addClassForElementIndex:(t,e)=>{const i=this.listElements[t];i&&i.classList.add(e)},removeClassForElementIndex:(t,e)=>{const i=this.listElements[t];i&&i.classList.remove(e)},focusItemAtIndex:t=>{const e=this.listElements[t];e&&e.focus()},setTabIndexForListItemChildren:(t,e)=>{const i=this.listElements[t];[].slice.call(i.querySelectorAll(rt.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach(t=>t.setAttribute("tabindex",e))},followHref:t=>{const e=this.listElements[t];e&&e.href&&e.click()},toggleCheckbox:t=>{let e=!1;const i=this.listElements[t];return[].slice.call(i.querySelectorAll(rt.CHECKBOX_RADIO_SELECTOR)).forEach(t=>{const i=document.createEvent("Event");i.initEvent("change",!0,!0),t.checked&&"radio"===t.type||(t.checked=!t.checked,t.dispatchEvent(i)),e=!0}),e}}))}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class vt extends ${constructor(...t){super(...t),this.menuSurface_,this.list_,this.handleKeydown_,this.handleClick_,this.afterOpenedCallback_}static attachTo(t){return new vt(t)}initialize(t=(t=>new mt(t)),e=(t=>new Et(t))){this.menuSurface_=t(this.root_);const i=this.root_.querySelector(Z.LIST_SELECTOR);i&&(this.list_=e(i),this.list_.wrapFocus=!0)}initialSyncWithDOM(){this.afterOpenedCallback_=(()=>this.handleAfterOpened_()),this.handleKeydown_=(t=>this.foundation_.handleKeydown(t)),this.handleClick_=(t=>this.foundation_.handleClick(t)),this.menuSurface_.listen(at.strings.OPENED_EVENT,this.afterOpenedCallback_),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_)}destroy(){this.list_&&this.list_.destroy(),this.menuSurface_.destroy(),this.menuSurface_.unlisten(at.strings.OPENED_EVENT,this.afterOpenedCallback_),this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),super.destroy()}get open(){return this.menuSurface_.open}set open(t){this.menuSurface_.open=t}setAnchorCorner(t){this.menuSurface_.setAnchorCorner(t)}setAnchorMargin(t){this.menuSurface_.setAnchorMargin(t)}get items(){return this.list_.listElements}getOptionByIndex(t){return t<this.items.length?this.items[t]:null}set quickOpen(t){this.menuSurface_.quickOpen=t}setFixedPosition(t){this.menuSurface_.setFixedPosition(t)}hoistMenuToBody(){this.menuSurface_.hoistMenuToBody()}setIsHoisted(t){this.menuSurface_.setIsHoisted(t)}setAbsolutePosition(t,e){this.menuSurface_.setAbsolutePosition(t,e)}setAnchorElement(t){this.menuSurface_.anchorElement=t}handleAfterOpened_(){const t=this.items;t.length>0&&t[0].focus()}getDefaultFoundation(){return new ht({addClassToElementAtIndex:(t,e)=>{this.items[t].classList.add(e)},removeClassFromElementAtIndex:(t,e)=>{this.items[t].classList.remove(e)},addAttributeToElementAtIndex:(t,e,i)=>{this.items[t].setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{this.items[t].removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>this.open=!1,getElementIndex:t=>this.items.indexOf(t),getParentElement:t=>t.parentElement,getSelectedElementIndex:t=>this.items.indexOf(t.querySelector(`.${j.MENU_SELECTED_LIST_ITEM}`)),notifySelected:t=>this.emit(Z.SELECTED_EVENT,{index:t.index,item:this.items[t.index]})})}}const gt=v.attachTo(document.querySelector(".mdc-button-center")),ft=new vt(document.querySelector(".mdc-menu-main")),Tt=v.attachTo(document.querySelector(".mdc-button-left")),At=new vt(document.querySelector(".mdc-menu-left")),Ct=v.attachTo(document.querySelector(".mdc-button-right")),St=new vt(document.querySelector(".mdc-menu-right")),It=v.attachTo(document.querySelector(".mdc-button-general")),Lt=new vt(document.querySelector(".mdc-menu-general")),yt=document.querySelector(".main-tv"),bt=document.querySelector(".main-light"),Ot=document.querySelector(".main-coffee"),Rt=B.attachTo(document.querySelector(".list__tv")),Dt=B.attachTo(document.querySelector(".list__light")),wt=B.attachTo(document.querySelector(".list__coffee"));gt.listen("click",()=>{ft.open=!ft.open}),Tt.listen("click",()=>{At.open=!At.open}),Ct.listen("click",()=>{St.open=!St.open}),It.listen("click",()=>{Lt.open=!Lt.open}),Rt.listen("click",()=>{yt.classList.remove("mdc-hidden"),bt.classList.add("mdc-hidden"),Ot.classList.add("mdc-hidden")}),Dt.listen("click",()=>{yt.classList.add("mdc-hidden"),bt.classList.remove("mdc-hidden"),Ot.classList.add("mdc-hidden")}),wt.listen("click",()=>{yt.classList.add("mdc-hidden"),bt.classList.add("mdc-hidden"),Ot.classList.remove("mdc-hidden")});var Ft=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Nt{static attachTo(t){return new Nt(t,new Ft)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var Ht=Nt;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xt=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Mt{static attachTo(t){return new Mt(t,new xt)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var kt=Mt;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Vt={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},Pt={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},Bt={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let Ut,Gt;function zt(t=window,e=!1){if(void 0===Gt||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){return e=!0}})}catch(t){}Gt=e}return!!Gt&&{passive:!0}}const qt=["touchstart","pointerdown","mousedown","keydown"],Wt=["touchend","pointerup","mouseup"];let Kt=[];class Xt extends xt{static get cssClasses(){return Vt}static get strings(){return Pt}static get numbers(){return Bt}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(Xt.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(()=>this.deactivate_()),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=Xt.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(Xt.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(Xt.cssClasses.FG_DEACTIVATION));const{ROOT:t,UNBOUNDED:e}=Xt.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(qt.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):Wt.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){qt.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),Wt.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=Xt;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&void 0!==t&&i.type!==t.type||(e.isActivated=!0,e.isProgrammatic=void 0===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Kt.length>0&&Kt.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(void 0!==t&&(Kt.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{Kt=[],e.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=Xt.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:s}=Xt.cssClasses,{DEACTIVATION_TIMEOUT_MS:a}=Xt.numbers;this.layoutInternal_();let n="",r="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();n=`${t.x}px, ${t.y}px`,r=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,n),this.adapter_.updateCssVariable(e,r),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),a)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let i;return{startPoint:i={x:(i=e?function(t,e,i){const{x:s,y:a}=e,n=s+i.left,r=a+i.top;let o,d;return"touchstart"===t.type?(o=(t=t).changedTouches[0].pageX-n,d=t.changedTouches[0].pageY-r):(o=(t=t).pageX-n,d=t.pageY-r),{x:o,y:d}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:i.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=Xt.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},Bt.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=Xt.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=void 0,Xt.numbers.TAP_DELAY_MS)}deactivate_(){const t=this.activationState_;if(!t.isActivated)return;const e=Object.assign({},t);t.isProgrammatic?(requestAnimationFrame(()=>this.animateDeactivation_(e)),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(e),this.resetActivationState_()}))}deactivate(){this.deactivate_()}animateDeactivation_({wasActivatedByPointer:t,wasElementMadeActive:e}){(t||e)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+Xt.numbers.PADDING})(),this.initialSize_=Math.floor(t*Xt.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:s}=Xt.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(s,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=Xt.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(Xt.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(Xt.cssClasses.BG_FOCUSED))}}var Yt=Xt;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class $t extends kt{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const i=new $t(t);return void 0!==e&&(i.unbounded=e),i}static createAdapter(t){const e=function(t){const e=["matches","webkitMatchesSelector","msMatchesSelector"];let i="matches";for(let s=0;s<e.length;s++){const a=e[s];if(a in t){i=a;break}}return i}(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let i=Ut;if("boolean"==typeof Ut&&!e)return i;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const s=t.CSS.supports("--css-vars","yes"),a=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return i=!(!s&&!a||function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const s=t.getComputedStyle(i),a=null!==s&&"solid"===s.borderTopStyle;return i.remove(),a}(t)),e||(Ut=i),i})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,i)=>t.root_.addEventListener(e,i,zt()),deregisterInteractionHandler:(e,i)=>t.root_.removeEventListener(e,i,zt()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,zt()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,zt()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,i)=>t.root_.style.setProperty(e,i),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new Yt($t.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class jt{}jt.prototype.root_,jt.prototype.unbounded,jt.prototype.disabled;var Zt=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Qt{static attachTo(t){return new Qt(t,new Zt)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var Jt=Qt;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const te={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},ee={CONTENT_SELECTOR:".mdc-tab-indicator__content"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class ie extends Zt{static get cssClasses(){return te}static get strings(){return ee}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},computeContentClientRect:()=>{},setContentStyleProperty:()=>{}}}constructor(t){super(Object.assign(ie.defaultAdapter,t))}computeContentClientRect(){return this.adapter_.computeContentClientRect()}activate(t){}deactivate(){}}var se=ie;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ae=class extends se{activate(t){if(!t)return void this.adapter_.addClass(se.cssClasses.ACTIVE);const e=this.computeContentClientRect(),i=t.width/e.width,s=t.left-e.left;this.adapter_.addClass(se.cssClasses.NO_TRANSITION),this.adapter_.setContentStyleProperty("transform",`translateX(${s}px) scaleX(${i})`),this.computeContentClientRect(),this.adapter_.removeClass(se.cssClasses.NO_TRANSITION),this.adapter_.addClass(se.cssClasses.ACTIVE),this.adapter_.setContentStyleProperty("transform","")}deactivate(){this.adapter_.removeClass(se.cssClasses.ACTIVE)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ne=class extends se{activate(){this.adapter_.addClass(se.cssClasses.ACTIVE)}deactivate(){this.adapter_.removeClass(se.cssClasses.ACTIVE)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class re extends Jt{static attachTo(t){return new re(t)}constructor(...t){super(...t),this.content_}initialize(){this.content_=this.root_.querySelector(se.strings.CONTENT_SELECTOR)}computeContentClientRect(){return this.foundation_.computeContentClientRect()}getDefaultFoundation(){const t=Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),computeContentClientRect:()=>this.content_.getBoundingClientRect(),setContentStyleProperty:(t,e)=>this.content_.style.setProperty(t,e)});return this.root_.classList.contains(se.cssClasses.FADE)?new ne(t):new ae(t)}activate(t){this.foundation_.activate(t)}deactivate(){this.foundation_.deactivate()}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const oe={ACTIVE:"mdc-tab--active"},de={ARIA_SELECTED:"aria-selected",RIPPLE_SELECTOR:".mdc-tab__ripple",CONTENT_SELECTOR:".mdc-tab__content",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator",TABINDEX:"tabIndex",INTERACTED_EVENT:"MDCTab:interacted"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class ce extends xt{static get cssClasses(){return oe}static get strings(){return de}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setAttr:()=>{},activateIndicator:()=>{},deactivateIndicator:()=>{},notifyInteracted:()=>{},getOffsetLeft:()=>{},getOffsetWidth:()=>{},getContentOffsetLeft:()=>{},getContentOffsetWidth:()=>{},focus:()=>{}}}constructor(t){super(Object.assign(ce.defaultAdapter,t)),this.handleClick_=(()=>this.handleClick())}handleClick(){this.adapter_.notifyInteracted()}isActive(){return this.adapter_.hasClass(oe.ACTIVE)}activate(t){this.adapter_.addClass(oe.ACTIVE),this.adapter_.setAttr(de.ARIA_SELECTED,"true"),this.adapter_.setAttr(de.TABINDEX,"0"),this.adapter_.activateIndicator(t),this.adapter_.focus()}deactivate(){this.isActive()&&(this.adapter_.removeClass(oe.ACTIVE),this.adapter_.setAttr(de.ARIA_SELECTED,"false"),this.adapter_.setAttr(de.TABINDEX,"-1"),this.adapter_.deactivateIndicator())}computeDimensions(){const t=this.adapter_.getOffsetWidth(),e=this.adapter_.getOffsetLeft(),i=this.adapter_.getContentOffsetWidth(),s=this.adapter_.getContentOffsetLeft();return{rootLeft:e,rootRight:e+t,contentLeft:e+s,contentRight:e+s+i}}}var le=ce;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class he extends kt{constructor(...t){super(...t),this.ripple_,this.tabIndicator_,this.content_,this.handleClick_}static attachTo(t){return new he(t)}initialize(t=((t,e)=>new $t(t,e)),e=(t=>new re(t))){const i=this.root_.querySelector(le.strings.RIPPLE_SELECTOR),s=Object.assign($t.createAdapter(this),{addClass:t=>i.classList.add(t),removeClass:t=>i.classList.remove(t),updateCssVariable:(t,e)=>i.style.setProperty(t,e)}),a=new Yt(s);this.ripple_=t(this.root_,a);const n=this.root_.querySelector(le.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator_=e(n),this.content_=this.root_.querySelector(le.strings.CONTENT_SELECTOR)}initialSyncWithDOM(){this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.listen("click",this.handleClick_)}destroy(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),super.destroy()}getDefaultFoundation(){return new le({setAttr:(t,e)=>this.root_.setAttribute(t,e),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),activateIndicator:t=>this.tabIndicator_.activate(t),deactivateIndicator:()=>this.tabIndicator_.deactivate(),notifyInteracted:()=>this.emit(le.strings.INTERACTED_EVENT,{tab:this},!0),getOffsetLeft:()=>this.root_.offsetLeft,getOffsetWidth:()=>this.root_.offsetWidth,getContentOffsetLeft:()=>this.content_.offsetLeft,getContentOffsetWidth:()=>this.content_.offsetWidth,focus:()=>this.root_.focus()})}get active(){return this.foundation_.isActive()}activate(t){this.foundation_.activate(t)}deactivate(){this.foundation_.deactivate()}computeIndicatorClientRect(){return this.tabIndicator_.computeContentClientRect()}computeDimensions(){return this.foundation_.computeDimensions()}focus(){this.root_.focus()}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ue=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class _e{static attachTo(t){return new _e(t,new ue)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var pe=_e;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const me={ANIMATING:"mdc-tab-scroller--animating",SCROLL_TEST:"mdc-tab-scroller__test",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll"},Ee={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};var ve=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{constructor(t){this.adapter_=t}getScrollPositionRTL(t){}scrollToRTL(t){}incrementScrollRTL(t){}getAnimatingScrollPosition(t,e){}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ge=class extends ve{getScrollPositionRTL(){const t=this.adapter_.getScrollAreaScrollLeft(),{right:e}=this.calculateScrollEdges_();return Math.round(e-t)}scrollToRTL(t){const e=this.calculateScrollEdges_(),i=this.adapter_.getScrollAreaScrollLeft(),s=this.clampScrollValue_(e.right-t);return{finalScrollPosition:s,scrollDelta:s-i}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e-t);return{finalScrollPosition:i,scrollDelta:i-e}}getAnimatingScrollPosition(t){return t}calculateScrollEdges_(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var fe=class extends ve{getScrollPositionRTL(t){const e=this.adapter_.getScrollAreaScrollLeft();return Math.round(t-e)}scrollToRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(-t);return{finalScrollPosition:i,scrollDelta:i-e}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e-t);return{finalScrollPosition:i,scrollDelta:i-e}}getAnimatingScrollPosition(t,e){return t-e}calculateScrollEdges_(){const t=this.adapter_.getScrollContentOffsetWidth();return{left:this.adapter_.getScrollAreaOffsetWidth()-t,right:0}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.max(Math.min(e.right,t),e.left)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Te=class extends ve{getScrollPositionRTL(t){const e=this.adapter_.getScrollAreaScrollLeft();return Math.round(e-t)}scrollToRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(t);return{finalScrollPosition:i,scrollDelta:e-i}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e+t);return{finalScrollPosition:i,scrollDelta:e-i}}getAnimatingScrollPosition(t,e){return t+e}calculateScrollEdges_(){return{left:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth(),right:0}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.right,t),e.left)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Ae extends ue{static get cssClasses(){return me}static get strings(){return Ee}static get defaultAdapter(){return{eventTargetMatchesSelector:()=>{},addClass:()=>{},removeClass:()=>{},addScrollAreaClass:()=>{},setScrollAreaStyleProperty:()=>{},setScrollContentStyleProperty:()=>{},getScrollContentStyleValue:()=>{},setScrollAreaScrollLeft:()=>{},getScrollAreaScrollLeft:()=>{},getScrollContentOffsetWidth:()=>{},getScrollAreaOffsetWidth:()=>{},computeScrollAreaClientRect:()=>{},computeScrollContentClientRect:()=>{},computeHorizontalScrollbarHeight:()=>{}}}constructor(t){super(Object.assign(Ae.defaultAdapter,t)),this.isAnimating_=!1,this.rtlScrollerInstance_}init(){const t=this.adapter_.computeHorizontalScrollbarHeight();this.adapter_.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter_.addScrollAreaClass(Ae.cssClasses.SCROLL_AREA_SCROLL)}getScrollPosition(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();const t=this.calculateCurrentTranslateX_();return this.adapter_.getScrollAreaScrollLeft()-t}handleInteraction(){this.isAnimating_&&this.stopScrollAnimation_()}handleTransitionEnd(t){this.isAnimating_&&this.adapter_.eventTargetMatchesSelector(t.target,Ae.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter_.removeClass(Ae.cssClasses.ANIMATING))}incrementScroll(t){if(0!==t)return this.isRTL_()?this.incrementScrollRTL_(t):void this.incrementScroll_(t)}scrollTo(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)}getRTLScroller(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_}calculateCurrentTranslateX_(){const t=this.adapter_.getScrollContentStyleValue("transform");if("none"===t)return 0;const e=/\((.+)\)/.exec(t)[1].split(",");return parseFloat(e[4])}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)}computeCurrentScrollPositionRTL_(){const t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)}calculateScrollEdges_(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}}scrollTo_(t){const e=this.getScrollPosition(),i=this.clampScrollValue_(t),s=i-e;this.animate_({finalScrollPosition:i,scrollDelta:s})}scrollToRTL_(t){const e=this.getRTLScroller().scrollToRTL(t);this.animate_(e)}incrementScroll_(t){const e=this.getScrollPosition(),i=t+e,s=this.clampScrollValue_(i),a=s-e;this.animate_({finalScrollPosition:s,scrollDelta:a})}incrementScrollRTL_(t){const e=this.getRTLScroller().incrementScrollRTL(t);this.animate_(e)}animate_(t){0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter_.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter_.setScrollContentStyleProperty("transform",`translateX(${t.scrollDelta}px)`),this.adapter_.computeScrollAreaClientRect(),requestAnimationFrame(()=>{this.adapter_.addClass(Ae.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","none")}),this.isAnimating_=!0)}stopScrollAnimation_(){this.isAnimating_=!1;const t=this.getAnimatingScrollPosition_();this.adapter_.removeClass(Ae.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter_.setScrollAreaScrollLeft(t)}getAnimatingScrollPosition_(){const t=this.calculateCurrentTranslateX_(),e=this.adapter_.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t}rtlScrollerFactory_(){const t=this.adapter_.getScrollAreaScrollLeft();this.adapter_.setScrollAreaScrollLeft(t-1);const e=this.adapter_.getScrollAreaScrollLeft();if(e<0)return this.adapter_.setScrollAreaScrollLeft(t),new fe(this.adapter_);const i=this.adapter_.computeScrollAreaClientRect(),s=this.adapter_.computeScrollContentClientRect(),a=Math.round(s.right-i.right);return this.adapter_.setScrollAreaScrollLeft(t),a===e?new Te(this.adapter_):new ge(this.adapter_)}isRTL_(){return"rtl"===this.adapter_.getScrollContentStyleValue("direction")}}var Ce=Ae;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let Se;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Ie extends pe{static attachTo(t){return new Ie(t)}constructor(...t){super(...t),this.content_,this.area_,this.handleInteraction_,this.handleTransitionEnd_}initialize(){this.area_=this.root_.querySelector(Ce.strings.AREA_SELECTOR),this.content_=this.root_.querySelector(Ce.strings.CONTENT_SELECTOR)}initialSyncWithDOM(){this.handleInteraction_=(()=>this.foundation_.handleInteraction()),this.handleTransitionEnd_=(t=>this.foundation_.handleTransitionEnd(t)),this.area_.addEventListener("wheel",this.handleInteraction_),this.area_.addEventListener("touchstart",this.handleInteraction_),this.area_.addEventListener("pointerdown",this.handleInteraction_),this.area_.addEventListener("mousedown",this.handleInteraction_),this.area_.addEventListener("keydown",this.handleInteraction_),this.content_.addEventListener("transitionend",this.handleTransitionEnd_)}destroy(){super.destroy(),this.area_.removeEventListener("wheel",this.handleInteraction_),this.area_.removeEventListener("touchstart",this.handleInteraction_),this.area_.removeEventListener("pointerdown",this.handleInteraction_),this.area_.removeEventListener("mousedown",this.handleInteraction_),this.area_.removeEventListener("keydown",this.handleInteraction_),this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)}getDefaultFoundation(){return new Ce({eventTargetMatchesSelector:(t,e)=>{return t[function(t){return["msMatchesSelector","matches"].filter(e=>e in t).pop()}(HTMLElement.prototype)](e)},addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),addScrollAreaClass:t=>this.area_.classList.add(t),setScrollAreaStyleProperty:(t,e)=>this.area_.style.setProperty(t,e),setScrollContentStyleProperty:(t,e)=>this.content_.style.setProperty(t,e),getScrollContentStyleValue:t=>window.getComputedStyle(this.content_).getPropertyValue(t),setScrollAreaScrollLeft:t=>this.area_.scrollLeft=t,getScrollAreaScrollLeft:()=>this.area_.scrollLeft,getScrollContentOffsetWidth:()=>this.content_.offsetWidth,getScrollAreaOffsetWidth:()=>this.area_.offsetWidth,computeScrollAreaClientRect:()=>this.area_.getBoundingClientRect(),computeScrollContentClientRect:()=>this.content_.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>(function(t,e=!0){if(e&&void 0!==Se)return Se;const i=t.createElement("div");i.classList.add(me.SCROLL_TEST),t.body.appendChild(i);const s=i.offsetHeight-i.clientHeight;return t.body.removeChild(i),e&&(Se=s),s})(document)})}getScrollPosition(){return this.foundation_.getScrollPosition()}getScrollContentWidth(){return this.content_.offsetWidth}incrementScroll(t){this.foundation_.incrementScroll(t)}scrollTo(t){this.foundation_.scrollTo(t)}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Le={TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",HOME_KEY:"Home",ENTER_KEY:"Enter",SPACE_KEY:"Space"},ye={EXTRA_SCROLL_AMOUNT:20,ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,HOME_KEYCODE:36,ENTER_KEYCODE:13,SPACE_KEYCODE:32},be=new Set;be.add(Le.ARROW_LEFT_KEY),be.add(Le.ARROW_RIGHT_KEY),be.add(Le.END_KEY),be.add(Le.HOME_KEY),be.add(Le.ENTER_KEY),be.add(Le.SPACE_KEY);const Oe=new Map;Oe.set(ye.ARROW_LEFT_KEYCODE,Le.ARROW_LEFT_KEY),Oe.set(ye.ARROW_RIGHT_KEYCODE,Le.ARROW_RIGHT_KEY),Oe.set(ye.END_KEYCODE,Le.END_KEY),Oe.set(ye.HOME_KEYCODE,Le.HOME_KEY),Oe.set(ye.ENTER_KEYCODE,Le.ENTER_KEY),Oe.set(ye.SPACE_KEYCODE,Le.SPACE_KEY);class Re extends Ft{static get strings(){return Le}static get numbers(){return ye}static get defaultAdapter(){return{scrollTo:()=>{},incrementScroll:()=>{},getScrollPosition:()=>{},getScrollContentWidth:()=>{},getOffsetWidth:()=>{},isRTL:()=>{},setActiveTab:()=>{},activateTabAtIndex:()=>{},deactivateTabAtIndex:()=>{},focusTabAtIndex:()=>{},getTabIndicatorClientRectAtIndex:()=>{},getTabDimensionsAtIndex:()=>{},getPreviousActiveTabIndex:()=>{},getFocusedTabIndex:()=>{},getIndexOfTab:()=>{},getTabListLength:()=>{},notifyTabActivated:()=>{}}}constructor(t){super(Object.assign(Re.defaultAdapter,t)),this.useAutomaticActivation_=!1}setUseAutomaticActivation(t){this.useAutomaticActivation_=t}activateTab(t){const e=this.adapter_.getPreviousActiveTabIndex();this.indexIsInRange_(t)&&t!==e&&(this.adapter_.deactivateTabAtIndex(e),this.adapter_.activateTabAtIndex(t,this.adapter_.getTabIndicatorClientRectAtIndex(e)),this.scrollIntoView(t),this.adapter_.notifyTabActivated(t))}handleKeyDown(t){const e=this.getKeyFromEvent_(t);if(void 0!==e)if(this.isActivationKey_(e)||t.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(e))return;const t=this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(),e);this.adapter_.setActiveTab(t),this.scrollIntoView(t)}else{const t=this.adapter_.getFocusedTabIndex();if(this.isActivationKey_(e))this.adapter_.setActiveTab(t);else{const i=this.determineTargetFromKey_(t,e);this.adapter_.focusTabAtIndex(i),this.scrollIntoView(i)}}}handleTabInteraction(t){this.adapter_.setActiveTab(this.adapter_.getIndexOfTab(t.detail.tab))}scrollIntoView(t){if(this.indexIsInRange_(t))return 0===t?this.adapter_.scrollTo(0):t===this.adapter_.getTabListLength()-1?this.adapter_.scrollTo(this.adapter_.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(t):void this.scrollIntoView_(t)}determineTargetFromKey_(t,e){const i=this.isRTL_(),s=this.adapter_.getTabListLength()-1,a=e===Le.END_KEY,n=e===Le.ARROW_LEFT_KEY&&!i||e===Le.ARROW_RIGHT_KEY&&i,r=e===Le.ARROW_RIGHT_KEY&&!i||e===Le.ARROW_LEFT_KEY&&i;let o=t;return a?o=s:n?o-=1:r?o+=1:o=0,o<0?o=s:o>s&&(o=0),o}calculateScrollIncrement_(t,e,i,s){const a=this.adapter_.getTabDimensionsAtIndex(e),n=a.contentLeft-i-s,r=a.contentRight-i-ye.EXTRA_SCROLL_AMOUNT,o=n+ye.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(r,0):Math.max(o,0)}calculateScrollIncrementRTL_(t,e,i,s,a){const n=this.adapter_.getTabDimensionsAtIndex(e),r=a-n.contentLeft-i,o=a-n.contentRight-i-s+ye.EXTRA_SCROLL_AMOUNT,d=r-ye.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(o,0):Math.min(d,0)}findAdjacentTabIndexClosestToEdge_(t,e,i,s){const a=e.rootLeft-i,n=e.rootRight-i-s,r=a+n;return a<0||r<0?t-1:n>0||r>0?t+1:-1}findAdjacentTabIndexClosestToEdgeRTL_(t,e,i,s,a){const n=a-e.rootLeft-s-i,r=a-e.rootRight-i,o=n+r;return n>0||o>0?t+1:r<0||o<0?t-1:-1}getKeyFromEvent_(t){return be.has(t.key)?t.key:Oe.get(t.keyCode)}isActivationKey_(t){return t===Le.SPACE_KEY||t===Le.ENTER_KEY}indexIsInRange_(t){return t>=0&&t<this.adapter_.getTabListLength()}isRTL_(){return this.adapter_.isRTL()}scrollIntoView_(t){const e=this.adapter_.getScrollPosition(),i=this.adapter_.getOffsetWidth(),s=this.adapter_.getTabDimensionsAtIndex(t),a=this.findAdjacentTabIndexClosestToEdge_(t,s,e,i);if(!this.indexIsInRange_(a))return;const n=this.calculateScrollIncrement_(t,a,e,i);this.adapter_.incrementScroll(n)}scrollIntoViewRTL_(t){const e=this.adapter_.getScrollPosition(),i=this.adapter_.getOffsetWidth(),s=this.adapter_.getTabDimensionsAtIndex(t),a=this.adapter_.getScrollContentWidth(),n=this.findAdjacentTabIndexClosestToEdgeRTL_(t,s,e,i,a);if(!this.indexIsInRange_(n))return;const r=this.calculateScrollIncrementRTL_(t,n,e,i,a);this.adapter_.incrementScroll(r)}}var De=Re;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class we extends Ht{constructor(...t){super(...t),this.tabList_,this.tabFactory_,this.tabScroller_,this.tabScrollerFactory_,this.handleTabInteraction_,this.handleKeyDown_}static attachTo(t){return new we(t)}set useAutomaticActivation(t){this.foundation_.setUseAutomaticActivation(t)}initialize(t=(t=>new he(t)),e=(t=>new Ie(t))){this.tabFactory_=t,this.tabScrollerFactory_=e,this.tabList_=this.getTabElements_().map(t=>this.tabFactory_(t));const i=this.root_.querySelector(De.strings.TAB_SCROLLER_SELECTOR);i&&(this.tabScroller_=this.tabScrollerFactory_(i))}initialSyncWithDOM(){this.handleTabInteraction_=(t=>this.foundation_.handleTabInteraction(t)),this.handleKeyDown_=(t=>this.foundation_.handleKeyDown(t)),this.root_.addEventListener(le.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.root_.addEventListener("keydown",this.handleKeyDown_);for(let t=0;t<this.tabList_.length;t++)if(this.tabList_[t].active){this.scrollIntoView(t);break}}destroy(){super.destroy(),this.root_.removeEventListener(le.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.root_.removeEventListener("keydown",this.handleKeyDown_),this.tabList_.forEach(t=>t.destroy()),this.tabScroller_.destroy()}getDefaultFoundation(){return new De({scrollTo:t=>this.tabScroller_.scrollTo(t),incrementScroll:t=>this.tabScroller_.incrementScroll(t),getScrollPosition:()=>this.tabScroller_.getScrollPosition(),getScrollContentWidth:()=>this.tabScroller_.getScrollContentWidth(),getOffsetWidth:()=>this.root_.offsetWidth,isRTL:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction"),setActiveTab:t=>this.foundation_.activateTab(t),activateTabAtIndex:(t,e)=>this.tabList_[t].activate(e),deactivateTabAtIndex:t=>this.tabList_[t].deactivate(),focusTabAtIndex:t=>this.tabList_[t].focus(),getTabIndicatorClientRectAtIndex:t=>this.tabList_[t].computeIndicatorClientRect(),getTabDimensionsAtIndex:t=>this.tabList_[t].computeDimensions(),getPreviousActiveTabIndex:()=>{for(let t=0;t<this.tabList_.length;t++)if(this.tabList_[t].active)return t;return-1},getFocusedTabIndex:()=>{const t=this.getTabElements_(),e=document.activeElement;return t.indexOf(e)},getIndexOfTab:t=>this.tabList_.indexOf(t),getTabListLength:()=>this.tabList_.length,notifyTabActivated:t=>this.emit(De.strings.TAB_ACTIVATED_EVENT,{index:t},!0)})}activateTab(t){this.foundation_.activateTab(t)}scrollIntoView(t){this.foundation_.scrollIntoView(t)}getTabElements_(){return[].slice.call(this.root_.querySelectorAll(De.strings.TAB_SELECTOR))}}const Fe=document.querySelector(".mdc-card-first-light"),Ne=document.querySelector(".mdc-card-second-light"),He=we.attachTo(document.querySelector(".mdc-tab-first-light")),xe=we.attachTo(document.querySelector(".mdc-tab-second-light"));He.listen("click",()=>{Fe.classList.remove("mdc-hidden"),Ne.classList.add("mdc-hidden")}),xe.listen("click",()=>{Fe.classList.add("mdc-hidden"),Ne.classList.remove("mdc-hidden")});const Me=document.querySelector(".mdc-card-first"),ke=document.querySelector(".mdc-card-second"),Ve=we.attachTo(document.querySelector(".mdc-tab-first")),Pe=we.attachTo(document.querySelector(".mdc-tab-second"));Ve.listen("click",()=>{Me.classList.remove("mdc-hidden"),ke.classList.add("mdc-hidden")}),Pe.listen("click",()=>{Me.classList.add("mdc-hidden"),ke.classList.remove("mdc-hidden")});const Be=document.querySelector(".mdc-card-first-coffee"),Ue=document.querySelector(".mdc-card-second-coffee"),Ge=we.attachTo(document.querySelector(".mdc-tab-first-coffee")),ze=we.attachTo(document.querySelector(".mdc-tab-second-coffee"));Ge.listen("click",()=>{Be.classList.remove("mdc-hidden"),Ue.classList.add("mdc-hidden")}),ze.listen("click",()=>{Be.classList.add("mdc-hidden"),Ue.classList.remove("mdc-hidden")});i(6);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qe=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class We{static attachTo(t){return new We(t,new qe)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var Ke=We;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Xe={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},Ye={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},$e={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let je,Ze;function Qe(t=window,e=!1){if(void 0===Ze||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){return e=!0}})}catch(t){}Ze=e}return!!Ze&&{passive:!0}}const Je=["touchstart","pointerdown","mousedown","keydown"],ti=["touchend","pointerup","mouseup"];let ei=[];class ii extends qe{static get cssClasses(){return Xe}static get strings(){return Ye}static get numbers(){return $e}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(ii.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(()=>this.deactivate_()),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=ii.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(ii.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(ii.cssClasses.FG_DEACTIVATION));const{ROOT:t,UNBOUNDED:e}=ii.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(Je.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):ti.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){Je.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),ti.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=ii;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&void 0!==t&&i.type!==t.type||(e.isActivated=!0,e.isProgrammatic=void 0===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&ei.length>0&&ei.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(void 0!==t&&(ei.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{ei=[],e.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=ii.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:s}=ii.cssClasses,{DEACTIVATION_TIMEOUT_MS:a}=ii.numbers;this.layoutInternal_();let n="",r="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();n=`${t.x}px, ${t.y}px`,r=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,n),this.adapter_.updateCssVariable(e,r),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),a)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let i;return{startPoint:i={x:(i=e?function(t,e,i){const{x:s,y:a}=e,n=s+i.left,r=a+i.top;let o,d;return"touchstart"===t.type?(o=(t=t).changedTouches[0].pageX-n,d=t.changedTouches[0].pageY-r):(o=(t=t).pageX-n,d=t.pageY-r),{x:o,y:d}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:i.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=ii.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},$e.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=ii.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=void 0,ii.numbers.TAP_DELAY_MS)}deactivate_(){const t=this.activationState_;if(!t.isActivated)return;const e=Object.assign({},t);t.isProgrammatic?(requestAnimationFrame(()=>this.animateDeactivation_(e)),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(e),this.resetActivationState_()}))}deactivate(){this.deactivate_()}animateDeactivation_({wasActivatedByPointer:t,wasElementMadeActive:e}){(t||e)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+ii.numbers.PADDING})(),this.initialSize_=Math.floor(t*ii.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:s}=ii.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(s,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=ii.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(ii.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(ii.cssClasses.BG_FOCUSED))}}var si=ii;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ai extends Ke{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const i=new ai(t);return void 0!==e&&(i.unbounded=e),i}static createAdapter(t){const e=function(t){const e=["matches","webkitMatchesSelector","msMatchesSelector"];let i="matches";for(let s=0;s<e.length;s++){const a=e[s];if(a in t){i=a;break}}return i}(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let i=je;if("boolean"==typeof je&&!e)return i;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const s=t.CSS.supports("--css-vars","yes"),a=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return i=!(!s&&!a||function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const s=t.getComputedStyle(i),a=null!==s&&"solid"===s.borderTopStyle;return i.remove(),a}(t)),e||(je=i),i})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,i)=>t.root_.addEventListener(e,i,Qe()),deregisterInteractionHandler:(e,i)=>t.root_.removeEventListener(e,i,Qe()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,Qe()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,Qe()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,i)=>t.root_.style.setProperty(e,i),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new si(ai.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class ni{}ni.prototype.root_,ni.prototype.unbounded,ni.prototype.disabled;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ri={OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",CLOSING:"mdc-dialog--closing",SCROLLABLE:"mdc-dialog--scrollable",STACKED:"mdc-dialog--stacked",SCROLL_LOCK:"mdc-dialog-scroll-lock"},oi={SCRIM_SELECTOR:".mdc-dialog__scrim",CONTAINER_SELECTOR:".mdc-dialog__container",SURFACE_SELECTOR:".mdc-dialog__surface",CONTENT_SELECTOR:".mdc-dialog__content",BUTTON_SELECTOR:".mdc-dialog__button",DEFAULT_BUTTON_SELECTOR:".mdc-dialog__button--default",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),OPENING_EVENT:"MDCDialog:opening",OPENED_EVENT:"MDCDialog:opened",CLOSING_EVENT:"MDCDialog:closing",CLOSED_EVENT:"MDCDialog:closed",ACTION_ATTRIBUTE:"data-mdc-dialog-action",CLOSE_ACTION:"close",DESTROY_ACTION:"destroy"},di={DIALOG_ANIMATION_OPEN_TIME_MS:150,DIALOG_ANIMATION_CLOSE_TIME_MS:75};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class ci extends qe{static get cssClasses(){return ri}static get strings(){return oi}static get numbers(){return di}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},addBodyClass:()=>{},removeBodyClass:()=>{},eventTargetMatches:()=>{},trapFocus:()=>{},releaseFocus:()=>{},isContentScrollable:()=>{},areButtonsStacked:()=>{},getActionFromEvent:()=>{},clickDefaultButton:()=>{},reverseButtons:()=>{},notifyOpening:()=>{},notifyOpened:()=>{},notifyClosing:()=>{},notifyClosed:()=>{}}}constructor(t){super(Object.assign(ci.defaultAdapter,t)),this.isOpen_=!1,this.animationFrame_=0,this.animationTimer_=0,this.layoutFrame_=0,this.escapeKeyAction_=oi.CLOSE_ACTION,this.scrimClickAction_=oi.CLOSE_ACTION,this.autoStackButtons_=!0,this.areButtonsStacked_=!1}init(){this.adapter_.hasClass(ri.STACKED)&&this.setAutoStackButtons(!1)}destroy(){this.isOpen_&&this.close(oi.DESTROY_ACTION),this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)}open(){this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(ri.OPENING),this.runNextAnimationFrame_(()=>{this.adapter_.addClass(ri.OPEN),this.adapter_.addBodyClass(ri.SCROLL_LOCK),this.layout(),this.animationTimer_=setTimeout(()=>{this.handleAnimationTimerEnd_(),this.adapter_.trapFocus(),this.adapter_.notifyOpened()},di.DIALOG_ANIMATION_OPEN_TIME_MS)})}close(t=""){this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.releaseFocus(),this.adapter_.addClass(ri.CLOSING),this.adapter_.removeClass(ri.OPEN),this.adapter_.removeBodyClass(ri.SCROLL_LOCK),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(()=>{this.handleAnimationTimerEnd_(),this.adapter_.notifyClosed(t)},di.DIALOG_ANIMATION_CLOSE_TIME_MS))}isOpen(){return this.isOpen_}getEscapeKeyAction(){return this.escapeKeyAction_}setEscapeKeyAction(t){this.escapeKeyAction_=t}getScrimClickAction(){return this.scrimClickAction_}setScrimClickAction(t){this.scrimClickAction_=t}getAutoStackButtons(){return this.autoStackButtons_}setAutoStackButtons(t){this.autoStackButtons_=t}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()}detectStackedButtons_(){this.adapter_.removeClass(ri.STACKED);const t=this.adapter_.areButtonsStacked();t&&this.adapter_.addClass(ri.STACKED),t!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=t)}detectScrollableContent_(){this.adapter_.removeClass(ri.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(ri.SCROLLABLE)}handleInteraction(t){const e="click"===t.type,i="Enter"===t.key||13===t.keyCode;if(e&&this.adapter_.eventTargetMatches(t.target,oi.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else if(e||"Space"===t.key||32===t.keyCode||i){const e=this.adapter_.getActionFromEvent(t);e?this.close(e):i&&!this.adapter_.eventTargetMatches(t.target,oi.SUPPRESS_DEFAULT_PRESS_SELECTOR)&&this.adapter_.clickDefaultButton()}}handleDocumentKeydown(t){"Escape"!==t.key&&27!==t.keyCode||""===this.escapeKeyAction_||this.close(this.escapeKeyAction_)}handleAnimationTimerEnd_(){this.animationTimer_=0,this.adapter_.removeClass(ri.OPENING),this.adapter_.removeClass(ri.CLOSING)}runNextAnimationFrame_(t){cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(()=>{this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(t,0)})}}var li=ci,hi=i(1),ui=i.n(hi);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const _i=li.strings;class pi extends Ke{constructor(...t){super(...t),this.buttonRipples_,this.buttons_,this.defaultButton_,this.container_,this.content_,this.initialFocusEl_,this.focusTrapFactory_,this.focusTrap_,this.handleInteraction_,this.handleDocumentKeydown_,this.handleOpening_,this.handleClosing_,this.layout_}static attachTo(t){return new pi(t)}get isOpen(){return this.foundation_.isOpen()}get escapeKeyAction(){return this.foundation_.getEscapeKeyAction()}set escapeKeyAction(t){this.foundation_.setEscapeKeyAction(t)}get scrimClickAction(){return this.foundation_.getScrimClickAction()}set scrimClickAction(t){this.foundation_.setScrimClickAction(t)}get autoStackButtons(){return this.foundation_.getAutoStackButtons()}set autoStackButtons(t){this.foundation_.setAutoStackButtons(t)}initialize(t=ui.a,e=null){this.container_=this.root_.querySelector(_i.CONTAINER_SELECTOR),this.content_=this.root_.querySelector(_i.CONTENT_SELECTOR),this.buttons_=[].slice.call(this.root_.querySelectorAll(_i.BUTTON_SELECTOR)),this.defaultButton_=this.root_.querySelector(_i.DEFAULT_BUTTON_SELECTOR),this.buttonRipples_=[],this.focusTrapFactory_=t,this.initialFocusEl_=e;for(let t,e=0;t=this.buttons_[e];e++)this.buttonRipples_.push(new ai(t))}initialSyncWithDOM(){this.focusTrap_=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e=ui.a,i=null){return e(t,{initialFocus:i,escapeDeactivates:!1,clickOutsideDeactivates:!0})}(this.container_,this.focusTrapFactory_,this.initialFocusEl_),this.handleInteraction_=this.foundation_.handleInteraction.bind(this.foundation_),this.handleDocumentKeydown_=this.foundation_.handleDocumentKeydown.bind(this.foundation_),this.layout_=this.layout.bind(this);const t=["resize","orientationchange"];this.handleOpening_=(()=>{t.forEach(t=>window.addEventListener(t,this.layout_)),document.addEventListener("keydown",this.handleDocumentKeydown_)}),this.handleClosing_=(()=>{t.forEach(t=>window.removeEventListener(t,this.layout_)),document.removeEventListener("keydown",this.handleDocumentKeydown_)}),this.listen("click",this.handleInteraction_),this.listen("keydown",this.handleInteraction_),this.listen(_i.OPENING_EVENT,this.handleOpening_),this.listen(_i.CLOSING_EVENT,this.handleClosing_)}destroy(){this.unlisten("click",this.handleInteraction_),this.unlisten("keydown",this.handleInteraction_),this.unlisten(_i.OPENING_EVENT,this.handleOpening_),this.unlisten(_i.CLOSING_EVENT,this.handleClosing_),this.handleClosing_(),this.buttonRipples_.forEach(t=>t.destroy()),super.destroy()}layout(){this.foundation_.layout()}open(){this.foundation_.open()}close(t=""){this.foundation_.close(t)}getDefaultFoundation(){return new li({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),addBodyClass:t=>document.body.classList.add(t),removeBodyClass:t=>document.body.classList.remove(t),eventTargetMatches:(t,e)=>P(t,e),trapFocus:()=>this.focusTrap_.activate(),releaseFocus:()=>this.focusTrap_.deactivate(),isContentScrollable:()=>!!this.content_&&function(t){return t.scrollHeight>t.offsetHeight}(this.content_),areButtonsStacked:()=>(function(t){const e=new Set;return[].forEach.call(t,t=>e.add(t.offsetTop)),e.size>1})(this.buttons_),getActionFromEvent:t=>{const e=function(t,e){if(t.closest)return t.closest(e);let i=t;for(;i;){if(P(i,e))return i;i=i.parentElement}return null}(t.target,`[${_i.ACTION_ATTRIBUTE}]`);return e&&e.getAttribute(_i.ACTION_ATTRIBUTE)},clickDefaultButton:()=>{this.defaultButton_&&this.defaultButton_.click()},reverseButtons:()=>{this.buttons_.reverse(),this.buttons_.forEach(t=>t.parentElement.appendChild(t))},notifyOpening:()=>this.emit(_i.OPENING_EVENT,{}),notifyOpened:()=>this.emit(_i.OPENED_EVENT,{}),notifyClosing:t=>this.emit(_i.CLOSING_EVENT,t?{action:t}:{}),notifyClosed:t=>this.emit(_i.CLOSED_EVENT,t?{action:t}:{})})}}const mi=new pi(document.querySelector(".mdc-dialog"));v.attachTo(document.querySelector(".mdc-button-dialog")).listen("click",()=>{mi.open()});const Ei=new pi(document.querySelector(".mdc-dialog-light"));v.attachTo(document.querySelector(".mdc-button-dialog-light")).listen("click",()=>{Ei.open()});const vi=new pi(document.querySelector(".mdc-dialog-coffee"));v.attachTo(document.querySelector(".mdc-button-dialog-coffee")).listen("click",()=>{vi.open()});i(8);const gi=document.querySelector(".main-home"),fi=document.querySelector(".main-devices"),Ti=document.querySelector(".main-author"),Ai=B.attachTo(document.querySelector(".mdc-list-home")),Ci=B.attachTo(document.querySelector(".mdc-list-devices")),Si=B.attachTo(document.querySelector(".mdc-list-author"));Ai.listen("click",()=>{gi.classList.remove("mdc-hidden"),fi.classList.add("mdc-hidden"),Ti.classList.add("mdc-hidden")}),Ci.listen("click",()=>{gi.classList.add("mdc-hidden"),fi.classList.remove("mdc-hidden"),Ti.classList.add("mdc-hidden")}),Si.listen("click",()=>{gi.classList.add("mdc-hidden"),fi.classList.add("mdc-hidden"),Ti.classList.remove("mdc-hidden")});const Ii=v.attachTo(document.querySelector(".light__onOff")),Li=document.querySelector(".mdc__color-yellow");Ii.listen("click",()=>{""===Li.style.opacity?Li.style.opacity="1":Li.style.opacity=""}),v.attachTo(document.querySelector(".volume__1")).listen("mouseover",()=>{Li.style.opacity="0.1"}),v.attachTo(document.querySelector(".volume__2")).listen("mouseover",()=>{Li.style.opacity="0.2"}),v.attachTo(document.querySelector(".volume__3")).listen("mouseover",()=>{Li.style.opacity="0.35"}),v.attachTo(document.querySelector(".volume__4")).listen("mouseover",()=>{Li.style.opacity="0.45"}),v.attachTo(document.querySelector(".volume__5")).listen("mouseover",()=>{Li.style.opacity="0.6"}),v.attachTo(document.querySelector(".volume__6")).listen("mouseover",()=>{Li.style.opacity="0.7"}),v.attachTo(document.querySelector(".volume__7")).listen("mouseover",()=>{Li.style.opacity="0.8"}),v.attachTo(document.querySelector(".volume__8")).listen("mouseover",()=>{Li.style.opacity="0.9"}),v.attachTo(document.querySelector(".volume__9")).listen("mouseover",()=>{Li.style.opacity="1"});var yi=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class bi{static attachTo(t){return new bi(t,new yi)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var Oi=bi;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ri={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},Di={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},wi={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let Fi,Ni;function Hi(t=window,e=!1){if(void 0===Ni||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){return e=!0}})}catch(t){}Ni=e}return!!Ni&&{passive:!0}}function xi(t){const e=["matches","webkitMatchesSelector","msMatchesSelector"];let i="matches";for(let s=0;s<e.length;s++){const a=e[s];if(a in t){i=a;break}}return i}const Mi=["touchstart","pointerdown","mousedown","keydown"],ki=["touchend","pointerup","mouseup"];let Vi=[];class Pi extends yi{static get cssClasses(){return Ri}static get strings(){return Di}static get numbers(){return wi}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(Pi.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(()=>this.deactivate_()),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=Pi.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(Pi.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(Pi.cssClasses.FG_DEACTIVATION));const{ROOT:t,UNBOUNDED:e}=Pi.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(Mi.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):ki.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){Mi.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),ki.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=Pi;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&void 0!==t&&i.type!==t.type||(e.isActivated=!0,e.isProgrammatic=void 0===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Vi.length>0&&Vi.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(void 0!==t&&(Vi.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{Vi=[],e.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=Pi.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:s}=Pi.cssClasses,{DEACTIVATION_TIMEOUT_MS:a}=Pi.numbers;this.layoutInternal_();let n="",r="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();n=`${t.x}px, ${t.y}px`,r=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,n),this.adapter_.updateCssVariable(e,r),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),a)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let i;return{startPoint:i={x:(i=e?function(t,e,i){const{x:s,y:a}=e,n=s+i.left,r=a+i.top;let o,d;return"touchstart"===t.type?(o=(t=t).changedTouches[0].pageX-n,d=t.changedTouches[0].pageY-r):(o=(t=t).pageX-n,d=t.pageY-r),{x:o,y:d}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:i.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=Pi.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},wi.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=Pi.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=void 0,Pi.numbers.TAP_DELAY_MS)}deactivate_(){const t=this.activationState_;if(!t.isActivated)return;const e=Object.assign({},t);t.isProgrammatic?(requestAnimationFrame(()=>this.animateDeactivation_(e)),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(e),this.resetActivationState_()}))}deactivate(){this.deactivate_()}animateDeactivation_({wasActivatedByPointer:t,wasElementMadeActive:e}){(t||e)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+Pi.numbers.PADDING})(),this.initialSize_=Math.floor(t*Pi.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:s}=Pi.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(s,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=Pi.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(Pi.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(Pi.cssClasses.BG_FOCUSED))}}var Bi=Pi;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Ui extends Oi{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const i=new Ui(t);return void 0!==e&&(i.unbounded=e),i}static createAdapter(t){const e=xi(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let i=Fi;if("boolean"==typeof Fi&&!e)return i;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const s=t.CSS.supports("--css-vars","yes"),a=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return i=!(!s&&!a||function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const s=t.getComputedStyle(i),a=null!==s&&"solid"===s.borderTopStyle;return i.remove(),a}(t)),e||(Fi=i),i})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,i)=>t.root_.addEventListener(e,i,Hi()),deregisterInteractionHandler:(e,i)=>t.root_.removeEventListener(e,i,Hi()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,Hi()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,Hi()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,i)=>t.root_.style.setProperty(e,i),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new Bi(Ui.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class Gi{}Gi.prototype.root_,Gi.prototype.unbounded,Gi.prototype.disabled;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const zi={ARIA_CONTROLS:"aria-controls",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",ICON_SELECTOR:".mdc-text-field__icon",OUTLINE_SELECTOR:".mdc-notched-outline",LINE_RIPPLE_SELECTOR:".mdc-line-ripple"},qi={ROOT:"mdc-text-field",DISABLED:"mdc-text-field--disabled",DENSE:"mdc-text-field--dense",FOCUSED:"mdc-text-field--focused",INVALID:"mdc-text-field--invalid",TEXTAREA:"mdc-text-field--textarea",OUTLINED:"mdc-text-field--outlined",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon"},Wi={LABEL_SCALE:.75,DENSE_LABEL_SCALE:.923},Ki=["pattern","min","max","required","step","minlength","maxlength"],Xi=["color","date","datetime-local","month","range","time","week"];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Yi={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},$i={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class ji extends yi{static get cssClasses(){return $i}static get strings(){return Yi}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setAttr:()=>{},removeAttr:()=>{},setContent:()=>{}}}constructor(t){super(Object.assign(ji.defaultAdapter,t))}setContent(t){this.adapter_.setContent(t)}setPersistent(t){t?this.adapter_.addClass($i.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass($i.HELPER_TEXT_PERSISTENT)}setValidation(t){t?this.adapter_.addClass($i.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass($i.HELPER_TEXT_VALIDATION_MSG)}showToScreenReader(){this.adapter_.removeAttr(Yi.ARIA_HIDDEN)}setValidity(t){const e=this.adapter_.hasClass($i.HELPER_TEXT_PERSISTENT),i=this.adapter_.hasClass($i.HELPER_TEXT_VALIDATION_MSG)&&!t;i?this.adapter_.setAttr(Yi.ROLE,"alert"):this.adapter_.removeAttr(Yi.ROLE),e||i||this.hide_()}hide_(){this.adapter_.setAttr(Yi.ARIA_HIDDEN,"true")}}var Zi=ji;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Qi={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Ji extends yi{static get strings(){return Qi}static get defaultAdapter(){return{getAttr:()=>{},setAttr:()=>{},removeAttr:()=>{},setContent:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},notifyIconAction:()=>{}}}constructor(t){super(Object.assign(Ji.defaultAdapter,t)),this.savedTabIndex_=null,this.interactionHandler_=(t=>this.handleInteraction(t))}init(){this.savedTabIndex_=this.adapter_.getAttr("tabindex"),["click","keydown"].forEach(t=>{this.adapter_.registerInteractionHandler(t,this.interactionHandler_)})}destroy(){["click","keydown"].forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.interactionHandler_)})}setDisabled(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",Qi.ICON_ROLE)))}setAriaLabel(t){this.adapter_.setAttr("aria-label",t)}setContent(t){this.adapter_.setContent(t)}handleInteraction(t){"click"!==t.type&&"Enter"!==t.key&&13!==t.keyCode||this.adapter_.notifyIconAction()}}var ts=Ji;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class es extends yi{static get cssClasses(){return qi}static get strings(){return zi}static get numbers(){return Wi}get shouldShake(){return!this.isValid()&&!this.isFocused_&&!!this.getValue()}get shouldAlwaysFloat_(){const t=this.getNativeInput_().type;return Xi.indexOf(t)>=0}get shouldFloat(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},registerTextFieldInteractionHandler:()=>{},deregisterTextFieldInteractionHandler:()=>{},registerInputInteractionHandler:()=>{},deregisterInputInteractionHandler:()=>{},registerValidationAttributeChangeHandler:()=>{},deregisterValidationAttributeChangeHandler:()=>{},getNativeInput:()=>{},isFocused:()=>{},isRtl:()=>{},activateLineRipple:()=>{},deactivateLineRipple:()=>{},setLineRippleTransformOrigin:()=>{},shakeLabel:()=>{},floatLabel:()=>{},hasLabel:()=>{},getLabelWidth:()=>{},hasOutline:()=>{},notchOutline:()=>{},closeOutline:()=>{}}}constructor(t,e={}){super(Object.assign(es.defaultAdapter,t)),this.helperText_=e.helperText,this.leadingIcon_=e.leadingIcon,this.trailingIcon_=e.trailingIcon,this.isFocused_=!1,this.receivedUserInput_=!1,this.useCustomValidityChecking_=!1,this.isValid_=!0,this.useNativeValidation_=!0,this.inputFocusHandler_=(()=>this.activateFocus()),this.inputBlurHandler_=(()=>this.deactivateFocus()),this.inputInputHandler_=(()=>this.autoCompleteFocus()),this.setPointerXOffset_=(t=>this.setTransformOrigin(t)),this.textFieldInteractionHandler_=(()=>this.handleTextFieldInteraction()),this.validationAttributeChangeHandler_=(t=>this.handleValidationAttributeChange(t)),this.validationObserver_}init(){this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),["mousedown","touchstart"].forEach(t=>{this.adapter_.registerInputInteractionHandler(t,this.setPointerXOffset_)}),["click","keydown"].forEach(t=>{this.adapter_.registerTextFieldInteractionHandler(t,this.textFieldInteractionHandler_)}),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_)}destroy(){this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),["mousedown","touchstart"].forEach(t=>{this.adapter_.deregisterInputInteractionHandler(t,this.setPointerXOffset_)}),["click","keydown"].forEach(t=>{this.adapter_.deregisterTextFieldInteractionHandler(t,this.textFieldInteractionHandler_)}),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)}handleTextFieldInteraction(){this.adapter_.getNativeInput().disabled||(this.receivedUserInput_=!0)}handleValidationAttributeChange(t){t.some(t=>{if(Ki.indexOf(t)>-1)return this.styleValidity_(!0),!0})}notchOutline(t){if(this.adapter_.hasOutline())if(t){const t=this.adapter_.hasClass(qi.DENSE)?Wi.DENSE_LABEL_SCALE:Wi.LABEL_SCALE,e=this.adapter_.getLabelWidth()*t,i=this.adapter_.isRtl();this.adapter_.notchOutline(e,i)}else this.adapter_.closeOutline()}activateFocus(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()}setTransformOrigin(t){const e=t.target.getBoundingClientRect(),i=t.clientX,s=(t.clientY,i-e.left);this.adapter_.setLineRippleTransformOrigin(s)}autoCompleteFocus(){this.receivedUserInput_||this.activateFocus()}deactivateFocus(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();const t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)}getValue(){return this.getNativeInput_().value}setValue(t){this.getNativeInput_().value=t;const e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))}isValid(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_}setValid(t){this.isValid_=t,this.styleValidity_(t);const e=!t&&!this.isFocused_;this.adapter_.hasLabel()&&this.adapter_.shakeLabel(e)}setUseNativeValidation(t){this.useNativeValidation_=t}isDisabled(){return this.getNativeInput_().disabled}setDisabled(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)}setHelperTextContent(t){this.helperText_&&this.helperText_.setContent(t)}setLeadingIconAriaLabel(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)}setLeadingIconContent(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)}setTrailingIconAriaLabel(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)}setTrailingIconContent(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)}isBadInput_(){return this.getNativeInput_().validity.badInput}isNativeInputValid_(){return this.getNativeInput_().validity.valid}styleValidity_(t){const{INVALID:e}=es.cssClasses;t?this.adapter_.removeClass(e):this.adapter_.addClass(e),this.helperText_&&this.helperText_.setValidity(t)}styleFocused_(t){const{FOCUSED:e}=es.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}styleDisabled_(t){const{DISABLED:e,INVALID:i}=es.cssClasses;t?(this.adapter_.addClass(e),this.adapter_.removeClass(i)):this.adapter_.removeClass(e),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)}getNativeInput_(){return this.adapter_.getNativeInput()||{value:"",disabled:!1,validity:{badInput:!1,valid:!0}}}}var is=es;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ss=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class as{static attachTo(t){return new as(t,new ss)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var ns=as;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const rs={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class os extends ss{static get cssClasses(){return rs}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setStyle:()=>{},registerEventHandler:()=>{},deregisterEventHandler:()=>{}}}constructor(t){super(Object.assign(os.defaultAdapter,t)),this.transitionEndHandler_=(t=>this.handleTransitionEnd(t))}init(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)}destroy(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)}activate(){this.adapter_.removeClass(rs.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(rs.LINE_RIPPLE_ACTIVE)}setRippleCenter(t){this.adapter_.setStyle("transform-origin",`${t}px center`)}deactivate(){this.adapter_.addClass(rs.LINE_RIPPLE_DEACTIVATING)}handleTransitionEnd(t){const e=this.adapter_.hasClass(rs.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass(rs.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(rs.LINE_RIPPLE_DEACTIVATING))}}var ds=os;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class cs extends ns{static attachTo(t){return new cs(t)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}setRippleCenter(t){this.foundation_.setRippleCenter(t)}getDefaultFoundation(){return new ds(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),setStyle:(t,e)=>this.root_.style[t]=e,registerEventHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterEventHandler:(t,e)=>this.root_.removeEventListener(t,e)}))}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ls extends Oi{static attachTo(t){return new ls(t)}get foundation(){return this.foundation_}getDefaultFoundation(){return new Zi(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),setAttr:(t,e)=>this.root_.setAttribute(t,e),removeAttr:t=>this.root_.removeAttribute(t),setContent:t=>{this.root_.textContent=t}}))}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class hs extends Oi{static attachTo(t){return new hs(t)}get foundation(){return this.foundation_}getDefaultFoundation(){return new ts(Object.assign({getAttr:t=>this.root_.getAttribute(t),setAttr:(t,e)=>this.root_.setAttribute(t,e),removeAttr:t=>this.root_.removeAttribute(t),setContent:t=>{this.root_.textContent=t},registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),notifyIconAction:()=>this.emit(ts.strings.ICON_EVENT,{},!0)}))}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var us=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class _s{static attachTo(t){return new _s(t,new us)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var ps=_s;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ms={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake"};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Es extends us{static get cssClasses(){return ms}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},getWidth:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{}}}constructor(t){super(Object.assign(Es.defaultAdapter,t)),this.shakeAnimationEndHandler_=(()=>this.handleShakeAnimationEnd_())}init(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)}destroy(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)}getWidth(){return this.adapter_.getWidth()}shake(t){const{LABEL_SHAKE:e}=Es.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}float(t){const{LABEL_FLOAT_ABOVE:e,LABEL_SHAKE:i}=Es.cssClasses;t?this.adapter_.addClass(e):(this.adapter_.removeClass(e),this.adapter_.removeClass(i))}handleShakeAnimationEnd_(){const{LABEL_SHAKE:t}=Es.cssClasses;this.adapter_.removeClass(t)}}var vs=Es;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class gs extends ps{static attachTo(t){return new gs(t)}shake(t){this.foundation_.shake(t)}float(t){this.foundation_.float(t)}getWidth(){return this.foundation_.getWidth()}getDefaultFoundation(){return new vs({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),getWidth:()=>this.root_.offsetWidth,registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e)})}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var fs=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Ts{static attachTo(t){return new Ts(t,new fs)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let s;"function"==typeof CustomEvent?s=new CustomEvent(t,{detail:e,bubbles:i}):(s=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(s)}}var As=Ts;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Cs={PATH_SELECTOR:".mdc-notched-outline__path",IDLE_OUTLINE_SELECTOR:".mdc-notched-outline__idle"},Ss={OUTLINE_NOTCHED:"mdc-notched-outline--notched"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Is extends fs{static get strings(){return Cs}static get cssClasses(){return Ss}static get defaultAdapter(){return{getWidth:()=>{},getHeight:()=>{},addClass:()=>{},removeClass:()=>{},setOutlinePathAttr:()=>{},getIdleOutlineStyleValue:()=>{}}}constructor(t){super(Object.assign(Is.defaultAdapter,t))}notch(t,e=!1){const{OUTLINE_NOTCHED:i}=Is.cssClasses;this.adapter_.addClass(i),this.updateSvgPath_(t,e)}closeNotch(){const{OUTLINE_NOTCHED:t}=Is.cssClasses;this.adapter_.removeClass(t)}updateSvgPath_(t,e){const i=this.adapter_.getIdleOutlineStyleValue("border-radius")||this.adapter_.getIdleOutlineStyleValue("border-top-left-radius"),s=parseFloat(i),a=this.adapter_.getWidth(),n=this.adapter_.getHeight(),r=s+1.2,o=Math.abs(12-r);let d=0;t>0&&(d=t+8);const c="a"+s+","+s+" 0 0 1 "+s+","+s+"v"+(n-2*r)+"a"+s+","+s+" 0 0 1 "+-s+","+s+"h"+(2*r-a)+"a"+s+","+s+" 0 0 1 "+-s+","+-s+"v"+(2*r-n)+"a"+s+","+s+" 0 0 1 "+s+","+-s;let l;l=e?"M"+(a-r-o)+",1h"+o+c+"h"+(a-2*r-d-o):"M"+(r+o+d)+",1h"+(a-2*r-d-o)+c+"h"+o,this.adapter_.setOutlinePathAttr(l)}}var Ls=Is;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ys extends As{static attachTo(t){return new ys(t)}notch(t,e){this.foundation_.notch(t,e)}closeNotch(){this.foundation_.closeNotch()}getDefaultFoundation(){return new Ls({getWidth:()=>this.root_.offsetWidth,getHeight:()=>this.root_.offsetHeight,addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setOutlinePathAttr:t=>{this.root_.querySelector(Cs.PATH_SELECTOR).setAttribute("d",t)},getIdleOutlineStyleValue:t=>{const e=this.root_.parentNode.querySelector(Cs.IDLE_OUTLINE_SELECTOR);return window.getComputedStyle(e).getPropertyValue(t)}})}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class bs extends Oi{constructor(...t){super(...t),this.input_,this.ripple,this.lineRipple_,this.helperText_,this.leadingIcon_,this.trailingIcon_,this.label_,this.outline_}static attachTo(t){return new bs(t)}initialize(t=((t,e)=>new Ui(t,e)),e=(t=>new cs(t)),i=(t=>new ls(t)),s=(t=>new hs(t)),a=(t=>new gs(t)),n=(t=>new ys(t))){this.input_=this.root_.querySelector(zi.INPUT_SELECTOR);const r=this.root_.querySelector(zi.LABEL_SELECTOR);r&&(this.label_=a(r));const o=this.root_.querySelector(zi.LINE_RIPPLE_SELECTOR);o&&(this.lineRipple_=e(o));const d=this.root_.querySelector(zi.OUTLINE_SELECTOR);if(d&&(this.outline_=n(d)),this.input_.hasAttribute(zi.ARIA_CONTROLS)){const t=document.getElementById(this.input_.getAttribute(zi.ARIA_CONTROLS));t&&(this.helperText_=i(t))}const c=this.root_.querySelectorAll(zi.ICON_SELECTOR);if(c.length>0&&(c.length>1?(this.leadingIcon_=s(c[0]),this.trailingIcon_=s(c[1])):this.root_.classList.contains(qi.WITH_LEADING_ICON)?this.leadingIcon_=s(c[0]):this.trailingIcon_=s(c[0])),this.ripple=null,!this.root_.classList.contains(qi.TEXTAREA)&&!this.root_.classList.contains(qi.OUTLINED)){const e=xi(HTMLElement.prototype),i=Object.assign(Ui.createAdapter(this),{isSurfaceActive:()=>this.input_[e](":active"),registerInteractionHandler:(t,e)=>this.input_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.input_.removeEventListener(t,e)}),s=new Bi(i);this.ripple=t(this.root_,s)}}destroy(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.trailingIcon_&&this.trailingIcon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),super.destroy()}initialSyncWithDom(){this.disabled=this.input_.disabled}get value(){return this.foundation_.getValue()}set value(t){this.foundation_.setValue(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}get valid(){return this.foundation_.isValid()}set valid(t){this.foundation_.setValid(t)}get required(){return this.input_.required}set required(t){this.input_.required=t}get pattern(){return this.input_.pattern}set pattern(t){this.input_.pattern=t}get minLength(){return this.input_.minLength}set minLength(t){this.input_.minLength=t}get maxLength(){return this.input_.maxLength}set maxLength(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t}get min(){return this.input_.min}set min(t){this.input_.min=t}get max(){return this.input_.max}set max(t){this.input_.max=t}get step(){return this.input_.step}set step(t){this.input_.step=t}set helperTextContent(t){this.foundation_.setHelperTextContent(t)}set leadingIconAriaLabel(t){this.foundation_.setLeadingIconAriaLabel(t)}set leadingIconContent(t){this.foundation_.setLeadingIconContent(t)}set trailingIconAriaLabel(t){this.foundation_.setTrailingIconAriaLabel(t)}set trailingIconContent(t){this.foundation_.setTrailingIconContent(t)}set useNativeValidation(t){this.foundation_.setUseNativeValidation(t)}layout(){const t=this.foundation_.shouldFloat;this.foundation_.notchOutline(t)}getDefaultFoundation(){return new is(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),registerTextFieldInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver(e=>t((t=>t.map(t=>t.attributeName))(e))),i=this.root_.querySelector(zi.INPUT_SELECTOR);return e.observe(i,{attributes:!0}),e},deregisterValidationAttributeChangeHandler:t=>t.disconnect(),isFocused:()=>document.activeElement===this.root_.querySelector(zi.INPUT_SELECTOR),isRtl:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction")},this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_()),this.getFoundationMap_())}getLabelAdapterMethods_(){return{shakeLabel:t=>this.label_.shake(t),floatLabel:t=>this.label_.float(t),hasLabel:()=>!!this.label_,getLabelWidth:()=>this.label_.getWidth()}}getLineRippleAdapterMethods_(){return{activateLineRipple:()=>{this.lineRipple_&&this.lineRipple_.activate()},deactivateLineRipple:()=>{this.lineRipple_&&this.lineRipple_.deactivate()},setLineRippleTransformOrigin:t=>{this.lineRipple_&&this.lineRipple_.setRippleCenter(t)}}}getOutlineAdapterMethods_(){return{notchOutline:(t,e)=>this.outline_.notch(t,e),closeOutline:()=>this.outline_.closeNotch(),hasOutline:()=>!!this.outline_}}getInputAdapterMethods_(){return{registerInputInteractionHandler:(t,e)=>this.input_.addEventListener(t,e),deregisterInputInteractionHandler:(t,e)=>this.input_.removeEventListener(t,e),getNativeInput:()=>this.input_}}getFoundationMap_(){return{helperText:this.helperText_?this.helperText_.foundation:void 0,leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0,trailingIcon:this.trailingIcon_?this.trailingIcon_.foundation:void 0}}}new bs(document.querySelector(".mdc-text-field"))}]);