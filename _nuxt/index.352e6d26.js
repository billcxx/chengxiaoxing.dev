import g from"./Tags.e152fe6a.js";import{a as x,v as y,p as b,o as s,b as o,e as t,f as a,N as l,u as k,O as r,P as c,Q as i,M as N}from"./entry.876f6604.js";import v from"./ContentList.e2dc2dbc.js";import{u as w}from"./composables.8439651d.js";import"./asyncData.1b3d72b4.js";import"./ContentQuery.5a98c339.js";import"./utils.b50c7565.js";/* empty css                                                             */const $=t("header",{class:"page-heading"},[t("div",{class:"wrapper"},[t("h1",{class:"text-4xl font-extrabold text-center"}," All blogs ")])],-1),q={class:"page-section"},B={class:"article-list"},C={class:"wrapper"},L={class:"text-2xl font-semibold"},A={class:"article-tags"},H=t("p",null,"No articles found.",-1),j=x({__name:"index",setup(V){const{query:{tags:n}}=y(),_=b(n==null?void 0:n.split(","));return w({title:"All blogs",meta:[{name:"description",content:"Here's a list of all my great articles"}]}),(D,E)=>{const p=g,u=N,m=v;return s(),o("main",null,[$,t("section",q,[a(p),a(m,{path:"/blogs",query:{only:["title","description","tags","_path","img"],where:{tags:{$contains:k(_)}},$sensitivity:"base"}},{default:l(({list:d})=>[t("ul",B,[(s(!0),o(r,null,c(d,e=>(s(),o("li",{key:e._path,class:"article-item"},[a(u,{to:e._path},{default:l(()=>[t("div",C,[t("header",null,[t("h1",L,i(e.title),1),t("p",null,i(e.description),1),t("ul",A,[(s(!0),o(r,null,c(e.tags,(f,h)=>(s(),o("li",{key:h,class:"tag !py-0.5"},i(f),1))),128))])])])]),_:2},1032,["to"])]))),128))])]),"not-found":l(()=>[H]),_:1},8,["query"])])])}}});export{j as default};
