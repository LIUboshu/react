(this.webpackJsonpredux_test=this.webpackJsonpredux_test||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(8),o=n.n(c),a=n(2),s=n(3),i=n(7),u=n(5),l=n(4),j="increment",p="decrement",b="add_person",d=function(e){return{type:j,data:e}},h=n(1),O=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={carName:"haha"},e.plus=function(){var t=e.sele.value;e.props.jia(Number(t))},e.reduce=function(){var t=e.sele.value;e.props.jian(Number(t))},e.evenNum=function(){var t=e.sele.value;e.props.count%2!==0&&e.props.jia(Number(t))},e.asyncPlus=function(){var t=e.sele.value;e.props.asyncJia(Number(t),1e3)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return console.log("UI\u7ec4\u4ef6\u63a5\u6536\u5230\u7684props\u662f:",this.props),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["\u8fd9\u662fCount\u7ec4\u4ef6,\u4e0b\u65b9\u7ec4\u4ef6\u4eba\u6570:",this.props.persons.length]}),Object(h.jsxs)("h4",{children:["\u663e\u793a\u7684\u603b\u548c\u662f:",this.props.count]}),Object(h.jsxs)("select",{ref:function(t){return e.sele=t},children:[Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"})]}),"\xa0",Object(h.jsx)("button",{onClick:this.plus,children:"+"}),"\xa0",Object(h.jsx)("button",{onClick:this.reduce,children:"-"}),"\xa0",Object(h.jsx)("button",{onClick:this.evenNum,children:"\u5947\u6570\u53ef\u4ee5\u76f8\u52a0"}),"\xa0",Object(h.jsx)("button",{onClick:this.asyncPlus,children:"\u5f02\u6b65\u76f8\u52a0"})]})}}]),n}(r.Component),v=Object(l.b)((function(e){return{count:e.count,persons:e.personList}}),{jia:d,jian:function(e){return{type:p,data:e}},asyncJia:function(e,t){return function(n){setTimeout((function(){n(d(e))}),t)}}})(O),f=n(15),m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).addPerson=function(){var t=e.nameNode.value,n=e.nameAge.value,r={id:Object(f.a)(),name:t,age:n};e.props.jiaren(r),e.nameNode.value="",e.nameAge.value=""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["\u8fd9\u662fPerson\u7ec4\u4ef6,\u4e0a\u9762\u7684\u7ec4\u4ef6\u603b\u548c\u662f:",this.props.count]}),Object(h.jsx)("input",{ref:function(t){return e.nameNode=t},type:"text",placeholder:"\u8bf7\u8f93\u5165\u540d\u5b57"}),Object(h.jsx)("input",{ref:function(t){return e.nameAge=t},type:"number",placeholder:"\u8bf7\u8f93\u5165\u5e74\u9f84"}),Object(h.jsx)("button",{onClick:this.addPerson,children:"\u6dfb\u52a0"}),Object(h.jsx)("ul",{children:this.props.persons.map((function(e){return Object(h.jsxs)("li",{children:[e.name,"--",e.age]},e.id)}))})]})}}]),n}(r.Component),x=Object(l.b)((function(e){return{persons:e.personList,count:e.count}}),{jiaren:function(e){return{type:b,data:e}}})(m),y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(x,{})]})}}]),n}(r.Component),g=n(6);var k=n(14),N=[{id:"001",name:"tom",age:18}],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;return n===b?[r].concat(Object(k.a)(e)):e},w=Object(g.combineReducers)({personList:C,count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;console.log(e,t);var n=t.type,r=t.data;switch(n){case j:return e+r;case p:return e-r;default:return e}}}),A=n(12),P=n(13),J=Object(g.createStore)(w,Object(A.composeWithDevTools)(Object(g.applyMiddleware)(P.a)));o.a.render(Object(h.jsx)(l.a,{store:J,children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.94c0568d.chunk.js.map