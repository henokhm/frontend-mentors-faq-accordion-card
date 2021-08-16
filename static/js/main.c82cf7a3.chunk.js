(this["webpackJsonpfaq-accordion-card"]=this["webpackJsonpfaq-accordion-card"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":1,"question":"How many team members can I invite?","answer":"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."},{"id":2,"question":"What is the maximum file upload size?","answer":"No more than 2GB. All files in your account must fit your allotted storage space."},{"id":3,"question":"How do I reset my password?","answer":"Click \u201cForgot password\u201d from the login page or \u201cChange password\u201d from your profile page. A reset link will be emailed to you."},{"id":4,"question":"Can I cancel my subscription?","answer":"Yes! Send us a message and we\u2019ll process your request no questions asked."},{"id":5,"question":"Do you provide additional support?","answer":"Chat and email support is available 24/7. Phone lines are open during normal business hours."}]')},22:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var i,a=t(0),o=t.n(a),r=t(9),s=t.n(r),c=t(10),l=t(3),d=Object(l.a)(i||(i=Object(c.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');\n\n  :root {\n    --very-dark-desaturated-blue: hsl(238, 29%, 16%);\n    --soft-red: hsl(14, 88%, 65%);  \n    --very-dark-grayish-blue: hsl(237, 12%, 33%);\n    --dark-grayish-blue: hsl(240, 6%, 50%);\n    --light-grayish-blue: hsl(240, 5%, 91%);\n  }\n  \n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  \n  html, body {\n    height: 100%;\n    font-family: 'Kumbh Sans', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: 16px;\n    padding: 2em;\n    margin: 0 auto;\n\n    background: hsla(273, 75%, 66%, 1);\n\n    background: linear-gradient(\n        270deg,\n        hsla(273, 75%, 66%, 1) 0%,\n        hsla(240, 73%, 65%, 1) 100%\n      )\n      fixed;\n  \n    background: -moz-linear-gradient(\n        270deg,\n        hsla(273, 75%, 66%, 1) 0%,\n        hsla(240, 73%, 65%, 1) 100%\n      )\n      fixed;\n  \n    background: -webkit-linear-gradient(\n        270deg,\n        hsla(273, 75%, 66%, 1) 0%,\n        hsla(240, 73%, 65%, 1) 100%\n      )\n      fixed;\n  \n    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr=\"#af67e9\", endColorstr=\"#6565e7\", GradientType=1 );\n    \n}"]))),h=(t(22),t(15)),b=t(2),m=t(4),u=l.b.div.withConfig({displayName:"style__AccordionContainer",componentId:"sc-10o96fi-0"})([""]),g=l.b.h1.withConfig({displayName:"style__Title",componentId:"sc-10o96fi-1"})(["color:var(--very-dark-desaturated-blue);text-align:center;"]),p=l.b.div.withConfig({displayName:"style__ItemsContainer",componentId:"sc-10o96fi-2"})([""]),j=l.b.div.withConfig({displayName:"style__Item",componentId:"sc-10o96fi-3"})(["padding-bottom:1em;border-bottom:var(--light-grayish-blue) 1px solid;"]),f=l.b.div.withConfig({displayName:"style__ItemHeader",componentId:"sc-10o96fi-4"})(["color:var(--very-dark-grayish-blue);display:flex;align-items:baseline;justify-content:space-between;cursor:pointer;"]),O=l.b.h2.withConfig({displayName:"style__ItemTitle",componentId:"sc-10o96fi-5"})(["font-size:1.1em;font-weight:400;"]),y=l.b.img.withConfig({displayName:"style__ItemCollapeseIcon",componentId:"sc-10o96fi-6"})(["height:0.75em;&.invert{transform:rotateZ(180deg);hight:1em;transition:max-height 0.25s cubic-bezier(0.5,0,0.1,1);}"]),x=l.b.div.withConfig({displayName:"style__ItemBody",componentId:"sc-10o96fi-7"})(["color:var(--dark-grayish-blue);line-height:1.4em;&.closed{max-height:0;overflow:hidden;transition:max-height 0.25s cubic-bezier(0.5,0,0.1,1);}&.open{max-height:1200px;transition:max-height 0.25s cubic-bezier(0.5,0,0.1,1);}"]),w=t(1),v=Object(a.createContext)();function I(e){var n=e.children,t=Object(m.a)(e,["children"]);return Object(w.jsx)(u,Object(b.a)(Object(b.a)({},t),{},{children:n}))}I.Title=function(e){var n=e.children,t=Object(m.a)(e,["children"]);return Object(w.jsx)(g,Object(b.a)(Object(b.a)({},t),{},{children:n}))},I.ItemsContainer=function(e){var n=e.children,t=Object(m.a)(e,["children"]);return Object(w.jsx)(p,Object(b.a)(Object(b.a)({},t),{},{children:n}))},I.Item=function(e){var n=e.children,t=Object(m.a)(e,["children"]),i=Object(a.useState)(!1),o=Object(h.a)(i,2),r=o[0],s=o[1];return Object(w.jsx)(v.Provider,{value:{toggleShow:r,setToggleShow:s},children:Object(w.jsx)(j,Object(b.a)(Object(b.a)({},t),{},{children:n}))})},I.ItemHeader=function(e){var n=e.children,t=Object(m.a)(e,["children"]),i=Object(a.useContext)(v),o=i.toggleShow,r=i.setToggleShow;return Object(w.jsx)(f,Object(b.a)(Object(b.a)({onClick:function(){return r(!o)}},t),{},{children:n}))},I.ItemTitle=function(e){var n=e.children,t=Object(m.a)(e,["children"]);return Object(w.jsx)(O,Object(b.a)(Object(b.a)({},t),{},{children:n}))},I.ItemCollapeseIcon=function(e){e.children;var n=Object(m.a)(e,["children"]),t=Object(a.useContext)(v).toggleShow;return Object(w.jsx)(y,Object(b.a)(Object(b.a)({},n),{},{className:t?"invert":null}))},I.ItemBody=function(e){var n=e.children,t=Object(m.a)(e,["children"]),i=Object(a.useContext)(v).toggleShow;return Object(w.jsx)(x,Object(b.a)(Object(b.a)({},t),{},{className:i?"open":"closed",children:n}))};var C=I,k=t(14),_=t.p+"static/media/icon-arrow-down.852fa301.svg",N=(l.b.div.withConfig({displayName:"App__AppStyles",componentId:"sc-8gbh0v-0"})(["display:grid;place-items:center;"]),l.b.main.withConfig({displayName:"App__ContainerStyles",componentId:"sc-8gbh0v-1"})(["background:#fff;border-radius:2em;padding:2em;min-width:350px;display:flex;flex-direction:column-reverse;"]));var S=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(N,{className:"container",children:[Object(w.jsxs)(C,{children:[Object(w.jsx)(C.Title,{children:"FAQ"}),Object(w.jsx)(C.ItemsContainer,{children:k.map((function(e){return Object(w.jsxs)(C.Item,{children:[Object(w.jsxs)(C.ItemHeader,{children:[Object(w.jsx)(C.ItemTitle,{children:e.question}),Object(w.jsx)(C.ItemCollapeseIcon,{src:_,alt:"Expand or collapse accordion item icon"})]}),Object(w.jsx)(C.ItemBody,{children:e.answer})]},e.id)}))})]}),Object(w.jsx)("img",{src:"./images/illustration-woman-online-desktop.svg",alt:""})]})})};s.a.render(Object(w.jsxs)(o.a.StrictMode,{children:[Object(w.jsx)(d,{}),Object(w.jsx)(S,{})]}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c82cf7a3.chunk.js.map