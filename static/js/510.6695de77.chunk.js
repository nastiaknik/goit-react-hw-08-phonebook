"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[510],{2510:function(n,e,r){r.r(e),r.d(e,{default:function(){return Pn}});var t,i,o,a,s,c,l,d,u,p,x=r(2791),m=r(9434),h=r(4270),f=r(6916),b=function(n){return n.contacts.items},j=function(n){return n.filter},g=((0,f.P1)([b,j],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())||n.number.includes(e.toLowerCase().trim())}))})),r(9085)),y=r(3433),Z=r(9439),v=r(3634),w=r(7425),C=r(9126),P=r(3998),k=r(3053),z=r(1910),I=r(3161),N=r(6157),A=(r(7632),r(168)),S=r(7691),q=r(6856),F=(0,S.ZP)(q.zmo)(t||(t=(0,A.Z)(["\n  font-size: 20px;\n  color: #28c38a;\n  opacity: 0.8;\n"]))),L=S.ZP.button(i||(i=(0,A.Z)(["\n  align-items: center;\n  border-radius: 4px;\n  display: flex;\n  height: 32px;\n  width: 32px;\n  justify-content: center;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n\n  :hover,\n  :focus {\n    > "," {\n      opacity: 1;\n    }\n  }\n"])),F),E=r(3329);function T(n){var e=n.contact,r=(0,x.useState)(!1),t=(0,Z.Z)(r,2),i=t[0],o=t[1],a=function(){return o(!1)},s=(0,m.I0)(),c=(0,m.v9)(b);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(L,{type:"button",onClick:function(){return o(!0)},children:(0,E.jsx)(F,{})}),(0,E.jsxs)(z.Z,{show:i,onHide:a,children:[(0,E.jsx)(z.Z.Header,{closeButton:!0,style:{border:"none"},children:(0,E.jsx)(z.Z.Title,{children:"Edit the contact"})}),(0,E.jsxs)(P.Z,{onSubmit:function(n){n.preventDefault();var r=n.currentTarget.name.value,t=n.currentTarget.number.value;c.filter((function(n){return n!==e})).some((function(n){return n.name===r||n.number===t}))?g.Am.error((0,E.jsxs)("p",{children:[(0,E.jsx)("span",{style:{color:"red"},children:r})," is already in the list!"]})):(e.name===r&&e.number===t&&g.Am.warning((0,E.jsxs)("p",{children:["You did not change contact"," ",(0,E.jsx)("span",{style:{color:"orange"},children:e.name}),"!"]})),s((0,v.mP)({id:e.id,contact:{name:r,number:t}})),n.currentTarget.reset(),a())},children:[(0,E.jsxs)(P.Z.Group,{controlId:"contactToEdit",style:{padding:"10px",display:"flex",displayWrap:"nowrap",gap:"5px",justifyContent:"center",alignItems:"center"},children:[(0,E.jsx)(I.Z,{hasValidation:!0,children:(0,E.jsx)(k.Z,{controlId:"floatingContactToEdit",label:"Edit the contact name",children:(0,E.jsx)(P.Z.Control,{type:"text",name:"name",defaultValue:e.name,placeholder:"Anastasia Knihnitska",autoFocus:!0,required:!0})})}),(0,E.jsx)(I.Z,{hasValidation:!0,children:(0,E.jsx)(k.Z,{label:"Edit the phone number",controlId:"floatingNumber",children:(0,E.jsx)(P.Z.Control,{type:"text",name:"number",defaultValue:e.number,required:!0,placeholder:"+38 000 000 00 00"})})})]}),(0,E.jsxs)(z.Z.Footer,{style:{border:"none"},children:[(0,E.jsx)(N.Z,{variant:"secondary",onClick:a,type:"button",children:"Close"}),(0,E.jsx)(N.Z,{variant:"primary",type:"submit",children:"Save"})]})]})]})]})}var _,V,K,R,B,J,G,H,O,W,Y,D,U,$=S.ZP.span(o||(o=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 35px;\n  min-height: 35px;\n  border-radius: 50%;\n  color: white;\n"]))),M=S.ZP.button(a||(a=(0,A.Z)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  opacity: 0.7;\n  :hover,\n  :focus {\n    opacity: 1;\n    /*  color: #7286d3; */\n  }\n"]))),Q=(S.ZP.a(s||(s=(0,A.Z)(["\n  background-color: transparent;\n  cursor: pointer;\n  opacity: 0.7;\n  :hover,\n  :focus {\n    opacity: 1;\n  }\n  :visited {\n    opacity: 0.7;\n  }\n"]))),S.ZP.th(c||(c=(0,A.Z)(["\n  padding: 15px;\n  font-size: 16px;\n  color: black;\n  font-weight: 400;\n"]))),S.ZP.tr(l||(l=(0,A.Z)(["\n  background-color: transparent;\n  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    background-color: #e5e0ff;\n  }\n"])))),X=S.ZP.td(d||(d=(0,A.Z)(["\n  padding: 10px;\n  text-align: left;\n"]))),nn=S.ZP.td(u||(u=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 10px 15px;\n  text-align: center;\n"]))),en=S.ZP.td(p||(p=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 10px;\n  text-align: center;\n  justify-content: center;\n"]))),rn=function(n){var e=n.contacts,r=(0,m.I0)(),t=(0,x.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem("favourites")))&&void 0!==n?n:[]})),i=(0,Z.Z)(t,2),o=i[0],a=i[1];(0,x.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(o))}),[o]);return e.map((function(n){return(0,E.jsxs)(Q,{children:[(0,E.jsxs)(nn,{children:[(0,E.jsx)($,{children:(e=n.name,e.split(" ").map((function(n){return n.slice(0,1).toUpperCase()})).slice(0,2).join(""))}),n.name]}),(0,E.jsx)(X,{children:n.number}),(0,E.jsxs)(en,{children:[(0,E.jsx)(M,{type:"button",onClick:function(){return function(n){o.find((function(e){return e.id===n.id}))?(a(o.filter((function(e){return e.id!==n.id}))),g.Am.success((0,E.jsxs)("p",{children:["Contact ",(0,E.jsx)("span",{style:{color:"green"},children:n.name})," removed from favorites!"]}))):(a([].concat((0,y.Z)(o),[n])),g.Am.success((0,E.jsxs)("p",{children:["Contact ",(0,E.jsx)("span",{style:{color:"green"},children:n.name})," added to favorites!"]})))}(n)},children:o.find((function(e){return e.id===n.id}))?(0,E.jsx)(C.kRm,{size:24,color:"#ffd800"}):(0,E.jsx)(C.RrZ,{size:24,color:"#ffd800"})}),(0,E.jsx)(T,{contact:n}),(0,E.jsx)(M,{type:"button",onClick:function(){return function(n){r((0,v.GK)(n.id)),g.Am.success((0,E.jsxs)("p",{children:["Contact ",(0,E.jsx)("span",{style:{color:"green"},children:n.name})," deleted!"]}))}(n)},children:(0,E.jsx)(w.qy0,{size:24,color:"red"})})]})]},n.id);var e}))},tn=S.ZP.table(_||(_=(0,A.Z)(["\n  width: 100%;\n  border-collapse: collapse;\n  padding: 10px;\n"]))),on=S.ZP.th(V||(V=(0,A.Z)(["\n  padding: 15px;\n  font-size: 16px;\n  color: black;\n  font-weight: 400;\n  width: /* 153px; */ fit-content;\n  max-height: 50px;\n\n  :not(:last-child) {\n    border-right: 2px solid #e5e0ff;\n  }\n\n  border-top: 2px solid #e5e0ff;\n  border-bottom: 2px solid #e5e0ff;\n"]))),an=function(){var n=(0,m.v9)(j),e=(0,m.v9)(b);return(0,E.jsxs)(tn,{children:[(0,E.jsx)("thead",{children:(0,E.jsxs)("tr",{children:[(0,E.jsx)(on,{children:"Name"}),(0,E.jsx)(on,{children:"Phone number"}),(0,E.jsxs)(on,{children:[e.length,(0,E.jsxs)("span",{children:[" ",1===e.length?"contact":"contacts"]})]})]})}),(0,E.jsx)("tbody",{children:(0,E.jsx)(rn,{contacts:function(){var r=0===e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())||e.number.includes(n.trim())})).length;return n&&r&&g.Am.error((0,E.jsxs)("p",{children:["Sorry, there are no contact matching",(0,E.jsxs)("span",{style:{color:"red"},children:[" ",n]}),"!"]}),{toastId:"dont-duplicate-pls"}),e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())||e.number.includes(n.trim())})).sort((function(n,e){return n.name.localeCompare(e.name)}))}()})})]})},sn=r(2506),cn=r(8007),ln=r(7692),dn=(0,S.ZP)(sn.l0)(K||(K=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 20px 0;\n"]))),un=(S.ZP.label(R||(R=(0,A.Z)(["\n  padding: 0 5px;\n  opacity: 0.8;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  pointer-events: none;\n"]))),S.ZP.div(B||(B=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n  gap: 10px;\n"])))),pn=(0,S.ZP)(sn.gN)(J||(J=(0,A.Z)(["\n  margin-left: 5px;\n  padding: 8px;\n  background: transparent;\n  border: 2px solid #e5e0ff;\n  border-radius: 5px;\n  font-size: 16px;\n  max-width: 190px;\n\n  :focus {\n    outline: 1px solid #7286d3;\n  }\n\n  &.error {\n    border-color: tomato;\n  }\n"]))),xn=S.ZP.button(G||(G=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 10px 30px;\n  margin: 0 auto 20px;\n  font-size: 16px;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  background-color: #8ea7e9;\n  cursor: pointer;\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    background-color: #7286d3;\n  }\n"]))),mn=S.ZP.div(H||(H=(0,A.Z)(["\n  position: relative;\n"]))),hn=S.ZP.span(O||(O=(0,A.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  color: tomato;\n  text-align: start;\n  width: 230px;\n  font-size: 16px;\n  gap: 5px;\n  width: 100%;\n"]))),fn=cn.Ry().shape({name:cn.Z_().min(3,"Name is too short!").max(30,"Name is too long!").required("Name is required!").label("Name"),number:cn.Z_().required("Phone number is required!").label("Number").matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/,"Please provide a valid phone number!")}),bn=function(){var n=(0,m.v9)(b),e=(0,m.I0)();return(0,E.jsx)(sn.J9,{initialValues:{name:"",number:""},onSubmit:function(r,t){var i={name:r.name,number:r.number};n.some((function(n){return n.name===i.name}))?g.Am.warning((0,E.jsxs)("p",{children:["Contact ",(0,E.jsx)("span",{style:{color:"orange"},children:i.name})," ","already exist!"]})):n.some((function(n){return n.number===i.number}))?g.Am.warning((0,E.jsxs)("p",{children:["Number ",(0,E.jsx)("span",{style:{color:"orange"},children:i.number})," is already in base!"]})):(e((0,v.uK)(i)),g.Am.success((0,E.jsxs)("p",{children:["Contact ",(0,E.jsx)("span",{style:{color:"green"},children:i.name})," added!"]})),t.resetForm())},validationSchema:fn,children:function(n){return(0,E.jsxs)(dn,{children:[(0,E.jsxs)(un,{children:[(0,E.jsxs)(mn,{children:[(0,E.jsxs)("div",{style:{display:"flex",wtap:"nowrap",justifyContent:"center",alignItems:"center"},children:[(0,E.jsx)("label",{htmlFor:"name",children:"Name"}),(0,E.jsx)(pn,{id:"name",type:"text",name:"name",required:!0,placeholder:"Anastasia Knihnitska",value:n.values.name,onChange:n.handleChange,className:n.touched.name&&n.errors.name?"error":""})]}),(0,E.jsx)(sn.Bc,{name:"name",children:function(n){return(0,E.jsxs)(hn,{children:[(0,E.jsx)(ln.Cw1,{})," ",n]})}})]}),(0,E.jsxs)(mn,{children:[(0,E.jsxs)("div",{style:{display:"flex",wtap:"nowrap",justifyContent:"center",alignItems:"center"},children:[(0,E.jsx)("label",{htmlFor:"number",children:"Number"}),(0,E.jsx)(pn,{id:"number",type:"tel",name:"number",required:!0,placeholder:"+38 000 000 00 00",value:n.values.number,onChange:n.handleChange,className:n.touched.number&&n.errors.number?"error":""})]}),(0,E.jsx)(sn.Bc,{name:"number",children:function(n){return(0,E.jsxs)(hn,{children:[(0,E.jsx)(ln.Cw1,{})," ",n]})}})]})]}),(0,E.jsx)(xn,{type:"submit",children:"Add contact"})]})}})},jn=r(3853),gn=r(6895),yn=S.ZP.div(W||(W=(0,A.Z)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n"]))),Zn=S.ZP.input(Y||(Y=(0,A.Z)(["\n  padding: 8px;\n  background: transparent;\n  border: 2px solid #e5e0ff;\n  border-radius: 5px;\n  margin-left: 10px;\n  font-size: 16px;\n  &:focus {\n    outline: 1px solid #8ea7e9;\n  }\n"]))),vn=function(){var n=(0,m.I0)(),e=(0,m.v9)(j);return(0,E.jsxs)(yn,{children:[(0,E.jsx)("label",{htmlFor:"filter",children:(0,E.jsx)(jn.jRj,{size:20})}),(0,E.jsx)(Zn,{id:"filter",type:"text",onChange:function(e){return n((0,gn.hL)(e.target.value))},value:e,name:"filter",placeholder:"Search contacts"})]})},wn=(r(5462),S.ZP.section(D||(D=(0,A.Z)(["\n  box-shadow: 0 0 0 2px #cbc3e3, 8px 8px 0 0 #cbc3e3;\n  width: 600px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n"])))),Cn=S.ZP.h2(U||(U=(0,A.Z)(["\n  margin-top: 0;\n  margin: 0 auto;\n  font-size: 30px;\n  border-bottom: 3px solid #cbc3e3;\n  padding: 20px;\n"])));function Pn(){var n=(0,m.I0)();return(0,x.useEffect)((function(){n((0,v.yF)())}),[n]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(h.q,{children:(0,E.jsx)("title",{children:"Your contacts"})}),(0,E.jsxs)(wn,{children:[(0,E.jsx)(Cn,{children:"Add new contact"}),(0,E.jsx)(bn,{})]}),(0,E.jsxs)(wn,{children:[(0,E.jsxs)(Cn,{style:{display:"flex",flexWrap:"nowrap",gap:"20px",margin:"0 auto",justifyContent:"end",alignItems:"baseline"},children:["Search contacts",(0,E.jsx)(vn,{})]}),(0,E.jsx)(an,{})]}),(0,E.jsx)(g.Ix,{})]})}}}]);
//# sourceMappingURL=510.6695de77.chunk.js.map