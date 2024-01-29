"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[7245],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(a),c=i,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2608:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(4137));const o={},r="Dial",l={unversionedId:"room-editor/behaviours/dial",id:"room-editor/behaviours/dial",title:"Dial",description:"A Dial is a behaviour that can be placed on a prop that is meant to be used for interactions with props where you want the player to rotate the mouse across the screen. For instance, if you have a 'Valve' prop and it is pointing at the screen, you will most likely want to use a Dial behaviour and not the Turnable because turnables only rotate by moving the mouse in two direction (e.g. right - left). This is most useful when you can limit the player's viewing angle, e.g. by using it in a Zoomable where the player can not change the angle of viewing. If used from strange angles it can appear buggy, so test your room to determine if you need a Dial or a Turnable.",source:"@site/docs/room-editor/behaviours/dial.md",sourceDirName:"room-editor/behaviours",slug:"/room-editor/behaviours/dial",permalink:"/docs/room-editor/behaviours/dial",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/behaviours/dial.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Turnable",permalink:"/docs/room-editor/behaviours/turnable"},next:{title:"Zoomable",permalink:"/docs/room-editor/behaviours/zoomable"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"\ud83d\udd38World Axis",id:"world-axis",level:3},{value:"\ud83d\udd38Value Count",id:"value-count",level:3},{value:"\ud83d\udd38Value Output Range",id:"value-output-range",level:3},{value:"\ud83d\udd38Snap To Position",id:"snap-to-position",level:3},{value:"\ud83d\udd38Locks",id:"locks",level:3},{value:"Left Thumb Rule",id:"left-thumb-rule",level:2}],p={toc:u},h="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dial"},"Dial"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial")," is a behaviour that can be placed on a prop that is meant to be used for interactions with props where you want the player to rotate the mouse across the screen. For instance, if you have a 'Valve' prop and it is pointing at the screen, you will most likely want to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial")," behaviour and not the ",(0,i.kt)("inlineCode",{parentName:"p"},"Turnable")," because turnables only rotate by moving the mouse in two direction (e.g. right - left). This is most useful when you can limit the player's viewing angle, e.g. by using it in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Zoomable")," where the player can not change the angle of viewing. If used from strange angles it can appear buggy, so test your room to determine if you need a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"Turnable"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Dials will only output when they are stopped and let go off.")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"world-axis"},"\ud83d\udd38World Axis"),(0,i.kt)("div",{className:"highlight-div"},"Determines along which axis the prop will rotate."),(0,i.kt)("p",null,"This determines along which axis your ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial")," will spin when moved and in which direction the next value is. You can use the axis example image below to determine which axis will best fit your needs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Axis",src:a(7916).Z,width:"516",height:"503"})),(0,i.kt)("p",null,"There is no player axis, because the player is supposed to grab a part of the dial and spin it manually in the needed direction. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Don't forget to set the axis view to 'local' so you are viewing the correct axis angles!")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can also use the rule of the ",(0,i.kt)("strong",{parentName:"p"},"left thumb")," to easily determine the axis needed and the direction. Check it out at the bottom of this page!")),(0,i.kt)("h3",{id:"value-count"},"\ud83d\udd38Value Count"),(0,i.kt)("div",{className:"highlight-div"},"Determines the amount of dial steps. Shouldn't be larger than Value Output Range (gives zero). Usually you need to set it to the same number as the Output Value Range. Make it double the Output Value Range to only get even numbers."),(0,i.kt)("p",null,"The number of sections the dial is split into, e.g. setting 4 here will create a dial with 4 sections with a 90 degree angle. Each of these sections will send out a different value based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Output Range"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(3739).Z,width:"1462",height:"868"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Do not enter a 0 here, else the game will try to divide by 0, which leads to errors that will clutter your playerlog.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are having issues with the dial make sure the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Count")," number is set to a number equal (or larger) than the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Output Range"),".")),(0,i.kt)("h3",{id:"value-output-range"},"\ud83d\udd38Value Output Range"),(0,i.kt)("div",{className:"highlight-div"},"Maximal value the dial can output at the final rotation. Ranges from 0 to the Output Value Range reduced by one."),(0,i.kt)("p",null,"This setting is used to change the values the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial")," outputs to locks. Each section of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial")," created by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Count")," has a different output value. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Output Range")," matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Count")," each section gets a number from 0 to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Output Range"),". Otherwise it will try to squeeze in a couple of numbers into the section. To do that it uses division, divide the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Output Range")," by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Count")," and take the floor of that number, e.g. 9/4 = 2.25, but that floored is 2. The first section will have 0 and 1 squeezed into this section, but only the 0 will be sent to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Lock"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(3739).Z,width:"1462",height:"868"})),(0,i.kt)("p",null,"In the image above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Count")," is 4 and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Output Range")," is 8. This means the wheel is cut into 4 slices and each slice output value is incremented by 2, because 8/4 = 2. The values increase in a counter-clockwise direction because the ",(0,i.kt)("inlineCode",{parentName:"p"},"World Axis")," is set to point in the opposite direction of the screen."),(0,i.kt)("p",null,"Having a Value Output Range of 12 will give outputs 0, 3, 6, 9.\nIf you choose numbers that are not equally divisible between the sectors, they will be ignored and the next lower number assumed that works. So e.g. having a Value Output Range of 13 for our 4-sector Dial will still result in the same output as the Value Output Range 12 one. Only Value Output Range 16 will start changing the output values again."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are new to ",(0,i.kt)("inlineCode",{parentName:"p"},"Dials")," just set this value to be the same as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Count")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial")," will output numbers from 0 to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Count")," to the designated ",(0,i.kt)("inlineCode",{parentName:"p"},"Lock"),".")),(0,i.kt)("h3",{id:"snap-to-position"},"\ud83d\udd38Snap To Position"),(0,i.kt)("div",{className:"highlight-div"},"When checked, the dial will snap to the closest rotation when released."),(0,i.kt)("p",null,"Works similarly to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Turnable")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Snap To Position"),", but there is a bug when the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Output Range")," doesn't match the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value Count"),"."),(0,i.kt)("h3",{id:"locks"},"\ud83d\udd38Locks"),(0,i.kt)("div",{className:"highlight-div"},"Target the 'Lock' password position. When the 'Dial' is rotated to a position the set password position will be set to the current 'Dial' value."),(0,i.kt)("p",null,"The lock(s) this dial connects to and send the outputs to. Dials will only output when they are stopped and let go off."),(0,i.kt)("h2",{id:"left-thumb-rule"},"Left Thumb Rule"),(0,i.kt)("p",null,"You can use the Left Thumb rule to determine the axis and direction of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial"),". Point your left thumb in the same direction the axis you want to turn the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial")," around. To determine the click direction of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial"),' form a "thumbs up" pose with your left hand and look at your fingers, they will point in the direction the turnable will rotate.'),(0,i.kt)("p",null,"The image below shows the names of the axis. Firstly, you must change the purple marked button that says 'LOCAL' in the image to the icon in the image. That will affect the way the arrows point. This sets the coordinate axis along the prop's local rotation, while the other 'Global' setting sets the axis according to the world."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Axis",src:a(7916).Z,width:"516",height:"503"})),(0,i.kt)("p",null,"E.g. if you're pointing your left thumb towards yourself, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dial")," will turn clockwise when you click it, and the rotation direction will depend on the mouse movement."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'Since this can be difficult to memorize and prone to make mistakes happen, remember you can use Ctrl + "Enter Play Mode" button to start a test run at the camera location, which makes it easy to test your settings very quickly.')))}d.isMDXComponent=!0},3739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/value_count-8aa3dc52acb3a254beca35ba3faf8ef8.png"},7916:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/turnable_axis-d804f22bfa3067f2864053bd7d1a60ac.png"}}]);