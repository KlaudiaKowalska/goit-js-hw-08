function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var i,o,r,a,u,f,l=0,s=!1,c=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,u=setTimeout(h,t),s?y(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||c&&e-l>=r}function h(){var e=v();if(O(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return c?d(n,r-(e-l)):n}(e))}function w(e){return u=void 0,g&&i?y(e):(i=o=void 0,a)}function T(){var e=v(),n=O(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(c)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(s=!!n.leading,r=(c="maxWait"in n)?m(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},T.flush=function(){return void 0===u?a:w(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})},document.addEventListener("DOMContentLoaded",(function(){const n=document.querySelector("form.feedback-form"),i=e(t)((()=>{const e={email:n.elements.email.value,message:n.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);n.addEventListener("input",(e=>{i()}));const o=localStorage.getItem("feedback-form-state");if(o){const e=JSON.parse(o);n.elements.email.value=e.email,n.elements.message.value=e.message}else n.elements.email.value="",n.elements.message.value="";n.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:n.elements.email.value,message:n.elements.message.value}),n.reset()}))}));
//# sourceMappingURL=03-feedback.a08cd77b.js.map
