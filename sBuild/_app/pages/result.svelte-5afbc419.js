import{S as b,i as g,s as _,a1 as v,e as p,j as C,c as u,a as f,m as $,d as c,b as y,f as k,H as S,o as x,I as B,x as H,u as j,v as I,a2 as m,a3 as L,K as R}from"../chunks/vendor-374b35bb.js";import{r as D}from"../chunks/apiSender-c0796e8c.js";function w(d){let a,r,t,n;return t=new v({props:{data:d[0],options:{responsive:!0}}}),{c(){a=p("main"),r=p("div"),C(t.$$.fragment),this.h()},l(e){a=u(e,"MAIN",{});var o=f(a);r=u(o,"DIV",{class:!0});var l=f(r);$(t.$$.fragment,l),l.forEach(c),o.forEach(c),this.h()},h(){y(r,"class","backImage svelte-6pi5cn")},m(e,o){k(e,a,o),S(a,r),x(t,r,null),n=!0},p:B,i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){e&&c(a),I(t)}}}function E(d){m.register(...L);let a,r=[],t=[],n=R(D).res,e=[];for(let s=0;s<n.length;s++){const i=n[s];let h={caffeine:i.caffeine,dttm:i.dttm};e.push(h)}for(let s=0;s<e.length;s++){const i=e[s];r.push(i.caffeine),t.push(i.dttm)}const o=t.length/200;let l;return a=l.getContext("2d"),new m(a,{type:"line",data:{labels:t,datasets:r},options:{responsive:!0,scales:{y:{ticks:{stepSize:o}}}}}),[{labels:t,datasets:[{label:"Caffeine",fill:!0,lineTension:.3,backgroundColor:"rgba(225, 204,230, .3)",borderColor:"rgb(205, 130, 158)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(205, 130,1 58)",pointBackgroundColor:"rgb(255, 255, 255)",pointBorderWidth:10,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(0, 0, 0)",pointHoverBorderColor:"rgba(220, 220, 220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:r}]}]}class q extends b{constructor(a){super();g(this,a,E,w,_,{})}}export{q as default};
