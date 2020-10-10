(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{143:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),i=(t(0),t(286)),o={title:"Tabs / Navigation"},c={unversionedId:"examples/tab-delete",id:"examples/tab-delete",isDocsHomePage:!1,title:"Tabs / Navigation",description:"Navigate between two or more tabs.",source:"@site/docs/examples/tab-delete.md",slug:"/examples/tab-delete",permalink:"/qd/docs/examples/tab-delete",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/tab-delete.md",version:"current",sidebar:"someSidebar",previous:{title:"Tab / Links",permalink:"/qd/docs/examples/tab-link"},next:{title:"Breadcrumbs",permalink:"/qd/docs/examples/breadcrumbs"}},u=[],l={rightToc:u};function b(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Navigate between two or more tabs.\nDelete the cards when switching between tabs."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+t(355).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import Q, listen, ui\n\nTABS = 'abcde'\n\n\nasync def display_tab(q):\n    q.page[f'example_{q.client.tab}'] = ui.markup_card(\n        box='1 2 4 3',\n        title=q.client.tab.upper(),\n        content='\\n'.join([''.join([q.client.tab] * 10) for _ in range(50)])\n    )\n    await q.page.save()\n\n\nasync def remove_cards(q: Q):\n    for tab in TABS:\n        del q.page[f'example_{tab}']\n    await q.page.save()\n\n\nasync def main(q: Q):\n    if not q.client.initialized:\n        q.client.tab = 'a'\n        q.page['tabs'] = ui.tab_card(  # Initialize once\n            box='1 1 4 1',\n            items=[ui.tab(name=f'#{t}', label=t.upper()) for t in TABS]\n        )\n        q.client.initialized = True\n\n    if q.args['#']:\n        q.client.tab = str(q.args['#'])\n\n    await remove_cards(q)\n    await display_tab(q)\n    await q.page.save()\n\n\nif __name__ == '__main__':\n    listen('/demo', main)\n")))}b.isMDXComponent=!0},286:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=b(t),p=a,f=s["".concat(o,".").concat(p)]||s[p]||d[p]||i;return t?r.a.createElement(f,c(c({ref:n},l),{},{components:t})):r.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},355:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"}}]);