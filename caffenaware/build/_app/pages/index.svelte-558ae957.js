import{S as ye,i as ge,s as ke,e as c,t as F,k as x,c as f,a as _,g as B,d,n as I,b as n,f as le,H as r,J,K as fe,L as de,M as z,h as we,N as pe,I as he,O as Ee}from"../chunks/vendor-6ffb3963.js";class Oe{}function xe(l){let e=!1;const t=new Oe;if(l===null||typeof l=="undefined")return t.drink=l=1,t.isOverflowed=e,t;if(l>=10)return l=10,e=!0,t.drink=l,t.isOverflowed=e,t;if(l<=0)return t.drink=1,t.isOverflowed=e,t}class Ie{}function Le(l){let e=!1;const t=new Ie;return l===null?(t.drinkNum=l=1,t.isOverflowed=e,t):l>=10?(e=!0,t.drinkNum=l=10,t.isOverflowed=e,t):(e=!1,t.drinkNum=l=l,t.isOverflowed=e,t)}function Te(l){const e=[];for(let t=0;t<l;t++){const s="drink"+(t+1);e.push(s)}return console.log(e),e}function ne(l){const e=t=>{l&&typeof l.select=="function"&&l.select()};return l.addEventListener("focus",e),{destroy(){l.removeEventListener("focus",e)}}}function ae(l){const e=t=>{t.key==="Escape"&&l&&typeof l.blur=="function"&&l.blur()};return l.addEventListener("keydown",e),{destroy(){l.removeEventListener("keydown",e)}}}function me(l,e,t){const s=l.slice();return s[13]=e[t],s[15]=t,s}function Ue(l){let e,t;return{c(){e=c("p"),t=F("The drink number must be greater than 0! :)"),this.h()},l(s){e=f(s,"P",{class:!0});var a=_(e);t=B(a,"The drink number must be greater than 0! :)"),a.forEach(d),this.h()},h(){n(e,"class","maxWarning svelte-hm3wpp")},m(s,a){le(s,e,a),r(e,t)},d(s){s&&d(e)}}}function De(l){let e,t;return{c(){e=c("p"),t=F("You could calculate only 10 drinks at once! :)"),this.h()},l(s){e=f(s,"P",{class:!0});var a=_(e);t=B(a,"You could calculate only 10 drinks at once! :)"),a.forEach(d),this.h()},h(){n(e,"class","maxWarning svelte-hm3wpp")},m(s,a){le(s,e,a),r(e,t)},d(s){s&&d(e)}}}function _e(l){let e,t=l[15]+1+"",s,a,i,g,j,p,M,A,L,T,P,b,h,v,k,q,Q,H,U,S,K,D,R,V,N;return{c(){e=c("li"),s=F(t),a=F(` : list test
					
					`),i=c("label"),g=F(be),j=x(),p=c("input"),T=x(),P=c("label"),b=F(ve),h=x(),v=c("input"),H=x(),U=c("label"),S=F("Date time"),K=x(),D=c("input"),this.h()},l(w){e=f(w,"LI",{class:!0});var u=_(e);s=B(u,t),a=B(u,` : list test
					
					`),i=f(u,"LABEL",{});var W=_(i);g=B(W,be),W.forEach(d),j=I(u),p=f(u,"INPUT",{id:!0,type:!0,max:!0,min:!0,class:!0}),T=I(u),P=f(u,"LABEL",{});var X=_(P);b=B(X,ve),X.forEach(d),h=I(u),v=f(u,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),H=I(u),U=f(u,"LABEL",{});var Z=_(U);S=B(Z,"Date time"),Z.forEach(d),K=I(u),D=f(u,"INPUT",{id:!0,type:!0,class:!0}),u.forEach(d),this.h()},h(){n(p,"id",M=""+(l[13]+"-method")),n(p,"type","number"),n(p,"max","2"),n(p,"min","1"),p.value="1",p.required=!0,n(p,"class","text-gray-700 rounded-lg bg-primary"),n(v,"id",k=""+(l[13]+"-caffeine")),n(v,"type","number"),v.value="1",n(v,"min","1"),n(v,"max","1000"),v.required=!0,n(v,"class","text-gray-700 rounded-lg bg-primary"),n(D,"id",R=""+(l[13]+"-time")),n(D,"type","datetime-local"),D.required=!0,n(D,"class","bg-primary border-white text-gray-700 rounded-lg"),n(e,"class","drinkDetails m-3 svelte-hm3wpp")},m(w,u){le(w,e,u),r(e,s),r(e,a),r(e,i),r(i,g),r(e,j),r(e,p),r(e,T),r(e,P),r(P,b),r(e,h),r(e,v),r(e,H),r(e,U),r(U,S),r(e,K),r(e,D),V||(N=[J(A=ne.call(null,p)),J(L=ae.call(null,p)),J(q=ne.call(null,v)),J(Q=ae.call(null,v))],V=!0)},p(w,u){u&8&&M!==(M=""+(w[13]+"-method"))&&n(p,"id",M),u&8&&k!==(k=""+(w[13]+"-caffeine"))&&n(v,"id",k),u&8&&R!==(R=""+(w[13]+"-time"))&&n(D,"id",R)},d(w){w&&d(e),V=!1,fe(N)}}}function Ne(l){let e,t,s,a,i,g,j,p,M,A,L,T,P,b,h,v,k,q,Q,H,U,S,K,D,R,V,N,w,u,W,X;function Z(o,O){if(o[2])return De;if(o[1])return Ue}let Y=Z(l),E=Y&&Y(l),G=l[3],y=[];for(let o=0;o<G.length;o+=1)y[o]=_e(me(l,G,o));return{c(){e=c("main"),t=c("div"),s=x(),a=c("div"),i=c("div"),g=c("div"),j=F("How many bottles did you drink? : "),p=F(l[0]),M=x(),E&&E.c(),A=x(),L=c("form"),T=c("label"),P=F("Number of drinks"),b=x(),h=c("input"),v=x(),k=c("div"),q=c("button"),Q=F("+1 drink :)"),H=x(),U=c("button"),S=F("-1 drink :)"),K=x(),D=c("br"),R=x(),V=c("form"),N=c("ul");for(let o=0;o<y.length;o+=1)y[o].c();w=x(),u=c("input"),this.h()},l(o){e=f(o,"MAIN",{class:!0});var O=_(e);t=f(O,"DIV",{class:!0}),_(t).forEach(d),s=I(O),a=f(O,"DIV",{class:!0});var m=_(a);i=f(m,"DIV",{class:!0});var C=_(i);g=f(C,"DIV",{class:!0});var re=_(g);j=B(re,"How many bottles did you drink? : "),p=B(re,l[0]),re.forEach(d),M=I(C),E&&E.l(C),A=I(C),L=f(C,"FORM",{class:!0});var ee=_(L);T=f(ee,"LABEL",{for:!0,class:!0});var ue=_(T);P=B(ue,"Number of drinks"),ue.forEach(d),b=I(ee),h=f(ee,"INPUT",{type:!0,class:!0,placeholder:!0}),ee.forEach(d),v=I(C),k=f(C,"DIV",{class:!0});var $=_(k);q=f($,"BUTTON",{class:!0});var oe=_(q);Q=B(oe,"+1 drink :)"),oe.forEach(d),H=I($),U=f($,"BUTTON",{class:!0});var ie=_(U);S=B(ie,"-1 drink :)"),ie.forEach(d),K=I($),$.forEach(d),D=f(C,"BR",{}),C.forEach(d),m.forEach(d),R=I(O),V=f(O,"FORM",{action:!0,class:!0});var ce=_(V);N=f(ce,"UL",{class:!0});var te=_(N);for(let se=0;se<y.length;se+=1)y[se].l(te);w=I(te),u=f(te,"INPUT",{type:!0,class:!0}),te.forEach(d),ce.forEach(d),O.forEach(d),this.h()},h(){n(t,"class","backImage svelte-hm3wpp"),n(g,"class","countNum text-xl2 text-gray-100 svelte-hm3wpp"),n(T,"for","status"),n(T,"class","text-xl2 font-bold"),n(h,"type","number"),h.required=!0,n(h,"class","text-gray-700 rounded-md px-4 py-2"),n(h,"placeholder","Enter here !"),n(L,"class","firstForm m-4 text-gray-100 svelte-hm3wpp"),n(q,"class","countUp bg-primary rounded-lg text-center px-4 py-2 m-5 svelte-hm3wpp"),n(U,"class","countUp bg-primary rounded-lg text-center px-4 py-2 m-5 svelte-hm3wpp"),n(k,"class","flex flex-wrap justify-center items-baseline text-gray-700"),n(i,"class","flex flex-col justify-center"),n(a,"class","inputForm svelte-hm3wpp"),n(u,"type","submit"),n(u,"class","submit px-4 py-2 bg-primary border-white rounded-lg text-gray-700 svelte-hm3wpp"),u.value="Submit",n(N,"class","svelte-hm3wpp"),n(V,"action","submit"),n(V,"class","text-gray-100"),n(e,"class","svelte-hm3wpp")},m(o,O){le(o,e,O),r(e,t),r(e,s),r(e,a),r(a,i),r(i,g),r(g,j),r(g,p),r(i,M),E&&E.m(i,null),r(i,A),r(i,L),r(L,T),r(T,P),r(L,b),r(L,h),de(h,l[0]),r(i,v),r(i,k),r(k,q),r(q,Q),r(k,H),r(k,U),r(U,S),r(k,K),r(i,D),r(e,R),r(e,V),r(V,N);for(let m=0;m<y.length;m+=1)y[m].m(N,null);r(N,w),r(N,u),W||(X=[z(h,"input",l[8]),z(h,"keyup",l[4]),z(h,"blur",l[5]),J(ne.call(null,h)),J(ae.call(null,h)),z(L,"submit",l[5]),z(q,"click",l[9]),z(U,"click",l[10])],W=!0)},p(o,[O]){if(O&1&&we(p,o[0]),Y!==(Y=Z(o))&&(E&&E.d(1),E=Y&&Y(o),E&&(E.c(),E.m(i,A))),O&1&&pe(h.value)!==o[0]&&de(h,o[0]),O&8){G=o[3];let m;for(m=0;m<G.length;m+=1){const C=me(o,G,m);y[m]?y[m].p(C,O):(y[m]=_e(C),y[m].c(),y[m].m(N,w))}for(;m<y.length;m+=1)y[m].d(1);y.length=G.length}},i:he,o:he,d(o){o&&d(e),E&&E.d(),Ee(y,o),W=!1,fe(X)}}}let be="Method :",ve="Caffeine: ";function Ce(l,e,t){let s,a,i,g;function j(){let b=Le(s);t(0,s=b.drinkNum),t(2,a=b.isOverflowed)}function p(){let b=xe(s);t(0,s=b.drink),t(2,a=b.isOverflowed)}function M(b){return b>=10?(t(2,a=!0),t(0,s=10)):(t(2,a=!1),t(0,s++,s))}function A(b){return b<=1?(t(1,i=!0),t(0,s=1)):(t(1,i=!1),t(0,s-=1))}function L(){s=pe(this.value),t(0,s)}const T=()=>M(s),P=()=>A(s);return l.$$.update=()=>{l.$$.dirty&1&&t(3,g=Te(s))},t(0,s=1),t(2,a=!1),t(1,i=!1),[s,i,a,g,j,p,M,A,L,T,P]}class Be extends ye{constructor(e){super();ge(this,e,Ce,Ne,ke,{})}}export{Be as default};