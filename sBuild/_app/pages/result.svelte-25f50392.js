import{S as w,i as S,s as C,W as j,e as p,c as f,a as m,d as r,b as h,f as u,H as _,X as E,x as k,u as g,A as y,K as T,I as c,a1 as D,t as d,k as x,j as I,g as v,n as $,m as M,o as P,v as A}from"../chunks/vendor-1ac694aa.js";import{r as L}from"../chunks/apiSender-018987e7.js";function X(i){return{c,l:c,m:c,p:c,i:c,o:c,d:c}}function q(i){let a,s,o,t,n;return t=new D({props:{data:i[0],options:{title:"Line (discrete)",axes:{bottom:{title:"Caffeine Decay",mapsTo:"key",scaleType:"labels"},left:{mapsTo:"value",title:"Conversion rate",scaleType:"linear"}},curve:"curveMonotoneX",height:"800px"}}}),{c(){a=p("p"),s=d("Start5"),o=x(),I(t.$$.fragment)},l(e){a=f(e,"P",{});var l=m(a);s=v(l,"Start5"),l.forEach(r),o=$(e),M(t.$$.fragment,e)},m(e,l){u(e,a,l),_(a,s),u(e,o,l),P(t,e,l),n=!0},p:c,i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){e&&r(a),e&&r(o),A(t,e)}}}function H(i){let a,s,o,t,n;return{c(){a=p("p"),s=d("Start4"),o=x(),t=p("p"),n=d("Drawing..."),this.h()},l(e){a=f(e,"P",{});var l=m(a);s=v(l,"Start4"),l.forEach(r),o=$(e),t=f(e,"P",{class:!0});var b=m(t);n=v(b,"Drawing..."),b.forEach(r),this.h()},h(){h(t,"class","text-center text-white font-bold")},m(e,l){u(e,a,l),_(a,s),u(e,o,l),u(e,t,l),_(t,n)},p:c,i:c,o:c,d(e){e&&r(a),e&&r(o),e&&r(t)}}}function K(i){let a,s,o,t={ctx:i,current:null,token:null,hasCatch:!1,pending:H,then:q,catch:X,blocks:[,,,]};return j(y,t),{c(){a=p("main"),s=p("div"),t.block.c(),this.h()},l(n){a=f(n,"MAIN",{class:!0});var e=m(a);s=f(e,"DIV",{class:!0});var l=m(s);t.block.l(l),l.forEach(r),e.forEach(r),this.h()},h(){h(s,"class","backImage svelte-6pi5cn"),h(a,"class","h-screen w-screen")},m(n,e){u(n,a,e),_(a,s),t.block.m(s,t.anchor=null),t.mount=()=>s,t.anchor=null,o=!0},p(n,[e]){i=n,E(t,i,e)},i(n){o||(k(t.block),o=!0)},o(n){for(let e=0;e<3;e+=1){const l=t.blocks[e];g(l)}o=!1},d(n){n&&r(a),t.block.d(),t.token=null,t=null}}}function N(i){y(async()=>{console.log("start3"),await o()});let a=[],s=T(L).res;console.log("start");function o(){for(let t=0;t<s.length;t++){const n=s[t];a.push({group:"Caffeine",date:n.dttm,value:n.caffeine})}}return console.log("start2"),[a]}class V extends w{constructor(a){super();S(this,a,N,K,C,{})}}export{V as default};
