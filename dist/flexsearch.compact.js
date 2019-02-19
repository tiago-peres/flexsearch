/*
 FlexSearch v0.6.0
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';(function(l,F,G){let A;(A=G.define)&&A.amd?A([],function(){return F}):(A=G.modules)?A[l.toLowerCase()]=F:"object"===typeof exports?module.exports=F:G[l]=F})("FlexSearch",function(){function l(b,a){const c=a?a.id:b&&b.id;this.id=c||0===c?c:Z++;this.init(b,a);A(this,"index",function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].f):Object.keys(this.f)});A(this,"length",function(){return this.index.length})}function F(b,a){const c=b.length,d=H(a),e=[];for(let h=0,g=0;h<c;h++){const c=
b[h];if(d&&a(c)||!d&&!a[c])e[g++]=c}return e}function G(b,a,c,d,e,h,g,m,n,f){c=R(c,g?0:e,m,!1,a,n,f);let k;m&&(m=c.page,k=c.next,c=c.result);if(g)b=this.where(g,null,e,c);else{b=c;a=this.g;c=b.length;e=Array(c);for(h=0;h<c;h++)e[h]=a[b[h]];b=e}c=b;d&&(H(d)||(u=d.split(":"),1<u.length?d=aa:(u=u[0],d=ba)),c.sort(d));return c=I(m,k,c)}function A(b,a,c){Object.defineProperty(b,a,{get:c})}function f(b){return new RegExp(b,"g")}function J(b,a){for(let c=0;c<a.length;c+=2)b=b.replace(a[c],a[c+1]);return b}
function M(b,a,c,d,e,h,g,m){if(a[c])return a[c];e=e?(m-(g||m/1.5))*h+(g||m/1.5)*e:h;a[c]=e;e>=g&&(b=b[m-(e+.5>>0)],b=b[c]||(b[c]=[]),b[b.length]=d);return e}function O(b,a){if(b){const c=Object.keys(b);for(let d=0,e=c.length;d<e;d++){const e=c[d],g=b[e];if(g)for(let c=0,d=g.length;c<d;c++)if(g[c]===a){1===d?delete b[e]:g.splice(c,1);break}else K(g[c])&&O(g[c],a)}}}function P(b){let a="",c="";var d="";for(let e=0;e<b.length;e++){const h=b[e];if(h!==c)if(e&&"h"===h){if(d="a"===d||"e"===d||"i"===d||
"o"===d||"u"===d||"y"===d,("a"===c||"e"===c||"i"===c||"o"===c||"u"===c||"y"===c)&&d||" "===c)a+=h}else a+=h;d=e===b.length-1?"":b[e+1];c=h}return a}function ca(b,a){b=b.length-a.length;return 0>b?1:b?-1:0}function ba(b,a){b=b[u];a=a[u];return b<a?-1:b>a?1:0}function aa(b,a){const c=u.length;for(let d=0;d<c;d++)b=b[u[d]],a=a[u[d]];return b<a?-1:b>a?1:0}function I(b,a,c){return b?{page:b,next:a?""+a:null,result:c}:c}function R(b,a,c,d,e,h,g){let m;h=[];let n;const f=b.length;!0===c?(c="0",n=""):n=c&&
c.split(":");if(1<f){const v=x();let q=[],l,y,t=-1;var k;let B;let T=!0,D,C=0,u,z,p;n&&(2===n.length?(p=n,n=!1):n=parseInt(n[0],10));if(g){for(l=x();++t<f;)if("not"===e[t])for(y=b[t],B=y.length,k=0;k<B;)l["@"+y[k++]]=1;else z=t+1;if(!z)return I(c,m,h);t=-1}else u=E(e)&&e;for(;++t<f;){const da=t===(z||f)-1;let p,x;if(!u||!t)if((k=u||e&&e[t])&&"and"!==k)if("or"===k)x=!0;else continue;else p=!0;y=b[t];B=y.length;if(!B){if(p&&!d)return I(c,m,y);continue}if(T)if(D){var w=D.length;for(k=0;k<w;)v["@"+D[k++]]=
1;D=null;T=!1}else{D=y;continue}let S=!1;for(k=0;k<B;){w=y[k++];var r="@"+w;const b=x?t:v[r];if(b&&(!g||!l[r]))if(b===t){if(da){if(!n||--n<C)if(h[C++]=w,a&&C===a)return I(c,C,h)}else v[r]=t+1;S=!0}else d&&(r=q[b]||(q[b]=[]),r[r.length]=w)}if(p&&!S&&!d)break}if(D)if(b=D.length,g)for(k=n?parseInt(n,10):0;k<b;){if(e=D[k++],!l["@"+e]&&(!n||--n<C)&&(h[C++]=e,a&&C===a))return I(c,k,h)}else h=D;if(d)for(C=h.length,p?(t=parseInt(p[0],10)+1,k=parseInt(p[1],10)):(t=q.length,k=0);t--;)if(w=q[t])for(B=w.length;k<
B;k++)if(d=w[k],!g||!l["@"+d])if(h[C++]=d,a&&C===a)return I(c,t+":"+k,h)}else f&&(e&&"not"===e[0]||(h=b[0]));a&&(g=c?parseInt(c,10):0,m=g+a,m<h.length?h=h.slice(g,m):g&&(h=h.slice(g)));return I(c,m,h)}function E(b){return"string"===typeof b}function z(b){return b.constructor===Array}function H(b){return"function"===typeof b}function K(b){return"object"===typeof b}function N(b){return"undefined"===typeof b}function U(b){const a=Array(b);for(let c=0;c<b;c++)a[c]=x();return a}function x(){return Object.create(null)}
const p={encode:"icase",c:"forward",cache:!1,async:!1,u:!1,m:!1,a:!1,b:9,threshold:0,depth:0},V={memory:{encode:"extra",c:"strict",threshold:0,b:1},speed:{encode:"icase",c:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",c:"full",threshold:1,b:3},score:{encode:"extra",c:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",c:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",c:"strict",threshold:8,b:9,depth:1}},Q=[];let Z=0;const W=/\W+/,X={},Y={};l.create=function(b){return new l(b)};
l.registerMatcher=function(b){for(const a in b)b.hasOwnProperty(a)&&Q.push(f(a),b[a]);return this};l.registerEncoder=function(b,a){L[b]=a.bind(L);return this};l.registerLanguage=function(b,a){X[b]=a.filter;Y[b]=a.stemmer;return this};l.encode=function(b,a){return L[b](a)};l.prototype.init=function(b,a){this.o=[];if(a){var c=a.preset;b=a}else b||(b=p),c=b.preset;a={};E(b)?(a=V[b],b={}):c&&(a=V[c]);this.c=b.tokenize||a.c||this.c||p.c;this.m=b.rtl||this.m||p.m;this.async="undefined"===typeof Promise||
N(c=b.async)?this.async||p.async:c;this.threshold=N(c=b.threshold)?a.threshold||this.threshold||p.threshold:c;this.b=N(c=b.resolution)?c=a.b||this.b||p.b:c;c<=this.threshold&&(this.b=this.threshold+1);this.depth="strict"!==this.c||N(c=b.depth)?a.depth||this.depth||p.depth:c;this.i=(c=N(c=b.encode)?a.encode||p.encode:c)&&L[c]&&L[c].bind(L)||(H(c)?c:this.i||!1);(c=b.matcher)&&this.addMatcher(c);if(c=b.filter){E(c)&&(c=X[c]);if(z(c)){a=this.i;var d=x();for(var e=0;e<c.length;e++){var h=a?a(c[e]):c[e];
d[h]=1}c=d}this.filter=c}if(c=b.stemmer){var g;a=E(c)?Y[c]:c;d=this.i;e=[];for(g in a)a.hasOwnProperty(g)&&(h=d?d(g):g,e.push(f(h+"($|\\W)"),d?d(a[g]):a[g]));this.stemmer=g=e}this.a=d=(c=b.doc)?c:this.a||p.a;this.l=U(this.b-(this.threshold||0));this.h=x();this.f=x();if(d&&(this.g=x(),b.doc=null,g=d.index={},c=d.keys=[],a=d.field,z(d.id)||(d.id=d.id.split(":")),a)){let h;z(a)||(K(a)?(h=a,d.field=a=Object.keys(a)):d.field=a=[a]);for(d=0;d<a.length;d++)e=a[d],z(e)||(h&&(b=h[e]),c[d]=e,a[d]=e.split(":")),
g[e]=new l(b),g[e].g=this.g}return this};l.prototype.encode=function(b){b&&Q.length&&(b=J(b,Q));b&&this.o.length&&(b=J(b,this.o));b&&this.i&&(b=this.i(b));b&&this.stemmer&&(b=J(b,this.stemmer));return b};l.prototype.addMatcher=function(b){const a=this.o;for(const c in b)b.hasOwnProperty(c)&&a.push(f(c),b[c]);return this};l.prototype.add=function(b,a,c,d,e){if(this.a&&K(b))return this.j("add",b,a);if(a&&E(a)&&(b||0===b)){var h="@"+b;if(this.f[h]&&!d)return this.update(b,a);if(!e){if(this.async&&"function"!==
typeof importScripts){let e=this;h=new Promise(function(c){setTimeout(function(){e.add(b,a,null,d,!0);e=null;c()})});if(c)h.then(c);else return h;return this}if(c)return this.add(b,a,null,d,!0),c(),this}a=this.encode(a);if(!a.length)return this;c=this.c;e=H(c)?c(a):a.split(W);this.filter&&(e=F(e,this.filter));const m=x();m._ctx=x();const r=e.length,l=this.threshold,q=this.depth,p=this.b,y=this.l,t=this.m;for(let a=0;a<r;a++){var g=e[a];if(g){var f=g.length,n=(t?a+1:r-a)/r,v="";switch(c){case "reverse":case "both":for(var k=
f;--k;)v=g[k]+v,M(y,m,v,b,t?1:(f-k)/f,n,l,p-1);v="";case "forward":for(k=0;k<f;k++)v+=g[k],M(y,m,v,b,t?(k+1)/f:1,n,l,p-1);break;case "full":for(k=0;k<f;k++){const a=(t?k+1:f-k)/f;for(let c=f;c>k;c--)v=g.substring(k,c),M(y,m,v,b,a,n,l,p-1)}break;default:if(f=M(y,m,g,b,1,n,l,p-1),q&&1<r&&f>=l)for(f=m._ctx[g]||(m._ctx[g]=x()),g=this.h[g]||(this.h[g]=U(p-(l||0))),n=a-q,v=a+q+1,0>n&&(n=0),v>r&&(v=r);n<v;n++)n!==a&&M(g,f,e[n],b,0,p-(n<a?a-n:n-a),l,p-1)}}}this.f[h]=1}return this};l.prototype.j=function(b,
a,c){if(z(a))for(let d=0,e=a.length;d<e;d++){if(d===e-1)return this.j(b,a[d],c);this.j(b,a[d])}else{const n=this.a.index,l=this.a.keys;var d=this.a.tag,e=this.a.id;let k;let m;for(var h=0;h<e.length;h++)k=(k||a)[e[h]];if(d){for(e=0;e<d.length;e++){var g=d[e];var f=g.split(":");for(h=0;h<f.length;h++)m=(m||a)[f[h]];m="@"+m}f=this.s[g];f=f[m]||(f[m]=[])}if("remove"===b){delete this.g[k];for(let a=0,b=l.length;a<b;a++){if(a===b-1)return n[l[a]].remove(k,c);n[l[a]].remove(k)}}e=this.a.field;f&&(f[f.length]=
a);for(let f=0,h=e.length;f<h;f++){d=e[f];let m;for(g=0;g<d.length;g++)m=(m||a)[d[g]];this.g[k]=a;d=n[l[f]];g="add"===b?d.add:d.update;if(f===h-1)return g.call(d,k,m,c);g.call(d,k,m)}}};l.prototype.update=function(b,a,c){if(this.a&&K(b))return this.j("update",b,a);this.f["@"+b]&&E(a)&&(this.remove(b),this.add(b,a,c,!0));return this};l.prototype.remove=function(b,a,c){if(this.a&&K(b))return this.j("remove",b,a);var d="@"+b;if(this.f[d]){if(!c){if(this.async&&"function"!==typeof importScripts){let c=
this;d=new Promise(function(a){setTimeout(function(){c.remove(b,null,!0);c=null;a()})});if(a)d.then(a);else return d;return this}if(a)return this.remove(b,null,!0),a(),this}for(a=0;a<this.b-(this.threshold||0);a++)O(this.l[a],b);this.depth&&O(this.h,b);delete this.f[d]}return this};let u;l.prototype.search=function(b,a,c,d){if(K(a)){if(z(a))for(var e=0;e<a.length;e++)a[e].query=b;else a.query=b;b=a;a=0}let f=[],g=b;let m,l,p;if(K(b)&&!z(b)){(c=b.callback||H(a)&&a)&&(g.callback=null);l=b.sort;m=b.page;
a=b.limit;var k=b.threshold;p=!1;b=b.query}if(this.a){k=this.a.index;var w=g.bool||"or",r=g.field;let h=w;let n,B;if(r)z(r)||(r=[r]);else if(z(g)){var u=g;r=[];h=[];for(var q=0;q<g.length;q++)d=g[q],e=d.bool||w,r[q]=d.field,h[q]=e,"not"===e?n=!0:"and"===e&&(B=!0)}else r=this.a.keys;w=r.length;for(q=0;q<w;q++)u&&(g=u[q]),E(g)||(g.page=null,g.limit=0),f[q]=k[r[q]].search(g,0);if(c)return c(G.call(this,b,h,f,l,a,p,!1,m,B,n));if(this.async){const c=this;return new Promise(function(d){Promise.all(f).then(function(e){d(G.call(c,
b,h,e,l,a,p,!1,m,B,n))})})}return G.call(this,b,h,f,l,a,p,!1,m,B,n)}k||(k=this.threshold||0);H(a)?(c=a,a=1E3):a||0===a||(a=1E3);if(!d){if(this.async&&"function"!==typeof importScripts){let b=this;k=new Promise(function(c){setTimeout(function(){c(b.search(g,a,null,!0));b=null})});if(c)k.then(c);else return k;return this}if(c)return c(this.search(g,a,null,!0)),this}if(!b||!E(b))return f;g=b;g=this.encode(g);if(!g.length)return f;c=this.c;c=H(c)?c(g):g.split(W);this.filter&&(c=F(c,this.filter));u=c.length;
d=!0;e=[];const A=x();1<u&&(this.depth?(r=!0,q=c[0],A[q]=1):c.sort(ca));if(!r||(w=this.h)[q]){const a=this.b;for(let b=r?1:0;b<u;b++){const f=c[b];if(f){if(!A[f]){const b=[];let c=!1,g=0;if(q=r?w[q]:this.l){let d;for(let e=0;e<a-k;e++)if(d=q[e][f])b[g++]=d,c=!0}if(c)e[e.length]=1<g?b.concat.apply([],b):b[0];else{d=!1;break}A[f]=1}q=f}}}else d=!1;d&&(f=R(e,a,m,!1));return f};l.prototype.clear=function(){return this.destroy().init()};l.prototype.destroy=function(){this.l=this.h=this.f=null;if(this.a){const b=
this.a.keys;for(let a=0;a<b.length;a++)this.a.index[b[a]].destroy();this.a=this.g=null}return this};const L={icase:function(b){return b.toLowerCase()},simple:function(){const b=[f("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",f("[\u00e8\u00e9\u00ea\u00eb]"),"e",f("[\u00ec\u00ed\u00ee\u00ef]"),"i",f("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",f("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",f("[\u00fd\u0177\u00ff]"),"y",f("\u00f1"),"n",f("\u00e7"),"c",f("\u00df"),"s",f(" & ")," and ",f("[-/]")," ",f("[^a-z0-9 ]"),
"",f("\\s+")," "];return function(a){a=J(a.toLowerCase(),b);return" "===a?"":a}}(),advanced:function(){const b=[f("ae"),"a",f("ai"),"ei",f("ay"),"ei",f("ey"),"ei",f("oe"),"o",f("ue"),"u",f("ie"),"i",f("sz"),"s",f("zs"),"s",f("sh"),"s",f("ck"),"k",f("cc"),"k",f("dt"),"t",f("ph"),"f",f("pf"),"f",f("ou"),"o",f("uo"),"u"];return function(a,c){if(!a)return a;a=this.simple(a);2<a.length&&(a=J(a,b));c||1<a.length&&(a=P(a));return a}}(),extra:function(){const b=[f("p"),"b",f("z"),"s",f("[cgq]"),"k",f("n"),
"m",f("d"),"t",f("[vw]"),"f",f("[aeiouy]"),""];return function(a){if(!a)return a;a=this.advanced(a,!0);if(1<a.length){a=a.split(" ");for(let c=0;c<a.length;c++){const d=a[c];1<d.length&&(a[c]=d[0]+J(d.substring(1),b))}a=a.join(" ");a=P(a)}return a}}(),balance:function(){const b=[f("[-/]")," ",f("[^a-z0-9 ]"),"",f("\\s+")," "];return function(a){return P(J(a.toLowerCase(),b))}}()};return l}(!1),this);
