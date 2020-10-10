(window.webpackJsonp=window.webpackJsonp||[]).push([[73,18],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(286)),i=n(47),c={title:"A Tour of Q"},p={unversionedId:"tour",id:"tour",isDocsHomePage:!1,title:"A Tour of Q",description:"Your H2O Q release download ships with over 150 examples.",source:"@site/docs/tour.md",slug:"/tour",permalink:"/qd/docs/tour",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/tour.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/qd/docs/installation"},next:{title:"Tutorial: Hello World",permalink:"/qd/docs/tutorial-hello"}},s=[{value:"Step 1: Start the Q server",id:"step-1-start-the-q-server",children:[]},{value:"Step 2: Run the tour",id:"step-2-run-the-tour",children:[]},{value:"Step 3: Enjoy the tour",id:"step-3-enjoy-the-tour",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}],l={rightToc:s};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Your H2O Q release download ships with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"examples"}),"over 150 examples"),"."),Object(o.b)("p",null,"You can play around with these examples in your browser using ",Object(o.b)("inlineCode",{parentName:"p"},"tour.py"),", a Python script (itself a Q app) located in ",Object(o.b)("inlineCode",{parentName:"p"},"examples/"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-none",metastring:'title="Contents of $HOME/q"',title:'"Contents',of:!0,'$HOME/q"':!0}),"q/\n\u251c\u2500\u2500 docs/           \n\u251c\u2500\u2500 examples/       <-- Examples live here.\n|   \u2514\u2500\u2500 tour.py     <-- The H2O Q Tour.\n\u251c\u2500\u2500 test/           \n\u251c\u2500\u2500 www/            \n\u2514\u2500\u2500 qd              \n")),Object(o.b)("p",null,"To run the tour, as with any Q app, we need to start both the Q server (",Object(o.b)("inlineCode",{parentName:"p"},"qd"),") and the tour (",Object(o.b)("inlineCode",{parentName:"p"},"tour.py"),"). Let's go ahead and do that."),Object(o.b)("h2",{id:"step-1-start-the-q-server"},"Step 1: Start the Q server"),Object(o.b)(i.default,{mdxType:"StartQ"}),Object(o.b)("h2",{id:"step-2-run-the-tour"},"Step 2: Run the tour"),Object(o.b)("p",null,"To run the tour, create a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/tutorial/venv.html"}),"virtual environment"),", install the tour's dependencies, and finally execute ",Object(o.b)("inlineCode",{parentName:"p"},"tour.py"),".  "),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Do this from a new terminal window!"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd $HOME/q\npython3 -m venv venv\n./venv/bin/pip install -r examples/requirements.txt\n./venv/bin/python examples/tour.py\n")),Object(o.b)("h2",{id:"step-3-enjoy-the-tour"},"Step 3: Enjoy the tour"),Object(o.b)("p",null,"Go to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:55555/tour"}),"http://localhost:55555/tour")," to access the tour. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"tour",src:n(488).default})),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tour.py")," is an ordinary Q app that runs other apps. The tour itself runs at the route ",Object(o.b)("inlineCode",{parentName:"p"},"/tour"),", and each of the examples runs at ",Object(o.b)("inlineCode",{parentName:"p"},"/demo"),". "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To play with the tour's active example in isolation, simply open a new browser tab and head to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:55555/demo"}),"http://localhost:55555/demo"),"."))),Object(o.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(o.b)("p",null,"In this section, we started the Q server and then launched ",Object(o.b)("inlineCode",{parentName:"p"},"tour.py")," to experience the tour. In general, this is how you'd typically launch any app, including your own. There is nothing special about ",Object(o.b)("inlineCode",{parentName:"p"},"tour.py"),". In fact, to run any example, all you need to do is repeat the steps above in a new terminal window. For example, to run ",Object(o.b)("inlineCode",{parentName:"p"},"todo.py"),", simply run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd $HOME/q\n./venv/bin/python examples/todo.py\n")),Object(o.b)("p",null,"You can now access the example at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:55555/demo"}),"http://localhost:55555/demo"),". Simple!"))}b.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(286)),i={},c={unversionedId:"_start_q",id:"_start_q",isDocsHomePage:!1,title:"_start_q",description:"To start the Q server, simply open a new terminal window execute qd.",source:"@site/docs/_start_q.md",slug:"/_start_q",permalink:"/qd/docs/_start_q",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/_start_q.md",version:"current"},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To start the Q server, simply open a new terminal window execute ",Object(o.b)("inlineCode",{parentName:"p"},"qd"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd $HOME/q\n./qd\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'2020/10/01 01:27:35 # \n2020/10/01 01:27:35 #              __\n2020/10/01 01:27:35 #   ____ _____/ /\n2020/10/01 01:27:35 #  / __ `/ __  /\n2020/10/01 01:27:35 # / /_/ / /_/ /\n2020/10/01 01:27:35 # \\__, /\\__,_/\n2020/10/01 01:27:35 #   /_/\n2020/10/01 01:27:35 # \n2020/10/01 01:27:35 # {"address":":55555","t":"listen","webroot":"/home/elp/q/www"}\n\n')),Object(o.b)("p",null,"The Q server should now be running at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:55555"}),"http://localhost:55555"),"."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Don't close this terminal window! ")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To run any Q app, you need the Q server up and running at all times. Your web browser communicates with the Q server, and the Q server in turn communicates with the Q app."))))}l.isMDXComponent=!0},488:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tour__tour-968f92ad1236ec66ad30ed613ba324db.png"}}]);