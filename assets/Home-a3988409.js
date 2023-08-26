import{R as u,u as N,c as v,s as a,a as x,b as C,r as g,j as t,d as L,e as w,f as R,g as A}from"./index-2335f27d.js";function F(r=u){const n=r===u?N:v(r);return function(){const{store:o}=n();return o}}const D=F();function E(r=u){const n=r===u?D:F(r);return function(){return n().dispatch}}const b=E();let m=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((n,e)=>(e&=63,e<36?n+=e.toString(36):e<62?n+=(e-26).toString(36).toUpperCase():e>62?n+="-":n+="_",n),"");const $=a.form`
  margin: 0 10px;
`,j=a.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  text-align: left;
  margin: 0 0 10px;

  input {
    padding: 10px;
    border-color: #3b5998;
    border-radius: 5px;
  }
`,H=a.button`
  background-color: #dfe3ee;
  color: #3b5998;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`,T=a.h1`
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px;
  background-color: #3b5998;
  color: #fff;
  margin-bottom: 10px;
`;function z(){const r=b(),n=x(C),[e,o]=g.useState(""),[c,s]=g.useState(""),i=m(),d=m(),f=({target:{name:l,value:p}})=>{l==="name"?o(p):l==="number"&&s(p)},k=l=>{if(l.preventDefault(),n.some(h=>h.name.toLowerCase()===e.toLowerCase())){alert(`${e} is already in contacts`);return}if(n.some(h=>h.number===c)){alert(`The number ${c} is already in contacts`);return}const S={id:m(5),name:e,number:c};r(L(S)),y()},y=()=>{o(""),s("")};return t.jsxs($,{onSubmit:k,children:[t.jsxs("ul",{children:[t.jsxs(j,{children:[t.jsx("label",{htmlFor:i,children:"Name"}),t.jsx("input",{type:"text",id:i,name:"name",value:e,onChange:f,pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),t.jsxs(j,{children:[t.jsx("label",{htmlFor:d,children:"Number"}),t.jsx("input",{type:"tel",id:d,name:"number",value:c,onChange:f,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),t.jsx(H,{type:"submit",children:"Add contact"})]})}const Z=a.table`
  margin: 0 auto;
  color: #3b5998;
  width: 100%;
  border-radius: 0 0 10px;
  text-align: center;
  box-shadow:
    0 1px 6px rgb(46 47 66 / 8%),
    0 1px 1px rgb(46 47 66 / 16%),
    0 2px 1px rgb(46 47 66 / 8%);
  overflow: hidden;

  th,
  td {
    padding: 10px;
  }

  td {
    text-align: left;
  }

  th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid #8b9dc3;
  }

  tbody tr:nth-child(even) {
    background-color: #f7f7f7;
  }

  button {
    background-color: transparent;
    border: none;
    font-weight: bold;
    color: #3b5998;
    cursor: pointer;
  }

  button:hover {
    color: #ff1919;
  }
`,q=a.thead`
  background-color: #3b5998;
  color: #f7f7f7;
`;function B(){const r=x(C),n=x(w),e=b(),o=r.filter(s=>s.name.toLowerCase().includes(n.toLowerCase()));if(!o.length)return t.jsx("p",{children:"No contacts"});const c=s=>{e(R(s))};return t.jsxs(Z,{children:[t.jsx(q,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Number"}),t.jsx("th",{children:"x"})]})}),t.jsx("tbody",{children:o.map(({id:s,name:i,number:d})=>t.jsxs("tr",{children:[t.jsx("td",{children:i}),t.jsx("td",{children:d}),t.jsx("td",{children:t.jsx("button",{type:"button",onClick:()=>c(s),children:"x"})})]},s))})]})}const I=a.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;

  labael {
    text-align: left;
  }

  input {
    padding: 10px;
    border-color: #3b5998;
    border-radius: 5px;
  }
`,P=a.h2`
  margin-top: 10px;
  font-weight: 700;
  margin-top: 10px;
  padding: 10px;
  text-transform: uppercase;
  background-color: #3b5998;
  color: #fff;
`;function U(){const r=b(),n=x(w),e=o=>{r(A(o.currentTarget.value))};return t.jsxs(I,{children:[t.jsx("label",{htmlFor:"filter",children:"Find contacts by name"}),t.jsx("input",{type:"text",name:"filter",value:n,onChange:e})]})}function V(){return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:"Phonebook"}),t.jsx(z,{}),t.jsx(P,{children:"Contacts"}),t.jsx(U,{}),t.jsx(B,{})]})}export{V as default};
