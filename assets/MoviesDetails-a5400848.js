import{s as e,N as j,L as v,j as o,c as k,r,a as L,O as y}from"./index-1ecce002.js";import{a as R,b as S}from"./index.esm-c15084f2.js";import{Q as E}from"./react-toastify.esm-1c555657.js";import{f as D}from"./fetch-c2e8a414.js";import d from"./Loader-98e0a6dd.js";import"./iconBase-8ae18bd4.js";const O=e.div`
  display: grid;
  grid-template: auto auto 1fr auto auto / 1fr 3fr auto;
  gap: 25px;
  height: 100%;
  font-size: 16px;

  @media (width <= 576px) {
    grid-template: auto auto auto auto auto auto auto / 1fr auto;
  }
`,z=e.img`
  width: 100%;
  height: 100%;
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  border-radius: 4px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  object-fit: cover;

  @media (width <= 576px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
`,B=e.h1`
  color: #3b5998;
  font-size: 20px;
  font-weight: bold;
  grid-row: 1 / 2;
  grid-column: 2 / 4;

  @media (width <= 576px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
`,C=e.p`
  color: #3b5998;
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }
`,_=e.p`
  display: flex;
  color: #3b5998;
  grid-row: 2 / 3;
  grid-column: 3 / 4;

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
  }
`,$=e.p`
  color: #3b5998;
  text-align: justify;
  line-height: 1.2;
  grid-row: 3 / 4;
  grid-column: 2 / 4;

  @media (width <= 576px) {
    grid-row: 4 / 5;
    grid-column: 1 / 3;
  }
`,A=e.ul`
  color: #3b5998;
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  display: flex;
  gap: 25px;
  justify-content: space-between;

  li {
    width: 100%;
  }

  @media (width <= 576px) {
    grid-row: 5 / 6;
    grid-column: 1 / 3;
  }
`,p=e(j)`
  text-align: center;
  background-color: #dfe3ee;
  color: #3b5998;
  border-radius: 4px;
  padding: 8px 16px;
  display: block;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #3b5998;
    color: #dfe3ee;

    &.active {
      color: #f7f7f7;
    }
  }

  &.active {
    background-color: #3b5998;
    color: #dfe3ee;
  }
`,F=e(v)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 25px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  color: #8b9dc3;

  :hover {
    color: #3b5998;
  }
`,I=e.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;function P({to:i}){return o.jsx(F,{to:i,children:o.jsxs(I,{children:[o.jsx(R,{size:"24"}),o.jsx("p",{children:"Back"})]})})}const T="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function U(){var c;const{id:i}=k(),[n,x]=r.useState(null),[g,a]=r.useState(!1),u=L(),m=r.useRef(((c=u.state)==null?void 0:c.from)??"/");if(r.useEffect(()=>{i&&(a(!0),D("movieDetails","","",i).then(t=>{x(t),a(!1)}).catch(t=>{E.error(`Error fetching data: ${t.message}`),a(!1)}))},[i]),!i)return null;if(g)return o.jsx(d,{});if(!n)return null;const{title:s,genres:f,vote_average:h,overview:b,poster_path:l}=n,w=l?`https://image.tmdb.org/t/p/w500${l}`:T;return o.jsxs(o.Fragment,{children:[o.jsx(P,{to:m.current}),o.jsxs(O,{children:[o.jsx(z,{src:w,alt:s}),o.jsx(B,{children:s}),o.jsx(C,{children:f.map(({name:t})=>t).join(", ")}),o.jsxs(_,{children:[o.jsx(S,{})," ",h.toFixed(1)]}),o.jsx($,{children:b}),o.jsxs(A,{children:[o.jsx("li",{children:o.jsx(p,{to:"cast",children:"Cast"})}),o.jsx("li",{children:o.jsx(p,{to:"reviews",children:"Reviews"})})]}),o.jsx(r.Suspense,{fallback:o.jsx(d,{}),children:o.jsx(y,{})})]})]})}function K(){return o.jsx(U,{})}export{K as default};
