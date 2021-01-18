(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),p=(n(0),n(302)),i=n(304),l={title:"Stat / Series / Tall / Area",keywords:["series","stat_card"]},u={unversionedId:"examples/stat-tall-series-area",id:"examples/stat-tall-series-area",isDocsHomePage:!1,title:"Stat / Series / Tall / Area",description:"Create a tall stat card displaying a primary value, an auxiliary value and a series plot.",source:"@site/docs/examples/stat-tall-series-area.md",slug:"/examples/stat-tall-series-area",permalink:"/wave/docs/examples/stat-tall-series-area",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/stat-tall-series-area.md",version:"current",sidebar:"someSidebar",previous:{title:"Stat / Series / Wide / Interval",permalink:"/wave/docs/examples/stat-wide-series-interval"},next:{title:"Stat / Series / Tall / Interval",permalink:"/wave/docs/examples/stat-tall-series-interval"}},c=[],o={rightToc:c};function s(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Create a tall stat card displaying a primary value, an auxiliary value and a series plot."),Object(p.b)("div",{className:"cover",style:{backgroundImage:"url("+n(421).default+")"}}),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import time\n\nfrom faker import Faker\n\nfrom synth import FakeCategoricalSeries\nfrom h2o_wave import site, ui, data\n\npage = site['/demo']\n\ncolors = '$red $pink $blue $azure $cyan $teal $mint $green $lime $yellow $amber $orange $tangerine'.split()\ncurves = 'linear smooth step step-after step-before'.split()\nfake = Faker()\ncards = []\nfor i in range(len(curves)):\n    f = FakeCategoricalSeries()\n    cat, val, pc = f.next()\n    c = page.add(f'example{i}', ui.tall_series_stat_card(\n        box=f'{i + 1} 1 1 2',\n        title=fake.cryptocurrency_name(),\n        value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n        aux_value='={{intl quux style=\"percent\" minimum_fraction_digits=1 maximum_fraction_digits=1}}',\n        data=dict(qux=val, quux=pc / 100),\n        plot_type='area',\n        plot_category='foo',\n        plot_value='qux',\n        plot_color=colors[i],\n        plot_data=data('foo qux', -15),\n        plot_zero_value=0,\n        plot_curve=curves[i],\n    ))\n    cards.append((f, c))\npage.save()\n\nwhile True:\n    time.sleep(1)\n    for f, c in cards:\n        cat, val, pc = f.next()\n        c.data.qux = val\n        c.data.quux = pc / 100\n        c.plot_data[-1] = [cat, val]\n    page.save()\n")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(p.b)("a",{href:Object(i.a)("docs/examples/tags#series")},"series")," \u2002",Object(p.b)("a",{href:Object(i.a)("docs/examples/tags#stat_card")},"stat_card")))}s.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return v}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),o=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=o(n),f=r,v=s["".concat(i,".").concat(f)]||s[f]||d[f]||p;return n?a.a.createElement(v,l(l({ref:t},c),{},{components:n})):a.a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<p;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return i}));var r=n(303),a=n(305);function p(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,p=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var p=void 0===r?{}:r,i=p.forcePrependBaseUrl,l=void 0!==i&&i,u=p.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var o=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+o:o}(p,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,p().withBaseUrl)(e,t)}},305:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},421:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);