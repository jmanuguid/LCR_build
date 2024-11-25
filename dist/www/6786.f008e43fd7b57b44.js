"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6786],{6786:(J,N,o)=>{o.r(N),o.d(N,{GenerateMunicipalFormNo90FormNo2Module:()=>z});var f=o(9808),u=o(7614),d=o(655),l=o(2382),M=o(8675),w=o(8372),U=o(8505),G=o(7391),C=o(2340),e=o(4893),b=o(8876),P=o(4465),S=o(7556),T=o(9673),h=o(8562),y=o(8058);function Y(r,c){if(1&r&&e._UZ(0,"ngx-extended-pdf-viewer",24),2&r){const t=e.oxw(2);e.Q6J("src",t.pdfUrl)("useBrowserLocale",!0)("showToolbar",!1)}}function Z(r,c){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",13)(2,"aside",14)(3,"form",15)(4,"div",16)(5,"div",17)(6,"label",18),e._uU(7,"Verifier"),e.qZA(),e._UZ(8,"input",19),e.TgZ(9,"div",20),e._uU(10,"This field is required"),e.qZA()()(),e.TgZ(11,"button",21),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.printPreview())}),e._uU(12,"Print preview"),e.qZA()()(),e.TgZ(13,"aside",22),e.YNc(14,Y,1,3,"ngx-extended-pdf-viewer",23),e.qZA()(),e.BQk()}if(2&r){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.annotationForm),e.xp6(8),e.Q6J("disabled",t.annotationForm.invalid),e.xp6(3),e.Q6J("ngIf",t.pdfUrl)}}function A(r,c){1&r&&e._uU(0,"Loading...")}const R=[{path:"",component:(()=>{class r{constructor(t,i,n,a,s,p,m,v,F,x){this.sqlService=t,this.toast=i,this.activatedRoute=n,this.authService=a,this.fb=s,this.sql=p,this.router=m,this.datePipe=v,this.marriageReportService=F,this.pdfViewerService=x,this.annotationForm=this.fb.group({verifier:this.fb.nonNullable.control("",{validators:l.kI.required})}),this.loadingPreview=!1,this.skipLocationChange=C.N.production}ngOnInit(){return(0,d.mG)(this,void 0,void 0,function*(){yield this.initializeCurrentUser(),yield this.initializeRecord(),this.initializePreview()})}ngOnDestroy(){G.c.unsubscribe(this.annotationFormSubscription)}initializeCurrentUser(){return(0,d.mG)(this,void 0,void 0,function*(){try{const t=yield this.authService.getCurrentUserSnapshot();if(null===t)throw{code:"unauthenticated",message:"User is not currently logged in"};return this.currentUser=t,this.annotationForm.controls.verifier.setValue(t.firstName+" "+t.lastName),t}catch(t){return void console.error(t)}})}initializeRecord(){return(0,d.mG)(this,void 0,void 0,function*(){try{const t=this.activatedRoute.snapshot.params.id,i=yield this.sqlService.table("marriage").row(t).get(),n=i.attachments.filter(a=>a);this.record=Object.assign(Object.assign({},i),{attachments:n})}catch(t){this.toast.presentError(t)}})}initializePreview(){this.annotationFormSubscription=this.annotationForm.valueChanges.pipe((0,M.O)(this.annotationForm.value),(0,w.b)(500),(0,U.b)(t=>(0,d.mG)(this,void 0,void 0,function*(){var i,n;this.loadingPreview=!0;try{const a=null!==(i=this.record)&&void 0!==i?i:yield this.initializeRecord();if(!a)throw"internal";const s=null!==(n=this.currentUser)&&void 0!==n?n:yield this.initializeCurrentUser();if(!s)throw"internal";const p=Object.assign(Object.assign({},a),t),m=yield this.marriageReportService.generateMunicipalFormNo90FormNo2(p,s);this.pdfUrl=m}catch(a){this.toast.presentError(a)}this.loadingPreview=!1}))).subscribe()}test(){return(0,d.mG)(this,void 0,void 0,function*(){const i=yield(yield this.pdfViewerService.getCurrentDocumentAsBlob()).arrayBuffer(),n=yield this.marriageReportService.reloadData(i);console.log({textFields:n})})}printPreview(){var t,i,n,a;return(0,d.mG)(this,void 0,void 0,function*(){try{const s=yield this.authService.getCurrentUserSnapshot();if(null===s)throw{code:"unauthenticated",message:"User is not currently logged in"};const m=yield(yield this.pdfViewerService.getCurrentDocumentAsBlob()).arrayBuffer(),v=yield this.marriageReportService.reloadData(m),F=yield this.marriageReportService.generateCleanMunicipalFormNo90FormNo2(v);setTimeout(()=>{const g=document.createElement("a");g.href=F,g.target="__blank",g.click(),g.remove()});const x={datetime:this.datePipe.transform(new Date,"YYYY-MM-dd HH:mm:ss"),summary:`${s.username} generated Municipal Form No. 90 (Form No. 2) report for ${null!==(a=null!==(i=null===(t=this.record)||void 0===t?void 0:t.registrationNumber)&&void 0!==i?i:null===(n=this.record)||void 0===n?void 0:n.husbandLastName)&&void 0!==a?a:"marriage"} record`,tags:["report",s.username,"marriage"],ipAddress:"",user:s.username};yield this.sql.table("audit").add(x)}catch(s){this.toast.presentError(s)}this.router.navigate(["../"],{relativeTo:this.activatedRoute,skipLocationChange:!0})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(b.a),e.Y36(P.k),e.Y36(u.gz),e.Y36(S.e),e.Y36(l.qu),e.Y36(b.a),e.Y36(u.F0),e.Y36(f.uU),e.Y36(T.a),e.Y36(h.CG))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-generate-municipal-form-no-90-form-no-2"]],decls:17,vars:3,consts:[[1,"bg-light","border-bottom"],[1,"wrapper","px-xl-5","px-4"],[1,"d-flex","align-items-center","px-xl-5","pt-5"],[1,"mb-0","me-auto","text-dark","text-decoration-none","lh-1","fs-2-large","text-primary"],[1,"fs-2-large","text-primary","fw-bold"],[1,"px-xl-5","pt-3","pb-3","d-flex","justify-content-between","align-items-start"],["type","button","routerLink","../",1,"btn","btn-sm","btn-link","d-flex","align-items-center","text-decoration-none","text-info","ps-0",3,"skipLocationChange"],[1,"material-icons","fs-3","me-2"],[1,"fs-5"],[1,"content-wrapper","ps-xl-5","d-flex","flex-column"],[1,"ps-xl-5","ps-4","sd-section","flex-grow-1","d-flex","flex-column"],[4,"ngIf","ngIfElse"],["loadingState",""],[1,"row","m-0","flex-grow-1"],[1,"form-aside","col-3","p-0","pb-5","pe-4"],["novalidate","",1,"mt-5",3,"formGroup"],[1,"row","g-3"],[1,"col-12"],["for","lastName",1,"d-block","text-truncate","form-label","fs-5","mb-1"],["type","text","formControlName","verifier","readonly","",1,"form-control","py-2","rounded-3"],[1,"invalid-feedback","mt-1","fs-5"],["type","submit",1,"rounded-3","px-4","py-2","btn","btn-info","mt-5",3,"disabled","click"],[1,"iframe-aside","col-9"],["class","w-100 h-100",3,"src","useBrowserLocale","showToolbar",4,"ngIf"],[1,"w-100","h-100",3,"src","useBrowserLocale","showToolbar"]],template:function(t,i){if(1&t&&(e.TgZ(0,"header",0)(1,"div",1)(2,"section",2)(3,"a",3)(4,"span",4),e._uU(5,"Generate Municipal Form No. 90 (Form No. 2)"),e.qZA()()(),e.TgZ(6,"section",5)(7,"button",6)(8,"span",7),e._uU(9,"arrow_back"),e.qZA(),e.TgZ(10,"span",8),e._uU(11,"Back"),e.qZA()()()()(),e.TgZ(12,"main",9)(13,"main",10),e.YNc(14,Z,15,3,"ng-container",11),e.qZA()(),e.YNc(15,A,1,0,"ng-template",null,12,e.W1O)),2&t){const n=e.MAs(16);e.xp6(7),e.Q6J("skipLocationChange",i.skipLocationChange),e.xp6(7),e.Q6J("ngIf",i.record)("ngIfElse",n)}},dependencies:[f.O5,y.YI,u.rH,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,h.S3],styles:[".content-wrapper[_ngcontent-%COMP%]{min-height:calc(100vh - 132px)}.content-wrapper[_ngcontent-%COMP%] > main[_ngcontent-%COMP%]{height:100%}.iframe-aside[_ngcontent-%COMP%]{background-color:gray}"]}),r})()}];let B=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.Bz.forChild(R),u.Bz]}),r})();var L=o(5503),O=o(9438);let z=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[f.ez,y.Pc,B,l.u5,l.UX,L.D,O.xC,h.g3]}),r})()}}]);