(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84d80172"],{"25f0":function(t,n,e){"use strict";var a=e("6eeb"),r=e("825a"),i=e("d039"),c=e("ad6d"),o="toString",s=RegExp.prototype,u=s[o],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=o;(l||d)&&a(RegExp.prototype,o,(function(){var t=r(this),n=String(t.source),e=t.flags,a=String(void 0===e&&t instanceof RegExp&&!("flags"in s)?c.call(t):e);return"/"+n+"/"+a}),{unsafe:!0})},2909:function(t,n,e){"use strict";function a(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("25f0"),e("3ca3"),e("ddb0");function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return a(t)||r(t)||i()}e.d(n,"a",(function(){return c}))},"36e9":function(t,n,e){"use strict";var a=e("f2a0"),r=e.n(a);r.a},"4df4":function(t,n,e){"use strict";var a=e("f8c2"),r=e("7b0b"),i=e("9bdd"),c=e("e95a"),o=e("50c4"),s=e("8418"),u=e("35a1");t.exports=function(t){var n,e,l,d,h,f=r(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,b=void 0!==m,g=0,w=u(f);if(b&&(m=a(m,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&c(w))for(n=o(f.length),e=new p(n);n>g;g++)s(e,g,b?m(f[g],g):f[g]);else for(d=w.call(f),h=d.next,e=new p;!(l=h.call(d)).done;g++)s(e,g,b?i(d,m,[l.value,g],!0):l.value);return e.length=g,e}},"7abe":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home-container"},[e("van-nav-bar",{attrs:{title:"首页",fixed:""}}),e("van-tabs",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("van-icon",{staticClass:"wap-nav",attrs:{slot:"nav-right",name:"wap-nav"},on:{click:function(n){t.isChannelEditShow=!0}},slot:"nav-right"}),t._l(t.userChannels,(function(t){return e("van-tab",{key:t.id,attrs:{title:t.name}},[e("article-list",{attrs:{channel:t}})],1)}))],2),e("van-popup",{style:{height:"100%"},attrs:{position:"bottom",closeable:"","close-icon-position":"top-left"},model:{value:t.isChannelEditShow,callback:function(n){t.isChannelEditShow=n},expression:"isChannelEditShow"}},[e("channel-edit",{attrs:{"user-channels":t.userChannels,active:t.active},on:{switch:t.onChannelSwitch}})],1)],1)},r=[],i=(e("96cf"),e("1da1")),c=e("b775"),o=function(){return Object(c["a"])({method:"GET",url:"/app/v1_0/user/channels"})},s=function(){return Object(c["a"])({method:"GET",url:"/app/v1_0/channels"})},u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(n){t.isLoading=n},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(n,a){return e("van-cell",{key:a,attrs:{title:n.title},on:{click:function(e){return t.$router.push("/article/"+n.art_id)}}})})),1)],1)],1)},l=[],d=e("2909"),h=e("8691"),f={name:"ArticleList",components:{},props:{channel:{type:Object,required:!0}},data:function(){return{list:[],loading:!1,finished:!1,timestamp:null,isLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onLoad:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["f"])({channel_id:this.channel.id,timestamp:this.timestamp||Date.now(),with_top:1});case 2:e=t.sent,a=e.data,r=a.data.results,(n=this.list).push.apply(n,Object(d["a"])(r)),this.loading=!1,r.length?this.timestamp=a.data.pre_timestamp:this.finished=!0;case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onRefresh:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["f"])({channel_id:this.channel.id,timestamp:Date.now(),with_top:1});case 2:e=t.sent,a=e.data,r=a.data.results,(n=this.list).unshift.apply(n,Object(d["a"])(r)),this.isLoading=!1,this.$toast("更新了".concat(r.length,"条数据"));case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},p=f,v=e("2877"),m=Object(v["a"])(p,u,l,!1,null,"50e658a0",null),b=m.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"channel-edit"},[e("van-cell",{attrs:{title:"我的频道",border:!1}},[e("van-button",{attrs:{size:"mini",round:"",type:"danger",plain:""},on:{click:function(n){t.isEditShow=!t.isEditShow}}},[t._v(t._s(t.isEditShow?"完成":"编辑"))])],1),e("van-grid",{attrs:{gutter:10,clickable:""}},t._l(t.userChannels,(function(n,a){return e("van-grid-item",{key:n.id,attrs:{text:n.name},on:{click:function(n){return t.onUserChannelClick(a)}}},[e("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isEditShow&&0!==a,expression:"isEditShow && index !== 0"}],attrs:{slot:"icon",name:"close"},slot:"icon"})],1)})),1),e("van-cell",{attrs:{title:"推荐频道",border:!1}}),e("van-grid",{attrs:{gutter:10}},t._l(t.remainingChannels,(function(n){return e("van-grid-item",{key:n.id,attrs:{text:n.name},on:{click:function(e){return t.onChannelAdd(n)}}})})),1)],1)},w=[],C=(e("7db0"),e("a434"),e("159b"),e("5d2d")),E={name:"ChannelEdit",components:{},props:{userChannels:{type:Array,required:!0}},data:function(){return{allChannels:[],isEditShow:!1}},computed:{remainingChannels:function(){var t=this.allChannels,n=this.userChannels,e=[];return t.forEach((function(t){n.find((function(n){return n.id===t.id}))||e.push(t)})),e}},watch:{userChannels:function(t){Object(C["b"])("user-channels",t)}},created:function(){this.loadAllChannels()},mounted:function(){},methods:{loadAllChannels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:n=t.sent,e=n.data,this.allChannels=e.data.channels;case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onChannelAdd:function(t){this.userChannels.push(t)},onUserChannelClick:function(t){this.isEditShow?this.userChannels.splice(t,1):this.$emit("switch",t)}}},y=E,j=(e("36e9"),Object(v["a"])(y,g,w,!1,null,"49b1ee2f",null)),x=j.exports,O={name:"HomePage",components:{ArticleList:b,ChannelEdit:x},props:{},data:function(){return{active:0,userChannels:[],isChannelEditShow:!1}},computed:{},watch:{},created:function(){this.loadUserChannels()},mounted:function(){},methods:{loadUserChannels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,n=[],e=Object(C["a"])("user-channels"),!e){t.next=7;break}n=e,t.next=12;break;case 7:return t.next=9,o();case 9:a=t.sent,r=a.data,n=r.data.channels;case 12:this.userChannels=n,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0),this.$toast("获取频道数据失败");case 19:case"end":return t.stop()}}),t,this,[[0,15]])})));function n(){return t.apply(this,arguments)}return n}(),onChannelSwitch:function(t){this.active=t,this.isChannelEditShow=!1}}},_=O,k=(e("ce9d"),Object(v["a"])(_,a,r,!1,null,"58294239",null));n["default"]=k.exports},"7db0":function(t,n,e){"use strict";var a=e("23e7"),r=e("b727").find,i=e("44d2"),c="find",o=!0;c in[]&&Array(1)[c]((function(){o=!1})),a({target:"Array",proto:!0,forced:o},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},8691:function(t,n,e){"use strict";e.d(n,"g",(function(){return r})),e.d(n,"f",(function(){return i})),e.d(n,"e",(function(){return c})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"b",(function(){return u})),e.d(n,"d",(function(){return l})),e.d(n,"i",(function(){return d})),e.d(n,"h",(function(){return h})),e.d(n,"j",(function(){return f}));var a=e("b775"),r=function(t,n){return Object(a["a"])({method:"GET",url:"/app/v1_0/users/".concat(t,"/articles"),params:n})},i=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_1/articles",params:t})},c=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},o=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},s=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},u=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},l=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})},d=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/articles",params:t})},h=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})},f=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})}},a630:function(t,n,e){var a=e("23e7"),r=e("4df4"),i=e("1c7e"),c=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:c},{from:r})},ad6d:function(t,n,e){"use strict";var a=e("825a");t.exports=function(){var t=a(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},b4fa:function(t,n,e){},ce9d:function(t,n,e){"use strict";var a=e("b4fa"),r=e.n(a);r.a},f2a0:function(t,n,e){}}]);
//# sourceMappingURL=chunk-84d80172.9c6dd9b1.js.map