function g(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function et(t){return t&&typeof t=="object"&&typeof t.then=="function"}function J(t){return t()}function K(){return Object.create(null)}function k(t){t.forEach(J)}function Q(t){return typeof t=="function"}function nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function it(t){return Object.keys(t).length===0}function R(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t){let e;return R(t,n=>e=n)(),e}function $t(t,e,n){t.$$.on_destroy.push(R(e,n))}function Et(t,e,n,i){if(t){const c=U(t,e,n,i);return t[0](c)}}function U(t,e,n,i){return t[1]&&i?tt(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const o=[],s=Math.max(e.dirty.length,c.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|c[l];return o}return e.dirty|c}return e.dirty}function St(t,e,n,i,c,o){if(c){const s=U(e,n,i,o);t.p(s,c)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Nt(t,e,n){return t.set(n),e}function At(t){return t&&Q(t.destroy)?t.destroy:g}let S=!1;function ct(){S=!0}function rt(){S=!1}function st(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function ut(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&r.push(d)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let r=0;r<e.length;r++){const u=e[r].claim_order,d=(c>0&&e[n[c]].claim_order<=u?c+1:st(1,c,a=>e[n[a]].claim_order,u))-1;i[r]=n[d]+1;const _=d+1;n[_]=r,c=Math.max(_,c)}const o=[],s=[];let l=e.length-1;for(let r=n[c]+1;r!=0;r=i[r-1]){for(o.push(e[r-1]);l>=r;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<s.length;r++){for(;u<o.length&&s[r].claim_order>=o[u].claim_order;)u++;const d=u<o.length?o[u]:null;t.insertBefore(s[r],d)}}function lt(t,e){if(S){for(ut(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Mt(t,e,n){S&&!n?lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function at(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function Ct(){return B(" ")}function Tt(){return B("")}function qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Bt(t){return t===""?null:+t}function ft(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,i,c=!1){dt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const r=n(l);return r===void 0?t.splice(s,1):t[s]=r,c||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const r=n(l);return r===void 0?t.splice(s,1):t[s]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function _t(t,e,n,i){return V(t,c=>c.nodeName===e,c=>{const o=[];for(let s=0;s<c.attributes.length;s++){const l=c.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>c.removeAttribute(s))},()=>i(e))}function Lt(t,e,n){return _t(t,e,n,at)}function ht(t,e){return V(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Ot(t){return ht(t," ")}function It(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Dt(t,e){t.value=e==null?"":e}function Ft(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}let j;function y(t){j=t}function N(){if(!j)throw new Error("Function called outside component initialization");return j}function Ht(t){N().$$.on_mount.push(t)}function Pt(t){N().$$.after_update.push(t)}function Wt(t,e){N().$$.context.set(t,e)}const $=[],X=[],A=[],L=[],Y=Promise.resolve();let O=!1;function Z(){O||(O=!0,Y.then(H))}function Gt(){return Z(),Y}function I(t){A.push(t)}function Jt(t){L.push(t)}let D=!1;const F=new Set;function H(){if(!D){D=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];y(e),mt(e.$$)}for(y(null),$.length=0;X.length;)X.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];F.has(e)||(F.add(e),e())}A.length=0}while($.length);for(;L.length;)L.pop()();O=!1,D=!1,F.clear()}}function mt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const M=new Set;let x;function pt(){x={r:0,c:[],p:x}}function bt(){x.r||k(x.c),x=x.p}function P(t,e){t&&t.i&&(M.delete(t),t.i(e))}function yt(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),x.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Kt(t,e){const n=e.token={};function i(c,o,s,l){if(e.token!==n)return;e.resolved=l;let r=e.ctx;s!==void 0&&(r=r.slice(),r[s]=l);const u=c&&(e.current=c)(r);let d=!1;e.block&&(e.blocks?e.blocks.forEach((_,a)=>{a!==o&&_&&(pt(),yt(_,1,1,()=>{e.blocks[a]===_&&(e.blocks[a]=null)}),bt())}):e.block.d(1),u.c(),P(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[o]=u),d&&H()}if(et(t)){const c=N();if(t.then(o=>{y(c),i(e.then,1,e.value,o),y(null)},o=>{if(y(c),i(e.catch,2,e.error,o),y(null),!e.hasCatch)throw o}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Qt(t,e,n){const i=e.slice(),{resolved:c}=t;t.current===t.then&&(i[t.value]=c),t.current===t.catch&&(i[t.error]=c),t.block.p(i,n)}function Rt(t,e){t.d(1),e.delete(t.key)}function Ut(t,e,n,i,c,o,s,l,r,u,d,_){let a=t.length,m=o.length,h=a;const C={};for(;h--;)C[t[h].key]=h;const E=[],T=new Map,q=new Map;for(h=m;h--;){const f=_(c,o,h),p=n(f);let b=s.get(p);b?i&&b.p(f,e):(b=u(p,f),b.c()),T.set(p,E[h]=b),p in C&&q.set(p,Math.abs(h-C[p]))}const W=new Set,G=new Set;function z(f){P(f,1),f.m(l,d),s.set(f.key,f),d=f.first,m--}for(;a&&m;){const f=E[m-1],p=t[a-1],b=f.key,v=p.key;f===p?(d=f.first,a--,m--):T.has(v)?!s.has(b)||W.has(b)?z(f):G.has(v)?a--:q.get(b)>q.get(v)?(G.add(b),z(f)):(W.add(v),a--):(r(p,s),a--)}for(;a--;){const f=t[a];T.has(f.key)||r(f,s)}for(;m;)z(E[m-1]);return E}function Vt(t,e){const n={},i={},c={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=e[o];if(l){for(const r in s)r in l||(i[r]=1);for(const r in l)c[r]||(n[r]=l[r],c[r]=1);t[o]=l}else for(const r in s)c[r]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Xt(t){return typeof t=="object"&&t!==null?t:{}}function Yt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Zt(t){t&&t.c()}function te(t,e){t&&t.l(e)}function gt(t,e,n,i){const{fragment:c,on_mount:o,on_destroy:s,after_update:l}=t.$$;c&&c.m(e,n),i||I(()=>{const r=o.map(J).filter(Q);s?s.push(...r):k(r),t.$$.on_mount=[]}),l.forEach(I)}function xt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){t.$$.dirty[0]===-1&&($.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ee(t,e,n,i,c,o,s,l=[-1]){const r=j;y(t);const u=t.$$={fragment:null,ctx:null,props:o,update:g,not_equal:c,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:K(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(_,a,...m)=>{const h=m.length?m[0]:a;return u.ctx&&c(u.ctx[_],u.ctx[_]=h)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](h),d&&wt(t,_)),a}):[],u.update(),d=!0,k(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ct();const _=ft(e.target);u.fragment&&u.fragment.l(_),_.forEach(ot)}else u.fragment&&u.fragment.c();e.intro&&P(t.$$.fragment),gt(t,e.target,e.anchor,e.customElement),rt(),H()}y(r)}class ne{$destroy(){xt(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const w=[];function ie(t,e=g){let n;const i=new Set;function c(l){if(nt(t,l)&&(t=l,n)){const r=!w.length;for(const u of i)u[1](),w.push(u,t);if(r){for(let u=0;u<w.length;u+=2)w[u][0](w[u+1]);w.length=0}}}function o(l){c(l(t))}function s(l,r=g){const u=[l,r];return i.add(u),i.size===1&&(n=e(c)||g),l(t),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:c,update:o,subscribe:s}}export{Ht as A,tt as B,ie as C,Et as D,St as E,jt as F,vt as G,lt as H,g as I,kt as J,Gt as K,qt as L,k as M,$t as N,Nt as O,Kt as P,Qt as Q,X as R,ne as S,Ft as T,At as U,Ut as V,Rt as W,Yt as X,Dt as Y,Bt as Z,Jt as _,ft as a,zt as b,Lt as c,ot as d,at as e,Mt as f,ht as g,It as h,ee as i,Zt as j,Ct as k,Tt as l,te as m,Ot as n,gt as o,Vt as p,Xt as q,pt as r,nt as s,B as t,yt as u,xt as v,bt as w,P as x,Wt as y,Pt as z};
