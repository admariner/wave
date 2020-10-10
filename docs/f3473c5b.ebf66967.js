(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{272:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return A})),t.d(n,"metadata",(function(){return k})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return S}));var i=t(2),r=t(6),J=(t(0),t(286)),A={title:"Layout / Size"},k={unversionedId:"examples/layout-size",id:"examples/layout-size",isDocsHomePage:!1,title:"Layout / Size",description:"How to adjust the size of cards on a page.",source:"@site/docs/examples/layout-size.md",slug:"/examples/layout-size",permalink:"/qd/docs/examples/layout-size",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/layout-size.md",version:"current",sidebar:"someSidebar",previous:{title:"Layout / Position",permalink:"/qd/docs/examples/layout"},next:{title:"Form",permalink:"/qd/docs/examples/form"}},a=[],E={rightToc:a};function S(e){var n=e.components,A=Object(r.a)(e,["components"]);return Object(J.b)("wrapper",Object(i.a)({},E,A,{components:n,mdxType:"MDXLayout"}),Object(J.b)("p",null,"How to adjust the size of cards on a page."),Object(J.b)("div",{className:"cover",style:{backgroundImage:"url("+t(417).default+")"}}),Object(J.b)("pre",null,Object(J.b)("code",Object(i.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import site, ui\n\n# Every page has a grid system in place.\n# The grid has 12 columns and 10 rows.\n# A column is 134 pixels wide.\n# A row is 76 pixels high.\n# The gap between rows and columns is set to 15 pixels.\n\n# Cards have a `box` attribute that specifies its column, row, width and height.\n# box = 'column row width height'\n# They indicate the 1-based column/row to position the top-left corner of the card.\n\n# In this example, we place multiple cards on a page to demonstrate their `box` values.\n\npage = site['/demo']\nboxes = [\n    '1 1 1 1',\n    '2 1 2 1',\n    '4 1 3 1',\n    '7 1 4 1',\n    '11 1 2 2',\n    '1 2 1 9',\n    '2 2 1 4',\n    '3 2 1 2',\n    '2 6 1 5',\n    '3 4 1 7',\n    '4 2 7 9',\n    '11 9 2 2',\n    '11 3 2 6',\n]\n\nfor box in boxes:\n    page[f'card_{box.replace(\" \", \"_\")}'] = ui.markdown_card(box=box, title=box, content='')\n\npage.save()\n")))}S.isMDXComponent=!0},286:function(e,n,t){"use strict";t.d(n,"a",(function(){return I})),t.d(n,"b",(function(){return g}));var i=t(0),r=t.n(i);function J(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){J(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},J=Object.keys(e);for(i=0;i<J.length;i++)t=J[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(e);for(i=0;i<J.length;i++)t=J[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var E=r.a.createContext({}),S=function(e){var n=r.a.useContext(E),t=n;return e&&(t="function"==typeof e?e(n):k(k({},n),e)),t},I=function(e){var n=S(e.components);return r.a.createElement(E.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},l=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,J=e.originalType,A=e.parentName,E=a(e,["components","mdxType","originalType","parentName"]),I=S(t),l=i,g=I["".concat(A,".").concat(l)]||I[l]||o[l]||J;return t?r.a.createElement(g,k(k({ref:n},E),{},{components:t})):r.a.createElement(g,k({ref:n},E))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var J=t.length,A=new Array(J);A[0]=l;var k={};for(var a in n)hasOwnProperty.call(n,a)&&(k[a]=n[a]);k.originalType=e,k.mdxType="string"==typeof e?e:i,A[1]=k;for(var E=2;E<J;E++)A[E]=t[E];return r.a.createElement.apply(null,A)}return r.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},417:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"}}]);