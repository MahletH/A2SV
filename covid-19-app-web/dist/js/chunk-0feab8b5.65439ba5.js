(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0feab8b5"],{"0c18":function(t,e,s){},1681:function(t,e,s){},"8ab4":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",{staticClass:"about"},[s("section",{staticClass:"mb-12 text-justify"},[s("v-container",[s("v-row",[s("v-col",{staticClass:"px-md-10",attrs:{cols:"12",md:"7"}},t._l(t.descriptions,(function(e,i){return s("div",{key:i},[s("h3",{staticClass:"display-1 font-weight-thin"},[t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"my-5 grey--text text--darken-2",domProps:{innerHTML:t._s(e.content)}})])})),0),s("v-col",{staticClass:"px-md-10",attrs:{cols:"12",md:"5"}},[s("div",[s("h3",{staticClass:"display-1 font-weight-thin"},[t._v("Who we are")]),s("div",{staticClass:"my-5 grey--text text--darken-2"},[s("p",[s("strong",[t._v("A2SV - Africa to Silicon Valley")]),t._v(" is a team of highly motivated and talented students from Ethiopia, led by an ex-Google and Palantir Software/ML engineer. The team went through an intense 3-month preparation program in the pursuit of summer internships at top SV companies. Now A2SV dedicates all the time and energy to the war against COVID-19. ")])])]),s("div",{staticClass:"mx-auto mt-10 py-5"},[t.showAlert?s("v-alert",{attrs:{type:t.type,dismissible:""},domProps:{textContent:t._s(t.message)}}):t._e(),s("h3",{staticClass:"display-1 font-weight-thin"},[t._v("Contact us")]),s("v-form",{staticClass:"py-5"},[s("v-text-field",{attrs:{label:"Name",rules:t.rules.nameRules,counter:"10"},model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}}),s("v-text-field",{attrs:{label:"Email",rules:t.rules.emailRules},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}}),s("v-textarea",{attrs:{rows:"5",label:"Message",rules:t.rules.messageRules},model:{value:t.contact.message,callback:function(e){t.$set(t.contact,"message",e)},expression:"contact.message"}}),s("div",{staticClass:"text-center py-3"},[s("v-btn",{staticClass:"primary mx-auto",attrs:{width:"100"},on:{click:t.sendForm}},[t._v(" Send "),s("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("mdi-send")])],1)],1)],1)],1)])],1)],1)],1),s("br"),s("br"),s("section",{staticClass:"my-12"},[s("v-parallax",{staticStyle:{"min-height":"400px",height:"auto"},attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"}},[s("v-container",[s("v-row",{staticClass:"py-5 text-center white--text"},t._l(t.actions,(function(e,i){return s("v-col",{key:"actions_"+i,staticClass:"px-12",attrs:{cols:"12",md:"4"}},[s("v-icon",{staticClass:"white--text mb-7",staticStyle:{"font-size":"4em"},domProps:{textContent:t._s(e.icon)}}),s("h1",[t._v(t._s(e.title))]),s("p",{staticClass:"font-weight-thin my-2"},[t._v(t._s(e.description))]),t._l(e.links,(function(e,i){return s("a",{key:"links_"+i,staticClass:"mx-2 grey--text text--lighten-5",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])}))],2)})),1)],1)],1)],1),s("br"),s("br"),s("section",{staticClass:"my-12"},[s("v-container",{staticClass:"text-center"},[s("h1",{staticClass:"display-2 font-weight-thin mb-12"},[t._v("Our Partners")]),t._l(t.partners,(function(e,i){return s("span",{key:i,staticClass:"d-inline-block my-5 mx-2"},[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[s("a",t._g({attrs:{href:e.link,target:"_blank"}},a),[s("img",{staticStyle:{opacity:"0.7"},attrs:{height:"180px",alt:"partner.name",src:e.image_url}})])]}}],null,!0)},[s("span",[t._v(t._s(e.name))])])],1)}))],2)],1),s("br"),s("br")])},a=[],o=s("bc3a"),n=s.n(o),r={data:function(){return{showAlert:!1,message:"",type:"success",contact:{name:"",email:"",message:""},rules:{nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],messageRules:[function(t){return!!t||"Message is required"},function(t){return t&&t.length<=10||"Message must be less than 150 characters"}]},descriptions:[{title:"Corona App",content:"<p> <strong> COVID-19 Symptom Tracker </strong> is a non-commercial app that uses crowd-sourcing to collect and visualize the density of the relevant symptoms. Registration only asks about age and gender to be used for data science purposes. Users can anonymously report symptoms and choose a location to see the density of symptoms in a map view. The data is aggregated by places, therefore, the app can help people avoid visiting a grocery store or a gas station that is heavily used by symptomatic people. </p>\n                    <p> By filling out simple questionnaires about your health and symptoms every day you can help tackle the spread of the virus and ending the pandemic. Moreover, by looking or searching places you want to go, maybe to run errands or to grab groceries, you can find out how symptomatic the place is and what kinda measure you should take. </p>"},{title:"The Mission",content:"<p> When you have coronavirus, you are not just afraid of dying but also about affecting your loved ones. When you go out to the local market or any other place, you fear that you might get infected. Using CoronaApp, users can easily track their movements to keep data and predict which areas are high-risk at the moment. </p>\n                    <p> We are striving to have everyone well-aware of the coronavirus and be vigilant towards it, having reliable information that’s analyzed and is ready to comprehend and make use out of. </p>"},{title:"Your Data",content:"<p> Your data will be used anonymously for the purpose of data science and statistics being open source meaning any info generated isn’t traced back to a single user. This is a non-commercial project with no intention of profit. </p>"}],actions:[{icon:"mdi-search-web",title:"A2SV Website",description:"Check out the team's website to learn more about our team, our program, our team members and how we started our journey.",links:[{text:"Visit Website",href:"http://a2sv.org/"}]},{icon:"mdi-cloud-download-outline",title:"Download The App",description:"Download our Symptom-tracking app, easily locate areas with a high density of symptoms using real-time data, and keep each other safe.",links:[{text:"Get on Play Store",href:"#"},{text:"Get on App Store",href:"#"}]},{icon:"mdi-youtube",title:"Watch the Video",description:"Learn how our app help mitigate the spread of COVID-19 and flatten the curve especially in countries with limited testing capacity.",links:[{text:"Go to Youtube",href:"#"}]}],partners:[{name:"Addis Ababa University",image_url:"https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Addis_Ababa_University_logo.png/220px-Addis_Ababa_University_logo.png",link:"http://www.aau.edu.et/"},{name:"This Organization",image_url:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",link:"#"},{name:"This Other Organization",image_url:"https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",link:"#"}]}},methods:{sendForm:function(){var t=this;n.a.post("".concat("http://sym-track.herokuapp.com/api","/messages"),this.contact).then((function(e){t.showAlert=!0,console.log(e),t.type="success",t.message="Your feedback is successfully submitted!"}),(function(e){t.showAlert=!0,console.log(e),t.type="error",t.message="Something went wrong!"}))}}},l=r,h=s("2877"),c=s("6544"),d=s.n(c),u=(s("0c18"),s("10d2")),p=s("afdd"),m=s("9d26"),g=s("f2e7"),v=s("7560"),f=s("2b0e"),y=f["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),b=s("58df"),w=s("d9bd"),_=Object(b["a"])(u["a"],g["a"],y).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(p["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(m["a"],{props:{color:t}},"$cancel")])},__cachedIcon(){return this.computedIcon?this.$createElement(m["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...u["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||v["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(w["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),x=s("8336"),C=s("62ad"),k=s("a523"),B=s("a75b"),$=s("7e2b"),A=s("3206"),S=Object(b["a"])($["a"],Object(A["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),T=s("132d"),I=(s("94aa"),f["default"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}));const V=Object(b["a"])(I);var O=V.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"},s=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[s,i])}}),E=s("0fd9"),D=s("8654");s("1681");const j=Object(b["a"])(D["a"]);var H=j.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...D["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=D["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){D["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),z=(s("9734"),s("4ad4")),L=s("a9ad"),N=s("16b7"),R=s("b848"),W=s("75eb"),G=s("f573"),M=s("80d2"),P=Object(b["a"])(L["a"],N["a"],R["a"],W["a"],G["a"],g["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,s=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||s?a=i+t.width/2-e.width/2:(this.left||this.right)&&(a=i+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),this.calcXOverflow(a,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,s=!1!==this.attach?t.offsetTop:t.top;let i=0;return this.top||this.bottom?i=s+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=s+t.height/2-e.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),this.calcYOverflow(i+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(M["f"])(this.maxWidth),minWidth:Object(M["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(M["o"])(this,"activator",!0)&&Object(w["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=z["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===M["r"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}}),F=Object(h["a"])(l,i,a,!1,null,null,null);e["default"]=F.exports;d()(F,{VAlert:_,VBtn:x["a"],VCol:C["a"],VContainer:k["a"],VContent:B["a"],VForm:S,VIcon:T["a"],VParallax:O,VRow:E["a"],VTextField:D["a"],VTextarea:H,VTooltip:P})},"94aa":function(t,e,s){},9734:function(t,e,s){},afdd:function(t,e,s){"use strict";var i=s("8336");e["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-0feab8b5.65439ba5.js.map