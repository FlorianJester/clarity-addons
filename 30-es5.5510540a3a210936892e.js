function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var c,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;c=Reflect.construct(n,arguments,i)}else c=n.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{HAsF:function(e,t,c){"use strict";c.r(t),c.d(t,"ViewEditSectionDemoModule",(function(){return A}));var n=c("ofXK"),i=c("3Pt+"),l=c("8MG2"),o=c("6Y1o"),r=c("N+3j"),b=c("fXoL"),a=c("0G9f"),d=c("vAyd");function s(e,t){if(1&e&&(b.Sb(0,"form",32),b.Sb(1,"div",33),b.Sb(2,"label",34),b.Ec(3,"First name"),b.Rb(),b.Sb(4,"span",35),b.Ec(5),b.Rb(),b.Rb(),b.Sb(6,"div",33),b.Sb(7,"label",34),b.Ec(8,"Last name"),b.Rb(),b.Sb(9,"span",35),b.Ec(10),b.Rb(),b.Rb(),b.Sb(11,"div",33),b.Sb(12,"label",34),b.Ec(13,"E-mail"),b.Rb(),b.Sb(14,"span",35),b.Ec(15),b.Rb(),b.Rb(),b.Rb()),2&e){var c=b.cc();b.Ab(5),b.Fc(c.first||"\xa0"),b.Ab(5),b.Fc(c.last||"\xa0"),b.Ab(5),b.Fc(c.email||"\xa0")}}function u(e,t){if(1&e){var c=b.Tb();b.Sb(0,"form",36),b.ac("submit",(function(){return b.wc(c),b.cc().onFormSubmit()})),b.Sb(1,"clr-input-container"),b.Sb(2,"label",37),b.Ec(3,"First name"),b.Rb(),b.Nb(4,"input",38),b.Sb(5,"clr-control-error"),b.Ec(6,"You must enter a first name."),b.Rb(),b.Rb(),b.Sb(7,"clr-input-container"),b.Sb(8,"label",37),b.Ec(9,"Last name"),b.Rb(),b.Nb(10,"input",39),b.Sb(11,"clr-control-error"),b.Ec(12,"You must enter a last name."),b.Rb(),b.Rb(),b.Sb(13,"clr-input-container"),b.Sb(14,"label",40),b.Ec(15,"E-mail"),b.Rb(),b.Nb(16,"input",41),b.Rb(),b.Nb(17,"input",42),b.Rb()}if(2&e){var n=b.cc();b.kc("formGroup",n.exampleForm)}}function m(e,t){if(1&e&&(b.Sb(0,"form",32),b.Sb(1,"div",33),b.Sb(2,"label",34),b.Ec(3,"Hobby"),b.Rb(),b.Sb(4,"span",35),b.Ec(5),b.Rb(),b.Rb(),b.Sb(6,"div",33),b.Sb(7,"label",34),b.Ec(8,"Driving licence number"),b.Rb(),b.Sb(9,"span",35),b.Ec(10),b.Rb(),b.Rb(),b.Rb()),2&e){var c=b.cc();b.Ab(5),b.Fc(c.hobby||"\xa0"),b.Ab(5),b.Fc(c.licence||"\xa0")}}var S=function(){return{updateOn:"blur"}};function p(e,t){if(1&e){var c=b.Tb();b.Sb(0,"form",43),b.ac("submit",(function(){return b.wc(c),b.cc().onAddFormSubmit()})),b.Sb(1,"clr-input-container"),b.Sb(2,"label",40),b.Ec(3,"Hobby"),b.Rb(),b.Sb(4,"input",44),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editHobby=e})),b.Rb(),b.Rb(),b.Sb(5,"clr-input-container"),b.Sb(6,"label",40),b.Ec(7,"Driving licence number"),b.Rb(),b.Sb(8,"input",45),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editLicence=e})),b.Rb(),b.Rb(),b.Nb(9,"input",42),b.Rb()}if(2&e){var n=b.cc();b.Ab(4),b.kc("ngModel",n.editHobby)("ngModelOptions",b.oc(4,S)),b.Ab(4),b.kc("ngModel",n.editLicence)("ngModelOptions",b.oc(5,S))}}function R(e,t){if(1&e){var c=b.Tb();b.Sb(0,"clr-dropdown-menu",49),b.Sb(1,"button",50),b.ac("click",(function(){return b.wc(c),b.cc(2).onEdit()})),b.Ec(2," Edit "),b.Rb(),b.Sb(3,"button",51),b.Ec(4," Duplicate "),b.Rb(),b.Sb(5,"button",51),b.Ec(6," Delete "),b.Rb(),b.Rb()}}function f(e,t){1&e&&(b.Sb(0,"clr-dropdown"),b.Sb(1,"button",46),b.Nb(2,"clr-icon",47),b.Rb(),b.Cc(3,R,7,0,"clr-dropdown-menu",48),b.Rb())}function E(e,t){if(1&e&&(b.Sb(0,"form",32),b.Sb(1,"div",33),b.Sb(2,"label",52),b.Ec(3,"Date of birth"),b.Rb(),b.Sb(4,"span",53),b.Ec(5),b.dc(6,"date"),b.Rb(),b.Rb(),b.Sb(7,"div",33),b.Sb(8,"label",54),b.Ec(9,"Gender"),b.Rb(),b.Sb(10,"span",53),b.Ec(11),b.Rb(),b.Rb(),b.Sb(12,"div",33),b.Sb(13,"label",55),b.Ec(14,"Status"),b.Rb(),b.Sb(15,"span",53),b.Ec(16),b.Rb(),b.Rb(),b.Sb(17,"div",33),b.Sb(18,"label",56),b.Ec(19,"Terms & Conditions"),b.Rb(),b.Sb(20,"span",53),b.Ec(21),b.Rb(),b.Rb(),b.Rb()),2&e){var c=b.cc();b.Ab(5),b.Fc(b.ec(6,4,c.birthdate||"")),b.Ab(6),b.Fc(c.gender||"\xa0"),b.Ab(5),b.Fc(c.status||"\xa0"),b.Ab(5),b.Fc(c.getTermsText())}}function h(e,t){if(1&e){var c=b.Tb();b.Sb(0,"form",43),b.ac("submit",(function(){return b.wc(c),b.cc().onCompFormSubmit()})),b.Sb(1,"clr-date-container",11),b.Sb(2,"label"),b.Ec(3,"Date of birth"),b.Rb(),b.Sb(4,"input",57),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editBirthdate=e})),b.Rb(),b.Rb(),b.Sb(5,"clr-select-container"),b.Sb(6,"label"),b.Ec(7,"Gender"),b.Rb(),b.Sb(8,"select",58),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editGender=e})),b.Sb(9,"option"),b.Ec(10,"male"),b.Rb(),b.Sb(11,"option"),b.Ec(12,"female"),b.Rb(),b.Rb(),b.Rb(),b.Sb(13,"clr-radio-container"),b.Sb(14,"label"),b.Ec(15,"Status"),b.Rb(),b.Sb(16,"clr-radio-wrapper"),b.Sb(17,"input",59),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editStatus=e})),b.Rb(),b.Sb(18,"label"),b.Ec(19,"Active"),b.Rb(),b.Rb(),b.Sb(20,"clr-radio-wrapper"),b.Sb(21,"input",59),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editStatus=e})),b.Rb(),b.Sb(22,"label"),b.Ec(23,"Inactive"),b.Rb(),b.Rb(),b.Rb(),b.Sb(24,"clr-checkbox-container"),b.Sb(25,"label"),b.Ec(26,"Terms & Conditions"),b.Rb(),b.Sb(27,"clr-checkbox-wrapper"),b.Sb(28,"label",21),b.Ec(29,"I agree to the terms and conditions"),b.Rb(),b.Sb(30,"input",60),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editTerms=e})),b.Rb(),b.Rb(),b.Rb(),b.Nb(31,"input",42),b.Rb()}if(2&e){var n=b.cc();b.Ab(4),b.kc("ngModel",n.editBirthdate)("ngModelOptions",b.oc(8,S)),b.Ab(4),b.kc("ngModel",n.editGender),b.Ab(9),b.kc("value",1)("ngModel",n.editStatus),b.Ab(4),b.kc("value",2)("ngModel",n.editStatus),b.Ab(9),b.kc("ngModel",n.editTerms)}}function v(e,t){1&e&&(b.Sb(0,"form",32),b.Sb(1,"div",33),b.Sb(2,"label",61),b.Ec(3,"Hobby"),b.Rb(),b.Sb(4,"span",53),b.Ec(5,"Computer"),b.Rb(),b.Rb(),b.Sb(6,"div",33),b.Sb(7,"label",61),b.Ec(8,"Driving licence number"),b.Rb(),b.Sb(9,"span",53),b.Ec(10,"12345"),b.Rb(),b.Rb(),b.Rb())}function g(e,t){if(1&e&&(b.Sb(0,"form",32),b.Sb(1,"div",33),b.Sb(2,"label",52),b.Ec(3,"Date of birth"),b.Rb(),b.Sb(4,"span",53),b.Ec(5),b.dc(6,"date"),b.Rb(),b.Rb(),b.Sb(7,"div",33),b.Sb(8,"label",54),b.Ec(9,"Gender"),b.Rb(),b.Sb(10,"span",53),b.Ec(11),b.Rb(),b.Rb(),b.Sb(12,"div",33),b.Sb(13,"label",55),b.Ec(14,"Status"),b.Rb(),b.Sb(15,"span",53),b.Ec(16),b.Rb(),b.Rb(),b.Sb(17,"div",33),b.Sb(18,"label",56),b.Ec(19,"Terms & Conditions"),b.Rb(),b.Sb(20,"span",53),b.Ec(21),b.Rb(),b.Rb(),b.Rb()),2&e){var c=b.cc();b.Ab(5),b.Fc(b.ec(6,4,c.birthdate||"")),b.Ab(6),b.Fc(c.gender||"\xa0"),b.Ab(5),b.Fc(c.status||"\xa0"),b.Ab(5),b.Fc(c.getTermsText())}}function w(e,t){if(1&e){var c=b.Tb();b.Sb(0,"form",43),b.ac("submit",(function(){return b.wc(c),b.cc().onCompFormSubmit()})),b.Sb(1,"clr-date-container",11),b.Sb(2,"label"),b.Ec(3,"Date of birth"),b.Rb(),b.Sb(4,"input",57),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editBirthdate=e})),b.Rb(),b.Rb(),b.Sb(5,"clr-select-container"),b.Sb(6,"label"),b.Ec(7,"Gender"),b.Rb(),b.Sb(8,"select",58),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editGender=e})),b.Sb(9,"option"),b.Ec(10,"male"),b.Rb(),b.Sb(11,"option"),b.Ec(12,"female"),b.Rb(),b.Rb(),b.Rb(),b.Sb(13,"clr-radio-container"),b.Sb(14,"label"),b.Ec(15,"Status"),b.Rb(),b.Sb(16,"clr-radio-wrapper"),b.Sb(17,"input",59),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editStatus=e})),b.Rb(),b.Sb(18,"label"),b.Ec(19,"Active"),b.Rb(),b.Rb(),b.Sb(20,"clr-radio-wrapper"),b.Sb(21,"input",59),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editStatus=e})),b.Rb(),b.Sb(22,"label"),b.Ec(23,"Inactive"),b.Rb(),b.Rb(),b.Rb(),b.Sb(24,"clr-checkbox-container"),b.Sb(25,"label"),b.Ec(26,"Terms & Conditions"),b.Rb(),b.Sb(27,"clr-checkbox-wrapper"),b.Sb(28,"label",21),b.Ec(29,"I agree to the terms and conditions"),b.Rb(),b.Sb(30,"input",60),b.ac("ngModelChange",(function(e){return b.wc(c),b.cc().editTerms=e})),b.Rb(),b.Rb(),b.Rb(),b.Nb(31,"input",42),b.Rb()}if(2&e){var n=b.cc();b.Ab(4),b.kc("ngModel",n.editBirthdate)("ngModelOptions",b.oc(8,S)),b.Ab(4),b.kc("ngModel",n.editGender),b.Ab(9),b.kc("value",1)("ngModel",n.editStatus),b.Ab(4),b.kc("value",2)("ngModel",n.editStatus),b.Ab(9),b.kc("ngModel",n.editTerms)}}var y,C,M=((y=function(e){_inherits(c,e);var t=_createSuper(c);function c(){var e;return _classCallCheck(this,c),(e=t.call(this,"view-edit-section")).htmlExampleSideBySide='\n<div class="clr-col-12 clr-col-lg-6">\n    <clr-view-edit-section [(clrEditMode)]="editMode1" [clrPreventModeChangeOnSave]="!exampleForm.valid" [clrTitle]="sectionTitle"\n        (clrSectionSubmitted)="sectionSubmitted()" (clrSectionEditCancelled)="sectionCancelled()"\n        [clrViewRef]="viewBlock1" [clrEditRef]="editBlock1">\n        <ng-template #viewBlock1>\n            <form clrForm clrLayout="horizontal">\n              <div class="clr-form-control clr-row">\n                  <label class="clr-col-md-4 clr-control-label">First name</label>\n                  <span class="text-truncate clr-col-md-8">{{first || "&nbsp;"}}</span>\n              </div>\n              <div class="clr-form-control clr-row">\n                  <label class="clr-col-md-4 clr-control-label">Last name</label>\n                  <span class="text-truncate clr-col-md-8">{{last || "&nbsp;"}}</span>\n              </div>\n              <div class="clr-form-control clr-row">\n                  <label class="clr-col-md-4 clr-control-label">E-mail</label>\n                  <span class="text-truncate clr-col-md-8">{{email || "&nbsp;"}}</span>\n              </div>\n            </form>\n        </ng-template>\n        <ng-template #editBlock1>\n            <form clrForm clrLayout="horizontal" [formGroup]="exampleForm" (submit)="onFormSubmit()">\n              <clr-input-container>\n                  <label class="clr-col-md-4 required">First name</label>\n                  <input class="clr-col-md-8" clrInput type="text" formControlName="editFirst" name="first"/>\n                  <clr-control-error>You must enter a first name.</clr-control-error>\n              </clr-input-container>\n              <clr-input-container>\n                  <label class="clr-col-md-4 required">Last name</label>\n                  <input class="clr-col-md-8" clrInput type="text" formControlName="editLast" name="last"/>\n                  <clr-control-error>You must enter a last name.</clr-control-error>\n              </clr-input-container>\n              <clr-input-container>\n                  <label class="clr-col-md-4">E-mail</label>\n                  <input class="clr-col-md-8" clrInput type="text" formControlName="editEmail" name="email"/>\n              </clr-input-container>\n              <input type="submit" style="display: none">\n            </form>\n        </ng-template>\n    </clr-view-edit-section>\n</div>\n',e.htmlExampleFullIcon='\n<div class="clr-col-12">\n    <clr-view-edit-section [clrTitle]="compSectionTitle" [clrEditIcon]="compEditIcon"\n    clrSaveText="Save it" clrCancelText="Cancel it" (clrSectionSubmitted)="compSectionSubmitted()"\n    (clrSectionEditCancelled)="compSectionCancelled()" [clrViewRef]="viewBlock5" [clrEditRef]="editBlock5">\n        <ng-template #viewBlock5>\n            ...\n        </ng-template>\n        <ng-template #editBlock5>\n            ...\n        </ng-template>\n    </clr-view-edit-section>\n</div>\n',e.htmlExampleFullIconAngular='\ncompEditIcon: string = "cog";\n',e.htmlExampleCustomActions='\n<clr-view-edit-section [(clrEditMode)]="editMode" [clrTitle]="customActionsTitle"\n    (clrSectionSubmitted)="compSectionSubmitted()" (clrSectionEditCancelled)="compSectionCancelled()"\n    [clrViewRef]="viewBlock3" [clrEditRef]="editBlock3">\n    <div action-block>\n        <clr-dropdown *ngIf="!editMode">\n          <button type="button" class="btn btn-icon btn-link ves-action dropdown-toggle" clrDropdownTrigger>\n            <clr-icon shape="ellipsis-vertical"></clr-icon>\n          </button>\n          <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n            <button type="button" (click)="onEdit()" clrDropdownItem>\n              Edit\n            </button>\n            <button type="button" clrDropdownItem>\n              Duplicate\n            </button>\n            <button type="button" clrDropdownItem>\n              Delete\n            </button>\n          </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    ...\n</clr-view-edit-section>\n',e.htmlExampleNotEditable='\n<clr-view-edit-section clrTitle="Not Editable" [clrEditable]="false" [clrViewRef]="viewBlock4">\n    <ng-template #viewBlock4>\n        ...\n    </ng-template>\n</clr-view-edit-section>\n',e.htmlExampleFormSubmit='\n<clr-view-edit-section [(clrEditMode)]="editMode" (clrSectionSubmitted)="sectionSubmitted()" [clrEditRef]="editBlock">\n    ...\n    <ng-template #editBlock>\n        <form ... (submit)="onFormSubmit()">\n            ...\n            <input type="submit" style="display: none">\n        </form>\n    </ng-template>\n</clr-view-edit-section>\n',e.angularExampleFormSubmit="\neditMode = false;\n\nonFormSubmit() {\n    this.sectionSubmitted();\n    this.editMode = false;\n}\n",e.editMode1=!1,e.editMode2=!1,e.editMode3=!1,e.editMode4=!1,e.gender="male",e.status="Active",e.editBirthdate=e.birthdate,e.editGender=e.gender,e.editStatus=1,e.first="Max",e.last="Mustermann",e.email="m.mustermann@mail.com",e.compSectionTitle="Different components",e.sectionTitle="Personal Data",e.addSectionTitle="Additional Data",e.customActionsTitle="Example with multiple actions",e.compEditIcon="cog",e.exampleForm=new i.e({editFirst:new i.c(e.first,{validators:[i.y.required],updateOn:"blur"}),editLast:new i.c(e.last,{validators:[i.y.required],updateOn:"blur"}),editEmail:new i.c(e.email)}),e}return _createClass(c,[{key:"onCompFormSubmit",value:function(){document.activeElement.blur(),this.compSectionSubmitted(),this.editMode3=!1,this.editMode4=!1}},{key:"compSectionSubmitted",value:function(){this.birthdate=this.editBirthdate,this.gender=this.editGender,this.status=1===this.editStatus?"Active":"Inactive",this.terms=this.editTerms}},{key:"compSectionCancelled",value:function(){this.editBirthdate=this.birthdate,this.editGender=this.gender,this.editStatus="Active"===this.status?1:2,this.editTerms=this.terms}},{key:"getTermsText",value:function(){return this.terms?"I agreed":"I disagreed"}},{key:"onFormSubmit",value:function(){document.activeElement.blur(),this.sectionSubmitted(),this.editMode1=!1}},{key:"sectionSubmitted",value:function(){this.exampleForm.valid&&(this.first=this.exampleForm.value.editFirst,this.last=this.exampleForm.value.editLast,this.email=this.exampleForm.value.editEmail)}},{key:"sectionCancelled",value:function(){this.exampleForm.reset({editFirst:this.first,editLast:this.last,editEmail:this.email})}},{key:"onAddFormSubmit",value:function(){document.activeElement.blur(),this.addSectionSubmitted(),this.editMode2=!1}},{key:"addSectionSubmitted",value:function(){this.hobby=this.editHobby,this.licence=this.editLicence}},{key:"addSectionCancelled",value:function(){this.editHobby=this.hobby,this.editLicence=this.licence}},{key:"onEdit",value:function(){this.editMode3=!0}}]),c}(r.a)).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=b.Gb({type:y,selectors:[["clr-view-edit-section-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&b.Db("content-area",!0)("dox-content-panel",!0)},features:[b.xb],decls:269,vars:34,consts:[[3,"ng","ui","title","newLayout"],["id","view-edit-section-header",1,"component-summary"],["id","design-guidelines"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],[1,"clr-code"],["id","code-examples"],["id","examples"],[1,"clr-row"],[1,"clr-col-12","clr-col-lg-6"],[3,"clrEditMode","clrPreventModeChangeOnSave","clrTitle","clrViewRef","clrEditRef","clrEditModeChange","clrSectionSubmitted","clrSectionEditCancelled"],["viewBlock1",""],["editBlock1",""],[1,"crl-col-12","clr-col-lg-6"],[3,"clrEditMode","clrTitle","clrViewRef","clrEditRef","clrEditModeChange","clrSectionSubmitted","clrSectionEditCancelled"],["viewBlock2",""],["editBlock2",""],[3,"clrCode"],[1,"clr-col-12"],["action-block",""],[4,"ngIf"],["viewBlock3",""],["editBlock3",""],["clrTitle","Not Editable",3,"clrEditable","clrViewRef"],["viewBlock4",""],["clrSaveText","Save it","clrCancelText","Cancel it",3,"clrEditMode","clrTitle","clrEditIcon","clrViewRef","clrEditRef","clrEditModeChange","clrSectionSubmitted","clrSectionEditCancelled"],["viewBlock5",""],["editBlock5",""],[3,"clrCode","clrLanguage"],["clrForm","","clrLayout","horizontal"],[1,"clr-form-control","clr-row"],[1,"clr-col-md-4","clr-control-label"],[1,"text-truncate","clr-col-md-8"],["clrForm","","clrLayout","horizontal",3,"formGroup","submit"],[1,"clr-col-md-4","required"],["clrInput","","type","text","formControlName","editFirst","name","first",1,"clr-col-md-8"],["clrInput","","type","text","formControlName","editLast","name","last",1,"clr-col-md-8"],[1,"clr-col-md-4"],["clrInput","","type","text","formControlName","editEmail","name","email",1,"clr-col-md-8"],["type","submit",2,"display","none"],["clrForm","","clrLayout","horizontal",3,"submit"],["clrInput","","type","text","name","hobby",1,"clr-col-md-8",3,"ngModel","ngModelOptions","ngModelChange"],["clrInput","","type","text","name","licence",1,"clr-col-md-8",3,"ngModel","ngModelOptions","ngModelChange"],["type","button","clrDropdownTrigger","",1,"btn","btn-icon","btn-link","ves-action","dropdown-toggle"],["shape","ellipsis-vertical"],["clrPosition","bottom-right",4,"clrIfOpen"],["clrPosition","bottom-right"],["type","button","clrDropdownItem","",3,"click"],["type","button","clrDropdownItem",""],["for","birthdate",1,"clr-col-md-2","clr-control-label"],[1,"text-truncate","clr-col-md-10"],["for","gender",1,"clr-col-md-2","clr-control-label"],["for","status",1,"clr-col-md-2","clr-control-label"],["for","terms",1,"clr-col-md-2","clr-control-label"],["type","text","name","birthdate","clrDate","",3,"ngModel","ngModelOptions","ngModelChange"],["clrSelect","","name","gender",3,"ngModel","ngModelChange"],["clrRadio","","type","radio","name","status",3,"value","ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","terms",3,"ngModel","ngModelChange"],[1,"clr-col-md-2","clr-control-label"]],template:function(e,t){if(1&e&&(b.Sb(0,"clr-doc-wrapper",0),b.Sb(1,"article"),b.Sb(2,"h5",1),b.Ec(3," The View-Edit Section (VES) is a basic component used to display and edit data. "),b.Nb(4,"br"),b.Ec(5," View-Edit Sections should semantically group information that belongs together, providing a meaningful information structure to the user. "),b.Rb(),b.Sb(6,"div",2),b.Sb(7,"h3"),b.Ec(8,"View-mode"),b.Rb(),b.Sb(9,"p"),b.Ec(10," In view-mode the section consists of label-value pairs to display data to user. The user can switch the mode of the section clicking the pencil-icon when editing data is required. "),b.Rb(),b.Sb(11,"h3"),b.Ec(12,"Edit-mode"),b.Rb(),b.Sb(13,"p"),b.Ec(14," In edit-mode the label-value pairs transform to label-input fields, a form, and can be edited. The changes can be saved or cancelled, which will return the VES back to view-mode. The ESC key also cancels the edit-mode. "),b.Rb(),b.Sb(15,"h3"),b.Ec(16,"Multiple View-Edit Sections"),b.Rb(),b.Sb(17,"p"),b.Ec(18,"There can be multiple View-Edit sections placed in the content area, multiple sections can be edited at once, no automatic inactivation of other View-Edit Sections should occur. "),b.Nb(19,"br"),b.Ec(20," The user needs to actively end the edit-mode by saving or cancelling the changes. "),b.Rb(),b.Sb(21,"h3"),b.Ec(22,"Summary of Options"),b.Rb(),b.Sb(23,"table",3),b.Sb(24,"thead"),b.Sb(25,"tr"),b.Sb(26,"th",4),b.Ec(27,"Property"),b.Rb(),b.Sb(28,"th",5),b.Ec(29,"Values"),b.Rb(),b.Sb(30,"th",6),b.Ec(31,"Default"),b.Rb(),b.Sb(32,"th",4),b.Ec(33,"Effect"),b.Rb(),b.Rb(),b.Rb(),b.Sb(34,"tbody"),b.Sb(35,"tr"),b.Sb(36,"td",4),b.Sb(37,"b"),b.Ec(38,"[(clrEditMode)]"),b.Rb(),b.Sb(39,"div",7),b.Ec(40,"Type: boolean"),b.Rb(),b.Sb(41,"div",7),b.Ec(42,"Default: false"),b.Rb(),b.Rb(),b.Sb(43,"td",5),b.Ec(44,"true, false"),b.Rb(),b.Sb(45,"td",6),b.Ec(46,"false"),b.Rb(),b.Sb(47,"td",4),b.Ec(48,"Controls whether edit mode is active or not"),b.Rb(),b.Rb(),b.Sb(49,"tr"),b.Sb(50,"td",4),b.Sb(51,"b"),b.Ec(52,"[clrViewRef]"),b.Rb(),b.Sb(53,"div",7),b.Ec(54,"Type: TemplateRef"),b.Rb(),b.Sb(55,"div",7),b.Ec(56,"Default: undefined"),b.Rb(),b.Rb(),b.Sb(57,"td",5),b.Ec(58,"any template reference"),b.Rb(),b.Sb(59,"td",6),b.Ec(60,"undefined"),b.Rb(),b.Sb(61,"td",4),b.Ec(62,"Template reference to the view block"),b.Rb(),b.Rb(),b.Sb(63,"tr"),b.Sb(64,"td",4),b.Sb(65,"b"),b.Ec(66,"[clrEditRef]"),b.Rb(),b.Sb(67,"div",7),b.Ec(68,"Type: TemplateRef"),b.Rb(),b.Sb(69,"div",7),b.Ec(70,"Default: undefined"),b.Rb(),b.Rb(),b.Sb(71,"td",5),b.Ec(72,"any template reference"),b.Rb(),b.Sb(73,"td",6),b.Ec(74,"undefined"),b.Rb(),b.Sb(75,"td",4),b.Ec(76,"Template reference to the edit block"),b.Rb(),b.Rb(),b.Sb(77,"tr"),b.Sb(78,"td",4),b.Sb(79,"b"),b.Ec(80,"[clrEditable]"),b.Rb(),b.Sb(81,"div",7),b.Ec(82,"Type: boolean"),b.Rb(),b.Sb(83,"div",7),b.Ec(84,"Default: true"),b.Rb(),b.Rb(),b.Sb(85,"td",5),b.Ec(86,"true, false"),b.Rb(),b.Sb(87,"td",6),b.Ec(88,"true"),b.Rb(),b.Sb(89,"td",4),b.Ec(90,"Controls whether the section is editable"),b.Rb(),b.Rb(),b.Sb(91,"tr"),b.Sb(92,"td",4),b.Sb(93,"b"),b.Ec(94,"[clrTitle]"),b.Rb(),b.Sb(95,"div",7),b.Ec(96,"Type: String"),b.Rb(),b.Sb(97,"div",7),b.Ec(98,'Default: ""'),b.Rb(),b.Rb(),b.Sb(99,"td",5),b.Ec(100,"any string"),b.Rb(),b.Sb(101,"td",6),b.Ec(102,'""'),b.Rb(),b.Sb(103,"td",4),b.Ec(104,"Defines the title of the View/Edit Section"),b.Rb(),b.Rb(),b.Sb(105,"tr"),b.Sb(106,"td",4),b.Sb(107,"b"),b.Ec(108,"[clrSaveText]"),b.Rb(),b.Sb(109,"div",7),b.Ec(110,"Type: String"),b.Rb(),b.Sb(111,"div",7),b.Ec(112,'Default: "Save"'),b.Rb(),b.Rb(),b.Sb(113,"td",5),b.Ec(114,"any string"),b.Rb(),b.Sb(115,"td",6),b.Ec(116,'"Save"'),b.Rb(),b.Sb(117,"td",4),b.Ec(118,"Defines the text of the submit button"),b.Rb(),b.Rb(),b.Sb(119,"tr"),b.Sb(120,"td",4),b.Sb(121,"b"),b.Ec(122,"[clrPreventModeChangeOnSave]"),b.Rb(),b.Sb(123,"div",7),b.Ec(124,"Type: boolean"),b.Rb(),b.Sb(125,"div",7),b.Ec(126,"Default: false"),b.Rb(),b.Rb(),b.Sb(127,"td",5),b.Ec(128,"true, false"),b.Rb(),b.Sb(129,"td",6),b.Ec(130,"false"),b.Rb(),b.Sb(131,"td",4),b.Ec(132,"Controls whether clicking the save button prevents change from edit to view mode (e.g.: for validation)"),b.Rb(),b.Rb(),b.Sb(133,"tr"),b.Sb(134,"td",4),b.Sb(135,"b"),b.Ec(136,"[clrCancelText]"),b.Rb(),b.Sb(137,"div",7),b.Ec(138,"Type: String"),b.Rb(),b.Sb(139,"div",7),b.Ec(140,'Default: "Cancel"'),b.Rb(),b.Rb(),b.Sb(141,"td",5),b.Ec(142,"any string"),b.Rb(),b.Sb(143,"td",6),b.Ec(144,'"Cancel"'),b.Rb(),b.Sb(145,"td",4),b.Ec(146,"Defines the text of the cancel button"),b.Rb(),b.Rb(),b.Sb(147,"tr"),b.Sb(148,"td",4),b.Sb(149,"b"),b.Ec(150,"[clrEditIcon]"),b.Rb(),b.Sb(151,"div",7),b.Ec(152,"Type: String"),b.Rb(),b.Sb(153,"div",7),b.Ec(154,'Default: "pencil"'),b.Rb(),b.Rb(),b.Sb(155,"td",5),b.Ec(156,"any shape of clr-icon"),b.Rb(),b.Sb(157,"td",6),b.Ec(158,'"pencil"'),b.Rb(),b.Sb(159,"td",4),b.Ec(160,"Defines the edit icon. Every shape of clr-icon can be used"),b.Rb(),b.Rb(),b.Sb(161,"tr"),b.Sb(162,"td",4),b.Sb(163,"b"),b.Ec(164,"(clrSectionSubmitted)"),b.Rb(),b.Sb(165,"div",7),b.Ec(166,"Type: EventEmitter"),b.Rb(),b.Nb(167,"div",7),b.Rb(),b.Nb(168,"td",5),b.Nb(169,"td",6),b.Sb(170,"td",4),b.Ec(171,"Will be triggered by submit clicks"),b.Rb(),b.Rb(),b.Sb(172,"tr"),b.Sb(173,"td",4),b.Sb(174,"b"),b.Ec(175,"(clrSectionEditCancelled)"),b.Rb(),b.Sb(176,"div",7),b.Ec(177,"Type: EventEmitter"),b.Rb(),b.Nb(178,"div",7),b.Rb(),b.Nb(179,"td",5),b.Nb(180,"td",6),b.Sb(181,"td",4),b.Ec(182,"Will be triggered by cancel/escape clicks"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(183,"p"),b.Ec(184," To define custom actions simply put the attribute "),b.Sb(185,"code",8),b.Ec(186,"action-block"),b.Rb(),b.Ec(187," to an element. "),b.Rb(),b.Rb(),b.Sb(188,"div",9),b.Sb(189,"h3",10),b.Ec(190,"Code & Examples"),b.Rb(),b.Sb(191,"h4"),b.Ec(192,"Side by side example with validation"),b.Rb(),b.Sb(193,"div",11),b.Sb(194,"div",12),b.Sb(195,"clr-view-edit-section",13),b.ac("clrEditModeChange",(function(e){return t.editMode1=e}))("clrSectionSubmitted",(function(){return t.sectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.sectionCancelled()})),b.Cc(196,s,16,3,"ng-template",null,14,b.Dc),b.Cc(198,u,18,1,"ng-template",null,15,b.Dc),b.Rb(),b.Rb(),b.Sb(200,"div",16),b.Sb(201,"clr-view-edit-section",17),b.ac("clrEditModeChange",(function(e){return t.editMode2=e}))("clrSectionSubmitted",(function(){return t.addSectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.addSectionCancelled()})),b.Cc(202,m,11,2,"ng-template",null,18,b.Dc),b.Cc(204,p,10,6,"ng-template",null,19,b.Dc),b.Rb(),b.Rb(),b.Rb(),b.Nb(206,"clr-code-snippet",20),b.Sb(207,"h4"),b.Ec(208,"Custom actions"),b.Rb(),b.Sb(209,"p"),b.Ec(210,"When using custom actions you may use css class "),b.Sb(211,"code",8),b.Ec(212,"ves-action"),b.Rb(),b.Ec(213," to remove the right margin/padding."),b.Nb(214,"br"),b.Ec(215," Additionally you need to show/hide those actions on your own in view/edit mode if you want to. In this example, all actions are hidden in edit mode."),b.Rb(),b.Sb(216,"div",11),b.Sb(217,"div",21),b.Sb(218,"clr-view-edit-section",17),b.ac("clrEditModeChange",(function(e){return t.editMode3=e}))("clrSectionSubmitted",(function(){return t.compSectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.compSectionCancelled()})),b.Sb(219,"div",22),b.Cc(220,f,4,0,"clr-dropdown",23),b.Rb(),b.Cc(221,E,22,6,"ng-template",null,24,b.Dc),b.Cc(223,h,32,9,"ng-template",null,25,b.Dc),b.Rb(),b.Rb(),b.Rb(),b.Nb(225,"clr-code-snippet",20),b.Sb(226,"h4"),b.Ec(227,"Not editable"),b.Rb(),b.Sb(228,"div",11),b.Sb(229,"div",21),b.Sb(230,"clr-view-edit-section",26),b.Cc(231,v,11,0,"ng-template",null,27,b.Dc),b.Rb(),b.Rb(),b.Rb(),b.Nb(233,"clr-code-snippet",20),b.Sb(234,"h4"),b.Ec(235,"Custom icon and button texts"),b.Rb(),b.Sb(236,"div",11),b.Sb(237,"div",21),b.Sb(238,"clr-view-edit-section",28),b.ac("clrEditModeChange",(function(e){return t.editMode4=e}))("clrSectionSubmitted",(function(){return t.compSectionSubmitted()}))("clrSectionEditCancelled",(function(){return t.compSectionCancelled()})),b.Cc(239,g,22,6,"ng-template",null,29,b.Dc),b.Cc(241,w,32,9,"ng-template",null,30,b.Dc),b.Rb(),b.Rb(),b.Rb(),b.Nb(243,"clr-code-snippet",20),b.Nb(244,"clr-code-snippet",31),b.Sb(245,"h4"),b.Ec(246,"Submit form on enter"),b.Rb(),b.Sb(247,"p"),b.Ec(248,"As the save button is outside your form, following steps need to be done to enable form (edit-section) submit on 'enter'"),b.Rb(),b.Sb(249,"ul"),b.Sb(250,"li"),b.Ec(251,"Add hidden submit button to your form to activate 'enter' key handling in browser"),b.Rb(),b.Sb(252,"li"),b.Ec(253,"React to submit of form and switch section to view mode"),b.Rb(),b.Rb(),b.Nb(254,"clr-code-snippet",20),b.Nb(255,"clr-code-snippet",31),b.Sb(256,"h4"),b.Ec(257,"Tips"),b.Rb(),b.Sb(258,"ul"),b.Sb(259,"li"),b.Ec(260," Use class "),b.Sb(261,"code",8),b.Ec(262,"text-truncate"),b.Rb(),b.Ec(263," in view-block to prevent long texts from destroying your layout. "),b.Rb(),b.Sb(264,"li"),b.Ec(265," Use pipe "),b.Sb(266,"code",8),b.Ec(267,'|| "&nbsp;"'),b.Rb(),b.Ec(268," in view-block so the span element always has a correct height. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&e){var c=b.sc(197),n=b.sc(199),i=b.sc(203),l=b.sc(205),o=b.sc(222),r=b.sc(224),a=b.sc(232),d=b.sc(240),S=b.sc(242);b.kc("ng",t.ng)("ui",t.ui)("title",t.title)("newLayout",t.newLayout),b.Ab(195),b.kc("clrEditMode",t.editMode1)("clrPreventModeChangeOnSave",!t.exampleForm.valid)("clrTitle",t.sectionTitle)("clrViewRef",c)("clrEditRef",n),b.Ab(6),b.kc("clrEditMode",t.editMode2)("clrTitle",t.addSectionTitle)("clrViewRef",i)("clrEditRef",l),b.Ab(5),b.kc("clrCode",t.htmlExampleSideBySide),b.Ab(12),b.kc("clrEditMode",t.editMode3)("clrTitle",t.customActionsTitle)("clrViewRef",o)("clrEditRef",r),b.Ab(2),b.kc("ngIf",!t.editMode3),b.Ab(5),b.kc("clrCode",t.htmlExampleCustomActions),b.Ab(5),b.kc("clrEditable",!1)("clrViewRef",a),b.Ab(3),b.kc("clrCode",t.htmlExampleNotEditable),b.Ab(5),b.kc("clrEditMode",t.editMode4)("clrTitle",t.compSectionTitle)("clrEditIcon",t.compEditIcon)("clrViewRef",d)("clrEditRef",S),b.Ab(5),b.kc("clrCode",t.htmlExampleFullIcon),b.Ab(1),b.kc("clrCode",t.htmlExampleFullIconAngular)("clrLanguage","typescript"),b.Ab(10),b.kc("clrCode",t.htmlExampleFormSubmit),b.Ab(1),b.kc("clrCode",t.angularExampleFormSubmit)("clrLanguage","typescript")}},directives:[a.a,o.O,d.a,n.q,i.A,i.n,i.o,l.u,l.E,l.D,i.f,l.C,i.b,l.B,i.m,i.d,l.i,i.p,l.q,l.t,l.x,l.A,l.s,l.r,l.o,l.p,l.O,i.w,l.N,i.r,i.z,l.L,l.M,i.t,l.K,l.g,l.h,i.a,l.f],pipes:[n.f],encapsulation:2}),y),k=c("JsA7"),T=c("tyNb"),x=c("XPsC"),A=((C=function e(){_classCallCheck(this,e)}).\u0275mod=b.Kb({type:C}),C.\u0275inj=b.Jb({factory:function(e){return new(e||C)},imports:[[n.c,x.a,k.a,i.u,T.g.forChild([{path:"",component:M}]),i.h,l.v,l.a,o.a]]}),C)}}]);