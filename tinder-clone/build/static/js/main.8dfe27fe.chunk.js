(this["webpackJsonptinder-clone"]=this["webpackJsonptinder-clone"]||[]).push([[0],{55:function(e,n,t){},56:function(e,n,t){},57:function(e,n,t){},64:function(e,n,t){},85:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(0),s=t.n(a),r=t(15),i=t.n(r),o=(t(55),t(56),t(57),t(36)),j=t.n(o),l=t(37),d=t.n(l),u=t(101);var b=function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(u.a,{children:Object(c.jsx)(j.a,{fontSize:"Large",className:"swipeButtons__repeat"})}),Object(c.jsx)("img",{className:"header__logo",src:"/tinder-logo.png",alt:""}),Object(c.jsx)(u.a,{children:Object(c.jsx)(d.a,{fontSize:"Large",className:"header__icon"})})]})},f=t(25),p=t.n(f),O=t(38),h=t(46),x=(t(64),t(39)),m=t.n(x),g=t(40),v=t.n(g).a.create({baseURL:"https://tinder-clone-nodejs-backend.herokuapp.com"});var _=function(){var e=Object(a.useState)([]),n=Object(h.a)(e,2),t=n[0],s=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/tinder_cards");case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{className:"tinderCards",children:Object(c.jsx)("div",{className:"tinderCards__cardContainer",children:t.map((function(e){return Object(c.jsx)(m.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(){return n=e.name,void console.log("You swiped: "+n);var n},onCardLeftScreen:function(){return n=e.name,void console.log(n+" left the screen");var n},children:Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:Object(c.jsx)("h3",{children:e.name})})},e.name)}))})})},w=(t(85),t(41)),N=t.n(w),S=t(42),L=t.n(S),B=t(43),z=t.n(B),C=t(44),k=t.n(C),y=t(45),F=t.n(y);var I=function(){return Object(c.jsxs)("div",{className:"swipeButtons",children:[Object(c.jsx)(u.a,{className:"swipeButtons__replay",children:Object(c.jsx)(N.a,{fontSize:"Large"})}),Object(c.jsx)(u.a,{className:"swipeButtons__close",children:Object(c.jsx)(L.a,{fontSize:"Large"})}),Object(c.jsx)(u.a,{className:"swipeButtons__starRate",children:Object(c.jsx)(z.a,{fontSize:"Large"})}),Object(c.jsx)(u.a,{className:"swipeButtons__favorite",children:Object(c.jsx)(k.a,{fontSize:"Large"})}),Object(c.jsx)(u.a,{className:"swipeButtons__flashOn",children:Object(c.jsx)(F.a,{fontSize:"Large"})})]})};var E=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{}),Object(c.jsx)(_,{}),Object(c.jsx)(I,{})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),J()}},[[87,1,2]]]);
//# sourceMappingURL=main.8dfe27fe.chunk.js.map