"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6122],{6122:(Yt,ft,a)=>{a.r(ft),a.d(ft,{EditBirthPageModule:()=>Qt});var g=a(9808),u=a(2382),ht=a(8058),m=a(7614),gt=a(655),pt=a(3518),vt=a(2340),d=a(7391),t=a(4893),Zt=a(4465),_t=a(8876),Tt=a(5219),At=a(2334);function Nt(o,r){if(1&o&&(t.TgZ(0,"option",128),t._uU(1),t.qZA()),2&o){const l=r.$implicit;t.Q6J("value",l.value),t.xp6(1),t.Oqu(l.display)}}function qt(o,r){1&o&&(t.TgZ(0,"div",129)(1,"label",130),t._uU(2,"Specify other suffix"),t.qZA(),t._UZ(3,"input",131),t.TgZ(4,"div",16),t._uU(5,"This field is required"),t.qZA()())}function Ut(o,r){if(1&o&&(t.TgZ(0,"option",128),t._uU(1),t.qZA()),2&o){const l=r.$implicit;t.Q6J("value",l.value),t.xp6(1),t.Oqu(l.display)}}function xt(o,r){1&o&&(t.TgZ(0,"div",129)(1,"label",132),t._uU(2,"Specify other sex"),t.qZA(),t._UZ(3,"input",133),t.TgZ(4,"div",16),t._uU(5,"This field is required"),t.qZA()())}function Ct(o,r){if(1&o&&(t.TgZ(0,"option",128),t._uU(1),t.qZA()),2&o){const l=r.$implicit;t.Q6J("value",l.value),t.xp6(1),t.Oqu(l.display)}}function yt(o,r){1&o&&(t.TgZ(0,"div",129)(1,"label",134),t._uU(2,"Specify other birth type"),t.qZA(),t._UZ(3,"input",135),t.TgZ(4,"div",16),t._uU(5,"This field is required"),t.qZA()())}function St(o,r){if(1&o&&(t.TgZ(0,"option",128),t._uU(1),t.qZA()),2&o){const l=r.$implicit;t.Q6J("value",l.value),t.xp6(1),t.Oqu(l.display)}}function kt(o,r){1&o&&(t.TgZ(0,"div",129)(1,"label",136),t._uU(2,"Specify other legitimacy"),t.qZA(),t._UZ(3,"input",137),t.TgZ(4,"div",16),t._uU(5,"This field is required"),t.qZA()())}function Ft(o,r){if(1&o&&(t.TgZ(0,"option",128),t._uU(1),t.qZA()),2&o){const l=r.$implicit;t.Q6J("value",l.value),t.xp6(1),t.Oqu(l.display)}}function Ot(o,r){1&o&&(t.TgZ(0,"div",129)(1,"label",138),t._uU(2,"Specify other civil status"),t.qZA(),t._UZ(3,"input",139),t.TgZ(4,"div",16),t._uU(5,"This field is required"),t.qZA()())}function Bt(o,r){if(1&o&&(t.TgZ(0,"option",128),t._uU(1),t.qZA()),2&o){const l=r.$implicit;t.Q6J("value",l.value),t.xp6(1),t.Oqu(l.display)}}function Pt(o,r){1&o&&(t.TgZ(0,"div",129)(1,"label",140),t._uU(2,"Specify other civil status"),t.qZA(),t._UZ(3,"input",141),t.TgZ(4,"div",16),t._uU(5,"This field is required"),t.qZA()())}function Jt(o,r){if(1&o&&(t.TgZ(0,"option",128),t._uU(1),t.qZA()),2&o){const l=r.$implicit;t.Q6J("value",l.value),t.xp6(1),t.Oqu(l.display)}}function Dt(o,r){1&o&&(t.TgZ(0,"div",129)(1,"label",142),t._uU(2,"Specify other medical attendant"),t.qZA(),t._UZ(3,"input",143),t.TgZ(4,"div",16),t._uU(5,"This field is required"),t.qZA()())}const Rt=[{path:"",component:(()=>{class o{constructor(l,e,n,c,f,h){this.fb=l,this.toast=e,this.router=n,this.sqlService=c,this.loading=f,this.activatedRoute=h,this.constants=pt.$,this.birthForm=this.fb.nonNullable.group({firstName:this.fb.nonNullable.control(""),middleName:this.fb.nonNullable.control(""),lastName:this.fb.nonNullable.control(""),suffix:this.fb.nonNullable.control(""),customSuffix:this.fb.nonNullable.control(""),sex:this.fb.nonNullable.control(""),customSex:this.fb.nonNullable.control(""),nationality:this.fb.nonNullable.control("FILIPINO"),date:this.fb.nonNullable.control(""),time:this.fb.nonNullable.control(""),place:this.fb.nonNullable.control(""),order:this.fb.nonNullable.control(""),type:this.fb.nonNullable.control(""),customType:this.fb.nonNullable.control(""),legitimacy:this.fb.nonNullable.control(""),customLegitimacy:this.fb.nonNullable.control(""),fatherName:this.fb.nonNullable.control(""),fatherBirthplace:this.fb.nonNullable.control(""),fatherAge:this.fb.nonNullable.control(""),fatherOccupation:this.fb.nonNullable.control(""),fatherNationality:this.fb.nonNullable.control("FILIPINO"),fatherReligion:this.fb.nonNullable.control(""),fatherCivilStatus:this.fb.nonNullable.control(""),customFatherCivilStatus:this.fb.nonNullable.control(""),fatherRace:this.fb.nonNullable.control(""),motherName:this.fb.nonNullable.control(""),motherBirthplace:this.fb.nonNullable.control(""),motherAge:this.fb.nonNullable.control(""),motherNationality:this.fb.nonNullable.control("FILIPINO"),motherReligion:this.fb.nonNullable.control(""),motherCivilStatus:this.fb.nonNullable.control(""),customMotherCivilStatus:this.fb.nonNullable.control(""),motherRace:this.fb.nonNullable.control(""),marriageDate:this.fb.nonNullable.control(""),marriagePlace:this.fb.nonNullable.control(""),childCount:this.fb.nonNullable.control(""),childLivingCount:this.fb.nonNullable.control(""),childBornAliveButDeadCount:this.fb.nonNullable.control(""),childFetalDeathCount:this.fb.nonNullable.control(""),attendantName:this.fb.nonNullable.control(""),attendantAddress:this.fb.nonNullable.control(""),attendantTitle:this.fb.nonNullable.control(""),medicalAttendant:this.fb.nonNullable.control(""),customMedicalAttendant:this.fb.nonNullable.control(""),bookNumber:this.fb.nonNullable.control(""),pageNumber:this.fb.nonNullable.control(""),registrationNumber:this.fb.nonNullable.control(""),registrationDate:this.fb.nonNullable.control(""),remarks:this.fb.nonNullable.control(""),attachments:this.fb.nonNullable.control(new Array)}),this.skipLocationChange=vt.N.production}ngOnInit(){this.initializeRecord()}initializeRecord(){var l,e,n,c,f,h,b,p,v,Z,_,T,A,N,q,U,x,C,y,S,k,F,O,B,P,J,D,R,E,L,M,Q,Y,I,w,V,G,j,z,$,K,X,H,W,tt,et,it,ot,lt,rt,nt,at,ut,st,dt,ct;return(0,gt.mG)(this,void 0,void 0,function*(){const bt=yield this.loading.create();try{const mt=this.activatedRoute.snapshot.params.id,i=yield this.sqlService.table("birth").row(mt).get();this.record=i,this.birthForm.setValue({firstName:null!==(l=i.firstName)&&void 0!==l?l:"",middleName:null!==(e=i.middleName)&&void 0!==e?e:"",lastName:null!==(n=i.lastName)&&void 0!==n?n:"",suffix:null!==(c=i.suffix)&&void 0!==c?c:"",customSuffix:null!==(f=i.suffix)&&void 0!==f?f:"",sex:null!==(h=i.sex.toLowerCase())&&void 0!==h?h:"",customSex:null!==(b=i.sex)&&void 0!==b?b:"",nationality:null!==(p=i.nationality)&&void 0!==p?p:"",date:null!==(v=d.c.dateToInputDateValue(i.date))&&void 0!==v?v:"",time:null!==(Z=i.time)&&void 0!==Z?Z:"",place:null!==(_=i.place)&&void 0!==_?_:"",order:null!==(A=null===(T=i.order)||void 0===T?void 0:T.toString())&&void 0!==A?A:"",type:null!==(N=i.type)&&void 0!==N?N:"",customType:null!==(q=i.type)&&void 0!==q?q:"",legitimacy:null!==(U=i.legitimacy.toLowerCase())&&void 0!==U?U:"",customLegitimacy:null!==(x=i.legitimacy)&&void 0!==x?x:"",fatherName:null!==(C=i.fatherName)&&void 0!==C?C:"",fatherBirthplace:null!==(y=i.fatherBirthplace)&&void 0!==y?y:"",fatherAge:null!==(k=null===(S=i.fatherAge)||void 0===S?void 0:S.toString())&&void 0!==k?k:"",fatherOccupation:null!==(F=i.fatherOccupation)&&void 0!==F?F:"",fatherNationality:null!==(O=i.fatherNationality)&&void 0!==O?O:"",fatherReligion:null!==(B=i.fatherReligion)&&void 0!==B?B:"",fatherCivilStatus:null!==(P=i.fatherCivilStatus.toLowerCase())&&void 0!==P?P:"",customFatherCivilStatus:null!==(J=i.fatherCivilStatus)&&void 0!==J?J:"",fatherRace:null!==(D=i.fatherRace)&&void 0!==D?D:"",motherName:null!==(R=i.motherName)&&void 0!==R?R:"",motherBirthplace:null!==(E=i.motherBirthplace)&&void 0!==E?E:"",motherAge:null!==(M=null===(L=i.motherAge)||void 0===L?void 0:L.toString())&&void 0!==M?M:"",motherNationality:null!==(Q=i.motherNationality)&&void 0!==Q?Q:"",motherReligion:null!==(Y=i.motherReligion)&&void 0!==Y?Y:"",motherCivilStatus:null!==(I=i.motherCivilStatus.toLowerCase())&&void 0!==I?I:"",customMotherCivilStatus:null!==(w=i.motherCivilStatus)&&void 0!==w?w:"",motherRace:null!==(V=i.motherRace)&&void 0!==V?V:"",marriageDate:null!==(G=i.marriageDate)&&void 0!==G?G:"",marriagePlace:null!==(j=i.marriagePlace)&&void 0!==j?j:"",childCount:null!==($=null===(z=i.childCount)||void 0===z?void 0:z.toString())&&void 0!==$?$:"",childLivingCount:null!==(X=null===(K=i.childLivingCount)||void 0===K?void 0:K.toString())&&void 0!==X?X:"",childBornAliveButDeadCount:null!==(W=null===(H=i.childBornAliveButDeadCount)||void 0===H?void 0:H.toString())&&void 0!==W?W:"",childFetalDeathCount:null!==(et=null===(tt=i.childFetalDeathCount)||void 0===tt?void 0:tt.toString())&&void 0!==et?et:"",attendantName:null!==(it=i.attendantName)&&void 0!==it?it:"",attendantAddress:null!==(ot=i.attendantAddress)&&void 0!==ot?ot:"",attendantTitle:null!==(lt=i.attendantTitle)&&void 0!==lt?lt:"",medicalAttendant:null!==(rt=i.medicalAttendant)&&void 0!==rt?rt:"",customMedicalAttendant:null!==(nt=i.medicalAttendant)&&void 0!==nt?nt:"",bookNumber:null!==(at=i.bookNumber)&&void 0!==at?at:"",pageNumber:null!==(ut=i.pageNumber)&&void 0!==ut?ut:"",registrationNumber:null!==(st=i.registrationNumber)&&void 0!==st?st:"",registrationDate:null!==(dt=i.registrationDate)&&void 0!==dt?dt:"",remarks:null!==(ct=i.remarks)&&void 0!==ct?ct:"",attachments:i.attachments?i.attachments.filter(s=>s):[]}),this.setControlValueToOthers(this.constants.suffixOptions.map(s=>s.value),i.suffix,this.birthForm.controls.suffix),this.setControlValueToOthers(this.constants.sexOptions.map(s=>s.value),i.sex.toLowerCase(),this.birthForm.controls.sex),this.setControlValueToOthers(this.constants.birthTypeOptions.map(s=>s.value),i.type.toLowerCase(),this.birthForm.controls.type),this.setControlValueToOthers(this.constants.legitimacyOptions.map(s=>s.value),i.legitimacy.toLowerCase(),this.birthForm.controls.legitimacy),this.setControlValueToOthers(this.constants.civilStatusOptions.map(s=>s.value),i.motherCivilStatus.toLowerCase(),this.birthForm.controls.motherCivilStatus),this.setControlValueToOthers(this.constants.civilStatusOptions.map(s=>s.value),i.fatherCivilStatus.toLowerCase(),this.birthForm.controls.fatherCivilStatus),this.setControlValueToOthers(this.constants.medicalAttendantOptions.map(s=>s.value),i.medicalAttendant.toLowerCase(),this.birthForm.controls.medicalAttendant),yield bt.hide()}catch(mt){yield bt.hide(),this.toast.presentError(mt)}})}onSubmit(){return(0,gt.mG)(this,void 0,void 0,function*(){if(this.birthForm.invalid)return this.birthForm.markAsDirty(),this.birthForm.markAllAsTouched(),void this.birthForm.updateValueAndValidity();const l=yield this.loading.create();try{const e=this.birthForm.getRawValue(),n=Object.assign(Object.assign({},e),{order:d.c.toNumber(e.order),fatherAge:d.c.toNumber(e.fatherAge),motherAge:d.c.toNumber(e.motherAge),childCount:d.c.toNumber(e.childCount),childLivingCount:d.c.toNumber(e.childLivingCount),childBornAliveButDeadCount:d.c.toNumber(e.childBornAliveButDeadCount),childFetalDeathCount:d.c.toNumber(e.childFetalDeathCount),suffix:"others"===e.suffix?e.customSuffix:e.suffix,sex:"others"===e.sex?e.customSex:e.sex,type:"others"===e.type?e.customType:e.type,legitimacy:"others"===e.legitimacy?e.customLegitimacy:e.legitimacy,fatherCivilStatus:"others"===e.fatherCivilStatus?e.customFatherCivilStatus:e.fatherCivilStatus,motherCivilStatus:"others"===e.motherCivilStatus?e.customMotherCivilStatus:e.motherCivilStatus,time:e.time?e.time+":00":void 0}),c=this.activatedRoute.snapshot.params.id;yield this.sqlService.table("birth").row(c).update(n),yield this.router.navigate(["../"],{relativeTo:this.activatedRoute,skipLocationChange:!0}),yield l.hide()}catch(e){yield this.toast.presentError(e),yield l.hide()}})}onSelectChange(l,e){"others"===l.value?(e.setValidators(u.kI.required),e.updateValueAndValidity()):(e.clearValidators(),e.updateValueAndValidity())}setControlValueToOthers(l,e,n){!e||l.includes(e)||n.setValue("others")}}return o.\u0275fac=function(l){return new(l||o)(t.Y36(u.qu),t.Y36(Zt.k),t.Y36(m.F0),t.Y36(_t.a),t.Y36(Tt.b),t.Y36(m.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-birth"]],decls:367,vars:44,consts:[[1,"bg-light","border-bottom"],[1,"px-xl-5","px-4"],[1,"d-flex","flex-wrap","align-items-center","px-xl-5","pt-5"],[1,"d-flex","align-items-center","mb-0","me-auto","text-dark","text-decoration-none","lh-1"],[1,"fs-2-large","text-primary","fw-bold"],[1,"px-xl-5","pt-3","pb-3","d-flex","justify-content-between","align-items-start"],["type","button","data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"btn","btn-sm","btn-link","d-flex","align-items-center","text-decoration-none","text-info","ps-0"],[1,"material-icons","fs-3","me-2"],[1,"fs-5"],[1,"px-xl-5","mt-5"],["novalidate","",1,"needs-validation","pb-5",3,"formGroup"],[1,"content"],[1,"row","g-3"],[1,"col-xl-3","col-4"],["for","bookNumber",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","bookNumber",1,"form-control"],[1,"invalid-feedback","fs-5","mt-1"],["for","pageNumber",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","pageNumber",1,"form-control"],["for","registrationNumber",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","registrationNumber",1,"form-control"],[1,"col-xl-3","col-12"],["for","registrationDate",1,"d-flex","align-items-center","justify-content-between","text-truncate","fs-5","mb-1"],[3,"click"],[1,"toggle-date-anchor","material-icons","text-secondary"],["formControlName","registrationDate",1,"form-control",3,"type"],[1,"content","mt-5"],[1,"fw-semibold","mb-4"],[1,"col-6"],["for","firstName",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","firstName",1,"form-control"],["for","middleInitial",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","middleName",1,"form-control"],["for","lastName",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","lastName",1,"form-control"],["for","suffix",1,"d-block","text-truncate","fs-5","mb-1"],["formControlName","suffix",1,"form-select",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],["value","others"],["class","col-3",4,"ngIf"],["for","date",1,"d-flex","align-items-center","justify-content-between","text-truncate","fs-5","mb-1"],["formControlName","date",1,"form-control",3,"type"],["for","time",1,"d-block","text-truncate","fs-5","mb-1"],["type","time","formControlName","time",1,"form-control"],["for","sex",1,"d-block","text-truncate","fs-5","mb-1"],["formControlName","sex",1,"form-select",3,"change"],["value","","disabled",""],["for","nationality",1,"d-block","text-truncatel","fs-5","mb-1"],["type","text","formControlName","nationality",1,"form-control"],["for","place",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","place",1,"form-control"],["for","type",1,"d-block","text-truncate","fs-5","mb-1"],["formControlName","type",1,"form-select",3,"change"],["for","order",1,"d-block","text-truncate","fs-5","mb-1"],["type","number","min","0","formControlName","order",1,"form-control"],["for","legitimacy",1,"d-block","text-truncate","fs-5","mb-1"],["formControlName","legitimacy",1,"form-select",3,"change"],[1,"fw-semibold","mb-3"],["for","marriageDate",1,"d-flex","align-items-center","justify-content-between","text-truncate","fs-5","mb-1"],["formControlName","marriageDate",1,"form-control",3,"type"],["for","marriagePlace",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","marriagePlace",1,"form-control"],["for","motherName",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","motherName",1,"form-control"],["for","motherPlaceOfBirth",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","motherBirthplace",1,"form-control"],["for","motherAge",1,"d-block","text-truncate","fs-5","mb-1"],["type","number","min","0","formControlName","motherAge","placeholder","",1,"form-control"],["for","motherNationality",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","motherNationality",1,"form-control"],["formControlName","motherCivilStatus",1,"form-select",3,"change"],["for","motherReligion",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","motherReligion",1,"form-control"],["for","motherRace",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","motherRace",1,"form-control"],[1,"fw-semibold","mb-4","mt-4","pt-2","fs-5-large"],["for","childCount",1,"d-block","text-truncate","fs-5","mb-1"],["type","number","min","0","formControlName","childCount",1,"form-control"],["for","childLivingCount",1,"d-block","text-truncate","fs-5","mb-1"],["type","number","min","0","formControlName","childLivingCount",1,"form-control"],["for","childBornAliveButDeadCount",1,"d-block","text-truncate","fs-5","mb-1"],["type","number","min","0","formControlName","childBornAliveButDeadCount",1,"form-control"],["for","childFetalDeathCount",1,"d-block","text-truncate","fs-5","mb-1"],["type","number","min","0","formControlName","childFetalDeathCount",1,"form-control"],["for","fatherName",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","fatherName",1,"form-control"],["for","fatherBirthplace",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","fatherBirthplace",1,"form-control"],["for","fatherAge",1,"d-block","text-truncate","fs-5","mb-1"],["type","number","min","0","formControlName","fatherAge",1,"form-control"],["for","fatherNationality",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","fatherNationality",1,"form-control"],["for","fatherCivilStatus",1,"d-block","text-truncate","fs-5","mb-1"],["formControlName","fatherCivilStatus",1,"form-select",3,"change"],["for","fatherReligion",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","fatherReligion",1,"form-control"],["for","fatherOccupation",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","fatherOccupation",1,"form-control"],["for","fatherRace",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","fatherRace",1,"form-control"],[1,"fw-semibold","mt-5","mb-4"],[1,"col-12"],["for","attendantName",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","attendantName",1,"form-control"],["for","attendantAddress",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","attendantAddress","rows","2",1,"form-control"],["for","attendantTitle",1,"d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","attendantTitle",1,"form-control"],["for","medicalAttendant",1,"d-block","text-truncate","fs-5","mb-1"],["formControlName","medicalAttendant",1,"form-select",3,"change"],[1,"row","mt-5"],["for","remarks",1,"d-block","text-truncate"],["type","text","formControlName","remarks","rows","3",1,"form-control"],[1,"d-flex","flex-column"],["type","birth",3,"control"],[1,"buttons"],["data-bs-toggle","button","type","submit",1,"rounded-3","px-5","py-3","btn","btn-info","mt-5",3,"click"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","true","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content","rounded-4"],[1,"modal-header","border-0"],["id","staticBackdropLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer","border-0","pb-4","px-1"],["type","button","data-bs-dismiss","modal",1,"btn","btn-default"],["type","button","data-bs-dismiss","modal","routerLink","../",1,"btn","btn-default","text-danger","rounded-3",3,"skipLocationChange"],[3,"value"],[1,"col-3"],["for","customSuffix",1,"d-block","text-truncate","d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","customSuffix",1,"form-control"],["for","customSex",1,"d-block","text-truncate","d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","customSex",1,"form-control"],["for","customType",1,"d-block","text-truncate","d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","customType",1,"form-control"],["for","customLegitimacy",1,"d-block","text-truncate","d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","customLegitimacy",1,"form-control"],["for","customMotherCivilStatus",1,"d-block","text-truncate","d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","customMotherCivilStatus",1,"form-control"],["for","customFatherCivilStatus",1,"d-block","text-truncate","d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","customFatherCivilStatus",1,"form-control"],["for","customMedicalAttendant",1,"d-block","text-truncate","d-block","text-truncate","fs-5","mb-1"],["type","text","formControlName","customMedicalAttendant",1,"form-control"]],template:function(l,e){1&l&&(t.TgZ(0,"header",0)(1,"div",1)(2,"section",2)(3,"a",3)(4,"span",4),t._uU(5,"Edit birth record"),t.qZA()()(),t.TgZ(6,"section",5)(7,"button",6)(8,"span",7),t._uU(9,"arrow_back"),t.qZA(),t.TgZ(10,"span",8),t._uU(11,"Back"),t.qZA()()()()(),t.TgZ(12,"main",9)(13,"main",1)(14,"form",10)(15,"div",11)(16,"div",12)(17,"div",13)(18,"label",14),t._uU(19,"Book number"),t.qZA(),t._UZ(20,"input",15),t.TgZ(21,"div",16),t._uU(22,"This field is required"),t.qZA()(),t.TgZ(23,"div",13)(24,"label",17),t._uU(25,"Page number"),t.qZA(),t._UZ(26,"input",18),t.TgZ(27,"div",16),t._uU(28,"This field is required"),t.qZA()(),t.TgZ(29,"div",13)(30,"label",19),t._uU(31,"Registration number"),t.qZA(),t._UZ(32,"input",20),t.TgZ(33,"div",16),t._uU(34,"This field is required"),t.qZA()(),t.TgZ(35,"div",21)(36,"label",22)(37,"span"),t._uU(38,"Registration date"),t.qZA(),t.TgZ(39,"a",23),t.NdJ("click",function(){return e.toggleRegistrationDate=!e.toggleRegistrationDate}),t.TgZ(40,"span",24),t._uU(41),t.qZA()()(),t._UZ(42,"input",25),t.TgZ(43,"div",16),t._uU(44,"This field is required"),t.qZA()()()(),t.TgZ(45,"div",26)(46,"h4",27),t._uU(47,"Child's information"),t.qZA(),t.TgZ(48,"div",12)(49,"div",28)(50,"label",29),t._uU(51,"First name"),t.qZA(),t._UZ(52,"input",30),t.TgZ(53,"div",16),t._uU(54,"This field is required"),t.qZA()(),t.TgZ(55,"div",28)(56,"label",31),t._uU(57,"Middle name"),t.qZA(),t._UZ(58,"input",32),t.TgZ(59,"div",16),t._uU(60,"This field is required"),t.qZA()(),t.TgZ(61,"div",28)(62,"label",33),t._uU(63,"Last name"),t.qZA(),t._UZ(64,"input",34),t.TgZ(65,"div",16),t._uU(66,"This field is required"),t.qZA()(),t.TgZ(67,"div")(68,"label",35),t._uU(69,"Suffix"),t.qZA(),t.TgZ(70,"select",36),t.NdJ("change",function(){return e.onSelectChange(e.birthForm.controls.suffix,e.birthForm.controls.customSuffix)}),t.TgZ(71,"option",37),t._uU(72,"Not Available"),t.qZA(),t.YNc(73,Nt,2,2,"option",38),t.TgZ(74,"option",39),t._uU(75,"Others"),t.qZA()(),t.TgZ(76,"div",16),t._uU(77,"This field is required"),t.qZA()(),t.YNc(78,qt,6,0,"div",40),t.TgZ(79,"div",28)(80,"label",41)(81,"span"),t._uU(82,"Date of birth"),t.qZA(),t.TgZ(83,"a",23),t.NdJ("click",function(){return e.toggleDate=!e.toggleDate}),t.TgZ(84,"span",24),t._uU(85),t.qZA()()(),t._UZ(86,"input",42),t.TgZ(87,"div",16),t._uU(88,"This field is required"),t.qZA()(),t.TgZ(89,"div",28)(90,"label",43),t._uU(91,"Time of birth"),t.qZA(),t._UZ(92,"input",44),t.TgZ(93,"div",16),t._uU(94,"This field is required"),t.qZA()(),t.TgZ(95,"div")(96,"label",45),t._uU(97,"Sex"),t.qZA(),t.TgZ(98,"select",46),t.NdJ("change",function(){return e.onSelectChange(e.birthForm.controls.sex,e.birthForm.controls.customSex)}),t.TgZ(99,"option",47),t._uU(100,"Choose..."),t.qZA(),t.YNc(101,Ut,2,2,"option",38),t.TgZ(102,"option",39),t._uU(103,"Others"),t.qZA()(),t.TgZ(104,"div",16),t._uU(105,"This field is required"),t.qZA()(),t.YNc(106,xt,6,0,"div",40),t.TgZ(107,"div",28)(108,"label",48),t._uU(109,"Nationality"),t.qZA(),t._UZ(110,"input",49),t.TgZ(111,"div",16),t._uU(112,"This field is required"),t.qZA()(),t.TgZ(113,"div",28)(114,"label",50),t._uU(115,"Place of birth"),t.qZA(),t._UZ(116,"input",51),t.TgZ(117,"div",16),t._uU(118,"This field is required"),t.qZA()(),t.TgZ(119,"div")(120,"label",52),t._uU(121,"Birth type"),t.qZA(),t.TgZ(122,"select",53),t.NdJ("change",function(){return e.onSelectChange(e.birthForm.controls.type,e.birthForm.controls.customType)}),t.TgZ(123,"option",47),t._uU(124,"Choose.."),t.qZA(),t.YNc(125,Ct,2,2,"option",38),t.TgZ(126,"option",39),t._uU(127,"Others"),t.qZA()(),t.TgZ(128,"div",16),t._uU(129,"This field is required"),t.qZA()(),t.YNc(130,yt,6,0,"div",40),t.TgZ(131,"div",28)(132,"label",54),t._uU(133,"Birth order"),t.qZA(),t._UZ(134,"input",55),t.TgZ(135,"div",16),t._uU(136,"This field is required"),t.qZA()(),t.TgZ(137,"div")(138,"label",56),t._uU(139,"Legitimacy"),t.qZA(),t.TgZ(140,"select",57),t.NdJ("change",function(){return e.onSelectChange(e.birthForm.controls.legitimacy,e.birthForm.controls.customLegitimacy)}),t.TgZ(141,"option",47),t._uU(142,"Choose.."),t.qZA(),t.YNc(143,St,2,2,"option",38),t.TgZ(144,"option",39),t._uU(145,"Others"),t.qZA()(),t.TgZ(146,"div",16),t._uU(147,"This field is required"),t.qZA()(),t.YNc(148,kt,6,0,"div",40),t.qZA()(),t.TgZ(149,"div",26)(150,"div",12)(151,"h4",58),t._uU(152,"Parent's information"),t.qZA(),t.TgZ(153,"div",28)(154,"label",59)(155,"span"),t._uU(156,"Date of marriage"),t.qZA(),t.TgZ(157,"a",23),t.NdJ("click",function(){return e.toggleDateOfMarriage=!e.toggleDateOfMarriage}),t.TgZ(158,"span",24),t._uU(159),t.qZA()()(),t._UZ(160,"input",60),t.TgZ(161,"div",16),t._uU(162,"This field is required"),t.qZA()(),t.TgZ(163,"div",28)(164,"label",61),t._uU(165,"Place of marriage"),t.qZA(),t._UZ(166,"input",62),t.TgZ(167,"div",16),t._uU(168,"This field is required"),t.qZA()()()(),t.TgZ(169,"div",26)(170,"h4",27),t._uU(171,"Mother's information"),t.qZA(),t.TgZ(172,"div",12)(173,"div",28)(174,"label",63),t._uU(175,"Full name"),t.qZA(),t._UZ(176,"input",64),t.TgZ(177,"div",16),t._uU(178,"This field is required"),t.qZA()(),t.TgZ(179,"div",28)(180,"label",65),t._uU(181,"Place of birth"),t.qZA(),t._UZ(182,"input",66),t.TgZ(183,"div",16),t._uU(184,"This field is required"),t.qZA()(),t.TgZ(185,"div",28)(186,"label",67),t._uU(187,"Mother's age"),t.qZA(),t._UZ(188,"input",68),t.TgZ(189,"div",16),t._uU(190,"This field is required"),t.qZA()(),t.TgZ(191,"div",28)(192,"label",69),t._uU(193,"Nationality"),t.qZA(),t._UZ(194,"input",70),t.TgZ(195,"div",16),t._uU(196,"This field is required"),t.qZA()(),t.TgZ(197,"div")(198,"label",52),t._uU(199,"Civil status"),t.qZA(),t.TgZ(200,"select",71),t.NdJ("change",function(){return e.onSelectChange(e.birthForm.controls.motherCivilStatus,e.birthForm.controls.customMotherCivilStatus)}),t.TgZ(201,"option",47),t._uU(202,"Choose.."),t.qZA(),t.YNc(203,Ft,2,2,"option",38),t.TgZ(204,"option",39),t._uU(205,"Others"),t.qZA()(),t.TgZ(206,"div",16),t._uU(207,"This field is required"),t.qZA()(),t.YNc(208,Ot,6,0,"div",40),t.TgZ(209,"div",28)(210,"label",72),t._uU(211,"Religion"),t.qZA(),t._UZ(212,"input",73),t.TgZ(213,"div",16),t._uU(214,"This field is required"),t.qZA()(),t.TgZ(215,"div",28)(216,"label",74),t._uU(217,"Race"),t.qZA(),t._UZ(218,"input",75),t.TgZ(219,"div",16),t._uU(220,"This field is required"),t.qZA()()(),t.TgZ(221,"h5",76),t._uU(222,"Previous deliveries to mother"),t.qZA(),t.TgZ(223,"div",12)(224,"div",28)(225,"label",77),t._uU(226,"Number of child"),t.qZA(),t._UZ(227,"input",78),t.TgZ(228,"div",16),t._uU(229,"This field is required"),t.qZA()(),t.TgZ(230,"div",28)(231,"label",79),t._uU(232,"Number of living"),t.qZA(),t._UZ(233,"input",80),t.TgZ(234,"div",16),t._uU(235,"This field is required"),t.qZA()(),t.TgZ(236,"div",28)(237,"label",81),t._uU(238,"Number of born alive but dead"),t.qZA(),t._UZ(239,"input",82),t.TgZ(240,"div",16),t._uU(241,"This field is required"),t.qZA()(),t.TgZ(242,"div",28)(243,"label",83),t._uU(244,"Number of fetal Death"),t.qZA(),t._UZ(245,"input",84),t.TgZ(246,"div",16),t._uU(247,"This field is required"),t.qZA()()()(),t.TgZ(248,"div",26)(249,"div",12)(250,"h4",58),t._uU(251,"Father's information"),t.qZA(),t.TgZ(252,"div",28)(253,"label",85),t._uU(254,"Full name"),t.qZA(),t._UZ(255,"input",86),t.TgZ(256,"div",16),t._uU(257,"This field is required"),t.qZA()(),t.TgZ(258,"div",28)(259,"label",87),t._uU(260,"Place of birth"),t.qZA(),t._UZ(261,"input",88),t.TgZ(262,"div",16),t._uU(263,"This field is required"),t.qZA()(),t.TgZ(264,"div",28)(265,"label",89),t._uU(266,"Age"),t.qZA(),t._UZ(267,"input",90),t.TgZ(268,"div",16),t._uU(269,"This field is required"),t.qZA()(),t.TgZ(270,"div",28)(271,"label",91),t._uU(272,"Nationality"),t.qZA(),t._UZ(273,"input",92),t.TgZ(274,"div",16),t._uU(275,"This field is required"),t.qZA()(),t.TgZ(276,"div")(277,"label",93),t._uU(278,"Civil status"),t.qZA(),t.TgZ(279,"select",94),t.NdJ("change",function(){return e.onSelectChange(e.birthForm.controls.fatherCivilStatus,e.birthForm.controls.customFatherCivilStatus)}),t.TgZ(280,"option",47),t._uU(281,"Choose.."),t.qZA(),t.YNc(282,Bt,2,2,"option",38),t.TgZ(283,"option",39),t._uU(284,"Others"),t.qZA()(),t.TgZ(285,"div",16),t._uU(286,"This field is required"),t.qZA()(),t.YNc(287,Pt,6,0,"div",40),t.TgZ(288,"div",28)(289,"label",95),t._uU(290,"Religion"),t.qZA(),t._UZ(291,"input",96),t.TgZ(292,"div",16),t._uU(293,"This field is required"),t.qZA()(),t.TgZ(294,"div",28)(295,"label",97),t._uU(296,"Occupation"),t.qZA(),t._UZ(297,"input",98),t.TgZ(298,"div",16),t._uU(299,"This field is required"),t.qZA()(),t.TgZ(300,"div",28)(301,"label",99),t._uU(302,"Race"),t.qZA(),t._UZ(303,"input",100),t.TgZ(304,"div",16),t._uU(305,"This field is required"),t.qZA()()()(),t.TgZ(306,"div",11)(307,"h4",101),t._uU(308,"Attendant's information"),t.qZA(),t.TgZ(309,"div",12)(310,"div",102)(311,"label",103),t._uU(312,"Full name"),t.qZA(),t._UZ(313,"input",104),t.TgZ(314,"div",16),t._uU(315,"This field is required"),t.qZA()(),t.TgZ(316,"div",102)(317,"label",105),t._uU(318,"Address"),t.qZA(),t._UZ(319,"textarea",106),t.TgZ(320,"div",16),t._uU(321,"This field is required"),t.qZA()(),t.TgZ(322,"div",28)(323,"label",107),t._uU(324,"Title"),t.qZA(),t._UZ(325,"input",108),t.TgZ(326,"div",16),t._uU(327,"This field is required"),t.qZA()(),t.TgZ(328,"div")(329,"label",109),t._uU(330,"Medical attendant"),t.qZA(),t.TgZ(331,"select",110),t.NdJ("change",function(){return e.onSelectChange(e.birthForm.controls.medicalAttendant,e.birthForm.controls.customMedicalAttendant)}),t.TgZ(332,"option",47),t._uU(333,"Choose.."),t.qZA(),t.YNc(334,Jt,2,2,"option",38),t.TgZ(335,"option",39),t._uU(336,"Others"),t.qZA()(),t.TgZ(337,"div",16),t._uU(338,"This field is required"),t.qZA()(),t.YNc(339,Dt,6,0,"div",40),t.qZA(),t.TgZ(340,"div",111)(341,"div",102)(342,"label",112),t._uU(343,"Remarks"),t.qZA(),t._UZ(344,"textarea",113),t.qZA()()(),t.TgZ(345,"div",11)(346,"div",114)(347,"h4",101),t._uU(348,"Attachments"),t.qZA(),t._UZ(349,"file-upload",115),t.qZA()(),t.TgZ(350,"div",116)(351,"button",117),t.NdJ("click",function(){return e.onSubmit()}),t._uU(352,"Save changes"),t.qZA(),t.TgZ(353,"div",118)(354,"div",119)(355,"div",120)(356,"div",121)(357,"h5",122),t._uU(358,"Discard changes?"),t.qZA(),t._UZ(359,"button",123),t.qZA(),t.TgZ(360,"div",124),t._uU(361,"You have unsaved changes. Are you sure you want to discard them?"),t.qZA(),t.TgZ(362,"div",125)(363,"button",126),t._uU(364,"Keep editing"),t.qZA(),t.TgZ(365,"button",127),t._uU(366,"Close and discard"),t.qZA()()()()()()()()()),2&l&&(t.xp6(14),t.Q6J("formGroup",e.birthForm),t.xp6(27),t.Oqu(e.toggleRegistrationDate?"text_fields":"event"),t.xp6(1),t.Q6J("type",e.toggleRegistrationDate?"date":"text"),t.xp6(25),t.Gre("col-","others"===e.birthForm.value.suffix?"3":"6",""),t.xp6(6),t.Q6J("ngForOf",e.constants.suffixOptions),t.xp6(5),t.Q6J("ngIf","others"===e.birthForm.value.suffix),t.xp6(7),t.Oqu(e.toggleDate?"text_fields":"event"),t.xp6(1),t.Q6J("type",e.toggleDate?"date":"text"),t.xp6(9),t.Gre("col-","others"===e.birthForm.value.sex?"3":"6",""),t.xp6(6),t.Q6J("ngForOf",e.constants.sexOptions),t.xp6(5),t.Q6J("ngIf","others"===e.birthForm.value.sex),t.xp6(13),t.Gre("col-","others"===e.birthForm.value.type?"3":"6",""),t.xp6(6),t.Q6J("ngForOf",e.constants.birthTypeOptions),t.xp6(5),t.Q6J("ngIf","others"===e.birthForm.value.type),t.xp6(7),t.Gre("col-","others"===e.birthForm.value.legitimacy?"3":"6",""),t.xp6(6),t.Q6J("ngForOf",e.constants.legitimacyOptions),t.xp6(5),t.Q6J("ngIf","others"===e.birthForm.value.legitimacy),t.xp6(11),t.Oqu(e.toggleDateOfMarriage?"text_fields":"event"),t.xp6(1),t.Q6J("type",e.toggleDateOfMarriage?"date":"text"),t.xp6(37),t.Gre("col-","others"===e.birthForm.value.motherCivilStatus?"3":"6",""),t.xp6(6),t.Q6J("ngForOf",e.constants.civilStatusOptions),t.xp6(5),t.Q6J("ngIf","others"===e.birthForm.value.motherCivilStatus),t.xp6(68),t.Gre("col-","others"===e.birthForm.value.fatherCivilStatus?"3":"6",""),t.xp6(6),t.Q6J("ngForOf",e.constants.civilStatusOptions),t.xp6(5),t.Q6J("ngIf","others"===e.birthForm.value.fatherCivilStatus),t.xp6(41),t.Gre("col-","others"===e.birthForm.value.medicalAttendant?"3":"6",""),t.xp6(6),t.Q6J("ngForOf",e.constants.medicalAttendantOptions),t.xp6(5),t.Q6J("ngIf","others"===e.birthForm.value.medicalAttendant),t.xp6(10),t.Q6J("control",e.birthForm.controls.attachments),t.xp6(16),t.Q6J("skipLocationChange",e.skipLocationChange))},dependencies:[g.sg,g.O5,u._Y,u.YN,u.Kr,u.Fj,u.wV,u.EJ,u.JJ,u.JL,u.qQ,u.sg,u.u,ht.YI,m.rH,At.Y],styles:[".form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{min-height:48px;border-radius:8px!important}.input-group-text[_ngcontent-%COMP%]{border-top-left-radius:8px;border-bottom-left-radius:8px}.input-group-text[_ngcontent-%COMP%] + .form-control[_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{border-top-left-radius:0!important;border-bottom-left-radius:0!important}form[_ngcontent-%COMP%]{max-width:1000px}textarea[_ngcontent-%COMP%]{resize:none}.toggle-date-anchor[_ngcontent-%COMP%]{font-size:1em;cursor:pointer}"]}),o})()}];let Et=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(Rt),m.Bz]}),o})();var Lt=a(5503),Mt=a(6650);let Qt=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,u.u5,u.UX,ht.Pc,Et,Lt.D,Mt.O]}),o})()}}]);