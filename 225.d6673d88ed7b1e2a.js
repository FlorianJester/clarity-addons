"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[225],{37225:(_,s,t)=>{t.r(s),t.d(s,{MultilingualInputDemoModule:()=>M});var g=t(69808),a=t(52382),p=t(65909),i=t(19061),o=t(23933),m=t(24603),Z=t(62678),h=t(11489),e=t(31223),T=t(29031),v=t(71884);const d=function(){return{updateOn:"blur"}};let E=(()=>{class r extends h.K{constructor(){super("multilingual-input"),this.templateExample='\n<clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data1"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template1">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-input>\n<clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data2"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template2">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-textarea>\n',this.templateTSExample='\ndata1 = new Map();\nthis.data1.set("EN", "english text");\nthis.data1.set("DE", "deutscher text");\nthis.data1.set("FR", "texte fran\xe7ais");\n',this.reactiveExample='\n<form clrForm [formGroup]="exampleForm">\n    <clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample1"\n        clrControlClasses="clr-col-md-5" name="reactive1">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-input>\n    <clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample2"\n        clrControlClasses="clr-col-md-5" name="reactive2">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-textarea>\n</form>\n',this.reactiveTSExample='\nreactiveData1 = new Map();\nthis.reactiveData1.set("EN", "english text");\nthis.reactiveData1.set("DE", "deutscher text");\nthis.reactiveData1.set("FR", "texte fran\xe7ais");\n\nexampleForm = new FormGroup({\n  sample1: new FormControl(this.reactiveData1, {\n    updateOn: "blur",\n    validators: [ClrMultilingualInputValidators.requiredAll()]\n  })\n});\n',this.data1=new Map,this.data2=new Map,this.reactiveData1=new Map,this.reactiveData2=new Map,this.exampleForm=new a.cw({sample1:new a.NI(this.reactiveData1,{updateOn:"blur",validators:[o.M9p.requiredAll()]}),sample2:new a.NI(this.reactiveData2,{updateOn:"blur",validators:[o.M9p.requiredAll()]})})}ngOnInit(){this.data1.set("EN","english text"),this.data1.set("DE","deutscher text"),this.data1.set("FR","texte fran\xe7ais"),this.data2.set("EN","english text\nSecond line with a little more text"),this.data2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.data2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte"),this.reactiveData1.set("EN","english text"),this.reactiveData1.set("DE","deutscher text"),this.reactiveData1.set("FR","texte fran\xe7ais"),this.reactiveData2.set("EN","english text\nSecond line with a little more text"),this.reactiveData2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.reactiveData2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte")}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["clr-multilingual-demo"]],hostVars:4,hostBindings:function(n,l){2&n&&e.ekj("content-area",!0)("dox-content-panel",!0)},features:[e.qOj],decls:162,vars:24,consts:[[3,"title"],[1,"component-summary"],["id","code-examples"],["id","examples"],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["clrForm","",3,"formGroup"],["clrSelectedLang","EN","formControlName","sample1","clrControlClasses","clr-col-md-5","name","reactive1",1,"clr-col-12","clr-row"],[1,"clr-col-md-2","required"],["clrSelectedLang","EN","formControlName","sample2","clrControlClasses","clr-col-md-5","name","reactive2",1,"clr-col-12","clr-row"],[1,"clr-row"],[1,"clr-col-4"],[1,"clr-col-8"],[3,"clrCode"],["clrLanguage","typescript",3,"clrCode"],["clrForm",""],["clrSelectedLang","EN","clrRequiredAllMultilang","","clrControlClasses","clr-col-md-5","name","template1",1,"clr-col-12","clr-row",3,"ngModel","ngModelOptions","ngModelChange"],["clrSelectedLang","EN","clrRequiredAllMultilang","","clrControlClasses","clr-col-md-5","name","template2",1,"clr-col-12","clr-row",3,"ngModel","ngModelOptions","ngModelChange"]],template:function(n,l){1&n&&(e.TgZ(0,"clr-doc-wrapper",0)(1,"article")(2,"h5",1),e._uU(3,"The multilingual input/textarea fields are used to enter texts in different languages."),e.qZA(),e.TgZ(4,"div",2)(5,"h3",3),e._uU(6,"Code & Examples"),e.qZA(),e.TgZ(7,"p"),e._uU(8," The multilingual input/textarea components require you to use custom validators: "),e.qZA(),e.TgZ(9,"ul")(10,"li"),e._uU(11," Reactive forms: "),e.TgZ(12,"code",4),e._uU(13,"ClrMultilingualInputValidators"),e.qZA()(),e.TgZ(14,"li"),e._uU(15," Template-driven forms: "),e.TgZ(16,"code",4),e._uU(17,"clrRequiredOneMultilang, clrRequiredAllMultilang"),e.qZA()()(),e.TgZ(18,"h2"),e._uU(19,"Angular Component"),e.qZA(),e.TgZ(20,"h3"),e._uU(21,"Summary of Options"),e.qZA(),e.TgZ(22,"table",5)(23,"thead")(24,"tr")(25,"th",6),e._uU(26,"Parameter"),e.qZA(),e.TgZ(27,"th",7),e._uU(28,"Values"),e.qZA(),e.TgZ(29,"th",8),e._uU(30,"Default"),e.qZA(),e.TgZ(31,"th",6),e._uU(32,"Effect"),e.qZA()()(),e.TgZ(33,"tbody")(34,"tr")(35,"td",6)(36,"b"),e._uU(37,"value binding (ngModel or reactive)"),e.qZA(),e.TgZ(38,"div",9),e._uU(39,"Type: Map<string, string>"),e.qZA(),e.TgZ(40,"div",9),e._uU(41,"Default: null"),e.qZA()(),e.TgZ(42,"td",7),e._uU(43,"Map of language and translation"),e.qZA(),e.TgZ(44,"td",8),e._uU(45,"null"),e.qZA(),e.TgZ(46,"td",6),e._uU(47,"Value binding for control represented by a map of language as key and translation as value."),e.qZA()(),e.TgZ(48,"tr")(49,"td",6)(50,"b"),e._uU(51,"[clrSelectedLang]"),e.qZA(),e.TgZ(52,"div",9),e._uU(53,"Type: String"),e.qZA(),e.TgZ(54,"div",9),e._uU(55,'Default: ""'),e.qZA()(),e.TgZ(56,"td",7),e._uU(57,"Javascript String"),e.qZA(),e.TgZ(58,"td",8),e._uU(59,'""'),e.qZA(),e.TgZ(60,"td",6),e._uU(61,"Defines the currently selected language."),e.qZA()(),e.TgZ(62,"tr")(63,"td",6)(64,"b"),e._uU(65,"[clrControlClasses]"),e.qZA(),e.TgZ(66,"div",9),e._uU(67,"Type: String"),e.qZA(),e.TgZ(68,"div",9),e._uU(69,'Default: "clr-col-md-10"'),e.qZA()(),e.TgZ(70,"td",7),e._uU(71,"Javascript String"),e.qZA(),e.TgZ(72,"td",8),e._uU(73,'"clr-col-md-10"'),e.qZA(),e.TgZ(74,"td",6),e._uU(75,"Defines the css classes applied to the input control."),e.qZA()()()(),e.TgZ(76,"h3"),e._uU(77,"Reactive forms"),e.qZA(),e.TgZ(78,"p"),e._uU(79,"Validation will happen on blur"),e.qZA(),e.TgZ(80,"form",10)(81,"clr-multilingual-input",11)(82,"label",12),e._uU(83,"Reactive"),e.qZA(),e.TgZ(84,"clr-control-helper"),e._uU(85,"Helper text"),e.qZA(),e.TgZ(86,"clr-control-error"),e._uU(87,"Please translate in every language!"),e.qZA()(),e.TgZ(88,"clr-multilingual-textarea",13)(89,"label",12),e._uU(90,"Reactive"),e.qZA(),e.TgZ(91,"clr-control-helper"),e._uU(92,"Helper text"),e.qZA(),e.TgZ(93,"clr-control-error"),e._uU(94,"Please translate in every language!"),e.qZA()(),e.TgZ(95,"h4"),e._uU(96,"Output texts"),e.qZA(),e.TgZ(97,"div",14)(98,"div",15)(99,"b"),e._uU(100,"Input"),e.qZA(),e._UZ(101,"br"),e._uU(102),e._UZ(103,"br"),e._uU(104),e._UZ(105,"br"),e._uU(106),e.qZA(),e.TgZ(107,"div",16)(108,"b"),e._uU(109,"Textarea"),e.qZA(),e._UZ(110,"br"),e._uU(111),e._UZ(112,"br"),e._uU(113),e._UZ(114,"br"),e._uU(115),e.qZA()()(),e._UZ(116,"clr-code-snippet",17)(117,"clr-code-snippet",18),e.TgZ(118,"h3"),e._uU(119,"Template driven"),e.qZA(),e.TgZ(120,"p"),e._uU(121,"Validation will happen on blur"),e.qZA(),e.TgZ(122,"form",19)(123,"clr-multilingual-input",20),e.NdJ("ngModelChange",function(c){return l.data1=c}),e.TgZ(124,"label",12),e._uU(125,"Template"),e.qZA(),e.TgZ(126,"clr-control-error"),e._uU(127,"Please translate in every language!"),e.qZA(),e.TgZ(128,"clr-control-helper"),e._uU(129,"Helper text"),e.qZA()(),e.TgZ(130,"clr-multilingual-textarea",21),e.NdJ("ngModelChange",function(c){return l.data2=c}),e.TgZ(131,"label",12),e._uU(132,"Template"),e.qZA(),e.TgZ(133,"clr-control-error"),e._uU(134,"Please translate in every language!"),e.qZA(),e.TgZ(135,"clr-control-helper"),e._uU(136,"Helper text"),e.qZA()(),e.TgZ(137,"h4"),e._uU(138,"Output texts"),e.qZA(),e.TgZ(139,"div",14)(140,"div",15)(141,"b"),e._uU(142,"Input"),e.qZA(),e._UZ(143,"br"),e._uU(144),e._UZ(145,"br"),e._uU(146),e._UZ(147,"br"),e._uU(148),e.qZA(),e.TgZ(149,"div",16)(150,"b"),e._uU(151,"Textarea"),e.qZA(),e._UZ(152,"br"),e._uU(153),e._UZ(154,"br"),e._uU(155),e._UZ(156,"br"),e._uU(157),e.qZA()(),e.TgZ(158,"h4"),e._uU(159,"Output texts"),e.qZA()(),e._UZ(160,"clr-code-snippet",17)(161,"clr-code-snippet",18),e.qZA()()()),2&n&&(e.Q6J("title",l.title),e.xp6(80),e.Q6J("formGroup",l.exampleForm),e.xp6(22),e.hij(" EN: ",l.exampleForm.get("sample1").value.get("EN"),""),e.xp6(2),e.hij(" DE: ",l.exampleForm.get("sample1").value.get("DE"),""),e.xp6(2),e.hij(" FR: ",l.exampleForm.get("sample1").value.get("FR")," "),e.xp6(5),e.hij(" EN: ",l.exampleForm.get("sample2").value.get("EN"),""),e.xp6(2),e.hij(" DE: ",l.exampleForm.get("sample2").value.get("DE"),""),e.xp6(2),e.hij(" FR: ",l.exampleForm.get("sample2").value.get("FR")," "),e.xp6(1),e.Q6J("clrCode",l.reactiveExample),e.xp6(1),e.Q6J("clrCode",l.reactiveTSExample),e.xp6(6),e.Q6J("ngModel",l.data1)("ngModelOptions",e.DdM(22,d)),e.xp6(7),e.Q6J("ngModel",l.data2)("ngModelOptions",e.DdM(23,d)),e.xp6(14),e.hij(" EN: ",l.data1.get("EN"),""),e.xp6(2),e.hij(" DE: ",l.data1.get("DE"),""),e.xp6(2),e.hij(" FR: ",l.data1.get("FR")," "),e.xp6(5),e.hij(" EN: ",l.data2.get("EN"),""),e.xp6(2),e.hij(" DE: ",l.data2.get("DE"),""),e.xp6(2),e.hij(" FR: ",l.data2.get("FR")," "),e.xp6(3),e.Q6J("clrCode",l.templateExample),e.xp6(1),e.Q6J("clrCode",l.templateTSExample))},directives:[T.k,a._Y,a.JL,i.YAP,a.sg,o.i2k,a.JJ,a.u,i.MgK,o.$e1,i.CM6,i.VqA,o.VNb,v.O,a.F,o.nKJ,a.On],encapsulation:2}),r})(),M=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[g.ez,a.u5,a.UX,i.K6A,i.AnW,m.A,Z.B,p.Bz.forChild([{path:"",component:E}]),o.mmz]]}),r})()}}]);