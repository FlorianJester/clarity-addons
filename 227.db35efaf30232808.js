"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[227],{71227:(V,F,i)=>{i.r(F),i.d(F,{QuickListDemoModule:()=>Q});var a=i(84341),u=i(60177),n=i(42663),m=i(20786),k=i(5928),p=i(63275),d=i(36366),E=i(2985),e=i(54438),j=i(87620),h=i(91464);function f(r,c){1&r&&(e.j41(0,"clr-control-error"),e.EFF(1,"Please select a value"),e.k0s())}function b(r,c){1&r&&(e.j41(0,"clr-control-error"),e.EFF(1,"Please enter a value"),e.k0s())}function g(r,c){if(1&r){const l=e.RV6();e.j41(0,"clr-select-container"),e.nrm(1,"label",30),e.j41(2,"select",31),e.mxI("ngModelChange",function(t){const s=e.eBV(l).$implicit;return e.DH7(s.salutation,t)||(s.salutation=t),e.Njj(t)}),e.j41(3,"option",32),e.EFF(4,"Mr."),e.k0s(),e.j41(5,"option",33),e.EFF(6,"Mrs."),e.k0s(),e.j41(7,"option",34),e.EFF(8,"Ms."),e.k0s()(),e.DNE(9,f,2,0,"clr-control-error",35),e.k0s(),e.j41(10,"clr-input-container"),e.nrm(11,"label",30),e.j41(12,"input",36),e.mxI("ngModelChange",function(t){const s=e.eBV(l).$implicit;return e.DH7(s.name,t)||(s.name=t),e.Njj(t)}),e.k0s(),e.DNE(13,b,2,0,"clr-control-error",35),e.k0s()}if(2&r){const l=c.$implicit;e.R7$(),e.Y8G("hidden",!0),e.R7$(),e.Y8G("name","salutation"+l.id),e.R50("ngModel",l.salutation),e.R7$(7),e.Y8G("clrIfError","required"),e.R7$(2),e.Y8G("hidden",!0),e.R7$(),e.R50("ngModel",l.name),e.Y8G("name","last"+l.id),e.R7$(),e.Y8G("clrIfError","required")}}function y(r,c){1&r&&(e.j41(0,"clr-control-error"),e.EFF(1,"Please select a value"),e.k0s())}function v(r,c){1&r&&(e.j41(0,"clr-control-error"),e.EFF(1,"Please enter a value"),e.k0s())}function L(r,c){if(1&r){const l=e.RV6();e.j41(0,"clr-select-container"),e.nrm(1,"label",30),e.j41(2,"select",31),e.mxI("ngModelChange",function(t){const s=e.eBV(l).$implicit;return e.DH7(s.salutation,t)||(s.salutation=t),e.Njj(t)}),e.j41(3,"option",32),e.EFF(4,"Mr."),e.k0s(),e.j41(5,"option",33),e.EFF(6,"Mrs."),e.k0s(),e.j41(7,"option",34),e.EFF(8,"Ms."),e.k0s()(),e.DNE(9,y,2,0,"clr-control-error",35),e.k0s(),e.j41(10,"clr-input-container"),e.nrm(11,"label",30),e.j41(12,"input",36),e.mxI("ngModelChange",function(t){const s=e.eBV(l).$implicit;return e.DH7(s.name,t)||(s.name=t),e.Njj(t)}),e.k0s(),e.DNE(13,v,2,0,"clr-control-error",35),e.k0s()}if(2&r){const l=c.$implicit;e.R7$(),e.Y8G("hidden",!0),e.R7$(),e.Y8G("name","salutation"+l.id),e.R50("ngModel",l.salutation),e.R7$(7),e.Y8G("clrIfError","required"),e.R7$(2),e.Y8G("hidden",!0),e.R7$(),e.R50("ngModel",l.name),e.Y8G("name","last"+l.id),e.R7$(),e.Y8G("clrIfError","required")}}function C(r,c){1&r&&(e.j41(0,"clr-control-error"),e.EFF(1,"Please select a value"),e.k0s())}function M(r,c){1&r&&(e.j41(0,"clr-control-error"),e.EFF(1,"Please enter a value"),e.k0s())}function T(r,c){if(1&r){const l=e.RV6();e.j41(0,"clr-select-container"),e.nrm(1,"label",30),e.j41(2,"select",31),e.mxI("ngModelChange",function(t){const s=e.eBV(l).$implicit;return e.DH7(s.salutation,t)||(s.salutation=t),e.Njj(t)}),e.j41(3,"option",32),e.EFF(4,"Mr."),e.k0s(),e.j41(5,"option",33),e.EFF(6,"Mrs."),e.k0s(),e.j41(7,"option",34),e.EFF(8,"Ms."),e.k0s()(),e.DNE(9,C,2,0,"clr-control-error",35),e.k0s(),e.j41(10,"clr-input-container"),e.nrm(11,"label",30),e.j41(12,"input",36),e.mxI("ngModelChange",function(t){const s=e.eBV(l).$implicit;return e.DH7(s.name,t)||(s.name=t),e.Njj(t)}),e.k0s(),e.DNE(13,M,2,0,"clr-control-error",35),e.k0s()}if(2&r){const l=c.$implicit;e.R7$(),e.Y8G("hidden",!0),e.R7$(),e.Y8G("name","salutation"+l.id),e.R50("ngModel",l.salutation),e.R7$(7),e.Y8G("clrIfError","required"),e.R7$(2),e.Y8G("hidden",!0),e.R7$(),e.R50("ngModel",l.name),e.Y8G("name","last"+l.id),e.R7$(),e.Y8G("clrIfError","required")}}let G=(()=>{class r extends E.S{htmlExample1='\n<clr-quick-list\n    [clrAddLabel]="getAddLabel()"\n    [clrAllValues]="possibleOptions"\n    [clrBlankOption]="BLANK_OPTION"\n    [clrMandatory]="true"\n    [clrValues]="selectedOptionsMandatory"\n    class="clr-form-control clr-row"\n    clrControlClasses="clr-col-lg-3 clr-col-md-4 clr-col-sm-5">\n  <label class="clr-control-label clr-col-md-2 clr-col-sm-3 clr-required-mark">Option list</label>\n</clr-quick-list>\n';htmlExample2='\nimport { ClrQuickListValue } from \'@porscheinformatik/clr-addons\';\n\n...\n\nBLANK_OPTION: ClrQuickListValue<string> = { id: "-BLANK-", label: "- Select -", value: null };\noptions: Array<string> = [\n  "First option",\n  "Second option",\n  "Third Option",\n  "Fourth option",\n  "Fifth option"\n];\npossibleOptions: Array<ClrQuickListValue<string>> = this.options.map(op=>\n  new class implements ClrQuickListValue<string> {\n    id = op.substr(0, 3);\n    label = op;\n    value = op;\n  }());\n';htmlExampleGeneric='\n<clr-generic-quick-list [clrAddLabel]="\'ADD\'" [clrAddPossible]="form.valid" [clrAllItems]="allItemsGeneric"\n    [clrMandatory]="\'true\'" class="clr-row" clrControlClasses="clr-col-md-6 clr-col-xl-4">\n\n    \x3c!-- Label in front of the control --\x3e\n    <label class="clr-control-label clr-col-md-2 clr-required-mark">Generic Quick List</label>\n\n    \x3c!-- Optional header row --\x3e\n    <div class="header-container">\n        <div class="clr-required-mark">Salutation</div>\n        <div class="clr-required-mark">Name</div>\n    </div>\n\n    \x3c!-- Custom row template --\x3e\n    <ng-template let-item>\n        <clr-select-container>\n          <label [hidden]="true"></label>\n          <select required clrSelect class="clr-col-12" [name]="\'salutation\' + item.id"\n                  [(ngModel)]="item.salutation">\n              <option value="mr">Mr.</option>\n              <option value="mrs">Mrs.</option>\n              <option value="ms">Ms.</option>\n          </select>\n          <clr-control-error *clrIfError="\'required\'">Please select a value</clr-control-error>\n        </clr-select-container>\n        <clr-input-container>\n            <label [hidden]="true"></label>\n            <input class="clr-col-12" placeholder="Name*" clrInput [(ngModel)]="item.name"\n            required [name]="\'last\' + item.id" />\n            <clr-control-error *clrIfError="\'required\'">Please enter a value</clr-control-error>\n        </clr-input-container>\n    </ng-template>\n</clr-generic-quick-list>\n';angularExampleGeneric="\nimport { ClrGenericQuickListItem } from '@porscheinformatik/clr-addons';\n\ninterface ClrNameQuickListItem extends ClrGenericQuickListItem {\n    salutation: string;\n    name: string;\n};\n\nallItemsGeneric = [<ClrNameQuickListItem>{ id: 1 }];\n";BLANK_OPTION={id:"-BLANK-",label:"- Select -",value:null};options=["First option","Second option","Third Option","Fourth option","Fifth option"];possibleOptions=this.options.map(l=>new class{id=l.substring(0,3);label=l;value=l});selectedOptionsMandatory=[];selectedOptionsNotMandatory=[];selectedOptionsCompactMandatory=[];allItemsGeneric=[];allItemsGenericCM=[];allItemsGenericCMMandatory=[];constructor(){super("quick-list")}getAddLabel(){return"ADD OPTION"}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=e.VBU({type:r,selectors:[["app-quick-list"]],hostVars:4,hostBindings:function(o,t){2&o&&e.AVh("content-area",!0)("dox-content-panel",!0)},features:[e.Vt3],decls:433,vars:33,consts:[["form","ngForm"],["formCompact","ngForm"],["formCompact2","ngForm"],[3,"title"],[1,"component-summary"],["id","design-guidelines"],["id","usage"],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],[1,"clr-hidden-xs-down"],["id","code-examples"],["id","examples"],["clrForm",""],["clrControlClasses","clr-col-lg-3 clr-col-md-4 clr-col-sm-5",1,"clr-form-control","clr-row",3,"clrAddLabel","clrAllValues","clrBlankOption","clrMandatory","clrValues"],[1,"clr-control-label","clr-col-md-2","clr-col-sm-3","clr-required-mark"],["clrControlClasses","clr-col-lg-3 clr-col-md-4 clr-col-sm-5",1,"clr-form-control","clr-row",3,"clrAddLabel","clrAllValues","clrBlankOption","clrValues"],[1,"clr-control-label","clr-col-md-2","clr-col-sm-3"],["clrControlClasses","clr-col-lg-3 clr-col-md-4 clr-col-sm-5",1,"clr-form-control","clr-row",3,"clrAddLabel","clrAllValues","clrBlankOption","clrValues","compactMode","clrMandatory"],[3,"clrCode"],["clrLanguage","typescript",3,"clrCode"],["clrControlClasses","clr-col-md-6 clr-col-xl-4",1,"clr-row",3,"clrAddLabel","clrAddPossible","clrAllItems","clrMandatory"],[1,"clr-control-label","clr-col-md-2","clr-required-mark"],[1,"header-container"],[1,"clr-required-mark"],["clrControlClasses","clr-col-md-6 clr-col-xl-4",1,"clr-row",3,"clrAddLabel","clrAddPossible","clrAllItems","clrMandatory","compactMode"],["clrControlClasses","clr-col-md-6 clr-col-xl-4",1,"clr-row",3,"clrAddLabel","clrAddPossible","clrAllItems","compactMode"],[1,"clr-control-label","clr-col-md-2"],[3,"hidden"],["required","","clrSelect","",1,"clr-col-12",3,"ngModelChange","name","ngModel"],["value","mr"],["value","mrs"],["value","ms"],[4,"clrIfError"],["clrInput","","required","",1,"clr-col-12",3,"ngModelChange","ngModel","name"]],template:function(o,t){if(1&o&&(e.j41(0,"clr-doc-wrapper",3)(1,"article")(2,"h5",4),e.EFF(3," The quick list of Clarity Addons extends the default select component by an Angular Component which allows you to use a multi selection list. "),e.k0s(),e.j41(4,"div",5)(5,"h3",6),e.EFF(6,"Usage"),e.k0s(),e.j41(7,"p"),e.EFF(8," Use the Quick List whenever you want to allow the user to select multiple option from a suggestion list. The user is able to select option by scrolling over the list. By clicking the Add button below the list he is able to make additional selection. "),e.k0s(),e.j41(9,"p"),e.EFF(10," The component uses a predefined type "),e.j41(11,"code",7),e.EFF(12,"ClrQuickListValue\u227aT\u227b "),e.k0s(),e.EFF(13," that encapsulates the real data (values), you should wrap your data accordingly inside ClrQuickListValue. So the component uses generics "),e.j41(14,"code",7),e.EFF(15,"T"),e.k0s(),e.EFF(16," for the type of the contained values. "),e.k0s(),e.j41(17,"table",8)(18,"thead")(19,"tr")(20,"th",9),e.EFF(21,"attribute"),e.k0s(),e.j41(22,"th",10),e.EFF(23,"Values"),e.k0s(),e.j41(24,"th",9),e.EFF(25,"Effect"),e.k0s()()(),e.j41(26,"tbody")(27,"tr")(28,"td",9)(29,"b"),e.EFF(30,"label"),e.k0s(),e.j41(31,"div",11),e.EFF(32,"Type: string"),e.k0s()(),e.j41(33,"td",10),e.EFF(34,"string"),e.k0s(),e.j41(35,"td",9),e.EFF(36,"the label that will be displayed for each option"),e.k0s()(),e.j41(37,"tr")(38,"td",9)(39,"b"),e.EFF(40,"value"),e.k0s(),e.j41(41,"div",11),e.EFF(42,"Type: string"),e.k0s()(),e.j41(43,"td",10)(44,"code",7),e.EFF(45,"T"),e.k0s()(),e.j41(46,"td",9),e.EFF(47,"the value behind each option"),e.k0s()(),e.j41(48,"tr")(49,"td",9)(50,"b"),e.EFF(51,"id"),e.k0s(),e.j41(52,"div",11),e.EFF(53,"Type: string"),e.k0s()(),e.j41(54,"td",10),e.EFF(55,"string"),e.k0s(),e.j41(56,"td",9),e.EFF(57,"the ids over the list should be unique"),e.k0s()()()(),e.j41(58,"h3"),e.EFF(59,"Summary of Options"),e.k0s(),e.j41(60,"table",8)(61,"thead")(62,"tr")(63,"th",9),e.EFF(64,"Input/Output"),e.k0s(),e.j41(65,"th",10),e.EFF(66,"Values"),e.k0s(),e.j41(67,"th",12),e.EFF(68,"Default"),e.k0s(),e.j41(69,"th",9),e.EFF(70,"Effect"),e.k0s()()(),e.j41(71,"tbody")(72,"tr")(73,"td",9)(74,"b"),e.EFF(75,"value binding (ngModel or reactive)"),e.k0s(),e.j41(76,"div",11),e.EFF(77,"Type: List of ClrQuickListValue"),e.k0s(),e.j41(78,"div",11),e.EFF(79,"Default: []"),e.k0s()(),e.j41(80,"td",10),e.EFF(81,"List of ClrQuickListValue"),e.k0s(),e.j41(82,"td",12),e.EFF(83,"[]"),e.k0s(),e.j41(84,"td",9),e.EFF(85,"Value binding for control represented by a list of options."),e.k0s()(),e.j41(86,"tr")(87,"td",9)(88,"b"),e.EFF(89,"[clrBlankOption]"),e.k0s(),e.j41(90,"div",11),e.EFF(91,"Type: ClrQuickListValue"),e.k0s(),e.j41(92,"div",11),e.EFF(93,"Default: default"),e.k0s()(),e.j41(94,"td",10),e.EFF(95,"ClrQuickListValue"),e.k0s(),e.j41(96,"td",12),e.EFF(97,"default"),e.k0s(),e.j41(98,"td",9),e.EFF(99,"The object that should refer to the no-option selected"),e.k0s()(),e.j41(100,"tr")(101,"td",9)(102,"b"),e.EFF(103,"[clrAllValues]"),e.k0s(),e.j41(104,"div",11),e.EFF(105,"Type: List of ClrQuickListValue"),e.k0s(),e.j41(106,"div",11),e.EFF(107,"Default: []"),e.k0s()(),e.j41(108,"td",10),e.EFF(109,"List of ClrQuickListValue"),e.k0s(),e.j41(110,"td",12),e.EFF(111,"[]"),e.k0s(),e.j41(112,"td",9),e.EFF(113,"Contains all the options list"),e.k0s()(),e.j41(114,"tr")(115,"td",9)(116,"b"),e.EFF(117,"[clrAddLabel]"),e.k0s(),e.j41(118,"div",11),e.EFF(119,"Type: string"),e.k0s(),e.j41(120,"div",11),e.EFF(121,"Default: ADD OPTION"),e.k0s()(),e.j41(122,"td",10),e.EFF(123,"string"),e.k0s(),e.j41(124,"td",12),e.EFF(125,"ADD OPTION"),e.k0s(),e.j41(126,"td",9),e.EFF(127,"Label for the add button"),e.k0s()(),e.j41(128,"tr")(129,"td",9)(130,"b"),e.EFF(131,"[clrMandatory]"),e.k0s(),e.j41(132,"div",11),e.EFF(133,"Type: boolean"),e.k0s(),e.j41(134,"div",11),e.EFF(135,"Default: false"),e.k0s()(),e.j41(136,"td",10),e.EFF(137,"boolean"),e.k0s(),e.j41(138,"td",12),e.EFF(139,"false"),e.k0s(),e.j41(140,"td",9),e.EFF(141," Decides whether at least one option should be selected. If mandatory, the quick-list will always display at least one field. "),e.k0s()(),e.j41(142,"tr")(143,"td",9)(144,"b"),e.EFF(145,"[clrValues]"),e.k0s(),e.j41(146,"div",11),e.EFF(147,"Type: List of ClrQuickListValue"),e.k0s(),e.j41(148,"div",11),e.EFF(149,"Default: []"),e.k0s()(),e.j41(150,"td",10),e.EFF(151,"List of ClrQuickListValue"),e.k0s(),e.j41(152,"td",12),e.EFF(153,"[]"),e.k0s(),e.j41(154,"td",9),e.EFF(155," OPTIONAL! The value of the preselected options. Form control binding should be preferred! "),e.k0s()(),e.j41(156,"tr")(157,"td",9)(158,"b"),e.EFF(159,"(clrEmptyOptionAdded)"),e.k0s(),e.j41(160,"div",11),e.EFF(161,"Type: void"),e.k0s(),e.nrm(162,"div",11),e.k0s(),e.j41(163,"td",10),e.EFF(164,"void"),e.k0s(),e.nrm(165,"td",12),e.j41(166,"td",9),e.EFF(167,"Event which triggers on the add button clicked"),e.k0s()(),e.j41(168,"tr")(169,"td",9)(170,"b"),e.EFF(171,"(clrValuesChanged)"),e.k0s(),e.j41(172,"div",11),e.EFF(173,"Type: String"),e.k0s(),e.nrm(174,"div",11),e.k0s(),e.j41(175,"td",10),e.EFF(176,"List of ClrQuickListValue"),e.k0s(),e.nrm(177,"td",12),e.j41(178,"td",9),e.EFF(179," OPTIONAL! Event which returns the user's selected options whenever the list changes. Form control binding should be preferred! "),e.k0s()(),e.j41(180,"tr")(181,"td",9)(182,"b"),e.EFF(183,"[compactMode]"),e.k0s(),e.j41(184,"div",11),e.EFF(185,"Type: boolean"),e.k0s(),e.j41(186,"div",11),e.EFF(187,"Default: false"),e.k0s()(),e.j41(188,"td",10),e.EFF(189,"boolean"),e.k0s(),e.j41(190,"td",12),e.EFF(191,"false"),e.k0s(),e.j41(192,"td",9),e.EFF(193,"Decides whether the quick list should be displayed in compact mode."),e.k0s()()()()(),e.j41(194,"div",13)(195,"h3",14),e.EFF(196,"Code & Examples"),e.k0s(),e.j41(197,"h4"),e.EFF(198,"Behavior"),e.k0s(),e.j41(199,"p"),e.EFF(200,"The Quick List can be used in optional or mandatory usecases."),e.k0s(),e.j41(201,"form",15)(202,"clr-quick-list",16)(203,"label",17),e.EFF(204,"Mandatory use case"),e.k0s()()(),e.j41(205,"form",15)(206,"clr-quick-list",18)(207,"label",19),e.EFF(208,"Optional use case"),e.k0s()()(),e.j41(209,"h4"),e.EFF(210,"Compact layout"),e.k0s(),e.j41(211,"p"),e.EFF(212,"The Quick List is also available in compact layout."),e.k0s(),e.j41(213,"form",15)(214,"clr-quick-list",20)(215,"label",17),e.EFF(216,"Compact"),e.k0s()()(),e.j41(217,"h4"),e.EFF(218,"Code snippet"),e.k0s(),e.nrm(219,"clr-code-snippet",21)(220,"clr-code-snippet",22),e.k0s(),e.j41(221,"h2"),e.EFF(222,"Generic Quick List"),e.k0s(),e.j41(223,"h5",4),e.EFF(224," The generic quick list provides the possibility to input the same data structure multiple times. "),e.k0s(),e.j41(225,"div",5)(226,"h3",6),e.EFF(227,"Usage"),e.k0s(),e.j41(228,"p"),e.EFF(229," This component provides a generic way to input a list of data. The components in a row are fully customizable by the user of the component. If you use standard clarity components all the features are fully enabled (validation, form support, ...). "),e.k0s(),e.j41(230,"p"),e.EFF(231," To use the component you must use a type which inherits from the predefined type "),e.j41(232,"code",7),e.EFF(233,"ClrGenericQuickListItem"),e.k0s(),e.EFF(234," for the values array. This type currently only requires an id, which will be filled with a random number on add. "),e.k0s(),e.j41(235,"p"),e.EFF(236,"For a header row add a element with class "),e.j41(237,"code",7),e.EFF(238,"header-container"),e.k0s(),e.EFF(239,"."),e.k0s(),e.j41(240,"p"),e.EFF(241," To specify the row layout add a "),e.j41(242,"code",7),e.EFF(243,"ng-template"),e.k0s(),e.EFF(244,", which will be rendered for every entry in your values array. To pass row data into the template use the "),e.j41(245,"code",7),e.EFF(246,"let"),e.k0s(),e.EFF(247," syntax. e.g. "),e.j41(248,"code",7),e.EFF(249,"let-item"),e.k0s(),e.EFF(250,". "),e.k0s(),e.j41(251,"h3"),e.EFF(252,"Summary of Options"),e.k0s(),e.j41(253,"table",8)(254,"thead")(255,"tr")(256,"th",9),e.EFF(257,"Input/Output"),e.k0s(),e.j41(258,"th",10),e.EFF(259,"Values"),e.k0s(),e.j41(260,"th",12),e.EFF(261,"Default"),e.k0s(),e.j41(262,"th",9),e.EFF(263,"Effect"),e.k0s()()(),e.j41(264,"tbody")(265,"tr")(266,"td",9)(267,"b"),e.EFF(268,"[clrAllItems]"),e.k0s(),e.j41(269,"div",11),e.EFF(270,"Type: Array of T extends ClrGenericQuickListItem"),e.k0s(),e.j41(271,"div",11),e.EFF(272,"Default: []"),e.k0s()(),e.j41(273,"td",10),e.EFF(274,"Array of T extends ClrGenericQuickListItem"),e.k0s(),e.j41(275,"td",12),e.EFF(276,"[]"),e.k0s(),e.j41(277,"td",9),e.EFF(278,"All Items which will be shown in the generic quick list"),e.k0s()(),e.j41(279,"tr")(280,"td",9)(281,"b"),e.EFF(282,"[clrAddLabel]"),e.k0s(),e.j41(283,"div",11),e.EFF(284,"Type: string"),e.k0s(),e.j41(285,"div",11),e.EFF(286,"Default: ADD (Translate me)"),e.k0s()(),e.j41(287,"td",10),e.EFF(288,"string"),e.k0s(),e.j41(289,"td",12),e.EFF(290,"ADD (Translate me)"),e.k0s(),e.j41(291,"td",9),e.EFF(292,"Label for the 'add' button"),e.k0s()(),e.j41(293,"tr")(294,"td",9)(295,"b"),e.EFF(296,"[clrAddPossible]"),e.k0s(),e.j41(297,"div",11),e.EFF(298,"Type: boolean"),e.k0s(),e.j41(299,"div",11),e.EFF(300,"Default: true"),e.k0s()(),e.j41(301,"td",10),e.EFF(302,"boolean"),e.k0s(),e.j41(303,"td",12),e.EFF(304,"true"),e.k0s(),e.j41(305,"td",9),e.EFF(306,"Whether the 'add' button is enabled or disabled"),e.k0s()(),e.j41(307,"tr")(308,"td",9)(309,"b"),e.EFF(310,"[clrBlankItem]"),e.k0s(),e.j41(311,"div",11),e.EFF(312,"Type: T extends ClrGenericQuickListItem"),e.k0s(),e.j41(313,"div",11),e.EFF(314,"Default: {}"),e.k0s()(),e.j41(315,"td",10),e.EFF(316,"T extends ClrGenericQuickListItem"),e.k0s(),e.j41(317,"td",12),e.EFF(318,"{}"),e.k0s(),e.j41(319,"td",9),e.EFF(320,"The item which will be added when clicking the 'add' button"),e.k0s()(),e.j41(321,"tr")(322,"td",9)(323,"b"),e.EFF(324,"[clrControlClasses]"),e.k0s(),e.j41(325,"div",11),e.EFF(326,"Type: string"),e.k0s(),e.j41(327,"div",11),e.EFF(328,'Default: ""'),e.k0s()(),e.j41(329,"td",10),e.EFF(330,"string"),e.k0s(),e.j41(331,"td",12),e.EFF(332,'""'),e.k0s(),e.j41(333,"td",9),e.EFF(334,"CSS classes used for the controls"),e.k0s()(),e.j41(335,"tr")(336,"td",9)(337,"b"),e.EFF(338,"[clrMandatory]"),e.k0s(),e.j41(339,"div",11),e.EFF(340,"Type: boolean"),e.k0s(),e.j41(341,"div",11),e.EFF(342,"Default: false"),e.k0s()(),e.j41(343,"td",10),e.EFF(344,"boolean"),e.k0s(),e.j41(345,"td",12),e.EFF(346,"false"),e.k0s(),e.j41(347,"td",9),e.EFF(348," Decides whether at least one quick-list row needs to be present. If true, the generic quick-list will always display at least one row "),e.k0s()(),e.j41(349,"tr")(350,"td",9)(351,"b"),e.EFF(352,"(clrAdded)"),e.k0s(),e.j41(353,"div",11),e.EFF(354,"Type: T extends ClrGenericQuickListItem"),e.k0s(),e.nrm(355,"div",11),e.k0s(),e.j41(356,"td",10),e.EFF(357,"T extends ClrGenericQuickListItem"),e.k0s(),e.nrm(358,"td",12),e.j41(359,"td",9),e.EFF(360,"Event which returns the newly added item"),e.k0s()(),e.j41(361,"tr")(362,"td",9)(363,"b"),e.EFF(364,"(clrRemoved)"),e.k0s(),e.j41(365,"div",11),e.EFF(366,"Type: T extends ClrGenericQuickListItem"),e.k0s(),e.nrm(367,"div",11),e.k0s(),e.j41(368,"td",10),e.EFF(369,"T extends ClrGenericQuickListItem"),e.k0s(),e.nrm(370,"td",12),e.j41(371,"td",9),e.EFF(372,"Event which returns the removed item"),e.k0s()(),e.j41(373,"tr")(374,"td",9)(375,"b"),e.EFF(376,"[compactMode]"),e.k0s(),e.j41(377,"div",11),e.EFF(378,"Type: boolean"),e.k0s(),e.j41(379,"div",11),e.EFF(380,"Default: false"),e.k0s()(),e.j41(381,"td",10),e.EFF(382,"boolean"),e.k0s(),e.j41(383,"td",12),e.EFF(384,"false"),e.k0s(),e.j41(385,"td",9),e.EFF(386,"Decides whether the quick list should be displayed in compact mode."),e.k0s()()()()(),e.j41(387,"div",13)(388,"h3",14),e.EFF(389,"Code & Examples"),e.k0s(),e.j41(390,"h4"),e.EFF(391,"Mandatory use-case"),e.k0s(),e.j41(392,"form",15,0)(394,"clr-generic-quick-list",23)(395,"label",24),e.EFF(396,"Generic Quick List"),e.k0s(),e.j41(397,"div",25)(398,"div",26),e.EFF(399,"Salutation"),e.k0s(),e.j41(400,"div",26),e.EFF(401,"Name"),e.k0s()(),e.DNE(402,g,14,8,"ng-template"),e.k0s()(),e.j41(403,"h4"),e.EFF(404,"Compact mode mandatory use-case"),e.k0s(),e.j41(405,"form",15,1)(407,"clr-generic-quick-list",27)(408,"label",24),e.EFF(409,"Generic Quick List"),e.k0s(),e.j41(410,"div",25)(411,"div",26),e.EFF(412,"Salutation"),e.k0s(),e.j41(413,"div",26),e.EFF(414,"Name"),e.k0s()(),e.DNE(415,L,14,8,"ng-template"),e.k0s()(),e.j41(416,"h4"),e.EFF(417,"Compact mode optional use-case"),e.k0s(),e.j41(418,"form",15,2)(420,"clr-generic-quick-list",28)(421,"label",29),e.EFF(422,"Generic Quick List"),e.k0s(),e.j41(423,"div",25)(424,"div"),e.EFF(425,"Salutation"),e.k0s(),e.j41(426,"div"),e.EFF(427,"Name"),e.k0s()(),e.DNE(428,T,14,8,"ng-template"),e.k0s()(),e.j41(429,"h4"),e.EFF(430,"Code snippet"),e.k0s(),e.nrm(431,"clr-code-snippet",21)(432,"clr-code-snippet",22),e.k0s()()()),2&o){const s=e.sdS(393),O=e.sdS(406),w=e.sdS(419);e.Y8G("title",t.title),e.R7$(202),e.Y8G("clrAddLabel",t.getAddLabel())("clrAllValues",t.possibleOptions)("clrBlankOption",t.BLANK_OPTION)("clrMandatory",!0)("clrValues",t.selectedOptionsMandatory),e.R7$(4),e.Y8G("clrAddLabel",t.getAddLabel())("clrAllValues",t.possibleOptions)("clrBlankOption",t.BLANK_OPTION)("clrValues",t.selectedOptionsNotMandatory),e.R7$(8),e.Y8G("clrAddLabel",t.getAddLabel())("clrAllValues",t.possibleOptions)("clrBlankOption",t.BLANK_OPTION)("clrValues",t.selectedOptionsCompactMandatory)("compactMode",!0)("clrMandatory",!0),e.R7$(5),e.Y8G("clrCode",t.htmlExample1),e.R7$(),e.Y8G("clrCode",t.htmlExample2),e.R7$(174),e.Y8G("clrAddLabel","ADD")("clrAddPossible",s.valid)("clrAllItems",t.allItemsGeneric)("clrMandatory","true"),e.R7$(13),e.Y8G("clrAddLabel","ADD")("clrAddPossible",O.valid)("clrAllItems",t.allItemsGenericCMMandatory)("clrMandatory","true")("compactMode",!0),e.R7$(13),e.Y8G("clrAddLabel","ADD")("clrAddPossible",w.valid)("clrAllItems",t.allItemsGenericCM)("compactMode",!0),e.R7$(11),e.Y8G("clrCode",t.htmlExampleGeneric),e.R7$(),e.Y8G("clrCode",t.angularExampleGeneric)}},dependencies:[a.qT,a.xH,a.y7,a.me,a.wz,a.BC,a.cb,a.YS,a.vS,a.cV,n.aZZ,n.Hpg,n.t3$,n.mDd,n.icl,n.Xu5,n.Yf6,n.hTQ,j.z,h.u,d.n0m,d.MPs,d.NQI,d.b2Q],encapsulation:2})}return r})(),Q=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=e.$C({type:r});static \u0275inj=e.G2t({imports:[u.MD,a.YN,n.PuD,p.u,m.g,k.iI.forChild([{path:"",component:G}]),d.P8i]})}return r})()}}]);