(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},20:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=(n(20),n(14)),l=n(2),i=n(3),m=n.n(i),f=function(){return m.a.get("/api/notes").then((function(t){return t.data}))},s=function(t){return m.a.post("/api/notes",t).then((function(t){return t.data}))},p=function(t,e){return m.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},d=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},E=function(t){var e=t.message;return null===e?null:(console.log(e),r.a.createElement("div",{className:"error"},e))},g=function(){return r.a.createElement("footer",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki ".concat((new Date).getFullYear())))},v=function(){var t=r.a.useState([]),e=Object(l.a)(t,2),n=e[0],a=e[1],o=r.a.useState("a new note..."),c=Object(l.a)(o,2),i=c[0],m=c[1],v=r.a.useState(!0),h=Object(l.a)(v,2),b=h[0],S=h[1],k=r.a.useState(null),w=Object(l.a)(k,2),y=w[0],O=w[1];r.a.useEffect((function(){f().then((function(t){a(t)}))}),[]),console.log("render",n.length,"notes");var j=b?n:n.filter((function(t){return t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(E,{message:y}),r.a.createElement("button",{onClick:function(){return S(!b)}},"show ",b?"important":"all"),r.a.createElement("ul",null,j.map((function(t){return r.a.createElement(d,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(u.a)({},e,{important:!e.important});p(t,r).then((function(e){a(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){O("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){O(null)}),5e3),a(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:i,date:(new Date).toISOString(),important:Math.random()>.5};s(e).then((function(t){a(n.concat(t)),m("")}))}},r.a.createElement("input",{value:i,onChange:function(t){console.log(t.target.value),m(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(g,null))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0dcb6ddb.chunk.js.map