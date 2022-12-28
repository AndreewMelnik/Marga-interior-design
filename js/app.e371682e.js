(function(){"use strict";var t={2493:function(t,e,i){var a=i(144),s=i(998),n=function(){var t=this,e=t._self._c;return e(s.Z,[e("TheNavbar"),e("router-view"),e("TheFooter")],1)},r=[],o=i(6232),l=i(5550),c=i(6190),u=i(266),d=i(5808),m=i(4525),p=i(1116),f=i(8515),h=i(7953),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e(f.Z,{staticClass:"hidden-sm-and-up",attrs:{app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[e(d.Z,t._l(t.menuItems,(function(i){return e(m.Z,{key:i.title,attrs:{to:i.path}},[e(p.km,[t._v(t._s(i.title))])],1)})),1)],1),e(o.Z,{staticClass:"navbar",attrs:{color:"white",height:"100px"}},[e(u.Z,{staticClass:"hidden-sm-and-up"},[e("span",[e(l.Z,{on:{click:function(e){t.sidebar=!t.sidebar}}})],1),e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/"},on:{click:function(e){t.sidebar=!t.sidebar}}},[t._v("marga")])],1)]),e(h.lj,{staticClass:"hidden-xs-only align-center"},[e(c.Z,[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e(c.Z,[e("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),e(c.Z,[e("router-link",{attrs:{to:"/services"}},[t._v("Services")])],1),e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/"}},[t._v("marga")])],1),e(c.Z,[e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e(c.Z,[e("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),e(c.Z,[e("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)],1)],1)],1)},v=[],b={data(){return{appTitle:"marga",sidebar:!1,menuItems:[{title:"Home",path:"/",name:"Home"},{title:"Projects",path:"/projects",name:"Projects"},{title:"Services",path:"/services",name:"Services"},{title:"About",path:"/about",name:"About"},{title:"Blog",path:"/blog",name:"Blog"},{title:"Contact",path:"/contact",name:"Contact"}]}}},_=b,C=i(1001),x=(0,C.Z)(_,g,v,!1,null,null,null),Z=x.exports,k=i(9582),y=i(2150),w=i(8271),j=i(4324),S=i(1631),P=i(6313),L=function(){var t=this,e=t._self._c;return e(w.Z,{staticClass:"pt-5 pb-5",attrs:{color:"#c9ccd4"}},[e(y.Z,{staticClass:"pa-10"},[e("div",{staticClass:"row"},[e(u.Z,{staticClass:"about"},[e("h3",[t._v("About Us ")]),e("p",[t._v("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ")]),e("p")]),e(u.Z,{staticClass:"text-left",attrs:{cols:"12",sm:"1"}},[e("h3",{staticClass:"features"},[t._v(" Features ")]),t._l(t.links,(function(i){return e(m.Z,{key:i.name,staticClass:"footer-link",attrs:{to:i.path,color:"rgba(0, 0, 0, 0.5)",rounded:"",text:""}},[t._v(" "+t._s(i.name)+" ")])}))],2),e("form",{staticClass:"flex flex-wrap pa-3"},[e("h3",{staticClass:"footer-heading mb-6"},[t._v("Subscribe to Newsletter")]),e(P.Z,{staticClass:"rounded-sm pa-0 mb-6"},[e(S.Z,{staticClass:"pt-5",attrs:{"error-messages":t.emailErrors,"background-color":"white",label:"Enter E-mail",required:""},on:{blur:function(e){return t.$v.email.$touch()},input:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(c.Z,{staticClass:"btn",attrs:{color:"#43ab92",height:"64px",width:"125px"},on:{click:t.submit}},[t._v(" Subscribe ")])],1),e(k.Z,{attrs:{color:"rgba(201,204,212)",flat:"",tile:""}},t._l(t.icons,(function(i){return e(c.Z,{key:i,staticClass:"mx-4",attrs:{dark:"",icon:""}},[e(j.Z,{attrs:{size:"24px"}},[t._v(" "+t._s(i)+" ")])],1)})),1)],1)],1)])],1)},A=[],E={name:"TheFooter",data:()=>({links:[{name:"About Us",path:"/about"},{name:"Projects",path:"projects"},{name:"Services",path:"/services"},{name:"Blog",path:"/blog"},{name:"Contact Us",path:"/contact"}],icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]})},q=E,O=(0,C.Z)(q,L,A,!1,null,"6fcdd63f",null),T=O.exports,B={name:"App",components:{TheNavbar:Z,TheFooter:T},data:()=>({})},D=B,M=(0,C.Z)(D,n,r,!1,null,"f1281464",null),F=M.exports,H=i(8864);a.ZP.use(H.Z);var N=new H.Z({}),W=i(6667),I=i.n(W),U=function(){var t=this,e=t._self._c;return e(s.Z,[e("PreviewSlider"),e("WelcomeSection"),e("CardList"),e("ProjectList"),e("CaptionSlider"),e("BlogCards")],1)},R=[],$=i(9654),Q=i(6760),J=i(1713),K=function(){var t=this,e=t._self._c;return e($.Z,{attrs:{cycle:"",height:"800","hide-delimiter-background":"","show-arrows-on-hover":""},on:{click:function(e){t.dialog=!1}}},[t._l(t.slides,(function(t,i){return e(Q.Z,{key:i,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}},[e(J.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}})],1)})),e("div",{staticClass:"slider__box"},[e("h1",[t._v("Design That Makes You Feel At Home")]),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti, nesciunt.")]),e("home-popup")],1)],2)},Y=[],z=i(5879),V=i(5125),G=i(2648),X=function(){var t=this,e=t._self._c;return e(J.Z,{attrs:{justify:"left"}},[e(z.Z,{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:a}){return[e(c.Z,t._g(t._b({staticClass:"popup__btn",attrs:{dark:"",left:""}},"v-btn",a,!1),i),[t._v(" Contact Us ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(V.Z,{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(y.Z,[e("div",{staticClass:"popup__text"},[t._v("Contact Us")]),e(J.Z,{staticClass:"popup__row"},[e(J.Z,[e(u.Z,{attrs:{md:"6"}},[e(S.Z,{attrs:{rules:t.nameRules,label:"First name",required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),e(u.Z,{attrs:{md:"6"}},[e(S.Z,{attrs:{rules:t.nameRules,label:"Last name",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1)],1),e(J.Z,[e(u.Z,{attrs:{md:"12"}},[e(S.Z,{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),e(J.Z,[e(u.Z,{staticClass:"fill-height 300",attrs:{md:"12"}},[e(G.Z,{attrs:{rules:t.messageRules,label:"Write your message.",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),e(c.Z,{staticClass:"mt-6",attrs:{color:"#43ab92",height:"58",width:"380"},on:{click:t.submit}},[t._v(" Send Message ")])],1)],1)],1)],1)],1)],1)],1)},tt=[],et={name:"home-popup",data:()=>({dialog:!1})},it=et,at=(0,C.Z)(it,X,tt,!1,null,"7b8f75cc",null),st=at.exports,nt={name:"PreviewSlider",components:{HomePopup:st},inject:["isScrollable","isMobile"],data(){return{slides:[{src:i(1416)},{src:i(1166)},{src:i(5836)}]}}},rt=nt,ot=(0,C.Z)(rt,K,Y,!1,null,"f2d77c12",null),lt=ot.exports,ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"welcome"},[e("div",{staticClass:"container"},[e("div",{staticClass:"welcome-items"},[t._m(0),e("WelcomeSlider")],1)])])},ut=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"welcome-box"},[e("h2",[t._v("Welcome To "),e("br"),t._v(" Our Company")]),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia id ea ab in! Nam eligendi distinctio, vitae.")]),e("p",[t._v("Alias odit ipsam quas unde obcaecati molestiae consequatur numquam cupiditate perferendis facere, nulla nemo id, accusantium corrupti tempora.")]),e("p",{staticClass:"welcome-sign"},[e("span",{staticClass:"welcome__sign-name"},[t._v("Bruce Smith")]),t._v(" "),e("br"),e("span",{staticClass:"welcome__sign-sign"},[t._v("Founder, CEO")]),t._v(" "),e("br"),e("img",{attrs:{alt:"Image",src:i(5824)}})])])}],dt=function(){var t=this,e=t._self._c;return e($.Z,{attrs:{cycle:"",height:"700","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(t,i){return e(Q.Z,{key:i,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}},[e(J.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}})],1)})),1)},mt=[],pt={name:"WelcomeSlider",inject:["isScrollable","isMobile"],data(){return{slides:[{src:i(2346)},{src:i(1998)},{src:i(4581)}]}}},ft=pt,ht=(0,C.Z)(ft,dt,mt,!1,null,"58a0709a",null),gt=ht.exports,vt={name:"WelcomeSection",components:{WelcomeSlider:gt}},bt=vt,_t=(0,C.Z)(bt,ct,ut,!1,null,"3e5b4bda",null),Ct=_t.exports,xt=i(4886),Zt=function(){var t=this,e=t._self._c;return e(k.Z,{staticClass:"mx-auto",attrs:{"background-color":"#d4d7dd","max-width":"1140"}},[e("div",{staticClass:"cards-title"},[e("h2",[t._v("WHAT WE DO")])]),e(y.Z,{attrs:{fluid:""}},[e(J.Z,{attrs:{dense:""}},t._l(t.cards,(function(i){return e(u.Z,{key:i.title,attrs:{cols:i.flex,"data-aos-delay":i.delay,"data-aos":"fade-up","data-aos-duration":"800"}},[e(k.Z,{staticClass:"d-flex flex-column align-center py-10 px-20",attrs:{color:"white","max-width":"350"}},[e("img",{staticClass:"white--text align-end",attrs:{src:i.src,height:"200px"}}),e(xt.EB,{domProps:{textContent:t._s(i.title)}}),e(xt.Qq,[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus in officia saepe veritatis? ")])],1)],1)})),1)],1)],1)},kt=[],yt=i(2711),wt=i.n(yt),jt=i(4213),St=i(683),Pt=i(7009),Lt=i(5920),At=i(6722),Et=i(2613),qt={name:"CardList",data:()=>({cards:[{title:"Creative Stairs",src:jt,flex:4,delay:50},{title:"Kitchen Design",src:St,flex:4,delay:100},{title:"Lamp Decoration",src:Pt,flex:4,delay:200},{title:"Interior Blueprint",src:Lt,flex:4,delay:50},{title:"Dinning Table",src:At,flex:4,delay:100},{title:"Modern Design",src:Et,flex:4,delay:200}]})};wt().init();var Ot=qt,Tt=(0,C.Z)(Ot,Zt,kt,!1,null,"7c31417c",null),Bt=Tt.exports,Dt=i(5495),Mt=function(){var t=this,e=t._self._c;return e(k.Z,{staticClass:"projects",attrs:{"background-color":"#d4d7dd","max-width":"1140"}},[e("div",{staticClass:"projects-title"},[e("h2",[t._v("OUR PROJECTS")])]),e(y.Z,{attrs:{fluid:""}},[e(J.Z,{attrs:{dense:""}},t._l(t.cards,(function(i){return e(u.Z,{key:i.title,attrs:{cols:i.flex}},[e(k.Z,{attrs:{"max-width":"540"}},[e(Dt.Z,{staticClass:"white--text align-end",attrs:{src:i.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}}),e(xt.EB,{domProps:{textContent:t._s(i.title)}}),e(xt.Qq,[t._v(" Melbourne, Australia ")])],1)],1)})),1)],1)],1)},Ft=[],Ht={name:"ProjectList",data:()=>({cards:[{title:"Creative Stairs",src:i(7099),flex:6},{title:"Kitchen Design",src:i(9170),flex:6},{title:"Lamp Decoration",src:i(298),flex:6},{title:"Interior Blueprint",src:i(6828),flex:6}]})},Nt=Ht,Wt=(0,C.Z)(Nt,Mt,Ft,!1,null,"95efde2c",null),It=Wt.exports,Ut=function(){var t=this,e=t._self._c;return e($.Z,{attrs:{cycle:"",height:"500","hide-delimiter-background":"","show-arrows-on-hover":""}},[t._l(t.slides,(function(t,i){return e(Q.Z,{key:i,attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[e("caption-slider-item",{attrs:{position:t.position,sign:t.sign,title:t.title}}),e(J.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}})],1)})),e("div",{staticClass:"slider__box"},[e("h1",[t._v("Design That Makes You Feel At Home")]),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt.")]),e("p",[e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Contact Us")])])])],2)},Rt=[],$t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),e("blockquote",{staticClass:"testimonial"},[t._m(1),e("p",{staticClass:"title"},[t._v(t._s(t.title))]),e("cite",[e("span",{staticClass:"text-black"},[t._v(t._s(t.sign)+" ")]),t._v(" — "),e("span",{staticClass:"text-muted"},[t._v(t._s(t.position))])])])])},Qt=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"quote quote-icon-wrap"},[e("img",{attrs:{alt:"",src:i(3562)}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"quote quote-icon-wrap"},[e("span",{staticClass:"icon-format_quote"})])}],Jt={name:"CaptionSliderItem",props:["title","sign","position"]},Kt=Jt,Yt=(0,C.Z)(Kt,$t,Qt,!1,null,"4b48ab2e",null),zt=Yt.exports,Vt={name:"CaptionSlider",components:{CaptionSliderItem:zt},inject:["isScrollable","isMobile"],data(){return{slides:[{title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere, eos?",sign:"Mike Dorney",position:"CEO and Co-Founder"},{title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere ex ea sunt, eos?",sign:"Jack Dorney",position:"Co-Founder"},{title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere ex ea, eos?",sign:"John Dorney",position:"CEO"}]}}},Gt=Vt,Xt=(0,C.Z)(Gt,Ut,Rt,!1,null,"7bacb72f",null),te=Xt.exports,ee=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog"},[e("div",{staticClass:"container"},[t._m(0),e(k.Z,{staticClass:"mx-auto",attrs:{"background-color":"#d4d7dd","max-width":"1140"}},[e(y.Z,{attrs:{fluid:""}},[e(J.Z,{attrs:{dense:""}},t._l(t.cards,(function(i){return e(u.Z,{key:i.title,attrs:{cols:i.flex}},[e(k.Z,{staticClass:"d-flex flex-column align-left py-0 px-20 ml-3 mr-3",attrs:{color:"white",height:"200","max-width":"255"}},[e(xt.Qq,{domProps:{textContent:t._s(i.published)}}),e(xt.EB,{domProps:{textContent:t._s(i.description)}}),e(xt.EB,[e("a",{staticClass:"read-more",attrs:{href:"#"}},[t._v("Read More ")])])],1)],1)})),1)],1)],1)],1)])},ie=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text"},[e("h3",{staticClass:"text-uppercase"},[t._v("Blog and Updates")]),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quos veniam magni totam, architecto earum dolor id obcaecati!")])])}],ae={name:"BlogCards",data:()=>({cards:[{published:"Septermber 30, 2019",description:"Lorem ipsum dolor sit amet, consectetur est!",flex:3},{published:"Septermber 30, 2019",description:"Lorem ipsum dolor sit amet, consectetur est!",flex:3},{published:"Septermber 30, 2019",description:"Lorem ipsum dolor sit amet, consectetur est!",flex:3},{published:"Septermber 30, 2019",description:"Lorem ipsum dolor sit amet, consectetur est!",flex:3}]})},se=ae,ne=(0,C.Z)(se,ee,ie,!1,null,"91248128",null),re=ne.exports,oe={name:"HomePage",components:{PreviewSlider:lt,WelcomeSection:Ct,CardList:Bt,ProjectList:It,CaptionSlider:te,BlogCards:re},data:()=>({})},le=oe,ce=(0,C.Z)(le,U,R,!1,null,"e1484352",null),ue=ce.exports;a.ZP.use(I());let de=[{path:"/",name:"Home",component:ue},{path:"/Marga-interior-design/",name:"Home",component:ue},{path:"/projects",name:"Projects",component:()=>i.e(84).then(i.bind(i,5084)).then((t=>t.default))},{path:"/services",name:"Services",component:()=>i.e(178).then(i.bind(i,1178)).then((t=>t.default))},{path:"/about",name:"About",component:()=>i.e(924).then(i.bind(i,1219)).then((t=>t.default))},{path:"/blog",name:"Blog",component:()=>i.e(191).then(i.bind(i,3191)).then((t=>t.default))},{path:"/contact",name:"Contact",component:()=>i.e(706).then(i.bind(i,8143)).then((t=>t.default))}];var me=new(I())({mode:"history",routes:de}),pe=i(196),fe=i(629),he={state:{cards:[]},mutations:{setCards(t,e){t.cards=e}},getters:{getAllCards(t){return t.cards}},actions:{fetchCards(t){pe.ZP.get("https://jsonplaceholder.typicode.com/posts").then((e=>t.commit("setCards",e.data)))}}};a.ZP.use(fe.ZP);var ge=new fe.ZP.Store({modules:{blogModule:he}});a.ZP.config.productionTip=!1,a.ZP.prototype.axios=pe.ZP,new a.ZP({vuetify:N,router:me,store:ge,render:t=>t(F)}).$mount("#app")},5824:function(t,e,i){t.exports=i.p+"img/signature.6223337b.svg"},3562:function(t,e,i){t.exports=i.p+"img/quotes.19949897.svg"},2346:function(t,e,i){t.exports=i.p+"img/about_1.50b9dd4b.jpg"},1998:function(t,e,i){t.exports=i.p+"img/about_2.9a4bc7ed.jpg"},4581:function(t,e,i){t.exports=i.p+"img/about_3.74b61607.jpg"},1416:function(t,e,i){t.exports=i.p+"img/hero_1.b3fabfe3.jpg"},1166:function(t,e,i){t.exports=i.p+"img/hero_2.b5a97d46.jpg"},5836:function(t,e,i){t.exports=i.p+"img/hero_3.b26a2ec8.jpg"},7099:function(t,e,i){t.exports=i.p+"img/img_1.d95ed146.jpg"},9170:function(t,e,i){t.exports=i.p+"img/img_2.307fc685.jpg"},298:function(t,e,i){t.exports=i.p+"img/img_3.0efa7536.jpg"},6828:function(t,e,i){t.exports=i.p+"img/img_4.5f779817.jpg"},2613:function(t,e,i){t.exports=i.p+"img/design.17564bee.png"},5920:function(t,e,i){t.exports=i.p+"img/interior.7aec9ce1.png"},683:function(t,e,i){t.exports=i.p+"img/kitchen.7da5993a.png"},7009:function(t,e,i){t.exports=i.p+"img/lamp.2e1f40c5.png"},4213:function(t,e,i){t.exports=i.p+"img/stairs.5612861f.png"},6722:function(t,e,i){t.exports=i.p+"img/table.96447b16.png"}},e={};function i(a){var s=e[a];if(void 0!==s)return s.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,a,s,n){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],n=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&n||r>=n)&&Object.keys(i.O).every((function(t){return i.O[t](a[l])}))?a.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,s,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(e,a){return i.f[a](t,e),e}),[]))}}(),function(){i.u=function(t){return"js/"+t+"."+{84:"18273afd",178:"6277f13a",191:"a41a13d5",706:"aaa4ef59",924:"43cdffcb"}[t]+".js"}}(),function(){i.miniCssF=function(t){return"css/"+t+"."+{84:"99905a06",178:"23f1575a",191:"536323fc",706:"ef0fe477",924:"06165975"}[t]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="marga:";i.l=function(a,s,n,r){if(t[a])t[a].push(s);else{var o,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+n){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",e+n),o.src=a),t[a]=[s];var m=function(e,i){o.onerror=o.onload=null,clearTimeout(p);var s=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(t){return t(i)})),e)return e(i)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/Marga-interior-design/"}(),function(){var t=function(t,e,i,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(n){if(s.onerror=s.onload=null,"load"===n.type)i();else{var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=o,s.parentNode.removeChild(s),a(l)}};return s.onerror=s.onload=n,s.href=e,document.head.appendChild(s),s},e=function(t,e){for(var i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===t||n===e))return s}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){s=r[a],n=s.getAttribute("data-href");if(n===t||n===e)return s}},a=function(a){return new Promise((function(s,n){var r=i.miniCssF(a),o=i.p+r;if(e(r,o))return s();t(a,o,s,n)}))},s={143:0};i.f.miniCss=function(t,e){var i={84:1,178:1,191:1,706:1,924:1};s[t]?e.push(s[t]):0!==s[t]&&i[t]&&e.push(s[t]=a(t).then((function(){s[t]=0}),(function(e){throw delete s[t],e})))}}(),function(){var t={143:0};i.f.j=function(e,a){var s=i.o(t,e)?t[e]:void 0;if(0!==s)if(s)a.push(s[2]);else{var n=new Promise((function(i,a){s=t[e]=[i,a]}));a.push(s[2]=n);var r=i.p+i.u(e),o=new Error,l=function(a){if(i.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,s[1](o)}};i.l(r,l,"chunk-"+e,e)}},i.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,n,r=a[0],o=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(l)var u=l(i)}for(e&&e(a);c<r.length;c++)n=r[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(u)},a=self["webpackChunkmarga"]=self["webpackChunkmarga"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(2493)}));a=i.O(a)})();
//# sourceMappingURL=app.e371682e.js.map