import{s as m,c as l,r as o,j as s}from"./index-1ecce002.js";import{Q as u}from"./react-toastify.esm-1c555657.js";import{f as d}from"./fetch-c2e8a414.js";import f from"./Loader-98e0a6dd.js";import{N as p}from"./NoDataMessage-8fe97e94.js";const g=m.ul`
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: #3b5998;
  column-count: 6;
  column-gap: 25px;
  column-rule: 1px solid #dfe3ee;

  li {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
    column-count: 2;
  }
`;function y(){const{id:r}=l(),[e,i]=o.useState([]),[n,a]=o.useState(!0);return o.useEffect(()=>{r&&d("movieCredits","","",r).then(t=>{i(t.cast),a(!1)}).catch(t=>{u.error(`Error fetching data: ${t.message}`),a(!1)})},[r]),n?s.jsx(f,{}):Array.isArray(e)&&e.length>0?s.jsx(g,{children:e.map(({id:t,name:c})=>s.jsx("li",{children:c},t))}):s.jsx(p,{})}export{y as default};
