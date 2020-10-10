(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(286)),r={title:"Routing"},s={unversionedId:"routing",id:"routing",isDocsHomePage:!1,title:"Routing",description:"App routing",source:"@site/docs/routing.md",slug:"/routing",permalink:"/qd/docs/routing",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/routing.md",version:"current",sidebar:"someSidebar",previous:{title:"State",permalink:"/qd/docs/state"},next:{title:"Realtime Sync",permalink:"/qd/docs/realtime"}},c=[{value:"App routing",id:"app-routing",children:[]},{value:"Hash routing",id:"hash-routing",children:[{value:"Setting the location hash",id:"setting-the-location-hash",children:[]},{value:"Getting the location hash",id:"getting-the-location-hash",children:[]},{value:"Hash route switching",id:"hash-route-switching",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"app-routing"},"App routing"),Object(o.b)("p",null,"Your Q app gets hosted at the route you passed to ",Object(o.b)("inlineCode",{parentName:"p"},"listen()"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py",metastring:"{6}","{6}":!0}),"from h2o_q import Q, listen\n\nasync def serve(q: Q):\n    pass\n\nlisten('/foo', serve)\n")),Object(o.b)("p",null,"To host your app at ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:55555/foo")," or ",Object(o.b)("inlineCode",{parentName:"p"},"www.example.com/foo"),", pass ",Object(o.b)("inlineCode",{parentName:"p"},"/foo")," to ",Object(o.b)("inlineCode",{parentName:"p"},"listen()"),"."),Object(o.b)("p",null,"To host your app at ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:55555")," or ",Object(o.b)("inlineCode",{parentName:"p"},"www.example.com"),", pass ",Object(o.b)("inlineCode",{parentName:"p"},"/")," to ",Object(o.b)("inlineCode",{parentName:"p"},"listen()"),". Do this if you plan to host exactly one app and nothing else."),Object(o.b)("p",null,"You can host multiple apps behind a single Q server."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"/foo")," and ",Object(o.b)("inlineCode",{parentName:"p"},"/foo/bar")," are two distinct paths. ",Object(o.b)("inlineCode",{parentName:"p"},"/foo/bar")," is not interpreted as a sub-path of ",Object(o.b)("inlineCode",{parentName:"p"},"/foo"),"."))),Object(o.b)("h2",{id:"hash-routing"},"Hash routing"),Object(o.b)("p",null,"Q apps support ",Object(o.b)("em",{parentName:"p"},"hash routing"),", a popular client-side mechanism where the location hash (the ",Object(o.b)("inlineCode",{parentName:"p"},"baz/qux")," in ",Object(o.b)("inlineCode",{parentName:"p"},"/foo/bar#baz/qux"),") can be used to decide which part of the UI to display."),Object(o.b)("h3",{id:"setting-the-location-hash"},"Setting the location hash"),Object(o.b)("p",null,"To set the location hash, prefix ",Object(o.b)("inlineCode",{parentName:"p"},"#")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," attribute of command-like components. When the command is invoked, the location hash is set to the name of the command."),Object(o.b)("p",null,"For example, if a button is named ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," is clicked, ",Object(o.b)("inlineCode",{parentName:"p"},"q.args.foo")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"True"),". Instead, if a button named ",Object(o.b)("inlineCode",{parentName:"p"},"#foo")," is clicked, the location hash is set to ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," (",Object(o.b)("inlineCode",{parentName:"p"},"q.args.foo")," is not set). "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py",metastring:"{7-8}","{7-8}":!0}),"from h2o_q import Q, listen, ui\n\nasync def serve(q: Q):\n    q.page['sides'] = ui.form_card(\n        box='1 1 4 4',\n        items=[\n            ui.button(name='#heads', label='Heads'),\n            ui.button(name='#tails', label='Tails'),\n        ],\n    )\n    q.page.save()\n\nlisten('/toss', serve)\n")),Object(o.b)("p",null,"Names don't have to be alphanumeric, so you can use names with nested sub-paths like ",Object(o.b)("inlineCode",{parentName:"p"},"#foo/bar"),", ",Object(o.b)("inlineCode",{parentName:"p"},"#foo/bar/baz"),", ",Object(o.b)("inlineCode",{parentName:"p"},"#foo/bar/baz/qux")," to make route-handling more manageable."),Object(o.b)("p",null,"The components that support setting a location hash are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ui.button()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ui.command()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ui.nav_item()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ui.tab()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ui.breadcrumb()"))),Object(o.b)("h3",{id:"getting-the-location-hash"},"Getting the location hash"),Object(o.b)("p",null,"To get the location hash, read ",Object(o.b)("inlineCode",{parentName:"p"},"q.args['#']")," (a string). If the route in the browser's address bar is ",Object(o.b)("inlineCode",{parentName:"p"},"/foo/bar#baz/qux"),", ",Object(o.b)("inlineCode",{parentName:"p"},"q.args['#']")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"baz/qux"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py",metastring:"{4-8}","{4-8}":!0}),"from h2o_q import Q, listen, ui\n\nasync def serve(q: Q):\n    hash = q.args['#']\n    if hash == 'heads':\n        print('Heads!')\n    elif hash == 'tails':\n        print('Tails!')\n\n    q.page.save()\n\nlisten('/toss', serve)\n")),Object(o.b)("h3",{id:"hash-route-switching"},"Hash route switching"),Object(o.b)("p",null,"Combining the two examples above gives us a basic pattern for handling routes and updating the user interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py",metastring:"{6,8,10}","{6,8,10}":!0}),"from h2o_q import Q, listen, ui\n\nasync def serve(q: Q):\n    hash = q.args['#']\n\n    if hash == 'heads':\n        q.page['sides'].items = [ui.message_bar(text='Heads!')]\n    elif hash == 'tails':\n        q.page['sides'].items = [ui.message_bar(text='Tails!')]\n    else:\n        q.page['sides'] = ui.form_card(\n            box='1 1 4 4',\n            items=[\n                ui.button(name='#heads', label='Heads'),\n                ui.button(name='#tails', label='Tails'),\n            ],\n        )\n\n    q.page.save()\n\nlisten('/toss', serve)\n")))}p.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||o;return n?i.a.createElement(d,s(s({ref:t},l),{},{components:n})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);