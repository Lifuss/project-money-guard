"use strict";(self.webpackChunkproject_money_guard=self.webpackChunkproject_money_guard||[]).push([[606],{5469:function(e,t,n){n.d(t,{Z:function(){return ae}});var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,c=String.fromCharCode,s=Object.assign;function i(e){return e.trim()}function u(e,t,n){return e.replace(t,n)}function o(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,n){return e.slice(t,n)}function h(e){return e.length}function d(e){return e.length}function v(e,t){return t.push(e),e}var p=1,y=1,g=0,m=0,b=0,w="";function k(e,t,n,r,a,c,s){return{value:e,root:t,parent:n,type:r,props:a,children:c,line:p,column:y,length:s,return:""}}function x(e,t){return s(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function $(){return b=m>0?l(w,--m):0,y--,10===b&&(y=1,p--),b}function _(){return b=m<g?l(w,m++):0,y++,10===b&&(y=1,p++),b}function A(){return l(w,m)}function C(){return m}function E(e,t){return f(w,e,t)}function O(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function S(e){return p=y=1,g=h(w=e),m=0,[]}function j(e){return w="",e}function P(e){return i(E(m-1,M(91===e?e+2:40===e?e+1:e)))}function N(e){for(;(b=A())&&b<33;)_();return O(e)>2||O(b)>3?"":" "}function T(e,t){for(;--t&&_()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return E(e,C()+(t<6&&32==A()&&32==_()))}function M(e){for(;_();)switch(b){case e:return m;case 34:case 39:34!==e&&39!==e&&M(b);break;case 40:41===e&&M(e);break;case 92:_()}return m}function Z(e,t){for(;_()&&e+b!==57&&(e+b!==84||47!==A()););return"/*"+E(t,m-1)+"*"+c(47===e?e:_())}function z(e){for(;!O(A());)_();return E(e,m)}var L="-ms-",R="-moz-",I="-webkit-",q="comm",B="rule",D="decl",F="@keyframes";function H(e,t){for(var n="",r=d(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function U(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case D:return e.return=e.return||e.value;case q:return"";case F:return e.return=e.value+"{"+H(e.children,r)+"}";case B:e.value=e.props.join(",")}return h(n=H(e.children,r))?e.return=e.value+"{"+n+"}":""}function W(e){return j(Y("",null,null,null,[""],e=S(e),0,[0],e))}function Y(e,t,n,r,a,s,i,f,d){for(var p=0,y=0,g=i,m=0,b=0,w=0,k=1,x=1,E=1,O=0,S="",j=a,M=s,L=r,R=S;x;)switch(w=O,O=_()){case 40:if(108!=w&&58==l(R,g-1)){-1!=o(R+=u(P(O),"&","&\f"),"&\f")&&(E=-1);break}case 34:case 39:case 91:R+=P(O);break;case 9:case 10:case 13:case 32:R+=N(w);break;case 92:R+=T(C()-1,7);continue;case 47:switch(A()){case 42:case 47:v(J(Z(_(),C()),t,n),d);break;default:R+="/"}break;case 123*k:f[p++]=h(R)*E;case 125*k:case 59:case 0:switch(O){case 0:case 125:x=0;case 59+y:-1==E&&(R=u(R,/\f/g,"")),b>0&&h(R)-g&&v(b>32?K(R+";",r,n,g-1):K(u(R," ","")+";",r,n,g-2),d);break;case 59:R+=";";default:if(v(L=G(R,t,n,p,y,a,f,S,j=[],M=[],g),s),123===O)if(0===y)Y(R,t,L,L,j,s,g,f,M);else switch(99===m&&110===l(R,3)?100:m){case 100:case 108:case 109:case 115:Y(e,L,L,r&&v(G(e,L,L,0,0,a,f,S,a,j=[],g),M),a,M,g,f,r?j:M);break;default:Y(R,L,L,L,[""],M,0,f,M)}}p=y=b=0,k=E=1,S=R="",g=i;break;case 58:g=1+h(R),b=w;default:if(k<1)if(123==O)--k;else if(125==O&&0==k++&&125==$())continue;switch(R+=c(O),O*k){case 38:E=y>0?1:(R+="\f",-1);break;case 44:f[p++]=(h(R)-1)*E,E=1;break;case 64:45===A()&&(R+=P(_())),m=A(),y=g=h(S=R+=z(C())),O++;break;case 45:45===w&&2==h(R)&&(k=0)}}return s}function G(e,t,n,r,c,s,o,l,h,v,p){for(var y=c-1,g=0===c?s:[""],m=d(g),b=0,w=0,x=0;b<r;++b)for(var $=0,_=f(e,y+1,y=a(w=o[b])),A=e;$<m;++$)(A=i(w>0?g[$]+" "+_:u(_,/&\f/g,g[$])))&&(h[x++]=A);return k(e,t,n,0===c?B:l,h,v,p)}function J(e,t,n){return k(e,t,n,q,c(b),f(e,2,-2),0)}function K(e,t,n,r){return k(e,t,n,D,f(e,0,r),f(e,r+1,-1),r)}var Q=function(e,t,n){for(var r=0,a=0;r=a,a=A(),38===r&&12===a&&(t[n]=1),!O(a);)_();return E(e,m)},V=function(e,t){return j(function(e,t){var n=-1,r=44;do{switch(O(r)){case 0:38===r&&12===A()&&(t[n]=1),e[n]+=Q(m-1,t,n);break;case 2:e[n]+=P(r);break;case 4:if(44===r){e[++n]=58===A()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=c(r)}}while(r=_());return e}(S(e),t))},X=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||X.get(n))&&!r){X.set(e,!0);for(var a=[],c=V(t,a),s=n.props,i=0,u=0;i<c.length;i++)for(var o=0;o<s.length;o++,u++)e.props[u]=a[i]?c[i].replace(/&\f/g,s[o]):s[o]+" "+c[i]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ne(e,t){switch(function(e,t){return 45^l(e,0)?(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3):0}(e,t)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+R+e+L+e+e;case 6828:case 4268:return I+e+L+e+e;case 6165:return I+e+L+"flex-"+e+e;case 5187:return I+e+u(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+L+"flex-$1$2")+e;case 5443:return I+e+L+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return I+e+L+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return I+e+L+u(e,"shrink","negative")+e;case 5292:return I+e+L+u(e,"basis","preferred-size")+e;case 6060:return I+"box-"+u(e,"-grow","")+I+e+L+u(e,"grow","positive")+e;case 4554:return I+u(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+R+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~o(e,"stretch")?ne(u(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,h(e)-3-(~o(e,"!important")&&10))){case 107:return u(e,":",":"+I)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+I+(45===l(e,14)?"inline-":"")+"box$3$1"+I+"$2$3$1"+L+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return I+e+L+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+L+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+L+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return I+e+L+e+e}return e}var re=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=ne(e.value,e.length);break;case F:return H([x(e,{value:u(e.value,"@","@"+I)})],r);case B:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return H([x(e,{props:[u(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return H([x(e,{props:[u(t,/:(plac\w+)/,":"+I+"input-$1")]}),x(e,{props:[u(t,/:(plac\w+)/,":-moz-$1")]}),x(e,{props:[u(t,/:(plac\w+)/,L+"input-$1")]})],r)}return""}))}}],ae=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||re;var c,s,i={},u=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)i[t[n]]=!0;u.push(e)}));var o,l,f=[U,(l=function(e){o.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],h=function(e){var t=d(e);return function(n,r,a,c){for(var s="",i=0;i<t;i++)s+=e[i](n,r,a,c)||"";return s}}([ee,te].concat(a,f));s=function(e,t,n,r){o=n,H(W(e?e+"{"+t.styles+"}":t.styles),h),r&&(v.inserted[t.name]=!0)};var v={key:t,sheet:new r({key:t,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return v.sheet.hydrate(u),v}},2564:function(e,t,n){n.d(t,{E:function(){return y},T:function(){return h},c:function(){return v},h:function(){return o},i:function(){return u},w:function(){return f}});var r=n(2791),a=n(5469),c=n(5438),s=n(7666),i=n(2561),u=!0,o={}.hasOwnProperty,l=r.createContext("undefined"!==typeof HTMLElement?(0,a.Z)({key:"css"}):null);l.Provider;var f=function(e){return(0,r.forwardRef)((function(t,n){var a=(0,r.useContext)(l);return e(t,a,n)}))};u||(f=function(e){return function(t){var n=(0,r.useContext)(l);return null===n?(n=(0,a.Z)({key:"css"}),r.createElement(l.Provider,{value:n},e(t,n))):e(t,n)}});var h=r.createContext({});var d="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",v=function(e,t){var n={};for(var r in t)o.call(t,r)&&(n[r]=t[r]);return n[d]=e,n},p=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return(0,c.hC)(t,n,r),(0,i.L)((function(){return(0,c.My)(t,n,r)})),null};var y=f((function(e,t,n){var a=e.css;"string"===typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var i=e[d],u=[a],l="";"string"===typeof e.className?l=(0,c.fp)(t.registered,u,e.className):null!=e.className&&(l=e.className+" ");var f=(0,s.O)(u,void 0,r.useContext(h));l+=t.key+"-"+f.name;var v={};for(var y in e)o.call(e,y)&&"css"!==y&&y!==d&&(v[y]=e[y]);return v.ref=n,v.className=l,r.createElement(r.Fragment,null,r.createElement(p,{cache:t,serialized:f,isStringTag:"string"===typeof i}),r.createElement(i,v))}))},2554:function(e,t,n){n.d(t,{F4:function(){return f},iv:function(){return l},tZ:function(){return u},xB:function(){return o}});var r=n(2564),a=n(2791),c=n(5438),s=n(2561),i=n(7666),u=(n(5469),n(2110),function(e,t){var n=arguments;if(null==t||!r.h.call(t,"css"))return a.createElement.apply(void 0,n);var c=n.length,s=new Array(c);s[0]=r.E,s[1]=(0,r.c)(e,t);for(var i=2;i<c;i++)s[i]=n[i];return a.createElement.apply(null,s)}),o=(0,r.w)((function(e,t){var n=e.styles,u=(0,i.O)([n],void 0,a.useContext(r.T));if(!r.i){for(var o,l=u.name,f=u.styles,h=u.next;void 0!==h;)l+=" "+h.name,f+=h.styles,h=h.next;var d=!0===t.compat,v=t.insert("",{name:l,styles:f},t.sheet,d);return d?null:a.createElement("style",((o={})["data-emotion"]=t.key+"-global "+l,o.dangerouslySetInnerHTML={__html:v},o.nonce=t.sheet.nonce,o))}var p=a.useRef();return(0,s.j)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,a=document.querySelector('style[data-emotion="'+e+" "+u.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==a&&(r=!0,a.setAttribute("data-emotion",e),n.hydrate([a])),p.current=[n,r],function(){n.flush()}}),[t]),(0,s.j)((function(){var e=p.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==u.next&&(0,c.My)(t,u.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",u,n,!1)}}),[t,u.name]),null}));function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.O)(t)}var f=function(){var e=l.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},7666:function(e,t,n){n.d(t,{O:function(){return v}});var r=n(8952),a=n(9797),c=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,i=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!==typeof e},o=(0,a.Z)((function(e){return i(e)?e:e.replace(c,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(s,(function(e,t,n){return h={name:t,styles:n,next:h},t}))}return 1===r.Z[e]||i(e)||"number"!==typeof t||0===t?t:t+"px"};function f(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return h={name:n.name,styles:n.styles,next:h},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)h={name:r.name,styles:r.styles,next:h},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=f(e,t,n[a])+";";else for(var c in n){var s=n[c];if("object"!==typeof s)null!=t&&void 0!==t[s]?r+=c+"{"+t[s]+"}":u(s)&&(r+=o(c)+":"+l(c,s)+";");else if(!Array.isArray(s)||"string"!==typeof s[0]||null!=t&&void 0!==t[s[0]]){var i=f(e,t,s);switch(c){case"animation":case"animationName":r+=o(c)+":"+i+";";break;default:r+=c+"{"+i+"}"}}else for(var h=0;h<s.length;h++)u(s[h])&&(r+=o(c)+":"+l(c,s[h])+";")}return r}(e,t,n);case"function":if(void 0!==e){var a=h,c=n(e);return h=a,f(e,t,c)}}if(null==t)return n;var s=t[n];return void 0!==s?s:n}var h,d=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var v=function(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";h=void 0;var c=e[0];null==c||void 0===c.raw?(r=!1,a+=f(n,t,c)):a+=c[0];for(var s=1;s<e.length;s++)a+=f(n,t,e[s]),r&&(a+=c[s]);d.lastIndex=0;for(var i,u="";null!==(i=d.exec(a));)u+="-"+i[1];var o=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+u;return{name:o,styles:a,next:h}}},2561:function(e,t,n){var r;n.d(t,{L:function(){return s},j:function(){return i}});var a=n(2791),c=!!(r||(r=n.t(a,2))).useInsertionEffect&&(r||(r=n.t(a,2))).useInsertionEffect,s=c||function(e){return e()},i=c||a.useLayoutEffect},5438:function(e,t,n){n.d(t,{My:function(){return c},fp:function(){return r},hC:function(){return a}});function r(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var a=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},c=function(e,t,n){a(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var c=t;do{e.insert(t===c?"."+r:"",c,e.sheet,!0),c=c.next}while(void 0!==c)}}},7462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},1752:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(1120);function a(){return a="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=(0,r.Z)(e)););return e}(e,t);if(a){var c=Object.getOwnPropertyDescriptor(a,t);return c.get?c.get.call(arguments.length<3?e:n):c.value}},a.apply(this,arguments)}}}]);
//# sourceMappingURL=606.e48cc6ac.chunk.js.map