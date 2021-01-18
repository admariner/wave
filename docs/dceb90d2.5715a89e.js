(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{264:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),o=(r(0),r(302)),c=r(304),i={title:"Mode / Broadcast / Global",keywords:["broadcast","mode"]},s={unversionedId:"examples/counter-global",id:"examples/counter-global",isDocsHomePage:!1,title:"Mode / Broadcast / Global",description:"Launch the server in broadcast mode to synchronize browser state across users.",source:"@site/docs/examples/counter-global.md",slug:"/examples/counter-global",permalink:"/wave/docs/examples/counter-global",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/counter-global.md",version:"current",sidebar:"someSidebar",previous:{title:"Meta / Redirect",permalink:"/wave/docs/examples/meta-redirect"},next:{title:"Mode / Broadcast",permalink:"/wave/docs/examples/counter-broadcast"}},u=[],l={rightToc:u};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Launch the server in broadcast mode to synchronize browser state across users.\nGlobal variables can be used to manage state.\nOpen ",Object(o.b)("inlineCode",{parentName:"p"},"/demo")," in multiple browsers and watch them synchronize in realtime."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(492).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui, pack\n\ncount = 0\n\n\n@app('/demo', mode='broadcast')\nasync def serve(q: Q):\n    global count\n    if 'increment' in q.args:\n        count += 1\n\n    items = pack([ui.button(name='increment', label=f'Count={count}')])\n\n    if count > 0:\n        form = q.page['example']\n        form.items = items\n    else:\n        q.page['example'] = ui.form_card(box='1 1 12 10', items=items)\n\n    await q.page.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#broadcast")},"broadcast")," \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#mode")},"mode")))}d.isMDXComponent=!0},302:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=n,f=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},303:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(303),a=r(305);function o(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,s=o.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(o,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},305:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},492:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);