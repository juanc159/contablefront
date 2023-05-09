import{Z as R,a7 as z,a8 as M,aa as N,ab as O,a0 as F,ad as U,ae as W,ag as q,aj as j,ah as H,al as J,am as Q,as as oe,a1 as B,R as w,p as r,W as X,Y,N as ue,Q as Z,P as de,O as k,X as K,C as ee,aA as ce,M as re,aB as ve,aC as fe,aD as me,aE as ge,aF as be,K as he,aG as ye,a5 as ke,$ as E,a9 as Ce,aH as Ie,at as Ve,aI as Be,ac as Se,aJ as Pe,ai as xe,ak as pe,aK as _e,ax as we,aL as $e,aM as Ge,af as De,a2 as Le,an as Te,ao as Ae,S as p,V as _,aN as Ee}from"./index.1bb36a93.js";const Re=R({name:"VBtnGroup",props:{divided:Boolean,...z(),...M(),...N(),...O(),...F(),...U(),...W()},setup(e,i){let{slots:a}=i;const{themeClasses:n}=q(e),{densityClasses:t}=j(e),{borderClasses:o}=H(e),{elevationClasses:f}=J(e),{roundedClasses:b}=Q(e);oe({VBtn:{height:"auto",color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),w(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,o.value,t.value,f.value,b.value]},a))}}),ze=X({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Me=X({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ne(e,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=Y("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const t=ue();Z(Symbol.for(`${i.description}:id`),t);const o=de(i,null);if(!o){if(!a)return o;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${i.description}`)}const f=B(e,"value"),b=k(()=>o.disabled.value||e.disabled);o.register({id:t,value:f,disabled:b},n),K(()=>{o.unregister(t)});const v=k(()=>o.isSelected(t)),I=k(()=>v.value&&[o.selectedClass.value,e.selectedClass]);return ee(v,y=>{n.emit("group:selected",{value:y})}),{id:t,isSelected:v,toggle:()=>o.select(t,!v.value),select:y=>o.select(t,y),selectedClass:I,value:f,disabled:b,group:o}}function Oe(e,i){let a=!1;const n=ce([]),t=re(e,"modelValue",[],l=>l==null?[]:ne(n,me(l)),l=>{const s=Ue(n,l);return e.multiple?s:s[0]}),o=Y("useGroup");function f(l,s){const d=l,u=Symbol.for(`${i.description}:id`),h=ge(u,o==null?void 0:o.vnode).indexOf(s);h>-1?n.splice(h,0,d):n.push(d)}function b(l){if(a)return;v();const s=n.findIndex(d=>d.id===l);n.splice(s,1)}function v(){const l=n.find(s=>!s.disabled);l&&e.mandatory==="force"&&!t.value.length&&(t.value=[l.id])}ve(()=>{v()}),K(()=>{a=!0});function I(l,s){const d=n.find(u=>u.id===l);if(!(s&&d!=null&&d.disabled))if(e.multiple){const u=t.value.slice(),m=u.findIndex(c=>c===l),h=~m;if(s=s!=null?s:!h,h&&e.mandatory&&u.length<=1||!h&&e.max!=null&&u.length+1>e.max)return;m<0&&s?u.push(l):m>=0&&!s&&u.splice(m,1),t.value=u}else{const u=t.value.includes(l);if(e.mandatory&&u)return;t.value=(s!=null?s:!u)?[l]:[]}}function y(l){if(e.multiple&&be('This method is not supported when using "multiple" prop'),t.value.length){const s=t.value[0],d=n.findIndex(h=>h.id===s);let u=(d+l)%n.length,m=n[u];for(;m.disabled&&u!==d;)u=(u+l)%n.length,m=n[u];if(m.disabled)return;t.value=[n[u].id]}else{const s=n.find(d=>!d.disabled);s&&(t.value=[s.id])}}const S={register:f,unregister:b,selected:t,select:I,disabled:B(e,"disabled"),prev:()=>y(n.length-1),next:()=>y(1),isSelected:l=>t.value.includes(l),selectedClass:k(()=>e.selectedClass),items:k(()=>n),getItemIndex:l=>Fe(n,l)};return Z(i,S),S}function Fe(e,i){const a=ne(e,[i]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function ne(e,i){const a=[];for(let n=0;n<e.length;n++){const t=e[n];t.value!=null?i.find(o=>fe(o,t.value))!=null&&a.push(t.id):i.includes(n)&&a.push(t.id)}return a}function Ue(e,i){const a=[];for(let n=0;n<e.length;n++){const t=e[n];i.includes(t.id)&&a.push(t.value!=null?t.value:n)}return a}const te=Symbol.for("vuetify:v-btn-toggle");he()({name:"VBtnToggle",props:ze(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const{isSelected:n,next:t,prev:o,select:f,selected:b}=Oe(e,te);return w(()=>{var v;return r(Re,{class:"v-btn-toggle"},{default:()=>[(v=a.default)==null?void 0:v.call(a,{isSelected:n,next:t,prev:o,select:f,selected:b})]})}),{next:t,prev:o,select:f}}});function We(e,i){ee(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&i&&ye(()=>{i(!0)})},{immediate:!0})}const je=R({name:"VBtn",directives:{Ripple:ke},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:te},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:E,appendIcon:E,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...z(),...O(),...M(),...Ce(),...N(),...Me(),...Ie(),...Ve(),...Be(),...Se(),...Pe(),...F({tag:"button"}),...U(),...W({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,i){let{attrs:a,slots:n}=i;const{themeClasses:t}=q(e),{borderClasses:o}=H(e),{colorClasses:f,colorStyles:b,variantClasses:v}=xe(e),{densityClasses:I}=j(e),{dimensionStyles:y}=pe(e),{elevationClasses:S}=J(e),{loaderClasses:l}=_e(e),{locationStyles:s}=we(e),{positionClasses:d}=$e(e),{roundedClasses:u}=Q(e),{sizeClasses:m,sizeStyles:h}=Ge(e),c=Ne(e,e.symbol,!1),C=De(e,a),ae=k(()=>{var V;return e.active!==!1&&(e.active||((V=C.isActive)==null?void 0:V.value)||(c==null?void 0:c.isSelected.value))}),P=k(()=>(c==null?void 0:c.disabled.value)||e.disabled),le=k(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border));return We(C,c==null?void 0:c.select),w(()=>{var V,$,G,D;const L=C.isLink.value?"a":e.tag,T=!c||c.isSelected.value,se=!!(e.prependIcon||n.prepend),ie=!!(e.appendIcon||n.append),A=!!(e.icon&&e.icon!==!0);return Le(r(L,{type:L==="a"?void 0:"button",class:["v-btn",c==null?void 0:c.selectedClass.value,{"v-btn--active":ae.value,"v-btn--block":e.block,"v-btn--disabled":P.value,"v-btn--elevated":le.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},t.value,o.value,T?f.value:void 0,I.value,S.value,l.value,d.value,u.value,m.value,v.value],style:[T?b.value:void 0,y.value,s.value,h.value],disabled:P.value||void 0,href:C.href.value,onClick:x=>{var g;P.value||((g=C.navigate)==null||g.call(C,x),c==null||c.toggle())}},{default:()=>{var x;return[Ae(!0,"v-btn"),!e.icon&&se&&r(p,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var g;return[r("span",{class:"v-btn__prepend"},[(g=(V=n.prepend)==null?void 0:V.call(n))!=null?g:r(_,null,null)])]}}),r("span",{class:"v-btn__content","data-no-activator":""},[r(p,{key:"content",defaults:{VIcon:{icon:A?e.icon:void 0}}},{default:()=>{var g;return[(g=($=n.default)==null?void 0:$.call(n))!=null?g:A&&r(_,{key:"icon"},null)]}})]),!e.icon&&ie&&r(p,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var g;return[r("span",{class:"v-btn__append"},[(g=(G=n.append)==null?void 0:G.call(n))!=null?g:r(_,null,null)])]}}),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[(x=(D=n.loader)==null?void 0:D.call(n))!=null?x:r(Ee,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Te("ripple"),!P.value&&e.ripple,null]])}),{}}});export{je as V,Me as a,Ne as b,ze as m,Oe as u};