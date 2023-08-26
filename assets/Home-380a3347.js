import{R as u,u as k,c as v,s as c,a as x,b as C,r as g,j as t,d as L,e as F,f as R,g as A}from"./index-e5546bed.js";function w(r=u){const n=r===u?k:v(r);return function(){const{store:o}=n();return o}}const D=w();function E(r=u){const n=r===u?D:w(r);return function(){return n().dispatch}}const b=E();let m=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((n,e)=>(e&=63,e<36?n+=e.toString(36):e<62?n+=(e-26).toString(36).toUpperCase():e>62?n+="-":n+="_",n),"");const $=c.form`
  color: #3b5998;
`,j=c.li`
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
`,H=c.button`
  background-color: #dfe3ee;
  color: #3b5998;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;function z(){const r=b(),n=x(C),[e,o]=g.useState(""),[a,s]=g.useState(""),i=m(),l=m(),f=({target:{name:d,value:h}})=>{d==="name"?o(h):d==="number"&&s(h)},y=d=>{if(d.preventDefault(),n.some(p=>p.name.toLowerCase()===e.toLowerCase())){alert(`${e} is already in contacts`);return}if(n.some(p=>p.number===a)){alert(`The number ${a} is already in contacts`);return}const S={id:m(5),name:e,number:a};r(L(S)),N()},N=()=>{o(""),s("")};return t.jsxs($,{onSubmit:y,children:[t.jsxs("ul",{children:[t.jsxs(j,{children:[t.jsx("label",{htmlFor:i,children:"Name"}),t.jsx("input",{type:"text",id:i,name:"name",value:e,onChange:f,pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),t.jsxs(j,{children:[t.jsx("label",{htmlFor:l,children:"Number"}),t.jsx("input",{type:"tel",id:l,name:"number",value:a,onChange:f,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),t.jsx(H,{type:"submit",children:"Add contact"})]})}const T=c.table`
  margin: 0 auto;
  width: 100%;
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

  td:not(:last-child) {
    text-align: left;
  }

  th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid #8b9dc3;
  }

  tbody tr:nth-child(even) {
    background-color: #ffffff;
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
`,Z=c.thead`
  background-color: #3b5998;
  color: #f7f7f7;
`;function q(){const r=x(C),n=x(F),e=b(),o=r.filter(s=>s.name.toLowerCase().includes(n.toLowerCase()));if(!o.length)return t.jsx("p",{children:"No contacts"});const a=s=>{e(R(s))};return o.length&&t.jsxs(T,{children:[t.jsx(Z,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Number"}),t.jsx("th",{children:"x"})]})}),t.jsx("tbody",{children:o.map(({id:s,name:i,number:l})=>t.jsxs("tr",{children:[t.jsx("td",{children:i}),t.jsx("td",{children:l}),t.jsx("td",{children:t.jsx("button",{type:"button",onClick:()=>a(s),children:"x"})})]},s))})]})}const B=c.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;

  labael {
    text-align: left;
  }

  input {
    padding: 10px;
    border-color: #3b5998;
    border-radius: 5px;
  }
`;function I(){const r=b(),n=x(F),e=o=>{r(A(o.currentTarget.value))};return t.jsxs(B,{children:[t.jsx("label",{htmlFor:"filter",children:"Find contacts by name"}),t.jsx("input",{type:"text",name:"filter",value:n,onChange:e})]})}function M(){return t.jsxs(t.Fragment,{children:[t.jsx(z,{}),t.jsx(I,{}),t.jsx(q,{})]})}export{M as default};
