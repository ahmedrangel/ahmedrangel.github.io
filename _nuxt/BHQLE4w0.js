import{y as m,L as f,A as I,g as a,o as x,c as d,G as v}from"./D2lZ70uQ.js";import{r as _}from"./CvPl5tTm.js";import{_ as S}from"./DlAUqK2U.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({"6be96f36":p.value}));const t=I(),o=u,l=a(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),c=a(()=>_(l.value)),p=a(()=>{var s,r;const e=(r=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=a(()=>{var n,s,r;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((r=t.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),d("span",{style:v({width:i.value,height:i.value})},null,4))}}),U=S(y,[["__scopeId","data-v-c4c94f0a"]]);export{U as default};