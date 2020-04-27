!function(e,t){function n(e,t){var n=arguments.length>2?arguments[2]:[];if(!1===i(e))throw new TypeError(Object.prototype.toString.call(e)+"is not a function.");return e.apply(t,n)}function o(e,t){return e[t]}function r(e,t){return t in e}function i(e){return"function"==typeof e}function c(e){var t=Number(e);return isNaN(t)?0:1/t==1/0||1/t==-1/0||t===1/0||t===-1/0?t:(t<0?-1:1)*Math.floor(Math.abs(t))}function u(e){var t=c(e);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function a(e){if(null===e||e===t)throw TypeError();return Object(e)}function l(e,n){var o,r=(o=n,a(e)[o]);if(null===r||r===t)return t;if(!1===i(r))throw new TypeError("Method not callable: "+n);return r}function s(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in e&&(t instanceof e.Symbol||t.constructor===e.Symbol)?"symbol":"object"}}function f(e,t){return s(e)===s(t)&&("number"===s(e)?!(!isNaN(e)||!isNaN(t))||(1/e==1/0&&1/t==-1/0||(1/e==-1/0&&1/t==1/0||e===t)):function(e,t){return e===t}(e,t))}function p(r){var c=arguments.length>1?arguments[1]:t;if("object"===s(r)){if(arguments.length<2)var u="default";else c===String?u="string":c===Number&&(u="number");var a="function"==typeof e.Symbol&&"symbol"==typeof e.Symbol.toPrimitive?l(r,e.Symbol.toPrimitive):t;if(a!==t){var f=n(a,r,[u]);if("object"!==s(f))return f;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===u&&(u="number"),function(e,t){if("string"===t)var r=["toString","valueOf"];else r=["valueOf","toString"];for(var c=0;c<r.length;++c){var u=o(e,r[c]);if(i(u)){var a=n(u,e);if("object"!==s(a))return a}}throw new TypeError("Cannot convert to primitive.")}(r,u)}return r}function d(e){switch(s(e)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return d(p(e,String));default:return String(e)}}var m,v,b;function y(e,t,n){var o={value:n,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,t,o)}"document"in e||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(e.HTMLDocument?e.Document=e.HTMLDocument:(e.Document=e.HTMLDocument=document.constructor=new Function("return function Document() {}")(),e.Document.prototype=document)),"Element"in e&&"HTMLElement"in e||function(){if(!("Element"in e&&"HTMLElement"in e))if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")).contentWindow.document,r=Element.prototype=o.appendChild(o.createElement("*")),i={},c=function(e,t){var n,o,r,u=e.childNodes||[],a=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,i)o=i[n],e[n]=o;for(;r=t&&u[++a];)c(r,t);return e},u=document.getElementsByTagName("*"),a=document.createElement,l=100;r.attachEvent("onpropertychange",(function(e){for(var t,n=e.propertyName,o=!Object.prototype.hasOwnProperty.call(i,n),c=r[n],a=i[n],l=-1;t=u[++l];)1===t.nodeType&&(o||t[n]===a)&&(t[n]=c);i[n]=c})),r.constructor=Element,r.hasAttribute||(r.hasAttribute=function(e){return null!==this.getAttribute(e)}),s()||(document.onreadystatechange=s,t=setInterval(s,25)),document.createElement=function(e){var t=a(String(e).toLowerCase());return c(t)},document.removeChild(n)}else window.HTMLElement=window.Element;function s(){return l--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(c(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)}}(),"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(e){return!1}}()||(m=Object.defineProperty,v=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),b="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(e,t,n){if(m&&(e===window||e===document||e===Element.prototype||e instanceof Element))return m(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var o=String(t),r="value"in n||"writable"in n,i="get"in n&&typeof n.get,c="set"in n&&typeof n.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!v)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(r)throw new TypeError(b);Object.__defineGetter__.call(e,o,n.get)}else e[o]=n.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!v)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(r)throw new TypeError(b);Object.__defineSetter__.call(e,o,n.set)}return"value"in n&&(e[o]=n.value),e}),"includes"in Array.prototype||y(Array.prototype,"includes",(function(e){"use strict";var t=a(this),n=u(o(t,"length"));if(0===n)return!1;var r=c(arguments[1]);if(r>=0)var i=r;else(i=n+r)<0&&(i=0);for(;i<n;){var l=o(t,d(i));if(f(e,l))return!0;i+=1}return!1})),"indexOf"in Array.prototype||y(Array.prototype,"indexOf",(function(e){var t=a(this),n=u(o(t,"length"));if(0===n)return-1;var i=c(arguments[1]);if(i>=n)return-1;if(i>=0)var l=1/i==-1/0?0:i;else(l=n+i)<0&&(l=0);for(;l<n;){var s=r(t,d(l));if(s){var f=o(t,d(l)),p=e===f;if(p)return l}l+=1}return-1})),"Window"in e||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(t){t.constructor?t.Window=t.constructor:(t.Window=t.constructor=new Function("return function Window() {}")()).prototype=e}(e),function(e){if(!("Event"in e))return!1;try{return new Event("click"),!0}catch(e){return!1}}(e)||function(){var e={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;o.NONE=0,o.CAPTURING_PHASE=1,o.AT_TARGET=2,o.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=o,n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var t=this,n=arguments[0],o=arguments[1];if(t===window&&n in e)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");t._events||(t._events={}),t._events[n]||(t._events[n]=function(e){var n,o=t._events[e.type].list,r=o.slice(),i=-1,c=r.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=t,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||t,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<c&&!e.cancelImmediate;)i in r&&(n=r[i],o.includes(n)&&"function"==typeof n&&n.call(t,e))},t._events[n].list=[],t.attachEvent&&t.attachEvent("on"+n,t._events[n])),t._events[n].list.push(o)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var e,t=this,n=arguments[0],o=arguments[1];t._events&&t._events[n]&&t._events[n].list&&-1!==(e=t._events[n].list.indexOf(o))&&(t._events[n].list.splice(e,1),t._events[n].list.length||(t.detachEvent&&t.detachEvent("on"+n,t._events[n]),delete t._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,e)}catch(o){e.target=t;do{e.currentTarget=t,"_events"in t&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),t=9===t.nodeType?t.parentWindow:t.parentNode}while(t&&!e.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new o("DOMContentLoaded",{bubbles:!0}))})))}function o(e,n){if(!e)throw new Error("Not enough arguments");var o;if("createEvent"in document){o=document.createEvent("Event");var r=!(!n||n.bubbles===t)&&n.bubbles,i=!(!n||n.cancelable===t)&&n.cancelable;return o.initEvent(e,r,i),o}return(o=document.createEventObject()).type=e,o.bubbles=!(!n||n.bubbles===t)&&n.bubbles,o.cancelable=!(!n||n.cancelable===t)&&n.cancelable,o}}(),"CustomEvent"in e&&("function"==typeof e.CustomEvent||e.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)||(e.CustomEvent=function(e,t){if(!e)throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');var n;if(t=t||{bubbles:!1,cancelable:!1,detail:null},"createEvent"in document)try{(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail)}catch(o){(n=document.createEvent("Event")).initEvent(e,t.bubbles,t.cancelable),n.detail=t.detail}else(n=new Event(e,t)).detail=t&&t.detail||null;return n},CustomEvent.prototype=Event.prototype)}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});