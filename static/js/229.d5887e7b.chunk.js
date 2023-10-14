"use strict";(self.webpackChunkproject_money_guard=self.webpackChunkproject_money_guard||[]).push([[229],{229:function(n,e,t){t.r(e),t.d(e,{default:function(){return $n}});var r,i,o,a,c,s,d,l,x,h,u,p,m,g=t(9439),f=t(2791),b=t(168),j=t(6487),y=t(5705),w=t(9513),v=t.n(w),Z=j.zo.div(r||(r=(0,b.Z)(["\n  padding: 20px 0;\n"]))),k=(0,j.zo)(y.l0)(i||(i=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 280px;\n"]))),S=(0,j.zo)(y.gN)(o||(o=(0,b.Z)(["\n  width: 280px;\n  height: 75px;\n  color: rgba(255, 255, 255, 0.6);\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  padding: 0 20px;\n"]))),P=j.zo.select(a||(a=(0,b.Z)(["\n  width: 280px;\n  height: 75px;\n  color: rgba(255, 255, 255, 0.6);\n  background: transparent;\n  padding: 0 20px;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n"]))),C=j.zo.h2(c||(c=(0,b.Z)(["\n  text-align: center;\n  font-size: 24px;\n  margin-bottom: 34px;\n"]))),z=(0,j.zo)(v())(s||(s=(0,b.Z)(["\n  width: 280px;\n  height: 75px;\n  padding: 0 20px;\n  color: ",";\n  background: transparent;\n  padding: 0 20px;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n"])),(function(n){return n.theme.colors.mainWhite})),F=j.zo.div(d||(d=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),D=j.zo.button(l||(l=(0,b.Z)(["\n  width: 280px;\n  height: 50px;\n  padding: 13px 100px;\n  border-radius: 20px;\n  font-size: 18px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: ",";\n  background: ",";\n  margin-top: 40px;\n"])),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.backgrounds.btnGradient})),E=j.zo.button(x||(x=(0,b.Z)(["\n  width: 280px;\n  height: 50px;\n  padding: 13px 100px;\n  border-radius: 20px;\n  font-size: 18px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #623f8b;\n  background-color: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.mainWhite})),B=t(9434),M=t(6378),T=t(8007),I=(t(8639),t(7609)),L=t(184),O=["Main expenses","Products","Car","Self Care","Child Care","Household Products","Education","Leisure","Other expenses","Entertainment"],N=(0,T.Ry)({amount:(0,T.Z_)().required().min(2,"Too Short!").max(50,"Too Long!"),comment:(0,T.Z_)().min(2,"Too Short!").max(50,"Too Long!"),category:(0,T.Z_)().oneOf(O).required()}),_=function(){var n=(0,B.I0)(),e=(0,f.useState)(),t=(0,g.Z)(e,2),r=t[0],i=t[1];return(0,L.jsx)("div",{children:(0,L.jsxs)(Z,{children:[(0,L.jsx)(C,{children:"Add transaction"}),(0,L.jsx)(y.J9,{initialValues:{type:"Expense",category:"",amount:"",date:(new Date).toLocaleDateString("uk-UA"),comment:""},validationSchema:N,onSubmit:function(e){console.log("submit",e),n((0,M.Oj)(e))},children:function(n){var e=n.errors,t=n.touched,o=n.values,a=n.handleChange;return(0,L.jsxs)(k,{autoComplete:"off",children:[(0,L.jsxs)(P,{name:"type",value:o.type,onChange:a,children:[(0,L.jsx)("option",{children:"Income"}),(0,L.jsx)("option",{children:"Expense"})]}),(0,L.jsxs)(P,{name:"category",value:o.category,onChange:a,children:[(0,L.jsx)("option",{disabled:!0,value:"",children:"Select a category"}),O.map((function(n){return(0,L.jsx)("option",{children:n},n)}))]}),(0,L.jsx)(S,{name:"amount",placeholder:"0.00"}),(0,L.jsx)(z,{name:"date",value:o.date,onChange:function(n){a({target:{name:"date",value:n.toLocaleDateString("uk-UA")}}),i(n)},dateFormat:"dd.MM.yyyy",showIcon:!0,selected:r,maxDate:new Date,style:{float:"right"},icon:(0,L.jsx)("svg",{width:"24",height:"24",children:(0,L.jsx)("use",{href:"".concat(I.Z,"#calendar")})})}),(0,L.jsx)(S,{name:"comment",type:"comment",placeholder:"Comment"}),e.comment&&t.comment?(0,L.jsx)("div",{children:e.comment}):null,(0,L.jsxs)(F,{children:[(0,L.jsx)(D,{type:"submit",children:"Add"}),(0,L.jsx)(E,{type:"submit",children:"Cancel"})]})]})}})]})})},A=function(){return(0,L.jsx)("div",{children:"ButtonAddTransactions"})},H=function(){return(0,L.jsx)("div",{children:"EditTransactionForm"})},W=j.ZP.div(h||(h=(0,b.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1200;\n  background: rgba(34, 13, 91, 0.23);\n  backdrop-filter: blur(3.5px);\n  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;\n  opacity: 1;\n  visibility: visible;\n\n  @media screen and (min-width: 768px) {\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;\n  }\n"]))),$=j.ZP.div(u||(u=(0,b.Z)(["\n  width: 320px;\n  min-height: 600px;\n  padding: 41px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: radial-gradient(#3f2e96, #5f478c);\n  border-radius: 8px;\n  position: relative;\n  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n\n  @media screen and (min-width: 768px) {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    padding: calc(20 * (100vw / 480));\n    min-width: 300px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 540px;\n    max-height: 511px;\n    border-radius: 8px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    border-radius: 8px;\n    padding: calc(20 * (100vw / 480));\n    min-width: 300px;\n  }\n"]))),q=j.ZP.button(p||(p=(0,b.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background-color: transparent;\n  padding: 0;\n  line-height: 0;\n  border: none;\n  cursor: pointer;\n  display: none;\n\n  @media screen and (min-width: 768px) {\n    display: block;\n  }\n\n  &:hover {\n    transform: scale(1.4);\n    transition: transform 0.3s ease-in-out;\n  }\n  &:not(:hover) {\n    transform: scale(1);\n    transition: transform 0.3s ease-in-out;\n  }\n"]))),U=j.ZP.button(m||(m=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 280px;\n  height: 50px;\n  padding: 13px 68px;\n  background-color: rgba(251, 251, 251, 1);\n  border-radius: 20px;\n  border: none;\n  line-height: 1.5;\n  font-size: 18px;\n  letter-spacing: 1.8px;\n  color: rgba(98, 63, 139, 1);\n  font-weight: 400;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-top: 501px;\n"])));function G(n){var e=n.children,t=n.showCloseIcon,r=void 0===t||t,i=n.handleOpen,o=n.close;(0,f.useEffect)((function(){var n=function(n){"Escape"===n.key&&i()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[i]);var a=function(n){"cancel"!==n.target.name&&"closeSvg"!==n.currentTarget.name||o()};return(0,L.jsx)(W,{onClick:function(n){return function(n){n.currentTarget===n.target&&o()}(n)},children:(0,L.jsxs)($,{children:[r&&(0,L.jsx)(q,{type:"button",name:"closeSvg",onClick:a,children:(0,L.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,L.jsx)("path",{d:"M1 1L17 17",stroke:"#FBFBFB"}),(0,L.jsx)("path",{d:"M1 17L17 0.999999",stroke:"#FBFBFB"})]})}),e,(0,L.jsx)(U,{type:"button",name:"cancel",onClick:a,children:"Cancel"})]})})}var Y,J,K,Q,R,V,X,nn,en,tn,rn,on,an,cn,sn,dn,ln,xn,hn=function(){return(0,L.jsx)("div",{children:"ModalAddTransaction"})},un=function(){return(0,L.jsx)("div",{children:"ModalEditTransaction"})},pn=t(5518),mn=j.ZP.div(Y||(Y=(0,b.Z)(["\n  margin: 0 auto;\n"]))),gn=j.ZP.ul(J||(J=(0,b.Z)(["\n  max-height: 50vh;\n  overflow-y: scroll;\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(82, 59, 126, 0.3);\n  }\n  &::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  &::-webkit-scrollbar {\n    width: 0.5em;\n  }\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    display: block;\n    list-style: none;\n  }\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]))),fn=j.ZP.div(K||(K=(0,b.Z)(["\n  display: none;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),bn=j.ZP.table(Q||(Q=(0,b.Z)(["\n  border-collapse: collapse;\n  width: 100%;\n"]))),jn=j.ZP.tr(R||(R=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n\n  padding: 16px 20px;\n  border-radius: 8px;\n  background: ",";\n  box-shadow: ",";\n  backdrop-filter: ",";\n\n  & :nth-child(3) {\n    margin-left: -15px;\n  }\n  & :nth-child(4) {\n    margin-left: -30px;\n  }\n  & :nth-child(5) {\n    margin-left: 18px;\n  }\n  & :nth-child(:not(:last-child)) {\n    margin-right: 0;\n  }\n  @media only screen and (min-width: 768px) {\n    gap: 60px;\n  }\n"])),(function(n){return n.theme.backgrounds.tableHead}),(function(n){return n.theme.shadows.default}),(function(n){return n.theme.blur.backdropFilter})),yn=j.ZP.th(V||(V=(0,b.Z)(["\n  text-align: center;\n  font-size: 16px;\n  font-weight: 400;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.mainWhite})),wn=j.ZP.tbody(X||(X=(0,b.Z)(["\n  display: block;\n\n  max-height: 50vh;\n  overflow-y: scroll;\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(82, 59, 126, 0.3);\n  }\n  &::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  &::-webkit-scrollbar {\n    width: 0.5em;\n  }\n"]))),vn=j.ZP.tr(nn||(nn=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  border-bottom: ",";\n\n  gap: 50px;\n"])),(function(n){return n.theme.border.borderBottom})),Zn=j.ZP.td(en||(en=(0,b.Z)(["\n  min-width: 50px;\n  text-align: center;\n  font-family: Poppins;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: ",";\n"])),(function(n){return n.$color})),kn=(0,j.ZP)(Zn)(tn||(tn=(0,b.Z)(["\n  text-align: start;\n  flex-shrink: 1;\n  flex-basis: 100px;\n"]))),Sn=j.ZP.div(rn||(rn=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Pn=j.ZP.li(on||(on=(0,b.Z)(["\n  margin: 0 auto;\n  min-width: 280px;\n  max-width: 360px;\n  margin-bottom: 8px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  border-left: 5px solid ",";\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    display: block;\n    list-style: none;\n  }\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"])),(function(n){return n.$color})),Cn=j.ZP.div(an||(an=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: ",";\n"])),(function(n){return n.theme.border.borderBottom})),zn=j.ZP.p(cn||(cn=(0,b.Z)(["\n  text-align: right;\n  font-family: Poppins;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: ",";\n"])),(function(n){return n.theme.colors.mainWhite})),Fn=j.ZP.span(sn||(sn=(0,b.Z)(["\n  max-width: 120px;\n"]))),Dn=j.ZP.div(dn||(dn=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 20px;\n"]))),En=j.ZP.button(ln||(ln=(0,b.Z)(["\n  text-align: center;\n  font-family: Poppins;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  padding: 4px 12px;\n\n  border-radius: 18px;\n  background: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.backgrounds.btnGradient}),(function(n){return n.theme.shadows.deleteBtnShadow})),Bn=j.ZP.button(xn||(xn=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 12px;\n\n  background-color: transparent;\n\n  color: var(--white-60, rgba(255, 255, 255, 0.6));\n  text-align: center;\n  font-family: Poppins;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: 0.32px;\n"]))),Mn=t(8418);function Tn(n){var e=new Date(n),t=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getFullYear().toString().slice(-2);return"".concat(t,".").concat(r,".").concat(i)}var In=function(n){var e=n.transaction,t=(0,B.v9)(Mn.us),r=t.find((function(n){return n.id===e.categoryId})),i=(0,B.I0)();return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(Pn,{$color:"INCOME"===e.type?"#ff868d":"#FFB627",children:[(0,L.jsxs)(Cn,{children:[(0,L.jsx)(zn,{children:"Date"}),(0,L.jsx)("span",{children:Tn(e.transactionDate)})]}),(0,L.jsxs)(Cn,{children:[(0,L.jsx)(zn,{children:"Type"}),(0,L.jsx)("span",{children:e.type})]}),(0,L.jsxs)(Cn,{children:[(0,L.jsx)(zn,{children:"Category"}),(0,L.jsx)("span",{children:t?r.name:"-"})]}),(0,L.jsxs)(Cn,{children:[(0,L.jsx)(zn,{children:"Comment"}),(0,L.jsx)(Fn,{children:e.comment.length>=25?"".concat(e.comment.slice(0,25),"..."):e.comment})]}),(0,L.jsxs)(Cn,{children:[(0,L.jsx)(zn,{children:"Sum"}),(0,L.jsx)("span",{children:e.amount})]}),(0,L.jsxs)(Dn,{children:[(0,L.jsx)(En,{onClick:function(){return n=e.id,void i((0,M.nm)(n));var n},children:"Delete"}),(0,L.jsxs)(Bn,{children:[(0,L.jsx)("svg",{width:"14",height:"14",children:(0,L.jsx)("use",{href:"".concat(I.Z,"#edit")})}),"Edit"]})]})]})})},Ln=t(4217),On=function(){var n=(0,B.v9)(Mn.ig),e=(0,B.v9)(Ln.NH),t=(0,B.v9)(Mn.zh);return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(gn,{children:[e&&(0,L.jsx)(pn.Z,{}),t&&(0,L.jsx)("h1",{children:"Something went wrong... \ud83d\ude22"}),n.length>0?n.map((function(n){return(0,L.jsx)(In,{transaction:n},n.id)})):(0,L.jsx)("h3",{children:"Oh, you don't have transactions yet. Let's create one!"})]})})};function Nn(n){var e=new Date(n),t=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getFullYear().toString().slice(-2);return"".concat(t,".").concat(r,".").concat(i)}var _n=function(){var n=(0,B.I0)(),e=(0,B.v9)(Mn.ig),t=(0,B.v9)(Mn.us),r=(0,B.v9)(Mn.NH),i=(0,B.v9)(Mn.zh);return(0,L.jsx)(mn,{children:(0,L.jsxs)(fn,{children:[r&&(0,L.jsx)(pn.Z,{}),i&&(0,L.jsx)("h1",{children:"Something went wrong... \ud83d\ude22"}),(0,L.jsxs)(bn,{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)(jn,{children:[(0,L.jsx)(yn,{children:"Date"}),(0,L.jsx)(yn,{children:"Type"}),(0,L.jsx)(yn,{children:"Category"}),(0,L.jsx)(yn,{children:"Comment"}),(0,L.jsx)(yn,{children:"Sum"})]})}),(0,L.jsx)(wn,{children:e.length>0?e.map((function(e){var r;return(0,L.jsxs)(vn,{children:[(0,L.jsx)(Zn,{children:Nn(e.transactionDate)}),(0,L.jsx)(Zn,{children:"INCOME"===e.type?"+":"-"}),(0,L.jsx)(Zn,{children:(null===(r=t.find((function(n){return n.id===e.categoryId})))||void 0===r?void 0:r.name)||"-"}),(0,L.jsx)(kn,{children:e.comment}),(0,L.jsx)(Zn,{$color:"INCOME"===e.type?"#FFB627":"#FF868D",children:e.amount}),(0,L.jsx)("td",{children:(0,L.jsxs)(Sn,{children:[(0,L.jsx)(Bn,{children:(0,L.jsx)("svg",{width:"14",height:"14",children:(0,L.jsx)("use",{href:"".concat(I.Z,"#edit")})})}),(0,L.jsx)(En,{onClick:function(){return t=e.id,void n((0,M.nm)(t));var t},children:"Delete"})]})})]},e.id)})):(0,L.jsx)("tr",{children:(0,L.jsx)("td",{colSpan:"6",children:"No transactions found."})})})]})]})})},An=function(){var n=(0,f.useState)(!1),e=(0,g.Z)(n,2),t=e[0],r=e[1];return{isOpen:t,close:function(){r(!1)},open:function(){r(!0)},toggle:function(){return r((function(n){return!n}))}}},Hn=t(4805),Wn=t(7451),$n=function(){var n=An(),e=n.toggle,t=n.isOpen,r=n.close,i=(0,Hn.useMediaQuery)({query:"(min-width:768px)"});return(0,L.jsxs)(Wn.P,{children:[i?(0,L.jsx)(_n,{}):(0,L.jsx)(On,{}),(0,L.jsx)(A,{}),(0,L.jsx)(hn,{}),(0,L.jsx)(un,{}),(0,L.jsx)(_,{}),(0,L.jsx)(H,{}),t&&(0,L.jsx)(G,{handleOpen:function(){e()},close:r})]})}},8418:function(n,e,t){t.d(e,{Cp:function(){return l},Kk:function(){return s},NH:function(){return i},UF:function(){return c},ig:function(){return r},ip:function(){return d},us:function(){return a},zh:function(){return o}});var r=function(n){return n.transactions.transactions.items},i=function(n){return n.transactions.transactions.isLoading},o=function(n){return n.transactions.transactions.error},a=function(n){return n.transactions.transactions.categories},c=function(n){return n.transactions.summary.categoriesSummary},s=function(n){return n.transactions.summary.incomeSummary},d=function(n){return n.transactions.summary.expenseSummary},l=function(n){return n.transactions.summary.periodTotal}}}]);
//# sourceMappingURL=229.d5887e7b.chunk.js.map