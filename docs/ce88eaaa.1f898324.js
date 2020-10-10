(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{243:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(286)),i={title:"Uploads / UI"},l={unversionedId:"examples/upload-ui",id:"examples/upload-ui",isDocsHomePage:!1,title:"Uploads / UI",description:"Accept files from the user.",source:"@site/docs/examples/upload-ui.md",slug:"/examples/upload-ui",permalink:"/qd/docs/examples/upload-ui",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/upload-ui.md",version:"current",sidebar:"someSidebar",previous:{title:"Uploads / Async",permalink:"/qd/docs/examples/upload-async"},next:{title:"Uploads / Download",permalink:"/qd/docs/examples/upload-download"}},c=[],u={rightToc:c};function s(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Accept files from the user."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+t(451).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import os\nfrom h2o_q import Q, listen, ui\nimport os.path\n\n\ndef make_link_list(links):\n    # Make a markdown list of links.\n    return '\\n'.join([f'- [{os.path.basename(link)}]({link})' for link in links])\n\n\nasync def main(q: Q):\n    if q.args.user_files:\n        q.page['example'].items = [\n            ui.text_xl('Files uploaded!'),\n            ui.text(make_link_list(q.args.user_files)),\n            ui.button(name='back', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.text_xl('Upload some files'),\n            ui.file_upload(name='user_files', label='Upload', multiple=True),\n        ])\n    await q.page.save()\n\n\nif __name__ == '__main__':\n    listen('/demo', main)\n")))}s.isMDXComponent=!0},286:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(f,l(l({ref:n},u),{},{components:t})):a.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},451:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/upload-ui-ce3af4e53ce2d7a546aa933667f7758a.png"}}]);