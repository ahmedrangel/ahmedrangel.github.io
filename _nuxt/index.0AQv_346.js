import w from"./Icon.YLD_dsjy.js";import{I as d,l as b,t as o,a as N,s as k}from"./helpers.t4PeYWjH.js";import{f as F,r as I,c as t,a as s,t as n,u as a,b as c,F as _,g,d as p,w as O,h as L,o as i,i as C}from"./entry.tAuhsbTp.js";import"./index.0wqzsba0.js";const V=""+globalThis.__publicAssetsURL("images/ar-profile.jpg"),M=["lang"],T={id:"about",class:"pt-5"},B={class:"fw-bold mb-4"},D={class:"row justify-content-center g-4"},H=L('<div class="col-12 col-md-3 pb-3"><div class="ps-0 pe-3"><div class="position-relative"><img class="img-fluid w-100" src="'+V+'"><div class="profile-image position-absolute w-100 h-100 border"></div></div></div></div>',1),S={class:"col-12 col-md-9"},W={class:"row gy-3 align-items-end"},$={class:"col-lg-6 col-md-6 d-flex align-items-center"},A={class:"col-lg-6 col-md-6 d-flex align-items-center"},E={class:"col-lg-6 col-md-6 d-flex align-items-center"},P={class:"col-lg-6 col-md-6 d-flex align-items-center"},R={class:"col-lg-6 col-md-6 d-flex align-items-center"},U=["href"],q={class:"col-lg-6 col-md-6 d-flex align-items-center"},z=["href"],G=s("hr",{class:"my-5"},null,-1),J={id:"education",class:"row"},K={class:"col-12 col-lg-8 mb-4"},Q={class:"fw-bold mb-4"},X={class:"mb-3"},Y={class:"h5 mb-0"},Z={class:"text-primary fw-bold me-2"},j={class:"me-2"},x={class:"text-primary fw-bold"},ss={class:"m-0"},es={class:"m-0"},ns={class:"col-12 col-lg-4 mb-4"},ls={class:"fw-bold mb-4"},as={class:"mb-1"},os=s("div",{class:"progress mb-4"},[s("div",{class:"progress-bar w-100",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"})],-1),ts={class:"mb-1"},is=s("div",{class:"progress"},[s("div",{class:"progress-bar w-75",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"})],-1),ds=s("hr",{class:"m-0"},null,-1),rs={id:"skills",class:"pt-5"},cs={class:"fw-bold mb-4"},ms={class:"table table-borderless m-0 align-middle"},hs={class:"col-3 text-center bg-primary m-2"},_s={class:"fw-bold mb-0 text-color-inverted"},gs=s("hr",{class:"mt-5 mb-0"},null,-1),ps={id:"projects",class:"pt-5"},us={class:"fw-bold mb-4"},bs={class:"card"},fs=["src"],vs={class:"card-body"},ys=["href"],ws={class:"m-0 fw-bold"},Ns={class:"m-0"},ks={class:"list-group list-group-flush"},Fs={class:"list-group-item"},Is={class:"my-2"},Os=["innerHTML"],Ls={class:"list-group-item"},Cs={class:"my-1"},Vs={class:"lnks m-1 text-nowrap"},Ms=["href"],Ts={class:"card-foot"},Bs={data(){return{scrolledDown:!1,lang:d.lang}},watch:{lang(u){b.setLanguage(u)}},methods:{getLang(){return this.lang=b.getLanguage(),this.lang}}},As=Object.assign(Bs,{__name:"index",setup(u){const f=F(()=>k(d.projects));return(e,Ds)=>{const m=w,v=I("MasonryWall");return i(),t("main",{lang:e.getLang(),class:"mt-5 container-lg"},[s("div",T,[s("h3",B,n(("t"in e?e.t:a(o))("about_me")),1),s("div",D,[H,s("div",S,[s("p",null,n(("t"in e?e.t:a(o))("bio")),1),s("div",W,[s("div",$,[c(m,{class:"iconify me-2",name:"ph:graduation-cap-duotone"}),s("span",null,n(("t"in e?e.t:a(o))("degree")),1)]),s("div",A,[c(m,{class:"iconify me-2",name:"ph:cake-duotone"}),s("span",null,n(("INFO"in e?e.INFO:a(d)).birthday)+" ("+n(("ageCalc"in e?e.ageCalc:a(N))(("INFO"in e?e.INFO:a(d)).birthday))+" "+n(("t"in e?e.t:a(o))("years_old"))+")",1)]),s("div",E,[c(m,{class:"iconify me-2",name:"ph:map-pin-duotone"}),s("span",null,n(("t"in e?e.t:a(o))("address")),1)]),s("div",P,[c(m,{class:"iconify me-2",name:"ph:phone-duotone"}),s("span",null,n(("INFO"in e?e.INFO:a(d)).phone),1)]),s("div",R,[c(m,{class:"iconify me-2",name:"ph:envelope-simple-duotone"}),s("a",{href:`mailto:${("INFO"in e?e.INFO:a(d)).email}`,target:"_blank"},n(("INFO"in e?e.INFO:a(d)).email),9,U)]),s("div",q,[(i(!0),t(_,null,g(("INFO"in e?e.INFO:a(d)).socials,(l,r)=>(i(),t("div",{key:r},[s("a",{href:l.url,target:"_blank",class:"socials-icons"},[c(m,{class:"iconify me-2",name:l.icon},null,8,["name"])],8,z)]))),128))])])])])]),G,s("div",J,[s("div",K,[s("h3",Q,n(("t"in e?e.t:a(o))("education")),1),(i(!0),t(_,null,g(("INFO"in e?e.INFO:a(d)).education,(l,r)=>(i(),t("div",{key:r,class:"mb-2"},[s("div",X,[s("div",Y,[s("span",Z,n(e.lang==="en"?l.diploma_en:l.diploma_es),1),s("span",j,n(("t"in e?e.t:a(o))("at")),1),s("span",x,n(e.lang==="en"?l.institution_en:l.institution_es),1)]),s("p",ss,n(e.lang=="en"?l.location_en:l.location_es),1),s("p",es,n(("t"in e?e.t:a(o))("months")[l.start_month-1])+" "+n(l.start_year)+" — "+n(("t"in e?e.t:a(o))("months")[l.end_month-1])+" "+n(l.end_year),1)])]))),128))]),s("div",ns,[s("h3",ls,n(("t"in e?e.t:a(o))("languages")),1),s("p",as,[s("b",null,n(("t"in e?e.t:a(o))("spanish"))+":",1),p(" "+n(("t"in e?e.t:a(o))("native")),1)]),os,s("p",ts,[s("b",null,n(("t"in e?e.t:a(o))("english"))+":",1),p(" "+n(("t"in e?e.t:a(o))("intermediate"))+" / "+n(("t"in e?e.t:a(o))("advanced")),1)]),is])]),ds,s("div",rs,[s("h3",cs,n(("t"in e?e.t:a(o))("main_skills")),1),s("table",ms,[s("tbody",null,[(i(!0),t(_,null,g(("INFO"in e?e.INFO:a(d)).main_skills,(l,r)=>(i(),t("tr",{key:r},[s("td",hs,[s("span",_s,n(("t"in e?e.t:a(o))(l.skill_id)),1)]),s("td",null,[(i(!0),t(_,null,g(l.skills,(h,y)=>(i(),t("span",{key:y,class:"sk m-1 px-2 py-1 text-nowrap"},[c(m,{class:"iconify me-1",name:h.icon},null,8,["name"]),p(n(h.name),1)]))),128))])]))),128))])])]),gs,s("div",ps,[s("h3",us,n(("t"in e?e.t:a(o))("projects")),1),c(v,{items:a(f),"ssr-columns":1,gap:12,"max-columns":2,"column-width":400},{default:O(({item:l})=>[s("div",bs,[s("img",{src:`/images/${l.image}`,class:"card-img-top",alt:""},null,8,fs),s("div",vs,[s("a",{href:l.url,target:"_blank",class:"text-primary fw-bold"},[s("h5",ws,n(l.name),1)],8,ys),s("p",Ns,n(("t"in e?e.t:a(o))("months")[l.start_month-1])+" "+n(l.start_year)+" — "+n(("t"in e?e.t:a(o))("months")[l.end_month-1])+" "+n(l.end_year),1)]),s("ul",ks,[s("li",Fs,[s("div",Is,[s("p",null,n(e.lang==="en"?l.desc_en:l.desc_es),1),s("ul",null,[(i(!0),t(_,null,g(e.lang==="en"?l.desc_li_en:l.desc_li_es,(r,h)=>(i(),t("li",{key:h},[s("span",{innerHTML:r},null,8,Os)]))),128))])])]),s("li",Ls,[s("div",Cs,[(i(!0),t(_,null,g(l.tags,(r,h)=>(i(),t("span",{key:h,class:"sk m-1 px-2 py-1 text-nowrap"},n(r),1))),128)),s("span",Vs,[l.repository?(i(),t("a",{key:0,href:l.repository,target:"_blank",class:"d-inline-flex align-items-center"},[c(m,{class:"iconify me-1",name:"simple-icons:github"}),s("span",Ts,[s("b",null,n(("t"in e?e.t:a(o))("repository")),1)])],8,Ms)):C("",!0)])])])])])]),_:1},8,["items"])])],8,M)}}});export{As as default};
