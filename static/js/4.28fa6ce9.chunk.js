(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{307:function(e,a,t){"use strict";t.d(a,"a",function(){return d});var n=t(34),s=t(35),o=t(37),i=t(36),r=t(38),c=t(0),m=t.n(c),l=t(10),u=t(9),g=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,a),Object(s.a)(t,[{key:"render",value:function(){return this.props.isAuth?m.a.createElement(e,this.props):m.a.createElement(l.a,{to:"/login"})}}]),t}(m.a.Component);return Object(u.b)(g)(a)}},308:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs___ZUcC",h3:"Dialogs_h3__xeqIs",dialogsItems:"Dialogs_dialogsItems__3cRl6",user:"Dialogs_user__6DgmK",activeLink:"Dialogs_activeLink__3t12d",userLogo:"Dialogs_userLogo__39A1z",messages:"Dialogs_messages__3kz98",message:"Dialogs_message__IomOI"}},314:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(128),i=t(9),r=t(308),c=t.n(r),m=t(14),l=t(129),u=t(130),g=t(49),d=t(65),_=Object(g.a)(50),b=Object(u.a)({form:"addDialogForm"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(l.a,{component:d.b,name:"newComment",placeholder:"Enter your message",validate:[g.b,_]})),s.a.createElement("div",null,s.a.createElement("button",null,"Add post")))}),f=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:"".concat(c.a.user)},s.a.createElement("div",{className:"".concat(c.a.userLogo)},s.a.createElement("img",{src:e.logoImg})),s.a.createElement(m.b,{to:a,activeClassName:c.a.activeLink},e.name))},E=function(e){return s.a.createElement("div",{className:c.a.message},e.name)},v=function(e){var a=e.messageList.dialogsData.map(function(e){return s.a.createElement(f,{name:e.name,key:e.id,logoImg:e.logo})}),t=e.messageList.messagesData.map(function(e){return s.a.createElement(E,{name:e.name})});return s.a.createElement("div",{className:c.a.dialogs},s.a.createElement("div",{className:c.a.dialogsItems},s.a.createElement("h3",{className:c.a.h3},"dialogs"),a),s.a.createElement("div",{className:c.a.messages},t),s.a.createElement("div",null,s.a.createElement(b,{onSubmit:function(a){e.addPost2(a.newComment)}})))},p=t(307),h=t(6);a.default=Object(h.d)(Object(i.b)(function(e){return{messageList:e.dialogPage,newComment:e.dialogPage.newComment}},function(e){return{addPost2:function(a){return e(Object(o.a)(a))},updateComment:function(a){return e(Object(o.c)(a))}}}),p.a)(v)}}]);
//# sourceMappingURL=4.28fa6ce9.chunk.js.map