!function(h,i,m,e,d,k,f){new(function(){});var c={F:m.PI,o:m.max,p:m.min,ib:m.ceil,jb:m.floor,rb:m.abs,ob:m.sin,ec:m.cos,Ad:m.tan,yf:m.atan,ic:m.sqrt,n:m.pow,Xd:m.random,u:m.round},g={Af:function(a){return-c.ec(a*c.F)/2+.5},pb:function(a){return a},Bf:function(a){return a*a},vd:function(a){return-a*(a-2)},Cf:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},Df:function(a){return a*a*a},Ef:function(a){return(a-=1)*a*a+1},Gf:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},Sf:function(a){return a*a*a*a},Hf:function(a){return-((a-=1)*a*a*a-1)},If:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},Jf:function(a){return a*a*a*a*a},Kf:function(a){return(a-=1)*a*a*a*a+1},Lf:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},Mf:function(a){return 1-c.ec(c.F/2*a)},Nf:function(a){return c.ob(c.F/2*a)},Of:function(a){return-1/2*(c.ec(c.F*a)-1)},Pf:function(a){return a==0?0:c.n(2,10*(a-1))},Qf:function(a){return a==1?1:-c.n(2,-10*a)+1},Rf:function(a){return a==0||a==1?a:(a*=2)<1?1/2*c.n(2,10*(a-1)):1/2*(-c.n(2,-10*--a)+2)},tf:function(a){return-(c.ic(1-a*a)-1)},Ff:function(a){return c.ic(1-(a-=1)*a)},sf:function(a){return(a*=2)<1?-1/2*(c.ic(1-a*a)-1):1/2*(c.ic(1-(a-=2)*a)+1)},cf:function(a){if(!a||a==1)return a;var b=.3,d=.075;return-(c.n(2,10*(a-=1))*c.ob((a-d)*2*c.F/b))},Re:function(a){if(!a||a==1)return a;var b=.3,d=.075;return c.n(2,-10*a)*c.ob((a-d)*2*c.F/b)+1},Se:function(a){if(!a||a==1)return a;var b=.45,d=.1125;return(a*=2)<1?-.5*c.n(2,10*(a-=1))*c.ob((a-d)*2*c.F/b):c.n(2,-10*(a-=1))*c.ob((a-d)*2*c.F/b)*.5+1},Te:function(a){var b=1.70158;return a*a*((b+1)*a-b)},Ue:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},Ve:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},Nd:function(a){return 1-g.tc(1-a)},tc:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},We:function(a){return a<1/2?g.Nd(a*2)*.5:g.tc(a*2-1)*.5+.5},Ye:c.ib,Ze:c.jb};var b=new function(){var j=this,G=1,pb=2,sb=3,rb=4,Z=5,H,r=0,n=0,B=0,A=navigator,fb=A.appName,p=A.userAgent,q=parseFloat;function Eb(){if(!H){H={Qc:"ontouchstart"in h||"createTouch"in i};var a;if(A.pointerEnabled||(a=A.msPointerEnabled))H.qd=a?"msTouchAction":"touchAction"}return H}function u(g){if(!r){r=-1;if(fb=="Microsoft Internet Explorer"&&!!h.attachEvent&&!!h.ActiveXObject){var e=p.indexOf("MSIE");r=G;n=q(p.substring(e+5,p.indexOf(";",e)));/*@cc_on@*/}else if(fb=="Netscape"&&!!h.addEventListener){var d=p.indexOf("Firefox"),b=p.indexOf("Safari"),f=p.indexOf("Chrome"),c=p.indexOf("AppleWebKit");if(d>=0){r=pb;n=q(p.substring(d+8))}else if(b>=0){var i=p.substring(0,b).lastIndexOf("/");r=f>=0?rb:sb;n=q(p.substring(i+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(p);if(a){r=G;n=q(a[1])}}if(c>=0)B=q(p.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(p);if(a){r=Z;n=q(a[2])}}}return g==r}function v(){return u(G)}function qb(){return u(sb)}function ub(){return u(Z)}function mb(){return qb()&&B>534&&B<535}function I(){u();return B>537||n>42||r==G&&n>=11}function nb(a){var b,c;return function(g){if(!b){b=d;var e=a.substr(0,1).toUpperCase()+a.substr(1);l([a].concat(["WebKit","ms","Moz","O","webkit"]),function(h,d){var b=a;if(d)b=h+e;if(g.style[b]!=f)return c=b})}return c}}function lb(b){var a;return function(c){a=a||nb(b)(c)||b;return a}}var L=lb("transform");function eb(a){return{}.toString.call(a)}var bb={};l(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){bb["[object "+a+"]"]=a.toLowerCase()});function l(b,d){var a,c;if(eb(b)=="[object Array]"){for(a=0;a<b.length;a++)if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function F(a){return a==e?String(a):bb[eb(a)]||"object"}function C(a){try{return F(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function jb(b,a){setTimeout(b,a||0)}function ab(b,d,c){var a=!b||b=="inherit"?"":b;l(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a&&(c+=(!a.indexOf(" ")?"":" ")+a);return c}function gb(a,b){if(a===f)a=b;return a}j.Wc=Eb;j.cd=v;j.Eg=qb;j.zg=I;nb("transform");j.Pc=function(){return n};j.wg=function(){u();return B};j.fb=jb;j.J=gb;j.Ib=function(a,b){b.call(a);return z({},a)};function U(a){a.constructor===U.caller&&a.G&&a.G.apply(a,U.caller.arguments)}j.G=U;j.Xc=function(a){if(j.Cg(a))a=i.getElementById(a);return a};function t(a){return a||h.event}j.Ag=t;j.Kb=function(b){b=t(b);var a=b.target||b.srcElement||i;if(a.nodeType==3)a=j.ad(a);return a};j.Rd=function(a){a=t(a);return a.relatedTarget||a.toElement};j.id=function(a){a=t(a);return a.which||([0,1,3,0,2])[a.button]||a.charCode||a.keyCode};j.Lc=function(a){a=t(a);return{x:a.clientX||0,y:a.clientY||0}};j.Bg=function(b,a){return b.x>=a.x&&b.x<=a.x+a.w&&b.y>=a.y&&b.y<=a.y+a.h};j.Sd=function(c,e){var a=b.Gg(e),d=b.Lc(c);return j.Bg(d,a)};function w(c,d,a){if(a!==f)c.style[d]=a==f?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&h.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,e);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function X(b,c,a,d){if(a===f){a=q(w(b,c));isNaN(a)&&(a=e);return a}if(a==e)a="";else d&&(a+="px");w(b,c,a)}function m(c,a){var d=a?X:w,b;if(a&4)b=lb(c);return function(e,f){return d(e,b?b(e):c,f,a&2)}}function zb(a){return q(a.style.opacity||"1")}function Bb(b,a){b.style.opacity=a==1?"":c.u(a*100)/100}var N={N:["rotate"],eb:["rotateX"],cb:["rotateY"],dc:["skewX"],Zb:["skewY"]};if(!I())N=z(N,{T:["scaleX",2],P:["scaleY",2],db:["translateZ",1]});function M(c,a){var b="";if(a){if(v()&&n&&n<10){delete a.eb;delete a.cb;delete a.db}l(a,function(d,c){var a=N[c];if(a){var e=a[1]||0;if(O[c]!=d)b+=" "+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(I()){if(a.wb||a.Nb||a.db!=f)b+=" translate3d("+(a.wb||0)+"px,"+(a.Nb||0)+"px,"+(a.db||0)+"px)";if(a.T==f)a.T=1;if(a.P==f)a.P=1;if(a.T!=1||a.P!=1)b+=" scale3d("+a.T+", "+a.P+", 1)"}}c.style[L(c)]=b}j.tg=m("transformOrigin",4);j.hg=m("backfaceVisibility",4);j.Wb=m("transformStyle",4);j.Wf=m("perspective",6);j.Xf=m("perspectiveOrigin",4);j.Yf=function(b,a){if(v()&&n<9)b.style.zoom=a==1?"":a;else{var c=L(b),f=a==1?"":"scale("+a+")",e=b.style[c],g=new RegExp(/[\s]*scale\(.*?\)/g),d=ab(e,[g],f);b.style[c]=d}};j.Ub=function(a,d,b,c){a=j.Xc(a);if(a.addEventListener){d=="mousewheel"&&a.addEventListener("DOMMouseScroll",b,c);a.addEventListener(d,b,c)}else if(a.attachEvent){a.attachEvent("on"+d,b);c&&a.setCapture&&a.setCapture()}};j.Jb=function(a,c,d,b){a=j.Xc(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};j.sc=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=k};j.bg=function(a){a=t(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};j.ac=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};j.Gg=function(b){var a=b.getBoundingClientRect();return{x:a.left,y:a.top,w:a.right-a.left,h:a.bottom-a.top}};j.Cb=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function db(a,c,f,b){b=b||"u";for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(D(a,b)==c)return a;if(!f){var d=db(a,c,f,b);if(d)return d}}}j.dg=db;j.kb=function(a,f,d,g){d=d||"u";var e;do{if(a.nodeType==1){var c;d&&(c=D(a,d));if(c&&c==gb(f,c)||g==a.tagName){e=a;break}}a=b.ad(a)}while(a&&a!=i.body);return e};j.gg=function(a){return W(["INPUT","TEXTAREA","SELECT"])[a.tagName]};function z(){var e=arguments,d,c,b,a,h=1&e[0],g=1+h;d=e[g-1]||{};for(;g<e.length;g++)if(c=e[g])for(b in c){a=c[b];if(a!==f){a=c[b];var i=d[b];d[b]=h&&(C(i)||C(a))?z(h,{},i,a):a}}return d}j.ab=z;j.dd=function(a){return F(a)=="function"};j.sg=function(a){return F(a)=="array"};j.Cg=function(a){return F(a)=="string"};j.Vb=function(a){return!isNaN(q(a))&&isFinite(a)};j.a=l;j.Md=C;function Q(a){return i.createElement(a)}j.wc=function(){return Q("DIV")};j.kg=function(){};function E(b,c,a){if(a==f)return b.getAttribute(c);b.setAttribute(c,a)}function D(a,b){return E(a,b)||E(a,"data-"+b)}j.v=E;j.Q=D;j.q=function(d,b,c){var a=j.Pe(D(d,b));if(isNaN(a))a=c;return a};function W(b){var a={};l(b,function(b){if(b!=f)a[b]=b});return a}j.pd=W;j.mg=function(a){a&&(a=a.toLowerCase());return a};j.ad=function(a){return a.parentNode};j.vb=function(a){j.qb(a,"none")};j.Mb=function(a,b){j.qb(a,b?"none":"")};j.ng=function(b,a){b.removeAttribute(a)};j.og=function(d,a){if(a)d.style.clip="rect("+c.u(a.f||a.D||0)+"px "+c.u(a.l)+"px "+c.u(a.m)+"px "+c.u(a.g||a.E||0)+"px)";else if(a!==f){var h=d.style.cssText,g=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=ab(h,g,"");b.pg(d,e)}};j.qg=function(b,a){if(a)b.style.backgroundColor="rgba("+c.u(a.Cd)+","+c.u(a.ld)+","+c.u(a.gd)+","+a.z+")"};j.Bb=function(){return+new Date};j.W=function(b,a){b.appendChild(a)};j.Ab=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};j.Ic=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};j.rg=function(a,b){l(a,function(a){j.Ic(a,b)})};j.fe=function(a){j.rg(j.Cb(a,d),a)};function hb(){l([].slice.call(arguments,0),function(a){if(j.sg(a))hb.apply(e,a);else a&&a.s()})}j.s=hb;j.Qe=function(a,b){var c=j.ad(a);if(b&1){j.X(a,(j.R(c)-j.R(a))/2);j.Fd(a,e)}if(b&2){j.Z(a,(j.S(c)-j.S(a))/2);j.Ld(a,e)}};var R={f:e,l:e,m:e,g:e,A:e,B:e};j.ff=function(a){var b=j.wc();s(b,{Kd:"block",Rb:j.xb(a),f:0,g:0,A:0,B:0});var d=j.he(a,R);j.Ab(b,a);j.W(b,a);var e=j.he(a,R),c={};l(d,function(b,a){if(b==e[a])c[a]=b});s(b,R);s(b,c);s(a,{f:0,g:0});return c};j.Pe=q;j.Vd=function(b,a){var c=i.body;while(a&&b!==a&&c!==a)a=a.parentNode;return b===a};function T(d,c,b){var a=d.cloneNode(!c);!b&&j.ng(a,"id");return a}j.mb=T;j.Pb=function(e,f){var a=new Image;function b(e,d){j.Jb(a,"load",b);j.Jb(a,"abort",c);j.Jb(a,"error",c);f&&f(a,d)}function c(a){b(a,d)}if(ub()&&n<11.6||!e)b(!e);else{j.Ub(a,"load",b);j.Ub(a,"abort",c);j.Ub(a,"error",c);a.src=e}};j.pe=function(e,a,d){var b=1;function c(c){b--;if(a&&c&&c.src==a.src)a=c;!b&&d&&d(a)}l(e,function(a){if(a.src){b++;j.Pb(a.src,c)}});c()};j.ub=w;j.yc=m("backgroundColor");j.Tb=m("overflow");j.Fc=m("pointerEvents");j.Z=m("top",2);j.Fd=m("right",2);j.Ld=m("bottom",2);j.X=m("left",2);j.R=m("width",2);j.S=m("height",2);m("marginLeft",2);m("marginTop",2);j.xb=m("position");j.qb=m("display");j.M=m("zIndex",1);j.Be=function(b,a,c){if(a!=f)Bb(b,a,c);else return zb(b)};j.pg=function(a,b){if(b!=f)a.style.cssText=b;else return a.style.cssText};j.Ne=function(b,a){if(a===f){a=w(b,"backgroundImage")||"";var c=/\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a)||[];return c[1]}w(b,"backgroundImage",a?"url('"+a+"')":"")};var K;j.Ae=K={z:j.Be,f:j.Z,l:j.Fd,m:j.Ld,g:j.X,A:j.R,B:j.S,Rb:j.xb,Kd:j.qb,Y:j.M};j.he=function(c,b){var a={};l(b,function(d,b){if(K[b])a[b]=K[b](c)});return a};function s(b,h){var a=I(),d=mb(),g=L(b);function c(l,a){a=a||{};var h=a.db||0,i=(a.eb||0)%360,j=(a.cb||0)%360,k=(a.N||0)%360,c=a.T,d=a.P,e=a.Rg;if(c==f)c=1;if(d==f)d=1;if(e==f)e=1;var b=new yb(a.wb,a.Nb,h);b.xc(c,d,e);b.ye(a.dc,a.Zb);b.eb(i);b.cb(j);b.Oe(k);b.Hb(a.E,a.D);l.style[g]=b.we()}s=function(g,b){b=b||{};var i=b.E,k=b.D,h;l(K,function(a,c){h=b[c];h!==f&&a(g,h)});j.og(g,b.c);j.qg(g,b.sb);if(!a){i!=f&&j.X(g,(b.Hd||0)+i);k!=f&&j.Z(g,(b.Id||0)+k)}if(b.te)if(d)jb(j.ac(e,M,g,b));else if(a)c(g,b);else M(g,b)};j.L=s;s(b,h)}j.L=s;function yb(j,k,n){var d=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,j||0,k||0,n||0,1],i=c.ob,h=c.ec,l=c.Ad;function g(a){return a*c.F/180}function m(c,e,l,m,o,r,t,u,w,z,A,C,E,b,f,k,a,g,i,n,p,q,s,v,x,y,B,D,F,d,h,j){return[c*a+e*p+l*x+m*F,c*g+e*q+l*y+m*d,c*i+e*s+l*B+m*h,c*n+e*v+l*D+m*j,o*a+r*p+t*x+u*F,o*g+r*q+t*y+u*d,o*i+r*s+t*B+u*h,o*n+r*v+t*D+u*j,w*a+z*p+A*x+C*F,w*g+z*q+A*y+C*d,w*i+z*s+A*B+C*h,w*n+z*v+A*D+C*j,E*a+b*p+f*x+k*F,E*g+b*q+f*y+k*d,E*i+b*s+f*B+k*h,E*n+b*v+f*D+k*j]}function f(c,a){return m.apply(e,(a||b).concat(c))}d.xc=function(a,c,d){if(a!=1||c!=1||d!=1)b=f([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.Hb=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.eb=function(c){if(c){a=g(c);var d=h(a),e=i(a);b=f([1,0,0,0,0,d,e,0,0,-e,d,0,0,0,0,1])}};d.cb=function(c){if(c){a=g(c);var d=h(a),e=i(a);b=f([d,0,-e,0,0,1,0,0,e,0,d,0,0,0,0,1])}};d.Oe=function(c){if(c){a=g(c);var d=h(a),e=i(a);b=f([d,e,0,0,-e,d,0,0,0,0,1,0,0,0,0,1])}};d.ye=function(a,c){if(a||c){j=g(a);k=g(c);b=f([1,l(k),0,0,l(j),1,0,0,0,0,1,0,0,0,0,1])}};d.we=function(){return"matrix3d("+b.join(",")+")"}}var O={Hd:0,Id:0,E:0,D:0,U:1,T:1,P:1,N:0,eb:0,cb:0,wb:0,Nb:0,db:0,dc:0,Zb:0};j.Ac=function(c,d){var a=c||{};if(c)if(b.dd(c))a={J:a};else if(b.dd(c.c))a.c={J:c.c};a.J=a.J||d;if(a.c)a.c.J=a.c.J||d;if(a.sb)a.sb.J=a.sb.J||d;return a};function ib(c,a){var b={};l(c,function(c,d){var e=c;if(a[d]!=f)if(j.Vb(c))e=c+a[d];else e=ib(c,a[d]);b[d]=e});return b}j.ne=ib;j.Qd=function(o,j,s,t,E,F,p){var a=j;if(o){a={};for(var i in j){var G=F[i]||1,B=E[i]||[0,1],h=(s-B[0])/B[1];h=c.p(c.o(h,0),1);h=h*G;var y=c.jb(h);if(h!=y)h-=y;var k=t.J||g.pb,m,C=o[i],r=j[i];if(b.Vb(r)){k=t[i]||k;var D=k(h);m=C+r*D}else{m=z({mc:{}},o[i]);var A=t[i]||{};l(r.mc||r,function(d,a){k=A[a]||A.J||k;var c=k(h),b=d*c;m.mc[a]=b;m[a]+=b})}a[i]=m}var x=l(j,function(b,a){return O[a]!=f});x&&l(O,function(c,b){if(a[b]==f&&o[b]!==f)a[b]=o[b]});if(x){if(a.U)a.T=a.P=a.U;a.Gb=p.Gb;a.Fb=p.Fb;if(v()&&n>=11&&(j.E||j.D)&&s!=0&&s!=1)a.N=a.N||1e-8;a.te=d}}if(j.c&&p.Hb){var q=a.c.mc,w=(q.f||0)+(q.m||0),u=(q.g||0)+(q.l||0);a.g=(a.g||0)+u;a.f=(a.f||0)+w;a.c.g-=u;a.c.l-=u;a.c.f-=w;a.c.m-=w}if(a.c&&!a.c.f&&!a.c.g&&!a.c.D&&!a.c.E&&a.c.l==p.Gb&&a.c.m==p.Fb)a.c=e;return a}};function o(){var a=this,f,e=[],c=[];function k(a,b){e.push({Eb:a,Db:b})}function j(a,c){b.a(e,function(b,d){b.Eb==a&&b.Db===c&&e.splice(d,1)})}function i(){e=[]}function g(){b.a(c,function(a){b.Jb(a.de,a.Eb,a.Db,a.ae)});c=[]}a.Zc=function(){return f};a.i=function(e,a,d,f){b.Ub(e,a,d,f);c.push({de:e,Eb:a,Db:d,ae:f})};a.Ob=function(e,a,d,f){b.a(c,function(g,h){if(g.de===e&&g.Eb==a&&g.Db===d&&g.ae==f){b.Jb(e,a,d,f);c.splice(h,1)}})};a.Ge=g;a.Tc=a.addEventListener=k;a.removeEventListener=j;a.j=function(a){var c=[].slice.call(arguments,1);b.a(e,function(b){b.Eb==a&&b.Db.apply(h,c)})};a.s=function(){if(!f){f=d;g();i()}}}var l=function(C,D,i,m,R,Q){C=C||0;var a=this,p,n,o,s,F=0,O=1,L,M,K,G,B=0,j=0,r=0,A,l,e,g,q,z,u=[],y,I=k,J,H=k;function T(a){e+=a;g+=a;l+=a;j+=a;r+=a;B+=a}function x(C){var k=C;if(q)if(!z&&(k>=g||k<e)||z&&k>=e)k=((k-e)%q+q)%q+e;if(!A||s||j!=k){var h=c.p(k,g);h=c.o(h,e);if(i.bc)h=g-h+e;if(!A||s||h!=r){if(Q){var x=(h-l)/(D||1),o=b.Qd(R,Q,x,L,K,M,i);if(y)b.a(o,function(b,a){y[a]&&y[a](m,b)});else b.L(m,o);var n;if(J){var p=h>e&&h<g;if(p!=H)n=H=p}if(!n&&o.z!=f){var t=o.z<.001;if(t!=I)n=I=t}if(n!=f){n&&b.Fc(m,"none");!n&&b.Fc(m,b.v(m,"data-events"))}}var w=r,v=r=h;b.a(u,function(b,c){var a=!A&&z||k<=j?u[u.length-c-1]:b;a.H(h-B)});j=k;A=d;a.Nc(w-l,v-l);a.zb(w,v)}}}function E(a,b,d){b&&a.yb(g);if(!d){e=c.p(e,a.lc()+B);g=c.o(g,a.hb()+B)}u.push(a)}var v=h.requestAnimationFrame||h.webkitRequestAnimationFrame||h.mozRequestAnimationFrame||h.msRequestAnimationFrame;if(b.Eg()&&b.Pc()<7||!v)v=function(a){b.fb(a,i.gb)};function N(){if(p){var d=b.Bb(),e=c.p(d-F,i.Ud),a=j+e*o*O;F=d;if(a*o>=n*o)a=n;x(a);if(!s&&a*o>=n*o)P(G);else v(N)}}function w(f,h,i){if(!p){p=d;s=i;G=h;f=c.o(f,e);f=c.p(f,g);n=f;o=n<j?-1:1;a.Sc();F=b.Bb();v(N)}}function P(b){if(p){s=p=G=k;a.Mc();b&&b()}}a.ee=function(a,b,c){w(a?j+a:g,b,c)};a.hc=w;a.le=function(a,b){w(g,a,b)};a.I=P;a.nd=function(){return j};a.od=function(){return n};a.k=function(){return r};a.H=x;a.Me=function(){x(g,d)};a.Yc=function(){return p};a.Wd=function(a){O=a};a.yb=T;a.K=function(a,b){E(a,0,b)};a.Oc=function(a){E(a,1)};a.Rc=function(a){g+=a};a.lc=function(){return e};a.hb=function(){return g};a.zb=a.Sc=a.Mc=a.Nc=b.kg;a.qc=b.Bb();i=b.ab({gb:16,Ud:50},i);m&&(J=b.v(m,"data-inactive"));q=i.kc;z=i.qe;y=i.re;e=l=C;g=C+D;M=i.u||{};K=i.Td||{};L=b.Ac(i.O)};var n={ue:"data-scale",ve:"data-autocenter",xe:"data-nofreeze",Yd:"data-nodrag"};new(function(){});var s=new function(){var h=this,t=1,q=2,r=4,s=8,w=256,x=512,v=1024,u=2048,j=u+t,i=u+q,o=x+t,m=x+q,n=w+r,k=w+s,l=v+r;function g(b,a,c){c.push(a);b[a]=b[a]||[];b[a].push(c)}h.Ce=function(f){for(var d=f.C,e=f.bb,s=f.rd,t=f.De,r=[],a=0,b=0,p=d-1,q=e-1,h=t-1,c,b=0;b<e;b++)for(a=0;a<d;a++){switch(s){case j:c=h-(a*e+(q-b));break;case l:c=h-(b*d+(p-a));break;case o:c=h-(a*e+b);case n:c=h-(b*d+a);break;case i:c=a*e+b;break;case k:c=b*d+(p-a);break;case m:c=a*e+(q-b);break;default:c=b*d+a}g(r,c,[b,a])}return r};h.Ie=function(d){for(var e=[],a,b=0;b<d.bb;b++)for(a=0;a<d.C;a++)g(e,c.ib(1e5*c.Xd())%13,[b,a]);return e}},t=function(m,r,p,u,z,A){var a=this,v,h,f,y=0,x=u.Le,q,i=8;function t(a){if(a.f)a.D=a.f;if(a.g)a.E=a.g;b.a(a,function(a){b.Md(a)&&t(a)})}function j(h,e,f){var a={gb:e,Dc:1,fb:0,C:1,bb:1,z:0,U:0,c:0,Hb:k,Ec:k,bc:k,xd:s.Ie,rd:1032,Bd:{ze:0,je:0},O:g.pb,u:{},nc:[],Td:{}};b.ab(a,h);if(a.bb==0)a.bb=c.u(a.C*f);t(a);a.De=a.C*a.bb;a.O=b.Ac(a.O,g.pb);a.me=c.ib(a.Dc/a.gb);a.ke=function(c,b){c/=a.C;b/=a.bb;var f=c+"x"+b;if(!a.nc[f]){a.nc[f]={A:c,B:b};for(var d=0;d<a.C;d++)for(var e=0;e<a.bb;e++)a.nc[f][e+","+d]={f:e*b,l:d*c+c,m:e*b+b,g:d*c}}return a.nc[f]};if(a.Jc){a.Jc=j(a.Jc,e,f);a.Ec=d}return a}function n(z,i,a,v,n,l){var y=this,t,u={},h={},m=[],f,e,r,p=a.Bd.ze||0,q=a.Bd.je||0,g=a.ke(n,l),o=B(a),C=o.length-1,s=a.Dc+a.fb*C,w=v+s,j=a.Ec,x;w+=50;function B(a){var b=a.xd(a);return a.bc?b.reverse():b}y.Jd=w;y.gc=function(d){d-=v;var e=d<s;if(e||x){x=e;if(!j)d=s-d;var f=c.ib(d/a.gb);b.a(h,function(a,e){var d=c.o(f,a.p);d=c.p(d,a.length-1);if(a.Od!=d){if(!a.Od&&!j)b.Mb(m[e]);else d==a.o&&j&&b.vb(m[e]);a.Od=d;b.L(m[e],a[d])}})}};i=b.mb(i);A(i,0,0);b.a(o,function(i,m){b.a(i,function(G){var I=G[0],H=G[1],v=I+","+H,o=k,s=k,x=k;if(p&&H%2){if(p&3)o=!o;if(p&12)s=!s;if(p&16)x=!x}if(q&&I%2){if(q&3)o=!o;if(q&12)s=!s;if(q&16)x=!x}a.f=a.f||a.c&4;a.m=a.m||a.c&8;a.g=a.g||a.c&1;a.l=a.l||a.c&2;var E=s?a.m:a.f,B=s?a.f:a.m,D=o?a.l:a.g,C=o?a.g:a.l;a.c=E||B||D||C;r={};e={D:0,E:0,z:1,A:n,B:l};f=b.ab({},e);t=b.ab({},g[v]);if(a.z)e.z=2-a.z;if(a.Y){e.Y=a.Y;f.Y=0}var K=a.C*a.bb>1||a.c;if(a.U||a.N){var J=d;if(J){e.U=a.U?a.U-1:1;f.U=1;var N=a.N||0;e.N=N*360*(x?-1:1);f.N=0}}if(K){var i=t.mc={};if(a.c){var w=a.Qg||1;if(E&&B){i.f=g.B/2*w;i.m=-i.f}else if(E)i.m=-g.B*w;else if(B)i.f=g.B*w;if(D&&C){i.g=g.A/2*w;i.l=-i.g}else if(D)i.l=-g.A*w;else if(C)i.g=g.A*w}r.c=t;f.c=g[v]}var L=o?1:-1,M=s?1:-1;if(a.x)e.E+=n*a.x*L;if(a.y)e.D+=l*a.y*M;b.a(e,function(a,c){if(b.Vb(a))if(a!=f[c])r[c]=a-f[c]});u[v]=j?f:e;var F=a.me,A=c.u(m*a.fb/a.gb);h[v]=new Array(A);h[v].p=A;h[v].o=A+F-1;for(var z=0;z<=F;z++){var y=b.Qd(f,r,z/F,a.O,a.Td,a.u,{Hb:a.Hb,Gb:n,Fb:l});y.Y=y.Y||1;h[v].push(y)}})});o.reverse();b.a(o,function(a){b.a(a,function(c){var f=c[0],e=c[1],d=f+","+e,a=i;if(e||f)a=b.mb(i);b.L(a,u[d]);b.Tb(a,"hidden");b.xb(a,"absolute");z.ie(a);m[d]=a;b.Mb(a,!j)})})}function w(){var a=this,b=0;l.call(a,0,v);a.zb=function(c,a){if(a-b>i){b=a;f&&f.gc(a);h&&h.gc(a)}};a.vc=q}a.ug=function(){var a=0,b=u.fc,d=b.length;if(x)a=y++%d;else a=c.jb(c.Xd()*d);b[a]&&(b[a].Sb=a);return b[a]};a.Je=function(x,y,k,l,b,t){a.tb();q=b;b=j(b,i,t);var g=l.md,e=k.md;g["no-image"]=!l.jd;e["no-image"]=!k.jd;var o=g,s=e,w=b,d=b.Jc||j({},i,t);if(!b.Ec){o=e;s=g}var u=d.yb||0;h=new n(m,s,d,c.o(u-d.gb,0),r,p);f=new n(m,o,w,c.o(d.gb-u,0),r,p);h.gc(0);f.gc(0);v=c.o(h.Jd,f.Jd);a.Sb=x};a.tb=function(){m.tb();h=e;f=e};a.He=function(){var a=e;if(f)a=new w;return a};if(z&&b.wg()<537)i=16;o.call(a);l.call(a,-1e7,1e7)},r={Ee:1};function p(e,d,c){var a=this;b.Ib(a,o);l.call(a,0,c.Lb);a.Yb=0;a.Cc=c.Lb}p.Bc=21;p.Xb=24;var u=function(){var a=this,hb=b.Ib(a,o);l.call(a,0,0);var f,s,gb=[g.pb,g.Af,g.Bf,g.vd,g.Cf,g.Df,g.Ef,g.Gf,g.Sf,g.Hf,g.If,g.Jf,g.Kf,g.Lf,g.Mf,g.Nf,g.Of,g.Pf,g.Qf,g.Rf,g.tf,g.Ff,g.sf,g.cf,g.Re,g.Se,g.Te,g.Ue,g.Ve,g.Nd,g.tc,g.We,g.Ye,g.Ze],P={},S,C,t=new l(0,0),T=[],x=[],E,q=0;function G(d,c){var a={};b.a(d,function(d,f){var e=P[f];if(e){if(b.Md(d))d=G(d,c||f=="e");else if(c)if(b.Vb(d))d=gb[d];a[e]=d}});return a}function I(c,f){var e=[],d=b.q(c,"play");if(f&&d){var g=new u(c,s,{lg:d});N.push(g);a.i(g,p.Bc,Z);a.i(g,p.Xb,U)}else b.a(b.Cb(c),function(a){e=e.concat(I(a,f+1))});if(!f&&(!j||j&16)||f&&(!d||!(d&16))){var h=S[b.q(c,"t")];h&&e.push({V:c,vc:h})}return e}function O(c,f){var a=T[c];if(a==e){a=T[c]={lb:c,zc:[],ed:[]};var d=0;!b.a(x,function(a,b){d=b;return a.lb>c})&&d++;x.splice(d,0,a)}return a}function db(o,p,g){var a,f;if(C){var k=C[b.q(o,"c")];if(k){a=O(k.r,0);a.jg=k.e||0}}b.a(p,function(h){var e=b.ab(d,{},G(h)),i=b.Ac(e.O);delete e.O;if(e.g){e.E=e.g;i.E=i.g;delete e.g}if(e.f){e.D=e.f;i.D=i.f;delete e.f}var m={O:i,Gb:g.A,Fb:g.B},j=new l(h.b,h.d,m,o,g,e);q=c.o(q,h.b+h.d);if(a){if(!f)f=new l(h.b,0);f.K(j)}else{var k=O(h.b,h.b+h.d);k.zc.push(j)}if(e.sb)g.sb={Cd:0,ld:0,gd:0,z:0};g=b.ne(g,e)});if(a&&f){f.Me();var h=f,i,j=f.lc(),m=f.hb(),n=c.o(m,a.jg);if(a.lb<m){if(a.lb>j){h=new l(j,a.lb-j);h.K(f,d)}else h=e;i=new l(a.lb,n-j,{kc:n-a.lb,qe:d});i.K(f,d)}h&&a.zc.push(h);i&&a.ed.push(i)}return g}function cb(a){b.a(a,function(d){var a=d.V,f=b.R(a),e=b.S(a),c={g:b.X(a),f:b.Z(a),E:0,D:0,z:1,Y:b.M(a)||0,N:0,eb:0,cb:0,T:1,P:1,wb:0,Nb:0,db:0,dc:0,Zb:0,A:f,B:e,c:{f:0,l:f,m:e,g:0}};c.Hd=c.g;c.Id=c.f;db(a,d.vc,c)})}function fb(f,e,g){var c=f.b-e;if(c){var b=new l(e,c);b.K(t,d);b.yb(g);a.K(b)}a.Rc(f.d);return c}function eb(e){var c=t.lc(),d=0;b.a(e,function(e,f){e=b.ab({d:3e3},e);fb(e,c,d);c=e.b;d+=e.d;if(!f||e.t==2){a.Yb=c;a.Cc=c+e.d}})}function B(g,e,d){var f=e.length;if(f>4)for(var j=c.ib(f/4),a=0;a<j;a++){var h=e.slice(a*4,c.p(a*4+4,f)),i=new l(h[0].lb,0);B(i,h,d);g.K(i)}else b.a(e,function(a){b.a(d?a.ed:a.zc,function(a){d&&a.Rc(q-a.hb());g.K(a)})})}var j,F,v=0,h,z,K,J,A,N=[],H=[],r,D,m;function y(a){return a&2||a&4&&b.Wc().Qc}function ab(){if(!A){h&8&&a.i(i,"keydown",Q);if(h&32){a.i(i,"mousedown",w);a.i(i,"touchstart",w)}A=d}}function Y(){a.Ob(i,"keydown",Q);a.Ob(i,"mousedown",w);a.Ob(i,"touchstart",w);A=k}function L(b){if(!r||b){r=d;a.I();b&&v&&a.H(0);a.Wd(1);a.le();ab();a.j(p.Bc,a)}}function n(){if(!D&&(r||a.k())){D=d;a.I();a.nd()>a.Yb&&a.H(a.Yb);a.Wd(K||1);a.hc(0)}}function V(){!m&&n()}function M(c){var b=c;if(c<0&&a.k())b=1;if(b!=v){v=b;F&&a.j(p.Xb,a,v)}}function Q(a){h&8&&b.id(a)==27&&n()}function X(a){if(m&&b.Rd(a)!==e){m=k;h&16&&b.fb(V,160)}}function w(a){h&32&&!b.Vd(f,b.Kb(a))&&n()}function W(a){if(!m){m=d;if(j&1)b.Sd(a,f)&&L()}}function bb(i){var g=b.Kb(i),a=b.kb(g,e,e,"A"),c=a&&(b.gg(a)||a===f||b.Vd(f,a));if(r&&y(h))!c&&n();else if(y(j))!c&&L(d)}function Z(b){var c=b.ig(),a=H[c];a!==b&&a&&a.fg();H[c]=b}function U(b,c){a.j(p.Xb,b,c)}a.ig=function(){return J||""};a.fg=n;a.Sc=function(){M(1)};a.Mc=function(){r=k;D=k;M(-1);!a.k()&&Y()};a.zb=function(){!m&&z&&a.nd()>a.Cc&&n()};a.G=function(m,i,e){f=m;s=i;j=e.lg;E=e.eg;S=s.fc;C=s.Pg;var l={f:"y",g:"x",m:"m",l:"t",N:"r",eb:"rX",cb:"rY",T:"sX",P:"sY",wb:"tX",Nb:"tY",db:"tZ",dc:"kX",Zb:"kY",z:"o",O:"e",Y:"i",c:"c",sb:"bc",Cd:"re",ld:"gr",gd:"bl"};b.a(l,function(b,a){P[b]=a});cb(I(f,0));B(t,x);if(j){a.K(t);E=d;z=b.q(f,"idle");h=b.q(f,"rollback");K=b.q(f,"speed",1);J=b.Q(f,"group");(y(j)||y(h))&&a.i(f,"click",bb);if((j&1||z)&&!b.Wc().Qc){a.i(f,"mouseenter",W);a.i(f,"mouseleave",X)}F=b.q(f,"pause")}var k=s.Og||[],c=k[b.q(f,"b")]||[],g={b:q,d:c.length?0:e.Lb||z||0};c=c.concat([g]);eb(c);a.hb();E&&a.Rc(1e8);q=a.hb();B(a,x,d);a.H(-1);a.H(b.q(f,"initial")||0)};a.s=function(){b.s(hb,N);a.I();a.H(-1)};b.G(a)},j=(h.module||{}).exports=function(){var a=this,xc=b.Ib(a,o),ac="data-jssor-slider",Ac="data-jssor-thumb",t,m,R,Gb,cb,sb,Z,M,K,P,Rb,zc=1,pc=1,Ec=1,fc=1,Ic={},w,U,Tb,Xb,Wb,Hb,Fb,Eb,gb,E=[],dc,u=-1,hc,q,I,H,L,kb,lb,F,J,hb,S,A,W,jb,Y=[],kc,mc,bc,s,rb,Bb,nb,eb,X,gc,Ab,Kb,ic,G,Yb=0,bb=0,Q=Number.MAX_VALUE,N=Number.MIN_VALUE,C,ib,db,T=1,Pb=0,mb,B,zb,yb,O,wb,xb,z,V,ob,y,Ib,Ub=b.Wc(),Nb=Ub.Qc,x=[],D,tb,ab,Zb,yc,Hc,ub;function Db(){return!T&&X&12}function Bc(){return Pb||!T&&X&3}function Cb(){return!B&&!Db()&&!y.Yc()}function Rc(){return!Bc()&&Cb()}function Cc(){return A||R}function Kc(){return Cc()&2?lb:kb}function Gc(a,c,d){b.X(a,c);b.Z(a,d)}function vc(c,b){var a=Cc(),d=(kb*b+Yb)*(a&1),e=(lb*b+Yb)*(a&2)/2;Gc(c,d,e)}function qc(b,f){if(B&&!(C&1)){var e=b,d;if(b<N){e=N;d=-1}if(b>Q){e=Q;d=1}if(d){var a=b-e;if(f){a=c.yf(a)*2/c.F;a=c.n(a*d,1.6)}else{a=c.n(a*d,.625);a=c.Ad(a*c.F/2)}b=e+a*d}}return b}function Mc(a){return qc(a,d)}function dd(a){return qc(a)}function vb(a,b){if(!(C&1)){var c=a-Q+(b||0),d=N-a+(b||0);if(c>0&&c>d)a=Q;else if(d>0)a=N}return a}function nc(a){return!(C&1)&&a-N<.0001}function lc(a){return!(C&1)&&Q-a<.0001}function pb(a){return!(C&1)&&(a-N<.0001||Q-a<.0001)}function Lb(c,a,d){!ub&&b.a(Y,function(b){b.rc(c,a,d)})}function sc(b){var a=b,d=pb(b);if(d)a=vb(a);else{b=v(b);a=b}a=c.jb(a);a=c.o(a,0);return a}function ad(a){x[u];dc=u;u=a;hc=x[u]}function Pc(){A=0;var b=z.k(),d=sc(b);Lb(d,b);if(pb(b)||b==c.jb(b)){if(s&2&&(eb>0&&d==q-1||eb<0&&!d))s=0;ad(d);a.j(j.cg,u,dc)}}function cc(a,b){if(q&&(!b||!y.Yc())){y.I();y.Kc(a,a)}}function qb(a){if(q){a=v(a);a=vb(a);cc(a)}else Lb(0,0)}function Uc(){var b=j.ce||0,a=ib;j.ce|=a;return W=a&~b}function Qc(){if(W){j.ce&=~ib;W=0}}function Qb(c){var a=b.wc();b.L(a,gb);c&&b.Tb(a,"hidden");return a}function v(b,a){a=a||q||1;return(b%a+a)%a}function uc(c,a,b){s&8&&(s=0);Vb(c,Ab,a,b)}function Mb(){b.a(Y,function(a){a.pc(a.Uc.Ng<=T)})}function cd(c){if(!T&&(b.Rd(c)||!b.Sd(c,t))){T=1;Mb();if(!B){X&12&&Dc();x[u]&&x[u].jc()}a.j(j.ag)}}function bd(){if(T){T=0;Mb();B||!(X&12)||Fc()}a.j(j.Vf)}function Jc(){b.L(U,gb)}function Ob(b,a){Vb(b,a,d)}function Vb(g,h,l,p){if(q&&(!B||m.fd)&&!Db()){var e=z.k(),a=g;if(l){a=e+g;if(C&2){if(nc(e)&&g<0)a=Q;if(lc(e)&&g>0)a=N}}if(!(C&1))if(p)a=v(a);else a=vb(a,.5);if(l&&!pb(a))a=c.u(a);var j=(a-e)%q;a=e+j;if(h==f)h=Ab;var b=c.rb(j),i=0;if(b){if(b<1)b=c.n(b,.5);if(b>1){var o=Kc(),n=(R&1?Fb:Eb)/o;b=c.p(b,n*1.5)}i=h*b}ub=d;y.I();ub=k;y.Kc(e,a,i)}}function Nc(e,h,o){var l=this,i={f:2,l:1,m:2,g:1},m={f:"top",l:"right",m:"bottom",g:"left"},g,a,f,j,k={};l.V=e;l.uc=function(q,l,u){var p,s=q,r=l;if(!f){f=b.ff(e);g=e.parentNode;j={xc:b.q(e,n.ue,1),yd:b.q(e,n.ve)};b.a(m,function(c,a){k[a]=b.q(e,"data-scale-"+c,1)});a=e;if(h){a=b.mb(g,d);b.L(a,{f:0,g:0});b.W(a,e);b.W(g,a)}}if(o){p=c.o(q,l);if(h)if(u>=0&&u<1){var w=c.p(q,l);p=c.p(p/w,1/(1-u))*w}}else s=r=p=c.n(K<P?l:q,j.xc);var x=h?1.001:1,t=p*x;h&&(fc=t);b.Yf(a,t);b.R(g,f.A*s);b.S(g,f.B*r);var v=b.cd()&&b.Pc()<9?t:1,y=(s-v)*f.A/2,z=(r-v)*f.B/2;b.X(a,y);b.Z(a,z);b.a(f,function(d,a){if(i[a]&&d){var e=(i[a]&1)*c.n(q,k[a])*d+(i[a]&2)*c.n(l,k[a])*d/2;b.Ae[a](g,e)}});b.Qe(g,j.yd)}}function Yc(){var a=this;l.call(a,0,0,{kc:q});b.a(x,function(b){a.Oc(b);b.yb(G/F)})}function Xc(){var a=this,b=Ib.V;l.call(a,-1,2,{O:g.pb,re:{Rb:vc},kc:q,bc:Bb},b,{Rb:1},{Rb:-2})}function Zc(){var b=this;l.call(b,-1e8,2e8);b.zb=function(e,b){if(c.rb(b-e)>1e-5){var g=b,f=b;if(c.jb(b)!=b&&b>e&&(C&1||b>bb))f++;var h=sc(f);Lb(h,g,d);a.j(j.yg,v(g),v(e),b,e)}}}function Oc(o,n){var b=this,g,i,f,c,h;l.call(b,-1e8,2e8,{Ud:100});b.Sc=function(){mb=d;a.j(j.xg,v(z.k()),V.k())};b.Mc=function(){mb=k;c=k;a.j(j.vg,v(z.k()),V.k());!B&&Pc()};b.zb=function(e,b){var a=b;if(c)a=h;else if(f){var d=b/f;a=m.ge(d)*(i-g)+g}a=Mc(a);V.H(a)};b.Kc=function(a,c,h,e){B=k;f=h||1;g=a;i=c;ub=d;V.H(a);ub=k;b.H(0);b.hc(f,e)};b.Hg=function(){c=d;c&&b.ee(e,e,d)};b.Dg=function(a){h=a};V=new Zc;V.K(o);V.K(n)}function Lc(){var c=this,a=Qb();b.M(a,0);c.V=a;c.ie=function(c){b.W(a,c);b.Mb(a)};c.tb=function(){b.vb(a);b.fe(a)}}function Wc(w,h){var g=this,ib=b.Ib(g,o),y,G=0,P,t,F,B,K,n,E=[],V,N,R,i,r,A,S;l.call(g,-J,J+1,{kc:C&1?q:f,bc:Bb});function L(){y&&y.s();Pb-=G;G=0;y=new cb.nb(t,cb,{Lb:b.q(t,"idle",gc),eg:!s});y.Tc(p.Xb,Y)}function Z(){y.qc<cb.qc&&L()}function Y(b,a){G+=a;Pb+=a;if(h==u)!G&&g.jc()}function Q(o,q,m){if(!N){N=d;if(n&&m){var e=m.width,c=m.height,l=e,i=c;if(e&&c&&B){if(B&3&&(!(B&4)||e>I||c>H)){var f=k,p=I/H*c/e;if(B&1)f=p>1;else if(B&2)f=p<1;l=f?e*H/c:I;i=f?H:c*I/e}b.R(n,l);b.S(n,i);b.Z(n,(H-i)/2);b.X(n,(I-l)/2)}b.xb(n,"absolute")}a.j(j.Fg,h)}q.td(k);o&&o(g)}function X(f,b,c,e){if(e==A&&u==h&&s&&Cb()&&!g.Zc()){var a=v(f);D.Je(a,h,b,g,c,H/I);b.Zf();ob.yb(a-ob.lc()-1);ob.H(a);cc(a,d)}}function bb(b){if(b==A&&u==h&&Cb()&&!g.Zc()){if(!i){var a=e;if(D)if(D.Sb==h)a=D.He();else D.tb();Z();i=new Vc(w,h,a,y);i.Tf(r)}!i.Yc()&&i.Vc()}}function M(a,d,k){if(a==h){if(a!=d)x[d]&&x[d].wd();else!k&&i&&i.rf();r&&r.Ke();A=b.Bb();g.Pb(b.ac(e,bb,A))}else{var j=c.p(h,a),f=c.o(h,a),n=c.p(f-j,j+q-f),l=J+m.pf-1;(!R||n<=l)&&g.Pb()}}function fb(){if(u==h&&i){i.I();r&&r.of();r&&r.nf();i.ud()}}function hb(){u==h&&i&&i.I()}function ab(b){!db&&a.j(j.mf,h,b)}g.td=function(a){if(S!=a){S=a;a&&b.W(w,K);!a&&b.Ic(K)}};g.Pb=function(f,c){c=c||g;if(E.length&&!N){c.td(d);if(!V){V=d;a.j(j.lf,h);b.a(E,function(a){if(!b.v(a,"src")){var c=b.Q(a,"src")||b.Q(a,"src2")||"";if(c){a.src=c;b.qb(a,b.v(a,"data-display"))}}})}b.pe(E,n,b.ac(e,Q,f,c))}else Q(f,c)};g.kf=function(){if(Rc())if(q==1){g.wd();M(h,h)}else{var a;if(D)a=D.ug(q);if(a){A=b.Bb();var c=h+eb,d=x[v(c)];return d.Pb(b.ac(e,X,c,d,a,A),g)}else(C||!pb(z.k())||!pb(z.k()+eb))&&Ob(eb)}};g.jc=function(){M(h,h,d)};g.wd=function(){r&&r.of();r&&r.nf();g.kd();i&&i.jf();i=e;L()};g.Zf=function(){b.vb(w)};g.kd=function(){b.Mb(w)};function T(a,i,c){if(b.v(a,ac))return;if(c){if(!t){t=a;F=Qb(d);b.yc(F,b.yc(t));b.yc(t,e);b.Ab(F,t)}b.v(a,"data-events",b.Fc(a));b.v(a,"data-display",b.qb(a));b.tg(a,b.Q(a,"data-to"));b.hg(a,b.Q(a,"data-bf"));c>1&&b.Wb(a,b.v(a,"data-ts"));b.Wf(a,b.q(a,"data-p"));b.Xf(a,b.Q(a,"po"));if(a.tagName=="IMG"){E.push(a);if(!b.v(a,"src")){R=d;b.vb(a)}}var f=b.Ne(a);if(f){var g=new Image;b.v(g,"src",f);E.push(g)}c&&b.M(a,(b.M(a)||0)+1)}var h=b.Cb(a);b.a(h,function(d){if(c<3&&!n)if(b.Q(d,"u")=="image"){n=d;n.border=0;b.L(n,gb);b.L(a,gb);b.ub(n,"maxWidth","10000px");b.W(F,n)}T(d,i,c+1)})}g.Nc=function(c,b){var a=J-b;vc(P,a)};g.Sb=h;T(w,d,0);B=b.q(t,"data-fillmode",m.hf);var O=b.dg(t,"thumb",d);if(O){b.mb(O);b.vb(O)}b.Mb(w);K=b.mb(U);b.M(K,1e3);g.i(w,"click",ab);L(d);g.jd=n;g.md=w;P=w;g.i(a,203,M);g.i(a,28,hb);g.i(a,24,fb);g.s=function(){b.s(ib,y,i)}}function Vc(F,h,q,r){var c=this,E=b.Ib(c,o),i=0,t=0,g,m,f,e,n,w,v,y=x[h];l.call(c,0,0);function A(){c.Vc()}function C(a){v=a;c.I();c.Vc()}function z(){}c.Vc=function(){if(!B&&!mb&&!v&&u==h&&!c.Zc()){var k=c.k();if(!k)if(g&&!n){n=d;c.ud(d);a.j(j.gf,h,t,i,t,g,e)}a.j(j.Pd,h,k,i,m,f,e);if(!Db()){var l;if(k==e)s&&b.fb(y.kf,20);else{if(k==f)l=e;else if(!k)l=f;else l=c.od();(k!=f||!Bc())&&c.hc(l,A)}}}};c.rf=function(){f==e&&f==c.k()&&c.H(m)};c.jf=function(){D&&D.Sb==h&&D.tb();var b=c.k();b<e&&a.j(j.Pd,h,-b-1,i,m,f,e)};c.ud=function(a){q&&b.Tb(S,a&&q.vc.Ig?"":"hidden")};c.Nc=function(c,b){if(n&&b>=g){n=k;y.kd();D.tb();a.j(j.Uf,h,g,i,t,g,e)}a.j(j.ef,h,b,i,m,f,e)};c.Tf=function(a){if(a&&!w){w=a;a.Tc($JssorPlayer$.se,C)}};c.i(r,p.Bc,z);q&&c.Oc(q);g=c.hb();c.Oc(r);m=g+r.Yb;e=c.hb();f=s?g+r.Cc:e;c.s=function(){E.s();c.I()}}function ec(){Zb=mb;yc=y.od();ab=z.k();tb=dd(ab)}function Fc(){ec();if(B||Db()){y.I();a.j(j.qf)}}function Dc(f){if(Cb()){var b=z.k(),a=tb,e=0;if(f&&c.rb(O)>=m.zd){a=b;e=xb}a=c.ib(a);a=vb(a+e,.5);var d=c.rb(a-b);if(d<1&&m.ge!=g.pb)d=c.n(d,.5);if((!db||!f)&&Zb)y.hc(yc);else if(b==a)hc.jc();else y.Kc(b,a,d*Ab)}}function wc(a){!b.kb(b.Kb(a),f,n.Yd)&&b.sc(a)}function oc(b){zb=k;B=d;Fc();if(!Zb)A=0;a.j(j.df,v(ab),ab,b)}function Tc(a){tc(a,1)}function tc(c,d){O=0;wb=0;xb=0;Ec=fc;if(d){var h=c.touches[0];yb={x:h.clientX,y:h.clientY}}else yb=b.Lc(c);var e=b.Kb(c),g=b.kb(e,"1",Ac);if((!g||g===t)&&!W&&(!d||c.touches.length==1)){jb=b.kb(e,f,n.Yd)||!ib||!Uc();a.i(i,d?"touchmove":"mousemove",Sb);zb=!jb&&b.kb(e,f,n.xe);!zb&&!jb&&oc(c,d)}}function Sb(a){var e,f;a=b.Ag(a);if(a.type!="mousemove")if(a.touches.length==1){f=a.touches[0];e={x:f.clientX,y:f.clientY}}else fb();else e=b.Lc(a);if(e){var i=e.x-yb.x,j=e.y-yb.y,g=c.rb(i),h=c.rb(j);if(A||g>1.5||h>1.5)if(zb)oc(a,f);else{if(c.jb(tb)!=tb)A=A||R&W;if((i||j)&&!A){if(W==3)if(h>g)A=2;else A=1;else A=W;if(Nb&&A==1&&h>g*2.4)jb=d}var l=i,k=kb;if(A==2){l=j;k=lb}(O-wb)*nb<-1.5&&(xb=0);(O-wb)*nb>1.5&&(xb=-1);wb=O;O=l;Hc=tb-O*nb/k/Ec*m.bf;if(O&&A&&!jb){b.sc(a);y.Hg(d);y.Dg(Hc)}}}}function fb(){Qc();a.Ob(i,"mousemove",Sb);a.Ob(i,"touchmove",Sb);db=O;if(B){db&&s&8&&(s=0);y.I();B=k;var b=z.k();a.j(j.af,v(b),b,v(ab),ab);X&12&&ec();Dc(d)}}function ed(a){var c=b.Kb(a),e=b.kb(c,"1",ac);if(t===e)if(db){b.bg(a);var d=b.kb(c,f,"data-jssor-button","A");d&&b.sc(a)}else s&4&&(s=0)}a.Qb=function(a){if(a==f)return s;if(a!=s){s=a;s&&x[u]&&x[u].jc()}};a.Gb=function(){return K};a.Fb=function(){return P};a.uc=function(c,a,d){b.R(t,c);b.S(t,a);zc=c/K;pc=a/P;b.a(Ic,function(a){a.uc(zc,pc,d)});if(!Rb){b.Ab(S,w);b.Z(S,0);b.X(S,0)}Rb=c};a.ee=function(){a.Qb(s||1)};function Sc(){Ub.qd&&b.ub(w,Ub.qd,([e,"pan-y","pan-x","auto"])[ib]||"");a.i(t,"click",ed,d);a.i(t,"mouseleave",cd);a.i(t,"mouseenter",bd);a.i(t,"mousedown",tc);a.i(t,"touchstart",Tc);a.i(t,"dragstart",wc);a.i(t,"selectstart",wc);a.i(h,"mouseup",fb);a.i(i,"mouseup",fb);a.i(i,"touchend",fb);a.i(i,"touchcancel",fb);a.i(h,"blur",fb);m.cc&&a.i(i,"keydown",function(c){var a=b.id(c);if(a==37||a==39){s&8&&(s=0);uc(m.cc*(a-38)*nb,d)}})}function jc(g){xc.Ge();E=[];x=[];var h=b.Cb(w),k=b.pd(["DIV","A","LI"]);b.a(h,function(a){var c=a;if(k[a.tagName.toUpperCase()]&&!b.Q(a,"u")&&b.qb(a)!="none"){var c=Qb(d);b.L(a,gb);b.Ab(c,a);b.W(c,a);b.Wb(c,"flat");b.Wb(a,"preserve-3d");b.vb(c);E.push(c)}b.M(c,(b.M(c)||0)+1)});q=E.length;if(q){var a=R&1?Fb:Eb;Jc();G=m.zf;if(G==f)G=(a-F+L)/2;hb=a/F;J=c.p(q,m.C||q,c.ib(hb));C=J<q?m.bd:0;if(q*F-L<=a){hb=q-L/F;G=(a-F+L)/2;Yb=(a-F*q+L)/2}if(Gb){Kb=Gb.nb;ic=!G&&J==1&&q>1&&Kb&&(!b.cd()||b.Pc()>=9)}if(!(C&1)){bb=G/F;if(bb>q-1){bb=q-1;G=bb*F}N=bb;Q=N+q-hb-L/F}ib=(J>1||G?R:-1)&m.Hc;if(ic)D=new Kb(Ib,I,H,Gb,Nb,Gc);for(var e=0;e<E.length;e++){var i=E[e],j=new Wc(i,e);x.push(j)}ob=new Xc;z=new Yc;y=new Oc(z,ob);Sc()}b.a(Y,function(a){a.oc(q,x);g&&a.Tc(r.Ee,uc)})}a.G=function(c,h){a.V=t=b.Xc(c);K=b.R(t);P=b.S(t);m=b.ab({hf:0,pf:1,cc:1,Gc:0,Qb:0,bd:1,hd:d,fd:d,xf:1,be:3e3,Dd:1,Zd:500,ge:g.vd,zd:20,bf:1,sd:0,wf:1,Ed:1,Hc:1},h);m.hd=m.hd&&b.zg();if(m.Lb!=f)m.be=m.Lb;if(m.vf!=f)m.C=m.vf;if(m.uf!=f)m.zf=m.uf;s=m.Qb&63;!m.wf;eb=m.xf;X=m.Dd;X&=Nb?10:5;gc=m.be;Ab=m.Zd;R=m.Ed&3;rb=b.mg(b.v(t,"dir"))=="rtl";Bb=rb&&(R==1||m.Hc&1);nb=Bb?-1:1;Gb=m.Xe;cb=b.ab({nb:p},m.Kg);sb=m.Lg;Z=m.Mg;M=m.Sg;var e=b.Cb(t);b.a(e,function(a,d){var c=b.Q(a,"u");if(c=="loading")U=a;else{if(c=="slides"){w=a;b.ub(w,"margin",0);b.ub(w,"padding",0);b.Wb(w,"flat")}if(c=="navigator")Tb=a;if(c=="arrowleft")Xb=a;if(c=="arrowright")Wb=a;if(c=="thumbnavigator")Hb=a;if(a.tagName!="STYLE"&&a.tagName!="SCRIPT")Ic[c||d]=new Nc(a,c=="slides",b.pd(["slides","thumbnavigator"])[c])}});U&&b.Ic(U);U=U||b.wc(i);Fb=b.R(w);Eb=b.S(w);I=m.Fe||Fb;H=m.oe||Eb;gb={A:I,B:H,f:0,g:0,Kd:"block",Rb:"absolute"};L=m.sd;kb=I+L;lb=H+L;F=R&1?kb:lb;Ib=new Lc;b.v(t,ac,"1");b.M(w,b.M(w)||0);b.xb(w,"absolute");S=b.mb(w,d);b.ub(S,"pointerEvents","none");b.Ab(S,w);b.W(S,Ib.V);b.Tb(w,"hidden");if(Tb&&sb){kc=new sb.nb(Tb,sb,K,P);Y.push(kc)}if(Z&&Xb&&Wb){Z.bd=m.bd;mc=new Z.nb(Xb,Wb,Z,a);Y.push(mc)}if(Hb&&M){M.Gc=m.Gc;M.cc=M.cc||0;bc=new M.nb(Hb,M,U);!M.Jg&&b.v(Hb,Ac,"1");Y.push(bc)}jc(d);a.uc(K,P);Mb();qb(v(m.Gc));b.ub(t,"visibility","visible")};a.s=function(){s=0;b.s(x,Y,xc);b.fe(t)};b.G(a)};j.mf=21;j.df=22;j.af=23;j.xg=24;j.vg=25;j.lf=26;j.Fg=27;j.qf=28;j.Vf=31;j.ag=32;j.yg=202;j.cg=203;j.gf=206;j.Uf=207;j.ef=208;j.Pd=209;jssor_1_slider_init=function(){var a=[{Dc:400,fb:40,C:16,xd:s.Ce,z:2,rd:260}],b={Qb:1,Xe:{nb:t,fc:a,Le:1}};new j("jssor_1",b)}}(window,document,Math,null,true,false)