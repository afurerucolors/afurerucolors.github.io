(function(t){function e(e){for(var s,i,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0126":function(t,e,a){"use strict";a("020b")},"020b":function(t,e,a){},"0350":function(t,e,a){t.exports=a.p+"img/navbar-backdrop.56862b49.png"},"083d":function(t,e,a){},"0b15":function(t,e,a){t.exports=a.p+"img/pixiv.b0826367.png"},1599:function(t,e,a){t.exports=a.p+"img/avatar.bdfbc84d.jpg"},"1caf":function(t,e,a){t.exports=a.p+"img/yor.a30ed5c4.jpg"},"1e99":function(t,e,a){},"254d":function(t,e,a){t.exports=a.p+"img/zhongli.2303fd26.jpg"},2780:function(t,e,a){},"2a15":function(t,e,a){t.exports=a.p+"img/marco.262894b2.jpg"},3242:function(t,e,a){},3661:function(t,e,a){t.exports=a.p+"img/phobos.5f7a8cfa.jpg"},"412a":function(t,e,a){"use strict";a("edd1")},"46fa":function(t,e,a){t.exports=a.p+"img/arlecchino.4315f1ff.jpg"},"544b":function(t,e,a){},5580:function(t,e,a){"use strict";a("73bf")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=a("7496"),o=function(){var t=this,e=t._self._c;return e(r["a"],[e("router-view")],1)},i=[],n={name:"App",data:()=>({}),components:{}},c=n,l=a("2877"),u=Object(l["a"])(c,o,i,!1,null,"f6692698",null),d=u.exports,p=a("8c4f"),f=a("8336"),m=a("99d9"),b=a("62ad"),h=a("a523"),g=a("490a"),x=a("0fd9"),v=a("2fa4"),k=function(){var t=this,e=t._self._c;return e(h["a"],{staticClass:"landingContainer",attrs:{fluid:"","pa-0":""}},[e("section",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.showMoreWorks,expression:"showMoreWorks"}],attrs:{id:"art-dis-section","infinite-scroll-disabled":"isBusy","infinite-scroll-distance":"30"}},[e("IllustrationStack")],1),t.isBusy?e("section",{attrs:{id:"infinite-loader"}},[e(x["a"],{staticClass:"mt-4",attrs:{justify:"center"}},[e(g["a"],{attrs:{color:"blue",indeterminate:""}})],1),e(x["a"],{staticClass:"mt-4 blue--text",attrs:{justify:"center"}},[t._v(" now loading... ")])],1):t._e(),e(x["a"],{staticClass:"mt-4",attrs:{justify:"center"}},[e(b["a"],{attrs:{cols:"8"}},[e("div",{staticClass:"c-content-divider"})]),e(b["a"],{attrs:{cols:"8"}},[e(h["a"],{staticClass:"pa-0"},[e(m["a"],{staticClass:"py-0"},[e(v["a"]),e(f["a"],{attrs:{depressed:"",dark:"",color:"blue-grey lighten-2",to:"/request"}},[t._v(" Request or Commission ")]),e(v["a"])],1)],1)],1),e(b["a"],{attrs:{cols:"8"}}),e(b["a"],{staticClass:"mb-6",attrs:{cols:"8"}},[e(h["a"],{staticClass:"pa-0"},[e(m["b"],{staticClass:"c-text-body text-center"},[t._v(" I display only some of my artworks here. "),e("br"),t._v(" if you want to look at the others, you can find them "),e("a",{staticClass:"c-link-text",attrs:{href:"/about/#contact"}},[t._v("here")])])],1)],1)],1)],1)},w=[],C=(a("14d9"),function(){var t=this,e=t._self._c;return e(h["a"],{staticClass:"displayContainer pa-0 mt-2 px-8",attrs:{fluid:""}},[e(h["a"],{staticClass:"stackContainer mt-4 pt-0"},[e("stack",{staticClass:"stack",attrs:{"column-min-width":270,"gutter-width":8,"gutter-height":8,"monitor-images-loaded":""}},t._l(t.images,(function(s,r){return e("stack-item",{key:r,staticClass:"stackItems"},[e(h["a"],{staticClass:"pa-0 pb-0 imageContainer",on:{click:function(e){return t.$store.commit("illustrations/openLightboxPreview",r)}}},[e("div",{staticClass:"imageCover"}),e("img",{key:r,staticClass:"image ma-0 pa-0",attrs:{src:s.link?s.link:a("8370")("./"+s.src),alt:"fail to load"+s.title}})])],1)})),1)],1)],1)}),y=[],_=a("a341"),j={components:{Stack:_["a"],StackItem:_["b"]},data(){return{}},computed:{images(){return this.$store.state.resources.displayedArts}},methods:{},created(){}},A=j,P=(a("b24c"),Object(l["a"])(A,C,y,!1,null,"5310ce54",null)),T=P.exports,O={components:{IllustrationStack:T},data(){return{offset:3,busy:!1}},methods:{showMoreWorks(){let t=this.$store.state.resources.displayedArtsCount,e=this.worksCount-t<this.offset?t+(this.worksCount-t):t+this.offset;if(this.noMoreArts)this.busy=!1;else{this.busy=!0;for(let a=t;a<e;a++)this.$store.state.resources.displayedArts.push(this.$store.state.illustrations.illustrations[a]),setTimeout(3e3);this.busy=!1,this.$store.state.resources.displayedArtsCount+=e-t}}},computed:{noMoreArts(){return this.$store.state.resources.displayedArts.length==this.$store.state.illustrations.illustrations.length},worksCount(){return this.$store.state.illustrations.illustrations.length},isBusy(){return this.busy}},watch:{},mounted(){window.scrollTo(0,0),0==this.$store.state.resources.displayedArtsCount&&this.showMoreWorks()}},q=O,I=Object(l["a"])(q,k,w,!1,null,"59334638",null),$=I.exports,S=a("8212"),L=a("132d"),M=a("adda"),F=function(){var t=this,e=t._self._c;return e(h["a"],{staticClass:"about pb-12",attrs:{fluid:"","pa-0":""}},[e("div",{staticClass:"filter c-text-wrapper"},[e("div",{staticClass:"pt-12"},[e(x["a"],[e(h["a"],{staticClass:"content-wrapper mx-auto pa-0 pb-16"},[e(x["a"],{attrs:{justify:"center"}},[e(b["a"],{staticClass:"text-center pt-0",attrs:{cols:"10"}},[e(h["a"],{staticClass:"pa-0 mb-4"},[e(S["a"],{attrs:{size:"170",color:"blue-grey lighten-5"}},[e(M["a"],{attrs:{src:a("1599")}})],1),e(m["b"],{staticClass:"text-center pb-0 c-text-title"},[t._v(" Afureru Colors ")]),e(m["b"],{staticClass:"text-center py-0 c-text-subtitle"},[t._v(" (Jethro Olwen) ")])],1),e(m["b"],{staticClass:"text-center pb-2 c-text-body"},[t._v(" Language: English/Indonesian. ")]),e(h["a"],{staticClass:"c-text-container pa-0 ma-0 px-6"},[e(m["b"],{staticClass:"text-center c-text-body"},[t._v(" I draw illustrations (Original/Fan Work), character design and concept arts. You can find my works on various platforms that I provided below. For request and commission, "),e("router-link",{staticClass:"c-link-text",attrs:{to:"/request"}},[t._v("click here")]),t._v(". ")],1),e(m["b"],{staticClass:"mt-8 text-center c-text-body",attrs:{id:"contact"}},[t._v(" Check out these platform for my other works! ")]),e(m["a"],{staticClass:"py-0"},[e(v["a"]),t._l(t.$store.state.resources.platforms,(function(s,r){return e(f["a"],{key:r,attrs:{icon:"",href:s.link,target:"_blank"}},[s.icon?e(L["a"],{staticClass:"contactIcon mx-1",attrs:{size:"20px",color:"blue-grey lighten-2"},domProps:{textContent:t._s(s.icon)}}):e(M["a"],{staticClass:"contactIcon iconImage mx-1",attrs:{width:"18",height:"18",contain:"",src:a("61b0")("./"+s.src+".png")}})],1)})),e(v["a"])],2),e("div",{staticClass:"c-content-divider my-6"}),e("Contacts")],1)],1)],1)],1)],1)],1)])])},N=[],z=a("da13"),D=a("5d23"),B=a("34c3"),Y=function(){var t=this,e=t._self._c;return e(x["a"],{attrs:{justify:"center"}},[e(b["a"],[e(m["b"],{staticClass:"text-justify c-text-body",attrs:{id:"contact"}},[e("span",{staticClass:"contact-title"},[t._v("Contacts:")]),t._l(t.contactPersons,(function(a,s){return e(z["a"],{key:s,staticClass:"contactContainer",attrs:{href:a.link,dark:"",target:"_blank"}},[e(B["a"],[e(L["a"],{staticClass:"contact-icon",attrs:{color:""},domProps:{textContent:t._s(a.icon)}})],1),e(D["a"],[e(D["c"],{staticClass:"contact-title",domProps:{textContent:t._s(a.name)}}),e(D["b"],{staticClass:"contact-account",domProps:{textContent:t._s(a.account)}})],1)],1)}))],2)],1)],1)},E=[],W={computed:{contactPersons(){return this.$store.state.resources.contactPersons}}},R=W,U=(a("adf4"),Object(l["a"])(R,Y,E,!1,null,"8f713808",null)),J=U.exports,Q={components:{Contacts:J},data(){return{}},mounted(){window.scrollTo(0,0)}},G=Q,H=(a("7861"),Object(l["a"])(G,F,N,!1,null,"82ff5066",null)),V=H.exports,K=a("8860"),X=a("56b0"),Z=function(){var t=this,e=t._self._c;return e(h["a"],{staticClass:"faq pb-12",attrs:{fluid:"","pa-0":""}},[e("div",{staticClass:"c-text-wrapper filter"},[e("div",{staticClass:"pt-12"},[e(x["a"],{attrs:{justify:"center"}},[e(h["a"],{staticClass:"content-wrapper mx-auto pa-0 pb-16"},[e(x["a"],{staticClass:"c-text-title",attrs:{justify:"center"}},[t._v(" FAQ ")]),e(x["a"],{staticClass:"c-faq-container",attrs:{justify:"center"}},[e(b["a"],[e(K["a"],{attrs:{rounded:""}},[e(X["a"],{attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e(D["a"],[e(D["c"],[t._v(" Could I use your art as profile/cover picture? ")])],1)]},proxy:!0}])},[e(D["a"],{staticClass:"px-4"},[t._v(" Outside of commission or work illustrations, I don't see any problem with it. ")])],1),e(X["a"],{scopedSlots:t._u([{key:"activator",fn:function(){return[e(D["a"],[e(D["c"],[t._v(" Can i repost your works somewhere? ")])],1)]},proxy:!0}])},[e(D["a"],{staticClass:"px-4"},[t._v(" Outside of commission or work illustrations, I don't see any problem with it. Please include the original link or source when you do. ")])],1),e(X["a"],{scopedSlots:t._u([{key:"activator",fn:function(){return[e(D["a"],[e(D["c"],[t._v(" What software do you use to draw? ")])],1)]},proxy:!0}])},[e(D["a"],{staticClass:"px-4"},[t._v(" Clip Studio Paint Pro ")])],1),e(X["a"],{scopedSlots:t._u([{key:"activator",fn:function(){return[e(D["a"],[e(D["c"],[t._v(" Do you take request or commissions? ")])],1)]},proxy:!0}])},[e(D["a"],{staticClass:"px-4"},[e("router-link",{staticClass:"c-link-text",attrs:{to:"/request"}},[t._v("Please visit this section ")])],1)],1),e(X["a"],{scopedSlots:t._u([{key:"activator",fn:function(){return[e(D["a"],[e(D["c"],[t._v(" Can i re-edit or sell your works? ")])],1)]},proxy:!0}])},[e(D["a"],{staticClass:"px-4"},[t._v(" No ")])],1)],1)],1),e(b["a"],[e("contacts")],1)],1)],1)],1)],1)])])},tt=[],et={components:{Contacts:J},data(){return{faqs:[{title:"What software do you use to draw?",text:"Clip Studio Paint Pro"},{title:"Could I use your art as profile picture/background?",text:"Outside of commission or work illustrations, I don't see any problem with it."},{title:"Could I repost your art on other platforms?",text:"Outside of commission or work illustrations, I don't see any problem with it. Please include the source when you do."},{title:"Do you accept commissions?",text:"",link:"/request"}]}},mounted(){window.scrollTo(0,0)},computed:{}},at=et,st=(a("412a"),Object(l["a"])(at,Z,tt,!1,null,"399c93bb",null)),rt=st.exports,ot=function(){var t=this,e=t._self._c;return e(h["a"],{staticClass:"portal grey lighten-5 fill-height",attrs:{fluid:"","pa-0":""}},[e("div",{staticClass:"filter",staticStyle:{margin:"0 auto"}},[e("div",{staticClass:"pt-12"},[e(x["a"],[e(h["a"],{staticClass:"content-wrapper mx-auto pa-0 pb-16"},[e(x["a"],{attrs:{justify:"center"}},[e(b["a"],{staticClass:"text-center pt-0",attrs:{cols:"10"}},[e(h["a"],{staticClass:"pa-0 mb-6"},[e(x["a"],{staticClass:"text-center",attrs:{justify:"center"}},[e(b["a"],{attrs:{cols:"12"}},[e("img",{attrs:{width:"200",src:a("5eb3")}})])],1),e(m["b"],{staticClass:"text-center c-text-title"},[t._v(" Afureru Colors ")]),e(m["b"],{staticClass:"text-center pb-0 c-text-body"},[t._v(" I draw stuffs ✎ ")])],1),e(h["a"],[e(x["a"],{staticClass:"c-text-wrapper",attrs:{justify:"center"}},t._l(t.$store.state.platforms.socialMedias,(function(s){return e(b["a"],{key:s.name,staticClass:"c-text-body",attrs:{cols:"12",sm:"6",md:"4"}},[e(f["a"],{class:[s.text,"font-weight-bold"],attrs:{href:s.disabled?"":s.link,width:"100%",height:"50px",depressed:"",rounded:"",color:s.background}},[e(x["a"],[e(b["a"],{attrs:{cols:"3"}},[s.icon?e(L["a"],{attrs:{size:"22",color:s.text},domProps:{textContent:t._s(s.icon)}}):e(h["a"],{staticClass:"pa-0 ma-0 d-flex",attrs:{fluid:""}},[e(v["a"]),e(M["a"],{staticClass:"icon-image",attrs:{width:"20px",height:"20px",contain:"",color:s.text,src:a("61b0")("./"+(s.platformsrc?s.platformsrc:s.src)+".png")}}),e(v["a"])],1)],1),e(b["a"],{staticClass:"d-flex",attrs:{"align-self":"center"}},[t._v(" "+t._s(s.name)+" ")])],1)],1)],1)})),1),e(m["b"],{staticClass:"text-center my-4 mt-6 c-text-display"},[e("br"),t._v(" Thank You For Visiting!"),e("br")])],1)],1)],1)],1)],1)],1)])])},it=[],nt={components:{Contacts:J},computed:{},data(){return{}},mounted(){window.scrollTo(0,0)}},ct=nt,lt=(a("fedc"),Object(l["a"])(ct,ot,it,!1,null,"cfbc9394",null)),ut=lt.exports,dt=a("f6c4"),pt=a("3a2f"),ft=function(){var t=this,e=t._self._c;return e(r["a"],[e("div",{staticClass:"mainApp"},[e("header",[e("Navbar")],1),e("section",{attrs:{id:"main-content"}},[e(dt["a"],{},[e(h["a"],{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[e("router-view")],1)],1)],1),e("footer",[e("Footer")],1)]),e("LightBox",{attrs:{show:this.$store.state.illustrations.lightbox.show,items:this.$store.state.resources.displayedArts}}),e("div",{staticClass:"sideNavigationPanel"},t._l(t.$store.state.platforms.socialMedias,(function(s,r){return e(pt["a"],{key:r,attrs:{left:"",color:"rgba(0,0,0,0.5)"},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:o}){return[s.hide||s.website?t._e():e("div",[e(f["a"],t._g(t._b({staticClass:"mb-1",attrs:{icon:"",dark:"",href:s.link,target:"_blank"}},"v-btn",o,!1),r),[e(S["a"],{staticClass:"btnTopAvatar",attrs:{size:"25"}},[s.icon?e(L["a"],{attrs:{size:"20",color:"blue-grey lighten-2"},domProps:{textContent:t._s(s.icon)}}):e(M["a"],{staticClass:"contactIcon iconImage mx-1",attrs:{width:"19",height:"19",src:a("61b0")("./"+s.src+".png"),contain:""}})],1)],1)],1)]}}],null,!0)},[e("span",{domProps:{textContent:t._s(s.name)}})])})),1),e("ScrollToTopButton",{attrs:{color:"rgba(0,0,0,0.5)"}}),e("Loader")],1)},mt=[],bt=a("40dc"),ht=a("71a3"),gt=a("fe57"),xt=a("9a96"),vt=function(){var t=this,e=t._self._c;return e("nav",[e(bt["a"],{staticClass:"nav-container ma-0",attrs:{app:"",flat:"",absolute:"","fade-img-on-scroll":"",light:"",fixed:"",height:"150"},scopedSlots:t._u([{key:"img",fn:function({props:s}){return[e(M["a"],t._b({staticClass:"c-nav-background",attrs:{src:a("0350")}},"v-img",s,!1))]}},{key:"extension",fn:function(){return[e(gt["a"],{staticClass:"mb-8",attrs:{centered:""}},[e(xt["a"],{staticClass:"nav-tab-slider"}),t._l(t.navbarTabs,(function(a){return e(ht["a"],{key:a.title,staticClass:"nav-tab",attrs:{"active-class":"active-tab",href:a.link,to:a.link}},[e("span",{staticClass:"nav-tab-text"},[t._v(t._s(a.title))])])}))],2)]},proxy:!0}])},[e(x["a"],{staticClass:"text-center py-8 pb-16",staticStyle:{"backdrop-filter":"blur(0px)"},attrs:{justify:"center"}},[e(b["a"],{staticClass:"py-0",attrs:{cols:"12"}},[e("img",{staticClass:"c-main-logo-img",attrs:{src:a("5eb3"),alt:""},on:{click:function(e){return t.$router.replace("/")}}})]),e(b["a"],{staticClass:"navbarCol2 pa-0",attrs:{cols:"12","align-self":"center"}},[e("span",{staticClass:"c-main-title-text"},[t._v("Afureru Colors")])])],1)],1)],1)},kt=[],wt={data(){return{navbarTabs:[{title:"Artworks",link:"/"},{title:"Request",link:"/request"},{title:"FAQ",link:"/faq"},{title:"About",link:"/about"},{title:"Links",link:"/platforms"}]}}},Ct=wt,yt=(a("9583"),Object(l["a"])(Ct,vt,kt,!1,null,"374757bb",null)),_t=yt.exports,jt=a("553a"),At=function(){var t=this,e=t._self._c;return e(jt["a"],{staticClass:"footer",attrs:{dark:"",padless:""}},[e(h["a"],{staticClass:"dark",attrs:{fluid:""}},[e(x["a"],{staticClass:"bottomNavbar"},[e(v["a"]),e(f["a"],{staticClass:"bottomNavbarText",attrs:{plain:"",to:"/"}},[t._v("Artworks")]),e(f["a"],{staticClass:"bottomNavbarText",attrs:{plain:"",to:"/request"}},[t._v("Request")]),e(f["a"],{staticClass:"bottomNavbarText",attrs:{plain:"",to:"/faq"}},[t._v("Faq")]),e(f["a"],{staticClass:"bottomNavbarText",attrs:{plain:"",to:"/about"}},[t._v("About")]),e(v["a"])],1),e(x["a"],[e(b["a"],{staticClass:"text-center footerText"},[e("span",{staticClass:"footerCaption"},[t._v(" You have reached the end of this page."),e("br"),t._v(" Thank you for sharing your time"),e("br"),e("br")]),e(x["a"],{},[e(v["a"]),t._l(t.$store.state.resources.socialMediasWeb,(function(s,r){return e(f["a"],{key:r,attrs:{icon:"",href:s.link,target:"_blank"}},[s.icon?e(L["a"],{staticClass:"contactIcon mx-1",attrs:{size:"20px",color:"blue-grey lighten-2"},domProps:{textContent:t._s(s.icon)}}):e(M["a"],{staticClass:"contactIcon iconImage mx-1",attrs:{width:"18",height:"18",contain:"",src:a("61b0")("./"+s.src+".png")}})],1)})),e(v["a"])],2),e("br"),e("span",{staticClass:"copyrightText"},[t._v(" Illustrations and Designs by Afureru Colors. "),e("br")]),t._v(" Any concepts and references used in fanwork or fanart (including characters, background, etc) still belongs to the original creator. "),e("br"),e("br")],1)],1)],1)],1)},Pt=[],Tt={data(){return{}},components:{}},Ot=Tt,qt=(a("a36f"),Object(l["a"])(Ot,At,Pt,!1,null,"05d5fcc8",null)),It=qt.exports,$t=a("a797"),St=function(){var t=this,e=t._self._c;return this.$store.state.loader.show?e($t["a"],{staticClass:"overlayLayer",attrs:{opacity:"1",color:"rgba(6, 0, 34)",value:this.$store.state.loader.show}},[e(x["a"],{attrs:{justify:"center"}},[e(b["a"],{staticClass:"text-center",attrs:{"align-self":"center"}},[e(g["a"],{staticClass:"myLoader",attrs:{color:"rgb(50, 228, 235)",indeterminate:"",size:"40"}})],1)],1),e(x["a"],{staticClass:"loadingText",attrs:{justify:"center"}},[e(b["a"],{staticClass:"text-center"},[e("span",{staticClass:"loadingText"},[t._v(" preparing the content ... ")])])],1)],1):t._e()},Lt=[],Mt={},Ft=Mt,Nt=(a("0126"),Object(l["a"])(Ft,St,Lt,!1,null,"5aa5b774",null)),zt=Nt.exports,Dt=a("f977"),Bt=function(){var t=this,e=t._self._c;return e(pt["a"],{attrs:{left:"",color:"rgba(0,0,0,0.5)"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e("div",{staticClass:"btnTop"},[e(f["a"],t._g(t._b({directives:[{def:Dt["b"],name:"scroll",rawName:"v-scroll",value:t.scroll,expression:"scroll"}],attrs:{icon:"",dark:"",disabled:t.disabled},on:{click:function(e){return t.$vuetify.goTo(0,{duration:t.duration,offset:t.offset,easing:"easeInOutQuad"})}}},"v-btn",s,!1),a),[e(S["a"],{staticClass:"btnTopAvatar",attrs:{size:"25"}},[e(L["a"],{attrs:{size:"30",color:"blue-grey lighten-2"}},[t._v("mdi-arrow-up-bold")])],1)],1)],1)]}}])},[e("span",[t._v("Scroll to Top")])])},Yt=[],Et={data(){return{disabled:!0}},methods:{scroll(){Math.floor(window.scrollY)>350?this.$nextTick(()=>{this.disabled=!1}):this.$nextTick(()=>{this.disabled=!0})}},props:{color:{default:"black"},duration:{type:Number,default:400},offset:{type:Number,default:0}},computed:{scrollY(){return Math.floor(window.scrollY)}},watch:{scrollY(t){this.scrollY>350&&this.$nextTick(()=>{this.disabled=!1})}}},Wt=Et,Rt=(a("95b9"),Object(l["a"])(Wt,Bt,Yt,!1,null,"d81fd4ac",null)),Ut=Rt.exports,Jt=a("5e66"),Qt=a("3e35"),Gt=function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"light-box"}},[t.show?e($t["a"],{staticClass:"overlayLayer",attrs:{opacity:"0.7",color:"blue-grey lighten-5"}},[e(h["a"],{staticClass:"lightbox",attrs:{fluid:""}},[e(x["a"],{staticClass:"m-lightbox-options ma-0",attrs:{justify:"end"}},[e(b["a"],{attrs:{cols:"","align-self":"center"}},[t._v(" "+t._s(t.title)+" ")]),e(b["a"],{staticClass:"text-end",attrs:{cols:"auto"}},[e(f["a"],{staticClass:"text-h6",attrs:{small:"",text:"",color:"blue-grey"},on:{click:function(e){return t.closeLightboxPreview()}}},[t._v("x")])],1)],1),e(x["a"],[e(Jt["a"],{staticClass:"toCenter",attrs:{"hide-delimiters":"","show-arrows-on-hover":"",height:"auto"},on:{change:function(e){return t.updateTitle(e)}},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.items,(function(s,r){return e(Qt["a"],{key:r,attrs:{mount:""}},[e(h["a"],[e(M["a"],{attrs:{src:s.link?s.link:a("8370")("./"+s.src),"max-height":"500","max-width":t.$vuetify.breakpoint.width-10,contain:""}})],1)],1)})),1)],1)],1)],1):t._e()],1)},Ht=[],Vt={props:["items","show","type"],data(){return{}},methods:{closeLightboxPreview(){this.$store.commit("illustrations/closeLightboxPreview")},updateTitle(t){this.$store.commit("illustrations/openLightboxPreview",t)}},computed:{title(){return this.$store.state.illustrations.lightbox.title},index:{get(){return this.$store.state.illustrations.lightbox.index},set(t){return this.$store.state.resources.lightbox.index=t}}}},Kt=Vt,Xt=(a("f3b5"),Object(l["a"])(Kt,Gt,Ht,!1,null,"0f336ceb",null)),Zt=Xt.exports,te={name:"App",data:()=>({}),components:{Navbar:_t,Footer:It,Loader:zt,ScrollToTopButton:Ut,LightBox:Zt},async created(){}},ee=te,ae=(a("5bc8"),Object(l["a"])(ee,ft,mt,!1,null,"1cd01bdb",null)),se=ae.exports,re=function(){var t=this,e=t._self._c;return e(h["a"],{staticClass:"request",attrs:{fluid:"","pa-0":""}},[e(h["a"],{staticClass:"pa-0 fill-height",attrs:{fluid:""}},[e(h["a"],{staticClass:"mx-auto pa-0 pb-16 content-wrapper"},[e(x["a"],{attrs:{justify:"center"}},[e(b["a"],{staticClass:"pt-6",attrs:{cols:"10"}},[e(h["a"],{staticClass:"c-text-wrapper c-text-container pa-0 ma-0 px-6"},[e(m["b"],{staticClass:"text-center text-uppercase c-text-title"},[t._v(" Request or Commission ")]),e(m["b"],{staticClass:"text-justify c-text-body"},[t._v(" I accept commission or job request for drawing illustration of original, anime, or movie characters. You could find most of my commission/request work "),e("a",{staticClass:"c-link-text",attrs:{href:"https://cara.app/afurerucolors/portfolio/commissions",target:"_blank"}},[e("u",[t._v("here")])]),e("br"),e("br"),t._v(" This page provide more detailed information regarding basic commission, if you still have unanswered questions, Please message me your inquiries through my social media or e-mail. "),e("br"),e("br"),t._v(" My Commission service is available through "),e("a",{staticClass:"c-link-text",attrs:{href:"https://www.fiverr.com/afurerucolors",target:"_blank"}},[t._v("Fiverr")]),t._v(" and "),e("a",{staticClass:"c-link-text",attrs:{href:"https://sketchmob.com/user-profile/afurerucolors",target:"_blank"}},[t._v("Sketchmob")]),t._v(", or using direct payment through Paypal. Basic commission currently divided into half body composition (limited to around knee level) and full body composition. ")]),e("PriceContainer"),e(m["b"],{staticClass:"text-justify c-text-body"},[e("div",{staticClass:"text-justify"},[t._v(" You could request for more subjects/additional characters with discounted price."),e("br"),e("br"),t._v("Each illustration comes with or without simple background, you could also request for detailed background such as scene with extra charge. "),e("br"),e("br"),t._v(" Pet cover more simple pet that can be find in daily life, while companion could be a mascot or more detailed creature than your usual pet. "),e("br"),e("br"),t._v(" If you have more questions, you could ask your questions through my social media or e-mail. "),e("br"),e("br")]),e("div",{staticClass:"text-justify"},[t._v(" Some notes: "),e("ul",[e("li",[t._v("Please use English or Indonesian for communication.")]),e("li",[t._v("Available payment method supported for direct payment is Paypal.")])])])]),e("Contacts")],1)],1)],1)],1)],1)],1)},oe=[],ie=function(){var t=this,e=t._self._c;return e(h["a"],{staticClass:"pa-0",attrs:{fluid:""}},[e(x["a"],t._l(t.commissions,(function(a,s){return e(b["a"],{key:s,attrs:{cols:"12",md:"6"}},[e("PriceDetail",{attrs:{color:a.color,title:a.title,desc:a.desc,upgrades:a.upgrades,defprice:a.defprice,global:t.isGlobal}})],1)})),1)],1)},ne=[],ce=a("b0af"),le=a("ce7e"),ue=function(){var t=this,e=t._self._c;return e(h["a"],{staticClass:"price-container"},[e(ce["a"],{staticClass:"price-card pa-0",attrs:{flat:"",color:t.color}},[e("div",{staticClass:"price-cover"},[e(m["c"],{staticClass:"price-title"},[e(v["a"],[t._v(t._s(t.title))])],1),e(m["b"],{staticClass:"px-0"},[e(h["a"],{staticClass:"def-price text-center"},[e("span",{staticClass:"price-sign"},[t._v("$")]),e("span",{staticClass:"price"},[t._v(t._s(t.defprice))])]),e(le["a"],{staticClass:"mt-3 mb-5 mx-2"}),e(h["a"],{staticClass:"upgrades"},t._l(t.upgrades,(function(a,s){return e(x["a"],{key:s,staticClass:"py-0",attrs:{"align-content":"space-between"}},[e(b["a"],{staticClass:"py-0",attrs:{cols:"9",sm:"9",md:"8"}},[t._v(t._s(a.desc))]),e(b["a"],{staticClass:"py-0",attrs:{cols:"3",sm:"3",md:"4"}},[t._v("+ "),e("span",{staticClass:"price-sign"},[t._v("$")]),e("span",{staticClass:"price"},[t._v(t._s(a.price))])])],1)})),1)],1)],1)])],1)},de=[],pe={props:["title","desc","defprice","upgrades","global","color"],components:{},data(){return{}}},fe=pe,me=(a("5580"),Object(l["a"])(fe,ue,de,!1,null,"fd33bdda",null)),be=me.exports,he={components:{PriceDetail:be},data(){return{global:!0}},computed:{isGlobal(){return this.global},commissions(){return this.$store.state.request.commissions}},methods:{}},ge=he,xe=Object(l["a"])(ge,ie,ne,!1,null,"279bb90a",null),ve=xe.exports,ke={components:{PriceContainer:ve,Contacts:J},data(){return{}},computed:{contactPersons(){return this.$store.state.resources.contactPersons}},watch:{},mounted(){window.scrollTo(0,0)}},we=ke,Ce=(a("952d"),Object(l["a"])(we,re,oe,!1,null,"36e4aceb",null)),ye=Ce.exports;s["default"].use(p["a"]);const _e=[{path:"/",component:se,redirect:$,children:[{path:"/",name:"Home",component:$},{path:"/request",name:"Artworks",component:ye},{path:"/about",name:"About",component:V},{path:"/faq",name:"Faq",component:rt}]},{path:"/platforms",name:"Platforms",component:ut},{path:"/:catchAll(.*)",name:"NotFound",component:se,redirect:"/"}],je=new p["a"]({mode:"history",routes:_e});var Ae=je,Pe=a("2f62"),Te={namespaced:!0,state:{lightbox:{show:!1,index:null,title:""},displayedArtsCount:0,displayedArts:[],illustrations:[{title:'Arlecchino "The Father"',src:"arlecchino.jpg"},{title:"Phobos",src:"phobos.jpg"},{title:"Marco The Phoenix",src:"marco.jpg"},{title:"Raiden Ei",src:"raiden.jpg"},{title:"Shopping",src:"zhongli.jpg"},{title:"Cyberpunk: Edgerunners - Lucy & David",src:"cyberpunk_edgerunners.jpg"},{title:"Suzume Iwato",src:"suzume.jpg"},{title:"Yor Forger",src:"yor.jpg"},{title:"Yelan",src:"yelan.jpg"},{title:"Denji & Makima",src:"denji_makima.jpg"}]},mutations:{openLightboxPreview(t,e){t.lightbox.index=e,t.lightbox.show=!0,t.lightbox.title=t.illustrations[e].title},closeLightboxPreview(t){t.lightbox.show=!1,t.lightbox.index=null},index(t,e){t.lightbox.index=e,console.log(t.lightbox.index)}}},Oe=(a("bc3a"),{namespaced:!0,state:{displayedArtsCount:0,displayedArts:[],illustrations:[],lightbox:{show:!1,index:null},portfolioLightbox:{show:!1,index:null},contactPersons:[{name:"Instagram",account:"@afurerucolors",link:"https://www.instagram.com/afurerucolors",icon:"mdi-instagram"},{name:"Twitter",account:"@afurerucolors",link:"https://www.twitter.com/afurerucolors",icon:"mdi-twitter"},{name:"Email",account:"afurerucolors@gmail.com",link:"",icon:"mdi-email"}],socialMedias:[{name:"Pixiv",account:"Afureru Colors",link:"https://www.pixiv.net/users/35822162",icon:null,src:"pixiv",background:"blue lighten-5",text:"blue--text text--darken-2"},{name:"Twitter",account:"@AfureruColors",link:"https://www.twitter.com/afurerucolors",icon:"mdi-twitter",background:"blue lighten-4",text:"blue--text text--darken-3"},{name:"Instagram",account:"@afurerucolors",link:"https://www.instagram.com/afurerucolors",icon:"mdi-instagram",background:"red lighten-5",text:"purple--text text--darken-4"},{name:"Facebook",account:"Afureru Colors",link:"https://www.facebook.com/afurerucolors",icon:"mdi-facebook",background:"blue-grey lighten-5",text:"blue--text text--darken-4"},{name:"DeviantArt",account:"AfureruColors",link:"https://www.deviantart.com/afurerucolors",icon:"mdi-deviantart",background:"grey lighten-2",text:"green--text text--darken-4"},{name:"Website",account:"Afureru Colors",link:"https://afurerucolors.github.io",icon:"mdi-web"},{name:"Sketchmob",account:"Afureru Colors",link:"https://sketchmob.com/user-profile/afurerucolors",icon:"mdi-pen",background:"amber lighten-3",text:"indigo--text text--lighten-1"},{name:"Fiverr",account:"Afureru Colors",link:"https://www.fiverr.com/afurerucolors",icon:"mdi-pen",background:"green lighten-4",text:"green--text text--darken-4"}],platforms:[{name:"Pixiv",account:"Afureru Colors",link:"https://www.pixiv.net/users/35822162",icon:null,src:"pixiv",background:"blue lighten-5",text:"blue--text text--darken-2"},{name:"Twitter",account:"@AfureruColors",link:"https://www.twitter.com/afurerucolors",icon:"mdi-twitter",background:"blue lighten-4",text:"blue--text text--darken-3"},{name:"Instagram",account:"@afurerucolors",link:"https://www.instagram.com/afurerucolors",icon:"mdi-instagram",background:"red lighten-5",text:"purple--text text--darken-4"},{name:"Facebook",account:"Afureru Colors",link:"https://www.facebook.com/afurerucolors",icon:"mdi-facebook",background:"blue-grey lighten-5",text:"blue--text text--darken-4"},{name:"DeviantArt",account:"AfureruColors",link:"https://www.deviantart.com/afurerucolors",icon:"mdi-deviantart",background:"grey lighten-2",text:"green--text text--darken-4"}]},mutations:{setLightbox(t,{index:e,type:a}){"gallery"==a?(t.lightbox.index=e,t.lightbox.show=!0):(t.portfolioLightbox.index=e,t.portfolioLightbox.show=!0)},closeLightboxPreview(t){t.lightbox.show=!1,t.lightbox.index=null}},actions:{}}),qe={namespaced:!0,state:{show:!1},mutations:{set(t,e){return t.show=e}}},Ie={namespaced:!0,state:{contactPersons:[{name:"Instagram",account:"@afurerucolors",link:"https://www.instagram.com/afurerucolors",icon:"mdi-instagram"},{name:"Twitter",account:"@afurerucolors",link:"https://www.twitter.com/afurerucolors",icon:"mdi-twitter"},{name:"Email",account:"afurerucolors@gmail.com",link:"",icon:"mdi-email"}],socialMedias:[{name:"Pixiv",account:"Afureru Colors",link:"https://www.pixiv.net/users/35822162",icon:null,src:"pixiv",platformsrc:"pixiv-blue",background:"blue lighten-5",text:"blue--text text--darken-2",quicklink:!0},{name:"Twitter",account:"@afurerucolors",link:"https://www.twitter.com/afurerucolors",icon:"mdi-twitter",background:"blue lighten-4",text:"blue--text text--darken-3",quicklink:!0},{name:"Instagram",account:"@afurerucolors",link:"https://www.instagram.com/afurerucolors",icon:"mdi-instagram",background:"red lighten-5",text:"purple--text text--darken-4",quicklink:!0},{name:"Facebook",account:"Afureru Colors",link:"https://www.facebook.com/afurerucolors",icon:"mdi-facebook",background:"blue-grey lighten-5",text:"blue--text text--darken-4"},{name:"DeviantArt",account:"AfureruColors",link:"https://www.deviantart.com/afurerucolors",icon:"mdi-deviantart",background:"grey lighten-2",text:"green--text text--darken-4",quicklink:!0},{name:"Artstation",account:"Afureru Colors",link:"https://www.artstation.com/afurerucolors",icon:"mdi-artstation",background:"indigo lighten-4",text:"indigo--text text--darken-4",quicklink:!0},{name:"Sketchmob",account:"Afureru Colors",link:"https://sketchmob.com/user-profile/afurerucolors",icon:"mdi-lead-pencil",background:"amber lighten-3",text:"indigo--text text--lighten-1"},{name:"Fiverr",account:"Afureru Colors",link:"https://www.fiverr.com/afurerucolors",icon:"mdi-pen",background:"green lighten-4",text:"green--text text--darken-4"},{name:"Website",account:"Afureru Colors",link:"/",website:!0,icon:"mdi-web",background:"teal lighten-4",text:"teal--text text--darken-4"}]}},$e={namespaced:!0,state:{commissions:[{title:"Half Body",desc:"",defprice:"40",upgrades:[{desc:"+ Character",price:"35"},{desc:"Background",price:"30"},{desc:"Companion",price:"20"}],color:"rgb(202, 222, 238)"},{title:"Full Body",desc:"",defprice:"70",upgrades:[{desc:"+ Character",price:"60"},{desc:"Background",price:"30"},{desc:"Companion",price:"20"}],color:"rgb(238, 235, 202)"}]}};s["default"].use(Pe["a"]);var Se=new Pe["a"].Store({state:{},modules:{illustrations:Te,platforms:Ie,request:$e,resources:Oe,loader:qe}}),Le=a("f309");s["default"].use(Le["a"]);var Me=new Le["a"]({}),Fe=a("487a"),Ne=a.n(Fe);a("5aea");s["default"].use(Ne.a),s["default"].config.productionTip=!1,new s["default"]({router:Ae,store:Se,vuetify:Me,render:t=>t(d)}).$mount("#app")},"5aea":function(t,e,a){},"5bc8":function(t,e,a){"use strict";a("d601")},"5eb3":function(t,e,a){t.exports=a.p+"img/logo.4053e026.png"},"61b0":function(t,e,a){var s={"./arxist-dark.png":"e8f6","./arxist.png":"e6a4","./pixiv-blue.png":"ed16","./pixiv-dark.png":"8190","./pixiv.png":"0b15"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id="61b0"},"73bf":function(t,e,a){},7861:function(t,e,a){"use strict";a("544b")},"7af8":function(t,e,a){t.exports=a.p+"img/suzume.7358ddc0.jpg"},8190:function(t,e,a){t.exports=a.p+"img/pixiv-dark.1cdcc49c.png"},8370:function(t,e,a){var s={"./arlecchino.jpg":"46fa","./cyberpunk_edgerunners.jpg":"85b4","./denji_makima.jpg":"84d4","./marco.jpg":"2a15","./phobos.jpg":"3661","./raiden.jpg":"e03b","./suzume.jpg":"7af8","./yelan.jpg":"f84f","./yor.jpg":"1caf","./zhongli.jpg":"254d"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id="8370"},"84d4":function(t,e,a){t.exports=a.p+"img/denji_makima.390eb7f1.jpg"},"85b4":function(t,e,a){t.exports=a.p+"img/cyberpunk_edgerunners.ed421aff.jpg"},"952d":function(t,e,a){"use strict";a("2780")},9583:function(t,e,a){"use strict";a("1e99")},"95b9":function(t,e,a){"use strict";a("083d")},a36f:function(t,e,a){"use strict";a("3242")},adf4:function(t,e,a){"use strict";a("ceeb")},b24c:function(t,e,a){"use strict";a("d298")},c576:function(t,e,a){},ceeb:function(t,e,a){},d298:function(t,e,a){},d601:function(t,e,a){},e03b:function(t,e,a){t.exports=a.p+"img/raiden.b5ad332a.jpg"},e6a4:function(t,e,a){t.exports=a.p+"img/arxist.9d0868cd.png"},e8f6:function(t,e,a){t.exports=a.p+"img/arxist-dark.38a6462c.png"},ecf0:function(t,e,a){},ed16:function(t,e,a){t.exports=a.p+"img/pixiv-blue.e5b9a411.png"},edd1:function(t,e,a){},f3b5:function(t,e,a){"use strict";a("ecf0")},f84f:function(t,e,a){t.exports=a.p+"img/yelan.63d0c2df.jpg"},fedc:function(t,e,a){"use strict";a("c576")}});
//# sourceMappingURL=app.35971c1a.js.map