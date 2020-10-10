(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(286)),i={title:"Plot / Area + Line / Groups"},p={unversionedId:"examples/plot-area-line-groups",id:"examples/plot-area-line-groups",isDocsHomePage:!1,title:"Plot / Area + Line / Groups",description:"Make an combined area + line plot showing multiple categories.",source:"@site/docs/examples/plot-area-line-groups.md",slug:"/examples/plot-area-line-groups",permalink:"/qd/docs/examples/plot-area-line-groups",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/plot-area-line-groups.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Area + Line / Smooth",permalink:"/qd/docs/examples/plot-area-line-smooth"},next:{title:"Plot / Polygon",permalink:"/qd/docs/examples/plot-polygon"}},l=[],c={rightToc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make an combined area + line plot showing multiple categories."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(371).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeMultiTimeSeries\nfrom h2o_q import site, data, ui\n\npage = site['/demo']\n\nn = 50\nf = FakeMultiTimeSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Area + Line, groups',\n    data=data('product date price', n * 5),\n    plot=ui.plot([\n        ui.mark(type='area', x_scale='time', x='=date', y='=price', color='=product', y_min=0),\n        ui.mark(type='line', x='=date', y='=price', color='=product')\n    ])\n))\n\nv.data = [(g, t, x) for x in [f.next() for _ in range(n)] for g, t, x, dx in x]\n\npage.save()\n")))}u.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?a.a.createElement(f,p(p({ref:t},c),{},{components:r})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},371:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-area-line-groups-fab3e454a09ab17afeb08c5bbe20a364.png"}}]);