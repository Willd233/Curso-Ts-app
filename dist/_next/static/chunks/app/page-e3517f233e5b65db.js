(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9029:function(t,n,e){var r=e(2242).Symbol;t.exports=r},6714:function(t,n,e){var r=e(9029),o=e(5078),u=e(6276),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):u(t)}},8663:function(t){var n=Math.floor,e=Math.random;t.exports=function(t,r){return t+n(e()*(r-t+1))}},3225:function(t,n,e){var r=e(121),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},8278:function(t,n,e){var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=r},5078:function(t,n,e){var r=e(9029),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var n=u.call(t,c),e=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=i.call(t);return r&&(n?t[c]=e:delete t[c]),o}},1197:function(t){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},2664:function(t,n,e){var r=e(600),o=e(5635),u=e(1197),i=e(6905);t.exports=function(t,n,e){if(!i(e))return!1;var c=typeof n;return("number"==c?!!(o(e)&&u(n,e.length)):"string"==c&&n in e)&&r(e[n],t)}},6276:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},2242:function(t,n,e){var r=e(8278),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();t.exports=u},121:function(t){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},600:function(t){t.exports=function(t,n){return t===n||t!=t&&n!=n}},5635:function(t,n,e){var r=e(8293),o=e(4594);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},8293:function(t,n,e){var r=e(6714),o=e(6905);t.exports=function(t){if(!o(t))return!1;var n=r(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},4594:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},6905:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},4746:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},1087:function(t,n,e){var r=e(6714),o=e(4746);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},2440:function(t,n,e){var r=e(8663),o=e(2664),u=e(8206),i=parseFloat,c=Math.min,f=Math.random;t.exports=function(t,n,e){if(e&&"boolean"!=typeof e&&o(t,n,e)&&(n=e=void 0),void 0===e&&("boolean"==typeof n?(e=n,n=void 0):"boolean"==typeof t&&(e=t,t=void 0)),void 0===t&&void 0===n?(t=0,n=1):(t=u(t),void 0===n?(n=t,t=0):n=u(n)),t>n){var a=t;t=n,n=a}if(e||t%1||n%1){var s=f();return c(t+s*(n-t+i("1e-"+((s+"").length-1))),n)}return r(t,n)}},8206:function(t,n,e){var r=e(1573),o=1/0;t.exports=function(t){return t?(t=r(t))===o||t===-o?(t<0?-1:1)*17976931348623157e292:t==t?t:0:0===t?t:0}},1573:function(t,n,e){var r=e(3225),o=e(6905),u=e(1087),i=0/0,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(u(t))return i;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=f.test(t);return e||a.test(t)?s(t.slice(2),e?2:8):c.test(t)?i:+t}},5237:function(t,n,e){Promise.resolve().then(e.bind(e,3687))},3687:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return a}});var r=e(7437),o=e(2265);let u=t=>{let{src:n,...e}=t,u=(0,o.useRef)(null),[i,c]=(0,o.useState)("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");return(0,o.useEffect)(()=>{let t=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&c(n)})});return u.current&&t.observe(u.current),()=>{t.disconnect()}},[]),(0,r.jsx)("img",{className:"foxImage",ref:u,src:n,alt:"Random Fox",...e})};function i(t){let{onClick:n}=t;return(0,r.jsx)("button",{className:"button",onClick:n,children:"Add new Fox"})}var c=e(2440),f=e.n(c);function a(){let t=f()(1,123),n=()=>Math.random().toString(36).substr(2.9),[e,c]=(0,o.useState)([]);return(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{children:"Lazy Loanding"}),(0,r.jsx)(i,{onClick:()=>{c([...e,{id:n(),url:"https://randomfox.ca/images/".concat(t,".jpg")}])}}),e.map(t=>{let{id:n,url:e}=t;return(0,r.jsx)("div",{children:(0,r.jsx)(u,{src:e,onClick:()=>{console.log("holaa")}})},n)})]})}},622:function(t,n,e){"use strict";var r=e(2265),o=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(t,n,e){var r,f={},a=null,s=null;for(r in void 0!==e&&(a=""+e),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(s=n.ref),n)u.call(n,r)&&!c.hasOwnProperty(r)&&(f[r]=n[r]);if(t&&t.defaultProps)for(r in n=t.defaultProps)void 0===f[r]&&(f[r]=n[r]);return{$$typeof:o,type:t,key:a,ref:s,props:f,_owner:i.current}}n.jsx=f,n.jsxs=f},7437:function(t,n,e){"use strict";t.exports=e(622)}},function(t){t.O(0,[971,938,744],function(){return t(t.s=5237)}),_N_E=t.O()}]);