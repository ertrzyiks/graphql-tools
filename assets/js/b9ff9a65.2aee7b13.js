(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{203:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(258)),c={},o={unversionedId:"api/interfaces/utils_src.schemaprintoptions",id:"api/interfaces/utils_src.schemaprintoptions",isDocsHomePage:!1,title:"utils_src.schemaprintoptions",description:"Interface: SchemaPrintOptions",source:"@site/docs/api/interfaces/utils_src.schemaprintoptions.md",slug:"/api/interfaces/utils_src.schemaprintoptions",permalink:"/docs/api/interfaces/utils_src.schemaprintoptions",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/interfaces/utils_src.schemaprintoptions.md",version:"current",sidebar:"someSidebar",previous:{title:"utils_src.schemamapper",permalink:"/docs/api/interfaces/utils_src.schemamapper"},next:{title:"utils_src.schemavisitormap",permalink:"/docs/api/interfaces/utils_src.schemavisitormap"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"commentDescriptions",id:"commentdescriptions",children:[]}]}],p={toc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-schemaprintoptions"},"Interface: SchemaPrintOptions"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../modules/utils_src"}),"utils/src"),".SchemaPrintOptions"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"SchemaPrintOptions")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"utils_src.printschemawithdirectivesoptions"}),Object(a.b)("em",{parentName:"a"},"PrintSchemaWithDirectivesOptions"))))),Object(a.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/interfaces/utils_src.schemaprintoptions#commentdescriptions"}),"commentDescriptions"))),Object(a.b)("h2",{id:"properties-1"},"Properties"),Object(a.b)("h3",{id:"commentdescriptions"},"commentDescriptions"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"commentDescriptions"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Descriptions are defined as preceding string literals, however an older\nexperimental version of the SDL supported preceding comments as\ndescriptions. Set to true to enable this deprecated behavior.\nThis option is provided to ease adoption and will be removed in v16."),Object(a.b)("p",null,"Default: false"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/types.ts#L12"}),"packages/utils/src/types.ts:12")))}l.isMDXComponent=!0},258:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return r?i.a.createElement(d,o(o({ref:t},p),{},{components:r})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<a;p++)c[p]=r[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);