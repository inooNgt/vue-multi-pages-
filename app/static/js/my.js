webpackJsonp([4],{"/Oim":function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-link",class:{active:"home.html"===t.activePath},on:{click:function(e){t.handleNavTap("home.html",e)}}},[a("van-icon",{staticClass:"footer-icon",attrs:{name:"wap-home"}}),t._v(" "),a("span",[t._v("Home")])],1),t._v(" "),a("div",{staticClass:"footer-link",class:{active:"vigour.html"===t.activePath},on:{click:function(e){t.handleNavTap("vigour.html",e)}}},[a("van-icon",{staticClass:"footer-icon",attrs:{name:"shop"}}),t._v(" "),a("span",[t._v("Vigour")])],1),t._v(" "),a("div",{staticClass:"footer-link",class:{active:"my.html"===t.activePath},on:{click:function(e){t.handleNavTap("my.html",e)}}},[a("van-icon",{staticClass:"footer-icon",attrs:{name:"contact"}}),t._v(" "),a("span",[t._v("My")])],1)])},staticRenderFns:[]};e.a=n},BvKk:function(t,e){},DjSa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(a("1fWZ")),i=l(a("Hkar")),s=l(a("+2ln"));a("OWWB"),a("i0mo"),a("k3b4");var o=l(a("7+uW")),u=l(a("NtCe"));function l(t){return t&&t.__esModule?t:{default:t}}o.default.use(n.default).use(i.default).use(s.default),e.default={name:"Index",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{goSetting:function(){u.default.openWindow("my_setting.html")}}}},FiXv:function(t,e,a){"use strict";var n=o(a("7+uW")),i=o(a("UdwE")),s=o(a("e1LO"));function o(t){return t&&t.__esModule?t:{default:t}}n.default.config.productionTip=!1,new n.default({el:"#app",router:s.default,components:{App:i.default},template:"<App/>"})},JZ0C:function(t,e){},MJyj:function(t,e){},NtCe:function(t,e){t.exports=window.MTOOL},QQZm:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-content"},[e("div",{staticClass:"cell-header",on:{click:this.goSetting}},[e("div",{staticClass:"cell-img"}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"cell-icon"},[e("van-icon",{attrs:{name:"arrow"}})],1)]),this._v(" "),e("van-cell-group",[e("van-cell",{attrs:{title:"单元格","is-link":"",value:"内容"}}),this._v(" "),e("van-cell",{attrs:{title:"单元格","is-link":"",value:"内容"}}),this._v(" "),e("van-cell",{attrs:{title:"单元格","is-link":"",value:"内容"}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cell-msg"},[e("div",{staticClass:"msg-name"},[this._v("This space for name")]),this._v(" "),e("div",{staticClass:"msg-phone"},[this._v("177****5485")])])}]};e.a=n},TVmP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("UthT"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var o=a("/Oim");var u=function(t){a("BvKk")},l=a("VU/8")(i.a,o.a,!1,u,"data-v-4563797a",null);e.default=l.exports},UdwE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gwBC"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var o=a("nvLW");var u=function(t){a("JZ0C")},l=a("VU/8")(i.a,o.a,!1,u,null,null);e.default=l.exports},UthT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(a("SSsa")),i=u(a("+2ln"));a("3Lne"),a("k3b4");var s=u(a("7+uW")),o=u(a("NtCe"));function u(t){return t&&t.__esModule?t:{default:t}}s.default.use(i.default),s.default.use(n.default),e.default={name:"Nav",props:["selected"],data:function(){return{activePath:"home.html",msg:"Welcome to Your Vue.js App"}},mounted:function(){this.$nextTick(function(){});var t=window.location.pathname||"";t=t.substr(t.lastIndexOf("/")+1),this.activePath="index.html"===t?"home.html":t},methods:{handleNavTap:function(t,e){if(this.activePath!==t||!o.default.isPlus){o.default.needLogin(t),0,o.default.switchNav({from:this.activePath,to:t}),this.activePath=t}}}}},e1LO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(a("7+uW")),i=o(a("/ocq")),s=o(a("s0Ka"));function o(t){return t&&t.__esModule?t:{default:t}}n.default.use(i.default),e.default=new i.default({routes:[{path:"/",name:"Index",component:s.default}]})},f4F5:function(t,e){},gwBC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(a("TVmP")),i=s(a("NtCe"));function s(t){return t&&t.__esModule?t:{default:t}}a("MJyj"),e.default={name:"App",components:{MFooter:n.default},data:function(){return{showFooter:!i.default.isPlus}},mounted:function(){}}},maGY:function(t,e){},nvLW:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("MFooter",{directives:[{name:"show",rawName:"v-show",value:this.showFooter,expression:"showFooter"}]})],1)},staticRenderFns:[]};e.a=n},s0Ka:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("DjSa"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var o=a("QQZm");var u=function(t){a("maGY")},l=a("VU/8")(i.a,o.a,!1,u,"data-v-1314fe24",null);e.default=l.exports}},["FiXv"]);
//# sourceMappingURL=my.js.map