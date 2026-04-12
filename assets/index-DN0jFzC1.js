const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/raw-CYI6PcUr.js","assets/basedecoder-Dx75wktK.js","assets/lzw-CWcLLbBI.js","assets/jpeg-DY6pp3Km.js","assets/deflate-Dqeyi4NT.js","assets/pako.esm-Cram60i4.js","assets/packbits-Cp0FZ9Sj.js","assets/lerc-D_CINgSN.js","assets/zstd-C_thhmOF.js","assets/webimage-Deq5AgEy.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Xh="183",W0=0,Qd=1,X0=2,ac=1,Y0=2,go=3,rr=0,Vn=1,Ii=2,Er=0,ya=1,df=2,ep=3,tp=4,q0=5,Ts=100,K0=101,j0=102,$0=103,Z0=104,J0=200,Q0=201,ex=202,tx=203,pf=204,mf=205,nx=206,ix=207,rx=208,sx=209,ax=210,ox=211,lx=212,cx=213,ux=214,gf=0,_f=1,xf=2,Pa=3,vf=4,yf=5,Mf=6,Sf=7,Yh=0,fx=1,hx=2,tr=0,hg=1,dg=2,pg=3,qh=4,mg=5,gg=6,_g=7,np="attached",dx="detached",xg=300,Os=301,Ia=302,ou=303,lu=304,Kc=306,Fs=1e3,Zi=1001,Ac=1002,tn=1003,vg=1004,_o=1005,nn=1006,oc=1007,Mr=1008,ai=1009,yg=1010,Mg=1011,Xo=1012,Kh=1013,sr=1014,yi=1015,ar=1016,jh=1017,$h=1018,Yo=1020,Sg=35902,Tg=35899,bg=1021,Eg=1022,Mi=1023,Cr=1026,Es=1027,Zh=1028,Jh=1029,Da=1030,Qh=1031,ed=1033,lc=33776,cc=33777,uc=33778,fc=33779,Tf=35840,bf=35841,Ef=35842,wf=35843,Af=36196,Rf=37492,Cf=37496,Pf=37488,If=37489,Df=37490,Lf=37491,Nf=37808,Uf=37809,Of=37810,Ff=37811,Bf=37812,kf=37813,zf=37814,Vf=37815,Gf=37816,Hf=37817,Wf=37818,Xf=37819,Yf=37820,qf=37821,Kf=36492,jf=36494,$f=36495,Zf=36283,Jf=36284,Qf=36285,eh=36286,qo=2300,Ko=2301,cu=2302,ip=2303,rp=2400,sp=2401,ap=2402,px=2500,mx=0,wg=1,th=2,gx=3200,td=0,_x=1,Kr="",fn="srgb",Gn="srgb-linear",Rc="linear",St="srgb",qs=7680,op=519,xx=512,vx=513,yx=514,nd=515,Mx=516,Sx=517,id=518,Tx=519,nh=35044,lp="300 es",Ji=2e3,jo=2001;function bx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ex(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function $o(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wx(){const r=$o("canvas");return r.style.display="block",r}const cp={};function Cc(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ag(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Fe(...r){r=Ag(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Xe(...r){r=Ag(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Pc(...r){const e=r.join(" ");e in cp||(cp[e]=!0,Fe(...r))}function Ax(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Rx={[gf]:_f,[xf]:Mf,[vf]:Sf,[Pa]:yf,[_f]:gf,[Mf]:xf,[Sf]:vf,[yf]:Pa};class qa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let up=1234567;const Co=Math.PI/180,La=180/Math.PI;function Ui(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function rd(r,e){return(r%e+e)%e}function Cx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Px(r,e,t){return r!==e?(t-r)/(e-r):0}function Po(r,e,t){return(1-t)*r+t*e}function Ix(r,e,t,n){return Po(r,e,1-Math.exp(-t*n))}function Dx(r,e=1){return e-Math.abs(rd(r,e*2)-e)}function Lx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Nx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ux(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ox(r,e){return r+Math.random()*(e-r)}function Fx(r){return r*(.5-Math.random())}function Bx(r){r!==void 0&&(up=r);let e=up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kx(r){return r*Co}function zx(r){return r*La}function Vx(r){return(r&r-1)===0&&r!==0}function Gx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Hx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wx(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*f,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*p,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*p,o*c);break;case"ZYZ":r.set(l*p,l*d,o*u,o*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Di(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Xx={DEG2RAD:Co,RAD2DEG:La,generateUUID:Ui,clamp:ft,euclideanModulo:rd,mapLinear:Cx,inverseLerp:Px,lerp:Po,damp:Ix,pingpong:Dx,smoothstep:Lx,smootherstep:Nx,randInt:Ux,randFloat:Ox,randFloatSpread:Fx,seededRandom:Bx,degToRad:kx,radToDeg:zx,isPowerOfTwo:Vx,ceilPowerOfTwo:Gx,floorPowerOfTwo:Hx,setQuaternionFromProperEuler:Wx,normalize:Tt,denormalize:Di};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(f!==_||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*_;m<0&&(h=-h,d=-d,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);g=Math.sin(g*x)/M,o=Math.sin(o*x)/M,l=l*g+h*o,c=c*g+d*o,u=u*g+p*o,f=f*g+_*o}else{l=l*g+h*o,c=c*g+d*o,u=u*g+p*o,f=f*g+_*o;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-o*d,e[t+2]=c*p+u*d+o*h-l*f,e[t+3]=u*p-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new G,fp=new Dr;class nt{constructor(e,t,n,i,s,a,o,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],M=i[4],y=i[7],b=i[2],E=i[5],A=i[8];return s[0]=a*_+o*x+l*b,s[3]=a*m+o*M+l*E,s[6]=a*g+o*y+l*A,s[1]=c*_+u*x+f*b,s[4]=c*m+u*M+f*E,s[7]=c*g+u*y+f*A,s[2]=h*_+d*x+p*b,s[5]=h*m+d*M+p*E,s[8]=h*g+d*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,p=t*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fu.makeScale(e,t)),this}rotate(e){return this.premultiply(fu.makeRotation(-e)),this}translate(e,t){return this.premultiply(fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fu=new nt,hp=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dp=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){const r={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(i.r=wr(i.r),i.g=wr(i.g),i.b=wr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(i.r=Ma(i.r),i.g=Ma(i.g),i.b=Ma(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kr?Rc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Pc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Pc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Gn]:{primaries:e,whitePoint:n,transfer:Rc,toXYZ:hp,fromXYZ:dp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:St,toXYZ:hp,fromXYZ:dp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),r}const ht=Yx();function wr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ma(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ks;class qx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ks===void 0&&(Ks=$o("canvas")),Ks.width=e.width,Ks.height=e.height;const i=Ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$o("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=wr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kx=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(hu(i[a].image)):s.push(hu(i[a]))}else s=hu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function hu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let jx=0;const du=new G;class hn extends qa{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Zi,i=Zi,s=nn,a=Mr,o=Mi,l=ai,c=hn.DEFAULT_ANISOTROPY,u=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Ui(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(du).x}get height(){return this.source.getSize(du).y}get depth(){return this.source.getSize(du).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=xg;hn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,i=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(d+1)/2,b=(g+1)/2,E=(u+h)/4,A=(f+_)/4,v=(p+m)/4;return M>y&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=A/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=v/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $x extends qa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new hn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new sd(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends $x{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rg extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zx extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,p,_,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,p,_,m)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),a=1/js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,p=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,p=o*u,_=o*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=p*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jx,e,Qx)}lookAt(e,t,n){const i=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Fr.crossVectors(n,Qn),Fr.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Fr.crossVectors(n,Qn)),Fr.normalize(),_l.crossVectors(Qn,Fr),i[0]=Fr.x,i[4]=_l.x,i[8]=Qn.x,i[1]=Fr.y,i[5]=_l.y,i[9]=Qn.y,i[2]=Fr.z,i[6]=_l.z,i[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],M=n[7],y=n[11],b=n[15],E=i[0],A=i[4],v=i[8],T=i[12],D=i[1],C=i[5],I=i[9],k=i[13],V=i[2],z=i[6],U=i[10],F=i[14],J=i[3],j=i[7],P=i[11],ae=i[15];return s[0]=a*E+o*D+l*V+c*J,s[4]=a*A+o*C+l*z+c*j,s[8]=a*v+o*I+l*U+c*P,s[12]=a*T+o*k+l*F+c*ae,s[1]=u*E+f*D+h*V+d*J,s[5]=u*A+f*C+h*z+d*j,s[9]=u*v+f*I+h*U+d*P,s[13]=u*T+f*k+h*F+d*ae,s[2]=p*E+_*D+m*V+g*J,s[6]=p*A+_*C+m*z+g*j,s[10]=p*v+_*I+m*U+g*P,s[14]=p*T+_*k+m*F+g*ae,s[3]=x*E+M*D+y*V+b*J,s[7]=x*A+M*C+y*z+b*j,s[11]=x*v+M*I+y*U+b*P,s[15]=x*T+M*k+y*F+b*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],x=l*d-c*h,M=o*d-c*f,y=o*h-l*f,b=a*d-c*u,E=a*h-l*u,A=a*f-o*u;return t*(_*x-m*M+g*y)-n*(p*x-m*b+g*E)+i*(p*M-_*b+g*A)-s*(p*y-_*E+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=t*o-n*a,M=t*l-i*a,y=t*c-s*a,b=n*l-i*o,E=n*c-s*o,A=i*c-s*l,v=u*_-f*p,T=u*m-h*p,D=u*g-d*p,C=f*m-h*_,I=f*g-d*_,k=h*g-d*m,V=x*k-M*I+y*C+b*D-E*T+A*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/V;return e[0]=(o*k-l*I+c*C)*z,e[1]=(i*I-n*k-s*C)*z,e[2]=(_*A-m*E+g*b)*z,e[3]=(h*E-f*A-d*b)*z,e[4]=(l*D-a*k-c*T)*z,e[5]=(t*k-i*D+s*T)*z,e[6]=(m*y-p*A-g*M)*z,e[7]=(u*A-h*y+d*M)*z,e[8]=(a*I-o*D+c*v)*z,e[9]=(n*D-t*I-s*v)*z,e[10]=(p*E-_*y+g*x)*z,e[11]=(f*y-u*E-d*x)*z,e[12]=(o*T-a*C-l*v)*z,e[13]=(t*C-n*T+i*v)*z,e[14]=(_*M-p*b-m*x)*z,e[15]=(u*b-f*M+h*x)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,p=s*f,_=a*u,m=a*f,g=o*f,x=l*c,M=l*u,y=l*f,b=n.x,E=n.y,A=n.z;return i[0]=(1-(_+g))*b,i[1]=(d+y)*b,i[2]=(p-M)*b,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(h+g))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(p+M)*A,i[9]=(m-x)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=js.set(i[0],i[1],i[2]).length();const o=js.set(i[4],i[5],i[6]).length(),l=js.set(i[8],i[9],i[10]).length();s<0&&(a=-a),wi.copy(this);const c=1/a,u=1/o,f=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=f,wi.elements[9]*=f,wi.elements[10]*=f,t.setFromRotationMatrix(wi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ji,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===Ji)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===jo)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ji,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===Ji)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===jo)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const js=new G,wi=new Je,Jx=new G(0,0,0),Qx=new G(1,1,1),Fr=new G,_l=new G,Qn=new G,pp=new Je,mp=new Dr;class Bi{constructor(e=0,t=0,n=0,i=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mp.setFromEuler(this),this.setFromQuaternion(mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ev=0;const gp=new G,$s=new Dr,fr=new Je,xl=new G,no=new G,tv=new G,nv=new Dr,_p=new G(1,0,0),xp=new G(0,1,0),vp=new G(0,0,1),yp={type:"added"},iv={type:"removed"},Zs={type:"childadded",child:null},pu={type:"childremoved",child:null};class Ot extends qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new G,t=new Bi,n=new Dr,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new nt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(_p,e)}rotateY(e){return this.rotateOnAxis(xp,e)}rotateZ(e){return this.rotateOnAxis(vp,e)}translateOnAxis(e,t){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_p,e)}translateY(e){return this.translateOnAxis(xp,e)}translateZ(e){return this.translateOnAxis(vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xl.copy(e):xl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(no,xl,this.up):fr.lookAt(xl,no,this.up),this.quaternion.setFromRotationMatrix(fr),i&&(fr.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(fr),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yp),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iv),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yp),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,tv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,nv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ot.DEFAULT_UP=new G(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ws extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ws;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},vl={h:0,s:0,l:0};function gu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=rd(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=gu(a,s,e+1/3),this.g=gu(a,s,e),this.b=gu(a,s,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=Pg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ht.workingToColorSpace(Tn.copy(this),e),Math.round(ft(Tn.r*255,0,255))*65536+Math.round(ft(Tn.g*255,0,255))*256+Math.round(ft(Tn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(Tn.copy(this),t);const n=Tn.r,i=Tn.g,s=Tn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=fn){ht.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,i=Tn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(vl);const n=Po(Br.h,vl.h,t),i=Po(Br.s,vl.s,t),s=Po(Br.l,vl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Ge;Ge.NAMES=Pg;class sv extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new G,hr=new G,_u=new G,dr=new G,Js=new G,Qs=new G,Mp=new G,xu=new G,vu=new G,yu=new G,Mu=new Pt,Su=new Pt,Tu=new Pt;class Li{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ai.subVectors(e,t),i.cross(Ai);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ai.subVectors(i,t),hr.subVectors(n,t),_u.subVectors(e,t);const a=Ai.dot(Ai),o=Ai.dot(hr),l=Ai.dot(_u),c=hr.dot(hr),u=hr.dot(_u),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dr.x),l.addScaledVector(a,dr.y),l.addScaledVector(o,dr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Mu.setScalar(0),Su.setScalar(0),Tu.setScalar(0),Mu.fromBufferAttribute(e,t),Su.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Mu,s.x),a.addScaledVector(Su,s.y),a.addScaledVector(Tu,s.z),a}static isFrontFacing(e,t,n,i){return Ai.subVectors(n,t),hr.subVectors(e,t),Ai.cross(hr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Ai.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Li.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Js.subVectors(i,n),Qs.subVectors(s,n),xu.subVectors(e,n);const l=Js.dot(xu),c=Qs.dot(xu);if(l<=0&&c<=0)return t.copy(n);vu.subVectors(e,i);const u=Js.dot(vu),f=Qs.dot(vu);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Js,a);yu.subVectors(e,s);const d=Js.dot(yu),p=Qs.dot(yu);if(p>=0&&d<=p)return t.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Qs,o);const m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return Mp.subVectors(s,i),o=(f-u)/(f-u+(d-p)),t.copy(i).addScaledVector(Mp,o);const g=1/(m+_+h);return a=_*g,o=h*g,t.copy(n).addScaledVector(Js,a).addScaledVector(Qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Lr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(s,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yl.copy(n.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Ml.subVectors(this.max,io),ea.subVectors(e.a,io),ta.subVectors(e.b,io),na.subVectors(e.c,io),kr.subVectors(ta,ea),zr.subVectors(na,ta),fs.subVectors(ea,na);let t=[0,-kr.z,kr.y,0,-zr.z,zr.y,0,-fs.z,fs.y,kr.z,0,-kr.x,zr.z,0,-zr.x,fs.z,0,-fs.x,-kr.y,kr.x,0,-zr.y,zr.x,0,-fs.y,fs.x,0];return!bu(t,ea,ta,na,Ml)||(t=[1,0,0,0,1,0,0,0,1],!bu(t,ea,ta,na,Ml))?!1:(Sl.crossVectors(kr,zr),t=[Sl.x,Sl.y,Sl.z],bu(t,ea,ta,na,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new G,new G,new G,new G,new G,new G,new G,new G],Ri=new G,yl=new Lr,ea=new G,ta=new G,na=new G,kr=new G,zr=new G,fs=new G,io=new G,Ml=new G,Sl=new G,hs=new G;function bu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){hs.fromArray(r,s);const o=i.x*Math.abs(hs.x)+i.y*Math.abs(hs.y)+i.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),u=n.dot(hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qt=new G,Tl=new pt;let av=0;class Pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:av++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nh&&(e.usage=this.usage),e}}class Ig extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dg extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xn extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ov=new Lr,ro=new G,Eu=new G;class lr{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ov.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ro,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Eu)),this.expandByPoint(ro.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lv=0;const mi=new Je,wu=new Ot,ia=new G,ei=new Lr,so=new Lr,ln=new G;class Zn extends qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bx(e)?Dg:Ig)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];so.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(ei.min,so.min),ei.expandByPoint(ln),ln.addVectors(ei.max,so.max),ei.expandByPoint(ln)):(ei.expandByPoint(so.min),ei.expandByPoint(so.max))}ei.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)ln.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ln.fromBufferAttribute(o,c),l&&(ia.fromBufferAttribute(e,c),ln.add(ia)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new G,l[v]=new G;const c=new G,u=new G,f=new G,h=new pt,d=new pt,p=new pt,_=new G,m=new G;function g(v,T,D){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,D),h.fromBufferAttribute(s,v),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,D),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(C),o[v].add(_),o[T].add(_),o[D].add(_),l[v].add(m),l[T].add(m),l[D].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,T=x.length;v<T;++v){const D=x[v],C=D.start,I=D.count;for(let k=C,V=C+I;k<V;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new G,y=new G,b=new G,E=new G;function A(v){b.fromBufferAttribute(i,v),E.copy(b);const T=o[v];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(E,T);const C=y.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,C)}for(let v=0,T=x.length;v<T;++v){const D=x[v],C=D.start,I=D.count;for(let k=C,V=C+I;k<V;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new Pn(h,u,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new G;class ad{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Cc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ad(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Cc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let uv=0;class Fi extends qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ya,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ya&&(n.blending=this.blending),this.side!==rr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pf&&(n.blendSrc=this.blendSrc),this.blendDst!==mf&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mr=new G,Au=new G,bl=new G,Vr=new G,Ru=new G,El=new G,Cu=new G;class jc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Au.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Au);const s=e.distanceTo(t)*.5,a=-this.direction.dot(bl),o=Vr.dot(this.direction),l=-Vr.dot(bl),c=Vr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=s*u,f>=0)if(h>=-p)if(h<=p){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Au).addScaledVector(bl,h),d}intersectSphere(e,t){mr.subVectors(e.center,this.origin);const n=mr.dot(this.direction),i=mr.dot(mr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,n,i,s){Ru.subVectors(t,e),El.subVectors(n,e),Cu.crossVectors(Ru,El);let a=this.direction.dot(Cu),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vr.subVectors(this.origin,e);const l=o*this.direction.dot(El.crossVectors(Vr,El));if(l<0)return null;const c=o*this.direction.dot(Ru.cross(Vr));if(c<0||l+c>a)return null;const u=-o*Vr.dot(Cu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sr extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sp=new Je,ds=new jc,wl=new lr,Tp=new G,Al=new G,Rl=new G,Cl=new G,Pu=new G,Pl=new G,bp=new G,Il=new G;class _n extends Ot{constructor(e=new Zn,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Pu.fromBufferAttribute(f,e),a?Pl.addScaledVector(Pu,u):Pl.addScaledVector(Pu.sub(t),u))}t.add(Pl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(s),ds.copy(e.ray).recast(e.near),!(wl.containsPoint(ds.origin)===!1&&(ds.intersectSphere(wl,Tp)===null||ds.origin.distanceToSquared(Tp)>(e.far-e.near)**2))&&(Sp.copy(s).invert(),ds.copy(e.ray).applyMatrix4(Sp),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=a[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,b=M;y<b;y+=3){const E=o.getX(y),A=o.getX(y+1),v=o.getX(y+2);i=Dl(this,g,e,n,c,u,f,E,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);i=Dl(this,a,e,n,c,u,f,x,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=a[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,b=M;y<b;y+=3){const E=y,A=y+1,v=y+2;i=Dl(this,g,e,n,c,u,f,E,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=m,M=m+1,y=m+2;i=Dl(this,a,e,n,c,u,f,x,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function fv(r,e,t,n,i,s,a,o){let l;if(e.side===Vn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===rr,o),l===null)return null;Il.copy(o),Il.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:r}}function Dl(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Al),r.getVertexPosition(l,Rl),r.getVertexPosition(c,Cl);const u=fv(r,e,t,n,Al,Rl,Cl,bp);if(u){const f=new G;Li.getBarycoord(bp,Al,Rl,Cl,f),i&&(u.uv=Li.getInterpolatedAttribute(i,o,l,c,f,new pt)),s&&(u.uv1=Li.getInterpolatedAttribute(s,o,l,c,f,new pt)),a&&(u.normal=Li.getInterpolatedAttribute(a,o,l,c,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};Li.getNormal(Al,Rl,Cl,h.normal),u.face=h,u.barycoord=f}return u}const Ep=new G,wp=new Pt,Ap=new Pt,hv=new G,Rp=new Je,Ll=new G,Iu=new lr,Cp=new Je,Du=new jc;class dv extends _n{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=np,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ll),this.boundingBox.expandByPoint(Ll)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new lr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ll),this.boundingSphere.expandByPoint(Ll)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Iu.copy(this.boundingSphere),Iu.applyMatrix4(i),e.ray.intersectsSphere(Iu)!==!1&&(Cp.copy(i).invert(),Du.copy(e.ray).applyMatrix4(Cp),!(this.boundingBox!==null&&Du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Du)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===np?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dx?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;wp.fromBufferAttribute(i.attributes.skinIndex,e),Ap.fromBufferAttribute(i.attributes.skinWeight,e),Ep.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Ap.getComponent(s);if(a!==0){const o=wp.getComponent(s);Rp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(hv.copy(Ep).applyMatrix4(Rp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Lg extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class od extends hn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=tn,u=tn,f,h){super(null,a,o,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pp=new Je,pv=new Je;class ld{constructor(e=[],t=[]){this.uuid=Ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:pv;Pp.multiplyMatrices(o,t[s]),Pp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ld(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new od(t,e,e,Mi,yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Fe("Skeleton: No bone found with UUID:",s),a=new Lg),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ih extends Pn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ra=new Je,Ip=new Je,Nl=[],Dp=new Lr,mv=new Je,ao=new _n,oo=new lr;class gv extends _n{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ih(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),Dp.copy(e.boundingBox).applyMatrix4(ra),this.boundingBox.union(Dp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new lr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),oo.copy(e.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ra),Ip.multiplyMatrices(n,ra),ao.matrixWorld=Ip,ao.raycast(e,Nl);for(let a=0,o=Nl.length;a<o;a++){const l=Nl[a];l.instanceId=s,l.object=this,t.push(l)}Nl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ih(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new od(new Float32Array(i*this.count),i,this.count,Zh,yi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Lu=new G,_v=new G,xv=new nt;class Yr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Lu.subVectors(n,t).cross(_v.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xv.getNormalMatrix(e),i=this.coplanarPoint(Lu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new lr,vv=new pt(.5,.5),Ul=new G;class cd{constructor(e=new Yr,t=new Yr,n=new Yr,i=new Yr,s=new Yr,a=new Yr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],x=s[12],M=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-a,d-u,g-p,b-x).normalize(),i[1].setComponents(c+a,d+u,g+p,b+x).normalize(),i[2].setComponents(c+o,d+f,g+_,b+M).normalize(),i[3].setComponents(c-o,d-f,g-_,b-M).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,d-h,g-m,b-y).normalize();else if(i[4].setComponents(c-l,d-h,g-m,b-y).normalize(),t===Ji)i[5].setComponents(c+l,d+h,g+m,b+y).normalize();else if(t===jo)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=vv.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ul.x=i.normal.x>0?e.max.x:e.min.x,Ul.y=i.normal.y>0?e.max.y:e.min.y,Ul.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ng extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ic=new G,Dc=new G,Lp=new Je,lo=new jc,Ol=new lr,Nu=new G,Np=new G;class ud extends Ot{constructor(e=new Zn,t=new Ng){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ic.fromBufferAttribute(t,i-1),Dc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ic.distanceTo(Dc);e.setAttribute("lineDistance",new Xn(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ol.copy(n.boundingSphere),Ol.applyMatrix4(i),Ol.radius+=s,e.ray.intersectsSphere(Ol)===!1)return;Lp.copy(i).invert(),lo.copy(e.ray).applyMatrix4(Lp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){const g=u.getX(_),x=u.getX(_+1),M=Fl(this,e,lo,l,g,x,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(d),g=Fl(this,e,lo,l,_,m,p-1);g&&t.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){const g=Fl(this,e,lo,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Fl(this,e,lo,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fl(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Ic.fromBufferAttribute(o,i),Dc.fromBufferAttribute(o,s),t.distanceSqToSegment(Ic,Dc,Nu,Np)>n)return;Nu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Nu);if(!(c<e.near||c>e.far))return{distance:c,point:Np.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Up=new G,Op=new G;class yv extends ud{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Up.fromBufferAttribute(t,i),Op.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Up.distanceTo(Op);e.setAttribute("lineDistance",new Xn(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mv extends ud{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fd extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fp=new Je,rh=new jc,Bl=new lr,kl=new G;class Ug extends Ot{constructor(e=new Zn,t=new fd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(i),Bl.radius+=s,e.ray.intersectsSphere(Bl)===!1)return;Fp.copy(i).invert(),rh.copy(e.ray).applyMatrix4(Fp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,_=d;p<_;p++){const m=c.getX(p);kl.fromBufferAttribute(f,m),Bp(kl,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=h,_=d;p<_;p++)kl.fromBufferAttribute(f,p),Bp(kl,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bp(r,e,t,n,i,s,a){const o=rh.distanceSqToPoint(r);if(o<t){const l=new G;rh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Og extends hn{constructor(e=[],t=Os,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zo extends hn{constructor(e,t,n=sr,i,s,a,o=tn,l=tn,c,u=Cr,f=1){if(u!==Cr&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sv extends Zo{constructor(e,t=sr,n=Os,i,s,a=tn,o=tn,l,c=Cr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fg extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pl extends Zn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(u,3)),this.setAttribute("uv",new Xn(f,2));function p(_,m,g,x,M,y,b,E,A,v,T){const D=y/A,C=b/v,I=y/2,k=b/2,V=E/2,z=A+1,U=v+1;let F=0,J=0;const j=new G;for(let P=0;P<U;P++){const ae=P*C-k;for(let ue=0;ue<z;ue++){const Ue=ue*D-I;j[_]=Ue*x,j[m]=ae*M,j[g]=V,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[g]=E>0?1:-1,u.push(j.x,j.y,j.z),f.push(ue/A),f.push(1-P/v),F+=1}}for(let P=0;P<v;P++)for(let ae=0;ae<A;ae++){const ue=h+ae+z*P,Ue=h+ae+z*(P+1),He=h+(ae+1)+z*(P+1),je=h+(ae+1)+z*P;l.push(ue,Ue,je),l.push(Ue,He,je),J+=6}o.addGroup(d,J,T),d+=J,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ka extends Zn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const x=g*h-a;for(let M=0;M<c;M++){const y=M*f-s;p.push(y,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const M=x+c*g,y=x+c*(g+1),b=x+1+c*(g+1),E=x+1+c*g;d.push(M,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new Xn(p,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}class $c extends Zn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new G,h=new G,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const x=[],M=g/n;let y=0;g===0&&a===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const E=b/t;f.x=-e*Math.cos(i+E*s)*Math.sin(a+M*o),f.y=e*Math.cos(a+M*o),f.z=e*Math.sin(i+E*s)*Math.sin(a+M*o),p.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(E+y,1-M),x.push(c++)}u.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const M=u[g][x+1],y=u[g][x],b=u[g+1][x],E=u[g+1][x+1];(g!==0||a>0)&&d.push(M,y,E),(g!==n-1||l<Math.PI)&&d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new Xn(p,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Na(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Un(r){const e={};for(let t=0;t<r.length;t++){const n=Na(r[t]);for(const i in n)e[i]=n[i]}return e}function Tv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Bg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const sh={clone:Na,merge:Un};var bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ev=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bv,this.fragmentShader=Ev,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Na(e.uniforms),this.uniformsGroups=Tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wv extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hd extends Fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cr extends hd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Av extends Fi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Yh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rv extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cv extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Pv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function kp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function kg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ja{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Iv extends ja{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rp,endingEnd:rp}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case sp:s=e,o=2*t-n;break;case ap:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sp:a=e,l=2*n-t;break;case ap:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,x=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,M=(-1-d)*m+(1.5+d)*_+.5*p,y=d*m-d*_;for(let b=0;b!==o;++b)s[b]=g*a[u+b]+x*a[c+b]+M*a[l+b]+y*a[f+b];return s}}class Dv extends ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}}class Lv extends ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nv extends ja{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){const _=(n-t)/(i-t),m=1-_;for(let g=0;g!==o;++g)s[g]=a[c+g]*m+a[l+g]*_;return s}const d=o*2,p=e-1;for(let _=0;_!==o;++_){const m=a[c+_],g=a[l+_],x=p*d+_*2,M=h[x],y=h[x+1],b=e*d+_*2,E=f[b],A=f[b+1];let v=(n-t)/(i-t),T,D,C,I,k;for(let V=0;V<8;V++){T=v*v,D=T*v,C=1-v,I=C*C,k=I*C;const U=k*t+3*I*v*M+3*C*T*E+D*i-n;if(Math.abs(U)<1e-10)break;const F=3*I*(M-t)+6*C*v*(E-M)+3*T*(i-E);if(Math.abs(F)<1e-10)break;v=v-U/F,v=Math.max(0,Math.min(1,v))}s[_]=k*m+3*I*v*y+3*C*T*A+D*g}return s}}class zi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zl(t,this.TimeBufferType),this.values=zl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zl(e.times,Array),values:zl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Iv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Nv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case qo:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case cu:t=this.InterpolantFactoryMethodSmooth;break;case ip:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return cu;case this.InterpolantFactoryMethodBezier:return ip}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Ex(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cu,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){const _=t[f+p];if(_!==t[h+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}zi.prototype.ValueTypeName="";zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=Ko;class $a extends zi{constructor(e,t,n){super(e,t,n)}}$a.prototype.ValueTypeName="bool";$a.prototype.ValueBufferType=Array;$a.prototype.DefaultInterpolation=qo;$a.prototype.InterpolantFactoryMethodLinear=void 0;$a.prototype.InterpolantFactoryMethodSmooth=void 0;class zg extends zi{constructor(e,t,n,i){super(e,t,n,i)}}zg.prototype.ValueTypeName="color";class Ua extends zi{constructor(e,t,n,i){super(e,t,n,i)}}Ua.prototype.ValueTypeName="number";class Uv extends ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Dr.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Oa extends zi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Uv(this.times,this.values,this.getValueSize(),e)}}Oa.prototype.ValueTypeName="quaternion";Oa.prototype.InterpolantFactoryMethodSmooth=void 0;class Za extends zi{constructor(e,t,n){super(e,t,n)}}Za.prototype.ValueTypeName="string";Za.prototype.ValueBufferType=Array;Za.prototype.DefaultInterpolation=qo;Za.prototype.InterpolantFactoryMethodLinear=void 0;Za.prototype.InterpolantFactoryMethodSmooth=void 0;class Fa extends zi{constructor(e,t,n,i){super(e,t,n,i)}}Fa.prototype.ValueTypeName="vector";class Ov{constructor(e="",t=-1,n=[],i=px){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Bv(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(zi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Pv(l);l=kp(l,1,u),c=kp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ua(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Fe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Xe("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,p,_){if(d.length!==0){const m=[],g=[];kg(d,m,g,p),m.length!==0&&_.push(new f(h,m,g))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let _=0;_<h[p].morphTargets.length;_++)d[h[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let x=0;x!==h[p].morphTargets.length;++x){const M=h[p];m.push(M.time),g.push(M.morphTarget===_?1:0)}i.push(new Ua(".morphTargetInfluence["+_+"]",m,g))}l=d.length*a}else{const d=".bones["+t[f].name+"]";n(Fa,d+".position",h,"pos",i),n(Oa,d+".quaternion",h,"rot",i),n(Fa,d+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Fv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ua;case"vector":case"vector2":case"vector3":case"vector4":return Fa;case"color":return zg;case"quaternion":return Oa;case"bool":case"boolean":return $a;case"string":return Za}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Bv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fv(r.type);if(r.times===void 0){const t=[],n=[];kg(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Tr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(zp(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!zp(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function zp(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class kv{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zv=new kv;class Ja{constructor(e){this.manager=e!==void 0?e:zv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";const gr={};class Vv extends Error{constructor(e,t){super(e),this.response=t}}class Vg extends Ja{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Tr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(gr[e]!==void 0){gr[e].push({onLoad:t,onProgress:n,onError:i});return}gr[e]=[],gr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=gr[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){f.read().then(({done:M,value:y})=>{if(M)g.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let E=0,A=u.length;E<A;E++){const v=u[E];v.onProgress&&v.onProgress(b)}g.enqueue(y),x()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Vv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Tr.add(`file:${e}`,c);const u=gr[e];delete gr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=gr[e];if(u===void 0)throw this.manager.itemError(e),c;delete gr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const sa=new WeakMap;class Gv extends Ja{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Tr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=sa.get(a);f===void 0&&(f=[],sa.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=$o("img");function l(){u(),t&&t(this);const f=sa.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}sa.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),Tr.remove(`image:${e}`);const h=sa.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(f)}sa.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Tr.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class dd extends Ja{constructor(e){super(e)}load(e,t,n,i){const s=new hn,a=new Gv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Zc extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Uu=new Je,Vp=new G,Gp=new G;class pd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vp),Gp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gp),t.updateMatrixWorld(),Uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===jo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vl=new G,Gl=new Dr,Gi=new G;class Gg extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Gl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Gl,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vl,Gl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Gl,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new G,Hp=new pt,Wp=new pt;class wn extends Gg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,Hp,Wp),t.subVectors(Wp,Hp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hv extends pd{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=La*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wv extends Zc{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Hv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Xv extends pd{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class Hg extends Zc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Jc extends Gg{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yv extends pd{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wg extends Zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Yv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qv extends Zc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Io{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ou=new WeakMap;class Kv extends Ja{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Tr.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(Ou.has(a)===!0)i&&i(Ou.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Tr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ou.set(l,c),Tr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Tr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const aa=-90,oa=1;class jv extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new wn(aa,oa,e,t);i.layers=this.layers,this.add(i);const s=new wn(aa,oa,e,t);s.layers=this.layers,this.add(s);const a=new wn(aa,oa,e,t);a.layers=this.layers,this.add(a);const o=new wn(aa,oa,e,t);o.layers=this.layers,this.add(o);const l=new wn(aa,oa,e,t);l.layers=this.layers,this.add(l);const c=new wn(aa,oa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class $v extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const md="\\[\\]\\.:\\/",Zv=new RegExp("["+md+"]","g"),gd="[^"+md+"]",Jv="[^"+md.replace("\\.","")+"]",Qv=/((?:WC+[\/:])*)/.source.replace("WC",gd),ey=/(WCOD+)?/.source.replace("WCOD",Jv),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gd),ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gd),iy=new RegExp("^"+Qv+ey+ty+ny+"$"),ry=["material","materials","bones","map"];class sy{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zv,"")}static parseTrackName(e){const t=iy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ry.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=sy;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Xp(r,e,t,n){const i=ay(n);switch(t){case bg:return r*e;case Zh:return r*e/i.components*i.byteLength;case Jh:return r*e/i.components*i.byteLength;case Da:return r*e*2/i.components*i.byteLength;case Qh:return r*e*2/i.components*i.byteLength;case Eg:return r*e*3/i.components*i.byteLength;case Mi:return r*e*4/i.components*i.byteLength;case ed:return r*e*4/i.components*i.byteLength;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uc:case fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bf:case wf:return Math.max(r,16)*Math.max(e,8)/4;case Tf:case Ef:return Math.max(r,8)*Math.max(e,8)/2;case Af:case Rf:case Pf:case If:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cf:case Df:case Lf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Of:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kf:case jf:case $f:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zf:case Jf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qf:case eh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ay(r){switch(r){case ai:case yg:return{byteLength:1,components:1};case Xo:case Mg:case ar:return{byteLength:2,components:1};case jh:case $h:return{byteLength:2,components:4};case sr:case Kh:case yi:return{byteLength:4,components:1};case Sg:case Tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);function Xg(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function oy(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,My=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Iy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ly=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,FM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:uy,alphamap_pars_fragment:fy,alphatest_fragment:hy,alphatest_pars_fragment:dy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:gy,batching_vertex:_y,begin_vertex:xy,beginnormal_vertex:vy,bsdfs:yy,iridescence_fragment:My,bumpmap_pars_fragment:Sy,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:wy,color_fragment:Ay,color_pars_fragment:Ry,color_pars_vertex:Cy,color_vertex:Py,common:Iy,cube_uv_reflection_fragment:Dy,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Ny,displacementmap_vertex:Uy,emissivemap_fragment:Oy,emissivemap_pars_fragment:Fy,colorspace_fragment:By,colorspace_pars_fragment:ky,envmap_fragment:zy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Gy,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:eM,envmap_vertex:Wy,fog_vertex:Xy,fog_pars_vertex:Yy,fog_fragment:qy,fog_pars_fragment:Ky,gradientmap_pars_fragment:jy,lightmap_pars_fragment:$y,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Jy,lights_pars_begin:Qy,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:rM,lights_physical_fragment:sM,lights_physical_pars_fragment:aM,lights_fragment_begin:oM,lights_fragment_maps:lM,lights_fragment_end:cM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:hM,logdepthbuf_vertex:dM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:_M,metalnessmap_fragment:xM,metalnessmap_pars_fragment:vM,morphinstance_vertex:yM,morphcolor_vertex:MM,morphnormal_vertex:SM,morphtarget_pars_vertex:TM,morphtarget_vertex:bM,normal_fragment_begin:EM,normal_fragment_maps:wM,normal_pars_fragment:AM,normal_pars_vertex:RM,normal_vertex:CM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:DM,clearcoat_pars_fragment:LM,iridescence_pars_fragment:NM,opaque_fragment:UM,packing:OM,premultiplied_alpha_fragment:FM,project_vertex:BM,dithering_fragment:kM,dithering_pars_fragment:zM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:GM,shadowmap_pars_fragment:HM,shadowmap_pars_vertex:WM,shadowmap_vertex:XM,shadowmask_pars_fragment:YM,skinbase_vertex:qM,skinning_pars_vertex:KM,skinning_vertex:jM,skinnormal_vertex:$M,specularmap_fragment:ZM,specularmap_pars_fragment:JM,tonemapping_fragment:QM,tonemapping_pars_fragment:eS,transmission_fragment:tS,transmission_pars_fragment:nS,uv_pars_fragment:iS,uv_pars_vertex:rS,uv_vertex:sS,worldpos_vertex:aS,background_vert:oS,background_frag:lS,backgroundCube_vert:cS,backgroundCube_frag:uS,cube_vert:fS,cube_frag:hS,depth_vert:dS,depth_frag:pS,distance_vert:mS,distance_frag:gS,equirect_vert:_S,equirect_frag:xS,linedashed_vert:vS,linedashed_frag:yS,meshbasic_vert:MS,meshbasic_frag:SS,meshlambert_vert:TS,meshlambert_frag:bS,meshmatcap_vert:ES,meshmatcap_frag:wS,meshnormal_vert:AS,meshnormal_frag:RS,meshphong_vert:CS,meshphong_frag:PS,meshphysical_vert:IS,meshphysical_frag:DS,meshtoon_vert:LS,meshtoon_frag:NS,points_vert:US,points_frag:OS,shadow_vert:FS,shadow_frag:BS,sprite_vert:kS,sprite_frag:zS},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ji={basic:{uniforms:Un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Un([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Un([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Un([ge.points,ge.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Un([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Un([ge.common,ge.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Un([ge.sprite,ge.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Un([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Un([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ji.physical={uniforms:Un([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Hl={r:0,b:0,g:0},ms=new Bi,VS=new Je;function GS(r,e,t,n,i,s){const a=new Ge(0);let o=i===!0?0:1,l,c,u=null,f=0,h=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const y=x.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(x){let M=!1;const y=d(x);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,M){const y=d(M);y&&(y.isCubeTexture||y.mapping===Kc)?(c===void 0&&(c=new _n(new pl(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Na(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ms.copy(M.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(VS.makeRotationFromEuler(ms)),c.material.toneMapped=ht.getTransfer(y.colorSpace)!==St,(u!==y||f!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _n(new Ka(2,2),new ki({name:"BackgroundMaterial",uniforms:Na(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ht.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(Hl,Bg(r)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:_,dispose:g}}function HS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(C,I,k,V,z){let U=!1;const F=f(C,V,k,I);s!==F&&(s=F,c(s.object)),U=d(C,V,k,z),U&&p(C,V,k,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(C,I,k,V),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(C){return r.bindVertexArray(C)}function u(C){return r.deleteVertexArray(C)}function f(C,I,k,V){const z=V.wireframe===!0;let U=n[I.id];U===void 0&&(U={},n[I.id]=U);const F=C.isInstancedMesh===!0?C.id:0;let J=U[F];J===void 0&&(J={},U[F]=J);let j=J[k.id];j===void 0&&(j={},J[k.id]=j);let P=j[z];return P===void 0&&(P=h(l()),j[z]=P),P}function h(C){const I=[],k=[],V=[];for(let z=0;z<t;z++)I[z]=0,k[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:V,object:C,attributes:{},index:null}}function d(C,I,k,V){const z=s.attributes,U=I.attributes;let F=0;const J=k.getAttributes();for(const j in J)if(J[j].location>=0){const ae=z[j];let ue=U[j];if(ue===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ae===void 0||ae.attribute!==ue||ue&&ae.data!==ue.data)return!0;F++}return s.attributesNum!==F||s.index!==V}function p(C,I,k,V){const z={},U=I.attributes;let F=0;const J=k.getAttributes();for(const j in J)if(J[j].location>=0){let ae=U[j];ae===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const ue={};ue.attribute=ae,ae&&ae.data&&(ue.data=ae.data),z[j]=ue,F++}s.attributes=z,s.attributesNum=F,s.index=V}function _(){const C=s.newAttributes;for(let I=0,k=C.length;I<k;I++)C[I]=0}function m(C){g(C,0)}function g(C,I){const k=s.newAttributes,V=s.enabledAttributes,z=s.attributeDivisors;k[C]=1,V[C]===0&&(r.enableVertexAttribArray(C),V[C]=1),z[C]!==I&&(r.vertexAttribDivisor(C,I),z[C]=I)}function x(){const C=s.newAttributes,I=s.enabledAttributes;for(let k=0,V=I.length;k<V;k++)I[k]!==C[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function M(C,I,k,V,z,U,F){F===!0?r.vertexAttribIPointer(C,I,k,z,U):r.vertexAttribPointer(C,I,k,V,z,U)}function y(C,I,k,V){_();const z=V.attributes,U=k.getAttributes(),F=I.defaultAttributeValues;for(const J in U){const j=U[J];if(j.location>=0){let P=z[J];if(P===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),P!==void 0){const ae=P.normalized,ue=P.itemSize,Ue=e.get(P);if(Ue===void 0)continue;const He=Ue.buffer,je=Ue.type,$=Ue.bytesPerElement,te=je===r.INT||je===r.UNSIGNED_INT||P.gpuType===Kh;if(P.isInterleavedBufferAttribute){const ie=P.data,Ie=ie.stride,Pe=P.offset;if(ie.isInstancedInterleavedBuffer){for(let we=0;we<j.locationSize;we++)g(j.location+we,ie.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<j.locationSize;we++)m(j.location+we);r.bindBuffer(r.ARRAY_BUFFER,He);for(let we=0;we<j.locationSize;we++)M(j.location+we,ue/j.locationSize,je,ae,Ie*$,(Pe+ue/j.locationSize*we)*$,te)}else{if(P.isInstancedBufferAttribute){for(let ie=0;ie<j.locationSize;ie++)g(j.location+ie,P.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ie=0;ie<j.locationSize;ie++)m(j.location+ie);r.bindBuffer(r.ARRAY_BUFFER,He);for(let ie=0;ie<j.locationSize;ie++)M(j.location+ie,ue/j.locationSize,je,ae,ue*$,ue/j.locationSize*ie*$,te)}}else if(F!==void 0){const ae=F[J];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(j.location,ae);break;case 3:r.vertexAttrib3fv(j.location,ae);break;case 4:r.vertexAttrib4fv(j.location,ae);break;default:r.vertexAttrib1fv(j.location,ae)}}}}x()}function b(){T();for(const C in n){const I=n[C];for(const k in I){const V=I[k];for(const z in V){const U=V[z];for(const F in U)u(U[F].object),delete U[F];delete V[z]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const I=n[C.id];for(const k in I){const V=I[k];for(const z in V){const U=V[z];for(const F in U)u(U[F].object),delete U[F];delete V[z]}}delete n[C.id]}function A(C){for(const I in n){const k=n[I];for(const V in k){const z=k[V];if(z[C.id]===void 0)continue;const U=z[C.id];for(const F in U)u(U[F].object),delete U[F];delete z[C.id]}}}function v(C){for(const I in n){const k=n[I],V=C.isInstancedMesh===!0?C.id:0,z=k[V];if(z!==void 0){for(const U in z){const F=z[U];for(const J in F)u(F[J].object),delete F[J];delete z[U]}delete k[V],Object.keys(k).length===0&&delete n[I]}}}function T(){D(),a=!0,s!==i&&(s=i,c(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function WS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_]*h[_];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function XS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Mi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ai&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==yi&&!v)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:E}}function YS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Yr,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=r.get(f);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,M=x*4;let y=g.clippingState||null;l.value=y,y=u(p,h,M,d);for(let b=0;b!==M;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=d;M!==_;++M,y+=4)a.copy(f[M]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const jr=4,Yp=[.125,.215,.35,.446,.526,.582],bs=20,qS=256,co=new Jc,qp=new Ge;let Fu=null,Bu=0,ku=0,zu=!1;const KS=new G;class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=KS}=s;Fu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Bu,ku),this._renderer.xr.enabled=zu,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ar,format:Mi,colorSpace:Gn,depthBuffer:!1},i=jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jS(s)),this._blurMaterial=ZS(s,e,t),this._ggxMaterial=$S(s,e,t)}return i}_compileMaterial(e){const t=new _n(new Zn,e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,i,s){const l=new wn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(qp),f.toneMapping=tr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new pl,new Sr({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(qp),g=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const b=this._cubeSize;la(i,y*b,M>2?b:0,b,b),f.setRenderTarget(i),g&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Os||e.mapping===Ia;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-jr?n-p+jr:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,la(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(o,co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,la(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(o,co)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*bs-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):bs;m>bs&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bs}`);const g=[];let x=0;for(let A=0;A<bs;++A){const v=A/_,T=Math.exp(-v*v/2);g.push(T),A===0?x+=T:A<m&&(x+=2*T)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-n;const y=this._sizeLods[i],b=3*y*(i>M-jr?i-M+jr:0),E=4*(this._cubeSize-y);la(t,b,E,3*y,2*y),l.setRenderTarget(t),l.render(f,co)}}function jS(r){const e=[],t=[],n=[];let i=r;const s=r-jr+1+Yp.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-jr?l=Yp[a-r+jr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*d),M=new Float32Array(m*p*d),y=new Float32Array(g*p*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,v=E>2?0:-1,T=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];x.set(T,_*p*E),M.set(h,m*p*E);const D=[E,E,E,E,E,E];y.set(D,g*p*E)}const b=new Zn;b.setAttribute("position",new Pn(x,_)),b.setAttribute("uv",new Pn(M,m)),b.setAttribute("faceIndex",new Pn(y,g)),n.push(new _n(b,null)),i>jr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function jp(r,e,t){const n=new Oi(r,e,t);return n.texture.mapping=Kc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $S(r,e,t){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function ZS(r,e,t){const n=new Float32Array(bs),i=new G(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function $p(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Zp(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yg extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Og(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new pl(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:Na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Er});s.uniforms.tEquirect.value=t;const a=new _n(i,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=nn),new jv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function JS(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ou||d===lu)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new Yg(p.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===ou||d===lu,_=d===Os||d===Ia;if(p||_){let m=t.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Kp(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return p&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Kp(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===ou?h.mapping=Os:d===lu&&(h.mapping=Ia),h}function l(h){let d=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function QS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Pc("WebGLRenderer: "+n+" extension not supported."),i}}}function eT(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let M=0,y=x.length;M<y;M+=3){const b=x[M+0],E=x[M+1],A=x[M+2];h.push(b,E,E,A,A,b)}}else{const x=p.array;_=p.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const b=M+0,E=M+1,A=M+2;h.push(b,E,E,A,A,b)}}const m=new(p.count>=65535?Dg:Ig)(h,1);m.version=_;const g=s.get(f);g&&e.remove(g),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function tT(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,h*a,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function f(h,d,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/a,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x]*_[x];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function nT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function iT(r,e,t){const n=new WeakMap,i=new Pt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;d===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let y=o.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*b*4*f),A=new Rg(E,y,b,f);A.type=yi,A.needsUpdate=!0;const v=M*4;for(let D=0;D<f;D++){const C=m[D],I=g[D],k=x[D],V=y*b*4*D;for(let z=0;z<C.count;z++){const U=z*v;d===!0&&(i.fromBufferAttribute(C,z),E[V+U+0]=i.x,E[V+U+1]=i.y,E[V+U+2]=i.z,E[V+U+3]=0),p===!0&&(i.fromBufferAttribute(I,z),E[V+U+4]=i.x,E[V+U+5]=i.y,E[V+U+6]=i.z,E[V+U+7]=0),_===!0&&(i.fromBufferAttribute(k,z),E[V+U+8]=i.x,E[V+U+9]=i.y,E[V+U+10]=i.z,E[V+U+11]=k.itemSize===4?i.w:1)}}h={count:f,texture:A,size:new pt(y,b)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function rT(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const sT={[hg]:"LINEAR_TONE_MAPPING",[dg]:"REINHARD_TONE_MAPPING",[pg]:"CINEON_TONE_MAPPING",[qh]:"ACES_FILMIC_TONE_MAPPING",[gg]:"AGX_TONE_MAPPING",[_g]:"NEUTRAL_TONE_MAPPING",[mg]:"CUSTOM_TONE_MAPPING"};function aT(r,e,t,n,i){const s=new Oi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Oi(e,t,{type:ar,depthBuffer:!1,stencilBuffer:!1}),o=new Zn;o.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xn([0,2,0,0,2,0],2));const l=new wv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new _n(o,l),u=new Jc(-1,1,1,-1,0,1);let f=null,h=null,d=!1,p,_=null,m=[],g=!1;this.setSize=function(x,M){s.setSize(x,M),a.setSize(x,M);for(let y=0;y<m.length;y++){const b=m[y];b.setSize&&b.setSize(x,M)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const M=s.width,y=s.height;for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(M,y)}},this.begin=function(x,M){if(d||x.toneMapping===tr&&m.length===0)return!1;if(_=M,M!==null){const y=M.width,b=M.height;(s.width!==y||s.height!==b)&&this.setSize(y,b)}return g===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=tr,!0},this.hasRenderPass=function(){return g},this.end=function(x,M){x.toneMapping=p,d=!0;let y=s,b=a;for(let E=0;E<m.length;E++){const A=m[E];if(A.enabled!==!1&&(A.render(x,b,y,M),A.needsSwap!==!1)){const v=y;y=b,b=v}}if(f!==x.outputColorSpace||h!==x.toneMapping){f=x.outputColorSpace,h=x.toneMapping,l.defines={},ht.getTransfer(f)===St&&(l.defines.SRGB_TRANSFER="");const E=sT[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const qg=new hn,ah=new Zo(1,1),Kg=new Rg,jg=new Zx,$g=new Og,Jp=[],Qp=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function Qa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Jp[i];if(s===void 0&&(s=new Float32Array(i),Jp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function eu(r,e){let t=Qp[e];t===void 0&&(t=new Int32Array(e),Qp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function oT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function uT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function fT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;nm.set(n),r.uniformMatrix2fv(this.addr,!1,nm),sn(t,n)}}function hT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;tm.set(n),r.uniformMatrix3fv(this.addr,!1,tm),sn(t,n)}}function dT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;em.set(n),r.uniformMatrix4fv(this.addr,!1,em),sn(t,n)}}function pT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function _T(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function xT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function yT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function MT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function ST(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ah.compareFunction=t.isReversedDepthBuffer()?id:nd,s=ah):s=qg,t.setTexture2D(e||s,i)}function TT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jg,i)}function bT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$g,i)}function ET(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kg,i)}function wT(r){switch(r){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return xT;case 36294:return vT;case 36295:return yT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return ET}}function AT(r,e){r.uniform1fv(this.addr,e)}function RT(r,e){const t=Qa(e,this.size,2);r.uniform2fv(this.addr,t)}function CT(r,e){const t=Qa(e,this.size,3);r.uniform3fv(this.addr,t)}function PT(r,e){const t=Qa(e,this.size,4);r.uniform4fv(this.addr,t)}function IT(r,e){const t=Qa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function DT(r,e){const t=Qa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function LT(r,e){const t=Qa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function NT(r,e){r.uniform1iv(this.addr,e)}function UT(r,e){r.uniform2iv(this.addr,e)}function OT(r,e){r.uniform3iv(this.addr,e)}function FT(r,e){r.uniform4iv(this.addr,e)}function BT(r,e){r.uniform1uiv(this.addr,e)}function kT(r,e){r.uniform2uiv(this.addr,e)}function zT(r,e){r.uniform3uiv(this.addr,e)}function VT(r,e){r.uniform4uiv(this.addr,e)}function GT(r,e,t){const n=this.cache,i=e.length,s=eu(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=ah:a=qg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function HT(r,e,t){const n=this.cache,i=e.length,s=eu(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||jg,s[a])}function WT(r,e,t){const n=this.cache,i=e.length,s=eu(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||$g,s[a])}function XT(r,e,t){const n=this.cache,i=e.length,s=eu(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kg,s[a])}function YT(r){switch(r){case 5126:return AT;case 35664:return RT;case 35665:return CT;case 35666:return PT;case 35674:return IT;case 35675:return DT;case 35676:return LT;case 5124:case 35670:return NT;case 35667:case 35671:return UT;case 35668:case 35672:return OT;case 35669:case 35673:return FT;case 5125:return BT;case 36294:return kT;case 36295:return zT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class qT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wT(t.type)}}class KT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YT(t.type)}}class jT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Vu=/(\w+)(\])?(\[|\.)?/g;function im(r,e){r.seq.push(e),r.map[e.id]=e}function $T(r,e,t){const n=r.name,i=n.length;for(Vu.lastIndex=0;;){const s=Vu.exec(n),a=Vu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){im(t,c===void 0?new qT(o,r,e):new KT(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new jT(o),im(t,f)),t=f}}}class hc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$T(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function rm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ZT=37297;let JT=0;function QT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const sm=new nt;function eb(r){ht._getMatrix(sm,ht.workingColorSpace,r);const e=`mat3( ${sm.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(r)){case Rc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function am(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+QT(r.getShaderSource(e),o)}else return s}function tb(r,e){const t=eb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const nb={[hg]:"Linear",[dg]:"Reinhard",[pg]:"Cineon",[qh]:"ACESFilmic",[gg]:"AgX",[_g]:"Neutral",[mg]:"Custom"};function ib(r,e){const t=nb[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new G;function rb(){ht.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function ab(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ob(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function xo(r){return r!==""}function om(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(r){return r.replace(lb,ub)}const cb=new Map;function ub(r,e){let t=rt[e];if(t===void 0){const n=cb.get(e);if(n!==void 0)t=rt[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oh(t)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(r){return r.replace(fb,hb)}function hb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function um(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const db={[ac]:"SHADOWMAP_TYPE_PCF",[go]:"SHADOWMAP_TYPE_VSM"};function pb(r){return db[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mb={[Os]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function gb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":mb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const _b={[Ia]:"ENVMAP_MODE_REFRACTION"};function xb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_b[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vb={[Yh]:"ENVMAP_BLENDING_MULTIPLY",[fx]:"ENVMAP_BLENDING_MIX",[hx]:"ENVMAP_BLENDING_ADD"};function yb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vb[r.combine]||"ENVMAP_BLENDING_NONE"}function Mb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sb(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pb(t),c=gb(t),u=xb(t),f=yb(t),h=Mb(t),d=sb(t),p=ab(s),_=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xo).join(`
`),g.length>0&&(g+=`
`)):(m=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),g=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?rt.tonemapping_pars_fragment:"",t.toneMapping!==tr?ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,tb("linearToOutputTexel",t.outputColorSpace),rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),a=oh(a),a=om(a,t),a=lm(a,t),o=oh(o),o=om(o,t),o=lm(o,t),a=cm(a),o=cm(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=x+m+a,y=x+g+o,b=rm(i,i.VERTEX_SHADER,M),E=rm(i,i.FRAGMENT_SHADER,y);i.attachShader(_,b),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(C){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(b)||"",V=i.getShaderInfoLog(E)||"",z=I.trim(),U=k.trim(),F=V.trim();let J=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,E);else{const P=am(i,b,"vertex"),ae=am(i,E,"fragment");Xe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+P+`
`+ae)}else z!==""?Fe("WebGLProgram: Program Info Log:",z):(U===""||F==="")&&(j=!1);j&&(C.diagnostics={runnable:J,programLog:z,vertexShader:{log:U,prefix:m},fragmentShader:{log:F,prefix:g}})}i.deleteShader(b),i.deleteShader(E),v=new hc(i,_),T=ob(i,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(_,ZT)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}let Tb=0;class bb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Eb(e),t.set(e,n)),n}}class Eb{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}}function wb(r,e,t,n,i,s){const a=new Cg,o=new bb,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,D,C,I){const k=C.fog,V=I.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||z,U),J=F&&F.mapping===Kc?F.image.height:null,j=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Fe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const P=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=P!==void 0?P.length:0;let ue=0;V.morphAttributes.position!==void 0&&(ue=1),V.morphAttributes.normal!==void 0&&(ue=2),V.morphAttributes.color!==void 0&&(ue=3);let Ue,He,je,$;if(j){const ve=ji[j];Ue=ve.vertexShader,He=ve.fragmentShader}else Ue=v.vertexShader,He=v.fragmentShader,o.update(v),je=o.getVertexShaderID(v),$=o.getFragmentShaderID(v);const te=r.getRenderTarget(),ie=r.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,Pe=I.isBatchedMesh===!0,we=!!v.map,mt=!!v.matcap,be=!!F,Ve=!!v.aoMap,Qe=!!v.lightMap,ze=!!v.bumpMap,X=!!v.normalMap,N=!!v.displacementMap,xt=!!v.emissiveMap,st=!!v.metalnessMap,We=!!v.roughnessMap,ye=v.anisotropy>0,R=v.clearcoat>0,S=v.dispersion>0,O=v.iridescence>0,Q=v.sheen>0,ee=v.transmission>0,K=ye&&!!v.anisotropyMap,xe=R&&!!v.clearcoatMap,le=R&&!!v.clearcoatNormalMap,De=R&&!!v.clearcoatRoughnessMap,Me=O&&!!v.iridescenceMap,re=O&&!!v.iridescenceThicknessMap,oe=Q&&!!v.sheenColorMap,Se=Q&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,de=!!v.specularColorMap,Ye=!!v.specularIntensityMap,L=ee&&!!v.transmissionMap,ce=ee&&!!v.thicknessMap,se=!!v.gradientMap,pe=!!v.alphaMap,ne=v.alphaTest>0,Z=!!v.alphaHash,Te=!!v.extensions;let Be=tr;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Be=r.toneMapping);const gt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:He,defines:v.defines,customVertexShaderID:je,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Pe,batchingColor:Pe&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Gn,alphaToCoverage:!!v.alphaToCoverage,map:we,matcap:mt,envMap:be,envMapMode:be&&F.mapping,envMapCubeUVHeight:J,aoMap:Ve,lightMap:Qe,bumpMap:ze,normalMap:X,displacementMap:N,emissiveMap:xt,normalMapObjectSpace:X&&v.normalMapType===_x,normalMapTangentSpace:X&&v.normalMapType===td,metalnessMap:st,roughnessMap:We,anisotropy:ye,anisotropyMap:K,clearcoat:R,clearcoatMap:xe,clearcoatNormalMap:le,clearcoatRoughnessMap:De,dispersion:S,iridescence:O,iridescenceMap:Me,iridescenceThicknessMap:re,sheen:Q,sheenColorMap:oe,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:de,specularIntensityMap:Ye,transmission:ee,transmissionMap:L,thicknessMap:ce,gradientMap:se,opaque:v.transparent===!1&&v.blending===ya&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:ne,alphaHash:Z,combine:v.combine,mapUv:we&&p(v.map.channel),aoMapUv:Ve&&p(v.aoMap.channel),lightMapUv:Qe&&p(v.lightMap.channel),bumpMapUv:ze&&p(v.bumpMap.channel),normalMapUv:X&&p(v.normalMap.channel),displacementMapUv:N&&p(v.displacementMap.channel),emissiveMapUv:xt&&p(v.emissiveMap.channel),metalnessMapUv:st&&p(v.metalnessMap.channel),roughnessMapUv:We&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:xe&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(v.sheenRoughnessMap.channel),specularMapUv:Ee&&p(v.specularMap.channel),specularColorMapUv:de&&p(v.specularColorMap.channel),specularIntensityMapUv:Ye&&p(v.specularIntensityMap.channel),transmissionMapUv:L&&p(v.transmissionMap.channel),thicknessMapUv:ce&&p(v.thicknessMap.channel),alphaMapUv:pe&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(X||ye),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(we||pe),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&X===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,decodeVideoTexture:we&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:xt&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ii,flipSided:v.side===Vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Te&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&v.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(g(T,v),x(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const T=d[v.type];let D;if(T){const C=ji[T];D=sh.clone(C.uniforms)}else D=v.uniforms;return D}function y(v,T){let D=u.get(T);return D!==void 0?++D.usedTimes:(D=new Sb(r,T,v,i),c.push(D),u.set(T,D)),D}function b(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:A}}function Ab(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Rb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function fm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,p,_,m,g){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},r[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=p,x.materialVariant=a(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=m,x.group=g),e++,x}function l(h,d,p,_,m,g){const x=o(h,d,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function c(h,d,p,_,m,g){const x=o(h,d,p,_,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function u(h,d){t.length>1&&t.sort(h||Rb),n.length>1&&n.sort(d||fm),i.length>1&&i.sort(d||fm)}function f(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function Cb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new hm,r.set(n,[a])):i>=s.length?(a=new hm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Pb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ge};break;case"SpotLight":t={position:new G,direction:new G,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function Ib(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Db=0;function Lb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Nb(r){const e=new Pb,t=Ib(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const i=new G,s=new Je,a=new Je;function o(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,x=0,M=0,y=0,b=0,E=0,A=0;c.sort(Lb);for(let T=0,D=c.length;T<D;T++){const C=c[T],I=C.color,k=C.intensity,V=C.distance;let z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Da?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=I.r*k,f+=I.g*k,h+=I.b*k;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],k);A++}else if(C.isDirectionalLight){const U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const F=C.shadow,J=t.get(C);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=C.shadow.matrix,x++}n.directional[d]=U,d++}else if(C.isSpotLight){const U=e.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(I).multiplyScalar(k),U.distance=V,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[_]=U;const F=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,F.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=F.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=z,y++}_++}else if(C.isRectAreaLight){const U=e.get(C);U.color.copy(I).multiplyScalar(k),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=U,m++}else if(C.isPointLight){const U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){const F=C.shadow,J=t.get(C);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,J.shadowCameraNear=F.camera.near,J.shadowCameraFar=F.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=C.shadow.matrix,M++}n.point[p]=U,p++}else if(C.isHemisphereLight){const U=e.get(C);U.skyColor.copy(C.color).multiplyScalar(k),U.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[g]=U,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==d||v.pointLength!==p||v.spotLength!==_||v.rectAreaLength!==m||v.hemiLength!==g||v.numDirectionalShadows!==x||v.numPointShadows!==M||v.numSpotShadows!==y||v.numSpotMaps!==b||v.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,v.directionalLength=d,v.pointLength=p,v.spotLength=_,v.rectAreaLength=m,v.hemiLength=g,v.numDirectionalShadows=x,v.numPointShadows=M,v.numSpotShadows=y,v.numSpotMaps=b,v.numLightProbes=A,n.version=Db++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const M=c[g];if(M.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(M.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function dm(r){const e=new Nb(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ub(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new dm(r),e.set(i,[o])):s>=a.length?(o=new dm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bb=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],kb=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],pm=new Je,uo=new G,Gu=new G;function zb(r,e,t){let n=new cd;const i=new pt,s=new pt,a=new Pt,o=new Rv,l=new Cv,c={},u=t.maxTextureSize,f={[rr]:Vn,[Vn]:rr,[Ii]:Ii},h=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Ob,fragmentShader:Fb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Zn;p.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let g=this.type;this.render=function(E,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Y0&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ac);const T=r.getRenderTarget(),D=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Er),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=g!==this.type;k&&A.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(z=>z.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,z=E.length;V<z;V++){const U=E[V],F=U.shadow;if(F===void 0){Fe("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const J=F.getFrameExtents();i.multiply(J),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,F.mapSize.y=s.y));const j=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=j,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===go){if(U.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Oi(i.x,i.y,{format:Da,type:ar,minFilter:nn,magFilter:nn,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new Zo(i.x,i.y,yi),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=Cr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=tn,F.map.depthTexture.magFilter=tn}else U.isPointLight?(F.map=new Yg(i.x),F.map.depthTexture=new Sv(i.x,sr)):(F.map=new Oi(i.x,i.y),F.map.depthTexture=new Zo(i.x,i.y,sr)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=Cr,this.type===ac?(F.map.depthTexture.compareFunction=j?id:nd,F.map.depthTexture.minFilter=nn,F.map.depthTexture.magFilter=nn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=tn,F.map.depthTexture.magFilter=tn);F.camera.updateProjectionMatrix()}const P=F.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<P;ae++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,ae),r.clear();else{ae===0&&(r.setRenderTarget(F.map),r.clear());const ue=F.getViewport(ae);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),I.viewport(a)}if(U.isPointLight){const ue=F.camera,Ue=F.matrix,He=U.distance||ue.far;He!==ue.far&&(ue.far=He,ue.updateProjectionMatrix()),uo.setFromMatrixPosition(U.matrixWorld),ue.position.copy(uo),Gu.copy(ue.position),Gu.add(Bb[ae]),ue.up.copy(kb[ae]),ue.lookAt(Gu),ue.updateMatrixWorld(),Ue.makeTranslation(-uo.x,-uo.y,-uo.z),pm.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),F._frustum.setFromProjectionMatrix(pm,ue.coordinateSystem,ue.reversedDepth)}else F.updateMatrices(U);n=F.getFrustum(),y(A,v,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===go&&x(F,v),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(T,D,C)};function x(E,A){const v=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Oi(i.x,i.y,{format:Da,type:ar})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,v,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,v,d,_,null)}function M(E,A,v,T){let D=null;const C=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)D=C;else if(D=v.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=D.uuid,k=A.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let z=V[k];z===void 0&&(z=D.clone(),V[k]=z,A.addEventListener("dispose",b)),D=z}if(D.visible=A.visible,D.wireframe=A.wireframe,T===go?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:f[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const I=r.properties.get(D);I.light=v}return D}function y(E,A,v,T,D){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===go)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const k=e.update(E),V=E.material;if(Array.isArray(V)){const z=k.groups;for(let U=0,F=z.length;U<F;U++){const J=z[U],j=V[J.materialIndex];if(j&&j.visible){const P=M(E,j,T,D);E.onBeforeShadow(r,E,A,v,k,P,J),r.renderBufferDirect(v,null,k,P,E,J),E.onAfterShadow(r,E,A,v,k,P,J)}}}else if(V.visible){const z=M(E,V,T,D);E.onBeforeShadow(r,E,A,v,k,z,null),r.renderBufferDirect(v,null,k,z,E,null),E.onAfterShadow(r,E,A,v,k,z,null)}}const I=E.children;for(let k=0,V=I.length;k<V;k++)y(I[k],A,v,T,D)}function b(E){E.target.removeEventListener("dispose",b);for(const v in c){const T=c[v],D=E.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function Vb(r,e){function t(){let L=!1;const ce=new Pt;let se=null;const pe=new Pt(0,0,0,0);return{setMask:function(ne){se!==ne&&!L&&(r.colorMask(ne,ne,ne,ne),se=ne)},setLocked:function(ne){L=ne},setClear:function(ne,Z,Te,Be,gt){gt===!0&&(ne*=Be,Z*=Be,Te*=Be),ce.set(ne,Z,Te,Be),pe.equals(ce)===!1&&(r.clearColor(ne,Z,Te,Be),pe.copy(ce))},reset:function(){L=!1,se=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,ce=!1,se=null,pe=null,ne=null;return{setReversed:function(Z){if(ce!==Z){const Te=e.get("EXT_clip_control");Z?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ce=Z;const Be=ne;ne=null,this.setClear(Be)}},getReversed:function(){return ce},setTest:function(Z){Z?te(r.DEPTH_TEST):ie(r.DEPTH_TEST)},setMask:function(Z){se!==Z&&!L&&(r.depthMask(Z),se=Z)},setFunc:function(Z){if(ce&&(Z=Rx[Z]),pe!==Z){switch(Z){case gf:r.depthFunc(r.NEVER);break;case _f:r.depthFunc(r.ALWAYS);break;case xf:r.depthFunc(r.LESS);break;case Pa:r.depthFunc(r.LEQUAL);break;case vf:r.depthFunc(r.EQUAL);break;case yf:r.depthFunc(r.GEQUAL);break;case Mf:r.depthFunc(r.GREATER);break;case Sf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Z}},setLocked:function(Z){L=Z},setClear:function(Z){ne!==Z&&(ne=Z,ce&&(Z=1-Z),r.clearDepth(Z))},reset:function(){L=!1,se=null,pe=null,ne=null,ce=!1}}}function i(){let L=!1,ce=null,se=null,pe=null,ne=null,Z=null,Te=null,Be=null,gt=null;return{setTest:function(ve){L||(ve?te(r.STENCIL_TEST):ie(r.STENCIL_TEST))},setMask:function(ve){ce!==ve&&!L&&(r.stencilMask(ve),ce=ve)},setFunc:function(ve,Le,tt){(se!==ve||pe!==Le||ne!==tt)&&(r.stencilFunc(ve,Le,tt),se=ve,pe=Le,ne=tt)},setOp:function(ve,Le,tt){(Z!==ve||Te!==Le||Be!==tt)&&(r.stencilOp(ve,Le,tt),Z=ve,Te=Le,Be=tt)},setLocked:function(ve){L=ve},setClear:function(ve){gt!==ve&&(r.clearStencil(ve),gt=ve)},reset:function(){L=!1,ce=null,se=null,pe=null,ne=null,Z=null,Te=null,Be=null,gt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,M=null,y=null,b=null,E=null,A=new Ge(0,0,0),v=0,T=!1,D=null,C=null,I=null,k=null,V=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,F=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(J)[1]),U=F>=1):J.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),U=F>=2);let j=null,P={};const ae=r.getParameter(r.SCISSOR_BOX),ue=r.getParameter(r.VIEWPORT),Ue=new Pt().fromArray(ae),He=new Pt().fromArray(ue);function je(L,ce,se,pe){const ne=new Uint8Array(4),Z=r.createTexture();r.bindTexture(L,Z),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Te=0;Te<se;Te++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(ce+Te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return Z}const $={};$[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(Pa),ze(!1),X(Qd),te(r.CULL_FACE),Ve(Er);function te(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function ie(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Ie(L,ce){return f[L]!==ce?(r.bindFramebuffer(L,ce),f[L]=ce,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ce),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(L,ce){let se=d,pe=!1;if(L){se=h.get(ce),se===void 0&&(se=[],h.set(ce,se));const ne=L.textures;if(se.length!==ne.length||se[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,Te=ne.length;Z<Te;Z++)se[Z]=r.COLOR_ATTACHMENT0+Z;se.length=ne.length,pe=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,pe=!0);pe&&r.drawBuffers(se)}function we(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const mt={[Ts]:r.FUNC_ADD,[K0]:r.FUNC_SUBTRACT,[j0]:r.FUNC_REVERSE_SUBTRACT};mt[$0]=r.MIN,mt[Z0]=r.MAX;const be={[J0]:r.ZERO,[Q0]:r.ONE,[ex]:r.SRC_COLOR,[pf]:r.SRC_ALPHA,[ax]:r.SRC_ALPHA_SATURATE,[rx]:r.DST_COLOR,[nx]:r.DST_ALPHA,[tx]:r.ONE_MINUS_SRC_COLOR,[mf]:r.ONE_MINUS_SRC_ALPHA,[sx]:r.ONE_MINUS_DST_COLOR,[ix]:r.ONE_MINUS_DST_ALPHA,[ox]:r.CONSTANT_COLOR,[lx]:r.ONE_MINUS_CONSTANT_COLOR,[cx]:r.CONSTANT_ALPHA,[ux]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(L,ce,se,pe,ne,Z,Te,Be,gt,ve){if(L===Er){_===!0&&(ie(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),L!==q0){if(L!==m||ve!==T){if((g!==Ts||y!==Ts)&&(r.blendEquation(r.FUNC_ADD),g=Ts,y=Ts),ve)switch(L){case ya:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case df:r.blendFunc(r.ONE,r.ONE);break;case ep:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case ya:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case df:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ep:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tp:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}x=null,M=null,b=null,E=null,A.set(0,0,0),v=0,m=L,T=ve}return}ne=ne||ce,Z=Z||se,Te=Te||pe,(ce!==g||ne!==y)&&(r.blendEquationSeparate(mt[ce],mt[ne]),g=ce,y=ne),(se!==x||pe!==M||Z!==b||Te!==E)&&(r.blendFuncSeparate(be[se],be[pe],be[Z],be[Te]),x=se,M=pe,b=Z,E=Te),(Be.equals(A)===!1||gt!==v)&&(r.blendColor(Be.r,Be.g,Be.b,gt),A.copy(Be),v=gt),m=L,T=!1}function Qe(L,ce){L.side===Ii?ie(r.CULL_FACE):te(r.CULL_FACE);let se=L.side===Vn;ce&&(se=!se),ze(se),L.blending===ya&&L.transparent===!1?Ve(Er):Ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){D!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),D=L)}function X(L){L!==W0?(te(r.CULL_FACE),L!==C&&(L===Qd?r.cullFace(r.BACK):L===X0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ie(r.CULL_FACE),C=L}function N(L){L!==I&&(U&&r.lineWidth(L),I=L)}function xt(L,ce,se){L?(te(r.POLYGON_OFFSET_FILL),(k!==ce||V!==se)&&(k=ce,V=se,a.getReversed()&&(ce=-ce),r.polygonOffset(ce,se))):ie(r.POLYGON_OFFSET_FILL)}function st(L){L?te(r.SCISSOR_TEST):ie(r.SCISSOR_TEST)}function We(L){L===void 0&&(L=r.TEXTURE0+z-1),j!==L&&(r.activeTexture(L),j=L)}function ye(L,ce,se){se===void 0&&(j===null?se=r.TEXTURE0+z-1:se=j);let pe=P[se];pe===void 0&&(pe={type:void 0,texture:void 0},P[se]=pe),(pe.type!==L||pe.texture!==ce)&&(j!==se&&(r.activeTexture(se),j=se),r.bindTexture(L,ce||$[L]),pe.type=L,pe.texture=ce)}function R(){const L=P[j];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Q(){try{r.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ee(){try{r.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function le(){try{r.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function De(){try{r.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Me(){try{r.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function re(){try{r.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function oe(L){Ue.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ue.copy(L))}function Se(L){He.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),He.copy(L))}function Ee(L,ce){let se=c.get(ce);se===void 0&&(se=new WeakMap,c.set(ce,se));let pe=se.get(L);pe===void 0&&(pe=r.getUniformBlockIndex(ce,L.name),se.set(L,pe))}function de(L,ce){const pe=c.get(ce).get(L);l.get(ce)!==pe&&(r.uniformBlockBinding(ce,pe,L.__bindingPointIndex),l.set(ce,pe))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},j=null,P={},f={},h=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,M=null,y=null,b=null,E=null,A=new Ge(0,0,0),v=0,T=!1,D=null,C=null,I=null,k=null,V=null,Ue.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:ie,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:we,setBlending:Ve,setMaterial:Qe,setFlipSided:ze,setCullFace:X,setLineWidth:N,setPolygonOffset:xt,setScissorTest:st,activeTexture:We,bindTexture:ye,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Me,texImage3D:re,updateUBOMapping:Ee,uniformBlockBinding:de,texStorage2D:le,texStorage3D:De,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:K,compressedTexSubImage3D:xe,scissor:oe,viewport:Se,reset:Ye}}function Gb(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,S){return d?new OffscreenCanvas(R,S):$o("canvas")}function _(R,S,O){let Q=1;const ee=ye(R);if((ee.width>O||ee.height>O)&&(Q=O/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Q*ee.width),xe=Math.floor(Q*ee.height);f===void 0&&(f=p(K,xe));const le=S?p(K,xe):f;return le.width=K,le.height=xe,le.getContext("2d").drawImage(R,0,0,K,xe),Fe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+xe+")."),le}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,S,O,Q,ee=!1){if(R!==null){if(r[R]!==void 0)return r[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===r.RED&&(O===r.FLOAT&&(K=r.R32F),O===r.HALF_FLOAT&&(K=r.R16F),O===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.R8UI),O===r.UNSIGNED_SHORT&&(K=r.R16UI),O===r.UNSIGNED_INT&&(K=r.R32UI),O===r.BYTE&&(K=r.R8I),O===r.SHORT&&(K=r.R16I),O===r.INT&&(K=r.R32I)),S===r.RG&&(O===r.FLOAT&&(K=r.RG32F),O===r.HALF_FLOAT&&(K=r.RG16F),O===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.RG8UI),O===r.UNSIGNED_SHORT&&(K=r.RG16UI),O===r.UNSIGNED_INT&&(K=r.RG32UI),O===r.BYTE&&(K=r.RG8I),O===r.SHORT&&(K=r.RG16I),O===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.RGB8UI),O===r.UNSIGNED_SHORT&&(K=r.RGB16UI),O===r.UNSIGNED_INT&&(K=r.RGB32UI),O===r.BYTE&&(K=r.RGB8I),O===r.SHORT&&(K=r.RGB16I),O===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),O===r.UNSIGNED_INT&&(K=r.RGBA32UI),O===r.BYTE&&(K=r.RGBA8I),O===r.SHORT&&(K=r.RGBA16I),O===r.INT&&(K=r.RGBA32I)),S===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),S===r.RGBA){const xe=ee?Rc:ht.getTransfer(Q);O===r.FLOAT&&(K=r.RGBA32F),O===r.HALF_FLOAT&&(K=r.RGBA16F),O===r.UNSIGNED_BYTE&&(K=xe===St?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(R,S){let O;return R?S===null||S===sr||S===Yo?O=r.DEPTH24_STENCIL8:S===yi?O=r.DEPTH32F_STENCIL8:S===Xo&&(O=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===sr||S===Yo?O=r.DEPTH_COMPONENT24:S===yi?O=r.DEPTH_COMPONENT32F:S===Xo&&(O=r.DEPTH_COMPONENT16),O}function b(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){const S=R.target;S.removeEventListener("dispose",E),v(S),S.isVideoTexture&&u.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),D(S)}function v(R){const S=n.get(R);if(S.__webglInit===void 0)return;const O=R.source,Q=h.get(O);if(Q){const ee=Q[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(R),Object.keys(Q).length===0&&h.delete(O)}n.remove(R)}function T(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const O=R.source,Q=h.get(O);delete Q[S.__cacheKey],a.memory.textures--}function D(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ee=0;ee<S.__webglFramebuffer[Q].length;ee++)r.deleteFramebuffer(S.__webglFramebuffer[Q][ee]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=R.textures;for(let Q=0,ee=O.length;Q<ee;Q++){const K=n.get(O[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(O[Q])}n.remove(R)}let C=0;function I(){C=0}function k(){const R=C;return R>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),C+=1,R}function V(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){const O=n.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const Q=R.image;if(Q===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,R,S);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function U(R,S){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){$(O,R,S);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function F(R,S){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){$(O,R,S);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function J(R,S){const O=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){te(O,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const j={[Fs]:r.REPEAT,[Zi]:r.CLAMP_TO_EDGE,[Ac]:r.MIRRORED_REPEAT},P={[tn]:r.NEAREST,[vg]:r.NEAREST_MIPMAP_NEAREST,[_o]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[oc]:r.LINEAR_MIPMAP_NEAREST,[Mr]:r.LINEAR_MIPMAP_LINEAR},ae={[xx]:r.NEVER,[Tx]:r.ALWAYS,[vx]:r.LESS,[nd]:r.LEQUAL,[yx]:r.EQUAL,[id]:r.GEQUAL,[Mx]:r.GREATER,[Sx]:r.NOTEQUAL};function ue(R,S){if(S.type===yi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===oc||S.magFilter===_o||S.magFilter===Mr||S.minFilter===nn||S.minFilter===oc||S.minFilter===_o||S.minFilter===Mr)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,j[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,j[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,j[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,P[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,P[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==_o&&S.minFilter!==Mr||S.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ue(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const Q=S.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const K=V(S);if(K!==R.__cacheKey){ee[K]===void 0&&(ee[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ee[K].usedTimes++;const xe=ee[R.__cacheKey];xe!==void 0&&(ee[R.__cacheKey].usedTimes--,xe.usedTimes===0&&T(S)),R.__cacheKey=K,R.__webglTexture=ee[K].texture}return O}function He(R,S,O){return Math.floor(Math.floor(R/O)/S)}function je(R,S,O,Q){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,O,Q,S.data);else{K.sort((re,oe)=>re.start-oe.start);let xe=0;for(let re=1;re<K.length;re++){const oe=K[xe],Se=K[re],Ee=oe.start+oe.count,de=He(Se.start,S.width,4),Ye=He(oe.start,S.width,4);Se.start<=Ee+1&&de===Ye&&He(Se.start+Se.count-1,S.width,4)===de?oe.count=Math.max(oe.count,Se.start+Se.count-oe.start):(++xe,K[xe]=Se)}K.length=xe+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),De=r.getParameter(r.UNPACK_SKIP_PIXELS),Me=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let re=0,oe=K.length;re<oe;re++){const Se=K[re],Ee=Math.floor(Se.start/4),de=Math.ceil(Se.count/4),Ye=Ee%S.width,L=Math.floor(Ee/S.width),ce=de,se=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Ye,L,ce,se,O,Q,S.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,De),r.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function $(R,S,O){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const ee=Ue(R,S),K=S.source;t.bindTexture(Q,R.__webglTexture,r.TEXTURE0+O);const xe=n.get(K);if(K.version!==xe.__version||ee===!0){t.activeTexture(r.TEXTURE0+O);const le=ht.getPrimaries(ht.workingColorSpace),De=S.colorSpace===Kr?null:ht.getPrimaries(S.colorSpace),Me=S.colorSpace===Kr||le===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let re=_(S.image,!1,i.maxTextureSize);re=We(S,re);const oe=s.convert(S.format,S.colorSpace),Se=s.convert(S.type);let Ee=M(S.internalFormat,oe,Se,S.colorSpace,S.isVideoTexture);ue(Q,S);let de;const Ye=S.mipmaps,L=S.isVideoTexture!==!0,ce=xe.__version===void 0||ee===!0,se=K.dataReady,pe=b(S,re);if(S.isDepthTexture)Ee=y(S.format===Es,S.type),ce&&(L?t.texStorage2D(r.TEXTURE_2D,1,Ee,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Ee,re.width,re.height,0,oe,Se,null));else if(S.isDataTexture)if(Ye.length>0){L&&ce&&t.texStorage2D(r.TEXTURE_2D,pe,Ee,Ye[0].width,Ye[0].height);for(let ne=0,Z=Ye.length;ne<Z;ne++)de=Ye[ne],L?se&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,de.width,de.height,oe,Se,de.data):t.texImage2D(r.TEXTURE_2D,ne,Ee,de.width,de.height,0,oe,Se,de.data);S.generateMipmaps=!1}else L?(ce&&t.texStorage2D(r.TEXTURE_2D,pe,Ee,re.width,re.height),se&&je(S,re,oe,Se)):t.texImage2D(r.TEXTURE_2D,0,Ee,re.width,re.height,0,oe,Se,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ee,Ye[0].width,Ye[0].height,re.depth);for(let ne=0,Z=Ye.length;ne<Z;ne++)if(de=Ye[ne],S.format!==Mi)if(oe!==null)if(L){if(se)if(S.layerUpdates.size>0){const Te=Xp(de.width,de.height,S.format,S.type);for(const Be of S.layerUpdates){const gt=de.data.subarray(Be*Te/de.data.BYTES_PER_ELEMENT,(Be+1)*Te/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Be,de.width,de.height,1,oe,gt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,re.depth,oe,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Ee,de.width,de.height,re.depth,0,de.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,re.depth,oe,Se,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Ee,de.width,de.height,re.depth,0,oe,Se,de.data)}else{L&&ce&&t.texStorage2D(r.TEXTURE_2D,pe,Ee,Ye[0].width,Ye[0].height);for(let ne=0,Z=Ye.length;ne<Z;ne++)de=Ye[ne],S.format!==Mi?oe!==null?L?se&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,de.width,de.height,oe,de.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Ee,de.width,de.height,0,de.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,de.width,de.height,oe,Se,de.data):t.texImage2D(r.TEXTURE_2D,ne,Ee,de.width,de.height,0,oe,Se,de.data)}else if(S.isDataArrayTexture)if(L){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ee,re.width,re.height,re.depth),se)if(S.layerUpdates.size>0){const ne=Xp(re.width,re.height,S.format,S.type);for(const Z of S.layerUpdates){const Te=re.data.subarray(Z*ne/re.data.BYTES_PER_ELEMENT,(Z+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,oe,Se,Te)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,oe,Se,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,re.width,re.height,re.depth,0,oe,Se,re.data);else if(S.isData3DTexture)L?(ce&&t.texStorage3D(r.TEXTURE_3D,pe,Ee,re.width,re.height,re.depth),se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,oe,Se,re.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,re.width,re.height,re.depth,0,oe,Se,re.data);else if(S.isFramebufferTexture){if(ce)if(L)t.texStorage2D(r.TEXTURE_2D,pe,Ee,re.width,re.height);else{let ne=re.width,Z=re.height;for(let Te=0;Te<pe;Te++)t.texImage2D(r.TEXTURE_2D,Te,Ee,ne,Z,0,oe,Se,null),ne>>=1,Z>>=1}}else if(Ye.length>0){if(L&&ce){const ne=ye(Ye[0]);t.texStorage2D(r.TEXTURE_2D,pe,Ee,ne.width,ne.height)}for(let ne=0,Z=Ye.length;ne<Z;ne++)de=Ye[ne],L?se&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,oe,Se,de):t.texImage2D(r.TEXTURE_2D,ne,Ee,oe,Se,de);S.generateMipmaps=!1}else if(L){if(ce){const ne=ye(re);t.texStorage2D(r.TEXTURE_2D,pe,Ee,ne.width,ne.height)}se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Se,re)}else t.texImage2D(r.TEXTURE_2D,0,Ee,oe,Se,re);m(S)&&g(Q),xe.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function te(R,S,O){if(S.image.length!==6)return;const Q=Ue(R,S),ee=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+O);const K=n.get(ee);if(ee.version!==K.__version||Q===!0){t.activeTexture(r.TEXTURE0+O);const xe=ht.getPrimaries(ht.workingColorSpace),le=S.colorSpace===Kr?null:ht.getPrimaries(S.colorSpace),De=S.colorSpace===Kr||xe===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!Me&&!re?oe[Z]=_(S.image[Z],!0,i.maxCubemapSize):oe[Z]=re?S.image[Z].image:S.image[Z],oe[Z]=We(S,oe[Z]);const Se=oe[0],Ee=s.convert(S.format,S.colorSpace),de=s.convert(S.type),Ye=M(S.internalFormat,Ee,de,S.colorSpace),L=S.isVideoTexture!==!0,ce=K.__version===void 0||Q===!0,se=ee.dataReady;let pe=b(S,Se);ue(r.TEXTURE_CUBE_MAP,S);let ne;if(Me){L&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ye,Se.width,Se.height);for(let Z=0;Z<6;Z++){ne=oe[Z].mipmaps;for(let Te=0;Te<ne.length;Te++){const Be=ne[Te];S.format!==Mi?Ee!==null?L?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,0,0,Be.width,Be.height,Ee,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,Ye,Be.width,Be.height,0,Be.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,0,0,Be.width,Be.height,Ee,de,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te,Ye,Be.width,Be.height,0,Ee,de,Be.data)}}}else{if(ne=S.mipmaps,L&&ce){ne.length>0&&pe++;const Z=ye(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,Ee,de,oe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,oe[Z].width,oe[Z].height,0,Ee,de,oe[Z].data);for(let Te=0;Te<ne.length;Te++){const gt=ne[Te].image[Z].image;L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,0,0,gt.width,gt.height,Ee,de,gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,Ye,gt.width,gt.height,0,Ee,de,gt.data)}}else{L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,de,oe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Ee,de,oe[Z]);for(let Te=0;Te<ne.length;Te++){const Be=ne[Te];L?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,0,0,Ee,de,Be.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te+1,Ye,Ee,de,Be.image[Z])}}}m(S)&&g(r.TEXTURE_CUBE_MAP),K.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ie(R,S,O,Q,ee,K){const xe=s.convert(O.format,O.colorSpace),le=s.convert(O.type),De=M(O.internalFormat,xe,le,O.colorSpace),Me=n.get(S),re=n.get(O);if(re.__renderTarget=S,!Me.__hasExternalTextures){const oe=Math.max(1,S.width>>K),Se=Math.max(1,S.height>>K);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,De,oe,Se,S.depth,0,xe,le,null):t.texImage2D(ee,K,De,oe,Se,0,xe,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),xt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,ee,re.__webglTexture,0,N(S)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,ee,re.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(R,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const Q=S.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,K=y(S.stencilBuffer,ee),xe=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(S),K,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(S),K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,R)}else{const Q=S.textures;for(let ee=0;ee<Q.length;ee++){const K=Q[ee],xe=s.convert(K.format,K.colorSpace),le=s.convert(K.type),De=M(K.internalFormat,xe,le,K.colorSpace);xt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(S),De,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(S),De,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,De,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(R,S,O){const Q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),ee.__webglTexture===void 0){ee.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),ue(r.TEXTURE_CUBE_MAP,S.depthTexture);const Me=s.convert(S.depthTexture.format),re=s.convert(S.depthTexture.type);let oe;S.depthTexture.format===Cr?oe=r.DEPTH_COMPONENT24:S.depthTexture.format===Es&&(oe=r.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,oe,S.width,S.height,0,Me,re,null)}}else z(S.depthTexture,0);const K=ee.__webglTexture,xe=N(S),le=Q?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,De=S.depthTexture.format===Es?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Cr)xt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,De,le,K,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,De,le,K,0);else if(S.depthTexture.format===Es)xt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,De,le,K,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,De,le,K,0);else throw new Error("Unknown depthTexture format")}function we(R){const S=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(O)for(let Q=0;Q<6;Q++)Pe(S.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?Pe(S.__webglFramebuffer[0],R,0):Pe(S.__webglFramebuffer,R,0)}else if(O){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),Ie(S.__webglDepthbuffer[Q],R,!1);else{const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,K)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ie(S.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(R,S,O){const Q=n.get(R);S!==void 0&&ie(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&we(R)}function be(R){const S=R.texture,O=n.get(R),Q=n.get(S);R.addEventListener("dispose",A);const ee=R.textures,K=R.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let De=0;De<S.mipmaps.length;De++)O.__webglFramebuffer[le][De]=r.createFramebuffer()}else O.__webglFramebuffer[le]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)O.__webglFramebuffer[le]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(xe)for(let le=0,De=ee.length;le<De;le++){const Me=n.get(ee[le]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&xt(R)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const De=ee[le];O.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Me=s.convert(De.format,De.colorSpace),re=s.convert(De.type),oe=M(De.internalFormat,Me,re,De.colorSpace,R.isXRRenderTarget===!0),Se=N(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,oe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,O.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ue(r.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let De=0;De<S.mipmaps.length;De++)ie(O.__webglFramebuffer[le][De],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,De);else ie(O.__webglFramebuffer[le],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let le=0,De=ee.length;le<De;le++){const Me=ee[le],re=n.get(Me);let oe=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,re.__webglTexture),ue(oe,Me),ie(O.__webglFramebuffer,R,Me,r.COLOR_ATTACHMENT0+le,oe,0),m(Me)&&g(oe)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),ue(le,S),S.mipmaps&&S.mipmaps.length>0)for(let De=0;De<S.mipmaps.length;De++)ie(O.__webglFramebuffer[De],R,S,r.COLOR_ATTACHMENT0,le,De);else ie(O.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,le,0);m(S)&&g(le),t.unbindTexture()}R.depthBuffer&&we(R)}function Ve(R){const S=R.textures;for(let O=0,Q=S.length;O<Q;O++){const ee=S[O];if(m(ee)){const K=x(R),xe=n.get(ee).__webglTexture;t.bindTexture(K,xe),g(K),t.unbindTexture()}}}const Qe=[],ze=[];function X(R){if(R.samples>0){if(xt(R)===!1){const S=R.textures,O=R.width,Q=R.height;let ee=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(R),le=S.length>1;if(le)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const De=R.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);const re=n.get(S[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,O,Q,0,0,O,Q,ee,r.NEAREST),l===!0&&(Qe.length=0,ze.length=0,Qe.push(r.COLOR_ATTACHMENT0+Me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Qe.push(K),ze.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ze)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);const re=n.get(S[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function N(R){return Math.min(i.maxSamples,R.samples)}function xt(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function st(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function We(R,S){const O=R.colorSpace,Q=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Gn&&O!==Kr&&(ht.getTransfer(O)===St?(Q!==Mi||ee!==ai)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",O)),S}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=F,this.setTextureCube=J,this.rebindTextures=mt,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Hb(r,e){function t(n,i=Kr){let s;const a=ht.getTransfer(i);if(n===ai)return r.UNSIGNED_BYTE;if(n===jh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$h)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Sg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Tg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===yg)return r.BYTE;if(n===Mg)return r.SHORT;if(n===Xo)return r.UNSIGNED_SHORT;if(n===Kh)return r.INT;if(n===sr)return r.UNSIGNED_INT;if(n===yi)return r.FLOAT;if(n===ar)return r.HALF_FLOAT;if(n===bg)return r.ALPHA;if(n===Eg)return r.RGB;if(n===Mi)return r.RGBA;if(n===Cr)return r.DEPTH_COMPONENT;if(n===Es)return r.DEPTH_STENCIL;if(n===Zh)return r.RED;if(n===Jh)return r.RED_INTEGER;if(n===Da)return r.RG;if(n===Qh)return r.RG_INTEGER;if(n===ed)return r.RGBA_INTEGER;if(n===lc||n===cc||n===uc||n===fc)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tf||n===bf||n===Ef||n===wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ef)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Af||n===Rf||n===Cf||n===Pf||n===If||n===Df||n===Lf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Af||n===Rf)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Cf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pf)return s.COMPRESSED_R11_EAC;if(n===If)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Df)return s.COMPRESSED_RG11_EAC;if(n===Lf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nf||n===Uf||n===Of||n===Ff||n===Bf||n===kf||n===zf||n===Vf||n===Gf||n===Hf||n===Wf||n===Xf||n===Yf||n===qf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Of)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ff)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kf||n===jf||n===$f)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Kf)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$f)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zf||n===Jf||n===Qf||n===eh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ki({vertexShader:Wb,fragmentShader:Xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Ka(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qb extends qa{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",m=new Yb,g={},x=t.getContextAttributes();let M=null,y=null;const b=[],E=[],A=new pt;let v=null;const T=new wn;T.viewport=new Pt;const D=new wn;D.viewport=new Pt;const C=[T,D],I=new $v;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=b[$];return te===void 0&&(te=new mu,b[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=b[$];return te===void 0&&(te=new mu,b[$]=te),te.getGripSpace()},this.getHand=function($){let te=b[$];return te===void 0&&(te=new mu,b[$]=te),te.getHandSpace()};function z($){const te=E.indexOf($.inputSource);if(te===-1)return;const ie=b[te];ie!==void 0&&(ie.update($.inputSource,$.frame,c||a),ie.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",F);for(let $=0;$<b.length;$++){const te=E[$];te!==null&&(E[$]=null,b[$].disconnect(te))}k=null,V=null,m.reset();for(const $ in g)delete g[$];e.setRenderTarget(M),d=null,h=null,f=null,i=null,y=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",U),i.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ie=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=x.stencil?Es:Cr,Ie=x.stencil?Yo:sr);const we={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(we),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Oi(h.textureWidth,h.textureHeight,{format:Mi,type:ai,depthTexture:new Zo(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Oi(d.framebufferWidth,d.framebufferHeight,{format:Mi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F($){for(let te=0;te<$.removed.length;te++){const ie=$.removed[te],Ie=E.indexOf(ie);Ie>=0&&(E[Ie]=null,b[Ie].disconnect(ie))}for(let te=0;te<$.added.length;te++){const ie=$.added[te];let Ie=E.indexOf(ie);if(Ie===-1){for(let we=0;we<b.length;we++)if(we>=E.length){E.push(ie),Ie=we;break}else if(E[we]===null){E[we]=ie,Ie=we;break}if(Ie===-1)break}const Pe=b[Ie];Pe&&Pe.connect(ie)}}const J=new G,j=new G;function P($,te,ie){J.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ie.matrixWorld);const Ie=J.distanceTo(j),Pe=te.projectionMatrix.elements,we=ie.projectionMatrix.elements,mt=Pe[14]/(Pe[10]-1),be=Pe[14]/(Pe[10]+1),Ve=(Pe[9]+1)/Pe[5],Qe=(Pe[9]-1)/Pe[5],ze=(Pe[8]-1)/Pe[0],X=(we[8]+1)/we[0],N=mt*ze,xt=mt*X,st=Ie/(-ze+X),We=st*-ze;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(We),$.translateZ(st),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pe[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ye=mt+st,R=be+st,S=N-We,O=xt+(Ie-We),Q=Ve*be/R*ye,ee=Qe*be/R*ye;$.projectionMatrix.makePerspective(S,O,Q,ee,ye,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let te=$.near,ie=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),I.near=D.near=T.near=te,I.far=D.far=T.far=ie,(k!==I.near||V!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),k=I.near,V=I.far),I.layers.mask=$.layers.mask|6,T.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;const Ie=$.parent,Pe=I.cameras;ae(I,Ie);for(let we=0;we<Pe.length;we++)ae(Pe[we],Ie);Pe.length===2?P(I,T,D):I.projectionMatrix.copy(T.projectionMatrix),ue($,I,Ie)};function ue($,te,ie){ie===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(ie.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=La*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function($){return g[$]};let Ue=null;function He($,te){if(u=te.getViewerPose(c||a),p=te,u!==null){const ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ie=!1;ie.length!==I.cameras.length&&(I.cameras.length=0,Ie=!0);for(let be=0;be<ie.length;be++){const Ve=ie[be];let Qe=null;if(d!==null)Qe=d.getViewport(Ve);else{const X=f.getViewSubImage(h,Ve);Qe=X.viewport,be===0&&(e.setRenderTargetTextures(y,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(y))}let ze=C[be];ze===void 0&&(ze=new wn,ze.layers.enable(be),ze.viewport=new Pt,C[be]=ze),ze.matrix.fromArray(Ve.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ve.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),be===0&&(I.matrix.copy(ze.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ie===!0&&I.cameras.push(ze)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const be=f.getDepthInformation(ie[0]);be&&be.isValid&&be.texture&&m.init(be,i.renderState)}if(Pe&&Pe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let be=0;be<ie.length;be++){const Ve=ie[be].camera;if(Ve){let Qe=g[Ve];Qe||(Qe=new Fg,g[Ve]=Qe);const ze=f.getCameraImage(Ve);Qe.sourceTexture=ze}}}}for(let ie=0;ie<b.length;ie++){const Ie=E[ie],Pe=b[ie];Ie!==null&&Pe!==void 0&&Pe.update(Ie,te,c||a)}Ue&&Ue($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}const je=new Xg;je.setAnimationLoop(He),this.setAnimationLoop=function($){Ue=$},this.dispose=function(){}}}const gs=new Bi,Kb=new Je;function jb(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Bg(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,M,y){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),f(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,x,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Vn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Vn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),M=x.envMap,y=x.envMapRotation;M&&(m.envMap.value=M,gs.copy(y),gs.x*=-1,gs.y*=-1,gs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(gs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $b(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const y=M.program;n.uniformBlockBinding(x,y)}function c(x,M){let y=i[x.id];y===void 0&&(p(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(x,b);const E=e.render.frame;s[x.id]!==E&&(h(x),s[x.id]=E)}function u(x){const M=f();x.__bindingPointIndex=M;const y=r.createBuffer(),b=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,b,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=i[x.id],y=x.uniforms,b=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,A=y.length;E<A;E++){const v=Array.isArray(y[E])?y[E]:[y[E]];for(let T=0,D=v.length;T<D;T++){const C=v[T];if(d(C,E,T,b)===!0){const I=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let z=0;z<k.length;z++){const U=k[z],F=_(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,I+V,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,M,y,b){const E=x.value,A=M+"_"+y;if(b[A]===void 0)return typeof E=="number"||typeof E=="boolean"?b[A]=E:b[A]=E.clone(),!0;{const v=b[A];if(typeof E=="number"||typeof E=="boolean"){if(v!==E)return b[A]=E,!0}else if(v.equals(E)===!1)return v.copy(E),!0}return!1}function p(x){const M=x.uniforms;let y=0;const b=16;for(let A=0,v=M.length;A<v;A++){const T=Array.isArray(M[A])?M[A]:[M[A]];for(let D=0,C=T.length;D<C;D++){const I=T[D],k=Array.isArray(I.value)?I.value:[I.value];for(let V=0,z=k.length;V<z;V++){const U=k[V],F=_(U),J=y%b,j=J%F.boundary,P=J+j;y+=j,P!==0&&b-P<F.storage&&(y+=b-P),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=F.storage}}}const E=y%b;return E>0&&(y+=b-E),x.__size=y,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:g}}const Zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function Jb(){return Hi===null&&(Hi=new od(Zb,16,16,Da,ar),Hi.name="DFG_LUT",Hi.minFilter=nn,Hi.magFilter=nn,Hi.wrapS=Zi,Hi.wrapT=Zi,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class Qb{constructor(e={}){const{canvas:t=wx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ai}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,m=new Set([ed,Qh,Jh]),g=new Set([ai,sr,Xo,Yo,jh,$h]),x=new Uint32Array(4),M=new Int32Array(4);let y=null,b=null;const E=[],A=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=fn;let C=0,I=0,k=null,V=-1,z=null;const U=new Pt,F=new Pt;let J=null;const j=new Ge(0);let P=0,ae=t.width,ue=t.height,Ue=1,He=null,je=null;const $=new Pt(0,0,ae,ue),te=new Pt(0,0,ae,ue);let ie=!1;const Ie=new cd;let Pe=!1,we=!1;const mt=new Je,be=new G,Ve=new Pt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function X(){return k===null?Ue:1}let N=n;function xt(w,B){return t.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xh}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",gt,!1),N===null){const B="webgl2";if(N=xt(B,w),N===null)throw xt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Xe("WebGLRenderer: "+w.message),w}let st,We,ye,R,S,O,Q,ee,K,xe,le,De,Me,re,oe,Se,Ee,de,Ye,L,ce,se,pe;function ne(){st=new QS(N),st.init(),ce=new Hb(N,st),We=new XS(N,st,e,ce),ye=new Vb(N,st),We.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),R=new nT(N),S=new Ab,O=new Gb(N,st,ye,S,We,ce,R),Q=new JS(T),ee=new oy(N),se=new HS(N,ee),K=new eT(N,ee,R,se),xe=new rT(N,K,ee,se,R),de=new iT(N,We,O),oe=new YS(S),le=new wb(T,Q,st,We,se,oe),De=new jb(T,S),Me=new Cb,re=new Ub(st),Ee=new GS(T,Q,ye,xe,p,l),Se=new zb(T,xe,We),pe=new $b(N,R,We,ye),Ye=new WS(N,st,R),L=new tT(N,st,R),R.programs=le.programs,T.capabilities=We,T.extensions=st,T.properties=S,T.renderLists=Me,T.shadowMap=Se,T.state=ye,T.info=R}ne(),_!==ai&&(v=new aT(_,t.width,t.height,i,s));const Z=new qb(T,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(w){w!==void 0&&(Ue=w,this.setSize(ae,ue,!1))},this.getSize=function(w){return w.set(ae,ue)},this.setSize=function(w,B,Y=!0){if(Z.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=w,ue=B,t.width=Math.floor(w*Ue),t.height=Math.floor(B*Ue),Y===!0&&(t.style.width=w+"px",t.style.height=B+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(ae*Ue,ue*Ue).floor()},this.setDrawingBufferSize=function(w,B,Y){ae=w,ue=B,Ue=Y,t.width=Math.floor(w*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(_===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,B,Y,W){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,B,Y,W),ye.viewport(U.copy($).multiplyScalar(Ue).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,B,Y,W){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,B,Y,W),ye.scissor(F.copy(te).multiplyScalar(Ue).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){ye.setScissorTest(ie=w)},this.setOpaqueSort=function(w){He=w},this.setTransparentSort=function(w){je=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,Y=!0){let W=0;if(w){let H=!1;if(k!==null){const fe=k.texture.format;H=m.has(fe)}if(H){const fe=k.texture.type,me=g.has(fe),he=Ee.getClearColor(),Re=Ee.getClearAlpha(),Ae=he.r,et=he.g,at=he.b;me?(x[0]=Ae,x[1]=et,x[2]=at,x[3]=Re,N.clearBufferuiv(N.COLOR,0,x)):(M[0]=Ae,M[1]=et,M[2]=at,M[3]=Re,N.clearBufferiv(N.COLOR,0,M))}else W|=N.COLOR_BUFFER_BIT}B&&(W|=N.DEPTH_BUFFER_BIT),Y&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Ee.dispose(),Me.dispose(),re.dispose(),S.dispose(),Q.dispose(),xe.dispose(),se.dispose(),pe.dispose(),le.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ke),Z.removeEventListener("sessionend",Gt),Ze.stop()};function Te(w){w.preventDefault(),Cc("WebGLRenderer: Context Lost."),D=!0}function Be(){Cc("WebGLRenderer: Context Restored."),D=!1;const w=R.autoReset,B=Se.enabled,Y=Se.autoUpdate,W=Se.needsUpdate,H=Se.type;ne(),R.autoReset=w,Se.enabled=B,Se.autoUpdate=Y,Se.needsUpdate=W,Se.type=H}function gt(w){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ve(w){const B=w.target;B.removeEventListener("dispose",ve),Le(B)}function Le(w){tt(w),S.remove(w)}function tt(w){const B=S.get(w).programs;B!==void 0&&(B.forEach(function(Y){le.releaseProgram(Y)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Y,W,H,fe){B===null&&(B=Qe);const me=H.isMesh&&H.matrixWorld.determinant()<0,he=pi(w,B,Y,W,H);ye.setMaterial(W,me);let Re=Y.index,Ae=1;if(W.wireframe===!0){if(Re=K.getWireframeAttribute(Y),Re===void 0)return;Ae=2}const et=Y.drawRange,at=Y.attributes.position;let Oe=et.start*Ae,Et=(et.start+et.count)*Ae;fe!==null&&(Oe=Math.max(Oe,fe.start*Ae),Et=Math.min(Et,(fe.start+fe.count)*Ae)),Re!==null?(Oe=Math.max(Oe,0),Et=Math.min(Et,Re.count)):at!=null&&(Oe=Math.max(Oe,0),Et=Math.min(Et,at.count));const Ht=Et-Oe;if(Ht<0||Ht===1/0)return;se.setup(H,W,he,Y,Re);let zt,wt=Ye;if(Re!==null&&(zt=ee.get(Re),wt=L,wt.setIndex(zt)),H.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*X()),wt.setMode(N.LINES)):wt.setMode(N.TRIANGLES);else if(H.isLine){let Mn=W.linewidth;Mn===void 0&&(Mn=1),ye.setLineWidth(Mn*X()),H.isLineSegments?wt.setMode(N.LINES):H.isLineLoop?wt.setMode(N.LINE_LOOP):wt.setMode(N.LINE_STRIP)}else H.isPoints?wt.setMode(N.POINTS):H.isSprite&&wt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Pc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))wt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Mn=H._multiDrawStarts,Ne=H._multiDrawCounts,Jn=H._multiDrawCount,_t=Re?ee.get(Re).bytesPerElement:1,Ei=S.get(W).currentProgram.getUniforms();for(let Vi=0;Vi<Jn;Vi++)Ei.setValue(N,"_gl_DrawID",Vi),wt.render(Mn[Vi]/_t,Ne[Vi])}else if(H.isInstancedMesh)wt.renderInstances(Oe,Ht,H.count);else if(Y.isInstancedBufferGeometry){const Mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ne=Math.min(Y.instanceCount,Mn);wt.renderInstances(Oe,Ht,Ne)}else wt.render(Oe,Ht)};function _e(w,B,Y){w.transparent===!0&&w.side===Ii&&w.forceSinglePass===!1?(w.side=Vn,w.needsUpdate=!0,vn(w,B,Y),w.side=rr,w.needsUpdate=!0,vn(w,B,Y),w.side=Ii):vn(w,B,Y)}this.compile=function(w,B,Y=null){Y===null&&(Y=w),b=re.get(Y),b.init(B),A.push(b),Y.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),w!==Y&&w.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();const W=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let me=0;me<fe.length;me++){const he=fe[me];_e(he,Y,H),W.add(he)}else _e(fe,Y,H),W.add(fe)}),b=A.pop(),W},this.compileAsync=function(w,B,Y=null){const W=this.compile(w,B,Y);return new Promise(H=>{function fe(){if(W.forEach(function(me){S.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){H(w);return}setTimeout(fe,10)}st.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let qe=null;function ke(w){qe&&qe(w)}function Ke(){Ze.stop()}function Gt(){Ze.start()}const Ze=new Xg;Ze.setAnimationLoop(ke),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(w){qe=w,Z.setAnimationLoop(w),w===null?Ze.stop():Ze.start()},Z.addEventListener("sessionstart",Ke),Z.addEventListener("sessionend",Gt),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const Y=Z.enabled===!0&&Z.isPresenting===!0,W=v!==null&&(k===null||Y)&&v.begin(T,k);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,B,k),b=re.get(w,A.length),b.init(B),A.push(b),mt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ie.setFromProjectionMatrix(mt,Ji,B.reversedDepth),we=this.localClippingEnabled,Pe=oe.init(this.clippingPlanes,we),y=Me.get(w,E.length),y.init(),E.push(y),Z.enabled===!0&&Z.isPresenting===!0){const me=T.xr.getDepthSensingMesh();me!==null&&Lt(me,B,-1/0,T.sortObjects)}Lt(w,B,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(He,je),ze=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ze&&Ee.addToRenderList(y,w),this.info.render.frame++,Pe===!0&&oe.beginShadows();const H=b.state.shadowsArray;if(Se.render(H,w,B),Pe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&v.hasRenderPass())===!1){const me=y.opaque,he=y.transmissive;if(b.setupLights(),B.isArrayCamera){const Re=B.cameras;if(he.length>0)for(let Ae=0,et=Re.length;Ae<et;Ae++){const at=Re[Ae];Nt(me,he,w,at)}ze&&Ee.render(w);for(let Ae=0,et=Re.length;Ae<et;Ae++){const at=Re[Ae];$t(y,w,at,at.viewport)}}else he.length>0&&Nt(me,he,w,B),ze&&Ee.render(w),$t(y,w,B)}k!==null&&I===0&&(O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k)),W&&v.end(T),w.isScene===!0&&w.onAfterRender(T,w,B),se.resetDefaultState(),V=-1,z=null,A.pop(),A.length>0?(b=A[A.length-1],Pe===!0&&oe.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Lt(w,B,Y,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){W&&Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(mt);const me=xe.update(w),he=w.material;he.visible&&y.push(w,me,he,Y,Ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){const me=xe.update(w),he=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ve.copy(me.boundingSphere.center)),Ve.applyMatrix4(w.matrixWorld).applyMatrix4(mt)),Array.isArray(he)){const Re=me.groups;for(let Ae=0,et=Re.length;Ae<et;Ae++){const at=Re[Ae],Oe=he[at.materialIndex];Oe&&Oe.visible&&y.push(w,me,Oe,Y,Ve.z,at)}}else he.visible&&y.push(w,me,he,Y,Ve.z,null)}}const fe=w.children;for(let me=0,he=fe.length;me<he;me++)Lt(fe[me],B,Y,W)}function $t(w,B,Y,W){const{opaque:H,transmissive:fe,transparent:me}=w;b.setupLightsView(Y),Pe===!0&&oe.setGlobalState(T.clippingPlanes,Y),W&&ye.viewport(U.copy(W)),H.length>0&&Mt(H,B,Y),fe.length>0&&Mt(fe,B,Y),me.length>0&&Mt(me,B,Y),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Nt(w,B,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Oe=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Oi(1,1,{generateMipmaps:!0,type:Oe?ar:ai,minFilter:Mr,samples:Math.max(4,We.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const fe=b.state.transmissionRenderTarget[W.id],me=W.viewport||U;fe.setSize(me.z*T.transmissionResolutionScale,me.w*T.transmissionResolutionScale);const he=T.getRenderTarget(),Re=T.getActiveCubeFace(),Ae=T.getActiveMipmapLevel();T.setRenderTarget(fe),T.getClearColor(j),P=T.getClearAlpha(),P<1&&T.setClearColor(16777215,.5),T.clear(),ze&&Ee.render(Y);const et=T.toneMapping;T.toneMapping=tr;const at=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Pe===!0&&oe.setGlobalState(T.clippingPlanes,W),Mt(w,Y,W),O.updateMultisampleRenderTarget(fe),O.updateRenderTargetMipmap(fe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Et=0,Ht=B.length;Et<Ht;Et++){const zt=B[Et],{object:wt,geometry:Mn,material:Ne,group:Jn}=zt;if(Ne.side===Ii&&wt.layers.test(W.layers)){const _t=Ne.side;Ne.side=Vn,Ne.needsUpdate=!0,vt(wt,Y,W,Mn,Ne,Jn),Ne.side=_t,Ne.needsUpdate=!0,Oe=!0}}Oe===!0&&(O.updateMultisampleRenderTarget(fe),O.updateRenderTargetMipmap(fe))}T.setRenderTarget(he,Re,Ae),T.setClearColor(j,P),at!==void 0&&(W.viewport=at),T.toneMapping=et}function Mt(w,B,Y){const W=B.isScene===!0?B.overrideMaterial:null;for(let H=0,fe=w.length;H<fe;H++){const me=w[H],{object:he,geometry:Re,group:Ae}=me;let et=me.material;et.allowOverride===!0&&W!==null&&(et=W),he.layers.test(Y.layers)&&vt(he,B,Y,Re,et,Ae)}}function vt(w,B,Y,W,H,fe){w.onBeforeRender(T,B,Y,W,H,fe),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(T,B,Y,W,w,fe),H.transparent===!0&&H.side===Ii&&H.forceSinglePass===!1?(H.side=Vn,H.needsUpdate=!0,T.renderBufferDirect(Y,B,W,H,w,fe),H.side=rr,H.needsUpdate=!0,T.renderBufferDirect(Y,B,W,H,w,fe),H.side=Ii):T.renderBufferDirect(Y,B,W,H,w,fe),w.onAfterRender(T,B,Y,W,H,fe)}function vn(w,B,Y){B.isScene!==!0&&(B=Qe);const W=S.get(w),H=b.state.lights,fe=b.state.shadowsArray,me=H.state.version,he=le.getParameters(w,H.state,fe,B,Y),Re=le.getProgramCacheKey(he);let Ae=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const et=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=Q.get(w.envMap||W.environment,et),W.envMapRotation=W.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",ve),Ae=new Map,W.programs=Ae);let at=Ae.get(Re);if(at!==void 0){if(W.currentProgram===at&&W.lightsStateVersion===me)return yn(w,he),at}else he.uniforms=le.getUniforms(w),w.onBeforeCompile(he,T),at=le.acquireProgram(he,Re),Ae.set(Re,at),W.uniforms=he.uniforms;const Oe=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=oe.uniform),yn(w,he),W.needsLights=Jt(w),W.lightsStateVersion=me,W.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=at,W.uniformsList=null,at}function It(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=hc.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function yn(w,B){const Y=S.get(w);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function pi(w,B,Y,W,H){B.isScene!==!0&&(B=Qe),O.resetTextureUnits();const fe=B.fog,me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,he=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Gn,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ae=Q.get(W.envMap||me,Re),et=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,at=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!Y.morphAttributes.position,Et=!!Y.morphAttributes.normal,Ht=!!Y.morphAttributes.color;let zt=tr;W.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(zt=T.toneMapping);const wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mn=wt!==void 0?wt.length:0,Ne=S.get(W),Jn=b.state.lights;if(Pe===!0&&(we===!0||w!==z)){const on=w===z&&W.id===V;oe.setState(W,w,on)}let _t=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Jn.state.version||Ne.outputColorSpace!==he||H.isBatchedMesh&&Ne.batching===!1||!H.isBatchedMesh&&Ne.batching===!0||H.isBatchedMesh&&Ne.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ne.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ne.instancing===!1||!H.isInstancedMesh&&Ne.instancing===!0||H.isSkinnedMesh&&Ne.skinning===!1||!H.isSkinnedMesh&&Ne.skinning===!0||H.isInstancedMesh&&Ne.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ne.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ne.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ne.instancingMorph===!1&&H.morphTexture!==null||Ne.envMap!==Ae||W.fog===!0&&Ne.fog!==fe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==oe.numPlanes||Ne.numIntersection!==oe.numIntersection)||Ne.vertexAlphas!==et||Ne.vertexTangents!==at||Ne.morphTargets!==Oe||Ne.morphNormals!==Et||Ne.morphColors!==Ht||Ne.toneMapping!==zt||Ne.morphTargetsCount!==Mn)&&(_t=!0):(_t=!0,Ne.__version=W.version);let Ei=Ne.currentProgram;_t===!0&&(Ei=vn(W,B,H));let Vi=!1,us=!1,Xs=!1;const At=Ei.getUniforms(),pn=Ne.uniforms;if(ye.useProgram(Ei.program)&&(Vi=!0,us=!0,Xs=!0),W.id!==V&&(V=W.id,us=!0),Vi||z!==w){ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),At.setValue(N,"projectionMatrix",w.projectionMatrix),At.setValue(N,"viewMatrix",w.matrixWorldInverse);const Or=At.map.cameraPosition;Or!==void 0&&Or.setValue(N,be.setFromMatrixPosition(w.matrixWorld)),We.logarithmicDepthBuffer&&At.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,us=!0,Xs=!0)}if(Ne.needsLights&&(Jn.state.directionalShadowMap.length>0&&At.setValue(N,"directionalShadowMap",Jn.state.directionalShadowMap,O),Jn.state.spotShadowMap.length>0&&At.setValue(N,"spotShadowMap",Jn.state.spotShadowMap,O),Jn.state.pointShadowMap.length>0&&At.setValue(N,"pointShadowMap",Jn.state.pointShadowMap,O)),H.isSkinnedMesh){At.setOptional(N,H,"bindMatrix"),At.setOptional(N,H,"bindMatrixInverse");const on=H.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),At.setValue(N,"boneTexture",on.boneTexture,O))}H.isBatchedMesh&&(At.setOptional(N,H,"batchingTexture"),At.setValue(N,"batchingTexture",H._matricesTexture,O),At.setOptional(N,H,"batchingIdTexture"),At.setValue(N,"batchingIdTexture",H._indirectTexture,O),At.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&At.setValue(N,"batchingColorTexture",H._colorsTexture,O));const Ur=Y.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&de.update(H,Y,Ei),(us||Ne.receiveShadow!==H.receiveShadow)&&(Ne.receiveShadow=H.receiveShadow,At.setValue(N,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(pn.envMapIntensity.value=B.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=Jb()),us&&(At.setValue(N,"toneMappingExposure",T.toneMappingExposure),Ne.needsLights&&Zt(pn,Xs),fe&&W.fog===!0&&De.refreshFogUniforms(pn,fe),De.refreshMaterialUniforms(pn,W,Ue,ue,b.state.transmissionRenderTarget[w.id]),hc.upload(N,It(Ne),pn,O)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(hc.upload(N,It(Ne),pn,O),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(N,"center",H.center),At.setValue(N,"modelViewMatrix",H.modelViewMatrix),At.setValue(N,"normalMatrix",H.normalMatrix),At.setValue(N,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const on=W.uniformsGroups;for(let Or=0,Ys=on.length;Or<Ys;Or++){const Jd=on[Or];pe.update(Jd,Ei),pe.bind(Jd,Ei)}}return Ei}function Zt(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Jt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,B,Y){const W=S.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=B,S.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const Y=S.get(w);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const an=N.createFramebuffer();this.setRenderTarget=function(w,B=0,Y=0){k=w,C=B,I=Y;let W=null,H=!1,fe=!1;if(w){const he=S.get(w);if(he.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(N.FRAMEBUFFER,he.__webglFramebuffer),U.copy(w.viewport),F.copy(w.scissor),J=w.scissorTest,ye.viewport(U),ye.scissor(F),ye.setScissorTest(J),V=-1;return}else if(he.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(he.__hasExternalTextures)O.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const et=w.depthTexture;if(he.__boundDepthTexture!==et){if(et!==null&&S.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}const Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(fe=!0);const Ae=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[B])?W=Ae[B][Y]:W=Ae[B],H=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?W=S.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[Y]:W=Ae,U.copy(w.viewport),F.copy(w.scissor),J=w.scissorTest}else U.copy($).multiplyScalar(Ue).floor(),F.copy(te).multiplyScalar(Ue).floor(),J=ie;if(Y!==0&&(W=an),ye.bindFramebuffer(N.FRAMEBUFFER,W)&&ye.drawBuffers(w,W),ye.viewport(U),ye.scissor(F),ye.setScissorTest(J),H){const he=S.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,he.__webglTexture,Y)}else if(fe){const he=B;for(let Re=0;Re<w.textures.length;Re++){const Ae=S.get(w.textures[Re]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Re,Ae.__webglTexture,Y,he)}}else if(w!==null&&Y!==0){const he=S.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.__webglTexture,Y)}V=-1},this.readRenderTargetPixels=function(w,B,Y,W,H,fe,me,he=0){if(!(w&&w.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Re=Re[me]),Re){ye.bindFramebuffer(N.FRAMEBUFFER,Re);try{const Ae=w.textures[he],et=Ae.format,at=Ae.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!We.textureFormatReadable(et)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(at)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&Y>=0&&Y<=w.height-H&&N.readPixels(B,Y,W,H,ce.convert(et),ce.convert(at),fe)}finally{const Ae=k!==null?S.get(k).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,B,Y,W,H,fe,me,he=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Re=Re[me]),Re)if(B>=0&&B<=w.width-W&&Y>=0&&Y<=w.height-H){ye.bindFramebuffer(N.FRAMEBUFFER,Re);const Ae=w.textures[he],et=Ae.format,at=Ae.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!We.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Oe),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),N.readPixels(B,Y,W,H,ce.convert(et),ce.convert(at),0);const Et=k!==null?S.get(k).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,Et);const Ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ax(N,Ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Oe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.deleteBuffer(Oe),N.deleteSync(Ht),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,Y=0){const W=Math.pow(2,-Y),H=Math.floor(w.image.width*W),fe=Math.floor(w.image.height*W),me=B!==null?B.x:0,he=B!==null?B.y:0;O.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,me,he,H,fe),ye.unbindTexture()};const ur=N.createFramebuffer(),Ws=N.createFramebuffer();this.copyTextureToTexture=function(w,B,Y=null,W=null,H=0,fe=0){let me,he,Re,Ae,et,at,Oe,Et,Ht;const zt=w.isCompressedTexture?w.mipmaps[fe]:w.image;if(Y!==null)me=Y.max.x-Y.min.x,he=Y.max.y-Y.min.y,Re=Y.isBox3?Y.max.z-Y.min.z:1,Ae=Y.min.x,et=Y.min.y,at=Y.isBox3?Y.min.z:0;else{const pn=Math.pow(2,-H);me=Math.floor(zt.width*pn),he=Math.floor(zt.height*pn),w.isDataArrayTexture?Re=zt.depth:w.isData3DTexture?Re=Math.floor(zt.depth*pn):Re=1,Ae=0,et=0,at=0}W!==null?(Oe=W.x,Et=W.y,Ht=W.z):(Oe=0,Et=0,Ht=0);const wt=ce.convert(B.format),Mn=ce.convert(B.type);let Ne;B.isData3DTexture?(O.setTexture3D(B,0),Ne=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(O.setTexture2DArray(B,0),Ne=N.TEXTURE_2D_ARRAY):(O.setTexture2D(B,0),Ne=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Jn=N.getParameter(N.UNPACK_ROW_LENGTH),_t=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ei=N.getParameter(N.UNPACK_SKIP_PIXELS),Vi=N.getParameter(N.UNPACK_SKIP_ROWS),us=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,zt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,zt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),N.pixelStorei(N.UNPACK_SKIP_ROWS,et),N.pixelStorei(N.UNPACK_SKIP_IMAGES,at);const Xs=w.isDataArrayTexture||w.isData3DTexture,At=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const pn=S.get(w),Ur=S.get(B),on=S.get(pn.__renderTarget),Or=S.get(Ur.__renderTarget);ye.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Ys=0;Ys<Re;Ys++)Xs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,S.get(w).__webglTexture,H,at+Ys),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,S.get(B).__webglTexture,fe,Ht+Ys)),N.blitFramebuffer(Ae,et,me,he,Oe,Et,me,he,N.DEPTH_BUFFER_BIT,N.NEAREST);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||S.has(w)){const pn=S.get(w),Ur=S.get(B);ye.bindFramebuffer(N.READ_FRAMEBUFFER,ur),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ws);for(let on=0;on<Re;on++)Xs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pn.__webglTexture,H,at+on):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pn.__webglTexture,H),At?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ur.__webglTexture,fe,Ht+on):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ur.__webglTexture,fe),H!==0?N.blitFramebuffer(Ae,et,me,he,Oe,Et,me,he,N.COLOR_BUFFER_BIT,N.NEAREST):At?N.copyTexSubImage3D(Ne,fe,Oe,Et,Ht+on,Ae,et,me,he):N.copyTexSubImage2D(Ne,fe,Oe,Et,Ae,et,me,he);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else At?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Ne,fe,Oe,Et,Ht,me,he,Re,wt,Mn,zt.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,fe,Oe,Et,Ht,me,he,Re,wt,zt.data):N.texSubImage3D(Ne,fe,Oe,Et,Ht,me,he,Re,wt,Mn,zt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,fe,Oe,Et,me,he,wt,Mn,zt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,fe,Oe,Et,zt.width,zt.height,wt,zt.data):N.texSubImage2D(N.TEXTURE_2D,fe,Oe,Et,me,he,wt,Mn,zt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Jn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ei),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,us),fe===0&&B.generateMipmaps&&N.generateMipmap(Ne),ye.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){C=0,I=0,k=null,ye.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}function _r(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ba={duration:.5,overwrite:!1,delay:0},_d,gn,Ut,Si=1e8,Ct=1/Si,lh=Math.PI*2,eE=lh/4,tE=0,Jg=Math.sqrt,nE=Math.cos,iE=Math.sin,dn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Pr=function(e){return typeof e=="number"},xd=function(e){return typeof e>"u"},or=function(e){return typeof e=="object"},Yn=function(e){return e!==!1},vd=function(){return typeof window<"u"},Xl=function(e){return Vt(e)||dn(e)},Qg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,rE=/random\([^)]+\)/g,sE=/,\s*/g,mm=/(?:-?\.?\d|\.)+/gi,e_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,t_=/[+-]=-?[.\d]+/,aE=/[^,'"\[\]\s]+/gi,oE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,qi,ch,yd,hi={},Lc={},n_,i_=function(e){return(Lc=ka(e,hi))&&$n},Md=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Jo=function(e,t){return!t&&console.warn(e)},r_=function(e,t){return e&&(hi[e]=t)&&Lc&&(Lc[e]=t)||hi},Qo=function(){return 0},lE={suppressEvents:!0,isStart:!0,kill:!1},dc={suppressEvents:!0,kill:!1},cE={suppressEvents:!0},Sd={},ns=[],uh={},s_,ri={},Wu={},gm=30,pc=[],Td="",bd=function(e){var t=e[0],n,i;if(or(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=pc.length;i--&&!pc[i].targetTest(t););n=pc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new C_(e[i],n)))||e.splice(i,1);return e},Cs=function(e){return e._gsap||bd(Ti(e))[0]._gsap},a_=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():xd(n)&&e.getAttribute&&e.getAttribute(t)||n},qn=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Sa=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},uE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Nc=function(){var e=ns.length,t=ns.slice(0),n,i;for(uh={},ns.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ed=function(e){return!!(e._initted||e._startAt||e.add)},o_=function(e,t,n,i){ns.length&&!gn&&Nc(),e.render(t,n,!!(gn&&t<0&&Ed(e))),ns.length&&!gn&&Nc()},l_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(aE).length<2?t:dn(e)?e.trim():e},c_=function(e){return e},di=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},fE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ka=function(e,t){for(var n in t)e[n]=t[n];return e},_m=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=or(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Uc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Do=function(e){var t=e.parent||Bt,n=e.keyframes?fE(In(e.keyframes)):di;if(Yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},u_=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},tu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ss=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},dE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},fh=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(dc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},pE=function r(e){return!e||e._ts&&r(e.parent)},xm=function(e){return e._repeat?za(e._tTime,e=e.duration()+e._rDelay)*e:0},za=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},Oc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},nu=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ct)||0))},iu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),nu(e),n._dirty||Ps(n,e)),e},f_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Oc(e.rawTime(),t),(!t._dur||ml(0,t.totalDuration(),n)-t._tTime>Ct)&&t.render(n,!0)),Ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ct}},$i=function(e,t,n,i){return t.parent&&ss(t),t._start=Ft((Pr(n)?n:n||e!==Bt?gi(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),u_(e,t,"_first","_last",e._sort?"_start":0),hh(t)||(e._recent=t),i||f_(e,t),e._ts<0&&iu(e,e._tTime),e},h_=function(e,t){return(hi.ScrollTrigger||Md("scrollTrigger",t))&&hi.ScrollTrigger.create(t,e)},d_=function(e,t,n,i,s){if(Ad(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&s_!==oi.frame)return ns.push(e),e._lazy=[s,i],1},mE=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},hh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gE=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&mE(e)&&!(!e._initted&&hh(e))||(e._ts<0||e._dp._ts<0)&&!hh(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=ml(0,e._tDur,t),u=za(l,o),e._yoyo&&u&1&&(a=1-a),u!==za(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||gn||i||e._zTime===Ct||!t&&e._zTime){if(!e._initted&&d_(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ct:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&fh(e,t,n,!0),e._onUpdate&&!n&&ci(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ss(e,1),!n&&!gn&&(ci(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_E=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Va=function(e,t,n,i){var s=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ft(a*(s+1)+e._rDelay*s):a,o>0&&!i&&iu(e,e._tTime=e._tDur*o),e.parent&&nu(e),n||Ps(e.parent,e),e},vm=function(e){return e instanceof kn?Ps(e):Va(e,e._dur)},xE={_start:0,endTime:Qo,totalDuration:Qo},gi=function r(e,t,n){var i=e.labels,s=e._recent||xE,a=e.duration()>=Si?s.endTime(!1):e._dur,o,l,c;return dn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Lo=function(e,t,n){var i=Pr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;a.immediateRender=Yn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new jt(t[0],a,t[s+1])},cs=function(e,t){return e||e===0?t(e):t},ml=function(e,t,n){return n<e?e:n>t?t:n},Rn=function(e,t){return!dn(e)||!(t=oE.exec(e))?"":t[1]},vE=function(e,t,n){return cs(n,function(i){return ml(e,t,i)})},dh=[].slice,p_=function(e,t){return e&&or(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&or(e[0]))&&!e.nodeType&&e!==qi},yE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return dn(i)&&!t||p_(i,1)?(s=n).push.apply(s,Ti(i)):n.push(i)})||n},Ti=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):dn(e)&&!n&&(ch||!Ga())?dh.call((t||yd).querySelectorAll(e),0):In(e)?yE(e,n):p_(e)?dh.call(e,0):e?[e]:[]},ph=function(e){return e=Ti(e)[0]||Jo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ti(t,n.querySelectorAll?n:n===e?Jo("Invalid scope")||yd.createElement("div"):e)}},m_=function(e){return e.sort(function(){return .5-Math.random()})},g_=function(e){if(Vt(e))return e;var t=or(e)?e:{each:e},n=Is(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return dn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,p){var _=(p||t).length,m=a[_],g,x,M,y,b,E,A,v,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Si])[1],!T){for(A=-Si;A<(A=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=a[_]=[],g=l?Math.min(T,_)*u-.5:i%T,x=T===Si?0:l?_*f/T-.5:i/T|0,A=0,v=Si,E=0;E<_;E++)M=E%T-g,y=x-(E/T|0),m[E]=b=c?Math.abs(c==="y"?y:M):Jg(M*M+y*y),b>A&&(A=b),b<v&&(v=b);i==="random"&&m_(m),m.max=A-v,m.min=v,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Rn(t.amount||t.each)||0,n=n&&_<0?w_(n):n}return _=(m[h]-m.min)/m.max||0,Ft(m.b+(n?n(_):_)*m.v)+m.u}},mh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Pr(n)?0:Rn(n))}},__=function(e,t){var n=In(e),i,s;return!n&&or(e)&&(i=n=e.radius||Si,e.values?(e=Ti(e.values),(s=!Pr(e[0]))&&(i*=i)):e=mh(e.increment)),cs(t,n?Vt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Si,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Pr(a)?u:u+Rn(a)}:mh(e))},x_=function(e,t,n,i){return cs(In(e)?!t:n===!0?!!(n=0):!i,function(){return In(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ME=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},SE=function(e,t){return function(n){return e(parseFloat(n))+(t||Rn(n))}},TE=function(e,t,n){return y_(e,t,0,1,n)},v_=function(e,t,n){return cs(n,function(i){return e[~~t(i)]})},bE=function r(e,t,n){var i=t-e;return In(e)?v_(e,r(0,e.length),t):cs(n,function(s){return(i+(s-e)%i)%i+e})},EE=function r(e,t,n){var i=t-e,s=i*2;return In(e)?v_(e,r(0,e.length-1),t):cs(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},el=function(e){return e.replace(rE,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(sE);return x_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},y_=function(e,t,n,i,s){var a=t-e,o=i-n;return cs(s,function(l){return n+((l-e)/a*o||0)})},wE=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=dn(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(p){p*=f;var _=Math.min(h,~~p);return u[_](p-_)},n=t}else i||(e=ka(In(e)?[]:{},e));if(!u){for(l in t)wd.call(o,e,l,"get",t[l]);s=function(p){return Pd(p,o)||(a?e.p:e)}}}return cs(n,s)},ym=function(e,t,n){var i=e.labels,s=Si,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ci=function(e,t,n){var i=e.vars,s=i[t],a=Ut,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ns.length&&Nc(),o&&(Ut=o),u=l?s.apply(c,l):s.call(c),Ut=a,u},vo=function(e){return ss(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&ci(e,"onInterrupt"),e},ga,M_=[],S_=function(e){if(e)if(e=!e.name&&e.default||e,vd()||e.headless){var t=e.name,n=Vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Qo,render:Pd,add:wd,kill:GE,modifier:VE,rawVars:0},a={targetTest:0,get:0,getSetter:Cd,aliases:{},register:0};if(Ga(),e!==i){if(ri[t])return;di(i,di(Uc(e,s),a)),ka(i.prototype,ka(s,Uc(e,a))),ri[i.prop=t]=i,e.targetTest&&(pc.push(i),Sd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}r_(t,i),e.register&&e.register($n,i,Kn)}else M_.push(e)},Rt=255,yo={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Xu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},T_=function(e,t,n){var i=e?Pr(e)?[e>>16,e>>8&Rt,e&Rt]:0:yo.black,s,a,o,l,c,u,f,h,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yo[e])i=yo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Rt,i&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(mm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Xu(l+1/3,s,a),i[1]=Xu(l,s,a),i[2]=Xu(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(e_),n&&i.length<4&&(i[3]=1),i}else i=e.match(mm)||yo.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Rt,a=i[1]/Rt,o=i[2]/Rt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},b_=function(e){var t=[],n=[],i=-1;return e.split(is).forEach(function(s){var a=s.match(ma)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Mm=function(e,t,n){var i="",s=(e+i).match(is),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=T_(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=b_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(is,"1").split(ma),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(is),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},is=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),AE=/hsl[a]?\(/,E_=function(e){var t=e.join(" "),n;if(is.lastIndex=0,is.test(t))return n=AE.test(t),e[1]=Mm(e[1],n),e[0]=Mm(e[0],n,b_(e[1])),!0},tl,oi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,p=function _(m){var g=r()-i,x=m===!0,M,y,b,E;if((g>e||g<0)&&(n+=g-t),i+=g,b=i-n,M=b-a,(M>0||x)&&(E=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,a+=M+(M>=s?4:s-M),y=1),x||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](b,h,E,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){n_&&(!ch&&vd()&&(qi=ch=window,yd=qi.document||{},hi.gsap=$n,(qi.gsapVersions||(qi.gsapVersions=[])).push($n.version),i_(Lc||qi.GreenSockGlobals||!qi.gsap&&qi||{}),M_.forEach(S_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},tl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),tl=0,c=Qo},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,g,x){var M=g?function(y,b,E,A){m(y,b,E,A),f.remove(M)}:m;return f.remove(m),o[x?"unshift":"push"](M),Ga(),M},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&d>=g&&d--},_listeners:o},f})(),Ga=function(){return!tl&&oi.wake()},dt={},RE=/^[\d.\-M][\d.\-,\s]/,CE=/["']/g,PE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(CE,"").trim():+c,i=l.substr(o+1).trim();return t},IE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},DE=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[PE(t[1])]:IE(e).split(",").map(l_)):dt._CE&&RE.test(e)?dt._CE("",e):n},w_=function(e){return function(t){return 1-e(1-t)}},A_=function r(e,t){for(var n=e._first,i;n;)n instanceof kn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Is=function(e,t){return e&&(Vt(e)?e:dt[e]||DE(e))||t},Gs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return qn(e,function(o){dt[o]=hi[o]=s,dt[a=o.toLowerCase()]=n;for(var l in s)dt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[o+"."+l]=s[l]}),s},R_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/lh*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*iE((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:R_(o);return s=lh/s,l.config=function(c,u){return r(e,c,u)},l},qu=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:R_(n);return i.config=function(s){return r(e,s)},i};qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Gs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;Gs("Elastic",Yu("in"),Yu("out"),Yu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Gs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Gs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gs("Circ",function(r){return-(Jg(1-r*r)-1)});Gs("Sine",function(r){return r===1?1:-nE(r*eE)+1});Gs("Back",qu("in"),qu("out"),qu());dt.SteppedEase=dt.steps=hi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Ct;return function(o){return((i*ml(0,a,o)|0)+s)*n}}};Ba.ease=dt["quad.out"];qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Td+=r+","+r+"Params,"});var C_=function(e,t){this.id=tE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:a_,this.set=t?t.getSetter:Cd},nl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Va(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),tl||oi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Va(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ga(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(iu(this,n),!s._dp||s.parent||f_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ct||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),o_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?za(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ct?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Oc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ct?0:this._rts,this.totalTime(ml(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),nu(this),dE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ga(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ct&&(this._tTime-=Ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$i(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Oc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=cE);var i=gn;return gn=n,Ed(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gi(this,n),Yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-Ct),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ct)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Vt(n)?n:c_,l=function(){var u=i.then;i.then=null,s&&s(),Vt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){vo(this)},r})();di(nl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ct,_prom:0,_ps:!1,_rts:1});var kn=(function(r){Zg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),Bt&&$i(n.parent||Bt,_r(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&h_(_r(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Lo(0,arguments,this),this},t.from=function(i,s,a){return Lo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Lo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new jt(i,s,gi(this,a),1),this},t.call=function(i,s,a){return $i(this,jt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new jt(i,a,gi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Do(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Do(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ft(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,p,_,m,g,x,M,y,b,E,A;if(this!==Bt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,M=this._ts,g=!M,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Ft(u%m),u===l?(_=this._repeat,h=c):(b=Ft(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=za(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),E&&_&1&&(h=c-h,A=1),_!==b&&!this._lock){var v=E&&b&1,T=v===(E&&_&1);if(_<b&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Ft(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;A_(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=_E(this,Ft(o),Ft(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!b&&(ci(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!g){x=0,p&&(u+=this._zTime=-Ct);break}}d=p}else{d=this._last;for(var D=i<0?i:h;d;){if(p=d._prev,(d._act||D<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(D-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(D-d._start)*d._ts,s,a||gn&&Ed(d)),h!==this._time||!this._ts&&!g){x=0,p&&(u+=this._zTime=D?-Ct:Ct);break}}d=p}}if(x&&!s&&(this.pause(),x.render(h>=o?0:-Ct)._zTime=h>=o?1:-1,this._ts))return this._start=y,nu(this),this.render(i,s,a);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ss(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ci(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Pr(s)||(s=gi(this,s,i)),!(i instanceof nl)){if(In(i))return i.forEach(function(o){return a.add(o,s)}),this;if(dn(i))return this.addLabel(i,s);if(Vt(i))i=jt.delayedCall(0,i);else return this}return this!==i?$i(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Si);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof jt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return dn(i)?this.removeLabel(i):Vt(i)?this.killTweensOf(i):(i.parent===this&&tu(this,i),i===this._recent&&(this._recent=this._last),Ps(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(oi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=gi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=jt.delayedCall(0,s||Qo,a);return o.data="isPause",this._hasPause=1,$i(this,o,gi(this,i))},t.removePause=function(i){var s=this._first;for(i=gi(this,i);s;)s._start===i&&s.data==="isPause"&&ss(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)$r!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Ti(i),l=this._first,c=Pr(s),u;l;)l instanceof jt?uE(l._targets,o)&&(c?(!$r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=gi(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=jt.to(a,di({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ct,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&Va(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,di({startAt:{time:gi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ym(this,gi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ym(this,gi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ct)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ft(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ps(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ps(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Si,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,$i(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ft(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Va(a,a===Bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Bt._ts&&(o_(Bt,Oc(i,Bt)),s_=oi.frame),oi.frame>=gm){gm+=fi.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&fi.autoSleep&&oi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||oi.sleep()}}},e})(nl);di(kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var LE=function(e,t,n,i,s,a,o){var l=new Kn(this._pt,e,t,0,1,U_,null,s),c=0,u=0,f,h,d,p,_,m,g,x;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=el(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),h=n.match(Hu)||[];f=Hu.exec(i);)p=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?Sa(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Hu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(t_.test(i)||g)&&(l.e=0),this._pt=l,l},wd=function(e,t,n,i,s,a,o,l,c,u){Vt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:Vt(f)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Vt(f)?c?BE:L_:Rd,p;if(dn(i)&&(~i.indexOf("random(")&&(i=el(i)),i.charAt(1)==="="&&(p=Sa(h,i)+(Rn(h)||0),(p||p===0)&&(i=p))),!u||h!==i||gh)return!isNaN(h*i)&&i!==""?(p=new Kn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?zE:N_,0,d),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!f&&!(t in e)&&Md(t,i),LE.call(this,e,t,h,i,d,l||fi.stringFilter,c))},NE=function(e,t,n,i,s){if(Vt(e)&&(e=No(e,s,t,n,i)),!or(e)||e.style&&e.nodeType||In(e)||Qg(e))return dn(e)?No(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=No(e[o],s,t,n,i);return a},P_=function(e,t,n,i,s,a){var o,l,c,u;if(ri[e]&&(o=new ri[e]).init(s,o.rawVars?t[e]:NE(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Kn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ga))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},$r,gh,Ad=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:m,M=e._overwrite==="auto"&&!_d,y=e.timeline,b,E,A,v,T,D,C,I,k,V,z,U,F;if(y&&(!h||!s)&&(s="none"),e._ease=Is(s,Ba.ease),e._yEase=f?w_(Is(f===!0?s:f,Ba.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!i.runBackwards,!y||h&&!i.stagger){if(I=m[0]?Cs(m[0]).harness:0,U=I&&i[I.prop],b=Uc(i,Sd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&p?dc:lE),_._lazy=0),a){if(ss(e._startAt=jt.set(m,di({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return ci(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!o&&!d)&&e._startAt.revert(dc),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(o=!1),A=di({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Yn(l),immediateRender:o,stagger:0,parent:g},b),U&&(A[I.prop]=U),ss(e._startAt=jt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(dc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Ct,Ct);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Yn(l)||l&&!p,E=0;E<m.length;E++){if(T=m[E],C=T._gsap||bd(m)[E]._gsap,e._ptLookup[E]=V={},uh[C.id]&&ns.length&&Nc(),z=x===m?E:x.indexOf(T),I&&(k=new I).init(T,U||b,e,z,x)!==!1&&(e._pt=v=new Kn(e._pt,T,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(J){V[J]=v}),k.priority&&(D=1)),!I||U)for(A in b)ri[A]&&(k=P_(A,b,e,z,T,x))?k.priority&&(D=1):V[A]=v=wd.call(e,T,A,"get",b[A],z,x,0,i.stringFilter);e._op&&e._op[E]&&e.kill(T,e._op[E]),M&&e._pt&&($r=e,Bt.killTweensOf(T,V,e.globalTime(t)),F=!e.parent,$r=0),e._pt&&l&&(uh[C.id]=1)}D&&O_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,h&&t<=0&&y.render(Si,!0,!0)},UE=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return gh=1,e.vars[t]="+=0",Ad(e,o),gh=0,l?Jo(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Wt(n)+Rn(f.e)),f.b&&(f.b=u.s+Rn(f.b))},OE=function(e,t){var n=e[0]?Cs(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ka({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},FE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(In(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},No=function(e,t,n,i,s){return Vt(e)?e.call(t,n,i,s):dn(e)&&~e.indexOf("random(")?el(e):e},I_=Td+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",D_={};qn(I_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return D_[r]=1});var jt=(function(r){Zg(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Do(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,x=i.parent||Bt,M=(In(n)||Qg(n)?Pr(n[0]):"length"in i)?[n]:Ti(n),y,b,E,A,v,T,D,C;if(o._targets=M.length?bd(M):Jo("GSAP target "+n+" not found. https://gsap.com",!fi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||h||Xl(c)||Xl(u)){if(i=o.vars,y=o.timeline=new kn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:M}),y.kill(),y.parent=y._dp=_r(o),y._start=0,h||Xl(c)||Xl(u)){if(A=M.length,D=h&&g_(h),or(h))for(v in h)~I_.indexOf(v)&&(C||(C={}),C[v]=h[v]);for(b=0;b<A;b++)E=Uc(i,D_),E.stagger=0,g&&(E.yoyoEase=g),C&&ka(E,C),T=M[b],E.duration=+No(c,_r(o),b,T,M),E.delay=(+No(u,_r(o),b,T,M)||0)-o._delay,!h&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),y.to(T,E,D?D(b,T,M):0),y._ease=dt.none;y.duration()?c=u=0:o.timeline=0}else if(p){Do(di(y.vars.defaults,{ease:"none"})),y._ease=Is(p.ease||i.ease||"none");var I=0,k,V,z;if(In(p))p.forEach(function(U){return y.to(M,U,">")}),y.duration();else{E={};for(v in p)v==="ease"||v==="easeEach"||FE(v,p[v],E,p.easeEach);for(v in E)for(k=E[v].sort(function(U,F){return U.t-F.t}),I=0,b=0;b<k.length;b++)V=k[b],z={ease:V.e,duration:(V.t-(b?k[b-1].t:0))/100*c},z[v]=V.v,y.to(M,z,I),I+=z.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!_d&&($r=_r(o),Bt.killTweensOf(M),$r=0),$i(x,_r(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!p&&o._start===Ft(x._time)&&Yn(f)&&pE(_r(o))&&x.data!=="nested")&&(o._tTime=-Ct,o.render(Math.max(0,-u)||0)),m&&h_(_r(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Ct&&!u?l:i<Ct?0:i,h,d,p,_,m,g,x,M,y;if(!c)gE(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Ft(f%_),f===l?(p=this._repeat,h=c):(m=Ft(f/_),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),g=this._yoyo&&p&1,g&&(y=this._yEase,h=c-h),m=za(this._tTime,_),h===o&&!a&&this._initted&&p===m)return this._tTime=f,this;p!==m&&(M&&this._yEase&&A_(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Ft(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(d_(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/c),this._from&&(this.ratio=x=1-x),!o&&f&&!s&&!m&&(ci(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&fh(this,i,s,a),ci(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&fh(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ss(this,1),!s&&!(u&&!o)&&(f||o||g)&&(ci(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){tl||oi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ad(this,c),u=this._ease(c/this._dur),UE(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(iu(this,0),this.parent||u_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?vo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,$r&&$r.vars.overwrite!==!0)._first||vo(this),this.parent&&a!==this.timeline.totalDuration()&&Va(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ti(i):o,c=this._ptLookup,u=this._pt,f,h,d,p,_,m,g;if((!s||s==="all")&&hE(o,l))return s==="all"&&(this._pt=0),vo(this);for(f=this._op=this._op||[],s!=="all"&&(dn(s)&&(_={},qn(s,function(x){return _[x]=1}),s=_),s=OE(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],s==="all"?(f[g]=s,p=h,d={}):(d=f[g]=f[g]||{},p=s);for(_ in p)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&tu(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&vo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Lo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Bt.killTweensOf(i,s,a)},e})(nl);di(jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qn("staggerTo,staggerFrom,staggerFromTo",function(r){jt[r]=function(){var e=new kn,t=dh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Rd=function(e,t,n){return e[t]=n},L_=function(e,t,n){return e[t](n)},BE=function(e,t,n,i){return e[t](i.fp,n)},kE=function(e,t,n){return e.setAttribute(t,n)},Cd=function(e,t){return Vt(e[t])?L_:xd(e[t])&&e.setAttribute?kE:Rd},N_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},U_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Pd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},VE=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},GE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?tu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},HE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},O_=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Kn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||N_,this.d=l||this,this.set=c||Rd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=HE,this.m=n,this.mt=s,this.tween=i},r})();qn(Td+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Sd[r]=1});hi.TweenMax=hi.TweenLite=jt;hi.TimelineLite=hi.TimelineMax=kn;Bt=new kn({sortChildren:!1,defaults:Ba,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=E_;var Ds=[],mc={},WE=[],Sm=0,XE=0,Ku=function(e){return(mc[e]||WE).map(function(t){return t()})},_h=function(){var e=Date.now(),t=[];e-Sm>2&&(Ku("matchMediaInit"),Ds.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=qi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ku("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sm=e,Ku("matchMedia"))},F_=(function(){function r(t,n){this.selector=n&&ph(n),this.data=[],this._r=[],this.isReverted=!1,this.id=XE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Vt(n)&&(s=i,i=n,n=Vt);var a=this,o=function(){var c=Ut,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=ph(s)),Ut=a,f=i.apply(a,arguments),Vt(f)&&a._r.push(f),Ut=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Vt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ut;Ut=null,n(this),Ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof jt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ds.length;a--;)Ds[a].id===this.id&&Ds.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),YE=(function(){function r(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){or(n)||(n={matches:n});var a=new F_(0,s||this.scope),o=a.conditions={},l,c,u;Ut&&!a.selector&&(a.selector=Ut.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=qi.matchMedia(n[c]),l&&(Ds.indexOf(a)<0&&Ds.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(_h):l.addEventListener("change",_h)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Fc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return S_(i)})},timeline:function(e){return new kn(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){dn(e)&&(e=Ti(e)[0]);var s=Cs(e||{}).get,a=n?c_:l_;return n==="native"&&(n=""),e&&(t?a((ri[t]&&ri[t].get||s)(e,t,n,i)):function(o,l,c){return a((ri[o]&&ri[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ti(e),e.length>1){var i=e.map(function(u){return $n.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=ri[t],o=Cs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ga._pt=0,f.init(e,n?u+n:u,ga,0,[e]),f.render(1,f),ga._pt&&Pd(1,ga)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=$n.to(e,di((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Is(e.ease,Ba.ease)),_m(Ba,e||{})},config:function(e){return _m(fi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ri[o]&&!hi[o]&&Jo(t+" effect requires "+o+" plugin.")}),Wu[t]=function(o,l,c){return n(Ti(o),di(l||{},s),c)},a&&(kn.prototype[t]=function(o,l,c){return this.add(Wu[t](o,or(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=Is(t)},parseEase:function(e,t){return arguments.length?Is(e,t):dt},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new kn(e),i,s;for(n.smoothChildTiming=Yn(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof jt&&i.vars.onComplete===i._targets[0]))&&$i(n,i,i._start-i._delay),i=s;return $i(Bt,n,0),n},context:function(e,t){return e?new F_(e,t):Ut},matchMedia:function(e){return new YE(e)},matchMediaRefresh:function(){return Ds.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||_h()},addEventListener:function(e,t){var n=mc[e]||(mc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=mc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:bE,wrapYoyo:EE,distribute:g_,random:x_,snap:__,normalize:TE,getUnit:Rn,clamp:vE,splitColor:T_,toArray:Ti,selector:ph,mapRange:y_,pipe:ME,unitize:SE,interpolate:wE,shuffle:m_},install:i_,effects:Wu,ticker:oi,updateRoot:kn.updateRoot,plugins:ri,globalTimeline:Bt,core:{PropTween:Kn,globals:r_,Tween:jt,Timeline:kn,Animation:nl,getCache:Cs,_removeLinkedListItem:tu,reverting:function(){return gn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return _d=e}}};qn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Fc[r]=jt[r]});oi.add(kn.updateRoot);ga=Fc.to({},{duration:0});var qE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},KE=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=qE(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ju=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(dn(s)&&(l={},qn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}KE(o,s)}}}},$n=Fc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ju("roundProps",mh),ju("modifiers"),ju("snap",__))||Fc;jt.version=kn.version=$n.version="3.14.2";n_=1;vd()&&Ga();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;var Tm,Zr,Ta,Id,As,bm,Dd,jE=function(){return typeof window<"u"},Ir={},ys=180/Math.PI,ba=Math.PI/180,ca=Math.atan2,Em=1e8,Ld=/([A-Z])/g,$E=/(left|right|width|margin|padding|x)/i,ZE=/[\s,\(]\S/,Qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ew=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},B_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},k_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},nw=function(e,t,n){return e.style[t]=n},iw=function(e,t,n){return e.style.setProperty(t,n)},rw=function(e,t,n){return e._gsap[t]=n},sw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},aw=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ow=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},kt="transform",jn=kt+"Origin",lw=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Ir&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=xr(i,o)}):this.tfm[e]=a.x?a[e]:xr(i,e),e===jn&&(this.tfm.zOrigin=a.zOrigin);else return Qi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(kt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},z_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},cw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ld,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Dd(),(!s||!s.isStart)&&!n[kt]&&(z_(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},V_=function(e,t){var n={target:e,props:[],revert:cw,save:lw};return e._gsap||$n.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},G_,vh=function(e,t){var n=Zr.createElementNS?Zr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zr.createElement(e);return n&&n.style?n:Zr.createElement(e)},ui=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ld,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ha(t)||t,1)||""},wm="O,Moz,ms,Ms,Webkit".split(","),Ha=function(e,t,n){var i=t||As,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(wm[a]+e in s););return a<0?null:(a===3?"ms":a>=0?wm[a]:"")+e},yh=function(){jE()&&window.document&&(Tm=window,Zr=Tm.document,Ta=Zr.documentElement,As=vh("div")||{style:{}},vh("div"),kt=Ha(kt),jn=kt+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",G_=!!Ha("perspective"),Dd=$n.core.reverting,Id=1)},Am=function(e){var t=e.ownerSVGElement,n=vh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ta.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ta.removeChild(n),s},Rm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},H_=function(e){var t,n;try{t=e.getBBox()}catch{t=Am(e),n=1}return t&&(t.width||t.height)||n||(t=Am(e)),t&&!t.width&&!t.x&&!t.y?{x:+Rm(e,["x","cx","x1"])||0,y:+Rm(e,["y","cy","y1"])||0,width:0,height:0}:t},W_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&H_(e))},as=function(e,t){if(t){var n=e.style,i;t in Ir&&t!==jn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ld,"-$1").toLowerCase())):n.removeAttribute(t)}},Jr=function(e,t,n,i,s,a){var o=new Kn(e._pt,t,n,0,1,a?k_:B_);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Cm={deg:1,rad:1,turn:1},uw={grid:1,flex:1},os=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=As.style,l=$E.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",p,_,m,g;if(i===a||!s||Cm[i]||Cm[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&W_(e),(d||a==="%")&&(Ir[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Wt(d?s/p*f:s/100*p);if(o[l?"width":"height"]=f+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Zr||!_.appendChild)&&(_=Zr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===oi.time&&!m.uncache)return Wt(s/m.width*f);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+i,p=e[u],x?e.style[t]=x:as(e,t)}else(d||a==="%")&&!uw[ui(_,"display")]&&(o.position=ui(e,"position")),_===e&&(o.position="static"),_.appendChild(As),p=As[u],_.removeChild(As),o.position="absolute";return l&&d&&(m=Cs(_),m.time=oi.time,m.width=_[u]),Wt(h?p*s/f:p&&s?f/p*s:0)},xr=function(e,t,n,i){var s;return Id||yh(),t in Qi&&t!=="transform"&&(t=Qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ir[t]&&t!=="transform"?(s=rl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:kc(ui(e,jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Bc[t]&&Bc[t](e,t,n)||ui(e,t)||a_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?os(e,t,s,n)+n:s},fw=function(e,t,n,i){if(!n||n==="none"){var s=Ha(t,e,1),a=s&&ui(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ui(e,"borderTopColor"))}var o=new Kn(this._pt,e.style,t,0,1,U_),l=0,c=0,u,f,h,d,p,_,m,g,x,M,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ui(e,t)||i,_?e.style[t]=_:as(e,t)),u=[n,i],E_(u),n=u[0],i=u[1],h=n.match(ma)||[],b=i.match(ma)||[],b.length){for(;f=ma.exec(i);)m=f[0],x=i.substring(l,f.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=Sa(d,m)+y),g=parseFloat(m),M=m.substr((g+"").length),l=ma.lastIndex-M.length,M||(M=M||fi.units[t]||y,l===i.length&&(i+=M,o.e+=M)),y!==M&&(d=os(e,t,_,M)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?k_:B_;return t_.test(i)&&(o.e=0),this._pt=o,o},Pm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Pm[n]||n,t[1]=Pm[i]||i,t.join(" ")},dw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ir[o]&&(l=1,o=o==="transformOrigin"?jn:kt),as(n,o);l&&(as(n,kt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",rl(n,1),a.uncache=1,z_(i)))}},Bc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Kn(e._pt,t,n,0,0,dw);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},il=[1,0,0,1,0,0],X_={},Y_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Im=function(e){var t=ui(e,kt);return Y_(t)?il:t.substr(7).match(e_).map(Wt)},Nd=function(e,t){var n=e._gsap||Cs(e),i=e.style,s=Im(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?il:s):(s===il&&!e.offsetParent&&e!==Ta&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ta.appendChild(e)),s=Im(e),l?i.display=l:as(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ta.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Mh=function(e,t,n,i,s,a){var o=e._gsap,l=s||Nd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],x=l[5],M=t.split(" "),y=parseFloat(M[0])||0,b=parseFloat(M[1])||0,E,A,v,T;n?l!==il&&(A=d*m-p*_)&&(v=y*(m/A)+b*(-_/A)+(_*x-m*g)/A,T=y*(-p/A)+b*(d/A)-(d*x-p*g)/A,y=v,b=T):(E=H_(e),y=E.x+(~M[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(M[1]||M[0]).indexOf("%")?b/100*E.height:b)),i||i!==!1&&o.smooth?(g=y-c,x=b-u,o.xOffset=f+(g*d+x*_)-g,o.yOffset=h+(g*p+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[jn]="0px 0px",a&&(Jr(a,o,"xOrigin",c,y),Jr(a,o,"yOrigin",u,b),Jr(a,o,"xOffset",f,o.xOffset),Jr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},rl=function(e,t){var n=e._gsap||new C_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ui(e,jn)||"0",u,f,h,d,p,_,m,g,x,M,y,b,E,A,v,T,D,C,I,k,V,z,U,F,J,j,P,ae,ue,Ue,He,je;return u=f=h=_=m=g=x=M=y=0,d=p=1,n.svg=!!(e.getCTM&&W_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),A=Nd(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Mh(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,E=n.yOrigin||0,A!==il&&(C=A[0],I=A[1],k=A[2],V=A[3],u=z=A[4],f=U=A[5],A.length===6?(d=Math.sqrt(C*C+I*I),p=Math.sqrt(V*V+k*k),_=C||I?ca(I,C)*ys:0,x=k||V?ca(k,V)*ys+_:0,x&&(p*=Math.abs(Math.cos(x*ba))),n.svg&&(u-=b-(b*C+E*k),f-=E-(b*I+E*V))):(je=A[6],Ue=A[7],P=A[8],ae=A[9],ue=A[10],He=A[11],u=A[12],f=A[13],h=A[14],v=ca(je,ue),m=v*ys,v&&(T=Math.cos(-v),D=Math.sin(-v),F=z*T+P*D,J=U*T+ae*D,j=je*T+ue*D,P=z*-D+P*T,ae=U*-D+ae*T,ue=je*-D+ue*T,He=Ue*-D+He*T,z=F,U=J,je=j),v=ca(-k,ue),g=v*ys,v&&(T=Math.cos(-v),D=Math.sin(-v),F=C*T-P*D,J=I*T-ae*D,j=k*T-ue*D,He=V*D+He*T,C=F,I=J,k=j),v=ca(I,C),_=v*ys,v&&(T=Math.cos(v),D=Math.sin(v),F=C*T+I*D,J=z*T+U*D,I=I*T-C*D,U=U*T-z*D,C=F,z=J),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=Wt(Math.sqrt(C*C+I*I+k*k)),p=Wt(Math.sqrt(U*U+je*je)),v=ca(z,U),x=Math.abs(v)>2e-4?v*ys:0,y=He?1/(He<0?-He:He):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Y_(ui(e,kt)),F&&e.setAttribute("transform",F))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Wt(d),n.scaleY=Wt(p),n.rotation=Wt(_)+o,n.rotationX=Wt(m)+o,n.rotationY=Wt(g)+o,n.skewX=x+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jn]=kc(c)),n.xOffset=n.yOffset=0,n.force3D=fi.force3D,n.renderTransform=n.svg?mw:G_?q_:pw,n.uncache=0,n},kc=function(e){return(e=e.split(" "))[0]+" "+e[1]},$u=function(e,t,n){var i=Rn(t);return Wt(parseFloat(t)+parseFloat(os(e,"x",n+"px",i)))+i},pw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,q_(e,t)},_s="0deg",fo="0px",xs=") ",q_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,x=n.target,M=n.zOrigin,y="",b=g==="auto"&&e&&e!==1||g===!0;if(M&&(f!==_s||u!==_s)){var E=parseFloat(u)*ba,A=Math.sin(E),v=Math.cos(E),T;E=parseFloat(f)*ba,T=Math.cos(E),a=$u(x,a,A*T*-M),o=$u(x,o,-Math.sin(E)*-M),l=$u(x,l,v*T*-M+M)}m!==fo&&(y+="perspective("+m+xs),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||a!==fo||o!==fo||l!==fo)&&(y+=l!==fo||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+xs),c!==_s&&(y+="rotate("+c+xs),u!==_s&&(y+="rotateY("+u+xs),f!==_s&&(y+="rotateX("+f+xs),(h!==_s||d!==_s)&&(y+="skew("+h+", "+d+xs),(p!==1||_!==1)&&(y+="scale("+p+", "+_+xs),x.style[kt]=y||"translate(0, 0)"},mw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,x=n.forceCSS,M=parseFloat(a),y=parseFloat(o),b,E,A,v,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ba,c*=ba,b=Math.cos(l)*f,E=Math.sin(l)*f,A=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=ba,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,v*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),b*=T,E*=T)),b=Wt(b),E=Wt(E),A=Wt(A),v=Wt(v)):(b=f,v=h,E=A=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=os(d,"x",a,"px"),y=os(d,"y",o,"px")),(p||_||m||g)&&(M=Wt(M+p-(p*b+_*A)+m),y=Wt(y+_-(p*E+_*v)+g)),(i||s)&&(T=d.getBBox(),M=Wt(M+i/100*T.width),y=Wt(y+s/100*T.height)),T="matrix("+b+","+E+","+A+","+v+","+M+","+y+")",d.setAttribute("transform",T),x&&(d.style[kt]=T)},gw=function(e,t,n,i,s){var a=360,o=dn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ys:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Em)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Em)%a-~~(c/a)*a)),e._pt=h=new Kn(e._pt,t,n,i,c,JE),h.e=u,h.u="deg",e._props.push(n),h},Dm=function(e,t){for(var n in t)e[n]=t[n];return e},_w=function(e,t,n){var i=Dm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[kt]=t,o=rl(n,1),as(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],a[kt]=t,o=rl(n,1),a[kt]=c);for(l in Ir)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Rn(c),p=Rn(u),f=d!==p?os(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new Kn(e._pt,o,l,f,h-f,xh),e._pt.u=p||0,e._props.push(l));Dm(o,i)};qn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Bc[e>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(p){return xr(o,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(p,_){return d[p]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var K_={name:"css",register:yh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,p,_,m,g,x,M,y,b,E,A,v,T;Id||yh(),this.styles=this.styles||V_(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ri[_]&&P_(_,t,n,i,e,s)))){if(d=typeof u,p=Bc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=el(u)),p)p(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",is.lastIndex=0,is.test(c)||(m=Rn(c),g=Rn(u),g?m!==g&&(c=os(e,_,c,g)+g):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],dn(c)&&~c.indexOf("random(")&&(c=el(c)),Rn(c+"")||c==="auto"||(c+=fi.units[_]||Rn(xr(e,_))||""),(c+"").charAt(1)==="="&&(c=xr(e,_))):c=xr(e,_),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),_ in Qi&&(_==="autoAlpha"&&(h===1&&xr(e,"visibility")==="hidden"&&f&&(h=0),v.push("visibility",0,o.visibility),Jr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Qi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Ir,M){if(this.styles.save(_),T=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ui(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=ui(e,"perspective"),D?e.style.perspective=D:as(e,"perspective")}f=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||rl(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Kn(this._pt,o,kt,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new Kn(this._pt,b,"scaleY",b.scaleY,(x?Sa(b.scaleY,x+f):f)-b.scaleY||0,xh),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(jn,0,o[jn]),u=hw(u),b.svg?Mh(e,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==b.zOrigin&&Jr(this,b,"zOrigin",b.zOrigin,g),Jr(this,o,_,kc(c),kc(u)));continue}else if(_==="svgOrigin"){Mh(e,u,1,E,0,this);continue}else if(_ in X_){gw(this,b,_,h,x?Sa(h,x+u):u);continue}else if(_==="smoothOrigin"){Jr(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){_w(this,u,e);continue}}else _ in o||(_=Ha(_)||_);if(M||(f||f===0)&&(h||h===0)&&!ZE.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),g=Rn(u)||(_ in fi.units?fi.units[_]:m),m!==g&&(h=os(e,_,c,g)),this._pt=new Kn(this._pt,M?b:o,_,h,(x?Sa(h,x+f):f)-h,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?tw:xh),this._pt.u=g||0,M&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=ew):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=QE);else if(_ in o)fw.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){Md(_,u);continue}M||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}A&&O_(this)},render:function(e,t){if(t.tween._time||!Dd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xr,aliases:Qi,getSetter:function(e,t,n){var i=Qi[t];return i&&i.indexOf(",")<0&&(t=i),t in Ir&&t!==jn&&(e._gsap.x||xr(e,"x"))?n&&bm===n?t==="scale"?sw:rw:(bm=n||{})&&(t==="scale"?aw:ow):e.style&&!xd(e.style[t])?nw:~t.indexOf("-")?iw:Cd(e,t)},core:{_removeProperty:as,_getMatrix:Nd}};$n.utils.checkPrefix=Ha;$n.core.getStyleSaver=V_;(function(r,e,t,n){var i=qn(r+","+e+","+t,function(s){Ir[s]=1});qn(e,function(s){fi.units[s]="deg",X_[s]=1}),Qi[i[13]]=r+","+e,qn(n,function(s){var a=s.split(":");Qi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){fi.units[r]="px"});$n.registerPlugin(K_);var $e=$n.registerPlugin(K_)||$n;$e.core.Tween;function xw(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function vw(r,e,t){return e&&xw(r.prototype,e),r}var mn,gc,li,Qr,es,Ea,j_,Ms,Uo,$_,br,Ci,Z_,J_=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},Q_=1,_a=[],ct=[],nr=[],Oo=Date.now,Sh=function(e,t){return t},yw=function(){var e=Uo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ct),i.push.apply(i,nr),ct=n,nr=i,Sh=function(a,o){return t[a](o)}},rs=function(e,t){return~nr.indexOf(e)&&nr[nr.indexOf(e)+1][t]},Fo=function(e){return!!~$_.indexOf(e)},Nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Yl="scrollLeft",ql="scrollTop",Th=function(){return br&&br.isPressed||ct.cache++},zc=function(e,t){var n=function i(s){if(s||s===0){Q_&&(li.history.scrollRestoration="manual");var a=br&&br.isPressed;s=i.v=Math.round(s)||(br&&br.iOS?1:0),e(s),i.cacheID=ct.cache,a&&Sh("ss",s)}else(t||ct.cache!==i.cacheID||Sh("ref"))&&(i.cacheID=ct.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},zn={s:Yl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zc(function(r){return arguments.length?li.scrollTo(r,en.sc()):li.pageXOffset||Qr[Yl]||es[Yl]||Ea[Yl]||0})},en={s:ql,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:zn,sc:zc(function(r){return arguments.length?li.scrollTo(zn.sc(),r):li.pageYOffset||Qr[ql]||es[ql]||Ea[ql]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Mw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ls=function(e,t){var n=t.s,i=t.sc;Fo(e)&&(e=Qr.scrollingElement||es);var s=ct.indexOf(e),a=i===en.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+a]||Nn(e,"scroll",Th);var o=ct[s+a],l=o||(ct[s+a]=zc(rs(e,n),!0)||(Fo(e)?i:zc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},bh=function(e,t,n){var i=e,s=e,a=Oo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=Oo();_||m-a>l?(s=i,i=p,o=a,a=m):n?i+=p:i=s+(p-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(p){var _=o,m=s,g=Oo();return(p||p===0)&&p!==i&&u(p),a===o||g-o>c?0:(i+(n?m:-m))/((n?g:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},ho=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Lm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},e0=function(){Uo=mn.core.globals().ScrollTrigger,Uo&&Uo.core&&yw()},t0=function(e){return mn=e||J_(),!gc&&mn&&typeof document<"u"&&document.body&&(li=window,Qr=document,es=Qr.documentElement,Ea=Qr.body,$_=[li,Qr,es,Ea],mn.utils.clamp,Z_=mn.core.context||function(){},Ms="onpointerenter"in Ea?"pointer":"mouse",j_=Xt.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=Xt.eventTypes=("ontouchstart"in es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Q_=0},500),e0(),gc=1),gc};zn.op=en;ct.cache=0;var Xt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){gc||t0(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Uo||e0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,x=n.onDrag,M=n.onPress,y=n.onRelease,b=n.onRight,E=n.onLeft,A=n.onUp,v=n.onDown,T=n.onChangeX,D=n.onChangeY,C=n.onChange,I=n.onToggleX,k=n.onToggleY,V=n.onHover,z=n.onHoverEnd,U=n.onMove,F=n.ignoreCheck,J=n.isNormalizer,j=n.onGestureStart,P=n.onGestureEnd,ae=n.onWheel,ue=n.onEnable,Ue=n.onDisable,He=n.onClick,je=n.scrollSpeed,$=n.capture,te=n.allowClicks,ie=n.lockAxis,Ie=n.onLockAxis;this.target=o=Wn(o)||es,this.vars=n,d&&(d=mn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,je=je||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(Ea).lineHeight)||22);var Pe,we,mt,be,Ve,Qe,ze,X=this,N=0,xt=0,st=n.passive||!u&&n.passive!==!1,We=ls(o,zn),ye=ls(o,en),R=We(),S=ye(),O=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ci[0]==="pointerdown",Q=Fo(o),ee=o.ownerDocument||Qr,K=[0,0,0],xe=[0,0,0],le=0,De=function(){return le=Oo()},Me=function(Le,tt){return(X.event=Le)&&d&&Mw(Le.target,d)||tt&&O&&Le.pointerType!=="touch"||F&&F(Le,tt)},re=function(){X._vx.reset(),X._vy.reset(),we.pause(),f&&f(X)},oe=function(){var Le=X.deltaX=Lm(K),tt=X.deltaY=Lm(xe),_e=Math.abs(Le)>=i,qe=Math.abs(tt)>=i;C&&(_e||qe)&&C(X,Le,tt,K,xe),_e&&(b&&X.deltaX>0&&b(X),E&&X.deltaX<0&&E(X),T&&T(X),I&&X.deltaX<0!=N<0&&I(X),N=X.deltaX,K[0]=K[1]=K[2]=0),qe&&(v&&X.deltaY>0&&v(X),A&&X.deltaY<0&&A(X),D&&D(X),k&&X.deltaY<0!=xt<0&&k(X),xt=X.deltaY,xe[0]=xe[1]=xe[2]=0),(be||mt)&&(U&&U(X),mt&&(m&&mt===1&&m(X),x&&x(X),mt=0),be=!1),Qe&&!(Qe=!1)&&Ie&&Ie(X),Ve&&(ae(X),Ve=!1),Pe=0},Se=function(Le,tt,_e){K[_e]+=Le,xe[_e]+=tt,X._vx.update(Le),X._vy.update(tt),c?Pe||(Pe=requestAnimationFrame(oe)):oe()},Ee=function(Le,tt){ie&&!ze&&(X.axis=ze=Math.abs(Le)>Math.abs(tt)?"x":"y",Qe=!0),ze!=="y"&&(K[2]+=Le,X._vx.update(Le,!0)),ze!=="x"&&(xe[2]+=tt,X._vy.update(tt,!0)),c?Pe||(Pe=requestAnimationFrame(oe)):oe()},de=function(Le){if(!Me(Le,1)){Le=ho(Le,u);var tt=Le.clientX,_e=Le.clientY,qe=tt-X.x,ke=_e-X.y,Ke=X.isDragging;X.x=tt,X.y=_e,(Ke||(qe||ke)&&(Math.abs(X.startX-tt)>=s||Math.abs(X.startY-_e)>=s))&&(mt||(mt=Ke?2:1),Ke||(X.isDragging=!0),Ee(qe,ke))}},Ye=X.onPress=function(ve){Me(ve,1)||ve&&ve.button||(X.axis=ze=null,we.pause(),X.isPressed=!0,ve=ho(ve),N=xt=0,X.startX=X.x=ve.clientX,X.startY=X.y=ve.clientY,X._vx.reset(),X._vy.reset(),Nn(J?o:ee,Ci[1],de,st,!0),X.deltaX=X.deltaY=0,M&&M(X))},L=X.onRelease=function(ve){if(!Me(ve,1)){Ln(J?o:ee,Ci[1],de,!0);var Le=!isNaN(X.y-X.startY),tt=X.isDragging,_e=tt&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),qe=ho(ve);!_e&&Le&&(X._vx.reset(),X._vy.reset(),u&&te&&mn.delayedCall(.08,function(){if(Oo()-le>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(ee.createEvent){var ke=ee.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,li,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(ke)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,f&&tt&&!J&&we.restart(!0),mt&&oe(),g&&tt&&g(X),y&&y(X,_e)}},ce=function(Le){return Le.touches&&Le.touches.length>1&&(X.isGesturing=!0)&&j(Le,X.isDragging)},se=function(){return(X.isGesturing=!1)||P(X)},pe=function(Le){if(!Me(Le)){var tt=We(),_e=ye();Se((tt-R)*je,(_e-S)*je,1),R=tt,S=_e,f&&we.restart(!0)}},ne=function(Le){if(!Me(Le)){Le=ho(Le,u),ae&&(Ve=!0);var tt=(Le.deltaMode===1?l:Le.deltaMode===2?li.innerHeight:1)*p;Se(Le.deltaX*tt,Le.deltaY*tt,0),f&&!J&&we.restart(!0)}},Z=function(Le){if(!Me(Le)){var tt=Le.clientX,_e=Le.clientY,qe=tt-X.x,ke=_e-X.y;X.x=tt,X.y=_e,be=!0,f&&we.restart(!0),(qe||ke)&&Ee(qe,ke)}},Te=function(Le){X.event=Le,V(X)},Be=function(Le){X.event=Le,z(X)},gt=function(Le){return Me(Le)||ho(Le,u)&&He(X)};we=X._dc=mn.delayedCall(h||.25,re).pause(),X.deltaX=X.deltaY=0,X._vx=bh(0,50,!0),X._vy=bh(0,50,!0),X.scrollX=We,X.scrollY=ye,X.isDragging=X.isGesturing=X.isPressed=!1,Z_(this),X.enable=function(ve){return X.isEnabled||(Nn(Q?ee:o,"scroll",Th),a.indexOf("scroll")>=0&&Nn(Q?ee:o,"scroll",pe,st,$),a.indexOf("wheel")>=0&&Nn(o,"wheel",ne,st,$),(a.indexOf("touch")>=0&&j_||a.indexOf("pointer")>=0)&&(Nn(o,Ci[0],Ye,st,$),Nn(ee,Ci[2],L),Nn(ee,Ci[3],L),te&&Nn(o,"click",De,!0,!0),He&&Nn(o,"click",gt),j&&Nn(ee,"gesturestart",ce),P&&Nn(ee,"gestureend",se),V&&Nn(o,Ms+"enter",Te),z&&Nn(o,Ms+"leave",Be),U&&Nn(o,Ms+"move",Z)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=be=mt=!1,X._vx.reset(),X._vy.reset(),R=We(),S=ye(),ve&&ve.type&&Ye(ve),ue&&ue(X)),X},X.disable=function(){X.isEnabled&&(_a.filter(function(ve){return ve!==X&&Fo(ve.target)}).length||Ln(Q?ee:o,"scroll",Th),X.isPressed&&(X._vx.reset(),X._vy.reset(),Ln(J?o:ee,Ci[1],de,!0)),Ln(Q?ee:o,"scroll",pe,$),Ln(o,"wheel",ne,$),Ln(o,Ci[0],Ye,$),Ln(ee,Ci[2],L),Ln(ee,Ci[3],L),Ln(o,"click",De,!0),Ln(o,"click",gt),Ln(ee,"gesturestart",ce),Ln(ee,"gestureend",se),Ln(o,Ms+"enter",Te),Ln(o,Ms+"leave",Be),Ln(o,Ms+"move",Z),X.isEnabled=X.isPressed=X.isDragging=!1,Ue&&Ue(X))},X.kill=X.revert=function(){X.disable();var ve=_a.indexOf(X);ve>=0&&_a.splice(ve,1),br===X&&(br=0)},_a.push(X),J&&Fo(o)&&(br=X),X.enable(_)},vw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Xt.version="3.14.2";Xt.create=function(r){return new Xt(r)};Xt.register=t0;Xt.getAll=function(){return _a.slice()};Xt.getById=function(r){return _a.filter(function(e){return e.vars.id===r})[0]};J_()&&mn.registerPlugin(Xt);var Ce,da,lt,Dt,si,yt,Ud,Vc,sl,Bo,Mo,Kl,bn,ru,Eh,Fn,Nm,Um,pa,n0,Zu,i0,On,wh,r0,s0,Xr,Ah,Od,wa,Fd,ko,Rh,Ju,jl=1,En=Date.now,Qu=En(),bi=0,So=0,Om=function(e,t,n){var i=ii(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Fm=function(e,t){return t&&(!ii(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Sw=function r(){return So&&requestAnimationFrame(r)},Bm=function(){return ru=1},km=function(){return ru=0},Ki=function(e){return e},To=function(e){return Math.round(e*1e5)/1e5||0},a0=function(){return typeof window<"u"},o0=function(){return Ce||a0()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Bs=function(e){return!!~Ud.indexOf(e)},l0=function(e){return(e==="Height"?Fd:lt["inner"+e])||si["client"+e]||yt["client"+e]},c0=function(e){return rs(e,"getBoundingClientRect")||(Bs(e)?function(){return Mc.width=lt.innerWidth,Mc.height=Fd,Mc}:function(){return vr(e)})},Tw=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=rs(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?l0(s):e["client"+s])||0}},bw=function(e,t){return!t||~nr.indexOf(e)?c0(e):function(){return Mc}},er=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=rs(e,n))?a()-c0(e)()[s]:Bs(e)?(si[n]||yt[n])-l0(i):e[n]-e["offset"+i])},$l=function(e,t){for(var n=0;n<pa.length;n+=3)(!t||~t.indexOf(pa[n+1]))&&e(pa[n],pa[n+1],pa[n+2])},ii=function(e){return typeof e=="string"},Cn=function(e){return typeof e=="function"},bo=function(e){return typeof e=="number"},Ss=function(e){return typeof e=="object"},po=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ef=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ua=Math.abs,u0="left",f0="top",Bd="right",kd="bottom",Ls="width",Ns="height",zo="Right",Vo="Left",Go="Top",Ho="Bottom",Kt="padding",xi="margin",Wa="Width",zd="Height",Qt="px",vi=function(e){return lt.getComputedStyle(e)},Ew=function(e){var t=vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},zm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vr=function(e,t){var n=t&&vi(e)[Eh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Gc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},h0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},ww=function(e){return function(t){return Ce.utils.snap(h0(e),t)}},Vd=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Aw=function(e){return function(t,n){return Vd(h0(e))(t,n.direction)}},Zl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Jl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Vm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ql={toggleActions:"play",anticipatePin:0},Hc={top:0,left:0,center:.5,bottom:1,right:1},_c=function(e,t){if(ii(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Hc?Hc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ec=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,p=Dt.createElement("div"),_=Bs(n)||rs(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?yt:n,x=e.indexOf("start")!==-1,M=x?c:u,y="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===en?Bd:kd)+":"+(a+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],xc(p,0,i,x),p},xc=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Wa]=1,s["border"+o+Wa]=0,s[n.p]=t+"px",Ce.set(e,s)},ot=[],Ch={},al,Gm=function(){return En()-bi>34&&(al||(al=requestAnimationFrame(Ar)))},fa=function(){(!On||!On.isPressed||On.startX>yt.clientWidth)&&(ct.cache++,On?al||(al=requestAnimationFrame(Ar)):Ar(),bi||zs("scrollStart"),bi=En())},tf=function(){s0=lt.innerWidth,r0=lt.innerHeight},Eo=function(e){ct.cache++,(e===!0||!bn&&!i0&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!wh||s0!==lt.innerWidth||Math.abs(lt.innerHeight-r0)>lt.innerHeight*.25))&&Vc.restart(!0)},ks={},Rw=[],d0=function r(){return cn(it,"scrollEnd",r)||Rs(!0)},zs=function(e){return ks[e]&&ks[e].map(function(t){return t()})||Rw},ni=[],p0=function(e){for(var t=0;t<ni.length;t+=5)(!e||ni[t+4]&&ni[t+4].query===e)&&(ni[t].style.cssText=ni[t+1],ni[t].getBBox&&ni[t].setAttribute("transform",ni[t+2]||""),ni[t+3].uncache=1)},m0=function(){return ct.forEach(function(e){return Cn(e)&&++e.cacheID&&(e.rec=e())})},Gd=function(e,t){var n;for(Fn=0;Fn<ot.length;Fn++)n=ot[Fn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ko=!0,t&&p0(t),t||zs("revert")},g0=function(e,t){ct.cache++,(t||!Bn)&&ct.forEach(function(n){return Cn(n)&&n.cacheID++&&(n.rec=0)}),ii(e)&&(lt.history.scrollRestoration=Od=e)},Bn,Us=0,Hm,Cw=function(){if(Hm!==Us){var e=Hm=Us;requestAnimationFrame(function(){return e===Us&&Rs(!0)})}},_0=function(){yt.appendChild(wa),Fd=!On&&wa.offsetHeight||lt.innerHeight,yt.removeChild(wa)},Wm=function(e){return sl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Rs=function(e,t){if(si=Dt.documentElement,yt=Dt.body,Ud=[lt,Dt,si,yt],bi&&!e&&!ko){un(it,"scrollEnd",d0);return}_0(),Bn=it.isRefreshing=!0,ko||m0();var n=zs("refreshInit");n0&&it.sort(),t||Gd(),ct.forEach(function(i){Cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),ko=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Rh=1,Wm(!0),ot.forEach(function(i){var s=er(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Wm(!1),Rh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ct.forEach(function(i){Cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),g0(Od,1),Vc.pause(),Us++,Bn=2,Ar(2),ot.forEach(function(i){return Cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Bn=it.isRefreshing=!1,zs("refresh")},Ph=0,vc=1,Wo,Ar=function(e){if(e===2||!Bn&&!ko){it.isUpdating=!0,Wo&&Wo.update(0);var t=ot.length,n=En(),i=n-Qu>=50,s=t&&ot[0].scroll();if(vc=Ph>s?-1:1,Bn||(Ph=s),i&&(bi&&!ru&&n-bi>200&&(bi=0,zs("scrollEnd")),Mo=Qu,Qu=n),vc<0){for(Fn=t;Fn-- >0;)ot[Fn]&&ot[Fn].update(0,i);vc=1}else for(Fn=0;Fn<t;Fn++)ot[Fn]&&ot[Fn].update(0,i);it.isUpdating=!1}al=0},Ih=[u0,f0,kd,Bd,xi+Ho,xi+zo,xi+Go,xi+Vo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yc=Ih.concat([Ls,Ns,"boxSizing","max"+Wa,"max"+zd,"position",xi,Kt,Kt+Go,Kt+zo,Kt+Ho,Kt+Vo]),Pw=function(e,t,n){Aa(n);var i=e._gsap;if(i.spacerIsNative)Aa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},nf=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ih.length,a=t.style,o=e.style,l;s--;)l=Ih[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[kd]=o[Bd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ls]=Gc(e,zn)+Qt,a[Ns]=Gc(e,en)+Qt,a[Kt]=o[xi]=o[f0]=o[u0]="0",Aa(i),o[Ls]=o["max"+Wa]=n[Ls],o[Ns]=o["max"+zd]=n[Ns],o[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Iw=/([A-Z])/g,Aa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Iw,"-$1").toLowerCase())}},tc=function(e){for(var t=yc.length,n=e.style,i=[],s=0;s<t;s++)i.push(yc[s],n[yc[s]]);return i.t=e,i},Dw=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Mc={left:0,top:0},Xm=function(e,t,n,i,s,a,o,l,c,u,f,h,d,p){Cn(e)&&(e=e(l)),ii(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?_c("0"+e.substr(3),n):0));var _=d?d.time():0,m,g,x;if(d&&d.seek(0),isNaN(e)||(e=+e),bo(e))d&&(e=Ce.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&xc(o,n,i,!0);else{Cn(t)&&(t=t(l));var M=(e||"0").split(" "),y,b,E,A;x=Wn(t,l)||yt,y=vr(x)||{},(!y||!y.left&&!y.top)&&vi(x).display==="none"&&(A=x.style.display,x.style.display="block",y=vr(x),A?x.style.display=A:x.style.removeProperty("display")),b=_c(M[0],y[i.d]),E=_c(M[1]||"0",n),e=y[i.p]-c[i.p]-u+b+s-E,o&&xc(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var v=e+n,T=a._isStart;m="scroll"+i.d2,xc(a,v,i,T&&v>20||!T&&(f?Math.max(yt[m],si[m]):a.parentNode[m])<=v+1),f&&(c=vr(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Qt))}return d&&x&&(m=vr(x),d.seek(h),g=vr(x),d._caScrollDist=m[i.p]-g[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},Lw=/(webkit|moz|length|cssText|inset)/i,Ym=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===yt){e._stOrig=s.cssText,o=vi(e);for(a in o)!+a&&!Lw.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},x0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},nc=function(e,t,n){var i={};i[t.p]="+="+n,Ce.set(e,i)},qm=function(e,t){var n=ls(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,p={};c=c||n();var _=x0(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ct.cache++,a.tween&&Ar()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Ce.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(e,"wheel",n.wheelHandler),it.isTouch&&un(e,"touchmove",n.wheelHandler),s},it=(function(){function r(t,n){da||r.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ah(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!So){this.update=this.refresh=this.kill=Ki;return}n=zm(ii(n)||bo(n)||n.nodeType?{trigger:n}:n,Ql);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,M=s.once,y=s.snap,b=s.pinReparent,E=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?zn:en,C=!f&&f!==0,I=Wn(n.scroller||lt),k=Ce.core.getCache(I),V=Bs(I),z=("pinType"in n?n.pinType:rs(I,"pinType")||V&&"fixed")==="fixed",U=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=C&&n.toggleActions.split(" "),J="markers"in n?n.markers:Ql.markers,j=V?0:parseFloat(vi(I)["border"+D.p2+Wa])||0,P=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ue=Tw(I,V,D),Ue=bw(I,V),He=0,je=0,$=0,te=ls(I,D),ie,Ie,Pe,we,mt,be,Ve,Qe,ze,X,N,xt,st,We,ye,R,S,O,Q,ee,K,xe,le,De,Me,re,oe,Se,Ee,de,Ye,L,ce,se,pe,ne,Z,Te,Be;if(P._startClamp=P._endClamp=!1,P._dir=D,m*=45,P.scroller=I,P.scroll=A?A.time.bind(A):te,we=te(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(n0=1,n.refreshPriority===-9999&&(Wo=P)),k.tweenScroll=k.tweenScroll||{top:qm(I,en),left:qm(I,zn)},P.tweenTo=ie=k.tweenScroll[D.p],P.scrubDuration=function(_e){ce=bo(_e)&&_e,ce?L?L.duration(_e):L=Ce.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return g&&g(P)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),de=0,l||(l=i.vars.id)),y&&((!Ss(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in yt.style&&Ce.set(V?[yt,si]:I,{scrollBehavior:"auto"}),ct.forEach(function(_e){return Cn(_e)&&_e.target===(V?Dt.scrollingElement||si:I)&&(_e.smooth=!1)}),Pe=Cn(y.snapTo)?y.snapTo:y.snapTo==="labels"?ww(i):y.snapTo==="labelsDirectional"?Aw(i):y.directional!==!1?function(_e,qe){return Vd(y.snapTo)(_e,En()-je<500?0:qe.direction)}:Ce.utils.snap(y.snapTo),se=y.duration||{min:.1,max:2},se=Ss(se)?Bo(se.min,se.max):Bo(se,se),pe=Ce.delayedCall(y.delay||ce/2||.1,function(){var _e=te(),qe=En()-je<500,ke=ie.tween;if((qe||Math.abs(P.getVelocity())<10)&&!ke&&!ru&&He!==_e){var Ke=(_e-be)/We,Gt=i&&!C?i.totalProgress():Ke,Ze=qe?0:(Gt-Ye)/(En()-Mo)*1e3||0,Lt=Ce.utils.clamp(-Ke,1-Ke,ua(Ze/2)*Ze/.185),$t=Ke+(y.inertia===!1?0:Lt),Nt,Mt,vt=y,vn=vt.onStart,It=vt.onInterrupt,yn=vt.onComplete;if(Nt=Pe($t,P),bo(Nt)||(Nt=$t),Mt=Math.max(0,Math.round(be+Nt*We)),_e<=Ve&&_e>=be&&Mt!==_e){if(ke&&!ke._initted&&ke.data<=ua(Mt-_e))return;y.inertia===!1&&(Lt=Nt-Ke),ie(Mt,{duration:se(ua(Math.max(ua($t-Gt),ua(Nt-Gt))*.185/Ze/.05||0)),ease:y.ease||"power3",data:ua(Mt-_e),onInterrupt:function(){return pe.restart(!0)&&It&&It(P)},onComplete:function(){P.update(),He=te(),i&&!C&&(L?L.resetTo("totalProgress",Nt,i._tTime/i._tDur):i.progress(Nt)),de=Ye=i&&!C?i.totalProgress():P.progress,x&&x(P),yn&&yn(P)}},_e,Lt*We,Mt-_e-Lt*We),vn&&vn(P,ie.tween)}}else P.isActive&&He!==_e&&pe.restart(!0)}).pause()),l&&(Ch[l]=P),h=P.trigger=Wn(h||d!==!0&&d),Be=h&&h._gsap&&h._gsap.stRevert,Be&&(Be=Be(P)),d=d===!0?h:Wn(d),ii(o)&&(o={targets:h,className:o}),d&&(p===!1||p===xi||(p=!p&&d.parentNode&&d.parentNode.style&&vi(d.parentNode).display==="flex"?!1:Kt),P.pin=d,Ie=Ce.core.getCache(d),Ie.spacer?ye=Ie.pinState:(E&&(E=Wn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ie.spacerIsNative=!!E,E&&(Ie.spacerState=tc(E))),Ie.spacer=O=E||Dt.createElement("div"),O.classList.add("pin-spacer"),l&&O.classList.add("pin-spacer-"+l),Ie.pinState=ye=tc(d)),n.force3D!==!1&&Ce.set(d,{force3D:!0}),P.spacer=O=Ie.spacer,Ee=vi(d),De=Ee[p+D.os2],ee=Ce.getProperty(d),K=Ce.quickSetter(d,D.a,Qt),nf(d,O,Ee),S=tc(d)),J){xt=Ss(J)?zm(J,Vm):Vm,X=ec("scroller-start",l,I,D,xt,0),N=ec("scroller-end",l,I,D,xt,0,X),Q=X["offset"+D.op.d2];var gt=Wn(rs(I,"content")||I);Qe=this.markerStart=ec("start",l,gt,D,xt,Q,0,A),ze=this.markerEnd=ec("end",l,gt,D,xt,Q,0,A),A&&(Te=Ce.quickSetter([Qe,ze],D.a,Qt)),!z&&!(nr.length&&rs(I,"fixedMarkers")===!0)&&(Ew(V?yt:I),Ce.set([X,N],{force3D:!0}),re=Ce.quickSetter(X,D.a,Qt),Se=Ce.quickSetter(N,D.a,Qt))}if(A){var ve=A.vars.onUpdate,Le=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),ve&&ve.apply(A,Le||[])})}if(P.previous=function(){return ot[ot.indexOf(P)-1]},P.next=function(){return ot[ot.indexOf(P)+1]},P.revert=function(_e,qe){if(!qe)return P.kill(!0);var ke=_e!==!1||!P.enabled,Ke=bn;ke!==P.isReverted&&(ke&&(ne=Math.max(te(),P.scroll.rec||0),$=P.progress,Z=i&&i.progress()),Qe&&[Qe,ze,X,N].forEach(function(Gt){return Gt.style.display=ke?"none":"block"}),ke&&(bn=P,P.update(ke)),d&&(!b||!P.isActive)&&(ke?Pw(d,O,ye):nf(d,O,vi(d),Me)),ke||P.update(ke),bn=Ke,P.isReverted=ke)},P.refresh=function(_e,qe,ke,Ke){if(!((bn||!P.enabled)&&!qe)){if(d&&_e&&bi){un(r,"scrollEnd",d0);return}!Bn&&ae&&ae(P),bn=P,ie.tween&&!ke&&(ie.tween.kill(),ie.tween=0),L&&L.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ae){return Ae.vars.immediateRender&&Ae.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Gt=ue(),Ze=Ue(),Lt=A?A.duration():er(I,D),$t=We<=.01||!We,Nt=0,Mt=Ke||0,vt=Ss(ke)?ke.end:n.end,vn=n.endTrigger||h,It=Ss(ke)?ke.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),yn=P.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,P),pi=h&&Math.max(0,ot.indexOf(P))||0,Zt=pi,Jt,an,ur,Ws,w,B,Y,W,H,fe,me,he,Re;for(J&&Ss(ke)&&(he=Ce.getProperty(X,D.p),Re=Ce.getProperty(N,D.p));Zt-- >0;)B=ot[Zt],B.end||B.refresh(0,1)||(bn=P),Y=B.pin,Y&&(Y===h||Y===d||Y===yn)&&!B.isReverted&&(fe||(fe=[]),fe.unshift(B),B.revert(!0,!0)),B!==ot[Zt]&&(pi--,Zt--);for(Cn(It)&&(It=It(P)),It=Om(It,"start",P),be=Xm(It,h,Gt,D,te(),Qe,X,P,Ze,j,z,Lt,A,P._startClamp&&"_startClamp")||(d?-.001:0),Cn(vt)&&(vt=vt(P)),ii(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(ii(It)?It.split(" ")[0]:"")+vt:(Nt=_c(vt.substr(2),Gt),vt=ii(It)?It:(A?Ce.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,be):be)+Nt,vn=h)),vt=Om(vt,"end",P),Ve=Math.max(be,Xm(vt||(vn?"100% 0":Lt),vn,Gt,D,te()+Nt,ze,N,P,Ze,j,z,Lt,A,P._endClamp&&"_endClamp"))||-.001,Nt=0,Zt=pi;Zt--;)B=ot[Zt]||{},Y=B.pin,Y&&B.start-B._pinPush<=be&&!A&&B.end>0&&(Jt=B.end-(P._startClamp?Math.max(0,B.start):B.start),(Y===h&&B.start-B._pinPush<be||Y===yn)&&isNaN(It)&&(Nt+=Jt*(1-B.progress)),Y===d&&(Mt+=Jt));if(be+=Nt,Ve+=Nt,P._startClamp&&(P._startClamp+=Nt),P._endClamp&&!Bn&&(P._endClamp=Ve||-.001,Ve=Math.min(Ve,er(I,D))),We=Ve-be||(be-=.01)&&.001,$t&&($=Ce.utils.clamp(0,1,Ce.utils.normalize(be,Ve,ne))),P._pinPush=Mt,Qe&&Nt&&(Jt={},Jt[D.a]="+="+Nt,yn&&(Jt[D.p]="-="+te()),Ce.set([Qe,ze],Jt)),d&&!(Rh&&P.end>=er(I,D)))Jt=vi(d),Ws=D===en,ur=te(),xe=parseFloat(ee(D.a))+Mt,!Lt&&Ve>1&&(me=(V?Dt.scrollingElement||si:I).style,me={style:me,value:me["overflow"+D.a.toUpperCase()]},V&&vi(yt)["overflow"+D.a.toUpperCase()]!=="scroll"&&(me.style["overflow"+D.a.toUpperCase()]="scroll")),nf(d,O,Jt),S=tc(d),an=vr(d,!0),W=z&&ls(I,Ws?zn:en)(),p?(Me=[p+D.os2,We+Mt+Qt],Me.t=O,Zt=p===Kt?Gc(d,D)+We+Mt:0,Zt&&(Me.push(D.d,Zt+Qt),O.style.flexBasis!=="auto"&&(O.style.flexBasis=Zt+Qt)),Aa(Me),yn&&ot.forEach(function(Ae){Ae.pin===yn&&Ae.vars.pinSpacing!==!1&&(Ae._subPinOffset=!0)}),z&&te(ne)):(Zt=Gc(d,D),Zt&&O.style.flexBasis!=="auto"&&(O.style.flexBasis=Zt+Qt)),z&&(w={top:an.top+(Ws?ur-be:W)+Qt,left:an.left+(Ws?W:ur-be)+Qt,boxSizing:"border-box",position:"fixed"},w[Ls]=w["max"+Wa]=Math.ceil(an.width)+Qt,w[Ns]=w["max"+zd]=Math.ceil(an.height)+Qt,w[xi]=w[xi+Go]=w[xi+zo]=w[xi+Ho]=w[xi+Vo]="0",w[Kt]=Jt[Kt],w[Kt+Go]=Jt[Kt+Go],w[Kt+zo]=Jt[Kt+zo],w[Kt+Ho]=Jt[Kt+Ho],w[Kt+Vo]=Jt[Kt+Vo],R=Dw(ye,w,b),Bn&&te(0)),i?(H=i._initted,Zu(1),i.render(i.duration(),!0,!0),le=ee(D.a)-xe+We+Mt,oe=Math.abs(We-le)>1,z&&oe&&R.splice(R.length-2,2),i.render(0,!0,!0),H||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Zu(0)):le=We,me&&(me.value?me.style["overflow"+D.a.toUpperCase()]=me.value:me.style.removeProperty("overflow-"+D.a));else if(h&&te()&&!A)for(an=h.parentNode;an&&an!==yt;)an._pinOffset&&(be-=an._pinOffset,Ve-=an._pinOffset),an=an.parentNode;fe&&fe.forEach(function(Ae){return Ae.revert(!1,!0)}),P.start=be,P.end=Ve,we=mt=Bn?ne:te(),!A&&!Bn&&(we<ne&&te(ne),P.scroll.rec=0),P.revert(!1,!0),je=En(),pe&&(He=-1,pe.restart(!0)),bn=0,i&&C&&(i._initted||Z)&&i.progress()!==Z&&i.progress(Z||0,!0).render(i.time(),!0,!0),($t||$!==P.progress||A||_||i&&!i._initted)&&(i&&!C&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(A&&be<-.001&&!$?Ce.utils.normalize(be,Ve,0):$,!0),P.progress=$t||(we-be)/We===$?0:$),d&&p&&(O._pinOffset=Math.round(P.progress*le)),L&&L.invalidate(),isNaN(he)||(he-=Ce.getProperty(X,D.p),Re-=Ce.getProperty(N,D.p),nc(X,D,he),nc(Qe,D,he-(Ke||0)),nc(N,D,Re),nc(ze,D,Re-(Ke||0))),$t&&!Bn&&P.update(),u&&!Bn&&!st&&(st=!0,u(P),st=!1)}},P.getVelocity=function(){return(te()-mt)/(En()-Mo)*1e3||0},P.endAnimation=function(){po(P.callbackAnimation),i&&(L?L.progress(1):i.paused()?C||po(i,P.direction<0,1):po(i,i.reversed()))},P.labelToScroll=function(_e){return i&&i.labels&&(be||P.refresh()||be)+i.labels[_e]/i.duration()*We||0},P.getTrailing=function(_e){var qe=ot.indexOf(P),ke=P.direction>0?ot.slice(0,qe).reverse():ot.slice(qe+1);return(ii(_e)?ke.filter(function(Ke){return Ke.vars.preventOverlaps===_e}):ke).filter(function(Ke){return P.direction>0?Ke.end<=be:Ke.start>=Ve})},P.update=function(_e,qe,ke){if(!(A&&!ke&&!_e)){var Ke=Bn===!0?ne:P.scroll(),Gt=_e?0:(Ke-be)/We,Ze=Gt<0?0:Gt>1?1:Gt||0,Lt=P.progress,$t,Nt,Mt,vt,vn,It,yn,pi;if(qe&&(mt=we,we=A?te():Ke,y&&(Ye=de,de=i&&!C?i.totalProgress():Ze)),m&&d&&!bn&&!jl&&bi&&(!Ze&&be<Ke+(Ke-mt)/(En()-Mo)*m?Ze=1e-4:Ze===1&&Ve>Ke+(Ke-mt)/(En()-Mo)*m&&(Ze=.9999)),Ze!==Lt&&P.enabled){if($t=P.isActive=!!Ze&&Ze<1,Nt=!!Lt&&Lt<1,It=$t!==Nt,vn=It||!!Ze!=!!Lt,P.direction=Ze>Lt?1:-1,P.progress=Ze,vn&&!bn&&(Mt=Ze&&!Lt?0:Ze===1?1:Lt===1?2:3,C&&(vt=!It&&F[Mt+1]!=="none"&&F[Mt+1]||F[Mt],pi=i&&(vt==="complete"||vt==="reset"||vt in i))),T&&(It||pi)&&(pi||f||!i)&&(Cn(T)?T(P):P.getTrailing(T).forEach(function(ur){return ur.endAnimation()})),C||(L&&!bn&&!jl?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",Ze,i._tTime/i._tDur):(L.vars.totalProgress=Ze,L.invalidate().restart())):i&&i.totalProgress(Ze,!!(bn&&(je||_e)))),d){if(_e&&p&&(O.style[p+D.os2]=De),!z)K(To(xe+le*Ze));else if(vn){if(yn=!_e&&Ze>Lt&&Ve+1>Ke&&Ke+1>=er(I,D),b)if(!_e&&($t||yn)){var Zt=vr(d,!0),Jt=Ke-be;Ym(d,yt,Zt.top+(D===en?Jt:0)+Qt,Zt.left+(D===en?0:Jt)+Qt)}else Ym(d,O);Aa($t||yn?R:S),oe&&Ze<1&&$t||K(xe+(Ze===1&&!yn?le:0))}}y&&!ie.tween&&!bn&&!jl&&pe.restart(!0),o&&(It||M&&Ze&&(Ze<1||!Ju))&&sl(o.targets).forEach(function(ur){return ur.classList[$t||M?"add":"remove"](o.className)}),a&&!C&&!_e&&a(P),vn&&!bn?(C&&(pi&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),a&&a(P)),(It||!Ju)&&(c&&It&&ef(P,c),U[Mt]&&ef(P,U[Mt]),M&&(Ze===1?P.kill(!1,1):U[Mt]=0),It||(Mt=Ze===1?1:3,U[Mt]&&ef(P,U[Mt]))),v&&!$t&&Math.abs(P.getVelocity())>(bo(v)?v:2500)&&(po(P.callbackAnimation),L?L.progress(1):po(i,vt==="reverse"?1:!Ze,1))):C&&a&&!bn&&a(P)}if(Se){var an=A?Ke/A.duration()*(A._caScrollDist||0):Ke;re(an+(X._isFlipped?1:0)),Se(an)}Te&&Te(-Ke/A.duration()*(A._caScrollDist||0))}},P.enable=function(_e,qe){P.enabled||(P.enabled=!0,un(I,"resize",Eo),V||un(I,"scroll",fa),ae&&un(r,"refreshInit",ae),_e!==!1&&(P.progress=$=0,we=mt=He=te()),qe!==!1&&P.refresh())},P.getTween=function(_e){return _e&&ie?ie.tween:L},P.setPositions=function(_e,qe,ke,Ke){if(A){var Gt=A.scrollTrigger,Ze=A.duration(),Lt=Gt.end-Gt.start;_e=Gt.start+Lt*_e/Ze,qe=Gt.start+Lt*qe/Ze}P.refresh(!1,!1,{start:Fm(_e,ke&&!!P._startClamp),end:Fm(qe,ke&&!!P._endClamp)},Ke),P.update()},P.adjustPinSpacing=function(_e){if(Me&&_e){var qe=Me.indexOf(D.d)+1;Me[qe]=parseFloat(Me[qe])+_e+Qt,Me[1]=parseFloat(Me[1])+_e+Qt,Aa(Me)}},P.disable=function(_e,qe){if(_e!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,qe||L&&L.pause(),ne=0,Ie&&(Ie.uncache=1),ae&&cn(r,"refreshInit",ae),pe&&(pe.pause(),ie.tween&&ie.tween.kill()&&(ie.tween=0)),!V)){for(var ke=ot.length;ke--;)if(ot[ke].scroller===I&&ot[ke]!==P)return;cn(I,"resize",Eo),V||cn(I,"scroll",fa)}},P.kill=function(_e,qe){P.disable(_e,qe),L&&!qe&&L.kill(),l&&delete Ch[l];var ke=ot.indexOf(P);ke>=0&&ot.splice(ke,1),ke===Fn&&vc>0&&Fn--,ke=0,ot.forEach(function(Ke){return Ke.scroller===P.scroller&&(ke=1)}),ke||Bn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),qe||i.kill()),Qe&&[Qe,ze,X,N].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),Wo===P&&(Wo=0),d&&(Ie&&(Ie.uncache=1),ke=0,ot.forEach(function(Ke){return Ke.pin===d&&ke++}),ke||(Ie.spacer=0)),n.onKill&&n.onKill(P)},ot.push(P),P.enable(!1,!1),Be&&Be(P),i&&i.add&&!We){var tt=P.update;P.update=function(){P.update=tt,ct.cache++,be||Ve||P.refresh()},Ce.delayedCall(.01,P.update),We=.01,be=Ve=0}else P.refresh();d&&Cw()},r.register=function(n){return da||(Ce=n||o0(),a0()&&window.document&&r.enable(),da=So),da},r.defaults=function(n){if(n)for(var i in n)Ql[i]=n[i];return Ql},r.disable=function(n,i){So=0,ot.forEach(function(a){return a[i?"kill":"disable"](n)}),cn(lt,"wheel",fa),cn(Dt,"scroll",fa),clearInterval(Kl),cn(Dt,"touchcancel",Ki),cn(yt,"touchstart",Ki),Zl(cn,Dt,"pointerdown,touchstart,mousedown",Bm),Zl(cn,Dt,"pointerup,touchend,mouseup",km),Vc.kill(),$l(cn);for(var s=0;s<ct.length;s+=3)Jl(cn,ct[s],ct[s+1]),Jl(cn,ct[s],ct[s+2])},r.enable=function(){if(lt=window,Dt=document,si=Dt.documentElement,yt=Dt.body,Ce&&(sl=Ce.utils.toArray,Bo=Ce.utils.clamp,Ah=Ce.core.context||Ki,Zu=Ce.core.suppressOverwrites||Ki,Od=lt.history.scrollRestoration||"auto",Ph=lt.pageYOffset||0,Ce.core.globals("ScrollTrigger",r),yt)){So=1,wa=document.createElement("div"),wa.style.height="100vh",wa.style.position="absolute",_0(),Sw(),Xt.register(Ce),r.isTouch=Xt.isTouch,Xr=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),wh=Xt.isTouch===1,un(lt,"wheel",fa),Ud=[lt,Dt,si,yt],Ce.matchMedia?(r.matchMedia=function(c){var u=Ce.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ce.addEventListener("matchMediaInit",function(){m0(),Gd()}),Ce.addEventListener("matchMediaRevert",function(){return p0()}),Ce.addEventListener("matchMedia",function(){Rs(0,1),zs("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return tf(),tf})):console.warn("Requires GSAP 3.11.0 or later"),tf(),un(Dt,"scroll",fa);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,a=Ce.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=vr(yt),en.m=Math.round(o.top+en.sc())||0,zn.m=Math.round(o.left+zn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),Kl=setInterval(Gm,250),Ce.delayedCall(.5,function(){return jl=0}),un(Dt,"touchcancel",Ki),un(yt,"touchstart",Ki),Zl(un,Dt,"pointerdown,touchstart,mousedown",Bm),Zl(un,Dt,"pointerup,touchend,mouseup",km),Eh=Ce.utils.checkPrefix("transform"),yc.push(Eh),da=En(),Vc=Ce.delayedCall(.2,Rs).pause(),pa=[Dt,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;Dt.hidden?(Nm=c,Um=u):(Nm!==c||Um!==u)&&Eo()},Dt,"DOMContentLoaded",Rs,lt,"load",Rs,lt,"resize",Eo],$l(un),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<ct.length;l+=3)Jl(cn,ct[l],ct[l+1]),Jl(cn,ct[l],ct[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Ju=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Kl)||(Kl=i)&&setInterval(Gm,i),"ignoreMobileResize"in n&&(wh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($l(cn)||$l(un,n.autoRefreshEvents||"none"),i0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Wn(n),a=ct.indexOf(s),o=Bs(s);~a&&ct.splice(a,o?6:2),i&&(o?nr.unshift(lt,i,yt,i,si,i):nr.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ii(n)?Wn(n):n).getBoundingClientRect(),o=a[s?Ls:Ns]*i||0;return s?a.right-o>0&&a.left+o<lt.innerWidth:a.bottom-o>0&&a.top+o<lt.innerHeight},r.positionInViewport=function(n,i,s){ii(n)&&(n=Wn(n));var a=n.getBoundingClientRect(),o=a[s?Ls:Ns],l=i==null?o/2:i in Hc?Hc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/lt.innerWidth:(a.top+l)/lt.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ks.killAll||[];ks={},i.forEach(function(s){return s()})}},r})();it.version="3.14.2";it.saveStyles=function(r){return r?sl(r).forEach(function(e){if(e&&e.style){var t=ni.indexOf(e);t>=0&&ni.splice(t,5),ni.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),Ah())}}):ni};it.revert=function(r,e){return Gd(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?Eo(!0):(da||it.register())&&Rs(!0)};it.update=function(r){return++ct.cache&&Ar(r===!0?2:0)};it.clearScrollMemory=g0;it.maxScroll=function(r,e){return er(r,e?zn:en)};it.getScrollFunc=function(r,e){return ls(Wn(r),e?zn:en)};it.getById=function(r){return Ch[r]};it.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!bi};it.snapDirectional=Vd;it.addEventListener=function(r,e){var t=ks[r]||(ks[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=ks[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Ce.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Cn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Cn(s)&&(s=s(),un(it,"refresh",function(){return s=e.batchMax()})),sl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(it.create(c))}),t};var Km=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},rf=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===si&&r(yt,t)},ic={auto:1,scroll:1},Nw=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ce.core.getCache(s),o=En(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ic[(l=vi(s)).overflowY]||ic[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Bs(s)&&(ic[(l=vi(s)).overflowY]||ic[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},v0=function(e,t,n,i){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Nw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(Dt,Xt.eventTypes[0],$m,!1,!0)},onDisable:function(){return cn(Dt,Xt.eventTypes[0],$m,!0)}})},Uw=/(input|label|select|textarea)/i,jm,$m=function(e){var t=Uw.test(e.target.tagName);(t||jm)&&(e._gsapAllow=!0,jm=t)},Ow=function(e){Ss(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Wn(e.target)||si,u=Ce.core.globals().ScrollSmoother,f=u&&u.get(),h=Xr&&(e.content&&Wn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=ls(c,en),p=ls(c,zn),_=1,m=(Xt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,g=0,x=Cn(i)?function(){return i(o)}:function(){return i||2.8},M,y,b=v0(c,e.type,!0,s),E=function(){return y=!1},A=Ki,v=Ki,T=function(){l=er(c,en),v=Bo(Xr?1:0,l),n&&(A=Bo(0,er(c,zn))),M=Us},D=function(){h._gsap.y=To(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(y){requestAnimationFrame(E);var J=To(o.deltaY/2),j=v(d.v-J);if(h&&j!==d.v+d.offset){d.offset=j-d.v;var P=To((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=ct.cache,Ar()}return!0}d.offset&&D(),y=!0},I,k,V,z,U=function(){T(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return h&&Ce.set(h,{y:"+=0"}),e.ignoreCheck=function(F){return Xr&&F.type==="touchmove"&&C()||_>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){y=!1;var F=_;_=To((lt.visualViewport&&lt.visualViewport.scale||1)/m),I.pause(),F!==_&&rf(c,_>1.01?!0:n?!1:"x"),k=p(),V=d(),T(),M=Us},e.onRelease=e.onGestureStart=function(F,J){if(d.offset&&D(),!J)z.restart(!0);else{ct.cache++;var j=x(),P,ae;n&&(P=p(),ae=P+j*.05*-F.velocityX/.227,j*=Km(p,P,ae,er(c,zn)),I.vars.scrollX=A(ae)),P=d(),ae=P+j*.05*-F.velocityY/.227,j*=Km(d,P,ae,er(c,en)),I.vars.scrollY=v(ae),I.invalidate().duration(j).play(.01),(Xr&&I.vars.scrollY>=l||P>=l-1)&&Ce.to({},{onUpdate:U,duration:j})}a&&a(F)},e.onWheel=function(){I._ts&&I.pause(),En()-g>1e3&&(M=0,g=En())},e.onChange=function(F,J,j,P,ae){if(Us!==M&&T(),J&&n&&p(A(P[2]===J?k+(F.startX-F.x):p()+J-P[1])),j){d.offset&&D();var ue=ae[2]===j,Ue=ue?V+F.startY-F.y:d()+j-ae[1],He=v(Ue);ue&&Ue!==He&&(V+=He-Ue),d(He)}(j||J)&&Ar()},e.onEnable=function(){rf(c,n?!1:"x"),it.addEventListener("refresh",U),un(lt,"resize",U),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){rf(c,!0),cn(lt,"resize",U),it.removeEventListener("refresh",U),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Xt(e),o.iOS=Xr,Xr&&!d()&&d(1),Xr&&Ce.ticker.add(Ki),z=o._dc,I=Ce.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:x0(d,d(),function(){return I.pause()})},onUpdate:Ar,onComplete:z.vars.onComplete}),o};it.sort=function(r){if(Cn(r))return ot.sort(r);var e=lt.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),ot.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new Xt(r)};it.normalizeScroll=function(r){if(typeof r>"u")return On;if(r===!0&&On)return On.enable();if(r===!1){On&&On.kill(),On=r;return}var e=r instanceof Xt?r:Ow(r);return On&&On.target===e.target&&On.kill(),Bs(e.target)&&(On=e),e};it.core={_getVelocityProp:bh,_inputObserver:v0,_scrollers:ct,_proxies:nr,bridge:{ss:function(){bi||zs("scrollStart"),bi=En()},ref:function(){return bn}}};o0()&&Ce.registerPlugin(it);function Zm(r,e){if(e===mx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===th||e===wg){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===th)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Fw(r){const e=new Map,t=new Map,n=r.clone();return y0(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function y0(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)y0(r.children[n],e.children[n],t)}class Bw extends Ja{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hw(t)}),this.register(function(t){return new Ww(t)}),this.register(function(t){return new Qw(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new Yw(t)}),this.register(function(t){return new qw(t)}),this.register(function(t){return new Kw(t)}),this.register(function(t){return new jw(t)}),this.register(function(t){return new Gw(t)}),this.register(function(t){return new $w(t)}),this.register(function(t){return new Xw(t)}),this.register(function(t){return new Jw(t)}),this.register(function(t){return new Zw(t)}),this.register(function(t){return new zw(t)}),this.register(function(t){return new Jm(t,ut.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jm(t,ut.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new n1(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Io.extractUrlBase(e);a=Io.resolveURL(c,this.path)}else a=Io.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Vg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===M0){try{a[ut.KHR_BINARY_GLTF]=new i1(e)}catch(f){i&&i(f);return}s=JSON.parse(a[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new g1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case ut.KHR_MATERIALS_UNLIT:a[f]=new Vw;break;case ut.KHR_DRACO_MESH_COMPRESSION:a[f]=new r1(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:a[f]=new s1;break;case ut.KHR_MESH_QUANTIZATION:a[f]=new a1;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function kw(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Yt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zw{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Gn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Wg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Hg(u),c.distance=f;break;case"spot":c=new Wv(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Vw{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Sr}extendParams(e,t,n){const i=[];e.color=new Ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Gn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,fn))}return Promise.all(i)}}class Gw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Hw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pt(s,s)}return Promise.all(i)}}class Ww{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Xw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Yw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Gn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,fn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class qw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Kw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(s[0],s[1],s[2],Gn),Promise.all(i)}}class jw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class $w{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(s[0],s[1],s[2],Gn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,fn)),Promise.all(i)}}class Zw{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Jw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?cr:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Qw{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class e1{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class t1{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Jm{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}}class n1{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==_i.TRIANGLES&&c.mode!==_i.TRIANGLE_STRIP&&c.mode!==_i.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const p of f){const _=new Je,m=new G,g=new Dr,x=new G(1,1,1),M=new gv(p.geometry,p.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,_.compose(m,g,x));for(const y in l)if(y==="_COLOR_0"){const b=l[y];M.instanceColor=new ih(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,l[y]);Ot.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const M0="glTF",mo=12,Qm={JSON:1313821514,BIN:5130562};class i1{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==M0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-mo,s=new DataView(e,mo);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Qm.JSON){const c=new Uint8Array(e,mo+a,o);this.content=n.decode(c)}else if(l===Qm.BIN){const c=mo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class r1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=Dh[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=Dh[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],d=Ra[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}f(d)},o,c,Gn,h)})})}}class s1{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class a1{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}}class S0 extends ja{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,p=e*c,_=p-c,m=-2*d+3*h,g=d-h,x=1-m,M=g-h+f;for(let y=0;y!==o;y++){const b=a[_+y+o],E=a[_+y+l]*u,A=a[p+y+o],v=a[p+y]*u;s[y]=x*b+M*E+m*A+g*v}return s}}const o1=new Dr;class l1 extends S0{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return o1.fromArray(s).normalize().toArray(s),s}}const _i={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ra={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},eg={9728:tn,9729:nn,9984:vg,9985:oc,9986:_o,9987:Mr},tg={33071:Zi,33648:Ac,10497:Fs},sf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},c1={CUBICSPLINE:void 0,LINEAR:Ko,STEP:qo},af={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function u1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new hd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:rr})),r.DefaultMaterial}function vs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function f1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;o.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function h1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function d1(r){let e;const t=r.extensions&&r.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+of(t.attributes):e=r.indices+":"+of(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+of(r.targets[n]);return e}function of(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Lh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function p1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const m1=new Je;class g1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new dd(this.options.manager):this.textureLoader=new Kv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vs(s,o,i),Yi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Io.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=sf[i.type],o=Ra[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Pn(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=sf[i.type],c=Ra[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(d&&d!==f){const g=Math.floor(h/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let M=t.cache.get(x);M||(_=new c(o,g*d,i.count*d/u),M=new cv(_,d/u),t.cache.add(x,M)),m=new ad(M,l,h%d/u,p)}else o===null?_=new c(i.count*l):_=new c(o,h,i.count*l),m=new Pn(_,l,p);if(i.sparse!==void 0){const g=sf.SCALAR,x=Ra[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new x(a[1],M,i.sparse.count*g),E=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new Pn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,v=b.length;A<v;A++){const T=b[A];if(m.setX(T,E[A*l]),l>=2&&m.setY(T,E[A*l+1]),l>=3&&m.setZ(T,E[A*l+2]),l>=4&&m.setW(T,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=eg[h.magFilter]||nn,u.minFilter=eg[h.minFilter]||Mr,u.wrapS=tg[h.wrapS]||Fs,u.wrapT=tg[h.wrapT]||Fs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==tn&&u.minFilter!==nn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let p=h;t.isImageBitmapLoader===!0&&(p=function(_){const m=new hn(_);m.needsUpdate=!0,h(m)}),t.load(Io.resolveURL(f,s.path),p,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),Yi(f,a),f.userData.mimeType=a.mimeType||p1(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new fd,Fi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ng,Fi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return hd}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){const f=i[ut.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Ge(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Gn),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,fn)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ii);const u=s.alphaMode||af.OPAQUE;if(u===af.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===af.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Sr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new pt(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==Sr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Sr){const f=s.emissiveFactor;o.emissive=new Ge().setRGB(f[0],f[1],f[2],Gn)}return s.emissiveTexture!==void 0&&a!==Sr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,fn)),Promise.all(c).then(function(){const f=new a(o);return s.name&&(f.name=s.name),Yi(f,s),t.associations.set(f,{materials:e}),s.extensions&&vs(i,f,s),f})}createUniqueName(e){const t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ng(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=d1(c),f=i[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=ng(new Zn,c,t),i[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?u1(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,p=u.length;d<p;d++){const _=u[d],m=a[d];let g;const x=c[d];if(m.mode===_i.TRIANGLES||m.mode===_i.TRIANGLE_STRIP||m.mode===_i.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new dv(_,x):new _n(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===_i.TRIANGLE_STRIP?g.geometry=Zm(g.geometry,wg):m.mode===_i.TRIANGLE_FAN&&(g.geometry=Zm(g.geometry,th));else if(m.mode===_i.LINES)g=new yv(_,x);else if(m.mode===_i.LINE_STRIP)g=new ud(_,x);else if(m.mode===_i.LINE_LOOP)g=new Mv(_,x);else if(m.mode===_i.POINTS)g=new Ug(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&h1(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Yi(g,s),m.extensions&&vs(i,g,m),t.assignFinalMaterial(g),f.push(g)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&vs(i,f[0],s),f[0];const h=new ws;s.extensions&&vs(i,h,s),t.associations.set(h,{meshes:e});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wn(Xx.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Jc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const f=a[c];if(f){o.push(f);const h=new Je;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ld(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){const d=i.channels[f],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],p=f[2],_=f[3],m=f[4],g=[];for(let M=0,y=h.length;M<y;M++){const b=h[M],E=d[M],A=p[M],v=_[M],T=m[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const D=n._createAnimationTracks(b,E,A,v,T);if(D)for(let C=0;C<D.length;C++)g.push(D[C])}const x=new Ov(s,void 0,g);return Yi(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,m1)});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){const d=u.userData.pivot,p=f[0];u.pivot=new G().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Lg:c.length>1?u=new ws:c.length===1?u=c[0]:u=new Ot,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=a),Yi(u,s),s.extensions&&vs(n,u,s),s.matrix!==void 0){const f=new Je;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ws;n.name&&(s.name=i.createUniqueName(n.name)),Yi(s,n),n.extensions&&vs(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,f=l.length;u<f;u++){const h=l[u];h.parent!==null?s.add(Fw(h)):s.add(h)}const c=u=>{const f=new Map;for(const[h,d]of i.associations)(h instanceof Fi||h instanceof hn)&&f.set(h,d);return u.traverse(h=>{const d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Hr[s.path]===Hr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Hr[s.path]){case Hr.weights:c=Ua;break;case Hr.rotation:c=Oa;break;case Hr.translation:case Hr.scale:c=Fa;break;default:n.itemSize===1?c=Ua:c=Fa;break}const u=i.interpolation!==void 0?c1[i.interpolation]:Ko,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const p=new c(l[h]+"."+Hr[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Lh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Oa?l1:S0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _1(r,e,t){const n=e.attributes,i=new Lr;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),o.normalized){const u=Lh(Ra[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new G,l=new G;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),h.normalized){const _=Lh(Ra[h.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new lr;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function ng(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Dh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ht.workingColorSpace!==Gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Yi(r,e),_1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?f1(r,e.targets,t):r})}function x1(r,e){const t=(90-r)*(Math.PI/180),n=(e+180)*(Math.PI/180),i=-Math.sin(t)*Math.sin(n),s=Math.cos(t),a=Math.sin(t)*Math.cos(n);return new G(i,s,a)}class v1 extends _n{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new G(.70707,.70707,0),f=new Ge(t.sunColor!==void 0?t.sunColor:16777215),h=new Ge(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new G(0,0,0),p=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:rr,m=t.fog!==void 0?t.fog:!1,g=new Yr,x=new G,M=new G,y=new G,b=new Je,E=new G(0,0,-1),A=new Pt,v=new G,T=new G,D=new Pt,C=new Je,I=new wn,k=new Oi(i,s,{type:ar}),V={name:"MirrorShader",uniforms:sh.merge([ge.fog,ge.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Je},sunColor:{value:new Ge(8355711)},sunDirection:{value:new G(.70707,.70707,0)},eye:{value:new G},waterColor:{value:new Ge(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},z=new ki({name:V.name,uniforms:sh.clone(V.uniforms),vertexShader:V.vertexShader,fragmentShader:V.fragmentShader,lights:!0,side:_,fog:m});z.uniforms.mirrorSampler.value=k.texture,z.uniforms.textureMatrix.value=C,z.uniforms.alpha.value=o,z.uniforms.time.value=l,z.uniforms.normalSampler.value=c,z.uniforms.sunColor.value=f,z.uniforms.waterColor.value=h,z.uniforms.sunDirection.value=u,z.uniforms.distortionScale.value=p,z.uniforms.eye.value=d,n.material=z,n.onBeforeRender=function(U,F,J){if(M.setFromMatrixPosition(n.matrixWorld),y.setFromMatrixPosition(J.matrixWorld),b.extractRotation(n.matrixWorld),x.set(0,0,1),x.applyMatrix4(b),v.subVectors(M,y),v.dot(x)>0)return;v.reflect(x).negate(),v.add(M),b.extractRotation(J.matrixWorld),E.set(0,0,-1),E.applyMatrix4(b),E.add(y),T.subVectors(M,E),T.reflect(x).negate(),T.add(M),I.position.copy(v),I.up.set(0,1,0),I.up.applyMatrix4(b),I.up.reflect(x),I.lookAt(T),I.far=J.far,I.updateMatrixWorld(),I.projectionMatrix.copy(J.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(I.projectionMatrix),C.multiply(I.matrixWorldInverse),g.setFromNormalAndCoplanarPoint(x,M),g.applyMatrix4(I.matrixWorldInverse),A.set(g.normal.x,g.normal.y,g.normal.z,g.constant);const j=I.projectionMatrix;D.x=(Math.sign(A.x)+j.elements[8])/j.elements[0],D.y=(Math.sign(A.y)+j.elements[9])/j.elements[5],D.z=-1,D.w=(1+j.elements[10])/j.elements[14],A.multiplyScalar(2/A.dot(D)),j.elements[2]=A.x,j.elements[6]=A.y,j.elements[10]=A.z+1-a,j.elements[14]=A.w,d.setFromMatrixPosition(J.matrixWorld);const P=U.getRenderTarget(),ae=U.xr.enabled,ue=U.shadowMap.autoUpdate;n.visible=!1,U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(k),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(F,I),n.visible=!0,U.xr.enabled=ae,U.shadowMap.autoUpdate=ue,U.setRenderTarget(P);const Ue=J.viewport;Ue!==void 0&&U.state.viewport(Ue)}}}const y1="/deltaflood-web/assets/earth-BTeReOQF.jpg",M1="/deltaflood-web/assets/waternormals-Dfm-ILpY.jpg",S1=new URL("/deltaflood-web/assets/satellite-DeJFbyBC.glb",import.meta.url).href,T1=new URL("/deltaflood-web/assets/space-CD6erZ93.mp3",import.meta.url).href,b1=new URL("/deltaflood-web/assets/underwater-Djdg_mJK.mp3",import.meta.url).href;$e.registerPlugin(it);window.addEventListener("load",()=>{["hero","satellite","patna","demo","model","impact","outro"].forEach(e=>{const t=document.getElementById(e);if(t){const n=t.getBoundingClientRect();console.log(`#${e}: top=${Math.round(n.top+window.scrollY)}, height=${Math.round(t.offsetHeight)}`)}}),console.log("total page height:",document.body.scrollHeight)});const Nr=new sv,An=new wn(75,window.innerWidth/window.innerHeight,.1,1e3),Hs=new Qb({canvas:document.getElementById("webgl"),antialias:!0});Hs.setSize(window.innerWidth,window.innerHeight);Hs.setPixelRatio(Math.min(window.devicePixelRatio,2));Hs.toneMapping=qh;Hs.outputColorSpace=fn;An.position.z=3;const E1=new dd,T0=E1.load(y1);T0.anisotropy=Hs.capabilities.getMaxAnisotropy();const w1=new $c(1,64,64),Nh=new Av({map:T0,shininess:25,transparent:!0,opacity:1}),Ni=new _n(w1,Nh);Nr.add(Ni);const A1=new $c(1.02,64,64),Wc=new Sr({color:4172277,transparent:!0,opacity:.25,side:Vn}),Uh=new _n(A1,Wc);Nr.add(Uh);const b0=new Zn,E0=8e3,Sc=new Float32Array(E0*3);for(let r=0;r<E0*3;r+=3){let e,t,n;do e=(Math.random()-.5)*200,t=(Math.random()-.5)*200,n=(Math.random()-.5)*200;while(Math.sqrt(e*e+t*t+n*n)<5);Sc[r]=e,Sc[r+1]=t,Sc[r+2]=n}b0.setAttribute("position",new Pn(Sc,3));const Xc=new fd({color:16777215,size:.05,sizeAttenuation:!0}),wo=new Ug(b0,Xc);Nr.add(wo);const Rr=new Audio(T1);Rr.loop=!0;Rr.volume=0;Rr.preload="auto";const yr=new Audio(b1);yr.loop=!0;yr.volume=0;yr.preload="auto";let Xa=!1;const Hd=()=>{Xa||(Xa=!0,Rr.play().then(()=>{$e.to(Rr,{volume:.4,duration:3})}).catch(r=>console.log("Audio blocked:",r)))};window.addEventListener("mousemove",Hd,{once:!0});window.addEventListener("pointerdown",Hd,{once:!0});window.addEventListener("scroll",Hd,{once:!0});window.addEventListener("soundToggled",r=>{const{isMuted:e}=r.detail;$e.to(Rr,{volume:e?0:.4,duration:1}),$e.to(yr,{volume:e?0:.5,duration:1})});const ir=new Ot;ir.rotation.z=-Math.PI/6;ir.rotation.x=Math.PI/12;ir.scale.set(0,0,0);Nr.add(ir);let Pi,Ao=[],ol=!1;const R1=new Bw;R1.load(S1,r=>{Pi=r.scene,Pi.scale.set(1.5,1.5,1.5),Pi.traverse(i=>{i.isMesh&&(i.material.metalness=1,i.material.roughness=.3)}),Pi.position.set(-5,0,0),Pi.rotation.y=Math.PI/2,Pi.rotation.z=Math.PI/8,ir.add(Pi);const e=new Ka(.8,.01);[16720418,2293538,4474111].forEach(i=>{const s=new Sr({color:i,transparent:!0,opacity:0,side:Ii,blending:df}),a=new _n(e,s);a.rotation.x=Math.PI/2,a.position.y=-.05,Pi.add(a),Ao.push(a)}),$e.timeline({scrollTrigger:{trigger:"#satellite",start:"top center",end:"bottom center",scrub:1,onEnter:()=>{ol=!0,$e.to(ir.scale,{x:1,y:1,z:1,duration:1,ease:"power2.out"})},onLeaveBack:()=>{ol=!1,$e.to(ir.scale,{x:0,y:0,z:0,duration:.5})}}}).to(Pi.position,{x:-1.8}).addLabel("split").to(Ao[0].position,{z:-.08},"split").to(Ao[2].position,{z:.08},"split").to(Ao.map(i=>i.material),{opacity:.4},"split")});const Vs=new v1(new Ka(1e4,1e4),{textureWidth:512,textureHeight:512,waterNormals:new dd().load(M1,r=>{r.wrapS=r.wrapT=Fs}),sunDirection:new G(1,1,0).normalize(),sunColor:16777215,waterColor:25780,distortionScale:8,fog:!1,alpha:1});Vs.rotation.x=-Math.PI/2;Vs.position.y=-2;Vs.visible=!1;Nr.add(Vs);const C1=25.5941,P1=85.1376;x1(C1,P1);const Wd=$e.timeline({scrollTrigger:{trigger:"#patna",start:"1% top",end:"30% top",scrub:1.5,onEnter:()=>{Xa&&$e.to(Rr,{volume:.1,duration:2}),Pi&&($e.to(ir.scale,{x:0,y:0,z:0,duration:1,ease:"power2.in"}),$e.to(Ao.map(r=>r.material),{opacity:0,duration:.5}),setTimeout(()=>ol=!1,1e3)),$e.to(Ni.rotation,{y:3.29,x:.34,duration:2.5,ease:"power2.inOut"})},onLeaveBack:()=>{Xa&&(Rr.play().catch(()=>{}),$e.to(Rr,{volume:.4,duration:2})),ol=!0,$e.to(ir.scale,{x:1,y:1,z:1,duration:1,ease:"power2.out"})}}});Wd.to(An.position,{z:1.9,duration:1,ease:"power3.inOut"},.2);Wd.to(Xc,{opacity:0,duration:.3},.2);Wd.to(Wc,{opacity:.6,duration:.5},.3);it.create({trigger:"#patna",start:"30% top",once:!1,onEnter:()=>{$e.to(Nh,{opacity:0,duration:1.5}),$e.to(Wc,{opacity:0,duration:1}),$e.to(Xc,{opacity:0,duration:.5}),Vs.visible=!0,window._waterVisible=!0,$e.to(An.position,{x:0,y:5,z:0,duration:1.5,ease:"power2.inOut"}),$e.to(An.rotation,{x:-Math.PI/2,duration:1.5,ease:"power2.inOut"}),Xa&&(yr.play().catch(()=>{}),$e.fromTo(yr,{volume:0},{volume:.5,duration:3}))},onLeaveBack:()=>{$e.to(Nh,{opacity:1,duration:1}),$e.to(Wc,{opacity:.25,duration:1}),$e.to(Xc,{opacity:1,duration:.5}),$e.to(An.position,{x:0,y:0,z:1.9,duration:1.5}),$e.to(An.rotation,{x:0,duration:1.5}),Xa&&$e.to(yr,{volume:0,duration:2,onComplete:()=>{yr.pause(),yr.currentTime=0}})}});const I1=new qv(16777215,.5);Nr.add(I1);const w0=new Wg(16777215,2.5);w0.position.set(8,2,5);Nr.add(w0);const D1=new Hg(16777215,2);An.add(D1);Nr.add(An);let su=!1,Oh=0,Fh=0,Tc={x:0,y:0},Ya="hero";it.create({trigger:"#patna",start:"10% top",onEnter:()=>Ya="patna",onLeaveBack:()=>Ya="hero"});window.addEventListener("mousedown",r=>{su=!0,Tc={x:r.clientX,y:r.clientY}});window.addEventListener("mouseup",()=>su=!1);window.addEventListener("mousemove",r=>{if(Ya==="hero"&&(Oh=(r.clientX/window.innerWidth-.5)*2,Fh=(r.clientY/window.innerHeight-.5)*2),su&&Ya==="hero"){const e={x:r.clientX-Tc.x,y:r.clientY-Tc.y};Ni.rotation.y+=e.x*.005,Ni.rotation.x+=e.y*.005,Ni.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,Ni.rotation.x))}Tc={x:r.clientX,y:r.clientY}});function A0(){requestAnimationFrame(A0),!su&&Ya==="hero"&&(Ni.rotation.y+=.001),Uh.rotation.y=Ni.rotation.y,Uh.rotation.x=Ni.rotation.x,ol&&Pi&&(ir.rotation.y+=.004),Vs.visible&&(Vs.material.uniforms.time.value+=.5/60),Ya==="hero"&&(wo.rotation.x+=(Fh*.02-wo.rotation.x)*.05,wo.rotation.y+=(Oh*.02-wo.rotation.y)*.05,An.position.x+=(Oh*.5-An.position.x)*.05,An.position.y+=(-Fh*.5-An.position.y)*.05,An.lookAt(0,0,0)),Hs.render(Nr,An)}A0();window.addEventListener("keypress",r=>{r.key==="r"&&console.log("rotation Y:",Ni.rotation.y,"rotation X:",Ni.rotation.x)});window.addEventListener("resize",()=>{An.aspect=window.innerWidth/window.innerHeight,An.updateProjectionMatrix(),Hs.setSize(window.innerWidth,window.innerHeight)});$e.registerPlugin(it);function L1(){const r=document.getElementById("loader");r&&(window.addEventListener("load",()=>{$e.to(r,{opacity:0,duration:1.5,ease:"power2.inOut",onComplete:()=>{r.style.display="none"}})}),setTimeout(()=>{r.style.display!=="none"&&$e.to(r,{opacity:0,duration:1.5,ease:"power2.inOut",onComplete:()=>{r.style.display="none"}})},5e3))}function N1(){const r=document.getElementById("sound-toggle");if(!r)return;let e=!1;const t=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.889 16H2V8h3.889l5.294-4.332C11.644 3.292 12 3.613 12 4.09v15.82c0 .477-.356.798-.817.422L5.889 16zm12.518-12.001l-1.42 1.42C19.018 7.438 20.5 9.43 20.5 12c0 2.57-1.482 4.562-3.512 6.581l1.42 1.42C21.018 17.562 23 15.43 23 12c0-3.43-1.983-5.563-4.593-8.001zm-3 3l-1.42 1.42a5.986 5.986 0 011.91 4.581c0 1.76-.75 3.34-1.91 4.581l1.42 1.42a7.994 7.994 0 002.503-6.001c0-2.31-1.01-4.41-2.503-6.001z"/>
  </svg>`,n=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.889 16H2V8h3.889l5.294-4.332C11.644 3.292 12 3.613 12 4.09v15.82c0 .477-.356.798-.817.422L5.889 16zm13.518-4L22 14.59 20.59 16 18 13.41 15.41 16 14 14.59 16.59 12 14 9.41 15.41 8 22 9.41 19.407 12z"/>
  </svg>`;r.innerHTML=t,r.addEventListener("click",()=>{e=!e,r.innerHTML=e?n:t,window.dispatchEvent(new CustomEvent("soundToggled",{detail:{isMuted:e}}))})}function U1(){const r=document.getElementById("scroll-progress");r&&window.addEventListener("scroll",()=>{const e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=e/t*100;r.style.height=n+"%"})}function O1(){const r=document.getElementById("cursor"),e=document.getElementById("cursor-follower");!r||!e||(window.addEventListener("mousemove",t=>{$e.to(r,{x:t.clientX,y:t.clientY,duration:.1}),$e.to(e,{x:t.clientX,y:t.clientY,duration:.3})}),window.addEventListener("mousedown",t=>{const n=document.createElement("div");n.className="cursor-ripple",n.style.left=t.clientX+"px",n.style.top=t.clientY+"px",document.body.appendChild(n),$e.to(n,{scale:4,opacity:0,duration:1,ease:"power2.out",onComplete:()=>n.remove()})}))}function F1(){const r=document.querySelectorAll(".briefing-card");if(!r.length)return;const e=$e.timeline({scrollTrigger:{trigger:"#satellite",start:"top bottom",end:"top center",scrub:1}});r.forEach((t,n)=>{e.to(t,{opacity:1,x:0,duration:.6,ease:"power2.out"},n*.4)})}function B1(){const r=document.querySelectorAll(".band-label"),e=document.querySelector(".spectral-description");if(!r.length||!e)return;const t=$e.timeline({scrollTrigger:{trigger:"#satellite",start:"top bottom",end:"top center",scrub:1}});r.forEach((n,i)=>{t.to(n,{opacity:1,x:0,duration:.5,ease:"power2.out"},3+i*.3)}),t.to(e,{opacity:1,y:0,duration:.8,ease:"power2.out"},4)}function k1(){const r=$e.utils.toArray(".narration-line");r.length&&r.forEach(e=>{it.create({trigger:e,start:"top 60%",end:"top 40%",onEnter:()=>$e.to(e,{opacity:1,duration:1}),onLeave:()=>$e.to(e,{opacity:0,duration:1}),onEnterBack:()=>$e.to(e,{opacity:1,duration:1}),onLeaveBack:()=>$e.to(e,{opacity:0,duration:1})})})}function z1(){const r=document.querySelectorAll(".dashboard-header, .image-card, .stat-card");if(!r.length)return;r.forEach(t=>t.classList.add("dash-hidden"));const e=new IntersectionObserver(t=>{t.forEach(n=>{if(n.isIntersecting){const a=Array.from(r).indexOf(n.target)*150;setTimeout(()=>{n.target.classList.remove("dash-hidden"),n.target.classList.add("dash-visible"),n.target.style.animationDelay="0ms"},a),e.unobserve(n.target)}})},{threshold:.15});r.forEach(t=>e.observe(t))}function V1(){const r=document.querySelector("#outro");if(!r)return;const e=r.querySelector(".outro-title"),t=r.querySelectorAll(".outro-subtitle"),n=r.querySelector(".outro-author"),i=r.querySelector(".outro-chips"),s=r.querySelectorAll(".tech-chip"),a=r.querySelector(".outro-links"),o=r.querySelector(".outro-footer"),l=r.querySelectorAll(".outro-group");$e.fromTo(r,{backgroundColor:"rgba(0, 0, 0, 0)"},{backgroundColor:"rgba(2, 6, 18, 0.92)",ease:"none",scrollTrigger:{trigger:r,start:"top 80%",end:"top 20%",scrub:1}}),$e.set(l,{y:50}),[e,...t,n,i,a,o].filter(Boolean).forEach((u,f)=>{$e.fromTo(u,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power2.out",scrollTrigger:{trigger:r,start:"top 60%",end:"top 15%",toggleActions:"play none none reverse"},delay:f*.2})}),l.forEach(u=>{$e.fromTo(u,{opacity:0,y:50},{opacity:1,y:0,duration:.9,ease:"power2.out",scrollTrigger:{trigger:r,start:"top 65%",end:"top 20%",toggleActions:"play none none reverse"}})}),s.length&&s.forEach((u,f)=>{$e.fromTo(u,{opacity:0,y:20,scale:.92},{opacity:1,y:0,scale:1,duration:.6,ease:"back.out(1.4)",scrollTrigger:{trigger:r,start:"top 45%",toggleActions:"play none none reverse"},delay:.6+f*.1})})}document.addEventListener("DOMContentLoaded",()=>{L1(),N1(),U1(),O1(),F1(),B1(),k1(),z1(),V1()});function xn(r){return(e,...t)=>G1(r,e,t)}function eo(r,e){return xn(R0(r,e).get)}const{apply:G1,getOwnPropertyDescriptor:R0,getPrototypeOf:Xd,ownKeys:H1}=Reflect,{iterator:gl,toStringTag:W1}=Symbol,X1=Object,{create:Yd,defineProperty:Y1}=X1,q1=Array,K1=q1.prototype,C0=K1[gl],j1=xn(C0),P0=ArrayBuffer,$1=P0.prototype;eo($1,"byteLength");const ig=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;ig&&eo(ig.prototype,"byteLength");const I0=Xd(Uint8Array);I0.from;const Hn=I0.prototype;Hn[gl];xn(Hn.keys);xn(Hn.values);xn(Hn.entries);xn(Hn.set);xn(Hn.reverse);xn(Hn.fill);xn(Hn.copyWithin);xn(Hn.sort);xn(Hn.slice);xn(Hn.subarray);eo(Hn,"buffer");eo(Hn,"byteOffset");eo(Hn,"length");eo(Hn,W1);const Z1=Uint8Array,D0=Uint16Array,qd=Uint32Array,J1=Float32Array,ll=Xd([][gl]()),L0=xn(ll.next),Q1=xn((function*(){})().next),eA=Xd(ll),tA=DataView.prototype,nA=xn(tA.getUint16),Kd=WeakMap,N0=Kd.prototype,U0=xn(N0.get),iA=xn(N0.set),O0=new Kd,rA=Yd(null,{next:{value:function(){const e=U0(O0,this);return L0(e)}},[gl]:{value:function(){return this}}});function sA(r){if(r[gl]===C0&&ll.next===L0)return r;const e=Yd(rA);return iA(O0,e,j1(r)),e}const aA=new Kd,oA=Yd(eA,{next:{value:function(){const e=U0(aA,this);return Q1(e)},writable:!0,configurable:!0}});for(const r of H1(ll))r!=="next"&&Y1(oA,r,R0(ll,r));const F0=new P0(4),lA=new J1(F0),cA=new qd(F0),Wi=new D0(512),Xi=new Z1(512);for(let r=0;r<256;++r){const e=r-127;e<-24?(Wi[r]=0,Wi[r|256]=32768,Xi[r]=24,Xi[r|256]=24):e<-14?(Wi[r]=1024>>-e-14,Wi[r|256]=1024>>-e-14|32768,Xi[r]=-e-1,Xi[r|256]=-e-1):e<=15?(Wi[r]=e+15<<10,Wi[r|256]=e+15<<10|32768,Xi[r]=13,Xi[r|256]=13):e<128?(Wi[r]=31744,Wi[r|256]=64512,Xi[r]=24,Xi[r|256]=24):(Wi[r]=31744,Wi[r|256]=64512,Xi[r]=13,Xi[r|256]=13)}const jd=new qd(2048);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,jd[r]=e|t}for(let r=1024;r<2048;++r)jd[r]=939524096+(r-1024<<13);const to=new qd(64);for(let r=1;r<31;++r)to[r]=r<<23;to[31]=1199570944;to[32]=2147483648;for(let r=33;r<63;++r)to[r]=2147483648+(r-32<<23);to[63]=3347054592;const B0=new D0(64);for(let r=1;r<64;++r)r!==32&&(B0[r]=1024);function uA(r){const e=r>>10;return cA[0]=jd[B0[e]+(r&1023)]+to[e],lA[0]}function k0(r,e,...t){return uA(nA(r,e,...sA(t)))}function lf(r,e,t){const n=typeof r=="object"?r.outer:r,i=n.slice(0,n.indexOf(">")+1),s=['"',"'"];for(let a=0;a<s.length;a++){const o=s[a],l=e+"\\="+o+"([^"+o+"]*)"+o,u=new RegExp(l).exec(i);if(u)return u[1]}}function fA(r,e,t){const i=new RegExp(e).exec(r.slice(t));return i?t+i.index:-1}function cf(r,e,t){const i=new RegExp(e).exec(r.slice(t));return i?t+i.index+i[0].length-1:-1}function rg(r,e){const t=new RegExp(e,"g"),n=r.match(t);return n?n.length:0}function hA(r,e,t){const n=t&&t.debug||!1,i=!(t&&typeof t.nested===!1),s=t&&t.startIndex||0;n&&console.log("[xml-utils] starting findTagByName with",e," and ",t);const a=fA(r,`<${e}[ 
>/]`,s);if(n&&console.log("[xml-utils] start:",a),a===-1)return;const o=r.slice(a+e.length);let l=cf(o,"^[^<]*[ /]>",0);const c=l!==-1&&o[l-1]==="/";if(n&&console.log("[xml-utils] selfClosing:",c),c===!1)if(i){let d=0,p=1,_=0;for(;(l=cf(o,"[ /]"+e+">",d))!==-1;){const m=o.substring(d,l+1);if(p+=rg(m,"<"+e+`[ 
	>]`),_+=rg(m,"</"+e+">"),_>=p)break;d=l}}else l=cf(o,"[ /]"+e+">",0);const u=a+e.length+l+1;if(n&&console.log("[xml-utils] end:",u),u===-1)return;const f=r.slice(a,u);let h;return c?h=null:h=f.slice(f.indexOf(">")+1,f.lastIndexOf("<")),{inner:h,outer:f,start:a,end:u}}function dA(r,e,t){const n=[];let s=0,a;for(;a=hA(r,e,{debug:!1,startIndex:s});)s=a.start+1+e.length,n.push(a);return n}const q={BYTE:1,ASCII:2,SHORT:3,LONG:4,RATIONAL:5,SBYTE:6,UNDEFINED:7,SSHORT:8,SLONG:9,SRATIONAL:10,FLOAT:11,DOUBLE:12,IFD:13,LONG8:16,SLONG8:17,IFD8:18},pA={[q.BYTE]:1,[q.ASCII]:1,[q.SBYTE]:1,[q.UNDEFINED]:1,[q.SHORT]:2,[q.SSHORT]:2,[q.LONG]:4,[q.SLONG]:4,[q.FLOAT]:4,[q.IFD]:4,[q.RATIONAL]:8,[q.SRATIONAL]:8,[q.DOUBLE]:8,[q.LONG8]:8,[q.SLONG8]:8,[q.IFD8]:8};function cl(r){const e=pA[r];if(e===void 0)throw new RangeError(`Invalid field type: ${r}`);return e}const mA={NewSubfileType:{tag:254,type:q.LONG,eager:!0},SubfileType:{tag:255,type:q.SHORT,eager:!0},ImageWidth:{tag:256,type:q.SHORT,eager:!0},ImageLength:{tag:257,type:q.SHORT,eager:!0},BitsPerSample:{tag:258,type:q.SHORT,isArray:!0,eager:!0},Compression:{tag:259,type:q.SHORT,eager:!0},PhotometricInterpretation:{tag:262,type:q.SHORT,eager:!0},Threshholding:{tag:263,type:q.SHORT},CellWidth:{tag:264,type:q.SHORT},CellLength:{tag:265,type:q.SHORT},FillOrder:{tag:266,type:q.SHORT},DocumentName:{tag:269,type:q.ASCII},ImageDescription:{tag:270,type:q.ASCII},Make:{tag:271,type:q.ASCII},Model:{tag:272,type:q.ASCII},StripOffsets:{tag:273,type:q.SHORT,isArray:!0},Orientation:{tag:274,type:q.SHORT},SamplesPerPixel:{tag:277,type:q.SHORT,eager:!0},RowsPerStrip:{tag:278,type:q.SHORT,eager:!0},StripByteCounts:{tag:279,type:q.LONG,isArray:!0},MinSampleValue:{tag:280,type:q.SHORT,isArray:!0},MaxSampleValue:{tag:281,type:q.SHORT,isArray:!0},XResolution:{tag:282,type:q.RATIONAL},YResolution:{tag:283,type:q.RATIONAL},PlanarConfiguration:{tag:284,type:q.SHORT,eager:!0},PageName:{tag:285,type:q.ASCII},XPosition:{tag:286,type:q.RATIONAL},YPosition:{tag:287,type:q.RATIONAL},FreeOffsets:{tag:288,type:q.LONG},FreeByteCounts:{tag:289,type:q.LONG},GrayResponseUnit:{tag:290,type:q.SHORT},GrayResponseCurve:{tag:291,type:q.SHORT,isArray:!0},T4Options:{tag:292,type:q.LONG},T6Options:{tag:293,type:q.LONG},ResolutionUnit:{tag:296,type:q.SHORT},PageNumber:{tag:297,type:q.SHORT,isArray:!0},TransferFunction:{tag:301,type:q.SHORT,isArray:!0},Software:{tag:305,type:q.ASCII},DateTime:{tag:306,type:q.ASCII},Artist:{tag:315,type:q.ASCII},HostComputer:{tag:316,type:q.ASCII},Predictor:{tag:317,type:q.SHORT},WhitePoint:{tag:318,type:q.RATIONAL,isArray:!0},PrimaryChromaticities:{tag:319,type:q.RATIONAL,isArray:!0},ColorMap:{tag:320,type:q.SHORT,isArray:!0},HalftoneHints:{tag:321,type:q.SHORT,isArray:!0},TileWidth:{tag:322,type:q.SHORT,eager:!0},TileLength:{tag:323,type:q.SHORT,eager:!0},TileOffsets:{tag:324,type:q.LONG,isArray:!0},TileByteCounts:{tag:325,type:q.SHORT,isArray:!0},InkSet:{tag:332,type:q.SHORT},InkNames:{tag:333,type:q.ASCII},NumberOfInks:{tag:334,type:q.SHORT},DotRange:{tag:336,type:q.BYTE,isArray:!0},TargetPrinter:{tag:337,type:q.ASCII},ExtraSamples:{tag:338,type:q.BYTE,isArray:!0,eager:!0},SampleFormat:{tag:339,type:q.SHORT,isArray:!0,eager:!0},SMinSampleValue:{tag:340,isArray:!0},SMaxSampleValue:{tag:341,isArray:!0},TransferRange:{tag:342,type:q.SHORT,isArray:!0},JPEGProc:{tag:512,type:q.SHORT},JPEGInterchangeFormat:{tag:513,type:q.LONG},JPEGInterchangeFormatLngth:{tag:514,type:q.LONG},JPEGRestartInterval:{tag:515,type:q.SHORT},JPEGLosslessPredictors:{tag:517,type:q.SHORT,isArray:!0},JPEGPointTransforms:{tag:518,type:q.SHORT,isArray:!0},JPEGQTables:{tag:519,type:q.LONG,isArray:!0},JPEGDCTables:{tag:520,type:q.LONG,isArray:!0},JPEGACTables:{tag:521,type:q.LONG,isArray:!0},YCbCrCoefficients:{tag:529,type:q.RATIONAL,isArray:!0},YCbCrSubSampling:{tag:530,type:q.SHORT,isArray:!0},YCbCrPositioning:{tag:531,type:q.SHORT},ReferenceBlackWhite:{tag:532,type:q.LONG,isArray:!0},Copyright:{tag:33432,type:q.ASCII},BadFaxLines:{tag:326},CleanFaxData:{tag:327},ClipPath:{tag:343},ConsecutiveBadFaxLines:{tag:328},Decode:{tag:433},DefaultImageColor:{tag:434},Indexed:{tag:346},JPEGTables:{tag:347,isArray:!0,eager:!0},StripRowCounts:{tag:559,isArray:!0},SubIFDs:{tag:330,isArray:!0},XClipPathUnits:{tag:344},YClipPathUnits:{tag:345},ApertureValue:{tag:37378},ColorSpace:{tag:40961},DateTimeDigitized:{tag:36868},DateTimeOriginal:{tag:36867},ExifIFD:{tag:34665,name:"Exif IFD",type:q.LONG},ExifVersion:{tag:36864},ExposureTime:{tag:33434},FileSource:{tag:41728},Flash:{tag:37385},FlashpixVersion:{tag:40960},FNumber:{tag:33437},ImageUniqueID:{tag:42016},LightSource:{tag:37384},MakerNote:{tag:37500},ShutterSpeedValue:{tag:37377},UserComment:{tag:37510},IPTC:{tag:33723},CZ_LSMINFO:{tag:34412},ICCProfile:{tag:34675,name:"ICC Profile"},XMP:{tag:700},GDAL_METADATA:{tag:42112},GDAL_NODATA:{tag:42113,type:q.ASCII,eager:!0},Photoshop:{tag:34377},ModelPixelScale:{tag:33550,type:q.DOUBLE,isArray:!0,eager:!0},ModelTiepoint:{tag:33922,type:q.DOUBLE,isArray:!0,eager:!0},ModelTransformation:{tag:34264,type:q.DOUBLE,isArray:!0,eager:!0},GeoKeyDirectory:{tag:34735,type:q.SHORT,isArray:!0,eager:!0},GeoDoubleParams:{tag:34736,type:q.DOUBLE,isArray:!0,eager:!0},GeoAsciiParams:{tag:34737,type:q.ASCII,eager:!0},LercParameters:{tag:50674,eager:!0}},z0={},ul={};function gA(r,e,t,n=!1,i=!1){z0[e]=r,ul[r]={tag:r,name:e,type:typeof t=="string"?q[t]:t,isArray:n,eager:i}}for(const[r,e]of Object.entries(mA)){const t=e;gA(t.tag,t.name||r,t.type,t.isArray,t.eager)}function rc(r){return typeof r=="number"?r:z0[r]}const ti={WhiteIsZero:0,BlackIsZero:1,RGB:2,Palette:3,CMYK:5,YCbCr:6,CIELab:8},_A={Unspecified:0},nR={AddCompression:1},iR={None:0,Deflate:1,Zstandard:2},V0={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"};for(const[r,e]of Object.entries(V0));function xA(r,e){const{width:t,height:n}=r,i=new Uint8Array(t*n*3);let s;for(let a=0,o=0;a<r.length;++a,o+=3)s=256-r[a]/e*256,i[o]=s,i[o+1]=s,i[o+2]=s;return i}function vA(r,e){const{width:t,height:n}=r,i=new Uint8Array(t*n*3);let s;for(let a=0,o=0;a<r.length;++a,o+=3)s=r[a]/e*256,i[o]=s,i[o+1]=s,i[o+2]=s;return i}function yA(r,e){const{width:t,height:n}=r,i=new Uint8Array(t*n*3),s=e.length/3,a=e.length/3*2;for(let o=0,l=0;o<r.length;++o,l+=3){const c=r[o];i[l]=e[c]/65536*256,i[l+1]=e[c+s]/65536*256,i[l+2]=e[c+a]/65536*256}return i}function MA(r){const{width:e,height:t}=r,n=new Uint8Array(e*t*3);for(let i=0,s=0;i<r.length;i+=4,s+=3){const a=r[i],o=r[i+1],l=r[i+2],c=r[i+3];n[s]=255*((255-a)/256)*((255-c)/256),n[s+1]=255*((255-o)/256)*((255-c)/256),n[s+2]=255*((255-l)/256)*((255-c)/256)}return n}function SA(r){const{width:e,height:t}=r,n=new Uint8ClampedArray(e*t*3);for(let i=0,s=0;i<r.length;i+=3,s+=3){const a=r[i],o=r[i+1],l=r[i+2];n[s]=a+1.402*(l-128),n[s+1]=a-.34414*(o-128)-.71414*(l-128),n[s+2]=a+1.772*(o-128)}return n}const TA=.95047,bA=1,EA=1.08883;function wA(r){const{width:e,height:t}=r,n=new Uint8Array(e*t*3);for(let i=0,s=0;i<r.length;i+=3,s+=3){const a=r[i+0],o=r[i+1]<<24>>24,l=r[i+2]<<24>>24;let c=(a+16)/116,u=o/500+c,f=c-l/200,h,d,p;u=TA*(u*u*u>.008856?u*u*u:(u-16/116)/7.787),c=bA*(c*c*c>.008856?c*c*c:(c-16/116)/7.787),f=EA*(f*f*f>.008856?f*f*f:(f-16/116)/7.787),h=u*3.2406+c*-1.5372+f*-.4986,d=u*-.9689+c*1.8758+f*.0415,p=u*.0557+c*-.204+f*1.057,h=h>.0031308?1.055*h**(1/2.4)-.055:12.92*h,d=d>.0031308?1.055*d**(1/2.4)-.055:12.92*d,p=p>.0031308?1.055*p**(1/2.4)-.055:12.92*p,n[s]=Math.max(0,Math.min(1,h))*255,n[s+1]=Math.max(0,Math.min(1,d))*255,n[s+2]=Math.max(0,Math.min(1,p))*255}return n}const AA="modulepreload",RA=function(r){return"/deltaflood-web/"+r},sg={},Wr=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");i=l(t.map(c=>{if(c=RA(c),c in sg)return;sg[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":AA,u||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),u)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},fl=new Map;async function bc(r){const e=!r.hasTag("StripOffsets");return{tileWidth:e?await r.loadValue("TileWidth"):await r.loadValue("ImageWidth"),tileHeight:e?await r.loadValue("TileLength"):await r.loadValue("RowsPerStrip")||await r.loadValue("ImageLength"),planarConfiguration:await r.loadValue("PlanarConfiguration"),bitsPerSample:await r.loadValue("BitsPerSample"),predictor:await r.loadValue("Predictor")||1}}function CA(r,e,t=bc,n=!0){Array.isArray(r)||(r=[r]),r.forEach(i=>{fl.set(i,{importFn:e,decoderParameterFn:t,preferWorker:n})})}async function PA(r,e){if(!fl.has(r))throw new Error(`Unknown compression method identifier: ${r}`);const{decoderParameterFn:t}=fl.get(r);return t(e)}async function IA(r,e){if(!fl.has(r))throw new Error(`Unknown compression method identifier: ${r}`);const{importFn:t}=fl.get(r),n=await t();return new n(e)}const DA=[{cases:[void 0,1],importFn:()=>Wr(()=>import("./raw-CYI6PcUr.js"),__vite__mapDeps([0,1])).then(r=>r.default),preferWorker:!1},{cases:5,importFn:()=>Wr(()=>import("./lzw-CWcLLbBI.js"),__vite__mapDeps([2,1])).then(r=>r.default)},{cases:6,importFn:()=>{throw new Error("old style JPEG compression is not supported.")}},{cases:7,importFn:()=>Wr(()=>import("./jpeg-DY6pp3Km.js"),__vite__mapDeps([3,1])).then(r=>r.default),decoderParameterFn:async r=>({...await bc(r),JPEGTables:await r.loadValue("JPEGTables")})},{cases:[8,32946],importFn:()=>Wr(()=>import("./deflate-Dqeyi4NT.js"),__vite__mapDeps([4,5,1])).then(r=>r.default)},{cases:32773,importFn:()=>Wr(()=>import("./packbits-Cp0FZ9Sj.js"),__vite__mapDeps([6,1])).then(r=>r.default)},{cases:34887,importFn:()=>Wr(()=>import("./lerc-D_CINgSN.js"),__vite__mapDeps([7,5,1])).then(async r=>(await r.zstd.init(),r)).then(r=>r.default),decoderParameterFn:async r=>({...await bc(r),LercParameters:await r.loadValue("LercParameters")})},{cases:5e4,importFn:()=>Wr(()=>import("./zstd-C_thhmOF.js"),__vite__mapDeps([8,1])).then(async r=>(await r.zstd.init(),r)).then(r=>r.default)},{cases:50001,importFn:()=>Wr(()=>import("./webimage-Deq5AgEy.js"),__vite__mapDeps([9,1])).then(r=>r.default),decoderParameterFn:async r=>({...await bc(r),samplesPerPixel:Number(await r.loadValue("SamplesPerPixel"))||4}),preferWorker:!1}];for(const r of DA){const{cases:e,importFn:t,decoderParameterFn:n,preferWorker:i}=r;CA(e,t,n,i)}function au(r,e,t,n=1){return new(Object.getPrototypeOf(r)).constructor(e*t*n)}function LA(r,e,t,n,i){const s=e/n,a=t/i;return r.map(o=>{const l=au(o,n,i);for(let c=0;c<i;++c){const u=Math.min(Math.round(a*c),t-1);for(let f=0;f<n;++f){const h=Math.min(Math.round(s*f),e-1),d=o[u*e+h];l[c*n+f]=d}}return l})}function Ca(r,e,t){return(1-t)*r+t*e}function NA(r,e,t,n,i){const s=e/n,a=t/i;return r.map(o=>{const l=au(o,n,i);for(let c=0;c<i;++c){const u=a*c,f=Math.floor(u),h=Math.min(Math.ceil(u),t-1);for(let d=0;d<n;++d){const p=s*d,_=p%1,m=Math.floor(p),g=Math.min(Math.ceil(p),e-1),x=o[f*e+m],M=o[f*e+g],y=o[h*e+m],b=o[h*e+g],E=Ca(Ca(x,M,_),Ca(y,b,_),u%1);l[c*n+d]=E}}return l})}function UA(r,e,t,n,i,s="nearest"){switch(s.toLowerCase()){case"nearest":return LA(r,e,t,n,i);case"bilinear":case"linear":return NA(r,e,t,n,i);default:throw new Error(`Unsupported resampling method: '${s}'`)}}function OA(r,e,t,n,i,s){const a=e/n,o=t/i,l=au(r,n,i,s);for(let c=0;c<i;++c){const u=Math.min(Math.round(o*c),t-1);for(let f=0;f<n;++f){const h=Math.min(Math.round(a*f),e-1);for(let d=0;d<s;++d){const p=r[u*e*s+h*s+d];l[c*n*s+f*s+d]=p}}}return l}function FA(r,e,t,n,i,s){const a=e/n,o=t/i,l=au(r,n,i,s);for(let c=0;c<i;++c){const u=o*c,f=Math.floor(u),h=Math.min(Math.ceil(u),t-1);for(let d=0;d<n;++d){const p=a*d,_=p%1,m=Math.floor(p),g=Math.min(Math.ceil(p),e-1);for(let x=0;x<s;++x){const M=r[f*e*s+m*s+x],y=r[f*e*s+g*s+x],b=r[h*e*s+m*s+x],E=r[h*e*s+g*s+x],A=Ca(Ca(M,y,_),Ca(b,E,_),u%1);l[c*n*s+d*s+x]=A}}}return l}function BA(r,e,t,n,i,s,a="nearest"){switch(a.toLowerCase()){case"nearest":return OA(r,e,t,n,i,s);case"bilinear":case"linear":return FA(r,e,t,n,i,s);default:throw new Error(`Unsupported resampling method: '${a}'`)}}function kA(r,e,t){let n=0;for(let i=e;i<t;++i)n+=r[i];return n}function Bh(r,e,t){let n;switch(r){case 1:e<=8?n=Uint8Array:e<=16?n=Uint16Array:e<=32&&(n=Uint32Array);break;case 2:e===8?n=Int8Array:e===16?n=Int16Array:e===32&&(n=Int32Array);break;case 3:switch(e){case 16:case 32:n=Float32Array;break;case 64:n=Float64Array;break}break}if(n){if(typeof t=="number")return new n(t);if(t instanceof ArrayBuffer)return new n(t)}throw Error("Unsupported data format/bitsPerSample")}function zA(r,e){return(r===1||r===2)&&e<=32&&e%8===0?!1:!(r===3&&(e===16||e===32||e===64))}function VA(r,e,t,n,i,s,a){const o=new DataView(r),l=t===2?a*s:a*s*n,c=t===2?1:n,u=Bh(e,i,l),f=parseInt("1".repeat(i),2);if(e===1){let h;t===1?h=n*i:h=i;let d=s*h;(d&7)!==0&&(d=d+7&-8);for(let p=0;p<a;++p){const _=p*d;for(let m=0;m<s;++m){const g=_+m*c*i;for(let x=0;x<c;++x){const M=g+x*i,y=(p*s+m)*c+x,b=Math.floor(M/8),E=M%8;if(E+i<=8)u[y]=o.getUint8(b)>>8-i-E&f;else if(E+i<=16)u[y]=o.getUint16(b)>>16-i-E&f;else if(E+i<=24){const A=o.getUint16(b)<<8|o.getUint8(b+2);u[y]=A>>24-i-E&f}else u[y]=o.getUint32(b)>>32-i-E&f}}}}return u.buffer}class GA{constructor(e,t,n,i){this.fileDirectory=e,this.littleEndian=t,this.tiles=n?[]:null,this.isTiled=!e.hasTag("StripOffsets");const s=e.getValue("PlanarConfiguration")??1;if(s!==1&&s!==2)throw new Error("Invalid planar configuration.");this.planarConfiguration=s,this.source=i}getFileDirectory(){return this.fileDirectory}getGeoKeys(){return this.fileDirectory.parseGeoKeyDirectory()}getWidth(){return this.fileDirectory.getValue("ImageWidth")||0}getHeight(){return this.fileDirectory.getValue("ImageLength")||0}getSamplesPerPixel(){return this.fileDirectory.getValue("SamplesPerPixel")??1}getTileWidth(){return this.isTiled?this.fileDirectory.getValue("TileWidth")||0:this.getWidth()}getTileHeight(){if(this.isTiled)return this.fileDirectory.getValue("TileLength")||0;const e=this.fileDirectory.hasTag("RowsPerStrip")&&this.fileDirectory.getValue("RowsPerStrip");return e?Math.min(e,this.getHeight()):this.getHeight()}getBlockWidth(){return this.getTileWidth()}getBlockHeight(e){return this.isTiled||(e+1)*this.getTileHeight()<=this.getHeight()?this.getTileHeight():this.getHeight()-e*this.getTileHeight()}getBytesPerPixel(){let e=0;const t=this.fileDirectory.getValue("BitsPerSample")||[];for(let n=0;n<t.length;++n)e+=this.getSampleByteSize(n);return e}getSampleByteSize(e){const t=this.fileDirectory.getValue("BitsPerSample")||[];if(e>=t.length)throw new RangeError(`Sample index ${e} is out of range.`);return Math.ceil(t[e]/8)}getReaderForSample(e){const t=this.fileDirectory.getValue("SampleFormat"),n=t?t[e]:1,i=(this.fileDirectory.getValue("BitsPerSample")||[])[e];switch(n){case 1:if(i<=8)return DataView.prototype.getUint8;if(i<=16)return DataView.prototype.getUint16;if(i<=32)return DataView.prototype.getUint32;break;case 2:if(i<=8)return DataView.prototype.getInt8;if(i<=16)return DataView.prototype.getInt16;if(i<=32)return DataView.prototype.getInt32;break;case 3:switch(i){case 16:return function(s,a){return k0(this,s,a)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64}break}throw Error("Unsupported data format/bitsPerSample")}getSampleFormat(e=0){const t=this.fileDirectory.getValue("SampleFormat");return t?t[e]:1}getBitsPerSample(e=0){const t=this.fileDirectory.getValue("BitsPerSample");return t?t[e]:0}getArrayForSample(e,t){const n=this.getSampleFormat(e),i=this.getBitsPerSample(e);return Bh(n,i,t)}async getTileOrStrip(e,t,n,i,s){const a=Math.ceil(this.getWidth()/this.getTileWidth()),o=Math.ceil(this.getHeight()/this.getTileHeight());let l;const{tiles:c}=this;if(this.planarConfiguration===1?l=t*a+e:this.planarConfiguration===2&&(l=n*a*o+t*a+e),l===void 0)throw new Error("Could not determine tile or strip index.");let u,f;if(this.isTiled?(u=Number(await this.fileDirectory.loadValueIndexed("TileOffsets",l)),f=Number(await this.fileDirectory.loadValueIndexed("TileByteCounts",l))):(u=Number(await this.fileDirectory.loadValueIndexed("StripOffsets",l)),f=Number(await this.fileDirectory.loadValueIndexed("StripByteCounts",l))),f===0){const p=this.getBlockHeight(t)*this.getTileWidth(),_=this.planarConfiguration===2?this.getSampleByteSize(n):this.getBytesPerPixel(),m=new ArrayBuffer(p*_);return this.getArrayForSample(n,m).fill(this.getGDALNoData()||0),{x:e,y:t,sample:n,data:m}}const h=(await this.source.fetch([{offset:u,length:f}],s))[0];let d;return c===null||!c[l]?(d=(async()=>{let p=await i.decode(h);const _=this.getSampleFormat(),m=this.getBitsPerSample();return zA(_,m)&&(p=VA(p,_,this.planarConfiguration,this.getSamplesPerPixel(),m,this.getTileWidth(),this.getBlockHeight(t))),p})(),c!==null&&(c[l]=d)):d=c[l],{x:e,y:t,sample:n,data:await d}}async _readRaster(e,t,n,i,s,a,o,l,c){const u=this.getTileWidth(),f=this.getTileHeight(),h=this.getWidth(),d=this.getHeight(),p=Math.max(Math.floor(e[0]/u),0),_=Math.min(Math.ceil(e[2]/u),Math.ceil(h/u)),m=Math.max(Math.floor(e[1]/f),0),g=Math.min(Math.ceil(e[3]/f),Math.ceil(d/f)),x=e[2]-e[0];let M=this.getBytesPerPixel();const y=[],b=[];for(let T=0;T<t.length;++T){if(this.planarConfiguration===1){const D=await this.fileDirectory.loadValue("BitsPerSample");if(typeof D!="object")throw new Error("Expected BitsPerSample to be an array or typed array.");y.push(kA(D,0,t[T])/8)}else y.push(0);b.push(this.getReaderForSample(t[T]))}const E=[],{littleEndian:A}=this;for(let T=m;T<g;++T)for(let D=p;D<_;++D){let C;this.planarConfiguration===1&&(C=this.getTileOrStrip(D,T,0,s,c));for(let I=0;I<t.length;++I){const k=I,V=t[I];if(this.planarConfiguration===2&&(M=this.getSampleByteSize(V),C=this.getTileOrStrip(D,T,V,s,c)),!C)throw new Error("Could not get tile or strip data.");const z=C.then(U=>{const F=U.data,J=new DataView(F),j=this.getBlockHeight(U.y),P=U.y*f,ae=U.x*u,ue=P+j,Ue=(U.x+1)*u,He=b[k],je=Math.min(j,j-(ue-e[3]),d-P),$=Math.min(u,u-(Ue-e[2]),h-ae);for(let te=Math.max(0,e[1]-P);te<je;++te)for(let ie=Math.max(0,e[0]-ae);ie<$;++ie){const Ie=(te*u+ie)*M,Pe=He.call(J,Ie+y[k],A);let we;i?(we=(te+P-e[1])*x*t.length+(ie+ae-e[0])*t.length+k,n[we]=Pe):(we=(te+P-e[1])*x+ie+ae-e[0],n[k][we]=Pe)}});E.push(z)}}if(await Promise.all(E),a&&e[2]-e[0]!==a||o&&e[3]-e[1]!==o){let T;i?T=BA(n,e[2]-e[0],e[3]-e[1],a,o,t.length,l):T=UA(n,e[2]-e[0],e[3]-e[1],a,o,l);const D=T;return D.width=a??e[2]-e[0],D.height=o??e[3]-e[1],D}const v=n;return v.width=a||e[2]-e[0],v.height=o||e[3]-e[1],v}async readRasters(e={}){const{window:t,samples:n=[],pool:i=null,width:s,height:a,resampleMethod:o,fillValue:l,signal:c}=e,u="interleave"in e&&e.interleave,f=t||[0,0,this.getWidth(),this.getHeight()];if(f[0]>f[2]||f[1]>f[3])throw new Error("Invalid subsets");const h=f[2]-f[0],d=f[3]-f[1],p=h*d,_=this.getSamplesPerPixel();if(!n||!n.length)for(let b=0;b<_;++b)n.push(b);else for(let b=0;b<n.length;++b)if(n[b]>=_)return Promise.reject(new RangeError(`Invalid sample index '${n[b]}'.`));let m;if(u){const{fileDirectory:b}=this,E=b.getValue("SampleFormat"),A=E?Math.max.apply(null,Array.from(E)):1;if(A!==1&&A!==2&&A!==3)throw new Error("Unsupported sample format for interleaved data. Must be 1, 2, or 3.");const v=b.getValue("BitsPerSample"),T=v?Math.max.apply(null,Array.from(v)):8;if(m=Bh(A,T,p*n.length),l){if(Array.isArray(l))throw new Error("When reading interleaved data, fillValue must be a single number.");m.fill(l)}}else{m=[];for(let b=0;b<n.length;++b){const E=this.getArrayForSample(n[b],p);Array.isArray(l)&&b<l.length?E.fill(l[b]):l&&!Array.isArray(l)&&E.fill(l),m.push(E)}}const g=this.fileDirectory.getValue("Compression")||1,x=await PA(g,this.fileDirectory),M=i?i.bindParameters(g,x):await IA(g,x);return await this._readRaster(f,n,m,u,M,s,a,o,c)}async readRGB(e={}){const{window:t,pool:n=null,width:i,height:s,resampleMethod:a,enableAlpha:o=!1,signal:l}=e,c=("interleave"in e&&e.interleave)??!1,u=t||[0,0,this.getWidth(),this.getHeight()];if(u[0]>u[2]||u[1]>u[3])throw new Error("Invalid subsets");const f=this.fileDirectory.getValue("PhotometricInterpretation");if(f===ti.RGB){let M=[0,1,2];const y=this.fileDirectory.getValue("ExtraSamples");if(y&&y[0]!==_A.Unspecified&&o){M=[];const b=this.fileDirectory.getValue("BitsPerSample")||[];for(let E=0;E<b.length;E+=1)M.push(E)}return this.readRasters({window:t,interleave:c,samples:M,pool:n,width:i,height:s,resampleMethod:a,signal:l})}let h;switch(f){case ti.WhiteIsZero:case ti.BlackIsZero:case ti.Palette:h=[0];break;case ti.CMYK:h=[0,1,2,3];break;case ti.YCbCr:case ti.CIELab:h=[0,1,2];break;default:throw new Error("Invalid or unsupported photometric interpretation.")}const d={window:u,interleave:!0,samples:h,pool:n,width:i,height:s,resampleMethod:a,signal:l},{fileDirectory:p}=this,_=await this.readRasters(d),m=2**this.getBitsPerSample(0);let g;switch(f){case ti.WhiteIsZero:g=xA(_,m);break;case ti.BlackIsZero:g=vA(_,m);break;case ti.Palette:g=yA(_,await p.loadValue("ColorMap"));break;case ti.CMYK:g=MA(_);break;case ti.YCbCr:g=SA(_);break;case ti.CIELab:g=wA(_);break;default:throw new Error("Unsupported photometric interpretation.")}if(!c){const M=new Uint8Array(g.length/3),y=new Uint8Array(g.length/3),b=new Uint8Array(g.length/3);for(let E=0,A=0;E<g.length;E+=3,++A)M[A]=g[E],y[A]=g[E+1],b[A]=g[E+2];g=[M,y,b]}const x=g;return x.width=_.width,x.height=_.height,x}async getTiePoints(){if(!this.fileDirectory.hasTag("ModelTiepoint"))return[];const e=await this.fileDirectory.loadValue("ModelTiepoint");if(typeof e!="object")throw new Error("Expected ModelTiepoint to be an array or typed array.");const t=[];for(let n=0;n<e.length;n+=6)t.push({i:e[n],j:e[n+1],k:e[n+2],x:e[n+3],y:e[n+4],z:e[n+5]});return t}async getGDALMetadata(e=null){const t={};if(!this.fileDirectory.hasTag("GDAL_METADATA"))return null;const n=await this.fileDirectory.loadValue("GDAL_METADATA");let i=dA(n,"Item");e===null?i=i.filter(s=>lf(s,"sample")===void 0):i=i.filter(s=>Number(lf(s,"sample"))===e);for(let s=0;s<i.length;++s){const a=i[s];t[lf(a,"name")]=a.inner}return t}getGDALNoData(){const e=this.fileDirectory.hasTag("GDAL_NODATA")&&this.fileDirectory.getValue("GDAL_NODATA");return e?Number(e.substring(0,e.length-1)):null}getOrigin(){const e=this.fileDirectory.getValue("ModelTiepoint"),t=this.fileDirectory.getValue("ModelTransformation");if(e&&e.length===6)return[e[3],e[4],e[5]];if(t)return[t[3],t[7],t[11]];throw new Error("The image does not have an affine transformation.")}getResolution(e=null){const t=this.fileDirectory.getValue("ModelPixelScale"),n=this.fileDirectory.getValue("ModelTransformation");if(t)return[t[0],-t[1],t[2]];if(n)return n[1]===0&&n[4]===0?[n[0],-n[5],n[10]]:[Math.sqrt(n[0]*n[0]+n[4]*n[4]),-Math.sqrt(n[1]*n[1]+n[5]*n[5]),n[10]];if(e){const[i,s,a]=e.getResolution();return[i*e.getWidth()/this.getWidth(),s*e.getHeight()/this.getHeight(),a*e.getWidth()/this.getWidth()]}throw new Error("The image does not have an affine transformation.")}pixelIsArea(){return this.getGeoKeys()?.GTRasterTypeGeoKey===1}getBoundingBox(e=!1){const t=this.getHeight(),n=this.getWidth(),i=this.fileDirectory.getValue("ModelTransformation");if(i&&!e){const[s,a,,o,l,c,,u]=i,h=[[0,0],[0,t],[n,0],[n,t]].map(([_,m])=>[o+s*_+a*m,u+l*_+c*m]),d=h.map(_=>_[0]),p=h.map(_=>_[1]);return[Math.min(...d),Math.min(...p),Math.max(...d),Math.max(...p)]}else{const s=this.getOrigin(),a=this.getResolution(),o=s[0],l=s[1],c=o+a[0]*n,u=l+a[1]*t;return[Math.min(o,c),Math.min(l,u),Math.max(o,c),Math.max(l,u)]}}}class HA{constructor(e){this._dataView=new DataView(e)}get buffer(){return this._dataView.buffer}getUint64(e,t){const n=this.getUint32(e,t),i=this.getUint32(e+4,t);let s;if(t){if(s=n+2**32*i,!Number.isSafeInteger(s))throw new Error(`${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return s}if(s=2**32*n+i,!Number.isSafeInteger(s))throw new Error(`${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return s}getInt64(e,t){let n=0;const i=(this._dataView.getUint8(e+(t?7:0))&128)>0;let s=!0;for(let a=0;a<8;a++){let o=this._dataView.getUint8(e+(t?a:7-a));i&&(s?o!==0&&(o=~(o-1)&255,s=!1):o=~o&255),n+=o*256**a}return i&&(n=-n),n}getUint8(e){return this._dataView.getUint8(e)}getInt8(e){return this._dataView.getInt8(e)}getUint16(e,t){return this._dataView.getUint16(e,t)}getInt16(e,t){return this._dataView.getInt16(e,t)}getUint32(e,t){return this._dataView.getUint32(e,t)}getInt32(e,t){return this._dataView.getInt32(e,t)}getFloat16(e,t){return k0(this._dataView,e,t)}getFloat32(e,t){return this._dataView.getFloat32(e,t)}getFloat64(e,t){return this._dataView.getFloat64(e,t)}}class Yc{constructor(e,t,n,i){this._dataView=new DataView(e),this._sliceOffset=t,this._littleEndian=n,this._bigTiff=i}get sliceOffset(){return this._sliceOffset}get sliceTop(){return this._sliceOffset+this.buffer.byteLength}get littleEndian(){return this._littleEndian}get bigTiff(){return this._bigTiff}get buffer(){return this._dataView.buffer}covers(e,t){return this.sliceOffset<=e&&this.sliceTop>=e+t}readUint8(e){return this._dataView.getUint8(e-this._sliceOffset)}readInt8(e){return this._dataView.getInt8(e-this._sliceOffset)}readUint16(e){return this._dataView.getUint16(e-this._sliceOffset,this._littleEndian)}readInt16(e){return this._dataView.getInt16(e-this._sliceOffset,this._littleEndian)}readUint32(e){return this._dataView.getUint32(e-this._sliceOffset,this._littleEndian)}readInt32(e){return this._dataView.getInt32(e-this._sliceOffset,this._littleEndian)}readFloat32(e){return this._dataView.getFloat32(e-this._sliceOffset,this._littleEndian)}readFloat64(e){return this._dataView.getFloat64(e-this._sliceOffset,this._littleEndian)}readUint64(e){const t=this.readUint32(e),n=this.readUint32(e+4);let i;if(this._littleEndian){if(i=t+2**32*n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}if(i=2**32*t+n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}readInt64(e){let t=0;const n=(this._dataView.getUint8(e+(this._littleEndian?7:0))&128)>0;let i=!0;for(let s=0;s<8;s++){let a=this._dataView.getUint8(e+(this._littleEndian?s:7-s));n&&(i?a!==0&&(a=~(a-1)&255,i=!1):a=~a&255),t+=a*256**s}return n&&(t=-t),t}readOffset(e){return this._bigTiff?this.readUint64(e):this.readUint32(e)}}class WA{async fetch(e,t){return Promise.all(e.map(async n=>(await this.fetchSlice(n,t)).data))}async fetchSlice(e,t){throw new Error(`fetching of slice ${e} not possible, not implemented`)}get fileSize(){return null}async close(){}}class $d extends Error{constructor(...e){super(...e),Error.captureStackTrace&&Error.captureStackTrace(this,$d),this.name="AbortError",this.signal=void 0}}class XA extends WA{constructor(e){super(),this.arrayBuffer=e}fetchSlice(e,t){if(t&&t.aborted)throw new $d("Request aborted");return Promise.resolve({data:this.arrayBuffer.slice(e.offset,e.offset+e.length),offset:e.offset,length:e.length})}}function YA(r){return new XA(r)}function xa(r,e){switch(r){case q.BYTE:case q.ASCII:case q.UNDEFINED:return new Uint8Array(e);case q.SBYTE:return new Int8Array(e);case q.SHORT:return new Uint16Array(e);case q.SSHORT:return new Int16Array(e);case q.LONG:case q.IFD:return new Uint32Array(e);case q.SLONG:return new Int32Array(e);case q.LONG8:case q.IFD8:return new Array(e);case q.SLONG8:return new Array(e);case q.RATIONAL:return new Uint32Array(e*2);case q.SRATIONAL:return new Int32Array(e*2);case q.FLOAT:return new Float32Array(e);case q.DOUBLE:return new Float64Array(e);default:throw new RangeError(`Invalid field type: ${r}`)}}function va(r,e){switch(e){case q.BYTE:case q.ASCII:case q.UNDEFINED:return r.readUint8;case q.SBYTE:return r.readInt8;case q.SHORT:return r.readUint16;case q.SSHORT:return r.readInt16;case q.LONG:case q.IFD:return r.readUint32;case q.SLONG:return r.readInt32;case q.LONG8:case q.IFD8:return r.readUint64;case q.SLONG8:return r.readInt64;case q.RATIONAL:return r.readUint32;case q.SRATIONAL:return r.readInt32;case q.FLOAT:return r.readFloat32;case q.DOUBLE:return r.readFloat64;default:throw new RangeError(`Invalid field type: ${e}`)}}function Ro(r=null,e,t,n,i,s,a=!1){const o=cl(n),l=r||xa(n,i),c=n===q.RATIONAL||n===q.SRATIONAL;if(c)for(let u=0;u<i;u+=2)l[u]=e.call(t,s+u*o),l[u+1]=e.call(t,s+(u*o+4));else for(let u=0;u<i;++u)l[u]=e.call(t,s+u*o);return n===q.ASCII?new TextDecoder("utf-8").decode(l):i===1&&!a&&!c?l[0]:l}class qA{constructor(e,t,n,i,s){this.source=e,this.arrayOffset=t,this.littleEndian=n,this.fieldType=i,this.length=s,this.data=xa(i,s),this.itemSize=cl(i),this.maskBitmap=new Uint8Array(Math.ceil(s/8)),this.fetchIndexPromises=new Map,this.fullFetchPromise=null}async loadAll(){return this.fullFetchPromise||(this.fullFetchPromise=this.source.fetch([{offset:this.arrayOffset,length:this.itemSize*this.length}]).then(e=>{const t=new Yc(e[0],this.arrayOffset,!0,!1),n=Ro(this.data,va(t,this.fieldType),t,this.fieldType,this.length,this.arrayOffset,!0);return this.maskBitmap.fill(255),this.fetchIndexPromises.clear(),n})),this.fullFetchPromise}async get(e){if(e<0||e>=this.data.length)throw new RangeError(`Index ${e} out of bounds for length ${this.data.length}`);const t=Math.floor(e/8),n=1<<e%8,i=this.arrayOffset+e*this.itemSize;if((this.maskBitmap[t]&n)===0){if(!this.fetchIndexPromises.has(e)){const s=this.source.fetch([{offset:i,length:this.itemSize}]).then(a=>{const o=new Yc(a[0],this.arrayOffset+e*this.itemSize,!0,!1),c=va(o,this.fieldType).call(o,i);return this.data[e]=c,this.maskBitmap[t]|=n,this.fetchIndexPromises.delete(e),c});this.fetchIndexPromises.set(e,s)}return this.fetchIndexPromises.get(e)}return this.data[e]}}class KA{constructor(e,t,n,i){this.actualizedFields=e,this.deferredFields=t,this.deferredFieldsBeingResolved=new Map,this.deferredArrays=n,this.nextIFDByteOffset=i}hasTag(e){const t=rc(e);return this.actualizedFields.has(t)||this.deferredFields.has(t)||this.deferredArrays.has(t)}getValue(e){const t=rc(e);if(this.deferredFields.has(t)||this.deferredArrays.has(t)){const i=ul[t]?.name||`Tag${t}`;throw new Error(`Field '${i}' (${t}) is deferred. Use loadValue() to load it asynchronously.`)}if(this.actualizedFields.has(t))return this.actualizedFields.get(t)}async loadValue(e){const t=rc(e);if(this.actualizedFields.has(t))return this.actualizedFields.get(t);if(this.deferredFieldsBeingResolved.has(t))return this.deferredFieldsBeingResolved.get(t);const n=this.deferredFields.get(t);if(n){this.deferredFields.delete(t);const s=(async()=>{try{const a=await n();return this.actualizedFields.set(t,a),a}finally{this.deferredFieldsBeingResolved.delete(t)}})();return this.deferredFieldsBeingResolved.set(t,s),s}const i=this.deferredArrays.get(t);if(i)return i.loadAll()}async loadValueIndexed(e,t){const n=rc(e);if(this.actualizedFields.has(n))return this.actualizedFields.get(n)[t];if(this.deferredArrays.has(n))return this.deferredArrays.get(n).get(t);if(this.hasTag(n)){const i=await this.loadValue(n);if(i&&typeof i!="number")return i[t]}}parseGeoKeyDirectory(){const e=this.getValue("GeoKeyDirectory");if(!e)return null;const t={};for(let n=4;n<=e[3]*4;n+=4){const i=V0[e[n]],s=e[n+1]||null,a=e[n+2],o=e[n+3];let l=null;if(!s)l=o;else{if(l=this.getValue(s),typeof l>"u"||l===null)throw new Error(`Could not get value of geoKey '${i}'.`);typeof l=="string"?l=l.substring(o,o+a-1):l.subarray&&(l=l.subarray(o,o+a),a===1&&(l=l[0]))}t[i]=l}return t}toObject(){const e={};for(const[t,n]of this.actualizedFields.entries()){const i=typeof t=="number"?ul[t]:void 0,s=i?i.name:`Tag${t}`;e[s]=n}return e}}class jA{constructor(e,t,n,i=!1){this.source=e,this.littleEndian=t,this.bigTiff=n,this.eager=i}async getSlice(e,t){const n=this.bigTiff?4048:1024;return new Yc((await this.source.fetch([{offset:e,length:typeof t<"u"?t:n}]))[0],e,this.littleEndian,this.bigTiff)}async parseFileDirectoryAt(e){const t=this.bigTiff?20:12,n=this.bigTiff?8:2;let i=await this.getSlice(e);const s=this.bigTiff?i.readUint64(e):i.readUint16(e),a=s*(t+(this.bigTiff?16:6));i.covers(e,a)||(i=await this.getSlice(e,a));const o=new Map,l=new Map,c=new Map;let u=e+(this.bigTiff?8:2);for(let h=0;h<s;u+=t,++h){const d=i.readUint16(u),p=i.readUint16(u+2),_=this.bigTiff?i.readUint64(u+4):i.readUint32(u+4);let m=null,g=null,x=null;const M=cl(p),y=u+(this.bigTiff?12:8),b=ul[d]?.isArray,E=ul[d]?.eager||this.eager;if(M*_<=(this.bigTiff?8:4))m=Ro(xa(p,_),va(i,p),i,p,_,y,b);else{const A=i.readOffset(y),v=cl(p)*_;if(i.covers(A,v))m=Ro(xa(p,_),va(i,p),i,p,_,A,b);else if(E){const T=await this.getSlice(A,v);m=Ro(xa(p,_),va(T,p),T,p,_,A,b)}else b?x=new qA(this.source,A,this.littleEndian,p,_):g=async()=>{const T=await this.getSlice(A,v);return Ro(xa(p,_),va(T,p),T,p,_,A,b)}}m!==null?o.set(d,m):g!==null?l.set(d,g):x!==null&&c.set(d,x)}const f=i.readOffset(e+n+t*s);return new KA(o,l,c,f)}}function uf(r,e,t,n){let i=null,s=null;const a=cl(e);switch(e){case q.BYTE:case q.ASCII:case q.UNDEFINED:i=new Uint8Array(t),s=r.readUint8;break;case q.SBYTE:i=new Int8Array(t),s=r.readInt8;break;case q.SHORT:i=new Uint16Array(t),s=r.readUint16;break;case q.SSHORT:i=new Int16Array(t),s=r.readInt16;break;case q.LONG:case q.IFD:i=new Uint32Array(t),s=r.readUint32;break;case q.SLONG:i=new Int32Array(t),s=r.readInt32;break;case q.LONG8:case q.IFD8:i=new Array(t),s=r.readUint64;break;case q.SLONG8:i=new Array(t),s=r.readInt64;break;case q.RATIONAL:i=new Uint32Array(t*2),s=r.readUint32;break;case q.SRATIONAL:i=new Int32Array(t*2),s=r.readInt32;break;case q.FLOAT:i=new Float32Array(t),s=r.readFloat32;break;case q.DOUBLE:i=new Float64Array(t),s=r.readFloat64;break}if(i===null||s===null)throw new RangeError(`Invalid field type: ${e}`);for(let o=0;o<t;++o)i[o]=s.call(r,n+o*a);return new TextDecoder("utf-8").decode(i)}class sc extends Error{constructor(e){super(`No image at index ${e}`),this.index=e}}class $A{async getImage(e=0){throw new Error("Not implemented")}async getImageCount(){throw new Error("Not implemented")}async readRasters(e={}){const{window:t,width:n,height:i}=e;let{resX:s,resY:a,bbox:o}=e;const l=await this.getImage();let c=l;const u=await this.getImageCount(),f=l.getBoundingBox();if(t&&o)throw new Error('Both "bbox" and "window" passed.');if(n||i){if(t){const[p,_]=l.getOrigin(),[m,g]=l.getResolution();o=[p+t[0]*m,_+t[1]*g,p+t[2]*m,_+t[3]*g]}const d=o||f;if(n){if(s)throw new Error("Both width and resX passed");s=(d[2]-d[0])/n}if(i){if(a)throw new Error("Both width and resY passed");a=(d[3]-d[1])/i}}if(s||a){const d=[];for(let p=0;p<u;++p){const _=await this.getImage(p),m=_.fileDirectory.getValue("SubfileType"),g=_.fileDirectory.getValue("NewSubfileType");(p===0||m===2||(g||0)&1)&&d.push(_)}d.sort((p,_)=>p.getWidth()-_.getWidth());for(let p=0;p<d.length;++p){const _=d[p],m=(f[2]-f[0])/_.getWidth(),g=(f[3]-f[1])/_.getHeight();if(c=_,s&&s>m||a&&a>g)break}}let h=t;if(o){const[d,p]=l.getOrigin(),[_,m]=c.getResolution(l);h=[Math.round((o[0]-d)/_),Math.round((o[1]-p)/m),Math.round((o[2]-d)/_),Math.round((o[3]-p)/m)],h=[Math.min(h[0],h[2]),Math.min(h[1],h[3]),Math.max(h[0],h[2]),Math.max(h[1],h[3])]}return c.readRasters({...e,window:h})}}class Zd extends $A{constructor(e,t,n,i,s={}){super(),this.source=e,this.parser=new jA(e,t,n,!1),this.littleEndian=t,this.bigTiff=n,this.firstIFDOffset=i,this.cache=s.cache||!1,this.ifdRequests=[],this.ghostValues=null}async getSlice(e,t){const n=this.bigTiff?4048:1024;return new Yc((await this.source.fetch([{offset:e,length:typeof t<"u"?t:n}]))[0],e,this.littleEndian,this.bigTiff)}async requestIFD(e){if(this.ifdRequests[e])return this.ifdRequests[e];if(e===0)return this.ifdRequests[e]=this.parser.parseFileDirectoryAt(this.firstIFDOffset),this.ifdRequests[e];if(!this.ifdRequests[e-1])try{this.ifdRequests[e-1]=this.requestIFD(e-1)}catch(t){throw t instanceof sc?new sc(e):t}return this.ifdRequests[e]=(async()=>{const t=this.ifdRequests[e-1];if(!t)throw new Error("Previous IFD request missing");const n=await t;if(n.nextIFDByteOffset===0)throw new sc(e);return this.parser.parseFileDirectoryAt(n.nextIFDByteOffset)})(),this.ifdRequests[e]}async getImage(e=0){return new GA(await this.requestIFD(e),this.littleEndian,this.cache,this.source)}async getImageCount(){let e=0,t=!0;for(;t;)try{await this.requestIFD(e),++e}catch(n){if(n instanceof sc)t=!1;else throw n}return e}async getGhostValues(){const e=this.bigTiff?16:8;if(this.ghostValues!==null)return this.ghostValues;const t="GDAL_STRUCTURAL_METADATA_SIZE=",n=t.length+100;let i=await this.getSlice(e,n);if(t===uf(i,q.ASCII,t.length,e)){const a=uf(i,q.ASCII,n,e).split(`
`)[0],o=Number(a.split("=")[1].split(" ")[0])+a.length;o>n&&(i=await this.getSlice(e,o));const l=uf(i,q.ASCII,o,e),c={};l.split(`
`).filter(u=>u.length>0).map(u=>u.split("=")).forEach(([u,f])=>{c[u]=f}),this.ghostValues=c}return this.ghostValues}static async fromSource(e,t,n){const i=(await e.fetch([{offset:0,length:1024}],n))[0],s=new HA(i),a=s.getUint16(0,!1);let o;if(a===18761)o=!0;else if(a===19789)o=!1;else throw new TypeError("Invalid byte order value.");const l=s.getUint16(2,o);let c;if(l===42)c=!1;else if(l===43){if(c=!0,s.getUint16(4,o)!==8)throw new Error("Unsupported offset byte-size.")}else throw new TypeError("Invalid magic number.");const u=c?s.getUint64(8,o):s.getUint32(4,o);return new Zd(e,o,c,u,t)}close(){return typeof this.source.close=="function"?this.source.close():!1}}async function ZA(r,e){return Zd.fromSource(YA(r),void 0,e)}const JA="https://krsnawrx-deltaflood-api.hf.space",qc=`${JA}/gradio_api`;let ff,hf,ts,qr,G0,Ec,wc,kh,H0,zh,Vh,Gh,hl=null,dl=null,Hh=!1;function QA(){ff=document.querySelector('#upload-before input[type="file"]'),hf=document.querySelector('#upload-after input[type="file"]'),ts=document.getElementById("run-detection"),qr=document.getElementById("live-results"),G0=document.getElementById("live-loading"),Ec=document.getElementById("live-error"),wc=document.getElementById("result-satellite"),kh=document.getElementById("result-overlay"),H0=document.getElementById("live-stat-value"),zh=document.getElementById("progress-bar-container"),Vh=document.getElementById("progress-bar"),Gh=document.getElementById("progress-text"),!(!ff||!hf||!ts)&&(ff.addEventListener("change",r=>{hl=r.target.files[0]||null,ag("#upload-before",hl),Wh()}),hf.addEventListener("change",r=>{dl=r.target.files[0]||null,ag("#upload-after",dl),Wh()}),["#upload-before","#upload-after"].forEach(r=>{const e=document.querySelector(r);e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over");const n=t.dataTransfer.files[0];if(!n)return;const i=e.querySelector('input[type="file"]'),s=new DataTransfer;s.items.add(n),i.files=s.files,i.dispatchEvent(new Event("change"))}))}),ts.addEventListener("click",eR))}function ag(r,e){const t=document.querySelector(`${r} .upload-filename`),n=document.querySelector(`${r} .upload-label`),i=document.querySelector(`${r} .upload-icon`);t&&e?(t.textContent=e.name,t.style.display="block",n&&(n.style.opacity="0.45"),i&&(i.style.color="#00d2ff")):t&&(t.textContent="",t.style.display="none",n&&(n.style.opacity="1"),i&&(i.style.color=""))}function Wh(){ts.disabled=!(hl&&dl)||Hh}function og(r){Ec&&(Ec.textContent=r||"",Ec.style.display=r?"block":"none")}function ha(r,e){const t=Math.round(r);Vh&&(Vh.style.width=`${t}%`),Gh&&(Gh.textContent=e||`Processing: ${t}%`)}function lg(r){zh&&(zh.style.display=r?"flex":"none")}async function cg(r){const e=await r.arrayBuffer(),n=await(await ZA(e)).getImage(),i=n.getWidth(),s=n.getHeight(),a=await n.readRasters({samples:[0,1,2,3]}),o=Math.floor(i/3),l=Math.floor(s/3),c=[];for(let u=0;u<l;u++){const f=[];for(let h=0;h<o;h++){const d=[];for(let p=0;p<4;p++){const _=a[p][u*3*i+h*3];d.push(Math.min(Math.max(_/3e3,0),1))}f.push(d)}c.push(f)}return JSON.stringify(c)}async function eR(){if(!(!hl||!dl)){Hh=!0,qr.style.display="none",og(""),ts.disabled=!0,ts.textContent="PROCESSING…",lg(!0),ha(0,"Reading before flood image...");try{ha(10,"Reading before flood image...");const r=await cg(hl);ha(40,"Reading after flood image...");const e=await cg(dl);ha(65,"Sending to AI model...");const t=await fetch(`${qc}/call/run_inference`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:[r,e]})});if(!t.ok){const h=await t.text().catch(()=>"");throw new Error(`Queue failed (${t.status}): ${h.slice(0,200)}`)}const{event_id:n}=await t.json();ha(75,"AI model running...");const i=await fetch(`${qc}/call/run_inference/${n}`);if(!i.ok)throw new Error(`Result fetch failed (${i.status})`);const a=(await i.text()).split(`
`).filter(h=>h.startsWith("data:"));if(!a.length)throw new Error("No data in response");const o=a[a.length-1].replace("data: ","").trim(),l=JSON.parse(o),c=l[0],u=l[1],f=l[2];ha(100,"Done"),await tR(c,u,f)}catch(r){console.error("[DeltaFlood] Inference error:",r),og(`Inference failed — ${r.message}`)}finally{Hh=!1,G0.style.display="none",lg(!1),ts.disabled=!1,ts.textContent="RUN DETECTION",Wh()}}}function ug(r){return r?typeof r=="string"?r.startsWith("data:")||r.startsWith("http")?r:`${qc}/file=${r}`:r.url&&r.url.startsWith("http")?r.url:r.path?`${qc}/file=${r.path}`:"":""}function fg(r){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=i=>{console.error("Image load failed:",r,i),t(new Error(`Failed to load image: ${r}`))},n.src=r})}async function tR(r,e,t){const n=ug(r),i=ug(e);console.log("satData:",JSON.stringify(r)),console.log("satUrl:",n),console.log("maskUrl:",i);const[s,a]=await Promise.all([fg(n),fg(i)]);qr.style.visibility="hidden",qr.style.display="block";const o=wc.parentElement.clientWidth-32,l=Math.round(o*window.devicePixelRatio),c=Math.round(l*3/4);[wc,kh].forEach(m=>{m.width=l,m.height=c}),wc.getContext("2d").drawImage(s,0,0,l,c);const f=kh.getContext("2d");f.drawImage(s,0,0,l,c);const h=document.createElement("canvas");h.width=l,h.height=c;const d=h.getContext("2d");d.drawImage(a,0,0,l,c);const p=d.getImageData(0,0,l,c),_=p.data;for(let m=0;m<_.length;m+=4)(_[m]+_[m+1]+_[m+2])/3>40?(_[m]=0,_[m+1]=210,_[m+2]=255,_[m+3]=180):_[m+3]=0;d.putImageData(p,0,0),f.globalCompositeOperation="screen",f.drawImage(h,0,0),f.globalCompositeOperation="source-over",H0.textContent=typeof t=="string"?t:`${t} sq km`,qr.style.visibility="visible",qr.classList.remove("live-fade-in"),qr.offsetWidth,qr.classList.add("live-fade-in")}document.addEventListener("DOMContentLoaded",QA);export{nR as L,iR as a};
//# sourceMappingURL=index-DN0jFzC1.js.map
