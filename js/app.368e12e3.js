(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return l.p+"js/"+({about:"about","add~edit":"add~edit",add:"add",edit:"edit"}[t]||t)+"."+{about:"5fb1b3dd","add~edit":"dc7c9ce1",add:"7510fe5f",edit:"d3bc1778"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"add~edit":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about","add~edit":"add~edit",add:"add",edit:"edit"}[t]||t)+"."+{about:"31d6cfe0","add~edit":"1f69eb4b",add:"31d6cfe0",edit:"31d6cfe0"}[t]+".css",i=l.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],p.parentNode.removeChild(p),n(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0bc3":function(t,e,n){"use strict";var a=n("beff"),r=n.n(a);r.a},"17c3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid p-3"},[t.applicationsLoaded?n("section",{staticClass:"animated slideInUp"},[n("div",{staticClass:"row"},[t._m(0),t._l(t.allApplications.filter((function(t){return"active"==t.supportStatus})),(function(e){return n("div",{key:e.title,staticClass:"col-xl-4 col-lg-6 col-md-6"},[n("AppPreview",t._b({},"AppPreview",e,!1))],1)})),n("div",{staticClass:"col-12 text-left mb-4"}),t._m(1),t._l(t.allApplications.filter((function(t){return"inactive"==t.supportStatus})),(function(e){return n("div",{key:e.title,staticClass:"col-xl-4 col-lg-6 col-md-6"},[n("AppPreview",t._b({},"AppPreview",e,!1))],1)})),n("div",{staticClass:"col-12 text-left mb-4"}),t._m(2),t._l(t.allApplications.filter((function(t){return"discontinued"==t.supportStatus})),(function(e){return n("div",{key:e.title,staticClass:"col-xl-4 col-lg-6 col-md-6"},[n("AppPreview",t._b({staticStyle:{opacity:"0.35"}},"AppPreview",e,!1))],1)})),n("div",{staticClass:"col-12 text-left mb-4"})],2)]):n("section",[n("ScreenOverlay",{attrs:{content:t.loadingMessage}})],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 text-left"},[n("h5",[t._v("Active")]),n("hr")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 text-left"},[n("h5",[t._v("Inactive")]),n("hr")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 text-left"},[n("h5",[t._v("Discontinued")]),n("hr")])}],i=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card rounded shadow mb-3 text-left"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("img",{attrs:{src:t.$attrs.imagePath}})]),n("div",{staticClass:"col text-right p-3"},[n("strong",[t._v(t._s(t.$attrs.title))]),n("br"),n("small",[t._v("Published "+t._s(t.$attrs.publishDate))]),n("br"),n("router-link",{attrs:{to:{name:"EditRecord",params:{id:t.$attrs._id.$oid||t.$attrs._id}}}},[n("i",{staticClass:"far fa-edit"})])],1)])])}),o=[],s={name:"AppPreview",data:function(){return{}},props:[]},l=s,c=(n("0bc3"),n("2877")),u=Object(c["a"])(l,i,o,!1,null,"122c7385",null),d=u.exports,p=n("7763"),f={name:"AllApplications",components:{AppPreview:d,ScreenOverlay:p["a"]},mounted:function(){this.pullApplications(),this.pullKeywords()},data:function(){return{componentKey:0,allApplications:[],applicationsLoaded:!1,loadingMessage:'\n                <div>Loading list of applications...</div>\n                <div class="spinner-grow text-success" role="status">\n                    <span class="sr-only">Loading...</span>\n                </div>\n            '}},methods:{pullApplications:function(){var t=this;fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications").then((function(t){return t.json()})).then((function(e){t.allApplications=e,t.componentKey+=1,t.applicationsLoaded=!0}))},pullKeywords:function(){var t=this;fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/keywords").then((function(t){return t.json()})).then((function(e){t.todos=e,t.componentKey+=1}))}}},v=f,h=Object(c["a"])(v,a,r,!1,null,null,null);e["default"]=h.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg bg-light pb-3",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("nav",{staticClass:"navbar navbar-expand navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("App Factory")]),n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/"}},[t._v("All Applications")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"AddRecord"}}},[t._v("Add New")])],1),t._m(0),t._m(1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"About"}}},[t._v("About")])],1)])])]),n("router-view")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{attrs:{href:"https://cafeamericano.github.io/appGalleryLite/",target:"_blank"}},[t._v("Keyword Factory")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{attrs:{href:"https://cafeamericano.github.io/appGalleryLite/",target:"_blank"}},[t._v("App Gallery")])])}],o=(n("034f"),n("2877")),s={},l=Object(o["a"])(s,r,i,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("8c4f"));n("17c3");a["a"].use(u["a"]);var d=[{path:"/",component:function(){return Promise.resolve().then(n.bind(null,"17c3"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/edit",name:"EditRecord",component:function(){return Promise.all([n.e("add~edit"),n.e("edit")]).then(n.bind(null,"4e03"))}},{path:"/add",name:"AddRecord",component:function(){return Promise.all([n.e("add~edit"),n.e("add")]).then(n.bind(null,"5178"))}}],p=new u["a"]({routes:d}),f=p;a["a"].config.productionTip=!1,new a["a"]({router:f,render:function(t){return t(c)}}).$mount("#app")},7763:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outerWrapper"},[n("div",{staticClass:"innerWrapper"},[n("span",{domProps:{innerHTML:t._s(t.content)}})])])},r=[],i={name:"ScreenOverlay",data:function(){return{}},props:["content"]},o=i,s=(n("d4e8"),n("2877")),l=Object(s["a"])(o,a,r,!1,null,"7a2c8ef0",null);e["a"]=l.exports},"79f7":function(t,e,n){},"85ec":function(t,e,n){},beff:function(t,e,n){},d4e8:function(t,e,n){"use strict";var a=n("79f7"),r=n.n(a);r.a}});
//# sourceMappingURL=app.368e12e3.js.map