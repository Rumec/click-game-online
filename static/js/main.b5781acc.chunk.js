(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(9),s=c.n(r),o=(c(19),c(20),c(21),c(4)),a=c(7),u=(c(22),c(13)),l=c.n(u),j=c(26),b=c(27),d=function(e){switch(e){case m.ready:return"Click to start!";case m.inProgress:return"Click here!";case m.finished:return"Restart the game!"}},O=c(10),f=c(14),h=(c(12),c(23),c(1)),p=function(){return Object(h.jsx)(O.a,{trigger:Object(h.jsx)(b.a,{className:"info-button",children:"Info"}),position:"left top",on:["hover","focus"],children:Object(h.jsx)(f.a,{title:"left top",children:"Click as fast as you can for 10 seconds!"})})},x=function(e){var t=Object(n.useRef)(null);return Object(h.jsxs)(O.a,{open:e.open,closeOnDocumentClick:!1,onClose:e.closeModal,ref:t,children:[Object(h.jsxs)("p",{children:["You have clicked ",e.clickCountRef.current," times in total"]}),Object(h.jsxs)("p",{children:["Meaning ",6*e.clickCountRef.current," clicks per minute or ",e.clickCountRef.current/10," clicks per second"]}),Object(h.jsx)(b.a,{type:"button",className:"button",onClick:function(){return t.current.close()},children:"close"})]})},k=new l.a({name:"game"}),m={ready:0,inProgress:1,finished:2},C=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(0),s=Object(a.a)(r,2),u=s[0],l=s[1],O=Object(n.useState)(0),f=Object(a.a)(O,2),C=f[0],g=f[1],v=Object(n.useState)(!1),w=Object(a.a)(v,2),y=w[0],F=w[1],R=Object(n.useRef)(C);R.current=C;return Object(h.jsxs)("div",Object(o.a)(Object(o.a)({},k()),{},{children:[Object(h.jsx)("div",Object(o.a)(Object(o.a)({},k("info-popup-row")),{},{children:Object(h.jsx)(p,{})})),Object(h.jsxs)("div",Object(o.a)(Object(o.a)({},k("window")),{},{children:[Object(h.jsx)("label",{htmlFor:"timer",children:"Time elapsed:"}),Object(h.jsx)(j.a,Object(o.a)(Object(o.a)({},k("timer")),{},{id:"timer",children:c.toFixed(1)})),Object(h.jsx)("label",{htmlFor:"clickCount",children:"Clicks total:"}),Object(h.jsx)(j.a,Object(o.a)(Object(o.a)({},k("click-count")),{},{id:"clickCount",children:C})),Object(h.jsx)(b.a,Object(o.a)(Object(o.a)({},k("button")),{},{variant:"primary",onClick:function(){switch(u){case m.ready:!function(e,t,c,n){c(m.inProgress),t(0);var i=setInterval((function(){t((function(e){return e+.1}))}),100);setTimeout((function(){clearInterval(i),c(m.finished)}),n+1)}(0,i,l,1e4),setTimeout((function(){!function(e){e((function(e){return!e}))}(F)}),10001);break;case m.inProgress:g((function(e){return e+1}));break;case m.finished:i(0),g(0),l(m.ready)}},children:d(u)}))]})),Object(h.jsx)(x,{open:y,closeModal:function(){return F(!1)},clickCountRef:R})]}))};var g=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(C,{})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),v()}},[[25,1,2]]]);
//# sourceMappingURL=main.b5781acc.chunk.js.map