(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{302:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(f,s(s({ref:t},p),{},{components:n})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(303),o=n(305);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,p=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},305:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},329:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-d3-27f0867826e9547bb4bb23e79517892b.png"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(302)),i=n(304),s={title:"Plot / D3.js",keywords:["plot"]},c={unversionedId:"examples/plot-d3",id:"examples/plot-d3",isDocsHomePage:!1,title:"Plot / D3.js",description:"Create custom plots using D3.js.",source:"@site/docs/examples/plot-d3.md",slug:"/examples/plot-d3",permalink:"/wave/docs/examples/plot-d3",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-d3.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Plotly",permalink:"/wave/docs/examples/plot-plotly"},next:{title:"Pixel Art",permalink:"/wave/docs/examples/pixel-art"}},p=[],l={rightToc:p};function u(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Create custom plots using D3.js."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+n(329).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import json\nimport os.path\nfrom h2o_wave import site, ui\n\n# The example D3 Javascript file is located in the same directory as this example; get its path\nd3_js_script_filename = os.path.join(os.path.dirname(__file__), 'plot_d3.js')\n\n# Upload the script to the server. Typically, you'd do this only once, when your app is installed.\nd3_js_script_path, = site.upload([d3_js_script_filename])\n\nhtml_template = '''\n<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://d3js.org/d3.v5.min.js\"><\/script>\n</head>\n<body style=\"margin:0; padding:0\">\n  <script src=\"{script_path}\"><\/script>\n  <script>render({data})<\/script>\n</body>\n</html>\n'''\n\n# This data is hard-coded here for simplicity.\n# During production use, this data would be the output of some compute routine.\ndata = [\n    [11975, 5871, 8916, 2868],\n    [1951, 10048, 2060, 6171],\n    [8010, 16145, 8090, 8045],\n    [1013, 990, 940, 6907],\n]\n\n# Plug JSON-serialized data into our html template\nhtml = html_template.format(script_path=d3_js_script_path, data=json.dumps(data))\n\npage = site['/demo']\npage['example'] = ui.frame_card(\n    box='1 1 5 8',\n    title='D3 Chord Diagram',\n    content=html,\n)\npage.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")))}u.isMDXComponent=!0}}]);