(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(286)),i={title:"Plot / Point / Map"},p={unversionedId:"examples/plot-point-map",id:"examples/plot-point-map",isDocsHomePage:!1,title:"Plot / Point / Map",description:"Make a plot to compare quantities across categories. Similar to a heatmap, but using size-encoding instead of color-encoding.",source:"@site/docs/examples/plot-point-map.md",slug:"/examples/plot-point-map",permalink:"/qd/docs/examples/plot-point-map",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/plot-point-map.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Point / Sizes",permalink:"/qd/docs/examples/plot-point-sizes"},next:{title:"Plot / Point / Groups",permalink:"/qd/docs/examples/plot-point-groups"}},c=[],s={rightToc:c};function l(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Make a plot to compare quantities across categories. Similar to a heatmap, but using size-encoding instead of color-encoding."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+n(335).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeSeries\nfrom h2o_q import site, data, ui\n\npage = site['/demo']\n\nk1, k2 = 20, 10\nf = FakeSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Points, size-encoded',\n    data=data('country product profit', k1 * k2),\n    plot=ui.plot([ui.mark(type='point', x='=country', y='=product', size='=profit', shape='circle')])\n))\nrows = []\nfor i in range(k1):\n    for j in range(k2):\n        x, dx = f.next()\n        rows.append((f'A{i + 1}', f'B{j + 1}', x))\nv.data = rows\n\npage.save()\n")))}l.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(f,p(p({ref:t},s),{},{components:n})):o.a.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},335:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-point-map-13e6e7b5d7bfc7c6337172bb86dc84e2.png"}}]);