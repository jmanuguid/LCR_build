"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2813],{9669:(j,y,n)=>{n.r(y),n.d(y,{GenerateMunicipalFormNo97Module:()=>L});var g=n(9808),m=n(7614),u=n(655),l=n(2382),N=n(8675),w=n(8372),U=n(8505),G=n(7391),C=n(2340),e=n(4893),F=n(8876),P=n(4465),T=n(7556),h=n(8562),Z=n(9673),M=n(8058);function S(r,c){if(1&r&&e._UZ(0,"ngx-extended-pdf-viewer",25),2&r){const t=e.oxw(2);e.Q6J("src",t.pdfUrl)("useBrowserLocale",!0)("showToolbar",!1)}}function Y(r,c){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",13)(2,"aside",14)(3,"form",15)(4,"div",16)(5,"div",17)(6,"label",18),e._uU(7,"Verifier"),e.qZA(),e._UZ(8,"input",19),e.TgZ(9,"div",20),e._uU(10,"This field is required"),e.qZA()(),e.TgZ(11,"div",17)(12,"label",18),e._uU(13,"Remarks"),e.qZA(),e._UZ(14,"textarea",21),e.TgZ(15,"div",20),e._uU(16,"This field is required"),e.qZA()()(),e.TgZ(17,"button",22),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.printPreview())}),e._uU(18,"Print preview"),e.qZA()()(),e.TgZ(19,"aside",23),e.YNc(20,S,1,3,"ngx-extended-pdf-viewer",24),e.qZA()(),e.BQk()}if(2&r){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.annotationForm),e.xp6(14),e.Q6J("disabled",t.annotationForm.invalid),e.xp6(3),e.Q6J("ngIf",t.pdfUrl)}}function O(r,c){1&r&&e._uU(0,"Loading...")}const A=[{path:"",component:(()=>{class r{constructor(t,o,i,s,a,d,p,v,b,x){this.sqlService=t,this.toast=o,this.activatedRoute=i,this.authService=s,this.fb=a,this.sql=d,this.router=p,this.pdfViewerService=v,this.datePipe=b,this.marriageReportService=x,this.annotationForm=this.fb.group({verifier:this.fb.nonNullable.control("",{validators:l.kI.required}),remarks:this.fb.nonNullable.control("")}),this.loadingPreview=!1,this.skipLocationChange=C.N.production}ngOnInit(){return(0,u.mG)(this,void 0,void 0,function*(){yield this.initializeCurrentUser(),yield this.initializeRecord(),this.initializePreview()})}ngOnDestroy(){G.c.unsubscribe(this.annotationFormSubscription)}initializeCurrentUser(){return(0,u.mG)(this,void 0,void 0,function*(){try{const t=yield this.authService.getCurrentUserSnapshot();if(null===t)throw{code:"unauthenticated",message:"User is not currently logged in"};return this.currentUser=t,this.annotationForm.controls.verifier.setValue(t.firstName+" "+t.lastName),t}catch(t){return void console.error(t)}})}initializeRecord(){var t;return(0,u.mG)(this,void 0,void 0,function*(){try{const o=this.activatedRoute.snapshot.params.id,i=yield this.sqlService.table("marriage").row(o).get(),s=i.attachments.filter(a=>a);this.record=Object.assign(Object.assign({},i),{attachments:s}),this.annotationForm.controls.remarks.setValue(null!==(t=i.remarks)&&void 0!==t?t:"")}catch(o){this.toast.presentError(o)}})}test(){return(0,u.mG)(this,void 0,void 0,function*(){const o=yield(yield this.pdfViewerService.getCurrentDocumentAsBlob()).arrayBuffer(),i=yield this.marriageReportService.reloadData(o),s={};for(const a in i)if(Object.prototype.hasOwnProperty.call(i,a)){const d=i[a];if(void 0!==d)continue;s[a]=d}console.clear(),console.table(s)})}initializePreview(){this.annotationFormSubscription=this.annotationForm.valueChanges.pipe((0,N.O)(this.annotationForm.value),(0,w.b)(500),(0,U.b)(t=>(0,u.mG)(this,void 0,void 0,function*(){var o,i;this.loadingPreview=!0;try{const s=null!==(o=this.record)&&void 0!==o?o:yield this.initializeRecord();if(!s)throw"internal";const a=null!==(i=this.currentUser)&&void 0!==i?i:yield this.initializeCurrentUser();if(!a)throw"internal";const d=Object.assign(Object.assign({},s),t),p=yield this.marriageReportService.generateMunicipalFormNo97(d,a);this.pdfUrl=p}catch(s){this.toast.presentError(s)}this.loadingPreview=!1}))).subscribe()}printPreview(){var t,o,i,s;return(0,u.mG)(this,void 0,void 0,function*(){try{const a=yield this.authService.getCurrentUserSnapshot();if(null===a)throw{code:"unauthenticated",message:"User is not currently logged in"};const p=yield(yield this.pdfViewerService.getCurrentDocumentAsBlob()).arrayBuffer(),v=yield this.marriageReportService.reloadData(p),b=this.annotationForm.getRawValue(),x=Object.assign(Object.assign({},this.record),{remarks:b.remarks}),z=yield this.marriageReportService.generateCleanMunicipalFormNo97(v,x);setTimeout(()=>{const f=document.createElement("a");f.href=z,f.target="__blank",f.click(),f.remove()});const J={datetime:this.datePipe.transform(new Date,"YYYY-MM-dd HH:mm:ss"),summary:`${a.username} generated Municipal Form No. 97 report for ${null!==(s=null!==(o=null===(t=this.record)||void 0===t?void 0:t.registrationNumber)&&void 0!==o?o:null===(i=this.record)||void 0===i?void 0:i.husbandLastName)&&void 0!==s?s:"marriage"} record`,tags:["report",a.username,"marriage"],ipAddress:"",user:a.username};yield this.sql.table("audit").add(J)}catch(a){this.toast.presentError(a)}this.router.navigate(["../"],{relativeTo:this.activatedRoute,skipLocationChange:!0})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(F.a),e.Y36(P.k),e.Y36(m.gz),e.Y36(T.e),e.Y36(l.qu),e.Y36(F.a),e.Y36(m.F0),e.Y36(h.CG),e.Y36(g.uU),e.Y36(Z.a))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-generate-municipal-form-no-97"]],decls:17,vars:3,consts:[[1,"bg-light","border-bottom"],[1,"wrapper","px-xl-5","px-4"],[1,"d-flex","align-items-center","px-xl-5","pt-5"],[1,"mb-0","me-auto","text-dark","text-decoration-none","lh-1","fs-2-large","text-primary"],[1,"fs-2-large","text-primary","fw-bold"],[1,"px-xl-5","pt-3","pb-3","d-flex","justify-content-between","align-items-start"],["type","button","routerLink","../",1,"btn","btn-sm","btn-link","d-flex","align-items-center","text-decoration-none","text-info","ps-0",3,"skipLocationChange"],[1,"material-icons","fs-3","me-2"],[1,"fs-5"],[1,"content-wrapper","ps-xl-5","d-flex","flex-column"],[1,"ps-xl-5","ps-4","sd-section","flex-grow-1","d-flex","flex-column"],[4,"ngIf","ngIfElse"],["loadingState",""],[1,"row","m-0","flex-grow-1"],[1,"form-aside","col-3","p-0","pb-5","pe-4"],["novalidate","",1,"mt-5",3,"formGroup"],[1,"row","g-3"],[1,"col-12"],["for","lastName",1,"d-block","text-truncate","form-label","fs-5","mb-1"],["type","text","formControlName","verifier","readonly","",1,"form-control","py-2","rounded-3"],[1,"invalid-feedback","mt-1","fs-5"],["type","text","formControlName","remarks",1,"form-control","py-2","rounded-3"],["type","submit",1,"rounded-3","px-4","py-2","btn","btn-info","mt-5",3,"disabled","click"],[1,"iframe-aside","col-9"],["class","w-100 h-100",3,"src","useBrowserLocale","showToolbar",4,"ngIf"],[1,"w-100","h-100",3,"src","useBrowserLocale","showToolbar"]],template:function(t,o){if(1&t&&(e.TgZ(0,"header",0)(1,"div",1)(2,"section",2)(3,"a",3)(4,"span",4),e._uU(5,"Generate Municipal Form No. 97"),e.qZA()()(),e.TgZ(6,"section",5)(7,"button",6)(8,"span",7),e._uU(9,"arrow_back"),e.qZA(),e.TgZ(10,"span",8),e._uU(11,"Back"),e.qZA()()()()(),e.TgZ(12,"main",9)(13,"main",10),e.YNc(14,Y,21,3,"ng-container",11),e.qZA()(),e.YNc(15,O,1,0,"ng-template",null,12,e.W1O)),2&t){const i=e.MAs(16);e.xp6(7),e.Q6J("skipLocationChange",o.skipLocationChange),e.xp6(7),e.Q6J("ngIf",o.record)("ngIfElse",i)}},dependencies:[g.O5,M.YI,m.rH,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,h.S3],styles:[".content-wrapper[_ngcontent-%COMP%]{min-height:calc(100vh - 132px)}.content-wrapper[_ngcontent-%COMP%] > main[_ngcontent-%COMP%]{height:100%}.iframe-aside[_ngcontent-%COMP%]{background-color:gray}"]}),r})()}];let R=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.Bz.forChild(A),m.Bz]}),r})();var k=n(5503),B=n(9438);let L=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[g.ez,M.Pc,R,l.u5,l.UX,k.D,B.xC,h.g3]}),r})()}}]);