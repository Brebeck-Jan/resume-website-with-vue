import{d as p,o as s,c as r,a as f,r as y,n as C,_ as v,u as _,b as d,w as k,e as t,t as c,f as T,g as E,h as B,v as j,i as l,T as G,j as I,F as w,k as S}from"./index-C-QDuUfH.js";const R=p({__name:"Card",props:["item","index","component"],setup(a){return(e,n)=>(s(),r("div",{id:"card",class:C([a.index%2==0?"even":"odd"])},[(s(),f(y(a.component),{item:a.item},null,8,["item"]))],2))}}),H=v(R,[["__scopeId","data-v-d5692234"]]),h=[{pic:0,company:"Cofinpro AG",from:"01.08.2024",role:"Expert Consultant"},{pic:1,company:"DER Touristik Online GmbH",from:"01.10.2021",to:"30.06.2024",role:"Software Engineer",description:"Schwerpunkt auf Backendentwicklung mit Kotlin in Kubernetesumgebung.<br/>Gelegentliche Arbeiten im Frontend mit Javascript und React."},{pic:2,company:"DER Touristik Deutschland GmbH",from:"01.10.2018",to:"30.09.2021",role:"Dualer Student Wirschaftsinformatik Data Science",description:"Entwicklung an Backendsystemen;<br/>Datenverarbeitung und -aufbereitung;<br/>Einbindung maschinellen Lernens;<br/><br/>Projektarbeit 1: Testdatenerfassungssystem;<br/>Projektarbeit 2: Hotelbildklassifizierer;<br/>Bachelorarbeit: Geosuche bei Batchimport;<br/><br/>Währenddessen gearbeitet im Functional Testing und der DER Touristik Online GmbH."}],g=[{pic:0,company:"Cofinpro AG",from:"01.08.2024",role:"Expert Consultant"},{pic:1,company:"DER Touristik Online GmbH",from:"01.10.2021",to:"30.06.2024",role:"Software Engineer",description:"Dedicated to providing outstanding content to our customers and ensuring a seamless and enjoyable booking experience through dertour.de.<br/><br/>To accomplish this, I primarily work in the backend using Kotlin to process and collect data, while also connecting various IBEs to our website. In addition, I occasionally contribute to sections of our React frontend<br/><br/>In addition to the before mentioned, I also gain valuable insights into our DevOps tasks, such as creating Docker images, ensuring the stability of our services and configuring GitLab pipelines, to name just a few."},{pic:2,company:"DER Touristik Deutschland GmbH",from:"01.10.2018",to:"30.09.2021",role:"Dual student business informatics Data Science",description:"Main focus:<br/><br/> Developing Backendsystems <br/> Dataprocessing and analysing <br/> Embedding machine learning <br/><br/> project thesis 1: test data management tool <br/> project thesis 2: automatic hotel picture classification<br/>bachelor thesis: geosearch during batchprocessing<br/><br/>During my studies i worked in the following depatures:<br/>DER Touristik Online, Functional Testing, DERTOUR Group Travel"}],F="/resume-website-with-vue/assets/cofinpro-DViiFShg.jpg",O="/resume-website-with-vue/assets/dtd-1GmxDHFR.jpg",L="/resume-website-with-vue/assets/dto-Cf4XGajw.jpg",M={class:"w-40 h-40"},V=["src"],A={class:"pl-5"},K={class:"flex w-[450px]"},N={class:"pl-0 list-none"},z=["innerHTML"],P={class:"mt-1 mb-0 flex align-middle justify-center h-[55px]"},W=p({__name:"cvCardContent",props:["item","index"],setup(a){const e=a,{t:n}=_(),b=[F,L,O],u=()=>{if(e.item&&e.item.description)return e.item.description.length>60?e.item.description.split(" ").slice(0,5).join(" ")+"...":e.item.description};let i=d(!1),o=d(n("cv.expandButton")),m=d(u());k(()=>e.item.description,x=>{m.value=u(),o.value=n("cv.expandButton"),i.value=!1});const D=()=>{i.value=!i.value,o.value=i.value?n("cv.collapseButton"):n("cv.expandButton"),m.value=i.value?e.item.description:u()};return(x,J)=>(s(),r(w,null,[t("div",M,[t("img",{class:"m-auto rounded-[15px]",alt:"company-picture",src:b[e.item.pic]},null,8,V)]),t("div",A,[t("div",K,[t("ol",N,[t("li",null,c(e.item.company),1),t("li",null,c(e.item.from)+" - "+c(e.item.to?e.item.to:"heute"),1),t("li",null,c(e.item.role),1),T(G,{name:l(i).toString()},{default:E(()=>[B((s(),r("li",{class:"item",key:l(o).toString(),innerHTML:l(m)},null,8,z)),[[j,e.item.description]])]),_:1},8,["name"])])]),t("div",P,[e.item.description?(s(),r("button",{key:0,class:"showMoreButton",onClick:D},c(l(o)),1)):I("",!0)])])],64))}}),$=v(W,[["__scopeId","data-v-14dd1fe7"]]),X=p({__name:"Cv",setup(a){const{locale:e}=_();let n=d(e.value==="de"?h:g);return k(e,()=>{n.value=e.value==="de"?h:g,console.log("locale",e.value)}),(b,u)=>(s(),r("div",null,[(s(!0),r(w,null,S(l(n),(i,o)=>(s(),f(H,{item:i,component:$,index:o,key:o},null,8,["item","index"]))),128))]))}});export{X as default};
