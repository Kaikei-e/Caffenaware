import{C as de,J as fe,K as Fe,L as De,S as _e,i as me,s as pe,e as m,t as I,k as D,c as p,a as k,g as U,d as _,n as L,b as u,f as K,H as a,M as Z,I as H,N as he,O as G,P as J,Q as Se,l as oe,R as We,T as be,U as Ke,V as ie,h as ve,W as Ge,X as Je,Y as Qe,j as Le,m as Te,Z as Ie,o as Ue,_ as Oe,$ as Xe,x as Ce,u as Me,v as Pe}from"../chunks/vendor-2fb11313.js";import{d as ne,i as Ze}from"../chunks/formTypes-6ff21eac.js";const O=de(1),z=de(!1),ue=de(!1);function ze(){if(O===null){O.update(e=>e+1),z.set(!1);return}if(fe(O)>=10){z.set(!0),O.set(10);return}else z.set(!1)}function Ve(l){const e=t=>{l&&typeof l.select=="function"&&l.select()};return l.addEventListener("focus",e),{destroy(){l.removeEventListener("focus",e)}}}function je(l){const e=t=>{t.key==="Escape"&&l&&typeof l.blur=="function"&&l.blur()};return l.addEventListener("keydown",e),{destroy(){l.removeEventListener("keydown",e)}}}const Be="YYYY-MM-DDTHH:mm";let xe=new Date,ce;const $e=l=>ce=Fe(l).format(Be),et=l=>xe=Fe(l,Be).toDate();$e(xe);et(ce);function tt(){const l=fe(O);if(l===0)ne.update(e=>(e.push(Ze),e));else{const e={No:l,method:"1",caffeineMg:1,dttm:ce};ne.update(t=>(t.push(e),t))}return console.log(ce),console.log(fe(ne)),ne}function nt(){De(),ne.update(l=>(console.log(l.pop()),l.pop(),l))}function lt(l){let e,t,n,s,o,r,i,v,c,d,f;return{c(){e=m("div"),t=m("div"),n=m("button"),s=I("+1 drink :)"),o=D(),r=m("button"),i=I("-1 drink :)"),v=D(),c=m("br"),this.h()},l(E){e=p(E,"DIV",{});var T=k(e);t=p(T,"DIV",{class:!0});var C=k(t);n=p(C,"BUTTON",{class:!0});var g=k(n);s=U(g,"+1 drink :)"),g.forEach(_),o=L(C),r=p(C,"BUTTON",{class:!0});var P=k(r);i=U(P,"-1 drink :)"),P.forEach(_),C.forEach(_),v=L(T),c=p(T,"BR",{}),T.forEach(_),this.h()},h(){u(n,"class","countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md svelte-1jwc1he"),u(r,"class","countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md svelte-1jwc1he"),u(t,"class","flex flex-wrap justify-center items-baseline text-gray-700")},m(E,T){K(E,e,T),a(e,t),a(t,n),a(n,s),a(t,o),a(t,r),a(r,i),a(e,v),a(e,c),d||(f=[Z(n,"click",l[2]),Z(r,"click",l[3])],d=!0)},p:H,i:H,o:H,d(E){E&&_(e),d=!1,he(f)}}}function st(l,e,t){let n,s,o;G(l,O,d=>t(4,n=d)),G(l,ue,d=>t(5,s=d)),G(l,z,d=>t(6,o=d));function r(){return n>=10?(J(z,o=!0,o),J(O,n=10,n)):(J(z,o=!1,o),J(O,n+=1,n),tt())}function i(){return console.log(O),n<=1?(J(ue,s=!0,s),J(O,n=1,n)):(J(ue,s=!1,s),J(O,n-=1,n),nt())}return[r,i,()=>r(),()=>i()]}class rt extends _e{constructor(e){super();me(this,e,st,lt,pe,{})}}function Ye(l,e,t){const n=l.slice();return n[7]=e[t],n[8]=e,n[9]=t,n}function at(l){return{c:H,l:H,m:H,p:H,d:H}}function ot(l){let e=[],t=new Map,n,s=l[0];const o=r=>r[7].No;for(let r=0;r<s.length;r+=1){let i=Ye(l,s,r),v=o(i);t.set(v,e[r]=Ae(v,i))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();n=oe()},l(r){for(let i=0;i<e.length;i+=1)e[i].l(r);n=oe()},m(r,i){for(let v=0;v<e.length;v+=1)e[v].m(r,i);K(r,n,i)},p(r,i){i&1&&(s=r[0],e=Ge(e,i,o,1,r,s,t,n.parentNode,Je,Ae,n,Ye))},d(r){for(let i=0;i<e.length;i+=1)e[i].d(r);r&&_(n)}}}function Ae(l,e){let t,n=e[7].No+"",s,o,r,i,v,c,d,f=e[7].method+"",E,T,C,g,P,Y,Q,y,M,A,le,V=e[8],F=e[9],R,S,$,ee,j,w,se,B,h,N,W,q;const te=()=>e[2](y,V,F),X=()=>e[2](null,V,F),re=()=>e[3](B,V,F),ae=()=>e[3](null,V,F);return{key:l,first:null,c(){t=m("li"),s=I(n),o=I(` :
			`),r=m("label"),i=I(qe),v=D(),c=m("select"),d=m("option"),E=I(f),g=D(),P=m("label"),Y=I(He),Q=D(),y=m("input"),R=D(),S=m("label"),$=I("mg,"),ee=D(),j=m("label"),w=I("Date time:"),se=D(),B=m("input"),N=D(),this.h()},l(x){t=p(x,"LI",{class:!0});var b=k(t);s=U(b,n),o=U(b,` :
			`),r=p(b,"LABEL",{});var ke=k(r);i=U(ke,qe),ke.forEach(_),v=L(b),c=p(b,"SELECT",{id:!0,class:!0});var ge=k(c);d=p(ge,"OPTION",{});var ye=k(d);E=U(ye,f),ye.forEach(_),ge.forEach(_),g=L(b),P=p(b,"LABEL",{});var Ee=k(P);Y=U(Ee,He),Ee.forEach(_),Q=L(b),y=p(b,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),R=L(b),S=p(b,"LABEL",{});var we=k(S);$=U(we,"mg,"),we.forEach(_),ee=L(b),j=p(b,"LABEL",{});var Ne=k(j);w=U(Ne,"Date time:"),Ne.forEach(_),se=L(b),B=p(b,"INPUT",{id:!0,type:!0,class:!0}),N=L(b),b.forEach(_),this.h()},h(){d.__value=T=e[7].method,d.value=d.__value,u(c,"id",C=""+(e[7].No+"-method")),c.required=!0,u(c,"class","text-gray-700 rounded-lg bg-white"),u(y,"id",M=""+(e[7].No+"-caffeine")),u(y,"type","number"),y.value="1",u(y,"min","1"),u(y,"max","1000"),y.required=!0,u(y,"class","text-gray-700 rounded-lg bg-white"),u(B,"id",h=""+(e[7].No+"-time cal")),u(B,"type","datetime-local"),B.required=!0,u(B,"class","bg-white border-white text-gray-700 rounded-lg"),u(t,"class","drinkDetails m-3"),this.first=t},m(x,b){K(x,t,b),a(t,s),a(t,o),a(t,r),a(r,i),a(t,v),a(t,c),a(c,d),a(d,E),Ke(c,"1"),a(t,g),a(t,P),a(P,Y),a(t,Q),a(t,y),te(),a(t,R),a(t,S),a(S,$),a(t,ee),a(t,j),a(j,w),a(t,se),a(t,B),re(),a(t,N),W||(q=[ie(A=Ve.call(null,y)),ie(le=je.call(null,y))],W=!0)},p(x,b){e=x,b&1&&n!==(n=e[7].No+"")&&ve(s,n),b&1&&f!==(f=e[7].method+"")&&ve(E,f),b&1&&T!==(T=e[7].method)&&(d.__value=T,d.value=d.__value),b&1&&C!==(C=""+(e[7].No+"-method"))&&u(c,"id",C),b&1&&M!==(M=""+(e[7].No+"-caffeine"))&&u(y,"id",M),(V!==e[8]||F!==e[9])&&(X(),V=e[8],F=e[9],te()),b&1&&h!==(h=""+(e[7].No+"-time cal"))&&u(B,"id",h),(V!==e[8]||F!==e[9])&&(ae(),V=e[8],F=e[9],re())},d(x){x&&_(t),X(),ae(),W=!1,he(q)}}}function it(l){let e,t,n;return{c(){e=m("div"),t=m("p"),n=I("Loading....")},l(s){e=p(s,"DIV",{});var o=k(e);t=p(o,"P",{});var r=k(t);n=U(r,"Loading...."),r.forEach(_),o.forEach(_)},m(s,o){K(s,e,o),a(e,t),a(t,n)},p:H,d(s){s&&_(e)}}}function ut(l){let e,t={ctx:l,current:null,token:null,hasCatch:!1,pending:it,then:ot,catch:at};return Se(l[1](),t),{c(){e=oe(),t.block.c()},l(n){e=oe(),t.block.l(n)},m(n,s){K(n,e,s),t.block.m(n,t.anchor=s),t.mount=()=>e.parentNode,t.anchor=e},p(n,[s]){l=n,We(t,l,s)},i:H,o:H,d(n){n&&_(e),t.block.d(n),t.token=null,t=null}}}let qe="Method: ",He="Caffeine: ";function ct(l,e,t){let n,s;G(l,O,c=>t(5,s=c));let{dForms:o}=e;async function r(){n=!1,o.length===s&&(n=!0),n&&await n,await De()}function i(c,d,f){be[c?"unshift":"push"](()=>{d[f].caffeineMg=c,t(0,o)})}function v(c,d,f){be[c?"unshift":"push"](()=>{d[f].dttm=c,t(0,o)})}return l.$$set=c=>{"dForms"in c&&t(0,o=c.dForms)},n=!1,[o,r,i,v]}class dt extends _e{constructor(e){super();me(this,e,ct,ut,pe,{dForms:0})}}function ft(l){let e,t;return{c(){e=m("p"),t=I("The drink number must be greater than 0! :)"),this.h()},l(n){e=p(n,"P",{class:!0});var s=k(e);t=U(s,"The drink number must be greater than 0! :)"),s.forEach(_),this.h()},h(){u(e,"class","maxWarning svelte-40k0x3")},m(n,s){K(n,e,s),a(e,t)},d(n){n&&_(e)}}}function _t(l){let e,t;return{c(){e=m("p"),t=I("You could calculate only 10 drinks at once! :)"),this.h()},l(n){e=p(n,"P",{class:!0});var s=k(e);t=U(s,"You could calculate only 10 drinks at once! :)"),s.forEach(_),this.h()},h(){u(e,"class","maxWarning svelte-40k0x3")},m(n,s){K(n,e,s),a(e,t)},d(n){n&&_(e)}}}function mt(l){let e,t,n,s,o,r,i,v,c,d,f,E,T,C,g,P,Y,Q,y,M,A,le,V,F,R,S,$;function ee(h,N){if(h[2])return _t;if(h[3])return ft}let j=ee(l),w=j&&j(l);Y=new rt({});function se(h){l[7](h)}let B={};return l[0]!==void 0&&(B.dForms=l[0]),A=new dt({props:B}),be.push(()=>Qe(A,"dForms",se)),{c(){e=m("main"),t=m("div"),n=D(),s=m("div"),o=m("div"),r=m("div"),i=I("How many bottles did you drink? : "),v=I(l[1]),c=D(),w&&w.c(),d=D(),f=m("form"),E=m("label"),T=I("Number of drinks"),C=D(),g=m("input"),P=D(),Le(Y.$$.fragment),Q=D(),y=m("form"),M=m("ul"),Le(A.$$.fragment),V=D(),F=m("input"),this.h()},l(h){e=p(h,"MAIN",{class:!0});var N=k(e);t=p(N,"DIV",{class:!0}),k(t).forEach(_),n=L(N),s=p(N,"DIV",{class:!0});var W=k(s);o=p(W,"DIV",{class:!0});var q=k(o);r=p(q,"DIV",{class:!0});var te=k(r);i=U(te,"How many bottles did you drink? : "),v=U(te,l[1]),te.forEach(_),c=L(q),w&&w.l(q),d=L(q),f=p(q,"FORM",{class:!0});var X=k(f);E=p(X,"LABEL",{for:!0,class:!0});var re=k(E);T=U(re,"Number of drinks"),re.forEach(_),C=L(X),g=p(X,"INPUT",{type:!0,class:!0,placeholder:!0}),X.forEach(_),P=L(q),Te(Y.$$.fragment,q),q.forEach(_),W.forEach(_),Q=L(N),y=p(N,"FORM",{action:!0,class:!0});var ae=k(y);M=p(ae,"UL",{class:!0});var x=k(M);Te(A.$$.fragment,x),V=L(x),F=p(x,"INPUT",{type:!0,class:!0}),x.forEach(_),ae.forEach(_),N.forEach(_),this.h()},h(){u(t,"class","backImage svelte-40k0x3"),u(r,"class","countNum text-xl2 text-gray-100 svelte-40k0x3"),u(E,"for","status"),u(E,"class","text-xl font-bold"),u(g,"type","number"),g.required=!0,u(g,"class","text-gray-700 rounded-md px-4 py-2"),u(g,"placeholder","Enter here !"),u(f,"class","firstForm m-4 text-gray-100 svelte-40k0x3"),u(o,"class","flex flex-col justify-center"),u(s,"class","inputForm svelte-40k0x3"),u(F,"type","submit"),u(F,"class","submit px-4 py-2 bg-primary border-white rounded-lg text-gray-700 svelte-40k0x3"),F.value="Submit",u(M,"class","svelte-40k0x3"),u(y,"action","result"),u(y,"class","text-gray-100"),u(e,"class","svelte-40k0x3")},m(h,N){K(h,e,N),a(e,t),a(e,n),a(e,s),a(s,o),a(o,r),a(r,i),a(r,v),a(o,c),w&&w.m(o,null),a(o,d),a(o,f),a(f,E),a(E,T),a(f,C),a(f,g),Ie(g,l[1]),a(o,P),Ue(Y,o,null),a(e,Q),a(e,y),a(y,M),Ue(A,M,null),a(M,V),a(M,F),R=!0,S||($=[Z(g,"input",l[6]),Z(g,"keyup",l[4]),Z(g,"blur",Re),ie(Ve.call(null,g)),ie(je.call(null,g)),Z(f,"submit",Re),Z(F,"submit",pt)],S=!0)},p(h,[N]){(!R||N&2)&&ve(v,h[1]),j!==(j=ee(h))&&(w&&w.d(1),w=j&&j(h),w&&(w.c(),w.m(o,d))),N&2&&Oe(g.value)!==h[1]&&Ie(g,h[1]);const W={};!le&&N&1&&(le=!0,W.dForms=h[0],Xe(()=>le=!1)),A.$set(W)},i(h){R||(Ce(Y.$$.fragment,h),Ce(A.$$.fragment,h),R=!0)},o(h){Me(Y.$$.fragment,h),Me(A.$$.fragment,h),R=!1},d(h){h&&_(e),w&&w.d(),Pe(Y),Pe(A),S=!1,he($)}}}function Re(){}function pt(l){const e=new FormData(l.target),t={};e.forEach((n,s)=>{t[s]=n}),console.log(t)}function ht(l,e,t){let n,s,o,r,i;G(l,ne,f=>t(5,s=f)),G(l,O,f=>t(1,o=f)),G(l,z,f=>t(2,r=f)),G(l,ue,f=>t(3,i=f));function v(){ze()}function c(){o=Oe(this.value),O.set(o)}function d(f){n=f,t(0,n),t(5,s)}return l.$$.update=()=>{l.$$.dirty&32&&t(0,n=s)},[n,o,r,i,v,s,c,d]}class kt extends _e{constructor(e){super();me(this,e,ht,mt,pe,{})}}export{kt as default};