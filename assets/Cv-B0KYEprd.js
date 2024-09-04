import{d as u,r as a,o as i,c as r,a as h,b as v,n as b,_ as f,e as n,t as o,f as w,w as k,g as x,v as C,u as l,T as y,h as D,F as _,i as T}from"./index-BEB7cJDb.js";const S=u({__name:"Card",props:["item","index","component"],setup(s){const e=s,m=()=>{if(e.item&&e.item.description)return e.item.description.length>60?e.item.description.split(" ").slice(0,5).join(" ")+"...":e.item.description};return a(!1),a("mehr anzeigen"),a(m()),(c,t)=>(i(),r("div",{id:"card",class:b([s.index%2==0?"even":"odd"])},[(i(),h(v(s.component),{item:s.item},null,8,["item"]))],2))}}),j=f(S,[["__scopeId","data-v-aba93da4"]]),B=[{pic:0,company:"Cofinpro AG",from:"01.08.2024",role:"Expert Consultant"},{pic:1,company:"DER Touristik Online GmbH",from:"01.10.2021",to:"30.06.2024",role:"Software Engineer",description:`Schwerpunkt auf Backendentwicklung mit Kotlin in Kubernetesumgebung.
Gelegentliche Arbeiten im Frontend mit Javascript und React.`},{pic:2,company:"DER Touristik Deutschland GmbH",from:"01.10.2018",to:"30.09.2021",role:"Dualer Student Wirschaftsinformatik Data Science",description:`Entwicklung an Backendsystemen;
Datenverarbeitung und -aufbereitung;
Einbindung maschinellen Lernens;

Projektarbeit 1: Testdatenerfassungssystem;
Projektarbeit 2: Hotelbildklassifizierer;
Bachelorarbeit: Geosuche bei Batchimport;

Währenddessen gearbeitet im Functional Testing und der DER Touristik Online GmbH.`}],E="/resume-website-with-vue/assets/cofinpro-DViiFShg.jpg",G="/resume-website-with-vue/assets/dtd-1GmxDHFR.jpg",z="/resume-website-with-vue/assets/dto-Cf4XGajw.jpg",F={class:"w-40 h-40"},H=["src"],R={class:"pl-5"},V={class:"flex w-[450px]"},I={class:"pl-0 list-none"},N={class:"mt-1 mb-0 flex align-middle justify-center h-[55px]"},A=u({__name:"cvCardContent",props:["item","index"],setup(s){const e=s,m=[E,z,G],c=()=>{if(e.item&&e.item.description)return e.item.description.length>60?e.item.description.split(" ").slice(0,5).join(" ")+"...":e.item.description};let t=a(!1),d=a("mehr anzeigen"),p=a(c());const g=()=>{t.value=!t.value,d.value=t.value?"weniger anzeigen":"mehr anzeigen",p.value=t.value?e.item.description:c()};return(L,M)=>(i(),r(_,null,[n("div",F,[n("img",{class:"m-auto rounded-[15px]",alt:"company-picture",src:m[e.item.pic]},null,8,H)]),n("div",R,[n("div",V,[n("ol",I,[n("li",null,o(e.item.company),1),n("li",null,o(e.item.from)+" - "+o(e.item.to?e.item.to:"heute"),1),n("li",null,o(e.item.role),1),w(y,{name:l(t).toString()},{default:k(()=>[x((i(),r("li",{class:"item",key:l(d).toString()},o(l(p)),1)),[[C,e.item.description]])]),_:1},8,["name"])])]),n("div",N,[e.item.description?(i(),r("button",{key:0,class:"showMoreButton",onClick:g},o(l(d)),1)):D("",!0)])])],64))}}),K=f(A,[["__scopeId","data-v-798614c2"]]),P=u({__name:"Cv",setup(s){return(e,m)=>(i(),r("div",null,[(i(!0),r(_,null,T(l(B),(c,t)=>(i(),h(j,{item:c,component:K,index:t,key:t},null,8,["item","index"]))),128))]))}});export{P as default};
