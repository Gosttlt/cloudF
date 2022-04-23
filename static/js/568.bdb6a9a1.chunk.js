"use strict";(self.webpackChunkcloudf=self.webpackChunkcloudf||[]).push([[568],{4568:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=n(8152),a=n(3988),s=n(2774),i=n(2791),u="Modal_wrapper__BE2UA",c="Modal_content__yBmFf",o=n(4164),l=n(32),d=n(184),h=(0,l.Pi)((function(e){var t=e.children,n=e.isOpen,r=e.closeHandler,a=document.createElement("div"),s=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;return null===(e=document.body)||void 0===e||e.append(a),function(){var e;null===(e=document.body)||void 0===e||e.removeChild(a)}}),[a]),(0,i.useEffect)((function(){document.body.style.overflow=n?"hidden":"auto"}),[n]),(0,d.jsx)(d.Fragment,{children:n&&o.createPortal((0,d.jsx)("div",{className:u,onClick:function(e){e.target!==s.current&&r()},children:(0,d.jsx)("div",{ref:s,className:c,children:t})}),a)})})),f="Table_header__rwKnO",v="Table_table__YUzYe",m="Table_table_header__pZOwQ",g="Table_cell__tvGj6",x="Table_row__vg-qa",p=(0,l.Pi)((function(e){var t=e.columns,n=e.rows,r=e.header,a=e.rowsHandler;return(0,d.jsxs)(d.Fragment,{children:[r&&(0,d.jsx)("div",{className:f,children:r}),(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("div",{className:m,children:t.map((function(e){return(0,d.jsx)("div",{className:g,children:e.title},e.key)}))}),n.map((function(e,r){return(0,d.jsx)("div",{className:x,onClick:function(){a(e.id)},children:t.map((function(e){return(0,d.jsx)("div",{className:g,children:n[r][e.dataKey]},e.key)}))},e.id)}))]})]})})),_="Tabs_tabs__1kRTM",j="Tabs_tab__X52T4",b="Tabs_active__uGUKx",w=(0,i.memo)((function(e){var t=e.onChange,n=e.tabs,r=e.tabValue;return(0,d.jsx)("div",{className:_,children:n.map((function(e){return(0,d.jsx)("div",{className:"".concat(j," ").concat(r===e.id?b:""),onClick:r!==e.id?function(){return t(e.id)}:function(){},children:e.name},e.id)}))})})),k=function(e){var t=e.children,n=e.value,r=e.valueTabs;return(0,d.jsx)(d.Fragment,{children:r===n&&t})},y=(0,i.memo)((function(e){var t=e.children,n=e.value,r=i.Children.map(t,(function(e){return i.cloneElement(e,{valueTabs:n})}));return(0,d.jsx)(d.Fragment,{children:r})})),C=n(5861),q=n(5671),Q=n(3144),T=n(7757),I=n.n(T),N=n(4098),B=[{id:"\u0410",name:"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0410"},{id:"\u0411",name:"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0411"}],L=[{title:"name",key:"1",dataKey:"name"},{title:"last",key:"2",dataKey:"last"},{title:"Highest Bid",key:"3",dataKey:"highestBid"},{title:"percent change",key:"4",dataKey:"percentChange"}],Z=function(e,t,n,r,a){return{id:e,name:t,last:n,highestBid:r,percentChange:a}},F=n(4569),O=n.n(F),D={getQuotes:function(){return(0,C.Z)(I().mark((function e(){var t;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O().get("https://poloniex.com/public?command=returnTicker");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()}},K=new(function(){function e(){var t=this;(0,q.Z)(this,e),this.isLoading=!1,this.currentQuoteId=0,this.quotesData={},this.setCurrentQuoteId=function(e){t.currentQuoteId=e},this.setLoading=function(e){t.isLoading=e},this.fetchQuotes=(0,C.Z)(I().mark((function e(){var n;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getQuotes();case 2:n=e.sent,t.quotesData=n;case 4:case"end":return e.stop()}}),e)}))),(0,N.rC)(this,{isLoading:N.LO,quotesData:N.LO,currentQuoteId:N.LO,quotes:N.Fl,rows:N.Fl,currentQuote:N.Fl,setLoading:N.aD,setCurrentQuoteId:N.aD,fetchQuotes:N.aD})}return(0,Q.Z)(e,[{key:"quotes",get:function(){return this.quotesData}},{key:"quoteId",get:function(){return this.currentQuoteId}},{key:"rows",get:function(){var e=this;return Object.keys(this.quotes).map((function(t){var n=e.quotes[t];return Z(n.id,t,n.last,n.highestBid,n.percentChange)}))}},{key:"currentQuote",get:function(){var e=this;return this.rows.find((function(t){return t.id===e.quoteId}))}},{key:"quoteA",get:function(){return this.rows.slice(0,-Math.floor(this.rows.length/2))}},{key:"quoteB",get:function(){return this.rows.slice(Math.floor(this.rows.length/2))}}]),e}()),E="Quotes_wrapper__ki+AV",H=(0,l.Pi)((function(){var e=(0,i.useState)("\u0410"),t=(0,r.Z)(e,2),n=t[0],u=t[1],c=K.setLoading,o=K.fetchQuotes,l=K.setCurrentQuoteId,f=K.rows,v=K.currentQuote,m=K.quoteA,g=K.quoteB,x=(0,i.useState)(!1),_=(0,r.Z)(x,2),j=_[0],b=_[1],C=(0,i.useRef)(),q=(0,i.useRef)(!0);(0,i.useEffect)((function(){return q.current&&(o(),q.current=!1),j?clearInterval(C.current):C.current=setInterval(o,3e3),function(){clearInterval(C.current)}}),[j,c,o]);var Q=(0,i.useCallback)((function(e){b(!0),l(e)}),[l]);return(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(h,{isOpen:j,closeHandler:function(){return b(!1)},children:(0,d.jsx)(M,{quote:v})}),(0,d.jsx)(w,{onChange:u,tabs:B,tabValue:n}),(0,d.jsx)("div",{className:E,children:f.length?(0,d.jsxs)(y,{value:n,children:[(0,d.jsx)(k,{value:"\u0410",children:(0,d.jsx)(p,{columns:L,rows:m,rowsHandler:Q,header:"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438 < ".concat(n," >")})}),(0,d.jsx)(k,{value:"\u0411",children:(0,d.jsx)(p,{columns:L,rows:g,header:"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438 < ".concat(n," >"),rowsHandler:Q})})]}):(0,d.jsx)(s.Z,{})})]})})),M=function(e){var t=e.quote;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:["id: ",t.id]}),(0,d.jsxs)("div",{children:["name: ",t.name]}),(0,d.jsxs)("div",{children:["last: ",t.last]}),(0,d.jsxs)("div",{children:["highestBid: ",t.highestBid]}),(0,d.jsxs)("div",{children:["percentChange: ",t.percentChange]})]})}}}]);
//# sourceMappingURL=568.bdb6a9a1.chunk.js.map