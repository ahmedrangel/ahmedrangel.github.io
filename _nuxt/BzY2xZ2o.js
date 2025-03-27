import{y as w,c as v,z as y,A as C,B as H,d as k,C as M,D as R,E as A,G as F}from"./B5ZYa2pX.js";const Z=Object.freeze({left:0,top:0,width:16,height:16}),q=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),L=Object.freeze({...Z,...q});Object.freeze({...L,body:"",hidden:!1});function T(e,n){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const a in n)o+=" "+a+'="'+n[a]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}const B=/(-?[0-9.]*[0-9]+[0-9.]*)/g,E=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function x(e,n,o){if(n===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*n*o)/o;if(typeof e!="string")return e;const a=e.split(B);if(a===null||!a.length)return e;const t=[];let c=a.shift(),r=E.test(c);for(;;){if(r){const s=parseFloat(c);isNaN(s)?t.push(c):t.push(Math.ceil(s*n*o)/o)}else t.push(c);if(c=a.shift(),c===void 0)return t.join("");r=!r}}function P(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function W(e){return"data:image/svg+xml,"+P(e)}function _(e){return'url("'+W(e)+'")'}function D(e){const[n,o,a,t]=e;if(a!==t){const c=Math.max(a,t);return[n-(c-a)/2,o-(c-t)/2,c,c]}return e}const G=Object.freeze({width:null,height:null}),U=Object.freeze({...G,...q});function K(e,n="defs"){let o="";const a=e.indexOf("<"+n);for(;a>=0;){const t=e.indexOf(">",a),c=e.indexOf("</"+n);if(t===-1||c===-1)break;const r=e.indexOf(">",c);if(r===-1)break;o+=e.slice(t+1,c).trim(),e=e.slice(0,a).trim()+e.slice(r+1)}return{defs:o,content:e}}function J(e,n){return e?"<defs>"+e+"</defs>"+n:n}function Q(e,n,o){const a=K(e);return J(a.defs,n+a.content+o)}const X=e=>e==="unset"||e==="undefined"||e==="none";function Y(e,n){const o={...L,...e},a={...U,...n},t={left:o.left,top:o.top,width:o.width,height:o.height};let c=o.body;[o,a].forEach(p=>{const d=[],j=p.hFlip,N=p.vFlip;let m=p.rotate;j?N?m+=2:(d.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),d.push("scale(-1 1)"),t.top=t.left=0):N&&(d.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),d.push("scale(1 -1)"),t.top=t.left=0);let h;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:h=t.height/2+t.top,d.unshift("rotate(90 "+h.toString()+" "+h.toString()+")");break;case 2:d.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:h=t.width/2+t.left,d.unshift("rotate(-90 "+h.toString()+" "+h.toString()+")");break}m%2===1&&(t.left!==t.top&&(h=t.left,t.left=t.top,t.top=h),t.width!==t.height&&(h=t.width,t.width=t.height,t.height=h)),d.length&&(c=Q(c,'<g transform="'+d.join(" ")+'">',"</g>"))});const r=a.width,s=a.height,i=t.width,l=t.height;let u,f;r===null?(f=s===null?"1em":s==="auto"?l:s,u=x(f,i/l)):(u=r==="auto"?i:r,f=s===null?x(u,l/i):s==="auto"?l:s);const S={},z=(p,d)=>{X(d)||(S[p]=d.toString())};z("width",u),z("height",f);const V=[t.left,t.top,i,l];return S.viewBox=V.join(" "),{attributes:S,viewBox:V,body:c}}function e0(e){const n={display:"inline-block",width:"1em",height:"1em"},o=e.varName;switch(e.pseudoSelector&&(n.content="''"),e.mode){case"background":o&&(n["background-image"]="var(--"+o+")"),n["background-repeat"]="no-repeat",n["background-size"]="100% 100%";break;case"mask":n["background-color"]="currentColor",o&&(n["mask-image"]=n["-webkit-mask-image"]="var(--"+o+")"),n["mask-repeat"]=n["-webkit-mask-repeat"]="no-repeat",n["mask-size"]=n["-webkit-mask-size"]="100% 100%";break}return n}function t0(e,n){const o={},a=n.varName,t=Y(e);let c=t.viewBox;c[2]!==c[3]&&(n.forceSquare?c=D(c):o.width=x("1em",c[2]/c[3]));const r=T(t.body.replace(/currentColor/g,n.color||"black"),{viewBox:`${c[0]} ${c[1]} ${c[2]} ${c[3]}`,width:`${c[2]}`,height:`${c[3]}`}),s=_(r);if(a)o["--"+a]=s;else switch(n.mode){case"background":o["background-image"]=s;break;case"mask":o["mask-image"]=o["-webkit-mask-image"]=s;break}return o}const b={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function o0(e,n="expanded"){const o=[];for(let a=0;a<e.length;a++){const{selector:t,rules:c}=e[a];let s=(t instanceof Array?t.join(n==="compressed"?",":", "):t)+b.selectorStart[n],i=!0;for(const l in c)i||(s+=";"),s+=b.rule[n].replace("{key}",l)+c[l],i=!1;s+=b.selectorEnd[n],o.push(s)}return o.join(n==="compressed"?"":`
`)}function n0(e,n={}){const o=n.customise?n.customise(e.body):e.body,a=n.mode||(n.color||!o.includes("currentColor")?"background":"mask");let t=n.varName;t===void 0&&a==="mask"&&(t="svg");const c={...n,mode:a,varName:t};a==="background"&&delete c.varName;const r={...n.rules,...e0(c),...t0({...L,...e,body:o},c)},s=n.iconSelector||".icon";return o0([{selector:s,rules:r}],c.format)}let I=!1;function $(e){if(I)return;const n=JSON.parse('[{"prefix":"octicon","icons":{"issue-opened-24":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12m9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14\\"/>"},"issue-closed-24":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z\\"/><path fill=\\"currentColor\\" d=\\"M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12\\"/>"},"skip-24":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M17.28 7.78a.75.75 0 0 0-1.06-1.06l-9.5 9.5a.75.75 0 1 0 1.06 1.06z\\"/><path fill=\\"currentColor\\" d=\\"M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12\\"/>"},"git-pull-request-24":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M16 19.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-14.5 0a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m0-14.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M4.75 3a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 3m0 14.5a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 17.5m14.5 0a1.75 1.75 0 1 0 .001 3.501a1.75 1.75 0 0 0-.001-3.501\\"/><path fill=\\"currentColor\\" d=\\"M13.405 1.72a.75.75 0 0 1 0 1.06L12.185 4h4.065A3.75 3.75 0 0 1 20 7.75v8.75a.75.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.064l1.22 1.22a.75.75 0 0 1-1.061 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0M4.75 7.25A.75.75 0 0 1 5.5 8v8A.75.75 0 0 1 4 16V8a.75.75 0 0 1 .75-.75\\"/>"},"git-merge-24":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M15 13.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-12.5 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m0-14.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M5.75 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 6.5m0 14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 21m12.5-6a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 18.25 15\\"/><path fill=\\"currentColor\\" d=\\"M6.5 7.25c0 2.9 2.35 5.25 5.25 5.25h4.5V14h-4.5A6.75 6.75 0 0 1 5 7.25Z\\"/><path fill=\\"currentColor\\" d=\\"M5.75 16.75A.75.75 0 0 1 5 16V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75\\"/>"},"git-pull-request-draft-24":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M4.75 1.5a3.25 3.25 0 0 1 .745 6.414L5.5 8v8l-.005.086A3.25 3.25 0 0 1 4.75 22.5a3.25 3.25 0 0 1-.745-6.414L4 16V8q0-.043.005-.086A3.25 3.25 0 0 1 4.75 1.5M16 19.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M3 4.75a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 4.75m0 14.5a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 19.25m16.25-1.75a1.75 1.75 0 1 0 .001 3.501a1.75 1.75 0 0 0-.001-3.501m0-11.5a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5M21 11.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0\\"/>"},"git-pull-request-closed-24":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M22.266 2.711a.75.75 0 1 0-1.061-1.06l-1.983 1.983l-1.984-1.983a.75.75 0 1 0-1.06 1.06l1.983 1.983l-1.983 1.984a.75.75 0 0 0 1.06 1.06l1.984-1.983l1.983 1.983a.75.75 0 0 0 1.06-1.06l-1.983-1.984zM4.75 1.5a3.25 3.25 0 0 1 .745 6.414L5.5 8v8l-.005.086A3.25 3.25 0 0 1 4.75 22.5a3.25 3.25 0 0 1-.745-6.414L4 16V8q0-.043.005-.086A3.25 3.25 0 0 1 4.75 1.5M16 19.25a3.25 3.25 0 0 1 2.5-3.163V9.625a.75.75 0 0 1 1.5 0v6.462a3.252 3.252 0 0 1-.75 6.413A3.25 3.25 0 0 1 16 19.25M3 4.75a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 4.75m0 14.5a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 19.25m16.25-1.75a1.75 1.75 0 1 0 .001 3.501a1.75 1.75 0 0 0-.001-3.501\\"/>"},"star":{"width":14,"body":"<path fill-rule=\\"evenodd\\" d=\\"M14 6l-4.9-.64L7 1L4.9 5.36L0 6l3.6 3.26L2.67 14L7 11.67L11.33 14l-.93-4.74L14 6z\\" fill=\\"currentColor\\"/>","hidden":true},"comment-24":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.75.75 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25Z\\"/>"}}},{"prefix":"ic","icons":{"round-launch":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 1 0 1.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1\\"/>"}}},{"prefix":"simple-icons","icons":{"github":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\\"/>"}}},{"prefix":"ph","icons":{"graduation-cap-duotone":{"width":256,"height":256,"body":"<g fill=\\"currentColor\\"><path d=\\"M216 113.07v53.22a8 8 0 0 1-2 5.31c-11.3 12.59-38.9 36.4-86 36.4s-74.68-23.81-86-36.4a8 8 0 0 1-2-5.31v-53.22L128 160Z\\" opacity=\\".2\\"/><path d=\\"m251.76 88.94l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76V240a8 8 0 0 0 16 0v-40.49a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12M128 200c-43.27 0-68.72-21.14-80-33.71V126.4l76.24 40.66a8 8 0 0 0 7.52 0L176 143.47v46.34c-12.6 5.88-28.48 10.19-48 10.19m80-33.75a97.8 97.8 0 0 1-16 14.25v-45.57l16-8.53Zm-20-47.31l-.22-.13l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l-43 22.93L25 96l103-54.93L231 96Z\\"/></g>"},"cake-duotone":{"width":256,"height":256,"body":"<g fill=\\"currentColor\\"><path d=\\"M104 48c0-24 24-40 24-40s24 16 24 40a24 24 0 0 1-48 0m104 48H48a16 16 0 0 0-16 16v23.33c0 17.44 13.67 32.18 31.1 32.66A32 32 0 0 0 96 136a32 32 0 0 0 64 0a32 32 0 0 0 32.9 32c17.43-.48 31.1-15.22 31.1-32.66V112a16 16 0 0 0-16-16\\" opacity=\\".2\\"/><path d=\\"M232 112a24 24 0 0 0-24-24h-72v-9a32.06 32.06 0 0 0 24-31c0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 2.09 96 20 96 48a32.06 32.06 0 0 0 24 31v9H48a24 24 0 0 0-24 24v23.33a40.84 40.84 0 0 0 8 24.24V200a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24v-40.43a40.84 40.84 0 0 0 8-24.24ZM112 48c0-13.57 10-24.46 16-29.79c6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0m-72 64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v23.33c0 13.25-10.46 24.31-23.32 24.66A24 24 0 0 1 168 136a8 8 0 0 0-16 0a24 24 0 0 1-48 0a8 8 0 0 0-16 0a24 24 0 0 1-24.68 24C50.46 159.64 40 148.58 40 135.33Zm160 96H56a8 8 0 0 1-8-8v-27.44A38.8 38.8 0 0 0 62.88 176a39.7 39.7 0 0 0 29-11.31A40.4 40.4 0 0 0 96 160a40 40 0 0 0 64 0a40.4 40.4 0 0 0 4.13 4.67A39.67 39.67 0 0 0 192 176h1.14a38.8 38.8 0 0 0 14.86-3.44V200a8 8 0 0 1-8 8\\"/></g>"},"map-pin-duotone":{"width":256,"height":256,"body":"<g fill=\\"currentColor\\"><path d=\\"M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32\\" opacity=\\".2\\"/><path d=\\"M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118\\"/></g>"},"envelope-simple-duotone":{"width":256,"height":256,"body":"<g fill=\\"currentColor\\"><path d=\\"m224 56l-96 88l-96-88Z\\" opacity=\\".2\\"/><path d=\\"M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-20.57 16L128 133.15L52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z\\"/></g>"}}}]');for(const o of n)for(const[a,t]of Object.entries(o.icons))e(o.prefix?o.prefix+":"+a:a,t);I=!0}async function a0(e,n){if(!e)return null;$(y);const o=C(e);return o||(await H(e).catch(()=>(console.warn(`[Icon] failed to load icon \`${e}\``),null)),C(e))}function O(e){const n=w().icon,o=(n.collections||[]).sort((a,t)=>t.length-a.length);return v(()=>{var r;const a=e(),t=a.startsWith(n.cssSelectorPrefix)?a.slice(n.cssSelectorPrefix.length):a,c=((r=n.aliases)==null?void 0:r[t])||t;if(!c.includes(":")){const s=o.find(i=>c.startsWith(i+"-"));return s?s+":"+c.slice(s.length+1):c}return c})}let g;function c0(e){return e.replace(/([^\w-])/g,"\\$1")}function s0(){if(g)return g;g=new Set;const e=o=>{if(o=o.replace(/^:where\((.*)\)$/,"$1").trim(),o.startsWith("."))return o},n=o=>{if(o!=null&&o.length)for(const a of o){a!=null&&a.cssRules&&n(a.cssRules);const t=a==null?void 0:a.selectorText;if(typeof t=="string"){const c=e(t);c&&g.add(c)}}};if(typeof document<"u")for(const o of document.styleSheets)try{const a=o.cssRules||o.rules;n(a)}catch{}return g}const r0=k({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e){const n=M(),o=w().icon,a=v(()=>e.name?o.cssSelectorPrefix+e.name:"");function t(s){var u,f;if(!s)return;const i=C(s);if(i)return i;const l=(f=(u=n.payload)==null?void 0:u.data)==null?void 0:f[s];if(l)return y(s,l),l}const c=v(()=>"."+c0(a.value));function r(s,i=!0){let l=c.value;o.cssWherePseudo&&(l=`:where(${l})`);const u=n0(s,{iconSelector:l,format:"compressed",customise:e.customize??o.customize});return o.cssLayer&&i?`@layer ${o.cssLayer} { ${u} }`:u}{const s=s0();async function i(l){if(s.has(c.value)||typeof document>"u")return;const u=document.createElement("style");u.textContent=r(l);const f=document.head.querySelector('style, link[rel="stylesheet"]');f?document.head.insertBefore(u,f):document.head.appendChild(u),s.add(c.value)}R(()=>e.name,()=>{if(s.has(c.value))return;const l=t(e.name);l?i(l):a0(e.name).then(u=>{u&&i(u)}).catch(()=>null)},{immediate:!0})}return()=>A("span",{class:["iconify",a.value]})}}),i0=k({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e,{slots:n}){const o=M(),a=w().icon,t=O(()=>e.name),c="i-"+t.value;if(t.value){const r=o.payload.data[c];r?y(t.value,r):$(y)}return()=>A(F,{icon:t.value,ssr:!0,customise:e.customize??a.customize},n)}}),u0=k({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1}},setup(e,{slots:n}){const o=M(),a=w().icon,t=O(()=>e.name),c=v(()=>{var i;return((i=o.vueApp)==null?void 0:i.component(t.value))||((e.mode||a.mode)==="svg"?i0:r0)}),r=v(()=>{const i=e.size||a.size;return i?{fontSize:Number.isNaN(+i)?i:i+"px"}:null}),s=e.customize||a.customize;return()=>A(c.value,{...a.attrs,name:t.value,class:a.class,style:r.value,customize:s},n)}});export{u0 as default};
