"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[944],{9944:function(n,t,e){e.r(t),e.d(t,{default:function(){return M}});var r,a,i,o,c,u,s,p,f=e(5861),l=e(9439),d=e(7757),h=e.n(d),x=e(7689),v=e(2791),m=e(4390),w=e(168),Z=e(5867),g=Z.ZP.div(r||(r=(0,w.Z)(["\n  width: 100%;\n  margin-top: 70px;\n"]))),j=Z.ZP.ul(a||(a=(0,w.Z)(["\n  width: calc(100% - 154px);\n  margin: 0 auto;\n  color: ",";\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 15px;\n"])),(function(n){return n.theme.secondColor})),b=Z.ZP.li(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 300px;\n  height: 180px;\n  border: 2px solid ",";\n  padding: 10px;\n  gap: 10px;\n  overflow: auto;\n"])),(function(n){return n.theme.thirdColor})),y=Z.ZP.img(o||(o=(0,w.Z)(["\n  width: 100px;\n  height: auto;\n  object-position: center;\n"]))),k=Z.ZP.div(c||(c=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),I=Z.ZP.p(u||(u=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 1000;\n  color: ",";\n  margin-bottom: 15px;\n"])),(function(n){return n.theme.thirdColor})),C=Z.ZP.h2(s||(s=(0,w.Z)(["\n  font-size: 20px;\n  /* font-weight: 1000; */\n  color: ",";\n  font-weight: 1000;\n  text-shadow: 0px 0px 0px rgba(255, 253, 130, 1);\n  font-variant: small-caps;\n  text-decoration-line: overline;\n  text-decoration-style: solid;\n  text-decoration-color: ",";\n  text-decoration-thickness: 2px;\n  text-underline-offset: 10px;\n"])),(function(n){return n.theme.secondColor}),(function(n){return n.theme.fifthColor})),N=Z.ZP.p(p||(p=(0,w.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-variant: all-small-caps;\n  text-align: left;\n  padding-left: 10px;\n"])),(function(n){return n.theme.secondColor})),_=e(184);function z(n){var t=n.cast;return(0,_.jsx)(g,{children:(0,_.jsx)(j,{children:t.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return(0,_.jsxs)(b,{children:[(0,_.jsx)(y,{src:e?["https://image.tmdb.org/t/p/w500/".concat(e)]:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster"}),(0,_.jsxs)(k,{children:[(0,_.jsx)(I,{children:r}),(0,_.jsx)(C,{children:"Character"}),(0,_.jsx)(N,{children:a})]})]},t)}))})})}var J=e(1579),P="There are no cast available";function M(){var n=(0,x.UO)(),t=(0,v.useState)([]),e=(0,l.Z)(t,2),r=e[0],a=e[1];return(0,v.useEffect)((function(){function t(){return(t=(0,f.Z)(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.d5)(n.id);case 3:if(e=t.sent,a(e.cast),0!==e.cast){t.next=7;break}return t.abrupt("return",P);case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n.id,r]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(z,{cast:r}),0===r.length&&(0,_.jsx)(J.v0,{children:P})]})}},4390:function(n,t,e){e.d(t,{Bt:function(){return l},DD:function(){return p},Tg:function(){return u},d5:function(){return f},vw:function(){return s}});var r=e(5861),a=e(7757),i=e.n(a),o=e(5294),c={method:"GET",baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWY4MjE0MjFmZjFiYTI4YTA4NWQ0ZmMzNGIzODc3MyIsInN1YiI6IjY1NmI1NjU0ODgwNTUxMDBjNjgwOTRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.02SS9fXzLQaZd6N-vvi5WdX-yPJGCequtM6X_NfRkwQ"}},u=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/trending/movie/week",c);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("search/movie?".concat(t),c);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t),c);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t,"/credits"),c);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t,"/reviews"),c);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=944.2be81731.chunk.js.map