(this.webpackJsonpcarputty=this.webpackJsonpcarputty||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n.n(r),a=n(4),i=n.n(a),o=n(5),d=n(2);n(11);var j=function(e){var t=e.percent;return Object(s.jsx)("div",{className:"progressBar",children:Object(s.jsx)("div",{className:"progressFill",style:{width:t,borderRadius:"100%"===t?"8px 8px 0px 0px":"8px 0px 0px 0px"}})})};n(12);var l=function(e){var t=e.goalReached,n=e.remainingFunds,r=e.totalDonors,c=e.userDonation,a=e.setDonatioError,i=e.setUserDonation,o=e.donationLogic,d=e.donationError;return Object(s.jsxs)("div",{className:"cardBody",children:[Object(s.jsxs)("div",{className:"fundContainer",children:[t?Object(s.jsxs)("p",{children:["We did it! We passed our goal by ",Object(s.jsxs)("b",{children:[Object(s.jsx)("sup",{children:"$"}),n]}),"!!!"]}):Object(s.jsxs)("p",{children:[Object(s.jsxs)("b",{children:[Object(s.jsx)("sup",{children:"$"}),n]})," still needed to fund this project"]}),Object(s.jsx)("div",{className:"arrow-down"})]}),Object(s.jsxs)("div",{className:"infoContainer",children:[Object(s.jsx)("h2",{children:"Only four days left to fund this project"}),Object(s.jsxs)("p",{children:["Join the ",Object(s.jsx)("b",{children:r})," other donors who have already supported this project."]})]}),Object(s.jsxs)("div",{className:"inputContainer",children:[Object(s.jsx)("span",{className:"dollar",children:"$"}),Object(s.jsx)("input",{type:"number",value:c,onChange:function(e){var t=e.target.value;a(!1),i(t)}}),Object(s.jsx)("button",{disabled:""===c,onClick:function(){return o(c)},children:"Give Now"})]}),d&&Object(s.jsx)("div",{className:"errorContainer",children:Object(s.jsx)("p",{children:"Minimum donation is $5. Pay up!"})})]})},u=n.p+"static/media/500.d4e80e97.gif";n(13);var b=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),i=Object(d.a)(a,2),b=i[0],O=i[1],h=Object(r.useState)(""),p=Object(d.a)(h,2),x=p[0],v=p[1],f=Object(r.useState)(0),g=Object(d.a)(f,2),m=g[0],N=g[1],y=Object(r.useState)(!1),C=Object(d.a)(y,2),D=C[0],w=C[1],F=function(e){var t=e/5e3*100;return t>100?"100%":t+"%"}(m),S=function(e){return 5e3-e}(m),E=!1;S<0&&(S*=-1,E=!0);var B={goalReached:E,remainingFunds:S,totalDonors:b,userDonation:x,setDonatioError:w,setUserDonation:v,donationLogic:function(e){var t=parseInt(e);500===t&&(c(!0),setTimeout((function(){return c(!1)}),5e3)),t<5?w(!0):(O(b+1),N(m+parseInt(t)))},donationError:D};return Object(s.jsxs)("div",{className:"sandbox",children:[Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)(j,{percent:F}),Object(s.jsx)(l,Object(o.a)({},B))]}),n&&Object(s.jsx)("div",{className:"gifContainer",children:Object(s.jsx)("img",{src:u,alt:"easter egg"})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),O()}],[[14,1,2]]]);
//# sourceMappingURL=main.920a4911.chunk.js.map