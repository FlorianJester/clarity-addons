"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[756],{22756:(G,u,n)=>{n.r(u),n.d(u,{FormsDemoModule:()=>V});var F=n(60177),t=n(84341),d=n(5928),r=n(42663),i=n(36366),b=n(63275),h=n(20786),E=n(2985),M=n(63324),k=n(25690),l=n(54438),x=n(87620),f=n(91464);const s=()=>({updateOn:"blur"});function j(a,g){1&a&&(l.j41(0,"clr-control-error"),l.EFF(1,"Error message about being required"),l.k0s())}function O(a,g){1&a&&(l.j41(0,"clr-control-error"),l.EFF(1,"Error message about requiring 5 characters"),l.k0s())}function y(a,g){1&a&&(l.j41(0,"clr-control-error"),l.EFF(1,"Error message about being required"),l.k0s())}M.h.addIcons(k.i);let L=(()=>{class a extends E.S{codeExampleFullForm='\n<form clrForm clrLayout="horizontal" class="clr-row">\n    <clr-input-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 clr-required-mark">Input label</label>\n        <input clrInput class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3" type="text"\n               [(ngModel)]="inputText" [ngModelOptions]="{ updateOn: \'blur\' }"\n               name="inputName" required minlength="5"/>\n        <clr-control-helper>Helper text that shows while it is pristine and valid</clr-control-helper>\n        <clr-control-error *clrIfError="\'required\'">Error message about being required</clr-control-error>\n        <clr-control-error *clrIfError="\'minlength\'">Error message about requiring 5 characters\n        </clr-control-error>\n    </clr-input-container>\n    <clr-textarea-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 clr-required-mark">Textarea label</label>\n        <textarea clrTextarea class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                  [(ngModel)]="textareaText" [ngModelOptions]="{ updateOn: \'blur\' }"\n                  name="description" required></textarea>\n        <clr-control-error *clrIfError="\'required\'">Error message about being required</clr-control-error>\n    </clr-textarea-container>\n    <clr-password-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2">Password label</label>\n        <input clrPassword class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n               placeholder="Password please!" type="text"\n               [(ngModel)]="passwordText" [ngModelOptions]="{ updateOn: \'blur\' }" name="passwordName"/>\n    </clr-password-container>\n    <clr-select-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 clr-required-mark">Select label</label>\n        <select clrSelect class="clr-col-6 clr-col-sm-3 clr-col-md-2" name="options"\n                [(ngModel)]="selectOption">\n            <option value="one">One</option>\n            <option value="two">Two</option>\n            <option value="three">Three</option>\n        </select>\n    </clr-select-container>\n    <clr-combobox-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2">Combobox label</label>\n        <clr-combobox class="clr-col-6 clr-col-sm-3 clr-col-md-2">\n            <clr-options>\n                <clr-option [clrValue]="\'Option 1\'">Option 1</clr-option>\n                <clr-option [clrValue]="\'Option 2\'">Option 2</clr-option>\n                <clr-option [clrValue]="\'Option 3\'">Option 3</clr-option>\n            </clr-options>\n        </clr-combobox>\n    </clr-combobox-container>\n    <clr-radio-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 clr-required-mark">Radio label</label>\n        <clr-radio-wrapper>\n            <input type="radio" class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                clrRadio name="options" value="1" required [(ngModel)]="radioOption"/>\n            <label>Option 1</label>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <input type="radio" clrRadio name="options" value="2" required [(ngModel)]="radioOption"/>\n            <label>Option 2</label>\n        </clr-radio-wrapper>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>This field is required!</clr-control-error>\n    </clr-radio-container>\n    <clr-date-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 ">Date label</label>\n        <input class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3" type="text" [(ngModel)]="date"\n               [ngModelOptions]="{ updateOn: \'blur\' }" name="date" clrDate>\n    </clr-date-container>\n    <clr-input-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 ">Time label</label>\n        <input class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3" type="time" [(ngModel)]="time"\n               [ngModelOptions]="{ updateOn: \'blur\' }" name="time" clrInput>\n    </clr-input-container>\n    <clr-date-time-container class="clr-col-12 clr-row">\n        <clr-date-container>\n            <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2">Date & time label</label>\n            <input class="clr-col-8" clrDate type="text" [(ngModel)]="date"\n                   [ngModelOptions]="{ updateOn: \'blur\' }" name="date">\n        </clr-date-container>\n        <input type="time" [(ngModel)]="time" [ngModelOptions]="{ updateOn: \'blur\' }" name="time" clrTime>\n    </clr-date-time-container>\n    <clr-input-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 ">Money label</label>\n        <input class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3" clrInput clrNumeric\n               class="clr-col-2" type="text" [(clrNumericValue)]="money" clrUnit="\u20ac"/>\n    </clr-input-container>\n    <clr-checkbox-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 ">Checkbox label</label>\n        <clr-checkbox-wrapper>\n            <label>Option</label>\n            <input clrCheckbox class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                type="checkbox" [(ngModel)]="checkboxValue" name="checkboxName"/>\n        </clr-checkbox-wrapper>\n    </clr-checkbox-container>\n    <clr-toggle-container class="clr-col-12">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2">Toggle label</label>\n        <clr-toggle-wrapper>\n            <input type="checkbox" class="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                id="toggle" name="toggle" [(ngModel)]="toggleValue" clrToggle/>\n            <label for="toggle" class="clr-col-none"></label>\n        </clr-toggle-wrapper>\n    </clr-toggle-container>\n    <clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data"\n                            [ngModelOptions]="{ updateOn: \'blur\' }"\n                            clrRequiredAllMultilang\n                            clrControlClasses="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                            name="template">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 clr-required-mark">Multilingual Input</label>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n        <clr-control-helper>Helper text</clr-control-helper>\n    </clr-multilingual-input>\n    <clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data2"\n                               [ngModelOptions]="{ updateOn: \'blur\' }"\n                               clrRequiredAllMultilang\n                               clrControlClasses="clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3"\n                               name="template2">\n        <label class="clr-col-12 clr-col-sm-4 clr-col-md-3 clr-col-xl-2 clr-required-mark">Multilingual Input</label>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n        <clr-control-helper>Helper text</clr-control-helper>\n    </clr-multilingual-textarea>\n</form>\n';codeExampleFormSubmit='\n<form ... (submit)="onFormSubmit()">\n    ...\n    <input type="submit" style="display: none"> \x3c!-- Not needed, if you already have a submit button--\x3e\n</form>\n';codeExampleFormSubmitBlur="\nonFormSubmit() {\n    (<HTMLElement>document.activeElement).blur();\n    ...\n}\n";codeExampleFormSubmitGeneral="\n@ViewChild(ClrForm, { static: true }) clrForm: ClrForm;\n\nonFormSubmit() {\n    (<HTMLElement>document.activeElement).blur(); // to correctly handle invalid inputs when hitting enter\n    this.form.updateValueAndValidity(); // form is the instance to the FormGroup (reactive) or ngForm (template)\n\n    if (this.form.valid) {\n      // save the form\n    } else {\n      this.clrForm.markAsTouched(); // to show validation errors for not-touched fields\n    }\n}\n";codeExampleROHorizontal='\n<form clrForm [clrLayout]="\'horizontal\'" class="clr-row">\n    <div class="clr-col-12 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">First name</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">John</span>\n    </div>\n\n    <div class="clr-col-12 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">Lastname</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">Doe</span>\n    </div>\n</form>\n';codeExampleROHorizontal2='\n<form clrForm [clrLayout]="\'horizontal\'" class="clr-row">\n    <div class="clr-col-6 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-1">First name</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">John</span>\n    </div>\n    <div class="clr-col-6 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-1">Last name</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">Doe</span>\n    </div>\n    <div class="clr-col-6 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">Email</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">john.doe@mail.com</span>\n    </div>\n    <div class="clr-col-6 clr-form-control clr-row">\n        <label class="clr-control-label clr-col-xs-12 clr-col-sm-3 clr-col-lg-2">Phone</label>\n        <span class="clr-col-xs-12 clr-col-sm-9 clr-col-lg-10">1234567890123</span>\n    </div>\n</form>\n';codeExampleROVertical='\n<form clrForm [clrLayout]="\'vertical\'">\n    <div class="clr-form-control">\n        <label class="clr-control-label">First name</label>\n        <span>John</span>\n    </div>\n    <div class="clr-form-control">\n        <label class="clr-control-label">Lastname</label>\n        <span>Doe</span>\n    </div>\n</form>\n';codeExampleROVertical2='\n<form clrForm [clrLayout]="\'vertical\'" class="clr-row">\n    <div class="clr-form-control clr-col-6">\n        <label class="clr-control-label">First name</label>\n        <span>John</span>\n    </div>\n    <div class="clr-form-control clr-col-6">\n        <label class="clr-control-label">Lastname</label>\n        <span>Doe</span>\n    </div>\n    <div class="clr-form-control clr-col-6">\n        <label class="clr-control-label">Email</label>\n        <span>john.doe@mail.com</span>\n    </div>\n    <div class="clr-form-control clr-col-6">\n        <label class="clr-control-label">Phone</label>\n        <span>1234567890123</span>\n    </div>\n</form>\n';inputText;textareaText;passwordText;toggleValue;checkboxValue;date;time;money;radioOption;selectOption;isDisabled;data=new Map;data2=new Map;inputTextSubmit;submittedText;constructor(){super("forms"),this.data.set("EN","english text"),this.data.set("DE","deutscher text"),this.data.set("FR","texte fran\xe7ais"),this.data2.set("EN","english text"),this.data2.set("DE","deutscher text"),this.data2.set("FR","texte fran\xe7ais")}onFormSubmit(){document.activeElement.blur(),this.submittedText=this.inputTextSubmit}static \u0275fac=function(m){return new(m||a)};static \u0275cmp=l.VBU({type:a,selectors:[["clr-forms-demo"]],hostVars:4,hostBindings:function(m,o){2&m&&l.AVh("content-area",!0)("dox-content-panel",!0)},features:[l.Vt3],decls:268,vars:56,consts:[[3,"title"],[1,"component-summary"],["href","https://clarity.design/documentation/forms"],["id","design-guidelines"],[1,"clr-code"],["id","code-examples"],["id","examples"],["clrForm","","clrLayout","horizontal",1,"clr-row"],[1,"clr-col-12"],[1,"clr-col-12","clr-col-sm-4","clr-col-md-3","clr-col-xl-2","clr-required-mark"],["clrInput","","type","text","name","inputName","required","","minlength","5",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModelChange","ngModel","ngModelOptions"],[4,"clrIfError"],["clrTextarea","","name","description","required","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModelChange","ngModel","ngModelOptions"],[1,"clr-col-12","clr-col-sm-4","clr-col-md-3","clr-col-xl-2"],["clrPassword","","placeholder","Password please!","type","text","name","passwordName",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModelChange","ngModel","ngModelOptions"],["clrSelect","","name","options",1,"clr-col-6","clr-col-sm-3","clr-col-md-2",3,"ngModelChange","ngModel"],["value","one"],["value","two"],["value","three"],[1,"clr-col-6","clr-col-sm-3","clr-col-md-2"],[3,"clrValue"],["type","radio","clrRadio","","name","options","value","1","required","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModelChange","ngModel"],["type","radio","clrRadio","","name","options","value","2","required","",3,"ngModelChange","ngModel"],["type","text","name","date","clrDate","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModelChange","ngModel","ngModelOptions"],["type","time","name","time","clrInput","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModelChange","ngModel","ngModelOptions"],[1,"clr-col-12","clr-row"],["clrDate","","type","text","name","date",1,"clr-col-8",3,"ngModelChange","ngModel","ngModelOptions"],["type","time","name","time","clrTime","",3,"ngModelChange","ngModel","ngModelOptions"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac",1,"clr-col-2",3,"clrNumericValueChange","clrNumericValue"],["clrCheckbox","","type","checkbox","name","checkboxName",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModelChange","ngModel"],["type","checkbox","id","toggle","name","toggle","clrToggle","",1,"clr-col-6","clr-col-md-5","clr-col-lg-4","clr-col-xl-3",3,"ngModelChange","ngModel"],["for","toggle",1,"clr-col-none"],["clrSelectedLang","EN","clrRequiredAllMultilang","","clrControlClasses","clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3","name","template",1,"clr-col-12","clr-row",3,"ngModelChange","ngModel","ngModelOptions"],["clrSelectedLang","EN","clrRequiredAllMultilang","","clrControlClasses","clr-col-6 clr-col-md-5 clr-col-lg-4 clr-col-xl-3","name","template2",1,"clr-col-12","clr-row",3,"ngModelChange","ngModel","ngModelOptions"],[3,"clrCode"],["shape","display"],["routerLink","/full-page-layouts/basepage-layout-sub1/forms","routerLinkActive","active",1,"nav-link"],[1,"nav-text"],["routerLink","/full-page-layouts/basepage-layout-sub1/ves","routerLinkActive","active",1,"nav-link"],["clrForm","",1,"clr-row",3,"submit"],[1,"clr-col-12","clr-col-sm-4","clr-col-md-3","clr-col-xl-2","clr-col-md-2"],["clrInput","","type","text","name","inputNameSubmit",1,"clr-col-2",3,"ngModelChange","ngModel","ngModelOptions"],["type","submit",2,"display","none"],["clrForm","",1,"clr-row",3,"clrLayout"],[1,"clr-col-12","clr-form-control","clr-row"],[1,"clr-control-label","clr-col-xs-12","clr-col-sm-3","clr-col-lg-1"],[1,"clr-col-xs-12","clr-col-sm-9","clr-col-lg-10"],[1,"clr-col-6","clr-form-control","clr-row"],[1,"clr-control-label","clr-col-xs-12","clr-col-sm-3","clr-col-lg-2"],["clrForm","",3,"clrLayout"],[1,"clr-form-control"],[1,"clr-control-label"],[1,"clr-form-control","clr-col-6"]],template:function(m,o){1&m&&(l.j41(0,"clr-doc-wrapper",0)(1,"article")(2,"h5",1),l.EFF(3,"This describes clarity forms in more detail. Official documentation:"),l.k0s(),l.j41(4,"p")(5,"a",2),l.EFF(6,"Clarity Forms documentation"),l.k0s()(),l.j41(7,"p"),l.EFF(8," Find below our recommendation how to use every input component."),l.nrm(9,"br"),l.EFF(10," Please also check back frequently to get updates of the recommended way. "),l.k0s(),l.j41(11,"div",3)(12,"h3"),l.EFF(13,"Usage"),l.k0s(),l.j41(14,"ul")(15,"li")(16,"strong"),l.EFF(17,"Don't mix core (webcomponents) and angular components inside a form, as they have different layout philosophies."),l.k0s()(),l.j41(18,"li")(19,"strong"),l.EFF(20,"Always use forms."),l.k0s(),l.EFF(21," Don't display multiple labels and input fields outside of a form."),l.k0s(),l.j41(22,"li"),l.EFF(23,"When adding subheaders inside a form, use "),l.j41(24,"code",4),l.EFF(25,"h4"),l.k0s(),l.EFF(26," elements."),l.k0s(),l.j41(27,"li"),l.EFF(28," Control the width of labels and inputs by adding "),l.j41(29,"code",4),l.EFF(30,"clr-col-*"),l.k0s(),l.EFF(31," classes inside the "),l.j41(32,"code",4),l.EFF(33,"clr-*-container"),l.k0s(),l.EFF(34,". "),l.k0s(),l.j41(35,"li"),l.EFF(36," Forms in a "),l.j41(37,"code",4),l.EFF(38,"clr-view-edit-section"),l.k0s(),l.EFF(39," should also be displayed using the below examples. "),l.k0s(),l.j41(40,"li"),l.EFF(41," Make your forms responsive. Use the correct "),l.j41(42,"code",4),l.EFF(43,"clr-col-*"),l.k0s(),l.EFF(44," classes to make your forms fit every screen size. "),l.k0s(),l.j41(45,"li"),l.EFF(46,"Always use 1 column layouts on screen sizes below 768px. (md-breakpoint)"),l.k0s()()(),l.j41(47,"div",5)(48,"h3",6),l.EFF(49,"Code & Examples"),l.k0s(),l.j41(50,"h4"),l.EFF(51,"Standard form"),l.k0s(),l.j41(52,"form",7)(53,"clr-input-container",8)(54,"label",9),l.EFF(55,"Input label"),l.k0s(),l.j41(56,"input",10),l.mxI("ngModelChange",function(e){return l.DH7(o.inputText,e)||(o.inputText=e),e}),l.k0s(),l.j41(57,"clr-control-helper"),l.EFF(58,"Helper text that shows while it is pristine and valid"),l.k0s(),l.DNE(59,j,2,0,"clr-control-error",11)(60,O,2,0,"clr-control-error",11),l.k0s(),l.j41(61,"clr-textarea-container",8)(62,"label",9),l.EFF(63,"Textarea label"),l.k0s(),l.j41(64,"textarea",12),l.mxI("ngModelChange",function(e){return l.DH7(o.textareaText,e)||(o.textareaText=e),e}),l.k0s(),l.DNE(65,y,2,0,"clr-control-error",11),l.k0s(),l.j41(66,"clr-password-container",8)(67,"label",13),l.EFF(68,"Password label"),l.k0s(),l.j41(69,"input",14),l.mxI("ngModelChange",function(e){return l.DH7(o.passwordText,e)||(o.passwordText=e),e}),l.k0s()(),l.j41(70,"clr-select-container",8)(71,"label",9),l.EFF(72,"Select label"),l.k0s(),l.j41(73,"select",15),l.mxI("ngModelChange",function(e){return l.DH7(o.selectOption,e)||(o.selectOption=e),e}),l.j41(74,"option",16),l.EFF(75,"One"),l.k0s(),l.j41(76,"option",17),l.EFF(77,"Two"),l.k0s(),l.j41(78,"option",18),l.EFF(79,"Three"),l.k0s()()(),l.j41(80,"clr-combobox-container",8)(81,"label",13),l.EFF(82,"Combobox label"),l.k0s(),l.j41(83,"clr-combobox",19)(84,"clr-options")(85,"clr-option",20),l.EFF(86,"Option 1"),l.k0s(),l.j41(87,"clr-option",20),l.EFF(88,"Option 2"),l.k0s(),l.j41(89,"clr-option",20),l.EFF(90,"Option 3"),l.k0s()()()(),l.j41(91,"clr-radio-container",8)(92,"label",9),l.EFF(93,"Radio label"),l.k0s(),l.j41(94,"clr-radio-wrapper")(95,"input",21),l.mxI("ngModelChange",function(e){return l.DH7(o.radioOption,e)||(o.radioOption=e),e}),l.k0s(),l.j41(96,"label"),l.EFF(97,"Option 1"),l.k0s()(),l.j41(98,"clr-radio-wrapper")(99,"input",22),l.mxI("ngModelChange",function(e){return l.DH7(o.radioOption,e)||(o.radioOption=e),e}),l.k0s(),l.j41(100,"label"),l.EFF(101,"Option 2"),l.k0s()(),l.j41(102,"clr-control-helper"),l.EFF(103,"Helper text"),l.k0s(),l.j41(104,"clr-control-error"),l.EFF(105,"This field is required!"),l.k0s()(),l.j41(106,"clr-date-container",8)(107,"label",13),l.EFF(108,"Date label"),l.k0s(),l.j41(109,"input",23),l.mxI("ngModelChange",function(e){return l.DH7(o.date,e)||(o.date=e),e}),l.k0s()(),l.j41(110,"clr-input-container",8)(111,"label",13),l.EFF(112,"Time label"),l.k0s(),l.j41(113,"input",24),l.mxI("ngModelChange",function(e){return l.DH7(o.time,e)||(o.time=e),e}),l.k0s()(),l.j41(114,"clr-date-time-container",25)(115,"clr-date-container")(116,"label",13),l.EFF(117,"Date & time label"),l.k0s(),l.j41(118,"input",26),l.mxI("ngModelChange",function(e){return l.DH7(o.date,e)||(o.date=e),e}),l.k0s()(),l.j41(119,"input",27),l.mxI("ngModelChange",function(e){return l.DH7(o.time,e)||(o.time=e),e}),l.k0s()(),l.j41(120,"clr-input-container",8)(121,"label",13),l.EFF(122,"Money label"),l.k0s(),l.j41(123,"input",28),l.mxI("clrNumericValueChange",function(e){return l.DH7(o.money,e)||(o.money=e),e}),l.k0s()(),l.j41(124,"clr-checkbox-container",8)(125,"label",13),l.EFF(126,"Checkbox label"),l.k0s(),l.j41(127,"clr-checkbox-wrapper")(128,"label"),l.EFF(129,"Option"),l.k0s(),l.j41(130,"input",29),l.mxI("ngModelChange",function(e){return l.DH7(o.checkboxValue,e)||(o.checkboxValue=e),e}),l.k0s()()(),l.j41(131,"clr-toggle-container",8)(132,"label",13),l.EFF(133,"Toggle label"),l.k0s(),l.j41(134,"clr-toggle-wrapper")(135,"input",30),l.mxI("ngModelChange",function(e){return l.DH7(o.toggleValue,e)||(o.toggleValue=e),e}),l.k0s(),l.nrm(136,"label",31),l.k0s()(),l.j41(137,"clr-multilingual-input",32),l.mxI("ngModelChange",function(e){return l.DH7(o.data,e)||(o.data=e),e}),l.j41(138,"label",9),l.EFF(139,"Multilingual Input"),l.k0s(),l.j41(140,"clr-control-error"),l.EFF(141,"Please translate in every language!"),l.k0s(),l.j41(142,"clr-control-helper"),l.EFF(143,"Helper text"),l.k0s()(),l.j41(144,"clr-multilingual-textarea",33),l.mxI("ngModelChange",function(e){return l.DH7(o.data2,e)||(o.data2=e),e}),l.j41(145,"label",9),l.EFF(146,"Multilingual Input"),l.k0s(),l.j41(147,"clr-control-error"),l.EFF(148,"Please translate in every language!"),l.k0s(),l.j41(149,"clr-control-helper"),l.EFF(150,"Helper text"),l.k0s()()(),l.nrm(151,"br")(152,"clr-code-snippet",34),l.j41(153,"h4"),l.EFF(154,"Demo"),l.k0s(),l.j41(155,"div"),l.nrm(156,"cds-icon",35),l.EFF(157,"\xa0 "),l.j41(158,"a",36)(159,"span",37),l.EFF(160,"Full Page Forms Layout"),l.k0s()()(),l.j41(161,"div"),l.nrm(162,"cds-icon",35),l.EFF(163,"\xa0 "),l.j41(164,"a",38)(165,"span",37),l.EFF(166,"Full Page View Edit Section Layout"),l.k0s()()(),l.j41(167,"h4"),l.EFF(168,"Submit form on enter"),l.k0s(),l.j41(169,"p"),l.EFF(170,"To enable form submit on enter, following prerequisites need to be done:"),l.k0s(),l.j41(171,"ul")(172,"li"),l.EFF(173," Add hidden submit button to your form to activate 'enter' key handling in browser (only needed if you not already have one) "),l.k0s(),l.j41(174,"li"),l.EFF(175,"React to submit of form"),l.k0s()(),l.j41(176,"form",39),l.bIt("submit",function(){return o.onFormSubmit()}),l.j41(177,"clr-input-container",8)(178,"label",40),l.EFF(179,"Input label"),l.k0s(),l.j41(180,"input",41),l.mxI("ngModelChange",function(e){return l.DH7(o.inputTextSubmit,e)||(o.inputTextSubmit=e),e}),l.k0s()(),l.nrm(181,"input",42),l.k0s(),l.EFF(182),l.nrm(183,"clr-code-snippet",34),l.j41(184,"h5"),l.EFF(185,"Special case for updateOn: blur"),l.k0s(),l.j41(186,"p"),l.EFF(187," Hitting the enter key doesn't trigger the blur event, so the form field is not up to date. To overcome this, blur the field manually. "),l.k0s(),l.nrm(188,"clr-code-snippet",34),l.j41(189,"h4"),l.EFF(190,"General form submit pattern"),l.k0s(),l.nrm(191,"clr-code-snippet",34),l.j41(192,"h4"),l.EFF(193,"Read-only fields (horizontal)"),l.k0s(),l.j41(194,"form",43)(195,"div",44)(196,"label",45),l.EFF(197,"First name"),l.k0s(),l.j41(198,"span",46),l.EFF(199,"John"),l.k0s()(),l.j41(200,"div",44)(201,"label",45),l.EFF(202,"Last name"),l.k0s(),l.j41(203,"span",46),l.EFF(204,"Doe"),l.k0s()()(),l.nrm(205,"clr-code-snippet",34),l.j41(206,"h4"),l.EFF(207,"Read-only fields (horizontal 2 columns)"),l.k0s(),l.j41(208,"form",43)(209,"div",47)(210,"label",48),l.EFF(211,"First name"),l.k0s(),l.j41(212,"span",46),l.EFF(213,"John"),l.k0s()(),l.j41(214,"div",47)(215,"label",48),l.EFF(216,"Last name"),l.k0s(),l.j41(217,"span",46),l.EFF(218,"Doe"),l.k0s()(),l.j41(219,"div",47)(220,"label",48),l.EFF(221,"Email"),l.k0s(),l.j41(222,"span",46),l.EFF(223,"john.doe@mail.com"),l.k0s()(),l.j41(224,"div",47)(225,"label",48),l.EFF(226,"Phone"),l.k0s(),l.j41(227,"span",46),l.EFF(228,"1234567890123"),l.k0s()()(),l.nrm(229,"clr-code-snippet",34),l.j41(230,"h4"),l.EFF(231,"Read-only fields (vertical)"),l.k0s(),l.j41(232,"form",49)(233,"div",50)(234,"label",51),l.EFF(235,"First name"),l.k0s(),l.j41(236,"span"),l.EFF(237,"John"),l.k0s()(),l.j41(238,"div",50)(239,"label",51),l.EFF(240,"Lastname"),l.k0s(),l.j41(241,"span"),l.EFF(242,"Doe"),l.k0s()()(),l.nrm(243,"clr-code-snippet",34),l.j41(244,"h4"),l.EFF(245,"Read-only fields (vertical 2 columns)"),l.k0s(),l.j41(246,"form",43)(247,"div",52)(248,"label",51),l.EFF(249,"First name"),l.k0s(),l.j41(250,"span"),l.EFF(251,"John"),l.k0s()(),l.j41(252,"div",52)(253,"label",51),l.EFF(254,"Lastname"),l.k0s(),l.j41(255,"span"),l.EFF(256,"Doe"),l.k0s()(),l.j41(257,"div",52)(258,"label",51),l.EFF(259,"Email"),l.k0s(),l.j41(260,"span"),l.EFF(261,"john.doe@mail.com"),l.k0s()(),l.j41(262,"div",52)(263,"label",51),l.EFF(264,"Phone"),l.k0s(),l.j41(265,"span"),l.EFF(266,"1234567890123"),l.k0s()()(),l.nrm(267,"clr-code-snippet",34),l.k0s()()()),2&m&&(l.Y8G("title",o.title),l.R7$(56),l.R50("ngModel",o.inputText),l.Y8G("ngModelOptions",l.lJ4(46,s)),l.R7$(3),l.Y8G("clrIfError","required"),l.R7$(),l.Y8G("clrIfError","minlength"),l.R7$(4),l.R50("ngModel",o.textareaText),l.Y8G("ngModelOptions",l.lJ4(47,s)),l.R7$(),l.Y8G("clrIfError","required"),l.R7$(4),l.R50("ngModel",o.passwordText),l.Y8G("ngModelOptions",l.lJ4(48,s)),l.R7$(4),l.R50("ngModel",o.selectOption),l.R7$(12),l.Y8G("clrValue","Option 1"),l.R7$(2),l.Y8G("clrValue","Option 2"),l.R7$(2),l.Y8G("clrValue","Option 3"),l.R7$(6),l.R50("ngModel",o.radioOption),l.R7$(4),l.R50("ngModel",o.radioOption),l.R7$(10),l.R50("ngModel",o.date),l.Y8G("ngModelOptions",l.lJ4(49,s)),l.R7$(4),l.R50("ngModel",o.time),l.Y8G("ngModelOptions",l.lJ4(50,s)),l.R7$(5),l.R50("ngModel",o.date),l.Y8G("ngModelOptions",l.lJ4(51,s)),l.R7$(),l.R50("ngModel",o.time),l.Y8G("ngModelOptions",l.lJ4(52,s)),l.R7$(4),l.R50("clrNumericValue",o.money),l.R7$(7),l.R50("ngModel",o.checkboxValue),l.R7$(5),l.R50("ngModel",o.toggleValue),l.R7$(2),l.R50("ngModel",o.data),l.Y8G("ngModelOptions",l.lJ4(53,s)),l.R7$(7),l.R50("ngModel",o.data2),l.Y8G("ngModelOptions",l.lJ4(54,s)),l.R7$(8),l.Y8G("clrCode",o.codeExampleFullForm),l.R7$(28),l.R50("ngModel",o.inputTextSubmit),l.Y8G("ngModelOptions",l.lJ4(55,s)),l.R7$(2),l.SpI(" Submitted text (hit enter to submit): ",o.submittedText," "),l.R7$(),l.Y8G("clrCode",o.codeExampleFormSubmit),l.R7$(5),l.Y8G("clrCode",o.codeExampleFormSubmitBlur),l.R7$(3),l.Y8G("clrCode",o.codeExampleFormSubmitGeneral),l.R7$(3),l.Y8G("clrLayout","horizontal"),l.R7$(11),l.Y8G("clrCode",o.codeExampleROHorizontal),l.R7$(3),l.Y8G("clrLayout","horizontal"),l.R7$(21),l.Y8G("clrCode",o.codeExampleROHorizontal2),l.R7$(3),l.Y8G("clrLayout","vertical"),l.R7$(11),l.Y8G("clrCode",o.codeExampleROVertical),l.R7$(3),l.Y8G("clrLayout","vertical"),l.R7$(21),l.Y8G("clrCode",o.codeExampleROVertical2))},dependencies:[t.qT,t.xH,t.y7,t.me,t.Zm,t.wz,t.Fm,t.BC,t.cb,t.YS,t.xh,t.vS,t.cV,r.BlU,r.aZZ,r.Hpg,r.bnk,r.t3$,r.mDd,r.a3p,r.Jej,r.EjB,r.eAx,r.Lsb,r.sGX,r.k0q,r.$TL,r.lnv,r._Qf,r.WF1,r.icl,r.Xu5,r.zhI,r.O2Q,r.fkp,r.cWI,r.cIb,r.Yf6,r.hTQ,r.eJj,r.nPv,i.PDb,i.Edi,i.tZE,i.X03,i.V3k,i.Zoj,i.NQI,i.b2Q,x.z,f.u,d.Wk,d.wQ],encapsulation:2})}return a})(),V=(()=>{class a{static \u0275fac=function(m){return new(m||a)};static \u0275mod=l.$C({type:a});static \u0275inj=l.G2t({imports:[F.MD,t.YN,r.PuD,r.t5G,i.P8i,b.u,h.g,d.iI.forChild([{path:"",component:L}])]})}return a})()}}]);