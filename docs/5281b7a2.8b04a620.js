(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(286)),i={title:"Architecture"},c={unversionedId:"architecture",id:"architecture",isDocsHomePage:!1,title:"Architecture",description:"H2O Q is a software stack for building beautiful, low-latency, realtime, browser-based applications and dashboards entirely in Python without using HTML, Javascript or CSS.",source:"@site/docs/architecture.md",slug:"/architecture",permalink:"/qd/docs/architecture",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/architecture.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/qd/docs/guide"},next:{title:"Q Scripts",permalink:"/qd/docs/scripts"}},s=[{value:"Overview",id:"overview",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"How is it different?",id:"how-is-it-different",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"H2O Q is a software stack for building beautiful, low-latency, realtime, browser-based applications and dashboards entirely in Python without using HTML, Javascript or CSS."),Object(o.b)("p",null,"It excels at capturing data, visualizations, and graphics from multiple sources, and broadcasting them live over the web."),Object(o.b)("p",null,"The stack is engineered from the ground-up for low-latency, realtime information display, and is usable on its own (not only a programming framework, but a programmable content server)."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"The H2O Q runtime operates over three tiers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"A content server.")," The Q server, a ~10MB static binary executable that runs anywhere",Object(o.b)("sup",Object(n.a)({parentName:"li"},{id:"fnref-1"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"A language driver.")," The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://pypi.org/project/h2o-q/"}),"h2o-q PyPI package")," used by Q scripts and apps."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"A browser-based client.")," The user interface and components.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"+---------+                        +---------+\n| Browser +---------+      +-------\x3e app1.py |\n+---------+         |      |       +---------+\n                    v      |\n+---------+       +-+------+-+     +---------+\n| Browser +------\x3e+ Q Server +-----\x3e app2.py |\n+---------+       +-+------+-+     +---------+\n                    ^      |\n+---------+         |      |       +---------+\n| Browser +---------+      +------\x3e+ app3.py |\n+---------+                        +---------+\n")),Object(o.b)("p",null,"The Q server has three main functions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Store site content"),Object(o.b)("li",{parentName:"ul"},"Transmit content changes to browsers."),Object(o.b)("li",{parentName:"ul"},"Transmit browser events to apps.")),Object(o.b)("p",null,"In other words, the Q server is comparable to a in-memory realtime database, a HTTP web server and a proxy server, all rolled into one, with browsers (",Object(o.b)("em",{parentName:"p"},"clients"),") downstream, and Q apps (or scripts) upstream."),Object(o.b)("p",null,"The language driver (the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.org/project/h2o-q/"}),"h2o-q PyPI package"),") provides the ability to manage content on the Q server. It's similar in function to a database driver, but unlike typical database drivers (which use SQL as a protocol), the Q driver provides an API closely integrated with the Python language that feels natural and idiomatic in practice."),Object(o.b)("p",null,"The browser-based client's job is to render content on the user interface, and transmit user actions in the form of ",Object(o.b)("em",{parentName:"p"},"events")," back to the Q server."),Object(o.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(o.b)("p",null,"The Q server stores all content in a page cache called a ",Object(o.b)("em",{parentName:"p"},"site"),". A site is a collection of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/qd/docs/pages"}),"pages"),". Each page has an address, called its ",Object(o.b)("em",{parentName:"p"},"route"),". A page is composed of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/qd/docs/cards"}),"cards"),". A card holds content, and any tabular data associated with the content, called ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/qd/docs/buffers"}),"data buffers"),". "),Object(o.b)("p",null,"When a browser is pointed to a route, it pulls a copy of the page, creates a ",Object(o.b)("em",{parentName:"p"},"replica")," locally, and renders the content on the user interface."),Object(o.b)("p",null,"The language driver (the ",Object(o.b)("inlineCode",{parentName:"p"},"h2o-q")," PyPI package) maintains an illusion that server-side content is available locally. Local updates to pages and cards are transmitted in the form of ",Object(o.b)("em",{parentName:"p"},"operations")," to the server. The server applies those updates to the master copy of the content. If any browser is currently displaying that content, the server forwards updates to the browser, causing the browser to update its replica and re-render its user interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"   Python\n+------------+\n|  app.py    |\n|     +      |\n|     |      |\n|     v      |\n| +---+----+ |\n+-+ Driver +-+\n  +---+----+\n      |\n      |Operations\n      |\n      v\n+-----+------+\n|  Q Server  |\n|            |\n|  +------+  |\n|  | Page |  |\n|  +------+  |\n|            |\n+-----+------+\n      |\n      |Replication\n      |\n+-------------+\n| +---------+ |\n| | Replica | |\n| +---------+ |\n|             |\n|     UI      |\n+-------------+\n    Browser\n")),Object(o.b)("p",null,"The language driver can be used by two kinds of Python programs: ",Object(o.b)("em",{parentName:"p"},"Q apps")," and ",Object(o.b)("em",{parentName:"p"},"Q scripts"),". "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/qd/docs/apps"}),"Q apps")," are interactive programs that can update content and respond to user actions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/qd/docs/scripts"}),"Q scripts")," are simpler, non-interactive (batch) programs: they can update content, but not respond to user actions. ")),Object(o.b)("p",null,"Q apps sport a websocket server under the hood. When a Q app is launched, it announces its existence to the Q server, and the Q server establishes a ",Object(o.b)("em",{parentName:"p"},"relay")," with the Q app. When a browser tries to connect to an app, the Q server acts as a hub, relaying information back and forth between the browser and the app. "),Object(o.b)("h2",{id:"how-is-it-different"},"How is it different?"),Object(o.b)("p",null,"The Q server retains content. This is an important concept to understand, and the primary reason why Q is different from a typical web framework. A Q script can update content and exit, and the Q server will happily continue serving that content. In other words, no Python process needs to be around if a new user arrives after you script has exited. "),Object(o.b)("p",null,"Different parts of the same page can be updated by different scripts running on different devices. Also, all content is live (or reactive) all the time: browsers always display up-to-date content without the need to reload."),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," Linux, Windows, Darwin, BSD, Solaris, Android on amd64, arm, 386, ppc, mips; ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63"}),"almost everywhere"),"."))}l.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return r?a.a.createElement(h,c(c({ref:t},p),{},{components:r})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);