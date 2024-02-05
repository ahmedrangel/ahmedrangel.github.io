import{_ as f}from"./nuxt-link.2AIs-nW4.js";import{I as v,l as k,t as i,M as _}from"./helpers.t4PeYWjH.js";import{u as w}from"./vue.f36acd1f._j7_XgAh.js";import{_ as m,o as h,c as u,b as c,w as p,a as t,t as r,u as e,z as N,C}from"./entry.tAuhsbTp.js";const $={data(){return{dark:v.dark,nav:"",lang:v.lang}},watch:{lang(s){k.setLanguage(s)}},mounted(){this.nav=this.$refs.nav;const s=()=>{document.body.scrollTop>10||document.documentElement.scrollTop>10||window.innerWidth<767?(this.scrolledDown=!0,this.nav.classList.add(this.dark?"nav-bg-dark":"nav-bg-light"),this.nav.classList.remove(this.dark?"nav-bg-light":"nav-bg-dark")):(this.scrolledDown=!1,this.nav.classList.remove("nav-bg-dark"),this.nav.classList.remove("nav-bg-light"))};window.onscroll=()=>{s()}},methods:{collapseNav(){this.$refs.collapsibleNav.classList.contains("show")&&this.$nuxt.$bootstrap.toogleCollapse(this.$refs.collapsibleNav)},toggleTheme(){this.dark=!this.dark,this.textColor="#12151c",this.nav.classList.add(this.dark&&this.scrolledDown?"nav-bg-dark":"nav-bg-light"),this.nav.classList.remove(!this.dark&&this.scrolledDown?"nav-bg-dark":"nav-bg-light"),w({bodyAttrs:{"data-bs-theme":this.dark?"dark":"light"}})}}},y={id:"navbar",ref:"nav",class:"navbar navbar-expand-lg px-4 py-2 fixed-top smart-scroll fw-bold"},L=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar"},[t("span",{class:"navbar-toggler-icon"})],-1),S={id:"collapsibleNavbar",ref:"collapsibleNav",class:"collapse navbar-collapse"},F={class:"navbar-nav ms-auto align-items-center"},I={class:"nav-item mx-3"},D={class:"nav-item mx-3"},O={class:"nav-item mx-3"},E={class:"nav-item mx-3"},M=["href"],T={class:"nav-item dropdown ms-2 me-1 text-center"},x={id:"navbardrop",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown"},B={class:"dropdown-menu",role:"button"},j={class:"nav-item align-self-center mx-2"},z={class:"form-check form-switch p-0 m-0"},V=t("span",{class:"slider"},null,-1),A=t("label",{class:"form-check-label",for:"flexSwitchCheckChecked"},null,-1);function H(s,a,b,g,d,n){const o=f;return h(),u("nav",y,[c(o,{class:"navbar-brand py-0",to:"/"},{default:p(()=>[t("span",null,r(("t"in s?s.t:e(i))("name_abreviated")),1)]),_:1}),L,t("div",S,[t("ul",F,[t("li",I,[c(o,{to:"/#about",onClick:a[0]||(a[0]=l=>n.collapseNav())},{default:p(()=>[t("span",null,r(("t"in s?s.t:e(i))("about")),1)]),_:1})]),t("li",D,[c(o,{to:"/#skills",onClick:a[1]||(a[1]=l=>n.collapseNav())},{default:p(()=>[t("span",null,r(("t"in s?s.t:e(i))("skills")),1)]),_:1})]),t("li",O,[c(o,{to:"/#projects",onClick:a[2]||(a[2]=l=>n.collapseNav())},{default:p(()=>[t("span",null,r(("t"in s?s.t:e(i))("projects")),1)]),_:1})]),t("li",E,[t("a",{href:d.lang==="es"?("INFO"in s?s.INFO:e(v)).resume.es:("INFO"in s?s.INFO:e(v)).resume.en,target:"_blank",onClick:a[3]||(a[3]=l=>n.collapseNav())},[t("span",null,r(("t"in s?s.t:e(i))("download_resume")),1)],8,M)]),t("li",T,[t("span",x,r(("t"in s?s.t:e(i))("lang").toUpperCase()),1),t("div",B,[t("span",{class:"dropdown-item",onClick:a[4]||(a[4]=l=>d.lang="es")},"ES"),t("span",{class:"dropdown-item",onClick:a[5]||(a[5]=l=>d.lang="en")},"EN")])]),t("li",j,[t("div",z,[t("input",{id:"flexSwitchCheckChecked",class:"form-check-input p-0 m-0",type:"checkbox",role:"button",style:N(`--bs-form-switch-bg: url(${("MoonSun"in s?s.MoonSun:e(_))(d.dark)})`),checked:"",onClick:a[6]||(a[6]=l=>n.toggleTheme())},null,4),V,A])])])],512)],512)}const U=m($,[["render",H]]),W={name:"SiteLayout"};function q(s,a,b,g,d,n){const o=U;return h(),u("div",null,[c(o),C(s.$slots,"default")])}const Q=m(W,[["render",q]]);export{Q as default};
