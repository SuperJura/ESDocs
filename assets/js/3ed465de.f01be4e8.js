(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[1726],{4137:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>g});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||n;return r?o.createElement(g,a(a({ref:t},p),{},{components:r})):o.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3108:(e,t,r)=>{var o=r(7294),i=r(5697);function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var a=n(o),l=n(i),s=function(){return s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},c=function(e){var t,r=e.bgColor,o=e.completed,i=e.baseBgColor,n=e.height,l=e.width,c=e.margin,p=e.padding,m=e.borderRadius,d=e.labelAlignment,u=e.labelColor,g=e.labelSize,f=e.isLabelVisible,b=e.customLabelStyles,h=e.transitionDuration,y=e.transitionTimingFunction,v=e.className,E=e.dir,O=e.ariaValuemin,P=e.ariaValuemax,w=e.ariaValuetext,x=e.maxCompleted,C=e.customLabel,L=e.animateOnRender,_=e.barContainerClassName,k=e.completedClassName,j=e.labelClassName,S=e.initCompletedOnAnimation,N=void 0===S?0:S,T="left"===(t=d)?"flex-start":"center"===t?"center":"right"===t?"flex-end":null,D="number"==typeof N?"".concat(N,"%"):N,B=function(e,t){if(e){var r=Number(t)/e;return r>1?"100%":"".concat(100*r,"%")}return D}(x,o),R=a.useState(D),z=R[0],A=R[1],V={height:n,background:i,borderRadius:m,padding:p,width:l,margin:c,overflow:"hidden"},M={height:n,width:L?z:B,background:r,transition:"width ".concat(h||"1s"," ").concat(y||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:"outside"!==d&&T?T:"normal"},F=s({padding:"outside"===d?"0 0 0 5px":"5px",color:u,fontWeight:"bold",fontSize:g,display:f?"initial":"none"},b),I={display:"outside"===d?"flex":"initial",alignItems:"outside"===d?"center":"initial"},Z="number"==typeof o?"".concat(o,"%"):"".concat(o),X=C||Z;return a.useEffect((function(){L&&requestAnimationFrame((function(){return A(B)}))}),[B,L]),a.createElement("div",{style:v?void 0:I,className:v,dir:E,role:"progressbar","aria-valuenow":parseFloat(X),"aria-valuemin":O,"aria-valuemax":P,"aria-valuetext":"".concat(null===w?X:w)},a.createElement("div",{style:_?void 0:V,className:_},a.createElement("div",{style:k?void 0:M,className:k},"outside"!==d&&a.createElement("span",{style:j?void 0:F,className:j},X))),"outside"===d&&a.createElement("span",{style:j?void 0:F,className:j},X))};c.propTypes={completed:l.oneOfType([l.string,l.number]).isRequired,bgColor:l.string,baseBgColor:l.string,height:l.string,width:l.string,borderRadius:l.string,margin:l.string,padding:l.string,labelAlignment:l.oneOf(["left","center","right","outside"]),labelColor:l.string,labelSize:l.string,isLabelVisible:l.bool,className:l.string,dir:l.oneOf(["rtl","ltr","auto"]),maxCompleted:l.number,customLabel:l.string,animateOnRender:l.bool,barContainerClassName:l.string,completedClassName:l.string,labelClassName:l.string,initCompletedOnAnimation:l.oneOfType([l.string,l.number])},c.defaultProps={bgColor:"#6a1b9a",height:"20px",width:"100%",borderRadius:"50px",labelAlignment:"right",baseBgColor:"#e0e0de",labelColor:"#fff",labelSize:"15px",isLabelVisible:!0,dir:"ltr",ariaValuemin:0,ariaValuemax:100,ariaValuetext:null,maxCompleted:100,animateOnRender:!1,initCompletedOnAnimation:0},t.Z=c},7343:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var o=r(7462),i=r(7294),n=r(4137),a=r(3108);const l=()=>i.createElement("table",{className:"statsTable"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",{className:"statsTableLeft"},"Page"),i.createElement("th",null,"Percent done"))),i.createElement("tbody",null,i.createElement(s,{href:"./room-editor/behaviours/animation",title:"Behaviours - Animation",percent:"100"}),i.createElement(s,{href:"./room-editor/behaviours/button",title:"Behaviours - Button",percent:"100"}),i.createElement(s,{href:"./room-editor/behaviours/dial",title:"Behaviours - Dial",percent:"90"}),i.createElement(s,{href:"./room-editor/behaviours/drag_target",title:"Behaviours - Drag Target",percent:"1"}),i.createElement(s,{href:"./room-editor/behaviours/slidable",title:"Behaviours - Slidable",percent:"100"}),i.createElement(s,{href:"./room-editor/behaviours/turnable",title:"Behaviours - Turnable",percent:"100"}),i.createElement(s,{href:"./room-editor/behaviours/zoomable",title:"Behaviours - Zoomable",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/collider",title:"Logic Props - Collider",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/display",title:"Logic Props - Display",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/empty",title:"Logic Props - Empty",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/finish",title:"Logic Props - Finish",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/fog",title:"Logic Props - Fog",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/light",title:"Logic Props - Light",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/lock",title:"Logic Props - Lock",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/mirror",title:"Logic Props - Mirror",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/obstacle",title:"Logic Props - Obstacle",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/open_link",title:"Logic Props - Open Link",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/post_processing",title:"Logic Props - Post Processing",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/puzzle",title:"Logic Props - Puzzle",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/roulette",title:"Logic Props - Roulette",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/skybox",title:"Logic Props - Sky Box",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/slot",title:"Logic Props - Slot",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/sound",title:"Logic Props - Sound",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/spawn_point",title:"Logic Props - Spawn Point",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/teleport",title:"Logic Props - Teleport",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/visibility_activator",title:"Logic Props - Visibility Activator",percent:"100"}),i.createElement(s,{href:"./room-editor/logic_props/water",title:"Logic Props - Water",percent:"100"}))),s=e=>{let{href:t,title:r,percent:o}=e;return i.createElement("tr",null,i.createElement("td",{align:"center",valign:"middle",width:"150",height:"70"},i.createElement("a",{href:t},i.createElement("b",null,r))),i.createElement("td",null,i.createElement(a.Z,{completed:parseInt(o)})))},c={},p="Stats",m={unversionedId:"stats/stats",id:"stats/stats",title:"Stats",description:"Player count",source:"@site/docs/stats/stats.md",sourceDirName:"stats",slug:"/stats/",permalink:"/docs/stats/",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/stats/stats.md",tags:[],version:"current",frontMatter:{},sidebar:"gameSidebar",previous:{title:"Build-a-Room #1 Awards Stream",permalink:"/docs/stream-vods/build-a-room-1-winners"},next:{title:"Press Kit",permalink:"/docs/press"}},d={},u=[{value:"Player count",id:"player-count",level:2},{value:"Discord stats",id:"discord-stats",level:2},{value:"Documentation completion",id:"documentation-completion",level:2}],g={toc:u},f="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stats"},"Stats"),(0,n.kt)("h2",{id:"player-count"},"Player count"),(0,n.kt)("iframe",{src:"https://steamdb.info/embed/?appid=1435790",height:"390",width:"100%",loading:"lazy"}),(0,n.kt)("h2",{id:"discord-stats"},"Discord stats"),(0,n.kt)("iframe",{src:"https://discord.com/widget?id=449578254433517578&theme=dark",width:"100%",height:"390",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"}),(0,n.kt)("h2",{id:"documentation-completion"},"Documentation completion"),(0,n.kt)(l,{mdxType:"DocumentationTable"}))}b.isMDXComponent=!0}}]);