import{g as z,b as D,r as h,s as v,a as H,j as c,L as N}from"./index-1ecce002.js";import{G as $}from"./iconBase-8ae18bd4.js";import G from"./Loader-98e0a6dd.js";import{Q as Y}from"./react-toastify.esm-1c555657.js";import{f as V}from"./fetch-c2e8a414.js";var M={exports:{}},J="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",K=J,X=K;function T(){}function j(){}j.resetWarningCache=T;var Z=function(){function e(r,n,o,i,s,w){if(w!==X){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:j,resetWarningCache:T};return a.PropTypes=a,a};M.exports=Z();var k=M.exports;const u=z(k);var R={},g={linear:function(e,t,a,r){var n=a-t;return n*e/r+t},easeInQuad:function(e,t,a,r){var n=a-t;return n*(e/=r)*e+t},easeOutQuad:function(e,t,a,r){var n=a-t;return-n*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,a,r){var n=a-t;return n*(e/=r)*e*e+t},easeOutCubic:function(e,t,a,r){var n=a-t;return n*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,a,r){var n=a-t;return n*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,a,r){var n=a-t;return-n*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,a,r){var n=a-t;return n*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,a,r){var n=a-t;return n*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,a,r){var n=a-t;return-n*Math.cos(e/r*(Math.PI/2))+n+t},easeOutSine:function(e,t,a,r){var n=a-t;return n*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,a,r){var n=a-t;return-n/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,a,r){var n=a-t;return e==0?t:n*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,a,r){var n=a-t;return e==r?t+n:n*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,a,r){var n=a-t;return e===0?t:e===r?t+n:(e/=r/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,a,r){var n=a-t;return-n*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,a,r){var n=a-t;return n*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,a,r){var n=a-t;return(e/=r/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,a,r){var n=a-t,o,i,s;return s=1.70158,i=0,o=n,e===0?t:(e/=r)===1?t+n:(i||(i=r*.3),o<Math.abs(n)?(o=n,s=i/4):s=i/(2*Math.PI)*Math.asin(n/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-s)*(2*Math.PI)/i))+t)},easeOutElastic:function(e,t,a,r){var n=a-t,o,i,s;return s=1.70158,i=0,o=n,e===0?t:(e/=r)===1?t+n:(i||(i=r*.3),o<Math.abs(n)?(o=n,s=i/4):s=i/(2*Math.PI)*Math.asin(n/o),o*Math.pow(2,-10*e)*Math.sin((e*r-s)*(2*Math.PI)/i)+n+t)},easeInOutElastic:function(e,t,a,r){var n=a-t,o,i,s;return s=1.70158,i=0,o=n,e===0?t:(e/=r/2)===2?t+n:(i||(i=r*(.3*1.5)),o<Math.abs(n)?(o=n,s=i/4):s=i/(2*Math.PI)*Math.asin(n/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-s)*(2*Math.PI)/i))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-s)*(2*Math.PI)/i)*.5+n+t)},easeInBack:function(e,t,a,r,n){var o=a-t;return n===void 0&&(n=1.70158),o*(e/=r)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,a,r,n){var o=a-t;return n===void 0&&(n=1.70158),o*((e=e/r-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,a,r,n){var o=a-t;return n===void 0&&(n=1.70158),(e/=r/2)<1?o/2*(e*e*(((n*=1.525)+1)*e-n))+t:o/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,a,r){var n=a-t,o;return o=g.easeOutBounce(r-e,0,n,r),n-o+t},easeOutBounce:function(e,t,a,r){var n=a-t;return(e/=r)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,a,r){var n=a-t,o;return e<r/2?(o=g.easeInBounce(e*2,0,n,r),o*.5+t):(o=g.easeOutBounce(e*2-r,0,n,r),o*.5+n*.5+t)}},ee=g,l=typeof window<"u"?window:{screen:{},navigator:{}},d=(l.matchMedia||function(){return{matches:!1}}).bind(l),C=!1,te={get passive(){return C=!0}},q=function(){};l.addEventListener&&l.addEventListener("p",q,te);l.removeEventListener&&l.removeEventListener("p",q,!1);var ne=C,I="ontouchstart"in l,re="TouchEvent"in l,ae=I||re&&d("(any-pointer: coarse)").matches;(l.navigator.maxTouchPoints||0)>0;var L=l.navigator.userAgent||"",oe=d("(pointer: coarse)").matches&&/iPad|Macintosh/.test(L)&&Math.min(l.screen.width||0,l.screen.height||0)>=768;(d("(pointer: coarse)").matches||!d("(pointer: fine)").matches&&I)&&/Windows.*Firefox/.test(L);d("(any-pointer: fine)").matches||d("(any-hover: hover)").matches;const ie=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:ne},Symbol.toStringTag,{value:"Module"})),se=D(ie);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var E=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;function le(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function pe(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(o){n[o]=o}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var fe=pe()?Object.assign:function(e,t){for(var a,r=le(e),n,o=1;o<arguments.length;o++){a=Object(arguments[o]);for(var i in a)ue.call(a,i)&&(r[i]=a[i]);if(E){n=E(a);for(var s=0;s<n.length;s++)ce.call(a,n[s])&&(r[n[s]]=a[n[s]])}}return r};Object.defineProperty(R,"__esModule",{value:!0});var he=function(){function e(t,a){for(var r=0;r<a.length;r++){var n=a[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),de=h,S=y(de),ve=k,f=y(ve),me=ee,ge=y(me),P=se,ye=fe,_=y(ye);function y(e){return e&&e.__esModule?e:{default:e}}function we(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function xe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=function(e){xe(t,e);function t(a){we(this,t);var r=Oe(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a));return r.state={show:!1},r.data={startValue:0,currentTime:0,startTime:null,rafId:null},r.handleClick=r.handleClick.bind(r),r.handleScroll=r.handleScroll.bind(r),r.scrollStep=r.scrollStep.bind(r),r.stopScrolling=r.stopScrolling.bind(r),r}return he(t,[{key:"shouldComponentUpdate",value:function(r,n){return n.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,P.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,P.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(r){this.data.startTime||(this.data.startTime=r),this.data.currentTime=r-this.data.startTime;var n=ge.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,n),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var r=this.props.style,n=S.default.createElement("div",{style:r,onClick:this.handleClick},this.props.children),o=(0,_.default)({},t.defaultProps.style);return o=(0,_.default)(o,r),o.opacity=this.state.show?1:0,o.visibility=this.state.show?"visible":"hidden",o.transitionProperty="opacity, visibility",S.default.cloneElement(n,{style:o})}}]),t}(S.default.Component),Se=R.default=b;b.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};b.propTypes={topPosition:f.default.number,showUnder:f.default.number.isRequired,easing:f.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:f.default.number,style:f.default.object,onShow:f.default.func,onHide:f.default.func};const Ie=v.li`
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow:
      0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.03);
      cursor: pointer;
    }
  }
`,be="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function B({post:e}){const{id:t,poster_path:a,title:r}=e,n=H(),i=a?`https://image.tmdb.org/t/p/w500${a}`:be;return c.jsx(Ie,{children:c.jsx(N,{to:`/movies/${t}`,state:{from:n},children:c.jsx("img",{src:i,width:250,alt:r,role:"presentation"})})})}B.propTypes={post:u.shape({id:u.number.isRequired,poster_path:u.string,title:u.string.isRequired}).isRequired};function Ee(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M147.6 301.3c-7.5-7.5-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.8-81.1 81.9c-7.5 7.5-19.7 7.5-27.3-.1z"}},{tag:"path",attr:{d:"M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-32c-47 0-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432z"}}]})(e)}const Pe=v.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(273px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`,_e=v.h1`
  color: #8b9dc3;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 25px;
`,Me=v(Ee)`
  height: 50px;
  width: 50px;
  background-color: #dfe3ee;
  opacity: 0.6;
  border-radius: 50%;
  fill: #8b9dc3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.8;
    fill: #3b5998;
  }
