import{d as N,b9 as A,k as b,aB as I,C,bm as U,O as L,o as h,c as v,p as a,w as c,m as e,q as o,bi as V,z as M,a2 as x,a3 as g,F as Q,a as R,x as p,V as B}from"./index.1bb36a93.js";import{S as j}from"./sweetalert2.74fe64d4.js";import{u as q}from"./useCrudPermissionStore.472ae3dd.js";import{_ as E}from"./PreloadInterno.vue_vue_type_script_setup_true_lang.45fe2ba0.js";import{V as G}from"./VSelect.ff4ebc03.js";import{V as O}from"./VSpacer.c965114a.js";import{V as H}from"./VTextField.1b37a66e.js";import{V as _}from"./VBtn.22d55266.js";import{V as D}from"./VContainer.fea237fc.js";import{V as P}from"./VDivider.5fbe829f.js";import{V as J}from"./VTable.ef7fd960.js";import{V as K}from"./VPagination.37591e70.js";const W={class:"me-3",style:{width:"80px"}},X={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Y={style:{width:"10rem"}},Z=e("thead",null,[e("tr",null,[e("th",{scope:"col"}," Grupo "),e("th",{scope:"col"}," Nombre "),e("th",{scope:"col"}," Descripci\xF3n "),e("th",{scope:"col"}," Acciones ")])],-1),ee={colspan:"4"},te={class:"text-center",style:{width:"5rem"}},ae=e("tr",null,[e("td",{colspan:"7",class:"text-center"}," No se encuentran resultados ")],-1),le=[ae],se={class:"text-sm text-disabled"},xe=N({__name:"TableList",setup(oe){const n=q(),{permissions:d,totalPage:m,lastPage:k,currentPage:s,totalData:S,loading:y}=A(n),r=b(10),u=b(""),f=async()=>{await n.fetchAll({perPage:r.value,page:s.value,searchQuery:u.value})};I(async()=>{await f()}),C(s,async()=>{s.value>m.value&&(s.value=m.value)}),C(r,async()=>{s.value=1}),U([s,u,r],async()=>{await f()});const T=L(()=>{const i=d.value.length?(s.value-1)*m.value+1:0,t=d.value.length+(s.value-1)*m.value;return`Mostrando ${i} a ${t} de ${S.value} registros`}),w=async(i,t=null)=>{n.clearFormulario(),n.typeAction=i,t&&n.fetchInfoPermission(t)},$=async i=>{j.fire({title:"\xBFDesea eliminar el registro?",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Si",denyButtonText:"No"}).then(async t=>{t.isConfirmed?(await n.fetchDelete(i),await f()):t.isDenied})};return(i,t)=>(h(),v("div",null,[a(D,{fluid:"",class:"d-flex flex-wrap py-4 gap-4"},{default:c(()=>[e("div",W,[a(G,{modelValue:o(r),"onUpdate:modelValue":t[0]||(t[0]=l=>V(r)?r.value=l:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),a(O),e("div",X,[e("div",Y,[a(H,{modelValue:o(u),"onUpdate:modelValue":t[1]||(t[1]=l=>V(u)?u.value=l:null),placeholder:"Buscar",density:"compact"},null,8,["modelValue"])]),a(_,{color:"primary",onClick:t[2]||(t[2]=l=>w("form"))},{default:c(()=>[M(" Agregar ")]),_:1})])]),_:1}),a(P),a(J,{class:"text-no-wrap"},{default:c(()=>[Z,e("tbody",null,[x(e("tr",null,[e("td",ee,[a(E)])],512),[[g,o(y)]]),(h(!0),v(Q,null,R(o(d),(l,z)=>x((h(),v("tr",{key:z,style:{height:"3.75rem"}},[e("td",null,[e("span",null,p(l.group),1)]),e("td",null,[e("span",null,p(l.name),1)]),e("td",null,[e("span",null,p(l.description),1)]),e("td",te,[a(_,{size:"x-small",color:"error",variant:"text",onClick:F=>$(l.id)},{default:c(()=>[a(B,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"]),a(_,{icon:"",size:"x-small",color:"default",variant:"text",onClick:F=>w("form",l.id)},{default:c(()=>[a(B,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])])])),[[g,!o(y)]])),128))]),x(e("tfoot",null,le,512),[[g,!o(d).length]])]),_:1}),a(P),a(D,{fluid:"",class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:c(()=>[e("span",se,p(o(T)),1),a(K,{modelValue:o(s),"onUpdate:modelValue":t[3]||(t[3]=l=>V(s)?s.value=l:null),size:"small","total-visible":5,length:o(k)},null,8,["modelValue","length"])]),_:1})]))}});export{xe as _};