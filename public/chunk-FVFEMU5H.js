import{$ as s,A as Hn,Aa as ve,Ab as je,B as kt,Ba as de,Bb as L,Ca as V,Cb as z,D as Oi,Da as S,Db as kr,E as Et,Ea as ia,Eb as At,F as hr,Fa as xr,Fb as bt,G as Jo,Ga as Ee,Gb as at,H as jn,Ha as f,Hb as T,Ia as Ge,Ib as qe,Ja as He,Jb as P,K as ea,Ka as ue,Kb as be,L as gr,La as ln,Lb as Qe,M as ta,Ma as dn,Mb as mn,N as Ii,Na as ce,Nb as un,O as it,Oa as Ve,Ob as pn,P as Nt,Pa as oa,Pb as K,Q as te,Qa as wr,Qb as Er,R as br,Rb as aa,S as Pe,Sb as ra,T as mt,Ta as D,Tb as Nr,Ua as I,V as Ye,Va as _,Vb as re,W as Rt,Wa as Cr,Wb as se,X as O,Xa as X,Xb as fn,Ya as Le,Yb as sa,Z as y,Za as Sr,Zb as Rr,_ as Un,_b as hn,a as A,ab as cn,ac as _t,b as ke,ba as Ot,bb as Mr,bc as Q,cb as q,cc as Vi,d as we,da as It,db as k,dc as Ue,ea as ne,eb as E,ec as Or,f as ct,fa as ie,fb as Wn,fc as Li,g as cr,ga as ut,gb as Ht,gc as ge,h as C,ha as _r,hb as jt,i as Dt,ia as vr,ib as R,ic as w,j as Ei,ja as J,jb as h,jc as rt,k as Xo,ka as Z,kb as g,kc as la,l as Zo,la as pt,lb as Ce,lc as zi,m as mr,mb as Re,mc as da,n as ur,na as $,nb as Oe,nc as Ir,o as fe,oa as W,ob as ot,oc as Ar,p as pr,pa as Ai,pb as ft,pc as Tr,q as Qo,qb as ht,qc as Fr,rb as ze,rc as Gn,s as le,sa as H,sb as ye,t as nt,ta as Ti,tb as gt,tc as Pr,ua as Fi,ub as M,uc as Bi,v as fr,va as Pi,vb as Dr,w as Ni,wa as na,wb as x,wc as Hi,x as Ri,xa as he,xb as pe,y as Fe,ya as Xe,yb as U,z as Ne,za as yr,zb as Ze}from"./chunk-JWC6J42V.js";function ca(i){return sa(ke(A({},i),{loader:void 0,stream:n=>{let e,t=!1,o=H({value:void 0}),{resolve:a,promise:r}=vr(),l=!1;function d(){l||(l=!0,a(o))}let m=()=>{t=!0,e?.unsubscribe(),n.abortSignal.removeEventListener("abort",m),d()};n.abortSignal.addEventListener("abort",m);function c(v){o.set(v),d()}let u=i.stream;if(u===void 0)throw new mt(990,!1);return e=u(n).subscribe({next:v=>c({value:v}),error:v=>{c({error:Rr(v)}),n.abortSignal.removeEventListener("abort",m)},complete:()=>{l||c({error:new mt(-991,!1)}),n.abortSignal.removeEventListener("abort",m)}}),t&&e.unsubscribe(),l?o:r}}))}var ji=class i{http=s(Bi);httpOptions={headers:new Pr({"Content-Type":"application/json"})};handleError(n="operation",e){return t=>(console.error(`[MongoGenericService Error] ${n} failed on ${this.host}:`,t),fe(e))}log(n){console.log(`[MongoGenericService] ${n}`)}listResource=ca({defaultValue:[],stream:()=>this.http.get(this.host,this.httpOptions).pipe(Pe(()=>this.log(`Fetch all resources from ${this.host}`)),kt(this.handleError("getAll",[])))});getByIdResource(n){return ca({params:n,stream:({params:e})=>e?this.http.get(`${this.host}/${e}`,this.httpOptions).pipe(Pe(()=>this.log(`Fetched resource by _id=${e} from ${this.host}`)),kt(this.handleError(`getById _id=${e}`,void 0))):fe(void 0)})}create(n){let e=Array.isArray(n)?n:[n];return this.http.post(this.host,e,this.httpOptions).pipe(Pe(t=>{this.log(`Created document with _id=${t} in ${this.host}`),this.listResource.reload()}),kt(this.handleError("create","")))}update(n,e){return this.http.patch(`${this.host}/${n}`,e,this.httpOptions).pipe(Pe(t=>{this.log(`Updated document _id=${t} in ${this.host}`),this.listResource.reload()}),kt(this.handleError("update","")))}delete(n){return this.http.delete(`${this.host}/${n}`,this.httpOptions).pipe(Pe(e=>{this.log(`Deleted document _id=${e} from ${this.host}`),this.listResource.reload()}),kt(this.handleError("delete","")))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Rt({token:i,factory:i.\u0275fac})};var gn=class i extends ji{host="/api/v1/memo";sanitizePayload(n){let e=A({},n);return delete e._id,delete e.createdAt,delete e.updatedAt,delete e.accessCount,delete e.updateCount,e}create(n){let e=Array.isArray(n)?n.map(t=>this.sanitizePayload(t)):this.sanitizePayload(n);return super.create(e)}update(n,e){let t=this.sanitizePayload(e);return super.update(n,t)}static \u0275fac=(()=>{let n;return function(t){return(n||(n=de(i)))(t||i)}})();static \u0275prov=Rt({token:i,factory:i.\u0275fac})};var Tt=class i{memoService=s(gn);memosResource=this.memoService.listResource;memoDataSource=re(()=>this.memosResource.value()??[]);isMutating=H(!1);isLoading=re(()=>this.memosResource.isLoading()||this.isMutating());currentFilterText=H("");currentView=H("list");selectedMemo=H(null);showFilter=H(!1);showPaginator=H(!1);selectedMemoId=H(null);showFormFilter=H(!1);isFormInvalid=H(!0);triggerSave=H(!1);scrollMap=new Map;toolbarTitle=re(()=>this.currentView()==="form"?this.selectedMemo()?"\u30E1\u30E2\u3092\u7DE8\u96C6":"\u65B0\u3057\u3044\u30E1\u30E2":"\u30E1\u30E2\u7BA1\u7406");backToList(){this.selectedMemo.set(null),this.currentView.set("list"),this.triggerSave.set(!1)}openFormForCreate(){this.selectedMemo.set(null),this.selectedMemoId.set(null),this.setScrollTop(bn,0),this.currentView.set("form")}openFormForEdit(n){this.selectedMemo.set(n),this.selectedMemoId.set(n._id??null),this.currentView.set("form")}openFormForEditById(n){let e=this.memoDataSource().find(t=>t._id===n);if(e){let t=this.getScrollTop(bn);this.setScrollTop(n,t),this.openFormForEdit(e)}}toggleFilter(){this.showFilter.update(n=>{let e=!n;return e&&this.showPaginator.set(!1),e})}togglePaginator(){this.showPaginator.update(n=>{let e=!n;return e&&this.showFilter.set(!1),e})}toggleFormFilter(){this.showFormFilter.update(n=>!n)}getScrollTop(n){return this.scrollMap.get(n)??0}setScrollTop(n,e){this.scrollMap.set(n,e)}saveMemo(n){if(this.isLoading())return;let e=this.selectedMemo();this.triggerSave.set(!1),this.isMutating.set(!0),(e?._id?this.memoService.update(e._id,A(A({},e),n)):this.memoService.create(n)).pipe(jn(()=>this.isMutating.set(!1))).subscribe({next:o=>{o&&(e?._id||this.selectedMemoId.set(o),this.backToList())}})}deleteMemo(n){this.isLoading()||(this.isMutating.set(!0),this.memoService.delete(n).pipe(jn(()=>this.isMutating.set(!1))).subscribe({next:e=>{e&&(this.selectedMemoId()===n&&this.selectedMemoId.set(null),this.scrollMap.delete(n))}}))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Rt({token:i,factory:i.\u0275fac})};var ma=new y("ScrollStateToken"),bn="__latest__",_n=class i{el=s(S);state=s(ma);scrollTop=s(Ft,{optional:!0,self:!0});libRestoreScroll=Q.required();lastActiveKey=null;constructor(){he(n=>{let e=this.libRestoreScroll(),t=this.el.nativeElement,o,a;if(e&&e!==this.lastActiveKey){let r=this.state.getScrollTop(e);this.state.setScrollTop(bn,r),o=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{t&&this.libRestoreScroll()===e&&(t.scrollTop=r,this.scrollTop?.syncVisibility())})})}else!e&&this.lastActiveKey&&(t.scrollTop=0,this.scrollTop?.syncVisibility());this.lastActiveKey=e,n(()=>{o!==void 0&&cancelAnimationFrame(o),a!==void 0&&cancelAnimationFrame(a)})})}onScroll(n){let e=n.target;if(!e||typeof e.checkVisibility=="function"&&!e.checkVisibility())return;let t=e.scrollTop,o=this.libRestoreScroll();this.state.setScrollTop(bn,t),o&&this.state.setScrollTop(o,t)}resetScroll(){let n=this.el.nativeElement;n&&(n.scrollTop=0,this.scrollTop?.syncVisibility());let e=this.libRestoreScroll();this.state.setScrollTop(bn,0),e&&this.state.setScrollTop(e,0)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","libRestoreScroll",""]],hostBindings:function(e,t){e&1&&M("scroll",function(a){return t.onScroll(a)})},inputs:{libRestoreScroll:[1,"libRestoreScroll"]}})};var Ft=class i{el=s(S);renderer=s(ue);destroyRef=s(pt);libScrollTop=Q(56,{transform:n=>n===""||n===null||n===void 0?56:Number(n)});buttonEl=null;isVisible=!1;constructor(){Ee({read:()=>this.syncVisibility()})}ngOnInit(){let n=this.el.nativeElement,e=this.renderer.createElement("button");this.renderer.setAttribute(e,"type","button"),this.renderer.setAttribute(e,"aria-label","\u5148\u982D\u3078\u623B\u308B"),this.renderer.setAttribute(e,"title","\u5148\u982D\u3078\u623B\u308B"),this.renderer.addClass(e,"lib-scroll-top-btn");let t=this.renderer.createElement("span");this.renderer.addClass(t,"material-icons"),this.renderer.setProperty(t,"textContent","arrow_upward"),this.renderer.appendChild(e,t),this.renderer.appendChild(n,e),this.buttonEl=e;let o=this.renderer.listen(e,"click",a=>{a.stopPropagation(),n.scrollTo({top:0,behavior:"smooth"})});this.destroyRef.onDestroy(()=>{o(),this.buttonEl&&n.contains(this.buttonEl)&&this.renderer.removeChild(n,this.buttonEl),this.buttonEl=null}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.onScroll()})})}syncVisibility(){this.onScroll()}onScroll(){if(!this.buttonEl)return;if(typeof this.el.nativeElement.checkVisibility=="function"&&!this.el.nativeElement.checkVisibility()){this.isVisible&&(this.isVisible=!1,this.renderer.removeClass(this.buttonEl,"is-visible"));return}let n=this.el.nativeElement.scrollTop>this.libScrollTop();this.isVisible!==n&&(this.isVisible=n,this.isVisible?this.renderer.addClass(this.buttonEl,"is-visible"):this.renderer.removeClass(this.buttonEl,"is-visible"))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","libScrollTop",""]],hostBindings:function(e,t){e&1&&M("scroll",function(){return t.onScroll()})},inputs:{libScrollTop:[1,"libScrollTop"]}})};var Ui=class i{destroyRef=s(pt);platformId=s(Fi);isActive=Q(!0,{alias:"libBrowserBack"});browserBack=_t();trapId=`trap_${Date.now()}_${Math.random().toString(36).slice(2)}`;hasPushedState=!1;isCleaningUp=!1;constructor(){he(()=>{let n=this.isActive();se(()=>{n?this.pushDummyHistory():this.cleanupDummyHistory()})}),this.destroyRef.onDestroy(()=>{this.cleanupDummyHistory()})}pushDummyHistory(){if(!Gn(this.platformId)||this.hasPushedState)return;let n=ke(A({},history.state??{}),{libBrowserBackTrapId:this.trapId});history.pushState(n,"",window.location.href),this.hasPushedState=!0,this.isCleaningUp=!1}cleanupDummyHistory(){!Gn(this.platformId)||!this.hasPushedState||(this.hasPushedState=!1,history.state?.libBrowserBackTrapId===this.trapId&&(this.isCleaningUp=!0,history.back()))}onPopState(n){if(this.isCleaningUp){this.isCleaningUp=!1;return}n.state?.libBrowserBackTrapId!==this.trapId&&this.hasPushedState&&(this.hasPushedState=!1,this.browserBack.emit())}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","libBrowserBack",""]],hostBindings:function(e,t){e&1&&M("popstate",function(a){return t.onPopState(a)},xr)},inputs:{isActive:[1,"libBrowserBack","isActive"]},outputs:{browserBack:"browserBack"}})};var Gr=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(ce(ue),ce(S))};static \u0275dir=_({type:i})}return i})(),Ed=(()=>{class i extends Gr{static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,features:[X]})}return i})(),to=new y("");var Nd={provide:to,useExisting:Ye(()=>wn),multi:!0};function Rd(){let i=da()?da().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Od=new y(""),wn=(()=>{class i extends Gr{_compositionMode;_composing=!1;constructor(e,t,o){super(e,t),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Rd())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(ce(ue),ce(S),ce(Od,8))};static \u0275dir=_({type:i,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,o){t&1&&M("input",function(r){return o._handleInput(r.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(r){return o._compositionEnd(r.target.value)})},standalone:!1,features:[K([Nd]),X]})}return i})();function fa(i){return i==null||ha(i)===0}function ha(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Zn=new y(""),ga=new y(""),Id=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ut=class{static min(n){return Ad(n)}static max(n){return Td(n)}static required(n){return qr(n)}static requiredTrue(n){return Fd(n)}static email(n){return Pd(n)}static minLength(n){return Vd(n)}static maxLength(n){return $r(n)}static pattern(n){return Ld(n)}static nullValidator(n){return Gi()}static compose(n){return Jr(n)}static composeAsync(n){return es(n)}};function Ad(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function Td(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function qr(i){return fa(i.value)?{required:!0}:null}function Fd(i){return i.value===!0?null:{required:!0}}function Pd(i){return fa(i.value)||Id.test(i.value)?null:{email:!0}}function Vd(i){return n=>{let e=n.value?.length??ha(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function $r(i){return n=>{let e=n.value?.length??ha(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function Ld(i){if(!i)return Gi;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(fa(t.value))return null;let o=t.value;return n.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function Gi(i){return null}function Kr(i){return i!=null}function Yr(i){return oa(i)?ur(i):i}function Xr(i){let n={};return i.forEach(e=>{n=e!=null?A(A({},n),e):n}),Object.keys(n).length===0?null:n}function Zr(i,n){return n.map(e=>e(i))}function zd(i){return!i.validate}function Qr(i){return i.map(n=>zd(n)?n:e=>n.validate(e))}function Jr(i){if(!i)return null;let n=i.filter(Kr);return n.length==0?null:function(e){return Xr(Zr(e,n))}}function ba(i){return i!=null?Jr(Qr(i)):null}function es(i){if(!i)return null;let n=i.filter(Kr);return n.length==0?null:function(e){let t=Zr(e,n).map(Yr);return Ri(t).pipe(le(Xr))}}function _a(i){return i!=null?es(Qr(i)):null}function Vr(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function ts(i){return i._rawValidators}function ns(i){return i._rawAsyncValidators}function ua(i){return i?Array.isArray(i)?i:[i]:[]}function qi(i,n){return Array.isArray(i)?i.includes(n):i===n}function Lr(i,n){let e=ua(n);return ua(i).forEach(o=>{qi(e,o)||e.push(o)}),e}function zr(i,n){return ua(n).filter(e=>!qi(i,e))}var $i=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ba(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=_a(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Pt=class extends $i{name;get formDirective(){return null}get path(){return null}};var qn="VALID",Wi="INVALID",vn="PENDING",$n="DISABLED",Vt=class{},Ki=class extends Vt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Yn=class extends Vt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Xn=class extends Vt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},yn=class extends Vt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Yi=class extends Vt{source;constructor(n){super(),this.source=n}},xn=class extends Vt{source;constructor(n){super(),this.source=n}};function is(i){return(no(i)?i.validators:i)||null}function Bd(i){return Array.isArray(i)?ba(i):i||null}function os(i,n){return(no(n)?n.asyncValidators:i)||null}function Hd(i){return Array.isArray(i)?_a(i):i||null}function no(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function jd(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new mt(1e3,"");if(!as(t,e))throw new mt(1001,"")}function Ud(i,n,e){i._forEachChild((t,o)=>{if(e[o]===void 0)throw new mt(-1002,"")})}var Xi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=H(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return se(this.statusReactive)}set status(n){se(()=>this.statusReactive.set(n))}_status=re(()=>this.statusReactive());statusReactive=H(void 0);get valid(){return this.status===qn}get invalid(){return this.status===Wi}get pending(){return this.status===vn}get disabled(){return this.status===$n}get enabled(){return this.status!==$n}errors;get pristine(){return se(this.pristineReactive)}set pristine(n){se(()=>this.pristineReactive.set(n))}_pristine=re(()=>this.pristineReactive());pristineReactive=H(!0);get dirty(){return!this.pristine}get touched(){return se(this.touchedReactive)}set touched(n){se(()=>this.touchedReactive.set(n))}_touched=re(()=>this.touchedReactive());touchedReactive=H(!1);get untouched(){return!this.touched}_events=new C;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Lr(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Lr(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(zr(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(zr(n,this._rawAsyncValidators))}hasValidator(n){return qi(this._rawValidators,n)}hasAsyncValidator(n){return qi(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(ke(A({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Xn(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Xn(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(ke(A({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Yn(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Yn(!0,t))}markAsPending(n={}){this.status=vn;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new yn(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(ke(A({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=$n,this.errors=null,this._forEachChild(o=>{o.disable(ke(A({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ki(this.value,t)),this._events.next(new yn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ke(A({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=qn,this._forEachChild(t=>{t.enable(ke(A({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ke(A({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===qn||this.status===vn)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ki(this.value,e)),this._events.next(new yn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(ke(A({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?$n:qn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=vn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=Yr(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,o)=>t&&t._find(o),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new yn(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new $,this.statusChanges=new $}_calculateStatus(){return this._allControlsDisabled()?$n:this.errors?Wi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(vn)?vn:this._anyControlsHaveStatus(Wi)?Wi:qn}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),o=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),o&&this._events.next(new Yn(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Xn(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){no(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Bd(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Hd(this._rawAsyncValidators)}_updateHasRequiredValidator(){se(()=>this._hasRequired.set(this.hasValidator(Ut.required)))}};function as(i,n){return Object.hasOwn(i,n)}function Wd(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function Gd(i,n,e,t){switch(e){case"name":i.setAttribute(n,e,t);break;case"disabled":case"readonly":case"required":t?i.setAttribute(n,e,""):i.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?i.setAttribute(n,e,t.toString()):i.removeAttribute(n,e);break}}var pa=class{kind;context;control;message;constructor({kind:n,context:e,control:t}){this.kind=n,this.context=e,this.control=t}};function qd(i){return typeof i=="number"?i:parseInt(i,10)}var rs=(()=>{class i{_validator=Gi;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Gi,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,features:[ve]})}return i})();var $d={provide:Zn,useExisting:Ye(()=>Cn),multi:!0};var Cn=(()=>{class i extends rs{required;inputName="required";normalizeInput=w;createValidator=e=>qr;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,o){t&2&&q("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[K([$d]),X]})}return i})();var Kd={provide:Zn,useExisting:Ye(()=>va),multi:!0},va=(()=>{class i extends rs{maxlength;inputName="maxlength";normalizeInput=e=>qd(e);createValidator=e=>$r(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,o){t&2&&q("maxlength",o._enabled?o.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[K([Kd]),X]})}return i})();var Yd=new y(""),io=new y("",{factory:()=>ya}),ya="always";function Xd(i,n){return[...n.path,i]}function Br(i,n,e=ya){xa(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),Qd(i,n),ec(i,n),Jd(i,n),Zd(i,n)}function Hr(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),Qi(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Zi(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Zd(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function xa(i,n){let e=ts(i);n.validator!==null?i.setValidators(Vr(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=ns(i);n.asyncValidator!==null?i.setAsyncValidators(Vr(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let o=()=>i.updateValueAndValidity();Zi(n._rawValidators,o),Zi(n._rawAsyncValidators,o)}function Qi(i,n){let e=!1;if(i!==null){if(n.validator!==null){let o=ts(i);if(Array.isArray(o)&&o.length>0){let a=o.filter(r=>r!==n.validator);a.length!==o.length&&(e=!0,i.setValidators(a))}}if(n.asyncValidator!==null){let o=ns(i);if(Array.isArray(o)&&o.length>0){let a=o.filter(r=>r!==n.asyncValidator);a.length!==o.length&&(e=!0,i.setAsyncValidators(a))}}}let t=()=>{};return Zi(n._rawValidators,t),Zi(n._rawAsyncValidators,t),e}function Qd(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ss(i,n)})}function Jd(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ss(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function ss(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ec(i,n){let e=(t,o)=>{n.valueAccessor.writeValue(t),o&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function ls(i,n){i==null,xa(i,n)}function tc(i,n){return Qi(i,n)}function nc(i,n){if(!Object.hasOwn(i,"model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function ic(i){return Object.getPrototypeOf(i.constructor)===Ed}function ds(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function oc(i,n){if(!n)return null;Array.isArray(n);let e,t,o;return n.forEach(a=>{a.constructor===wn?e=a:ic(a)?t=a:o=a}),o||t||e||null}function ac(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var rc={provide:Yd,useFactory:()=>{let i=s(st,{self:!0});return{setParseErrors:n=>{i.setParseErrorSource(n)},set onReset(n){i.onReset=n}}}},st=class extends $i{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof xn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=oc(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,t){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(pt)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(ge);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new we,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof xn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(o=>{this.control?.markAsDirty(),this.control?.setValue(o,{emitModelToViewChange:!1}),this.viewToModelUpdate(o)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Wd(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof Cn))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let t=this.control,o=this.customControlBindings;Object.is(o.value,t.value)||(o.value=t.value,n.setCustomControlModelInput(t.value)),this.bindControlProperty(n,o,"touched",t.touched),this.bindControlProperty(n,o,"dirty",t.dirty),this.bindControlProperty(n,o,"valid",t.valid),this.bindControlProperty(n,o,"invalid",t.invalid),this.bindControlProperty(n,o,"pending",t.pending),this.bindControlProperty(n,o,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(n,o,"required",this.isRequired);let a=t.errors;if(o.errors!==a){o.errors=a;let r=this._convertErrors(a);n.setInputOnDirectives("errors",r)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,t,o){if(e[t]===o)return;e[t]=o;let a=n.setInputOnDirectives(t,o);this.isNativeFormElement&&!a&&(t==="disabled"||t==="required")&&this.renderer&&Gd(this.renderer,n.nativeElement,t,o)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([t,o])=>new pa({context:o,kind:t,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,t=re(()=>{let o=n();return o.length===0?null:o.reduce((a,r)=>(a[r.kind]=r,a),{})});this.parseErrorsValidator=(()=>e).bind(this),he(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},Ji=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var oo=(()=>{class i extends Ji{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(ce(st,2))};static \u0275dir=_({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,o){t&2&&T("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[X]})}return i})(),cs=(()=>{class i extends Ji{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(ce(Pt,10))};static \u0275dir=_({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,o){t&2&&T("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[X]})}return i})(),eo=class extends Xi{constructor(n,e,t){super(is(e),os(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let t=this._find(n);return t||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let t=this._find(n);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){let o=this._find(n);o&&o._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){se(()=>{Ud(this,!0,n),Object.keys(n).forEach(t=>{jd(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let o=this._find(t);o&&o.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,o)=>{t.reset(n?n[o]:null,ke(A({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new xn(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,o)=>((t.enabled||this.disabled)&&(e[o]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((o,a)=>{t=e(t,o,a)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return as(this.controls,n)?this.controls[n]:null}};var sc={provide:Pt,useExisting:Ye(()=>Wt)},Kn=Promise.resolve(),Wt=(()=>{class i extends Pt{callSetDisabledState;get submitted(){return se(this.submittedReactive)}_submitted=re(()=>this.submittedReactive());submittedReactive=H(!1);_directives=new Set;form;ngSubmit=new $;options;constructor(e,t,o){super(),this.callSetDisabledState=o,this.form=new eo({},ba(e),_a(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Kn.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Kn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Kn.then(()=>{let t=this._findContainer(e.path),o=new eo({});ls(o,e),t.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Kn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Kn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ds(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Yi(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(ce(Zn,10),ce(ga,10),ce(io,8))};static \u0275dir=_({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){t&1&&M("submit",function(r){return o.onSubmit(r)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[K([sc]),X]})}return i})();function jr(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function Ur(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var ms=class extends Xi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(is(e),os(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),no(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ur(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){se(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new xn(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){jr(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){jr(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Ur(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var lc=i=>i instanceof ms;var dc=(()=>{class i extends Pt{callSetDisabledState;get submitted(){return se(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=re(()=>this._submittedReactive());_submittedReactive=H(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new mt(1052,!1);Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Qi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Hr(e.control||null,e,!1),ac(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ds(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Yi(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,o=this.form.get(e.path);t!==o&&(Hr(t||null,e),lc(o)&&e._setupWithForm(o,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);ls(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&tc(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){xa(this.form,this),this._oldForm&&Qi(this._oldForm,this)}static \u0275fac=function(t){return new(t||i)(ce(Zn,10),ce(ga,10),ce(io,8))};static \u0275dir=_({type:i,features:[X,ve]})}return i})(),cc={provide:Pt,useExisting:Ye(()=>Qn)},Qn=(()=>{class i extends dc{form=null;ngSubmit=new $;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,o){t&1&&M("submit",function(r){return o.onSubmit(r)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[K([cc]),X]})}return i})(),mc={provide:st,useExisting:Ye(()=>Jn)},Wr=Promise.resolve(),Jn=(()=>{class i extends st{_changeDetectorRef;callSetDisabledState;control=new ms;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new $;constructor(e,t,o,a,r,l,d,m){super(d,m,a),this._changeDetectorRef=r,this.callSetDisabledState=l,this._parent=e,this._setValidators(t),this._setAsyncValidators(o)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),nc(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Br(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Br(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Wr.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,o=t!==0&&w(t);Wr.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Xd(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(ce(Pt,9),ce(Zn,10),ce(ga,10),ce(to,10),ce(ge,8),ce(io,8),ce(J,8),ce(ue,8))};static \u0275dir=_({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[K([mc,rc]),X,ve,Cr(null)]})}return i})();var us=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var uc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({})}return i})();var Sn=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:io,useValue:e.callSetDisabledState??ya}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[uc]})}return i})();function ei(i){return i.buttons===0||i.detail===0}function ti(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var wa;function fs(){if(wa==null){let i=typeof document<"u"?document.head:null;wa=!!(i&&(i.createShadowRoot||i.attachShadow))}return wa}function Ca(i){if(fs()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Sa(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function Se(i){if(i.composedPath)try{return i.composedPath()[0]}catch(n){}return i.target}var Ma;try{Ma=typeof Intl<"u"&&Intl.v8BreakIterator}catch(i){Ma=!1}var Y=(()=>{class i{_platformId=s(Fi);isBrowser=this._platformId?Gn(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ma)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var ni;function hs(){if(ni==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ni=!0}))}finally{ni=ni||!1}return ni}function Mn(i){return hs()?i:!!i.capture}function Dn(i,n=0){return ao(i)?Number(i):arguments.length===2?n:0}function ao(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function We(i){return i instanceof S?i.nativeElement:i}var gs=new y("cdk-input-modality-detector-options"),bs={ignoreKeys:[18,17,224,91,16]},_s=650,Da={passive:!0,capture:!0},vs=(()=>{class i{_platform=s(Y);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Dt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Se(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<_s||(this._modality.next(ei(e)?"keyboard":"mouse"),this._mostRecentTarget=Se(e))};_onTouchstart=e=>{if(ti(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Se(e)};constructor(){let e=s(W),t=s(Z),o=s(gs,{optional:!0});if(this._options=A(A({},bs),o),this.modalityDetected=this._modality.pipe(Ii(1)),this.modalityChanged=this.modalityDetected.pipe(Jo()),this._platform.isBrowser){let a=s(He).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[a.listen(t,"keydown",this._onKeydown,Da),a.listen(t,"mousedown",this._onMousedown,Da),a.listen(t,"touchstart",this._onTouchstart,Da)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),ii=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(ii||{}),ys=new y("cdk-focus-monitor-default-options"),ro=Mn({passive:!0,capture:!0}),Gt=(()=>{class i{_ngZone=s(W);_platform=s(Y);_inputModalityDetector=s(vs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(Z);_stopInputModalityDetector=new C;constructor(){let e=s(ys,{optional:!0});this._detectionMode=e?.detectionMode||ii.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Se(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=We(e);if(!this._platform.isBrowser||o.nodeType!==1)return fe();let a=Ca(o)||this._document,r=this._elementInfo.get(o);if(r)return t&&(r.checkChildren=!0),r.subject;let l={checkChildren:t,subject:new C,rootNode:a};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=We(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let a=We(e),r=this._document.activeElement;a===r?this._getClosestElementsInfo(a).forEach(([l,d])=>this._originChanged(l,t,d)):(this._setOrigin(t),typeof a.focus=="function"&&a.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ii.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===ii.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?_s:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),a=Se(e);!o||!o.checkChildren&&t!==a||this._originChanged(t,this._getFocusOrigin(a),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,ro),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,ro)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(te(this._stopInputModalityDetector)).subscribe(a=>{this._setOrigin(a,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ro),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ro),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,a)=>{(a===e||o.checkChildren&&a.contains(e))&&t.push([a,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let a=e.labels;if(a){for(let r=0;r<a.length;r++)if(a[r].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var so=new WeakMap,Ie=(()=>{class i{_appRef;_injector=s(J);_environmentInjector=s(Ot);load(e){let t=this._appRef=this._appRef||this._injector.get(cn),o=so.get(t);o||(o={loaders:new Set,refs:[]},so.set(t,o),t.onDestroy(()=>{so.get(t)?.refs.forEach(a=>a.destroy()),so.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(zi(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var oi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return i})(),lo;function pc(){if(lo===void 0&&(lo=null,typeof window<"u")){let i=window;if(i.trustedTypes!==void 0)try{lo=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return lo}function qt(i){return pc()?.createHTML(i)||i}function xs(i,n,e){let t=e.sanitize(It.HTML,n);i.innerHTML=qt(t||"")}function vt(i){return Array.isArray(i)?i:[i]}var ws=new Set,$t,kn=(()=>{class i{_platform=s(Y);_nonce=s(na,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):hc}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&fc(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();function fc(i,n){if(!ws.has(i))try{$t||($t=document.createElement("style"),n&&$t.setAttribute("nonce",n),$t.setAttribute("type","text/css"),document.head.appendChild($t)),$t.sheet&&($t.sheet.insertRule(`@media ${i.replace(/[{}]/g,"")} {body{ }}`,0),ws.add(i))}catch(e){console.error(e)}}function hc(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var ai=(()=>{class i{_mediaMatcher=s(kn);_zone=s(W);_queries=new Map;_destroySubject=new C;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Cs(vt(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=Cs(vt(e)).map(r=>this._registerQuery(r).observable),a=nt(o);return a=fr(a.pipe(Et(1)),a.pipe(Ii(1),Oi(0))),a.pipe(le(r=>{let l={matches:!1,breakpoints:{}};return r.forEach(({matches:d,query:m})=>{l.matches=l.matches||d,l.breakpoints[m]=d}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),a={observable:new ct(r=>{let l=d=>this._zone.run(()=>r.next(d));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(it(t),le(({matches:r})=>({query:e,matches:r})),te(this._destroySubject)),mql:t};return this._queries.set(e,a),a}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();function Cs(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var gc=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var co=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({providers:[gc]})}return i})();var Ds=new y("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),ks=new y("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),bc=0,Ea=(()=>{class i{_ngZone=s(W);_defaultOptions=s(ks,{optional:!0});_liveElement;_document=s(Z);_sanitizer=s(Hi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Ds,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let o=this._defaultOptions,a,r;return t.length===1&&typeof t[0]=="number"?r=t[0]:[a,r]=t,this.clear(),clearTimeout(this._previousTimeout),a||(a=o&&o.politeness?o.politeness:"polite"),r==null&&o&&(r=o.duration),this._liveElement.setAttribute("aria-live",a),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:xs(this._liveElement,e,this._sanitizer),typeof r=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),o=this._document.createElement("div");for(let a=0;a<t.length;a++)t[a].remove();return o.classList.add(e),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${bc++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let a=t[o],r=a.getAttribute("aria-owns");r?r.indexOf(e)===-1&&a.setAttribute("aria-owns",r+" "+e):a.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var Lt=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Lt||{}),Ss="cdk-high-contrast-black-on-white",Ms="cdk-high-contrast-white-on-black",ka="cdk-high-contrast-active",Es=(()=>{class i{_platform=s(Y);_hasCheckedHighContrastMode=!1;_document=s(Z);_breakpointSubscription;constructor(){this._breakpointSubscription=s(ai).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Lt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,a=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),a){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Lt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Lt.BLACK_ON_WHITE}return Lt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(ka,Ss,Ms),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Lt.BLACK_ON_WHITE?e.add(ka,Ss):t===Lt.WHITE_ON_BLACK&&e.add(ka,Ms)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),Na=(()=>{class i{constructor(){s(Es)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[co]})}return i})();var _c=200,mo=class{_letterKeyStream=new C;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new C;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:_c;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Pe(e=>this._pressedLetters.push(e)),Oi(n),Ne(()=>this._pressedLetters.length>0),le(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,a=this._items[o];if(!this._skipPredicateFn?.(a)&&a.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(a);break}}this._pressedLetters=[]})}};function Ae(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var uo=class{_items;_activeItemIndex=H(-1);_activeItem=H(null);_wrap=!1;_typeaheadSubscription=we.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof ia?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):Xe(n)&&(this._effectRef=he(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new C;change=new C;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new mo(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(a=>!n[a]||this._allowedModifierKeys.indexOf(a)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let a=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(a>0?a:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let a=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(a<r?a:r-1,-1);break}else return;default:(o||Ae(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+n*t+e.length)%e.length,a=e[o];if(!this._skipPredicateFn(a)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return Xe(this._items)?this._items():this._items instanceof ia?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Kt=class extends uo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var As=new Map,Me=class i{_appId=s(Ti);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let t=As.get(n);return t===void 0?t=0:t++,As.set(n,t),`${n}${e?i._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})};var Fs=" ";function vc(i,n,e){let t=fo(i,n);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(Fs)))}function yc(i,n,e){let t=fo(i,n);e=e.trim();let o=t.filter(a=>a!==e);o.length?i.setAttribute(n,o.join(Fs)):i.removeAttribute(n)}function fo(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var Ps="cdk-describedby-message",po="cdk-describedby-host",Oa=0,ho=(()=>{class i{_platform=s(Y);_document=s(Z);_messageRegistry=new Map;_messagesContainer=null;_id=`${Oa++}`;constructor(){s(Ie).load(oi),this._id=s(Ti)+"-"+Oa++}describe(e,t,o){if(!this._canBeDescribed(e,t))return;let a=Ra(t,o);typeof t!="string"?(Ts(t,this._id),this._messageRegistry.set(a,{messageElement:t,referenceCount:0})):this._messageRegistry.has(a)||this._createMessageElement(t,o),this._isElementDescribedByMessage(e,a)||this._addMessageReference(e,a)}removeDescription(e,t,o){if(!t||!this._isElementNode(e))return;let a=Ra(t,o);if(this._isElementDescribedByMessage(e,a)&&this._removeMessageReference(e,a),typeof t=="string"){let r=this._messageRegistry.get(a);r&&r.referenceCount===0&&this._deleteMessageElement(a)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${po}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(po);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let o=this._document.createElement("div");Ts(o,this._id),o.textContent=e,t&&o.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Ra(e,t),{messageElement:o,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let a=0;a<t.length;a++)t[a].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(e),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(e){let t=fo(e,"aria-describedby").filter(o=>o.indexOf(Ps)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let o=this._messageRegistry.get(t);vc(e,"aria-describedby",o.messageElement.id),e.setAttribute(po,this._id),o.referenceCount++}_removeMessageReference(e,t){let o=this._messageRegistry.get(t);o.referenceCount--,yc(e,"aria-describedby",o.messageElement.id),e.removeAttribute(po)}_isElementDescribedByMessage(e,t){let o=fo(e,"aria-describedby"),a=this._messageRegistry.get(t),r=a&&a.messageElement.id;return!!r&&o.indexOf(r)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let o=t==null?"":`${t}`.trim(),a=e.getAttribute("aria-label");return o?!a||a.trim()!==o:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();function Ra(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function Ts(i,n){i.id||(i.id=`${Ps}-${n}-${Oa++}`)}var xc=new y("cdk-dir-doc",{providedIn:"root",factory:()=>s(Z)}),wc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Vs(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?wc.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Be=(()=>{class i{get value(){return this.valueSignal()}valueSignal=H("ltr");change=new $;constructor(){let e=s(xc,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Vs(t||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var ee=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({})}return i})();function _e(i){return i==null?"":typeof i=="string"?i:`${i}px`}function yt(i){return i!=null&&`${i}`!="false"}var Yt;function Ls(){if(Yt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Yt=!1,Yt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Yt=!0;else{let i=Element.prototype.scrollTo;i?Yt=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Yt=!1}}return Yt}function Ia(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Nn,zs=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Aa(){if(Nn)return Nn;if(typeof document!="object"||!document)return Nn=new Set(zs),Nn;let i=document.createElement("input");return Nn=new Set(zs.filter(n=>(i.setAttribute("type",n),i.type===n))),Nn}var Hs=Symbol("FIELD_TREE");var js=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),Bs=class{reducer;create;brand;[js];constructor(n,e){this.reducer=n,this.create=e}};function si(i){return typeof i=="function"&&i[Hs]===!0}var go=new y("");var Ta=class{_box;_destroyed=new C;_resizeSubject=new C;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ct(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ne(e=>e.some(t=>t.target===n)),ta({bufferSize:1,refCount:!0}),te(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Us=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(W);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new Ta(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var Ws={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Sc=new y("MATERIAL_ANIMATIONS"),Gs=null;function Mc(){return s(Sc,{optional:!0})?.animationsDisabled||s(Pi,{optional:!0})==="NoopAnimations"?"di-disabled":(Gs??=s(kn).matchMedia("(prefers-reduced-motion)").matches,Gs?"reduced-motion":"enabled")}function xe(){return Mc()!=="enabled"}var xt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-label"]]})}return i})(),Qs=new y("MatError"),Pa=(()=>{class i{id=s(Me).getId("mat-mdc-error-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,o){t&2&&gt("id",o.id)},inputs:{id:"id"},features:[K([{provide:Qs,useExisting:i}])]})}return i})(),Fa=(()=>{class i{align="start";id=s(Me).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(gt("id",o.id),q("align",null),T("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Dc=new y("MatPrefix");var Js=new y("MatSuffix"),li=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[K([{provide:Js,useExisting:i}])]})}return i})(),el=new y("FloatingLabelParent"),qs=(()=>{class i{_elementRef=s(S);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Us);_ngZone=s(W);_parent=s(el);_resizeSubscription=new we;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return kc(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&T("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function kc(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var $s="mdc-line-ripple--active",bo="mdc-line-ripple--deactivating",Ks=(()=>{class i{_elementRef=s(S);_cleanupTransitionEnd;constructor(){let e=s(W),t=s(ue);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(bo),e.add($s)}deactivate(){this._elementRef.nativeElement.classList.add(bo)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(bo);e.propertyName==="opacity"&&o&&t.remove($s,bo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Ys=(()=>{class i{_elementRef=s(S);_ngZone=s(W);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["notch"];return D({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(a,r){if(a&1&&je(e,5),a&2){let l;L(l=z())&&(r._notch=l.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(a,r){a&2&&T("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(a,r){a&1&&(pe(),ot(0,"div",1),Re(1,"div",2,0),U(3),Oe(),ot(4,"div",3))},encapsulation:2})})()}return i})(),di=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i})}return i})();var Xt=new y("MatFormField"),Ec=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Xs="fill",Nc="auto",Zs="fixed",Rc="translateY(-50%)",lt=(()=>{class i{_elementRef=s(S);_changeDetectorRef=s(ge);_platform=s(Y);_idGenerator=s(Me);_ngZone=s(W);_defaults=s(Ec,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Xe(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ue("iconPrefixContainer");_textPrefixContainerSignal=Ue("textPrefixContainer");_iconSuffixContainerSignal=Ue("iconSuffixContainer");_textSuffixContainerSignal=Ue("textSuffixContainer");_prefixSuffixContainers=re(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Or(xt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=yt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Nc}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Xs;this._appearanceSignal.set(t)}_appearanceSignal=H(Xs);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Zs}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Zs}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new C;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=xe();constructor(){let e=this._defaults,t=s(Be);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),he(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=si(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!si(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=re(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(it([void 0,void 0]),le(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),ea(),Ne(([[a,r],[l,d]])=>a!==l||r!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!si(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(te(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Fe(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){la({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=re(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(si(t)){let o=t();return e==="valid"?o.valid():e==="dirty"?o.dirty():e==="touched"?o.touched():e==="pending"?o.pending():e==="untouched"?!o.touched():e==="pristine"?!o.dirty():e==="invalid"?!o.valid():!1}else{let o=t;return e==="valid"?o.valid:e==="dirty"?o.dirty:e==="touched"?o.touched:e==="pending"?o.pending:e==="untouched"?o.untouched:e==="pristine"?o.pristine:e==="invalid"?o.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,r=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,o;if(t){let a=this._describedByIds||e;o=e.concat(t.filter(r=>r&&!a.includes(r)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,m=a?.getBoundingClientRect().width??0,c=this._currentDirection==="rtl"?"-1":"1",u=`${r+l}px`,p=`calc(${c} * (${u} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,F=`var(--mat-mdc-form-field-label-transform, ${Rc} translateX(${p}))`,G=r+l+d+m;return[F,G]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["iconPrefixContainer"],t=["textPrefixContainer"],o=["iconSuffixContainer"],a=["textSuffixContainer"],r=["textField"],l=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],d=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function m(B,oe){B&1&&Ce(0,"span",21)}function c(B,oe){if(B&1&&(h(0,"label",20),U(1,1),k(2,m,1,0,"span",21),g()),B&2){let b=x(2);R("floating",b._shouldLabelFloat())("monitorResize",b._hasOutline())("id",b._labelId),q("for",b._control.disableAutomaticLabeling?null:b._control.id),f(2),E(!b.hideRequiredMarker&&b._unwrapMaybeSignal(b._control.required)?2:-1)}}function u(B,oe){if(B&1&&k(0,c,3,5,"label",20),B&2){let b=x();E(b._hasFloatingLabel()?0:-1)}}function v(B,oe){B&1&&Ce(0,"div",7)}function p(B,oe){}function F(B,oe){if(B&1&&Le(0,p,0,0,"ng-template",13),B&2){x(2);let b=at(1);R("ngTemplateOutlet",b)}}function G(B,oe){if(B&1&&(h(0,"div",9),k(1,F,1,1,null,13),g()),B&2){let b=x();R("matFormFieldNotchedOutlineOpen",b._shouldLabelFloat()),f(),E(b._forceDisplayInfixLabel()?-1:1)}}function me(B,oe){B&1&&(h(0,"div",10,2),U(2,2),g())}function De(B,oe){B&1&&(h(0,"div",11,3),U(2,3),g())}function Mt(B,oe){}function ki(B,oe){if(B&1&&Le(0,Mt,0,0,"ng-template",13),B&2){x();let b=at(1);R("ngTemplateOutlet",b)}}function xd(B,oe){B&1&&(h(0,"div",14,4),U(2,4),g())}function wd(B,oe){B&1&&(h(0,"div",15,5),U(2,5),g())}function Cd(B,oe){B&1&&Ce(0,"div",16)}function Sd(B,oe){B&1&&(h(0,"div",18),U(1,6),g())}function Md(B,oe){if(B&1&&(h(0,"mat-hint",22),P(1),g()),B&2){let b=x(2);R("id",b._hintLabelId),f(),be(b.hintLabel)}}function Dd(B,oe){if(B&1&&(h(0,"div",19),k(1,Md,2,2,"mat-hint",22),U(2,7),Ce(3,"div",23),U(4,8),g()),B&2){let b=x();f(),E(b.hintLabel?1:-1)}}return D({type:i,selectors:[["mat-form-field"]],contentQueries:function(oe,b,ae){if(oe&1&&(kr(ae,b._labelChild,xt,5),Ze(ae,di,5)(ae,Dc,5)(ae,Js,5)(ae,Qs,5)(ae,Fa,5)),oe&2){bt();let Te;L(Te=z())&&(b._formFieldControl=Te.first),L(Te=z())&&(b._prefixChildren=Te),L(Te=z())&&(b._suffixChildren=Te),L(Te=z())&&(b._errorChildren=Te),L(Te=z())&&(b._hintChildren=Te)}},viewQuery:function(oe,b){if(oe&1&&(At(b._iconPrefixContainerSignal,e,5)(b._textPrefixContainerSignal,t,5)(b._iconSuffixContainerSignal,o,5)(b._textSuffixContainerSignal,a,5),je(r,5)(e,5)(t,5)(o,5)(a,5)(qs,5)(Ys,5)(Ks,5)),oe&2){bt(4);let ae;L(ae=z())&&(b._textField=ae.first),L(ae=z())&&(b._iconPrefixContainer=ae.first),L(ae=z())&&(b._textPrefixContainer=ae.first),L(ae=z())&&(b._iconSuffixContainer=ae.first),L(ae=z())&&(b._textSuffixContainer=ae.first),L(ae=z())&&(b._floatingLabel=ae.first),L(ae=z())&&(b._notchedOutline=ae.first),L(ae=z())&&(b._lineRipple=ae.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(oe,b){oe&2&&T("mat-mdc-form-field-label-always-float",b._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",b._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",b._hasIconSuffix)("mat-form-field-invalid",b._unwrapMaybeSignal(b._control.errorState))("mat-form-field-disabled",b._unwrapMaybeSignal(b._control.disabled))("mat-form-field-autofilled",b._unwrapMaybeSignal(b._control.autofilled))("mat-form-field-appearance-fill",b.appearance=="fill")("mat-form-field-appearance-outline",b.appearance=="outline")("mat-form-field-hide-placeholder",b._hasFloatingLabel()&&!b._shouldLabelFloat())("mat-primary",b.color!=="accent"&&b.color!=="warn")("mat-accent",b.color==="accent")("mat-warn",b.color==="warn")("ng-untouched",b._shouldForward("untouched"))("ng-touched",b._shouldForward("touched"))("ng-pristine",b._shouldForward("pristine"))("ng-dirty",b._shouldForward("dirty"))("ng-valid",b._shouldForward("valid"))("ng-invalid",b._shouldForward("invalid"))("ng-pending",b._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[K([{provide:Xt,useExisting:i},{provide:el,useExisting:i}])],ngContentSelectors:d,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(oe,b){if(oe&1&&(pe(l),Le(0,u,1,1,"ng-template",null,0,Nr),h(2,"div",6,1),M("click",function(Te){return b._control.onContainerClick(Te)}),k(4,v,1,0,"div",7),h(5,"div",8),k(6,G,2,2,"div",9),k(7,me,3,0,"div",10),k(8,De,3,0,"div",11),h(9,"div",12),k(10,ki,1,1,null,13),U(11),g(),k(12,xd,3,0,"div",14),k(13,wd,3,0,"div",15),g(),k(14,Cd,1,0,"div",16),g(),h(15,"div",17),k(16,Sd,2,0,"div",18)(17,Dd,5,1,"div",19),g()),oe&2){let ae,Te=b._unwrapMaybeSignal(b._control.disabled);f(2),T("mdc-text-field--filled",!b._hasOutline())("mdc-text-field--outlined",b._hasOutline())("mdc-text-field--no-label",!b._hasFloatingLabel())("mdc-text-field--disabled",Te)("mdc-text-field--invalid",b._unwrapMaybeSignal(b._control.errorState)),f(2),E(!b._hasOutline()&&!Te?4:-1),f(2),E(b._hasOutline()?6:-1),f(),E(b._hasIconPrefix?7:-1),f(),E(b._hasTextPrefix?8:-1),f(2),E(!b._hasOutline()||b._forceDisplayInfixLabel()?10:-1),f(2),E(b._hasTextSuffix?12:-1),f(),E(b._hasIconSuffix?13:-1),f(),E(b._hasOutline()?-1:14),f(),T("mat-mdc-form-field-subscript-dynamic-size",b.subscriptSizing==="dynamic");let kd=b._getSubscriptMessageType();f(),E((ae=kd)==="error"?16:ae==="hint"?17:-1)}},dependencies:[qs,Ys,Ar,Ks,Fa],styles:[`.mdc-text-field {
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
`],encapsulation:2})})()}return i})();var Je=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[co,lt,ee]})}return i})();var Oc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})(),Ic={passive:!0},tl=(()=>{class i{_platform=s(Y);_ngZone=s(W);_renderer=s(He).createRenderer(null,null);_styleLoader=s(Ie);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return mr;this._styleLoader.load(Oc);let t=We(e),o=this._monitoredElements.get(t);if(o)return o.subject;let a=new C,r="cdk-text-field-autofilled",l=m=>{m.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:m.target,isAutofilled:!0}))):m.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:m.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Ic)));return this._monitoredElements.set(t,{subject:a,unlisten:d}),a}stopMonitoring(e){let t=We(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var nl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({})}return i})();var il=new y("MAT_INPUT_VALUE_ACCESSOR");var _o=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),o=e().touched();return t&&o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var Rn=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,t,o,a){this._defaultMatcher=n,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=a,e?Xe(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return n?.isErrorState(t,e)??!1}};var Ac=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Tc=new y("MAT_INPUT_CONFIG"),On=(()=>{class i{_elementRef=s(S);_platform=s(Y);ngControl=s(st,{optional:!0,self:!0});_autofillMonitor=s(tl);_ngZone=s(W);_formField=s(Xt,{optional:!0});_renderer=s(ue);_uid=s(Me).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Tc,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new C;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=yt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ut.required)??!1}set required(e){this._required=yt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Aa().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=yt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Aa().has(e));constructor(){let e=s(Wt,{optional:!0}),t=s(Qn,{optional:!0}),o=s(_o),a=s(il,{optional:!0,self:!0}),r=s(go,{optional:!0,self:!0}),l=this._elementRef.nativeElement,d=l.nodeName.toLowerCase();a?Xe(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Rn(o,r||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d==="select",this._isTextarea=d==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&he(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ac.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&M("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(gt("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),q("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),T("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",w]},exportAs:["matInput"],features:[K([{provide:di,useExisting:i}]),ve]})}return i})(),In=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[Je,Je,nl,ee]})}return i})();var $e=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})($e||{}),za=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=$e.HIDDEN;constructor(n,e,t,o=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},ol=Mn({passive:!0,capture:!0}),Ba=class{_events=new Map;addHandler(n,e,t,o){let a=this._events.get(e);if(a){let r=a.get(t);r?r.add(o):a.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ol)})}removeHandler(n,e,t){let o=this._events.get(n);if(!o)return;let a=o.get(e);a&&(a.delete(t),a.size===0&&o.delete(e),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,ol)))}_delegateEventHandler=n=>{let e=Se(n);e&&this._events.get(n.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(a=>a.handleEvent(n))})}},ci={enterDuration:225,exitDuration:150},Fc=800,al=Mn({passive:!0,capture:!0}),rl=["mousedown","touchstart"],sl=["mouseup","mouseleave","touchend","touchcancel"],Pc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return i})(),mi=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ba;constructor(n,e,t,o,a){this._target=n,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=We(t)),a&&a.get(Ie).load(Pc)}fadeInRipple(n,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=A(A({},ci),t.animation);t.centered&&(n=o.left+o.width/2,e=o.top+o.height/2);let r=t.radius||Vc(n,e,o),l=n-o.left,d=e-o.top,m=a.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=`${l-r}px`,c.style.top=`${d-r}px`,c.style.height=`${r*2}px`,c.style.width=`${r*2}px`,t.color!=null&&(c.style.backgroundColor=t.color),c.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(c);let u=window.getComputedStyle(c),v=u.transitionProperty,p=u.transitionDuration,F=v==="none"||p==="0s"||p==="0s, 0s"||o.width===0&&o.height===0,G=new za(this,c,t,F);c.style.transform="scale3d(1, 1, 1)",G.state=$e.FADING_IN,t.persistent||(this._mostRecentTransientRipple=G);let me=null;return!F&&(m||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let De=()=>{me&&(me.fallbackTimer=null),clearTimeout(ki),this._finishRippleTransition(G)},Mt=()=>this._destroyRipple(G),ki=setTimeout(Mt,m+100);c.addEventListener("transitionend",De),c.addEventListener("transitioncancel",Mt),me={onTransitionEnd:De,onTransitionCancel:Mt,fallbackTimer:ki}}),this._activeRipples.set(G,me),(F||!m)&&this._finishRippleTransition(G),G}fadeOutRipple(n){if(n.state===$e.FADING_OUT||n.state===$e.HIDDEN)return;let e=n.element,t=A(A({},ci),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=$e.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=We(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,rl.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{sl.forEach(e=>{this._triggerElement.addEventListener(e,this,al)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===$e.FADING_IN?this._startFadeOutTransition(n):n.state===$e.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=$e.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=$e.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ei(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Fc;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ti(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===$e.VISIBLE||n.config.terminateOnPointerUp&&n.state===$e.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(rl.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(sl.forEach(e=>n.removeEventListener(e,this,al)),this._pointerUpEventsRegistered=!1))}};function Vc(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),o=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+o*o)}var Ha=new y("mat-ripple-global-options"),ll=(()=>{class i{_elementRef=s(S);_animationsDisabled=xe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(W),t=s(Y),o=s(Ha,{optional:!0}),a=s(J);this._globalOptions=o||{},this._rippleRenderer=new mi(this,e,this._elementRef,t,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:A(A(A({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,A(A({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,A(A({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,o){t&2&&T("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var dl=(()=>{class i{_animationsDisabled=xe();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&T("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return i})();var An=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return i})();var fi=new y("MAT_OPTION_PARENT_COMPONENT"),hi=new y("MatOptgroup");var ui=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},dt=(()=>{class i{_element=s(S);_changeDetectorRef=s(ge);_parent=s(fi,{optional:!0});group=s(hi,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(Me).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=H(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $;_text;_stateChanges=new C;constructor(){let e=s(Ie);e.load(An),e.load(oi),this._signalDisableRipple=!!this._parent&&Xe(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ae(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ui(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["text"],t=[[["mat-icon"]],"*"],o=["mat-icon","*"];function a(d,m){if(d&1&&Ce(0,"mat-pseudo-checkbox",1),d&2){let c=x();R("disabled",c.disabled)("state",c.selected?"checked":"unchecked")}}function r(d,m){if(d&1&&Ce(0,"mat-pseudo-checkbox",3),d&2){let c=x();R("disabled",c.disabled)}}function l(d,m){if(d&1&&(h(0,"span",4),P(1),g()),d&2){let c=x();f(),Qe("(",c.group.label,")")}}return D({type:i,selectors:[["mat-option"]],viewQuery:function(m,c){if(m&1&&je(e,7),m&2){let u;L(u=z())&&(c._text=u.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(m,c){m&1&&M("click",function(){return c._selectViaInteraction()})("keydown",function(v){return c._handleKeydown(v)}),m&2&&(gt("id",c.id),q("aria-selected",c.selected)("aria-disabled",c.disabled.toString()),T("mdc-list-item--selected",c.selected)("mat-mdc-option-multiple",c.multiple)("mat-mdc-option-active",c.active)("mdc-list-item--disabled",c.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",w]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:o,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(m,c){m&1&&(pe(t),k(0,a,1,2,"mat-pseudo-checkbox",1),U(1),h(2,"span",2,0),U(4,1),g(),k(5,r,1,1,"mat-pseudo-checkbox",3),k(6,l,2,1,"span",4),Ce(7,"div",5)),m&2&&(E(c.multiple?0:-1),f(5),E(!c.multiple&&c.selected&&!c.hideSingleSelectionIndicator?5:-1),f(),E(c.group&&c.group._inert?6:-1),f(),R("matRippleTrigger",c._getHostElement())("matRippleDisabled",c.disabled||c.disableRipple))},dependencies:[dl,ll],styles:[`.mat-mdc-option {
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
`],encapsulation:2})})()}return i})();function vo(i,n,e){if(e.length){let t=n.toArray(),o=e.toArray(),a=0;for(let r=0;r<i+1;r++)t[r].group&&t[r].group===o[a]&&a++;return a}return 0}function yo(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var gi=class{};function bi(i){return i&&typeof i.connect=="function"&&!(i instanceof cr)}var et=(function(i){return i[i.REPLACED=0]="REPLACED",i[i.INSERTED=1]="INSERTED",i[i.MOVED=2]="MOVED",i[i.REMOVED=3]="REMOVED",i})(et||{}),xo=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,t,o,a){n.forEachOperation((r,l,d)=>{let m,c;if(r.previousIndex==null){let u=()=>t(r,l,d);m=this._insertView(u,d,e,o(r)),c=m?et.INSERTED:et.REPLACED}else d==null?(this._detachAndCacheView(l,e),c=et.REMOVED):(m=this._moveView(l,d,e,o(r)),c=et.MOVED);a&&a({context:m?.context,operation:c,record:r})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,t,o){let a=this._insertViewFromCache(e,t);if(a){a.context.$implicit=o;return}let r=n();return t.createEmbeddedView(r.templateRef,r.context,r.index)}_detachAndCacheView(n,e){let t=e.detach(n);this._maybeCacheView(t,e)}_moveView(n,e,t,o){let a=t.get(n);return t.move(a,e),a.context.$implicit=o,a}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let t=e.indexOf(n);t===-1?n.destroy():e.remove(t)}}_insertViewFromCache(n,e){let t=this._viewCache.pop();return t&&e.insert(t,n),t||null}};var Lc=20,Tn=(()=>{class i{_ngZone=s(W);_platform=s(Y);_renderer=s(He).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new C;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Lc){return this._platform.isBrowser?new ct(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(Hn(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):fe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ne(a=>!a||o.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,a)=>{this._targetContainsElement(a,e)&&t.push(a)}),t}_targetContainsElement(e,t){let o=We(t),a=e.getElementRef().nativeElement;do if(o==a)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var zc=20,Ke=(()=>{class i{_platform=s(Y);_listeners;_viewportSize=null;_change=new C;_document=s(Z);constructor(){let e=s(W),t=s(He).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=a=>this._change.next(a);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,a=o.getBoundingClientRect(),r=-a.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,l=-a.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:r,left:l}}change(e=zc){return e>0?this._change.pipe(Hn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var ml=new y("CDK_VIRTUAL_SCROLL_VIEWPORT");var wt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({})}return i})(),_i=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[ee,wt,ee,wt]})}return i})();var vi=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},yi=class extends vi{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,o,a,r){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=a||null,this.directives=r||null}},Qt=class extends vi{templateRef;viewContainerRef;context;injector;constructor(n,e,t,o){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},ja=class extends vi{element;constructor(n){super(),this.element=n instanceof S?n.nativeElement:n}},Ua=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof yi)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Qt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof ja)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},wo=class extends Ua{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,o=t.get(wr,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=n.injector||this._defaultInjector||J.NULL,a=o.get(Ot,t.injector);e=zi(n.component,{elementInjector:o,environmentInjector:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var ul=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({})}return i})();var pl=Ls();function yl(i){return new Co(i.get(Ke),i.get(Z))}var Co=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=_e(-this._previousScrollPosition.left),n.style.top=_e(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,o=e.style,a=t.scrollBehavior||"",r=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),pl&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),pl&&(t.scrollBehavior=a,o.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function xl(i,n){return new So(i.get(Tn),i.get(W),i.get(Ke),n)}var So=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,o){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ne(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var xi=class{enable(){}disable(){}attach(){}};function Ga(i,n){return n.some(e=>{let t=i.bottom<e.top,o=i.top>e.bottom,a=i.right<e.left,r=i.left>e.right;return t||o||a||r})}function fl(i,n){return n.some(e=>{let t=i.top<e.top,o=i.bottom>e.bottom,a=i.left<e.left,r=i.right>e.right;return t||o||a||r})}function Ct(i,n){return new Mo(i.get(Tn),i.get(Ke),i.get(W),n)}var Mo=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,o){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();Ga(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},wl=(()=>{class i{_injector=s(J);noop=()=>new xi;close=e=>xl(this._injector,e);block=()=>yl(this._injector);reposition=e=>Ct(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),en=class{positionStrategy;scrollStrategy=new xi;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Do=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Cl=(()=>{class i{_attachedOverlays=[];_document=s(Z);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),Sl=(()=>{class i extends Cl{_ngZone=s(W);_renderer=s(He).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let a=t[o];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),Ml=(()=>{class i extends Cl{_platform=s(Y);_ngZone=s(W);_renderer=s(He).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,"pointerdown",this._pointerDownListener,o),a.listen(t,"click",this._clickListener,o),a.listen(t,"auxclick",this._clickListener,o),a.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Se(e)};_clickListener=e=>{let t=Se(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let l=a[r],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,d))){if(hl(l.overlayElement,t)||hl(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(e)):d.next(e)}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();function hl(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Dl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return i})(),kl=(()=>{class i{_platform=s(Y);_containerElement;_document=s(Z);_styleLoader=s(Ie);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ia()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<o.length;a++)o[a].remove()}let t=this._document.createElement("div");t.classList.add(e),Ia()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Dl)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),qa=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,o){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function $a(i){return i&&i.nodeType===1}var Wa=H([]),ko=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C;_attachments=new C;_detachments=new C;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C;_outsidePointerEvents=new C;_afterNextRenderRef;constructor(n,e,t,o,a,r,l,d,m,c=!1,u,v){this._portalOutlet=n,this._host=e,this._pane=t,this._config=o,this._ngZone=a,this._keyboardDispatcher=r,this._document=l,this._location=d,this._outsideClickDispatcher=m,this._animationsDisabled=c,this._injector=u,this._renderer=v,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),se(()=>{Wa.update(t=>t.includes(this)?t:[...t,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ee(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation==="pop-state"){let t=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>t.unsubscribe()}else this._config.disposeOnNavigation==="url-change"&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),se(()=>{Wa.update(e=>e.filter(t=>t!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,se(()=>{Wa.update(e=>e.filter(t=>t!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=A(A({},this._config),n),this._updateElementSize()}setDirection(n){this._config=ke(A({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=_e(this._config.width),n.height=_e(this._config.height),n.minWidth=_e(this._config.minWidth),n.minHeight=_e(this._config.minHeight),n.maxWidth=_e(this._config.maxWidth),n.maxHeight=_e(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;$a(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new qa(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let o=vt(e||[]).filter(a=>!!a);o.length&&(t?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ee(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},gl="cdk-overlay-connected-position-bounding-box",Bc=/([A-Za-z%]+)$/;function nn(i,n){return new Eo(n,i.get(Ke),i.get(Z),i.get(Y),i.get(kl))}var Eo=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C;_resizeSubscription=we.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,o,a){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=a,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(gl),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,a=[],r;for(let l of this._preferredPositions){let d=this._getOriginPoint(n,o,l),m=this._getOverlayPoint(d,e,l),c=this._getOverlayFit(m,e,t,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,m,t)){a.push({position:l,origin:d,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!r||r.overlayFit.visibleArea<c.visibleArea)&&(r={overlayFit:c,overlayPoint:m,originPoint:d,position:l,overlayRect:e})}if(a.length){let l=null,d=-1;for(let m of a){let c=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);c>d&&(d=c,l=m)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Jt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(gl),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof S?this._origin.nativeElement:$a(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let o;if(t.originX=="center")o=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;o=t.originX=="start"?r:l}e.left<0&&(o-=e.left);let a;return t.originY=="center"?a=n.top+n.height/2:a=t.originY=="top"?n.top:n.bottom,e.top<0&&(a-=e.top),{x:o,y:a}}_getOverlayPoint(n,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let a;return t.overlayY=="center"?a=-e.height/2:a=t.overlayY=="top"?0:-e.height,{x:n.x+o,y:n.y+a}}_getOverlayFit(n,e,t,o){let a=_l(e),{x:r,y:l}=n,d=this._getOffset(o,"x"),m=this._getOffset(o,"y");d&&(r+=d),m&&(l+=m);let c=0-r,u=r+a.width-t.width,v=0-l,p=l+a.height-t.height,F=this._subtractOverflows(a.width,c,u),G=this._subtractOverflows(a.height,v,p),me=F*G;return{visibleArea:me,isCompletelyWithinViewport:a.width*a.height===me,fitsInViewportVertically:G===a.height,fitsInViewportHorizontally:F==a.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,a=t.right-e.x,r=bl(this._overlayRef.getConfig().minHeight),l=bl(this._overlayRef.getConfig().minWidth),d=n.fitsInViewportVertically||r!=null&&r<=o,m=n.fitsInViewportHorizontally||l!=null&&l<=a;return d&&m}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=_l(e),a=this._viewportRect,r=Math.max(n.x+o.width-a.width,0),l=Math.max(n.y+o.height-a.height,0),d=Math.max(a.top-t.top-n.y,0),m=Math.max(a.left-t.left-n.x,0),c=0,u=0;return o.width<=a.width?c=m||-r:c=n.x<this._getViewportMarginStart()?a.left-t.left-n.x:0,o.height<=a.height?u=d||-l:u=n.y<this._getViewportMarginTop()?a.top-t.top-n.y:0,this._previousPushAmount={x:c,y:u},{x:n.x+c,y:n.y+u}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Hc(this._lastScrollVisibility,t)){let o=new Do(n,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,o=this._isRtl(),a,r,l;if(e.overlayY==="top")r=n.y,a=t.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-l+this._getViewportMarginTop();else{let p=Math.min(t.bottom-n.y+t.top,n.y),F=this._lastBoundingBoxSize.height;a=p*2,r=n.y-p,a>F&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-F/2)}let d=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,m=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,c,u,v;if(m)v=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=n.x-this._getViewportMarginStart();else if(d)u=n.x,c=t.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(t.right-n.x+t.left,n.x),F=this._lastBoundingBoxSize.width;c=p*2,u=n.x-p,c>F&&!this._isInitialRender&&!this._growAfterOpen&&(u=n.x-F/2)}return{top:r,left:u,bottom:l,right:v,width:c,height:a}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;o.width=_e(t.width),o.height=_e(t.height),o.top=_e(t.top)||"auto",o.bottom=_e(t.bottom)||"auto",o.left=_e(t.left)||"auto",o.right=_e(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",a&&(o.maxHeight=_e(a)),r&&(o.maxWidth=_e(r))}this._lastBoundingBoxSize=t,Jt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Jt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Jt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},o=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(o){let c=this._viewportRuler.getViewportScrollPosition();Jt(t,this._getExactOverlayY(e,n,c)),Jt(t,this._getExactOverlayX(e,n,c))}else t.position="static";let l="",d=this._getOffset(e,"x"),m=this._getOffset(e,"y");d&&(l+=`translateX(${d}px) `),m&&(l+=`translateY(${m}px)`),t.transform=l.trim(),r.maxHeight&&(o?t.maxHeight=_e(r.maxHeight):a&&(t.maxHeight="")),r.maxWidth&&(o?t.maxWidth=_e(r.maxWidth):a&&(t.maxWidth="")),Jt(this._pane.style,t)}_getExactOverlayY(n,e,t){let o={top:"",bottom:""},a=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),n.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;o.bottom=`${r-(a.y+this._overlayRect.height)}px`}else o.top=_e(a.y);return o}_getExactOverlayX(n,e,t){let o={left:"",right:""},a=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let r;if(this._isRtl()?r=n.overlayX==="end"?"left":"right":r=n.overlayX==="end"?"right":"left",r==="right"){let l=this._document.documentElement.clientWidth;o.right=`${l-(a.x+this._overlayRect.width)}px`}else o.left=_e(a.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:fl(n,t),isOriginOutsideView:Ga(n,t),isOverlayClipped:fl(e,t),isOverlayOutsideView:Ga(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,o)=>t-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&vt(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof S)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Jt(i,n){for(let e in n)Object.hasOwn(n,e)&&(i[e]=n[e]);return i}function bl(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(Bc);return!e||e==="px"?parseFloat(n):null}return i||null}function _l(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Hc(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var vl="cdk-global-overlay-wrapper";function El(i){return new No}var No=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(vl),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:a,maxWidth:r,maxHeight:l}=t,d=(o==="100%"||o==="100vw")&&(!r||r==="100%"||r==="100vw"),m=(a==="100%"||a==="100vh")&&(!l||l==="100%"||l==="100vh"),c=this._xPosition,u=this._xOffset,v=this._overlayRef.getConfig().direction==="rtl",p="",F="",G="";d?G="flex-start":c==="center"?(G="center",v?F=u:p=u):v?c==="left"||c==="end"?(G="flex-end",p=u):(c==="right"||c==="start")&&(G="flex-start",F=u):c==="left"||c==="start"?(G="flex-start",p=u):(c==="right"||c==="end")&&(G="flex-end",F=u),n.position=this._cssPosition,n.marginLeft=d?"0":p,n.marginTop=m?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=d?"0":F,e.justifyContent=G,e.alignItems=m?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(vl),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Nl=(()=>{class i{_injector=s(J);global(){return El()}flexibleConnectedTo(e){return nn(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),wi=new y("OVERLAY_DEFAULT_CONFIG");function on(i,n){i.get(Ie).load(Dl);let e=i.get(kl),t=i.get(Z),o=i.get(Me),a=i.get(cn),r=i.get(Be),l=i.get(ue,null,{optional:!0})||i.get(He).createRenderer(null,null),d=new en(n),m=i.get(wi,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||r.value,!t.body||!("showPopover"in t.body)?d.usePopover=!1:d.usePopover=n?.usePopover??m;let c=t.createElement("div"),u=t.createElement("div");c.id=o.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),u.appendChild(c),d.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let v=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return $a(v)?v.after(u):v?.type==="parent"?v.element.appendChild(u):e.getContainerElement().appendChild(u),new ko(new wo(c,a,i),u,c,d,i.get(W),i.get(Sl),t,i.get(Ir),i.get(Ml),n?.disableAnimations??i.get(Pi,null,{optional:!0})==="NoopAnimations",i.get(Ot),l)}var Rl=(()=>{class i{scrollStrategies=s(wl);_positionBuilder=s(Nl);_injector=s(J);create(e){return on(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),jc=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Uc=new y("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(J);return()=>Ct(i)}}),Fn=(()=>{class i{elementRef=s(S);static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Ol=new y("cdk-connected-overlay-default-config"),Ro=(()=>{class i{_dir=s(Be,{optional:!0});_injector=s(J);_overlayRef;_templatePortal;_backdropSubscription=we.EMPTY;_attachSubscription=we.EMPTY;_detachSubscription=we.EMPTY;_positionSubscription=we.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(Uc);_ngZone=s(W);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new $;positionChange=new $;attach=new $;detach=new $;overlayKeydown=new $;overlayOutsideClick=new $;constructor(){let e=s(Ge),t=s(Ve),o=s(Ol,{optional:!0}),a=s(wi,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new Qt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=jc);let e=this._overlayRef=on(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ae(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let o=this._getOriginElement(),a=Se(t);(!o||o!==a&&!o.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new en({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=nn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Fn?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Fn?this.origin.elementRef.nativeElement:this.origin instanceof S?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(br(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",w],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",w],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",w],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",w],push:[2,"cdkConnectedOverlayPush","push",w],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",e=>e==="url-change"||e==="pop-state"?e:w(e)],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",w],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ve]})}return i})(),an=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({providers:[Rl],imports:[ee,ul,_i,_i]})}return i})();var Oo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[ee]})}return i})();var Il=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[ee]})}return i})();var Pn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[Oo,Il,dt,ee]})}return i})();var Ka=class{source;option;constructor(n,e){this.source=n,this.option=e}},Al=new y("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Tl=(()=>{class i{_changeDetectorRef=s(ge);_elementRef=s(S);_defaults=s(Al);_animationsDisabled=xe();_activeOptionChanges=we.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new $;opened=new $;closed=new $;optionActivated=new $;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(Me).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(Y);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Kt(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new Ka(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["panel"],t=["*"];function o(a,r){if(a&1&&(Re(0,"div",1,0),U(2),Oe()),a&2){let l=r.id,d=x();qe(d._classList),T("mat-mdc-autocomplete-visible",d.showPanel)("mat-mdc-autocomplete-hidden",!d.showPanel)("mat-autocomplete-panel-animations-enabled",!d._animationsDisabled)("mat-primary",d._color==="primary")("mat-accent",d._color==="accent")("mat-warn",d._color==="warn"),gt("id",d.id),q("aria-label",d.ariaLabel||null)("aria-labelledby",d._getPanelAriaLabelledby(l))}}return D({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(r,l,d){if(r&1&&Ze(d,dt,5)(d,hi,5),r&2){let m;L(m=z())&&(l.options=m),L(m=z())&&(l.optionGroups=m)}},viewQuery:function(r,l){if(r&1&&je(Ge,7)(e,5),r&2){let d;L(d=z())&&(l.template=d.first),L(d=z())&&(l.panel=d.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",w],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",w],requireSelection:[2,"requireSelection","requireSelection",w],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",w],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",w]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[K([{provide:fi,useExisting:i}])],ngContentSelectors:t,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(r,l){r&1&&(pe(),Sr(0,o,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})})()}return i})();var Wc={provide:to,useExisting:Ye(()=>Ya),multi:!0};var Gc=new y("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(J);return()=>Ct(i)}}),Ya=(()=>{class i{_environmentInjector=s(Ot);_element=s(S);_injector=s(J);_viewContainerRef=s(Ve);_zone=s(W);_changeDetectorRef=s(ge);_dir=s(Be,{optional:!0});_formField=s(Xt,{optional:!0,host:!0});_viewportRuler=s(Ke);_scrollStrategy=s(Gc);_renderer=s(ue);_animationsDisabled=xe();_defaults=s(Al,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new C;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=we.EMPTY;_breakpointObserver=s(ai);_handsetLandscapeSubscription=we.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new C;_overlayPanelClass=vt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Fe(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Ne(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Ne(()=>this._overlayAttached)):fe()).pipe(le(e=>e instanceof ui?e:null))}optionSelections=Ni(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(it(e),Nt(()=>Fe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Nt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new ct(e=>{let t=a=>{let r=Se(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,d=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(r))&&(!d||!d.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(a)},o=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{o.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,o=t.keyCode,a=Ae(t);if(o===27&&!a&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&o===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,l=o===38||o===40;o===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,o=t.value;if(t.type==="number"&&(o=o==""?null:parseFloat(o)),this._previousValue!==o){if(this._previousValue=o,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(o),!o)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(r=>r.selected);if(a){let r=this._getDisplayValue(a.value);o!==r&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Sa()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new ct(o=>{Ee(()=>{o.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(Pe(()=>this._positionStrategy.reapplyLastPosition()),hr(0))??fe();return Fe(e,t).pipe(Nt(()=>this._zone.run(()=>{let o=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Et(1)).subscribe(o=>this._setValueAndClose(o))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){let t=this._formField?._control;t?yr(t.value)?t.value.set(e):t.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,o=e?e.source:this._pendingAutoselectedOption;o?(this._clearPreviousSelectedOption(o),this._assignOptionValue(o.value),this._onChange(o.value),t._emitSelectEvent(o),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(o=>{o!==e&&o.selected&&o.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Qt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=on(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Ws.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let o=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&o!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Ae(e)||e.keyCode===38&&Ae(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new en({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=nn(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}],r;this.position==="above"?r=a:this.position==="below"?r=t:r=[...t,...a],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let o=0;o<e.options.length;o++)if(!e.options.get(o).disabled){t=o;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,o=vo(e,t.options,t.optionGroups);if(e===0&&o===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let r=a._getHostElement(),l=yo(r.offsetTop,r.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(l)}}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,o){t&1&&M("focusin",function(){return o._handleFocus()})("blur",function(){return o._onTouched()})("input",function(r){return o._handleInput(r)})("keydown",function(r){return o._handleKeydown(r)})("click",function(){return o._handleClick()}),t&2&&q("autocomplete",o.autocompleteAttribute)("role",o.autocompleteDisabled?null:"combobox")("aria-autocomplete",o.autocompleteDisabled?null:"list")("aria-activedescendant",o.panelOpen&&o.activeOption?o.activeOption.id:null)("aria-expanded",o.autocompleteDisabled?null:o.panelOpen.toString())("aria-controls",o.autocompleteDisabled||!o.panelOpen?null:o.autocomplete?.id)("aria-haspopup",o.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",w]},exportAs:["matAutocompleteTrigger"],features:[K([Wc]),ve]})}return i})(),Fl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[an,Pn,wt,Pn,ee]})}return i})();var $c={capture:!0},Kc=["focus","mousedown","mouseenter","touchstart"],Xa="mat-ripple-loader-uninitialized",Za="mat-ripple-loader-class-name",Pl="mat-ripple-loader-centered",Io="mat-ripple-loader-disabled",Vl=(()=>{class i{_document=s(Z);_animationsDisabled=xe();_globalRippleOptions=s(Ha,{optional:!0});_platform=s(Y);_ngZone=s(W);_injector=s(J);_eventCleanups;_hosts=new Map;constructor(){let e=s(He).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Kc.map(t=>e.listen(this._document,t,this._onInteraction,$c)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Xa,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Za))&&e.setAttribute(Za,t.className||""),t.centered&&e.setAttribute(Pl,""),t.disabled&&e.setAttribute(Io,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(Io,""):e.removeAttribute(Io)}_onInteraction=e=>{let t=Se(e);if(t instanceof HTMLElement){let o=t.closest(`[${Xa}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Za)),e.append(t);let o=this._globalRippleOptions,a=this._animationsDisabled?0:o?.animation?.enterDuration??ci.enterDuration,r=this._animationsDisabled?0:o?.animation?.exitDuration??ci.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(Io),rippleConfig:{centered:e.hasAttribute(Pl),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:r}}},d=new mi(l,this._ngZone,t,this._platform,this._injector),m=!l.rippleDisabled;m&&d.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:d,hasSetUpEvents:m}),e.removeAttribute(Xa)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})();var Yc=new y("MAT_BUTTON_CONFIG");function Ll(i){return i==null?void 0:rt(i)}var zl=(()=>{class i{_elementRef=s(S);_ngZone=s(W);_animationsDisabled=xe();_config=s(Yc,{optional:!0});_focusMonitor=s(Gt);_cleanupClick;_renderer=s(ue);_rippleLoader=s(Vl);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Q(!1,{transform:w});constructor(){s(Ie).load(An);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,o){t&2&&(q("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),qe(o.color?"mat-"+o.color:""),T("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",w],disabled:[2,"disabled","disabled",w],ariaDisabled:[2,"aria-disabled","ariaDisabled",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w],tabIndex:[2,"tabIndex","tabIndex",Ll],_tabindex:[2,"tabindex","_tabindex",Ll],showProgress:[1,"showProgress"]}})}return i})(),rn=(()=>{class i extends zl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["","progressIndicator",""]]],t=["*","[progressIndicator]"];function o(a,r){a&1&&(Re(0,"div",1),U(1,1),Oe())}return D({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[X],ngContentSelectors:t,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,l){r&1&&(pe(e),ot(0,"span",0),U(1),k(2,o,2,0,"div",1),ot(3,"span",2)(4,"span",3)),r&2&&(f(2),E(l.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return i})();var zt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[Oo,ee]})}return i})();function Hl(i){return Error(`Unable to find icon with the name "${i}"`)}function Xc(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function jl(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Ul(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var St=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},Gl=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(e,t,o,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=o}addSvgIcon(e,t,o){return this.addSvgIconInNamespace("",e,t,o)}addSvgIconLiteral(e,t,o){return this.addSvgIconLiteralInNamespace("",e,t,o)}addSvgIconInNamespace(e,t,o,a){return this._addSvgIconConfig(e,t,new St(o,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,o,a){let r=this._sanitizer.sanitize(It.HTML,o);if(!r)throw Ul(o);let l=qt(r);return this._addSvgIconConfig(e,t,new St("",l,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,o){return this._addSvgIconSetConfig(e,new St(t,null,o))}addSvgIconSetLiteralInNamespace(e,t,o){let a=this._sanitizer.sanitize(It.HTML,t);if(!a)throw Ul(t);let r=qt(a);return this._addSvgIconSetConfig(e,new St("",r,o))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=Qc(this._document),this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(It.RESOURCE_URL,e);if(!t)throw jl(e);let o=this._cachedIconsByUrl.get(t);return o?fe(Ao(o)):this._loadSvgIconFromConfig(new St(e,null)).pipe(Pe(a=>this._cachedIconsByUrl.set(t,a)),le(a=>Ao(a)))}getNamedSvgIcon(e,t=""){let o=Wl(t,e),a=this._svgIconConfigs.get(o);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(o,a),this._getSvgFromConfig(a);let r=this._iconSetConfigs.get(t);return r?this._getSvgFromIconSetConfigs(e,r):pr(Hl(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?fe(Ao(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(le(t=>Ao(t)))}_getSvgFromIconSetConfigs(e,t){let o=this._extractIconWithNameFromAnySet(e,t);if(o)return fe(o);let a=t.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(kt(l=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(It.RESOURCE_URL,r.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(m)),fe(null)})));return Ri(a).pipe(le(()=>{let r=this._extractIconWithNameFromAnySet(e,t);if(!r)throw Hl(e);return r}))}_extractIconWithNameFromAnySet(e,t){for(let o=t.length-1;o>=0;o--){let a=t[o];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(a),l=this._extractSvgIconFromSet(r,e,a.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Pe(t=>e.svgText=t),le(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?fe(null):this._fetchIcon(e).pipe(Pe(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,o){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let r=a.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,o);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),o);let l=this._svgElementFromString(qt("<svg></svg>"));return l.appendChild(r),this._setSvgAttributes(l,o)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let o=t.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let t=this._svgElementFromString(qt("<svg></svg>")),o=e.attributes;for(let a=0;a<o.length;a++){let{name:r,value:l}=o[a],d=r.toLowerCase();d!=="id"&&!d.startsWith("on")&&t.setAttribute(r,l)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:o}=e,a=o?.withCredentials??!1;if(!this._httpClient)throw Xc();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let r=this._sanitizer.sanitize(It.RESOURCE_URL,t);if(!r)throw jl(t);let l=this._inProgressUrlFetches.get(r);if(l)return l;let d=this._httpClient.get(r,{responseType:"text",withCredentials:a}).pipe(le(m=>qt(m)),jn(()=>this._inProgressUrlFetches.delete(r)),gr());return this._inProgressUrlFetches.set(r,d),d}_addSvgIconConfig(e,t,o){return this._svgIconConfigs.set(Wl(e,t),o),this}_addSvgIconSetConfig(e,t){let o=this._iconSetConfigs.get(e);return o?o.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let o=0;o<this._resolvers.length;o++){let a=this._resolvers[o](t,e);if(a)return Zc(a)?new St(a.url,null,a.options):new St(a,null)}}static \u0275fac=function(t){return new(t||i)(Un(Bi,8),Un(Hi),Un(Z,8),Un(Ai))};static \u0275prov=Rt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ao(i){return i.cloneNode(!0)}function Wl(i,n){return i+":"+n}function Zc(i){return!!(i.url&&i.options)}function Qc(i){let n=null,e=!1;return i.fonts&&typeof i.fonts.forEach=="function"&&i.fonts.forEach(t=>{let o=t.family.replace(/['"]/g,"").trim().toLowerCase();(o==="material icons"||o.startsWith("material icons "))&&(e=!0),o.startsWith("material symbols rounded")?n="rounded":o.startsWith("material symbols sharp")?n="sharp":o.startsWith("material symbols")&&(n="outlined")}),[n&&!e?`material-symbols-${n}`:"material-icons","mat-ligature-font"]}var Jc=new y("MAT_ICON_DEFAULT_OPTIONS"),em=new y("mat-icon-location",{providedIn:"root",factory:()=>{let i=s(Z),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),ql=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],tm=ql.map(i=>`[${i}]`).join(", "),nm=/^url\(['"]?#(.*?)['"]?\)$/,Vn=(()=>{class i{_elementRef=s(S);_iconRegistry=s(Gl);_location=s(em);_errorHandler=s(Ai);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=we.EMPTY;constructor(){let e=s(new hn("aria-hidden"),{optional:!0}),t=s(Jc,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let o=e.childNodes[t];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),t.forEach(o=>e.classList.add(o)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences,o=e.startsWith("//")?`/.${e}`:e;t&&t.forEach((a,r)=>{a.forEach(l=>{r.setAttribute(l.name,`url('${o}#${l.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(tm),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)ql.forEach(r=>{let l=t[a],d=l.getAttribute(r),m=d?d.match(nm):null;if(m){let c=o.get(l);c||(c=[],o.set(l,c)),c.push({name:r,value:m[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,o]=this._splitIconName(e);t&&(this._svgNamespace=t),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,t).pipe(Et(1)).subscribe(a=>this._setSvgElement(a),a=>{let r=`Error retrieving icon ${t}:${o}! ${a.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){return D({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(o,a){o&2&&(q("data-mat-icon-type",a._usingFontIcon()?"font":"svg")("data-mat-icon-name",a._svgName||a.fontIcon)("data-mat-icon-namespace",a._svgNamespace||a.fontSet)("fontIcon",a._usingFontIcon()?a.fontIcon:null),qe(a.color?"mat-"+a.color:""),T("mat-icon-inline",a.inline)("mat-icon-no-color",a.color!=="primary"&&a.color!=="accent"&&a.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",w],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(o,a){o&1&&(pe(),U(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})})()}return i})(),Ln=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[ee]})}return i})();var Ci=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new C;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,o){this._multiple=n,this._emitChanges=t,this.compareWith=o,e&&e.length&&(n?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(a=>this._getConcreteValue(a)));n.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var To=class{applyChanges(n,e,t,o,a){n.forEachOperation((r,l,d)=>{let m,c;if(r.previousIndex==null){let u=t(r,l,d);m=e.createEmbeddedView(u.templateRef,u.context,u.index),c=et.INSERTED}else d==null?(e.remove(l),c=et.REMOVED):(m=e.get(l),e.move(m,d),c=et.MOVED);a&&a({context:m?.context,operation:c,record:r})})}detach(){}};var im=new y("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(J);return()=>Ct(i)}}),om=new y("MAT_SELECT_CONFIG"),am=new y("MatSelectTrigger"),Ja=class{source;value;constructor(n,e){this.source=n,this.value=e}},Fo=(()=>{class i{_viewportRuler=s(Ke);_changeDetectorRef=s(ge);_elementRef=s(S);_dir=s(Be,{optional:!0});_idGenerator=s(Me);_renderer=s(ue);_parentFormField=s(Xt,{optional:!0});ngControl=s(st,{self:!0,optional:!0});_liveAnnouncer=s(Ea);_defaultOptions=s(om,{optional:!0});_animationsDisabled=xe();_popoverLocation;_initialized=new C;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let o=this.panel.nativeElement,a=vo(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?o.scrollTop=0:o.scrollTop=yo(r.offsetTop,r.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ja(this,e)}_scrollStrategyFactory=s(im);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new C;_errorStateTracker;stateChanges=new C;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=H(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ut.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ni(()=>{let e=this.options;return e?e.changes.pipe(it(e),Nt(()=>Fe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Nt(()=>this.optionSelectionChanges))});openedChange=new $;_openedStream=this.openedChange.pipe(Ne(e=>e),le(()=>{}));_closedStream=this.openedChange.pipe(Ne(e=>!e),le(()=>{}));selectionChange=new $;valueChange=new $;constructor(){let e=s(_o),t=s(Wt,{optional:!0}),o=s(Qn,{optional:!0}),a=s(new hn("tabindex"),{optional:!0}),r=s(wi,{optional:!0}),l=s(go,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Rn(e,l||this.ngControl,o,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ci(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(te(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(te(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(it(null),te(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute("aria-labelledby",e):o.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Et(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,o=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!Ae(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;r.onKeydown(e);let d=this.selected;d&&l!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,o=e.keyCode,a=o===40||o===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(o===13||o===32)&&t.activeItem&&!Ae(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(l?d.select():d.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ae(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch(a){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Fn?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Kt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Fe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(te(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Fe(...this.options.map(t=>t._stateChanges)).pipe(te(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,o)=>this.sortComparator?this.sortComparator(t,o,e):e.indexOf(t)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(o=>o.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Se(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["trigger"],t=["panel"],o=[[["mat-select-trigger"]],"*"],a=["mat-select-trigger","*"];function r(u,v){if(u&1&&(h(0,"span",4),P(1),g()),u&2){let p=x();f(),be(p.placeholder)}}function l(u,v){u&1&&U(0)}function d(u,v){if(u&1&&(h(0,"span",11),P(1),g()),u&2){let p=x(2);f(),be(p.triggerValue)}}function m(u,v){if(u&1&&(h(0,"span",5),k(1,l,1,0)(2,d,2,1,"span",11),g()),u&2){let p=x();f(),E(p.customTrigger?1:2)}}function c(u,v){if(u&1){let p=ye();h(0,"div",12,1),M("keydown",function(G){ne(p);let me=x();return ie(me._handleKeydown(G))}),U(2,1),g()}if(u&2){let p=x();qe(p.panelClass),T("mat-select-panel-animations-enabled",!p._animationsDisabled)("mat-primary",p._parentFormField?.color==="primary")("mat-accent",p._parentFormField?.color==="accent")("mat-warn",p._parentFormField?.color==="warn")("mat-undefined",!p._parentFormField?.color),q("id",p.id+"-panel")("aria-multiselectable",p.multiple)("aria-label",p.ariaLabel||null)("aria-labelledby",p._getPanelAriaLabelledby())}}return D({type:i,selectors:[["mat-select"]],contentQueries:function(v,p,F){if(v&1&&Ze(F,am,5)(F,dt,5)(F,hi,5),v&2){let G;L(G=z())&&(p.customTrigger=G.first),L(G=z())&&(p.options=G),L(G=z())&&(p.optionGroups=G)}},viewQuery:function(v,p){if(v&1&&je(e,5)(t,5)(Ro,5),v&2){let F;L(F=z())&&(p.trigger=F.first),L(F=z())&&(p.panel=F.first),L(F=z())&&(p._overlayDir=F.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(v,p){v&1&&M("keydown",function(G){return p._handleKeydown(G)})("focus",function(){return p._onFocus()})("blur",function(){return p._onBlur()}),v&2&&(q("id",p.id)("tabindex",p.disabled?-1:p.tabIndex)("aria-controls",p.panelOpen?p.id+"-panel":null)("aria-expanded",p.panelOpen)("aria-label",p.ariaLabel||null)("aria-required",p.required.toString())("aria-disabled",p.disabled.toString())("aria-invalid",p.errorState)("aria-activedescendant",p._getAriaActiveDescendant()),T("mat-mdc-select-disabled",p.disabled)("mat-mdc-select-invalid",p.errorState)("mat-mdc-select-required",p.required)("mat-mdc-select-empty",p.empty)("mat-mdc-select-multiple",p.multiple)("mat-select-open",p.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",w],disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",u=>u==null?0:rt(u)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",w],placeholder:"placeholder",required:[2,"required","required",w],multiple:[2,"multiple","multiple",w],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",w],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",rt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",w]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[K([{provide:di,useExisting:i},{provide:fi,useExisting:i}]),ve],ngContentSelectors:a,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(v,p){if(v&1&&(pe(o),h(0,"div",2,0),M("click",function(){return p.open()}),h(3,"div",3),k(4,r,2,1,"span",4)(5,m,3,1,"span",5),g(),h(6,"div",6)(7,"div",7),ut(),h(8,"svg",8),Ce(9,"path",9),g()()()(),Le(10,c,3,16,"ng-template",10),M("detach",function(){return p.close()})("backdropClick",function(){return p.close()})("overlayKeydown",function(G){return p._handleOverlayKeydown(G)})),v&2){let F=at(1);f(3),q("id",p._valueId),f(),E(p.empty?4:5),f(6),R("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",p._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",p._scrollStrategy)("cdkConnectedOverlayOrigin",p._preferredOverlayOrigin||F)("cdkConnectedOverlayPositions",p._positions)("cdkConnectedOverlayWidth",p._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",p._popoverLocation)}},dependencies:[Fn,Ro],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})})()}return i})();var Po=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[an,Pn,ee,wt,Je,Pn]})}return i})();var sm=["inputEl"];function lm(i,n){if(i&1&&(h(0,"mat-option",7),P(1),g()),i&2){let e=n.$implicit;R("value",e),f(),be(e)}}function dm(i,n){if(i&1){let e=ye();h(0,"input",5,0),ln(),M("ngModelChange",function(o){ne(e);let a=x();return ie(a.value.set(o))})("keydown.enter",function(){ne(e);let o=at(2),a=x();return ie(a.onEnterKey(o))})("blur",function(){ne(e);let o=x();return ie(o.commitCurrentValue())}),g(),h(3,"mat-autocomplete",6,1),M("optionSelected",function(o){ne(e);let a=x();return ie(a.onOptionSelected(o.option.value))}),Ht(5,lm,2,2,"mat-option",7,Wn),g()}if(i&2){let e=at(4),t=x();R("required",t.required())("disabled",t.disabled())("placeholder",t.placeholder())("ngModel",t.value())("matAutocomplete",e),q("maxlength",t.maxLength()),dn(),f(3),R("autoActiveFirstOption",!1),f(2),jt(t.displayOptions())}}function cm(i,n){if(i&1&&(h(0,"mat-option",7),P(1),g()),i&2){let e=n.$implicit;R("value",e),f(),be(e)}}function mm(i,n){if(i&1){let e=ye();h(0,"mat-select",8),ln(),M("ngModelChange",function(o){ne(e);let a=x();return ie(a.value.set(o))}),Ht(1,cm,2,2,"mat-option",7,Wn),g()}if(i&2){let e=x();R("required",e.required())("disabled",e.disabled())("placeholder",e.placeholder())("ngModel",e.value()),dn(),f(),jt(e.displayOptions())}}function um(i,n){if(i&1){let e=ye();h(0,"mat-icon",11),M("click",function(o){ne(e);let a=x(2);return ie(a.clearValue(o))})("keydown.enter",function(o){ne(e);let a=x(2);return ie(a.clearValue(o))}),P(1," close "),g()}}function pm(i,n){if(i&1&&(h(0,"mat-icon",12),P(1," arrow_drop_down "),g()),i&2){let e=x(2);T("disabled",e.disabled())}}function fm(i,n){if(i&1&&k(0,um,2,0,"mat-icon",9)(1,pm,2,2,"mat-icon",10),i&2){let e=x();E(e.value()&&!e.disabled()?0:1)}}var Vo=class i{label=Q.required();placeholder=Q("");defaultOptions=Q.required();allowCustom=Q(!1);maxRecent=Q(5);storageKey=Q(null);required=Q(!1);disabled=Q(!1);maxLength=Q(30);value=Vi("");inputEl=Ue("inputEl");optionList=H([]);displayOptions=re(()=>{let n=this.optionList();if(!this.allowCustom())return n;let e=(this.value()??"").trim().toLowerCase();return!e||n.some(t=>t.toLowerCase()===e)?n.slice(0,this.maxRecent()):n.filter(t=>t.toLowerCase().includes(e)).slice(0,this.maxRecent())});constructor(){he(()=>{let n=this.defaultOptions(),e=this.storageKey(),t=this.allowCustom(),o=this.maxRecent();se(()=>{if(t&&e){let a=this.loadFromStorage(e)??[],r=[...a,...n.filter(l=>!a.some(d=>d.toLowerCase()===l.toLowerCase()))];this.optionList.set(r.slice(0,o))}else this.optionList.set([...n])})})}commitCurrentValue(){if(this.disabled()||!this.allowCustom())return;let n=(this.value()??"").trim();if(this.value()!==n&&this.value.set(n),!n)return;let e=n.toLowerCase(),t=[n,...this.optionList().filter(a=>a.toLowerCase()!==e)].slice(0,this.maxRecent());this.optionList.set(t);let o=this.storageKey();o&&this.saveToStorage(o,t)}onOptionSelected(n){this.value.set(n),this.commitCurrentValue()}onEnterKey(n){this.commitCurrentValue(),n.closePanel()}clearValue(n){n.stopPropagation(),!this.disabled()&&(this.value.set(""),this.inputEl()?.nativeElement.focus())}loadFromStorage(n){try{let e=localStorage.getItem(n);if(!e)return null;let t=JSON.parse(e);return Array.isArray(t)?t.filter(o=>typeof o=="string"):null}catch(e){return null}}saveToStorage(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch(t){}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-common-select"]],viewQuery:function(e,t){e&1&&At(t.inputEl,sm,5),e&2&&bt()},inputs:{label:[1,"label"],placeholder:[1,"placeholder"],defaultOptions:[1,"defaultOptions"],allowCustom:[1,"allowCustom"],maxRecent:[1,"maxRecent"],storageKey:[1,"storageKey"],required:[1,"required"],disabled:[1,"disabled"],maxLength:[1,"maxLength"],value:[1,"value"]},outputs:{value:"valueChange"},decls:7,vars:3,consts:[["inputEl","","trigger","matAutocompleteTrigger"],["auto","matAutocomplete"],["appearance","outline","floatLabel","always",1,"common-select-field"],[3,"required","disabled","placeholder","ngModel"],["matIconSuffix",""],["matInput","","type","text",3,"ngModelChange","keydown.enter","blur","required","disabled","placeholder","ngModel","matAutocomplete"],[3,"optionSelected","autoActiveFirstOption"],[3,"value"],[3,"ngModelChange","required","disabled","placeholder","ngModel"],["role","button","tabindex","0","aria-label","\u30AF\u30EA\u30A2",1,"clear-icon"],[1,"dropdown-arrow",3,"disabled"],["role","button","tabindex","0","aria-label","\u30AF\u30EA\u30A2",1,"clear-icon",3,"click","keydown.enter"],[1,"dropdown-arrow"]],template:function(e,t){e&1&&(h(0,"mat-form-field",2)(1,"mat-label"),P(2),g(),k(3,dm,7,7)(4,mm,3,4,"mat-select",3),ft(5,4),k(6,fm,2,1),ht(),g()),e&2&&(f(2),be(t.label()),f(),E(t.allowCustom()?3:4),f(3),E(t.allowCustom()?6:-1))},dependencies:[Sn,wn,oo,Cn,Jn,Je,lt,xt,li,In,On,Fl,Tl,dt,Ya,Po,Fo,Ln,Vn,zt],styles:["[_nghost-%COMP%]{display:block;width:100%;min-width:0}.common-select-field[_ngcontent-%COMP%]{width:100%}.clear-icon[_ngcontent-%COMP%]{cursor:pointer;color:var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, .54));border-radius:50%;transition:background-color .15s ease}.clear-icon[_ngcontent-%COMP%]:hover{background-color:#0000000f}.dropdown-arrow[_ngcontent-%COMP%]{pointer-events:none;color:var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, .54))}.dropdown-arrow.disabled[_ngcontent-%COMP%]{opacity:.38}"]})};var hm=["categorySelect"];function gm(i,n){i&1&&(h(0,"mat-error"),P(1,"\u30BF\u30A4\u30C8\u30EB\u306F\u5FC5\u9808\u5165\u529B\u3067\u3059"),g())}function bm(i,n){i&1&&(h(0,"mat-error"),P(1,"\u30BF\u30A4\u30C8\u30EB\u306F20\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),g())}function _m(i,n){if(i&1&&(k(0,gm,2,0,"mat-error"),k(1,bm,2,0,"mat-error")),i&2){let e=x();E(e.title().trim()?-1:0),f(),E(e.title().length>20?1:-1)}}function vm(i,n){if(i&1){let e=ye();h(0,"div",5)(1,"app-common-select",10),pn("valueChange",function(o){ne(e);let a=x();return un(a.status,o)||(a.status=o),ie(o)}),g(),h(2,"app-common-select",11,0),pn("valueChange",function(o){ne(e);let a=x();return un(a.category,o)||(a.category=o),ie(o)}),g()()}if(i&2){let e=x();f(),R("defaultOptions",e.statusOptions),mn("value",e.status),f(),R("defaultOptions",e.defaultCategories)("allowCustom",!0),mn("value",e.category)}}var zo=class i{categorySelect=Ue("categorySelect");isVisible=Q(!1);showFilter=Q(!0);editData=Q(null);isInvalid=Vi(!0);submitTrigger=Q(!1);save=_t();statusOptions=["","\u4E88\u5B9A","\u9014\u4E2D","\u5B8C\u4E86"];defaultCategories=["","Memo","\u5BB6\u8A08\u7C3F","\u305D\u306E\u4ED6"];initialValues=re(()=>{let n=this.editData();return{title:n?.title??"",content:n?.content??"",status:n?.status??"",category:n?.category??""}});title=fn({source:()=>({init:this.initialValues(),visible:this.isVisible()}),computation:n=>n.init.title});content=fn({source:()=>({init:this.initialValues(),visible:this.isVisible()}),computation:n=>n.init.content});status=fn({source:()=>({init:this.initialValues(),visible:this.isVisible()}),computation:n=>n.init.status});category=fn({source:()=>({init:this.initialValues(),visible:this.isVisible()}),computation:n=>n.init.category});isDirty=re(()=>{let n=this.initialValues();return this.title()!==n.title||this.content()!==n.content||this.status()!==n.status||this.category()!==n.category});isTitleInvalid=re(()=>{let n=this.title();return!n.trim()||n.length>20});constructor(){he(()=>{let n=this.isTitleInvalid()||!this.isDirty();this.isInvalid.set(n)}),he(()=>{this.submitTrigger()&&se(()=>{this.isTitleInvalid()||(this.categorySelect()?.commitCurrentValue(),this.save.emit({title:this.title().trim(),content:this.content().trim(),status:this.status(),category:this.category().trim()||"\u305D\u306E\u4ED6"}))})})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-memo-form"]],viewQuery:function(e,t){e&1&&At(t.categorySelect,hm,5),e&2&&bt()},inputs:{isVisible:[1,"isVisible"],showFilter:[1,"showFilter"],editData:[1,"editData"],isInvalid:[1,"isInvalid"],submitTrigger:[1,"submitTrigger"]},outputs:{isInvalid:"isInvalidChange",save:"save"},decls:15,vars:7,consts:[["categorySelect",""],["libScrollTop","",1,"form-scroll-container","feature-scroll-container"],[1,"memo-form","feature-flex-body","compact-form",3,"submit"],["appearance","outline",1,"full-width"],["matInput","","required","","maxlength","100","name","memoTitle","placeholder","\u30E1\u30E2\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B",3,"ngModelChange","ngModel"],[1,"status-category-row"],["appearance","outline",1,"auto-grow-field"],[1,"textarea-grow-wrap"],["matInput","","name","memoContent","placeholder","\u30E1\u30E2\u306E\u5185\u5BB9\u3092\u5165\u529B",3,"ngModelChange","ngModel"],["aria-hidden","true",1,"textarea-mirror"],["label","status",3,"valueChange","defaultOptions","value"],["label","category","storageKey","memo_recent_categories",3,"valueChange","defaultOptions","allowCustom","value"]],template:function(e,t){e&1&&(h(0,"div",1)(1,"form",2),M("submit",function(a){return a.preventDefault()}),h(2,"mat-form-field",3)(3,"mat-label"),P(4,"\u30BF\u30A4\u30C8\u30EB"),g(),h(5,"input",4),ln(),M("ngModelChange",function(a){return t.title.set(a)}),g(),k(6,_m,2,2),g(),k(7,vm,4,5,"div",5),h(8,"mat-form-field",6)(9,"mat-label"),P(10,"\u5185\u5BB9"),g(),h(11,"div",7)(12,"textarea",8),ln(),pn("ngModelChange",function(a){return un(t.content,a)||(t.content=a),a}),g(),h(13,"div",9),P(14),g()()()()()),e&2&&(f(2),T("mat-form-field-invalid",t.isDirty()&&t.isTitleInvalid()),f(3),R("ngModel",t.title()),dn(),f(),E(t.isDirty()&&t.isTitleInvalid()?6:-1),f(),E(t.showFilter()?7:-1),f(5),mn("ngModel",t.content),dn(),f(2),be(t.content()+`
`))},dependencies:[Sn,us,wn,oo,cs,Cn,va,Jn,Wt,Je,lt,xt,Pa,In,On,Ft,Vo],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.form-scroll-container[_ngcontent-%COMP%]{position:relative;background-color:var(--%NS%mat-sys-surface-container-low, #f9f9f9);border-radius:0 0 8px 8px}.memo-form[_ngcontent-%COMP%]{gap:.75rem;padding:1rem 0}.memo-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:first-of-type{flex:0 0 auto;width:100%}.status-category-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:115px minmax(0,1fr);gap:8px;width:100%}.status-category-row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{min-width:0}"]})};var ym=20;var xm=new y("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(J);return()=>Ct(i,{scrollThrottle:ym})}}),wm=new y("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var $l="tooltip-panel",Cm={passive:!0},Sm=8,Mm=8,Dm=24,km=200,Si=(()=>{class i{_elementRef=s(S);_ngZone=s(W);_platform=s(Y);_ariaDescriber=s(ho);_focusMonitor=s(Gt);_dir=s(Be);_injector=s(J);_viewContainerRef=s(Ve);_mediaMatcher=s(kn);_document=s(Z);_renderer=s(ue);_animationsDisabled=xe();_defaultOptions=s(wm,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Kl;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=yt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=yt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Dn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Dn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new C;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Sm}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(te(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(t);this._detach(),this._portal=this._portal||new yi(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=o.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(te(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof S)return this._overlayRef;this._detach()}let t=this._injector.get(Tn).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${$l}`,a=nn(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(te(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=on(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(xm)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(te(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(te(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(te(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(te(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,o=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(A(A({},o.main),a.main)),this._addOffset(A(A({},o.fallback),a.fallback))])}_addOffset(e){let t=Mm,o=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=o?-t:t:e.originX==="end"&&(e.offsetX=o?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"||t=="below"?o={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={originX:"end",originY:"center"});let{x:a,y:r}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:a,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"?o={overlayX:"center",overlayY:"bottom"}:t=="below"?o={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={overlayX:"start",overlayY:"center"});let{x:a,y:r}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:a,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ee(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:o,originY:a}=e,r;if(t==="center"?this._dir&&this._dir.value==="rtl"?r=o==="end"?"left":"right":r=o==="start"?"left":"right":r=t==="bottom"&&a==="top"?"above":"below",r!==this._currentPosition){let l=this._overlayRef;if(l){let d=`${this._cssClassPrefix}-${$l}-`;l.removePanelClass(d+this._currentPosition),l.addPanelClass(d+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],o=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;t!==o&&!o.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Cm))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,o=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(e==="on"||!t.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ee({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ae(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,o){t&2&&T("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Kl=(()=>{class i{_changeDetectorRef=s(ge);_elementRef=s(S);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=xe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new C;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Dm&&e.width>=km}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,o=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:o),t.classList.add(e?o:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(t);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["tooltip"];return D({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(o,a){if(o&1&&je(e,7),o&2){let r;L(r=z())&&(a._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(o,a){o&1&&M("mouseleave",function(l){return a._handleMouseLeave(l)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(o,a){o&1&&(Re(0,"div",1,0),Dr("animationend",function(l){return a._handleAnimationEnd(l)}),Re(2,"div",2),P(3),Oe()()),o&2&&(qe(a.tooltipClass),T("mdc-tooltip--multiline",a._isMultiline),f(3),be(a.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})})()}return i})();var Bo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[Na,an,ee,wt]})}return i})();var Nm=(()=>{class i{changes=new C;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,o)=>{if(o==0||t==0)return`0 of ${o}`;o=Math.max(o,0);let a=e*t,r=a<o?Math.min(a+t,o):a+t;return`${a+1} \u2013 ${r} of ${o}`};static \u0275fac=function(t){return new(t||i)};static \u0275prov=V({token:i,factory:i.\u0275fac})}return i})(),Rm=50;var Om=new y("MAT_PAGINATOR_DEFAULT_OPTIONS"),zn=(()=>{class i{_intl=s(Nm);_changeDetectorRef=s(ge);_formFieldAppearance;_pageSizeLabelId=s(Me).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new Ei(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>rt(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new $;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=s(Om,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:o,pageSizeOptions:a,hidePageSize:r,showFirstLastButtons:l}=t;o!=null&&(this._pageSize=o),a!=null&&(this._pageSizeOptions=a),r!=null&&(this.hidePageSize=r),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,o=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(o)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Rm),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){function e(d,m){if(d&1&&(h(0,"mat-option",17),P(1),g()),d&2){let c=m.$implicit;R("value",c),f(),Qe(" ",c," ")}}function t(d,m){if(d&1){let c=ye();h(0,"mat-form-field",14)(1,"mat-select",16,0),M("selectionChange",function(v){ne(c);let p=x(2);return ie(p._changePageSize(v.value))}),Ht(3,e,2,2,"mat-option",17,Wn),g(),h(5,"div",18),M("click",function(){ne(c);let v=at(2);return ie(v.open())}),g()()}if(d&2){let c=x(2);R("appearance",c._formFieldAppearance)("color",c.color),f(),R("value",c.pageSize)("disabled",c.disabled),Mr("aria-labelledby",c._pageSizeLabelId),R("panelClass",c.selectConfig.panelClass||"")("disableOptionCentering",c.selectConfig.disableOptionCentering),f(2),jt(c._displayedPageSizeOptions)}}function o(d,m){if(d&1&&(h(0,"div",15),P(1),g()),d&2){let c=x(2);f(),be(c.pageSize)}}function a(d,m){if(d&1&&(h(0,"div",3)(1,"div",13),P(2),g(),k(3,t,6,7,"mat-form-field",14),k(4,o,2,1,"div",15),g()),d&2){let c=x();f(),q("id",c._pageSizeLabelId),f(),Qe(" ",c._intl.itemsPerPageLabel," "),f(),E(c._displayedPageSizeOptions.length>1?3:-1),f(),E(c._displayedPageSizeOptions.length<=1?4:-1)}}function r(d,m){if(d&1){let c=ye();h(0,"button",19),M("click",function(){ne(c);let v=x();return ie(v._buttonClicked(0,v._previousButtonsDisabled()))}),ut(),h(1,"svg",8),Ce(2,"path",20),g()()}if(d&2){let c=x();R("matTooltip",c._intl.firstPageLabel)("matTooltipDisabled",c._previousButtonsDisabled())("disabled",c._previousButtonsDisabled())("tabindex",c._previousButtonsDisabled()?-1:null),q("aria-label",c._intl.firstPageLabel)}}function l(d,m){if(d&1){let c=ye();h(0,"button",21),M("click",function(){ne(c);let v=x();return ie(v._buttonClicked(v.getNumberOfPages()-1,v._nextButtonsDisabled()))}),ut(),h(1,"svg",8),Ce(2,"path",22),g()()}if(d&2){let c=x();R("matTooltip",c._intl.lastPageLabel)("matTooltipDisabled",c._nextButtonsDisabled())("disabled",c._nextButtonsDisabled())("tabindex",c._nextButtonsDisabled()?-1:null),q("aria-label",c._intl.lastPageLabel)}}return D({type:i,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",rt],length:[2,"length","length",rt],pageSize:[2,"pageSize","pageSize",rt],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",w],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",w],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",w]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(m,c){m&1&&(h(0,"div",1)(1,"div",2),k(2,a,5,4,"div",3),h(3,"div",4)(4,"div",5),P(5),g(),k(6,r,3,5,"button",6),h(7,"button",7),M("click",function(){return c._buttonClicked(c.pageIndex-1,c._previousButtonsDisabled())}),ut(),h(8,"svg",8),Ce(9,"path",9),g()(),_r(),h(10,"button",10),M("click",function(){return c._buttonClicked(c.pageIndex+1,c._nextButtonsDisabled())}),ut(),h(11,"svg",8),Ce(12,"path",11),g()(),k(13,l,3,5,"button",12),g()()()),m&2&&(f(2),E(c.hidePageSize?-1:2),f(3),Qe(" ",c._intl.getRangeLabel(c.pageIndex,c.pageSize,c.length)," "),f(),E(c.showFirstLastButtons?6:-1),f(),R("matTooltip",c._intl.previousPageLabel)("matTooltipDisabled",c._previousButtonsDisabled())("disabled",c._previousButtonsDisabled())("tabindex",c._previousButtonsDisabled()?-1:null),q("aria-label",c._intl.previousPageLabel),f(3),R("matTooltip",c._intl.nextPageLabel)("matTooltipDisabled",c._nextButtonsDisabled())("disabled",c._nextButtonsDisabled())("tabindex",c._nextButtonsDisabled()?-1:null),q("aria-label",c._intl.nextPageLabel),f(3),E(c.showFirstLastButtons?13:-1))},dependencies:[lt,Fo,dt,rn,Si],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2})})()}return i})(),Yl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[zt,Po,Bo,zn]})}return i})();var tt=new y("CDK_TABLE");var Uo=(()=>{class i{template=s(Ge);static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),Wo=(()=>{class i{template=s(Ge);static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),Jl=(()=>{class i{template=s(Ge);static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),Bt=(()=>{class i{_table=s(tt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,o,a){if(t&1&&Ze(a,Uo,5)(a,Wo,5)(a,Jl,5),t&2){let r;L(r=z())&&(o.cell=r.first),L(r=z())&&(o.headerCell=r.first),L(r=z())&&(o.footerCell=r.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",w],stickyEnd:[2,"stickyEnd","stickyEnd",w]}})}return i})(),jo=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},ed=(()=>{class i extends jo{constructor(){super(s(Bt),s(S))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[X]})}return i})();var td=(()=>{class i extends jo{constructor(){let e=s(Bt),t=s(S);super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute("role",o)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[X]})}return i})();var tr=(()=>{class i{template=s(Ge);_differs=s(Li);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Di?e.headerCell.template:this instanceof nr?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,features:[ve]})}return i})(),Di=(()=>{class i extends tr{_table=s(tt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",w]},features:[X,ve]})}return i})(),nr=(()=>{class i extends tr{_table=s(tt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",w]},features:[X,ve]})}return i})(),Go=(()=>{class i extends tr{_table=s(tt,{optional:!0});when;static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[X]})}return i})(),sn=(()=>{class i{_viewContainer=s(Ve);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),ir=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ze(0,0)},dependencies:[sn],encapsulation:2,changeDetection:1})}return i})();var or=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ze(0,0)},dependencies:[sn],encapsulation:2,changeDetection:1})}return i})(),qo=(()=>{class i{templateRef=s(Ge);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),Xl=["top","bottom","left","right"],er=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,t=!0,o=!0,a,r,l){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=o,this.direction=a,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let t=[];for(let o of n)o.nodeType===o.ELEMENT_NODE&&t.push(o,...Array.from(o.children));Ee({write:()=>{for(let o of t)this._removeStickyStyle(o,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,t,o=!0,a=!0){if(!n.length||!this._isBrowser||!(e.some(me=>me)||t.some(me=>me))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=n[0],l=r.children.length,d=this.direction==="rtl",m=d?"right":"left",c=d?"left":"right",u=e.lastIndexOf(!0),v=t.indexOf(!0),p,F,G;a&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...t]}),Ee({earlyRead:()=>{p=this._getCellWidths(r,o),F=this._getStickyStartColumnPositions(p,e),G=this._getStickyEndColumnPositions(p,t)},write:()=>{for(let me of n)for(let De=0;De<l;De++){let Mt=me.children[De];e[De]&&this._addStickyStyle(Mt,m,F[De],De===u),t[De]&&this._addStickyStyle(Mt,c,G[De],De===v)}this._positionListener&&p.some(me=>!!me)&&(this._positionListener.stickyColumnsUpdated({sizes:u===-1?[]:p.slice(0,u+1).map((me,De)=>e[De]?me:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:v===-1?[]:p.slice(v).map((me,De)=>t[De+v]?me:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,t){if(!this._isBrowser)return;let o=t==="bottom"?n.slice().reverse():n,a=t==="bottom"?e.slice().reverse():e,r=[],l=[],d=[];Ee({earlyRead:()=>{for(let m=0,c=0;m<o.length;m++){if(!a[m])continue;r[m]=c;let u=o[m];d[m]=this._isNativeHtmlTable?Array.from(u.children):[u];let v=this._retrieveElementSize(u).height;c+=v,l[m]=v}},write:()=>{let m=a.lastIndexOf(!0);for(let c=0;c<o.length;c++){if(!a[c])continue;let u=r[c],v=c===m;for(let p of d[c])this._addStickyStyle(p,t,u,v)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&Ee({write:()=>{let t=n.querySelector("tfoot");t&&(e.some(o=>!o)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let o of e)n.style[o]="",n.classList.remove(this._borderCellCss[o]);Xl.some(o=>e.indexOf(o)===-1&&n.style[o])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,t,o){n.classList.add(this._stickCellCss),o&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${t}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},t=0;for(let o of Xl)n.style[o]&&(t+=e[o]);return t?`${t}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],o=n.children;for(let a=0;a<o.length;a++){let r=o[a];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(n,e){let t=[],o=0;for(let a=0;a<n.length;a++)e[a]&&(t[a]=o,o+=n[a]);return t}_getStickyEndColumnPositions(n,e){let t=[],o=0;for(let a=n.length;a>0;a--)e[a]&&(t[a]=o,o+=n[a]);return t}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let t=n.getBoundingClientRect(),o={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(n,o),this._resizeObserver.observe(n,{box:"border-box"})),o}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(o=>!e.has(o));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(n){let e=!1;for(let t of n){let o=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};o.width!==this._elemSizeCache.get(t.target)?.width&&Am(t.target)&&(e=!0),this._elemSizeCache.set(t.target,o)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Am(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>i.classList.contains(n))}function Zl(i){return Error(`Could not find column with id "${i}".`)}var Mi=new y("STICKY_POSITIONING_LISTENER");var ar=(()=>{class i{viewContainer=s(Ve);elementRef=s(S);constructor(){let e=s(tt);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","rowOutlet",""]]})}return i})(),rr=(()=>{class i{viewContainer=s(Ve);elementRef=s(S);constructor(){let e=s(tt);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),sr=(()=>{class i{viewContainer=s(Ve);elementRef=s(S);constructor(){let e=s(tt);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),lr=(()=>{class i{viewContainer=s(Ve);elementRef=s(S);constructor(){let e=s(tt);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),dr=(()=>{class i{_differs=s(Li);_changeDetectorRef=s(ge);_elementRef=s(S);_dir=s(Be,{optional:!0});_platform=s(Y);_viewRepeater;_viewportRuler=s(Ke);_injector=s(J);_virtualScrollViewport=s(ml,{optional:!0,host:!0});_positionListener=s(Mi,{optional:!0})||s(Mi,{optional:!0,skipSelf:!0});_document=s(Z);_data;_renderedRange;_onDestroy=new C;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_rowDefsByView=new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new C;_footerRowStickyUpdates=new C;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new C;_dataStream=new C;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new $;viewChange=new Dt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){s(new hn("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(te(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new xo:new To,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),bi(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(o,a,r)=>this._getEmbeddedViewArgs(o.item,r),o=>o.item.data,o=>{if(o.operation===et.INSERTED&&o.context){this._renderCellTemplateForItem(o.record.item.rowDef,o.context);let a=t.get(o.record.currentIndex);this._rowDefsByView.set(a,o.record.item.rowDef)}}),e.forEachIdentityChange(o=>{let a=o.currentIndex,r=t.get(a);if(this._rowDefsByView.get(r)!==o.item.rowDef){t.remove(a);let l=this._renderRow(this._rowOutlet,o.item.rowDef,a,{$implicit:o.item.data});this._rowDefsByView.set(l,o.item.rowDef)}else r.context.$implicit=o.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=Ql(this._headerRowOutlet,"thead");o&&(o.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=Ql(this._footerRowOutlet,"tfoot");o&&(o.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,r)=>{this._addStickyColumnStyles([a],this._headerRowDefs[r])}),this._rowDefs.forEach(a=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===a&&r.push(t[l]);this._addStickyColumnStyles(r,a)}),o.forEach((a,r)=>{this._addStickyColumnStyles([a],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let r=this._data[a],l=this._getRenderRowsForData(r,a,o.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let d=0;d<l.length;d++){let m=l[d],c=this._cachedRenderRowsMap.get(m.data);c.has(m.rowDef)?c.get(m.rowDef).push(m):c.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,t,o){return this._getRowDefs(e,t).map(r=>{let l=o&&o.has(r)?o.get(r):[];if(l.length){let d=l.shift();return d.dataIndex=t,d}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ho(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Ho(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ho(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ho(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,l)=>{let d=!!l.getColumnsDiff();return r||d},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(e,!1);o&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||o||a}_switchDataSource(e){this._data=[],bi(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;bi(this.dataSource)?e=this.dataSource.connect(this):Qo(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=fe(this.dataSource)),this._renderChangeSubscription=nt([e,this.viewChange]).pipe(te(this._onDestroy)).subscribe(([t,o])=>{this._data=t||[],this._renderedRange=o,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let o=Array.from(t?.columns||[]).map(l=>{let d=this._columnDefsByName.get(l);if(!d)throw Zl(l);return d}),a=o.map(l=>l.sticky),r=o.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let o=0;o<e.viewContainer.length;o++){let a=e.viewContainer.get(o);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;a&&o.push(a)}return o.length,o}_getEmbeddedViewArgs(e,t){let o=e.rowDef,a={$implicit:e.data};return{templateRef:o.template,context:a,index:t}}_renderRow(e,t,o,a={}){let r=e.viewContainer.createEmbeddedView(t.template,a,o);return this._renderCellTemplateForItem(t,a),r}_renderCellTemplateForItem(e,t){for(let o of this._getCellTemplates(e))sn.mostRecentCellOutlet&&sn.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,o=e.length;t<o;t++){let r=e.get(t).context;r.count=o,r.first=t===0,r.last=t===o-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let o=this._columnDefsByName.get(t);if(!o)throw Zl(t);return e.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,o)=>t||o.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new er(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:fe()).pipe(te(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Zo:Xo;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Hn(0,t),te(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(o,a)=>this._measureRangeSize(o,a)}),nt([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(te(this._onDestroy)).subscribe(([o,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l){let d=a.offsets[r],m=o!==0?Math.max(o-d,d):-d;for(let c of l)c.style.top=`${-m}px`}}}),nt([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(te(this._onDestroy)).subscribe(([o,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l)for(let d of l)d.style.bottom=`${o+a.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(t){let a=o.createEmbeddedView(e.templateRef),r=a.rootNodes[0];if(a.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute("role","row"),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let d=0;d<l.length;d++)l[d].classList.add(...e._cellClassNames)}}else o.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let o=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<o.start||e.end>o.end;let r=e.start-o.start,l=e.end-e.start,d,m;for(let v=0;v<l;v++){let p=a.get(v+r);if(p&&p.rootNodes.length){d=m=p.rootNodes[0];break}}for(let v=l-1;v>-1;v--){let p=a.get(v+r);if(p&&p.rootNodes.length){m=p.rootNodes[p.rootNodes.length-1];break}}let c=d?.getBoundingClientRect?.(),u=m?.getBoundingClientRect?.();return c&&u?u.bottom-c.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=[[["caption"]],[["colgroup"],["col"]],"*"],t=["caption","colgroup, col","*"];function o(l,d){l&1&&U(0,2)}function a(l,d){l&1&&(h(0,"thead",0),ze(1,1),g(),h(2,"tbody",0),ze(3,2)(4,3),g(),h(5,"tfoot",0),ze(6,4),g())}function r(l,d){l&1&&ze(0,1)(1,2)(2,3)(3,4)}return D({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(d,m,c){if(d&1&&Ze(c,qo,5)(c,Bt,5)(c,Go,5)(c,Di,5)(c,nr,5),d&2){let u;L(u=z())&&(m._noDataRow=u.first),L(u=z())&&(m._contentColumnDefs=u),L(u=z())&&(m._contentRowDefs=u),L(u=z())&&(m._contentHeaderRowDefs=u),L(u=z())&&(m._contentFooterRowDefs=u)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(d,m){d&2&&T("cdk-table-fixed-layout",m.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",w],fixedLayout:[2,"fixedLayout","fixedLayout",w],recycleRows:[2,"recycleRows","recycleRows",w]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[K([{provide:tt,useExisting:i},{provide:Mi,useValue:null}])],ngContentSelectors:t,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(d,m){d&1&&(pe(e),U(0),U(1,1),k(2,o,1,0),k(3,a,7,0)(4,r,4,0)),d&2&&(f(2),E(m._isServer?2:-1),f(),E(m._isNativeHtmlTable?3:4))},dependencies:[rr,ar,lr,sr],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return i})();function Ho(i,n){return i.concat(Array.from(n))}function Ql(i,n){let e=n.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let o=t.nodeType===1?t.nodeName:null;if(o===e)return t;if(o==="TABLE")break;t=t.parentNode}return null}var nd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[_i]})}return i})();var id=new y("MAT_SORT_DEFAULT_OPTIONS"),Bn=(()=>{class i{_defaultOptions;_initializedStream=new Ei(1);sortables=new Map;_stateChanges=new C;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new $;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,o=Tm(e.start||this.start,t),a=o.indexOf(this.direction)+1;return a>=o.length&&(a=0),o[a]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(t){return new(t||i)(ce(id,8))};static \u0275dir=_({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",w],disabled:[2,"matSortDisabled","disabled",w]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[ve]})}return i})();function Tm(i,n){let e=["asc","desc"];return i=="desc"&&e.reverse(),n||e.push(""),e}var od=(()=>{class i{_sort=s(Bn,{optional:!0});_columnDef=s(Bt,{optional:!0});_changeDetectorRef=s(ge);_focusMonitor=s(Gt);_elementRef=s(S);_ariaDescriber=s(ho,{optional:!0});_renderChanges;_animationsDisabled=xe();_recentlyCleared=H(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){s(Ie).load(An);let e=s(id,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Fe(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["","matSortHeaderIcon",""]]],t=["*","[matSortHeaderIcon]"];function o(r,l){r&1&&(ut(),Re(0,"svg",3),ot(1,"path",4),Oe())}function a(r,l){r&1&&(Re(0,"div",2),U(1,1,null,o,2,0),Oe())}return D({type:i,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(l,d){l&1&&M("click",function(){return d._toggleOnInteraction()})("keydown",function(c){return d._handleKeydown(c)})("mouseleave",function(){return d._recentlyCleared.set(null)}),l&2&&(q("aria-sort",d._getAriaSortAttribute()),T("mat-sort-header-disabled",d._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",w],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",w]},exportAs:["matSortHeader"],ngContentSelectors:t,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(l,d){l&1&&(pe(e),Re(0,"div",0)(1,"div",1),U(2),Oe(),k(3,a,3,0,"div",2),Oe()),l&2&&(T("mat-sort-header-sorted",d._isSorted())("mat-sort-header-position-before",d.arrowPosition==="before")("mat-sort-header-descending",d._sort.direction==="desc")("mat-sort-header-ascending",d._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",d._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",d._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",d._animationsDisabled),q("tabindex",d._isDisabled()?null:0)("role",d._isDisabled()?null:"button"),f(3),E(d._renderArrow()?3:-1))},styles:[`.mat-sort-header {
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
`],encapsulation:2})})()}return i})(),ad=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[ee]})}return i})();var rd=(()=>{class i extends dr{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275cmp=(function(){let e=[[["caption"]],[["colgroup"],["col"]],"*"],t=["caption","colgroup, col","*"];function o(l,d){l&1&&U(0,2)}function a(l,d){l&1&&(h(0,"thead",0),ze(1,1),g(),h(2,"tbody",2),ze(3,3)(4,4),g(),h(5,"tfoot",0),ze(6,5),g())}function r(l,d){l&1&&ze(0,1)(1,3)(2,4)(3,5)}return D({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(d,m){d&2&&T("mat-table-fixed-layout",m.fixedLayout)},exportAs:["matTable"],features:[K([{provide:dr,useExisting:i},{provide:tt,useExisting:i},{provide:Mi,useValue:null}]),X],ngContentSelectors:t,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(d,m){d&1&&(pe(e),U(0),U(1,1),k(2,o,1,0),k(3,a,7,0)(4,r,4,0)),d&2&&(f(2),E(m._isServer?2:-1),f(),E(m._isNativeHtmlTable?3:4))},dependencies:[rr,ar,lr,sr],styles:[`.mat-mdc-table-sticky {
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
`],encapsulation:2,changeDetection:1})})()}return i})(),sd=(()=>{class i extends Uo{static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matCellDef",""]],features:[K([{provide:Uo,useExisting:i}]),X]})}return i})(),ld=(()=>{class i extends Wo{static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matHeaderCellDef",""]],features:[K([{provide:Wo,useExisting:i}]),X]})}return i})();var dd=(()=>{class i extends Bt{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[K([{provide:Bt,useExisting:i}]),X]})}return i})(),cd=(()=>{class i extends ed{static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[X]})}return i})();var md=(()=>{class i extends td{static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[X]})}return i})();var ud=(()=>{class i extends Di{static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",w]},features:[K([{provide:Di,useExisting:i}]),X]})}return i})();var pd=(()=>{class i extends Go{static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275dir=_({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[K([{provide:Go,useExisting:i}]),X]})}return i})(),fd=(()=>{class i extends ir{static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275cmp=D({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[K([{provide:ir,useExisting:i}]),X],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ze(0,0)},dependencies:[sn],encapsulation:2,changeDetection:1})}return i})();var hd=(()=>{class i extends or{static \u0275fac=(()=>{let e;return function(o){return(e||(e=de(i)))(o||i)}})();static \u0275cmp=D({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[K([{provide:or,useExisting:i}]),X],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&ze(0,0)},dependencies:[sn],encapsulation:2,changeDetection:1})}return i})(),gd=(()=>{class i extends qo{_cellSelector="td, mat-cell, [mat-cell], .mat-cell";constructor(){super(),this._contentClassNames.push("mat-mdc-no-data-row","mat-mdc-row","mdc-data-table__row"),this._cellClassNames.push("mat-mdc-cell","mdc-data-table__cell","mat-no-data-cell")}static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["ng-template","matNoDataRow",""]],features:[K([{provide:qo,useExisting:i}]),X]})}return i})();var bd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[nd,ee]})}return i})(),Pm=9007199254740991,$o=class extends gi{_data;_renderData=new Dt([]);_filter=new Dt("");_internalPageChanges=new C;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(n,e)=>{let t=n[e];if(ao(t)){let o=Number(t);return o<Pm?o:t}return t};sortData=(n,e)=>{let t=e.active,o=e.direction;return!t||o==""?n:n.sort((a,r)=>{let l=this.sortingDataAccessor(a,t),d=this.sortingDataAccessor(r,t),m=typeof l,c=typeof d;m!==c&&(m==="number"&&(l+=""),c==="number"&&(d+=""));let u=0;return l!=null&&d!=null?l>d?u=1:l<d&&(u=-1):l!=null?u=1:d!=null&&(u=-1),u*(o=="asc"?1:-1)})};filterPredicate=(n,e)=>{let t=e.trim().toLowerCase();return Object.values(n).some(o=>`${o}`.toLowerCase().includes(t))};constructor(n=[]){super(),this._data=new Dt(n),this._updateChangeSubscription()}_updateChangeSubscription(){let n=this._sort?Fe(this._sort.sortChange,this._sort.initialized):fe(null),e=this._paginator?Fe(this._paginator.page,this._internalPageChanges,this._paginator.initialized):fe(null),t=this._data,o=nt([t,this._filter]).pipe(le(([l])=>this._filterData(l))),a=nt([o,n]).pipe(le(([l])=>this._orderData(l))),r=nt([a,e]).pipe(le(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(l=>this._renderData.next(l))}_filterData(n){return this.filteredData=this.filter==null||this.filter===""?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;let e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,o=Math.min(e.pageIndex,t);o!==e.pageIndex&&(e.pageIndex=o,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var Lm=()=>[10,20,50];function zm(i,n){if(i&1){let e=ye();h(0,"button",22),M("click",function(){ne(e);let o=x();return ie(o.clearFilter())}),h(1,"mat-icon"),P(2,"close"),g()()}}function Bm(i,n){i&1&&(h(0,"th",23),P(1,"No"),g())}function Hm(i,n){if(i&1&&(h(0,"td",24),P(1),g()),i&2){let e=n.index,t=x();f(),Qe(" ",t.matDataSource.paginator?t.matDataSource.paginator.pageIndex*t.matDataSource.paginator.pageSize+e+1:e+1," ")}}function jm(i,n){i&1&&(h(0,"th",25),P(1,"\u30BF\u30A4\u30C8\u30EB"),g())}function Um(i,n){if(i&1&&(h(0,"td",26)(1,"div",27),P(2),g()()),i&2){let e=n.$implicit;R("title",e.title),f(2),Qe(" ",e.title||"(\u7121\u984C)"," ")}}function Wm(i,n){i&1&&(h(0,"th",28),P(1," \u66F4\u65B0\u65E5 "),g())}function Gm(i,n){if(i&1&&(h(0,"div"),P(1),aa(2,"date"),g(),h(3,"div"),P(4),aa(5,"date"),g()),i&2){let e=x().$implicit;f(),be(ra(2,2,e.updatedAt,"yyyy/MM/dd")),f(3),be(ra(5,5,e.updatedAt,"HH:mm"))}}function qm(i,n){i&1&&P(0," - ")}function $m(i,n){if(i&1&&(h(0,"td",29),k(1,Gm,6,8)(2,qm,1,0),g()),i&2){let e=n.$implicit;f(),E(e.updatedAt?1:2)}}function Km(i,n){i&1&&(h(0,"th",30),P(1,"\u64CD\u4F5C"),g())}function Ym(i,n){if(i&1){let e=ye();h(0,"td",31)(1,"button",32),M("click",function(o){let a=ne(e).$implicit,r=x();return o.stopPropagation(),ie(r.delete.emit(a._id))}),h(2,"mat-icon"),P(3,"delete"),g()()()}}function Xm(i,n){i&1&&Ce(0,"tr",33)}function Zm(i,n){if(i&1){let e=ye();h(0,"tr",34),M("click",function(){let o=ne(e).$implicit,a=x();return ie(a.editClick.emit(o._id))}),g()}if(i&2){let e=n.$implicit,t=x();T("selected-row",e._id===t.selectedMemoId())("focused-row",e._id===t.selectedMemoId()),q("data-id",e._id)}}function Qm(i,n){if(i&1&&(h(0,"tr",35)(1,"td",36),P(2," \u30E1\u30E2\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u65B0\u3057\u3044\u30E1\u30E2\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002 "),g()()),i&2){let e=x();f(),q("colspan",e.displayedColumns.length)}}var Ko=class i{stateService=s(Tt);dataSource=Q([]);showFilter=Q(!1);showPaginator=Q(!1);isVisible=Q(!0);editClick=_t();delete=_t();matDataSource=new $o([]);displayedColumns=["index","title","updatedAt","actions"];filterValue=H("");selectedMemoId=this.stateService.selectedMemoId;sort=Ue(Bn);paginator=Ue(zn);restoreScroll=Ue(_n);constructor(){he(()=>{this.matDataSource.data=this.dataSource(),this.matDataSource.sort=this.sort()??null,this.matDataSource.paginator=this.paginator()??null})}onSortChange(){this.resetPageAndScroll()}applyFilter(n){let e=n.target.value;this.filterValue.set(e),this.matDataSource.filter=e.trim().toLowerCase(),this.resetPageAndScroll()}clearFilter(){this.filterValue.set(""),this.matDataSource.filter="",this.resetPageAndScroll()}resetPageAndScroll(){this.matDataSource.paginator?.firstPage(),this.restoreScroll()?.resetScroll()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-memo-list"]],viewQuery:function(e,t){e&1&&At(t.sort,Bn,5)(t.paginator,zn,5)(t.restoreScroll,_n,5),e&2&&bt(3)},inputs:{dataSource:[1,"dataSource"],showFilter:[1,"showFilter"],showPaginator:[1,"showPaginator"],isVisible:[1,"isVisible"]},outputs:{editClick:"editClick",delete:"delete"},decls:24,vars:12,consts:[[1,"list-header-actions",3,"hidden"],["appearance","outline","subscriptSizing","dynamic",1,"filter-form-field",3,"hidden"],["matInput","","placeholder","\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B...",3,"keyup","value"],["mat-icon-button","","matSuffix","","aria-label","\u30AF\u30EA\u30A2"],["showFirstLastButtons","","aria-label","\u30DA\u30FC\u30B8\u3092\u9078\u629E",1,"header-paginator","paginator-compact",3,"hidden","pageSizeOptions","pageSize"],["libScrollTop","",1,"table-container","feature-scroll-container","mat-elevation-z1",3,"libRestoreScroll"],["mat-table","","matSort","",3,"matSortChange","dataSource"],["matColumnDef","index"],["mat-header-cell","","class","index-header col-compact-index",4,"matHeaderCellDef"],["mat-cell","","class","index-cell col-compact-index",4,"matCellDef"],["matColumnDef","title"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"title",4,"matCellDef"],["matColumnDef","updatedAt"],["mat-header-cell","","mat-sort-header","","class","mat-column-updatedAt col-compact-meta",4,"matHeaderCellDef"],["mat-cell","","class","mat-column-updatedAt col-compact-meta",4,"matCellDef"],["matColumnDef","actions"],["mat-header-cell","","class","action-header col-compact-action",4,"matHeaderCellDef"],["mat-cell","","class","action-cell col-compact-action",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","clickable-row","tabindex","0",3,"selected-row","focused-row","click",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-icon-button","","matSuffix","","aria-label","\u30AF\u30EA\u30A2",3,"click"],["mat-header-cell","",1,"index-header","col-compact-index"],["mat-cell","",1,"index-cell","col-compact-index"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"title"],[1,"text-truncate","col-compact-main"],["mat-header-cell","","mat-sort-header","",1,"mat-column-updatedAt","col-compact-meta"],["mat-cell","",1,"mat-column-updatedAt","col-compact-meta"],["mat-header-cell","",1,"action-header","col-compact-action"],["mat-cell","",1,"action-cell","col-compact-action"],["mat-icon-button","","color","warn","aria-label","\u524A\u9664",3,"click"],["mat-header-row",""],["mat-row","","tabindex","0",1,"clickable-row",3,"click"],[1,"mat-row"],[1,"mat-cell","empty-cell"]],template:function(e,t){e&1&&(h(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),P(3,"\u30E1\u30E2\u3092\u691C\u7D22"),g(),h(4,"input",2),M("keyup",function(a){return t.applyFilter(a)}),g(),k(5,zm,3,0,"button",3),g(),Ce(6,"mat-paginator",4),g(),h(7,"div",5)(8,"table",6),M("matSortChange",function(){return t.onSortChange()}),ft(9,7),Le(10,Bm,2,0,"th",8)(11,Hm,2,1,"td",9),ht(),ft(12,10),Le(13,jm,2,0,"th",11)(14,Um,3,2,"td",12),ht(),ft(15,13),Le(16,Wm,2,0,"th",14)(17,$m,3,1,"td",15),ht(),ft(18,16),Le(19,Km,2,0,"th",17)(20,Ym,4,0,"td",18),ht(),Le(21,Xm,1,0,"tr",19)(22,Zm,1,5,"tr",20)(23,Qm,3,1,"tr",21),g()()),e&2&&(R("hidden",!t.showFilter()&&!t.showPaginator()),f(),R("hidden",!t.showFilter()),f(3),R("value",t.filterValue()),f(),E(t.filterValue()?5:-1),f(),R("hidden",t.showFilter())("pageSizeOptions",Er(11,Lm))("pageSize",10),f(),R("libRestoreScroll",t.isVisible()?t.selectedMemoId():null),f(),R("dataSource",t.matDataSource),f(13),R("matHeaderRowDef",t.displayedColumns),f(),R("matRowDefColumns",t.displayedColumns))},dependencies:[Fr,Sn,bd,rd,ld,ud,dd,sd,pd,cd,md,fd,hd,gd,zt,rn,Ln,Vn,ad,Bn,od,Yl,zn,Je,lt,xt,li,In,On,Ft,_n,Tr],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.list-header-actions[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;min-height:56px;margin-bottom:.75rem;width:100%;overflow-x:hidden}.list-header-actions[hidden][_ngcontent-%COMP%], .list-header-actions[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%]{display:none!important}.list-header-actions[_ngcontent-%COMP%]   .filter-form-field[_ngcontent-%COMP%]{flex:1 1 auto;width:100%;max-width:400px}.list-header-actions[_ngcontent-%COMP%]   .header-paginator[_ngcontent-%COMP%]{margin-left:auto}.table-container[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-surface, #fff);border-radius:8px;--%NS%lib-scroll-top-size: 36px;--%NS%lib-scroll-top-icon-size: 20px;--%NS%lib-scroll-top-opacity: .7;--%NS%lib-scroll-top-hover-opacity: 1;--%NS%lib-scroll-top-bottom: 12px;--%NS%lib-scroll-top-right: 2px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;table-layout:fixed;border-collapse:collapse}.table-container[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%]{font-weight:600;background-color:var(--%NS%mat-sys-surface-container, #f0f0f0);position:sticky;top:0;z-index:2;white-space:nowrap}.table-container[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%]{padding:.5rem .75rem}.clickable-row[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s ease,outline .1s ease;position:relative}.clickable-row[_ngcontent-%COMP%]:hover{background-color:var(--%NS%mat-sys-surface-container-high, #f5f5f5)!important}.clickable-row.selected-row[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-secondary-container, #e8def8)!important;color:var(--%NS%mat-sys-on-secondary-container, #1d192b)}.clickable-row.selected-row[_ngcontent-%COMP%]:hover{background-color:color-mix(in srgb,var(--%NS%mat-sys-secondary-container, #e8def8) 92%,var(--%NS%mat-sys-on-secondary-container, #1d192b))!important}.clickable-row[_ngcontent-%COMP%]:focus-visible, .clickable-row.focused-row[_ngcontent-%COMP%]{outline:2px solid var(--%NS%mat-sys-primary, #3f51b5);outline-offset:-2px;z-index:1}.index-header[_ngcontent-%COMP%], .index-cell[_ngcontent-%COMP%]{text-align:center;width:72px;padding-left:.5rem!important;padding-right:.5rem!important;white-space:nowrap}.text-truncate[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden;word-break:break-word;line-height:1.25}.mat-column-updatedAt[_ngcontent-%COMP%]{width:100px;white-space:nowrap}.action-header[_ngcontent-%COMP%], .action-cell[_ngcontent-%COMP%]{text-align:center;width:64px}.empty-cell[_ngcontent-%COMP%]{text-align:center;padding:3rem!important;color:var(--%NS%mat-sys-on-surface-variant, #666);font-style:italic}"]})};var Jm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=_({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),_d=(()=>{class i{_elementRef=s(S);_platform=s(Y);_document=s(Z);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["mat-toolbar-row"]]];return D({type:i,selectors:[["mat-toolbar"]],contentQueries:function(a,r,l){if(a&1&&Ze(l,Jm,5),a&2){let d;L(d=z())&&(r._toolbarRows=d)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(a,r){a&2&&(qe(r.color?"mat-"+r.color:""),T("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(a,r){a&1&&(pe(e),U(0),U(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return i})();var vd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=O({imports:[ee]})}return i})();var tu=(i,n)=>n.id;function nu(i,n){if(i&1){let e=ye();h(0,"button",4),M("click",function(){let o=ne(e).$implicit,a=x();return ie(a.buttonClick.emit(o.id))}),h(1,"mat-icon"),P(2),g()()}if(i&2){let e=n.$implicit;R("disabled",e.disabled)("matTooltip",e.tooltip??""),f(2),be(e.icon)}}var Yo=class i{title=Q("");buttons=Q([]);buttonClick=_t();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-common-toolbar"]],inputs:{title:[1,"title"],buttons:[1,"buttons"]},outputs:{buttonClick:"buttonClick"},decls:6,vars:1,consts:[[1,"common-toolbar"],[1,"toolbar-title"],[1,"toolbar-actions"],["mat-icon-button","",3,"disabled","matTooltip"],["mat-icon-button","",3,"click","disabled","matTooltip"]],template:function(e,t){e&1&&(h(0,"mat-toolbar",0)(1,"span",1),P(2),g(),h(3,"div",2),Ht(4,nu,3,3,"button",3,tu),g()()),e&2&&(f(2),be(t.title()),f(2),jt(t.buttons()))},dependencies:[vd,_d,zt,rn,Ln,Vn,Bo,Si],styles:[".common-toolbar[_ngcontent-%COMP%]{--%NS%mat-toolbar-container-background-color: var(--%NS%mat-sys-secondary-container);--%NS%mat-toolbar-container-text-color: var(--%NS%mat-sys-on-secondary-container);border-bottom:1px solid var(--%NS%mat-sys-outline-variant);display:flex;align-items:center;justify-content:space-between;gap:.5rem}.toolbar-actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}"]})};function iu(i,n){if(i&1){let e=ye();h(0,"app-memo-form",5),M("browserBack",function(){ne(e);let o=x();return ie(o.handleToolbarClick("back"))}),pn("isInvalidChange",function(o){ne(e);let a=x();return un(a.isFormInvalid,o)||(a.isFormInvalid=o),ie(o)}),M("save",function(o){ne(e);let a=x();return ie(a.saveMemo(o))}),g()}if(i&2){let e=x();R("libBrowserBack",e.currentView()==="form")("editData",e.selectedMemo())("isVisible",e.currentView()==="form")("showFilter",e.showFormFilter()),mn("isInvalid",e.isFormInvalid),R("submitTrigger",e.triggerSave())}}var yd=class i{stateService=s(Tt);memoDataSource=this.stateService.memoDataSource;isLoading=this.stateService.isLoading;currentView=this.stateService.currentView;selectedMemo=this.stateService.selectedMemo;selectedMemoId=this.stateService.selectedMemoId;showFilter=this.stateService.showFilter;showPaginator=this.stateService.showPaginator;isFormInvalid=this.stateService.isFormInvalid;triggerSave=this.stateService.triggerSave;showFormFilter=this.stateService.showFormFilter;toolbarTitle=this.stateService.toolbarTitle;toolbarButtons=re(()=>{let n=this.isLoading();return this.currentView()==="form"?[{id:"back",icon:"arrow_back",tooltip:"\u623B\u308B"},{id:"save",icon:"save",tooltip:"\u4FDD\u5B58",disabled:n||this.isFormInvalid()},{id:"toggle-form-filter",icon:this.showFormFilter()?"filter_list_off":"filter_list",tooltip:"\u30D5\u30A3\u30EB\u30BF\u30FC\u5207\u66FF"}]:[{id:"add",icon:"add",tooltip:"\u65B0\u898F\u4F5C\u6210",disabled:n},{id:"toggle-filter",icon:this.showFilter()?"filter_list_off":"filter_list",tooltip:"\u30D5\u30A3\u30EB\u30BF\u30FC\u5207\u66FF"},{id:"toggle-paginator",icon:this.showPaginator()?"layers_clear":"pages",tooltip:"\u30DA\u30FC\u30B8\u30CD\u30FC\u30BF\u30FC\u5207\u66FF"}]});handleToolbarClick(n){switch(n){case"back":this.stateService.backToList();break;case"save":this.stateService.triggerSave.set(!0);break;case"add":this.stateService.openFormForCreate();break;case"toggle-filter":this.stateService.toggleFilter();break;case"toggle-paginator":this.stateService.togglePaginator();break;case"toggle-form-filter":this.stateService.toggleFormFilter();break}}openFormForEdit(n){this.stateService.openFormForEditById(n)}saveMemo(n){this.stateService.saveMemo(n)}deleteMemo(n){confirm("\u3053\u306E\u30E1\u30E2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&this.stateService.deleteMemo(n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-memo-base"]],features:[K([gn,Tt,{provide:ma,useExisting:Tt}])],decls:5,vars:8,consts:[[1,"memo-container","feature-base-container","page-container-compact"],[3,"buttonClick","title","buttons"],[3,"libBrowserBack","editData","isVisible","showFilter","isInvalid","submitTrigger"],[3,"hidden"],[3,"editClick","delete","dataSource","showFilter","showPaginator","isVisible"],[3,"browserBack","isInvalidChange","save","libBrowserBack","editData","isVisible","showFilter","isInvalid","submitTrigger"]],template:function(e,t){e&1&&(h(0,"div",0)(1,"app-common-toolbar",1),M("buttonClick",function(a){return t.handleToolbarClick(a)}),g(),k(2,iu,1,6,"app-memo-form",2),h(3,"div",3)(4,"app-memo-list",4),M("editClick",function(a){return t.openFormForEdit(a)})("delete",function(a){return t.deleteMemo(a)}),g()()()),e&2&&(f(),R("title",t.toolbarTitle())("buttons",t.toolbarButtons()),f(),E(t.currentView()==="form"?2:-1),f(),R("hidden",t.currentView()!=="list"),f(),R("dataSource",t.memoDataSource())("showFilter",t.showFilter())("showPaginator",t.showPaginator())("isVisible",t.currentView()==="list"))},dependencies:[zo,Ko,Yo,Ui],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}"]})};export{yd as MemoBase};
