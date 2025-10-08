(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xa(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},Ki=[],Mn=()=>{},tu=()=>!1,Vs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qa=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Ya=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Gf=Object.prototype.hasOwnProperty,Qe=(n,e)=>Gf.call(n,e),ze=Array.isArray,ji=n=>Gs(n)==="[object Map]",nu=n=>Gs(n)==="[object Set]",ke=n=>typeof n=="function",_t=n=>typeof n=="string",si=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",iu=n=>(ft(n)||ke(n))&&ke(n.then)&&ke(n.catch),ru=Object.prototype.toString,Gs=n=>ru.call(n),kf=n=>Gs(n).slice(8,-1),su=n=>Gs(n)==="[object Object]",$a=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yr=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ks=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Wf=/-\w/g,ti=ks(n=>n.replace(Wf,e=>e.slice(1).toUpperCase())),Xf=/\B([A-Z])/g,Ri=ks(n=>n.replace(Xf,"-$1").toLowerCase()),ou=ks(n=>n.charAt(0).toUpperCase()+n.slice(1)),eo=ks(n=>n?`on${ou(n)}`:""),Jn=(n,e)=>!Object.is(n,e),to=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},au=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},qf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Cl;const Ws=()=>Cl||(Cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vr(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?jf(i):Vr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(n)||ft(n))return n}const Yf=/;(?![^(]*\))/g,$f=/:([^]+)/,Kf=/\/\*[^]*?\*\//g;function jf(n){const e={};return n.replace(Kf,"").split(Yf).forEach(t=>{if(t){const i=t.split($f);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ur(n){let e="";if(_t(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=ur(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=Xa(Zf);function lu(n){return!!n||n===""}const cu=n=>!!(n&&n.__v_isRef===!0),sn=n=>_t(n)?n:n==null?"":ze(n)||ft(n)&&(n.toString===ru||!ke(n.toString))?cu(n)?sn(n.value):JSON.stringify(n,uu,2):String(n),uu=(n,e)=>cu(e)?uu(n,e.value):ji(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[no(i,s)+" =>"]=r,t),{})}:nu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>no(t))}:si(e)?no(e):ft(e)&&!ze(e)&&!su(e)?String(e):e,no=(n,e="")=>{var t;return si(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class Qf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){this._on>0&&--this._on===0&&(Ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function eh(){return Ot}let lt;const io=new WeakSet;class fu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,io.has(this)&&(io.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||du(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pl(this),pu(this);const e=lt,t=ln;lt=this,ln=!0;try{return this.fn()}finally{mu(this),lt=e,ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Za(e);this.deps=this.depsTail=void 0,Pl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?io.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wo(this)&&this.run()}get dirty(){return Wo(this)}}let hu=0,Tr,br;function du(n,e=!1){if(n.flags|=8,e){n.next=br,br=n;return}n.next=Tr,Tr=n}function Ka(){hu++}function ja(){if(--hu>0)return;if(br){let e=br;for(br=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Tr;){let e=Tr;for(Tr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function pu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function mu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Za(i),th(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Wo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function gu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Pr)||(n.globalVersion=Pr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Wo(n))))return;n.flags|=2;const e=n.dep,t=lt,i=ln;lt=n,ln=!0;try{pu(n);const r=n.fn(n._value);(e.version===0||Jn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=t,ln=i,mu(n),n.flags&=-3}}function Za(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Za(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function th(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ln=!0;const _u=[];function Bn(){_u.push(ln),ln=!1}function Hn(){const n=_u.pop();ln=n===void 0?!0:n}function Pl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=lt;lt=void 0;try{e()}finally{lt=t}}}let Pr=0;class nh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ja{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!lt||!ln||lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==lt)t=this.activeLink=new nh(lt,this),lt.deps?(t.prevDep=lt.depsTail,lt.depsTail.nextDep=t,lt.depsTail=t):lt.deps=lt.depsTail=t,vu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=lt.depsTail,t.nextDep=void 0,lt.depsTail.nextDep=t,lt.depsTail=t,lt.deps===t&&(lt.deps=i)}return t}trigger(e){this.version++,Pr++,this.notify(e)}notify(e){Ka();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ja()}}}function vu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)vu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Xo=new WeakMap,yi=Symbol(""),qo=Symbol(""),Lr=Symbol("");function bt(n,e,t){if(ln&&lt){let i=Xo.get(n);i||Xo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ja),r.map=i,r.key=t),r.track()}}function Un(n,e,t,i,r,s){const o=Xo.get(n);if(!o){Pr++;return}const a=l=>{l&&l.trigger()};if(Ka(),e==="clear")o.forEach(a);else{const l=ze(n),c=l&&$a(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Lr||!si(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Lr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(yi)),ji(n)&&a(o.get(qo)));break;case"delete":l||(a(o.get(yi)),ji(n)&&a(o.get(qo)));break;case"set":ji(n)&&a(o.get(yi));break}}ja()}function Pi(n){const e=Je(n);return e===n?e:(bt(e,"iterate",Lr),Qt(n)?e:e.map(Et))}function Xs(n){return bt(n=Je(n),"iterate",Lr),n}const ih={__proto__:null,[Symbol.iterator](){return ro(this,Symbol.iterator,Et)},concat(...n){return Pi(this).concat(...n.map(e=>ze(e)?Pi(e):e))},entries(){return ro(this,"entries",n=>(n[1]=Et(n[1]),n))},every(n,e){return bn(this,"every",n,e,void 0,arguments)},filter(n,e){return bn(this,"filter",n,e,t=>t.map(Et),arguments)},find(n,e){return bn(this,"find",n,e,Et,arguments)},findIndex(n,e){return bn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return bn(this,"findLast",n,e,Et,arguments)},findLastIndex(n,e){return bn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return bn(this,"forEach",n,e,void 0,arguments)},includes(...n){return so(this,"includes",n)},indexOf(...n){return so(this,"indexOf",n)},join(n){return Pi(this).join(n)},lastIndexOf(...n){return so(this,"lastIndexOf",n)},map(n,e){return bn(this,"map",n,e,void 0,arguments)},pop(){return pr(this,"pop")},push(...n){return pr(this,"push",n)},reduce(n,...e){return Ll(this,"reduce",n,e)},reduceRight(n,...e){return Ll(this,"reduceRight",n,e)},shift(){return pr(this,"shift")},some(n,e){return bn(this,"some",n,e,void 0,arguments)},splice(...n){return pr(this,"splice",n)},toReversed(){return Pi(this).toReversed()},toSorted(n){return Pi(this).toSorted(n)},toSpliced(...n){return Pi(this).toSpliced(...n)},unshift(...n){return pr(this,"unshift",n)},values(){return ro(this,"values",Et)}};function ro(n,e,t){const i=Xs(n),r=i[e]();return i!==n&&!Qt(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const rh=Array.prototype;function bn(n,e,t,i,r,s){const o=Xs(n),a=o!==n&&!Qt(n),l=o[e];if(l!==rh[e]){const f=l.apply(n,s);return a?Et(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Et(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Ll(n,e,t,i){const r=Xs(n);let s=t;return r!==n&&(Qt(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Et(a),l,n)}),r[e](s,...i)}function so(n,e,t){const i=Je(n);bt(i,"iterate",Lr);const r=i[e](...t);return(r===-1||r===!1)&&nl(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function pr(n,e,t=[]){Bn(),Ka();const i=Je(n)[e].apply(n,t);return ja(),Hn(),i}const sh=Xa("__proto__,__v_isRef,__isVue"),xu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(si));function oh(n){si(n)||(n=String(n));const e=Je(this);return bt(e,"has",n),e.hasOwnProperty(n)}class Mu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?gh:Tu:s?yu:Eu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!r){let l;if(o&&(l=ih[t]))return l;if(t==="hasOwnProperty")return oh}const a=Reflect.get(e,t,At(e)?e:i);if((si(t)?xu.has(t):sh(t))||(r||bt(e,"get",t),s))return a;if(At(a)){const l=o&&$a(t)?a:a.value;return r&&ft(l)?$o(l):l}return ft(a)?r?$o(a):el(a):a}}class Su extends Mu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=ni(s);if(!Qt(i)&&!ni(i)&&(s=Je(s),i=Je(i)),!ze(e)&&At(s)&&!At(i))return l||(s.value=i),!0}const o=ze(e)&&$a(t)?Number(t)<e.length:Qe(e,t),a=Reflect.set(e,t,i,At(e)?e:r);return e===Je(r)&&(o?Jn(i,s)&&Un(e,"set",t,i):Un(e,"add",t,i)),a}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Un(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!si(t)||!xu.has(t))&&bt(e,"has",t),i}ownKeys(e){return bt(e,"iterate",ze(e)?"length":yi),Reflect.ownKeys(e)}}class ah extends Mu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lh=new Su,ch=new ah,uh=new Su(!0);const Yo=n=>n,Jr=n=>Reflect.getPrototypeOf(n);function fh(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),o=ji(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Yo:e?Ds:Et;return!e&&bt(s,"iterate",l?qo:yi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Qr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function hh(n,e){const t={get(r){const s=this.__v_raw,o=Je(s),a=Je(r);n||(Jn(r,a)&&bt(o,"get",r),bt(o,"get",a));const{has:l}=Jr(o),c=e?Yo:n?Ds:Et;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&bt(Je(r),"iterate",yi),r.size},has(r){const s=this.__v_raw,o=Je(s),a=Je(r);return n||(Jn(r,a)&&bt(o,"has",r),bt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Je(a),c=e?Yo:n?Ds:Et;return!n&&bt(l,"iterate",yi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ut(t,n?{add:Qr("add"),set:Qr("set"),delete:Qr("delete"),clear:Qr("clear")}:{add(r){!e&&!Qt(r)&&!ni(r)&&(r=Je(r));const s=Je(this);return Jr(s).has.call(s,r)||(s.add(r),Un(s,"add",r,r)),this},set(r,s){!e&&!Qt(s)&&!ni(s)&&(s=Je(s));const o=Je(this),{has:a,get:l}=Jr(o);let c=a.call(o,r);c||(r=Je(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Jn(s,u)&&Un(o,"set",r,s):Un(o,"add",r,s),this},delete(r){const s=Je(this),{has:o,get:a}=Jr(s);let l=o.call(s,r);l||(r=Je(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Un(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,o=r.clear();return s&&Un(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=fh(r,n,e)}),t}function Qa(n,e){const t=hh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const dh={get:Qa(!1,!1)},ph={get:Qa(!1,!0)},mh={get:Qa(!0,!1)};const Eu=new WeakMap,yu=new WeakMap,Tu=new WeakMap,gh=new WeakMap;function _h(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vh(n){return n.__v_skip||!Object.isExtensible(n)?0:_h(kf(n))}function el(n){return ni(n)?n:tl(n,!1,lh,dh,Eu)}function xh(n){return tl(n,!1,uh,ph,yu)}function $o(n){return tl(n,!0,ch,mh,Tu)}function tl(n,e,t,i,r){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=vh(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Zi(n){return ni(n)?Zi(n.__v_raw):!!(n&&n.__v_isReactive)}function ni(n){return!!(n&&n.__v_isReadonly)}function Qt(n){return!!(n&&n.__v_isShallow)}function nl(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Mh(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&au(n,"__v_skip",!0),n}const Et=n=>ft(n)?el(n):n,Ds=n=>ft(n)?$o(n):n;function At(n){return n?n.__v_isRef===!0:!1}function pn(n){return Sh(n,!1)}function Sh(n,e){return At(n)?n:new Eh(n,e)}class Eh{constructor(e,t){this.dep=new Ja,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:Et(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Qt(e)||ni(e);e=i?e:Je(e),Jn(e,t)&&(this._rawValue=e,this._value=i?e:Et(e),this.dep.trigger())}}function qi(n){return At(n)?n.value:n}const yh={get:(n,e,t)=>e==="__v_raw"?n:qi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return At(r)&&!At(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function bu(n){return Zi(n)?n:new Proxy(n,yh)}class Th{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ja(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return du(this,!0),!0}get value(){const e=this.dep.track();return gu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function bh(n,e,t=!1){let i,r;return ke(n)?i=n:(i=n.get,r=n.set),new Th(i,r,t)}const es={},Is=new WeakMap;let gi;function Ah(n,e=!1,t=gi){if(t){let i=Is.get(t);i||Is.set(t,i=[]),i.push(n)}}function Rh(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:Qt(S)||r===!1||r===0?jn(S,1):jn(S);let u,f,d,p,v=!1,E=!1;if(At(n)?(f=()=>n.value,v=Qt(n)):Zi(n)?(f=()=>c(n),v=!0):ze(n)?(E=!0,v=n.some(S=>Zi(S)||Qt(S)),f=()=>n.map(S=>{if(At(S))return S.value;if(Zi(S))return c(S);if(ke(S))return l?l(S,2):S()})):ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Bn();try{d()}finally{Hn()}}const S=gi;gi=u;try{return l?l(n,3,[p]):n(p)}finally{gi=S}}:f=Mn,e&&r){const S=f,w=r===!0?1/0:r;f=()=>jn(S(),w)}const m=eh(),h=()=>{u.stop(),m&&m.active&&Ya(m.effects,u)};if(s&&e){const S=e;e=(...w)=>{S(...w),h()}}let C=E?new Array(n.length).fill(es):es;const R=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const w=u.run();if(r||v||(E?w.some((P,b)=>Jn(P,C[b])):Jn(w,C))){d&&d();const P=gi;gi=u;try{const b=[w,C===es?void 0:E&&C[0]===es?[]:C,p];C=w,l?l(e,3,b):e(...b)}finally{gi=P}}}else u.run()};return a&&a(R),u=new fu(f),u.scheduler=o?()=>o(R,!1):R,p=S=>Ah(S,!1,u),d=u.onStop=()=>{const S=Is.get(u);if(S){if(l)l(S,4);else for(const w of S)w();Is.delete(u)}},e?i?R(!0):C=u.run():o?o(R.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function jn(n,e=1/0,t){if(e<=0||!ft(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,At(n))jn(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)jn(n[i],e,t);else if(nu(n)||ji(n))n.forEach(i=>{jn(i,e,t)});else if(su(n)){for(const i in n)jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(n,e,t,i){try{return i?n(...i):n()}catch(r){qs(r,e,t)}}function En(n,e,t,i){if(ke(n)){const r=Gr(n,e,t,i);return r&&iu(r)&&r.catch(s=>{qs(s,e,t)}),r}if(ze(n)){const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],e,t,i));return r}}function qs(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Bn(),Gr(s,null,10,[n,l,c]),Hn();return}}wh(n,t,r,i,o)}function wh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Pt=[];let dn=-1;const Ji=[];let $n=null,Yi=0;const Au=Promise.resolve();let Us=null;function Ru(n){const e=Us||Au;return n?e.then(this?n.bind(this):n):e}function Ch(n){let e=dn+1,t=Pt.length;for(;e<t;){const i=e+t>>>1,r=Pt[i],s=Dr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function il(n){if(!(n.flags&1)){const e=Dr(n),t=Pt[Pt.length-1];!t||!(n.flags&2)&&e>=Dr(t)?Pt.push(n):Pt.splice(Ch(e),0,n),n.flags|=1,wu()}}function wu(){Us||(Us=Au.then(Pu))}function Ph(n){ze(n)?Ji.push(...n):$n&&n.id===-1?$n.splice(Yi+1,0,n):n.flags&1||(Ji.push(n),n.flags|=1),wu()}function Dl(n,e,t=dn+1){for(;t<Pt.length;t++){const i=Pt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Pt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Cu(n){if(Ji.length){const e=[...new Set(Ji)].sort((t,i)=>Dr(t)-Dr(i));if(Ji.length=0,$n){$n.push(...e);return}for($n=e,Yi=0;Yi<$n.length;Yi++){const t=$n[Yi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}$n=null,Yi=0}}const Dr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Pu(n){try{for(dn=0;dn<Pt.length;dn++){const e=Pt[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Pt.length;dn++){const e=Pt[dn];e&&(e.flags&=-2)}dn=-1,Pt.length=0,Cu(),Us=null,(Pt.length||Ji.length)&&Pu()}}let _n=null,Lu=null;function Ns(n){const e=_n;return _n=n,Lu=n&&n.type.__scopeId||null,e}function Lh(n,e=_n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Gl(-1);const s=Ns(e);let o;try{o=n(...r)}finally{Ns(s),i._d&&Gl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function li(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Bn(),En(l,t,8,[n.el,a,n,e]),Hn())}}const Dh=Symbol("_vte"),Ih=n=>n.__isTeleport,Uh=Symbol("_leaveCb");function rl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,rl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Du(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Fs=new WeakMap;function Ar(n,e,t,i,r=!1){if(ze(n)){n.forEach((v,E)=>Ar(v,e&&(ze(e)?e[E]:e),t,i,r));return}if(Rr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ar(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ul(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,d=Je(f),p=f===ct?tu:v=>Qe(d,v);if(c!=null&&c!==l){if(Il(e),_t(c))u[c]=null,p(c)&&(f[c]=null);else if(At(c)){c.value=null;const v=e;v.k&&(u[v.k]=null)}}if(ke(l))Gr(l,a,12,[o,u]);else{const v=_t(l),E=At(l);if(v||E){const m=()=>{if(n.f){const h=v?p(l)?f[l]:u[l]:l.value;if(r)ze(h)&&Ya(h,s);else if(ze(h))h.includes(s)||h.push(s);else if(v)u[l]=[s],p(l)&&(f[l]=u[l]);else{const C=[s];l.value=C,n.k&&(u[n.k]=C)}}else v?(u[l]=o,p(l)&&(f[l]=o)):E&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{m(),Fs.delete(n)};h.id=-1,Fs.set(n,h),Xt(h,t)}else Il(n),m()}}}function Il(n){const e=Fs.get(n);e&&(e.flags|=8,Fs.delete(n))}Ws().requestIdleCallback;Ws().cancelIdleCallback;const Rr=n=>!!n.type.__asyncLoader,Iu=n=>n.type.__isKeepAlive;function Nh(n,e){Uu(n,"a",e)}function Fh(n,e){Uu(n,"da",e)}function Uu(n,e,t=Lt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ys(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Iu(r.parent.vnode)&&Oh(i,e,t,r),r=r.parent}}function Oh(n,e,t,i){const r=Ys(e,n,i,!0);ol(()=>{Ya(i[e],r)},t)}function Ys(n,e,t=Lt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Bn();const a=kr(t),l=En(e,t,n,o);return a(),Hn(),l});return i?r.unshift(s):r.push(s),s}}const Vn=n=>(e,t=Lt)=>{(!Ur||n==="sp")&&Ys(n,(...i)=>e(...i),t)},Bh=Vn("bm"),sl=Vn("m"),Hh=Vn("bu"),zh=Vn("u"),Vh=Vn("bum"),ol=Vn("um"),Gh=Vn("sp"),kh=Vn("rtg"),Wh=Vn("rtc");function Xh(n,e=Lt){Ys("ec",n,e)}const qh=Symbol.for("v-ndc");function Ko(n,e,t,i){let r;const s=t,o=ze(n);if(o||_t(n)){const a=o&&Zi(n);let l=!1,c=!1;a&&(l=!Qt(n),c=ni(n),n=Xs(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Ds(Et(n[u])):Et(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ft(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const jo=n=>n?nf(n)?ul(n):jo(n.parent):null,wr=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>jo(n.parent),$root:n=>jo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fu(n),$forceUpdate:n=>n.f||(n.f=()=>{il(n.update)}),$nextTick:n=>n.n||(n.n=Ru.bind(n.proxy)),$watch:n=>pd.bind(n)}),oo=(n,e)=>n!==ct&&!n.__isScriptSetup&&Qe(n,e),Yh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(oo(i,e))return o[e]=1,i[e];if(r!==ct&&Qe(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Qe(c,e))return o[e]=3,s[e];if(t!==ct&&Qe(t,e))return o[e]=4,t[e];Zo&&(o[e]=0)}}const u=wr[e];let f,d;if(u)return e==="$attrs"&&bt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ct&&Qe(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Qe(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return oo(r,e)?(r[e]=t,!0):i!==ct&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s,type:o}},a){let l,c;return!!(t[a]||n!==ct&&a[0]!=="$"&&Qe(n,a)||oo(e,a)||(l=s[0])&&Qe(l,a)||Qe(i,a)||Qe(wr,a)||Qe(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ul(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Zo=!0;function $h(n){const e=Fu(n),t=n.proxy,i=n.ctx;Zo=!1,e.beforeCreate&&Nl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:v,activated:E,deactivated:m,beforeDestroy:h,beforeUnmount:C,destroyed:R,unmounted:S,render:w,renderTracked:P,renderTriggered:b,errorCaptured:I,serverPrefetch:y,expose:T,inheritAttrs:L,components:k,directives:j,filters:re}=e;if(c&&Kh(c,i,null),o)for(const Q in o){const B=o[Q];ke(B)&&(i[Q]=B.bind(t))}if(r){const Q=r.call(t,t);ft(Q)&&(n.data=el(Q))}if(Zo=!0,s)for(const Q in s){const B=s[Q],he=ke(B)?B.bind(t,t):ke(B.get)?B.get.bind(t,t):Mn,xe=!ke(B)&&ke(B.set)?B.set.bind(t):Mn,Re=Bd({get:he,set:xe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Ne=>Re.value=Ne})}if(a)for(const Q in a)Nu(a[Q],i,t,Q);if(l){const Q=ke(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(B=>{td(B,Q[B])})}u&&Nl(u,n,"c");function Z(Q,B){ze(B)?B.forEach(he=>Q(he.bind(t))):B&&Q(B.bind(t))}if(Z(Bh,f),Z(sl,d),Z(Hh,p),Z(zh,v),Z(Nh,E),Z(Fh,m),Z(Xh,I),Z(Wh,P),Z(kh,b),Z(Vh,C),Z(ol,S),Z(Gh,y),ze(T))if(T.length){const Q=n.exposed||(n.exposed={});T.forEach(B=>{Object.defineProperty(Q,B,{get:()=>t[B],set:he=>t[B]=he,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Mn&&(n.render=w),L!=null&&(n.inheritAttrs=L),k&&(n.components=k),j&&(n.directives=j),y&&Du(n)}function Kh(n,e,t=Mn){ze(n)&&(n=Jo(n));for(const i in n){const r=n[i];let s;ft(r)?"default"in r?s=ys(r.from||i,r.default,!0):s=ys(r.from||i):s=ys(r),At(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Nl(n,e,t){En(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nu(n,e,t,i){let r=i.includes(".")?Ku(t,i):()=>t[i];if(_t(n)){const s=e[n];ke(s)&&lo(r,s)}else if(ke(n))lo(r,n.bind(t));else if(ft(n))if(ze(n))n.forEach(s=>Nu(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&lo(r,s,n)}}function Fu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Os(l,c,o,!0)),Os(l,e,o)),ft(e)&&s.set(e,l),l}function Os(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Os(n,s,t,!0),r&&r.forEach(o=>Os(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=jh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const jh={data:Fl,props:Ol,emits:Ol,methods:Sr,computed:Sr,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Sr,directives:Sr,watch:Jh,provide:Fl,inject:Zh};function Fl(n,e){return e?n?function(){return Ut(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function Zh(n,e){return Sr(Jo(n),Jo(e))}function Jo(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function Sr(n,e){return n?Ut(Object.create(null),n,e):e}function Ol(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:Ut(Object.create(null),Ul(n),Ul(e??{})):e}function Jh(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=wt(n[i],e[i]);return t}function Ou(){return{app:null,config:{isNativeTag:tu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qh=0;function ed(n,e){return function(i,r=null){ke(i)||(i=Ut({},i)),r!=null&&!ft(r)&&(r=null);const s=Ou(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Qh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Hd,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...f)):ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Dt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,ul(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(En(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Qi;Qi=c;try{return u()}finally{Qi=f}}};return c}}let Qi=null;function td(n,e){if(Lt){let t=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===t&&(t=Lt.provides=Object.create(i)),t[n]=e}}function ys(n,e,t=!1){const i=Dd();if(i||Qi){let r=Qi?Qi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const Bu={},Hu=()=>Object.create(Bu),zu=n=>Object.getPrototypeOf(n)===Bu;function nd(n,e,t,i=!1){const r={},s=Hu();n.propsDefaults=Object.create(null),Vu(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:xh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function id(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if($s(n.emitsOptions,d))continue;const p=e[d];if(l)if(Qe(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const v=ti(d);r[v]=Qo(l,a,v,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Vu(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Qe(e,f)&&((u=Ri(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Qo(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&Un(n.attrs,"set","")}function Vu(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(yr(l))continue;const c=e[l];let u;r&&Qe(r,u=ti(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:$s(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Je(t),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Qo(r,l,f,c[f],n,!Qe(c,f))}}return o}function Qo(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=kr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ri(t))&&(i=!0))}return i}const rd=new WeakMap;function Gu(n,e,t=!1){const i=t?rd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[d,p]=Gu(f,e,!0);Ut(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ft(n)&&i.set(n,Ki),Ki;if(ze(s))for(let u=0;u<s.length;u++){const f=ti(s[u]);Bl(f)&&(o[f]=ct)}else if(s)for(const u in s){const f=ti(u);if(Bl(f)){const d=s[u],p=o[f]=ze(d)||ke(d)?{type:d}:Ut({},d),v=p.type;let E=!1,m=!0;if(ze(v))for(let h=0;h<v.length;++h){const C=v[h],R=ke(C)&&C.name;if(R==="Boolean"){E=!0;break}else R==="String"&&(m=!1)}else E=ke(v)&&v.name==="Boolean";p[0]=E,p[1]=m,(E||Qe(p,"default"))&&a.push(f)}}const c=[o,a];return ft(n)&&i.set(n,c),c}function Bl(n){return n[0]!=="$"&&!yr(n)}const al=n=>n==="_"||n==="_ctx"||n==="$stable",ll=n=>ze(n)?n.map(mn):[mn(n)],sd=(n,e,t)=>{if(e._n)return e;const i=Lh((...r)=>ll(e(...r)),t);return i._c=!1,i},ku=(n,e,t)=>{const i=n._ctx;for(const r in n){if(al(r))continue;const s=n[r];if(ke(s))e[r]=sd(r,s,i);else if(s!=null){const o=ll(s);e[r]=()=>o}}},Wu=(n,e)=>{const t=ll(e);n.slots.default=()=>t},Xu=(n,e,t)=>{for(const i in e)(t||!al(i))&&(n[i]=e[i])},od=(n,e,t)=>{const i=n.slots=Hu();if(n.vnode.shapeFlag&32){const r=e._;r?(Xu(i,e,t),t&&au(i,"_",r,!0)):ku(e,i)}else e&&Wu(n,e)},ad=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Xu(r,e,t):(s=!e.$stable,ku(e,r)),o=e}else e&&(Wu(n,e),o={default:1});if(s)for(const a in r)!al(a)&&o[a]==null&&delete r[a]},Xt=Ed;function ld(n){return cd(n)}function cd(n,e){const t=Ws();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Mn,insertStaticContent:v}=n,E=(A,_,V,$=null,G=null,O=null,oe=void 0,q=null,J=!!_.dynamicChildren)=>{if(A===_)return;A&&!mr(A,_)&&($=se(A),Ne(A,G,O,!0),A=null),_.patchFlag===-2&&(J=!1,_.dynamicChildren=null);const{type:ne,ref:_e,shapeFlag:x}=_;switch(ne){case Ks:m(A,_,V,$);break;case nr:h(A,_,V,$);break;case Ts:A==null&&C(_,V,$,oe);break;case Bt:k(A,_,V,$,G,O,oe,q,J);break;default:x&1?w(A,_,V,$,G,O,oe,q,J):x&6?j(A,_,V,$,G,O,oe,q,J):(x&64||x&128)&&ne.process(A,_,V,$,G,O,oe,q,J,Ce)}_e!=null&&G?Ar(_e,A&&A.ref,O,_||A,!_):_e==null&&A&&A.ref!=null&&Ar(A.ref,null,O,A,!0)},m=(A,_,V,$)=>{if(A==null)i(_.el=a(_.children),V,$);else{const G=_.el=A.el;_.children!==A.children&&c(G,_.children)}},h=(A,_,V,$)=>{A==null?i(_.el=l(_.children||""),V,$):_.el=A.el},C=(A,_,V,$)=>{[A.el,A.anchor]=v(A.children,_,V,$,A.el,A.anchor)},R=({el:A,anchor:_},V,$)=>{let G;for(;A&&A!==_;)G=d(A),i(A,V,$),A=G;i(_,V,$)},S=({el:A,anchor:_})=>{let V;for(;A&&A!==_;)V=d(A),r(A),A=V;r(_)},w=(A,_,V,$,G,O,oe,q,J)=>{_.type==="svg"?oe="svg":_.type==="math"&&(oe="mathml"),A==null?P(_,V,$,G,O,oe,q,J):y(A,_,G,O,oe,q,J)},P=(A,_,V,$,G,O,oe,q)=>{let J,ne;const{props:_e,shapeFlag:x,transition:g,dirs:D}=A;if(J=A.el=o(A.type,O,_e&&_e.is,_e),x&8?u(J,A.children):x&16&&I(A.children,J,null,$,G,ao(A,O),oe,q),D&&li(A,null,$,"created"),b(J,A,A.scopeId,oe,$),_e){for(const K in _e)K!=="value"&&!yr(K)&&s(J,K,null,_e[K],O,$);"value"in _e&&s(J,"value",null,_e.value,O),(ne=_e.onVnodeBeforeMount)&&hn(ne,$,A)}D&&li(A,null,$,"beforeMount");const H=ud(G,g);H&&g.beforeEnter(J),i(J,_,V),((ne=_e&&_e.onVnodeMounted)||H||D)&&Xt(()=>{ne&&hn(ne,$,A),H&&g.enter(J),D&&li(A,null,$,"mounted")},G)},b=(A,_,V,$,G)=>{if(V&&p(A,V),$)for(let O=0;O<$.length;O++)p(A,$[O]);if(G){let O=G.subTree;if(_===O||Zu(O.type)&&(O.ssContent===_||O.ssFallback===_)){const oe=G.vnode;b(A,oe,oe.scopeId,oe.slotScopeIds,G.parent)}}},I=(A,_,V,$,G,O,oe,q,J=0)=>{for(let ne=J;ne<A.length;ne++){const _e=A[ne]=q?Kn(A[ne]):mn(A[ne]);E(null,_e,_,V,$,G,O,oe,q)}},y=(A,_,V,$,G,O,oe)=>{const q=_.el=A.el;let{patchFlag:J,dynamicChildren:ne,dirs:_e}=_;J|=A.patchFlag&16;const x=A.props||ct,g=_.props||ct;let D;if(V&&ci(V,!1),(D=g.onVnodeBeforeUpdate)&&hn(D,V,_,A),_e&&li(_,A,V,"beforeUpdate"),V&&ci(V,!0),(x.innerHTML&&g.innerHTML==null||x.textContent&&g.textContent==null)&&u(q,""),ne?T(A.dynamicChildren,ne,q,V,$,ao(_,G),O):oe||B(A,_,q,null,V,$,ao(_,G),O,!1),J>0){if(J&16)L(q,x,g,V,G);else if(J&2&&x.class!==g.class&&s(q,"class",null,g.class,G),J&4&&s(q,"style",x.style,g.style,G),J&8){const H=_.dynamicProps;for(let K=0;K<H.length;K++){const z=H[K],Me=x[z],ae=g[z];(ae!==Me||z==="value")&&s(q,z,Me,ae,G,V)}}J&1&&A.children!==_.children&&u(q,_.children)}else!oe&&ne==null&&L(q,x,g,V,G);((D=g.onVnodeUpdated)||_e)&&Xt(()=>{D&&hn(D,V,_,A),_e&&li(_,A,V,"updated")},$)},T=(A,_,V,$,G,O,oe)=>{for(let q=0;q<_.length;q++){const J=A[q],ne=_[q],_e=J.el&&(J.type===Bt||!mr(J,ne)||J.shapeFlag&198)?f(J.el):V;E(J,ne,_e,null,$,G,O,oe,!0)}},L=(A,_,V,$,G)=>{if(_!==V){if(_!==ct)for(const O in _)!yr(O)&&!(O in V)&&s(A,O,_[O],null,G,$);for(const O in V){if(yr(O))continue;const oe=V[O],q=_[O];oe!==q&&O!=="value"&&s(A,O,q,oe,G,$)}"value"in V&&s(A,"value",_.value,V.value,G)}},k=(A,_,V,$,G,O,oe,q,J)=>{const ne=_.el=A?A.el:a(""),_e=_.anchor=A?A.anchor:a("");let{patchFlag:x,dynamicChildren:g,slotScopeIds:D}=_;D&&(q=q?q.concat(D):D),A==null?(i(ne,V,$),i(_e,V,$),I(_.children||[],V,_e,G,O,oe,q,J)):x>0&&x&64&&g&&A.dynamicChildren?(T(A.dynamicChildren,g,V,G,O,oe,q),(_.key!=null||G&&_===G.subTree)&&qu(A,_,!0)):B(A,_,V,_e,G,O,oe,q,J)},j=(A,_,V,$,G,O,oe,q,J)=>{_.slotScopeIds=q,A==null?_.shapeFlag&512?G.ctx.activate(_,V,$,oe,J):re(_,V,$,G,O,oe,J):te(A,_,J)},re=(A,_,V,$,G,O,oe)=>{const q=A.component=Ld(A,$,G);if(Iu(A)&&(q.ctx.renderer=Ce),Id(q,!1,oe),q.asyncDep){if(G&&G.registerDep(q,Z,oe),!A.el){const J=q.subTree=Dt(nr);h(null,J,_,V),A.placeholder=J.el}}else Z(q,A,_,V,G,O,oe)},te=(A,_,V)=>{const $=_.component=A.component;if(Md(A,_,V))if($.asyncDep&&!$.asyncResolved){Q($,_,V);return}else $.next=_,$.update();else _.el=A.el,$.vnode=_},Z=(A,_,V,$,G,O,oe)=>{const q=()=>{if(A.isMounted){let{next:x,bu:g,u:D,parent:H,vnode:K}=A;{const Ee=Yu(A);if(Ee){x&&(x.el=K.el,Q(A,x,oe)),Ee.asyncDep.then(()=>{A.isUnmounted||q()});return}}let z=x,Me;ci(A,!1),x?(x.el=K.el,Q(A,x,oe)):x=K,g&&to(g),(Me=x.props&&x.props.onVnodeBeforeUpdate)&&hn(Me,H,x,K),ci(A,!0);const ae=zl(A),Se=A.subTree;A.subTree=ae,E(Se,ae,f(Se.el),se(Se),A,G,O),x.el=ae.el,z===null&&Sd(A,ae.el),D&&Xt(D,G),(Me=x.props&&x.props.onVnodeUpdated)&&Xt(()=>hn(Me,H,x,K),G)}else{let x;const{el:g,props:D}=_,{bm:H,m:K,parent:z,root:Me,type:ae}=A,Se=Rr(_);ci(A,!1),H&&to(H),!Se&&(x=D&&D.onVnodeBeforeMount)&&hn(x,z,_),ci(A,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(ae);const Ee=A.subTree=zl(A);E(null,Ee,V,$,A,G,O),_.el=Ee.el}if(K&&Xt(K,G),!Se&&(x=D&&D.onVnodeMounted)){const Ee=_;Xt(()=>hn(x,z,Ee),G)}(_.shapeFlag&256||z&&Rr(z.vnode)&&z.vnode.shapeFlag&256)&&A.a&&Xt(A.a,G),A.isMounted=!0,_=V=$=null}};A.scope.on();const J=A.effect=new fu(q);A.scope.off();const ne=A.update=J.run.bind(J),_e=A.job=J.runIfDirty.bind(J);_e.i=A,_e.id=A.uid,J.scheduler=()=>il(_e),ci(A,!0),ne()},Q=(A,_,V)=>{_.component=A;const $=A.vnode.props;A.vnode=_,A.next=null,id(A,_.props,$,V),ad(A,_.children,V),Bn(),Dl(A),Hn()},B=(A,_,V,$,G,O,oe,q,J=!1)=>{const ne=A&&A.children,_e=A?A.shapeFlag:0,x=_.children,{patchFlag:g,shapeFlag:D}=_;if(g>0){if(g&128){xe(ne,x,V,$,G,O,oe,q,J);return}else if(g&256){he(ne,x,V,$,G,O,oe,q,J);return}}D&8?(_e&16&&ee(ne,G,O),x!==ne&&u(V,x)):_e&16?D&16?xe(ne,x,V,$,G,O,oe,q,J):ee(ne,G,O,!0):(_e&8&&u(V,""),D&16&&I(x,V,$,G,O,oe,q,J))},he=(A,_,V,$,G,O,oe,q,J)=>{A=A||Ki,_=_||Ki;const ne=A.length,_e=_.length,x=Math.min(ne,_e);let g;for(g=0;g<x;g++){const D=_[g]=J?Kn(_[g]):mn(_[g]);E(A[g],D,V,null,G,O,oe,q,J)}ne>_e?ee(A,G,O,!0,!1,x):I(_,V,$,G,O,oe,q,J,x)},xe=(A,_,V,$,G,O,oe,q,J)=>{let ne=0;const _e=_.length;let x=A.length-1,g=_e-1;for(;ne<=x&&ne<=g;){const D=A[ne],H=_[ne]=J?Kn(_[ne]):mn(_[ne]);if(mr(D,H))E(D,H,V,null,G,O,oe,q,J);else break;ne++}for(;ne<=x&&ne<=g;){const D=A[x],H=_[g]=J?Kn(_[g]):mn(_[g]);if(mr(D,H))E(D,H,V,null,G,O,oe,q,J);else break;x--,g--}if(ne>x){if(ne<=g){const D=g+1,H=D<_e?_[D].el:$;for(;ne<=g;)E(null,_[ne]=J?Kn(_[ne]):mn(_[ne]),V,H,G,O,oe,q,J),ne++}}else if(ne>g)for(;ne<=x;)Ne(A[ne],G,O,!0),ne++;else{const D=ne,H=ne,K=new Map;for(ne=H;ne<=g;ne++){const we=_[ne]=J?Kn(_[ne]):mn(_[ne]);we.key!=null&&K.set(we.key,ne)}let z,Me=0;const ae=g-H+1;let Se=!1,Ee=0;const le=new Array(ae);for(ne=0;ne<ae;ne++)le[ne]=0;for(ne=D;ne<=x;ne++){const we=A[ne];if(Me>=ae){Ne(we,G,O,!0);continue}let ye;if(we.key!=null)ye=K.get(we.key);else for(z=H;z<=g;z++)if(le[z-H]===0&&mr(we,_[z])){ye=z;break}ye===void 0?Ne(we,G,O,!0):(le[ye-H]=ne+1,ye>=Ee?Ee=ye:Se=!0,E(we,_[ye],V,null,G,O,oe,q,J),Me++)}const ge=Se?fd(le):Ki;for(z=ge.length-1,ne=ae-1;ne>=0;ne--){const we=H+ne,ye=_[we],pe=_[we+1],Be=we+1<_e?pe.el||pe.placeholder:$;le[ne]===0?E(null,ye,V,Be,G,O,oe,q,J):Se&&(z<0||ne!==ge[z]?Re(ye,V,Be,2):z--)}}},Re=(A,_,V,$,G=null)=>{const{el:O,type:oe,transition:q,children:J,shapeFlag:ne}=A;if(ne&6){Re(A.component.subTree,_,V,$);return}if(ne&128){A.suspense.move(_,V,$);return}if(ne&64){oe.move(A,_,V,Ce);return}if(oe===Bt){i(O,_,V);for(let x=0;x<J.length;x++)Re(J[x],_,V,$);i(A.anchor,_,V);return}if(oe===Ts){R(A,_,V);return}if($!==2&&ne&1&&q)if($===0)q.beforeEnter(O),i(O,_,V),Xt(()=>q.enter(O),G);else{const{leave:x,delayLeave:g,afterLeave:D}=q,H=()=>{A.ctx.isUnmounted?r(O):i(O,_,V)},K=()=>{O._isLeaving&&O[Uh](!0),x(O,()=>{H(),D&&D()})};g?g(O,H,K):K()}else i(O,_,V)},Ne=(A,_,V,$=!1,G=!1)=>{const{type:O,props:oe,ref:q,children:J,dynamicChildren:ne,shapeFlag:_e,patchFlag:x,dirs:g,cacheIndex:D}=A;if(x===-2&&(G=!1),q!=null&&(Bn(),Ar(q,null,V,A,!0),Hn()),D!=null&&(_.renderCache[D]=void 0),_e&256){_.ctx.deactivate(A);return}const H=_e&1&&g,K=!Rr(A);let z;if(K&&(z=oe&&oe.onVnodeBeforeUnmount)&&hn(z,_,A),_e&6)$e(A.component,V,$);else{if(_e&128){A.suspense.unmount(V,$);return}H&&li(A,null,_,"beforeUnmount"),_e&64?A.type.remove(A,_,V,Ce,$):ne&&!ne.hasOnce&&(O!==Bt||x>0&&x&64)?ee(ne,_,V,!1,!0):(O===Bt&&x&384||!G&&_e&16)&&ee(J,_,V),$&&tt(A)}(K&&(z=oe&&oe.onVnodeUnmounted)||H)&&Xt(()=>{z&&hn(z,_,A),H&&li(A,null,_,"unmounted")},V)},tt=A=>{const{type:_,el:V,anchor:$,transition:G}=A;if(_===Bt){ot(V,$);return}if(_===Ts){S(A);return}const O=()=>{r(V),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(A.shapeFlag&1&&G&&!G.persisted){const{leave:oe,delayLeave:q}=G,J=()=>oe(V,O);q?q(A.el,O,J):J()}else O()},ot=(A,_)=>{let V;for(;A!==_;)V=d(A),r(A),A=V;r(_)},$e=(A,_,V)=>{const{bum:$,scope:G,job:O,subTree:oe,um:q,m:J,a:ne}=A;Hl(J),Hl(ne),$&&to($),G.stop(),O&&(O.flags|=8,Ne(oe,A,_,V)),q&&Xt(q,_),Xt(()=>{A.isUnmounted=!0},_)},ee=(A,_,V,$=!1,G=!1,O=0)=>{for(let oe=O;oe<A.length;oe++)Ne(A[oe],_,V,$,G)},se=A=>{if(A.shapeFlag&6)return se(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const _=d(A.anchor||A.el),V=_&&_[Dh];return V?d(V):_};let Te=!1;const Fe=(A,_,V)=>{A==null?_._vnode&&Ne(_._vnode,null,null,!0):E(_._vnode||null,A,_,null,null,null,V),_._vnode=A,Te||(Te=!0,Dl(),Cu(),Te=!1)},Ce={p:E,um:Ne,m:Re,r:tt,mt:re,mc:I,pc:B,pbc:T,n:se,o:n};return{render:Fe,hydrate:void 0,createApp:ed(Fe)}}function ao({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ci({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ud(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function qu(n,e,t=!1){const i=n.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Kn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&qu(o,a)),a.type===Ks&&a.patchFlag!==-1&&(a.el=o.el),a.type===nr&&!a.el&&(a.el=o.el)}}function fd(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Yu(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yu(e)}function Hl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const hd=Symbol.for("v-scx"),dd=()=>ys(hd);function lo(n,e,t){return $u(n,e,t)}function $u(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ut({},t),l=e&&i||!e&&s!=="post";let c;if(Ur){if(s==="sync"){const p=dd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Mn,p.resume=Mn,p.pause=Mn,p}}const u=Lt;a.call=(p,v,E)=>En(p,u,v,E);let f=!1;s==="post"?a.scheduler=p=>{Xt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():il(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Rh(n,e,a);return Ur&&(c?c.push(d):l&&d()),d}function pd(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?Ku(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const o=kr(this),a=$u(r,s.bind(i),t);return o(),a}function Ku(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const md=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ti(e)}Modifiers`]||n[`${Ri(e)}Modifiers`];function gd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),o=s&&md(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>_t(u)?u.trim():u)),o.number&&(r=t.map(qf)));let a,l=i[a=eo(e)]||i[a=eo(ti(e))];!l&&s&&(l=i[a=eo(Ri(e))]),l&&En(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,r)}}const _d=new WeakMap;function ju(n,e,t=!1){const i=t?_d:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=ju(c,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ft(n)&&i.set(n,null),null):(ze(s)?s.forEach(l=>o[l]=null):Ut(o,s),ft(n)&&i.set(n,o),o)}function $s(n,e){return!n||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Ri(e))||Qe(n,e))}function zl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:v,inheritAttrs:E}=n,m=Ns(n);let h,C;try{if(t.shapeFlag&4){const S=r||i,w=S;h=mn(c.call(w,S,u,f,p,d,v)),C=a}else{const S=e;h=mn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),C=e.props?a:vd(a)}}catch(S){Cr.length=0,qs(S,n,1),h=Dt(nr)}let R=h;if(C&&E!==!1){const S=Object.keys(C),{shapeFlag:w}=R;S.length&&w&7&&(s&&S.some(qa)&&(C=xd(C,s)),R=ir(R,C,!1,!0))}return t.dirs&&(R=ir(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&rl(R,t.transition),h=R,Ns(m),h}const vd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Vs(t))&&((e||(e={}))[t]=n[t]);return e},xd=(n,e)=>{const t={};for(const i in n)(!qa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Md(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Vl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!$s(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vl(i,o,c):!0:!!o;return!1}function Vl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!$s(t,s))return!0}return!1}function Sd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Zu=n=>n.__isSuspense;function Ed(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Ph(n)}const Bt=Symbol.for("v-fgt"),Ks=Symbol.for("v-txt"),nr=Symbol.for("v-cmt"),Ts=Symbol.for("v-stc"),Cr=[];let qt=null;function Jt(n=!1){Cr.push(qt=n?null:[])}function yd(){Cr.pop(),qt=Cr[Cr.length-1]||null}let Ir=1;function Gl(n,e=!1){Ir+=n,n<0&&qt&&e&&(qt.hasOnce=!0)}function Ju(n){return n.dynamicChildren=Ir>0?qt||Ki:null,yd(),Ir>0&&qt&&qt.push(n),n}function cn(n,e,t,i,r,s){return Ju(et(n,e,t,i,r,s,!0))}function Td(n,e,t,i,r){return Ju(Dt(n,e,t,i,r,!0))}function Qu(n){return n?n.__v_isVNode===!0:!1}function mr(n,e){return n.type===e.type&&n.key===e.key}const ef=({key:n})=>n??null,bs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||At(n)||ke(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function et(n,e=null,t=null,i=0,r=null,s=n===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ef(e),ref:e&&bs(e),scopeId:Lu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_n};return a?(cl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),Ir>0&&!o&&qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&qt.push(l),l}const Dt=bd;function bd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===qh)&&(n=nr),Qu(n)){const a=ir(n,e,!0);return t&&cl(a,t),Ir>0&&!s&&qt&&(a.shapeFlag&6?qt[qt.indexOf(n)]=a:qt.push(a)),a.patchFlag=-2,a}if(Od(n)&&(n=n.__vccOpts),e){e=Ad(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=ur(a)),ft(l)&&(nl(l)&&!ze(l)&&(l=Ut({},l)),e.style=Vr(l))}const o=_t(n)?1:Zu(n)?128:Ih(n)?64:ft(n)?4:ke(n)?2:0;return et(n,e,t,i,r,o,s,!0)}function Ad(n){return n?nl(n)||zu(n)?Ut({},n):n:null}function ir(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?wd(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ef(c),ref:e&&e.ref?t&&s?ze(s)?s.concat(bs(e)):[s,bs(e)]:bs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ir(n.ssContent),ssFallback:n.ssFallback&&ir(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&rl(u,l.clone(u)),u}function tf(n=" ",e=0){return Dt(Ks,null,n,e)}function Rd(n,e){const t=Dt(Ts,null,n);return t.staticCount=e,t}function mn(n){return n==null||typeof n=="boolean"?Dt(nr):ze(n)?Dt(Bt,null,n.slice()):Qu(n)?Kn(n):Dt(Ks,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ir(n)}function cl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),cl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!zu(e)?e._ctx=_n:r===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[tf(e)]):t=8);n.children=e,n.shapeFlag|=t}function wd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ur([e.class,i.class]));else if(r==="style")e.style=Vr([e.style,i.style]);else if(Vs(r)){const s=e[r],o=i[r];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function hn(n,e,t,i=null){En(n,e,7,[t,i])}const Cd=Ou();let Pd=0;function Ld(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Cd,s={uid:Pd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gu(i,r),emitsOptions:ju(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=gd.bind(null,s),n.ce&&n.ce(s),s}let Lt=null;const Dd=()=>Lt||_n;let Bs,ea;{const n=Ws(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Bs=e("__VUE_INSTANCE_SETTERS__",t=>Lt=t),ea=e("__VUE_SSR_SETTERS__",t=>Ur=t)}const kr=n=>{const e=Lt;return Bs(n),n.scope.on(),()=>{n.scope.off(),Bs(e)}},kl=()=>{Lt&&Lt.scope.off(),Bs(null)};function nf(n){return n.vnode.shapeFlag&4}let Ur=!1;function Id(n,e=!1,t=!1){e&&ea(e);const{props:i,children:r}=n.vnode,s=nf(n);nd(n,i,s,e),od(n,r,t||e);const o=s?Ud(n,e):void 0;return e&&ea(!1),o}function Ud(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Yh);const{setup:i}=t;if(i){Bn();const r=n.setupContext=i.length>1?Fd(n):null,s=kr(n),o=Gr(i,n,0,[n.props,r]),a=iu(o);if(Hn(),s(),(a||n.sp)&&!Rr(n)&&Du(n),a){if(o.then(kl,kl),e)return o.then(l=>{Wl(n,l)}).catch(l=>{qs(l,n,0)});n.asyncDep=o}else Wl(n,o)}else rf(n)}function Wl(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=bu(e)),rf(n)}function rf(n,e,t){const i=n.type;n.render||(n.render=i.render||Mn);{const r=kr(n);Bn();try{$h(n)}finally{Hn(),r()}}}const Nd={get(n,e){return bt(n,"get",""),n[e]}};function Fd(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Nd),slots:n.slots,emit:n.emit,expose:e}}function ul(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bu(Mh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in wr)return wr[t](n)},has(e,t){return t in e||t in wr}})):n.proxy}function Od(n){return ke(n)&&"__vccOpts"in n}const Bd=(n,e)=>bh(n,e,Ur),Hd="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ta;const Xl=typeof window<"u"&&window.trustedTypes;if(Xl)try{ta=Xl.createPolicy("vue",{createHTML:n=>n})}catch{}const sf=ta?n=>ta.createHTML(n):n=>n,zd="http://www.w3.org/2000/svg",Vd="http://www.w3.org/1998/Math/MathML",In=typeof document<"u"?document:null,ql=In&&In.createElement("template"),Gd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?In.createElementNS(zd,n):e==="mathml"?In.createElementNS(Vd,n):t?In.createElement(n,{is:t}):In.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>In.createTextNode(n),createComment:n=>In.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>In.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ql.innerHTML=sf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ql.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},kd=Symbol("_vtc");function Wd(n,e,t){const i=n[kd];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Yl=Symbol("_vod"),Xd=Symbol("_vsh"),qd=Symbol(""),Yd=/(?:^|;)\s*display\s*:/;function $d(n,e,t){const i=n.style,r=_t(t);let s=!1;if(t&&!r){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&As(i,a,"")}else for(const o in e)t[o]==null&&As(i,o,"");for(const o in t)o==="display"&&(s=!0),As(i,o,t[o])}else if(r){if(e!==t){const o=i[qd];o&&(t+=";"+o),i.cssText=t,s=Yd.test(t)}}else e&&n.removeAttribute("style");Yl in n&&(n[Yl]=s?i.display:"",n[Xd]&&(i.display="none"))}const $l=/\s*!important$/;function As(n,e,t){if(ze(t))t.forEach(i=>As(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Kd(n,e);$l.test(t)?n.setProperty(Ri(i),t.replace($l,""),"important"):n[i]=t}}const Kl=["Webkit","Moz","ms"],co={};function Kd(n,e){const t=co[e];if(t)return t;let i=ti(e);if(i!=="filter"&&i in n)return co[e]=i;i=ou(i);for(let r=0;r<Kl.length;r++){const s=Kl[r]+i;if(s in n)return co[e]=s}return e}const jl="http://www.w3.org/1999/xlink";function Zl(n,e,t,i,r,s=Jf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(jl,e.slice(6,e.length)):n.setAttributeNS(jl,e,t):t==null||s&&!lu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":si(t)?String(t):t)}function Jl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=lu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function jd(n,e,t,i){n.addEventListener(e,t,i)}function Zd(n,e,t,i){n.removeEventListener(e,t,i)}const Ql=Symbol("_vei");function Jd(n,e,t,i,r=null){const s=n[Ql]||(n[Ql]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Qd(e);if(i){const c=s[e]=np(i,r);jd(n,a,c,l)}else o&&(Zd(n,a,o,l),s[e]=void 0)}}const ec=/(?:Once|Passive|Capture)$/;function Qd(n){let e;if(ec.test(n)){e={};let i;for(;i=n.match(ec);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ri(n.slice(2)),e]}let uo=0;const ep=Promise.resolve(),tp=()=>uo||(ep.then(()=>uo=0),uo=Date.now());function np(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(ip(i,t.value),e,5,[i])};return t.value=n,t.attached=tp(),t}function ip(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const tc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,rp=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Wd(n,i,o):e==="style"?$d(n,t,i):Vs(e)?qa(e)||Jd(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sp(n,e,i,o))?(Jl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zl(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!_t(i))?Jl(n,ti(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Zl(n,e,i,o))};function sp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&tc(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return tc(e)&&_t(t)?!1:e in n}const op=["ctrl","shift","alt","meta"],ap={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>op.some(t=>n[`${t}Key`]&&!e.includes(t))},nc=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=ap[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},lp=Ut({patchProp:rp},Gd);let ic;function cp(){return ic||(ic=ld(lp))}const up=((...n)=>{const e=cp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=hp(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,fp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function fp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function hp(n){return _t(n)?document.querySelector(n):n}const dp="data:image/svg+xml,%3csvg%20width='25'%20height='50'%20viewBox='0%200%2025%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.15'%20d='M24.24%200H12.34L11.12%201L0%2049L0.76%2050H12.66L13.88%2049L25%201L24.24%200Z'%20fill='%23FECB66'/%3e%3cpath%20d='M24.01%201L12.9%2049H0.99L12.1%201H24M24.24%200H12.34L11.12%201L0%2049L0.76%2050H12.66L13.88%2049L25%201L24.24%200ZM9.52%2025L11.8%2028L15.47%2025L13.19%2022L9.52%2025ZM12.04%2027L10.52%2025L12.97%2023L14.49%2025L12.04%2027ZM12.86%202L2.22%2048H12.14L22.78%202H12.86ZM11.34%2030L7.54%2025L13.66%2020L17.46%2025L11.34%2030Z'%20fill='%23FECB66'/%3e%3c/svg%3e",pp={id:"commanderInfo"},mp={class:"level"},gp={class:"rankBlock"},_p={class:"rank"},vp={__name:"Commander_Info",props:{level:String,name:String},setup(n){return(e,t)=>(Jt(),cn("div",pp,[et("span",mp,sn(n.level),1),t[0]||(t[0]=et("span",{class:"badge"},[et("img",{src:dp,alt:""})],-1)),et("div",gp,[et("span",{class:ur(["name",{shortName:(n.name||"").length>15}])},sn(n.name),3),et("span",_p,"rank "+sn(n.level)+" legendary commander",1)])]))}},xp={class:"ico"},Mp=["src"],Sp={__name:"Resource",props:{count:{type:Number,default:0},ico:String,type:{type:String,default:"gold"},isNew:{type:Boolean,default:!1},mod:{type:String,default:"K"}},setup(n){return(e,t)=>(Jt(),cn("span",{class:ur([n.type,{new:n.isNew}])},[tf(sn(n.count)+" "+sn(n.mod)+" ",1),et("span",xp,[et("img",{src:n.ico,alt:""},null,8,Mp)])],2))}},Ep={class:"playerBlock"},yp={class:"avatar"},Tp=["src"],bp={class:"nickname"},Ap={__name:"Player_info",props:{avatarUrl:String,nickname:{type:String,default:"Player"}},setup(n){return(e,t)=>(Jt(),cn("div",Ep,[et("div",yp,[et("img",{src:n.avatarUrl,alt:""},null,8,Tp)]),et("div",bp,sn(n.nickname),1)]))}},Rp={id:"PlayerInfo"},wp={__name:"Resources_field",setup(n){const e=[{type:"gold",count:250,ico:"/src/assets/commander/icon/currency_gold_c.svg"},{type:"credits",count:431.2,ico:"/src/assets/commander/icon/currency_credits_c.svg"},{type:"freeXp",count:250,ico:"/src/assets/commander/icon/currency_freeXP_c.svg",isNew:!0},{type:"steel",count:50,ico:"/src/assets/commander/icon/steel_c.svg"},{type:"premium",count:359,mod:"DAYS",ico:"/src/assets/commander/icon/premium_c.svg"},{type:"lootBox",count:0,isNew:!0,mod:"",ico:"/src/assets/commander/icon/lootbox_c.svg"}];return(t,i)=>(Jt(),cn("div",Rp,[(Jt(),cn(Bt,null,Ko(e,(r,s)=>Dt(Sp,{key:r.type,type:r.type,count:r.count,ico:r.ico,"is-new":r.isNew,mod:r.mod},null,8,["type","count","ico","is-new","mod"])),64)),i[0]||(i[0]=et("span",{class:"separator"},null,-1)),Dt(Ap,{nickname:"test_ivcy",avatarUrl:"/src/assets/commander/player/avatar.png"})]))}},Cp="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26%2010.94L27.91%2012.57L27.22%2014.16C27.22%2014.16%2027.04%2014.16%2026.71%2014.16C26.18%2014.16%2025.55%2014.15%2024.66%2014.09L24.42%2014.69L25.26%2017.26L24.73%2018.26L24.14%2018.22L24.12%2018.44L23.88%2020.63L23.84%2020.8L23.02%2023.36L22.15%2024.05L19.99%2023.93L16.72%2031.01H15.16L3%207.64L5.08%204.83L26.13%202L29%204.44L26%2010.94Z'%20fill='%2308567C'/%3e%3cpath%20d='M23.6001%2015.37L24.2001%2017.26L23.1801%2017.59L23.1101%2018.33L22.8401%2020.51L21.9301%2023.02L19.4201%2022.88L15.9701%2021.83C15.0601%2021.55%2014.3101%2020.92%2013.9201%2020.09L13.5101%2019.24L13.4001%2020.52L13.6301%2021.02C14.0401%2021.89%2014.8101%2022.56%2015.7601%2022.86L18.1501%2025.06L15.8801%2029.84L11.0701%2020.82L11.1001%2018.92L10.3101%2018.41L8.85006%2013.88L9.74006%2013.61L13.3001%2012.58L16.6501%2012.61C16.6501%2012.61%2019.8901%2015.03%2023.6001%2015.38V15.37ZM24.7501%2011.45L16.8901%2011.47C21.0301%2013.57%2027.1901%2013.36%2027.1901%2013.36L24.7501%2011.45ZM25.1801%209.22998L24.7301%208.94998L25.1101%206.63998L27.1601%204.90998L26.8001%204.33998C17.2401%203.40998%205.52006%206.60998%205.52006%206.60998L4.81006%207.19998L7.29006%208.86998L8.52006%2012.65L13.3801%2011.46H16.8801L25.1501%209.81998L25.1701%209.22998H25.1801Z'%20fill='%2327CDF6'/%3e%3c/svg%3e",Pp="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26%2010.94L27.91%2012.57L27.22%2014.16C27.22%2014.16%2027.04%2014.16%2026.71%2014.16C26.18%2014.16%2025.55%2014.15%2024.66%2014.09L24.42%2014.69L25.26%2017.26L24.73%2018.26L24.14%2018.22L24.12%2018.44L23.88%2020.63L23.84%2020.8L23.02%2023.36L22.15%2024.05L19.99%2023.93L16.72%2031.01H15.16L3%207.65001L5.08%204.84001L26.13%202.01001L29%204.45001L26%2010.95V10.94Z'%20fill='%2355555E'/%3e%3cpath%20d='M23.6001%2015.37L24.2001%2017.26L23.1801%2017.59L23.1101%2018.33L22.8401%2020.51L21.9301%2023.02L19.4201%2022.88L15.9701%2021.83C15.0601%2021.55%2014.3101%2020.92%2013.9201%2020.09L13.5101%2019.24L13.4001%2020.52L13.6301%2021.02C14.0401%2021.89%2014.8101%2022.56%2015.7601%2022.86L18.1501%2025.06L15.8801%2029.84L11.0701%2020.82L11.1001%2018.92L10.3101%2018.41L8.85006%2013.88L9.74006%2013.61L13.3001%2012.58L16.6501%2012.61C16.6501%2012.61%2019.8901%2015.03%2023.6001%2015.38V15.37ZM24.7501%2011.45L16.8901%2011.47C21.0301%2013.57%2027.1901%2013.36%2027.1901%2013.36L24.7501%2011.45ZM25.1801%209.23004L24.7301%208.95004L25.1101%206.64004L27.1601%204.91004L26.8001%204.34004C17.2401%203.41004%205.52006%206.61004%205.52006%206.61004L4.81006%207.20004L7.29006%208.87004L8.52006%2012.65L13.3801%2011.46H16.8801L25.1501%209.82004L25.1701%209.23004H25.1801Z'%20fill='%23F1F1F1'/%3e%3c/svg%3e",Lp={__name:"Portrait",props:{portraitUrl:String,isActive:{type:Boolean,default:!1}},setup(n){return(e,t)=>(Jt(),cn("div",{class:ur(["portrait",{active:n.isActive}]),style:Vr({"--portraitMini":n.portraitUrl})},[...t[0]||(t[0]=[et("span",{class:"image"},null,-1)])],6))}},An=[{level:"16",name:"Henk pröpper",portraitMini:"url('/src/assets/commander/mini-portrait/HenkPropper_mini.png')",portraitBig:"url(/src/assets/commander/full-portrait/HenkPropper.png)",description:"A Lieutenant Admiral of the Royal Netherlands Navy who served as Chairman of the United Defence Staff from 1959 to 1962. "},{level:"13",name:"Greg the Garlic Farmer",portraitMini:"url('/src/assets/commander/mini-portrait/Farmer_mini.png')",portraitBig:"url(/src/assets/commander/full-portrait/Farmer.png)",description:"A legendary shopkeeper and a staple of the Honeywood community. Although he is but a humble garlic farmer, sometimes he ventures out into the world just like his late Grandfather did."},{level:"80",name:"High Sorcerer Baradun",portraitMini:"url('/src/assets/commander/mini-portrait/Baradun_mini.png')",portraitBig:"url(/src/assets/commander/full-portrait/Baradun.png)",description:"According to Greg the Garlic Farmer, he's great, super powerful, and defeated a bunch of orks and even a dragon! Also, Baradun doesn't forego any chances to point out how humble he is. Lovely character, all in all! "},{level:"26",name:"Bodger the Blacksmith",portraitMini:"url('/src/assets/commander/mini-portrait/Blacksmith_mini.png')",portraitBig:"url(/src/assets/commander/full-portrait/Blacksmith.png)",description:"Once just a blacksmith, he was later promoted to quest giver—and his quest is bigger than yours, alright? He’s often seen spending time with his best frenemy and neighbor Greg the Garlic Farmer, much to the dismay of the latter. "},{level:"99",name:"Zeus",portraitMini:"url('/src/assets/commander/mini-portrait/Zeus_mini.png')",portraitBig:"url(/src/assets/commander/full-portrait/Zeus.png)",description:"Olympus—Zeus! His formidable power and commanding presence will help you crush your foes."},{level:"99",name:"Poseidon",portraitMini:"url('/src/assets/commander/mini-portrait/Poseidon_mini.png')",portraitBig:"url(/src/assets/commander/full-portrait/Poseidon.png)",description:"Poseidon, terror of the seas! There is no better commander than the god of the oceans himself. They say Poseidon's kiss can sink even the most invincible ship."},{level:"99",name:"Athena",portraitMini:"url('/src/assets/commander/mini-portrait/Athena_mini.png')",portraitBig:"url(/src/assets/commander/full-portrait/Athena.png)",description:"The Athena Commander guise is available in the Store for Drachmas. She'll guide you toward victory with her strategic brilliance and spirit of leadership. "},{level:"18",name:"Alexander Gromov",portraitMini:"url('/src/assets/commander/mini-portrait/AlexanderGromov_mini.png')",portraitBig:"url(/src/assets/commander/full-portrait/AlexanderGromov.png)",description:"A former chief of security for government officials, Gromov now operates as a mercenary in the neon-lit chaos of New York 2125"},{level:"15",name:"Angela Lutti",portraitMini:"url('/src/assets/commander/mini-portrait/AngelaLutti_mini.png')",portraitBig:"url(/src/assets/commander/full-portrait/AngelaLutti.png)",description:"A special auditor for Legend INC, based in New York 2125. Her audits often lead to financial ruin, earning her both fear and admiration. Angela Lutti is a Commander guise available for Cybercents."}],Dp={class:"scrollBlock"},Ip={class:"commanderTextBlock"},Up={class:"inStock"},Np={class:"block"},Fp={class:"description"},Op={class:"text"},Bp=30,Hp={__name:"Commander_Description",emits:["update"],setup(n,{emit:e}){var t=0;const i=pn(null),r=pn(0),s=pn(0),o=pn(0),a=pn(null),l=pn(null);let c=0,u=!1;const f=e;function d(b,I,y){return Math.max(I,Math.min(y,b))}function p(b){w(b)}function v(){f("update",{name:An[r.value].name,level:An[r.value].level})}function E(){const b=i.value,I=b.children[r.value];if(!b||!I)return;const y=b.getBoundingClientRect(),T=I.getBoundingClientRect();c=T.top-y.top+T.height/2}function m(){const b=i.value,I=b.children[r.value];if(!b||!I)return;const T=I.offsetTop+I.offsetHeight/2-c,L=b.scrollHeight-b.clientHeight;b.scrollTo({top:d(T,0,Math.max(0,L)),behavior:"smooth"}),v()}function h(b){if(u)return;const I=b.deltaY>0?1:-1,y=d(r.value+I,0,An.length-1);y!==r.value&&(w(y),u=!0,setTimeout(()=>{u=!1},500))}function C(b){const I=b.touches?.[0];I&&(s.value=I.clientY,o.value=0)}function R(b){const I=b.touches?.[0];I&&(o.value=I.clientY-s.value)}function S(){if(u.value)return;const b=o.value;if(Math.abs(b)>=Bp){const I=b<0?1:-1,y=d(r.value+I,0,An.length-1);if(y===r.value)return;if(y!==r.value){w(y);return}}w(r.value)}function w(b){t=b,l.value.classList.add("fadeOut")}function P(b){b.animationName==="fadeOut"&&(l.value.classList.add("fadeIn"),l.value.classList.remove("fadeOut"),r.value=t,Ru(()=>m())),b.animationName==="fadeIn"&&l.value.classList.remove("fadeIn")}return sl(()=>{"scrollRestoration"in history&&(history.scrollRestoration="manual"),E(),v()}),(b,I)=>(Jt(),cn(Bt,null,[et("div",{id:"CommanderAvatar",ref_key:"avatar",ref:l,style:Vr({"--portraitBig":qi(An)[r.value].portraitBig}),onAnimationend:P},null,36),et("div",{id:"CommanderDescription",onWheel:nc(h,["prevent"]),onTouchstartPassive:C,onTouchmove:nc(R,["prevent"]),onTouchend:S},[et("div",Dp,[et("div",{class:"scrollContainer",ref_key:"scrollContainer",ref:i},[(Jt(!0),cn(Bt,null,Ko(qi(An),(y,T)=>(Jt(),Td(Lp,{key:T,"portrait-url":y.portraitMini,"is-active":T===r.value,onClick:L=>p(T)},null,8,["portrait-url","is-active","onClick"]))),128)),(Jt(),cn(Bt,null,Ko(7,y=>et("div",{key:"bottom-"+y,class:"spacer"})),64))],512)]),et("div",Ip,[et("div",Up,[et("span",Np,sn(r.value+1)+"/"+sn(qi(An).length),1),I[0]||(I[0]=et("span",{class:"text"},"In stock",-1))]),et("div",Fp,[et("div",{class:"commanderDescriptionBlock",ref_key:"commanderDescriptionBlock",ref:a},[et("h1",null,sn(qi(An)[r.value].name),1),et("p",Op,sn(qi(An)[r.value].description),1)],512),I[1]||(I[1]=Rd('<div class="type">Types of guises</div><div class="textBlock"><p> You can select a guise that applies a bonus to battle earnings, changes your Commander&#39;s appearance, and/or applies special effects. </p><div class="guises"><div class="national"><div class="div1"><img src="'+Cp+'" alt=""></div><div class="div2"><h2>National guise</h2></div><div class="div3"><p>Guise can only be applied to Commanders from specific nations.</p></div></div><div class="general"><div class="div1"><img src="'+Pp+'" alt=""></div><div class="div2"><h2>General guise</h2></div><div class="div3"><p>Guise can only be applied to all Commanders</p></div></div></div></div>',2))])])],32)],64))}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="180",zp=0,rc=1,Vp=2,of=1,Gp=2,Dn=3,ii=0,Ht=1,Nn=2,Qn=0,er=1,sc=2,oc=3,ac=4,kp=5,xi=100,Wp=101,Xp=102,qp=103,Yp=104,$p=200,Kp=201,jp=202,Zp=203,na=204,ia=205,Jp=206,Qp=207,em=208,tm=209,nm=210,im=211,rm=212,sm=213,om=214,ra=0,sa=1,oa=2,rr=3,aa=4,la=5,ca=6,ua=7,hl=0,am=1,lm=2,ei=0,cm=1,um=2,fm=3,hm=4,dm=5,pm=6,mm=7,af=300,sr=301,or=302,fa=303,ha=304,js=306,da=1e3,Si=1001,pa=1002,un=1003,gm=1004,ts=1005,vn=1006,fo=1007,Ei=1008,zn=1009,lf=1010,cf=1011,Nr=1012,dl=1013,bi=1014,Fn=1015,Wr=1016,pl=1017,ml=1018,Fr=1020,uf=35902,ff=35899,hf=1021,df=1022,on=1023,Or=1026,Br=1027,pf=1028,gl=1029,mf=1030,_l=1031,vl=1033,Rs=33776,ws=33777,Cs=33778,Ps=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,Ma=37492,Sa=37496,Ea=37808,ya=37809,Ta=37810,ba=37811,Aa=37812,Ra=37813,wa=37814,Ca=37815,Pa=37816,La=37817,Da=37818,Ia=37819,Ua=37820,Na=37821,Fa=36492,Oa=36494,Ba=36495,Ha=36283,za=36284,Va=36285,Ga=36286,_m=3200,vm=3201,gf=0,xm=1,Zn="",jt="srgb",ar="srgb-linear",Hs="linear",rt="srgb",Li=7680,lc=519,Mm=512,Sm=513,Em=514,_f=515,ym=516,Tm=517,bm=518,Am=519,cc=35044,uc="300 es",xn=2e3,zs=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ho=Math.PI/180,ka=180/Math.PI;function Xr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function Rm(n,e){return(n%e+e)%e}function po(n,e,t){return(1-t)*n+t*e}function gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],E=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=E;return}if(f!==E||l!==d||c!==p||u!==v){let m=1-a;const h=l*d+c*p+u*v+f*E,C=h>=0?1:-1,R=1-h*h;if(R>Number.EPSILON){const w=Math.sqrt(R),P=Math.atan2(w,h*C);m=Math.sin(m*P)/w,a=Math.sin(a*P)/w}const S=a*C;if(l=l*m+d*S,c=c*m+p*S,u=u*m+v*S,f=f*m+E*S,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*p-c*d,e[t+1]=l*v+u*d+c*f-a*p,e[t+2]=c*v+u*p+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new W,fc=new qr;class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],E=r[0],m=r[3],h=r[6],C=r[1],R=r[4],S=r[7],w=r[2],P=r[5],b=r[8];return s[0]=o*E+a*C+l*w,s[3]=o*m+a*R+l*P,s[6]=o*h+a*S+l*b,s[1]=c*E+u*C+f*w,s[4]=c*m+u*R+f*P,s[7]=c*h+u*S+f*b,s[2]=d*E+p*C+v*w,s[5]=d*m+p*R+v*P,s[8]=d*h+p*S+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=t*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=f*E,e[1]=(r*c-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=d*E,e[4]=(u*t-r*l)*E,e[5]=(r*s-a*t)*E,e[6]=p*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Ve;function vf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wm(){const n=Hr("canvas");return n.style.display="block",n}const hc={};function zr(n){n in hc||(hc[n]=!0,console.warn(n))}function Cm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const dc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pm(){const n={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=On(r.r),r.g=On(r.g),r.b=On(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?Hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ar]:{primaries:e,whitePoint:i,transfer:Hs,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}const je=Pm();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Di;class Lm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Di===void 0&&(Di=Hr("canvas")),Di.width=e.width,Di.height=e.height;const r=Di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Di}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=On(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(On(t[i]/255)*255):t[i]=On(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dm=0;class xl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_o(r[o].image)):s.push(_o(r[o]))}else s=_o(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Im=0;const vo=new W;class It extends fr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Si,r=Si,s=vn,o=Ei,a=on,l=zn,c=It.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Xr(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=af;It.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],E=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-E)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+E)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(p+1)/2,w=(h+1)/2,P=(u+d)/4,b=(f+E)/4,I=(v+m)/4;return R>S&&R>w?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=P/i,s=b/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=I/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=I/s),this.set(i,r,s,t),this}let C=Math.sqrt((m-v)*(m-v)+(f-E)*(f-E)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(m-v)/C,this.y=(f-E)/C,this.z=(d-u)/C,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Um extends fr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new It(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new xl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Um{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xf extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nm extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ns.copy(i.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),is.subVectors(this.max,_r),Ii.subVectors(e.a,_r),Ui.subVectors(e.b,_r),Ni.subVectors(e.c,_r),Gn.subVectors(Ui,Ii),kn.subVectors(Ni,Ui),ui.subVectors(Ii,Ni);let t=[0,-Gn.z,Gn.y,0,-kn.z,kn.y,0,-ui.z,ui.y,Gn.z,0,-Gn.x,kn.z,0,-kn.x,ui.z,0,-ui.x,-Gn.y,Gn.x,0,-kn.y,kn.x,0,-ui.y,ui.x,0];return!xo(t,Ii,Ui,Ni,is)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,Ii,Ui,Ni,is))?!1:(rs.crossVectors(Gn,kn),t=[rs.x,rs.y,rs.z],xo(t,Ii,Ui,Ni,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new W,new W,new W,new W,new W,new W,new W,new W],en=new W,ns=new Yr,Ii=new W,Ui=new W,Ni=new W,Gn=new W,kn=new W,ui=new W,_r=new W,is=new W,rs=new W,fi=new W;function xo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fi.fromArray(n,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=i.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fm=new Yr,vr=new W,Mo=new W;class Ml{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Mo)),this.expandByPoint(vr.copy(e.center).sub(Mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new W,So=new W,ss=new W,Wn=new W,Eo=new W,os=new W,yo=new W;class Om{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){So.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(So);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ss),a=Wn.dot(this.direction),l=-Wn.dot(ss),c=Wn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const E=1/u;f*=E,d*=E,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(So).addScaledVector(ss,d),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,r,s){Eo.subVectors(t,e),os.subVectors(i,e),yo.crossVectors(Eo,os);let o=this.direction.dot(yo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot(os.crossVectors(Wn,os));if(l<0)return null;const c=a*this.direction.dot(Eo.cross(Wn));if(c<0||l+c>o)return null;const u=-a*Wn.dot(yo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,v,E,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,v,E,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,v,E,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=E,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),o=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,v=a*u,E=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=d-E*c,t[9]=-a*l,t[2]=E-d*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,E=c*f;t[0]=d+E*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=E+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,E=c*f;t[0]=d-E*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=E-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,v=a*u,E=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+E,t[1]=l*f,t[5]=E*c+d,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,E=a*c;t[0]=l*u,t[4]=E-d*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=d-E*f}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,E=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+E,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=E*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bm,e,Hm)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Xn.crossVectors(i,kt),Xn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Xn.crossVectors(i,kt)),Xn.normalize(),as.crossVectors(kt,Xn),r[0]=Xn.x,r[4]=as.x,r[8]=kt.x,r[1]=Xn.y,r[5]=as.y,r[9]=kt.y,r[2]=Xn.z,r[6]=as.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],E=i[6],m=i[10],h=i[14],C=i[3],R=i[7],S=i[11],w=i[15],P=r[0],b=r[4],I=r[8],y=r[12],T=r[1],L=r[5],k=r[9],j=r[13],re=r[2],te=r[6],Z=r[10],Q=r[14],B=r[3],he=r[7],xe=r[11],Re=r[15];return s[0]=o*P+a*T+l*re+c*B,s[4]=o*b+a*L+l*te+c*he,s[8]=o*I+a*k+l*Z+c*xe,s[12]=o*y+a*j+l*Q+c*Re,s[1]=u*P+f*T+d*re+p*B,s[5]=u*b+f*L+d*te+p*he,s[9]=u*I+f*k+d*Z+p*xe,s[13]=u*y+f*j+d*Q+p*Re,s[2]=v*P+E*T+m*re+h*B,s[6]=v*b+E*L+m*te+h*he,s[10]=v*I+E*k+m*Z+h*xe,s[14]=v*y+E*j+m*Q+h*Re,s[3]=C*P+R*T+S*re+w*B,s[7]=C*b+R*L+S*te+w*he,s[11]=C*I+R*k+S*Z+w*xe,s[15]=C*y+R*j+S*Q+w*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],E=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+E*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],E=e[13],m=e[14],h=e[15],C=f*m*c-E*d*c+E*l*p-a*m*p-f*l*h+a*d*h,R=v*d*c-u*m*c-v*l*p+o*m*p+u*l*h-o*d*h,S=u*E*c-v*f*c+v*a*p-o*E*p-u*a*h+o*f*h,w=v*f*l-u*E*l-v*a*d+o*E*d+u*a*m-o*f*m,P=t*C+i*R+r*S+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/P;return e[0]=C*b,e[1]=(E*d*s-f*m*s-E*r*p+i*m*p+f*r*h-i*d*h)*b,e[2]=(a*m*s-E*l*s+E*r*c-i*m*c-a*r*h+i*l*h)*b,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*b,e[4]=R*b,e[5]=(u*m*s-v*d*s+v*r*p-t*m*p-u*r*h+t*d*h)*b,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*h-t*l*h)*b,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*b,e[8]=S*b,e[9]=(v*f*s-u*E*s-v*i*p+t*E*p+u*i*h-t*f*h)*b,e[10]=(o*E*s-v*a*s+v*i*c-t*E*c-o*i*h+t*a*h)*b,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*b,e[12]=w*b,e[13]=(u*E*r-v*f*r+v*i*d-t*E*d-u*i*m+t*f*m)*b,e[14]=(v*a*r-o*E*r-v*i*l+t*E*l+o*i*m-t*a*m)*b,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,v=s*f,E=o*u,m=o*f,h=a*f,C=l*c,R=l*u,S=l*f,w=i.x,P=i.y,b=i.z;return r[0]=(1-(E+h))*w,r[1]=(p+S)*w,r[2]=(v-R)*w,r[3]=0,r[4]=(p-S)*P,r[5]=(1-(d+h))*P,r[6]=(m+C)*P,r[7]=0,r[8]=(v+R)*b,r[9]=(m-C)*b,r[10]=(1-(d+E))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fi.set(r[0],r[1],r[2]).length();const o=Fi.set(r[4],r[5],r[6]).length(),a=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/s,u=1/o,f=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=xn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let v,E;if(l)v=s/(o-s),E=o*s/(o-s);else if(a===xn)v=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===zs)v=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=xn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,E;if(l)v=1/(o-s),E=o/(o-s);else if(a===xn)v=-2/(o-s),E=-(o+s)/(o-s);else if(a===zs)v=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fi=new W,tn=new vt,Bm=new W(0,0,0),Hm=new W(1,1,1),Xn=new W,as=new W,kt=new W,mc=new vt,gc=new qr;class yn{constructor(e=0,t=0,i=0,r=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zm=0;const _c=new W,Oi=new qr,Cn=new vt,ls=new W,xr=new W,Vm=new W,Gm=new qr,vc=new W(1,0,0),xc=new W(0,1,0),Mc=new W(0,0,1),Sc={type:"added"},km={type:"removed"},Bi={type:"childadded",child:null},To={type:"childremoved",child:null};class zt extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new W,t=new yn,i=new qr,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(xc,e)}rotateZ(e){return this.rotateOnAxis(Mc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(xc,e)}translateZ(e){return this.translateOnAxis(Mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ls.copy(e):ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(xr,ls,this.up):Cn.lookAt(ls,xr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),To.child=e,this.dispatchEvent(To),To.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new W(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new W,Pn=new W,bo=new W,Ln=new W,Hi=new W,zi=new W,Ec=new W,Ao=new W,Ro=new W,wo=new W,Co=new mt,Po=new mt,Lo=new mt;class rn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),Pn.subVectors(i,t),bo.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(Pn),l=nn.dot(bo),c=Pn.dot(Pn),u=Pn.dot(bo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Co.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Co.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,i),Lo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Co,s.x),o.addScaledVector(Po,s.y),o.addScaledVector(Lo,s.z),o}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),Pn.subVectors(e,t),nn.cross(Pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),nn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Hi.subVectors(r,i),zi.subVectors(s,i),Ao.subVectors(e,i);const l=Hi.dot(Ao),c=zi.dot(Ao);if(l<=0&&c<=0)return t.copy(i);Ro.subVectors(e,r);const u=Hi.dot(Ro),f=zi.dot(Ro);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Hi,o);wo.subVectors(e,s);const p=Hi.dot(wo),v=zi.dot(wo);if(v>=0&&p<=v)return t.copy(s);const E=p*c-l*v;if(E<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(zi,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return Ec.subVectors(s,r),a=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(Ec,a);const h=1/(m+E+d);return o=E*h,a=d*h,t.copy(i).addScaledVector(Hi,o).addScaledVector(zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function Do(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Rm(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Do(o,s,e+1/3),this.g=Do(o,s,e),this.b=Do(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=Sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return je.workingToColorSpace(Tt.copy(this),e),Math.round(qe(Tt.r*255,0,255))*65536+Math.round(qe(Tt.g*255,0,255))*256+Math.round(qe(Tt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=jt){je.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(cs);const i=po(qn.h,cs.h,t),r=po(qn.s,cs.s,t),s=po(qn.l,cs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ye;Ye.NAMES=Sf;let Wm=0;class $r extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=er,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==na&&(i.blendSrc=this.blendSrc),this.blendDst!==ia&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ef extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new W,us=new nt;let Xm=0;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cc&&(e.usage=this.usage),e}}class yf extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tf extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ti extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qm=0;const Kt=new vt,Io=new zt,Vi=new W,Wt=new Yr,Mr=new Yr,St=new W;class wi extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?Tf:yf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ti(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Wt.min,Mr.min),Wt.expandByPoint(St),St.addVectors(Wt.max,Mr.max),Wt.expandByPoint(St)):(Wt.expandByPoint(Mr.min),Wt.expandByPoint(Mr.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(e,c),St.add(Vi)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new W,l[I]=new W;const c=new W,u=new W,f=new W,d=new nt,p=new nt,v=new nt,E=new W,m=new W;function h(I,y,T){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,y),v.fromBufferAttribute(s,T),u.sub(c),f.sub(c),p.sub(d),v.sub(d);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(E.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(L),a[I].add(E),a[y].add(E),a[T].add(E),l[I].add(m),l[y].add(m),l[T].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let I=0,y=C.length;I<y;++I){const T=C[I],L=T.start,k=T.count;for(let j=L,re=L+k;j<re;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const R=new W,S=new W,w=new W,P=new W;function b(I){w.fromBufferAttribute(r,I),P.copy(w);const y=a[I];R.copy(y),R.sub(w.multiplyScalar(w.dot(y))).normalize(),S.crossVectors(P,y);const L=S.dot(l[I])<0?-1:1;o.setXYZW(I,R.x,R.y,R.z,L)}for(let I=0,y=C.length;I<y;++I){const T=C[I],L=T.start,k=T.count;for(let j=L,re=L+k;j<re;j+=3)b(e.getX(j+0)),b(e.getX(j+1)),b(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),E=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new Sn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new vt,hi=new Om,fs=new Ml,Tc=new W,hs=new W,ds=new W,ps=new W,Uo=new W,ms=new W,bc=new W,gs=new W;class an extends zt{constructor(e=new wi,t=new Ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Uo.fromBufferAttribute(f,e),o?ms.addScaledVector(Uo,u):ms.addScaledVector(Uo.sub(t),u))}t.add(ms)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere),fs.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(fs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(fs,Tc)===null||hi.origin.distanceToSquared(Tc)>(e.far-e.near)**2))&&(yc.copy(s).invert(),hi.copy(e.ray).applyMatrix4(yc),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,E=d.length;v<E;v++){const m=d[v],h=o[m.materialIndex],C=Math.max(m.start,p.start),R=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,w=R;S<w;S+=3){const P=a.getX(S),b=a.getX(S+1),I=a.getX(S+2);r=_s(this,h,e,i,c,u,f,P,b,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=v,h=E;m<h;m+=3){const C=a.getX(m),R=a.getX(m+1),S=a.getX(m+2);r=_s(this,o,e,i,c,u,f,C,R,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,E=d.length;v<E;v++){const m=d[v],h=o[m.materialIndex],C=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,w=R;S<w;S+=3){const P=S,b=S+1,I=S+2;r=_s(this,h,e,i,c,u,f,P,b,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=v,h=E;m<h;m+=3){const C=m,R=m+1,S=m+2;r=_s(this,o,e,i,c,u,f,C,R,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ym(n,e,t,i,r,s,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ii,a),l===null)return null;gs.copy(a),gs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(gs);return c<t.near||c>t.far?null:{distance:c,point:gs.clone(),object:n}}function _s(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,hs),n.getVertexPosition(l,ds),n.getVertexPosition(c,ps);const u=Ym(n,e,t,i,hs,ds,ps,bc);if(u){const f=new W;rn.getBarycoord(bc,hs,ds,ps,f),r&&(u.uv=rn.getInterpolatedAttribute(r,a,l,c,f,new nt)),s&&(u.uv1=rn.getInterpolatedAttribute(s,a,l,c,f,new nt)),o&&(u.normal=rn.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};rn.getNormal(hs,ds,ps,d.normal),u.face=d,u.barycoord=f}return u}class Kr extends wi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(f,2));function v(E,m,h,C,R,S,w,P,b,I,y){const T=S/b,L=w/I,k=S/2,j=w/2,re=P/2,te=b+1,Z=I+1;let Q=0,B=0;const he=new W;for(let xe=0;xe<Z;xe++){const Re=xe*L-j;for(let Ne=0;Ne<te;Ne++){const tt=Ne*T-k;he[E]=tt*C,he[m]=Re*R,he[h]=re,c.push(he.x,he.y,he.z),he[E]=0,he[m]=0,he[h]=P>0?1:-1,u.push(he.x,he.y,he.z),f.push(Ne/b),f.push(1-xe/I),Q+=1}}for(let xe=0;xe<I;xe++)for(let Re=0;Re<b;Re++){const Ne=d+Re+te*xe,tt=d+Re+te*(xe+1),ot=d+(Re+1)+te*(xe+1),$e=d+(Re+1)+te*xe;l.push(Ne,tt,$e),l.push(tt,ot,$e),B+=6}a.addGroup(p,B,y),p+=B,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const r in i)e[r]=i[r]}return e}function $m(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Km={clone:lr,merge:Ct};var jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=$m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Af extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new W,Ac=new nt,Rc=new nt;class Zt extends Af{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Ac,Rc),t.subVectors(Rc,Ac)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,ki=1;class Jm extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Gi,ki,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Gi,ki,e,t);s.layers=this.layers,this.add(s);const o=new Zt(Gi,ki,e,t);o.layers=this.layers,this.add(o);const a=new Zt(Gi,ki,e,t);a.layers=this.layers,this.add(a);const l=new Zt(Gi,ki,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Gi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Rf extends It{constructor(e=[],t=sr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qm extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kr(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Qn});s.uniforms.tEquirect.value=t;const o=new an(r,s),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=vn),new Jm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class vs extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const m=t.getJointPose(E,i),h=this._getHandJoint(c,E);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class tg extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fo=new W,ng=new W,ig=new Ve;class _i{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fo.subVectors(i,t).cross(ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ig.getNormalMatrix(e),r=this.coplanarPoint(Fo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ml,rg=new nt(.5,.5),xs=new W;class wf{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],v=s[8],E=s[9],m=s[10],h=s[11],C=s[12],R=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-o,p-u,h-v,w-C).normalize(),r[1].setComponents(c+o,p+u,h+v,w+C).normalize(),r[2].setComponents(c+a,p+f,h+E,w+R).normalize(),r[3].setComponents(c-a,p-f,h-E,w-R).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,p-d,h-m,w-S).normalize();else if(r[4].setComponents(c-l,p-d,h-m,w-S).normalize(),t===xn)r[5].setComponents(c+l,p+d,h+m,w+S).normalize();else if(t===zs)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=rg.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xs.x=r.normal.x>0?e.max.x:e.min.x,xs.y=r.normal.y>0?e.max.y:e.min.y,xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cf extends It{constructor(e,t,i=bi,r,s,o,a=un,l=un,c,u=Or,f=1){if(u!==Or&&u!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pf extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cr extends wi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],v=[],E=[],m=[];for(let h=0;h<u;h++){const C=h*d-o;for(let R=0;R<c;R++){const S=R*f-s;v.push(S,-C,0),E.push(0,0,1),m.push(R/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let C=0;C<a;C++){const R=C+c*h,S=C+c*(h+1),w=C+1+c*(h+1),P=C+1+c*h;p.push(R,S,P),p.push(S,w,P)}this.setIndex(p),this.setAttribute("position",new Ti(v,3)),this.setAttribute("normal",new Ti(E,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.widthSegments,e.heightSegments)}}class wc extends $r{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sg extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class og extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ag{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const lg=new ag;class Sl{constructor(e){this.manager=e!==void 0?e:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi=new WeakMap;class cg extends Sl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Oo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=Wi.get(o);f===void 0&&(f=[],Wi.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=Hr("img");function l(){u(),t&&t(this);const f=Wi.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onLoad&&p.onLoad(this)}Wi.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Oo.remove(`image:${e}`);const d=Wi.get(this)||[];for(let p=0;p<d.length;p++){const v=d[p];v.onError&&v.onError(f)}Wi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Oo.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Cc extends Sl{constructor(e){super(e)}load(e,t,i,r){const s=new It,o=new cg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ug extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fg extends Af{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hg extends ug{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dg extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pc(n,e,t,i){const r=mg(i);switch(t){case hf:return n*e;case pf:return n*e/r.components*r.byteLength;case gl:return n*e/r.components*r.byteLength;case mf:return n*e*2/r.components*r.byteLength;case _l:return n*e*2/r.components*r.byteLength;case df:return n*e*3/r.components*r.byteLength;case on:return n*e*4/r.components*r.byteLength;case vl:return n*e*4/r.components*r.byteLength;case Rs:case ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cs:case Ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ga:case va:return Math.max(n,16)*Math.max(e,8)/4;case ma:case _a:return Math.max(n,8)*Math.max(e,8)/2;case xa:case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ha:case za:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Va:case Ga:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mg(n){switch(n){case zn:case lf:return{byteLength:1,components:1};case Nr:case cf:case Wr:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case bi:case dl:case Fn:return{byteLength:4,components:1};case uf:case ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],E=f[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++d,f[d]=E)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const E=f[p];n.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var _g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
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
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
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
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zg=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gg=`vec3 transformedNormal = objectNormal;
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
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
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
}`,s_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l_=`uniform bool receiveShadow;
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
#endif`,c_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,m_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A_=`#if defined( USE_POINTS_UV )
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
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H_=`#ifdef USE_NORMALMAP
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
#endif`,z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,y0=`#if DEPTH_PACKING == 3200
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
}`,T0=`#define DISTANCE
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
}`,b0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,U0=`#define MATCAP
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
}`,N0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B0=`#define PHONG
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
}`,H0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,z0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,G0=`#define TOON
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
}`,k0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,W0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:_g,alphahash_pars_fragment:vg,alphamap_fragment:xg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:Eg,aomap_fragment:yg,aomap_pars_fragment:Tg,batching_pars_vertex:bg,batching_vertex:Ag,begin_vertex:Rg,beginnormal_vertex:wg,bsdfs:Cg,iridescence_fragment:Pg,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Ng,color_fragment:Fg,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:Hg,common:zg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:kg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:qg,colorspace_fragment:Yg,colorspace_pars_fragment:$g,envmap_fragment:Kg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Zg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:c_,envmap_vertex:Qg,fog_vertex:e_,fog_pars_vertex:t_,fog_fragment:n_,fog_pars_fragment:i_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:s_,lights_lambert_fragment:o_,lights_lambert_pars_fragment:a_,lights_pars_begin:l_,lights_toon_fragment:u_,lights_toon_pars_fragment:f_,lights_phong_fragment:h_,lights_phong_pars_fragment:d_,lights_physical_fragment:p_,lights_physical_pars_fragment:m_,lights_fragment_begin:g_,lights_fragment_maps:__,lights_fragment_end:v_,logdepthbuf_fragment:x_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:E_,map_fragment:y_,map_pars_fragment:T_,map_particle_fragment:b_,map_particle_pars_fragment:A_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:w_,morphinstance_vertex:C_,morphcolor_vertex:P_,morphnormal_vertex:L_,morphtarget_pars_vertex:D_,morphtarget_vertex:I_,normal_fragment_begin:U_,normal_fragment_maps:N_,normal_pars_fragment:F_,normal_pars_vertex:O_,normal_vertex:B_,normalmap_pars_fragment:H_,clearcoat_normal_fragment_begin:z_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:G_,iridescence_pars_fragment:k_,opaque_fragment:W_,packing:X_,premultiplied_alpha_fragment:q_,project_vertex:Y_,dithering_fragment:$_,dithering_pars_fragment:K_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:Q_,shadowmap_vertex:e0,shadowmask_pars_fragment:t0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:r0,skinnormal_vertex:s0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:u0,transmission_pars_fragment:f0,uv_pars_fragment:h0,uv_pars_vertex:d0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:M0,cube_frag:S0,depth_vert:E0,depth_frag:y0,distanceRGBA_vert:T0,distanceRGBA_frag:b0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:w0,linedashed_frag:C0,meshbasic_vert:P0,meshbasic_frag:L0,meshlambert_vert:D0,meshlambert_frag:I0,meshmatcap_vert:U0,meshmatcap_frag:N0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:H0,meshphysical_vert:z0,meshphysical_frag:V0,meshtoon_vert:G0,meshtoon_frag:k0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:$0,sprite_frag:K0},me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},gn={basic:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ct([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ct([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ct([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ct([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ct([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ct([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ct([me.common,me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ct([me.lights,me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};gn.physical={uniforms:Ct([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ms={r:0,b:0,g:0},pi=new yn,j0=new vt;function Z0(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function v(R){let S=R.isScene===!0?R.background:null;return S&&S.isTexture&&(S=(R.backgroundBlurriness>0?t:e).get(S)),S}function E(R){let S=!1;const w=v(R);w===null?h(a,l):w&&w.isColor&&(h(w,1),S=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,S){const w=v(S);w&&(w.isCubeTexture||w.mapping===js)?(u===void 0&&(u=new an(new Kr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:lr(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pi.copy(S.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(pi)),u.material.toneMapped=je.getTransfer(w.colorSpace)!==rt,(f!==w||d!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,p=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new an(new cr(2,2),new ri({name:"BackgroundMaterial",uniforms:lr(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=je.getTransfer(w.colorSpace)!==rt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,p=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function h(R,S){R.getRGB(Ms,bf(n)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,S,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,S=1){a.set(R),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,h(a,l)},render:E,addToRenderList:m,dispose:C}}function J0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(T,L,k,j,re){let te=!1;const Z=f(j,k,L);s!==Z&&(s=Z,c(s.object)),te=p(T,j,k,re),te&&v(T,j,k,re),re!==null&&e.update(re,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,S(T,L,k,j),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,L,k){const j=k.wireframe===!0;let re=i[T.id];re===void 0&&(re={},i[T.id]=re);let te=re[L.id];te===void 0&&(te={},re[L.id]=te);let Z=te[j];return Z===void 0&&(Z=d(l()),te[j]=Z),Z}function d(T){const L=[],k=[],j=[];for(let re=0;re<t;re++)L[re]=0,k[re]=0,j[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:j,object:T,attributes:{},index:null}}function p(T,L,k,j){const re=s.attributes,te=L.attributes;let Z=0;const Q=k.getAttributes();for(const B in Q)if(Q[B].location>=0){const xe=re[B];let Re=te[B];if(Re===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(Re=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(Re=T.instanceColor)),xe===void 0||xe.attribute!==Re||Re&&xe.data!==Re.data)return!0;Z++}return s.attributesNum!==Z||s.index!==j}function v(T,L,k,j){const re={},te=L.attributes;let Z=0;const Q=k.getAttributes();for(const B in Q)if(Q[B].location>=0){let xe=te[B];xe===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(xe=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(xe=T.instanceColor));const Re={};Re.attribute=xe,xe&&xe.data&&(Re.data=xe.data),re[B]=Re,Z++}s.attributes=re,s.attributesNum=Z,s.index=j}function E(){const T=s.newAttributes;for(let L=0,k=T.length;L<k;L++)T[L]=0}function m(T){h(T,0)}function h(T,L){const k=s.newAttributes,j=s.enabledAttributes,re=s.attributeDivisors;k[T]=1,j[T]===0&&(n.enableVertexAttribArray(T),j[T]=1),re[T]!==L&&(n.vertexAttribDivisor(T,L),re[T]=L)}function C(){const T=s.newAttributes,L=s.enabledAttributes;for(let k=0,j=L.length;k<j;k++)L[k]!==T[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function R(T,L,k,j,re,te,Z){Z===!0?n.vertexAttribIPointer(T,L,k,re,te):n.vertexAttribPointer(T,L,k,j,re,te)}function S(T,L,k,j){E();const re=j.attributes,te=k.getAttributes(),Z=L.defaultAttributeValues;for(const Q in te){const B=te[Q];if(B.location>=0){let he=re[Q];if(he===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(he=T.instanceColor)),he!==void 0){const xe=he.normalized,Re=he.itemSize,Ne=e.get(he);if(Ne===void 0)continue;const tt=Ne.buffer,ot=Ne.type,$e=Ne.bytesPerElement,ee=ot===n.INT||ot===n.UNSIGNED_INT||he.gpuType===dl;if(he.isInterleavedBufferAttribute){const se=he.data,Te=se.stride,Fe=he.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<B.locationSize;Ce++)h(B.location+Ce,se.meshPerAttribute);T.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<B.locationSize;Ce++)m(B.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ce=0;Ce<B.locationSize;Ce++)R(B.location+Ce,Re/B.locationSize,ot,xe,Te*$e,(Fe+Re/B.locationSize*Ce)*$e,ee)}else{if(he.isInstancedBufferAttribute){for(let se=0;se<B.locationSize;se++)h(B.location+se,he.meshPerAttribute);T.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let se=0;se<B.locationSize;se++)m(B.location+se);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let se=0;se<B.locationSize;se++)R(B.location+se,Re/B.locationSize,ot,xe,Re*$e,Re/B.locationSize*se*$e,ee)}}else if(Z!==void 0){const xe=Z[Q];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(B.location,xe);break;case 3:n.vertexAttrib3fv(B.location,xe);break;case 4:n.vertexAttrib4fv(B.location,xe);break;default:n.vertexAttrib1fv(B.location,xe)}}}}C()}function w(){I();for(const T in i){const L=i[T];for(const k in L){const j=L[k];for(const re in j)u(j[re].object),delete j[re];delete L[k]}delete i[T]}}function P(T){if(i[T.id]===void 0)return;const L=i[T.id];for(const k in L){const j=L[k];for(const re in j)u(j[re].object),delete j[re];delete L[k]}delete i[T.id]}function b(T){for(const L in i){const k=i[L];if(k[T.id]===void 0)continue;const j=k[T.id];for(const re in j)u(j[re].object),delete j[re];delete k[T.id]}}function I(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:C}}function Q0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let E=0;E<f;E++)v+=u[E]*d[E];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ev(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==on&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const I=b===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==zn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Fn&&!I)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:S,vertexTextures:w,maxSamples:P}}function tv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new _i,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,E=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const C=s?0:i,R=C*4;let S=h.clippingState||null;l.value=S,S=u(v,d,R,p);for(let w=0;w!==R;++w)S[w]=t[w];h.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const E=f!==null?f.length:0;let m=null;if(E!==0){if(m=l.value,v!==!0||m===null){const h=p+E*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<h)&&(m=new Float32Array(h));for(let R=0,S=p;R!==E;++R,S+=4)o.copy(f[R]).applyMatrix4(C,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function nv(n){let e=new WeakMap;function t(o,a){return a===fa?o.mapping=sr:a===ha&&(o.mapping=or),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fa||a===ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qm(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const $i=4,Lc=[.125,.215,.35,.446,.526,.582],Mi=20,Bo=new fg,Dc=new Ye;let Ho=null,zo=0,Vo=0,Go=!1;const vi=(1+Math.sqrt(5))/2,Xi=1/vi,Ic=[new W(-vi,Xi,0),new W(vi,Xi,0),new W(-Xi,0,vi),new W(Xi,0,vi),new W(0,vi,-Xi),new W(0,vi,Xi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],iv=new W;class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=iv}=s;Ho=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,zo,Vo),this._renderer.xr.enabled=Go,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Wr,format:on,colorSpace:ar,depthBuffer:!1},r=Nc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rv(s)),this._blurMaterial=sv(s,e,t)}return r}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,i,r,s){const l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Dc),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const E=new Ef({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new an(new Kr,E);let h=!1;const C=e.background;C?C.isColor&&(E.color.copy(C),e.background=null,h=!0):(E.color.copy(Dc),h=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));const w=this._cubeSize;Ss(r,S*w,R>2?w:0,w,w),f.setRenderTarget(r),h&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=C}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sr||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new an(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ic[(r-s-1)%Ic.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new an(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),E=s/v,m=isFinite(s)?1+Math.floor(u*E):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const h=[];let C=0;for(let b=0;b<Mi;++b){const I=b/E,y=Math.exp(-I*I/2);h.push(y),b===0?C+=y:b<m&&(C+=2*y)}for(let b=0;b<h.length;b++)h[b]=h[b]/C;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:R}=this;d.dTheta.value=v,d.mipInt.value=R-i;const S=this._sizeLods[r],w=3*S*(r>R-$i?r-R+$i:0),P=4*(this._cubeSize-S);Ss(t,w,P,3*S,2*S),l.setRenderTarget(t),l.render(f,Bo)}}function rv(n){const e=[],t=[],i=[];let r=n;const s=n-$i+1+Lc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-$i?l=Lc[o-n+$i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,E=3,m=2,h=1,C=new Float32Array(E*v*p),R=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let P=0;P<p;P++){const b=P%3*2/3-1,I=P>2?0:-1,y=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];C.set(y,E*v*P),R.set(d,m*v*P);const T=[P,P,P,P,P,P];S.set(T,h*v*P)}const w=new wi;w.setAttribute("position",new Sn(C,E)),w.setAttribute("uv",new Sn(R,m)),w.setAttribute("faceIndex",new Sn(S,h)),e.push(w),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nc(n,e,t){const i=new Ai(n,e,t);return i.texture.mapping=js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sv(n,e,t){const i=new Float32Array(Mi),r=new W(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:El(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Fc(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Oc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function ov(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fa||l===ha,u=l===sr||l===or;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Uc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Uc(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function av(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lv(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,v=f.attributes.position;let E=0;if(p!==null){const C=p.array;E=p.version;for(let R=0,S=C.length;R<S;R+=3){const w=C[R+0],P=C[R+1],b=C[R+2];d.push(w,P,P,b,b,w)}}else if(v!==void 0){const C=v.array;E=v.version;for(let R=0,S=C.length/3-1;R<S;R+=3){const w=R+0,P=R+1,b=R+2;d.push(w,P,P,b,b,w)}}else return;const m=new(vf(d)?Tf:yf)(d,1);m.version=E;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cv(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,d*o,v),t.update(p,i,v))}function u(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];t.update(m,i,1)}function f(d,p,v,E){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],E[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,E,0,v);let h=0;for(let C=0;C<v;C++)h+=p[C]*E[C];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function uv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function fv(n,e,t){const i=new WeakMap,r=new mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),E===!0&&(S=2),m===!0&&(S=3);let w=a.attributes.position.count*S,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*P*4*f),I=new xf(b,w,P,f);I.type=Fn,I.needsUpdate=!0;const y=S*4;for(let L=0;L<f;L++){const k=h[L],j=C[L],re=R[L],te=w*P*4*L;for(let Z=0;Z<k.count;Z++){const Q=Z*y;v===!0&&(r.fromBufferAttribute(k,Z),b[te+Q+0]=r.x,b[te+Q+1]=r.y,b[te+Q+2]=r.z,b[te+Q+3]=0),E===!0&&(r.fromBufferAttribute(j,Z),b[te+Q+4]=r.x,b[te+Q+5]=r.y,b[te+Q+6]=r.z,b[te+Q+7]=0),m===!0&&(r.fromBufferAttribute(re,Z),b[te+Q+8]=r.x,b[te+Q+9]=r.y,b[te+Q+10]=r.z,b[te+Q+11]=re.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new nt(w,P)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const E=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",E),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function hv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Df=new It,Bc=new Cf(1,1),If=new xf,Uf=new Nm,Nf=new Rf,Hc=[],zc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),kc=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Hc[r];if(s===void 0&&(s=new Float32Array(r),Hc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zs(n,e){let t=zc[e];t===void 0&&(t=new Int32Array(e),zc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function _v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;kc.set(i),n.uniformMatrix2fv(this.addr,!1,kc),Mt(t,i)}}function vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Gc.set(i),n.uniformMatrix3fv(this.addr,!1,Gc),Mt(t,i)}}function xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),Mt(t,i)}}function Mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Tv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function wv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Bc.compareFunction=_f,s=Bc):s=Df,t.setTexture2D(e||s,r)}function Cv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uf,r)}function Pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nf,r)}function Lv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||If,r)}function Dv(n){switch(n){case 5126:return dv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return _v;case 35675:return vv;case 35676:return xv;case 5124:case 35670:return Mv;case 35667:case 35671:return Sv;case 35668:case 35672:return Ev;case 35669:case 35673:return yv;case 5125:return Tv;case 36294:return bv;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Iv(n,e){n.uniform1fv(this.addr,e)}function Uv(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function Nv(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function Fv(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ov(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bv(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hv(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zv(n,e){n.uniform1iv(this.addr,e)}function Vv(n,e){n.uniform2iv(this.addr,e)}function Gv(n,e){n.uniform3iv(this.addr,e)}function kv(n,e){n.uniform4iv(this.addr,e)}function Wv(n,e){n.uniform1uiv(this.addr,e)}function Xv(n,e){n.uniform2uiv(this.addr,e)}function qv(n,e){n.uniform3uiv(this.addr,e)}function Yv(n,e){n.uniform4uiv(this.addr,e)}function $v(n,e,t){const i=this.cache,r=e.length,s=Zs(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Df,s[o])}function Kv(n,e,t){const i=this.cache,r=e.length,s=Zs(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Uf,s[o])}function jv(n,e,t){const i=this.cache,r=e.length,s=Zs(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nf,s[o])}function Zv(n,e,t){const i=this.cache,r=e.length,s=Zs(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||If,s[o])}function Jv(n){switch(n){case 5126:return Iv;case 35664:return Uv;case 35665:return Nv;case 35666:return Fv;case 35674:return Ov;case 35675:return Bv;case 35676:return Hv;case 5124:case 35670:return zv;case 35667:case 35671:return Vv;case 35668:case 35672:return Gv;case 35669:case 35673:return kv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Zv}}class Qv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dv(t.type)}}class ex{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jv(t.type)}}class tx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Wc(n,e){n.seq.push(e),n.map[e.id]=e}function nx(n,e,t){const i=n.name,r=i.length;for(ko.lastIndex=0;;){const s=ko.exec(i),o=ko.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wc(t,c===void 0?new Qv(a,n,e):new ex(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new tx(a),Wc(t,f)),t=f}}}class Ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ix=37297;let rx=0;function sx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const qc=new Ve;function ox(n){je._getMatrix(qc,je.workingColorSpace,n);const e=`mat3( ${qc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Hs:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+sx(n.getShaderSource(e),a)}else return s}function ax(n,e){const t=ox(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lx(n,e){let t;switch(e){case cm:t="Linear";break;case um:t="Reinhard";break;case fm:t="Cineon";break;case hm:t="ACESFilmic";break;case pm:t="AgX";break;case mm:t="Neutral";break;case dm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Es=new W;function cx(){je.getLuminanceCoefficients(Es);const n=Es.x.toFixed(4),e=Es.y.toFixed(4),t=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function fx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Er(n){return n!==""}function $c(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(dx,mx)}const px=new Map;function mx(n,e){let t=Ge[e];if(t===void 0){const i=px.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(n){return n.replace(gx,_x)}function _x(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===of?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function xx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case or:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function Sx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hl:e="ENVMAP_BLENDING_MULTIPLY";break;case am:e="ENVMAP_BLENDING_MIX";break;case lm:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vx(t),c=xx(t),u=Mx(t),f=Sx(t),d=Ex(t),p=ux(t),v=fx(s),E=r.createProgram();let m,h,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Er).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Er).join(`
`),h.length>0&&(h+=`
`)):(m=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),h=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ei?lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ax("linearToOutputTexel",t.outputColorSpace),cx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=Wa(o),o=$c(o,t),o=Kc(o,t),a=Wa(a),a=$c(a,t),a=Kc(a,t),o=jc(o),a=jc(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const R=C+m+o,S=C+h+a,w=Xc(r,r.VERTEX_SHADER,R),P=Xc(r,r.FRAGMENT_SHADER,S);r.attachShader(E,w),r.attachShader(E,P),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function b(L){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",j=r.getShaderInfoLog(w)||"",re=r.getShaderInfoLog(P)||"",te=k.trim(),Z=j.trim(),Q=re.trim();let B=!0,he=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,w,P);else{const xe=Yc(r,w,"vertex"),Re=Yc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+xe+`
`+Re)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Z===""||Q==="")&&(he=!1);he&&(L.diagnostics={runnable:B,programLog:te,vertexShader:{log:Z,prefix:m},fragmentShader:{log:Q,prefix:h}})}r.deleteShader(w),r.deleteShader(P),I=new Ls(r,E),y=hx(r,E)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(E,ix)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rx++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=P,this}let Tx=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ax(e),t.set(e,i)),i}}class Ax{constructor(e){this.id=Tx++,this.code=e,this.usedTimes=0}}function Rx(n,e,t,i,r,s,o){const a=new Mf,l=new bx,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,T,L,k,j){const re=k.fog,te=j.geometry,Z=y.isMeshStandardMaterial?k.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),B=Q&&Q.mapping===js?Q.image.height:null,he=v[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const xe=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Re=xe!==void 0?xe.length:0;let Ne=0;te.morphAttributes.position!==void 0&&(Ne=1),te.morphAttributes.normal!==void 0&&(Ne=2),te.morphAttributes.color!==void 0&&(Ne=3);let tt,ot,$e,ee;if(he){const Ze=gn[he];tt=Ze.vertexShader,ot=Ze.fragmentShader}else tt=y.vertexShader,ot=y.fragmentShader,l.update(y),$e=l.getVertexShaderID(y),ee=l.getFragmentShaderID(y);const se=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Fe=j.isInstancedMesh===!0,Ce=j.isBatchedMesh===!0,Xe=!!y.map,A=!!y.matcap,_=!!Q,V=!!y.aoMap,$=!!y.lightMap,G=!!y.bumpMap,O=!!y.normalMap,oe=!!y.displacementMap,q=!!y.emissiveMap,J=!!y.metalnessMap,ne=!!y.roughnessMap,_e=y.anisotropy>0,x=y.clearcoat>0,g=y.dispersion>0,D=y.iridescence>0,H=y.sheen>0,K=y.transmission>0,z=_e&&!!y.anisotropyMap,Me=x&&!!y.clearcoatMap,ae=x&&!!y.clearcoatNormalMap,Se=x&&!!y.clearcoatRoughnessMap,Ee=D&&!!y.iridescenceMap,le=D&&!!y.iridescenceThicknessMap,ge=H&&!!y.sheenColorMap,we=H&&!!y.sheenRoughnessMap,ye=!!y.specularMap,pe=!!y.specularColorMap,Be=!!y.specularIntensityMap,U=K&&!!y.transmissionMap,fe=K&&!!y.thicknessMap,de=!!y.gradientMap,Ae=!!y.alphaMap,ce=y.alphaTest>0,ie=!!y.alphaHash,Le=!!y.extensions;let He=ei;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(He=n.toneMapping);const at={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:tt,fragmentShader:ot,defines:y.defines,customVertexShaderID:$e,customFragmentShaderID:ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&j._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&j.instanceColor!==null,instancingMorph:Fe&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ar,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:A,envMap:_,envMapMode:_&&Q.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:$,bumpMap:G,normalMap:O,displacementMap:d&&oe,emissiveMap:q,normalMapObjectSpace:O&&y.normalMapType===xm,normalMapTangentSpace:O&&y.normalMapType===gf,metalnessMap:J,roughnessMap:ne,anisotropy:_e,anisotropyMap:z,clearcoat:x,clearcoatMap:Me,clearcoatNormalMap:ae,clearcoatRoughnessMap:Se,dispersion:g,iridescence:D,iridescenceMap:Ee,iridescenceThicknessMap:le,sheen:H,sheenColorMap:ge,sheenRoughnessMap:we,specularMap:ye,specularColorMap:pe,specularIntensityMap:Be,transmission:K,transmissionMap:U,thicknessMap:fe,gradientMap:de,opaque:y.transparent===!1&&y.blending===er&&y.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ce,alphaHash:ie,combine:y.combine,mapUv:Xe&&E(y.map.channel),aoMapUv:V&&E(y.aoMap.channel),lightMapUv:$&&E(y.lightMap.channel),bumpMapUv:G&&E(y.bumpMap.channel),normalMapUv:O&&E(y.normalMap.channel),displacementMapUv:oe&&E(y.displacementMap.channel),emissiveMapUv:q&&E(y.emissiveMap.channel),metalnessMapUv:J&&E(y.metalnessMap.channel),roughnessMapUv:ne&&E(y.roughnessMap.channel),anisotropyMapUv:z&&E(y.anisotropyMap.channel),clearcoatMapUv:Me&&E(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&E(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&E(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&E(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&E(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&E(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&E(y.sheenRoughnessMap.channel),specularMapUv:ye&&E(y.specularMap.channel),specularColorMapUv:pe&&E(y.specularColorMap.channel),specularIntensityMapUv:Be&&E(y.specularIntensityMap.channel),transmissionMapUv:U&&E(y.transmissionMap.channel),thicknessMapUv:fe&&E(y.thicknessMap.channel),alphaMapUv:Ae&&E(y.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(O||_e),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!te.attributes.uv&&(Xe||Ae),fog:!!re,useFog:y.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:q&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Nn,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function h(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)T.push(L),T.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(C(T,y),R(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function C(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function R(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const T=v[y.type];let L;if(T){const k=gn[T];L=Km.clone(k.uniforms)}else L=y.uniforms;return L}function w(y,T){let L;for(let k=0,j=u.length;k<j;k++){const re=u[k];if(re.cacheKey===T){L=re,++L.usedTimes;break}}return L===void 0&&(L=new yx(n,T,y,s),u.push(L)),L}function P(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:w,releaseProgram:P,releaseShaderCache:b,programs:u,dispose:I}}function wx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Cx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,v,E,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:E,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=E,h.group=m),e++,h}function a(f,d,p,v,E,m){const h=o(f,d,p,v,E,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,v,E,m){const h=o(f,d,p,v,E,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Cx),i.length>1&&i.sort(d||Jc),r.length>1&&r.sort(d||Jc)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Px(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qc,n.set(i,[o])):r>=s.length?(o=new Qc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ye};break;case"SpotLight":t={position:new W,direction:new W,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Dx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ix=0;function Ux(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Nx(n){const e=new Lx,t=Dx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new vt,o=new vt;function a(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,v=0,E=0,m=0,h=0,C=0,R=0,S=0,w=0,P=0,b=0;c.sort(Ux);for(let y=0,T=c.length;y<T;y++){const L=c[y],k=L.color,j=L.intensity,re=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*j,f+=k.g*j,d+=k.b*j;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],j);b++}else if(L.isDirectionalLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,B=t.get(L);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=L.shadow.matrix,C++}i.directional[p]=Z,p++}else if(L.isSpotLight){const Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(k).multiplyScalar(j),Z.distance=re,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[E]=Z;const Q=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,Q.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[E]=Q.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.spotShadow[E]=B,i.spotShadowMap[E]=te,S++}E++}else if(L.isRectAreaLight){const Z=e.get(L);Z.color.copy(k).multiplyScalar(j),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Z,m++}else if(L.isPointLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const Q=L.shadow,B=t.get(L);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,i.pointShadow[v]=B,i.pointShadowMap[v]=te,i.pointShadowMatrix[v]=L.shadow.matrix,R++}i.point[v]=Z,v++}else if(L.isHemisphereLight){const Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(j),Z.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[h]=Z,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==v||I.spotLength!==E||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==C||I.numPointShadows!==R||I.numSpotShadows!==S||I.numSpotMaps!==w||I.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=S+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=b,I.directionalLength=p,I.pointLength=v,I.spotLength=E,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=C,I.numPointShadows=R,I.numSpotShadows=S,I.numSpotMaps=w,I.numLightProbes=b,i.version=Ix++)}function l(c,u){let f=0,d=0,p=0,v=0,E=0;const m=u.matrixWorldInverse;for(let h=0,C=c.length;h<C;h++){const R=c[h];if(R.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(R.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(R.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(R.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(m),d++}else if(R.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function eu(n){const e=new Nx(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Fx(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new eu(n),e.set(r,[a])):s>=o.length?(a=new eu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hx(n,e,t){let i=new wf;const r=new nt,s=new nt,o=new mt,a=new sg({depthPacking:vm}),l=new og,c={},u=t.maxTextureSize,f={[ii]:Ht,[Ht]:ii,[Nn]:Nn},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new wi;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new an(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let h=this.type;this.render=function(P,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const y=n.getRenderTarget(),T=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Qn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const j=h!==Dn&&this.type===Dn,re=h===Dn&&this.type!==Dn;for(let te=0,Z=P.length;te<Z;te++){const Q=P[te],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const he=B.getFrameExtents();if(r.multiply(he),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,B.mapSize.y=s.y)),B.map===null||j===!0||re===!0){const Re=this.type!==Dn?{minFilter:un,magFilter:un}:{};B.map!==null&&B.map.dispose(),B.map=new Ai(r.x,r.y,Re),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const xe=B.getViewportCount();for(let Re=0;Re<xe;Re++){const Ne=B.getViewport(Re);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),k.viewport(o),B.updateMatrices(Q,Re),i=B.getFrustum(),S(b,I,B.camera,Q,this.type)}B.isPointLightShadow!==!0&&this.type===Dn&&C(B,I),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(y,T,L)};function C(P,b){const I=e.update(E);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ai(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(b,null,I,d,E,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(b,null,I,p,E,null)}function R(P,b,I,y){let T=null;const L=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)T=L;else if(T=I.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const k=T.uuid,j=b.uuid;let re=c[k];re===void 0&&(re={},c[k]=re);let te=re[j];te===void 0&&(te=T.clone(),re[j]=te,b.addEventListener("dispose",w)),T=te}if(T.visible=b.visible,T.wireframe=b.wireframe,y===Dn?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:f[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=n.properties.get(T);k.light=I}return T}function S(P,b,I,y,T){if(P.visible===!1)return;if(P.layers.test(b.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===Dn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const j=e.update(P),re=P.material;if(Array.isArray(re)){const te=j.groups;for(let Z=0,Q=te.length;Z<Q;Z++){const B=te[Z],he=re[B.materialIndex];if(he&&he.visible){const xe=R(P,he,y,T);P.onBeforeShadow(n,P,b,I,j,xe,B),n.renderBufferDirect(I,null,j,xe,P,B),P.onAfterShadow(n,P,b,I,j,xe,B)}}}else if(re.visible){const te=R(P,re,y,T);P.onBeforeShadow(n,P,b,I,j,te,null),n.renderBufferDirect(I,null,j,te,P,null),P.onAfterShadow(n,P,b,I,j,te,null)}}const k=P.children;for(let j=0,re=k.length;j<re;j++)S(k[j],b,I,y,T)}function w(P){P.target.removeEventListener("dispose",w);for(const I in c){const y=c[I],T=P.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const zx={[ra]:sa,[oa]:ca,[aa]:ua,[rr]:la,[sa]:ra,[ca]:oa,[ua]:aa,[la]:rr};function Vx(n,e){function t(){let U=!1;const fe=new mt;let de=null;const Ae=new mt(0,0,0,0);return{setMask:function(ce){de!==ce&&!U&&(n.colorMask(ce,ce,ce,ce),de=ce)},setLocked:function(ce){U=ce},setClear:function(ce,ie,Le,He,at){at===!0&&(ce*=He,ie*=He,Le*=He),fe.set(ce,ie,Le,He),Ae.equals(fe)===!1&&(n.clearColor(ce,ie,Le,He),Ae.copy(fe))},reset:function(){U=!1,de=null,Ae.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,de=null,Ae=null,ce=null;return{setReversed:function(ie){if(fe!==ie){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;const He=ce;ce=null,this.setClear(He)}},getReversed:function(){return fe},setTest:function(ie){ie?se(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ie){de!==ie&&!U&&(n.depthMask(ie),de=ie)},setFunc:function(ie){if(fe&&(ie=zx[ie]),Ae!==ie){switch(ie){case ra:n.depthFunc(n.NEVER);break;case sa:n.depthFunc(n.ALWAYS);break;case oa:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case aa:n.depthFunc(n.EQUAL);break;case la:n.depthFunc(n.GEQUAL);break;case ca:n.depthFunc(n.GREATER);break;case ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ce!==ie&&(fe&&(ie=1-ie),n.clearDepth(ie),ce=ie)},reset:function(){U=!1,de=null,Ae=null,ce=null,fe=!1}}}function r(){let U=!1,fe=null,de=null,Ae=null,ce=null,ie=null,Le=null,He=null,at=null;return{setTest:function(Ze){U||(Ze?se(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Ze){fe!==Ze&&!U&&(n.stencilMask(Ze),fe=Ze)},setFunc:function(Ze,Tn,fn){(de!==Ze||Ae!==Tn||ce!==fn)&&(n.stencilFunc(Ze,Tn,fn),de=Ze,Ae=Tn,ce=fn)},setOp:function(Ze,Tn,fn){(ie!==Ze||Le!==Tn||He!==fn)&&(n.stencilOp(Ze,Tn,fn),ie=Ze,Le=Tn,He=fn)},setLocked:function(Ze){U=Ze},setClear:function(Ze){at!==Ze&&(n.clearStencil(Ze),at=Ze)},reset:function(){U=!1,fe=null,de=null,Ae=null,ce=null,ie=null,Le=null,He=null,at=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],v=null,E=!1,m=null,h=null,C=null,R=null,S=null,w=null,P=null,b=new Ye(0,0,0),I=0,y=!1,T=null,L=null,k=null,j=null,re=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Q=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),Z=Q>=1):B.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Z=Q>=2);let he=null,xe={};const Re=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),tt=new mt().fromArray(Re),ot=new mt().fromArray(Ne);function $e(U,fe,de,Ae){const ce=new Uint8Array(4),ie=n.createTexture();n.bindTexture(U,ie),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<de;Le++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(fe+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ie}const ee={};ee[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(rr),G(!1),O(rc),se(n.CULL_FACE),V(Qn);function se(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Te(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Fe(U,fe){return f[U]!==fe?(n.bindFramebuffer(U,fe),f[U]=fe,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=fe),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ce(U,fe){let de=p,Ae=!1;if(U){de=d.get(fe),de===void 0&&(de=[],d.set(fe,de));const ce=U.textures;if(de.length!==ce.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Le=ce.length;ie<Le;ie++)de[ie]=n.COLOR_ATTACHMENT0+ie;de.length=ce.length,Ae=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(de)}function Xe(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const A={[xi]:n.FUNC_ADD,[Wp]:n.FUNC_SUBTRACT,[Xp]:n.FUNC_REVERSE_SUBTRACT};A[qp]=n.MIN,A[Yp]=n.MAX;const _={[$p]:n.ZERO,[Kp]:n.ONE,[jp]:n.SRC_COLOR,[na]:n.SRC_ALPHA,[nm]:n.SRC_ALPHA_SATURATE,[em]:n.DST_COLOR,[Jp]:n.DST_ALPHA,[Zp]:n.ONE_MINUS_SRC_COLOR,[ia]:n.ONE_MINUS_SRC_ALPHA,[tm]:n.ONE_MINUS_DST_COLOR,[Qp]:n.ONE_MINUS_DST_ALPHA,[im]:n.CONSTANT_COLOR,[rm]:n.ONE_MINUS_CONSTANT_COLOR,[sm]:n.CONSTANT_ALPHA,[om]:n.ONE_MINUS_CONSTANT_ALPHA};function V(U,fe,de,Ae,ce,ie,Le,He,at,Ze){if(U===Qn){E===!0&&(Te(n.BLEND),E=!1);return}if(E===!1&&(se(n.BLEND),E=!0),U!==kp){if(U!==m||Ze!==y){if((h!==xi||S!==xi)&&(n.blendEquation(n.FUNC_ADD),h=xi,S=xi),Ze)switch(U){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.ONE,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ac:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ac:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}C=null,R=null,w=null,P=null,b.set(0,0,0),I=0,m=U,y=Ze}return}ce=ce||fe,ie=ie||de,Le=Le||Ae,(fe!==h||ce!==S)&&(n.blendEquationSeparate(A[fe],A[ce]),h=fe,S=ce),(de!==C||Ae!==R||ie!==w||Le!==P)&&(n.blendFuncSeparate(_[de],_[Ae],_[ie],_[Le]),C=de,R=Ae,w=ie,P=Le),(He.equals(b)===!1||at!==I)&&(n.blendColor(He.r,He.g,He.b,at),b.copy(He),I=at),m=U,y=!1}function $(U,fe){U.side===Nn?Te(n.CULL_FACE):se(n.CULL_FACE);let de=U.side===Ht;fe&&(de=!de),G(de),U.blending===er&&U.transparent===!1?V(Qn):V(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Ae=U.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),q(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(U){T!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),T=U)}function O(U){U!==zp?(se(n.CULL_FACE),U!==L&&(U===rc?n.cullFace(n.BACK):U===Vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),L=U}function oe(U){U!==k&&(Z&&n.lineWidth(U),k=U)}function q(U,fe,de){U?(se(n.POLYGON_OFFSET_FILL),(j!==fe||re!==de)&&(n.polygonOffset(fe,de),j=fe,re=de)):Te(n.POLYGON_OFFSET_FILL)}function J(U){U?se(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function ne(U){U===void 0&&(U=n.TEXTURE0+te-1),he!==U&&(n.activeTexture(U),he=U)}function _e(U,fe,de){de===void 0&&(he===null?de=n.TEXTURE0+te-1:de=he);let Ae=xe[de];Ae===void 0&&(Ae={type:void 0,texture:void 0},xe[de]=Ae),(Ae.type!==U||Ae.texture!==fe)&&(he!==de&&(n.activeTexture(de),he=de),n.bindTexture(U,fe||ee[U]),Ae.type=U,Ae.texture=fe)}function x(){const U=xe[he];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){tt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function we(U){ot.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ot.copy(U))}function ye(U,fe){let de=c.get(fe);de===void 0&&(de=new WeakMap,c.set(fe,de));let Ae=de.get(U);Ae===void 0&&(Ae=n.getUniformBlockIndex(fe,U.name),de.set(U,Ae))}function pe(U,fe){const Ae=c.get(fe).get(U);l.get(fe)!==Ae&&(n.uniformBlockBinding(fe,Ae,U.__bindingPointIndex),l.set(fe,Ae))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,xe={},f={},d=new WeakMap,p=[],v=null,E=!1,m=null,h=null,C=null,R=null,S=null,w=null,P=null,b=new Ye(0,0,0),I=0,y=!1,T=null,L=null,k=null,j=null,re=null,tt.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Te,bindFramebuffer:Fe,drawBuffers:Ce,useProgram:Xe,setBlending:V,setMaterial:$,setFlipSided:G,setCullFace:O,setLineWidth:oe,setPolygonOffset:q,setScissorTest:J,activeTexture:ne,bindTexture:_e,unbindTexture:x,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:Ee,texImage3D:le,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:ae,texStorage3D:Se,texSubImage2D:H,texSubImage3D:K,compressedTexSubImage2D:z,compressedTexSubImage3D:Me,scissor:ge,viewport:we,reset:Be}}function Gx(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,g){return p?new OffscreenCanvas(x,g):Hr("canvas")}function E(x,g,D){let H=1;const K=_e(x);if((K.width>D||K.height>D)&&(H=D/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const z=Math.floor(H*K.width),Me=Math.floor(H*K.height);f===void 0&&(f=v(z,Me));const ae=g?v(z,Me):f;return ae.width=z,ae.height=Me,ae.getContext("2d").drawImage(x,0,0,z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+z+"x"+Me+")."),ae}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),x;return x}function m(x){return x.generateMipmaps}function h(x){n.generateMipmap(x)}function C(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(x,g,D,H,K=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let z=g;if(g===n.RED&&(D===n.FLOAT&&(z=n.R32F),D===n.HALF_FLOAT&&(z=n.R16F),D===n.UNSIGNED_BYTE&&(z=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(z=n.R8UI),D===n.UNSIGNED_SHORT&&(z=n.R16UI),D===n.UNSIGNED_INT&&(z=n.R32UI),D===n.BYTE&&(z=n.R8I),D===n.SHORT&&(z=n.R16I),D===n.INT&&(z=n.R32I)),g===n.RG&&(D===n.FLOAT&&(z=n.RG32F),D===n.HALF_FLOAT&&(z=n.RG16F),D===n.UNSIGNED_BYTE&&(z=n.RG8)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(z=n.RG8UI),D===n.UNSIGNED_SHORT&&(z=n.RG16UI),D===n.UNSIGNED_INT&&(z=n.RG32UI),D===n.BYTE&&(z=n.RG8I),D===n.SHORT&&(z=n.RG16I),D===n.INT&&(z=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(z=n.RGB8UI),D===n.UNSIGNED_SHORT&&(z=n.RGB16UI),D===n.UNSIGNED_INT&&(z=n.RGB32UI),D===n.BYTE&&(z=n.RGB8I),D===n.SHORT&&(z=n.RGB16I),D===n.INT&&(z=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),D===n.UNSIGNED_INT&&(z=n.RGBA32UI),D===n.BYTE&&(z=n.RGBA8I),D===n.SHORT&&(z=n.RGBA16I),D===n.INT&&(z=n.RGBA32I)),g===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),g===n.RGBA){const Me=K?Hs:je.getTransfer(H);D===n.FLOAT&&(z=n.RGBA32F),D===n.HALF_FLOAT&&(z=n.RGBA16F),D===n.UNSIGNED_BYTE&&(z=Me===rt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function S(x,g){let D;return x?g===null||g===bi||g===Fr?D=n.DEPTH24_STENCIL8:g===Fn?D=n.DEPTH32F_STENCIL8:g===Nr&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===bi||g===Fr?D=n.DEPTH_COMPONENT24:g===Fn?D=n.DEPTH_COMPONENT32F:g===Nr&&(D=n.DEPTH_COMPONENT16),D}function w(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==un&&x.minFilter!==vn?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function P(x){const g=x.target;g.removeEventListener("dispose",P),I(g),g.isVideoTexture&&u.delete(g)}function b(x){const g=x.target;g.removeEventListener("dispose",b),T(g)}function I(x){const g=i.get(x);if(g.__webglInit===void 0)return;const D=x.source,H=d.get(D);if(H){const K=H[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(x),Object.keys(H).length===0&&d.delete(D)}i.remove(x)}function y(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const D=x.source,H=d.get(D);delete H[g.__cacheKey],o.memory.textures--}function T(x){const g=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let K=0;K<g.__webglFramebuffer[H].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[H][K]);else n.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)n.deleteFramebuffer(g.__webglFramebuffer[H]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=x.textures;for(let H=0,K=D.length;H<K;H++){const z=i.get(D[H]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(D[H])}i.remove(x)}let L=0;function k(){L=0}function j(){const x=L;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),L+=1,x}function re(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function te(x,g){const D=i.get(x);if(x.isVideoTexture&&J(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&D.__version!==x.version){const H=x.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(D,x,g);return}}else x.isExternalTexture&&(D.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function Z(x,g){const D=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&D.__version!==x.version){ee(D,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function Q(x,g){const D=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&D.__version!==x.version){ee(D,x,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function B(x,g){const D=i.get(x);if(x.version>0&&D.__version!==x.version){se(D,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const he={[da]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[pa]:n.MIRRORED_REPEAT},xe={[un]:n.NEAREST,[gm]:n.NEAREST_MIPMAP_NEAREST,[ts]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[fo]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},Re={[Mm]:n.NEVER,[Am]:n.ALWAYS,[Sm]:n.LESS,[_f]:n.LEQUAL,[Em]:n.EQUAL,[bm]:n.GEQUAL,[ym]:n.GREATER,[Tm]:n.NOTEQUAL};function Ne(x,g){if(g.type===Fn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===vn||g.magFilter===fo||g.magFilter===ts||g.magFilter===Ei||g.minFilter===vn||g.minFilter===fo||g.minFilter===ts||g.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,he[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,he[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,he[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,xe[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===un||g.minFilter!==ts&&g.minFilter!==Ei||g.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function tt(x,g){let D=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",P));const H=g.source;let K=d.get(H);K===void 0&&(K={},d.set(H,K));const z=re(g);if(z!==x.__cacheKey){K[z]===void 0&&(K[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),K[z].usedTimes++;const Me=K[x.__cacheKey];Me!==void 0&&(K[x.__cacheKey].usedTimes--,Me.usedTimes===0&&y(g)),x.__cacheKey=z,x.__webglTexture=K[z].texture}return D}function ot(x,g,D){return Math.floor(Math.floor(x/D)/g)}function $e(x,g,D,H){const z=x.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,D,H,g.data);else{z.sort((le,ge)=>le.start-ge.start);let Me=0;for(let le=1;le<z.length;le++){const ge=z[Me],we=z[le],ye=ge.start+ge.count,pe=ot(we.start,g.width,4),Be=ot(ge.start,g.width,4);we.start<=ye+1&&pe===Be&&ot(we.start+we.count-1,g.width,4)===pe?ge.count=Math.max(ge.count,we.start+we.count-ge.start):(++Me,z[Me]=we)}z.length=Me+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let le=0,ge=z.length;le<ge;le++){const we=z[le],ye=Math.floor(we.start/4),pe=Math.ceil(we.count/4),Be=ye%g.width,U=Math.floor(ye/g.width),fe=pe,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Be,U,fe,de,D,H,g.data)}x.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function ee(x,g,D){let H=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=n.TEXTURE_3D);const K=tt(x,g),z=g.source;t.bindTexture(H,x.__webglTexture,n.TEXTURE0+D);const Me=i.get(z);if(z.version!==Me.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const ae=je.getPrimaries(je.workingColorSpace),Se=g.colorSpace===Zn?null:je.getPrimaries(g.colorSpace),Ee=g.colorSpace===Zn||ae===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let le=E(g.image,!1,r.maxTextureSize);le=ne(g,le);const ge=s.convert(g.format,g.colorSpace),we=s.convert(g.type);let ye=R(g.internalFormat,ge,we,g.colorSpace,g.isVideoTexture);Ne(H,g);let pe;const Be=g.mipmaps,U=g.isVideoTexture!==!0,fe=Me.__version===void 0||K===!0,de=z.dataReady,Ae=w(g,le);if(g.isDepthTexture)ye=S(g.format===Br,g.type),fe&&(U?t.texStorage2D(n.TEXTURE_2D,1,ye,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,ye,le.width,le.height,0,ge,we,null));else if(g.isDataTexture)if(Be.length>0){U&&fe&&t.texStorage2D(n.TEXTURE_2D,Ae,ye,Be[0].width,Be[0].height);for(let ce=0,ie=Be.length;ce<ie;ce++)pe=Be[ce],U?de&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,pe.width,pe.height,ge,we,pe.data):t.texImage2D(n.TEXTURE_2D,ce,ye,pe.width,pe.height,0,ge,we,pe.data);g.generateMipmaps=!1}else U?(fe&&t.texStorage2D(n.TEXTURE_2D,Ae,ye,le.width,le.height),de&&$e(g,le,ge,we)):t.texImage2D(n.TEXTURE_2D,0,ye,le.width,le.height,0,ge,we,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){U&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,ye,Be[0].width,Be[0].height,le.depth);for(let ce=0,ie=Be.length;ce<ie;ce++)if(pe=Be[ce],g.format!==on)if(ge!==null)if(U){if(de)if(g.layerUpdates.size>0){const Le=Pc(pe.width,pe.height,g.format,g.type);for(const He of g.layerUpdates){const at=pe.data.subarray(He*Le/pe.data.BYTES_PER_ELEMENT,(He+1)*Le/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,He,pe.width,pe.height,1,ge,at)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,pe.width,pe.height,le.depth,ge,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ye,pe.width,pe.height,le.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,pe.width,pe.height,le.depth,ge,we,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ye,pe.width,pe.height,le.depth,0,ge,we,pe.data)}else{U&&fe&&t.texStorage2D(n.TEXTURE_2D,Ae,ye,Be[0].width,Be[0].height);for(let ce=0,ie=Be.length;ce<ie;ce++)pe=Be[ce],g.format!==on?ge!==null?U?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?de&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,pe.width,pe.height,ge,we,pe.data):t.texImage2D(n.TEXTURE_2D,ce,ye,pe.width,pe.height,0,ge,we,pe.data)}else if(g.isDataArrayTexture)if(U){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,ye,le.width,le.height,le.depth),de)if(g.layerUpdates.size>0){const ce=Pc(le.width,le.height,g.format,g.type);for(const ie of g.layerUpdates){const Le=le.data.subarray(ie*ce/le.data.BYTES_PER_ELEMENT,(ie+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,ge,we,Le)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ge,we,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,le.width,le.height,le.depth,0,ge,we,le.data);else if(g.isData3DTexture)U?(fe&&t.texStorage3D(n.TEXTURE_3D,Ae,ye,le.width,le.height,le.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ge,we,le.data)):t.texImage3D(n.TEXTURE_3D,0,ye,le.width,le.height,le.depth,0,ge,we,le.data);else if(g.isFramebufferTexture){if(fe)if(U)t.texStorage2D(n.TEXTURE_2D,Ae,ye,le.width,le.height);else{let ce=le.width,ie=le.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(n.TEXTURE_2D,Le,ye,ce,ie,0,ge,we,null),ce>>=1,ie>>=1}}else if(Be.length>0){if(U&&fe){const ce=_e(Be[0]);t.texStorage2D(n.TEXTURE_2D,Ae,ye,ce.width,ce.height)}for(let ce=0,ie=Be.length;ce<ie;ce++)pe=Be[ce],U?de&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ge,we,pe):t.texImage2D(n.TEXTURE_2D,ce,ye,ge,we,pe);g.generateMipmaps=!1}else if(U){if(fe){const ce=_e(le);t.texStorage2D(n.TEXTURE_2D,Ae,ye,ce.width,ce.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,we,le)}else t.texImage2D(n.TEXTURE_2D,0,ye,ge,we,le);m(g)&&h(H),Me.__version=z.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function se(x,g,D){if(g.image.length!==6)return;const H=tt(x,g),K=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+D);const z=i.get(K);if(K.version!==z.__version||H===!0){t.activeTexture(n.TEXTURE0+D);const Me=je.getPrimaries(je.workingColorSpace),ae=g.colorSpace===Zn?null:je.getPrimaries(g.colorSpace),Se=g.colorSpace===Zn||Me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!Ee&&!le?ge[ie]=E(g.image[ie],!0,r.maxCubemapSize):ge[ie]=le?g.image[ie].image:g.image[ie],ge[ie]=ne(g,ge[ie]);const we=ge[0],ye=s.convert(g.format,g.colorSpace),pe=s.convert(g.type),Be=R(g.internalFormat,ye,pe,g.colorSpace),U=g.isVideoTexture!==!0,fe=z.__version===void 0||H===!0,de=K.dataReady;let Ae=w(g,we);Ne(n.TEXTURE_CUBE_MAP,g);let ce;if(Ee){U&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Be,we.width,we.height);for(let ie=0;ie<6;ie++){ce=ge[ie].mipmaps;for(let Le=0;Le<ce.length;Le++){const He=ce[Le];g.format!==on?ye!==null?U?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,He.width,He.height,ye,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Be,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,He.width,He.height,ye,pe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Be,He.width,He.height,0,ye,pe,He.data)}}}else{if(ce=g.mipmaps,U&&fe){ce.length>0&&Ae++;const ie=_e(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Be,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,ye,pe,ge[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,ge[ie].width,ge[ie].height,0,ye,pe,ge[ie].data);for(let Le=0;Le<ce.length;Le++){const at=ce[Le].image[ie].image;U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,at.width,at.height,ye,pe,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Be,at.width,at.height,0,ye,pe,at.data)}}else{U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ye,pe,ge[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,ye,pe,ge[ie]);for(let Le=0;Le<ce.length;Le++){const He=ce[Le];U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,ye,pe,He.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Be,ye,pe,He.image[ie])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),z.__version=K.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Te(x,g,D,H,K,z){const Me=s.convert(D.format,D.colorSpace),ae=s.convert(D.type),Se=R(D.internalFormat,Me,ae,D.colorSpace),Ee=i.get(g),le=i.get(D);if(le.__renderTarget=g,!Ee.__hasExternalTextures){const ge=Math.max(1,g.width>>z),we=Math.max(1,g.height>>z);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,z,Se,ge,we,g.depth,0,Me,ae,null):t.texImage2D(K,z,Se,ge,we,0,Me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),q(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,K,le.__webglTexture,0,oe(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,K,le.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(x,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer){const H=g.depthTexture,K=H&&H.isDepthTexture?H.type:null,z=S(g.stencilBuffer,K),Me=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=oe(g);q(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,z,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,x)}else{const H=g.textures;for(let K=0;K<H.length;K++){const z=H[K],Me=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),Se=R(z.internalFormat,Me,ae,z.colorSpace),Ee=oe(g);D&&q(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Se,g.width,g.height):q(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,Se,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Se,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(g.depthTexture);H.__renderTarget=g,(!H.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),te(g.depthTexture,0);const K=H.__webglTexture,z=oe(g);if(g.depthTexture.format===Or)q(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(g.depthTexture.format===Br)q(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Xe(x){const g=i.get(x),D=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){const H=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=H}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const H=x.texture.mipmaps;H&&H.length>0?Ce(g.__webglFramebuffer[0],x):Ce(g.__webglFramebuffer,x)}else if(D){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=n.createRenderbuffer(),Fe(g.__webglDepthbuffer[H],x,!1);else{const K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,z)}}else{const H=x.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Fe(g.__webglDepthbuffer,x,!1);else{const K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(x,g,D){const H=i.get(x);g!==void 0&&Te(H.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Xe(x)}function _(x){const g=x.texture,D=i.get(x),H=i.get(g);x.addEventListener("dispose",b);const K=x.textures,z=x.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=g.version,o.memory.textures++),z){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let Se=0;Se<g.mipmaps.length;Se++)D.__webglFramebuffer[ae][Se]=n.createFramebuffer()}else D.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)D.__webglFramebuffer[ae]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ae=0,Se=K.length;ae<Se;ae++){const Ee=i.get(K[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&q(x)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const Se=K[ae];D.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ae]);const Ee=s.convert(Se.format,Se.colorSpace),le=s.convert(Se.type),ge=R(Se.internalFormat,Ee,le,Se.colorSpace,x.isXRRenderTarget===!0),we=oe(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ge,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,D.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(D.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Te(D.__webglFramebuffer[ae][Se],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se);else Te(D.__webglFramebuffer[ae],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,Se=K.length;ae<Se;ae++){const Ee=K[ae],le=i.get(Ee);let ge=n.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ge=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,le.__webglTexture),Ne(ge,Ee),Te(D.__webglFramebuffer,x,Ee,n.COLOR_ATTACHMENT0+ae,ge,0),m(Ee)&&h(ge)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ae=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,H.__webglTexture),Ne(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Te(D.__webglFramebuffer[Se],x,g,n.COLOR_ATTACHMENT0,ae,Se);else Te(D.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,ae,0);m(g)&&h(ae),t.unbindTexture()}x.depthBuffer&&Xe(x)}function V(x){const g=x.textures;for(let D=0,H=g.length;D<H;D++){const K=g[D];if(m(K)){const z=C(x),Me=i.get(K).__webglTexture;t.bindTexture(z,Me),h(z),t.unbindTexture()}}}const $=[],G=[];function O(x){if(x.samples>0){if(q(x)===!1){const g=x.textures,D=x.width,H=x.height;let K=n.COLOR_BUFFER_BIT;const z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(x),ae=g.length>1;if(ae)for(let Ee=0;Ee<g.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Se=x.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ee=0;Ee<g.length;Ee++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);const le=i.get(g[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,D,H,0,0,D,H,K,n.NEAREST),l===!0&&($.length=0,G.length=0,$.push(n.COLOR_ATTACHMENT0+Ee),x.depthBuffer&&x.resolveDepthBuffer===!1&&($.push(z),G.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Ee=0;Ee<g.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);const le=i.get(g[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const g=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function oe(x){return Math.min(r.maxSamples,x.samples)}function q(x){const g=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function J(x){const g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function ne(x,g){const D=x.colorSpace,H=x.format,K=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||D!==ar&&D!==Zn&&(je.getTransfer(D)===rt?(H!==on||K!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function _e(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.setTexture2D=te,this.setTexture2DArray=Z,this.setTexture3D=Q,this.setTextureCube=B,this.rebindTextures=A,this.setupRenderTarget=_,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=q}function kx(n,e){function t(i,r=Zn){let s;const o=je.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ff)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lf)return n.BYTE;if(i===cf)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===dl)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Wr)return n.HALF_FLOAT;if(i===hf)return n.ALPHA;if(i===df)return n.RGB;if(i===on)return n.RGBA;if(i===Or)return n.DEPTH_COMPONENT;if(i===Br)return n.DEPTH_STENCIL;if(i===pf)return n.RED;if(i===gl)return n.RED_INTEGER;if(i===mf)return n.RG;if(i===_l)return n.RG_INTEGER;if(i===vl)return n.RGBA_INTEGER;if(i===Rs||i===ws||i===Cs||i===Ps)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ma||i===ga||i===_a||i===va)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ma)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===va)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xa||i===Ma||i===Sa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xa||i===Ma)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ea||i===ya||i===Ta||i===ba||i===Aa||i===Ra||i===wa||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ea)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ya)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ta)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Aa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ra)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ca)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===La)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Da)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ia)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ua)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Na)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===Oa||i===Ba)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fa)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ba)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ha||i===za||i===Va||i===Ga)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ha)return s.COMPRESSED_RED_RGTC1_EXT;if(i===za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
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

}`;class qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Pf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ri({vertexShader:Wx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new cr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yx extends fr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",m=new qx,h={},C=t.getContextAttributes();let R=null,S=null;const w=[],P=[],b=new nt;let I=null;const y=new Zt;y.viewport=new mt;const T=new Zt;T.viewport=new mt;const L=[y,T],k=new dg;let j=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let se=w[ee];return se===void 0&&(se=new No,w[ee]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ee){let se=w[ee];return se===void 0&&(se=new No,w[ee]=se),se.getGripSpace()},this.getHand=function(ee){let se=w[ee];return se===void 0&&(se=new No,w[ee]=se),se.getHandSpace()};function te(ee){const se=P.indexOf(ee.inputSource);if(se===-1)return;const Te=w[se];Te!==void 0&&(Te.update(ee.inputSource,ee.frame,c||o),Te.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Z(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",Q);for(let ee=0;ee<w.length;ee++){const se=P[ee];se!==null&&(P[ee]=null,w[ee].disconnect(se))}j=null,re=null,m.reset();for(const ee in h)delete h[ee];e.setRenderTarget(R),p=null,d=null,f=null,r=null,S=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",Q),C.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(b),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Fe=null,Ce=null;C.depth&&(Ce=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=C.stencil?Br:Or,Fe=C.stencil?Fr:bi);const Xe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Xe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ai(d.textureWidth,d.textureHeight,{format:on,type:zn,depthTexture:new Cf(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Te={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ai(p.framebufferWidth,p.framebufferHeight,{format:on,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(ee){for(let se=0;se<ee.removed.length;se++){const Te=ee.removed[se],Fe=P.indexOf(Te);Fe>=0&&(P[Fe]=null,w[Fe].disconnect(Te))}for(let se=0;se<ee.added.length;se++){const Te=ee.added[se];let Fe=P.indexOf(Te);if(Fe===-1){for(let Xe=0;Xe<w.length;Xe++)if(Xe>=P.length){P.push(Te),Fe=Xe;break}else if(P[Xe]===null){P[Xe]=Te,Fe=Xe;break}if(Fe===-1)break}const Ce=w[Fe];Ce&&Ce.connect(Te)}}const B=new W,he=new W;function xe(ee,se,Te){B.setFromMatrixPosition(se.matrixWorld),he.setFromMatrixPosition(Te.matrixWorld);const Fe=B.distanceTo(he),Ce=se.projectionMatrix.elements,Xe=Te.projectionMatrix.elements,A=Ce[14]/(Ce[10]-1),_=Ce[14]/(Ce[10]+1),V=(Ce[9]+1)/Ce[5],$=(Ce[9]-1)/Ce[5],G=(Ce[8]-1)/Ce[0],O=(Xe[8]+1)/Xe[0],oe=A*G,q=A*O,J=Fe/(-G+O),ne=J*-G;if(se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ne),ee.translateZ(J),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ce[10]===-1)ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const _e=A+J,x=_+J,g=oe-ne,D=q+(Fe-ne),H=V*_/x*_e,K=$*_/x*_e;ee.projectionMatrix.makePerspective(g,D,H,K,_e,x),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Re(ee,se){se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let se=ee.near,Te=ee.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),k.near=T.near=y.near=se,k.far=T.far=y.far=Te,(j!==k.near||re!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),j=k.near,re=k.far),k.layers.mask=ee.layers.mask|6,y.layers.mask=k.layers.mask&3,T.layers.mask=k.layers.mask&5;const Fe=ee.parent,Ce=k.cameras;Re(k,Fe);for(let Xe=0;Xe<Ce.length;Xe++)Re(Ce[Xe],Fe);Ce.length===2?xe(k,y,T):k.projectionMatrix.copy(y.projectionMatrix),Ne(ee,k,Fe)};function Ne(ee,se,Te){Te===null?ee.matrix.copy(se.matrixWorld):(ee.matrix.copy(Te.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ka*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(ee){return h[ee]};let tt=null;function ot(ee,se){if(u=se.getViewerPose(c||o),v=se,u!==null){const Te=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;Te.length!==k.cameras.length&&(k.cameras.length=0,Fe=!0);for(let _=0;_<Te.length;_++){const V=Te[_];let $=null;if(p!==null)$=p.getViewport(V);else{const O=f.getViewSubImage(d,V);$=O.viewport,_===0&&(e.setRenderTargetTextures(S,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(S))}let G=L[_];G===void 0&&(G=new Zt,G.layers.enable(_),G.viewport=new mt,L[_]=G),G.matrix.fromArray(V.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(V.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set($.x,$.y,$.width,$.height),_===0&&(k.matrix.copy(G.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Fe===!0&&k.cameras.push(G)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const _=f.getDepthInformation(Te[0]);_&&_.isValid&&_.texture&&m.init(_,r.renderState)}if(Ce&&Ce.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let _=0;_<Te.length;_++){const V=Te[_].camera;if(V){let $=h[V];$||($=new Pf,h[V]=$);const G=f.getCameraImage(V);$.sourceTexture=G}}}}for(let Te=0;Te<w.length;Te++){const Fe=P[Te],Ce=w[Te];Fe!==null&&Ce!==void 0&&Ce.update(Fe,se,c||o)}tt&&tt(ee,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),v=null}const $e=new Lf;$e.setAnimationLoop(ot),this.setAnimationLoop=function(ee){tt=ee},this.dispose=function(){}}}const mi=new yn,$x=new vt;function Kx(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,bf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,C,R,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),E(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,C,R):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ht&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ht&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const C=e.get(h),R=C.envMap,S=C.envMapRotation;R&&(m.envMap.value=R,mi.copy(S),mi.x*=-1,mi.y*=-1,mi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(mi)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,C,R){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*C,m.scale.value=R*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,C){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function E(m,h){const C=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jx(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,R){const S=R.program;i.uniformBlockBinding(C,S)}function c(C,R){let S=r[C.id];S===void 0&&(v(C),S=u(C),r[C.id]=S,C.addEventListener("dispose",m));const w=R.program;i.updateUBOMapping(C,w);const P=e.render.frame;s[C.id]!==P&&(d(C),s[C.id]=P)}function u(C){const R=f();C.__bindingPointIndex=R;const S=n.createBuffer(),w=C.__size,P=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,S),S}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const R=r[C.id],S=C.uniforms,w=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let P=0,b=S.length;P<b;P++){const I=Array.isArray(S[P])?S[P]:[S[P]];for(let y=0,T=I.length;y<T;y++){const L=I[y];if(p(L,P,y,w)===!0){const k=L.__offset,j=Array.isArray(L.value)?L.value:[L.value];let re=0;for(let te=0;te<j.length;te++){const Z=j[te],Q=E(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,k+re,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,re),re+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(C,R,S,w){const P=C.value,b=R+"_"+S;if(w[b]===void 0)return typeof P=="number"||typeof P=="boolean"?w[b]=P:w[b]=P.clone(),!0;{const I=w[b];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return w[b]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function v(C){const R=C.uniforms;let S=0;const w=16;for(let b=0,I=R.length;b<I;b++){const y=Array.isArray(R[b])?R[b]:[R[b]];for(let T=0,L=y.length;T<L;T++){const k=y[T],j=Array.isArray(k.value)?k.value:[k.value];for(let re=0,te=j.length;re<te;re++){const Z=j[re],Q=E(Z),B=S%w,he=B%Q.boundary,xe=B+he;S+=he,xe!==0&&w-xe<Q.storage&&(S+=w-xe),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Q.storage}}}const P=S%w;return P>0&&(S+=w-P),C.__size=S,C.__cache={},this}function E(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function m(C){const R=C.target;R.removeEventListener("dispose",m);const S=o.indexOf(R.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function h(){for(const C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Zx{constructor(e={}){const{canvas:t=wm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),E=new Int32Array(4);let m=null,h=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let w=!1;this._outputColorSpace=jt;let P=0,b=0,I=null,y=-1,T=null;const L=new mt,k=new mt;let j=null;const re=new Ye(0);let te=0,Z=t.width,Q=t.height,B=1,he=null,xe=null;const Re=new mt(0,0,Z,Q),Ne=new mt(0,0,Z,Q);let tt=!1;const ot=new wf;let $e=!1,ee=!1;const se=new vt,Te=new W,Fe=new mt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function A(){return I===null?B:1}let _=i;function V(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ce,!1),_===null){const N="webgl2";if(_=V(N,M),_===null)throw V(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let $,G,O,oe,q,J,ne,_e,x,g,D,H,K,z,Me,ae,Se,Ee,le,ge,we,ye,pe,Be;function U(){$=new av(_),$.init(),ye=new kx(_,$),G=new ev(_,$,e,ye),O=new Vx(_,$),G.reversedDepthBuffer&&d&&O.buffers.depth.setReversed(!0),oe=new uv(_),q=new wx,J=new Gx(_,$,O,q,G,ye,oe),ne=new nv(S),_e=new ov(S),x=new gg(_),pe=new J0(_,x),g=new lv(_,x,oe,pe),D=new hv(_,g,x,oe),le=new fv(_,G,J),ae=new tv(q),H=new Rx(S,ne,_e,$,G,pe,ae),K=new Kx(S,q),z=new Px,Me=new Fx($),Ee=new Z0(S,ne,_e,O,D,p,l),Se=new Hx(S,D,G),Be=new jx(_,oe,G,O),ge=new Q0(_,$,oe),we=new cv(_,$,oe),oe.programs=H.programs,S.capabilities=G,S.extensions=$,S.properties=q,S.renderLists=z,S.shadowMap=Se,S.state=O,S.info=oe}U();const fe=new Yx(S,_);this.xr=fe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=$.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(M){M!==void 0&&(B=M,this.setSize(Z,Q,!1))},this.getSize=function(M){return M.set(Z,Q)},this.setSize=function(M,N,X=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,Q=N,t.width=Math.floor(M*B),t.height=Math.floor(N*B),X===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Z*B,Q*B).floor()},this.setDrawingBufferSize=function(M,N,X){Z=M,Q=N,B=X,t.width=Math.floor(M*X),t.height=Math.floor(N*X),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Re)},this.setViewport=function(M,N,X,Y){M.isVector4?Re.set(M.x,M.y,M.z,M.w):Re.set(M,N,X,Y),O.viewport(L.copy(Re).multiplyScalar(B).round())},this.getScissor=function(M){return M.copy(Ne)},this.setScissor=function(M,N,X,Y){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,N,X,Y),O.scissor(k.copy(Ne).multiplyScalar(B).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){O.setScissorTest(tt=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){xe=M},this.getClearColor=function(M){return M.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,X=!0){let Y=0;if(M){let F=!1;if(I!==null){const ue=I.texture.format;F=ue===vl||ue===_l||ue===gl}if(F){const ue=I.texture.type,ve=ue===zn||ue===bi||ue===Nr||ue===Fr||ue===pl||ue===ml,Pe=Ee.getClearColor(),be=Ee.getClearAlpha(),Ue=Pe.r,Oe=Pe.g,De=Pe.b;ve?(v[0]=Ue,v[1]=Oe,v[2]=De,v[3]=be,_.clearBufferuiv(_.COLOR,0,v)):(E[0]=Ue,E[1]=Oe,E[2]=De,E[3]=be,_.clearBufferiv(_.COLOR,0,E))}else Y|=_.COLOR_BUFFER_BIT}N&&(Y|=_.DEPTH_BUFFER_BIT),X&&(Y|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ee.dispose(),z.dispose(),Me.dispose(),q.dispose(),ne.dispose(),_e.dispose(),D.dispose(),pe.dispose(),Be.dispose(),H.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",fn),fe.removeEventListener("sessionend",yl),oi.stop()};function de(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=oe.autoReset,N=Se.enabled,X=Se.autoUpdate,Y=Se.needsUpdate,F=Se.type;U(),oe.autoReset=M,Se.enabled=N,Se.autoUpdate=X,Se.needsUpdate=Y,Se.type=F}function ce(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ie(M){const N=M.target;N.removeEventListener("dispose",ie),Le(N)}function Le(M){He(M),q.remove(M)}function He(M){const N=q.get(M).programs;N!==void 0&&(N.forEach(function(X){H.releaseProgram(X)}),M.isShaderMaterial&&H.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,X,Y,F,ue){N===null&&(N=Ce);const ve=F.isMesh&&F.matrixWorld.determinant()<0,Pe=Ff(M,N,X,Y,F);O.setMaterial(Y,ve);let be=X.index,Ue=1;if(Y.wireframe===!0){if(be=g.getWireframeAttribute(X),be===void 0)return;Ue=2}const Oe=X.drawRange,De=X.attributes.position;let We=Oe.start*Ue,it=(Oe.start+Oe.count)*Ue;ue!==null&&(We=Math.max(We,ue.start*Ue),it=Math.min(it,(ue.start+ue.count)*Ue)),be!==null?(We=Math.max(We,0),it=Math.min(it,be.count)):De!=null&&(We=Math.max(We,0),it=Math.min(it,De.count));const pt=it-We;if(pt<0||pt===1/0)return;pe.setup(F,Y,Pe,X,be);let ut,st=ge;if(be!==null&&(ut=x.get(be),st=we,st.setIndex(ut)),F.isMesh)Y.wireframe===!0?(O.setLineWidth(Y.wireframeLinewidth*A()),st.setMode(_.LINES)):st.setMode(_.TRIANGLES);else if(F.isLine){let Ie=Y.linewidth;Ie===void 0&&(Ie=1),O.setLineWidth(Ie*A()),F.isLineSegments?st.setMode(_.LINES):F.isLineLoop?st.setMode(_.LINE_LOOP):st.setMode(_.LINE_STRIP)}else F.isPoints?st.setMode(_.POINTS):F.isSprite&&st.setMode(_.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ie=F._multiDrawStarts,ht=F._multiDrawCounts,Ke=F._multiDrawCount,Vt=be?x.get(be).bytesPerElement:1,Ci=q.get(Y).currentProgram.getUniforms();for(let Gt=0;Gt<Ke;Gt++)Ci.setValue(_,"_gl_DrawID",Gt),st.render(Ie[Gt]/Vt,ht[Gt])}else if(F.isInstancedMesh)st.renderInstances(We,pt,F.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ht=Math.min(X.instanceCount,Ie);st.renderInstances(We,pt,ht)}else st.render(We,pt)};function at(M,N,X){M.transparent===!0&&M.side===Nn&&M.forceSinglePass===!1?(M.side=Ht,M.needsUpdate=!0,Zr(M,N,X),M.side=ii,M.needsUpdate=!0,Zr(M,N,X),M.side=Nn):Zr(M,N,X)}this.compile=function(M,N,X=null){X===null&&(X=M),h=Me.get(X),h.init(N),R.push(h),X.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),M!==X&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const Y=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ue=F.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Pe=ue[ve];at(Pe,X,F),Y.add(Pe)}else at(ue,X,F),Y.add(ue)}),h=R.pop(),Y},this.compileAsync=function(M,N,X=null){const Y=this.compile(M,N,X);return new Promise(F=>{function ue(){if(Y.forEach(function(ve){q.get(ve).currentProgram.isReady()&&Y.delete(ve)}),Y.size===0){F(M);return}setTimeout(ue,10)}$.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ze=null;function Tn(M){Ze&&Ze(M)}function fn(){oi.stop()}function yl(){oi.start()}const oi=new Lf;oi.setAnimationLoop(Tn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(M){Ze=M,fe.setAnimationLoop(M),M===null?oi.stop():oi.start()},fe.addEventListener("sessionstart",fn),fe.addEventListener("sessionend",yl),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,N,I),h=Me.get(M,R.length),h.init(N),R.push(h),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ot.setFromProjectionMatrix(se,xn,N.reversedDepth),ee=this.localClippingEnabled,$e=ae.init(this.clippingPlanes,ee),m=z.get(M,C.length),m.init(),C.push(m),fe.enabled===!0&&fe.isPresenting===!0){const ue=S.xr.getDepthSensingMesh();ue!==null&&Js(ue,N,-1/0,S.sortObjects)}Js(M,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(he,xe),Xe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Xe&&Ee.addToRenderList(m,M),this.info.render.frame++,$e===!0&&ae.beginShadows();const X=h.state.shadowsArray;Se.render(X,M,N),$e===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,F=m.transmissive;if(h.setupLights(),N.isArrayCamera){const ue=N.cameras;if(F.length>0)for(let ve=0,Pe=ue.length;ve<Pe;ve++){const be=ue[ve];bl(Y,F,M,be)}Xe&&Ee.render(M);for(let ve=0,Pe=ue.length;ve<Pe;ve++){const be=ue[ve];Tl(m,M,be,be.viewport)}}else F.length>0&&bl(Y,F,M,N),Xe&&Ee.render(M),Tl(m,M,N);I!==null&&b===0&&(J.updateMultisampleRenderTarget(I),J.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(S,M,N),pe.resetDefaultState(),y=-1,T=null,R.pop(),R.length>0?(h=R[R.length-1],$e===!0&&ae.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Js(M,N,X,Y){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ot.intersectsSprite(M)){Y&&Fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(se);const ve=D.update(M),Pe=M.material;Pe.visible&&m.push(M,ve,Pe,X,Fe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ot.intersectsObject(M))){const ve=D.update(M),Pe=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Fe.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Fe.copy(ve.boundingSphere.center)),Fe.applyMatrix4(M.matrixWorld).applyMatrix4(se)),Array.isArray(Pe)){const be=ve.groups;for(let Ue=0,Oe=be.length;Ue<Oe;Ue++){const De=be[Ue],We=Pe[De.materialIndex];We&&We.visible&&m.push(M,ve,We,X,Fe.z,De)}}else Pe.visible&&m.push(M,ve,Pe,X,Fe.z,null)}}const ue=M.children;for(let ve=0,Pe=ue.length;ve<Pe;ve++)Js(ue[ve],N,X,Y)}function Tl(M,N,X,Y){const F=M.opaque,ue=M.transmissive,ve=M.transparent;h.setupLightsView(X),$e===!0&&ae.setGlobalState(S.clippingPlanes,X),Y&&O.viewport(L.copy(Y)),F.length>0&&jr(F,N,X),ue.length>0&&jr(ue,N,X),ve.length>0&&jr(ve,N,X),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function bl(M,N,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Ai(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Wr:zn,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ue=h.state.transmissionRenderTarget[Y.id],ve=Y.viewport||L;ue.setSize(ve.z*S.transmissionResolutionScale,ve.w*S.transmissionResolutionScale);const Pe=S.getRenderTarget(),be=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(re),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Ee.render(X);const Oe=S.toneMapping;S.toneMapping=ei;const De=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),$e===!0&&ae.setGlobalState(S.clippingPlanes,Y),jr(M,X,Y),J.updateMultisampleRenderTarget(ue),J.updateRenderTargetMipmap(ue),$.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let it=0,pt=N.length;it<pt;it++){const ut=N[it],st=ut.object,Ie=ut.geometry,ht=ut.material,Ke=ut.group;if(ht.side===Nn&&st.layers.test(Y.layers)){const Vt=ht.side;ht.side=Ht,ht.needsUpdate=!0,Al(st,X,Y,Ie,ht,Ke),ht.side=Vt,ht.needsUpdate=!0,We=!0}}We===!0&&(J.updateMultisampleRenderTarget(ue),J.updateRenderTargetMipmap(ue))}S.setRenderTarget(Pe,be,Ue),S.setClearColor(re,te),De!==void 0&&(Y.viewport=De),S.toneMapping=Oe}function jr(M,N,X){const Y=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ue=M.length;F<ue;F++){const ve=M[F],Pe=ve.object,be=ve.geometry,Ue=ve.group;let Oe=ve.material;Oe.allowOverride===!0&&Y!==null&&(Oe=Y),Pe.layers.test(X.layers)&&Al(Pe,N,X,be,Oe,Ue)}}function Al(M,N,X,Y,F,ue){M.onBeforeRender(S,N,X,Y,F,ue),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(S,N,X,Y,M,ue),F.transparent===!0&&F.side===Nn&&F.forceSinglePass===!1?(F.side=Ht,F.needsUpdate=!0,S.renderBufferDirect(X,N,Y,F,M,ue),F.side=ii,F.needsUpdate=!0,S.renderBufferDirect(X,N,Y,F,M,ue),F.side=Nn):S.renderBufferDirect(X,N,Y,F,M,ue),M.onAfterRender(S,N,X,Y,F,ue)}function Zr(M,N,X){N.isScene!==!0&&(N=Ce);const Y=q.get(M),F=h.state.lights,ue=h.state.shadowsArray,ve=F.state.version,Pe=H.getParameters(M,F.state,ue,N,X),be=H.getProgramCacheKey(Pe);let Ue=Y.programs;Y.environment=M.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(M.isMeshStandardMaterial?_e:ne).get(M.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",ie),Ue=new Map,Y.programs=Ue);let Oe=Ue.get(be);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===ve)return wl(M,Pe),Oe}else Pe.uniforms=H.getUniforms(M),M.onBeforeCompile(Pe,S),Oe=H.acquireProgram(Pe,be),Ue.set(be,Oe),Y.uniforms=Pe.uniforms;const De=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=ae.uniform),wl(M,Pe),Y.needsLights=Bf(M),Y.lightsStateVersion=ve,Y.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function Rl(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Ls.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function wl(M,N){const X=q.get(M);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Ff(M,N,X,Y,F){N.isScene!==!0&&(N=Ce),J.resetTextureUnits();const ue=N.fog,ve=Y.isMeshStandardMaterial?N.environment:null,Pe=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ar,be=(Y.isMeshStandardMaterial?_e:ne).get(Y.envMap||ve),Ue=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!X.morphAttributes.position,We=!!X.morphAttributes.normal,it=!!X.morphAttributes.color;let pt=ei;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pt=S.toneMapping);const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=ut!==void 0?ut.length:0,Ie=q.get(Y),ht=h.state.lights;if($e===!0&&(ee===!0||M!==T)){const Rt=M===T&&Y.id===y;ae.setState(Y,M,Rt)}let Ke=!1;Y.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ht.state.version||Ie.outputColorSpace!==Pe||F.isBatchedMesh&&Ie.batching===!1||!F.isBatchedMesh&&Ie.batching===!0||F.isBatchedMesh&&Ie.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ie.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ie.instancing===!1||!F.isInstancedMesh&&Ie.instancing===!0||F.isSkinnedMesh&&Ie.skinning===!1||!F.isSkinnedMesh&&Ie.skinning===!0||F.isInstancedMesh&&Ie.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ie.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ie.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ie.instancingMorph===!1&&F.morphTexture!==null||Ie.envMap!==be||Y.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Ue||Ie.vertexTangents!==Oe||Ie.morphTargets!==De||Ie.morphNormals!==We||Ie.morphColors!==it||Ie.toneMapping!==pt||Ie.morphTargetsCount!==st)&&(Ke=!0):(Ke=!0,Ie.__version=Y.version);let Vt=Ie.currentProgram;Ke===!0&&(Vt=Zr(Y,N,F));let Ci=!1,Gt=!1,dr=!1;const dt=Vt.getUniforms(),Yt=Ie.uniforms;if(O.useProgram(Vt.program)&&(Ci=!0,Gt=!0,dr=!0),Y.id!==y&&(y=Y.id,Gt=!0),Ci||T!==M){O.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(_,"projectionMatrix",M.projectionMatrix),dt.setValue(_,"viewMatrix",M.matrixWorldInverse);const Nt=dt.map.cameraPosition;Nt!==void 0&&Nt.setValue(_,Te.setFromMatrixPosition(M.matrixWorld)),G.logarithmicDepthBuffer&&dt.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&dt.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,Gt=!0,dr=!0)}if(F.isSkinnedMesh){dt.setOptional(_,F,"bindMatrix"),dt.setOptional(_,F,"bindMatrixInverse");const Rt=F.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(_,"boneTexture",Rt.boneTexture,J))}F.isBatchedMesh&&(dt.setOptional(_,F,"batchingTexture"),dt.setValue(_,"batchingTexture",F._matricesTexture,J),dt.setOptional(_,F,"batchingIdTexture"),dt.setValue(_,"batchingIdTexture",F._indirectTexture,J),dt.setOptional(_,F,"batchingColorTexture"),F._colorsTexture!==null&&dt.setValue(_,"batchingColorTexture",F._colorsTexture,J));const $t=X.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&le.update(F,X,Vt),(Gt||Ie.receiveShadow!==F.receiveShadow)&&(Ie.receiveShadow=F.receiveShadow,dt.setValue(_,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Yt.envMap.value=be,Yt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(Yt.envMapIntensity.value=N.environmentIntensity),Gt&&(dt.setValue(_,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&Of(Yt,dr),ue&&Y.fog===!0&&K.refreshFogUniforms(Yt,ue),K.refreshMaterialUniforms(Yt,Y,B,Q,h.state.transmissionRenderTarget[M.id]),Ls.upload(_,Rl(Ie),Yt,J)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ls.upload(_,Rl(Ie),Yt,J),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&dt.setValue(_,"center",F.center),dt.setValue(_,"modelViewMatrix",F.modelViewMatrix),dt.setValue(_,"normalMatrix",F.normalMatrix),dt.setValue(_,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Rt=Y.uniformsGroups;for(let Nt=0,Qs=Rt.length;Nt<Qs;Nt++){const ai=Rt[Nt];Be.update(ai,Vt),Be.bind(ai,Vt)}}return Vt}function Of(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Bf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,N,X){const Y=q.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=N,q.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const X=q.get(M);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Hf=_.createFramebuffer();this.setRenderTarget=function(M,N=0,X=0){I=M,P=N,b=X;let Y=!0,F=null,ue=!1,ve=!1;if(M){const be=q.get(M);if(be.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(_.FRAMEBUFFER,null),Y=!1;else if(be.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(be.__hasExternalTextures)J.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const De=M.depthTexture;if(be.__boundDepthTexture!==De){if(De!==null&&q.has(De)&&(M.width!==De.image.width||M.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const Oe=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?F=Oe[N][X]:F=Oe[N],ue=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?F=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[X]:F=Oe,L.copy(M.viewport),k.copy(M.scissor),j=M.scissorTest}else L.copy(Re).multiplyScalar(B).floor(),k.copy(Ne).multiplyScalar(B).floor(),j=tt;if(X!==0&&(F=Hf),O.bindFramebuffer(_.FRAMEBUFFER,F)&&Y&&O.drawBuffers(M,F),O.viewport(L),O.scissor(k),O.setScissorTest(j),ue){const be=q.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,X)}else if(ve){const be=N;for(let Ue=0;Ue<M.textures.length;Ue++){const Oe=q.get(M.textures[Ue]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,X,be)}}else if(M!==null&&X!==0){const be=q.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,be.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(M,N,X,Y,F,ue,ve,Pe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){O.bindFramebuffer(_.FRAMEBUFFER,be);try{const Ue=M.textures[Pe],Oe=Ue.format,De=Ue.type;if(!G.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-Y&&X>=0&&X<=M.height-F&&(M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Pe),_.readPixels(N,X,Y,F,ye.convert(Oe),ye.convert(De),ue))}finally{const Ue=I!==null?q.get(I).__webglFramebuffer:null;O.bindFramebuffer(_.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,N,X,Y,F,ue,ve,Pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be)if(N>=0&&N<=M.width-Y&&X>=0&&X<=M.height-F){O.bindFramebuffer(_.FRAMEBUFFER,be);const Ue=M.textures[Pe],Oe=Ue.format,De=Ue.type;if(!G.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,We),_.bufferData(_.PIXEL_PACK_BUFFER,ue.byteLength,_.STREAM_READ),M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Pe),_.readPixels(N,X,Y,F,ye.convert(Oe),ye.convert(De),0);const it=I!==null?q.get(I).__webglFramebuffer:null;O.bindFramebuffer(_.FRAMEBUFFER,it);const pt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Cm(_,pt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,We),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,ue),_.deleteBuffer(We),_.deleteSync(pt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,X=0){const Y=Math.pow(2,-X),F=Math.floor(M.image.width*Y),ue=Math.floor(M.image.height*Y),ve=N!==null?N.x:0,Pe=N!==null?N.y:0;J.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,X,0,0,ve,Pe,F,ue),O.unbindTexture()};const zf=_.createFramebuffer(),Vf=_.createFramebuffer();this.copyTextureToTexture=function(M,N,X=null,Y=null,F=0,ue=null){ue===null&&(F!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=F,F=0):ue=0);let ve,Pe,be,Ue,Oe,De,We,it,pt;const ut=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(X!==null)ve=X.max.x-X.min.x,Pe=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Ue=X.min.x,Oe=X.min.y,De=X.isBox3?X.min.z:0;else{const $t=Math.pow(2,-F);ve=Math.floor(ut.width*$t),Pe=Math.floor(ut.height*$t),M.isDataArrayTexture?be=ut.depth:M.isData3DTexture?be=Math.floor(ut.depth*$t):be=1,Ue=0,Oe=0,De=0}Y!==null?(We=Y.x,it=Y.y,pt=Y.z):(We=0,it=0,pt=0);const st=ye.convert(N.format),Ie=ye.convert(N.type);let ht;N.isData3DTexture?(J.setTexture3D(N,0),ht=_.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),ht=_.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),ht=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,N.unpackAlignment);const Ke=_.getParameter(_.UNPACK_ROW_LENGTH),Vt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Ci=_.getParameter(_.UNPACK_SKIP_PIXELS),Gt=_.getParameter(_.UNPACK_SKIP_ROWS),dr=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,ut.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ut.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ue),_.pixelStorei(_.UNPACK_SKIP_ROWS,Oe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,De);const dt=M.isDataArrayTexture||M.isData3DTexture,Yt=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const $t=q.get(M),Rt=q.get(N),Nt=q.get($t.__renderTarget),Qs=q.get(Rt.__renderTarget);O.bindFramebuffer(_.READ_FRAMEBUFFER,Nt.__webglFramebuffer),O.bindFramebuffer(_.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let ai=0;ai<be;ai++)dt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,q.get(M).__webglTexture,F,De+ai),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,q.get(N).__webglTexture,ue,pt+ai)),_.blitFramebuffer(Ue,Oe,ve,Pe,We,it,ve,Pe,_.DEPTH_BUFFER_BIT,_.NEAREST);O.bindFramebuffer(_.READ_FRAMEBUFFER,null),O.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||q.has(M)){const $t=q.get(M),Rt=q.get(N);O.bindFramebuffer(_.READ_FRAMEBUFFER,zf),O.bindFramebuffer(_.DRAW_FRAMEBUFFER,Vf);for(let Nt=0;Nt<be;Nt++)dt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,$t.__webglTexture,F,De+Nt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,$t.__webglTexture,F),Yt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Rt.__webglTexture,ue,pt+Nt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Rt.__webglTexture,ue),F!==0?_.blitFramebuffer(Ue,Oe,ve,Pe,We,it,ve,Pe,_.COLOR_BUFFER_BIT,_.NEAREST):Yt?_.copyTexSubImage3D(ht,ue,We,it,pt+Nt,Ue,Oe,ve,Pe):_.copyTexSubImage2D(ht,ue,We,it,Ue,Oe,ve,Pe);O.bindFramebuffer(_.READ_FRAMEBUFFER,null),O.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Yt?M.isDataTexture||M.isData3DTexture?_.texSubImage3D(ht,ue,We,it,pt,ve,Pe,be,st,Ie,ut.data):N.isCompressedArrayTexture?_.compressedTexSubImage3D(ht,ue,We,it,pt,ve,Pe,be,st,ut.data):_.texSubImage3D(ht,ue,We,it,pt,ve,Pe,be,st,Ie,ut):M.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,ue,We,it,ve,Pe,st,Ie,ut.data):M.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,ue,We,it,ut.width,ut.height,st,ut.data):_.texSubImage2D(_.TEXTURE_2D,ue,We,it,ve,Pe,st,Ie,ut);_.pixelStorei(_.UNPACK_ROW_LENGTH,Ke),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Vt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ci),_.pixelStorei(_.UNPACK_SKIP_ROWS,Gt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,dr),ue===0&&N.generateMipmaps&&_.generateMipmap(ht),O.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),O.unbindTexture()},this.resetState=function(){P=0,b=0,I=null,O.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Jx=.1,Qx=40,eM={__name:"Bg",setup(n,{expose:e}){const t=pn(null);let i,r,s,o,a,l,c,u,f,d=0;const p=new pg;function v(S,w){return Math.random()*(w-S)+S}function E(S,w,P){return S*(1-P)+w*P}function m(){u.forEach(S=>S.setForceVisible(!0)),setTimeout(()=>{u.forEach(S=>S.setForceVisible(!1))},150)}class h{constructor(w){this.prevPos=new W;var P=Math.random()*1-3;const b=new cr(P,P/2),y=new Cc().load("./Circle.png");y.center.set(.5,.5),this.material=new wc({color:new Ye("#b2e5fb"),map:y,transparent:!0}),this.mesh=new an(b,this.material),w.add(this.mesh),this.reset()}reset(){this.baseX=v(-65,-25),this.yPos=v(-40,-35),this.speed=v(15,30),this.freq1=v(1,3),this.freq2=v(2,4),this.amplitude1=v(1,7),this.amplitude2=v(2,9),this.offset1=v(Math.PI,Math.PI*25),this.offset2=v(Math.PI,Math.PI*45),this.opacity=v(.5,.9),this.opacitySpeed=v(.2,.4),this.deadEnd=v(35,50)}update(w,P){this.yPos+=this.speed*w,this.mesh.position.y=this.yPos,this.opacity-=this.opacitySpeed*w,this.material.opacity=this.opacity,this.mesh.position.x=this.baseX+Math.sin(P*this.freq1+this.offset1)*this.amplitude1+Math.sin(P*this.freq2+this.offset2)*this.amplitude2,this.mesh.position.z=950;let b=new W().subVectors(this.mesh.position,this.prevPos);if(b.lengthSq()>1e-4){const I=Math.atan2(b.y,b.x);this.mesh.rotation.z=I}this.prevPos.copy(this.mesh.position),this.yPos>this.deadEnd&&(this.yPos=-this.deadEnd,this.reset())}}class C{constructor(w,P,b,I,y,T,L="any"){const k=new Cc;L=="any"?Math.random()>.5?this.smokeTexture=k.load("./Smoke.png"):this.smokeTexture=k.load("./Smoke2.png"):this.smokeTexture=k.load(L),this.smokeTexture.center.set(.5,.5),this.material=new wc({color:new Ye(b),map:this.smokeTexture,transparent:!0}),this.smokeGeo=new cr(P,P),this.mesh=new an(this.smokeGeo,this.material),this.mesh.position.set(I,y,T),this.mesh.rotation.z=Math.random()*360,w.add(this.mesh)}update(w){this.mesh.rotation.z+=w*.2}}class R extends C{constructor(w,P,b,I,y,T){super(w,P,b,I,y,T,"./Smoke.png"),this.minOpacity=.3,this.maxOpacity=.8,this.blinkSpeed=1+Math.random(),this.phase=Math.random()*Math.PI*2,this.isMaxVisible=!1,this.lerpSpeed=5,this.currentOpacity=1}setForceVisible(w=!0){this.isMaxVisible=w}update(w){super.update(w);const P=1-Math.exp(-this.lerpSpeed*w);var b=this.isMaxVisible?this.maxOpacity:this.minOpacity;this.currentOpacity=E(this.currentOpacity,b,P),this.mesh.material.opacity=this.currentOpacity}}return sl(()=>{function S(){const b=t.value.clientWidth,I=t.value.clientHeight;i=new Zx({antialias:!0,alpha:!0}),i.setSize(b,I,!1),t.value.appendChild(i.domElement),r=new tg,r.background=new Ye("#001525"),a=new Zt(75,b/I,1,1e4),a.position.z=1e3,r.add(a),o=new hg(16777215,1),r.add(o),s=[];for(let L=0;L<150;L++)s.push(new C(r,300,"#002642",Math.random()*500-250,Math.random()*500-250,Math.random()*1e3-100));u=[];var y=-15,T=-2.5;for(let L=0;L<5;L++)u.push(new R(r,20,"#77b0d6",y,T,990)),y+=1.5,T-=1.7;c=[]}f=()=>{const b=t.value.clientWidth,I=t.value.clientHeight;i.setSize(b,I,!1),a.aspect=b/I,a.updateProjectionMatrix()};const w=()=>{l=requestAnimationFrame(w);var b=p.getDelta();const I=p.elapsedTime;d+=b,d>=Jx&&c.length<Qx&&(c.push(new h(r)),d=0),s.forEach(y=>y.update(b)),u.forEach(y=>y.update(b)),c.forEach(y=>y.update(b,I)),P()};function P(){i.setClearColor(16777215,0),i.render(r,a)}S(),f(),w(),window.addEventListener("resize",f)}),ol(()=>{cancelAnimationFrame(l),window.removeEventListener("resize",f),i?.dispose()}),e({setMax:m}),(S,w)=>(Jt(),cn("div",{ref_key:"wrap",ref:t,id:"bg"},null,512))}},tM={id:"infoBlock"},nM={id:"commanderBlock"},iM={__name:"App",setup(n){const e=pn("0"),t=pn("N/A"),i=pn(null);let r=!0;function s(o){t.value=o.name,e.value=o.level,r?r=!1:i.value?.setMax()}return(o,a)=>(Jt(),cn(Bt,null,[Dt(eM,{ref_key:"bgRef",ref:i},null,512),et("div",tM,[Dt(vp,{level:e.value,name:t.value},null,8,["level","name"]),Dt(wp)]),et("div",nM,[Dt(Hp,{onUpdate:s})])],64))}};up(iM).mount("#app");
