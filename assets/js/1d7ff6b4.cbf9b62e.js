"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[5486],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=i.createContext({}),p=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,u=d["".concat(a,".").concat(m)]||d[m]||h[m]||s;return r?i.createElement(u,n(n({ref:t},c),{},{components:r})):i.createElement(u,n({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<s;p++)n[p]=r[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=r(7462),o=(r(7294),r(4137));const s={},n="Display",l={unversionedId:"room-editor/logic_props/display",id:"room-editor/logic_props/display",title:"Display",description:"A display shows an image or grid of images from a configured sprite sheet. The display shows a particular image when fed an input from a lock.",source:"@site/docs/room-editor/logic_props/display.md",sourceDirName:"room-editor/logic_props",slug:"/room-editor/logic_props/display",permalink:"/docs/room-editor/logic_props/display",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/logic_props/display.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Collider",permalink:"/docs/room-editor/logic_props/collider"},next:{title:"Empty",permalink:"/docs/room-editor/logic_props/empty"}},a={},p=[{value:"Properties",id:"properties",level:2},{value:"\ud83d\udd38Target Lock",id:"target-lock",level:3},{value:"\ud83d\udd38Columns",id:"columns",level:3},{value:"\ud83d\udd38Rows",id:"rows",level:3},{value:"\ud83d\udd38Padding",id:"padding",level:3},{value:"\ud83d\udd38Sprite Sheet Columns",id:"sprite-sheet-columns",level:3},{value:"\ud83d\udd38Sprite Sheet Rows",id:"sprite-sheet-rows",level:3},{value:"\ud83d\udd38Sprite Sheet",id:"sprite-sheet",level:3}],c={toc:p},d="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"display"},"Display"),(0,o.kt)("p",null,"A display shows an image or grid of images from a configured sprite sheet. The display shows a particular image when fed an input from a lock."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Display Selector",src:r(3343).Z,width:"1915",height:"1072"})),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"target-lock"},"\ud83d\udd38Target Lock"),(0,o.kt)("div",{className:"highlight-div"},'The lock that will define what images to be shown. As the values sent to the lock changes the display changes to images based on the numbers on the lock. If 0 is sent to the lock, it will display the first image in the sprite sheet. The "password" on the lock will show a preview on the display in the room editor.'),(0,o.kt)("h3",{id:"columns"},"\ud83d\udd38Columns"),(0,o.kt)("div",{className:"highlight-div"},"The number of columns of images to be shown on the display."),(0,o.kt)("h3",{id:"rows"},"\ud83d\udd38Rows"),(0,o.kt)("div",{className:"highlight-div"},"The number of rows of images to be shown on the display."),(0,o.kt)("h3",{id:"padding"},"\ud83d\udd38Padding"),(0,o.kt)("div",{className:"highlight-div"},"The amount of horizontal and vertical padding between the shown images."),(0,o.kt)("h3",{id:"sprite-sheet-columns"},"\ud83d\udd38Sprite Sheet Columns"),(0,o.kt)("div",{className:"highlight-div"},"The number of columns in the linked sprite sheet. The display will slice the images evenly from the sprite sheet based on this number."),(0,o.kt)("h3",{id:"sprite-sheet-rows"},"\ud83d\udd38Sprite Sheet Rows"),(0,o.kt)("div",{className:"highlight-div"},"The number of rows in the linked sprite sheet. The display will slice the images evenly from the sprite sheet based on this number."),(0,o.kt)("h3",{id:"sprite-sheet"},"\ud83d\udd38Sprite Sheet"),(0,o.kt)("div",{className:"highlight-div"},"An image containing rows / columns of images to be shown."))}h.isMDXComponent=!0},3343:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/Display-Selector-43947b95723087eff355952336b5e156.png"}}]);