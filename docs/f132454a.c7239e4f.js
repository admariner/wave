(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{267:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(286)),i={title:"Routing"},c={unversionedId:"examples/hash-routing",id:"examples/hash-routing",isDocsHomePage:!1,title:"Routing",description:"Use the browser's location hash for routing using URLs.",source:"@site/docs/examples/hash-routing.md",slug:"/examples/hash-routing",permalink:"/qd/docs/examples/hash-routing",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/hash-routing.md",version:"current",sidebar:"someSidebar",previous:{title:"Header",permalink:"/qd/docs/examples/header"},next:{title:"Routing / Toolbar",permalink:"/qd/docs/examples/toolbar-routing"}},s=[],u={rightToc:s};function l(e){var n=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use the browser's ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Location/hash"}),"location hash")," for routing using URLs."),Object(a.b)("p",null,"The location hash can be accessed using ",Object(a.b)("inlineCode",{parentName:"p"},"q.args['#']"),"."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+t(433).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import Q, listen, ui\n\n\nasync def main(q: Q):\n    hash = q.args['#']\n    if hash:\n        blurb = q.page['blurb']\n        if hash == 'menu/spam':\n            blurb.content = \"Sorry, we're out of spam!\"\n        elif hash == 'menu/ham':\n            blurb.content = \"Sorry, we're out of ham!\"\n        elif hash == 'menu/eggs':\n            blurb.content = \"Sorry, we're out of eggs!\"\n        elif hash == 'about':\n            blurb.content = 'Everything here is gluten-free!'\n    else:\n        q.page['nav'] = ui.markdown_card(\n            box='1 1 4 1',\n            title='Links!',\n            content='[Spam](#menu/spam) | [Ham](#menu/ham) | [Eggs](#menu/eggs) | [About](#about)',\n        )\n        q.page['blurb'] = ui.markdown_card(\n            box='1 2 4 2',\n            title='Store',\n            content='Welcome to our store!',\n        )\n    await q.page.save()\n\n\nif __name__ == '__main__':\n    listen('/demo', main)\n")))}l.isMDXComponent=!0},286:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),b=r,f=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return t?o.a.createElement(f,c(c({ref:n},u),{},{components:t})):o.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},433:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/hash-routing-816838345c1b3e01e3fe1664c336f3d6.png"}}]);