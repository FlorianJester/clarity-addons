"use strict";(self.webpackChunkclarity_addons_website=self.webpackChunkclarity_addons_website||[]).push([[335],{7335:(D,g,a)=>{a.r(g),a.d(g,{FormsDemoModule:()=>w});var p=a(8583),t=a(4579),m=a(4916),r=a(2208),s=a(4382),Z=a(4603),b=a(2678),T=a(3540),l=a(7525),h=a(9766),_=a(5093);function A(c,d){1&c&&(l.TgZ(0,"clr-control-error"),l._uU(1,"Error message about being required"),l.qZA())}function q(c,d){1&c&&(l.TgZ(0,"clr-control-error"),l._uU(1,"Error message about requiring 5 characters "),l.qZA())}function M(c,d){1&c&&(l.TgZ(0,"clr-control-error"),l._uU(1,"Error message about being required"),l.qZA())}const i=function(){return{updateOn:"blur"}};let E=(()=>{class c extends T.K{constructor(){super("forms"),this.codeExampleFullForm='\n<form clrForm clrLayout="horizontal" class="clr-row">\n    <clr-input-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 required">Input label</label>\n        <input clrInput class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3" type="text"\n               [(ngModel)]="inputText" [ngModelOptions]="{ updateOn: \'blur\' }"\n               name="inputName" required minlength="5"/>\n        <clr-control-helper>Helper text that shows while it is pristine and valid</clr-control-helper>\n        <clr-control-error *clrIfError="\'required\'">Error message about being required</clr-control-error>\n        <clr-control-error *clrIfError="\'minlength\'">Error message about requiring 5 characters\n        </clr-control-error>\n    </clr-input-container>\n    <clr-textarea-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 required">Textarea label</label>\n        <textarea clrTextarea class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                  [(ngModel)]="textareaText" [ngModelOptions]="{ updateOn: \'blur\' }"\n                  name="description" required></textarea>\n        <clr-control-error *clrIfError="\'required\'">Error message about being required</clr-control-error>\n    </clr-textarea-container>\n    <clr-password-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2">Password label</label>\n        <input clrPassword class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n               placeholder="Password please!" type="text"\n               [(ngModel)]="passwordText" [ngModelOptions]="{ updateOn: \'blur\' }" name="passwordName"/>\n    </clr-password-container>\n    <clr-select-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 required">Select label</label>\n        <select clrSelect class="clr-col-6 clr-col-sm-3 clr-col-md-2" name="options"\n                [(ngModel)]="selectOption">\n            <option value="one">One</option>\n            <option value="two">Two</option>\n            <option value="three">Three</option>\n        </select>\n    </clr-select-container>\n    <clr-combobox-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2">Combobox label</label>\n        <clr-combobox class="clr-col-6 clr-col-sm-3 clr-col-md-2">\n            <clr-options>\n                <clr-option [clrValue]="\'Option 1\'">Option 1</clr-option>\n                <clr-option [clrValue]="\'Option 2\'">Option 2</clr-option>\n                <clr-option [clrValue]="\'Option 3\'">Option 3</clr-option>\n            </clr-options>\n        </clr-combobox>\n    </clr-combobox-container>\n    <clr-radio-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 required">Radio label</label>\n        <clr-radio-wrapper>\n            <input type="radio" class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3" \n                clrRadio name="options" value="1" required [(ngModel)]="radioOption"/>\n            <label>Option 1</label>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <input type="radio" clrRadio name="options" value="2" required [(ngModel)]="radioOption"/>\n            <label>Option 2</label>\n        </clr-radio-wrapper>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>This field is required!</clr-control-error>\n    </clr-radio-container>\n    <clr-date-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 ">Date label</label>\n        <input class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3" type="text" [(ngModel)]="date"\n               [ngModelOptions]="{ updateOn: \'blur\' }" name="date" clrDate>\n    </clr-date-container>\n    <clr-input-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 ">Time label</label>\n        <input class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3" type="time" [(ngModel)]="time"\n               [ngModelOptions]="{ updateOn: \'blur\' }" name="time" clrInput>\n    </clr-input-container>\n    <clr-date-time-container class="clr-col-12 clr-row">\n        <clr-date-container>\n            <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2">Date & time label</label>\n            <input class="clr-col-8" clrDate type="text" [(ngModel)]="date"\n                   [ngModelOptions]="{ updateOn: \'blur\' }" name="date">\n        </clr-date-container>\n        <input type="time" [(ngModel)]="time" [ngModelOptions]="{ updateOn: \'blur\' }" name="time" clrTime>\n    </clr-date-time-container>\n    <clr-input-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 ">Money label</label>\n        <input class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3" clrInput clrNumeric\n               class="clr-col-2" type="text" [(clrNumericValue)]="money" clrUnit="\u20ac"/>\n    </clr-input-container>\n    <clr-checkbox-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 ">Checkbox label</label>\n        <clr-checkbox-wrapper>\n            <label>Option</label>\n            <input clrCheckbox class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                type="checkbox" [(ngModel)]="checkboxValue" name="checkboxName"/>\n        </clr-checkbox-wrapper>\n    </clr-checkbox-container>\n    <clr-toggle-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2">Toggle label</label>\n        <clr-toggle-wrapper>\n            <input type="checkbox" class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                id="toggle" name="toggle" [(ngModel)]="toggleValue" clrToggle/>\n            <label for="toggle" class="clr-col-none"></label>\n        </clr-toggle-wrapper>\n    </clr-toggle-container>\n    <clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data"\n                            [ngModelOptions]="{ updateOn: \'blur\' }"\n                            clrRequiredAllMultilang\n                            clrControlClasses="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                            name="template">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 required">Multilingual Input</label>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n        <clr-control-helper>Helper text</clr-control-helper>\n    </clr-multilingual-input>\n    <clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data2"\n                               [ngModelOptions]="{ updateOn: \'blur\' }"\n                               clrRequiredAllMultilang\n                               clrControlClasses="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                               name="template2">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 required">Multilingual Input</label>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n        <clr-control-helper>Helper text</clr-control-helper>\n    </clr-multilingual-textarea>\n</form>\n',this.codeExampleFormSubmit='\n<form ... (submit)="onFormSubmit()">\n    ...\n    <input type="submit" style="display: none"> \x3c!-- Not needed, if you already have a submit button--\x3e\n</form>\n',this.codeExampleFormSubmitBlur="\nonFormSubmit() {\n    (<HTMLElement>document.activeElement).blur();\n    ...\n}\n",this.codeExampleFormSubmitGeneral="\n@ViewChild(ClrForm, { static: true }) clrForm: ClrForm;\n\nonFormSubmit() {\n    (<HTMLElement>document.activeElement).blur(); // to correctly handle invalid inputs when hitting enter\n    this.form.updateValueAndValidity(); // form is the instance to the FormGroup (reactive) or ngForm (template)\n\n    if (this.form.valid) {\n      // save the form\n    } else {\n      this.clrForm.markAsTouched(); // to show validation errors for not-touched fields\n    }\n}\n",this.codeExampleROHorizontal='\n<form clrForm [clrLayout]="\'horizontal\'" class="clr-row">\n    <div class="clr-col-12 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">First name</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">John</span>\n    </div>\n\n    <div class="clr-col-12 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">Lastname</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">Doe</span>\n    </div>\n</form>\n',this.codeExampleROHorizontal2='\n<form clrForm [clrLayout]="\'horizontal\'" class="clr-row">\n    <div class="clr-col-6 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-1">First name</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">John</span>\n    </div>\n    <div class="clr-col-6 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-1">Last name</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">Doe</span>\n    </div>\n    <div class="clr-col-6 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">Email</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">john.doe@mail.com</span>\n    </div>\n    <div class="clr-col-6 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">Phone</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">1234567890123</span>\n    </div>\n</form>\n',this.codeExampleROVertical='\n<form clrForm [clrLayout]="\'vertical\'">\n    <div class="clr-form-control">\n        <label class="clr-control-label">First name</label>\n        <span>John</span>\n    </div>\n    <div class="clr-form-control">\n        <label class="clr-control-label">Lastname</label>\n        <span>Doe</span>\n    </div>\n</form>\n',this.codeExampleROVertical2='\n<form clrForm [clrLayout]="\'vertical\'" class="clr-row">\n    <div class="clr-form-control clr-col-6">\n        <label class="clr-control-label">First name</label>\n        <span>John</span>\n    </div>\n    <div class="clr-form-control clr-col-6">\n        <label class="clr-control-label">Lastname</label>\n        <span>Doe</span>\n    </div>\n    <div class="clr-form-control clr-col-6">\n        <label class="clr-control-label">Email</label>\n        <span>john.doe@mail.com</span>\n    </div>\n    <div class="clr-form-control clr-col-6">\n        <label class="clr-control-label">Phone</label>\n        <span>1234567890123</span>\n    </div>\n</form>\n',this.data=new Map,this.data2=new Map,this.data.set("EN","english text"),this.data.set("DE","deutscher text"),this.data.set("FR","texte fran\xe7ais"),this.data2.set("EN","english text"),this.data2.set("DE","deutscher text"),this.data2.set("FR","texte fran\xe7ais")}onFormSubmit(){document.activeElement.blur(),this.submittedText=this.inputTextSubmit}}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=l.Xpm({type:c,selectors:[["clr-forms-demo"]],hostVars:4,hostBindings:function(u,e){2&u&&l.ekj("content-area",!0)("dox-content-panel",!0)},features:[l.qOj],decls:267,vars:56,consts:[[3,"title"],[1,"component-summary"],["href","https://clarity.design/documentation/forms"],["id","design-guidelines"],[1,"clr-code"],["id","code-examples"],["id","examples"],["clrForm","","clrLayout","horizontal",1,"clr-row"],[1,"clr-col-12"],[1,"clr-col-12","clr-col-sm-4","clr-col-md-3","clr-col-xl-2","required"],["clrInput","","type","text","name","inputName","required","","minlength","5",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModel","ngModelOptions","ngModelChange"],[4,"clrIfError"],["clrTextarea","","name","description","required","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModel","ngModelOptions","ngModelChange"],[1,"clr-col-12","clr-col-sm-4","clr-col-md-3","clr-col-xl-2"],["clrPassword","","placeholder","Password please!","type","text","name","passwordName",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModel","ngModelOptions","ngModelChange"],["clrSelect","","name","options",1,"clr-col-6","clr-col-sm-3","clr-col-md-2",3,"ngModel","ngModelChange"],["value","one"],["value","two"],["value","three"],[1,"clr-col-6","clr-col-sm-3","clr-col-md-2"],[3,"clrValue"],["type","radio","clrRadio","","name","options","value","1","required","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModel","ngModelChange"],["type","radio","clrRadio","","name","options","value","2","required","",3,"ngModel","ngModelChange"],["type","text","name","date","clrDate","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModel","ngModelOptions","ngModelChange"],["type","time","name","time","clrInput","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModel","ngModelOptions","ngModelChange"],[1,"clr-col-12","clr-row"],["clrDate","","type","text","name","date",1,"clr-col-8",3,"ngModel","ngModelOptions","ngModelChange"],["type","time","name","time","clrTime","",3,"ngModel","ngModelOptions","ngModelChange"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac",1,"clr-col-2",3,"clrNumericValue","clrNumericValueChange"],["clrCheckbox","","type","checkbox","name","checkboxName",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModel","ngModelChange"],["type","checkbox","id","toggle","name","toggle","clrToggle","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModel","ngModelChange"],["for","toggle",1,"clr-col-none"],["clrSelectedLang","EN","clrRequiredAllMultilang","","clrControlClasses","clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3","name","template",1,"clr-col-12","clr-row",3,"ngModel","ngModelOptions","ngModelChange"],["clrSelectedLang","EN","clrRequiredAllMultilang","","clrControlClasses","clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3","name","template2",1,"clr-col-12","clr-row",3,"ngModel","ngModelOptions","ngModelChange"],[3,"clrCode"],["shape","display"],["routerLink","/full-page-layouts/basepage-layout-sub1/forms","routerLinkActive","active",1,"nav-link"],[1,"nav-text"],["routerLink","/full-page-layouts/basepage-layout-sub1/ves","routerLinkActive","active",1,"nav-link"],["clrForm","",1,"clr-row",3,"submit"],[1,"clr-col-12","clr-col-sm-4","clr-col-md-3","clr-col-xl-2","clr-col-md-2"],["clrInput","","type","text","name","inputNameSubmit",1,"clr-col-2",3,"ngModel","ngModelOptions","ngModelChange"],["type","submit",2,"display","none"],["clrForm","",1,"clr-row",3,"clrLayout"],[1,"clr-col-12","clr-form-control","clr-row"],[1,"clr-control-label","clr-col-xs-12","clr-col-sm-3","clr-col-lg-1"],[1,"clr-col-xs-12","clr-col-sm-9","clr-col-lg-10"],[1,"clr-col-6","clr-form-control","clr-row"],[1,"clr-control-label","clr-col-xs-12","clr-col-sm-3","clr-col-lg-2"],["clrForm","",3,"clrLayout"],[1,"clr-form-control"],[1,"clr-control-label"],[1,"clr-form-control","clr-col-6"]],template:function(u,e){1&u&&(l.TgZ(0,"clr-doc-wrapper",0),l.TgZ(1,"article"),l.TgZ(2,"h5",1),l._uU(3,"This describes clarity forms in more detail. Official documentation: "),l.TgZ(4,"a",2),l._uU(5,"Clarity Forms documentation"),l.qZA(),l.qZA(),l.TgZ(6,"p"),l._uU(7,"Find below our recommendation how to use every input component."),l._UZ(8,"br"),l._uU(9," Please also check back frequently to get updates of the recommended way."),l.qZA(),l.TgZ(10,"div",3),l.TgZ(11,"h3"),l._uU(12,"Usage"),l.qZA(),l.TgZ(13,"ul"),l.TgZ(14,"li"),l.TgZ(15,"strong"),l._uU(16,"Don't mix core (webcomponents) and angular components inside a form, as they have different layout philosophies."),l.qZA(),l.qZA(),l.TgZ(17,"li"),l.TgZ(18,"strong"),l._uU(19,"Always use forms."),l.qZA(),l._uU(20," Don't display multiple labels and input fields outside of a form."),l.qZA(),l.TgZ(21,"li"),l._uU(22,"When adding subheaders inside a form, use "),l.TgZ(23,"code",4),l._uU(24,"h4"),l.qZA(),l._uU(25," elements."),l.qZA(),l.TgZ(26,"li"),l._uU(27,"Control the width of labels and inputs by adding "),l.TgZ(28,"code",4),l._uU(29,"clr-col-*"),l.qZA(),l._uU(30," classes inside the "),l.TgZ(31,"code",4),l._uU(32,"clr-*-container"),l.qZA(),l._uU(33,". "),l.qZA(),l.TgZ(34,"li"),l._uU(35,"Forms in a "),l.TgZ(36,"code",4),l._uU(37,"clr-view-edit-section"),l.qZA(),l._uU(38," should also be displayed using the below examples. "),l.qZA(),l.TgZ(39,"li"),l._uU(40,"Make your forms responsive. Use the correct "),l.TgZ(41,"code",4),l._uU(42,"clr-col-*"),l.qZA(),l._uU(43," classes to make your forms fit every screen size. "),l.qZA(),l.TgZ(44,"li"),l._uU(45,"Always use 1 column layouts on screen sizes below 768px. (md-breakpoint)"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(46,"div",5),l.TgZ(47,"h3",6),l._uU(48,"Code & Examples"),l.qZA(),l.TgZ(49,"h4"),l._uU(50,"Standard form"),l.qZA(),l.TgZ(51,"form",7),l.TgZ(52,"clr-input-container",8),l.TgZ(53,"label",9),l._uU(54,"Input label"),l.qZA(),l.TgZ(55,"input",10),l.NdJ("ngModelChange",function(o){return e.inputText=o}),l.qZA(),l.TgZ(56,"clr-control-helper"),l._uU(57,"Helper text that shows while it is pristine and valid"),l.qZA(),l.YNc(58,A,2,0,"clr-control-error",11),l.YNc(59,q,2,0,"clr-control-error",11),l.qZA(),l.TgZ(60,"clr-textarea-container",8),l.TgZ(61,"label",9),l._uU(62,"Textarea label"),l.qZA(),l.TgZ(63,"textarea",12),l.NdJ("ngModelChange",function(o){return e.textareaText=o}),l.qZA(),l.YNc(64,M,2,0,"clr-control-error",11),l.qZA(),l.TgZ(65,"clr-password-container",8),l.TgZ(66,"label",13),l._uU(67,"Password label"),l.qZA(),l.TgZ(68,"input",14),l.NdJ("ngModelChange",function(o){return e.passwordText=o}),l.qZA(),l.qZA(),l.TgZ(69,"clr-select-container",8),l.TgZ(70,"label",9),l._uU(71,"Select label"),l.qZA(),l.TgZ(72,"select",15),l.NdJ("ngModelChange",function(o){return e.selectOption=o}),l.TgZ(73,"option",16),l._uU(74,"One"),l.qZA(),l.TgZ(75,"option",17),l._uU(76,"Two"),l.qZA(),l.TgZ(77,"option",18),l._uU(78,"Three"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(79,"clr-combobox-container",8),l.TgZ(80,"label",13),l._uU(81,"Combobox label"),l.qZA(),l.TgZ(82,"clr-combobox",19),l.TgZ(83,"clr-options"),l.TgZ(84,"clr-option",20),l._uU(85,"Option 1"),l.qZA(),l.TgZ(86,"clr-option",20),l._uU(87,"Option 2"),l.qZA(),l.TgZ(88,"clr-option",20),l._uU(89,"Option 3"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(90,"clr-radio-container",8),l.TgZ(91,"label",9),l._uU(92,"Radio label"),l.qZA(),l.TgZ(93,"clr-radio-wrapper"),l.TgZ(94,"input",21),l.NdJ("ngModelChange",function(o){return e.radioOption=o}),l.qZA(),l.TgZ(95,"label"),l._uU(96,"Option 1"),l.qZA(),l.qZA(),l.TgZ(97,"clr-radio-wrapper"),l.TgZ(98,"input",22),l.NdJ("ngModelChange",function(o){return e.radioOption=o}),l.qZA(),l.TgZ(99,"label"),l._uU(100,"Option 2"),l.qZA(),l.qZA(),l.TgZ(101,"clr-control-helper"),l._uU(102,"Helper text"),l.qZA(),l.TgZ(103,"clr-control-error"),l._uU(104,"This field is required!"),l.qZA(),l.qZA(),l.TgZ(105,"clr-date-container",8),l.TgZ(106,"label",13),l._uU(107,"Date label"),l.qZA(),l.TgZ(108,"input",23),l.NdJ("ngModelChange",function(o){return e.date=o}),l.qZA(),l.qZA(),l.TgZ(109,"clr-input-container",8),l.TgZ(110,"label",13),l._uU(111,"Time label"),l.qZA(),l.TgZ(112,"input",24),l.NdJ("ngModelChange",function(o){return e.time=o}),l.qZA(),l.qZA(),l.TgZ(113,"clr-date-time-container",25),l.TgZ(114,"clr-date-container"),l.TgZ(115,"label",13),l._uU(116,"Date & time label"),l.qZA(),l.TgZ(117,"input",26),l.NdJ("ngModelChange",function(o){return e.date=o}),l.qZA(),l.qZA(),l.TgZ(118,"input",27),l.NdJ("ngModelChange",function(o){return e.time=o}),l.qZA(),l.qZA(),l.TgZ(119,"clr-input-container",8),l.TgZ(120,"label",13),l._uU(121,"Money label"),l.qZA(),l.TgZ(122,"input",28),l.NdJ("clrNumericValueChange",function(o){return e.money=o}),l.qZA(),l.qZA(),l.TgZ(123,"clr-checkbox-container",8),l.TgZ(124,"label",13),l._uU(125,"Checkbox label"),l.qZA(),l.TgZ(126,"clr-checkbox-wrapper"),l.TgZ(127,"label"),l._uU(128,"Option"),l.qZA(),l.TgZ(129,"input",29),l.NdJ("ngModelChange",function(o){return e.checkboxValue=o}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(130,"clr-toggle-container",8),l.TgZ(131,"label",13),l._uU(132,"Toggle label"),l.qZA(),l.TgZ(133,"clr-toggle-wrapper"),l.TgZ(134,"input",30),l.NdJ("ngModelChange",function(o){return e.toggleValue=o}),l.qZA(),l._UZ(135,"label",31),l.qZA(),l.qZA(),l.TgZ(136,"clr-multilingual-input",32),l.NdJ("ngModelChange",function(o){return e.data=o}),l.TgZ(137,"label",9),l._uU(138,"Multilingual Input"),l.qZA(),l.TgZ(139,"clr-control-error"),l._uU(140,"Please translate in every language!"),l.qZA(),l.TgZ(141,"clr-control-helper"),l._uU(142,"Helper text"),l.qZA(),l.qZA(),l.TgZ(143,"clr-multilingual-textarea",33),l.NdJ("ngModelChange",function(o){return e.data2=o}),l.TgZ(144,"label",9),l._uU(145,"Multilingual Input"),l.qZA(),l.TgZ(146,"clr-control-error"),l._uU(147,"Please translate in every language!"),l.qZA(),l.TgZ(148,"clr-control-helper"),l._uU(149,"Helper text"),l.qZA(),l.qZA(),l.qZA(),l._UZ(150,"br"),l._UZ(151,"clr-code-snippet",34),l.TgZ(152,"h4"),l._uU(153,"Demo"),l.qZA(),l.TgZ(154,"div"),l._UZ(155,"clr-icon",35),l._uU(156,"\xa0 "),l.TgZ(157,"a",36),l.TgZ(158,"span",37),l._uU(159,"Full Page Forms Layout"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(160,"div"),l._UZ(161,"clr-icon",35),l._uU(162,"\xa0 "),l.TgZ(163,"a",38),l.TgZ(164,"span",37),l._uU(165,"Full Page View Edit Section Layout"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(166,"h4"),l._uU(167,"Submit form on enter"),l.qZA(),l.TgZ(168,"p"),l._uU(169,"To enable form submit on enter, following prerequisites need to be done:"),l.qZA(),l.TgZ(170,"ul"),l.TgZ(171,"li"),l._uU(172,"Add hidden submit button to your form to activate 'enter' key handling in browser (only needed if you not already have one) "),l.qZA(),l.TgZ(173,"li"),l._uU(174,"React to submit of form"),l.qZA(),l.qZA(),l.TgZ(175,"form",39),l.NdJ("submit",function(){return e.onFormSubmit()}),l.TgZ(176,"clr-input-container",8),l.TgZ(177,"label",40),l._uU(178,"Input label"),l.qZA(),l.TgZ(179,"input",41),l.NdJ("ngModelChange",function(o){return e.inputTextSubmit=o}),l.qZA(),l.qZA(),l._UZ(180,"input",42),l.qZA(),l._uU(181),l._UZ(182,"clr-code-snippet",34),l.TgZ(183,"h5"),l._uU(184,"Special case for updateOn: blur"),l.qZA(),l.TgZ(185,"p"),l._uU(186,"Hitting the enter key doesn't trigger the blur event, so the form field is not up to date. To overcome this, blur the field manually."),l.qZA(),l._UZ(187,"clr-code-snippet",34),l.TgZ(188,"h4"),l._uU(189,"General form submit pattern"),l.qZA(),l._UZ(190,"clr-code-snippet",34),l.TgZ(191,"h4"),l._uU(192,"Read-only fields (horizontal)"),l.qZA(),l.TgZ(193,"form",43),l.TgZ(194,"div",44),l.TgZ(195,"label",45),l._uU(196,"First name"),l.qZA(),l.TgZ(197,"span",46),l._uU(198,"John"),l.qZA(),l.qZA(),l.TgZ(199,"div",44),l.TgZ(200,"label",45),l._uU(201,"Last name"),l.qZA(),l.TgZ(202,"span",46),l._uU(203,"Doe"),l.qZA(),l.qZA(),l.qZA(),l._UZ(204,"clr-code-snippet",34),l.TgZ(205,"h4"),l._uU(206,"Read-only fields (horizontal 2 columns)"),l.qZA(),l.TgZ(207,"form",43),l.TgZ(208,"div",47),l.TgZ(209,"label",48),l._uU(210,"First name"),l.qZA(),l.TgZ(211,"span",46),l._uU(212,"John"),l.qZA(),l.qZA(),l.TgZ(213,"div",47),l.TgZ(214,"label",48),l._uU(215,"Last name"),l.qZA(),l.TgZ(216,"span",46),l._uU(217,"Doe"),l.qZA(),l.qZA(),l.TgZ(218,"div",47),l.TgZ(219,"label",48),l._uU(220,"Email"),l.qZA(),l.TgZ(221,"span",46),l._uU(222,"john.doe@mail.com"),l.qZA(),l.qZA(),l.TgZ(223,"div",47),l.TgZ(224,"label",48),l._uU(225,"Phone"),l.qZA(),l.TgZ(226,"span",46),l._uU(227,"1234567890123"),l.qZA(),l.qZA(),l.qZA(),l._UZ(228,"clr-code-snippet",34),l.TgZ(229,"h4"),l._uU(230,"Read-only fields (vertical)"),l.qZA(),l.TgZ(231,"form",49),l.TgZ(232,"div",50),l.TgZ(233,"label",51),l._uU(234,"First name"),l.qZA(),l.TgZ(235,"span"),l._uU(236,"John"),l.qZA(),l.qZA(),l.TgZ(237,"div",50),l.TgZ(238,"label",51),l._uU(239,"Lastname"),l.qZA(),l.TgZ(240,"span"),l._uU(241,"Doe"),l.qZA(),l.qZA(),l.qZA(),l._UZ(242,"clr-code-snippet",34),l.TgZ(243,"h4"),l._uU(244,"Read-only fields (vertical 2 columns)"),l.qZA(),l.TgZ(245,"form",43),l.TgZ(246,"div",52),l.TgZ(247,"label",51),l._uU(248,"First name"),l.qZA(),l.TgZ(249,"span"),l._uU(250,"John"),l.qZA(),l.qZA(),l.TgZ(251,"div",52),l.TgZ(252,"label",51),l._uU(253,"Lastname"),l.qZA(),l.TgZ(254,"span"),l._uU(255,"Doe"),l.qZA(),l.qZA(),l.TgZ(256,"div",52),l.TgZ(257,"label",51),l._uU(258,"Email"),l.qZA(),l.TgZ(259,"span"),l._uU(260,"john.doe@mail.com"),l.qZA(),l.qZA(),l.TgZ(261,"div",52),l.TgZ(262,"label",51),l._uU(263,"Phone"),l.qZA(),l.TgZ(264,"span"),l._uU(265,"1234567890123"),l.qZA(),l.qZA(),l.qZA(),l._UZ(266,"clr-code-snippet",34),l.qZA(),l.qZA(),l.qZA()),2&u&&(l.Q6J("title",e.title),l.xp6(55),l.Q6J("ngModel",e.inputText)("ngModelOptions",l.DdM(46,i)),l.xp6(3),l.Q6J("clrIfError","required"),l.xp6(1),l.Q6J("clrIfError","minlength"),l.xp6(4),l.Q6J("ngModel",e.textareaText)("ngModelOptions",l.DdM(47,i)),l.xp6(1),l.Q6J("clrIfError","required"),l.xp6(4),l.Q6J("ngModel",e.passwordText)("ngModelOptions",l.DdM(48,i)),l.xp6(4),l.Q6J("ngModel",e.selectOption),l.xp6(12),l.Q6J("clrValue","Option 1"),l.xp6(2),l.Q6J("clrValue","Option 2"),l.xp6(2),l.Q6J("clrValue","Option 3"),l.xp6(6),l.Q6J("ngModel",e.radioOption),l.xp6(4),l.Q6J("ngModel",e.radioOption),l.xp6(10),l.Q6J("ngModel",e.date)("ngModelOptions",l.DdM(49,i)),l.xp6(4),l.Q6J("ngModel",e.time)("ngModelOptions",l.DdM(50,i)),l.xp6(5),l.Q6J("ngModel",e.date)("ngModelOptions",l.DdM(51,i)),l.xp6(1),l.Q6J("ngModel",e.time)("ngModelOptions",l.DdM(52,i)),l.xp6(4),l.Q6J("clrNumericValue",e.money),l.xp6(7),l.Q6J("ngModel",e.checkboxValue),l.xp6(5),l.Q6J("ngModel",e.toggleValue),l.xp6(2),l.Q6J("ngModel",e.data)("ngModelOptions",l.DdM(53,i)),l.xp6(7),l.Q6J("ngModel",e.data2)("ngModelOptions",l.DdM(54,i)),l.xp6(8),l.Q6J("clrCode",e.codeExampleFullForm),l.xp6(28),l.Q6J("ngModel",e.inputTextSubmit)("ngModelOptions",l.DdM(55,i)),l.xp6(2),l.hij(" Submitted text (hit enter to submit): ",e.submittedText," "),l.xp6(1),l.Q6J("clrCode",e.codeExampleFormSubmit),l.xp6(5),l.Q6J("clrCode",e.codeExampleFormSubmitBlur),l.xp6(3),l.Q6J("clrCode",e.codeExampleFormSubmitGeneral),l.xp6(3),l.Q6J("clrLayout","horizontal"),l.xp6(11),l.Q6J("clrCode",e.codeExampleROHorizontal),l.xp6(3),l.Q6J("clrLayout","horizontal"),l.xp6(21),l.Q6J("clrCode",e.codeExampleROHorizontal2),l.xp6(3),l.Q6J("clrLayout","vertical"),l.xp6(11),l.Q6J("clrCode",e.codeExampleROVertical),l.xp6(3),l.Q6J("clrLayout","vertical"),l.xp6(21),l.Q6J("clrCode",e.codeExampleROVertical2))},directives:[h.k,t._Y,t.JL,t.F,r.YAP,r.mIp,r.G55,r.MgK,t.Fj,r.xRP,t.Q7,t.wO,t.JJ,t.On,r.CM6,r.qk9,r.LAP,r.XE5,r.gmX,r.KqO,r.dTv,t.EJ,r.otW,t.YN,t.Kr,r.c6t,r.HFh,r.yqN,r.DTD,r.DAq,r.EeQ,t._,r.asN,r.VqA,r.Swc,r.Tsp,s.gL,s.cH,s.xd,r.Y_4,r.PEh,t.Wl,r.KKC,s.i2,s.nK,s.VN,_.O,r.qvL,m.yS,m.Od],encapsulation:2}),c})(),w=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({imports:[[p.ez,t.u5,r.K6A,r.AnW,s.U6,s.Zk,s.He,Z.A,b.B,m.Bz.forChild([{path:"",component:E}])]]}),c})()}}]);