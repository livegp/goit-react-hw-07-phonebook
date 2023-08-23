import{s as C,N as Ot,g as It,r as l,u as Ft,j as v,L as Mt,O as Rt}from"./index-1ecce002.js";import{A as Pt,I as Lt}from"./index.esm-c15084f2.js";import{G as Dt}from"./iconBase-8ae18bd4.js";import kt from"./Loader-98e0a6dd.js";import{Q as Vt}from"./react-toastify.esm-1c555657.js";function Nt(e){return Dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(e)}const Ut=C.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,lr=C.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
`,Bt=C.header`
  position: sticky;
  top: 0;
  background-color: #3b5998;
  z-index: 10;

  .header .menu-btn:checked ~ .nav {
    position: absolute;
    top: -50%;
    /* left: -50%; */
    transform: translate(-50%, 50vh);
  }

  .header .menu-btn:checked ~ .header__login-btn {
    transform: translateY(0);
  }

  .header .menu-icon {
    cursor: pointer;
    position: relative;
    user-select: none;
    display: none;
    background: #ffecb3;
    border-radius: 4px;
    padding: 16px;
    order: 5;
  }

  .header .menu-icon .nav-icon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .nav-icon:before,
  .header .menu-icon .nav-icon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .nav-icon:before {
    top: 5px;
  }

  .header .menu-icon .nav-icon:after {
    top: -5px;
  }

  .header .menu-btn {
    display: none;
    order: 6;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:before {
    transform: rotate(-45deg);
    top: 0;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:after {
    transform: rotate(45deg);
    top: 0;
  }
`,zt=C.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 5px;
`,Ht=C.div`
  order: 1;
  flex-grow: 0;
  margin-right: 30px;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: #dfe3ee;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    svg {
      fill: #f7f7f7;
    }
  }
`,Gt=C.nav`
  display: block;
  margin-top: 0;
  position: static;
  order: 2;
  flex-grow: 1;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    gap: 5px;
  }
`,fr=C(Ot)`
  display: block;
  background-color: transparent;
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 8px;
  order: 0;
  color: #dfe3ee;
  font-size: 20px;
  font-weight: bold;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #f7f7f7;
    border: 2px solid #f7f7f7;

    &.active {
      background-color: #f7f7f7;
      border: 2px solid #f7f7f7;
    }
  }

  &.active {
    background-color: #dfe3ee;
    color: #3b5998;
  }
  /* @media (width <= 576px) {
    display: none;
  } */
`,Kt=C.button`
  order: 5;
  margin-top: 0;
  background: transparent;
  border-width: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: block;
  flex-basis: auto;
  align-items: center;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    stroke: #dfe3ee;
  }

  &:hover {
    svg {
      stroke: #f7f7f7;
    }
  }

  @media (width <= 576px) {
    display: none;
  }
`,Wt=C.main`
  flex-grow: 1;
  background-color: #f7f7f7;
`,Yt=C.footer`
  color: #dfe3ee;
  background-color: #3b5998;

  a {
    color: #dfe3ee;

    &:hover {
      color: #f7f7f7;
    }
  }
`;var Zt=function(r){return qt(r)&&!Xt(r)};function qt(e){return!!e&&typeof e=="object"}function Xt(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||en(e)}var Jt=typeof Symbol=="function"&&Symbol.for,Qt=Jt?Symbol.for("react.element"):60103;function en(e){return e.$$typeof===Qt}function rn(e){return Array.isArray(e)?[]:{}}function ge(e,r){return r.clone!==!1&&r.isMergeableObject(e)?oe(rn(e),e,r):e}function tn(e,r,t){return e.concat(r).map(function(n){return ge(n,t)})}function nn(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ge(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ge(r[i],t):n[i]=oe(e[i],r[i],t)}),n}function oe(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||tn,t.isMergeableObject=t.isMergeableObject||Zt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):nn(e,r,t):ge(r,t)}oe.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return oe(n,i,t)},{})};var Me=oe,an=typeof global=="object"&&global&&global.Object===Object&&global;const Nr=an;var on=typeof self=="object"&&self&&self.Object===Object&&self,un=Nr||on||Function("return this")();const k=un;var cn=k.Symbol;const U=cn;var Ur=Object.prototype,sn=Ur.hasOwnProperty,ln=Ur.toString,ae=U?U.toStringTag:void 0;function fn(e){var r=sn.call(e,ae),t=e[ae];try{e[ae]=void 0;var n=!0}catch{}var i=ln.call(e);return n&&(r?e[ae]=t:delete e[ae]),i}var dn=Object.prototype,pn=dn.toString;function hn(e){return pn.call(e)}var gn="[object Null]",vn="[object Undefined]",dr=U?U.toStringTag:void 0;function Y(e){return e==null?e===void 0?vn:gn:dr&&dr in Object(e)?fn(e):hn(e)}function Br(e,r){return function(t){return e(r(t))}}var bn=Br(Object.getPrototypeOf,Object);const Ne=bn;function Z(e){return e!=null&&typeof e=="object"}var yn="[object Object]",mn=Function.prototype,Tn=Object.prototype,zr=mn.toString,Sn=Tn.hasOwnProperty,En=zr.call(Object);function pr(e){if(!Z(e)||Y(e)!=yn)return!1;var r=Ne(e);if(r===null)return!0;var t=Sn.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&zr.call(t)==En}var hr=Array.isArray,gr=Object.keys,jn=Object.prototype.hasOwnProperty,_n=typeof Element<"u";function Re(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=hr(e),n=hr(r),i,o,u;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Re(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,T=r instanceof Date;if(p!=T)return!1;if(p&&T)return e.getTime()==r.getTime();var g=e instanceof RegExp,P=r instanceof RegExp;if(g!=P)return!1;if(g&&P)return e.toString()==r.toString();var $=gr(e);if(o=$.length,o!==gr(r).length)return!1;for(i=o;i--!==0;)if(!jn.call(r,$[i]))return!1;if(_n&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(u=$[i],!(u==="_owner"&&e.$$typeof)&&!Re(e[u],r[u]))return!1;return!0}return e!==e&&r!==r}var An=function(r,t){try{return Re(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=It(An);var wn=!0;function xn(e,r){if(!wn){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function $n(){this.__data__=[],this.size=0}function Hr(e,r){return e===r||e!==e&&r!==r}function ve(e,r){for(var t=e.length;t--;)if(Hr(e[t][0],r))return t;return-1}var Cn=Array.prototype,On=Cn.splice;function In(e){var r=this.__data__,t=ve(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():On.call(r,t,1),--this.size,!0}function Fn(e){var r=this.__data__,t=ve(r,e);return t<0?void 0:r[t][1]}function Mn(e){return ve(this.__data__,e)>-1}function Rn(e,r){var t=this.__data__,n=ve(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function N(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}N.prototype.clear=$n;N.prototype.delete=In;N.prototype.get=Fn;N.prototype.has=Mn;N.prototype.set=Rn;function Pn(){this.__data__=new N,this.size=0}function Ln(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Dn(e){return this.__data__.get(e)}function kn(e){return this.__data__.has(e)}function se(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Vn="[object AsyncFunction]",Nn="[object Function]",Un="[object GeneratorFunction]",Bn="[object Proxy]";function Gr(e){if(!se(e))return!1;var r=Y(e);return r==Nn||r==Un||r==Vn||r==Bn}var zn=k["__core-js_shared__"];const Ce=zn;var vr=function(){var e=/[^.]+$/.exec(Ce&&Ce.keys&&Ce.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Hn(e){return!!vr&&vr in e}var Gn=Function.prototype,Kn=Gn.toString;function q(e){if(e!=null){try{return Kn.call(e)}catch{}try{return e+""}catch{}}return""}var Wn=/[\\^$.*+?()[\]{}|]/g,Yn=/^\[object .+?Constructor\]$/,Zn=Function.prototype,qn=Object.prototype,Xn=Zn.toString,Jn=qn.hasOwnProperty,Qn=RegExp("^"+Xn.call(Jn).replace(Wn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ea(e){if(!se(e)||Hn(e))return!1;var r=Gr(e)?Qn:Yn;return r.test(q(e))}function ra(e,r){return e==null?void 0:e[r]}function X(e,r){var t=ra(e,r);return ea(t)?t:void 0}var ta=X(k,"Map");const ue=ta;var na=X(Object,"create");const ce=na;function aa(){this.__data__=ce?ce(null):{},this.size=0}function ia(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var oa="__lodash_hash_undefined__",ua=Object.prototype,ca=ua.hasOwnProperty;function sa(e){var r=this.__data__;if(ce){var t=r[e];return t===oa?void 0:t}return ca.call(r,e)?r[e]:void 0}var la=Object.prototype,fa=la.hasOwnProperty;function da(e){var r=this.__data__;return ce?r[e]!==void 0:fa.call(r,e)}var pa="__lodash_hash_undefined__";function ha(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ce&&r===void 0?pa:r,this}function W(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}W.prototype.clear=aa;W.prototype.delete=ia;W.prototype.get=sa;W.prototype.has=da;W.prototype.set=ha;function ga(){this.size=0,this.__data__={hash:new W,map:new(ue||N),string:new W}}function va(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function be(e,r){var t=e.__data__;return va(r)?t[typeof r=="string"?"string":"hash"]:t.map}function ba(e){var r=be(this,e).delete(e);return this.size-=r?1:0,r}function ya(e){return be(this,e).get(e)}function ma(e){return be(this,e).has(e)}function Ta(e,r){var t=be(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function B(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}B.prototype.clear=ga;B.prototype.delete=ba;B.prototype.get=ya;B.prototype.has=ma;B.prototype.set=Ta;var Sa=200;function Ea(e,r){var t=this.__data__;if(t instanceof N){var n=t.__data__;if(!ue||n.length<Sa-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new B(n)}return t.set(e,r),this.size=t.size,this}function te(e){var r=this.__data__=new N(e);this.size=r.size}te.prototype.clear=Pn;te.prototype.delete=Ln;te.prototype.get=Dn;te.prototype.has=kn;te.prototype.set=Ea;function ja(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var _a=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const br=_a;function Kr(e,r,t){r=="__proto__"&&br?br(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var Aa=Object.prototype,wa=Aa.hasOwnProperty;function Wr(e,r,t){var n=e[r];(!(wa.call(e,r)&&Hr(n,t))||t===void 0&&!(r in e))&&Kr(e,r,t)}function ye(e,r,t,n){var i=!t;t||(t={});for(var o=-1,u=r.length;++o<u;){var p=r[o],T=n?n(t[p],e[p],p,t,e):void 0;T===void 0&&(T=e[p]),i?Kr(t,p,T):Wr(t,p,T)}return t}function xa(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var $a="[object Arguments]";function yr(e){return Z(e)&&Y(e)==$a}var Yr=Object.prototype,Ca=Yr.hasOwnProperty,Oa=Yr.propertyIsEnumerable,Ia=yr(function(){return arguments}())?yr:function(e){return Z(e)&&Ca.call(e,"callee")&&!Oa.call(e,"callee")};const Fa=Ia;var Ma=Array.isArray;const le=Ma;function Ra(){return!1}var Zr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mr=Zr&&typeof module=="object"&&module&&!module.nodeType&&module,Pa=mr&&mr.exports===Zr,Tr=Pa?k.Buffer:void 0,La=Tr?Tr.isBuffer:void 0,Da=La||Ra;const qr=Da;var ka=9007199254740991,Va=/^(?:0|[1-9]\d*)$/;function Na(e,r){var t=typeof e;return r=r??ka,!!r&&(t=="number"||t!="symbol"&&Va.test(e))&&e>-1&&e%1==0&&e<r}var Ua=9007199254740991;function Xr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ua}var Ba="[object Arguments]",za="[object Array]",Ha="[object Boolean]",Ga="[object Date]",Ka="[object Error]",Wa="[object Function]",Ya="[object Map]",Za="[object Number]",qa="[object Object]",Xa="[object RegExp]",Ja="[object Set]",Qa="[object String]",ei="[object WeakMap]",ri="[object ArrayBuffer]",ti="[object DataView]",ni="[object Float32Array]",ai="[object Float64Array]",ii="[object Int8Array]",oi="[object Int16Array]",ui="[object Int32Array]",ci="[object Uint8Array]",si="[object Uint8ClampedArray]",li="[object Uint16Array]",fi="[object Uint32Array]",E={};E[ni]=E[ai]=E[ii]=E[oi]=E[ui]=E[ci]=E[si]=E[li]=E[fi]=!0;E[Ba]=E[za]=E[ri]=E[Ha]=E[ti]=E[Ga]=E[Ka]=E[Wa]=E[Ya]=E[Za]=E[qa]=E[Xa]=E[Ja]=E[Qa]=E[ei]=!1;function di(e){return Z(e)&&Xr(e.length)&&!!E[Y(e)]}function Ue(e){return function(r){return e(r)}}var Jr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=Jr&&typeof module=="object"&&module&&!module.nodeType&&module,pi=ie&&ie.exports===Jr,Oe=pi&&Nr.process,hi=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||Oe&&Oe.binding&&Oe.binding("util")}catch{}}();const re=hi;var Sr=re&&re.isTypedArray,gi=Sr?Ue(Sr):di;const vi=gi;var bi=Object.prototype,yi=bi.hasOwnProperty;function Qr(e,r){var t=le(e),n=!t&&Fa(e),i=!t&&!n&&qr(e),o=!t&&!n&&!i&&vi(e),u=t||n||i||o,p=u?xa(e.length,String):[],T=p.length;for(var g in e)(r||yi.call(e,g))&&!(u&&(g=="length"||i&&(g=="offset"||g=="parent")||o&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||Na(g,T)))&&p.push(g);return p}var mi=Object.prototype;function Be(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||mi;return e===t}var Ti=Br(Object.keys,Object);const Si=Ti;var Ei=Object.prototype,ji=Ei.hasOwnProperty;function _i(e){if(!Be(e))return Si(e);var r=[];for(var t in Object(e))ji.call(e,t)&&t!="constructor"&&r.push(t);return r}function et(e){return e!=null&&Xr(e.length)&&!Gr(e)}function ze(e){return et(e)?Qr(e):_i(e)}function Ai(e,r){return e&&ye(r,ze(r),e)}function wi(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var xi=Object.prototype,$i=xi.hasOwnProperty;function Ci(e){if(!se(e))return wi(e);var r=Be(e),t=[];for(var n in e)n=="constructor"&&(r||!$i.call(e,n))||t.push(n);return t}function He(e){return et(e)?Qr(e,!0):Ci(e)}function Oi(e,r){return e&&ye(r,He(r),e)}var rt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Er=rt&&typeof module=="object"&&module&&!module.nodeType&&module,Ii=Er&&Er.exports===rt,jr=Ii?k.Buffer:void 0,_r=jr?jr.allocUnsafe:void 0;function Fi(e,r){if(r)return e.slice();var t=e.length,n=_r?_r(t):new e.constructor(t);return e.copy(n),n}function tt(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Mi(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var u=e[t];r(u,t,e)&&(o[i++]=u)}return o}function nt(){return[]}var Ri=Object.prototype,Pi=Ri.propertyIsEnumerable,Ar=Object.getOwnPropertySymbols,Li=Ar?function(e){return e==null?[]:(e=Object(e),Mi(Ar(e),function(r){return Pi.call(e,r)}))}:nt;const Ge=Li;function Di(e,r){return ye(e,Ge(e),r)}function at(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var ki=Object.getOwnPropertySymbols,Vi=ki?function(e){for(var r=[];e;)at(r,Ge(e)),e=Ne(e);return r}:nt;const it=Vi;function Ni(e,r){return ye(e,it(e),r)}function ot(e,r,t){var n=r(e);return le(e)?n:at(n,t(e))}function Ui(e){return ot(e,ze,Ge)}function Bi(e){return ot(e,He,it)}var zi=X(k,"DataView");const Pe=zi;var Hi=X(k,"Promise");const Le=Hi;var Gi=X(k,"Set");const De=Gi;var Ki=X(k,"WeakMap");const ke=Ki;var wr="[object Map]",Wi="[object Object]",xr="[object Promise]",$r="[object Set]",Cr="[object WeakMap]",Or="[object DataView]",Yi=q(Pe),Zi=q(ue),qi=q(Le),Xi=q(De),Ji=q(ke),G=Y;(Pe&&G(new Pe(new ArrayBuffer(1)))!=Or||ue&&G(new ue)!=wr||Le&&G(Le.resolve())!=xr||De&&G(new De)!=$r||ke&&G(new ke)!=Cr)&&(G=function(e){var r=Y(e),t=r==Wi?e.constructor:void 0,n=t?q(t):"";if(n)switch(n){case Yi:return Or;case Zi:return wr;case qi:return xr;case Xi:return $r;case Ji:return Cr}return r});const Ke=G;var Qi=Object.prototype,eo=Qi.hasOwnProperty;function ro(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&eo.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var to=k.Uint8Array;const Ir=to;function We(e){var r=new e.constructor(e.byteLength);return new Ir(r).set(new Ir(e)),r}function no(e,r){var t=r?We(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var ao=/\w*$/;function io(e){var r=new e.constructor(e.source,ao.exec(e));return r.lastIndex=e.lastIndex,r}var Fr=U?U.prototype:void 0,Mr=Fr?Fr.valueOf:void 0;function oo(e){return Mr?Object(Mr.call(e)):{}}function uo(e,r){var t=r?We(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var co="[object Boolean]",so="[object Date]",lo="[object Map]",fo="[object Number]",po="[object RegExp]",ho="[object Set]",go="[object String]",vo="[object Symbol]",bo="[object ArrayBuffer]",yo="[object DataView]",mo="[object Float32Array]",To="[object Float64Array]",So="[object Int8Array]",Eo="[object Int16Array]",jo="[object Int32Array]",_o="[object Uint8Array]",Ao="[object Uint8ClampedArray]",wo="[object Uint16Array]",xo="[object Uint32Array]";function $o(e,r,t){var n=e.constructor;switch(r){case bo:return We(e);case co:case so:return new n(+e);case yo:return no(e,t);case mo:case To:case So:case Eo:case jo:case _o:case Ao:case wo:case xo:return uo(e,t);case lo:return new n;case fo:case go:return new n(e);case po:return io(e);case ho:return new n;case vo:return oo(e)}}var Rr=Object.create,Co=function(){function e(){}return function(r){if(!se(r))return{};if(Rr)return Rr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Oo=Co;function Io(e){return typeof e.constructor=="function"&&!Be(e)?Oo(Ne(e)):{}}var Fo="[object Map]";function Mo(e){return Z(e)&&Ke(e)==Fo}var Pr=re&&re.isMap,Ro=Pr?Ue(Pr):Mo;const Po=Ro;var Lo="[object Set]";function Do(e){return Z(e)&&Ke(e)==Lo}var Lr=re&&re.isSet,ko=Lr?Ue(Lr):Do;const Vo=ko;var No=1,Uo=2,Bo=4,ut="[object Arguments]",zo="[object Array]",Ho="[object Boolean]",Go="[object Date]",Ko="[object Error]",ct="[object Function]",Wo="[object GeneratorFunction]",Yo="[object Map]",Zo="[object Number]",st="[object Object]",qo="[object RegExp]",Xo="[object Set]",Jo="[object String]",Qo="[object Symbol]",eu="[object WeakMap]",ru="[object ArrayBuffer]",tu="[object DataView]",nu="[object Float32Array]",au="[object Float64Array]",iu="[object Int8Array]",ou="[object Int16Array]",uu="[object Int32Array]",cu="[object Uint8Array]",su="[object Uint8ClampedArray]",lu="[object Uint16Array]",fu="[object Uint32Array]",S={};S[ut]=S[zo]=S[ru]=S[tu]=S[Ho]=S[Go]=S[nu]=S[au]=S[iu]=S[ou]=S[uu]=S[Yo]=S[Zo]=S[st]=S[qo]=S[Xo]=S[Jo]=S[Qo]=S[cu]=S[su]=S[lu]=S[fu]=!0;S[Ko]=S[ct]=S[eu]=!1;function he(e,r,t,n,i,o){var u,p=r&No,T=r&Uo,g=r&Bo;if(t&&(u=i?t(e,n,i,o):t(e)),u!==void 0)return u;if(!se(e))return e;var P=le(e);if(P){if(u=ro(e),!p)return tt(e,u)}else{var $=Ke(e),f=$==ct||$==Wo;if(qr(e))return Fi(e,p);if($==st||$==ut||f&&!i){if(u=T||f?{}:Io(e),!p)return T?Ni(e,Oi(u,e)):Di(e,Ai(u,e))}else{if(!S[$])return i?e:{};u=$o(e,$,p)}}o||(o=new te);var w=o.get(e);if(w)return w;o.set(e,u),Vo(e)?e.forEach(function(x){u.add(he(x,r,t,x,e,o))}):Po(e)&&e.forEach(function(x,_){u.set(_,he(x,r,t,_,e,o))});var F=g?T?Bi:Ui:T?He:ze,M=P?void 0:F(e);return ja(M||e,function(x,_){M&&(_=x,x=e[_]),Wr(u,_,he(x,r,t,_,e,o))}),u}var du=4;function Dr(e){return he(e,du)}function lt(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var pu="[object Symbol]";function Ye(e){return typeof e=="symbol"||Z(e)&&Y(e)==pu}var hu="Expected a function";function Ze(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(hu);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var u=e.apply(this,n);return t.cache=o.set(i,u)||o,u};return t.cache=new(Ze.Cache||B),t}Ze.Cache=B;var gu=500;function vu(e){var r=Ze(e,function(n){return t.size===gu&&t.clear(),n}),t=r.cache;return r}var bu=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yu=/\\(\\)?/g,mu=vu(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(bu,function(t,n,i,o){r.push(i?o.replace(yu,"$1"):n||t)}),r});const Tu=mu;var Su=1/0;function Eu(e){if(typeof e=="string"||Ye(e))return e;var r=e+"";return r=="0"&&1/e==-Su?"-0":r}var ju=1/0,kr=U?U.prototype:void 0,Vr=kr?kr.toString:void 0;function ft(e){if(typeof e=="string")return e;if(le(e))return lt(e,ft)+"";if(Ye(e))return Vr?Vr.call(e):"";var r=e+"";return r=="0"&&1/e==-ju?"-0":r}function _u(e){return e==null?"":ft(e)}function dt(e){return le(e)?lt(e,Eu):Ye(e)?[e]:tt(Tu(_u(e)))}function j(){return j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}function ee(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var me=l.createContext(void 0);me.displayName="FormikContext";var Au=me.Provider;me.Consumer;function pt(){var e=l.useContext(me);return e||xn(!1),e}var I=function(r){return typeof r=="function"},Te=function(r){return r!==null&&typeof r=="object"},wu=function(r){return String(Math.floor(Number(r)))===r},Ie=function(r){return Object.prototype.toString.call(r)==="[object String]"},xu=function(r){return l.Children.count(r)===0},Fe=function(r){return Te(r)&&I(r.then)};function O(e,r,t,n){n===void 0&&(n=0);for(var i=dt(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function K(e,r,t){for(var n=Dr(e),i=n,o=0,u=dt(r);o<u.length-1;o++){var p=u[o],T=O(e,u.slice(0,o+1));if(T&&(Te(T)||Array.isArray(T)))i=i[p]=Dr(T);else{var g=u[o+1];i=i[p]=wu(g)&&Number(g)>=0?[]:{}}}return(o===0?e:i)[u[o]]===t?e:(t===void 0?delete i[u[o]]:i[u[o]]=t,o===0&&t===void 0&&delete n[u[o]],n)}function ht(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var u=o[i],p=e[u];Te(p)?t.get(p)||(t.set(p,!0),n[u]=Array.isArray(p)?[]:{},ht(p,r,t,n[u])):n[u]=r}return n}function $u(e,r){switch(r.type){case"SET_VALUES":return j({},e,{values:r.payload});case"SET_TOUCHED":return j({},e,{touched:r.payload});case"SET_ERRORS":return H(e.errors,r.payload)?e:j({},e,{errors:r.payload});case"SET_STATUS":return j({},e,{status:r.payload});case"SET_ISSUBMITTING":return j({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return j({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return j({},e,{values:K(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return j({},e,{touched:K(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return j({},e,{errors:K(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return j({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return j({},e,{touched:ht(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return j({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return j({},e,{isSubmitting:!1});default:return e}}var z={},pe={};function Cu(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,u=o===void 0?!1:o,p=e.isInitialValid,T=e.enableReinitialize,g=T===void 0?!1:T,P=e.onSubmit,$=ee(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=j({validateOnChange:t,validateOnBlur:i,validateOnMount:u,onSubmit:P},$),w=l.useRef(f.initialValues),F=l.useRef(f.initialErrors||z),M=l.useRef(f.initialTouched||pe),x=l.useRef(f.initialStatus),_=l.useRef(!1),D=l.useRef({});l.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var Se=l.useState(0),vt=Se[1],fe=l.useRef({values:f.initialValues,errors:f.initialErrors||z,touched:f.initialTouched||pe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),m=fe.current,y=l.useCallback(function(a){var c=fe.current;fe.current=$u(c,a),c!==fe.current&&vt(function(s){return s+1})},[]),qe=l.useCallback(function(a,c){return new Promise(function(s,d){var h=f.validate(a,c);h==null?s(z):Fe(h)?h.then(function(b){s(b||z)},function(b){d(b)}):s(h)})},[f.validate]),Ee=l.useCallback(function(a,c){var s=f.validationSchema,d=I(s)?s(c):s,h=c&&d.validateAt?d.validateAt(c,a):Fu(a,d);return new Promise(function(b,A){h.then(function(){b(z)},function(V){V.name==="ValidationError"?b(Iu(V)):A(V)})})},[f.validationSchema]),Xe=l.useCallback(function(a,c){return new Promise(function(s){return s(D.current[a].validate(c))})},[]),Je=l.useCallback(function(a){var c=Object.keys(D.current).filter(function(d){return I(D.current[d].validate)}),s=c.length>0?c.map(function(d){return Xe(d,O(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(d){return d.reduce(function(h,b,A){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(h=K(h,c[A],b)),h},{})})},[Xe]),bt=l.useCallback(function(a){return Promise.all([Je(a),f.validationSchema?Ee(a):{},f.validate?qe(a):{}]).then(function(c){var s=c[0],d=c[1],h=c[2],b=Me.all([s,d,h],{arrayMerge:Mu});return b})},[f.validate,f.validationSchema,Je,qe,Ee]),L=R(function(a){return a===void 0&&(a=m.values),y({type:"SET_ISVALIDATING",payload:!0}),bt(a).then(function(c){return _.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:c})),c})});l.useEffect(function(){u&&_.current===!0&&H(w.current,f.initialValues)&&L(w.current)},[u,L]);var ne=l.useCallback(function(a){var c=a&&a.values?a.values:w.current,s=a&&a.errors?a.errors:F.current?F.current:f.initialErrors||{},d=a&&a.touched?a.touched:M.current?M.current:f.initialTouched||{},h=a&&a.status?a.status:x.current?x.current:f.initialStatus;w.current=c,F.current=s,M.current=d,x.current=h;var b=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:s,touched:d,status:h,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var A=f.onReset(m.values,cr);Fe(A)?A.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched]);l.useEffect(function(){_.current===!0&&!H(w.current,f.initialValues)&&g&&(w.current=f.initialValues,ne(),u&&L(w.current))},[g,f.initialValues,ne,u,L]),l.useEffect(function(){g&&_.current===!0&&!H(F.current,f.initialErrors)&&(F.current=f.initialErrors||z,y({type:"SET_ERRORS",payload:f.initialErrors||z}))},[g,f.initialErrors]),l.useEffect(function(){g&&_.current===!0&&!H(M.current,f.initialTouched)&&(M.current=f.initialTouched||pe,y({type:"SET_TOUCHED",payload:f.initialTouched||pe}))},[g,f.initialTouched]),l.useEffect(function(){g&&_.current===!0&&!H(x.current,f.initialStatus)&&(x.current=f.initialStatus,y({type:"SET_STATUS",payload:f.initialStatus}))},[g,f.initialStatus,f.initialTouched]);var Qe=R(function(a){if(D.current[a]&&I(D.current[a].validate)){var c=O(m.values,a),s=D.current[a].validate(c);return Fe(s)?(y({type:"SET_ISVALIDATING",payload:!0}),s.then(function(d){return d}).then(function(d){y({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:a,value:s}}),Promise.resolve(s))}else if(f.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),Ee(m.values,a).then(function(d){return d}).then(function(d){y({type:"SET_FIELD_ERROR",payload:{field:a,value:O(d,a)}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),yt=l.useCallback(function(a,c){var s=c.validate;D.current[a]={validate:s}},[]),mt=l.useCallback(function(a){delete D.current[a]},[]),er=R(function(a,c){y({type:"SET_TOUCHED",payload:a});var s=c===void 0?i:c;return s?L(m.values):Promise.resolve()}),rr=l.useCallback(function(a){y({type:"SET_ERRORS",payload:a})},[]),tr=R(function(a,c){var s=I(a)?a(m.values):a;y({type:"SET_VALUES",payload:s});var d=c===void 0?t:c;return d?L(s):Promise.resolve()}),de=l.useCallback(function(a,c){y({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),J=R(function(a,c,s){y({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=s===void 0?t:s;return d?L(K(m.values,a,c)):Promise.resolve()}),nr=l.useCallback(function(a,c){var s=c,d=a,h;if(!Ie(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,A=b.type,V=b.name,xe=b.id,$e=b.value,$t=b.checked,zu=b.outerHTML,sr=b.options,Ct=b.multiple;s=c||V||xe,d=/number|range/.test(A)?(h=parseFloat($e),isNaN(h)?"":h):/checkbox/.test(A)?Pu(O(m.values,s),$t,$e):sr&&Ct?Ru(sr):$e}s&&J(s,d)},[J,m.values]),je=R(function(a){if(Ie(a))return function(c){return nr(c,a)};nr(a)}),Q=R(function(a,c,s){c===void 0&&(c=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=s===void 0?i:s;return d?L(m.values):Promise.resolve()}),ar=l.useCallback(function(a,c){a.persist&&a.persist();var s=a.target,d=s.name,h=s.id,b=s.outerHTML,A=c||d||h;Q(A,!0)},[Q]),_e=R(function(a){if(Ie(a))return function(c){return ar(c,a)};ar(a)}),ir=l.useCallback(function(a){I(a)?y({type:"SET_FORMIK_STATE",payload:a}):y({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),or=l.useCallback(function(a){y({type:"SET_STATUS",payload:a})},[]),ur=l.useCallback(function(a){y({type:"SET_ISSUBMITTING",payload:a})},[]),Ae=R(function(){return y({type:"SUBMIT_ATTEMPT"}),L().then(function(a){var c=a instanceof Error,s=!c&&Object.keys(a).length===0;if(s){var d;try{if(d=St(),d===void 0)return}catch(h){throw h}return Promise.resolve(d).then(function(h){return _.current&&y({type:"SUBMIT_SUCCESS"}),h}).catch(function(h){if(_.current)throw y({type:"SUBMIT_FAILURE"}),h})}else if(_.current&&(y({type:"SUBMIT_FAILURE"}),c))throw a})}),Tt=R(function(a){a&&a.preventDefault&&I(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&I(a.stopPropagation)&&a.stopPropagation(),Ae().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),cr={resetForm:ne,validateForm:L,validateField:Qe,setErrors:rr,setFieldError:de,setFieldTouched:Q,setFieldValue:J,setStatus:or,setSubmitting:ur,setTouched:er,setValues:tr,setFormikState:ir,submitForm:Ae},St=R(function(){return P(m.values,cr)}),Et=R(function(a){a&&a.preventDefault&&I(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&I(a.stopPropagation)&&a.stopPropagation(),ne()}),jt=l.useCallback(function(a){return{value:O(m.values,a),error:O(m.errors,a),touched:!!O(m.touched,a),initialValue:O(w.current,a),initialTouched:!!O(M.current,a),initialError:O(F.current,a)}},[m.errors,m.touched,m.values]),_t=l.useCallback(function(a){return{setValue:function(s,d){return J(a,s,d)},setTouched:function(s,d){return Q(a,s,d)},setError:function(s){return de(a,s)}}},[J,Q,de]),At=l.useCallback(function(a){var c=Te(a),s=c?a.name:a,d=O(m.values,s),h={name:s,value:d,onChange:je,onBlur:_e};if(c){var b=a.type,A=a.value,V=a.as,xe=a.multiple;b==="checkbox"?A===void 0?h.checked=!!d:(h.checked=!!(Array.isArray(d)&&~d.indexOf(A)),h.value=A):b==="radio"?(h.checked=d===A,h.value=A):V==="select"&&xe&&(h.value=h.value||[],h.multiple=!0)}return h},[_e,je,m.values]),we=l.useMemo(function(){return!H(w.current,m.values)},[w.current,m.values]),wt=l.useMemo(function(){return typeof p<"u"?we?m.errors&&Object.keys(m.errors).length===0:p!==!1&&I(p)?p(f):p:m.errors&&Object.keys(m.errors).length===0},[p,we,m.errors,f]),xt=j({},m,{initialValues:w.current,initialErrors:F.current,initialTouched:M.current,initialStatus:x.current,handleBlur:_e,handleChange:je,handleReset:Et,handleSubmit:Tt,resetForm:ne,setErrors:rr,setFormikState:ir,setFieldTouched:Q,setFieldValue:J,setFieldError:de,setStatus:or,setSubmitting:ur,setTouched:er,setValues:tr,submitForm:Ae,validateForm:L,validateField:Qe,isValid:wt,dirty:we,unregisterField:mt,registerField:yt,getFieldProps:At,getFieldMeta:jt,getFieldHelpers:_t,validateOnBlur:i,validateOnChange:t,validateOnMount:u});return xt}function Ou(e){var r=Cu(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return l.useImperativeHandle(o,function(){return r}),l.createElement(Au,{value:r},t?l.createElement(t,r):i?i(r):n?I(n)?n(r):xu(n)?null:l.Children.only(n):null)}function Iu(e){var r={};if(e.inner){if(e.inner.length===0)return K(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var u=o;O(r,u.path)||(r=K(r,u.path,u.message))}}return r}function Fu(e,r,t,n){t===void 0&&(t=!1);var i=Ve(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ve(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||pr(i)?Ve(i):i!==""?i:void 0}):pr(e[n])?r[n]=Ve(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Mu(e,r,t){var n=e.slice();return r.forEach(function(o,u){if(typeof n[u]>"u"){var p=t.clone!==!1,T=p&&t.isMergeableObject(o);n[u]=T?Me(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[u]=Me(e[u],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Ru(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function Pu(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Lu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?l.useLayoutEffect:l.useEffect;function R(e){var r=l.useRef(e);return Lu(function(){r.current=e}),l.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function Du(e){var r=e.validate,t=e.name,n=e.render,i=e.children,o=e.as,u=e.component,p=ee(e,["validate","name","render","children","as","component"]),T=pt(),g=ee(T,["validate","validationSchema"]),P=g.registerField,$=g.unregisterField;l.useEffect(function(){return P(t,{validate:r}),function(){$(t)}},[P,$,t,r]);var f=g.getFieldProps(j({name:t},p)),w=g.getFieldMeta(t),F={field:f,form:g};if(n)return n(j({},F,{meta:w}));if(I(i))return i(j({},F,{meta:w}));if(u){if(typeof u=="string"){var M=p.innerRef,x=ee(p,["innerRef"]);return l.createElement(u,j({ref:M},f,x),i)}return l.createElement(u,j({field:f,form:g},p),i)}var _=o||"input";if(typeof _=="string"){var D=p.innerRef,Se=ee(p,["innerRef"]);return l.createElement(_,j({ref:D},f,Se),i)}return l.createElement(_,j({},f,p),i)}var gt=l.forwardRef(function(e,r){var t=e.action,n=ee(e,["action"]),i=t??"#",o=pt(),u=o.handleReset,p=o.handleSubmit;return l.createElement("form",j({onSubmit:p,ref:r,onReset:u,action:i},n))});gt.displayName="Form";const ku=C(gt)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border: 2px solid #dfe3ee;
  background-color: transparent;
  border-radius: 4px;
  overflow: hidden;
  order: 3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #f7f7f7;
  }
  /* @media (width <= 576px) {
    display: none;
  } */
`,Vu=C.button`
  background-color: #dfe3ee;
  padding: 0;
  color: #3b5998;
  width: 36px;
  height: 36px;
  border: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-right: 2px solid #dfe3ee;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f7f7f7;
  }

  svg {
    width: 25px;
    height: 25px;
    fill: #3b5998;
  }
`,Nu=C.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`,Uu=C(Du)`
  display: inline-block;
  width: 100%;
  font: inherit;
  color: #dfe3ee;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;
  color-scheme: dark;

  &::placeholder {
    background-color: transparent;
    color: #dfe3ee;
    font: inherit;
    font-size: 18px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    outline: 3px solid black;
  }
`;function Bu(){const e=Ft(),r=({search:t},n)=>{if(t.trim()===""){Vt.error("Please enter a word to search for");return}e(`movies?query=${encodeURIComponent(t)}`),n.resetForm()};return v.jsx(Ou,{initialValues:{search:""},onSubmit:r,children:v.jsxs(ku,{children:[v.jsx(Vu,{type:"submit",value:"submit",children:v.jsx(Pt,{})}),v.jsx(Nu,{htmlFor:"search"}),v.jsx(Uu,{type:"text",id:"search",name:"search",placeholder:"Search"})]})})}function Zu(){return v.jsxs(Ut,{children:[v.jsx(Bt,{children:v.jsxs(zt,{children:[v.jsx(Ht,{children:v.jsx(Mt,{to:"/",children:v.jsx(Nt,{})})}),v.jsx(Gt,{children:v.jsxs("ul",{children:[v.jsx("li",{children:v.jsx(fr,{to:"/",children:"Home"})}),v.jsx("li",{children:v.jsx(fr,{to:"/movies",children:"Movies"})})]})}),v.jsx(Bu,{}),v.jsx(Kt,{type:"button",children:v.jsx(Lt,{})})]})}),v.jsx(Wt,{children:v.jsx(lr,{children:v.jsx(l.Suspense,{fallback:v.jsx(kt,{}),children:v.jsx(Rt,{})})})}),v.jsx(Yt,{children:v.jsx(lr,{children:v.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",v.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})]})}export{Zu as default};