`,Te=v.button`
  display: flex;
  margin: 25px auto 0;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #3b5998;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #dfe3ee;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #dfe3ee;
    color: #3b5998;
  }
`;function Q({onLoadMore:e}){return c.jsx(Te,{onClick:e,children:"Load more"})}Q.propTypes={onLoadMore:u.func.isRequired};function je({results:e,title:t,loading:a,onLoadMore:r,total:n}){const o=Array.isArray(e)&&e.length>0;return c.jsxs(c.Fragment,{children:[c.jsx(_e,{children:t}),o&&c.jsx(Pe,{children:e.map(i=>c.jsx(B,{post:i},i.id))}),c.jsx(Se,{showUnder:160,children:c.jsx(Me,{})}),a&&c.jsx(G,{}),!a&&e.length<n&&c.jsx(Q,{onLoadMore:r})]})}je.propTypes={results:u.arrayOf(u.shape({id:u.number.isRequired,poster_path:u.string,title:u.string.isRequired}).isRequired).isRequired,title:u.string.isRequired,loading:u.bool.isRequired,onLoadMore:u.func.isRequired,total:u.number.isRequired};const Be=(e,t,a=1)=>{const[r,n]=h.useState([]),[o,i]=h.useState(a),[s,w]=h.useState(0),[m,O]=h.useState(!1),[x,F]=h.useState(t),U=()=>{O(!0),V(e,x,o).then(p=>{w(p.total_results),n(W=>o===1?p.results:[...W,...p.results]),O(!1)}).catch(p=>{Y.error(`Error fetching data: ${p.message}`),O(!1)})},A=()=>{i(p=>p+1)};return h.useEffect(()=>{x!==t&&(i(1),n([]),F(t)),U()},[t,o,x]),{results:r,loading:m,total:s,handleLoadMore:A}};export{je as G,Be as u};
