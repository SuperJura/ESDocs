"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[939],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=d(r),s=n,k=c["".concat(p,".").concat(s)]||c[s]||u[s]||o;return r?a.createElement(k,l(l({ref:e},m),{},{components:r})):a.createElement(k,l({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9393:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3},l="Room Editor Handbook",i={unversionedId:"room-editor/room-editor-handbook",id:"room-editor/room-editor-handbook",title:"Room Editor Handbook",description:"Camera Movement",source:"@site/docs/room-editor/room-editor-handbook.md",sourceDirName:"room-editor",slug:"/room-editor/room-editor-handbook",permalink:"/ESDocs/docs/room-editor/room-editor-handbook",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/room-editor/room-editor-handbook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Lua Scripting",permalink:"/ESDocs/docs/room-editor/lua-scripting"},next:{title:"Room Editor - Videos",permalink:"/ESDocs/docs/category/room-editor---videos"}},p={},d=[{value:"Camera Movement",id:"camera-movement",level:2},{value:"Working with props",id:"working-with-props",level:2},{value:"Other",id:"other",level:2}],m={toc:d},c="wrapper";function u(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"room-editor-handbook"},"Room Editor Handbook"),(0,n.kt)("h2",{id:"camera-movement"},"Camera Movement"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Shortcut"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Moving"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("em",{parentName:"td"},"Hold Right Mouse Button + WASD")),(0,n.kt)("td",{parentName:"tr",align:null},"Used to control the camera position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fast moving"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("em",{parentName:"td"},"Hold Right Mouse Button + WASD + Shift")),(0,n.kt)("td",{parentName:"tr",align:null},"Same as moving but faster")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Focus on an item"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("em",{parentName:"td"},"F")),(0,n.kt)("td",{parentName:"tr",align:null},"Moves the camera to the selected prop")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Slow camera movement"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("em",{parentName:"td"},"Ctrl + Scroll")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"working-with-props"},"Working with props"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Shortcut"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Select multiple"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Shift + Left Mouse Button"),(0,n.kt)("td",{parentName:"tr",align:null},"Click on props to select")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rect select"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Left mouse button click and drag"),(0,n.kt)("td",{parentName:"tr",align:null},"Selects all props under the rectangle")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rect select parents"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Left mouse button click and drag + Alt"),(0,n.kt)("td",{parentName:"tr",align:null},"If a child and it's parent are in the rect selection it selects only the parent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Undo"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ctrl + Z"),(0,n.kt)("td",{parentName:"tr",align:null},"Revert your last action or group of actions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Redo"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ctrl + Shift + Z"),(0,n.kt)("td",{parentName:"tr",align:null},"Revert your last undo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Copy+Paste"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ctrl + D or Ctrl + C"),(0,n.kt)("td",{parentName:"tr",align:null},"Duplicate the selected prop(s)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Prop snap movement"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ctrl + moving the prop"),(0,n.kt)("td",{parentName:"tr",align:null},"The Prop will move 0,25 units and snap into place")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Layer selection"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Right click on prop"),(0,n.kt)("td",{parentName:"tr",align:null},"Select a prop behind or in another prop from the selection menu")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hide"),(0,n.kt)("td",{parentName:"tr",align:"center"},"H"),(0,n.kt)("td",{parentName:"tr",align:null},"Hides selected props")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Focus Hide"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Shift + H"),(0,n.kt)("td",{parentName:"tr",align:null},"Hide all props except the ones selected")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Unhide"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ctrl + H"),(0,n.kt)("td",{parentName:"tr",align:null},"Unhide all the hidden props")))),(0,n.kt)("h2",{id:"other"},"Other"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Shortcut"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Test play at position"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"Ctrl + Click Test Play Button")),(0,n.kt)("td",{parentName:"tr",align:null},"Starts the playtesting of the level with your character at the position of the camera")))))}u.isMDXComponent=!0}}]);