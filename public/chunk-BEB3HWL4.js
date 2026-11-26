import{$ as s,A as jn,Aa as ve,Ab as Ue,B as Et,Ba as ce,Bb as z,Ca as L,Cb as B,D as Oi,Da as C,Db as Nr,E as Nt,Ea as aa,Eb as Tt,F as br,Fa as Cr,Fb as vt,G as ta,Ga as Ee,Gb as rt,H as Un,Ha as p,Hb as A,Ia as qe,Ib as $e,Ja as je,Jb as P,K as na,Ka as pe,Kb as be,L as _r,La as ln,Lb as Je,M as ia,Ma as dn,Mb as mn,N as Ai,Na as me,Nb as un,O as ot,Oa as Ve,Ob as pn,P as Rt,Pa as ra,Pb as Y,Q as te,Qa as Sr,Qb as Rr,R as vr,Rb as sa,S as Pe,Sb as la,T as pt,Ta as k,Tb as Ir,Ua as O,V as Xe,Va as _,Vb as oe,W as It,Wa as Mr,Wb as se,X as I,Xa as Z,Xb as fn,Ya as Le,Yb as da,Z as y,Za as Dr,Zb as Or,_ as Wn,_b as hn,a as T,ab as cn,ac as Be,b as ke,ba as Ot,bb as kr,bc as G,cb as $,cc as Li,d as we,da as At,db as E,dc as We,ea as ne,eb as N,ec as Ar,f as ut,fa as ie,fb as Gn,fc as zi,g as ur,ga as ft,gb as Ht,gc as ge,h as M,ha as yr,hb as jt,i as kt,ia as xr,ib as R,ic as w,j as Ni,ja as J,jb as h,jc as st,k as Qo,ka as Q,kb as g,kc as ca,l as Jo,la as ht,lb as Ce,lc as Bi,m as pr,mb as Re,mc as ma,n as fr,na as K,nb as Ie,nc as Tr,o as he,oa as W,ob as at,oc as Fr,p as hr,pa as Ti,pb as gt,pc as Pr,q as ea,qb as bt,qc as Vr,rb as ze,rc as qn,s as le,sa as V,sb as ye,t as it,ta as Fi,tb as _t,tc as Lr,ua as Pi,ub as S,uc as Hi,v as gr,va as Vi,vb as Er,w as Ri,wa as oa,wb as x,wc as ji,x as Ii,xa as de,xb as fe,y as Fe,ya as Ze,yb as U,z as Ne,za as wr,zb as Qe}from"./chunk-JWC6J42V.js";function ua(i){return da(ke(T({},i),{loader:void 0,stream:n=>{let e,t=!1,o=V({value:void 0}),{resolve:a,promise:r}=xr(),l=!1;function d(){l||(l=!0,a(o))}let m=()=>{t=!0,e?.unsubscribe(),n.abortSignal.removeEventListener("abort",m),d()};n.abortSignal.addEventListener("abort",m);function c(v){o.set(v),d()}let u=i.stream;if(u===void 0)throw new pt(990,!1);return e=u(n).subscribe({next:v=>c({value:v}),error:v=>{c({error:Or(v)}),n.abortSignal.removeEventListener("abort",m)},complete:()=>{l||c({error:new pt(-991,!1)}),n.abortSignal.removeEventListener("abort",m)}}),t&&e.unsubscribe(),l?o:r}}))}var Ui=class i{http=s(Hi);httpOptions={headers:new Lr({"Content-Type":"application/json"})};handleError(n="operation",e){return t=>(console.error(`[MongoGenericService Error] ${n} failed on ${this.host}:`,t),he(e))}log(n){console.log(`[MongoGenericService] ${n}`)}listResource=ua({defaultValue:[],stream:()=>this.http.get(this.host,this.httpOptions).pipe(Pe(()=>this.log(`Fetch all resources from ${this.host}`)),Et(this.handleError("getAll",[])))});getByIdResource(n){return ua({params:n,stream:({params:e})=>e?this.http.get(`${this.host}/${e}`,this.httpOptions).pipe(Pe(()=>this.log(`Fetched resource by _id=${e} from ${this.host}`)),Et(this.handleError(`getById _id=${e}`,void 0))):he(void 0)})}create(n){let e=Array.isArray(n)?n:[n];return this.http.post(this.host,e,this.httpOptions).pipe(Pe(t=>{this.log(`Created document with _id=${t} in ${this.host}`),this.listResource.reload()}),Et(this.handleError("create","")))}update(n,e){return this.http.patch(`${this.host}/${n}`,e,this.httpOptions).pipe(Pe(t=>{this.log(`Updated document _id=${t} in ${this.host}`),this.listResource.reload()}),Et(this.handleError("update","")))}delete(n){return this.http.delete(`${this.host}/${n}`,this.httpOptions).pipe(Pe(e=>{this.log(`Deleted document _id=${e} from ${this.host}`),this.listResource.reload()}),Et(this.handleError("delete","")))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=It({token:i,factory:i.\u0275fac})};var gn=class i extends Ui{host="/api/v1/memo";sanitizePayload(n){let e=T({},n);return delete e._id,delete e.createdAt,delete e.updatedAt,delete e.accessCount,delete e.updateCount,e}create(n){let e=Array.isArray(n)?n.map(t=>this.sanitizePayload(t)):this.sanitizePayload(n);return super.create(e)}update(n,e){let t=this.sanitizePayload(e);return super.update(n,t)}static \u0275fac=(()=>{let n;return function(t){return(n||(n=ce(i)))(t||i)}})();static \u0275prov=It({token:i,factory:i.\u0275fac})};var Ft=class i{memoService=s(gn);memosResource=this.memoService.listResource;memoDataSource=oe(()=>this.memosResource.value()??[]);isMutating=V(!1);isLoading=oe(()=>this.memosResource.isLoading()||this.isMutating());currentFilterText=V("");currentView=V("list");selectedMemo=V(null);showFilter=V(!1);showPaginator=V(!1);selectedMemoId=V(null);_sortedAndFilteredMemos=V(null);activeMemoList=oe(()=>this._sortedAndFilteredMemos()??this.memoDataSource());isFormInvalid=V(!0);showFormFilter=V(!1);triggerSave=V(!1);isSwipedInForm=V(!1);scrollMap=new Map;toolbarTitle=oe(()=>this.currentView()==="form"?this.selectedMemo()?"\u30E1\u30E2\u3092\u7DE8\u96C6":"\u65B0\u3057\u3044\u30E1\u30E2":"\u30E1\u30E2\u7BA1\u7406");backToList(){this.selectedMemo.set(null),this.currentView.set("list"),this.triggerSave.set(!1)}openFormForCreate(){this.isSwipedInForm.set(!1),this.selectedMemo.set(null),this.selectedMemoId.set(null),this.setScrollTop(bn,0),this.currentView.set("form")}openFormForEditById(n){let e=this.memoDataSource().find(t=>t._id===n);if(e){let t=this.getScrollTop(bn);this.setScrollTop(n,t),this.isSwipedInForm.set(!1),this.openFormForEdit(e)}}openFormForEdit(n){this.selectedMemo.set(n),this.selectedMemoId.set(n._id??null),this.currentView.set("form")}syncDisplayedMemos(n){this._sortedAndFilteredMemos.set(n)}selectNextMemo(){let n=this.activeMemoList(),e=this.selectedMemoId();if(!e||n.length===0)return;let t=n.findIndex(o=>o._id===e);t>=0&&t<n.length-1&&(this.isSwipedInForm.set(!0),this.openFormForEdit(n[t+1]))}selectPrevMemo(){let n=this.activeMemoList(),e=this.selectedMemoId();if(!e||n.length===0)return;let t=n.findIndex(o=>o._id===e);t>0&&(this.isSwipedInForm.set(!0),this.openFormForEdit(n[t-1]))}togglePaginator(){this.showPaginator.update(n=>{let e=!n;return e&&this.showFilter.set(!1),e})}toggleFilter(){this.showFilter.update(n=>!n)}toggleFormFilter(){this.showFormFilter.update(n=>!n)}getScrollTop(n){return this.scrollMap.get(n)??0}setScrollTop(n,e){this.scrollMap.set(n,e)}saveMemo(n){if(this.isLoading())return;let e=this.selectedMemo();this.triggerSave.set(!1),this.isMutating.set(!0),(e?._id?this.memoService.update(e._id,T(T({},e),n)):this.memoService.create(n)).pipe(Un(()=>this.isMutating.set(!1))).subscribe({next:o=>{o&&(e?._id||this.selectedMemoId.set(o),this.backToList())}})}deleteMemo(n){this.isLoading()||(this.isMutating.set(!0),this.memoService.delete(n).pipe(Un(()=>this.isMutating.set(!1))).subscribe({next:e=>{e&&(this.selectedMemoId()===n&&this.selectedMemoId.set(null),this.scrollMap.delete(n))}}))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=It({token:i,factory:i.\u0275fac})};var pa=new y("ScrollStateToken"),bn="__latest__",_n=class i{el=s(C);state=s(pa);scrollTop=s(lt,{optional:!0,self:!0});libRestoreScroll=G.required();lastActiveKey=null;constructor(){de(n=>{let e=this.libRestoreScroll(),t=this.el.nativeElement,o,a;if(e&&e!==this.lastActiveKey){let r=this.state.getScrollTop(e);this.state.setScrollTop(bn,r),o=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{t&&this.libRestoreScroll()===e&&(t.scrollTop=r,this.scrollTop?.syncVisibility())})})}else!e&&this.lastActiveKey&&(t.scrollTop=0,this.scrollTop?.syncVisibility());this.lastActiveKey=e,n(()=>{o!==void 0&&cancelAnimationFrame(o),a!==void 0&&cancelAnimationFrame(a)})})}onScroll(n){let e=n.target;if(!e||typeof e.checkVisibility=="function"&&!e.checkVisibility())return;let t=e.scrollTop,o=this.libRestoreScroll();this.state.setScrollTop(bn,t),o&&this.state.setScrollTop(o,t)}resetScroll(){let n=this.el.nativeElement;n&&(n.scrollTop=0,this.scrollTop?.syncVisibility());let e=this.libRestoreScroll();this.state.setScrollTop(bn,0),e&&this.state.setScrollTop(e,0)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","libRestoreScroll",""]],hostBindings:function(e,t){e&1&&S("scroll",function(a){return t.onScroll(a)})},inputs:{libRestoreScroll:[1,"libRestoreScroll"]}})};var lt=class i{el=s(C);renderer=s(pe);destroyRef=s(ht);libScrollTop=G(56,{transform:n=>n===""||n===null||n===void 0?56:Number(n)});buttonEl=null;isVisible=!1;constructor(){Ee({read:()=>this.syncVisibility()})}ngOnInit(){let n=this.el.nativeElement,e=this.renderer.createElement("button");this.renderer.setAttribute(e,"type","button"),this.renderer.setAttribute(e,"aria-label","\u5148\u982D\u3078\u623B\u308B"),this.renderer.setAttribute(e,"title","\u5148\u982D\u3078\u623B\u308B"),this.renderer.addClass(e,"lib-scroll-top-btn");let t=this.renderer.createElement("span");this.renderer.addClass(t,"material-icons"),this.renderer.setProperty(t,"textContent","arrow_upward"),this.renderer.appendChild(e,t),this.renderer.appendChild(n,e),this.buttonEl=e;let o=this.renderer.listen(e,"click",a=>{a.stopPropagation(),n.scrollTo({top:0,behavior:"smooth"})});this.destroyRef.onDestroy(()=>{o(),this.buttonEl&&n.contains(this.buttonEl)&&this.renderer.removeChild(n,this.buttonEl),this.buttonEl=null}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.onScroll()})})}syncVisibility(){this.onScroll()}onScroll(){if(!this.buttonEl)return;if(typeof this.el.nativeElement.checkVisibility=="function"&&!this.el.nativeElement.checkVisibility()){this.isVisible&&(this.isVisible=!1,this.renderer.removeClass(this.buttonEl,"is-visible"));return}let n=this.el.nativeElement.scrollTop>this.libScrollTop();this.isVisible!==n&&(this.isVisible=n,this.isVisible?this.renderer.addClass(this.buttonEl,"is-visible"):this.renderer.removeClass(this.buttonEl,"is-visible"))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","libScrollTop",""]],hostBindings:function(e,t){e&1&&S("scroll",function(){return t.onScroll()})},inputs:{libScrollTop:[1,"libScrollTop"]}})};var Wi=class i{destroyRef=s(ht);platformId=s(Pi);isActive=G(!0,{alias:"libBrowserBack"});browserBack=Be();trapId=`trap_${Date.now()}_${Math.random().toString(36).slice(2)}`;hasPushedState=!1;isCleaningUp=!1;constructor(){de(()=>{let n=this.isActive();se(()=>{n?this.pushDummyHistory():this.cleanupDummyHistory()})}),this.destroyRef.onDestroy(()=>{this.cleanupDummyHistory()})}pushDummyHistory(){if(!qn(this.platformId)||this.hasPushedState)return;let n=ke(T({},history.state??{}),{libBrowserBackTrapId:this.trapId});history.pushState(n,"",window.location.href),this.hasPushedState=!0,this.isCleaningUp=!1}cleanupDummyHistory(){!qn(this.platformId)||!this.hasPushedState||(this.hasPushedState=!1,history.state?.libBrowserBackTrapId===this.trapId&&(this.isCleaningUp=!0,history.back()))}onPopState(n){if(this.isCleaningUp){this.isCleaningUp=!1;return}n.state?.libBrowserBackTrapId!==this.trapId&&this.hasPushedState&&(this.hasPushedState=!1,this.browserBack.emit())}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","libBrowserBack",""]],hostBindings:function(e,t){e&1&&S("popstate",function(a){return t.onPopState(a)},Cr)},inputs:{isActive:[1,"libBrowserBack","isActive"]},outputs:{browserBack:"browserBack"}})};var vn=class i{swipeThreshold=G(40);maxSwipeTime=G(500);swipeLeft=Be();swipeRight=Be();startX=0;startY=0;startTime=0;onTouchStart(n){n.touches.length===1&&(this.startX=n.touches[0].clientX,this.startY=n.touches[0].clientY,this.startTime=Date.now())}onTouchEnd(n){if(n.changedTouches.length!==1)return;let e=Date.now()-this.startTime;if(this.startTime=0,e>this.maxSwipeTime())return;let t=n.changedTouches[0].clientX,o=n.changedTouches[0].clientY,a=t-this.startX,r=o-this.startY,l=this.swipeThreshold();Math.abs(a)>l&&Math.abs(a)>Math.abs(r)&&(a<0?this.swipeLeft.emit():this.swipeRight.emit())}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","libSwipe",""]],hostAttrs:[2,"touch-action","pan-y"],hostBindings:function(e,t){e&1&&S("touchstart",function(a){return t.onTouchStart(a)})("touchend",function(a){return t.onTouchEnd(a)})},inputs:{swipeThreshold:[1,"swipeThreshold"],maxSwipeTime:[1,"maxSwipeTime"]},outputs:{swipeLeft:"swipeLeft",swipeRight:"swipeRight"}})};var Gi=class i{el=s(C);scrollTop=s(lt,{optional:!0,self:!0});libScrollTarget=G.required();targetSelector=G(null);beforeScroll=G(null);lastActiveKey=null;constructor(){de(n=>{let e=this.libScrollTarget(),t=this.targetSelector(),o=this.beforeScroll(),a=this.el.nativeElement,r,l,d;e&&e!==this.lastActiveKey&&(o?.(e),r=requestAnimationFrame(()=>{l=requestAnimationFrame(()=>{if(!a||this.libScrollTarget()!==e||!t)return;let m=a.querySelector(t);m&&(m.scrollIntoView({behavior:"instant",block:"center"}),this.scrollTop?.syncVisibility())})})),this.lastActiveKey=e,n(()=>{r!==void 0&&cancelAnimationFrame(r),l!==void 0&&cancelAnimationFrame(l),d!==void 0&&cancelAnimationFrame(d)})})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","libScrollTarget",""]],inputs:{libScrollTarget:[1,"libScrollTarget"],targetSelector:[1,"targetSelector"],beforeScroll:[1,"beforeScroll"]}})};var $r=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(me(pe),me(C))};static \u0275dir=_({type:i})}return i})(),Rd=(()=>{class i extends $r{static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,features:[Z]})}return i})(),io=new y("");var Id={provide:io,useExisting:Xe(()=>Cn),multi:!0};function Od(){let i=ma()?ma().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Ad=new y(""),Cn=(()=>{class i extends $r{_compositionMode;_composing=!1;constructor(e,t,o){super(e,t),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Od())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(me(pe),me(C),me(Ad,8))};static \u0275dir=_({type:i,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,o){t&1&&S("input",function(r){return o._handleInput(r.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(r){return o._compositionEnd(r.target.value)})},standalone:!1,features:[Y([Id]),Z]})}return i})();function ga(i){return i==null||ba(i)===0}function ba(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Qn=new y(""),_a=new y(""),Td=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ut=class{static min(n){return Fd(n)}static max(n){return Pd(n)}static required(n){return Kr(n)}static requiredTrue(n){return Vd(n)}static email(n){return Ld(n)}static minLength(n){return zd(n)}static maxLength(n){return Yr(n)}static pattern(n){return Bd(n)}static nullValidator(n){return $i()}static compose(n){return ts(n)}static composeAsync(n){return ns(n)}};function Fd(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function Pd(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function Kr(i){return ga(i.value)?{required:!0}:null}function Vd(i){return i.value===!0?null:{required:!0}}function Ld(i){return ga(i.value)||Td.test(i.value)?null:{email:!0}}function zd(i){return n=>{let e=n.value?.length??ba(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function Yr(i){return n=>{let e=n.value?.length??ba(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function Bd(i){if(!i)return $i;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(ga(t.value))return null;let o=t.value;return n.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function $i(i){return null}function Xr(i){return i!=null}function Zr(i){return ra(i)?fr(i):i}function Qr(i){let n={};return i.forEach(e=>{n=e!=null?T(T({},n),e):n}),Object.keys(n).length===0?null:n}function Jr(i,n){return n.map(e=>e(i))}function Hd(i){return!i.validate}function es(i){return i.map(n=>Hd(n)?n:e=>n.validate(e))}function ts(i){if(!i)return null;let n=i.filter(Xr);return n.length==0?null:function(e){return Qr(Jr(e,n))}}function va(i){return i!=null?ts(es(i)):null}function ns(i){if(!i)return null;let n=i.filter(Xr);return n.length==0?null:function(e){let t=Jr(e,n).map(Zr);return Ii(t).pipe(le(Qr))}}function ya(i){return i!=null?ns(es(i)):null}function zr(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function is(i){return i._rawValidators}function os(i){return i._rawAsyncValidators}function fa(i){return i?Array.isArray(i)?i:[i]:[]}function Ki(i,n){return Array.isArray(i)?i.includes(n):i===n}function Br(i,n){let e=fa(n);return fa(i).forEach(o=>{Ki(e,o)||e.push(o)}),e}function Hr(i,n){return fa(n).filter(e=>!Ki(i,e))}var Yi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=va(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ya(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Pt=class extends Yi{name;get formDirective(){return null}get path(){return null}};var $n="VALID",qi="INVALID",yn="PENDING",Kn="DISABLED",Vt=class{},Xi=class extends Vt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Xn=class extends Vt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Zn=class extends Vt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},xn=class extends Vt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Zi=class extends Vt{source;constructor(n){super(),this.source=n}},wn=class extends Vt{source;constructor(n){super(),this.source=n}};function as(i){return(oo(i)?i.validators:i)||null}function jd(i){return Array.isArray(i)?va(i):i||null}function rs(i,n){return(oo(n)?n.asyncValidators:i)||null}function Ud(i){return Array.isArray(i)?ya(i):i||null}function oo(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Wd(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new pt(1e3,"");if(!ss(t,e))throw new pt(1001,"")}function Gd(i,n,e){i._forEachChild((t,o)=>{if(e[o]===void 0)throw new pt(-1002,"")})}var Qi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=V(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return se(this.statusReactive)}set status(n){se(()=>this.statusReactive.set(n))}_status=oe(()=>this.statusReactive());statusReactive=V(void 0);get valid(){return this.status===$n}get invalid(){return this.status===qi}get pending(){return this.status===yn}get disabled(){return this.status===Kn}get enabled(){return this.status!==Kn}errors;get pristine(){return se(this.pristineReactive)}set pristine(n){se(()=>this.pristineReactive.set(n))}_pristine=oe(()=>this.pristineReactive());pristineReactive=V(!0);get dirty(){return!this.pristine}get touched(){return se(this.touchedReactive)}set touched(n){se(()=>this.touchedReactive.set(n))}_touched=oe(()=>this.touchedReactive());touchedReactive=V(!1);get untouched(){return!this.touched}_events=new M;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Br(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Br(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Hr(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Hr(n,this._rawAsyncValidators))}hasValidator(n){return Ki(this._rawValidators,n)}hasAsyncValidator(n){return Ki(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(ke(T({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Zn(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Zn(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(ke(T({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Xn(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Xn(!0,t))}markAsPending(n={}){this.status=yn;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new xn(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(ke(T({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Kn,this.errors=null,this._forEachChild(o=>{o.disable(ke(T({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Xi(this.value,t)),this._events.next(new xn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ke(T({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=$n,this._forEachChild(t=>{t.enable(ke(T({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ke(T({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===$n||this.status===yn)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Xi(this.value,e)),this._events.next(new xn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(ke(T({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Kn:$n}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=yn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=Zr(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,o)=>t&&t._find(o),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new xn(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?Kn:this.errors?qi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(yn)?yn:this._anyControlsHaveStatus(qi)?qi:$n}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),o=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),o&&this._events.next(new Xn(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Zn(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){oo(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=jd(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Ud(this._rawAsyncValidators)}_updateHasRequiredValidator(){se(()=>this._hasRequired.set(this.hasValidator(Ut.required)))}};function ss(i,n){return Object.hasOwn(i,n)}function qd(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function $d(i,n,e,t){switch(e){case"name":i.setAttribute(n,e,t);break;case"disabled":case"readonly":case"required":t?i.setAttribute(n,e,""):i.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?i.setAttribute(n,e,t.toString()):i.removeAttribute(n,e);break}}var ha=class{kind;context;control;message;constructor({kind:n,context:e,control:t}){this.kind=n,this.context=e,this.control=t}};function Kd(i){return typeof i=="number"?i:parseInt(i,10)}var ls=(()=>{class i{_validator=$i;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):$i,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,features:[ve]})}return i})();var Yd={provide:Qn,useExisting:Xe(()=>Sn),multi:!0};var Sn=(()=>{class i extends ls{required;inputName="required";normalizeInput=w;createValidator=e=>Kr;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,o){t&2&&$("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Y([Yd]),Z]})}return i})();var Xd={provide:Qn,useExisting:Xe(()=>xa),multi:!0},xa=(()=>{class i extends ls{maxlength;inputName="maxlength";normalizeInput=e=>Kd(e);createValidator=e=>Yr(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,o){t&2&&$("maxlength",o._enabled?o.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[Y([Xd]),Z]})}return i})();var Zd=new y(""),ao=new y("",{factory:()=>wa}),wa="always";function Qd(i,n){return[...n.path,i]}function jr(i,n,e=wa){Ca(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),ec(i,n),nc(i,n),tc(i,n),Jd(i,n)}function Ur(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),eo(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Ji(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Jd(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Ca(i,n){let e=is(i);n.validator!==null?i.setValidators(zr(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=os(i);n.asyncValidator!==null?i.setAsyncValidators(zr(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let o=()=>i.updateValueAndValidity();Ji(n._rawValidators,o),Ji(n._rawAsyncValidators,o)}function eo(i,n){let e=!1;if(i!==null){if(n.validator!==null){let o=is(i);if(Array.isArray(o)&&o.length>0){let a=o.filter(r=>r!==n.validator);a.length!==o.length&&(e=!0,i.setValidators(a))}}if(n.asyncValidator!==null){let o=os(i);if(Array.isArray(o)&&o.length>0){let a=o.filter(r=>r!==n.asyncValidator);a.length!==o.length&&(e=!0,i.setAsyncValidators(a))}}}let t=()=>{};return Ji(n._rawValidators,t),Ji(n._rawAsyncValidators,t),e}function ec(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ds(i,n)})}function tc(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ds(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function ds(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function nc(i,n){let e=(t,o)=>{n.valueAccessor.writeValue(t),o&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function cs(i,n){i==null,Ca(i,n)}function ic(i,n){return eo(i,n)}function oc(i,n){if(!Object.hasOwn(i,"model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function ac(i){return Object.getPrototypeOf(i.constructor)===Rd}function ms(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function rc(i,n){if(!n)return null;Array.isArray(n);let e,t,o;return n.forEach(a=>{a.constructor===Cn?e=a:ac(a)?t=a:o=a}),o||t||e||null}function sc(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var lc={provide:Zd,useFactory:()=>{let i=s(dt,{self:!0});return{setParseErrors:n=>{i.setParseErrorSource(n)},set onReset(n){i.onReset=n}}}},dt=class extends Yi{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof wn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=rc(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,t){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(ht)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(ge);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new we,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof wn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(o=>{this.control?.markAsDirty(),this.control?.setValue(o,{emitModelToViewChange:!1}),this.viewToModelUpdate(o)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=qd(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof Sn))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let t=this.control,o=this.customControlBindings;Object.is(o.value,t.value)||(o.value=t.value,n.setCustomControlModelInput(t.value)),this.bindControlProperty(n,o,"touched",t.touched),this.bindControlProperty(n,o,"dirty",t.dirty),this.bindControlProperty(n,o,"valid",t.valid),this.bindControlProperty(n,o,"invalid",t.invalid),this.bindControlProperty(n,o,"pending",t.pending),this.bindControlProperty(n,o,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(n,o,"required",this.isRequired);let a=t.errors;if(o.errors!==a){o.errors=a;let r=this._convertErrors(a);n.setInputOnDirectives("errors",r)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,t,o){if(e[t]===o)return;e[t]=o;let a=n.setInputOnDirectives(t,o);this.isNativeFormElement&&!a&&(t==="disabled"||t==="required")&&this.renderer&&$d(this.renderer,n.nativeElement,t,o)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([t,o])=>new ha({context:o,kind:t,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,t=oe(()=>{let o=n();return o.length===0?null:o.reduce((a,r)=>(a[r.kind]=r,a),{})});this.parseErrorsValidator=(()=>e).bind(this),de(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},to=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ro=(()=>{class i extends to{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(me(dt,2))};static \u0275dir=_({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,o){t&2&&A("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[Z]})}return i})(),us=(()=>{class i extends to{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(me(Pt,10))};static \u0275dir=_({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,o){t&2&&A("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[Z]})}return i})(),no=class extends Qi{constructor(n,e,t){super(as(e),rs(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let t=this._find(n);return t||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let t=this._find(n);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){let o=this._find(n);o&&o._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){se(()=>{Gd(this,!0,n),Object.keys(n).forEach(t=>{Wd(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let o=this._find(t);o&&o.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,o)=>{t.reset(n?n[o]:null,ke(T({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new wn(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,o)=>((t.enabled||this.disabled)&&(e[o]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((o,a)=>{t=e(t,o,a)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return ss(this.controls,n)?this.controls[n]:null}};var dc={provide:Pt,useExisting:Xe(()=>Wt)},Yn=Promise.resolve(),Wt=(()=>{class i extends Pt{callSetDisabledState;get submitted(){return se(this.submittedReactive)}_submitted=oe(()=>this.submittedReactive());submittedReactive=V(!1);_directives=new Set;form;ngSubmit=new K;options;constructor(e,t,o){super(),this.callSetDisabledState=o,this.form=new no({},va(e),ya(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Yn.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Yn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Yn.then(()=>{let t=this._findContainer(e.path),o=new no({});cs(o,e),t.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Yn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Yn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ms(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Zi(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(me(Qn,10),me(_a,10),me(ao,8))};static \u0275dir=_({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){t&1&&S("submit",function(r){return o.onSubmit(r)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Y([dc]),Z]})}return i})();function Wr(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function Gr(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var ps=class extends Qi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(as(e),rs(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),oo(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Gr(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){se(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new wn(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Wr(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Wr(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Gr(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var cc=i=>i instanceof ps;var mc=(()=>{class i extends Pt{callSetDisabledState;get submitted(){return se(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=oe(()=>this._submittedReactive());_submittedReactive=V(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new pt(1052,!1);Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(eo(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Ur(e.control||null,e,!1),sc(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ms(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Zi(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,o=this.form.get(e.path);t!==o&&(Ur(t||null,e),cc(o)&&e._setupWithForm(o,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);cs(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&ic(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ca(this.form,this),this._oldForm&&eo(this._oldForm,this)}static \u0275fac=function(t){return new(t||i)(me(Qn,10),me(_a,10),me(ao,8))};static \u0275dir=_({type:i,features:[Z,ve]})}return i})(),uc={provide:Pt,useExisting:Xe(()=>Jn)},Jn=(()=>{class i extends mc{form=null;ngSubmit=new K;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,o){t&1&&S("submit",function(r){return o.onSubmit(r)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Y([uc]),Z]})}return i})(),pc={provide:dt,useExisting:Xe(()=>ei)},qr=Promise.resolve(),ei=(()=>{class i extends dt{_changeDetectorRef;callSetDisabledState;control=new ps;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new K;constructor(e,t,o,a,r,l,d,m){super(d,m,a),this._changeDetectorRef=r,this.callSetDisabledState=l,this._parent=e,this._setValidators(t),this._setAsyncValidators(o)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),oc(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,jr(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,jr(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){qr.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,o=t!==0&&w(t);qr.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Qd(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(me(Pt,9),me(Qn,10),me(_a,10),me(io,10),me(ge,8),me(ao,8),me(J,8),me(pe,8))};static \u0275dir=_({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Y([pc,lc]),Z,ve,Mr(null)]})}return i})();var fs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var fc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({})}return i})();var Mn=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:ao,useValue:e.callSetDisabledState??wa}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[fc]})}return i})();function ti(i){return i.buttons===0||i.detail===0}function ni(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Sa;function gs(){if(Sa==null){let i=typeof document<"u"?document.head:null;Sa=!!(i&&(i.createShadowRoot||i.attachShadow))}return Sa}function Ma(i){if(gs()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Da(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function Se(i){if(i.composedPath)try{return i.composedPath()[0]}catch(n){}return i.target}var ka;try{ka=typeof Intl<"u"&&Intl.v8BreakIterator}catch(i){ka=!1}var X=(()=>{class i{_platformId=s(Pi);isBrowser=this._platformId?qn(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ka)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var ii;function bs(){if(ii==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ii=!0}))}finally{ii=ii||!1}return ii}function Dn(i){return bs()?i:!!i.capture}function kn(i,n=0){return so(i)?Number(i):arguments.length===2?n:0}function so(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Ge(i){return i instanceof C?i.nativeElement:i}var _s=new y("cdk-input-modality-detector-options"),vs={ignoreKeys:[18,17,224,91,16]},ys=650,Ea={passive:!0,capture:!0},xs=(()=>{class i{_platform=s(X);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new kt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Se(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ys||(this._modality.next(ti(e)?"keyboard":"mouse"),this._mostRecentTarget=Se(e))};_onTouchstart=e=>{if(ni(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Se(e)};constructor(){let e=s(W),t=s(Q),o=s(_s,{optional:!0});if(this._options=T(T({},vs),o),this.modalityDetected=this._modality.pipe(Ai(1)),this.modalityChanged=this.modalityDetected.pipe(ta()),this._platform.isBrowser){let a=s(je).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[a.listen(t,"keydown",this._onKeydown,Ea),a.listen(t,"mousedown",this._onMousedown,Ea),a.listen(t,"touchstart",this._onTouchstart,Ea)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),oi=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(oi||{}),ws=new y("cdk-focus-monitor-default-options"),lo=Dn({passive:!0,capture:!0}),Gt=(()=>{class i{_ngZone=s(W);_platform=s(X);_inputModalityDetector=s(xs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(Q);_stopInputModalityDetector=new M;constructor(){let e=s(ws,{optional:!0});this._detectionMode=e?.detectionMode||oi.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Se(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=Ge(e);if(!this._platform.isBrowser||o.nodeType!==1)return he();let a=Ma(o)||this._document,r=this._elementInfo.get(o);if(r)return t&&(r.checkChildren=!0),r.subject;let l={checkChildren:t,subject:new M,rootNode:a};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=Ge(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let a=Ge(e),r=this._document.activeElement;a===r?this._getClosestElementsInfo(a).forEach(([l,d])=>this._originChanged(l,t,d)):(this._setOrigin(t),typeof a.focus=="function"&&a.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===oi.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===oi.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?ys:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),a=Se(e);!o||!o.checkChildren&&t!==a||this._originChanged(t,this._getFocusOrigin(a),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,lo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,lo)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(te(this._stopInputModalityDetector)).subscribe(a=>{this._setOrigin(a,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,lo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,lo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,a)=>{(a===e||o.checkChildren&&a.contains(e))&&t.push([a,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let a=e.labels;if(a){for(let r=0;r<a.length;r++)if(a[r].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var co=new WeakMap,Oe=(()=>{class i{_appRef;_injector=s(J);_environmentInjector=s(Ot);load(e){let t=this._appRef=this._appRef||this._injector.get(cn),o=co.get(t);o||(o={loaders:new Set,refs:[]},co.set(t,o),t.onDestroy(()=>{co.get(t)?.refs.forEach(a=>a.destroy()),co.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(Bi(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var ai=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return i})(),mo;function hc(){if(mo===void 0&&(mo=null,typeof window<"u")){let i=window;if(i.trustedTypes!==void 0)try{mo=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return mo}function qt(i){return hc()?.createHTML(i)||i}function Cs(i,n,e){let t=e.sanitize(At.HTML,n);i.innerHTML=qt(t||"")}function yt(i){return Array.isArray(i)?i:[i]}var Ss=new Set,$t,En=(()=>{class i{_platform=s(X);_nonce=s(oa,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):bc}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&gc(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();function gc(i,n){if(!Ss.has(i))try{$t||($t=document.createElement("style"),n&&$t.setAttribute("nonce",n),$t.setAttribute("type","text/css"),document.head.appendChild($t)),$t.sheet&&($t.sheet.insertRule(`@media ${i.replace(/[{}]/g,"")} {body{ }}`,0),Ss.add(i))}catch(e){console.error(e)}}function bc(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var ri=(()=>{class i{_mediaMatcher=s(En);_zone=s(W);_queries=new Map;_destroySubject=new M;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Ms(yt(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=Ms(yt(e)).map(r=>this._registerQuery(r).observable),a=it(o);return a=gr(a.pipe(Nt(1)),a.pipe(Ai(1),Oi(0))),a.pipe(le(r=>{let l={matches:!1,breakpoints:{}};return r.forEach(({matches:d,query:m})=>{l.matches=l.matches||d,l.breakpoints[m]=d}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),a={observable:new ut(r=>{let l=d=>this._zone.run(()=>r.next(d));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(ot(t),le(({matches:r})=>({query:e,matches:r})),te(this._destroySubject)),mql:t};return this._queries.set(e,a),a}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();function Ms(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var _c=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var uo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({providers:[_c]})}return i})();var Es=new y("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Ns=new y("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),vc=0,Ra=(()=>{class i{_ngZone=s(W);_defaultOptions=s(Ns,{optional:!0});_liveElement;_document=s(Q);_sanitizer=s(ji);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Es,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let o=this._defaultOptions,a,r;return t.length===1&&typeof t[0]=="number"?r=t[0]:[a,r]=t,this.clear(),clearTimeout(this._previousTimeout),a||(a=o&&o.politeness?o.politeness:"polite"),r==null&&o&&(r=o.duration),this._liveElement.setAttribute("aria-live",a),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Cs(this._liveElement,e,this._sanitizer),typeof r=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),o=this._document.createElement("div");for(let a=0;a<t.length;a++)t[a].remove();return o.classList.add(e),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${vc++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let a=t[o],r=a.getAttribute("aria-owns");r?r.indexOf(e)===-1&&a.setAttribute("aria-owns",r+" "+e):a.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var Lt=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Lt||{}),Ds="cdk-high-contrast-black-on-white",ks="cdk-high-contrast-white-on-black",Na="cdk-high-contrast-active",Rs=(()=>{class i{_platform=s(X);_hasCheckedHighContrastMode=!1;_document=s(Q);_breakpointSubscription;constructor(){this._breakpointSubscription=s(ri).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Lt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,a=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),a){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Lt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Lt.BLACK_ON_WHITE}return Lt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Na,Ds,ks),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Lt.BLACK_ON_WHITE?e.add(Na,Ds):t===Lt.WHITE_ON_BLACK&&e.add(Na,ks)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),Ia=(()=>{class i{constructor(){s(Rs)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[uo]})}return i})();var yc=200,po=class{_letterKeyStream=new M;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new M;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:yc;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Pe(e=>this._pressedLetters.push(e)),Oi(n),Ne(()=>this._pressedLetters.length>0),le(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,a=this._items[o];if(!this._skipPredicateFn?.(a)&&a.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(a);break}}this._pressedLetters=[]})}};function Ae(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var fo=class{_items;_activeItemIndex=V(-1);_activeItem=V(null);_wrap=!1;_typeaheadSubscription=we.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof aa?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):Ze(n)&&(this._effectRef=de(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new M;change=new M;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new po(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(a=>!n[a]||this._allowedModifierKeys.indexOf(a)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let a=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(a>0?a:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let a=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(a<r?a:r-1,-1);break}else return;default:(o||Ae(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+n*t+e.length)%e.length,a=e[o];if(!this._skipPredicateFn(a)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return Ze(this._items)?this._items():this._items instanceof aa?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Kt=class extends fo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Fs=new Map,Me=class i{_appId=s(Fi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let t=Fs.get(n);return t===void 0?t=0:t++,Fs.set(n,t),`${n}${e?i._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})};var Vs=" ";function xc(i,n,e){let t=go(i,n);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(Vs)))}function wc(i,n,e){let t=go(i,n);e=e.trim();let o=t.filter(a=>a!==e);o.length?i.setAttribute(n,o.join(Vs)):i.removeAttribute(n)}function go(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var Ls="cdk-describedby-message",ho="cdk-describedby-host",Aa=0,bo=(()=>{class i{_platform=s(X);_document=s(Q);_messageRegistry=new Map;_messagesContainer=null;_id=`${Aa++}`;constructor(){s(Oe).load(ai),this._id=s(Fi)+"-"+Aa++}describe(e,t,o){if(!this._canBeDescribed(e,t))return;let a=Oa(t,o);typeof t!="string"?(Ps(t,this._id),this._messageRegistry.set(a,{messageElement:t,referenceCount:0})):this._messageRegistry.has(a)||this._createMessageElement(t,o),this._isElementDescribedByMessage(e,a)||this._addMessageReference(e,a)}removeDescription(e,t,o){if(!t||!this._isElementNode(e))return;let a=Oa(t,o);if(this._isElementDescribedByMessage(e,a)&&this._removeMessageReference(e,a),typeof t=="string"){let r=this._messageRegistry.get(a);r&&r.referenceCount===0&&this._deleteMessageElement(a)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ho}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ho);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let o=this._document.createElement("div");Ps(o,this._id),o.textContent=e,t&&o.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Oa(e,t),{messageElement:o,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let a=0;a<t.length;a++)t[a].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(e),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(e){let t=go(e,"aria-describedby").filter(o=>o.indexOf(Ls)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let o=this._messageRegistry.get(t);xc(e,"aria-describedby",o.messageElement.id),e.setAttribute(ho,this._id),o.referenceCount++}_removeMessageReference(e,t){let o=this._messageRegistry.get(t);o.referenceCount--,wc(e,"aria-describedby",o.messageElement.id),e.removeAttribute(ho)}_isElementDescribedByMessage(e,t){let o=go(e,"aria-describedby"),a=this._messageRegistry.get(t),r=a&&a.messageElement.id;return!!r&&o.indexOf(r)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let o=t==null?"":`${t}`.trim(),a=e.getAttribute("aria-label");return o?!a||a.trim()!==o:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();function Oa(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function Ps(i,n){i.id||(i.id=`${Ls}-${n}-${Aa++}`)}var Cc=new y("cdk-dir-doc",{providedIn:"root",factory:()=>s(Q)}),Sc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function zs(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Sc.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var He=(()=>{class i{get value(){return this.valueSignal()}valueSignal=V("ltr");change=new K;constructor(){let e=s(Cc,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(zs(t||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var ee=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({})}return i})();function _e(i){return i==null?"":typeof i=="string"?i:`${i}px`}function xt(i){return i!=null&&`${i}`!="false"}var Yt;function Bs(){if(Yt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Yt=!1,Yt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Yt=!0;else{let i=Element.prototype.scrollTo;i?Yt=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Yt=!1}}return Yt}function Ta(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Rn,Hs=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Fa(){if(Rn)return Rn;if(typeof document!="object"||!document)return Rn=new Set(Hs),Rn;let i=document.createElement("input");return Rn=new Set(Hs.filter(n=>(i.setAttribute("type",n),i.type===n))),Rn}var Us=Symbol("FIELD_TREE");var Ws=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),js=class{reducer;create;brand;[Ws];constructor(n,e){this.reducer=n,this.create=e}};function li(i){return typeof i=="function"&&i[Us]===!0}var _o=new y("");var Pa=class{_box;_destroyed=new M;_resizeSubject=new M;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ut(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ne(e=>e.some(t=>t.target===n)),ia({bufferSize:1,refCount:!0}),te(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Gs=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(W);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new Pa(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var qs={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Dc=new y("MATERIAL_ANIMATIONS"),$s=null;function kc(){return s(Dc,{optional:!0})?.animationsDisabled||s(Vi,{optional:!0})==="NoopAnimations"?"di-disabled":($s??=s(En).matchMedia("(prefers-reduced-motion)").matches,$s?"reduced-motion":"enabled")}function xe(){return kc()!=="enabled"}var wt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-label"]]})}return i})(),el=new y("MatError"),La=(()=>{class i{id=s(Me).getId("mat-mdc-error-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,o){t&2&&_t("id",o.id)},inputs:{id:"id"},features:[Y([{provide:el,useExisting:i}])]})}return i})(),Va=(()=>{class i{align="start";id=s(Me).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(_t("id",o.id),$("align",null),A("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Ec=new y("MatPrefix");var tl=new y("MatSuffix"),di=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Y([{provide:tl,useExisting:i}])]})}return i})(),nl=new y("FloatingLabelParent"),Ks=(()=>{class i{_elementRef=s(C);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Gs);_ngZone=s(W);_parent=s(nl);_resizeSubscription=new we;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Nc(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&A("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Nc(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Ys="mdc-line-ripple--active",vo="mdc-line-ripple--deactivating",Xs=(()=>{class i{_elementRef=s(C);_cleanupTransitionEnd;constructor(){let e=s(W),t=s(pe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(vo),e.add(Ys)}deactivate(){this._elementRef.nativeElement.classList.add(vo)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(vo);e.propertyName==="opacity"&&o&&t.remove(Ys,vo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Zs=(()=>{class i{_elementRef=s(C);_ngZone=s(W);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["notch"];return k({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(a,r){if(a&1&&Ue(e,5),a&2){let l;z(l=B())&&(r._notch=l.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(a,r){a&2&&A("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(a,r){a&1&&(fe(),at(0,"div",1),Re(1,"div",2,0),U(3),Ie(),at(4,"div",3))},encapsulation:2})})()}return i})(),ci=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i})}return i})();var Xt=new y("MatFormField"),Rc=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Qs="fill",Ic="auto",Js="fixed",Oc="translateY(-50%)",ct=(()=>{class i{_elementRef=s(C);_changeDetectorRef=s(ge);_platform=s(X);_idGenerator=s(Me);_ngZone=s(W);_defaults=s(Rc,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Ze(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=We("iconPrefixContainer");_textPrefixContainerSignal=We("textPrefixContainer");_iconSuffixContainerSignal=We("iconSuffixContainer");_textSuffixContainerSignal=We("textSuffixContainer");_prefixSuffixContainers=oe(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ar(wt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=xt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ic}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Qs;this._appearanceSignal.set(t)}_appearanceSignal=V(Qs);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Js}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Js}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new M;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=xe();constructor(){let e=this._defaults,t=s(He);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),de(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=li(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!li(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=oe(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(ot([void 0,void 0]),le(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),na(),Ne(([[a,r],[l,d]])=>a!==l||r!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!li(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(te(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Fe(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ca({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=oe(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(li(t)){let o=t();return e==="valid"?o.valid():e==="dirty"?o.dirty():e==="touched"?o.touched():e==="pending"?o.pending():e==="untouched"?!o.touched():e==="pristine"?!o.dirty():e==="invalid"?!o.valid():!1}else{let o=t;return e==="valid"?o.valid:e==="dirty"?o.dirty:e==="touched"?o.touched:e==="pending"?o.pending:e==="untouched"?o.untouched:e==="pristine"?o.pristine:e==="invalid"?o.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,r=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,o;if(t){let a=this._describedByIds||e;o=e.concat(t.filter(r=>r&&!a.includes(r)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,m=a?.getBoundingClientRect().width??0,c=this._currentDirection==="rtl"?"-1":"1",u=`${r+l}px`,f=`calc(${c} * (${u} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,F=`var(--mat-mdc-form-field-label-transform, ${Oc} translateX(${f}))`,q=r+l+d+m;return[F,q]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["iconPrefixContainer"],t=["textPrefixContainer"],o=["iconSuffixContainer"],a=["textSuffixContainer"],r=["textField"],l=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],d=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function m(H,ae){H&1&&Ce(0,"span",21)}function c(H,ae){if(H&1&&(h(0,"label",20),U(1,1),E(2,m,1,0,"span",21),g()),H&2){let b=x(2);R("floating",b._shouldLabelFloat())("monitorResize",b._hasOutline())("id",b._labelId),$("for",b._control.disableAutomaticLabeling?null:b._control.id),p(2),N(!b.hideRequiredMarker&&b._unwrapMaybeSignal(b._control.required)?2:-1)}}function u(H,ae){if(H&1&&E(0,c,3,5,"label",20),H&2){let b=x();N(b._hasFloatingLabel()?0:-1)}}function v(H,ae){H&1&&Ce(0,"div",7)}function f(H,ae){}function F(H,ae){if(H&1&&Le(0,f,0,0,"ng-template",13),H&2){x(2);let b=rt(1);R("ngTemplateOutlet",b)}}function q(H,ae){if(H&1&&(h(0,"div",9),E(1,F,1,1,null,13),g()),H&2){let b=x();R("matFormFieldNotchedOutlineOpen",b._shouldLabelFloat()),p(),N(b._forceDisplayInfixLabel()?-1:1)}}function ue(H,ae){H&1&&(h(0,"div",10,2),U(2,2),g())}function De(H,ae){H&1&&(h(0,"div",11,3),U(2,3),g())}function Dt(H,ae){}function Ei(H,ae){if(H&1&&Le(0,Dt,0,0,"ng-template",13),H&2){x();let b=rt(1);R("ngTemplateOutlet",b)}}function Cd(H,ae){H&1&&(h(0,"div",14,4),U(2,4),g())}function Sd(H,ae){H&1&&(h(0,"div",15,5),U(2,5),g())}function Md(H,ae){H&1&&Ce(0,"div",16)}function Dd(H,ae){H&1&&(h(0,"div",18),U(1,6),g())}function kd(H,ae){if(H&1&&(h(0,"mat-hint",22),P(1),g()),H&2){let b=x(2);R("id",b._hintLabelId),p(),be(b.hintLabel)}}function Ed(H,ae){if(H&1&&(h(0,"div",19),E(1,kd,2,2,"mat-hint",22),U(2,7),Ce(3,"div",23),U(4,8),g()),H&2){let b=x();p(),N(b.hintLabel?1:-1)}}return k({type:i,selectors:[["mat-form-field"]],contentQueries:function(ae,b,re){if(ae&1&&(Nr(re,b._labelChild,wt,5),Qe(re,ci,5)(re,Ec,5)(re,tl,5)(re,el,5)(re,Va,5)),ae&2){vt();let Te;z(Te=B())&&(b._formFieldControl=Te.first),z(Te=B())&&(b._prefixChildren=Te),z(Te=B())&&(b._suffixChildren=Te),z(Te=B())&&(b._errorChildren=Te),z(Te=B())&&(b._hintChildren=Te)}},viewQuery:function(ae,b){if(ae&1&&(Tt(b._iconPrefixContainerSignal,e,5)(b._textPrefixContainerSignal,t,5)(b._iconSuffixContainerSignal,o,5)(b._textSuffixContainerSignal,a,5),Ue(r,5)(e,5)(t,5)(o,5)(a,5)(Ks,5)(Zs,5)(Xs,5)),ae&2){vt(4);let re;z(re=B())&&(b._textField=re.first),z(re=B())&&(b._iconPrefixContainer=re.first),z(re=B())&&(b._textPrefixContainer=re.first),z(re=B())&&(b._iconSuffixContainer=re.first),z(re=B())&&(b._textSuffixContainer=re.first),z(re=B())&&(b._floatingLabel=re.first),z(re=B())&&(b._notchedOutline=re.first),z(re=B())&&(b._lineRipple=re.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(ae,b){ae&2&&A("mat-mdc-form-field-label-always-float",b._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",b._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",b._hasIconSuffix)("mat-form-field-invalid",b._unwrapMaybeSignal(b._control.errorState))("mat-form-field-disabled",b._unwrapMaybeSignal(b._control.disabled))("mat-form-field-autofilled",b._unwrapMaybeSignal(b._control.autofilled))("mat-form-field-appearance-fill",b.appearance=="fill")("mat-form-field-appearance-outline",b.appearance=="outline")("mat-form-field-hide-placeholder",b._hasFloatingLabel()&&!b._shouldLabelFloat())("mat-primary",b.color!=="accent"&&b.color!=="warn")("mat-accent",b.color==="accent")("mat-warn",b.color==="warn")("ng-untouched",b._shouldForward("untouched"))("ng-touched",b._shouldForward("touched"))("ng-pristine",b._shouldForward("pristine"))("ng-dirty",b._shouldForward("dirty"))("ng-valid",b._shouldForward("valid"))("ng-invalid",b._shouldForward("invalid"))("ng-pending",b._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Y([{provide:Xt,useExisting:i},{provide:nl,useExisting:i}])],ngContentSelectors:d,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(ae,b){if(ae&1&&(fe(l),Le(0,u,1,1,"ng-template",null,0,Ir),h(2,"div",6,1),S("click",function(Te){return b._control.onContainerClick(Te)}),E(4,v,1,0,"div",7),h(5,"div",8),E(6,q,2,2,"div",9),E(7,ue,3,0,"div",10),E(8,De,3,0,"div",11),h(9,"div",12),E(10,Ei,1,1,null,13),U(11),g(),E(12,Cd,3,0,"div",14),E(13,Sd,3,0,"div",15),g(),E(14,Md,1,0,"div",16),g(),h(15,"div",17),E(16,Dd,2,0,"div",18)(17,Ed,5,1,"div",19),g()),ae&2){let re,Te=b._unwrapMaybeSignal(b._control.disabled);p(2),A("mdc-text-field--filled",!b._hasOutline())("mdc-text-field--outlined",b._hasOutline())("mdc-text-field--no-label",!b._hasFloatingLabel())("mdc-text-field--disabled",Te)("mdc-text-field--invalid",b._unwrapMaybeSignal(b._control.errorState)),p(2),N(!b._hasOutline()&&!Te?4:-1),p(2),N(b._hasOutline()?6:-1),p(),N(b._hasIconPrefix?7:-1),p(),N(b._hasTextPrefix?8:-1),p(2),N(!b._hasOutline()||b._forceDisplayInfixLabel()?10:-1),p(2),N(b._hasTextSuffix?12:-1),p(),N(b._hasIconSuffix?13:-1),p(),N(b._hasOutline()?-1:14),p(),A("mat-mdc-form-field-subscript-dynamic-size",b.subscriptSizing==="dynamic");let Nd=b._getSubscriptMessageType();p(),N((re=Nd)==="error"?16:re==="hint"?17:-1)}},dependencies:[Ks,Zs,Fr,Xs,Va],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return i})();var et=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[uo,ct,ee]})}return i})();var Ac=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})(),Tc={passive:!0},il=(()=>{class i{_platform=s(X);_ngZone=s(W);_renderer=s(je).createRenderer(null,null);_styleLoader=s(Oe);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return pr;this._styleLoader.load(Ac);let t=Ge(e),o=this._monitoredElements.get(t);if(o)return o.subject;let a=new M,r="cdk-text-field-autofilled",l=m=>{m.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:m.target,isAutofilled:!0}))):m.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:m.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Tc)));return this._monitoredElements.set(t,{subject:a,unlisten:d}),a}stopMonitoring(e){let t=Ge(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var ol=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({})}return i})();var al=new y("MAT_INPUT_VALUE_ACCESSOR");var yo=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),o=e().touched();return t&&o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var In=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,t,o,a){this._defaultMatcher=n,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=a,e?Ze(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return n?.isErrorState(t,e)??!1}};var Fc=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Pc=new y("MAT_INPUT_CONFIG"),On=(()=>{class i{_elementRef=s(C);_platform=s(X);ngControl=s(dt,{optional:!0,self:!0});_autofillMonitor=s(il);_ngZone=s(W);_formField=s(Xt,{optional:!0});_renderer=s(pe);_uid=s(Me).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Pc,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new M;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=xt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ut.required)??!1}set required(e){this._required=xt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Fa().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=xt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Fa().has(e));constructor(){let e=s(Wt,{optional:!0}),t=s(Jn,{optional:!0}),o=s(yo),a=s(al,{optional:!0,self:!0}),r=s(_o,{optional:!0,self:!0}),l=this._elementRef.nativeElement,d=l.nodeName.toLowerCase();a?Ze(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new In(o,r||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d==="select",this._isTextarea=d==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&de(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Fc.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&S("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(_t("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),$("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),A("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",w]},exportAs:["matInput"],features:[Y([{provide:ci,useExisting:i}]),ve]})}return i})(),An=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[et,et,ol,ee]})}return i})();var Ke=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Ke||{}),Ha=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ke.HIDDEN;constructor(n,e,t,o=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},rl=Dn({passive:!0,capture:!0}),ja=class{_events=new Map;addHandler(n,e,t,o){let a=this._events.get(e);if(a){let r=a.get(t);r?r.add(o):a.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,rl)})}removeHandler(n,e,t){let o=this._events.get(n);if(!o)return;let a=o.get(e);a&&(a.delete(t),a.size===0&&o.delete(e),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,rl)))}_delegateEventHandler=n=>{let e=Se(n);e&&this._events.get(n.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(a=>a.handleEvent(n))})}},mi={enterDuration:225,exitDuration:150},Vc=800,sl=Dn({passive:!0,capture:!0}),ll=["mousedown","touchstart"],dl=["mouseup","mouseleave","touchend","touchcancel"],Lc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})(),ui=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ja;constructor(n,e,t,o,a){this._target=n,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=Ge(t)),a&&a.get(Oe).load(Lc)}fadeInRipple(n,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=T(T({},mi),t.animation);t.centered&&(n=o.left+o.width/2,e=o.top+o.height/2);let r=t.radius||zc(n,e,o),l=n-o.left,d=e-o.top,m=a.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=`${l-r}px`,c.style.top=`${d-r}px`,c.style.height=`${r*2}px`,c.style.width=`${r*2}px`,t.color!=null&&(c.style.backgroundColor=t.color),c.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(c);let u=window.getComputedStyle(c),v=u.transitionProperty,f=u.transitionDuration,F=v==="none"||f==="0s"||f==="0s, 0s"||o.width===0&&o.height===0,q=new Ha(this,c,t,F);c.style.transform="scale3d(1, 1, 1)",q.state=Ke.FADING_IN,t.persistent||(this._mostRecentTransientRipple=q);let ue=null;return!F&&(m||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let De=()=>{ue&&(ue.fallbackTimer=null),clearTimeout(Ei),this._finishRippleTransition(q)},Dt=()=>this._destroyRipple(q),Ei=setTimeout(Dt,m+100);c.addEventListener("transitionend",De),c.addEventListener("transitioncancel",Dt),ue={onTransitionEnd:De,onTransitionCancel:Dt,fallbackTimer:Ei}}),this._activeRipples.set(q,ue),(F||!m)&&this._finishRippleTransition(q),q}fadeOutRipple(n){if(n.state===Ke.FADING_OUT||n.state===Ke.HIDDEN)return;let e=n.element,t=T(T({},mi),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=Ke.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Ge(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ll.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{dl.forEach(e=>{this._triggerElement.addEventListener(e,this,sl)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Ke.FADING_IN?this._startFadeOutTransition(n):n.state===Ke.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=Ke.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Ke.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ti(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Vc;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ni(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Ke.VISIBLE||n.config.terminateOnPointerUp&&n.state===Ke.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(ll.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(dl.forEach(e=>n.removeEventListener(e,this,sl)),this._pointerUpEventsRegistered=!1))}};function zc(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),o=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+o*o)}var Ua=new y("mat-ripple-global-options"),cl=(()=>{class i{_elementRef=s(C);_animationsDisabled=xe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(W),t=s(X),o=s(Ua,{optional:!0}),a=s(J);this._globalOptions=o||{},this._rippleRenderer=new ui(this,e,this._elementRef,t,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:T(T(T({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,T(T({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,T(T({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,o){t&2&&A("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var ml=(()=>{class i{_animationsDisabled=xe();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&A("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var Tn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();var hi=new y("MAT_OPTION_PARENT_COMPONENT"),gi=new y("MatOptgroup");var pi=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},mt=(()=>{class i{_element=s(C);_changeDetectorRef=s(ge);_parent=s(hi,{optional:!0});group=s(gi,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(Me).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=V(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new K;_text;_stateChanges=new M;constructor(){let e=s(Oe);e.load(Tn),e.load(ai),this._signalDisableRipple=!!this._parent&&Ze(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ae(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new pi(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["text"],t=[[["mat-icon"]],"*"],o=["mat-icon","*"];function a(d,m){if(d&1&&Ce(0,"mat-pseudo-checkbox",1),d&2){let c=x();R("disabled",c.disabled)("state",c.selected?"checked":"unchecked")}}function r(d,m){if(d&1&&Ce(0,"mat-pseudo-checkbox",3),d&2){let c=x();R("disabled",c.disabled)}}function l(d,m){if(d&1&&(h(0,"span",4),P(1),g()),d&2){let c=x();p(),Je("(",c.group.label,")")}}return k({type:i,selectors:[["mat-option"]],viewQuery:function(m,c){if(m&1&&Ue(e,7),m&2){let u;z(u=B())&&(c._text=u.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(m,c){m&1&&S("click",function(){return c._selectViaInteraction()})("keydown",function(v){return c._handleKeydown(v)}),m&2&&(_t("id",c.id),$("aria-selected",c.selected)("aria-disabled",c.disabled.toString()),A("mdc-list-item--selected",c.selected)("mat-mdc-option-multiple",c.multiple)("mat-mdc-option-active",c.active)("mdc-list-item--disabled",c.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",w]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:o,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(m,c){m&1&&(fe(t),E(0,a,1,2,"mat-pseudo-checkbox",1),U(1),h(2,"span",2,0),U(4,1),g(),E(5,r,1,1,"mat-pseudo-checkbox",3),E(6,l,2,1,"span",4),Ce(7,"div",5)),m&2&&(N(c.multiple?0:-1),p(5),N(!c.multiple&&c.selected&&!c.hideSingleSelectionIndicator?5:-1),p(),N(c.group&&c.group._inert?6:-1),p(),R("matRippleTrigger",c._getHostElement())("matRippleDisabled",c.disabled||c.disableRipple))},dependencies:[ml,cl],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function xo(i,n,e){if(e.length){let t=n.toArray(),o=e.toArray(),a=0;for(let r=0;r<i+1;r++)t[r].group&&t[r].group===o[a]&&a++;return a}return 0}function wo(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var bi=class{};function _i(i){return i&&typeof i.connect=="function"&&!(i instanceof ur)}var tt=(function(i){return i[i.REPLACED=0]="REPLACED",i[i.INSERTED=1]="INSERTED",i[i.MOVED=2]="MOVED",i[i.REMOVED=3]="REMOVED",i})(tt||{}),Co=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,t,o,a){n.forEachOperation((r,l,d)=>{let m,c;if(r.previousIndex==null){let u=()=>t(r,l,d);m=this._insertView(u,d,e,o(r)),c=m?tt.INSERTED:tt.REPLACED}else d==null?(this._detachAndCacheView(l,e),c=tt.REMOVED):(m=this._moveView(l,d,e,o(r)),c=tt.MOVED);a&&a({context:m?.context,operation:c,record:r})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,t,o){let a=this._insertViewFromCache(e,t);if(a){a.context.$implicit=o;return}let r=n();return t.createEmbeddedView(r.templateRef,r.context,r.index)}_detachAndCacheView(n,e){let t=e.detach(n);this._maybeCacheView(t,e)}_moveView(n,e,t,o){let a=t.get(n);return t.move(a,e),a.context.$implicit=o,a}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let t=e.indexOf(n);t===-1?n.destroy():e.remove(t)}}_insertViewFromCache(n,e){let t=this._viewCache.pop();return t&&e.insert(t,n),t||null}};var Bc=20,Fn=(()=>{class i{_ngZone=s(W);_platform=s(X);_renderer=s(je).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new M;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Bc){return this._platform.isBrowser?new ut(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(jn(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):he()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ne(a=>!a||o.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,a)=>{this._targetContainsElement(a,e)&&t.push(a)}),t}_targetContainsElement(e,t){let o=Ge(t),a=e.getElementRef().nativeElement;do if(o==a)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var Hc=20,Ye=(()=>{class i{_platform=s(X);_listeners;_viewportSize=null;_change=new M;_document=s(Q);constructor(){let e=s(W),t=s(je).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=a=>this._change.next(a);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,a=o.getBoundingClientRect(),r=-a.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,l=-a.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:r,left:l}}change(e=Hc){return e>0?this._change.pipe(jn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var pl=new y("CDK_VIRTUAL_SCROLL_VIEWPORT");var Ct=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({})}return i})(),vi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[ee,Ct,ee,Ct]})}return i})();var yi=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},xi=class extends yi{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,o,a,r){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=a||null,this.directives=r||null}},Qt=class extends yi{templateRef;viewContainerRef;context;injector;constructor(n,e,t,o){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Wa=class extends yi{element;constructor(n){super(),this.element=n instanceof C?n.nativeElement:n}},Ga=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof xi)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Qt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Wa)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},So=class extends Ga{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,o=t.get(Sr,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=n.injector||this._defaultInjector||J.NULL,a=o.get(Ot,t.injector);e=Bi(n.component,{elementInjector:o,environmentInjector:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var fl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({})}return i})();var hl=Bs();function wl(i){return new Mo(i.get(Ye),i.get(Q))}var Mo=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=_e(-this._previousScrollPosition.left),n.style.top=_e(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,o=e.style,a=t.scrollBehavior||"",r=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),hl&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),hl&&(t.scrollBehavior=a,o.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Cl(i,n){return new Do(i.get(Fn),i.get(W),i.get(Ye),n)}var Do=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,o){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ne(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var wi=class{enable(){}disable(){}attach(){}};function $a(i,n){return n.some(e=>{let t=i.bottom<e.top,o=i.top>e.bottom,a=i.right<e.left,r=i.left>e.right;return t||o||a||r})}function gl(i,n){return n.some(e=>{let t=i.top<e.top,o=i.bottom>e.bottom,a=i.left<e.left,r=i.right>e.right;return t||o||a||r})}function St(i,n){return new ko(i.get(Fn),i.get(Ye),i.get(W),n)}var ko=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,o){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();$a(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Sl=(()=>{class i{_injector=s(J);noop=()=>new wi;close=e=>Cl(this._injector,e);block=()=>wl(this._injector);reposition=e=>St(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),en=class{positionStrategy;scrollStrategy=new wi;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Eo=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Ml=(()=>{class i{_attachedOverlays=[];_document=s(Q);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),Dl=(()=>{class i extends Ml{_ngZone=s(W);_renderer=s(je).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let a=t[o];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),kl=(()=>{class i extends Ml{_platform=s(X);_ngZone=s(W);_renderer=s(je).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,"pointerdown",this._pointerDownListener,o),a.listen(t,"click",this._clickListener,o),a.listen(t,"auxclick",this._clickListener,o),a.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Se(e)};_clickListener=e=>{let t=Se(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let l=a[r],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,d))){if(bl(l.overlayElement,t)||bl(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(e)):d.next(e)}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();function bl(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var El=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})(),Nl=(()=>{class i{_platform=s(X);_containerElement;_document=s(Q);_styleLoader=s(Oe);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ta()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<o.length;a++)o[a].remove()}let t=this._document.createElement("div");t.classList.add(e),Ta()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(El)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),Ka=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,o){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ya(i){return i&&i.nodeType===1}var qa=V([]),No=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new M;_attachments=new M;_detachments=new M;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new M;_outsidePointerEvents=new M;_afterNextRenderRef;constructor(n,e,t,o,a,r,l,d,m,c=!1,u,v){this._portalOutlet=n,this._host=e,this._pane=t,this._config=o,this._ngZone=a,this._keyboardDispatcher=r,this._document=l,this._location=d,this._outsideClickDispatcher=m,this._animationsDisabled=c,this._injector=u,this._renderer=v,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),se(()=>{qa.update(t=>t.includes(this)?t:[...t,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ee(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation==="pop-state"){let t=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>t.unsubscribe()}else this._config.disposeOnNavigation==="url-change"&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),se(()=>{qa.update(e=>e.filter(t=>t!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,se(()=>{qa.update(e=>e.filter(t=>t!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=T(T({},this._config),n),this._updateElementSize()}setDirection(n){this._config=ke(T({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=_e(this._config.width),n.height=_e(this._config.height),n.minWidth=_e(this._config.minWidth),n.minHeight=_e(this._config.minHeight),n.maxWidth=_e(this._config.maxWidth),n.maxHeight=_e(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ya(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ka(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let o=yt(e||[]).filter(a=>!!a);o.length&&(t?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ee(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},_l="cdk-overlay-connected-position-bounding-box",jc=/([A-Za-z%]+)$/;function nn(i,n){return new Ro(n,i.get(Ye),i.get(Q),i.get(X),i.get(Nl))}var Ro=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new M;_resizeSubscription=we.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,o,a){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=a,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(_l),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,a=[],r;for(let l of this._preferredPositions){let d=this._getOriginPoint(n,o,l),m=this._getOverlayPoint(d,e,l),c=this._getOverlayFit(m,e,t,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,m,t)){a.push({position:l,origin:d,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!r||r.overlayFit.visibleArea<c.visibleArea)&&(r={overlayFit:c,overlayPoint:m,originPoint:d,position:l,overlayRect:e})}if(a.length){let l=null,d=-1;for(let m of a){let c=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);c>d&&(d=c,l=m)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Jt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(_l),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof C?this._origin.nativeElement:Ya(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let o;if(t.originX=="center")o=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;o=t.originX=="start"?r:l}e.left<0&&(o-=e.left);let a;return t.originY=="center"?a=n.top+n.height/2:a=t.originY=="top"?n.top:n.bottom,e.top<0&&(a-=e.top),{x:o,y:a}}_getOverlayPoint(n,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let a;return t.overlayY=="center"?a=-e.height/2:a=t.overlayY=="top"?0:-e.height,{x:n.x+o,y:n.y+a}}_getOverlayFit(n,e,t,o){let a=yl(e),{x:r,y:l}=n,d=this._getOffset(o,"x"),m=this._getOffset(o,"y");d&&(r+=d),m&&(l+=m);let c=0-r,u=r+a.width-t.width,v=0-l,f=l+a.height-t.height,F=this._subtractOverflows(a.width,c,u),q=this._subtractOverflows(a.height,v,f),ue=F*q;return{visibleArea:ue,isCompletelyWithinViewport:a.width*a.height===ue,fitsInViewportVertically:q===a.height,fitsInViewportHorizontally:F==a.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,a=t.right-e.x,r=vl(this._overlayRef.getConfig().minHeight),l=vl(this._overlayRef.getConfig().minWidth),d=n.fitsInViewportVertically||r!=null&&r<=o,m=n.fitsInViewportHorizontally||l!=null&&l<=a;return d&&m}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=yl(e),a=this._viewportRect,r=Math.max(n.x+o.width-a.width,0),l=Math.max(n.y+o.height-a.height,0),d=Math.max(a.top-t.top-n.y,0),m=Math.max(a.left-t.left-n.x,0),c=0,u=0;return o.width<=a.width?c=m||-r:c=n.x<this._getViewportMarginStart()?a.left-t.left-n.x:0,o.height<=a.height?u=d||-l:u=n.y<this._getViewportMarginTop()?a.top-t.top-n.y:0,this._previousPushAmount={x:c,y:u},{x:n.x+c,y:n.y+u}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Uc(this._lastScrollVisibility,t)){let o=new Eo(n,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,o=this._isRtl(),a,r,l;if(e.overlayY==="top")r=n.y,a=t.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-l+this._getViewportMarginTop();else{let f=Math.min(t.bottom-n.y+t.top,n.y),F=this._lastBoundingBoxSize.height;a=f*2,r=n.y-f,a>F&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-F/2)}let d=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,m=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,c,u,v;if(m)v=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=n.x-this._getViewportMarginStart();else if(d)u=n.x,c=t.right-n.x-this._getViewportMarginEnd();else{let f=Math.min(t.right-n.x+t.left,n.x),F=this._lastBoundingBoxSize.width;c=f*2,u=n.x-f,c>F&&!this._isInitialRender&&!this._growAfterOpen&&(u=n.x-F/2)}return{top:r,left:u,bottom:l,right:v,width:c,height:a}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;o.width=_e(t.width),o.height=_e(t.height),o.top=_e(t.top)||"auto",o.bottom=_e(t.bottom)||"auto",o.left=_e(t.left)||"auto",o.right=_e(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",a&&(o.maxHeight=_e(a)),r&&(o.maxWidth=_e(r))}this._lastBoundingBoxSize=t,Jt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Jt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Jt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},o=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(o){let c=this._viewportRuler.getViewportScrollPosition();Jt(t,this._getExactOverlayY(e,n,c)),Jt(t,this._getExactOverlayX(e,n,c))}else t.position="static";let l="",d=this._getOffset(e,"x"),m=this._getOffset(e,"y");d&&(l+=`translateX(${d}px) `),m&&(l+=`translateY(${m}px)`),t.transform=l.trim(),r.maxHeight&&(o?t.maxHeight=_e(r.maxHeight):a&&(t.maxHeight="")),r.maxWidth&&(o?t.maxWidth=_e(r.maxWidth):a&&(t.maxWidth="")),Jt(this._pane.style,t)}_getExactOverlayY(n,e,t){let o={top:"",bottom:""},a=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),n.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;o.bottom=`${r-(a.y+this._overlayRect.height)}px`}else o.top=_e(a.y);return o}_getExactOverlayX(n,e,t){let o={left:"",right:""},a=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let r;if(this._isRtl()?r=n.overlayX==="end"?"left":"right":r=n.overlayX==="end"?"right":"left",r==="right"){let l=this._document.documentElement.clientWidth;o.right=`${l-(a.x+this._overlayRect.width)}px`}else o.left=_e(a.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:gl(n,t),isOriginOutsideView:$a(n,t),isOverlayClipped:gl(e,t),isOverlayOutsideView:$a(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,o)=>t-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&yt(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof C)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Jt(i,n){for(let e in n)Object.hasOwn(n,e)&&(i[e]=n[e]);return i}function vl(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(jc);return!e||e==="px"?parseFloat(n):null}return i||null}function yl(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Uc(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var xl="cdk-global-overlay-wrapper";function Rl(i){return new Io}var Io=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(xl),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:a,maxWidth:r,maxHeight:l}=t,d=(o==="100%"||o==="100vw")&&(!r||r==="100%"||r==="100vw"),m=(a==="100%"||a==="100vh")&&(!l||l==="100%"||l==="100vh"),c=this._xPosition,u=this._xOffset,v=this._overlayRef.getConfig().direction==="rtl",f="",F="",q="";d?q="flex-start":c==="center"?(q="center",v?F=u:f=u):v?c==="left"||c==="end"?(q="flex-end",f=u):(c==="right"||c==="start")&&(q="flex-start",F=u):c==="left"||c==="start"?(q="flex-start",f=u):(c==="right"||c==="end")&&(q="flex-end",F=u),n.position=this._cssPosition,n.marginLeft=d?"0":f,n.marginTop=m?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=d?"0":F,e.justifyContent=q,e.alignItems=m?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(xl),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Il=(()=>{class i{_injector=s(J);global(){return Rl()}flexibleConnectedTo(e){return nn(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),Ci=new y("OVERLAY_DEFAULT_CONFIG");function on(i,n){i.get(Oe).load(El);let e=i.get(Nl),t=i.get(Q),o=i.get(Me),a=i.get(cn),r=i.get(He),l=i.get(pe,null,{optional:!0})||i.get(je).createRenderer(null,null),d=new en(n),m=i.get(Ci,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||r.value,!t.body||!("showPopover"in t.body)?d.usePopover=!1:d.usePopover=n?.usePopover??m;let c=t.createElement("div"),u=t.createElement("div");c.id=o.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),u.appendChild(c),d.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let v=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Ya(v)?v.after(u):v?.type==="parent"?v.element.appendChild(u):e.getContainerElement().appendChild(u),new No(new So(c,a,i),u,c,d,i.get(W),i.get(Dl),t,i.get(Tr),i.get(kl),n?.disableAnimations??i.get(Vi,null,{optional:!0})==="NoopAnimations",i.get(Ot),l)}var Ol=(()=>{class i{scrollStrategies=s(Sl);_positionBuilder=s(Il);_injector=s(J);create(e){return on(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),Wc=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Gc=new y("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(J);return()=>St(i)}}),Pn=(()=>{class i{elementRef=s(C);static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Al=new y("cdk-connected-overlay-default-config"),Oo=(()=>{class i{_dir=s(He,{optional:!0});_injector=s(J);_overlayRef;_templatePortal;_backdropSubscription=we.EMPTY;_attachSubscription=we.EMPTY;_detachSubscription=we.EMPTY;_positionSubscription=we.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(Gc);_ngZone=s(W);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new K;positionChange=new K;attach=new K;detach=new K;overlayKeydown=new K;overlayOutsideClick=new K;constructor(){let e=s(qe),t=s(Ve),o=s(Al,{optional:!0}),a=s(Ci,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new Qt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Wc);let e=this._overlayRef=on(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ae(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let o=this._getOriginElement(),a=Se(t);(!o||o!==a&&!o.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new en({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=nn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Pn?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Pn?this.origin.elementRef.nativeElement:this.origin instanceof C?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(vr(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",w],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",w],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",w],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",w],push:[2,"cdkConnectedOverlayPush","push",w],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",e=>e==="url-change"||e==="pop-state"?e:w(e)],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",w],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ve]})}return i})(),an=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({providers:[Ol],imports:[ee,fl,vi,vi]})}return i})();var Ao=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[ee]})}return i})();var Tl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[ee]})}return i})();var Vn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[Ao,Tl,mt,ee]})}return i})();var Xa=class{source;option;constructor(n,e){this.source=n,this.option=e}},Fl=new y("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Pl=(()=>{class i{_changeDetectorRef=s(ge);_elementRef=s(C);_defaults=s(Fl);_animationsDisabled=xe();_activeOptionChanges=we.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new K;opened=new K;closed=new K;optionActivated=new K;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(Me).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(X);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Kt(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new Xa(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["panel"],t=["*"];function o(a,r){if(a&1&&(Re(0,"div",1,0),U(2),Ie()),a&2){let l=r.id,d=x();$e(d._classList),A("mat-mdc-autocomplete-visible",d.showPanel)("mat-mdc-autocomplete-hidden",!d.showPanel)("mat-autocomplete-panel-animations-enabled",!d._animationsDisabled)("mat-primary",d._color==="primary")("mat-accent",d._color==="accent")("mat-warn",d._color==="warn"),_t("id",d.id),$("aria-label",d.ariaLabel||null)("aria-labelledby",d._getPanelAriaLabelledby(l))}}return k({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(r,l,d){if(r&1&&Qe(d,mt,5)(d,gi,5),r&2){let m;z(m=B())&&(l.options=m),z(m=B())&&(l.optionGroups=m)}},viewQuery:function(r,l){if(r&1&&Ue(qe,7)(e,5),r&2){let d;z(d=B())&&(l.template=d.first),z(d=B())&&(l.panel=d.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",w],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",w],requireSelection:[2,"requireSelection","requireSelection",w],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",w],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",w]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Y([{provide:hi,useExisting:i}])],ngContentSelectors:t,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(r,l){r&1&&(fe(),Dr(0,o,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));
  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})})()}return i})();var qc={provide:io,useExisting:Xe(()=>Za),multi:!0};var $c=new y("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(J);return()=>St(i)}}),Za=(()=>{class i{_environmentInjector=s(Ot);_element=s(C);_injector=s(J);_viewContainerRef=s(Ve);_zone=s(W);_changeDetectorRef=s(ge);_dir=s(He,{optional:!0});_formField=s(Xt,{optional:!0,host:!0});_viewportRuler=s(Ye);_scrollStrategy=s($c);_renderer=s(pe);_animationsDisabled=xe();_defaults=s(Fl,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new M;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=we.EMPTY;_breakpointObserver=s(ri);_handsetLandscapeSubscription=we.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new M;_overlayPanelClass=yt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Fe(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Ne(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Ne(()=>this._overlayAttached)):he()).pipe(le(e=>e instanceof pi?e:null))}optionSelections=Ri(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(ot(e),Rt(()=>Fe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Rt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new ut(e=>{let t=a=>{let r=Se(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,d=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(r))&&(!d||!d.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(a)},o=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{o.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,o=t.keyCode,a=Ae(t);if(o===27&&!a&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&o===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,l=o===38||o===40;o===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,o=t.value;if(t.type==="number"&&(o=o==""?null:parseFloat(o)),this._previousValue!==o){if(this._previousValue=o,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(o),!o)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(r=>r.selected);if(a){let r=this._getDisplayValue(a.value);o!==r&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Da()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new ut(o=>{Ee(()=>{o.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(Pe(()=>this._positionStrategy.reapplyLastPosition()),br(0))??he();return Fe(e,t).pipe(Rt(()=>this._zone.run(()=>{let o=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Nt(1)).subscribe(o=>this._setValueAndClose(o))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){let t=this._formField?._control;t?wr(t.value)?t.value.set(e):t.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,o=e?e.source:this._pendingAutoselectedOption;o?(this._clearPreviousSelectedOption(o),this._assignOptionValue(o.value),this._onChange(o.value),t._emitSelectEvent(o),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(o=>{o!==e&&o.selected&&o.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Qt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=on(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(qs.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let o=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&o!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Ae(e)||e.keyCode===38&&Ae(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new en({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=nn(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}],r;this.position==="above"?r=a:this.position==="below"?r=t:r=[...t,...a],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let o=0;o<e.options.length;o++)if(!e.options.get(o).disabled){t=o;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,o=xo(e,t.options,t.optionGroups);if(e===0&&o===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let r=a._getHostElement(),l=wo(r.offsetTop,r.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(l)}}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,o){t&1&&S("focusin",function(){return o._handleFocus()})("blur",function(){return o._onTouched()})("input",function(r){return o._handleInput(r)})("keydown",function(r){return o._handleKeydown(r)})("click",function(){return o._handleClick()}),t&2&&$("autocomplete",o.autocompleteAttribute)("role",o.autocompleteDisabled?null:"combobox")("aria-autocomplete",o.autocompleteDisabled?null:"list")("aria-activedescendant",o.panelOpen&&o.activeOption?o.activeOption.id:null)("aria-expanded",o.autocompleteDisabled?null:o.panelOpen.toString())("aria-controls",o.autocompleteDisabled||!o.panelOpen?null:o.autocomplete?.id)("aria-haspopup",o.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",w]},exportAs:["matAutocompleteTrigger"],features:[Y([qc]),ve]})}return i})(),Vl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[an,Vn,Ct,Vn,ee]})}return i})();var Yc={capture:!0},Xc=["focus","mousedown","mouseenter","touchstart"],Qa="mat-ripple-loader-uninitialized",Ja="mat-ripple-loader-class-name",Ll="mat-ripple-loader-centered",To="mat-ripple-loader-disabled",zl=(()=>{class i{_document=s(Q);_animationsDisabled=xe();_globalRippleOptions=s(Ua,{optional:!0});_platform=s(X);_ngZone=s(W);_injector=s(J);_eventCleanups;_hosts=new Map;constructor(){let e=s(je).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Xc.map(t=>e.listen(this._document,t,this._onInteraction,Yc)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Qa,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Ja))&&e.setAttribute(Ja,t.className||""),t.centered&&e.setAttribute(Ll,""),t.disabled&&e.setAttribute(To,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(To,""):e.removeAttribute(To)}_onInteraction=e=>{let t=Se(e);if(t instanceof HTMLElement){let o=t.closest(`[${Qa}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Ja)),e.append(t);let o=this._globalRippleOptions,a=this._animationsDisabled?0:o?.animation?.enterDuration??mi.enterDuration,r=this._animationsDisabled?0:o?.animation?.exitDuration??mi.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(To),rippleConfig:{centered:e.hasAttribute(Ll),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:r}}},d=new ui(l,this._ngZone,t,this._platform,this._injector),m=!l.rippleDisabled;m&&d.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:d,hasSetUpEvents:m}),e.removeAttribute(Qa)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var Zc=new y("MAT_BUTTON_CONFIG");function Bl(i){return i==null?void 0:st(i)}var Hl=(()=>{class i{_elementRef=s(C);_ngZone=s(W);_animationsDisabled=xe();_config=s(Zc,{optional:!0});_focusMonitor=s(Gt);_cleanupClick;_renderer=s(pe);_rippleLoader=s(zl);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=G(!1,{transform:w});constructor(){s(Oe).load(Tn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,o){t&2&&($("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),$e(o.color?"mat-"+o.color:""),A("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",w],disabled:[2,"disabled","disabled",w],ariaDisabled:[2,"aria-disabled","ariaDisabled",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w],tabIndex:[2,"tabIndex","tabIndex",Bl],_tabindex:[2,"tabindex","_tabindex",Bl],showProgress:[1,"showProgress"]}})}return i})(),rn=(()=>{class i extends Hl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["","progressIndicator",""]]],t=["*","[progressIndicator]"];function o(a,r){a&1&&(Re(0,"div",1),U(1,1),Ie())}return k({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Z],ngContentSelectors:t,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,l){r&1&&(fe(e),at(0,"span",0),U(1),E(2,o,2,0,"div",1),at(3,"span",2)(4,"span",3)),r&2&&(p(2),N(l.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return i})();var zt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[Ao,ee]})}return i})();function Ul(i){return Error(`Unable to find icon with the name "${i}"`)}function Qc(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Wl(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Gl(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Mt=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},$l=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(e,t,o,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=o}addSvgIcon(e,t,o){return this.addSvgIconInNamespace("",e,t,o)}addSvgIconLiteral(e,t,o){return this.addSvgIconLiteralInNamespace("",e,t,o)}addSvgIconInNamespace(e,t,o,a){return this._addSvgIconConfig(e,t,new Mt(o,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,o,a){let r=this._sanitizer.sanitize(At.HTML,o);if(!r)throw Gl(o);let l=qt(r);return this._addSvgIconConfig(e,t,new Mt("",l,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,o){return this._addSvgIconSetConfig(e,new Mt(t,null,o))}addSvgIconSetLiteralInNamespace(e,t,o){let a=this._sanitizer.sanitize(At.HTML,t);if(!a)throw Gl(t);let r=qt(a);return this._addSvgIconSetConfig(e,new Mt("",r,o))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=em(this._document),this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(At.RESOURCE_URL,e);if(!t)throw Wl(e);let o=this._cachedIconsByUrl.get(t);return o?he(Fo(o)):this._loadSvgIconFromConfig(new Mt(e,null)).pipe(Pe(a=>this._cachedIconsByUrl.set(t,a)),le(a=>Fo(a)))}getNamedSvgIcon(e,t=""){let o=ql(t,e),a=this._svgIconConfigs.get(o);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(o,a),this._getSvgFromConfig(a);let r=this._iconSetConfigs.get(t);return r?this._getSvgFromIconSetConfigs(e,r):hr(Ul(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?he(Fo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(le(t=>Fo(t)))}_getSvgFromIconSetConfigs(e,t){let o=this._extractIconWithNameFromAnySet(e,t);if(o)return he(o);let a=t.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Et(l=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(At.RESOURCE_URL,r.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(m)),he(null)})));return Ii(a).pipe(le(()=>{let r=this._extractIconWithNameFromAnySet(e,t);if(!r)throw Ul(e);return r}))}_extractIconWithNameFromAnySet(e,t){for(let o=t.length-1;o>=0;o--){let a=t[o];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(a),l=this._extractSvgIconFromSet(r,e,a.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Pe(t=>e.svgText=t),le(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?he(null):this._fetchIcon(e).pipe(Pe(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,o){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let r=a.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,o);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),o);let l=this._svgElementFromString(qt("<svg></svg>"));return l.appendChild(r),this._setSvgAttributes(l,o)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let o=t.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let t=this._svgElementFromString(qt("<svg></svg>")),o=e.attributes;for(let a=0;a<o.length;a++){let{name:r,value:l}=o[a],d=r.toLowerCase();d!=="id"&&!d.startsWith("on")&&t.setAttribute(r,l)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:o}=e,a=o?.withCredentials??!1;if(!this._httpClient)throw Qc();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let r=this._sanitizer.sanitize(At.RESOURCE_URL,t);if(!r)throw Wl(t);let l=this._inProgressUrlFetches.get(r);if(l)return l;let d=this._httpClient.get(r,{responseType:"text",withCredentials:a}).pipe(le(m=>qt(m)),Un(()=>this._inProgressUrlFetches.delete(r)),_r());return this._inProgressUrlFetches.set(r,d),d}_addSvgIconConfig(e,t,o){return this._svgIconConfigs.set(ql(e,t),o),this}_addSvgIconSetConfig(e,t){let o=this._iconSetConfigs.get(e);return o?o.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let o=0;o<this._resolvers.length;o++){let a=this._resolvers[o](t,e);if(a)return Jc(a)?new Mt(a.url,null,a.options):new Mt(a,null)}}static \u0275fac=function(t){return new(t||i)(Wn(Hi,8),Wn(ji),Wn(Q,8),Wn(Ti))};static \u0275prov=It({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Fo(i){return i.cloneNode(!0)}function ql(i,n){return i+":"+n}function Jc(i){return!!(i.url&&i.options)}function em(i){let n=null,e=!1;return i.fonts&&typeof i.fonts.forEach=="function"&&i.fonts.forEach(t=>{let o=t.family.replace(/['"]/g,"").trim().toLowerCase();(o==="material icons"||o.startsWith("material icons "))&&(e=!0),o.startsWith("material symbols rounded")?n="rounded":o.startsWith("material symbols sharp")?n="sharp":o.startsWith("material symbols")&&(n="outlined")}),[n&&!e?`material-symbols-${n}`:"material-icons","mat-ligature-font"]}var tm=new y("MAT_ICON_DEFAULT_OPTIONS"),nm=new y("mat-icon-location",{providedIn:"root",factory:()=>{let i=s(Q),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Kl=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],im=Kl.map(i=>`[${i}]`).join(", "),om=/^url\(['"]?#(.*?)['"]?\)$/,Ln=(()=>{class i{_elementRef=s(C);_iconRegistry=s($l);_location=s(nm);_errorHandler=s(Ti);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=we.EMPTY;constructor(){let e=s(new hn("aria-hidden"),{optional:!0}),t=s(tm,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let o=e.childNodes[t];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),t.forEach(o=>e.classList.add(o)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences,o=e.startsWith("//")?`/.${e}`:e;t&&t.forEach((a,r)=>{a.forEach(l=>{r.setAttribute(l.name,`url('${o}#${l.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(im),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)Kl.forEach(r=>{let l=t[a],d=l.getAttribute(r),m=d?d.match(om):null;if(m){let c=o.get(l);c||(c=[],o.set(l,c)),c.push({name:r,value:m[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,o]=this._splitIconName(e);t&&(this._svgNamespace=t),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,t).pipe(Nt(1)).subscribe(a=>this._setSvgElement(a),a=>{let r=`Error retrieving icon ${t}:${o}! ${a.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){return k({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(o,a){o&2&&($("data-mat-icon-type",a._usingFontIcon()?"font":"svg")("data-mat-icon-name",a._svgName||a.fontIcon)("data-mat-icon-namespace",a._svgNamespace||a.fontSet)("fontIcon",a._usingFontIcon()?a.fontIcon:null),$e(a.color?"mat-"+a.color:""),A("mat-icon-inline",a.inline)("mat-icon-no-color",a.color!=="primary"&&a.color!=="accent"&&a.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",w],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(o,a){o&1&&(fe(),U(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return i})(),zn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[ee]})}return i})();var Si=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new M;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,o){this._multiple=n,this._emitChanges=t,this.compareWith=o,e&&e.length&&(n?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(a=>this._getConcreteValue(a)));n.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Po=class{applyChanges(n,e,t,o,a){n.forEachOperation((r,l,d)=>{let m,c;if(r.previousIndex==null){let u=t(r,l,d);m=e.createEmbeddedView(u.templateRef,u.context,u.index),c=tt.INSERTED}else d==null?(e.remove(l),c=tt.REMOVED):(m=e.get(l),e.move(m,d),c=tt.MOVED);a&&a({context:m?.context,operation:c,record:r})})}detach(){}};var am=new y("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(J);return()=>St(i)}}),rm=new y("MAT_SELECT_CONFIG"),sm=new y("MatSelectTrigger"),tr=class{source;value;constructor(n,e){this.source=n,this.value=e}},Vo=(()=>{class i{_viewportRuler=s(Ye);_changeDetectorRef=s(ge);_elementRef=s(C);_dir=s(He,{optional:!0});_idGenerator=s(Me);_renderer=s(pe);_parentFormField=s(Xt,{optional:!0});ngControl=s(dt,{self:!0,optional:!0});_liveAnnouncer=s(Ra);_defaultOptions=s(rm,{optional:!0});_animationsDisabled=xe();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let o=this.panel.nativeElement,a=xo(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?o.scrollTop=0:o.scrollTop=wo(r.offsetTop,r.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new tr(this,e)}_scrollStrategyFactory=s(am);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=V(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ut.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ri(()=>{let e=this.options;return e?e.changes.pipe(ot(e),Rt(()=>Fe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Rt(()=>this.optionSelectionChanges))});openedChange=new K;_openedStream=this.openedChange.pipe(Ne(e=>e),le(()=>{}));_closedStream=this.openedChange.pipe(Ne(e=>!e),le(()=>{}));selectionChange=new K;valueChange=new K;constructor(){let e=s(yo),t=s(Wt,{optional:!0}),o=s(Jn,{optional:!0}),a=s(new hn("tabindex"),{optional:!0}),r=s(Ci,{optional:!0}),l=s(_o,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new In(e,l||this.ngControl,o,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Si(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(te(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(te(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ot(null),te(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute("aria-labelledby",e):o.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Nt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,o=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!Ae(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;r.onKeydown(e);let d=this.selected;d&&l!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,o=e.keyCode,a=o===40||o===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(o===13||o===32)&&t.activeItem&&!Ae(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(l?d.select():d.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ae(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch(a){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Pn?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Kt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Fe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(te(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Fe(...this.options.map(t=>t._stateChanges)).pipe(te(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,o)=>this.sortComparator?this.sortComparator(t,o,e):e.indexOf(t)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(o=>o.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Se(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["trigger"],t=["panel"],o=[[["mat-select-trigger"]],"*"],a=["mat-select-trigger","*"];function r(u,v){if(u&1&&(h(0,"span",4),P(1),g()),u&2){let f=x();p(),be(f.placeholder)}}function l(u,v){u&1&&U(0)}function d(u,v){if(u&1&&(h(0,"span",11),P(1),g()),u&2){let f=x(2);p(),be(f.triggerValue)}}function m(u,v){if(u&1&&(h(0,"span",5),E(1,l,1,0)(2,d,2,1,"span",11),g()),u&2){let f=x();p(),N(f.customTrigger?1:2)}}function c(u,v){if(u&1){let f=ye();h(0,"div",12,1),S("keydown",function(q){ne(f);let ue=x();return ie(ue._handleKeydown(q))}),U(2,1),g()}if(u&2){let f=x();$e(f.panelClass),A("mat-select-panel-animations-enabled",!f._animationsDisabled)("mat-primary",f._parentFormField?.color==="primary")("mat-accent",f._parentFormField?.color==="accent")("mat-warn",f._parentFormField?.color==="warn")("mat-undefined",!f._parentFormField?.color),$("id",f.id+"-panel")("aria-multiselectable",f.multiple)("aria-label",f.ariaLabel||null)("aria-labelledby",f._getPanelAriaLabelledby())}}return k({type:i,selectors:[["mat-select"]],contentQueries:function(v,f,F){if(v&1&&Qe(F,sm,5)(F,mt,5)(F,gi,5),v&2){let q;z(q=B())&&(f.customTrigger=q.first),z(q=B())&&(f.options=q),z(q=B())&&(f.optionGroups=q)}},viewQuery:function(v,f){if(v&1&&Ue(e,5)(t,5)(Oo,5),v&2){let F;z(F=B())&&(f.trigger=F.first),z(F=B())&&(f.panel=F.first),z(F=B())&&(f._overlayDir=F.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(v,f){v&1&&S("keydown",function(q){return f._handleKeydown(q)})("focus",function(){return f._onFocus()})("blur",function(){return f._onBlur()}),v&2&&($("id",f.id)("tabindex",f.disabled?-1:f.tabIndex)("aria-controls",f.panelOpen?f.id+"-panel":null)("aria-expanded",f.panelOpen)("aria-label",f.ariaLabel||null)("aria-required",f.required.toString())("aria-disabled",f.disabled.toString())("aria-invalid",f.errorState)("aria-activedescendant",f._getAriaActiveDescendant()),A("mat-mdc-select-disabled",f.disabled)("mat-mdc-select-invalid",f.errorState)("mat-mdc-select-required",f.required)("mat-mdc-select-empty",f.empty)("mat-mdc-select-multiple",f.multiple)("mat-select-open",f.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",w],disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",u=>u==null?0:st(u)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",w],placeholder:"placeholder",required:[2,"required","required",w],multiple:[2,"multiple","multiple",w],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",w],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",st],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",w]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Y([{provide:ci,useExisting:i},{provide:hi,useExisting:i}]),ve],ngContentSelectors:a,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(v,f){if(v&1&&(fe(o),h(0,"div",2,0),S("click",function(){return f.open()}),h(3,"div",3),E(4,r,2,1,"span",4)(5,m,3,1,"span",5),g(),h(6,"div",6)(7,"div",7),ft(),h(8,"svg",8),Ce(9,"path",9),g()()()(),Le(10,c,3,16,"ng-template",10),S("detach",function(){return f.close()})("backdropClick",function(){return f.close()})("overlayKeydown",function(q){return f._handleOverlayKeydown(q)})),v&2){let F=rt(1);p(3),$("id",f._valueId),p(),N(f.empty?4:5),p(6),R("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",f._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",f._scrollStrategy)("cdkConnectedOverlayOrigin",f._preferredOverlayOrigin||F)("cdkConnectedOverlayPositions",f._positions)("cdkConnectedOverlayWidth",f._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",f._popoverLocation)}},dependencies:[Pn,Oo],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return i})();var Lo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[an,Vn,ee,Ct,et,Vn]})}return i})();var dm=["inputEl"];function cm(i,n){if(i&1&&(h(0,"mat-option",7),P(1),g()),i&2){let e=n.$implicit;R("value",e),p(),be(e)}}function mm(i,n){if(i&1){let e=ye();h(0,"input",5,0),ln(),S("ngModelChange",function(o){ne(e);let a=x();return ie(a.value.set(o))})("keydown.enter",function(){ne(e);let o=rt(2),a=x();return ie(a.onEnterKey(o))})("blur",function(){ne(e);let o=x();return ie(o.commitCurrentValue())}),g(),h(3,"mat-autocomplete",6,1),S("optionSelected",function(o){ne(e);let a=x();return ie(a.onOptionSelected(o.option.value))}),Ht(5,cm,2,2,"mat-option",7,Gn),g()}if(i&2){let e=rt(4),t=x();R("required",t.required())("disabled",t.disabled())("placeholder",t.placeholder())("ngModel",t.value())("matAutocomplete",e),$("maxlength",t.maxLength()),dn(),p(3),R("autoActiveFirstOption",!1),p(2),jt(t.displayOptions())}}function um(i,n){if(i&1&&(h(0,"mat-option",7),P(1),g()),i&2){let e=n.$implicit;R("value",e),p(),be(e)}}function pm(i,n){if(i&1){let e=ye();h(0,"mat-select",8),ln(),S("ngModelChange",function(o){ne(e);let a=x();return ie(a.value.set(o))}),Ht(1,um,2,2,"mat-option",7,Gn),g()}if(i&2){let e=x();R("required",e.required())("disabled",e.disabled())("placeholder",e.placeholder())("ngModel",e.value()),dn(),p(),jt(e.displayOptions())}}function fm(i,n){if(i&1){let e=ye();h(0,"mat-icon",11),S("click",function(o){ne(e);let a=x(2);return ie(a.clearValue(o))})("keydown.enter",function(o){ne(e);let a=x(2);return ie(a.clearValue(o))}),P(1," close "),g()}}function hm(i,n){if(i&1&&(h(0,"mat-icon",12),P(1," arrow_drop_down "),g()),i&2){let e=x(2);A("disabled",e.disabled())}}function gm(i,n){if(i&1&&E(0,fm,2,0,"mat-icon",9)(1,hm,2,2,"mat-icon",10),i&2){let e=x();N(e.value()&&!e.disabled()?0:1)}}var zo=class i{label=G.required();placeholder=G("");defaultOptions=G.required();allowCustom=G(!1);maxRecent=G(5);storageKey=G(null);required=G(!1);disabled=G(!1);maxLength=G(30);value=Li("");inputEl=We("inputEl");optionList=V([]);displayOptions=oe(()=>{let n=this.optionList();if(!this.allowCustom())return n;let e=(this.value()??"").trim().toLowerCase();return!e||n.some(t=>t.toLowerCase()===e)?n.slice(0,this.maxRecent()):n.filter(t=>t.toLowerCase().includes(e)).slice(0,this.maxRecent())});constructor(){de(()=>{let n=this.defaultOptions(),e=this.storageKey(),t=this.allowCustom(),o=this.maxRecent();se(()=>{if(t&&e){let a=this.loadFromStorage(e)??[],r=[...a,...n.filter(l=>!a.some(d=>d.toLowerCase()===l.toLowerCase()))];this.optionList.set(r.slice(0,o))}else this.optionList.set([...n])})})}commitCurrentValue(){if(this.disabled()||!this.allowCustom())return;let n=(this.value()??"").trim();if(this.value()!==n&&this.value.set(n),!n)return;let e=n.toLowerCase(),t=[n,...this.optionList().filter(a=>a.toLowerCase()!==e)].slice(0,this.maxRecent());this.optionList.set(t);let o=this.storageKey();o&&this.saveToStorage(o,t)}onOptionSelected(n){this.value.set(n),this.commitCurrentValue()}onEnterKey(n){this.commitCurrentValue(),n.closePanel()}clearValue(n){n.stopPropagation(),!this.disabled()&&(this.value.set(""),this.inputEl()?.nativeElement.focus())}loadFromStorage(n){try{let e=localStorage.getItem(n);if(!e)return null;let t=JSON.parse(e);return Array.isArray(t)?t.filter(o=>typeof o=="string"):null}catch(e){return null}}saveToStorage(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch(t){}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["app-common-select"]],viewQuery:function(e,t){e&1&&Tt(t.inputEl,dm,5),e&2&&vt()},inputs:{label:[1,"label"],placeholder:[1,"placeholder"],defaultOptions:[1,"defaultOptions"],allowCustom:[1,"allowCustom"],maxRecent:[1,"maxRecent"],storageKey:[1,"storageKey"],required:[1,"required"],disabled:[1,"disabled"],maxLength:[1,"maxLength"],value:[1,"value"]},outputs:{value:"valueChange"},decls:7,vars:3,consts:[["inputEl","","trigger","matAutocompleteTrigger"],["auto","matAutocomplete"],["appearance","outline","floatLabel","always",1,"common-select-field"],[3,"required","disabled","placeholder","ngModel"],["matIconSuffix",""],["matInput","","type","text",3,"ngModelChange","keydown.enter","blur","required","disabled","placeholder","ngModel","matAutocomplete"],[3,"optionSelected","autoActiveFirstOption"],[3,"value"],[3,"ngModelChange","required","disabled","placeholder","ngModel"],["role","button","tabindex","0","aria-label","\u30AF\u30EA\u30A2",1,"clear-icon"],[1,"dropdown-arrow",3,"disabled"],["role","button","tabindex","0","aria-label","\u30AF\u30EA\u30A2",1,"clear-icon",3,"click","keydown.enter"],[1,"dropdown-arrow"]],template:function(e,t){e&1&&(h(0,"mat-form-field",2)(1,"mat-label"),P(2),g(),E(3,mm,7,7)(4,pm,3,4,"mat-select",3),gt(5,4),E(6,gm,2,1),bt(),g()),e&2&&(p(2),be(t.label()),p(),N(t.allowCustom()?3:4),p(3),N(t.allowCustom()?6:-1))},dependencies:[Mn,Cn,ro,Sn,ei,et,ct,wt,di,An,On,Vl,Pl,mt,Za,Lo,Vo,zn,Ln,zt],styles:["[_nghost-%COMP%]{display:block;width:100%;min-width:0}.common-select-field[_ngcontent-%COMP%]{width:100%}.clear-icon[_ngcontent-%COMP%]{cursor:pointer;color:var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, .54));border-radius:50%;transition:background-color .15s ease}.clear-icon[_ngcontent-%COMP%]:hover{background-color:#0000000f}.dropdown-arrow[_ngcontent-%COMP%]{pointer-events:none;color:var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, .54))}.dropdown-arrow.disabled[_ngcontent-%COMP%]{opacity:.38}"]})};var bm=["categorySelect"];function _m(i,n){i&1&&(h(0,"mat-error"),P(1,"\u30BF\u30A4\u30C8\u30EB\u306F\u5FC5\u9808\u5165\u529B\u3067\u3059"),g())}function vm(i,n){i&1&&(h(0,"mat-error"),P(1,"\u30BF\u30A4\u30C8\u30EB\u306F20\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),g())}function ym(i,n){if(i&1&&(E(0,_m,2,0,"mat-error"),E(1,vm,2,0,"mat-error")),i&2){let e=x();N(e.title().trim()?-1:0),p(),N(e.title().length>20?1:-1)}}function xm(i,n){if(i&1){let e=ye();h(0,"div",5)(1,"app-common-select",10),pn("valueChange",function(o){ne(e);let a=x();return un(a.status,o)||(a.status=o),ie(o)}),g(),h(2,"app-common-select",11,0),pn("valueChange",function(o){ne(e);let a=x();return un(a.category,o)||(a.category=o),ie(o)}),g()()}if(i&2){let e=x();p(),R("defaultOptions",e.statusOptions),mn("value",e.status),p(),R("defaultOptions",e.defaultCategories)("allowCustom",!0),mn("value",e.category)}}var Ho=class i{categorySelect=We("categorySelect");isVisible=G(!1);showFilter=G(!0);editData=G(null);isInvalid=Li(!0);submitTrigger=G(!1);save=Be();next=Be();prev=Be();statusOptions=["","\u4E88\u5B9A","\u9014\u4E2D","\u5B8C\u4E86"];defaultCategories=["","Memo","\u5BB6\u8A08\u7C3F","\u305D\u306E\u4ED6"];initialValues=oe(()=>{let n=this.editData();return{title:n?.title??"",content:n?.content??"",status:n?.status??"",category:n?.category??""}});title=fn({source:()=>({init:this.initialValues(),visible:this.isVisible()}),computation:n=>n.init.title});content=fn({source:()=>({init:this.initialValues(),visible:this.isVisible()}),computation:n=>n.init.content});status=fn({source:()=>({init:this.initialValues(),visible:this.isVisible()}),computation:n=>n.init.status});category=fn({source:()=>({init:this.initialValues(),visible:this.isVisible()}),computation:n=>n.init.category});isDirty=oe(()=>{let n=this.initialValues();return this.title()!==n.title||this.content()!==n.content||this.status()!==n.status||this.category()!==n.category});isTitleInvalid=oe(()=>{let n=this.title();return!n.trim()||n.length>20});constructor(){de(()=>{let n=this.isTitleInvalid()||!this.isDirty();this.isInvalid.set(n)}),de(()=>{this.submitTrigger()&&se(()=>{this.isTitleInvalid()||(this.categorySelect()?.commitCurrentValue(),this.save.emit({title:this.title().trim(),content:this.content().trim(),status:this.status(),category:this.category().trim()||"\u305D\u306E\u4ED6"}))})})}onSwipeNext(){this.canNavigate()&&this.next.emit()}onSwipePrev(){this.canNavigate()&&this.prev.emit()}canNavigate(){return!this.isVisible()||!this.editData()?!1:this.isDirty()?window.confirm("\u7DE8\u96C6\u4E2D\u306E\u5185\u5BB9\u304C\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u7834\u68C4\u3057\u3066\u79FB\u52D5\u3057\u307E\u3059\u304B\uFF1F"):!0}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["app-memo-form"]],viewQuery:function(e,t){e&1&&Tt(t.categorySelect,bm,5),e&2&&vt()},inputs:{isVisible:[1,"isVisible"],showFilter:[1,"showFilter"],editData:[1,"editData"],isInvalid:[1,"isInvalid"],submitTrigger:[1,"submitTrigger"]},outputs:{isInvalid:"isInvalidChange",save:"save",next:"next",prev:"prev"},decls:15,vars:8,consts:[["categorySelect",""],["libScrollTop","",1,"form-scroll-container","feature-scroll-container"],["libSwipe","",1,"memo-form","feature-flex-body","compact-form",3,"swipeLeft","swipeRight","submit","swipeThreshold"],["appearance","outline",1,"full-width"],["matInput","","required","","maxlength","100","name","memoTitle","placeholder","\u30E1\u30E2\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B",3,"ngModelChange","ngModel"],[1,"status-category-row"],["appearance","outline",1,"auto-grow-field"],[1,"textarea-grow-wrap"],["matInput","","name","memoContent","placeholder","\u30E1\u30E2\u306E\u5185\u5BB9\u3092\u5165\u529B",3,"ngModelChange","ngModel"],["aria-hidden","true",1,"textarea-mirror"],["label","status",3,"valueChange","defaultOptions","value"],["label","category","storageKey","memo_recent_categories",3,"valueChange","defaultOptions","allowCustom","value"]],template:function(e,t){e&1&&(h(0,"div",1)(1,"form",2),S("swipeLeft",function(){return t.onSwipeNext()})("swipeRight",function(){return t.onSwipePrev()})("submit",function(a){return a.preventDefault()}),h(2,"mat-form-field",3)(3,"mat-label"),P(4,"\u30BF\u30A4\u30C8\u30EB"),g(),h(5,"input",4),ln(),S("ngModelChange",function(a){return t.title.set(a)}),g(),E(6,ym,2,2),g(),E(7,xm,4,5,"div",5),h(8,"mat-form-field",6)(9,"mat-label"),P(10,"\u5185\u5BB9"),g(),h(11,"div",7)(12,"textarea",8),ln(),pn("ngModelChange",function(a){return un(t.content,a)||(t.content=a),a}),g(),h(13,"div",9),P(14),g()()()()()),e&2&&(p(),R("swipeThreshold",60),p(),A("mat-form-field-invalid",t.isDirty()&&t.isTitleInvalid()),p(3),R("ngModel",t.title()),dn(),p(),N(t.isDirty()&&t.isTitleInvalid()?6:-1),p(),N(t.showFilter()?7:-1),p(5),mn("ngModel",t.content),dn(),p(2),be(t.content()+`
`))},dependencies:[Mn,fs,Cn,ro,us,Sn,xa,ei,Wt,et,ct,wt,La,An,On,lt,zo,vn],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.form-scroll-container[_ngcontent-%COMP%]{position:relative;background-color:var(--%NS%mat-sys-surface-container-low, #f9f9f9);border-radius:0 0 8px 8px}.memo-form[_ngcontent-%COMP%]{gap:.75rem;padding:1rem 0}.memo-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:first-of-type{flex:0 0 auto;width:100%}.status-category-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:115px minmax(0,1fr);gap:8px;width:100%}.status-category-row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{min-width:0}"]})};var wm=20;var Cm=new y("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(J);return()=>St(i,{scrollThrottle:wm})}}),Sm=new y("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Yl="tooltip-panel",Mm={passive:!0},Dm=8,km=8,Em=24,Nm=200,Mi=(()=>{class i{_elementRef=s(C);_ngZone=s(W);_platform=s(X);_ariaDescriber=s(bo);_focusMonitor=s(Gt);_dir=s(He);_injector=s(J);_viewContainerRef=s(Ve);_mediaMatcher=s(En);_document=s(Q);_renderer=s(pe);_animationsDisabled=xe();_defaultOptions=s(Sm,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Xl;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=xt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=xt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=kn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=kn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new M;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Dm}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(te(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(t);this._detach(),this._portal=this._portal||new xi(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=o.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(te(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof C)return this._overlayRef;this._detach()}let t=this._injector.get(Fn).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Yl}`,a=nn(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(te(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=on(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(Cm)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(te(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(te(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(te(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(te(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,o=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(T(T({},o.main),a.main)),this._addOffset(T(T({},o.fallback),a.fallback))])}_addOffset(e){let t=km,o=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=o?-t:t:e.originX==="end"&&(e.offsetX=o?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"||t=="below"?o={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={originX:"end",originY:"center"});let{x:a,y:r}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:a,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"?o={overlayX:"center",overlayY:"bottom"}:t=="below"?o={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={overlayX:"start",overlayY:"center"});let{x:a,y:r}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:a,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ee(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:o,originY:a}=e,r;if(t==="center"?this._dir&&this._dir.value==="rtl"?r=o==="end"?"left":"right":r=o==="start"?"left":"right":r=t==="bottom"&&a==="top"?"above":"below",r!==this._currentPosition){let l=this._overlayRef;if(l){let d=`${this._cssClassPrefix}-${Yl}-`;l.removePanelClass(d+this._currentPosition),l.addPanelClass(d+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],o=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;t!==o&&!o.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Mm))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,o=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(e==="on"||!t.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ee({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ae(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,o){t&2&&A("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Xl=(()=>{class i{_changeDetectorRef=s(ge);_elementRef=s(C);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=xe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new M;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Em&&e.width>=Nm}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,o=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:o),t.classList.add(e?o:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(t);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["tooltip"];return k({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(o,a){if(o&1&&Ue(e,7),o&2){let r;z(r=B())&&(a._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(o,a){o&1&&S("mouseleave",function(l){return a._handleMouseLeave(l)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(o,a){o&1&&(Re(0,"div",1,0),Er("animationend",function(l){return a._handleAnimationEnd(l)}),Re(2,"div",2),P(3),Ie()()),o&2&&($e(a.tooltipClass),A("mdc-tooltip--multiline",a._isMultiline),p(3),be(a.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return i})();var jo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[Ia,an,ee,Ct]})}return i})();var Im=(()=>{class i{changes=new M;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,o)=>{if(o==0||t==0)return`0 of ${o}`;o=Math.max(o,0);let a=e*t,r=a<o?Math.min(a+t,o):a+t;return`${a+1} \u2013 ${r} of ${o}`};static \u0275fac=function(t){return new(t||i)};static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),Om=50;var Am=new y("MAT_PAGINATOR_DEFAULT_OPTIONS"),Bn=(()=>{class i{_intl=s(Im);_changeDetectorRef=s(ge);_formFieldAppearance;_pageSizeLabelId=s(Me).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new Ni(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>st(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new K;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=s(Am,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:o,pageSizeOptions:a,hidePageSize:r,showFirstLastButtons:l}=t;o!=null&&(this._pageSize=o),a!=null&&(this._pageSizeOptions=a),r!=null&&(this.hidePageSize=r),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,o=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(o)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Om),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){function e(d,m){if(d&1&&(h(0,"mat-option",17),P(1),g()),d&2){let c=m.$implicit;R("value",c),p(),Je(" ",c," ")}}function t(d,m){if(d&1){let c=ye();h(0,"mat-form-field",14)(1,"mat-select",16,0),S("selectionChange",function(v){ne(c);let f=x(2);return ie(f._changePageSize(v.value))}),Ht(3,e,2,2,"mat-option",17,Gn),g(),h(5,"div",18),S("click",function(){ne(c);let v=rt(2);return ie(v.open())}),g()()}if(d&2){let c=x(2);R("appearance",c._formFieldAppearance)("color",c.color),p(),R("value",c.pageSize)("disabled",c.disabled),kr("aria-labelledby",c._pageSizeLabelId),R("panelClass",c.selectConfig.panelClass||"")("disableOptionCentering",c.selectConfig.disableOptionCentering),p(2),jt(c._displayedPageSizeOptions)}}function o(d,m){if(d&1&&(h(0,"div",15),P(1),g()),d&2){let c=x(2);p(),be(c.pageSize)}}function a(d,m){if(d&1&&(h(0,"div",3)(1,"div",13),P(2),g(),E(3,t,6,7,"mat-form-field",14),E(4,o,2,1,"div",15),g()),d&2){let c=x();p(),$("id",c._pageSizeLabelId),p(),Je(" ",c._intl.itemsPerPageLabel," "),p(),N(c._displayedPageSizeOptions.length>1?3:-1),p(),N(c._displayedPageSizeOptions.length<=1?4:-1)}}function r(d,m){if(d&1){let c=ye();h(0,"button",19),S("click",function(){ne(c);let v=x();return ie(v._buttonClicked(0,v._previousButtonsDisabled()))}),ft(),h(1,"svg",8),Ce(2,"path",20),g()()}if(d&2){let c=x();R("matTooltip",c._intl.firstPageLabel)("matTooltipDisabled",c._previousButtonsDisabled())("disabled",c._previousButtonsDisabled())("tabindex",c._previousButtonsDisabled()?-1:null),$("aria-label",c._intl.firstPageLabel)}}function l(d,m){if(d&1){let c=ye();h(0,"button",21),S("click",function(){ne(c);let v=x();return ie(v._buttonClicked(v.getNumberOfPages()-1,v._nextButtonsDisabled()))}),ft(),h(1,"svg",8),Ce(2,"path",22),g()()}if(d&2){let c=x();R("matTooltip",c._intl.lastPageLabel)("matTooltipDisabled",c._nextButtonsDisabled())("disabled",c._nextButtonsDisabled())("tabindex",c._nextButtonsDisabled()?-1:null),$("aria-label",c._intl.lastPageLabel)}}return k({type:i,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",st],length:[2,"length","length",st],pageSize:[2,"pageSize","pageSize",st],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",w],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",w],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",w]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(m,c){m&1&&(h(0,"div",1)(1,"div",2),E(2,a,5,4,"div",3),h(3,"div",4)(4,"div",5),P(5),g(),E(6,r,3,5,"button",6),h(7,"button",7),S("click",function(){return c._buttonClicked(c.pageIndex-1,c._previousButtonsDisabled())}),ft(),h(8,"svg",8),Ce(9,"path",9),g()(),yr(),h(10,"button",10),S("click",function(){return c._buttonClicked(c.pageIndex+1,c._nextButtonsDisabled())}),ft(),h(11,"svg",8),Ce(12,"path",11),g()(),E(13,l,3,5,"button",12),g()()()),m&2&&(p(2),N(c.hidePageSize?-1:2),p(3),Je(" ",c._intl.getRangeLabel(c.pageIndex,c.pageSize,c.length)," "),p(),N(c.showFirstLastButtons?6:-1),p(),R("matTooltip",c._intl.previousPageLabel)("matTooltipDisabled",c._previousButtonsDisabled())("disabled",c._previousButtonsDisabled())("tabindex",c._previousButtonsDisabled()?-1:null),$("aria-label",c._intl.previousPageLabel),p(3),R("matTooltip",c._intl.nextPageLabel)("matTooltipDisabled",c._nextButtonsDisabled())("disabled",c._nextButtonsDisabled())("tabindex",c._nextButtonsDisabled()?-1:null),$("aria-label",c._intl.nextPageLabel),p(3),N(c.showFirstLastButtons?13:-1))},dependencies:[ct,Vo,mt,rn,Mi],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})})()}return i})(),Zl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[zt,Lo,jo,Bn]})}return i})();var nt=new y("CDK_TABLE");var Go=(()=>{class i{template=s(qe);static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),qo=(()=>{class i{template=s(qe);static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),td=(()=>{class i{template=s(qe);static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),Bt=(()=>{class i{_table=s(nt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,o,a){if(t&1&&Qe(a,Go,5)(a,qo,5)(a,td,5),t&2){let r;z(r=B())&&(o.cell=r.first),z(r=B())&&(o.headerCell=r.first),z(r=B())&&(o.footerCell=r.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",w],stickyEnd:[2,"stickyEnd","stickyEnd",w]}})}return i})(),Wo=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},nd=(()=>{class i extends Wo{constructor(){super(s(Bt),s(C))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[Z]})}return i})();var id=(()=>{class i extends Wo{constructor(){let e=s(Bt),t=s(C);super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute("role",o)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[Z]})}return i})();var ir=(()=>{class i{template=s(qe);_differs=s(zi);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ki?e.headerCell.template:this instanceof or?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,features:[ve]})}return i})(),ki=(()=>{class i extends ir{_table=s(nt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",w]},features:[Z,ve]})}return i})(),or=(()=>{class i extends ir{_table=s(nt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",w]},features:[Z,ve]})}return i})(),$o=(()=>{class i extends ir{_table=s(nt,{optional:!0});when;static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[Z]})}return i})(),sn=(()=>{class i{_viewContainer=s(Ve);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),ar=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ze(0,0)},dependencies:[sn],encapsulation:2,changeDetection:1})}return i})();var rr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ze(0,0)},dependencies:[sn],encapsulation:2,changeDetection:1})}return i})(),Ko=(()=>{class i{templateRef=s(qe);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),Ql=["top","bottom","left","right"],nr=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,t=!0,o=!0,a,r,l){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=o,this.direction=a,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let t=[];for(let o of n)o.nodeType===o.ELEMENT_NODE&&t.push(o,...Array.from(o.children));Ee({write:()=>{for(let o of t)this._removeStickyStyle(o,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,t,o=!0,a=!0){if(!n.length||!this._isBrowser||!(e.some(ue=>ue)||t.some(ue=>ue))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=n[0],l=r.children.length,d=this.direction==="rtl",m=d?"right":"left",c=d?"left":"right",u=e.lastIndexOf(!0),v=t.indexOf(!0),f,F,q;a&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...t]}),Ee({earlyRead:()=>{f=this._getCellWidths(r,o),F=this._getStickyStartColumnPositions(f,e),q=this._getStickyEndColumnPositions(f,t)},write:()=>{for(let ue of n)for(let De=0;De<l;De++){let Dt=ue.children[De];e[De]&&this._addStickyStyle(Dt,m,F[De],De===u),t[De]&&this._addStickyStyle(Dt,c,q[De],De===v)}this._positionListener&&f.some(ue=>!!ue)&&(this._positionListener.stickyColumnsUpdated({sizes:u===-1?[]:f.slice(0,u+1).map((ue,De)=>e[De]?ue:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:v===-1?[]:f.slice(v).map((ue,De)=>t[De+v]?ue:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,t){if(!this._isBrowser)return;let o=t==="bottom"?n.slice().reverse():n,a=t==="bottom"?e.slice().reverse():e,r=[],l=[],d=[];Ee({earlyRead:()=>{for(let m=0,c=0;m<o.length;m++){if(!a[m])continue;r[m]=c;let u=o[m];d[m]=this._isNativeHtmlTable?Array.from(u.children):[u];let v=this._retrieveElementSize(u).height;c+=v,l[m]=v}},write:()=>{let m=a.lastIndexOf(!0);for(let c=0;c<o.length;c++){if(!a[c])continue;let u=r[c],v=c===m;for(let f of d[c])this._addStickyStyle(f,t,u,v)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&Ee({write:()=>{let t=n.querySelector("tfoot");t&&(e.some(o=>!o)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let o of e)n.style[o]="",n.classList.remove(this._borderCellCss[o]);Ql.some(o=>e.indexOf(o)===-1&&n.style[o])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,t,o){n.classList.add(this._stickCellCss),o&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${t}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},t=0;for(let o of Ql)n.style[o]&&(t+=e[o]);return t?`${t}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],o=n.children;for(let a=0;a<o.length;a++){let r=o[a];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(n,e){let t=[],o=0;for(let a=0;a<n.length;a++)e[a]&&(t[a]=o,o+=n[a]);return t}_getStickyEndColumnPositions(n,e){let t=[],o=0;for(let a=n.length;a>0;a--)e[a]&&(t[a]=o,o+=n[a]);return t}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let t=n.getBoundingClientRect(),o={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(n,o),this._resizeObserver.observe(n,{box:"border-box"})),o}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(o=>!e.has(o));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(n){let e=!1;for(let t of n){let o=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};o.width!==this._elemSizeCache.get(t.target)?.width&&Fm(t.target)&&(e=!0),this._elemSizeCache.set(t.target,o)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Fm(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>i.classList.contains(n))}function Jl(i){return Error(`Could not find column with id "${i}".`)}var Di=new y("STICKY_POSITIONING_LISTENER");var sr=(()=>{class i{viewContainer=s(Ve);elementRef=s(C);constructor(){let e=s(nt);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","rowOutlet",""]]})}return i})(),lr=(()=>{class i{viewContainer=s(Ve);elementRef=s(C);constructor(){let e=s(nt);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),dr=(()=>{class i{viewContainer=s(Ve);elementRef=s(C);constructor(){let e=s(nt);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),cr=(()=>{class i{viewContainer=s(Ve);elementRef=s(C);constructor(){let e=s(nt);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),mr=(()=>{class i{_differs=s(zi);_changeDetectorRef=s(ge);_elementRef=s(C);_dir=s(He,{optional:!0});_platform=s(X);_viewRepeater;_viewportRuler=s(Ye);_injector=s(J);_virtualScrollViewport=s(pl,{optional:!0,host:!0});_positionListener=s(Di,{optional:!0})||s(Di,{optional:!0,skipSelf:!0});_document=s(Q);_data;_renderedRange;_onDestroy=new M;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_rowDefsByView=new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new M;_footerRowStickyUpdates=new M;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new M;_dataStream=new M;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new K;viewChange=new kt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){s(new hn("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(te(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Co:new Po,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),_i(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(o,a,r)=>this._getEmbeddedViewArgs(o.item,r),o=>o.item.data,o=>{if(o.operation===tt.INSERTED&&o.context){this._renderCellTemplateForItem(o.record.item.rowDef,o.context);let a=t.get(o.record.currentIndex);this._rowDefsByView.set(a,o.record.item.rowDef)}}),e.forEachIdentityChange(o=>{let a=o.currentIndex,r=t.get(a);if(this._rowDefsByView.get(r)!==o.item.rowDef){t.remove(a);let l=this._renderRow(this._rowOutlet,o.item.rowDef,a,{$implicit:o.item.data});this._rowDefsByView.set(l,o.item.rowDef)}else r.context.$implicit=o.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=ed(this._headerRowOutlet,"thead");o&&(o.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=ed(this._footerRowOutlet,"tfoot");o&&(o.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,r)=>{this._addStickyColumnStyles([a],this._headerRowDefs[r])}),this._rowDefs.forEach(a=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===a&&r.push(t[l]);this._addStickyColumnStyles(r,a)}),o.forEach((a,r)=>{this._addStickyColumnStyles([a],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let r=this._data[a],l=this._getRenderRowsForData(r,a,o.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let d=0;d<l.length;d++){let m=l[d],c=this._cachedRenderRowsMap.get(m.data);c.has(m.rowDef)?c.get(m.rowDef).push(m):c.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,t,o){return this._getRowDefs(e,t).map(r=>{let l=o&&o.has(r)?o.get(r):[];if(l.length){let d=l.shift();return d.dataIndex=t,d}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Uo(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Uo(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Uo(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Uo(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,l)=>{let d=!!l.getColumnsDiff();return r||d},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(e,!1);o&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||o||a}_switchDataSource(e){this._data=[],_i(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;_i(this.dataSource)?e=this.dataSource.connect(this):ea(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=he(this.dataSource)),this._renderChangeSubscription=it([e,this.viewChange]).pipe(te(this._onDestroy)).subscribe(([t,o])=>{this._data=t||[],this._renderedRange=o,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let o=Array.from(t?.columns||[]).map(l=>{let d=this._columnDefsByName.get(l);if(!d)throw Jl(l);return d}),a=o.map(l=>l.sticky),r=o.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let o=0;o<e.viewContainer.length;o++){let a=e.viewContainer.get(o);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;a&&o.push(a)}return o.length,o}_getEmbeddedViewArgs(e,t){let o=e.rowDef,a={$implicit:e.data};return{templateRef:o.template,context:a,index:t}}_renderRow(e,t,o,a={}){let r=e.viewContainer.createEmbeddedView(t.template,a,o);return this._renderCellTemplateForItem(t,a),r}_renderCellTemplateForItem(e,t){for(let o of this._getCellTemplates(e))sn.mostRecentCellOutlet&&sn.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,o=e.length;t<o;t++){let r=e.get(t).context;r.count=o,r.first=t===0,r.last=t===o-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let o=this._columnDefsByName.get(t);if(!o)throw Jl(t);return e.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,o)=>t||o.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new nr(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:he()).pipe(te(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Jo:Qo;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(jn(0,t),te(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(o,a)=>this._measureRangeSize(o,a)}),it([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(te(this._onDestroy)).subscribe(([o,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l){let d=a.offsets[r],m=o!==0?Math.max(o-d,d):-d;for(let c of l)c.style.top=`${-m}px`}}}),it([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(te(this._onDestroy)).subscribe(([o,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l)for(let d of l)d.style.bottom=`${o+a.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(t){let a=o.createEmbeddedView(e.templateRef),r=a.rootNodes[0];if(a.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute("role","row"),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let d=0;d<l.length;d++)l[d].classList.add(...e._cellClassNames)}}else o.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let o=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<o.start||e.end>o.end;let r=e.start-o.start,l=e.end-e.start,d,m;for(let v=0;v<l;v++){let f=a.get(v+r);if(f&&f.rootNodes.length){d=m=f.rootNodes[0];break}}for(let v=l-1;v>-1;v--){let f=a.get(v+r);if(f&&f.rootNodes.length){m=f.rootNodes[f.rootNodes.length-1];break}}let c=d?.getBoundingClientRect?.(),u=m?.getBoundingClientRect?.();return c&&u?u.bottom-c.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=[[["caption"]],[["colgroup"],["col"]],"*"],t=["caption","colgroup, col","*"];function o(l,d){l&1&&U(0,2)}function a(l,d){l&1&&(h(0,"thead",0),ze(1,1),g(),h(2,"tbody",0),ze(3,2)(4,3),g(),h(5,"tfoot",0),ze(6,4),g())}function r(l,d){l&1&&ze(0,1)(1,2)(2,3)(3,4)}return k({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(d,m,c){if(d&1&&Qe(c,Ko,5)(c,Bt,5)(c,$o,5)(c,ki,5)(c,or,5),d&2){let u;z(u=B())&&(m._noDataRow=u.first),z(u=B())&&(m._contentColumnDefs=u),z(u=B())&&(m._contentRowDefs=u),z(u=B())&&(m._contentHeaderRowDefs=u),z(u=B())&&(m._contentFooterRowDefs=u)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(d,m){d&2&&A("cdk-table-fixed-layout",m.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",w],fixedLayout:[2,"fixedLayout","fixedLayout",w],recycleRows:[2,"recycleRows","recycleRows",w]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[Y([{provide:nt,useExisting:i},{provide:Di,useValue:null}])],ngContentSelectors:t,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(d,m){d&1&&(fe(e),U(0),U(1,1),E(2,o,1,0),E(3,a,7,0)(4,r,4,0)),d&2&&(p(2),N(m._isServer?2:-1),p(),N(m._isNativeHtmlTable?3:4))},dependencies:[lr,sr,cr,dr],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return i})();function Uo(i,n){return i.concat(Array.from(n))}function ed(i,n){let e=n.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let o=t.nodeType===1?t.nodeName:null;if(o===e)return t;if(o==="TABLE")break;t=t.parentNode}return null}var od=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[vi]})}return i})();var ad=new y("MAT_SORT_DEFAULT_OPTIONS"),Hn=(()=>{class i{_defaultOptions;_initializedStream=new Ni(1);sortables=new Map;_stateChanges=new M;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new K;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,o=Pm(e.start||this.start,t),a=o.indexOf(this.direction)+1;return a>=o.length&&(a=0),o[a]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(t){return new(t||i)(me(ad,8))};static \u0275dir=_({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",w],disabled:[2,"matSortDisabled","disabled",w]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[ve]})}return i})();function Pm(i,n){let e=["asc","desc"];return i=="desc"&&e.reverse(),n||e.push(""),e}var rd=(()=>{class i{_sort=s(Hn,{optional:!0});_columnDef=s(Bt,{optional:!0});_changeDetectorRef=s(ge);_focusMonitor=s(Gt);_elementRef=s(C);_ariaDescriber=s(bo,{optional:!0});_renderChanges;_animationsDisabled=xe();_recentlyCleared=V(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){s(Oe).load(Tn);let e=s(ad,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Fe(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["","matSortHeaderIcon",""]]],t=["*","[matSortHeaderIcon]"];function o(r,l){r&1&&(ft(),Re(0,"svg",3),at(1,"path",4),Ie())}function a(r,l){r&1&&(Re(0,"div",2),U(1,1,null,o,2,0),Ie())}return k({type:i,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(l,d){l&1&&S("click",function(){return d._toggleOnInteraction()})("keydown",function(c){return d._handleKeydown(c)})("mouseleave",function(){return d._recentlyCleared.set(null)}),l&2&&($("aria-sort",d._getAriaSortAttribute()),A("mat-sort-header-disabled",d._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",w],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",w]},exportAs:["matSortHeader"],ngContentSelectors:t,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(l,d){l&1&&(fe(e),Re(0,"div",0)(1,"div",1),U(2),Ie(),E(3,a,3,0,"div",2),Ie()),l&2&&(A("mat-sort-header-sorted",d._isSorted())("mat-sort-header-position-before",d.arrowPosition==="before")("mat-sort-header-descending",d._sort.direction==="desc")("mat-sort-header-ascending",d._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",d._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",d._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",d._animationsDisabled),$("tabindex",d._isDisabled()?null:0)("role",d._isDisabled()?null:"button"),p(3),N(d._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})})()}return i})(),sd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[ee]})}return i})();var ld=(()=>{class i extends mr{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275cmp=(function(){let e=[[["caption"]],[["colgroup"],["col"]],"*"],t=["caption","colgroup, col","*"];function o(l,d){l&1&&U(0,2)}function a(l,d){l&1&&(h(0,"thead",0),ze(1,1),g(),h(2,"tbody",2),ze(3,3)(4,4),g(),h(5,"tfoot",0),ze(6,5),g())}function r(l,d){l&1&&ze(0,1)(1,3)(2,4)(3,5)}return k({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(d,m){d&2&&A("mat-table-fixed-layout",m.fixedLayout)},exportAs:["matTable"],features:[Y([{provide:mr,useExisting:i},{provide:nt,useExisting:i},{provide:Di,useValue:null}]),Z],ngContentSelectors:t,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(d,m){d&1&&(fe(e),U(0),U(1,1),E(2,o,1,0),E(3,a,7,0)(4,r,4,0)),d&2&&(p(2),N(m._isServer?2:-1),p(),N(m._isNativeHtmlTable?3:4))},dependencies:[lr,sr,cr,dr],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return i})(),dd=(()=>{class i extends Go{static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matCellDef",""]],features:[Y([{provide:Go,useExisting:i}]),Z]})}return i})(),cd=(()=>{class i extends qo{static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matHeaderCellDef",""]],features:[Y([{provide:qo,useExisting:i}]),Z]})}return i})();var md=(()=>{class i extends Bt{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[Y([{provide:Bt,useExisting:i}]),Z]})}return i})(),ud=(()=>{class i extends nd{static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[Z]})}return i})();var pd=(()=>{class i extends id{static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[Z]})}return i})();var fd=(()=>{class i extends ki{static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",w]},features:[Y([{provide:ki,useExisting:i}]),Z]})}return i})();var hd=(()=>{class i extends $o{static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[Y([{provide:$o,useExisting:i}]),Z]})}return i})(),gd=(()=>{class i extends ar{static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275cmp=k({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[Y([{provide:ar,useExisting:i}]),Z],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ze(0,0)},dependencies:[sn],encapsulation:2,changeDetection:1})}return i})();var bd=(()=>{class i extends rr{static \u0275fac=(()=>{let e;return function(o){return(e||(e=ce(i)))(o||i)}})();static \u0275cmp=k({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[Y([{provide:rr,useExisting:i}]),Z],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ze(0,0)},dependencies:[sn],encapsulation:2,changeDetection:1})}return i})(),_d=(()=>{class i extends Ko{_cellSelector="td, mat-cell, [mat-cell], .mat-cell";constructor(){super(),this._contentClassNames.push("mat-mdc-no-data-row","mat-mdc-row","mdc-data-table__row"),this._cellClassNames.push("mat-mdc-cell","mdc-data-table__cell","mat-no-data-cell")}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["ng-template","matNoDataRow",""]],features:[Y([{provide:Ko,useExisting:i}]),Z]})}return i})();var vd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[od,ee]})}return i})(),Lm=9007199254740991,Yo=class extends bi{_data;_renderData=new kt([]);_filter=new kt("");_internalPageChanges=new M;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(n,e)=>{let t=n[e];if(so(t)){let o=Number(t);return o<Lm?o:t}return t};sortData=(n,e)=>{let t=e.active,o=e.direction;return!t||o==""?n:n.sort((a,r)=>{let l=this.sortingDataAccessor(a,t),d=this.sortingDataAccessor(r,t),m=typeof l,c=typeof d;m!==c&&(m==="number"&&(l+=""),c==="number"&&(d+=""));let u=0;return l!=null&&d!=null?l>d?u=1:l<d&&(u=-1):l!=null?u=1:d!=null&&(u=-1),u*(o=="asc"?1:-1)})};filterPredicate=(n,e)=>{let t=e.trim().toLowerCase();return Object.values(n).some(o=>`${o}`.toLowerCase().includes(t))};constructor(n=[]){super(),this._data=new kt(n),this._updateChangeSubscription()}_updateChangeSubscription(){let n=this._sort?Fe(this._sort.sortChange,this._sort.initialized):he(null),e=this._paginator?Fe(this._paginator.page,this._internalPageChanges,this._paginator.initialized):he(null),t=this._data,o=it([t,this._filter]).pipe(le(([l])=>this._filterData(l))),a=it([o,n]).pipe(le(([l])=>this._orderData(l))),r=it([a,e]).pipe(le(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(l=>this._renderData.next(l))}_filterData(n){return this.filteredData=this.filter==null||this.filter===""?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;let e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,o=Math.min(e.pageIndex,t);o!==e.pageIndex&&(e.pageIndex=o,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var Bm=()=>[10,20,50];function Hm(i,n){if(i&1){let e=ye();h(0,"button",22),S("click",function(){ne(e);let o=x();return ie(o.clearFilter())}),h(1,"mat-icon"),P(2,"close"),g()()}}function jm(i,n){i&1&&(h(0,"th",23),P(1,"No"),g())}function Um(i,n){if(i&1&&(h(0,"td",24),P(1),g()),i&2){let e=n.index,t=x();p(),Je(" ",t.matDataSource.paginator?t.matDataSource.paginator.pageIndex*t.matDataSource.paginator.pageSize+e+1:e+1," ")}}function Wm(i,n){i&1&&(h(0,"th",25),P(1,"\u30BF\u30A4\u30C8\u30EB"),g())}function Gm(i,n){if(i&1&&(h(0,"td",26)(1,"div",27),P(2),g()()),i&2){let e=n.$implicit;R("title",e.title),p(2),Je(" ",e.title||"(\u7121\u984C)"," ")}}function qm(i,n){i&1&&(h(0,"th",28),P(1," \u66F4\u65B0\u65E5 "),g())}function $m(i,n){if(i&1&&(h(0,"div"),P(1),sa(2,"date"),g(),h(3,"div"),P(4),sa(5,"date"),g()),i&2){let e=x().$implicit;p(),be(la(2,2,e.updatedAt,"yyyy/MM/dd")),p(3),be(la(5,5,e.updatedAt,"HH:mm"))}}function Km(i,n){i&1&&P(0," - ")}function Ym(i,n){if(i&1&&(h(0,"td",29),E(1,$m,6,8)(2,Km,1,0),g()),i&2){let e=n.$implicit;p(),N(e.updatedAt?1:2)}}function Xm(i,n){i&1&&(h(0,"th",30),P(1,"\u64CD\u4F5C"),g())}function Zm(i,n){if(i&1){let e=ye();h(0,"td",31)(1,"button",32),S("click",function(o){let a=ne(e).$implicit,r=x();return o.stopPropagation(),ie(r.delete.emit(a._id))}),h(2,"mat-icon"),P(3,"delete"),g()()()}}function Qm(i,n){i&1&&Ce(0,"tr",33)}function Jm(i,n){if(i&1){let e=ye();h(0,"tr",34),S("click",function(){let o=ne(e).$implicit,a=x();return ie(a.editClick.emit(o._id))}),g()}if(i&2){let e=n.$implicit,t=x();A("selected-row",e._id===t.selectedMemoId())("focused-row",e._id===t.selectedMemoId()),$("data-id",e._id)}}function eu(i,n){if(i&1&&(h(0,"tr",35)(1,"td",36),P(2," \u30E1\u30E2\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u65B0\u3057\u3044\u30E1\u30E2\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002 "),g()()),i&2){let e=x();p(),$("colspan",e.displayedColumns.length)}}var Xo=class i{stateService=s(Ft);dataSource=G([]);showFilter=G(!1);showPaginator=G(!1);isVisible=G(!0);editClick=Be();delete=Be();matDataSource=new Yo([]);displayedColumns=["index","title","updatedAt","actions"];filterValue=V("");selectedMemoId=this.stateService.selectedMemoId;isSwipedInForm=this.stateService.isSwipedInForm;sort=We(Hn);paginator=We(Bn);restoreScroll=We(_n);slideDirection=V(null);targetRowSelector=oe(()=>{let n=this.selectedMemoId();return n?`tr[data-id="${n}"]`:null});ensureTargetPageVisible=n=>{let e=this.paginator();if(!e)return;let o=this.getOrderedMemos().findIndex(a=>a._id===n);if(o>=0){let a=Math.floor(o/e.pageSize);e.pageIndex!==a&&(e.pageIndex=a,this.matDataSource._updateChangeSubscription())}};constructor(){de(()=>{this.matDataSource.data=this.dataSource(),this.matDataSource.sort=this.sort()??null,this.matDataSource.paginator=this.paginator()??null,this.syncSortedMemos()})}onSwipeLeft(){let n=this.paginator();n?.hasNextPage()&&(n.nextPage(),this.restoreScroll()?.resetScroll(),this.triggerSlideAnimation("left"))}onSwipeRight(){let n=this.paginator();n?.hasPreviousPage()&&(n.previousPage(),this.restoreScroll()?.resetScroll(),this.triggerSlideAnimation("right"))}triggerSlideAnimation(n){this.slideDirection.set(null),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.slideDirection.set(n)})})}onSortChange(){this.resetPageAndScroll(),this.syncSortedMemos()}applyFilter(n){let e=n.target.value;this.filterValue.set(e),this.matDataSource.filter=e.trim().toLowerCase(),this.resetPageAndScroll(),this.syncSortedMemos()}clearFilter(){this.filterValue.set(""),this.matDataSource.filter="",this.resetPageAndScroll(),this.syncSortedMemos()}syncSortedMemos(){let n=this.matDataSource.filteredData,e=this.matDataSource.sort,t=e?this.matDataSource.sortData(n,e):n;this.stateService.syncDisplayedMemos(t)}resetPageAndScroll(){this.matDataSource.paginator?.firstPage(),this.restoreScroll()?.resetScroll()}getOrderedMemos(){let n=this.matDataSource.filteredData,e=this.matDataSource.sort;return e?this.matDataSource.sortData(n,e):n}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["app-memo-list"]],viewQuery:function(e,t){e&1&&Tt(t.sort,Hn,5)(t.paginator,Bn,5)(t.restoreScroll,_n,5),e&2&&vt(3)},inputs:{dataSource:[1,"dataSource"],showFilter:[1,"showFilter"],showPaginator:[1,"showPaginator"],isVisible:[1,"isVisible"]},outputs:{editClick:"editClick",delete:"delete"},decls:24,vars:19,consts:[[1,"list-header-actions",3,"hidden"],["appearance","outline","subscriptSizing","dynamic",1,"filter-form-field",3,"hidden"],["matInput","","placeholder","\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B...",3,"keyup","value"],["mat-icon-button","","matSuffix","","aria-label","\u30AF\u30EA\u30A2"],["showFirstLastButtons","","aria-label","\u30DA\u30FC\u30B8\u3092\u9078\u629E",1,"header-paginator","paginator-compact",3,"hidden","pageSizeOptions","pageSize"],["libScrollTop","","libSwipe","",1,"table-container","feature-scroll-container","mat-elevation-z1",3,"swipeLeft","swipeRight","libRestoreScroll","libScrollTarget","targetSelector","beforeScroll"],["mat-table","","matSort","",3,"matSortChange","animationend","dataSource"],["matColumnDef","index"],["mat-header-cell","","class","index-header col-compact-index",4,"matHeaderCellDef"],["mat-cell","","class","index-cell col-compact-index",4,"matCellDef"],["matColumnDef","title"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"title",4,"matCellDef"],["matColumnDef","updatedAt"],["mat-header-cell","","mat-sort-header","","class","mat-column-updatedAt col-compact-meta",4,"matHeaderCellDef"],["mat-cell","","class","mat-column-updatedAt col-compact-meta",4,"matCellDef"],["matColumnDef","actions"],["mat-header-cell","","class","action-header col-compact-action",4,"matHeaderCellDef"],["mat-cell","","class","action-cell col-compact-action",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","clickable-row","tabindex","0",3,"selected-row","focused-row","click",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-icon-button","","matSuffix","","aria-label","\u30AF\u30EA\u30A2",3,"click"],["mat-header-cell","",1,"index-header","col-compact-index"],["mat-cell","",1,"index-cell","col-compact-index"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"title"],[1,"text-truncate","col-compact-main"],["mat-header-cell","","mat-sort-header","",1,"mat-column-updatedAt","col-compact-meta"],["mat-cell","",1,"mat-column-updatedAt","col-compact-meta"],["mat-header-cell","",1,"action-header","col-compact-action"],["mat-cell","",1,"action-cell","col-compact-action"],["mat-icon-button","","color","warn","aria-label","\u524A\u9664",3,"click"],["mat-header-row",""],["mat-row","","tabindex","0",1,"clickable-row",3,"click"],[1,"mat-row"],[1,"mat-cell","empty-cell"]],template:function(e,t){e&1&&(h(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),P(3,"\u30E1\u30E2\u3092\u691C\u7D22"),g(),h(4,"input",2),S("keyup",function(a){return t.applyFilter(a)}),g(),E(5,Hm,3,0,"button",3),g(),Ce(6,"mat-paginator",4),g(),h(7,"div",5),S("swipeLeft",function(){return t.onSwipeLeft()})("swipeRight",function(){return t.onSwipeRight()}),h(8,"table",6),S("matSortChange",function(){return t.onSortChange()})("animationend",function(){return t.slideDirection.set(null)}),gt(9,7),Le(10,jm,2,0,"th",8)(11,Um,2,1,"td",9),bt(),gt(12,10),Le(13,Wm,2,0,"th",11)(14,Gm,3,2,"td",12),bt(),gt(15,13),Le(16,qm,2,0,"th",14)(17,Ym,3,1,"td",15),bt(),gt(18,16),Le(19,Xm,2,0,"th",17)(20,Zm,4,0,"td",18),bt(),Le(21,Qm,1,0,"tr",19)(22,Jm,1,5,"tr",20)(23,eu,3,1,"tr",21),g()()),e&2&&(R("hidden",!t.showFilter()&&!t.showPaginator()),p(),R("hidden",!t.showFilter()),p(3),R("value",t.filterValue()),p(),N(t.filterValue()?5:-1),p(),R("hidden",t.showFilter())("pageSizeOptions",Rr(18,Bm))("pageSize",10),p(),R("libRestoreScroll",t.isVisible()&&!t.isSwipedInForm()?t.selectedMemoId():null)("libScrollTarget",t.isVisible()&&t.isSwipedInForm()?t.selectedMemoId():null)("targetSelector",t.targetRowSelector())("beforeScroll",t.ensureTargetPageVisible),p(),A("slide-in-left",t.slideDirection()==="left")("slide-in-right",t.slideDirection()==="right"),R("dataSource",t.matDataSource),p(13),R("matHeaderRowDef",t.displayedColumns),p(),R("matRowDefColumns",t.displayedColumns))},dependencies:[Vr,Mn,vd,ld,cd,fd,md,dd,hd,ud,pd,gd,bd,_d,zt,rn,zn,Ln,sd,Hn,rd,Zl,Bn,et,ct,wt,di,An,On,lt,_n,Gi,vn,Pr],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.list-header-actions[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;min-height:56px;margin-bottom:.75rem;width:100%;overflow-x:hidden}.list-header-actions[hidden][_ngcontent-%COMP%], .list-header-actions[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%]{display:none!important}.list-header-actions[_ngcontent-%COMP%]   .filter-form-field[_ngcontent-%COMP%]{flex:1 1 auto;width:100%;max-width:400px}.list-header-actions[_ngcontent-%COMP%]   .header-paginator[_ngcontent-%COMP%]{margin-left:auto}.table-container[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-surface, #fff);border-radius:8px;--%NS%lib-scroll-top-size: 36px;--%NS%lib-scroll-top-icon-size: 20px;--%NS%lib-scroll-top-opacity: .7;--%NS%lib-scroll-top-hover-opacity: 1;--%NS%lib-scroll-top-bottom: 12px;--%NS%lib-scroll-top-right: 2px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;table-layout:fixed;border-collapse:collapse}.table-container[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%]{font-weight:600;background-color:var(--%NS%mat-sys-surface-container, #f0f0f0);position:sticky;top:0;z-index:2;white-space:nowrap}.table-container[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%]{padding:.5rem .75rem}.clickable-row[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s ease,outline .1s ease;position:relative}.clickable-row[_ngcontent-%COMP%]:hover{background-color:var(--%NS%mat-sys-surface-container-high, #f5f5f5)!important}.clickable-row.selected-row[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-secondary-container, #e8def8)!important;color:var(--%NS%mat-sys-on-secondary-container, #1d192b)}.clickable-row.selected-row[_ngcontent-%COMP%]:hover{background-color:color-mix(in srgb,var(--%NS%mat-sys-secondary-container, #e8def8) 92%,var(--%NS%mat-sys-on-secondary-container, #1d192b))!important}.clickable-row[_ngcontent-%COMP%]:focus-visible, .clickable-row.focused-row[_ngcontent-%COMP%]{outline:2px solid var(--%NS%mat-sys-primary, #3f51b5);outline-offset:-2px;z-index:1}.index-header[_ngcontent-%COMP%], .index-cell[_ngcontent-%COMP%]{text-align:center;width:72px;padding-left:.5rem!important;padding-right:.5rem!important;white-space:nowrap}.text-truncate[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden;word-break:break-word;line-height:1.25}.mat-column-updatedAt[_ngcontent-%COMP%]{width:100px;white-space:nowrap}.action-header[_ngcontent-%COMP%], .action-cell[_ngcontent-%COMP%]{text-align:center;width:64px}.empty-cell[_ngcontent-%COMP%]{text-align:center;padding:3rem!important;color:var(--%NS%mat-sys-on-surface-variant, #666);font-style:italic}"]})};var tu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),yd=(()=>{class i{_elementRef=s(C);_platform=s(X);_document=s(Q);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["mat-toolbar-row"]]];return k({type:i,selectors:[["mat-toolbar"]],contentQueries:function(a,r,l){if(a&1&&Qe(l,tu,5),a&2){let d;z(d=B())&&(r._toolbarRows=d)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(a,r){a&2&&($e(r.color?"mat-"+r.color:""),A("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(a,r){a&1&&(fe(e),U(0),U(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return i})();var xd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=I({imports:[ee]})}return i})();var iu=(i,n)=>n.id;function ou(i,n){if(i&1){let e=ye();h(0,"button",4),S("click",function(){let o=ne(e).$implicit,a=x();return ie(a.buttonClick.emit(o.id))}),h(1,"mat-icon"),P(2),g()()}if(i&2){let e=n.$implicit;R("disabled",e.disabled)("matTooltip",e.tooltip??""),p(2),be(e.icon)}}var Zo=class i{title=G("");buttons=G([]);buttonClick=Be();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["app-common-toolbar"]],inputs:{title:[1,"title"],buttons:[1,"buttons"]},outputs:{buttonClick:"buttonClick"},decls:6,vars:1,consts:[[1,"common-toolbar"],[1,"toolbar-title"],[1,"toolbar-actions"],["mat-icon-button","",3,"disabled","matTooltip"],["mat-icon-button","",3,"click","disabled","matTooltip"]],template:function(e,t){e&1&&(h(0,"mat-toolbar",0)(1,"span",1),P(2),g(),h(3,"div",2),Ht(4,ou,3,3,"button",3,iu),g()()),e&2&&(p(2),be(t.title()),p(2),jt(t.buttons()))},dependencies:[xd,yd,zt,rn,zn,Ln,jo,Mi],styles:[".common-toolbar[_ngcontent-%COMP%]{--%NS%mat-toolbar-container-background-color: var(--%NS%mat-sys-secondary-container);--%NS%mat-toolbar-container-text-color: var(--%NS%mat-sys-on-secondary-container);border-bottom:1px solid var(--%NS%mat-sys-outline-variant);display:flex;align-items:center;justify-content:space-between;gap:.5rem}.toolbar-actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}"]})};function au(i,n){if(i&1){let e=ye();h(0,"app-memo-form",5),S("browserBack",function(){ne(e);let o=x();return ie(o.handleToolbarClick("back"))}),pn("isInvalidChange",function(o){ne(e);let a=x();return un(a.isFormInvalid,o)||(a.isFormInvalid=o),ie(o)}),S("save",function(o){ne(e);let a=x();return ie(a.saveMemo(o))})("next",function(){ne(e);let o=x();return ie(o.nextMemo())})("prev",function(){ne(e);let o=x();return ie(o.prevMemo())}),g()}if(i&2){let e=x();R("libBrowserBack",e.currentView()==="form")("editData",e.selectedMemo())("isVisible",e.currentView()==="form")("showFilter",e.showFormFilter()),mn("isInvalid",e.isFormInvalid),R("submitTrigger",e.triggerSave())}}var wd=class i{stateService=s(Ft);memoDataSource=this.stateService.memoDataSource;isLoading=this.stateService.isLoading;currentView=this.stateService.currentView;selectedMemo=this.stateService.selectedMemo;selectedMemoId=this.stateService.selectedMemoId;showFilter=this.stateService.showFilter;showPaginator=this.stateService.showPaginator;isFormInvalid=this.stateService.isFormInvalid;triggerSave=this.stateService.triggerSave;showFormFilter=this.stateService.showFormFilter;toolbarTitle=this.stateService.toolbarTitle;toolbarButtons=oe(()=>{let n=this.isLoading();return this.currentView()==="form"?[{id:"back",icon:"arrow_back",tooltip:"\u623B\u308B"},{id:"save",icon:"save",tooltip:"\u4FDD\u5B58",disabled:n||this.isFormInvalid()},{id:"toggle-form-filter",icon:this.showFormFilter()?"filter_list_off":"filter_list",tooltip:"\u30D5\u30A3\u30EB\u30BF\u30FC\u5207\u66FF"}]:[{id:"add",icon:"add",tooltip:"\u65B0\u898F\u4F5C\u6210",disabled:n},{id:"toggle-filter",icon:this.showFilter()?"filter_list_off":"filter_list",tooltip:"\u30D5\u30A3\u30EB\u30BF\u30FC\u5207\u66FF"},{id:"toggle-paginator",icon:this.showPaginator()?"layers_clear":"pages",tooltip:"\u30DA\u30FC\u30B8\u30CD\u30FC\u30BF\u30FC\u5207\u66FF"}]});handleToolbarClick(n){switch(n){case"back":this.stateService.backToList();break;case"save":this.stateService.triggerSave.set(!0);break;case"add":this.stateService.openFormForCreate();break;case"toggle-filter":this.stateService.toggleFilter();break;case"toggle-paginator":this.stateService.togglePaginator();break;case"toggle-form-filter":this.stateService.toggleFormFilter();break}}openFormForEdit(n){this.stateService.openFormForEditById(n)}saveMemo(n){this.stateService.saveMemo(n)}deleteMemo(n){confirm("\u3053\u306E\u30E1\u30E2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&this.stateService.deleteMemo(n)}nextMemo(){this.stateService.selectNextMemo()}prevMemo(){this.stateService.selectPrevMemo()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["app-memo-base"]],features:[Y([gn,Ft,{provide:pa,useExisting:Ft}])],decls:5,vars:8,consts:[[1,"memo-container","feature-base-container","page-container-compact"],[3,"buttonClick","title","buttons"],[3,"libBrowserBack","editData","isVisible","showFilter","isInvalid","submitTrigger"],[3,"hidden"],[3,"editClick","delete","dataSource","showFilter","showPaginator","isVisible"],[3,"browserBack","isInvalidChange","save","next","prev","libBrowserBack","editData","isVisible","showFilter","isInvalid","submitTrigger"]],template:function(e,t){e&1&&(h(0,"div",0)(1,"app-common-toolbar",1),S("buttonClick",function(a){return t.handleToolbarClick(a)}),g(),E(2,au,1,6,"app-memo-form",2),h(3,"div",3)(4,"app-memo-list",4),S("editClick",function(a){return t.openFormForEdit(a)})("delete",function(a){return t.deleteMemo(a)}),g()()()),e&2&&(p(),R("title",t.toolbarTitle())("buttons",t.toolbarButtons()),p(),N(t.currentView()==="form"?2:-1),p(),R("hidden",t.currentView()!=="list"),p(),R("dataSource",t.memoDataSource())("showFilter",t.showFilter())("showPaginator",t.showPaginator())("isVisible",t.currentView()==="list"))},dependencies:[Ho,Xo,Zo,Wi],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}"]})};export{wd as MemoBase};
