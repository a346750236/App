(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38f3448a"],{"50bb":function(t,n,e){"use strict";var r=e("8105"),a=e.n(r);a.a},8105:function(t,n,e){},9639:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-container"},[t.$store.state.user?e("div",{staticClass:"user-info-wrap"},[e("div",{staticClass:"base-info-wrap"},[e("div",{staticClass:"avatar-title-wrap",on:{click:function(n){return t.$router.push("/user/"+t.user.id)}}},[e("van-image",{staticClass:"avatar",attrs:{round:"",fit:"cover",src:t.user.photo}}),e("div",{staticClass:"title"},[t._v(t._s(t.user.name))])],1),e("van-button",{attrs:{round:"",size:"mini"},on:{click:function(n){return t.$router.push("/user/profile")}}},[t._v("编辑资料")])],1),e("van-grid",{staticClass:"data-info",attrs:{border:!1}},[e("van-grid-item",[e("span",{staticClass:"count"},[t._v(t._s(t.user.art_count))]),e("span",{staticClass:"text"},[t._v("头条")])]),e("van-grid-item",[e("span",{staticClass:"count"},[t._v(t._s(t.user.follow_count))]),e("span",{staticClass:"text"},[t._v("关注")])]),e("van-grid-item",[e("span",{staticClass:"count"},[t._v(t._s(t.user.fans_count))]),e("span",{staticClass:"text"},[t._v("粉丝")])]),e("van-grid-item",[e("span",{staticClass:"count"},[t._v(t._s(t.user.like_count))]),e("span",{staticClass:"text"},[t._v("获赞")])])],1)],1):e("div",{staticClass:"not-login"},[e("div",{staticClass:"mobile"}),e("div",{staticClass:"text",on:{click:function(n){return t.$router.push("/login")}}},[t._v("点击登录")])]),e("van-grid",{attrs:{clickable:"","column-num":3}},[e("van-grid-item",{attrs:{text:"我的收藏",to:"/my-article/collect"}},[e("van-icon",{attrs:{slot:"icon",name:"star-o",color:"#eb5253"},slot:"icon"})],1),e("van-grid-item",{attrs:{text:"浏览历史",to:"/my-article/history"}},[e("van-icon",{attrs:{slot:"icon",name:"browsing-history-o",color:"#ffa023"},slot:"icon"})],1),e("van-grid-item",{attrs:{text:"作品",to:"/my-article"}},[e("van-icon",{attrs:{slot:"icon",name:"edit",color:"#678eff"},slot:"icon"})],1)],1),e("van-cell-group",{attrs:{border:!1}},[e("van-cell",{attrs:{title:"消息通知","is-link":""}}),e("van-cell",{attrs:{title:"小智同学","is-link":""},on:{click:function(n){return t.$router.push("/user/chat")}}})],1),t.$store.state.user?e("van-cell-group",[e("van-cell",{staticStyle:{"text-align":"center"},attrs:{title:"退出登录",clickable:""},on:{click:t.onLogout}})],1):t._e()],1)},a=[],s=(e("96cf"),e("1da1")),o=e("c24f"),i={name:"MyPage",components:{},props:{},data:function(){return{user:{}}},computed:{},watch:{},created:function(){this.$store.state.user&&this.loadUser()},mounted:function(){},methods:{loadUser:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(o["f"])();case 3:n=t.sent,e=n.data,console.log(e),this.user=e.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("获取数据失败");case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function n(){return t.apply(this,arguments)}return n}(),onLogout:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$dialog.confirm({title:"退出操作",message:"您确定要退出吗？"});case 2:this.$store.commit("setUser",null);case 3:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},c=i,u=(e("50bb"),e("2877")),l=Object(u["a"])(c,r,a,!1,null,"62fa2c0e",null);n["default"]=l.exports},c24f:function(t,n,e){"use strict";e.d(n,"g",(function(){return a})),e.d(n,"d",(function(){return s})),e.d(n,"f",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return l})),e.d(n,"h",(function(){return d})),e.d(n,"i",(function(){return f}));var r=e("b775"),a=function(t){return Object(r["a"])({url:"/app/v1_0/authorizations",method:"POST",data:t})},s=function(t){return Object(r["a"])({url:"/app/v1_0/sms/codes/".concat(t),method:"GET"})},o=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})},i=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/users/".concat(t)})},c=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})},u=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})},l=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})},d=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})},f=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})}}}]);
//# sourceMappingURL=chunk-38f3448a.382799d6.js.map