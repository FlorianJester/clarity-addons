(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{HAsF:function(e,t,c){"use strict";c.r(t),c.d(t,"ViewEditSectionDemoModule",(function(){return T}));var n=c("ofXK"),i=c("3Pt+"),l=c("8MG2"),o=c("6Y1o"),b=c("N+3j"),r=c("fXoL"),d=c("0G9f"),a=c("vAyd");function s(e,t){if(1&e&&(r.Sb(0,"form",32),r.Sb(1,"div",33),r.Sb(2,"label",34),r.Ec(3,"First name"),r.Rb(),r.Sb(4,"span",35),r.Ec(5),r.Rb(),r.Rb(),r.Sb(6,"div",33),r.Sb(7,"label",34),r.Ec(8,"Last name"),r.Rb(),r.Sb(9,"span",35),r.Ec(10),r.Rb(),r.Rb(),r.Sb(11,"div",33),r.Sb(12,"label",34),r.Ec(13,"E-mail"),r.Rb(),r.Sb(14,"span",35),r.Ec(15),r.Rb(),r.Rb(),r.Rb()),2&e){const e=r.cc();r.Ab(5),r.Fc(e.first||"\xa0"),r.Ab(5),r.Fc(e.last||"\xa0"),r.Ab(5),r.Fc(e.email||"\xa0")}}function m(e,t){if(1&e){const e=r.Tb();r.Sb(0,"form",36),r.ac("submit",(function(){return r.wc(e),r.cc().onFormSubmit()})),r.Sb(1,"clr-input-container"),r.Sb(2,"label",37),r.Ec(3,"First name"),r.Rb(),r.Nb(4,"input",38),r.Sb(5,"clr-control-error"),r.Ec(6,"You must enter a first name."),r.Rb(),r.Rb(),r.Sb(7,"clr-input-container"),r.Sb(8,"label",37),r.Ec(9,"Last name"),r.Rb(),r.Nb(10,"input",39),r.Sb(11,"clr-control-error"),r.Ec(12,"You must enter a last name."),r.Rb(),r.Rb(),r.Sb(13,"clr-input-container"),r.Sb(14,"label",40),r.Ec(15,"E-mail"),r.Rb(),r.Nb(16,"input",41),r.Rb(),r.Nb(17,"input",42),r.Rb()}if(2&e){const e=r.cc();r.kc("formGroup",e.exampleForm)}}function u(e,t){if(1&e&&(r.Sb(0,"form",32),r.Sb(1,"div",33),r.Sb(2,"label",34),r.Ec(3,"Hobby"),r.Rb(),r.Sb(4,"span",35),r.Ec(5),r.Rb(),r.Rb(),r.Sb(6,"div",33),r.Sb(7,"label",34),r.Ec(8,"Driving licence number"),r.Rb(),r.Sb(9,"span",35),r.Ec(10),r.Rb(),r.Rb(),r.Rb()),2&e){const e=r.cc();r.Ab(5),r.Fc(e.hobby||"\xa0"),r.Ab(5),r.Fc(e.licence||"\xa0")}}const S=function(){return{updateOn:"blur"}};function p(e,t){if(1&e){const e=r.Tb();r.Sb(0,"form",43),r.ac("submit",(function(){return r.wc(e),r.cc().onAddFormSubmit()})),r.Sb(1,"clr-input-container"),r.Sb(2,"label",40),r.Ec(3,"Hobby"),r.Rb(),r.Sb(4,"input",44),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editHobby=t})),r.Rb(),r.Rb(),r.Sb(5,"clr-input-container"),r.Sb(6,"label",40),r.Ec(7,"Driving licence number"),r.Rb(),r.Sb(8,"input",45),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editLicence=t})),r.Rb(),r.Rb(),r.Nb(9,"input",42),r.Rb()}if(2&e){const e=r.cc();r.Ab(4),r.kc("ngModel",e.editHobby)("ngModelOptions",r.oc(4,S)),r.Ab(4),r.kc("ngModel",e.editLicence)("ngModelOptions",r.oc(5,S))}}function R(e,t){if(1&e){const e=r.Tb();r.Sb(0,"clr-dropdown-menu",49),r.Sb(1,"button",50),r.ac("click",(function(){return r.wc(e),r.cc(2).onEdit()})),r.Ec(2," Edit "),r.Rb(),r.Sb(3,"button",51),r.Ec(4," Duplicate "),r.Rb(),r.Sb(5,"button",51),r.Ec(6," Delete "),r.Rb(),r.Rb()}}function E(e,t){1&e&&(r.Sb(0,"clr-dropdown"),r.Sb(1,"button",46),r.Nb(2,"clr-icon",47),r.Rb(),r.Cc(3,R,7,0,"clr-dropdown-menu",48),r.Rb())}function h(e,t){if(1&e&&(r.Sb(0,"form",32),r.Sb(1,"div",33),r.Sb(2,"label",52),r.Ec(3,"Date of birth"),r.Rb(),r.Sb(4,"span",53),r.Ec(5),r.dc(6,"date"),r.Rb(),r.Rb(),r.Sb(7,"div",33),r.Sb(8,"label",54),r.Ec(9,"Gender"),r.Rb(),r.Sb(10,"span",53),r.Ec(11),r.Rb(),r.Rb(),r.Sb(12,"div",33),r.Sb(13,"label",55),r.Ec(14,"Status"),r.Rb(),r.Sb(15,"span",53),r.Ec(16),r.Rb(),r.Rb(),r.Sb(17,"div",33),r.Sb(18,"label",56),r.Ec(19,"Terms & Conditions"),r.Rb(),r.Sb(20,"span",53),r.Ec(21),r.Rb(),r.Rb(),r.Rb()),2&e){const e=r.cc();r.Ab(5),r.Fc(r.ec(6,4,e.birthdate||"")),r.Ab(6),r.Fc(e.gender||"\xa0"),r.Ab(5),r.Fc(e.status||"\xa0"),r.Ab(5),r.Fc(e.getTermsText())}}function f(e,t){if(1&e){const e=r.Tb();r.Sb(0,"form",43),r.ac("submit",(function(){return r.wc(e),r.cc().onCompFormSubmit()})),r.Sb(1,"clr-date-container",11),r.Sb(2,"label"),r.Ec(3,"Date of birth"),r.Rb(),r.Sb(4,"input",57),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editBirthdate=t})),r.Rb(),r.Rb(),r.Sb(5,"clr-select-container"),r.Sb(6,"label"),r.Ec(7,"Gender"),r.Rb(),r.Sb(8,"select",58),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editGender=t})),r.Sb(9,"option"),r.Ec(10,"male"),r.Rb(),r.Sb(11,"option"),r.Ec(12,"female"),r.Rb(),r.Rb(),r.Rb(),r.Sb(13,"clr-radio-container"),r.Sb(14,"label"),r.Ec(15,"Status"),r.Rb(),r.Sb(16,"clr-radio-wrapper"),r.Sb(17,"input",59),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editStatus=t})),r.Rb(),r.Sb(18,"label"),r.Ec(19,"Active"),r.Rb(),r.Rb(),r.Sb(20,"clr-radio-wrapper"),r.Sb(21,"input",59),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editStatus=t})),r.Rb(),r.Sb(22,"label"),r.Ec(23,"Inactive"),r.Rb(),r.Rb(),r.Rb(),r.Sb(24,"clr-checkbox-container"),r.Sb(25,"label"),r.Ec(26,"Terms & Conditions"),r.Rb(),r.Sb(27,"clr-checkbox-wrapper"),r.Sb(28,"label",21),r.Ec(29,"I agree to the terms and conditions"),r.Rb(),r.Sb(30,"input",60),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editTerms=t})),r.Rb(),r.Rb(),r.Rb(),r.Nb(31,"input",42),r.Rb()}if(2&e){const e=r.cc();r.Ab(4),r.kc("ngModel",e.editBirthdate)("ngModelOptions",r.oc(8,S)),r.Ab(4),r.kc("ngModel",e.editGender),r.Ab(9),r.kc("value",1)("ngModel",e.editStatus),r.Ab(4),r.kc("value",2)("ngModel",e.editStatus),r.Ab(9),r.kc("ngModel",e.editTerms)}}function g(e,t){1&e&&(r.Sb(0,"form",32),r.Sb(1,"div",33),r.Sb(2,"label",61),r.Ec(3,"Hobby"),r.Rb(),r.Sb(4,"span",53),r.Ec(5,"Computer"),r.Rb(),r.Rb(),r.Sb(6,"div",33),r.Sb(7,"label",61),r.Ec(8,"Driving licence number"),r.Rb(),r.Sb(9,"span",53),r.Ec(10,"12345"),r.Rb(),r.Rb(),r.Rb())}function v(e,t){if(1&e&&(r.Sb(0,"form",32),r.Sb(1,"div",33),r.Sb(2,"label",52),r.Ec(3,"Date of birth"),r.Rb(),r.Sb(4,"span",53),r.Ec(5),r.dc(6,"date"),r.Rb(),r.Rb(),r.Sb(7,"div",33),r.Sb(8,"label",54),r.Ec(9,"Gender"),r.Rb(),r.Sb(10,"span",53),r.Ec(11),r.Rb(),r.Rb(),r.Sb(12,"div",33),r.Sb(13,"label",55),r.Ec(14,"Status"),r.Rb(),r.Sb(15,"span",53),r.Ec(16),r.Rb(),r.Rb(),r.Sb(17,"div",33),r.Sb(18,"label",56),r.Ec(19,"Terms & Conditions"),r.Rb(),r.Sb(20,"span",53),r.Ec(21),r.Rb(),r.Rb(),r.Rb()),2&e){const e=r.cc();r.Ab(5),r.Fc(r.ec(6,4,e.birthdate||"")),r.Ab(6),r.Fc(e.gender||"\xa0"),r.Ab(5),r.Fc(e.status||"\xa0"),r.Ab(5),r.Fc(e.getTermsText())}}function w(e,t){if(1&e){const e=r.Tb();r.Sb(0,"form",43),r.ac("submit",(function(){return r.wc(e),r.cc().onCompFormSubmit()})),r.Sb(1,"clr-date-container",11),r.Sb(2,"label"),r.Ec(3,"Date of birth"),r.Rb(),r.Sb(4,"input",57),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editBirthdate=t})),r.Rb(),r.Rb(),r.Sb(5,"clr-select-container"),r.Sb(6,"label"),r.Ec(7,"Gender"),r.Rb(),r.Sb(8,"select",58),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editGender=t})),r.Sb(9,"option"),r.Ec(10,"male"),r.Rb(),r.Sb(11,"option"),r.Ec(12,"female"),r.Rb(),r.Rb(),r.Rb(),r.Sb(13,"clr-radio-container"),r.Sb(14,"label"),r.Ec(15,"Status"),r.Rb(),r.Sb(16,"clr-radio-wrapper"),r.Sb(17,"input",59),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editStatus=t})),r.Rb(),r.Sb(18,"label"),r.Ec(19,"Active"),r.Rb(),r.Rb(),r.Sb(20,"clr-radio-wrapper"),r.Sb(21,"input",59),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editStatus=t})),r.Rb(),r.Sb(22,"label"),r.Ec(23,"Inactive"),r.Rb(),r.Rb(),r.Rb(),r.Sb(24,"clr-checkbox-container"),r.Sb(25,"label"),r.Ec(26,"Terms & Conditions"),r.Rb(),r.Sb(27,"clr-checkbox-wrapper"),r.Sb(28,"label",21),r.Ec(29,"I agree to the terms and conditions"),r.Rb(),r.Sb(30,"input",60),r.ac("ngModelChange",(function(t){return r.wc(e),r.cc().editTerms=t})),r.Rb(),r.Rb(),r.Rb(),r.Nb(31,"input",42),r.Rb()}if(2&e){const e=r.cc();r.Ab(4),r.kc("ngModel",e.editBirthdate)("ngModelOptions",r.oc(8,S)),r.Ab(4),r.kc("ngModel",e.editGender),r.Ab(9),r.kc("value",1)("ngModel",e.editStatus),r.Ab(4),r.kc("value",2)("ngModel",e.editStatus),r.Ab(9),r.kc("ngModel",e.editTerms)}}let C=(()=>{class e extends b.a{constructor(){super("view-edit-section"),this.htmlExampleSideBySide='\n<div class="clr-col-12 clr-col-lg-6">\n    <clr-view-edit-section [(clrEditMode)]="editMode1" [clrPreventModeChangeOnSave]="!exampleForm.valid" [clrTitle]="sectionTitle"\n        (clrSectionSubmitted)="sectionSubmitted()" (clrSectionEditCancelled)="sectionCancelled()"\n        [clrViewRef]="viewBlock1" [clrEditRef]="editBlock1">\n        <ng-template #viewBlock1>\n            <form clrForm clrLayout="horizontal">\n              <div class="clr-form-control clr-row">\n                  <label class="clr-col-md-4 clr-control-label">First name</label>\n                  <span class="text-truncate clr-col-md-8">{{first || "&nbsp;"}}</span>\n              </div>\n              <div class="clr-form-control clr-row">\n                  <label class="clr-col-md-4 clr-control-label">Last name</label>\n                  <span class="text-truncate clr-col-md-8">{{last || "&nbsp;"}}</span>\n              </div>\n              <div class="clr-form-control clr-row">\n                  <label class="clr-col-md-4 clr-control-label">E-mail</label>\n                  <span class="text-truncate clr-col-md-8">{{email || "&nbsp;"}}</span>\n              </div>\n            </form>\n        </ng-template>\n        <ng-template #editBlock1>\n            <form clrForm clrLayout="horizontal" [formGroup]="exampleForm" (submit)="onFormSubmit()">\n              <clr-input-container>\n                  <label class="clr-col-md-4 required">First name</label>\n                  <input class="clr-col-md-8" clrInput type="text" formControlName="editFirst" name="first"/>\n                  <clr-control-error>You must enter a first name.</clr-control-error>\n              </clr-input-container>\n              <clr-input-container>\n                  <label class="clr-col-md-4 required">Last name</label>\n                  <input class="clr-col-md-8" clrInput type="text" formControlName="editLast" name="last"/>\n                  <clr-control-error>You must enter a last name.</clr-control-error>\n              </clr-input-container>\n              <clr-input-container>\n                  <label class="clr-col-md-4">E-mail</label>\n                  <input class="clr-col-md-8" clrInput type="text" formControlName="editEmail" name="email"/>\n              </clr-input-container>\n              <input type="submit" style="display: none">\n            </form>\n        </ng-template>\n    </clr-view-edit-section>\n</div>\n',this.htmlExampleFullIcon='\n<div class="clr-col-12">\n    <clr-view-edit-section [clrTitle]="compSectionTitle" [clrEditIcon]="compEditIcon"\n    clrSaveText="Save it" clrCancelText="Cancel it" (clrSectionSubmitted)="compSectionSubmitted()"\n    (clrSectionEditCancelled)="compSectionCancelled()" [clrViewRef]="viewBlock5" [clrEditRef]="editBlock5">\n        <ng-template #viewBlock5>\n            ...\n        </ng-template>\n        <ng-template #editBlock5>\n            ...\n        </ng-template>\n    </clr-view-edit-section>\n</div>\n',this.htmlExampleFullIconAngular='\ncompEditIcon: string = "cog";\n',this.htmlExampleCustomActions='\n<clr-view-edit-section [(clrEditMode)]="editMode" [clrTitle]="customActionsTitle"\n    (clrSectionSubmitted)="compSectionSubmitted()" (clrSectionEditCancelled)="compSectionCancelled()"\n    [clrViewRef]="viewBlock3" [clrEditRef]="editBlock3">\n    <div action-block>\n        <clr-dropdown *ngIf="!editMode">\n          <button type="button" class="btn btn-icon btn-link ves-action dropdown-toggle" clrDropdownTrigger>\n            <clr-icon shape="ellipsis-vertical"></clr-icon>\n          </button>\n          <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n            <button type="button" (click)="onEdit()" clrDropdownItem>\n              Edit\n            </button>\n            <button type="button" clrDropdownItem>\n              Duplicate\n            </button>\n            <button type="button" clrDropdownItem>\n              Delete\n            </button>\n          </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    ...\n</clr-view-edit-section>\n',this.htmlExampleNotEditable='\n<clr-view-edit-section clrTitle="Not Editable" [clrEditable]="false" [clrViewRef]="viewBlock4">\n    <ng-template #viewBlock4>\n        ...\n    </ng-template>\n</clr-view-edit-section>\n',this.htmlExampleFormSubmit='\n<clr-view-edit-section [(clrEditMode)]="editMode" (clrSectionSubmitted)="sectionSubmitted()" [clrEditRef]="editBlock">\n    ...\n    <ng-template #editBlock>\n        <form ... (submit)="onFormSubmit()">\n            ...\n            <input type="submit" style="display: none">\n        </form>\n    </ng-template>\n</clr-view-edit-section>\n',this.angularExampleFormSubmit="\neditMode = false;\n\nonFormSubmit() {\n    this.sectionSubmitted();\n    this.editMode = false;\n}\n",this.editMode1=!1,this.editMode2=!1,this.editMode3=!1,this.editMode4=!1,this.gender="male",this.status="Active",this.editBirthdate=this.birthdate,this.editGender=this.gender,this.editStatus=1,this.first="Max",this.last="Mustermann",this.email="m.mustermann@mail.com",this.compSectionTitle="Different components",this.sectionTitle="Personal Data",this.addSectionTitle="Additional Data",this.customActionsTitle="Example with multiple actions",this.compEditIcon="cog",this.exampleForm=new i.e({editFirst:new i.c(this.first,{validators:[i.y.required],updateOn:"blur"}),editLast:new i.c(this.last,{validators:[i.y.required],updateOn:"blur"}),editEmail:new i.c(this.email)})}onCompFormSubmit(){document.activeElement.blur(),this.compSectionSubmitted(),this.editMode3=!1,this.editMode4=!1}compSectionSubmitted(){this.birthdate=this.editBirthdate,this.gender=this.editGender,this.status=1===this.editStatus?"Active":"Inactive",this.terms=this.editTerms}compSectionCancelled(){this.editBirthdate=this.birthdate,this.editGender=this.gender,this.editStatus="Active"===this.status?1:2,this.editTerms=this.terms}getTermsText(){return this.terms?"I agreed":"I disagreed"}onFormSubmit(){document.activeElement.blur(),this.sectionSubmitted(),this.editMode1=!1}sectionSubmitted(){this.exampleForm.valid&&(this.first=this.exampleForm.value.editFirst,this.last=this.exampleForm.value.editLast,this.email=this.exampleForm.value.editEmail)}sectionCancelled(){this.exampleForm.reset({editFirst:this.first,editLast:this.last,editEmail:this.email})}onAddFormSubmit(){document.activeElement.blur(),this.addSectionSubmitted(),this.editMode2=!1}addSectionSubmitted(){this.hobby=this.editHobby,this.licence=this.editLicence}addSectionCancelled(){this.editHobby=this.hobby,this.editLicence=this.licence}onEdit(){this.editMode3=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["clr-view-edit-section-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&r.Db("content-area",!0)("dox-content-panel",!0)},features:[r.xb],decls:269,vars:34,consts:[[3,"ng","ui","title","newLayout"],["id","view-edit-section-header",1,"component-summary"],["id","design-guidelines"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],[1,"clr-code"],["id","code-examples"],["id","examples"],[1,"clr-row"],[1,"clr-col-12","clr-col-lg-6"],[3,"clrEditMode","clrPreventModeChangeOnSave","clrTitle","clrViewRef","clrEditRef","clrEditModeChange","clrSectionSubmitted","clrSectionEditCancelled"],["viewBlock1",""],["editBlock1",""],[1,"crl-col-12","clr-col-lg-6"],[3,"clrEditMode","clrTitle","clrViewRef","clrEditRef","clrEditModeChange","clrSectionSubmitted","clrSectionEditCancelled"],["viewBlock2",""],["editBlock2",""],[3,"clrCode"],[1,"clr-col-12"],["action-block",""],[4,"ngIf"],["viewBlock3",""],["editBlock3",""],["clrTitle","Not Editable",3,"clrEditable","clrViewRef"],["viewBlock4",""],["clrSaveText","Save it","clrCancelText","Cancel it",3,"clrEditMode","clrTitle","clrEditIcon","clrViewRef","clrEditRef","clrEditModeChange","clrSectionSubmitted","clrSectionEditCancelled"],["viewBlock5",""],["editBlock5",""],[3,"clrCode","clrLanguage"],["clrForm","","clrLayout","horizontal"],[1,"clr-form-control","clr-row"],[1,"clr-col-md-4","clr-control-label"],[1,"text-truncate","clr-col-md-8"],["clrForm","","clrLayout","horizontal",3,"formGroup","submit"],[1,"clr-col-md-4","required"],["clrInput","","type","text","formControlName","editFirst","name","first",1,"clr-col-md-8"],["clrInput","","type","text","formControlName","editLast","name","last",1,"clr-col-md-8"],[1,"clr-col-md-4"],["clrInput","","type","text","formControlName","editEmail","name","email",1,"clr-col-md-8"],["type","submit",2,"display","none"],["clrForm","","clrLayout","horizontal",3,"submit"],["clrInput","","type","text","name","hobby",1,"clr-col-md-8",3,"ngModel","ngModelOptions","ngModelChange"],["clrInput","","type","text","name","licence",1,"clr-col-md-8",3,"ngModel","ngModelOptions","ngModelChange"],["type","button","clrDropdownTrigger","",1,"btn","btn-icon","btn-link","ves-action","dropdown-toggle"],["shape","ellipsis-vertical"],["clrPosition","bottom-right",4,"clrIfOpen"],["clrPosition","bottom-right"],["type","button","clrDropdownItem","",3,"click"],["type","button","clrDropdownItem",""],["for","birthdate",1,"clr-col-md-2","clr-control-label"],[1,"text-truncate","clr-col-md-10"],["for","gender",1,"clr-col-md-2","clr-control-label"],["for","status",1,"clr-col-md-2","clr-control-label"],["for","terms",1,"clr-col-md-2","clr-control-label"],["type","text","name","birthdate","clrDate","",3,"ngModel","ngModelOptions","ngModelChange"],["clrSelect","","name","gender",3,"ngModel","ngModelChange"],["clrRadio","","type","radio","name","status",3,"value","ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","terms",3,"ngModel","ngModelChange"],[1,"clr-col-md-2","clr-control-label"]],template:function(e,t){if(1&e&&(r.Sb(0,"clr-doc-wrapper",0),r.Sb(1,"article"),r.Sb(2,"h5",1),r.Ec(3," The View-Edit Section (VES) is a basic component used to display and edit data. "),r.Nb(4,"br"),r.Ec(5," View-Edit Sections should semantically group information that belongs together, providing a meaningful information structure to the user. "),r.Rb(),r.Sb(6,"div",2),r.Sb(7,"h3"),r.Ec(8,"View-mode"),r.Rb(),r.Sb(9,"p"),r.Ec(10," In view-mode the section consists of label-value pairs to display data to user. The user can switch the mode of the section clicking the pencil-icon when editing data is required. "),r.Rb(),r.Sb(11,"h3"),r.Ec(12,"Edit-mode"),r.Rb(),r.Sb(13,"p"),r.Ec(14," In edit-mode the label-value pairs transform to label-input fields, a form, and can be edited. The changes can be saved or cancelled, which will return the VES back to view-mode. The ESC key also cancels the edit-mode. "),r.Rb(),r.Sb(15,"h3"),r.Ec(16,"Multiple View-Edit Sections"),r.Rb(),r.Sb(17,"p"),r.Ec(18,"There can be multiple View-Edit sections placed in the content area, multiple sections can be edited at once, no automatic inactivation of other View-Edit Sections should occur. "),r.Nb(19,"br"),r.Ec(20," The user needs to actively end the edit-mode by saving or cancelling the changes. "),r.Rb(),r.Sb(21,"h3"),r.Ec(22,"Summary of Options"),r.Rb(),r.Sb(23,"table",3),r.Sb(24,"thead"),r.Sb(25,"tr"),r.Sb(26,"th",4),r.Ec(27,"Property"),r.Rb(),r.Sb(28,"th",5),r.Ec(29,"Values"),r.Rb(),r.Sb(30,"th",6),r.Ec(31,"Default"),r.Rb(),r.Sb(32,"th",4),r.Ec(33,"Effect"),r.Rb(),r.Rb(),r.Rb(),r.Sb(34,"tbody"),r.Sb(35,"tr"),r.Sb(36,"td",4),r.Sb(37,"b"),r.Ec(38,"[(clrEditMode)]"),r.Rb(),r.Sb(39,"div",7),r.Ec(40,"Type: boolean"),r.Rb(),r.Sb(41,"div",7),r.Ec(42,"Default: false"),r.Rb(),r.Rb(),r.Sb(43,"td",5),r.Ec(44,"true, false"),r.Rb(),r.Sb(45,"td",6),r.Ec(46,"false"),r.Rb(),r.Sb(47,"td",4),r.Ec(48,"Controls whether edit mode is active or not"),r.Rb(),r.Rb(),r.Sb(49,"tr"),r.Sb(50,"td",4),r.Sb(51,"b"),r.Ec(52,"[clrViewRef]"),r.Rb(),r.Sb(53,"div",7),r.Ec(54,"Type: TemplateRef"),r.Rb(),r.Sb(55,"div",7),r.Ec(56,"Default: undefined"),r.Rb(),r.Rb(),r.Sb(57,"td",5),r.Ec(58,"any template reference"),r.Rb(),r.Sb(59,"td",6),r.Ec(60,"undefined"),r.Rb(),r.Sb(61,"td",4),r.Ec(62,"Template reference to the view block"),r.Rb(),r.Rb(),r.Sb(63,"tr"),r.Sb(64,"td",4),r.Sb(65,"b"),r.Ec(66,"[clrEditRef]"),r.Rb(),r.Sb(67,"div",7),r.Ec(68,"Type: TemplateRef"),r.Rb(),r.Sb(69,"div",7),r.Ec(70,"Default: undefined"),r.Rb(),r.Rb(),r.Sb(71,"td",5),r.Ec(72,"any template reference"),r.Rb(),r.Sb(73,"td",6),r.Ec(74,"undefined"),r.Rb(),r.Sb(75,"td",4),r.Ec(76,"Template reference to the edit block"),r.Rb(),r.Rb(),r.Sb(77,"tr"),r.Sb(78,"td",4),r.Sb(79,"b"),r.Ec(80,"[clrEditable]"),r.Rb(),r.Sb(81,"div",7),r.Ec(82,"Type: boolean"),r.Rb(),r.Sb(83,"div",7),r.Ec(84,"Default: true"),r.Rb(),r.Rb(),r.Sb(85,"td",5),r.Ec(86,"true, false"),r.Rb(),r.Sb(87,"td",6),r.Ec(88,"true"),r.Rb(),r.Sb(89,"td",4),r.Ec(90,"Controls whether the section is editable"),r.Rb(),r.Rb(),r.Sb(91,"tr"),r.Sb(92,"td",4),r.Sb(93,"b"),r.Ec(94,"[clrTitle]"),r.Rb(),r.Sb(95,"div",7),r.Ec(96,"Type: String"),r.Rb(),r.Sb(97,"div",7),r.Ec(98,'Default: ""'),r.Rb(),r.Rb(),r.Sb(99,"td",5),r.Ec(100,"any string"),r.Rb(),r.Sb(101,"td",6),r.Ec(102,'""'),r.Rb(),r.Sb(103,"td",4),r.Ec(104,"Defines the title of the View/Edit Section"),r.Rb(),r.Rb(),r.Sb(105,"tr"),r.Sb(106,"td",4),r.Sb(107,"b"),r.Ec(108,"[clrSaveText]"),r.Rb(),r.Sb(109,"div",7),r.Ec(110,"Type: String"),r.Rb(),r.Sb(111,"div",7),r.Ec(112,'Default: "Save"'),r.Rb(),r.Rb(),r.Sb(113,"td",5),r.Ec(114,"any string"),r.Rb(),r.Sb(115,"td",6),r.Ec(116,'"Save"'),r.Rb(),r.Sb(117,"td",4),r.Ec(118,"Defines the text of the submit button"),r.Rb(),r.Rb(),r.Sb(119,"tr"),r.Sb(120,"td",4),r.Sb(121,"b"),r.Ec(122,"[clrPreventModeChangeOnSave]"),r.Rb(),r.Sb(123,"div",7),r.Ec(124,"Type: boolean"),r.Rb(),r.Sb(125,"div",7),r.Ec(126,"Default: false"),r.Rb(),r.Rb(),r.Sb(127,"td",5),r.Ec(128,"true, false"),r.Rb(),r.Sb(129,"td",6),r.Ec(130,"false"),r.Rb(),r.Sb(131,"td",4),r.Ec(132,"Controls whether clicking the save button prevents change from edit to view mode (e.g.: for validation)"),r.Rb(),r.Rb(),r.Sb(133,"tr"),r.Sb(134,"td",4),r.Sb(135,"b"),r.Ec(136,"[clrCancelText]"),r.Rb(),r.Sb(137,"div",7),r.Ec(138,"Type: String"),r.Rb(),r.Sb(139,"div",7),r.Ec(140,'Default: "Cancel"'),r.Rb(),r.Rb(),r.Sb(141,"td",5),r.Ec(142,"any string"),r.Rb(),r.Sb(143,"td",6),r.Ec(144,'"Cancel"'),r.Rb(),r.Sb(145,"td",4),r.Ec(146,"Defines the text of the cancel button"),r.Rb(),r.Rb(),r.Sb(147,"tr"),r.Sb(148,"td",4),r.Sb(149,"b"),r.Ec(150,"[clrEditIcon]"),r.Rb(),r.Sb(151,"div",7),r.Ec(152,"Type: String"),r.Rb(),r.Sb(153,"div",7),r.Ec(154,'Default: "pencil"'),r.Rb(),r.Rb(),r.Sb(155,"td",5),r.Ec(156,"any shape of clr-icon"),r.Rb(),r.Sb(157,"td",6),r.Ec(158,'"pencil"'),r.Rb(),r.Sb(159,"td",4),r.Ec(160,"Defines the edit icon. Every shape of clr-icon can be used"),r.Rb(),r.Rb(),r.Sb(161,"tr"),r.Sb(162,"td",4),r.Sb(163,"b"),r.Ec(164,"(clrSectionSubmitted)"),r.Rb(),r.Sb(165,"div",7),r.Ec(166,"Type: EventEmitter"),r.Rb(),r.Nb(167,"div",7),r.Rb(),r.Nb(168,"td",5),r.Nb(169,"td",6),r.Sb(170,"td",4),r.Ec(171,"Will be triggered by submit clicks"),r.Rb(),r.Rb(),r.Sb(172,"tr"),r.Sb(173,"td",4),r.Sb(174,"b"),r.Ec(175,"(clrSectionEditCancelled)"),r.Rb(),r.Sb(176,"div",7),r.Ec(177,"Type: EventEmitter"),r.Rb(),r.Nb(178,"div",7),r.Rb(),r.Nb(179,"td",5),r.Nb(180,"td",6),r.Sb(181,"td",4),r.Ec(182,"Will be triggered by cancel/escape clicks"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(183,"p"),r.Ec(184," To define custom actions simply put the attribute "),r.Sb(185,"code",8),r.Ec(186,"action-block"),r.Rb(),r.Ec(187," to an element. "),r.Rb(),r.Rb(),r.Sb(188,"div",9),r.Sb(189,"h3",10),r.Ec(190,"Code & Examples"),r.Rb(),r.Sb(191,"h4"),r.Ec(192,"Side by side example with validation"),r.Rb(),r.Sb(193,"div",11),r.Sb(194,"div",12),r.Sb(195,"clr-view-edit-section",13),r.ac("clrEditModeChange",(function(e){return t.editMode1=e}))("clrSectionSubmitted",(function(){return t.sectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.sectionCancelled()})),r.Cc(196,s,16,3,"ng-template",null,14,r.Dc),r.Cc(198,m,18,1,"ng-template",null,15,r.Dc),r.Rb(),r.Rb(),r.Sb(200,"div",16),r.Sb(201,"clr-view-edit-section",17),r.ac("clrEditModeChange",(function(e){return t.editMode2=e}))("clrSectionSubmitted",(function(){return t.addSectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.addSectionCancelled()})),r.Cc(202,u,11,2,"ng-template",null,18,r.Dc),r.Cc(204,p,10,6,"ng-template",null,19,r.Dc),r.Rb(),r.Rb(),r.Rb(),r.Nb(206,"clr-code-snippet",20),r.Sb(207,"h4"),r.Ec(208,"Custom actions"),r.Rb(),r.Sb(209,"p"),r.Ec(210,"When using custom actions you may use css class "),r.Sb(211,"code",8),r.Ec(212,"ves-action"),r.Rb(),r.Ec(213," to remove the right margin/padding."),r.Nb(214,"br"),r.Ec(215," Additionally you need to show/hide those actions on your own in view/edit mode if you want to. In this example, all actions are hidden in edit mode."),r.Rb(),r.Sb(216,"div",11),r.Sb(217,"div",21),r.Sb(218,"clr-view-edit-section",17),r.ac("clrEditModeChange",(function(e){return t.editMode3=e}))("clrSectionSubmitted",(function(){return t.compSectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.compSectionCancelled()})),r.Sb(219,"div",22),r.Cc(220,E,4,0,"clr-dropdown",23),r.Rb(),r.Cc(221,h,22,6,"ng-template",null,24,r.Dc),r.Cc(223,f,32,9,"ng-template",null,25,r.Dc),r.Rb(),r.Rb(),r.Rb(),r.Nb(225,"clr-code-snippet",20),r.Sb(226,"h4"),r.Ec(227,"Not editable"),r.Rb(),r.Sb(228,"div",11),r.Sb(229,"div",21),r.Sb(230,"clr-view-edit-section",26),r.Cc(231,g,11,0,"ng-template",null,27,r.Dc),r.Rb(),r.Rb(),r.Rb(),r.Nb(233,"clr-code-snippet",20),r.Sb(234,"h4"),r.Ec(235,"Custom icon and button texts"),r.Rb(),r.Sb(236,"div",11),r.Sb(237,"div",21),r.Sb(238,"clr-view-edit-section",28),r.ac("clrEditModeChange",(function(e){return t.editMode4=e}))("clrSectionSubmitted",(function(){return t.compSectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.compSectionCancelled()})),r.Cc(239,v,22,6,"ng-template",null,29,r.Dc),r.Cc(241,w,32,9,"ng-template",null,30,r.Dc),r.Rb(),r.Rb(),r.Rb(),r.Nb(243,"clr-code-snippet",20),r.Nb(244,"clr-code-snippet",31),r.Sb(245,"h4"),r.Ec(246,"Submit form on enter"),r.Rb(),r.Sb(247,"p"),r.Ec(248,"As the save button is outside your form, following steps need to be done to enable form (edit-section) submit on 'enter'"),r.Rb(),r.Sb(249,"ul"),r.Sb(250,"li"),r.Ec(251,"Add hidden submit button to your form to activate 'enter' key handling in browser"),r.Rb(),r.Sb(252,"li"),r.Ec(253,"React to submit of form and switch section to view mode"),r.Rb(),r.Rb(),r.Nb(254,"clr-code-snippet",20),r.Nb(255,"clr-code-snippet",31),r.Sb(256,"h4"),r.Ec(257,"Tips"),r.Rb(),r.Sb(258,"ul"),r.Sb(259,"li"),r.Ec(260," Use class "),r.Sb(261,"code",8),r.Ec(262,"text-truncate"),r.Rb(),r.Ec(263," in view-block to prevent long texts from destroying your layout. "),r.Rb(),r.Sb(264,"li"),r.Ec(265," Use pipe "),r.Sb(266,"code",8),r.Ec(267,'|| "&nbsp;"'),r.Rb(),r.Ec(268," in view-block so the span element always has a correct height. "),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e){const e=r.sc(197),c=r.sc(199),n=r.sc(203),i=r.sc(205),l=r.sc(222),o=r.sc(224),b=r.sc(232),d=r.sc(240),a=r.sc(242);r.kc("ng",t.ng)("ui",t.ui)("title",t.title)("newLayout",t.newLayout),r.Ab(195),r.kc("clrEditMode",t.editMode1)("clrPreventModeChangeOnSave",!t.exampleForm.valid)("clrTitle",t.sectionTitle)("clrViewRef",e)("clrEditRef",c),r.Ab(6),r.kc("clrEditMode",t.editMode2)("clrTitle",t.addSectionTitle)("clrViewRef",n)("clrEditRef",i),r.Ab(5),r.kc("clrCode",t.htmlExampleSideBySide),r.Ab(12),r.kc("clrEditMode",t.editMode3)("clrTitle",t.customActionsTitle)("clrViewRef",l)("clrEditRef",o),r.Ab(2),r.kc("ngIf",!t.editMode3),r.Ab(5),r.kc("clrCode",t.htmlExampleCustomActions),r.Ab(5),r.kc("clrEditable",!1)("clrViewRef",b),r.Ab(3),r.kc("clrCode",t.htmlExampleNotEditable),r.Ab(5),r.kc("clrEditMode",t.editMode4)("clrTitle",t.compSectionTitle)("clrEditIcon",t.compEditIcon)("clrViewRef",d)("clrEditRef",a),r.Ab(5),r.kc("clrCode",t.htmlExampleFullIcon),r.Ab(1),r.kc("clrCode",t.htmlExampleFullIconAngular)("clrLanguage","typescript"),r.Ab(10),r.kc("clrCode",t.htmlExampleFormSubmit),r.Ab(1),r.kc("clrCode",t.angularExampleFormSubmit)("clrLanguage","typescript")}},directives:[d.a,o.O,a.a,n.q,i.A,i.n,i.o,l.u,l.E,l.D,i.f,l.C,i.b,l.B,i.m,i.d,l.i,i.p,l.q,l.t,l.x,l.A,l.s,l.r,l.o,l.p,l.O,i.w,l.N,i.r,i.z,l.L,l.M,i.t,l.K,l.g,l.h,i.a,l.f],pipes:[n.f],encapsulation:2}),e})();var y=c("JsA7"),M=c("tyNb"),k=c("XPsC");let T=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},imports:[[n.c,k.a,y.a,i.u,M.g.forChild([{path:"",component:C}]),i.h,l.v,l.a,o.a]]}),e})()}}]);