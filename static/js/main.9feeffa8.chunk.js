(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{41:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e(18),o=e.n(i),u=e(2),a=e(7),s=e(6),j="token",b=function(n){localStorage.setItem(j,n)},d=function(){return localStorage.getItem(j)},f="https://student-json-api.lidemy.me",l=e(5),O=e(17),h=Object(O.b)({name:"users",initialState:{user:null},reducers:{setUser:function(n,t){n.user=t.payload}}}),p=h.actions.setUser,x=function(){return function(n){return function(){var n=d();return fetch("".concat(f,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))}().then((function(t){return t.ok&&n(p(t.data)),t}))}},g=h.reducer,v=e(3);function m(){var n=Object(u.a)(["\n  width: 60%;\n  margin: 0 auto;\n  padding: 40px;\n  text-align: center;\n"]);return m=function(){return n},n}function y(){var n=Object(u.a)(["\n  color: red;\n"]);return y=function(){return n},n}var S=v.a.div(y()),w=v.a.form(m());function k(){var n=Object(c.useState)(""),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),j=u[0],d=u[1],O=Object(c.useState)(""),h=Object(a.a)(O,2),p=h[0],g=h[1],v=Object(c.useState)(),m=Object(a.a)(v,2),y=m[0],k=m[1],P=Object(s.f)(),C=Object(l.b)();return Object(l.c)((function(n){return n.users.user}))&&P.push("/"),Object(r.jsxs)(w,{onSubmit:function(n){n.preventDefault(),k(null),function(n,t,e){return fetch("".concat(f,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))}(e,j,p).then((function(n){if(0===n.ok)return k(n.message);b(n.token),C(x()).then((function(n){if(1!==n.ok)return b(null),k(n.toString());P.push("/")}))}))},children:[Object(r.jsxs)("div",{children:["\u66b1\u7a31:",Object(r.jsx)("input",{value:e,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)("div",{children:["\u5e33\u865f:",Object(r.jsx)("input",{value:j,onChange:function(n){return d(n.target.value)}})]}),Object(r.jsxs)("div",{children:["\u5bc6\u78bc:",Object(r.jsx)("input",{type:"password",value:p,onChange:function(n){return g(n.target.value)}})]}),Object(r.jsx)("button",{children:"\u8a3b\u518a"}),y&&Object(r.jsx)(S,{children:y})]})}function P(){var n=Object(u.a)(["\n  width: 60%;\n  margin: 0 auto;\n  padding: 40px;\n  text-align: center;\n"]);return P=function(){return n},n}function C(){var n=Object(u.a)(["\n  color: red;\n"]);return C=function(){return n},n}var E=v.a.div(C()),z=v.a.form(P());function L(){var n=Object(c.useState)(""),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),j=u[0],d=u[1],O=Object(c.useState)(),h=Object(a.a)(O,2),p=h[0],g=h[1],v=Object(s.f)(),m=Object(l.b)();return Object(l.c)((function(n){return n.users.user}))&&v.push("/"),Object(r.jsxs)(z,{onSubmit:function(){g(null),function(n,t){return fetch("".concat(f,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(e,j).then((function(n){if(0===n.ok)return g(n.message);b(n.token),m(x()).then((function(n){if(1!==n.ok)return b(null),g(n.toString());v.push("/")}))}))},children:[Object(r.jsxs)("div",{children:["\u5e33\u865f:",Object(r.jsx)("input",{value:e,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)("div",{children:["\u5bc6\u78bc:",Object(r.jsx)("input",{type:"password",value:j,onChange:function(n){return d(n.target.value)}})]}),Object(r.jsx)("button",{children:"\u767b\u5165"}),p&&Object(r.jsx)(E,{children:p})]})}var D=e(9);function B(){var n=Object(u.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return B=function(){return n},n}function I(){var n=Object(u.a)(["\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n"]);return I=function(){return n},n}function J(){var n=Object(u.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return J=function(){return n},n}function N(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]);return N=function(){return n},n}var R=v.a.div(N()),$=v.a.div(J()),A=Object(v.a)(D.b)(I()),T=v.a.div(B());function _(n){var t=n.post;return Object(r.jsxs)($,{children:[Object(r.jsx)(A,{to:"/post/".concat(t.id),children:t.title}),Object(r.jsx)(T,{children:new Date(t.createdAt).toLocaleString()})]})}function q(){var n=Object(c.useState)([]),t=Object(a.a)(n,2),e=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("".concat(f,"/posts?_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){return i(n)}))}),[]),Object(r.jsx)(R,{children:e.map((function(n){return Object(r.jsx)(_,{post:n},n.id)}))})}function F(){var n=Object(u.a)(['\n  flex: 1;\n  height: 300px;\n  background-image: url("https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product-Details-BigMac-mobile-201904.jpg");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n']);return F=function(){return n},n}function H(){var n=Object(u.a)([""]);return H=function(){return n},n}function K(){var n=Object(u.a)(["\n  margin: 0;\n"]);return K=function(){return n},n}function U(){var n=Object(u.a)(["\n  flex: 2;\n  margin-right: 24px;\n"]);return U=function(){return n},n}function Y(){var n=Object(u.a)(["\n  display: flex;\n  width: 800px;\n  margin: 0 auto;\n  padding: 40px 0;\n"]);return Y=function(){return n},n}var M=v.a.div(Y()),G=v.a.div(U()),Q=v.a.h1(K()),V=v.a.p(H()),W=v.a.div(F());function X(){return Object(r.jsxs)(M,{children:[Object(r.jsxs)(G,{children:[Object(r.jsx)(Q,{children:"\u55e8~ \u6211\u662f YSKuo."}),Object(r.jsx)(V,{children:"\u6211\u662f YSKuo \u559c\u6b61\u300c\u7121\u6575\u5927\u9ea5\u514b\u300d\uff0c\u9019\u662f\u7528\u4f86\u7df4\u7fd2 React Router \u53ca\u4e32 API \u7684\u4f5c\u696d\u3002"})]}),Object(r.jsx)(W,{})]})}var Z=Object(O.b)({name:"posts",initialState:{isLoadingPost:!1,post:"",newPostResponse:null},reducers:{setIsLoadingPost:function(n,t){n.isLoadingPost=t.payload},setPost:function(n,t){n.post=t.payload},setNewPostResponse:function(n,t){n.newPostResponse=t.payload}}}),nn=Z.actions,tn=nn.setIsLoadingPost,en=nn.setPost,rn=(nn.setNewPostResponse,function(n){return function(t){t(tn(!0)),function(n){return fetch("".concat(f,"/posts?id=").concat(n,"&_expand=user")).then((function(n){return n.json()}))}(n).then((function(n){t(en(n[0])),t(tn(!1))})).catch((function(n){console.log(n)}))}}),cn=function(n){return function(t){return function(n){var t=n.title,e=n.body,r=d();return fetch("".concat(f,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(r)},body:JSON.stringify({title:t,body:e})}).then((function(n){return n.json()}))}(n).then((function(n){return n}))}},on=function(n){return function(t){return function(n){var t=n.id,e=n.title,r=n.body,c=d();return fetch("".concat(f,"/posts/").concat(t),{method:"PATCH",headers:{"content-type":"application/json",authorization:"Bearer ".concat(c)},body:JSON.stringify({title:e,body:r})}).then((function(n){return n.json()}))}(n).then((function(n){return n}))}},un=function(n){return function(t){return(e=n,fetch("".concat(f,"/posts/").concat(e),{method:"DELETE"}).then((function(n){return n.json()}))).then((function(n){return n}));var e}},an=Z.reducer;function sn(){var n=Object(u.a)(["\n  margin: 20px 0;\n"]);return sn=function(){return n},n}function jn(){var n=Object(u.a)(["\n  align-self: flex-end;\n  margin: 0;\n"]);return jn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  margin-bottom: 0;\n"]);return bn=function(){return n},n}function dn(){var n=Object(u.a)(["\n  box-sizing: border-box;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 20px auto;\n  padding: 0 20px;\n"]);return dn=function(){return n},n}var fn=v.a.div(dn()),ln=v.a.h2(bn()),On=v.a.p(jn()),hn=v.a.p(sn());function pn(){var n=Object(s.h)().id,t=Object(s.f)(),e=Object(l.b)(),i=Object(l.c)((function(n){return n.posts.isLoadingPost})),o=Object(l.c)((function(n){return n.posts.post})),u=Object(l.c)((function(n){return n.users.user}));Object(c.useEffect)((function(){e(rn(n))}),[n,e]);return Object(r.jsx)(fn,{children:i?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[u.id===o.user.id&&Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){e(un(n)).then((function(n){console.log("delete"),t.push("/")}))},children:"delete"}),Object(r.jsx)(D.b,{to:"/edit-post/".concat(n),children:Object(r.jsx)("button",{children:"edit"})})]}),Object(r.jsx)(ln,{children:o.title}),Object(r.jsxs)(On,{children:[Object(r.jsx)("b",{children:"\u5beb\u65bc\uff1a"}),new Date(o.createdAt).toLocaleString()]}),Object(r.jsx)(hn,{children:o.body})]})})}function xn(){var n=Object(u.a)([""]);return xn=function(){return n},n}function gn(){var n=Object(u.a)(["\n  width: 300px;\n  margin-left: 20px;\n"]);return gn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]);return vn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  width: 300px;\n  margin-left: 20px;\n"]);return mn=function(){return n},n}function yn(){var n=Object(u.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return yn=function(){return n},n}function Sn(){var n=Object(u.a)(["\n  width: 60%;\n  margin: 0 auto;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Sn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  color: red;\n"]);return wn=function(){return n},n}var kn=v.a.div(wn()),Pn=v.a.form(Sn()),Cn=v.a.div(yn()),En=v.a.input(mn()),zn=v.a.div(vn()),Ln=v.a.textarea(gn()),Dn=v.a.button(xn());function Bn(){var n=Object(c.useState)(""),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),j=u[0],b=u[1],d=Object(c.useState)(),f=Object(a.a)(d,2),O=f[0],h=f[1],p=Object(s.f)(),x=Object(l.b)();return Object(l.c)((function(n){return n.users.user}))||p.push("/"),Object(r.jsxs)(Pn,{onSubmit:function(n){n.preventDefault(),e&&j?x(cn({title:e,body:j})).then((function(n){n&&n.id&&p.push("/post/"+n.id)})):h("Error: title and content are required.")},children:[Object(r.jsxs)(Cn,{children:["\u6a19\u984c:",Object(r.jsx)(En,{value:e,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)(zn,{children:["\u5167\u5bb9:",Object(r.jsx)(Ln,{rows:10,value:j,onChange:function(n){return b(n.target.value)}})]}),Object(r.jsx)(Dn,{children:"\u767c\u8868"}),O&&Object(r.jsx)(kn,{children:O})]})}function In(){var n=Object(u.a)([""]);return In=function(){return n},n}function Jn(){var n=Object(u.a)(["\n  width: 300px;\n  margin-left: 20px;\n"]);return Jn=function(){return n},n}function Nn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]);return Nn=function(){return n},n}function Rn(){var n=Object(u.a)(["\n  width: 300px;\n  margin-left: 20px;\n"]);return Rn=function(){return n},n}function $n(){var n=Object(u.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return $n=function(){return n},n}function An(){var n=Object(u.a)(["\n  width: 60%;\n  margin: 0 auto;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return An=function(){return n},n}function Tn(){var n=Object(u.a)(["\n  color: red;\n"]);return Tn=function(){return n},n}var _n=v.a.div(Tn()),qn=v.a.form(An()),Fn=v.a.div($n()),Hn=v.a.input(Rn()),Kn=v.a.div(Nn()),Un=v.a.textarea(Jn()),Yn=v.a.button(In());function Mn(){var n=Object(s.h)().id,t=Object(c.useState)(""),e=Object(a.a)(t,2),i=e[0],o=e[1],u=Object(c.useState)(""),j=Object(a.a)(u,2),b=j[0],d=j[1],f=Object(c.useState)(),O=Object(a.a)(f,2),h=O[0],p=O[1],x=Object(s.f)(),g=Object(l.b)(),v=Object(l.c)((function(n){return n.posts.post})),m=Object(l.c)((function(n){return n.users.user}));Object(c.useEffect)((function(){g(rn(n))}),[n,g]),Object(c.useEffect)((function(){o(v.title),d(v.body)}),[v]);return m&&m.id===v.user.id||x.push("/"),Object(r.jsxs)(qn,{onSubmit:function(t){t.preventDefault(),i&&b?g(on({id:n,title:i,body:b})).then((function(n){n&&n.id&&x.push("/post/"+n.id)})):p("Error: title and content are required.")},children:[Object(r.jsxs)(Fn,{children:["\u6a19\u984c:",Object(r.jsx)(Hn,{value:i,onChange:function(n){return o(n.target.value)}})]}),Object(r.jsxs)(Kn,{children:["\u5167\u5bb9:",Object(r.jsx)(Un,{rows:10,value:b,onChange:function(n){return d(n.target.value)}})]}),Object(r.jsx)(Yn,{children:"\u767c\u8868"}),h&&Object(r.jsx)(_n,{children:h})]})}function Gn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin-left: 64px;\n  }\n"]);return Gn=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]);return Vn=function(){return n},n}function Wn(){var n=Object(u.a)(["\n  font-size: 32px;\n  font-weight: bold;\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(u.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0 32px;\n  box-sizing: border-box;\n  background-color: white;\n"]);return Xn=function(){return n},n}var Zn=v.a.div(Xn()),nt=v.a.div(Wn()),tt=v.a.div(Vn()),et=Object(v.a)(D.b)(Qn(),(function(n){return n.$active&&"\n    background: rgba(0, 0, 0, 0.2);\n  "})),rt=v.a.div(Gn(),tt);function ct(){var n=Object(s.g)(),t=Object(s.f)(),e=Object(l.b)(),c=Object(l.c)((function(n){return n.users.user}));return Object(r.jsxs)(Zn,{children:[Object(r.jsxs)(rt,{children:[Object(r.jsx)(nt,{children:"\u6211\u7684\u7b2c\u4e00\u500b Blog"}),Object(r.jsxs)(tt,{children:[Object(r.jsx)(et,{to:"/",$active:"/"===n.pathname,children:"\u9996\u9801"}),Object(r.jsx)(et,{to:"/about",$active:"/about"===n.pathname,children:"\u95dc\u65bc"}),c&&Object(r.jsx)(et,{to:"/new-post",$active:"/new-post"===n.pathname,children:"\u767c\u5e03"})]})]}),Object(r.jsxs)(tt,{children:[!c&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(et,{to:"/sign-up",$active:"/sign-up"===n.pathname,children:"\u8a3b\u518a"}),Object(r.jsx)(et,{to:"/login",$active:"/login"===n.pathname,children:"\u767b\u5165"})]}),c&&Object(r.jsx)(et,{onClick:function(){b(""),e((function(n){n(p(null))})),"/"!==n.pathname&&t.push("/")},children:"\u767b\u51fa"})]})]})}function it(){var n=Object(u.a)(["\n  padding-top: 64px;\n"]);return it=function(){return n},n}var ot=v.a.div(it());var ut=function(){var n=Object(l.b)();return Object(c.useEffect)((function(){d()&&n(x())}),[]),Object(r.jsx)(ot,{children:Object(r.jsxs)(D.a,{children:[Object(r.jsx)(ct,{children:"Header"}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{exact:!0,path:"/",children:Object(r.jsx)(q,{})}),Object(r.jsx)(s.a,{path:"/about",children:Object(r.jsx)(X,{})}),Object(r.jsx)(s.a,{path:"/login",children:Object(r.jsx)(L,{})}),Object(r.jsx)(s.a,{path:"/sign-up",children:Object(r.jsx)(k,{})}),Object(r.jsx)(s.a,{path:"/post/:id",children:Object(r.jsx)(pn,{})}),Object(r.jsx)(s.a,{path:"/new-post",children:Object(r.jsx)(Bn,{})}),Object(r.jsx)(s.a,{path:"/edit-post/:id",children:Object(r.jsx)(Mn,{})})]})]})})},at=Object(O.a)({reducer:{posts:an,users:g}});o.a.render(Object(r.jsx)(l.a,{store:at,children:Object(r.jsx)(ut,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9feeffa8.chunk.js.map