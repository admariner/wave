(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(302)),i=r(304),c={title:"Stat / Bar / Large",keywords:["progress","stat_card"]},s={unversionedId:"examples/stat-large-bar",id:"examples/stat-large-bar",isDocsHomePage:!1,title:"Stat / Bar / Large",description:"Create a large captioned card displaying a primary value, an auxiliary value and a progress bar,",source:"@site/docs/examples/stat-large-bar.md",slug:"/examples/stat-large-bar",permalink:"/wave/docs/examples/stat-large-bar",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/stat-large-bar.md",version:"current",sidebar:"someSidebar",previous:{title:"Stat / Bar / Wide",permalink:"/wave/docs/examples/stat-wide-bar"},next:{title:"Stat / Series / Small / Area",permalink:"/wave/docs/examples/stat-small-series-area"}},u=[],l={rightToc:u};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create a large captioned card displaying a primary value, an auxiliary value and a progress bar,\nwith captions for each value."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(389).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import time\n\nfrom faker import Faker\n\nfrom synth import FakePercent\nfrom h2o_wave import site, ui\n\npage = site['/demo']\n\nfake = Faker()\nf = FakePercent()\nval, pc = f.next()\nc = page.add('example', ui.large_bar_stat_card(\n    box='1 1 2 2',\n    title=fake.cryptocurrency_name(),\n    value='=${{intl foo minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n    value_caption='This Month',\n    aux_value='={{intl bar style=\"percent\" minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n    aux_value_caption='Previous Month',\n    plot_color='$red',\n    progress=pc,\n    data=dict(foo=val, bar=pc),\n    caption=' '.join(fake.sentences(2)),\n))\npage.save()\n\nwhile True:\n    time.sleep(1)\n    val, pc = f.next()\n    c.data.foo = val\n    c.data.bar = pc\n    c.progress = pc\n    page.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#progress")},"progress")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#stat_card")},"stat_card")))}p.isMDXComponent=!0},302:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},303:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(303),a=r(305);function o(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},305:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},389:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/stat-large-bar-e578fa2ed742b2a1b9eb9ff52d50c476.png"}}]);