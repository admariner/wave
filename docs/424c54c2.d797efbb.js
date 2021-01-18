(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(302)),i=n(304),c={title:"Stat / Series / Tall / Interval",keywords:["interval","series","stat_card"]},s={unversionedId:"examples/stat-tall-series-interval",id:"examples/stat-tall-series-interval",isDocsHomePage:!1,title:"Stat / Series / Tall / Interval",description:"Create a tall stat card displaying a primary value, an auxiliary value and a series plot.",source:"@site/docs/examples/stat-tall-series-interval.md",slug:"/examples/stat-tall-series-interval",permalink:"/wave/docs/examples/stat-tall-series-interval",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/stat-tall-series-interval.md",version:"current",sidebar:"someSidebar",previous:{title:"Stat / Series / Tall / Area",permalink:"/wave/docs/examples/stat-tall-series-area"},next:{title:"Layout / Position",permalink:"/wave/docs/examples/layout"}},u=[],l={rightToc:u};function d(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create a tall stat card displaying a primary value, an auxiliary value and a series plot."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(369).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import time\n\nfrom faker import Faker\n\nfrom synth import FakeCategoricalSeries\nfrom h2o_wave import site, ui, data\n\npage = site['/demo']\n\nfake = Faker()\nf = FakeCategoricalSeries()\ncat, val, pc = f.next()\nc = page.add('example', ui.tall_series_stat_card(\n    box='1 1 1 2',\n    title=fake.cryptocurrency_name(),\n    value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n    aux_value='={{intl quux style=\"percent\" minimum_fraction_digits=1 maximum_fraction_digits=1}}',\n    data=dict(qux=val, quux=pc / 100),\n    plot_category='foo',\n    plot_type='interval',\n    plot_value='qux',\n    plot_color='$red',\n    plot_data=data('foo qux', -20),\n    plot_zero_value=0,\n))\npage.save()\n\nwhile True:\n    time.sleep(1)\n    cat, val, pc = f.next()\n    c.data.qux = val\n    c.data.quux = pc / 100\n    c.plot_data[-1] = [cat, val]\n    page.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#interval")},"interval")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#series")},"series")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#stat_card")},"stat_card")))}d.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(303),a=n(305);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},305:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},369:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);