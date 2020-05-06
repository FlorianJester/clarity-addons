function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&_setPrototypeOf(e,r)}function _setPrototypeOf(e,r){return(_setPrototypeOf=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function _createSuper(e){var r=_isNativeReflectConstruct();return function(){var l,c=_getPrototypeOf(e);if(r){var t=_getPrototypeOf(this).constructor;l=Reflect.construct(c,arguments,t)}else l=c.apply(this,arguments);return _possibleConstructorReturn(this,l)}}function _possibleConstructorReturn(e,r){return!r||"object"!=typeof r&&"function"!=typeof r?_assertThisInitialized(e):r}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{vVo6:function(e,r,l){"use strict";l.r(r),l.d(r,"NumericFieldDemoModule",(function(){return f}));var c,t,n=l("ofXK"),o=l("3Pt+"),i=l("tyNb"),a=l("8MG2"),b=l("6Y1o"),u=l("XPsC"),m=l("JsA7"),s=l("N+3j"),d=l("fXoL"),p=l("0G9f"),R=l("vAyd"),S=((t=function(e){_inherits(l,e);var r=_createSuper(l);function l(){var e;return _classCallCheck(this,l),(e=r.call(this,"numericfield")).htmlExample='\n<form clrForm clrLayout="vertical" [formGroup]="exampleForm">\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               type="text"\n               formControlName="money"\n               [clrUnit]="\'\u20ac\'"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Percentage</label>\n        <input clrInput clrNumeric\n               type="text"\n               formControlName="percentage"\n               [clrUnit]="\'%\'"\n               [clrDecimalPlaces]="0"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',e.htmlExample2='\n<form clrForm>\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'\u20ac\'"\n               [(ngModel)]="money"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Percentage</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'%\'"\n               [(ngModel)]="percentage"\n               [clrDecimalPlaces]="0"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',e.htmlExample3='\n<form clrForm>\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'\u20ac\'"\n               [clrUnitPosition]="\'left\'"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n</form>\n',e.htmlExample4='\n<form clrForm [formGroup]="exampleForm2">\n    <clr-input-container>\n        <label>Rounded Value</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               formControlName="money1"\n               [clrUnit]="\'\u20ac\'"\n               [clrRoundDisplayValue]="true"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Original Value</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               formControlName="money2"\n               [clrUnit]="\'\u20ac\'"\n               [clrDecimalPlaces]="5"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',e.tsExample='\nimport { FormControl, FormGroup, Validators } from "@angular/forms";\nimport { ClrNumericFieldValidators } from "@porscheinformatik/clr-addons";\n\nexampleForm = new FormGroup({\n    money: new FormControl(undefined, {\n        validators: [ClrNumericFieldValidators.min(0, ".", ","), ClrNumericFieldValidators.max(10000, ".", ","), Validators.required],\n        updateOn: "blur",\n    }),\n    percentage: new FormControl(undefined, {\n        validators: [ClrNumericFieldValidators.min(0, ".", ","), ClrNumericFieldValidators.max(100, ".", ","), Validators.required],\n        updateOn: "blur",\n    }),\n});\n',e.exampleForm=new o.e({money:new o.c(void 0,{validators:[b.A.min(0,".",","),b.A.max(1e4,".",","),o.y.required],updateOn:"blur"}),percentage:new o.c(void 0,{validators:[b.A.min(0,".",","),b.A.max(100,".",","),o.y.required],updateOn:"blur"})}),e.exampleForm2=new o.e({money1:new o.c(89.99999,{validators:[b.A.min(0,".",","),b.A.max(100,".",","),o.y.required],updateOn:"blur"}),money2:new o.c(89.99999,{validators:[b.A.min(0,".",","),b.A.max(100,".",","),o.y.required],updateOn:"blur"})}),e.usageForm=new o.e({money:new o.c(void 0,{validators:[b.A.min(0,".",","),o.y.required],updateOn:"blur"}),weight:new o.c(void 0,{validators:[b.A.min(0,".",","),o.y.required],updateOn:"blur"}),emission:new o.c(void 0,{validators:[b.A.min(0,".",","),o.y.required],updateOn:"blur"}),kilometres:new o.c(void 0,{validators:[b.A.min(0,".",","),o.y.required],updateOn:"blur"}),cubic:new o.c(void 0,{validators:[b.A.min(0,".",","),o.y.required],updateOn:"blur"}),millimetres:new o.c(void 0,{validators:[o.y.required],updateOn:"blur"}),kilowatt:new o.c(void 0,{validators:[b.A.min(0,".",","),o.y.required],updateOn:"blur"}),timeunit:new o.c(void 0,{validators:[b.A.min(0,".",","),o.y.required],updateOn:"blur"}),horsepower:new o.c(void 0,{validators:[b.A.min(0,".",","),o.y.required],updateOn:"blur"}),percentage:new o.c(void 0,{validators:[b.A.min(0,".",","),b.A.max(100,".",","),o.y.required],updateOn:"blur"})}),e}return l}(s.a)).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Gb({type:t,selectors:[["clr-numericfield-demo"]],hostVars:4,hostBindings:function(e,r){2&e&&d.Db("content-area",!0)("dox-content-panel",!0)},features:[d.xb],decls:356,vars:42,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],["id","usage"],[1,"list"],["clrForm","","clrLayout","horizontal",3,"formGroup"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac","formControlName","money",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","clrUnit","kg","formControlName","weight",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12"],["clrInput","","clrNumeric","","type","text","clrUnit","g/km","formControlName","emission",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","km","formControlName","kilometres",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","cc","formControlName","cubic",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","mm","formControlName","millimetres",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","kW","formControlName","kilowatt",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","TU","formControlName","timeunit",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12"],["clrInput","","clrNumeric","","type","text","clrUnit","hp","formControlName","horsepower",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","%","formControlName","percentage",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],[1,"clr-row"],[1,"clr-col-md-12","clr-col-lg-6"],[1,"clrweb-DoxMedia","is-do-block"],[1,"clrweb-DoxMedia-block"],["clrForm","","clrLayout","horizontal"],[1,"clr-col-4"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac",1,"clr-col-md-5","clr-col-sm-12",3,"clrAutofillDecimals"],[1,"clrweb-DoxMedia-text"],[1,"clrweb-DoxMedia-do-dont"],[1,"clrweb-DoxMedia","is-dont-block"],["clrInput","","type","text",1,"clr-col-md-5","clr-col-sm-12"],["id","code-examples"],["id","examples"],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["clrForm","","clrLayout","vertical",3,"formGroup"],["clrInput","","clrNumeric","","type","text","formControlName","money",3,"clrUnit","clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","formControlName","percentage",3,"clrUnit","clrDecimalPlaces"],[3,"clrCode"],["clrLanguage","typescript",3,"clrCode"],["clrForm",""],["clrInput","","clrNumeric","","type","text","name","money",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","ngModel","clrAutofillDecimals","ngModelChange"],["clrInput","","clrNumeric","","type","text","name","percentage",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","ngModel","clrDecimalPlaces","ngModelChange"],["clrInput","","clrNumeric","","type","text",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrUnitPosition","clrAutofillDecimals"],["clrForm","",3,"formGroup"],["clrInput","","clrNumeric","","type","text","formControlName","money1",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrRoundDisplayValue","clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","formControlName","money2",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrDecimalPlaces","clrAutofillDecimals"]],template:function(e,r){1&e&&(d.Sb(0,"clr-doc-wrapper",0),d.Sb(1,"article"),d.Sb(2,"h5",1),d.Ec(3,"The Numeric Field is used to enter numeric values of a certain type."),d.Rb(),d.Sb(4,"h3",2),d.Ec(5,"Usage"),d.Rb(),d.Sb(6,"ul"),d.Sb(7,"li"),d.Ec(8,"Invalid characters are ignored during input."),d.Rb(),d.Sb(9,"li"),d.Ec(10,"Amount of decimal places should be defined according to the input type and usecase. "),d.Rb(),d.Sb(11,"li"),d.Ec(12,"Decimal separator and grouping separator should be set according to locale."),d.Rb(),d.Rb(),d.Sb(13,"h3"),d.Ec(14,"Use when"),d.Rb(),d.Sb(15,"ul",3),d.Sb(16,"li"),d.Ec(17,"One of the following inputs is required from the user:"),d.Rb(),d.Rb(),d.Sb(18,"form",4),d.Sb(19,"clr-input-container"),d.Sb(20,"label"),d.Ec(21,"Money Amount"),d.Rb(),d.Nb(22,"input",5),d.Sb(23,"clr-control-error"),d.Ec(24,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(25,"clr-input-container"),d.Sb(26,"label"),d.Ec(27,"Weight"),d.Rb(),d.Nb(28,"input",6),d.Sb(29,"clr-control-error"),d.Ec(30,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(31,"clr-input-container"),d.Sb(32,"label"),d.Ec(33,"Emission"),d.Rb(),d.Nb(34,"input",7),d.Sb(35,"clr-control-error"),d.Ec(36,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(37,"clr-input-container"),d.Sb(38,"label"),d.Ec(39,"Kilometer Reading"),d.Rb(),d.Nb(40,"input",8),d.Sb(41,"clr-control-error"),d.Ec(42,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(43,"clr-input-container"),d.Sb(44,"label"),d.Ec(45,"Cubic Capacity"),d.Rb(),d.Nb(46,"input",9),d.Sb(47,"clr-control-error"),d.Ec(48,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(49,"clr-input-container"),d.Sb(50,"label"),d.Ec(51,"Millimeter"),d.Rb(),d.Nb(52,"input",10),d.Sb(53,"clr-control-error"),d.Ec(54,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(55,"clr-input-container"),d.Sb(56,"label"),d.Ec(57,"Kilowatt"),d.Rb(),d.Nb(58,"input",11),d.Sb(59,"clr-control-error"),d.Ec(60,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(61,"clr-input-container"),d.Sb(62,"label"),d.Ec(63,"Timeunit"),d.Rb(),d.Nb(64,"input",12),d.Sb(65,"clr-control-error"),d.Ec(66,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(67,"clr-input-container"),d.Sb(68,"label"),d.Ec(69,"Horsepower"),d.Rb(),d.Nb(70,"input",13),d.Sb(71,"clr-control-error"),d.Ec(72,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(73,"clr-input-container"),d.Sb(74,"label"),d.Ec(75,"Percentage"),d.Rb(),d.Nb(76,"input",14),d.Sb(77,"clr-control-error"),d.Ec(78,"Please enter a value between 0 and 100 (including)."),d.Rb(),d.Rb(),d.Rb(),d.Sb(79,"div",15),d.Sb(80,"div",16),d.Sb(81,"div",17),d.Sb(82,"div",18),d.Sb(83,"form",19),d.Sb(84,"clr-input-container"),d.Sb(85,"label",20),d.Ec(86,"Price (gross)"),d.Rb(),d.Nb(87,"input",21),d.Sb(88,"clr-control-error"),d.Ec(89,"Please enter a value greater than 0"),d.Rb(),d.Rb(),d.Sb(90,"clr-input-container"),d.Sb(91,"label",20),d.Ec(92,"Price (net)"),d.Rb(),d.Nb(93,"input",21),d.Sb(94,"clr-control-error"),d.Ec(95,"Please enter a value greater than 0"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(96,"div",22),d.Sb(97,"h6",23),d.Ec(98,"Do"),d.Rb(),d.Sb(99,"p"),d.Ec(100," Use the numeric field consistently for the listed input types. "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(101,"div",16),d.Sb(102,"div",24),d.Sb(103,"div",18),d.Sb(104,"form",19),d.Sb(105,"clr-input-container"),d.Sb(106,"label",20),d.Ec(107,"Price (gross)"),d.Rb(),d.Nb(108,"input",25),d.Sb(109,"clr-control-error"),d.Ec(110,"Please enter a value greater than 0"),d.Rb(),d.Rb(),d.Sb(111,"clr-input-container"),d.Sb(112,"label",20),d.Ec(113,"Price (net)"),d.Rb(),d.Nb(114,"input",21),d.Sb(115,"clr-control-error"),d.Ec(116,"Please enter a value greater than 0"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(117,"div",22),d.Sb(118,"h6",23),d.Ec(119,"Don't"),d.Rb(),d.Sb(120,"p"),d.Ec(121," Don't use normal input and numeric fields inconsistently. "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(122,"div",26),d.Sb(123,"h3",27),d.Ec(124,"Code & Examples"),d.Rb(),d.Sb(125,"p"),d.Ec(126," Because the numeric field is a directive, it can be applied on any "),d.Sb(127,"code",28),d.Ec(128,"input"),d.Rb(),d.Ec(129," element. This makes the numeric field compatible with the existing "),d.Sb(130,"code",28),d.Ec(131,"ClrInputContainer"),d.Rb(),d.Ec(132," and forms. See code examples below which include "),d.Sb(133,"code",28),d.Ec(134,"clr-control-error"),d.Rb(),d.Ec(135," and "),d.Sb(136,"code",28),d.Ec(137,"clr-control-helper"),d.Rb(),d.Ec(138," elements. "),d.Rb(),d.Sb(139,"p"),d.Ec(140," The numeric field supports template driven as well as reactive forms, see the form demos below. "),d.Rb(),d.Sb(141,"p"),d.Ec(142," The numeric field requires you to use custom validators to validate min and max values: "),d.Rb(),d.Sb(143,"ul"),d.Sb(144,"li"),d.Ec(145,"Reactive: "),d.Sb(146,"code",28),d.Ec(147,"ClrNumericFieldValidators"),d.Rb(),d.Rb(),d.Sb(148,"li"),d.Ec(149,"Template driven: "),d.Sb(150,"code",28),d.Ec(151,"clrMaxNumeric"),d.Rb(),d.Ec(152," and "),d.Sb(153,"code",28),d.Ec(154,"clrMinNumeric"),d.Rb(),d.Rb(),d.Rb(),d.Sb(155,"h2"),d.Ec(156,"Angular Directive"),d.Rb(),d.Sb(157,"h3"),d.Ec(158,"Summary of Options"),d.Rb(),d.Sb(159,"table",29),d.Sb(160,"thead"),d.Sb(161,"tr"),d.Sb(162,"th",30),d.Ec(163,"Input"),d.Rb(),d.Sb(164,"th",31),d.Ec(165,"Values"),d.Rb(),d.Sb(166,"th",32),d.Ec(167,"Default"),d.Rb(),d.Sb(168,"th",30),d.Ec(169,"Effect"),d.Rb(),d.Rb(),d.Rb(),d.Sb(170,"tbody"),d.Sb(171,"tr"),d.Sb(172,"td",30),d.Sb(173,"b"),d.Ec(174,"[clrTextAlign]"),d.Rb(),d.Sb(175,"div",33),d.Ec(176,"Type: String"),d.Rb(),d.Sb(177,"div",33),d.Ec(178,'Default: "right"'),d.Rb(),d.Rb(),d.Sb(179,"td",31),d.Ec(180,"left, right"),d.Rb(),d.Sb(181,"td",32),d.Ec(182,'"right"'),d.Rb(),d.Sb(183,"td",30),d.Ec(184,"Defines the alignment of the text inside input field."),d.Rb(),d.Rb(),d.Sb(185,"tr"),d.Sb(186,"td",30),d.Sb(187,"b"),d.Ec(188,"[clrDecimalSep]"),d.Rb(),d.Sb(189,"div",33),d.Ec(190,"Type: String"),d.Rb(),d.Sb(191,"div",33),d.Ec(192,'Default: ","'),d.Rb(),d.Rb(),d.Sb(193,"td",31),d.Ec(194,"Javascript String"),d.Rb(),d.Sb(195,"td",32),d.Ec(196,'","'),d.Rb(),d.Sb(197,"td",30),d.Ec(198,"Defines the decimal separator."),d.Rb(),d.Rb(),d.Sb(199,"tr"),d.Sb(200,"td",30),d.Sb(201,"b"),d.Ec(202,"[clrGroupingSep]"),d.Rb(),d.Sb(203,"div",33),d.Ec(204,"Type: String"),d.Rb(),d.Sb(205,"div",33),d.Ec(206,'Default: "."'),d.Rb(),d.Rb(),d.Sb(207,"td",31),d.Ec(208,"Javascript String"),d.Rb(),d.Sb(209,"td",32),d.Ec(210,'"."'),d.Rb(),d.Sb(211,"td",30),d.Ec(212,"Defines the grouping separator."),d.Rb(),d.Rb(),d.Sb(213,"tr"),d.Sb(214,"td",30),d.Sb(215,"b"),d.Ec(216,"[clrDecimalPlaces]"),d.Rb(),d.Sb(217,"div",33),d.Ec(218,"Type: Number"),d.Rb(),d.Sb(219,"div",33),d.Ec(220,"Default: 2"),d.Rb(),d.Rb(),d.Sb(221,"td",31),d.Ec(222,"Javascript Number"),d.Rb(),d.Sb(223,"td",32),d.Ec(224,"2"),d.Rb(),d.Sb(225,"td",30),d.Ec(226,"Defines the number of allowed decimal places."),d.Rb(),d.Rb(),d.Sb(227,"tr"),d.Sb(228,"td",30),d.Sb(229,"b"),d.Ec(230,"[clrAutofillDecimals]"),d.Rb(),d.Sb(231,"div",33),d.Ec(232,"Type: Boolean"),d.Rb(),d.Sb(233,"div",33),d.Ec(234,"Default: false"),d.Rb(),d.Rb(),d.Sb(235,"td",31),d.Ec(236,"true, false"),d.Rb(),d.Sb(237,"td",32),d.Ec(238,"false"),d.Rb(),d.Sb(239,"td",30),d.Ec(240,"Defines whether decimal places should automatically be filled with zeroes until clrDecimalPlaces is reached. Useful for money fields. "),d.Rb(),d.Rb(),d.Sb(241,"tr"),d.Sb(242,"td",30),d.Sb(243,"b"),d.Ec(244,"[clrUnit]"),d.Rb(),d.Sb(245,"div",33),d.Ec(246,"Type: string"),d.Rb(),d.Sb(247,"div",33),d.Ec(248,'Default: ""'),d.Rb(),d.Rb(),d.Sb(249,"td",31),d.Ec(250,"Javascript String"),d.Rb(),d.Sb(251,"td",32),d.Ec(252,'""'),d.Rb(),d.Sb(253,"td",30),d.Ec(254,"The unit to be displayed on top of the input field."),d.Rb(),d.Rb(),d.Sb(255,"tr"),d.Sb(256,"td",30),d.Sb(257,"b"),d.Ec(258,"[clrUnitPosition]"),d.Rb(),d.Sb(259,"div",33),d.Ec(260,"Type: string"),d.Rb(),d.Sb(261,"div",33),d.Ec(262,'Default: "right"'),d.Rb(),d.Rb(),d.Sb(263,"td",31),d.Ec(264,'"left", "right"'),d.Rb(),d.Sb(265,"td",32),d.Ec(266,'"right"'),d.Rb(),d.Sb(267,"td",30),d.Ec(268,"Determines whether the unit is shown on the right or left side of the value. "),d.Rb(),d.Rb(),d.Sb(269,"tr"),d.Sb(270,"td",30),d.Sb(271,"b"),d.Ec(272,"[clrRoundDisplayValue]"),d.Rb(),d.Sb(273,"div",33),d.Ec(274,"Type: Boolean"),d.Rb(),d.Sb(275,"div",33),d.Ec(276,"Default: false"),d.Rb(),d.Rb(),d.Sb(277,"td",31),d.Ec(278,"true, false"),d.Rb(),d.Sb(279,"td",32),d.Ec(280,"false"),d.Rb(),d.Sb(281,"td",30),d.Ec(282,"Defines whether the value should be rounded or not. "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(283,"h4"),d.Ec(284,"Vertical Form (Reactive)"),d.Rb(),d.Sb(285,"p"),d.Ec(286,"In the following section you can find some examples with validation."),d.Rb(),d.Sb(287,"form",34),d.Sb(288,"clr-input-container"),d.Sb(289,"label"),d.Ec(290,"Money"),d.Rb(),d.Nb(291,"input",35),d.Sb(292,"clr-control-error"),d.Ec(293,"Please enter a value between 0 and 10.000"),d.Rb(),d.Rb(),d.Sb(294,"clr-input-container"),d.Sb(295,"label"),d.Ec(296,"Percentage"),d.Rb(),d.Nb(297,"input",36),d.Sb(298,"clr-control-error"),d.Ec(299,"Please enter a value between 0 and 100"),d.Rb(),d.Rb(),d.Rb(),d.Nb(300,"clr-code-snippet",37),d.Nb(301,"clr-code-snippet",38),d.Sb(302,"h4"),d.Ec(303,"Horizontal Form (Template Driven)"),d.Rb(),d.Sb(304,"form",39),d.Sb(305,"clr-input-container"),d.Sb(306,"label"),d.Ec(307,"Money"),d.Rb(),d.Sb(308,"input",40),d.ac("ngModelChange",(function(e){return r.moneyTemplate=e})),d.Rb(),d.Sb(309,"clr-control-error"),d.Ec(310,"Please enter a value between 0 and 10.000"),d.Rb(),d.Rb(),d.Sb(311,"clr-input-container"),d.Sb(312,"label"),d.Ec(313,"Percentage"),d.Rb(),d.Sb(314,"input",41),d.ac("ngModelChange",(function(e){return r.percentageTemplate=e})),d.Rb(),d.Sb(315,"clr-control-error"),d.Ec(316,"Please enter a value between 0 and 100"),d.Rb(),d.Rb(),d.Rb(),d.Nb(317,"clr-code-snippet",37),d.Sb(318,"h4"),d.Ec(319,"Alignment"),d.Rb(),d.Sb(320,"p"),d.Ec(321,"For special usecases, if necessary the Unit and Value alignment can be defined independently."),d.Rb(),d.Sb(322,"form",39),d.Sb(323,"clr-input-container"),d.Sb(324,"label"),d.Ec(325,"Money"),d.Rb(),d.Nb(326,"input",42),d.Sb(327,"clr-control-error"),d.Ec(328,"Please enter a value between 0 and 10.000"),d.Rb(),d.Rb(),d.Rb(),d.Nb(329,"clr-code-snippet",37),d.Sb(330,"h4"),d.Ec(331,"Rounding"),d.Rb(),d.Sb(332,"p"),d.Ec(333," If "),d.Sb(334,"code"),d.Ec(335,"[clrRoundDisplayValue]"),d.Rb(),d.Ec(336," is "),d.Sb(337,"code"),d.Ec(338,"true"),d.Rb(),d.Ec(339,", the displayed value is rounded."),d.Nb(340,"br"),d.Ec(341," A change event is only fired, after the user modifies the input field. "),d.Rb(),d.Sb(342,"form",43),d.Sb(343,"clr-input-container"),d.Sb(344,"label"),d.Ec(345,"Rounded Value"),d.Rb(),d.Nb(346,"input",44),d.Sb(347,"clr-control-error"),d.Ec(348,"Please enter a value between 0 and 100"),d.Rb(),d.Rb(),d.Sb(349,"clr-input-container"),d.Sb(350,"label"),d.Ec(351,"Original Value"),d.Rb(),d.Nb(352,"input",45),d.Sb(353,"clr-control-error"),d.Ec(354,"Please enter a value between 0 and 100"),d.Rb(),d.Rb(),d.Rb(),d.Nb(355,"clr-code-snippet",37),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.kc("ng",r.ng)("ui",r.ui)("title",r.title)("newLayout",r.newLayout),d.Ab(18),d.kc("formGroup",r.usageForm),d.Ab(4),d.kc("clrAutofillDecimals",!0),d.Ab(12),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(12),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(11),d.kc("clrAutofillDecimals",!0),d.Ab(6),d.kc("clrAutofillDecimals",!0),d.Ab(21),d.kc("clrAutofillDecimals",!0),d.Ab(173),d.kc("formGroup",r.exampleForm),d.Ab(4),d.kc("clrUnit","\u20ac")("clrAutofillDecimals",!0),d.Ab(6),d.kc("clrUnit","%")("clrDecimalPlaces",0),d.Ab(3),d.kc("clrCode",r.htmlExample),d.Ab(1),d.kc("clrCode",r.tsExample),d.Ab(7),d.kc("clrUnit","\u20ac")("ngModel",r.moneyTemplate)("clrAutofillDecimals",!0),d.Ab(6),d.kc("clrUnit","%")("ngModel",r.percentageTemplate)("clrDecimalPlaces",0),d.Ab(3),d.kc("clrCode",r.htmlExample2),d.Ab(9),d.kc("clrUnit","\u20ac")("clrUnitPosition","left")("clrAutofillDecimals",!0),d.Ab(3),d.kc("clrCode",r.htmlExample3),d.Ab(13),d.kc("formGroup",r.exampleForm2),d.Ab(4),d.kc("clrUnit","\u20ac")("clrRoundDisplayValue",!0)("clrAutofillDecimals",!0),d.Ab(6),d.kc("clrUnit","\u20ac")("clrDecimalPlaces",5)("clrAutofillDecimals",!0),d.Ab(3),d.kc("clrCode",r.htmlExample4))},directives:[p.a,o.A,o.n,a.u,a.E,o.f,a.C,a.D,o.b,a.B,b.y,o.m,o.d,a.i,o.o,R.a,o.p],encapsulation:2}),t),f=((c=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:c}),c.\u0275inj=d.Jb({factory:function(e){return new(e||c)},imports:[[n.c,o.h,o.u,a.a,a.v,u.a,m.a,i.g.forChild([{path:"",component:S}]),b.a]]}),c)}}]);