import{C as ce,J as Ee,S as me,i as he,s as pe,e as m,t as O,k as D,c as h,a as k,g as C,d,n as T,b as u,f as ne,H as r,K as se,I as ue,L as ve,M as X,N as K,O as xe,P as de,h as fe,l as Ne,Q as Re,R as Se,T as be,U as He,j as we,m as Fe,V as Le,o as De,W as Te,X as We,x as Ue,u as Ie,v as Oe}from"../chunks/vendor-f32fb803.js";const P=ce(1),z=ce(!1),_e=ce(!1);function Ke(){if(P===null){P.update(e=>e+1),z.set(!1);return}if(Ee(P)>=10){z.set(!0),P.set(10);return}else z.set(!1)}function Ce(n){const e=t=>{n&&typeof n.select=="function"&&n.select()};return n.addEventListener("focus",e),{destroy(){n.removeEventListener("focus",e)}}}function Me(n){const e=t=>{t.key==="Escape"&&n&&typeof n.blur=="function"&&n.blur()};return n.addEventListener("keydown",e),{destroy(){n.removeEventListener("keydown",e)}}}const Pe={No:0,caffeineMg:1,method:"1",dttm:new Date},Ye=[],re=ce(Ye);re.update(n=>(n.push(Pe),n));function Ge(){const n=Ee(P);if(n===0)re.update(e=>(e.push(Pe),e));else{const e={No:n,method:"1",caffeineMg:1,dttm:new Date};re.update(t=>(t.push(e),t))}return console.log(re),re}function Je(n){let e,t,l,a,i,s,o,v,y,f,_;return{c(){e=m("div"),t=m("div"),l=m("button"),a=O("+1 drink :)"),i=D(),s=m("button"),o=O("-1 drink :)"),v=D(),y=m("br"),this.h()},l(N){e=h(N,"DIV",{});var I=k(e);t=h(I,"DIV",{class:!0});var M=k(t);l=h(M,"BUTTON",{class:!0});var g=k(l);a=C(g,"+1 drink :)"),g.forEach(d),i=T(M),s=h(M,"BUTTON",{class:!0});var B=k(s);o=C(B,"-1 drink :)"),B.forEach(d),M.forEach(d),v=T(I),y=h(I,"BR",{}),I.forEach(d),this.h()},h(){u(l,"class","countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md svelte-1jwc1he"),u(s,"class","countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md svelte-1jwc1he"),u(t,"class","flex flex-wrap justify-center items-baseline text-gray-700")},m(N,I){ne(N,e,I),r(e,t),r(t,l),r(l,a),r(t,i),r(t,s),r(s,o),r(e,v),r(e,y),f||(_=[se(l,"click",n[2]),se(s,"click",n[3])],f=!0)},p:ue,i:ue,o:ue,d(N){N&&d(e),f=!1,ve(_)}}}function Qe(n,e,t){let l,a,i;X(n,P,f=>t(4,l=f)),X(n,_e,f=>t(5,a=f)),X(n,z,f=>t(6,i=f));function s(){return l>=10?(K(z,i=!0,i),K(P,l=10,l)):(K(z,i=!1,i),K(P,l+=1,l),Ge())}function o(){return console.log(P),l<=1?(K(_e,a=!0,a),K(P,l=1,l)):(K(_e,a=!1,a),K(P,l-=1,l))}return[s,o,()=>s(),()=>o()]}class Xe extends me{constructor(e){super();he(this,e,Qe,Je,pe,{})}}function Be(n,e,t){const l=n.slice();return l[3]=e[t],l[4]=e,l[5]=t,l}function Ve(n,e){let t,l=e[3].No+"",a,i,s,o,v,y,f,_=e[3].method+"",N,I,M,g,B,j,Y,b,q,Z,ae,F=e[4],w=e[5],G,S,x,R,H,$,ee,U,E,oe,te,p;const L=()=>e[1](b,F,w),W=()=>e[1](null,F,w),A=()=>e[2](U,F,w),le=()=>e[2](null,F,w);return{key:n,first:null,c(){t=m("li"),a=O(l),i=O(` :
		`),s=m("label"),o=O(je),v=D(),y=m("select"),f=m("option"),N=O(_),g=D(),B=m("label"),j=O(Ae),Y=D(),b=m("input"),G=D(),S=m("label"),x=O("mg,"),R=D(),H=m("label"),$=O("Date time:"),ee=D(),U=m("input"),oe=D(),this.h()},l(V){t=h(V,"LI",{class:!0});var c=k(t);a=C(c,l),i=C(c,` :
		`),s=h(c,"LABEL",{});var J=k(s);o=C(J,je),J.forEach(d),v=T(c),y=h(c,"SELECT",{id:!0,class:!0});var ie=k(y);f=h(ie,"OPTION",{});var Q=k(f);N=C(Q,_),Q.forEach(d),ie.forEach(d),g=T(c),B=h(c,"LABEL",{});var ke=k(B);j=C(ke,Ae),ke.forEach(d),Y=T(c),b=h(c,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),G=T(c),S=h(c,"LABEL",{});var ge=k(S);x=C(ge,"mg,"),ge.forEach(d),R=T(c),H=h(c,"LABEL",{});var ye=k(H);$=C(ye,"Date time:"),ye.forEach(d),ee=T(c),U=h(c,"INPUT",{id:!0,type:!0,class:!0}),oe=T(c),c.forEach(d),this.h()},h(){f.__value=I=e[3].method,f.value=f.__value,u(y,"id",M=""+(e[3].No+"-method")),y.required=!0,u(y,"class","text-gray-700 rounded-lg bg-white"),u(b,"id",q=""+(e[3].No+"-caffeine")),u(b,"type","number"),b.value="1",u(b,"min","1"),u(b,"max","1000"),b.required=!0,u(b,"class","text-gray-700 rounded-lg bg-white"),u(U,"id",E=""+(e[3].No+"-time")),u(U,"type","datetime-local"),U.required=!0,u(U,"class","bg-white border-white text-gray-700 rounded-lg"),u(t,"class","drinkDetails m-3"),this.first=t},m(V,c){ne(V,t,c),r(t,a),r(t,i),r(t,s),r(s,o),r(t,v),r(t,y),r(y,f),r(f,N),xe(y,"1"),r(t,g),r(t,B),r(B,j),r(t,Y),r(t,b),L(),r(t,G),r(t,S),r(S,x),r(t,R),r(t,H),r(H,$),r(t,ee),r(t,U),A(),r(t,oe),te||(p=[de(Z=Ce.call(null,b)),de(ae=Me.call(null,b))],te=!0)},p(V,c){e=V,c&1&&l!==(l=e[3].No+"")&&fe(a,l),c&1&&_!==(_=e[3].method+"")&&fe(N,_),c&1&&I!==(I=e[3].method)&&(f.__value=I,f.value=f.__value),c&1&&M!==(M=""+(e[3].No+"-method"))&&u(y,"id",M),c&1&&q!==(q=""+(e[3].No+"-caffeine"))&&u(b,"id",q),(F!==e[4]||w!==e[5])&&(W(),F=e[4],w=e[5],L()),c&1&&E!==(E=""+(e[3].No+"-time"))&&u(U,"id",E),(F!==e[4]||w!==e[5])&&(le(),F=e[4],w=e[5],A())},d(V){V&&d(t),W(),le(),te=!1,ve(p)}}}function ze(n){let e=[],t=new Map,l,a=n[0];const i=s=>s[3].No;for(let s=0;s<a.length;s+=1){let o=Be(n,a,s),v=i(o);t.set(v,e[s]=Ve(v,o))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();l=Ne()},l(s){for(let o=0;o<e.length;o+=1)e[o].l(s);l=Ne()},m(s,o){for(let v=0;v<e.length;v+=1)e[v].m(s,o);ne(s,l,o)},p(s,[o]){o&1&&(a=s[0],e=Re(e,o,i,1,s,a,t,l.parentNode,Se,Ve,l,Be))},i:ue,o:ue,d(s){for(let o=0;o<e.length;o+=1)e[o].d(s);s&&d(l)}}}let je="Method: ",Ae="Caffeine: ";function Ze(n,e,t){let{dForms:l}=e;function a(s,o,v){be[s?"unshift":"push"](()=>{o[v].caffeineMg=s,t(0,l)})}function i(s,o,v){be[s?"unshift":"push"](()=>{o[v].dttm=s,t(0,l)})}return n.$$set=s=>{"dForms"in s&&t(0,l=s.dForms)},[l,a,i]}class $e extends me{constructor(e){super();he(this,e,Ze,ze,pe,{dForms:0})}}function et(n){let e,t;return{c(){e=m("p"),t=O("The drink number must be greater than 0! :)"),this.h()},l(l){e=h(l,"P",{class:!0});var a=k(e);t=C(a,"The drink number must be greater than 0! :)"),a.forEach(d),this.h()},h(){u(e,"class","maxWarning svelte-40k0x3")},m(l,a){ne(l,e,a),r(e,t)},d(l){l&&d(e)}}}function tt(n){let e,t;return{c(){e=m("p"),t=O("You could calculate only 10 drinks at once! :)"),this.h()},l(l){e=h(l,"P",{class:!0});var a=k(e);t=C(a,"You could calculate only 10 drinks at once! :)"),a.forEach(d),this.h()},h(){u(e,"class","maxWarning svelte-40k0x3")},m(l,a){ne(l,e,a),r(e,t)},d(l){l&&d(e)}}}function lt(n){let e,t,l,a,i,s,o,v,y,f,_,N,I,M,g,B,j,Y,b,q,Z,ae,F,w,G,S,x,R,H,$;function ee(p,L){if(p[2])return tt;if(p[3])return et}let U=ee(n),E=U&&U(n);j=new Xe({});function oe(p){n[7](p)}let te={};return n[0]!==void 0&&(te.dForms=n[0]),w=new $e({props:te}),be.push(()=>He(w,"dForms",oe)),{c(){e=m("main"),t=m("div"),l=D(),a=m("div"),i=m("div"),s=m("div"),o=O("How many bottles did you drink? : "),v=O(n[1]),y=D(),E&&E.c(),f=D(),_=m("form"),N=m("label"),I=O("Number of drinks"),M=D(),g=m("input"),B=D(),we(j.$$.fragment),Y=D(),b=m("form"),q=m("p"),Z=O(n[0]),ae=D(),F=m("ul"),we(w.$$.fragment),S=D(),x=m("input"),this.h()},l(p){e=h(p,"MAIN",{class:!0});var L=k(e);t=h(L,"DIV",{class:!0}),k(t).forEach(d),l=T(L),a=h(L,"DIV",{class:!0});var W=k(a);i=h(W,"DIV",{class:!0});var A=k(i);s=h(A,"DIV",{class:!0});var le=k(s);o=C(le,"How many bottles did you drink? : "),v=C(le,n[1]),le.forEach(d),y=T(A),E&&E.l(A),f=T(A),_=h(A,"FORM",{class:!0});var V=k(_);N=h(V,"LABEL",{for:!0,class:!0});var c=k(N);I=C(c,"Number of drinks"),c.forEach(d),M=T(V),g=h(V,"INPUT",{type:!0,class:!0,placeholder:!0}),V.forEach(d),B=T(A),Fe(j.$$.fragment,A),A.forEach(d),W.forEach(d),Y=T(L),b=h(L,"FORM",{action:!0,class:!0});var J=k(b);q=h(J,"P",{});var ie=k(q);Z=C(ie,n[0]),ie.forEach(d),ae=T(J),F=h(J,"UL",{class:!0});var Q=k(F);Fe(w.$$.fragment,Q),S=T(Q),x=h(Q,"INPUT",{type:!0,class:!0}),Q.forEach(d),J.forEach(d),L.forEach(d),this.h()},h(){u(t,"class","backImage svelte-40k0x3"),u(s,"class","countNum text-xl2 text-gray-100 svelte-40k0x3"),u(N,"for","status"),u(N,"class","text-xl font-bold"),u(g,"type","number"),g.required=!0,u(g,"class","text-gray-700 rounded-md px-4 py-2"),u(g,"placeholder","Enter here !"),u(_,"class","firstForm m-4 text-gray-100 svelte-40k0x3"),u(i,"class","flex flex-col justify-center"),u(a,"class","inputForm svelte-40k0x3"),u(x,"type","submit"),u(x,"class","submit px-4 py-2 bg-primary border-white rounded-lg text-gray-700 svelte-40k0x3"),x.value="Submit",u(F,"class","svelte-40k0x3"),u(b,"action","submit"),u(b,"class","text-gray-100"),u(e,"class","svelte-40k0x3")},m(p,L){ne(p,e,L),r(e,t),r(e,l),r(e,a),r(a,i),r(i,s),r(s,o),r(s,v),r(i,y),E&&E.m(i,null),r(i,f),r(i,_),r(_,N),r(N,I),r(_,M),r(_,g),Le(g,n[1]),r(i,B),De(j,i,null),r(e,Y),r(e,b),r(b,q),r(q,Z),r(b,ae),r(b,F),De(w,F,null),r(F,S),r(F,x),R=!0,H||($=[se(g,"input",n[6]),se(g,"keyup",n[4]),se(g,"blur",qe),de(Ce.call(null,g)),de(Me.call(null,g)),se(_,"submit",qe)],H=!0)},p(p,[L]){(!R||L&2)&&fe(v,p[1]),U!==(U=ee(p))&&(E&&E.d(1),E=U&&U(p),E&&(E.c(),E.m(i,f))),L&2&&Te(g.value)!==p[1]&&Le(g,p[1]),(!R||L&1)&&fe(Z,p[0]);const W={};!G&&L&1&&(G=!0,W.dForms=p[0],We(()=>G=!1)),w.$set(W)},i(p){R||(Ue(j.$$.fragment,p),Ue(w.$$.fragment,p),R=!0)},o(p){Ie(j.$$.fragment,p),Ie(w.$$.fragment,p),R=!1},d(p){p&&d(e),E&&E.d(),Oe(j),Oe(w),H=!1,ve($)}}}function qe(){}function nt(n,e,t){let l,a,i,s,o;X(n,re,_=>t(5,a=_)),X(n,P,_=>t(1,i=_)),X(n,z,_=>t(2,s=_)),X(n,_e,_=>t(3,o=_));function v(){Ke()}function y(){i=Te(this.value),P.set(i)}function f(_){l=_,t(0,l),t(5,a)}return n.$$.update=()=>{n.$$.dirty&32&&t(0,l=a)},[l,i,s,o,v,a,y,f]}class rt extends me{constructor(e){super();he(this,e,nt,lt,pe,{})}}export{rt as default};
