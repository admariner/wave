(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(302)),i=n(304),c={title:"Form / Text",keywords:["form","markdown","text"]},u={unversionedId:"examples/text",id:"examples/text",isDocsHomePage:!1,title:"Form / Text",description:"Use markdown in a text component to display formatted content within a form.",source:"@site/docs/examples/text.md",slug:"/examples/text",permalink:"/wave/docs/examples/text",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/text.md",version:"current",sidebar:"someSidebar",previous:{title:"Form",permalink:"/wave/docs/examples/form"},next:{title:"Form / Text / Sizes",permalink:"/wave/docs/examples/text-sizes"}},s=[],l={rightToc:s};function p(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use markdown in a text component to display formatted content within a form."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+n(380).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\npage = site['/demo']\n\nsample_markdown = '''\nThe **quick** _brown_ fox jumped over the lazy dog.\n\nBlock quote:\n\n> The quick brown fox jumped over the lazy dog.\n\nUnordered list:\n\n- The quick brown fox jumped over the lazy dog.\n- The quick brown fox jumped over the lazy dog.\n- The quick brown fox jumped over the lazy dog.\n\nOrdered list:\n\n1. The quick brown fox jumped over the lazy dog.\n1. The quick brown fox jumped over the lazy dog.\n1. The quick brown fox jumped over the lazy dog.\n\nImage:\n\n![Monty Python](https://upload.wikimedia.org/wikipedia/en/c/cb/Flyingcircus_2.jpg)\n\nLinks:\n\nHere's a [link to an image](https://upload.wikimedia.org/wikipedia/en/c/cb/Flyingcircus_2.jpg).\n\nTable:\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Item 1   | Item 2   | Item 3   |\n| Item 1   | Item 2   | Item 3   |\n| Item 1   | Item 2   | Item 3   |\n'''\n\npage['example'] = ui.form_card(\n    box='1 1 4 -1',\n    items=[ui.text(sample_markdown)]\n)\npage.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#form")},"form")," \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#markdown")},"markdown")," \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#text")},"text")))}p.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(303),o=n(305);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},305:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},380:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/text-3c5275bb7d17545e6fd8952074ab9d13.png"}}]);