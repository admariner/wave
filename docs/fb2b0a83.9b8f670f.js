(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{292:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return i}));var n=a(2),A=a(6),s=(a(0),a(302)),r={slug:"release-0.11.0",title:"Responsive Layouts and Inline Components",author:"Prithvi Prabhu",author_title:"Chief of Technology @ H2O.ai",author_url:"https://github.com/lo5",author_image_url:"https://avatars3.githubusercontent.com/u/6334572",tags:["release"]},l={permalink:"/wave/blog/release-0.11.0",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-01-17-release.md",source:"@site/blog/2021-01-17-release.md",description:"Today, we're excited to announce H2O Wave v0.11.0, with support for responsive layouts, inline form components, new cards for organizing content, and lots more.",date:"2021-01-17T00:00:00.000Z",tags:[{label:"release",permalink:"/wave/blog/tags/release"}],title:"Responsive Layouts and Inline Components",readingTime:2.965,truncated:!0,nextItem:{title:"Introducing Live Reload",permalink:"/wave/blog/release-0.9.0"}},o=[{value:"Responsive Layouts",id:"responsive-layouts",children:[]},{value:"Resizable Components",id:"resizable-components",children:[]},{value:"Section Card",id:"section-card",children:[]},{value:"Inline Components",id:"inline-components",children:[]},{value:"Inline Stats",id:"inline-stats",children:[]},{value:"Stat Lists",id:"stat-lists",children:[]},{value:"Stat Tables",id:"stat-tables",children:[]},{value:"Improved Documentation",id:"improved-documentation",children:[]},{value:"Download",id:"download",children:[]}],c={rightToc:o};function i(e){var t=e.components,r=Object(A.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Today, we're excited to announce H2O Wave v0.11.0, with support for responsive layouts, inline form components, new cards for organizing content, and lots more."),Object(s.b)("p",null,"The Wave release now ships with a ",Object(s.b)("inlineCode",{parentName:"p"},"demo")," directory containing examples showing how you can combine various Wave cards and components to form complete applications. Over 2021, we plan to add many more cards and components, and this demo app can be used as a design guide for inspiration and reference for building your own apps."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(563).default})),Object(s.b)("p",null,"You can explore this demo application (and dashboards) by running ",Object(s.b)("inlineCode",{parentName:"p"},"demo.app")," (see ",Object(s.b)("inlineCode",{parentName:"p"},"demo/app.py")," in the 0.11 release):"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"(venv) $ wave run demo.app\n")),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(564).default})),Object(s.b)("h2",{id:"responsive-layouts"},"Responsive Layouts"),Object(s.b)("p",null,"You can now build apps having responsive layouts (layouts that adapt to varying viewport sizes). See ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"../docs/layout"}),"Layout")," in the guide."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(565).default})),Object(s.b)("p",null,"Here are a few examples of what's possible in Wave 0.11+:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(566).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(567).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(568).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(569).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(570).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(571).default})),Object(s.b)("h2",{id:"resizable-components"},"Resizable Components"),Object(s.b)("p",null,"We've reworked all existing components to dynamically resize when the layout is resized, especially for flex layouts. Although these card do resize or expand their contents to fit available size, it's best to use them at sizes they were originally intended for - this is especially true of the sparkline-style stats cards. At larger sizes, plot cards are more appropriate."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(572).default})),Object(s.b)("h2",{id:"section-card"},"Section Card"),Object(s.b)("p",null,"A section card (",Object(s.b)("inlineCode",{parentName:"p"},"ui.section_card()"),") allows you to visually divide your page into various sub-sections, and provide components and controls specific to those sub-sections."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(573).default})),Object(s.b)("p",null,"Sections can contain nested components, just like a form card, but displayed horizontally to the right of the card."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(574).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(575).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(576).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(577).default})),Object(s.b)("p",null,"Sections are also a good way to display tabs on a page (similar to a tab card)."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(578).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(579).default})),Object(s.b)("h2",{id:"inline-components"},"Inline Components"),Object(s.b)("p",null,"Forms (and, in general, any card that supported nested components) can now display inline components using ",Object(s.b)("inlineCode",{parentName:"p"},"ui.inline()"),"."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(580).default})),Object(s.b)("p",null,"When used judiciously, inline components help design compact layouts, especially when grouping related fields together."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(581).default})),Object(s.b)("h2",{id:"inline-stats"},"Inline Stats"),Object(s.b)("p",null,"Stats or metrics can now be displayed inside forms, laid out horizontally from left to right. Each stat is created using ",Object(s.b)("inlineCode",{parentName:"p"},"ui.stat()"),", and grouped together using ",Object(s.b)("inlineCode",{parentName:"p"},"ui.stats()"),"."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(582).default})),Object(s.b)("p",null,"Stats can be used to display various scalar values/metrics associated with plots."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(583).default})),Object(s.b)("p",null,"Stats can optionally contain icons as well."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(584).default})),Object(s.b)("h2",{id:"stat-lists"},"Stat Lists"),Object(s.b)("p",null,"Stat lists (",Object(s.b)("inlineCode",{parentName:"p"},"ui.stat_list_card()"),") offer a simple way to display two-column lists with optional links, icons, subtitles, values and auxiliary values. They provide a simpler way to display lists of things compared to the more heavyweight ",Object(s.b)("inlineCode",{parentName:"p"},"ui.table()"),"."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(585).default})),Object(s.b)("p",null,"Icons can be colored differently."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(586).default})),Object(s.b)("p",null,"Values can be colored differently as well."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(587).default})),Object(s.b)("h2",{id:"stat-tables"},"Stat Tables"),Object(s.b)("p",null,"Stat tables (",Object(s.b)("inlineCode",{parentName:"p"},"ui.stat_table_card()"),") offer a simple way to display a table of metrics with optional links, icons and subtitles. They provide a simpler way to display tabular data compared to the more heavyweight ",Object(s.b)("inlineCode",{parentName:"p"},"ui.table()"),"."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(588).default})),Object(s.b)("h2",{id:"improved-documentation"},"Improved Documentation"),Object(s.b)("p",null,"We have a long way to go improving our documentation, but hopefully these small changes help for now."),Object(s.b)("p",null,"Most importantly, the Wave documentation now sports a search bar, thanks to ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.algolia.com/"}),"Algolia"),"."),Object(s.b)("p",null,"The examples section of the documentation now has a detailed ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"../docs/examples/all"}),"table of contents"),"."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(589).default})),Object(s.b)("p",null,"Each example is now tagged with labels, which should make it easier to find related examples. The examples are listed by tags ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"../docs/examples/tags"}),"on this page"),"."),Object(s.b)("p",null,Object(s.b)("img",{alt:"dashboard",src:a(590).default})),Object(s.b)("h2",{id:"download"},"Download"),Object(s.b)("p",null,"Get the release ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/h2oai/wave/releases/latest"}),"here"),". Check out the release notes for more details."),Object(s.b)("p",null,"We look forward to continuing our collaboration with the community and hearing your feedback as we further improve and expand the H2O Wave platform."),Object(s.b)("p",null,"We\u2019d like to thank the entire Wave team and the community for all of the contributions to this work!"))}i.isMDXComponent=!0},302:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),A=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,A=function(e,t){if(null==e)return{};var a,n,A={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(A[a]=e[a]);return A}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(A[a]=e[a])}return A}var c=A.a.createContext({}),i=function(e){var t=A.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return A.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return A.a.createElement(A.a.Fragment,{},t)}},u=A.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(a),u=n,p=d["".concat(r,".").concat(u)]||d[u]||b[u]||s;return a?A.a.createElement(p,l(l({ref:t},c),{},{components:a})):A.a.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<s;c++)r[c]=a[c];return A.a.createElement.apply(null,r)}return A.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},563:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dashboards-f32b01c8c07e2a1ded1ce2ce265bbbcf.png"},564:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dashboards_demo-1143b3fab018b50f5fd6a4f1c6198a30.png"},565:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dashboards_responsive-7e306ae02d67f49effa4ba3922f38c26.png"},566:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dashboard_red-7e0bf422365e6eceb8bec7dc8e695221.png"},567:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dashboard_blue-ae85814564c8a969c952120b9eb2f670.png"},568:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dashboard_orange-72c70ac710794925a711d7f2babd191c.png"},569:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dashboard_cyan-be4d839fa6960467b252d03cdcc6e349.png"},570:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dashboard_mint-c5aebe035f23b3185e05f2f5ad90588d.png"},571:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dashboard_purple-9a29d1ea728562c448cb870e766ddf79.png"},572:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/scaling-1ed013cfb64482f8eaa0808888c40b3b.png"},573:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/section-97b470e00b7932d2795c95be9cd22543.png"},574:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/section_1-eeb31d0e6c5a43abb92c456456dcd6e4.png"},575:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/section_2-aa7a7627456b3455fdf0cdd77c3de49c.png"},576:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/section_3-7dff0fecb5c9aa35d769fae64d1d0cda.png"},577:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/section_4-872edf7d8d4bbead96bbcc7840d22cf5.png"},578:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/section_5-3065b7aed493f3c0e4f4172914003a1d.png"},579:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/section_6-31f91f3195622bace7ade25d484b329f.png"},580:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"},581:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/inline_2-4bf7e9cee7574388d3434c79b250d430.png"},582:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stats_4-1f9d8e2ef7c4ab59be8e79f9c6d6b06c.png"},583:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stats_2-85969423403568ab077789ecd23458e2.png"},584:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stats_1-3d795dabf58580168c08af871ef00680.png"},585:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stats_list_3-604ecf10a42d2e87feb60141d2777f5b.png"},586:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stats_list_1-e5298c8479345c53d2e1197a118d0770.png"},587:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stats_list_2-7b410ad4b07a18411a671a7c70f6f057.png"},588:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stats_table-45b32e215b9672e14fa49d726704b772.png"},589:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/docs_toc-1b6451d27979880f8e5697fc15370346.png"},590:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/docs_tags-45dad6ef9e0fb51b7f578dacedcefc31.png"}}]);