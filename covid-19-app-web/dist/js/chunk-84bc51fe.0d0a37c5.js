(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84bc51fe"],{"0fd9":function(t,e,a){"use strict";a("4b85");var s=a("a026"),n=a("d9f7"),r=a("80d2");const i=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return i.reduce((a,s)=>(a[t+Object(r["y"])(s)]=e(),a),{})}const u=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:u})),c=t=>[...o,"space-between","space-around"].includes(t),f=l("justify",()=>({type:String,default:null,validator:c})),p=t=>[...o,"space-between","space-around","stretch"].includes(t),h=l("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(h)},m={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,a){let s=m[t];if(null!=a){if(e){const a=e.replace(t,"");s+="-"+a}return s+="-"+a,s.toLowerCase()}}const v=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...d,justify:{type:String,default:null,validator:c},...f,alignContent:{type:String,default:null,validator:p},...h},render(t,{props:e,data:a,children:s}){let r="";for(const n in e)r+=String(e[n]);let i=v.get(r);if(!i){let t;for(t in i=[],g)g[t].forEach(a=>{const s=e[a],n=b(t,a,s);n&&i.push(n)});i.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),v.set(r,i)}return t(e.tag,Object(n["a"])(a,{staticClass:"row",class:i}),s)}})},"2a7f":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("71d9"),n=a("80d2");const r=Object(n["h"])("v-toolbar__title"),i=Object(n["h"])("v-toolbar__items");s["a"]},"4bd4":function(t,e,a){"use strict";var s=a("58df"),n=a("7e2b"),r=a("3206");e["a"]=Object(s["a"])(n["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"62ad":function(t,e,a){"use strict";a("4b85");var s=a("a026"),n=a("d9f7"),r=a("80d2");const i=["sm","md","lg","xl"],o=(()=>i.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>i.reduce((t,e)=>(t["offset"+Object(r["y"])(e)]={type:[String,Number],default:null},t),{}))(),u=(()=>i.reduce((t,e)=>(t["order"+Object(r["y"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(u)};function c(t,e,a){let s=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");s+="-"+a}return"col"!==t||""!==a&&!0!==a?(s+="-"+a,s.toLowerCase()):s.toLowerCase()}}const f=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:s,parent:r}){let i="";for(const n in e)i+=String(e[n]);let o=f.get(i);if(!o){let t;for(t in o=[],d)d[t].forEach(a=>{const s=e[a],n=c(t,a,s);n&&o.push(n)});const a=o.some(t=>t.startsWith("col-"));o.push({col:!a||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(i,o)}return t(e.tag,Object(n["a"])(a,{class:o}),s)}})},d60c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticStyle:{height:"100%"},attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"overflow-hidden",attrs:{shaped:"",outlined:""}},[a("v-snackbar",{attrs:{top:"",color:"primary",timeout:5e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("h4",{staticClass:"ma-2",domProps:{textContent:t._s(t.getMessage)}}),a("v-btn",{attrs:{text:"",icon:"","x-small":"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[a("v-icon",{domProps:{textContent:t._s(t.mdiCloseCircleOutline)}})],1)],1),a("v-toolbar",{staticClass:"shadow-sm mb-3",attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",{domProps:{textContent:t._s(t.$t("auth.login"))}})],1),a("v-card-text",[a("v-form",{staticClass:"mx-4 my-4",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{staticClass:"v-card--shaped",attrs:{dense:"",outlined:"",prefix:"@",rules:t.rules.username,label:t.$t("auth.username"),required:""},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),a("v-text-field",{staticClass:"v-card--shaped",attrs:{dense:"",outlined:"",rules:t.rules.password,"append-icon":t.show_password?t.mdiEye:t.mdiEyeOff,label:t.$t("auth.password"),type:t.show_password?"text":"password",required:""},on:{"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("div",{staticClass:"my-2 mx-auto align-center align-content-center"},[a("v-btn",{staticClass:"d-block mx-auto v-card--shaped",attrs:{disabled:!t.valid,color:"primary",loading:t.loading},on:{click:t.submit}},[t._v(" "+t._s(t.$t("auth.login"))+" ")]),a("v-btn",{staticClass:"d-block mx-auto my-2",attrs:{text:"",small:""},on:{click:function(e){return t.$router.push("register")}}},[t._v(" "+t._s(t.$t("auth.goToSignUp"))+" ")])],1)],1)],1)],1)],1)],1)},n=[],r=(a("d3b7"),a("b675")),i=a("4360"),o=a("edac"),l=a("94ed"),u={name:"Login",data:function(){return{mdiEye:l["o"],mdiEyeOff:l["p"],mdiCloseCircleOutline:l["l"],valid:!1,show_password:!1,snackbar:!1,errorMsg:!1,loading:!1,user:o["b"],rules:o["a"]}},methods:{submit:function(){var t=this;this.loading=!0,r["a"].post("auth/login",this.user).then((function(e){i["a"].dispatch("setUser",{user:e.data.user}),i["a"].dispatch("setToken",{token:e.data.token}),i["a"].dispatch("setStateMessage","Successfully logged in"),t.$router.push({name:"Home"})}),(function(t){i["a"].dispatch("setStateMessage",t.response.data)})).finally((function(){t.snackbar=!0,t.loading=!1}))}},computed:{getMessage:function(){return i["a"].getters.getMessage}}},d=u,c=a("2877"),f=a("6544"),p=a.n(f),h=a("8336"),g=a("b0af"),m=a("99d9"),b=a("62ad"),v=a("4bd4"),y=a("132d"),w=a("0fd9"),_=a("2db4"),k=a("8654"),C=a("71d9"),x=a("2a7f"),j=Object(c["a"])(d,s,n,!1,null,null,null);e["default"]=j.exports;p()(j,{VBtn:h["a"],VCard:g["a"],VCardText:m["c"],VCol:b["a"],VForm:v["a"],VIcon:y["a"],VRow:w["a"],VSnackbar:_["a"],VTextField:k["a"],VToolbar:C["a"],VToolbarTitle:x["a"]})},edac:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return n}));a("ac1f"),a("1276"),a("498a");var s={username:"",password:"",gender:"",age_group:""},n={name:[function(t){return(t||"").length>0||"Name is required"},function(t){return t.trim().split(" ").length>=2&&t.length>5||"Please enter valid name"}],email:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],password:[function(t){return!!t||"Password is required."},function(t){return t.length>=6||"Min 6 characters"}]}}}]);
//# sourceMappingURL=chunk-84bc51fe.0d0a37c5.js.map