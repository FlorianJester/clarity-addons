(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2IxG":function(e,o,l){"use strict";l.r(o),l.d(o,"ComboboxDemoModule",(function(){return R}));var r=l("ofXK"),t=l("tyNb"),n=l("8MG2"),c=l("N+3j"),i=l("6Y1o"),b=l("fXoL"),a=l("0G9f"),d=l("3Pt+"),s=l("vAyd");let u=(()=>{class e extends c.a{constructor(){super("combobox"),this.userNotAllowed='\n<clr-combobox class="clr-col-12 clr-row" clrControlClasses="clr-col-12 clr-col-md-3" (clrSelectedOption)="selectedOption = $event" (clrEnteredValue)="enteredValue = $event" [clrAllowUserEntry]="false">\n    <label class="clr-col-12 clr-col-md-2">Force selection</label>\n    <clr-options>\n        <clr-option [clrValue]="\'Option 1\'">Option 1</clr-option>\n        <clr-option [clrValue]="\'Option 2\'">Option 2</clr-option>\n        <clr-option [clrValue]="\'Option 3\'">Option 3</clr-option>\n        <div class="clr-no-results">No search results found</div>\n    </clr-options>\n    <clr-control-error>Select a value</clr-control-error>\n</clr-combobox>\n',this.userAllowed='\n<clr-combobox class="clr-col-12 clr-row" clrControlClasses="clr-col-12 clr-col-md-3" (clrSelectedOption)="selectedOptionUser = $event" (clrEnteredValue)="enteredValueUser = $event" [clrAllowUserEntry]="true">\n    <label class="clr-col-12 clr-col-md-2">Allow user entry</label>\n    <clr-options>\n        <clr-option [clrValue]="\'Option 1\'">Option 1</clr-option>\n        <clr-option [clrValue]="\'Option 2\'">Option 2</clr-option>\n        <clr-option [clrValue]="\'Option 3\'">Option 3</clr-option>\n        <div class="clr-no-results">No search results found</div>\n    </clr-options>\n</clr-combobox>\n',this.preselected='\n<clr-combobox class="clr-col-12 clr-row" clrControlClasses="clr-col-12 clr-col-md-3" (clrSelectedOption)="selectedOptionPre = $event" [clrAllowUserEntry]="false" [clrPreselectedValue]="\'Option 3\'">\n    <label class="clr-col-12 clr-col-md-2">Preselected Option</label>\n    <clr-options>\n        <clr-option [clrValue]="\'<na> Option 1\'">&lt;na&gt; Option 1</clr-option>\n        <clr-option [clrValue]="\'Option 2 (additional info)\'">Option 2 (additional info)</clr-option>\n        <clr-option [clrValue]="\'Option 3\'">Option 3</clr-option>\n        <div class="clr-no-results">No search results found</div>\n    </clr-options>\n    <clr-control-error>Select a value</clr-control-error>\n</clr-combobox>\n',this.mobileBehaviour='\n<clr-combobox class="clr-col-12 clr-row" clrControlClasses="clr-col-12 clr-col-md-3" [clrAllowUserEntry]="userEntryAllowedRadioBox" [clrMobileBehaviourMode]="mobileBehaviourModeRadioBox" (clrEnteredValue)="enteredValueMobile = $event" (clrSelectedOption)="selectedOptionMobile = $event" [clrPreselectedValue]="\'Option 3\'">\n    <label class="clr-col-12 clr-col-md-2">Preselected Option</label>\n    <clr-options>\n        <clr-option [clrValue]="\'<na> Option 1\'">&lt;na&gt; Option 1</clr-option>\n        <clr-option [clrValue]="\'Option 2 (additional info)\'">Option 2 (additional info)</clr-option>\n        <clr-option [clrValue]="\'Option 3\'">Option 3</clr-option>\n        <div class="clr-no-results">No search results found</div>\n    </clr-options>\n    <clr-control-error>Select a value</clr-control-error>\n</clr-combobox>\n',this.mobileBehaviourMode=i.P,this.mobileBehaviourModeRadioBox=i.P.DEFAULT,this.userEntryAllowedRadioBox=!1}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=b.Gb({type:e,selectors:[["ng-component"]],hostVars:4,hostBindings:function(e,o){2&e&&b.Db("content-area",!0)("dox-content-panel",!0)},features:[b.xb],decls:237,vars:45,consts:[[3,"ng","ui","title","newLayout","deprecated"],["role","alert",1,"alert","alert-warning"],[1,"alert-items"],[1,"alert-item","static"],[1,"alert-icon-wrapper"],["shape","exclamation-triangle",1,"alert-icon"],[1,"alert-text"],["href","https://clarity.design/documentation/datalist"],[1,"component-summary"],["id","design-guidelines"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","code-examples"],["id","examples"],["clrForm",""],["clrControlClasses","clr-col-12 clr-col-md-3",1,"clr-col-12","clr-row",3,"clrAllowUserEntry","clrSelectedOption","clrEnteredValue"],[1,"clr-col-12","clr-col-md-2"],[3,"clrValue"],[1,"clr-no-results"],[3,"clrCode"],["clrControlClasses","clr-col-12 clr-col-md-3",1,"clr-col-12","clr-row",3,"clrAllowUserEntry","clrPreselectedValue","clrSelectedOption"],[1,"clr-row"],[1,"clr-col-md-6","clr-col-12"],["clrRadio","","type","radio","name","status1",3,"ngModel","value","ngModelChange"],["clrRadio","","type","radio","name","status2",3,"ngModel","value","ngModelChange"],["clrRadio","","type","radio","name","status3",3,"ngModel","value","ngModelChange"],["clrRadio","","type","radio","name","status4",3,"ngModel","value","ngModelChange"],["clrRadio","","type","radio","name","status5",3,"ngModel","value","ngModelChange"],["clrControlClasses","clr-col-12 clr-col-md-3",1,"clr-col-12","clr-row",3,"clrAllowUserEntry","clrMobileBehaviourMode","clrPreselectedValue","clrEnteredValue","clrSelectedOption"]],template:function(e,o){1&e&&(b.Sb(0,"clr-doc-wrapper",0),b.Sb(1,"article"),b.Sb(2,"div",1),b.Sb(3,"div",2),b.Sb(4,"div",3),b.Sb(5,"div",4),b.Nb(6,"clr-icon",5),b.Rb(),b.Sb(7,"span",6),b.Ec(8," This Component is deprecated. Use the "),b.Sb(9,"a",7),b.Ec(10,"Clarity Data List"),b.Rb(),b.Ec(11," instead. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(12,"h5",8),b.Ec(13,"The Combobox is used to select between multiple predefined options or entering an own value (optional). Additionally users can search in the predefined options. "),b.Rb(),b.Sb(14,"div",9),b.Sb(15,"h3"),b.Ec(16,"Usage"),b.Rb(),b.Sb(17,"p"),b.Ec(18," Use the Combobox whenever you want to allow the user to search in a set of predefined options and select one. The entered text will be searched anywhere in the options (start, middle, end) and highlighted. The user may also navigate through the options with the keyboard (arrow keys to navigate and enter to select). "),b.Rb(),b.Sb(19,"p"),b.Ec(20," Optionally users may also enter their own values, which aren't available in the predefined options. "),b.Rb(),b.Sb(21,"p"),b.Ec(22," On mobile (Breakpoint: 576 px), there are two possibilities of use: The normal input as it used on desktop, and a native select element which obviously does not allow user entries. By default, the input element is displayed when user entries are allowed, whereas the select element is displayed when user entries are not allowed. This behaviour can be overridden by specifying the [clrMobileBehaviourMode] value. "),b.Rb(),b.Sb(23,"h3"),b.Ec(24,"Summary of Options"),b.Rb(),b.Sb(25,"table",10),b.Sb(26,"thead"),b.Sb(27,"tr"),b.Sb(28,"th",11),b.Ec(29,"Input/Output"),b.Rb(),b.Sb(30,"th",12),b.Ec(31,"Values"),b.Rb(),b.Sb(32,"th",13),b.Ec(33,"Default"),b.Rb(),b.Sb(34,"th",11),b.Ec(35,"Effect"),b.Rb(),b.Rb(),b.Rb(),b.Sb(36,"tbody"),b.Sb(37,"tr"),b.Sb(38,"td",11),b.Sb(39,"b"),b.Ec(40,"[clrControlClasses]"),b.Rb(),b.Sb(41,"div",14),b.Ec(42,"Type: String"),b.Rb(),b.Sb(43,"div",14),b.Ec(44,"Default: undefined"),b.Rb(),b.Rb(),b.Sb(45,"td",12),b.Ec(46,"String"),b.Rb(),b.Sb(47,"td",13),b.Ec(48,"undefined"),b.Rb(),b.Sb(49,"td",11),b.Ec(50,"CSS classes applied to the control"),b.Rb(),b.Rb(),b.Sb(51,"tr"),b.Sb(52,"td",11),b.Sb(53,"b"),b.Ec(54,"[clrAllowUserEntry]"),b.Rb(),b.Sb(55,"div",14),b.Ec(56,"Type: boolean"),b.Rb(),b.Sb(57,"div",14),b.Ec(58,"Default: false"),b.Rb(),b.Rb(),b.Sb(59,"td",12),b.Ec(60,"true, false"),b.Rb(),b.Sb(61,"td",13),b.Ec(62,"false"),b.Rb(),b.Sb(63,"td",11),b.Ec(64,"Defines whether user defined values (not predefined) are allowed"),b.Rb(),b.Rb(),b.Sb(65,"tr"),b.Sb(66,"td",11),b.Sb(67,"b"),b.Ec(68,"[clrPreselectedValue]"),b.Rb(),b.Sb(69,"div",14),b.Ec(70,"Type: T"),b.Rb(),b.Sb(71,"div",14),b.Ec(72,"Default: undefined"),b.Rb(),b.Rb(),b.Sb(73,"td",12),b.Ec(74,"value of ClrOption"),b.Rb(),b.Sb(75,"td",13),b.Ec(76,"undefined"),b.Rb(),b.Sb(77,"td",11),b.Ec(78,"The value of the preselected option"),b.Rb(),b.Rb(),b.Sb(79,"tr"),b.Sb(80,"td",11),b.Sb(81,"b"),b.Ec(82,"[clrMobileBehaviourMode]"),b.Rb(),b.Sb(83,"div",14),b.Ec(84,"Type: MobileBehaviourMode"),b.Rb(),b.Sb(85,"div",14),b.Ec(86,"Default: MobileBehaviourMode.DEFAULT"),b.Rb(),b.Rb(),b.Sb(87,"td",12),b.Ec(88,"MobileBehaviourMode.DEFAULT, MobileBehaviourMode.FORCE_SELECT, MobileBehaviourMode.FORCE_AUTOCOMPLETE "),b.Rb(),b.Sb(89,"td",13),b.Ec(90,"MobileBehaviourMode.DEFAULT"),b.Rb(),b.Sb(91,"td",11),b.Ec(92,"Defines if input element or select element should be forced on mobile (Breakpoint: 576px) "),b.Rb(),b.Rb(),b.Sb(93,"tr"),b.Sb(94,"td",11),b.Sb(95,"b"),b.Ec(96,"(clrSelectedOption)"),b.Rb(),b.Sb(97,"div",14),b.Ec(98,"Type: ClrOption"),b.Rb(),b.Sb(99,"div",14),b.Ec(100,"Default: undefined"),b.Rb(),b.Rb(),b.Sb(101,"td",12),b.Ec(102,"ClrOption"),b.Rb(),b.Sb(103,"td",13),b.Ec(104,"undefined"),b.Rb(),b.Sb(105,"td",11),b.Ec(106,"Event which returns the selected predefined option"),b.Rb(),b.Rb(),b.Sb(107,"tr"),b.Sb(108,"td",11),b.Sb(109,"b"),b.Ec(110,"(clrEnteredValue)"),b.Rb(),b.Sb(111,"div",14),b.Ec(112,"Type: String"),b.Rb(),b.Sb(113,"div",14),b.Ec(114,"Default: undefined"),b.Rb(),b.Rb(),b.Sb(115,"td",12),b.Ec(116,"Javascript String"),b.Rb(),b.Sb(117,"td",13),b.Ec(118,"undefined"),b.Rb(),b.Sb(119,"td",11),b.Ec(120,"Event which returns the user entered value (only emit when user entries are allowed) "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(121,"div",15),b.Sb(122,"h3",16),b.Ec(123,"Code & Examples"),b.Rb(),b.Sb(124,"h4"),b.Ec(125,"Combobox with no user entries allowed"),b.Rb(),b.Sb(126,"form",17),b.Sb(127,"clr-combobox",18),b.ac("clrSelectedOption",(function(e){return o.selectedOption=e}))("clrEnteredValue",(function(e){return o.enteredValue=e})),b.Sb(128,"label",19),b.Ec(129,"Force selection"),b.Rb(),b.Sb(130,"clr-options"),b.Sb(131,"clr-option",20),b.Ec(132,"Option 1"),b.Rb(),b.Sb(133,"clr-option",20),b.Ec(134,"Option 2"),b.Rb(),b.Sb(135,"clr-option",20),b.Ec(136,"Option 3"),b.Rb(),b.Sb(137,"div",21),b.Ec(138,"No search results found"),b.Rb(),b.Rb(),b.Sb(139,"clr-control-error"),b.Ec(140,"Select a value"),b.Rb(),b.Rb(),b.Nb(141,"br"),b.Nb(142,"br"),b.Ec(143),b.Nb(144,"br"),b.Ec(145),b.Nb(146,"clr-code-snippet",22),b.Rb(),b.Sb(147,"h4"),b.Ec(148,"Combobox with user entries allowed"),b.Rb(),b.Sb(149,"form",17),b.Sb(150,"clr-combobox",18),b.ac("clrSelectedOption",(function(e){return o.selectedOptionUser=e}))("clrEnteredValue",(function(e){return o.enteredValueUser=e})),b.Sb(151,"label",19),b.Ec(152,"Allow user entry"),b.Rb(),b.Sb(153,"clr-options"),b.Sb(154,"clr-option",20),b.Ec(155,"Option 1"),b.Rb(),b.Sb(156,"clr-option",20),b.Ec(157,"Option 2"),b.Rb(),b.Sb(158,"clr-option",20),b.Ec(159,"Option 3"),b.Rb(),b.Sb(160,"div",21),b.Ec(161,"No search results found"),b.Rb(),b.Rb(),b.Rb(),b.Nb(162,"br"),b.Nb(163,"br"),b.Ec(164),b.Nb(165,"br"),b.Ec(166),b.Nb(167,"clr-code-snippet",22),b.Rb(),b.Sb(168,"h4"),b.Ec(169,"Combobox with preselected option"),b.Rb(),b.Sb(170,"form",17),b.Sb(171,"clr-combobox",23),b.ac("clrSelectedOption",(function(e){return o.selectedOptionPre=e})),b.Sb(172,"label",19),b.Ec(173,"Preselected Option"),b.Rb(),b.Sb(174,"clr-options"),b.Sb(175,"clr-option",20),b.Ec(176,"<na> Option 1"),b.Rb(),b.Sb(177,"clr-option",20),b.Ec(178,"Option 2 (additional info)"),b.Rb(),b.Sb(179,"clr-option",20),b.Ec(180,"Option 3"),b.Rb(),b.Sb(181,"div",21),b.Ec(182,"No search results found"),b.Rb(),b.Rb(),b.Sb(183,"clr-control-error"),b.Ec(184,"Select a value"),b.Rb(),b.Rb(),b.Nb(185,"br"),b.Nb(186,"br"),b.Ec(187),b.Nb(188,"clr-code-snippet",22),b.Rb(),b.Sb(189,"h4"),b.Ec(190,"Test the mobile behaviour (Breakpoint: 576px)"),b.Rb(),b.Sb(191,"form",17),b.Sb(192,"div",24),b.Sb(193,"div",25),b.Sb(194,"clr-radio-container"),b.Sb(195,"clr-radio-wrapper"),b.Sb(196,"input",26),b.ac("ngModelChange",(function(e){return o.userEntryAllowedRadioBox=e})),b.Rb(),b.Sb(197,"label"),b.Ec(198,"Allow user entries"),b.Rb(),b.Rb(),b.Sb(199,"clr-radio-wrapper"),b.Sb(200,"input",27),b.ac("ngModelChange",(function(e){return o.userEntryAllowedRadioBox=e})),b.Rb(),b.Sb(201,"label"),b.Ec(202,"Do not allow user entries"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(203,"div",25),b.Sb(204,"clr-radio-container"),b.Sb(205,"clr-radio-wrapper"),b.Sb(206,"input",28),b.ac("ngModelChange",(function(e){return o.mobileBehaviourModeRadioBox=e})),b.Rb(),b.Sb(207,"label"),b.Ec(208,"mobileBehaviourMode: DEFAULT"),b.Rb(),b.Rb(),b.Sb(209,"clr-radio-wrapper"),b.Sb(210,"input",29),b.ac("ngModelChange",(function(e){return o.mobileBehaviourModeRadioBox=e})),b.Rb(),b.Sb(211,"label"),b.Ec(212,"mobileBehaviourMode: FORCE_SELECT"),b.Rb(),b.Rb(),b.Sb(213,"clr-radio-wrapper"),b.Sb(214,"input",30),b.ac("ngModelChange",(function(e){return o.mobileBehaviourModeRadioBox=e})),b.Rb(),b.Sb(215,"label"),b.Ec(216,"mobileBehaviourMode: FORCE_AUTOCOMPLETE"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(217,"clr-combobox",31),b.ac("clrEnteredValue",(function(e){return o.enteredValueMobile=e}))("clrSelectedOption",(function(e){return o.selectedOptionMobile=e})),b.Sb(218,"label",19),b.Ec(219,"Preselected Option"),b.Rb(),b.Sb(220,"clr-options"),b.Sb(221,"clr-option",20),b.Ec(222,"<na> Option 1"),b.Rb(),b.Sb(223,"clr-option",20),b.Ec(224,"Option 2 (additional info)"),b.Rb(),b.Sb(225,"clr-option",20),b.Ec(226,"Option 3"),b.Rb(),b.Sb(227,"div",21),b.Ec(228,"No search results found"),b.Rb(),b.Rb(),b.Sb(229,"clr-control-error"),b.Ec(230,"Select a value"),b.Rb(),b.Rb(),b.Nb(231,"br"),b.Nb(232,"br"),b.Ec(233),b.Nb(234,"br"),b.Ec(235),b.Nb(236,"clr-code-snippet",22),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&e&&(b.kc("ng",o.ng)("ui",o.ui)("title",o.title)("newLayout",o.newLayout)("deprecated",!0),b.Ab(127),b.kc("clrAllowUserEntry",!1),b.Ab(4),b.kc("clrValue","Option 1"),b.Ab(2),b.kc("clrValue","Option 2"),b.Ab(2),b.kc("clrValue","Option 3"),b.Ab(8),b.Gc("Selected option: ",null==o.selectedOption?null:o.selectedOption.value," "),b.Ab(2),b.Gc("Manually entered value (will not be emitted): ",o.enteredValue," "),b.Ab(1),b.kc("clrCode",o.userNotAllowed),b.Ab(4),b.kc("clrAllowUserEntry",!0),b.Ab(4),b.kc("clrValue","Option 1"),b.Ab(2),b.kc("clrValue","Option 2"),b.Ab(2),b.kc("clrValue","Option 3"),b.Ab(6),b.Gc("Selected option: ",null==o.selectedOptionUser?null:o.selectedOptionUser.value," "),b.Ab(2),b.Gc("Manually entered value: ",o.enteredValueUser," "),b.Ab(1),b.kc("clrCode",o.userAllowed),b.Ab(4),b.kc("clrAllowUserEntry",!1)("clrPreselectedValue","Option 3"),b.Ab(4),b.kc("clrValue","<na> Option 1"),b.Ab(2),b.kc("clrValue","Option 2 (additional info)"),b.Ab(2),b.kc("clrValue","Option 3"),b.Ab(8),b.Gc("Selected option: ",null==o.selectedOptionPre?null:o.selectedOptionPre.value," "),b.Ab(1),b.kc("clrCode",o.preselected),b.Ab(8),b.kc("ngModel",o.userEntryAllowedRadioBox)("value",!0),b.Ab(4),b.kc("ngModel",o.userEntryAllowedRadioBox)("value",!1),b.Ab(6),b.kc("ngModel",o.mobileBehaviourModeRadioBox)("value",o.mobileBehaviourMode.DEFAULT),b.Ab(4),b.kc("ngModel",o.mobileBehaviourModeRadioBox)("value",o.mobileBehaviourMode.FORCE_SELECT),b.Ab(4),b.kc("ngModel",o.mobileBehaviourModeRadioBox)("value",o.mobileBehaviourMode.FORCE_AUTOCOMPLETE),b.Ab(3),b.kc("clrAllowUserEntry",o.userEntryAllowedRadioBox)("clrMobileBehaviourMode",o.mobileBehaviourModeRadioBox)("clrPreselectedValue","Option 3"),b.Ab(4),b.kc("clrValue","<na> Option 1"),b.Ab(2),b.kc("clrValue","Option 2 (additional info)"),b.Ab(2),b.kc("clrValue","Option 3"),b.Ab(8),b.Gc("Selected option: ",null==o.selectedOptionMobile?null:o.selectedOptionMobile.value," "),b.Ab(2),b.Gc("Manually entered value: ",o.enteredValueMobile," "),b.Ab(1),b.kc("clrCode",o.mobileBehaviour))},directives:[a.a,n.x,n.c,d.A,d.n,d.o,n.u,i.f,n.D,i.C,i.B,n.i,s.a,n.L,n.M,d.t,d.b,n.K,d.m,d.p],encapsulation:2}),e})();var p=l("JsA7"),S=l("XPsC");let R=(()=>{class e{}return e.\u0275mod=b.Kb({type:e}),e.\u0275inj=b.Jb({factory:function(o){return new(o||e)},imports:[[r.c,n.a,i.a,p.a,S.a,d.h,t.g.forChild([{path:"",component:u}])]]}),e})()}}]);