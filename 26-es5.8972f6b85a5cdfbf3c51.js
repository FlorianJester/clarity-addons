function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var l=0;l<t.length;l++){var c=t[l];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,l){return t&&_defineProperties(e.prototype,t),l&&_defineProperties(e,l),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var l,c=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;l=Reflect.construct(c,arguments,r)}else l=c.apply(this,arguments);return _possibleConstructorReturn(this,l)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{vTEu:function(e,t,l){"use strict";l.r(t),l.d(t,"QuickListDemoModule",(function(){return y}));var c=l("3Pt+"),r=l("ofXK"),n=l("8MG2"),b=l("JsA7"),i=l("tyNb"),o=l("XPsC"),a=l("6Y1o"),s=l("N+3j"),d=l("fXoL"),u=l("0G9f"),p=l("vAyd");function S(e,t){1&e&&(d.Sb(0,"clr-control-error"),d.Ec(1,"Please select a value"),d.Rb())}function R(e,t){1&e&&(d.Sb(0,"clr-control-error"),d.Ec(1,"Please enter a value"),d.Rb())}function h(e,t){if(1&e){var l=d.Tb();d.Sb(0,"clr-select-container"),d.Nb(1,"label",22),d.Sb(2,"select",23),d.ac("ngModelChange",(function(e){return d.wc(l),t.$implicit.salutation=e})),d.Sb(3,"option",24),d.Ec(4,"Mr."),d.Rb(),d.Sb(5,"option",25),d.Ec(6,"Mrs."),d.Rb(),d.Sb(7,"option",26),d.Ec(8,"Ms."),d.Rb(),d.Rb(),d.Cc(9,S,2,0,"clr-control-error",27),d.Rb(),d.Sb(10,"clr-input-container"),d.Nb(11,"label",22),d.Sb(12,"input",28),d.ac("ngModelChange",(function(e){return d.wc(l),t.$implicit.name=e})),d.Rb(),d.Cc(13,R,2,0,"clr-control-error",27),d.Rb()}if(2&e){var c=t.$implicit;d.Ab(1),d.kc("hidden",!0),d.Ab(1),d.kc("name","salutation"+c.id)("ngModel",c.salutation),d.Ab(7),d.kc("clrIfError","required"),d.Ab(2),d.kc("hidden",!0),d.Ab(1),d.kc("ngModel",c.name)("name","last"+c.id),d.Ab(1),d.kc("clrIfError","required")}}var f,E,m=((E=function(e){_inherits(l,e);var t=_createSuper(l);function l(){var e;return _classCallCheck(this,l),(e=t.call(this,"quick-list")).htmlExample1='\n<form clrForm>\n  <clr-quick-list\n      [clrAddLabel]="getAddLabel()"\n      [clrAllValues]="possibleOptions"\n      [clrBlankOption]="BLANK_OPTION"\n      [clrMandatory]="true"\n      [clrValues]="selectedOptionsMandatory"\n      class="clr-form-control clr-row"\n      clrControlClasses="clr-col-lg-3 clr-col-md-4 clr-col-sm-5">\n    <label class="clr-control-label clr-col-md-2 clr-col-sm-3 required">Option list</label>\n  </clr-quick-list>\n</form>\n',e.htmlExample2='\nBLANK_OPTION: ClrQuickListValue<string> = { id: "-BLANK-", label: "- Select -", value: null };\noptions: Array<string> = [\n  "First option",\n  "Second option",\n  "Third Option",\n  "Fourth option",\n  "Fifth option"\n];\npossibleOptions: Array<ClrQuickListValue<string>> = this.options.map(op=>\n  new class implements ClrQuickListValue<string> {\n    id = op.substr(0, 3);\n    label = op;\n    value = op;\n  }());\n',e.htmlExampleGeneric='\n<form clrForm #form="ngForm">\n  <clr-generic-quick-list [clrAddLabel]="\'ADD\'" [clrAddPossible]="form.valid" [clrAllItems]="allItemsGeneric"\n      [clrMandatory]="\'true\'" class="clr-row" clrControlClasses="clr-col-md-6 clr-col-xl-4">\n      <label class="clr-control-label clr-col-md-2 required">Generic Quick List</label>\n      <ng-template let-item>\n          \x3c!-- Custom content below --\x3e\n          <clr-select-container>\n            <label [hidden]="true"></label>\n            <select required clrSelect class="clr-col-12" [name]="\'salutation\' + item.id"\n                    [(ngModel)]="item.salutation">\n                <option value="mr">Mr.</option>\n                <option value="mrs">Mrs.</option>\n                <option value="ms">Ms.</option>\n            </select>\n            <clr-control-error *clrIfError="\'required\'">Please select a value</clr-control-error>\n          </clr-select-container>\n          <clr-input-container>\n              <label [hidden]="true"></label>\n              <input class="clr-col-12" placeholder="Name*" clrInput [(ngModel)]="item.name"\n              required [name]="\'last\' + item.id" />\n              <clr-control-error *clrIfError="\'required\'">Please enter a value</clr-control-error>\n          </clr-input-container>\n          \x3c!-- Custom content above --\x3e\n      </ng-template>\n  </clr-generic-quick-list>\n</form>\n',e.angularExampleGeneric="\ninterface ClrNameQuickListItem extends ClrGenericQuickListItem {\n    salutation: string;\n    name: string;\n};\n\nallItemsGeneric = [<ClrNameQuickListItem>{ id: 1 }];\n",e.BLANK_OPTION={id:"-BLANK-",label:"- Select -",value:null},e.options=["First option","Second option","Third Option","Fourth option","Fifth option"],e.possibleOptions=e.options.map((function(e){return new(function(){return function t(){_classCallCheck(this,t),this.id=e.substr(0,3),this.label=e,this.value=e}}())})),e.selectedOptionsMandatory=[],e.selectedOptionsNotMandatory=[],e.allItemsGeneric=[{id:1}],e}return _createClass(l,[{key:"getAddLabel",value:function(){return"ADD OPTION"}}]),l}(s.a)).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=d.Gb({type:E,selectors:[["app-quick-list"]],hostVars:4,hostBindings:function(e,t){2&e&&d.Db("content-area",!0)("dox-content-panel",!0)},features:[d.xb],decls:340,vars:21,consts:[[3,"newLayout","ng","title","ui"],[1,"component-summary"],["id","design-guidelines"],["id","usage"],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],[1,"clr-hidden-xs-down"],["id","code-examples"],["id","examples"],["clrForm",""],["clrControlClasses","clr-col-lg-3 clr-col-md-4 clr-col-sm-5",1,"clr-form-control","clr-row",3,"clrAddLabel","clrAllValues","clrBlankOption","clrMandatory","clrValues"],[1,"clr-control-label","clr-col-md-2","clr-col-sm-3","required"],["clrControlClasses","clr-col-lg-3 clr-col-md-4 clr-col-sm-5",1,"clr-form-control","clr-row",3,"clrAddLabel","clrAllValues","clrBlankOption","clrValues"],[1,"clr-control-label","clr-col-md-2","clr-col-sm-3"],[3,"clrCode"],["clrLanguage","typescript",3,"clrCode"],["form","ngForm"],["clrControlClasses","clr-col-md-6 clr-col-xl-4",1,"clr-row",3,"clrAddLabel","clrAddPossible","clrAllItems","clrMandatory"],[1,"clr-control-label","clr-col-md-2","required"],[3,"hidden"],["required","","clrSelect","",1,"clr-col-12",3,"name","ngModel","ngModelChange"],["value","mr"],["value","mrs"],["value","ms"],[4,"clrIfError"],["placeholder","Name*","clrInput","","required","",1,"clr-col-12",3,"ngModel","name","ngModelChange"]],template:function(e,t){if(1&e&&(d.Sb(0,"clr-doc-wrapper",0),d.Sb(1,"article"),d.Sb(2,"h5",1),d.Ec(3,"The quick list of Clarity Addons extends the default select component by an Angular Component which allows the developer use a multi selection list."),d.Rb(),d.Sb(4,"div",2),d.Sb(5,"h3",3),d.Ec(6,"Usage"),d.Rb(),d.Sb(7,"p"),d.Ec(8,"Use the Quick List whenever you want to allow the user to select multiple option from a suggestion list. The user is able to select option by scrolling over the list. By clicking the Add button below the list he is able to make additional selection."),d.Rb(),d.Sb(9,"p"),d.Ec(10,"The component uses a predefined type "),d.Sb(11,"code",4),d.Ec(12,"ClrQuickListValue\u227aT\u227b "),d.Rb(),d.Ec(13," that encapsulates the real data (values), the developer should previously warp his list inside ClrQuickListValue. So the component uses generics "),d.Sb(14,"code",4),d.Ec(15,"T"),d.Rb(),d.Ec(16," for the type of the contained values."),d.Rb(),d.Sb(17,"table",5),d.Sb(18,"thead"),d.Sb(19,"tr"),d.Sb(20,"th",6),d.Ec(21,"attribute"),d.Rb(),d.Sb(22,"th",7),d.Ec(23,"Values"),d.Rb(),d.Sb(24,"th",6),d.Ec(25,"Effect"),d.Rb(),d.Rb(),d.Rb(),d.Sb(26,"tbody"),d.Sb(27,"tr"),d.Sb(28,"td",6),d.Sb(29,"b"),d.Ec(30,"label"),d.Rb(),d.Sb(31,"div",8),d.Ec(32,"Type: string"),d.Rb(),d.Rb(),d.Sb(33,"td",7),d.Ec(34,"string"),d.Rb(),d.Sb(35,"td",6),d.Ec(36,"the label that will be displayed for each option"),d.Rb(),d.Rb(),d.Sb(37,"tr"),d.Sb(38,"td",6),d.Sb(39,"b"),d.Ec(40,"value"),d.Rb(),d.Sb(41,"div",8),d.Ec(42,"Type: string"),d.Rb(),d.Rb(),d.Sb(43,"td",7),d.Sb(44,"code",4),d.Ec(45,"T"),d.Rb(),d.Rb(),d.Sb(46,"td",6),d.Ec(47,"the value behind each option"),d.Rb(),d.Rb(),d.Sb(48,"tr"),d.Sb(49,"td",6),d.Sb(50,"b"),d.Ec(51,"id"),d.Rb(),d.Sb(52,"div",8),d.Ec(53,"Type: string"),d.Rb(),d.Rb(),d.Sb(54,"td",7),d.Ec(55,"string"),d.Rb(),d.Sb(56,"td",6),d.Ec(57,"the ids over the list should be unique"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(58,"h3"),d.Ec(59,"Summary of Options"),d.Rb(),d.Sb(60,"table",5),d.Sb(61,"thead"),d.Sb(62,"tr"),d.Sb(63,"th",6),d.Ec(64,"Input/Output"),d.Rb(),d.Sb(65,"th",7),d.Ec(66,"Values"),d.Rb(),d.Sb(67,"th",9),d.Ec(68,"Default"),d.Rb(),d.Sb(69,"th",6),d.Ec(70,"Effect"),d.Rb(),d.Rb(),d.Rb(),d.Sb(71,"tbody"),d.Sb(72,"tr"),d.Sb(73,"td",6),d.Sb(74,"b"),d.Ec(75,"[clrBlankOption]"),d.Rb(),d.Sb(76,"div",8),d.Ec(77,"Type: ClrQuickListValue"),d.Rb(),d.Sb(78,"div",8),d.Ec(79,"Default: default"),d.Rb(),d.Rb(),d.Sb(80,"td",7),d.Ec(81,"ClrQuickListValue"),d.Rb(),d.Sb(82,"td",9),d.Ec(83,"default"),d.Rb(),d.Sb(84,"td",6),d.Ec(85,"The object that should refer to the no-option selected"),d.Rb(),d.Rb(),d.Sb(86,"tr"),d.Sb(87,"td",6),d.Sb(88,"b"),d.Ec(89,"[clrAllValues]"),d.Rb(),d.Sb(90,"div",8),d.Ec(91,"Type: List of ClrQuickListValue"),d.Rb(),d.Sb(92,"div",8),d.Ec(93,"Default: false"),d.Rb(),d.Rb(),d.Sb(94,"td",7),d.Ec(95,"List of ClrQuickListValue"),d.Rb(),d.Sb(96,"td",9),d.Ec(97,"empty"),d.Rb(),d.Sb(98,"td",6),d.Ec(99,"Contains all the options list"),d.Rb(),d.Rb(),d.Sb(100,"tr"),d.Sb(101,"td",6),d.Sb(102,"b"),d.Ec(103,"[clrValues]"),d.Rb(),d.Sb(104,"div",8),d.Ec(105,"Type: List of ClrQuickListValue"),d.Rb(),d.Sb(106,"div",8),d.Ec(107,"Default: undefined"),d.Rb(),d.Rb(),d.Sb(108,"td",7),d.Ec(109,"List of ClrQuickListValue"),d.Rb(),d.Sb(110,"td",9),d.Ec(111,"empty List"),d.Rb(),d.Sb(112,"td",6),d.Ec(113,"The value of the preselected option"),d.Rb(),d.Rb(),d.Sb(114,"tr"),d.Sb(115,"td",6),d.Sb(116,"b"),d.Ec(117,"[clrAddLabel]"),d.Rb(),d.Sb(118,"div",8),d.Ec(119,"Type: string"),d.Rb(),d.Sb(120,"div",8),d.Ec(121,"Default: ADD OPTION"),d.Rb(),d.Rb(),d.Sb(122,"td",7),d.Ec(123,"string"),d.Rb(),d.Sb(124,"td",9),d.Ec(125,"ADD OPTION"),d.Rb(),d.Sb(126,"td",6),d.Ec(127,"Label for the add button"),d.Rb(),d.Rb(),d.Sb(128,"tr"),d.Sb(129,"td",6),d.Sb(130,"b"),d.Ec(131,"[clrMandatory]"),d.Rb(),d.Sb(132,"div",8),d.Ec(133,"Type: boolean"),d.Rb(),d.Sb(134,"div",8),d.Ec(135,"Default: false"),d.Rb(),d.Rb(),d.Sb(136,"td",7),d.Ec(137,"boolean"),d.Rb(),d.Sb(138,"td",9),d.Ec(139,"false"),d.Rb(),d.Sb(140,"td",6),d.Ec(141,"Decides whether at least one option should be selected. If mandatory, the quick-list will always display at least one field. "),d.Rb(),d.Rb(),d.Sb(142,"tr"),d.Sb(143,"td",6),d.Sb(144,"b"),d.Ec(145,"(clrValuesChanged)"),d.Rb(),d.Sb(146,"div",8),d.Ec(147,"Type: String"),d.Rb(),d.Sb(148,"div",8),d.Ec(149,"Default: undefined"),d.Rb(),d.Rb(),d.Sb(150,"td",7),d.Ec(151,"List of ClrQuickListValue"),d.Rb(),d.Sb(152,"td",9),d.Ec(153,"undefined"),d.Rb(),d.Sb(154,"td",6),d.Ec(155,"Event which returns the user's selected options whenever the list changes"),d.Rb(),d.Rb(),d.Sb(156,"tr"),d.Sb(157,"td",6),d.Sb(158,"b"),d.Ec(159,"(clrEmptyOptionAdded)"),d.Rb(),d.Sb(160,"div",8),d.Ec(161,"Type: void"),d.Rb(),d.Sb(162,"div",8),d.Ec(163,"Default: undefined"),d.Rb(),d.Rb(),d.Sb(164,"td",7),d.Ec(165,"void"),d.Rb(),d.Sb(166,"td",9),d.Ec(167,"undefined"),d.Rb(),d.Sb(168,"td",6),d.Ec(169,"Event which triggers on the add button clicked"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(170,"div",10),d.Sb(171,"h3",11),d.Ec(172,"Code & Examples"),d.Rb(),d.Sb(173,"h4"),d.Ec(174,"Mandatory use-case"),d.Rb(),d.Sb(175,"form",12),d.Sb(176,"clr-quick-list",13),d.Sb(177,"label",14),d.Ec(178,"Mandatory list"),d.Rb(),d.Rb(),d.Rb(),d.Sb(179,"h4"),d.Ec(180,"Optional use-case"),d.Rb(),d.Sb(181,"form",12),d.Sb(182,"clr-quick-list",15),d.Sb(183,"label",16),d.Ec(184,"Optional list"),d.Rb(),d.Rb(),d.Rb(),d.Sb(185,"h4"),d.Ec(186,"Code snippet"),d.Rb(),d.Nb(187,"clr-code-snippet",17),d.Nb(188,"clr-code-snippet",18),d.Rb(),d.Sb(189,"h2"),d.Ec(190,"Generic Quick List"),d.Rb(),d.Sb(191,"h5",1),d.Ec(192,"The generic quick list provides the possibility to input the same data structure multiple times."),d.Rb(),d.Sb(193,"div",2),d.Sb(194,"h3",3),d.Ec(195,"Usage"),d.Rb(),d.Sb(196,"p"),d.Ec(197," This component provides a generic way to input a list of data. The components in a row are fully customizable by the user of the component. If you use standard clarity components all the features are fully enabled (validation, form support, ...). "),d.Rb(),d.Sb(198,"p"),d.Ec(199," To use the component you must use a type which inherits from the predefined type "),d.Sb(200,"code",4),d.Ec(201,"ClrGenericQuickListItem"),d.Rb(),d.Ec(202," for the values array. This type currently only requires an id, which will be filled with a random number on add. "),d.Rb(),d.Sb(203,"h3"),d.Ec(204,"Summary of Options"),d.Rb(),d.Sb(205,"table",5),d.Sb(206,"thead"),d.Sb(207,"tr"),d.Sb(208,"th",6),d.Ec(209,"Input/Output"),d.Rb(),d.Sb(210,"th",7),d.Ec(211,"Values"),d.Rb(),d.Sb(212,"th",9),d.Ec(213,"Default"),d.Rb(),d.Sb(214,"th",6),d.Ec(215,"Effect"),d.Rb(),d.Rb(),d.Rb(),d.Sb(216,"tbody"),d.Sb(217,"tr"),d.Sb(218,"td",6),d.Sb(219,"b"),d.Ec(220,"[clrAllItems]"),d.Rb(),d.Sb(221,"div",8),d.Ec(222,"Type: Array of T extends ClrGenericQuickListItem"),d.Rb(),d.Sb(223,"div",8),d.Ec(224,"Default: []"),d.Rb(),d.Rb(),d.Sb(225,"td",7),d.Ec(226,"Array of T extends ClrGenericQuickListItem"),d.Rb(),d.Sb(227,"td",9),d.Ec(228,"[]"),d.Rb(),d.Sb(229,"td",6),d.Ec(230,"All Items which will be shown in the generic quick list"),d.Rb(),d.Rb(),d.Sb(231,"tr"),d.Sb(232,"td",6),d.Sb(233,"b"),d.Ec(234,"[clrAddLabel]"),d.Rb(),d.Sb(235,"div",8),d.Ec(236,"Type: string"),d.Rb(),d.Sb(237,"div",8),d.Ec(238,"Default: ADD (Translate me)"),d.Rb(),d.Rb(),d.Sb(239,"td",7),d.Ec(240,"string"),d.Rb(),d.Sb(241,"td",9),d.Ec(242,"ADD (Translate me)"),d.Rb(),d.Sb(243,"td",6),d.Ec(244,"Label for the 'add' button"),d.Rb(),d.Rb(),d.Sb(245,"tr"),d.Sb(246,"td",6),d.Sb(247,"b"),d.Ec(248,"[clrAddPossible]"),d.Rb(),d.Sb(249,"div",8),d.Ec(250,"Type: boolean"),d.Rb(),d.Sb(251,"div",8),d.Ec(252,"Default: true"),d.Rb(),d.Rb(),d.Sb(253,"td",7),d.Ec(254,"boolean"),d.Rb(),d.Sb(255,"td",9),d.Ec(256,"true"),d.Rb(),d.Sb(257,"td",6),d.Ec(258,"Whether the 'add' button is enabled or disabled"),d.Rb(),d.Rb(),d.Sb(259,"tr"),d.Sb(260,"td",6),d.Sb(261,"b"),d.Ec(262,"[clrBlankItem]"),d.Rb(),d.Sb(263,"div",8),d.Ec(264,"Type: T extends ClrGenericQuickListItem"),d.Rb(),d.Sb(265,"div",8),d.Ec(266,"Default: {}"),d.Rb(),d.Rb(),d.Sb(267,"td",7),d.Ec(268,"T extends ClrGenericQuickListItem"),d.Rb(),d.Sb(269,"td",9),d.Ec(270,"{}"),d.Rb(),d.Sb(271,"td",6),d.Ec(272,"The item which will be added when clicking the 'add' button"),d.Rb(),d.Rb(),d.Sb(273,"tr"),d.Sb(274,"td",6),d.Sb(275,"b"),d.Ec(276,"[clrControlClasses]"),d.Rb(),d.Sb(277,"div",8),d.Ec(278,"Type: string"),d.Rb(),d.Sb(279,"div",8),d.Ec(280,'Default: ""'),d.Rb(),d.Rb(),d.Sb(281,"td",7),d.Ec(282,"string"),d.Rb(),d.Sb(283,"td",9),d.Ec(284,'""'),d.Rb(),d.Sb(285,"td",6),d.Ec(286,"CSS classes used for the controls"),d.Rb(),d.Rb(),d.Sb(287,"tr"),d.Sb(288,"td",6),d.Sb(289,"b"),d.Ec(290,"[clrMandatory]"),d.Rb(),d.Sb(291,"div",8),d.Ec(292,"Type: boolean"),d.Rb(),d.Sb(293,"div",8),d.Ec(294,"Default: false"),d.Rb(),d.Rb(),d.Sb(295,"td",7),d.Ec(296,"boolean"),d.Rb(),d.Sb(297,"td",9),d.Ec(298,"false"),d.Rb(),d.Sb(299,"td",6),d.Ec(300,"Decides whether at least one quick-list row needs to be present. If true, the generic quick-list will always display at least one row "),d.Rb(),d.Rb(),d.Sb(301,"tr"),d.Sb(302,"td",6),d.Sb(303,"b"),d.Ec(304,"(clrAdded)"),d.Rb(),d.Sb(305,"div",8),d.Ec(306,"Type: T extends ClrGenericQuickListItem"),d.Rb(),d.Nb(307,"div",8),d.Rb(),d.Sb(308,"td",7),d.Ec(309,"T extends ClrGenericQuickListItem"),d.Rb(),d.Nb(310,"td",9),d.Sb(311,"td",6),d.Ec(312,"Event which returns the newly added item"),d.Rb(),d.Rb(),d.Sb(313,"tr"),d.Sb(314,"td",6),d.Sb(315,"b"),d.Ec(316,"(clrRemoved)"),d.Rb(),d.Sb(317,"div",8),d.Ec(318,"Type: T extends ClrGenericQuickListItem"),d.Rb(),d.Nb(319,"div",8),d.Rb(),d.Sb(320,"td",7),d.Ec(321,"T extends ClrGenericQuickListItem"),d.Rb(),d.Nb(322,"td",9),d.Sb(323,"td",6),d.Ec(324,"Event which returns the removed item"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(325,"div",10),d.Sb(326,"h3",11),d.Ec(327,"Code & Examples"),d.Rb(),d.Sb(328,"h4"),d.Ec(329,"Mandatory use-case"),d.Rb(),d.Sb(330,"form",12,19),d.Sb(332,"clr-generic-quick-list",20),d.Sb(333,"label",21),d.Ec(334,"Generic Quick List"),d.Rb(),d.Cc(335,h,14,8,"ng-template"),d.Rb(),d.Rb(),d.Sb(336,"h4"),d.Ec(337,"Code snippet"),d.Rb(),d.Nb(338,"clr-code-snippet",17),d.Nb(339,"clr-code-snippet",18),d.Rb(),d.Rb(),d.Rb()),2&e){var l=d.sc(331);d.kc("newLayout",t.newLayout)("ng",t.ng)("title",t.title)("ui",t.ui),d.Ab(176),d.kc("clrAddLabel",t.getAddLabel())("clrAllValues",t.possibleOptions)("clrBlankOption",t.BLANK_OPTION)("clrMandatory",!0)("clrValues",t.selectedOptionsMandatory),d.Ab(6),d.kc("clrAddLabel",t.getAddLabel())("clrAllValues",t.possibleOptions)("clrBlankOption",t.BLANK_OPTION)("clrValues",t.selectedOptionsNotMandatory),d.Ab(5),d.kc("clrCode",t.htmlExample1),d.Ab(1),d.kc("clrCode",t.htmlExample2),d.Ab(144),d.kc("clrAddLabel","ADD")("clrAddPossible",l.valid)("clrAllItems",t.allItemsGeneric)("clrMandatory","true"),d.Ab(6),d.kc("clrCode",t.htmlExampleGeneric),d.Ab(1),d.kc("clrCode",t.angularExampleGeneric)}},directives:[u.a,c.A,c.n,c.o,n.u,a.G,n.D,p.a,a.p,n.O,c.w,c.v,n.N,c.m,c.p,c.r,c.z,n.z,n.C,c.b,n.B,n.i],encapsulation:2}),E),y=((f=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:f}),f.\u0275inj=d.Jb({factory:function(e){return new(e||f)},imports:[[r.c,c.h,n.a,o.a,b.a,i.g.forChild([{path:"",component:m}]),a.a]]}),f)}}]);