import{C as te,J as ee,K as ue,S as ne,i as re,s as le,e as m,t as L,k as O,c as h,a as p,g as S,d,n as U,b as f,f as A,H as a,L as X,I,M as De,N as x,O as R,P as $e,Q as Fe,R as oe,T as Ne,h as Te,U as Le,V as je,W as xe,l as Se,X as He,x as Z,u as z,Y as Pe,j as de,m as fe,o as me,Z as Ve,v as he,r as qe,w as Ae,_ as Re,$ as We,a0 as Ke}from"../chunks/vendor-75fca109.js";import{s as Ze,r as Ge}from"../chunks/apiSender-caa9c2ed.js";import{r as Je}from"../chunks/singletons-12a22614.js";const V=te(1),se=te(!1),ae=te(!1),Ie="YYYY-MM-DDTHH:mm";let _e=new Date,pe;_e.toISOString();const Qe=r=>pe=ee(r).format(Ie),Xe=r=>_e=ee(r,Ie).toDate();Qe(_e);Xe(pe);const Me={No:1,caffeineMg:1,method:"1",dttm:pe.toString()},ze=[],$=te(ze);$.update(r=>(r.push(Me),r));const Oe="YYYY-MM-DDTHH:mm";let ve=new Date,ie;ve.toISOString();const et=r=>ie=ee(r).format(Oe),tt=r=>ve=ee(r,Oe).toDate();et(ve);tt(ie);function nt(){const r=ue(V);if(r===1)return $.update(e=>(e.push(Me),e)),$;{const e={No:r,method:"1",caffeineMg:1,dttm:ie.toString()};$.update(t=>(t.push(e),t))}return console.log(ie),console.log(ue($)),$}function rt(r){let e,t,n,l,s,o,u,i,c,g,v;return{c(){e=m("div"),t=m("div"),n=m("button"),l=L("+1 drink :)"),s=O(),o=m("button"),u=L("-1 drink :)"),i=O(),c=m("br"),this.h()},l(E){e=h(E,"DIV",{});var w=p(e);t=h(w,"DIV",{class:!0});var D=p(t);n=h(D,"BUTTON",{class:!0});var M=p(n);l=S(M,"+1 drink :)"),M.forEach(d),s=U(D),o=h(D,"BUTTON",{class:!0});var B=p(o);u=S(B,"-1 drink :)"),B.forEach(d),D.forEach(d),i=U(w),c=h(w,"BR",{}),w.forEach(d),this.h()},h(){f(n,"class","countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md svelte-1jwc1he"),f(o,"class","countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md svelte-1jwc1he"),f(t,"class","flex flex-wrap justify-center items-baseline text-gray-700")},m(E,w){A(E,e,w),a(e,t),a(t,n),a(n,l),a(t,s),a(t,o),a(o,u),a(e,i),a(e,c),g||(v=[X(n,"click",r[2]),X(o,"click",r[3])],g=!0)},p:I,i:I,o:I,d(E){E&&d(e),g=!1,De(v)}}}function lt(r,e,t){let n,l,s;x(r,V,v=>t(4,n=v)),x(r,ae,v=>t(5,l=v)),x(r,se,v=>t(6,s=v));function o(){return n>=10?(R(se,s=!0,s),R(V,n=10,n)):(R(se,s=!1,s),R(V,n+=1,n),nt())}function u(){return console.log(V),n<=1?(R(ae,l=!0,l),R(V,n=1,n)):(R(ae,l=!1,l),R(V,n-=1,n),i())}function i(){$.update(v=>(v.pop(),v))}return[o,u,()=>o(),()=>u()]}class ot extends ne{constructor(e){super();re(this,e,lt,rt,le,{})}}function st(r){const e=t=>{r&&typeof r.select=="function"&&r.select()};return r.addEventListener("focus",e),{destroy(){r.removeEventListener("focus",e)}}}function at(r){const e=t=>{t.key==="Escape"&&r&&typeof r.blur=="function"&&r.blur()};return r.addEventListener("keydown",e),{destroy(){r.removeEventListener("keydown",e)}}}function it(r){let e,t,n=r[0].No+"",l,s,o,u,i,c,g,v,E,w,D,M,B,Y,W,k,q,H,P,G,J,C,F,b,_,K,j,Q;return{c(){e=m("div"),t=m("li"),l=L(n),s=L(` :

		`),o=m("label"),u=L(Ue),i=O(),c=m("select"),g=m("option"),v=L("1"),E=m("option"),w=L("2"),M=O(),B=m("label"),Y=L(Ye),W=O(),k=m("input"),H=O(),P=m("label"),G=L("mg,"),J=O(),C=m("label"),F=L("Date time:"),b=O(),_=m("input"),this.h()},l(N){e=h(N,"DIV",{});var T=p(e);t=h(T,"LI",{class:!0});var y=p(t);l=S(y,n),s=S(y,` :

		`),o=h(y,"LABEL",{});var be=p(o);u=S(be,Ue),be.forEach(d),i=U(y),c=h(y,"SELECT",{id:!0,name:!0,class:!0});var ce=p(c);g=h(ce,"OPTION",{});var ge=p(g);v=S(ge,"1"),ge.forEach(d),E=h(ce,"OPTION",{});var ke=p(E);w=S(ke,"2"),ke.forEach(d),ce.forEach(d),M=U(y),B=h(y,"LABEL",{});var ye=p(B);Y=S(ye,Ye),ye.forEach(d),W=U(y),k=h(y,"INPUT",{id:!0,name:!0,type:!0,min:!0,max:!0,class:!0}),H=U(y),P=h(y,"LABEL",{});var Ee=p(P);G=S(Ee,"mg,"),Ee.forEach(d),J=U(y),C=h(y,"LABEL",{});var we=p(C);F=S(we,"Date time:"),we.forEach(d),b=U(y),_=h(y,"INPUT",{id:!0,name:!0,type:!0,class:!0}),y.forEach(d),T.forEach(d),this.h()},h(){g.__value="1",g.value=g.__value,E.__value="2",E.value=E.__value,f(c,"id",D=r[0].No.toString()),f(c,"name","method"),c.required=!0,f(c,"class","text-gray-700 rounded-lg bg-white"),r[0].method===void 0&&$e(()=>r[3].call(c)),f(k,"id",q=""+(r[0].No+"-caffeine")),f(k,"name","caffeine"),f(k,"type","number"),f(k,"min","1"),f(k,"max","1000"),k.required=!0,f(k,"class","text-gray-700 rounded-lg bg-white"),f(_,"id",K=""+(r[0].No+"-time")),f(_,"name","datetime"),f(_,"type","datetime-local"),_.required=!0,f(_,"class","bg-white border-white text-gray-700 rounded-lg"),f(t,"class","svelte-riqbsc")},m(N,T){A(N,e,T),a(e,t),a(t,l),a(t,s),a(t,o),a(o,u),a(t,i),a(t,c),a(c,g),a(g,v),a(c,E),a(E,w),Fe(c,r[0].method),a(t,M),a(t,B),a(B,Y),a(t,W),a(t,k),oe(k,r[0].caffeineMg),a(t,H),a(t,P),a(P,G),a(t,J),a(t,C),a(C,F),a(t,b),a(t,_),oe(_,r[0].dttm),j||(Q=[X(c,"change",r[3]),Ne(st.call(null,k)),Ne(at.call(null,k)),X(k,"input",r[4]),X(_,"input",r[5])],j=!0)},p(N,[T]){T&1&&n!==(n=N[0].No+"")&&Te(l,n),T&1&&D!==(D=N[0].No.toString())&&f(c,"id",D),T&1&&Fe(c,N[0].method),T&1&&q!==(q=""+(N[0].No+"-caffeine"))&&f(k,"id",q),T&1&&Le(k.value)!==N[0].caffeineMg&&oe(k,N[0].caffeineMg),T&1&&K!==(K=""+(N[0].No+"-time"))&&f(_,"id",K),T&1&&oe(_,N[0].dttm)},i:I,o:I,d(N){N&&d(e),j=!1,De(Q)}}}let Ue="Method: ",Ye="Caffeine: ";function ct(r,e,t){let{drinkForms:n}=e,{index:l}=e,{theForm:s}=e;function o(){s.method=je(this),t(0,s)}function u(){s.caffeineMg=Le(this.value),t(0,s)}function i(){s.dttm=this.value,t(0,s)}return r.$$set=c=>{"drinkForms"in c&&t(1,n=c.drinkForms),"index"in c&&t(2,l=c.index),"theForm"in c&&t(0,s=c.theForm)},[s,n,l,o,u,i]}class ut extends ne{constructor(e){super();re(this,e,ct,it,le,{drinkForms:1,index:2,theForm:0})}}function Be(r,e,t){const n=r.slice();return n[5]=e[t],n[7]=t,n}function dt(r){return{c:I,l:I,m:I,p:I,i:I,o:I,d:I}}function ft(r){let e,t,n=r[0],l=[];for(let o=0;o<n.length;o+=1)l[o]=Ce(Be(r,n,o));const s=o=>z(l[o],1,1,()=>{l[o]=null});return{c(){e=m("ul");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=h(o,"UL",{class:!0});var u=p(e);for(let i=0;i<l.length;i+=1)l[i].l(u);u.forEach(d),this.h()},h(){f(e,"class","svelte-riqbsc")},m(o,u){A(o,e,u);for(let i=0;i<l.length;i+=1)l[i].m(e,null);t=!0},p(o,u){if(u&1){n=o[0];let i;for(i=0;i<n.length;i+=1){const c=Be(o,n,i);l[i]?(l[i].p(c,u),Z(l[i],1)):(l[i]=Ce(c),l[i].c(),Z(l[i],1),l[i].m(e,null))}for(qe(),i=n.length;i<l.length;i+=1)s(i);Ae()}},i(o){if(!t){for(let u=0;u<n.length;u+=1)Z(l[u]);t=!0}},o(o){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)z(l[u]);t=!1},d(o){o&&d(e),Re(l,o)}}}function Ce(r){let e,t,n;function l(o){r[2](o)}let s={theForm:r[5],index:r[7]};return r[0]!==void 0&&(s.$drinkForms=r[0]),e=new ut({props:s}),We.push(()=>Ke(e,"$drinkForms",l)),{c(){de(e.$$.fragment)},l(o){fe(e.$$.fragment,o)},m(o,u){me(e,o,u),n=!0},p(o,u){const i={};u&1&&(i.theForm=o[5]),!t&&u&1&&(t=!0,i.$drinkForms=o[0],Ve(()=>t=!1)),e.$set(i)},i(o){n||(Z(e.$$.fragment,o),n=!0)},o(o){z(e.$$.fragment,o),n=!1},d(o){he(e,o)}}}function mt(r){let e,t,n;return{c(){e=m("div"),t=m("p"),n=L("Loading....")},l(l){e=h(l,"DIV",{});var s=p(e);t=h(s,"P",{});var o=p(t);n=S(o,"Loading...."),o.forEach(d),s.forEach(d)},m(l,s){A(l,e,s),a(e,t),a(t,n)},p:I,i:I,o:I,d(l){l&&d(e)}}}function ht(r){let e,t,n={ctx:r,current:null,token:null,hasCatch:!1,pending:mt,then:ft,catch:dt,blocks:[,,,]};return xe(r[1](),n),{c(){e=Se(),n.block.c()},l(l){e=Se(),n.block.l(l)},m(l,s){A(l,e,s),n.block.m(l,n.anchor=s),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(l,[s]){r=l,He(n,r,s)},i(l){t||(Z(n.block),t=!0)},o(l){for(let s=0;s<3;s+=1){const o=n.blocks[s];z(o)}t=!1},d(l){l&&d(e),n.block.d(l),n.token=null,n=null}}}function _t(r,e,t){let n,l,s;x(r,V,i=>t(4,l=i)),x(r,$,i=>t(0,s=i));async function o(){n=!1,s.length===l&&(n=!0),n&&await n,await Pe()}function u(i){s=i,$.set(s)}return n=!1,[s,o,u]}class pt extends ne{constructor(e){super();re(this,e,_t,ht,le,{})}}const vt=Je,bt=gt;async function gt(r,e){return vt.goto(r,e,[])}function kt(r){let e,t;return{c(){e=m("p"),t=L("The drink number must be greater than 0! :)"),this.h()},l(n){e=h(n,"P",{class:!0});var l=p(e);t=S(l,"The drink number must be greater than 0! :)"),l.forEach(d),this.h()},h(){f(e,"class","maxWarning svelte-18bhp9v")},m(n,l){A(n,e,l),a(e,t)},d(n){n&&d(e)}}}function yt(r){let e,t;return{c(){e=m("p"),t=L("You could calculate only 10 drinks at once! :)"),this.h()},l(n){e=h(n,"P",{class:!0});var l=p(e);t=S(l,"You could calculate only 10 drinks at once! :)"),l.forEach(d),this.h()},h(){f(e,"class","maxWarning svelte-18bhp9v")},m(n,l){A(n,e,l),a(e,t)},d(n){n&&d(e)}}}function Et(r){let e,t,n,l,s,o,u,i,c,g,v,E,w,D,M,B,Y,W,k,q,H,P,G;function J(b,_){if(b[1])return yt;if(b[2])return kt}let C=J(r),F=C&&C(r);return v=new ot({}),M=new pt({}),{c(){e=m("main"),t=m("div"),n=O(),l=m("div"),s=m("div"),o=m("div"),u=L("How many bottles did you drink? : "),i=L(r[0]),c=O(),F&&F.c(),g=O(),de(v.$$.fragment),E=O(),w=m("form"),D=m("ul"),de(M.$$.fragment),B=O(),Y=m("button"),W=L("Submit"),k=O(),q=m("br"),this.h()},l(b){e=h(b,"MAIN",{class:!0});var _=p(e);t=h(_,"DIV",{class:!0}),p(t).forEach(d),n=U(_),l=h(_,"DIV",{class:!0});var K=p(l);s=h(K,"DIV",{class:!0});var j=p(s);o=h(j,"DIV",{class:!0});var Q=p(o);u=S(Q,"How many bottles did you drink? : "),i=S(Q,r[0]),Q.forEach(d),c=U(j),F&&F.l(j),g=U(j),fe(v.$$.fragment,j),j.forEach(d),K.forEach(d),E=U(_),w=h(_,"FORM",{method:!0,class:!0});var N=p(w);D=h(N,"UL",{class:!0});var T=p(D);fe(M.$$.fragment,T),B=U(T),Y=h(T,"BUTTON",{type:!0,class:!0});var y=p(Y);W=S(y,"Submit"),y.forEach(d),T.forEach(d),N.forEach(d),k=U(_),q=h(_,"BR",{}),_.forEach(d),this.h()},h(){f(t,"class","backImage svelte-18bhp9v"),f(o,"class","countNum text-xl2 text-gray-100 svelte-18bhp9v"),f(s,"class","flex flex-col justify-center"),f(l,"class","inputForm svelte-18bhp9v"),f(Y,"type","button"),f(Y,"class","submit px-4 py-2 bg-primary border-white rounded-lg text-gray-700 svelte-18bhp9v"),Y.value="Submit",f(D,"class","svelte-18bhp9v"),f(w,"method","POST"),f(w,"class","text-gray-100"),f(e,"class","svelte-18bhp9v")},m(b,_){A(b,e,_),a(e,t),a(e,n),a(e,l),a(l,s),a(s,o),a(o,u),a(o,i),a(s,c),F&&F.m(s,null),a(s,g),me(v,s,null),a(e,E),a(e,w),a(w,D),me(M,D,null),a(D,B),a(D,Y),a(Y,W),a(e,k),a(e,q),H=!0,P||(G=X(Y,"click",r[3]),P=!0)},p(b,[_]){(!H||_&1)&&Te(i,b[0]),C!==(C=J(b))&&(F&&F.d(1),F=C&&C(b),F&&(F.c(),F.m(s,g)))},i(b){H||(Z(v.$$.fragment,b),Z(M.$$.fragment,b),H=!0)},o(b){z(v.$$.fragment,b),z(M.$$.fragment,b),H=!1},d(b){b&&d(e),F&&F.d(),he(v),he(M),P=!1,G()}}}function wt(r,e,t){let n,l,s,o,u;x(r,$,c=>t(4,n=c)),x(r,Ge,c=>t(5,l=c)),x(r,V,c=>t(0,s=c)),x(r,se,c=>t(1,o=c)),x(r,ae,c=>t(2,u=c));async function i(){for(let c=0;c<n.length;c++){const g=n[c];g.dttm=ee(g.dttm).format("YYYY-MM-DDTHH:mm:ssZ")}console.log(ue($)),await Ze(n),console.log("///////////////////////////"),l?await bt("/result"):console.error("Bad request, try it again!")}return[s,o,u,i]}class Tt extends ne{constructor(e){super();re(this,e,wt,Et,le,{})}}export{Tt as default};
