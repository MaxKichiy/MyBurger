(this.webpackJsonpmyburger=this.webpackJsonpmyburger||[]).push([[5],{102:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),i=n(98),c=n.n(i),u=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return a.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"10px"}},e.name," ",e.amount)}));return a.a.createElement("div",{className:c.a.Order},a.a.createElement("p",null,"Ingredients: ",t),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",e.price.toFixed(2))))},o=n(13),d=n(41),s=n(11),l=n(10),p=n(32);r.default=Object(l.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,n){return e(s.d(r,n))}}}))(Object(d.a)((function(e){Object(t.useEffect)((function(){e.onFetchOrders(e.token,e.userId)}),[]);var r=a.a.createElement(p.a,null);return e.loading||(r=e.orders.map((function(e){return a.a.createElement(u,{ingredients:e.ingredients,price:+e.price,key:e.id})}))),a.a.createElement("div",null,r)}),o.a))},98:function(e,r,n){e.exports={Order:"Order_Order__g2rFk"}}}]);
//# sourceMappingURL=5.62b36b1a.chunk.js.map