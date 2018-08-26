webpackJsonp([1],{0:function(t,e){},GQKK:function(t,e){},Jh2A:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("NYxO"),o={name:"navbar",computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t})({},Object(r.b)(["User"])),methods:{removeUser:function(){this.$cookies.remove("token",{path:"/"}),this.$store.dispatch("removeUser"),this.$router.push("/")}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-dark navbar-expand-sm bg-dark mb-4"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Go2U")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"mobile-nav"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[t.User?[a("li",{staticClass:"nav-item compromise"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v(" "+t._s(t.User.name))])]),t._v(" "),a("li",{staticClass:"nav-item compromise"},[a("a",{staticClass:"nav-link",attrs:{href:"/logout"},on:{click:t.removeUser}},[t._v(" Log Out ")])])]:[a("li",{staticClass:"nav-item compromise"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v(" Log In")])],1),t._v(" "),a("li",{staticClass:"nav-item compromise"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/signup"}},[t._v(" Sign Up")])],1)]],2)])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#mobile-nav"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var n=a("VU/8")(o,i,!1,function(t){a("Jh2A")},"data-v-22785d50",null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("footer",{staticClass:"bg-dark text-white mt-4 p-4 text-center footer "},[this._v("\n    Copyright © "+this._s((new Date).getFullYear())+"\n  ")])])},staticRenderFns:[]};var c=a("VU/8")({name:"Footer"},l,!1,function(t){a("QMsM")},"data-v-8cf35242",null).exports,u={name:"Notification",computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t})({},Object(r.b)(["Notification"]))},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"toast-animation"}},[this.Notification.show?e("div",{staticClass:"toast",class:this.Notification.header},[this._v("\n        "+this._s(this.Notification.body)+"\n  ")]):this._e()])},staticRenderFns:[]};var h={name:"App",components:{"nav-bar":n,"app-footer":c,notification:a("VU/8")(u,d,!1,function(t){a("fjQo")},"data-v-155d4a76",null).exports},methods:{},created:function(){this.$store.dispatch("authenticateUser")},beforeUpdate:function(){this.$store.dispatch("authenticateUser")}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("notification"),this._v(" "),e("nav-bar",{staticClass:"top"}),this._v(" "),e("div",{staticClass:"container adjust"},[e("router-view")],1),this._v(" "),e("app-footer",{staticClass:"bottom"})],1)},staticRenderFns:[]};var p=a("VU/8")(h,m,!1,function(t){a("edQI"),a("yIi8")},"data-v-4372403e",null).exports,f=a("/ocq"),v=a("mtWM"),g=a.n(v),U="",b="http://www.go2u.ml",w={name:"Urls",data:function(){return{longUrl:"",shortUrl:"",shortUrlState:0,longUrlState:0}},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t})({addShortUrlClass:function(){switch(this.shortUrlState){case 0:return"default-state";case 1:return"loading";case 2:case 4:return"right";default:return"wrong"}},addLongUrlClass:function(){switch(this.longUrlState){case 0:return"default-state";case 1:return"loading";case 2:case 4:return"right";default:return"wrong"}},completeShortUrl:function(){return 4===this.shortUrlState?b+"/"+this.shortUrl:""}},Object(r.b)(["Url","User"])),methods:{goTo:function(t){window.location=t},copyShortUrl:function(){this.$refs.text.select(),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.$store.dispatch("notification",{header:"success",body:"Copied to Clipboard"})},checkShortUrl:function(){var t=this;this.shortUrl&&0!==this.shortUrl.length?this.shortUrl.length>0&&4!==this.shortUrlState&&(this.shortUrlState=1,g.a.post(U+"/api/url/check",{shortUrl:this.shortUrl}).then(function(e){e.data.available?t.shortUrlState=2:t.shortUrlState=3}).catch(function(e){t.shortUrlState=3,t.$store.dispatch("notification",{header:"error",body:e.response.data.message})})):this.shortUrlState=0},submit:function(){var t=this;2!==this.shortUrlState&&0!==this.shortUrlState||(this.longUrl.length>0?(this.longUrlState=1,g.a.post(U+"/api/url",{longUrl:this.longUrl,shortUrl:this.shortUrl}).then(function(e){t.longUrlState=4,t.shortUrl=e.data.shortUrl,t.shortUrlState=4,t.User&&t.$store.dispatch("addUrl",{longUrl:e.data.longUrl,shortUrl:e.data.shortUrl})}).catch(function(e){console.log(e),t.longUrlState=3,t.shortUrlState=3,t.$store.dispatch("notification",{header:"error",body:e.response.data.message})})):this.$store.dispatch("notification",{header:"notification",body:"There is Nothing to short"}))},removeUrl:function(t){var e=this;g.a.delete(U+"/api/url/",{data:{shortUrl:t}}).then(function(t){t.data.delete?(e.$store.dispatch("removeUrl",t.data.shortUrl),e.$store.dispatch("notification",{header:"success",body:"Deleted Url"}),e.resetAll()):e.$store.dispatch("notification",{header:"notification",body:"Delete Failed"})}).catch(function(t){e.$store.dispatch("notification",{header:"error",body:t.response.data.message||"OOPS Something wrong happen"})})},resetAll:function(){this.longUrl="",this.shortUrl=""}},watch:{shortUrl:function(t,e){4===this.longUrlState?this.shortUrlState=4:4===this.shortUrlState?(this.longUrlState=0,this.shortUrlState=0):0===t.length?this.shortUrlState=0:4!==this.shortUrlState&&t.length>0&&this.debounceCheckShort()},longUrl:function(t,e){4===this.longUrlState?(this.longUrlState=0,this.shortUrlState=0,this.shortUrl=""):0===t.length&&(this.longUrlState=0)}},created:function(){this.debounceCheckShort=_.debounce(this.checkShortUrl,700)},mounted:function(){this.$refs.longUrlref.focus()}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10 col-sm-12 col-lg-10 m-auto"},[a("h1",{staticClass:"display-4 text-center"},[t._v(">> Go2U <<")]),t._v(" "),a("form",{staticClass:"mt-5"},[a("div",{staticClass:"input-group mt-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.longUrl,expression:"longUrl"}],ref:"longUrlref",staticClass:"form-control form-control-lg adjust",class:t.addLongUrlClass,attrs:{type:"text",placeholder:"Long Url","aria-label":"Long Url","aria-describedby":"Long-url"},domProps:{value:t.longUrl},on:{input:function(e){e.target.composing||(t.longUrl=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"btn btn-info input-group-text",attrs:{id:"Long-url"},on:{click:t.submit}},[t._v(" Shrink ")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:4!==t.shortUrlState,expression:"shortUrlState !== 4"}],staticClass:"input-group my-5"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.shortUrl,expression:"shortUrl"}],staticClass:"form-control form-control-lg adjust",class:t.addShortUrlClass,attrs:{type:"text","aria-describedby":"short-url",placeholder:"Short Url (Optional)"},domProps:{value:t.shortUrl},on:{input:function(e){e.target.composing||(t.shortUrl=e.target.value)}}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:4===t.shortUrlState,expression:"shortUrlState === 4 "}],staticClass:"input-group mt-5"},[a("input",{ref:"text",staticClass:"form-control form-control-lg adjust",class:t.addShortUrlClass,attrs:{type:"text","aria-describedby":"short-url",readonly:""},domProps:{value:t.completeShortUrl}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"btn btn-success input-group-text",on:{click:t.copyShortUrl}},[t._v(" Copy ")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.Url&&t.Url.length>0,expression:"Url && Url.length > 0 "}],staticClass:"table-hover table-condensed table-responsive"},[a("table",{staticClass:"table"},[t._m(1),t._v(" "),a("tbody",t._l(t.Url,function(e){return a("tr",[a("td",{staticClass:"text-center"},[a("h6",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.goTo(e.longUrl)}}},[t._v(t._s(e.shortUrl))])]),t._v(" "),a("td",{staticClass:"text-center"},[a("h6",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.goTo(e.longUrl)}}},[t._v(t._s(e.longUrl))])]),t._v(" "),a("td",[a("span",{staticClass:"btn btn-danger",staticStyle:{cursor:"pointer"},on:{click:function(a){t.removeUrl(e.shortUrl)}}},[t._v("Delete")])])])}))])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"short-url"}},[this._v("http://go2u.ml/")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"text-center"},[this._v("go2u.ml/")]),this._v(" "),e("th",{staticClass:"text-center"},[this._v(" -> ")]),this._v(" "),e("th",{staticClass:"text-center"},[this._v(" Action ")])])])}]};var C=a("VU/8")(w,x,!1,function(t){a("GQKK")},"data-v-43a2ac7e",null).exports,S=a("M4fF"),y=a.n(S),$={name:"Signup",data:function(){return{email:"",password:"",confirmPassword:"",emailState:0,passwordState:0,name:""}},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t})({addEmailClass:function(){switch(this.emailState){case 0:return"default-state";case 1:return"loading";case 2:return"right";default:return"wrong"}},addPasswordClass:function(){switch(this.passwordState){case 0:return"default-state";case 1:return"loading";case 2:return"right";default:return"wrong"}}},Object(r.b)(["User"])),methods:{validateEmail:function(t){return/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(t)},submit:function(){var t=this;console.log("submit fired"),2===this.emailState&&2===this.passwordState?g.a.post(U+"/api/user/signup",{name:this.name,email:this.email,password:this.password}).then(function(e){console.log(e),t.$store.dispatch("notification",{header:"success",body:"Successfully Registered"}),t.$router.push("/login")}).catch(function(e){console.log(e),t.$store.dispatch("notification",{header:"error",body:e.response.message})}):this.$store.dispatch("notification",{header:"warning",body:"All Values must be valid"})},checkEmail:function(){var t=this;this.emailState=1,console.log("check Email Fired"),g.a.get(U+"/api/user/checkemail",{params:{email:this.email}}).then(function(e){e.data.available?t.emailState=e.data.available?2:3:t.emailState=3}).catch(function(e){console.log(e.response.data),t.emailState=3})}},watch:{email:function(t,e){0===t.length?this.emailState=0:this.validateEmail(t)?this.debounceEmail():this.emailState=3},confirmPassword:function(t,e){0===t.length&&0===this.password.length?this.passwordState=0:t===this.password?this.passwordState=2:t!==this.password&&(this.passwordState=3)},password:function(t,e){0===t.length&&0===this.confirmPassword.length?this.passwordState=0:t===this.confirmPassword?this.passwordState=2:t!==this.confirmPassword&&(this.passwordState=3)}},beforeMount:function(){this.debounceEmail=y.a.debounce(this.checkEmail,700),this.User&&this.$router.push("/")},mounted:function(){this.$refs.username.focus()}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-sm-12 col-lg-6 m-auto"},[a("h1",{staticClass:"display-4 text-center"},[t._v("Sign Up")]),t._v(" "),a("p",{staticClass:"lead text-center"},[t._v("Create New Account")]),t._v(" "),a("form",[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],ref:"username",staticClass:"form-control form-control-lg adjust",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg adjust ",class:t.addEmailClass,attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg adjust",class:t.addPasswordClass,attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"form-control form-control-lg adjust",class:t.addPasswordClass,attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-info btn-block mt-4",attrs:{type:"submit",placeholder:"Sign Up"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}})])])])])])},staticRenderFns:[]};var P=a("VU/8")($,k,!1,function(t){a("n4d9")},"data-v-cb324db4",null).exports,j={name:"Login",data:function(){return{email:"",password:"",emailState:0}},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t})({addEmailClass:function(){switch(this.emailState){case 0:return"default-state";case 1:return"loading";case 2:return"right";default:return"wrong"}}},Object(r.b)(["User"])),methods:{validateEmail:function(t){return/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(t)},submit:function(){var t=this;2===this.emailState?g.a.post(U+"/api/user/login",{email:this.email,password:this.password}).then(function(e){t.$store.dispatch("addUser",e.data.user),t.$store.dispatch("urlList"),t.$router.push("/")}).catch(function(e){console.log(e),t.$store.dispatch("notification",{header:"error",body:e.response.data.message})}):this.$store.dispatch("notification",{header:"notification",body:"All Values must be valid"})}},watch:{email:function(t,e){0===t.length?this.emailState=0:this.validateEmail(t)?this.emailState=2:this.emailState=3}},beforeMount:function(){this.User&&this.$router.push("/")},mounted:function(){this.$refs.email.focus()}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-sm-12 col-lg-6 m-auto"},[a("h1",{staticClass:"display-4 text-center"},[t._v("Log In")]),t._v(" "),a("p",{staticClass:"lead text-center"},[t._v("Welcome Back")]),t._v(" "),a("form",[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"email",staticClass:"form-control form-control-lg adjust",class:t.addEmailClass,attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg ",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-info btn-block mt-4",attrs:{type:"submit",placeholder:"Log In"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}})])])])])])},staticRenderFns:[]};var N=a("VU/8")(j,O,!1,function(t){a("iQuY")},"data-v-6a30bbf3",null).exports;s.a.use(f.a);var E=new f.a({mode:"history",routes:[{path:"/",name:"dashboard",component:C},{path:"/signup",name:"signup",component:P},{path:"/login",name:"login",component:N},{path:"*",name:"fallback",component:C}]}),z=a("8+8L"),A=a("ppUw"),L=a.n(A),F=a("wvfG"),Q=a.n(F);s.a.use(r.a);var R=new r.a.Store({strict:!0,state:{user:void 0,url:void 0,notification:{header:void 0,body:void 0,footer:void 0,show:!1}},getters:{User:function(t){return t.user},Url:function(t){return t.url},Notification:function(t){return t.notification}},mutations:{addUser:function(t,e){t.user=e},addUrl:function(t,e){e instanceof Array?t.url=e:e instanceof Object&&(t.url?t.url.push(e):t.url=[e])},removeUser:function(t){t.user=void 0},removeUrls:function(t){t.url=void 0},removeUrl:function(t,e){if(t.url&&t.url instanceof Array){for(var a=0;a<t.url.length;a++)if(t.url[a].shortUrl===e){t.url.splice(a,1);break}0===t.url.length&&(url=void 0)}},addNotification:function(t,e){t.notification.header=e.header,t.notification.body=e.body,t.notification.footer=e.footer,t.notification.show=e.show||!1}},actions:{addUser:function(t,e){t.commit("addUser",e)},authenticateUser:function(t){g.a.get(U+"/api/user/authenticateuser").then(function(e){e.data.user?(t.commit("addUser",{name:e.data.user.name,email:e.data.user.email,verified:e.data.user.verified}),t.dispatch("urlList")):(t.dispatch("removeUser"),t.commit("removeUrls"))}).catch(function(t){console.log("Failed to authenticate")})},urlList:function(t){console.log("dispatch called"),g.a.get(U+"/api/url/urllist").then(function(e){t.commit("addUrl",e.data)}).catch(function(e){console.log(e),t.dispatch("notification",{header:"error",body:"failed to fetch urls list"})})},addUrl:function(t,e){t.commit("addUrl",e)},removeUser:function(t){t.commit("removeUser"),t.commit("removeUrls")},removeUrl:function(t,e){t.commit("removeUrl",e)},notification:function(t,e){e.showTime=e.showTime||1500,e.show=!0,t.commit("addNotification",e),setTimeout(function(){e.show=!1,t.commit("addNotification",e)},e.showTime)}}});s.a.use(z.a),s.a.config.productionTip=!0,s.a.use(L.a),s.a.use(Q.a),s.a.http.headers.common["X-CSRF-TOKEN"]=document.querySelector("#token").getAttribute("value"),new s.a({store:R,el:"#app",router:E,components:{App:p},template:"<App/>"})},QMsM:function(t,e){},edQI:function(t,e){},fjQo:function(t,e){},iQuY:function(t,e){},n4d9:function(t,e){},yIi8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e4cbf67e91b226a9325c.js.map