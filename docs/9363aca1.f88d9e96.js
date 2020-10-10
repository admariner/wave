(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(286)),c={title:"Graphics / Turtle"},i={unversionedId:"examples/graphics-turtle",id:"examples/graphics-turtle",isDocsHomePage:!1,title:"Graphics / Turtle",description:"Use turtle graphics to draw paths.",source:"@site/docs/examples/graphics-turtle.md",slug:"/examples/graphics-turtle",permalink:"/qd/docs/examples/graphics-turtle",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/graphics-turtle.md",version:"current",sidebar:"someSidebar",previous:{title:"Graphics / Path",permalink:"/qd/docs/examples/graphics-path"},next:{title:"Graphics / Hilbert",permalink:"/qd/docs/examples/graphics-hilbert"}},p=[],s={rightToc:p};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use turtle graphics to draw paths.\nOriginal example: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/library/turtle.html"}),"https://docs.python.org/3/library/turtle.html")),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(385).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import site, ui, graphics as g\n\nt = g.turtle().f(100).r(90).pd()\nfor _ in range(36):\n    t.f(200).l(170)\nspirograph = t.pu(1).path(stroke='red', fill='yellow')\n\npage = site['/demo']\npage['example'] = ui.graphics_card(\n    box='1 1 2 3', view_box='0 0 220 220', width='100%', height='100%',\n    scene=g.scene(foo=spirograph),\n)\n\npage.save()\n")))}l.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},385:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/graphics-turtle-bf00fb61c0569a86ca32908a60485b91.png"}}]);