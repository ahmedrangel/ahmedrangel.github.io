import{_ as g}from"./nuxt-link.7c302ea7.js";import{I as h,l as f,t as i,M as k}from"./helpers.fdb49851.js";import{_ as m,u as w,o as u,c as _,b as c,w as v,a as s,t as r,f as l,v as x,z as L}from"./entry.81699c81.js";const $={data(){return{dark:h.dark,nav:"",lang:h.lang}},watch:{lang(t){f.setLanguage(t)}},mounted(){if(this.nav=this.$refs.nav,this.nav){let a=0;window.addEventListener("scroll",()=>{const e=window.pageYOffset||document.documentElement.scrollTop;e<a?(this.nav.classList.remove("scrolled-down"),this.nav.classList.add("scrolled-up")):(this.nav.classList.remove("scrolled-up"),this.nav.classList.add("scrolled-down")),a=e})}const t=()=>{document.body.scrollTop>10||document.documentElement.scrollTop>10||window.innerWidth<767?(this.scrolledDown=!0,this.nav.classList.add(this.dark?"nav-bg-dark":"nav-bg-light"),this.nav.classList.remove(this.dark?"nav-bg-light":"nav-bg-dark")):(this.scrolledDown=!1,this.nav.classList.remove("nav-bg-dark"),this.nav.classList.remove("nav-bg-light"))};window.onscroll=()=>{t()}},methods:{collapseNav(){this.nav.classList.contains("show")&&this.$nuxt.$bootstrap.toogleCollapse(nav)},toggleTheme(){this.dark=!this.dark,this.textColor="#12151c",this.nav.classList.add(this.dark&&this.scrolledDown?"nav-bg-dark":"nav-bg-light"),this.nav.classList.remove(!this.dark&&this.scrolledDown?"nav-bg-dark":"nav-bg-light"),w({bodyAttrs:{"data-bs-theme":this.dark?"dark":"light"}})}}},y={id:"navbar",ref:"nav",class:"navbar navbar-expand-md px-4 py-3 fixed-top smart-scroll text-color fw-bold"},C={class:"m-0 text-primary"},S=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar"},[s("span",{class:"navbar-toggler-icon"})],-1),N={id:"collapsibleNavbar",class:"collapse navbar-collapse"},E={class:"navbar-nav ms-auto align-items-center"},D={class:"nav-item"},T={class:"m-0 text-primary"},M={class:"nav-item dropdown mx-2 text-center"},B={id:"navbardrop",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown"},z={class:"dropdown-menu text-decoration-none",role:"button"},F={class:"nav-item align-self-center"},I={class:"form-check form-switch d-flex justify-content-center align-items-center pe-auto p-0 m-0"},O=s("span",{class:"slider"},null,-1),V=s("label",{class:"form-check-label",for:"flexSwitchCheckChecked"},null,-1);function j(t,a,e,b,o,d){const n=g;return u(),_("nav",y,[c(n,{class:"navbar-brand py-0",to:"/"},{default:v(()=>[s("span",C,r(("t"in t?t.t:l(i))("name_abreviated")),1)]),_:1}),S,s("div",N,[s("ul",E,[s("li",D,[c(n,{to:"/#about",class:"text-decoration-none"},{default:v(()=>[s("span",T,r(("t"in t?t.t:l(i))("about")),1)]),_:1})]),s("li",M,[s("span",B,r(("t"in t?t.t:l(i))("lang").toUpperCase()),1),s("div",z,[s("span",{class:"dropdown-item",onClick:a[0]||(a[0]=p=>o.lang="en")},"EN"),s("span",{class:"dropdown-item",onClick:a[1]||(a[1]=p=>o.lang="es")},"ES")])]),s("li",F,[s("div",I,[s("input",{id:"flexSwitchCheckChecked",class:"form-check-input p-0 m-0",type:"checkbox",role:"button",style:x(`--bs-form-switch-bg: url(${("MoonSun"in t?t.MoonSun:l(k))(o.dark)})`),checked:"",onClick:a[2]||(a[2]=p=>d.toggleTheme())},null,4),O,V])])])])],512)}const A=m($,[["render",j]]),H={name:"SiteLayout"};function U(t,a,e,b,o,d){const n=A;return u(),_("div",null,[c(n),L(t.$slots,"default")])}const G=m(H,[["render",U]]);export{G as default};
