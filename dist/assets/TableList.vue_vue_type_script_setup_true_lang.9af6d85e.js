import{d as I,E,t as M,b9 as U,k as f,aB as L,C as B,bm as Q,O as j,o as v,c as _,p as a,w as c,m as e,q as o,bi as g,z as q,a2 as x,a3 as y,F as O,a as G,x as m,V as S}from"./index.1bb36a93.js";import{S as H}from"./sweetalert2.74fe64d4.js";import{u as J}from"./useCrudCashReceiptConfigurationStore.4291b69c.js";import{_ as K}from"./PreloadInterno.vue_vue_type_script_setup_true_lang.45fe2ba0.js";import{V as W}from"./VSelect.ff4ebc03.js";import{V as X}from"./VSpacer.c965114a.js";import{V as Y}from"./VTextField.1b37a66e.js";import{V}from"./VBtn.22d55266.js";import{V as k}from"./VContainer.fea237fc.js";import{V as T}from"./VDivider.5fbe829f.js";import{V as Z}from"./VTable.ef7fd960.js";import{V as ee}from"./VPagination.37591e70.js";const te={class:"me-3",style:{width:"80px"}},ae={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},le={style:{width:"10rem"}},ne=e("thead",null,[e("tr",null,[e("th",null,[e("span",null,"C\xF3digo")]),e("th",null,[e("span",null,"Descripci\xF3n Interna")]),e("th",null,[e("span",null,"T\xEDtulo del comprobante")]),e("th",{scope:"col"}," Acciones ")])],-1),oe={colspan:"4"},se={class:"text-center",style:{width:"5rem"}},ie=e("tr",null,[e("td",{colspan:"7",class:"text-center"}," No se encuentran resultados ")],-1),re=[ie],ce={class:"text-sm text-disabled"},Ce=I({__name:"TableList",setup(ue){const A=E();M();const s=J(),{cashReceiptConfigurations:d,totalPage:p,lastPage:F,currentPage:n,totalData:P,loading:w}=U(s),i=f(10),u=f(""),C=f("desc"),b=f("id"),h=async()=>{await s.fetchAll({perPage:i.value,page:n.value,searchQuery:u.value,sort_direction:C.value,sort_field:b.value,company_id:A.company.id})};L(async()=>{s.typeAction!="back"&&await h()}),B(n,async()=>{n.value>p.value&&(n.value=p.value)}),B(i,async()=>{n.value=1}),Q([n,u,i,C,b],async()=>{await h()});const $=j(()=>{const r=d.value.length?(n.value-1)*p.value+1:0,t=d.value.length+(n.value-1)*p.value;return`Mostrando ${r} a ${t} de ${P.value} registros`}),D=async(r,t=null)=>{s.clearFormulario(),s.typeAction=r,t&&s.fetchInfo(t)},z=async r=>{H.fire({title:"\xBFDesea eliminar el registro?",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Si",denyButtonText:"No"}).then(async t=>{t.isConfirmed?(await s.fetchDelete(r),await h()):t.isDenied})};return(r,t)=>(v(),_("div",null,[a(k,{fluid:"",class:"d-flex flex-wrap py-4 gap-4"},{default:c(()=>[e("div",te,[a(W,{modelValue:o(i),"onUpdate:modelValue":t[0]||(t[0]=l=>g(i)?i.value=l:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),a(X),e("div",ae,[e("div",le,[a(Y,{modelValue:o(u),"onUpdate:modelValue":t[1]||(t[1]=l=>g(u)?u.value=l:null),placeholder:"Buscar",density:"compact"},null,8,["modelValue"])]),a(V,{color:"primary",onClick:t[2]||(t[2]=l=>D("form"))},{default:c(()=>[q(" Agregar ")]),_:1})])]),_:1}),a(T),a(Z,{class:"text-no-wrap"},{default:c(()=>[ne,e("tbody",null,[x(e("tr",null,[e("td",oe,[a(K)])],512),[[y,o(w)]]),(v(!0),_(O,null,G(o(d),(l,N)=>x((v(),_("tr",{key:N,style:{height:"3.75rem"}},[e("td",null,[e("span",null,m(l.code),1)]),e("td",null,[e("span",null,m(l.description),1)]),e("td",null,[e("span",null,m(l.title),1)]),e("td",se,[a(V,{size:"x-small",color:"error",variant:"text",onClick:R=>z(l.id)},{default:c(()=>[a(S,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"]),a(V,{icon:"",size:"x-small",color:"default",variant:"text",onClick:R=>D("form",l.id)},{default:c(()=>[a(S,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])])])),[[y,!o(w)]])),128))]),x(e("tfoot",null,re,512),[[y,!o(d).length]])]),_:1}),a(T),a(k,{fluid:"",class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:c(()=>[e("span",ce,m(o($)),1),a(ee,{modelValue:o(n),"onUpdate:modelValue":t[3]||(t[3]=l=>g(n)?n.value=l:null),size:"small","total-visible":5,length:o(F)},null,8,["modelValue","length"])]),_:1})]))}});export{Ce as _};