import{u as N,B as v,C as $,a as o,o as C,b as w,f as p,i as u,d as s,t,D as y,E as F,G as I,k as O,j as S,_ as E,H as j,J as B}from"./DVGOass6.js";import{l as m,t as r,I as g}from"./D8AJVrME.js";const D=()=>N("color-mode").value,M={id:"collapsibleNavbar",ref:"collapsibleNav",class:"collapse navbar-collapse"},V={class:"navbar-nav ms-auto align-items-center"},L={class:"nav-item mx-3"},T={class:"nav-item mx-3"},U={class:"nav-item mx-3"},z={class:"nav-item mx-3"},G=["href"],H={class:"nav-item dropdown ms-2 me-1 text-center"},J={id:"navbardrop",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown"},R={class:"dropdown-menu",role:"button"},W={class:"nav-item align-self-center mx-2"},q={class:"form-check form-switch p-0 m-0"},x={methods:{collapseNav(){this.$refs.collapsibleNav.classList.contains("show")&&this.$nuxt.$bootstrap.toogleCollapse(this.$refs.collapsibleNav)}}},A=Object.assign(x,{__name:"NavbarComp",setup(f){const i=N("lang"),l=D(),d=v(l.preference==="dark"),b=e=>{m.lang.set(e),i.value=e},_=v("nav"),k=v(!1),h=()=>{l.preference=l.preference==="dark"?"light":"dark",d.value=l.preference==="dark"};return $(()=>{m.lang.init(),i.value=m.lang.get(),d.value=l.preference==="dark";const e=()=>{k.value=document.body.scrollTop>10||document.documentElement.scrollTop>10||window.innerWidth<767};e(),window.onscroll=()=>e()}),(e,n)=>{const c=E;return o(i)?(C(),w("nav",{key:0,id:"navbar",ref_key:"nav",ref:_,class:O(["navbar navbar-expand-lg px-4 py-2 fixed-top smart-scroll fw-bold",o(k)?"nav-bg":""])},[p(c,{class:"navbar-brand py-0",to:"/"},{default:u(()=>[s("span",null,t(("t"in e?e.t:o(r))("name_abreviated")),1)]),_:1}),n[10]||(n[10]=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar"},[s("span",{class:"navbar-toggler-icon"})],-1)),s("div",M,[s("ul",V,[s("li",L,[p(c,{to:"/#about",onClick:n[0]||(n[0]=a=>e.collapseNav())},{default:u(()=>[s("span",null,t(("t"in e?e.t:o(r))("about")),1)]),_:1})]),s("li",T,[p(c,{to:"/#skills",onClick:n[1]||(n[1]=a=>e.collapseNav())},{default:u(()=>[s("span",null,t(("t"in e?e.t:o(r))("skills")),1)]),_:1})]),s("li",U,[p(c,{to:"/#projects",onClick:n[2]||(n[2]=a=>e.collapseNav())},{default:u(()=>[s("span",null,t(("t"in e?e.t:o(r))("projects")),1)]),_:1})]),s("li",z,[s("a",{href:o(i)==="es"?("INFO"in e?e.INFO:o(g)).resume.es:("INFO"in e?e.INFO:o(g)).resume.en,target:"_blank",onClick:n[3]||(n[3]=a=>e.collapseNav())},[s("span",null,t(("t"in e?e.t:o(r))("download_resume")),1)],8,G)]),s("li",H,[s("span",J,t(("t"in e?e.t:o(r))("lang").toUpperCase()),1),s("div",R,[s("span",{class:"dropdown-item",onClick:n[4]||(n[4]=a=>b("es"))},"ES"),s("span",{class:"dropdown-item",onClick:n[5]||(n[5]=a=>b("en"))},"EN")])]),s("li",W,[s("div",q,[y(s("input",{id:"flexSwitchCheckChecked","onUpdate:modelValue":n[6]||(n[6]=a=>I(d)?d.value=a:null),class:"form-check-input p-0 m-0 dark-mode-input",type:"checkbox",role:"button",onChange:n[7]||(n[7]=a=>h())},null,544),[[F,o(d)]]),n[8]||(n[8]=s("span",{class:"slider"},null,-1)),n[9]||(n[9]=s("label",{class:"form-check-label",for:"flexSwitchCheckChecked"},null,-1))])])])],512)],2)):S("",!0)}}}),K={},P={class:"overflow-hidden"};function Q(f,i){const l=A;return C(),w("div",P,[p(l),B(f.$slots,"default")])}const Z=j(K,[["render",Q]]);export{Z as default};