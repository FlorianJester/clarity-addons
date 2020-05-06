(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/lUI":function(e,t,n){"use strict";n.r(t),n.d(t,"NotificationDemoModule",(function(){return R}));var o=n("ofXK"),i=n("3Pt+"),c=n("8MG2"),b=n("6Y1o"),r=n("N+3j"),a=n("fXoL"),s=n("0G9f"),l=n("vAyd");function p(e,t){1&e&&(a.Qb(0,33),a.Ec(1," Danger "),a.Pb())}function u(e,t){1&e&&(a.Qb(0,33),a.Ec(1," Warning "),a.Pb())}function d(e,t){1&e&&(a.Qb(0,33),a.Ec(1," Info "),a.Pb())}function f(e,t){1&e&&(a.Qb(0,33),a.Ec(1," Success "),a.Pb())}function m(e,t){if(1&e){const e=a.Tb();a.Qb(0,33),a.Ec(1," Complex notification "),a.Sb(2,"button",22),a.ac("click",(function(){return a.wc(e),a.cc().log()})),a.Ec(3,"Log console"),a.Rb(),a.Pb()}}let S=(()=>{class e extends r.a{constructor(e){super("notification"),this.notificationService=e,this.codeExample='\n\n<button class="btn" (click)="openNotify(example, { timeout: clrExampleTimeout, notificationType: clrExampleType,\n    dismissable: clrExampleDismissable, progressbar: clrExampleProgressbar })">Show Notification</button>\n<ng-template #example>\n    <ng-container clr-notification-message>\n        Some Information\n        <button class="btn btn-info-outline" (click)="showAlert()">Show Alert</button>\n    </ng-container>\n</ng-template>\n',this.codeExampleTS='\nonClose(): void {\n    console.log("notification closed");\n}\n\nopenNotify(content, options): void {\n    this.notificationService.openNotification(content, options).result.then(this.onClose);\n}\n',this.codeExampleString='\n<button class="btn" (click)="openString()">Show Notification from String</button>\n',this.codeExampleStringTS='\nopenString(): void {\n    this.notificationService.openNotification("This is a string message", {progressbar: true, dismissable: true});\n}\n',this.clrExampleTimeout=2e3,this.clrExampleType="info",this.clrExampleDismissable=!0,this.clrExampleProgressbar=!0}onClose(){console.log("notification closed")}openNotify(e,t){this.notificationService.openNotification(e,t).result.then(this.onClose)}openString(){this.notificationService.openNotification("This is a string message",{progressbar:!0,dismissable:!0})}log(){console.log("log from notification")}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(b.x))},e.\u0275cmp=a.Gb({type:e,selectors:[["clr-notification-demo-docu"]],hostVars:4,hostBindings:function(e,t){2&e&&a.Db("content-area",!0)("dox-content-panel",!0)},features:[a.zb([b.x]),a.xb],decls:182,vars:14,consts:[[3,"ng","ui","title","newLayout"],["id","generic-pager-header",1,"component-summary"],["id","design-guidelines"],[1,"btn","btn-danger",3,"click"],["exampleDanger",""],[1,"btn","btn-warning",3,"click"],["exampleWarning",""],[1,"btn","btn-primary",3,"click"],["exampleInfo",""],[1,"btn","btn-success",3,"click"],["exampleSuccess",""],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","code-examples"],["id","examples"],[3,"clrCode"],[3,"clrCode","clrLanguage"],[1,"btn-group"],[1,"btn",3,"click"],["clrForm","","clrLayout","vertical"],["clrInput","","type","number","id","clr-timeout","name","clr-timeout",3,"ngModel","ngModelChange"],["clrSelect","","id","clr-type","name","clr-type",3,"ngModel","ngModelChange"],["value","info"],["value","warning"],["value","success"],["value","danger"],["clrCheckbox","","type","checkbox","name","clr-dismissable",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","clr-progressbar",3,"ngModel","ngModelChange"],["example",""],["clr-notification-message",""]],template:function(e,t){if(1&e){const e=a.Tb();a.Sb(0,"clr-doc-wrapper",0),a.Sb(1,"article"),a.Sb(2,"h5",1),a.Ec(3,"Notifications are shown to inform the user of a particular event or completed action."),a.Rb(),a.Sb(4,"div",2),a.Sb(5,"h3"),a.Ec(6,"Notification Types"),a.Rb(),a.Sb(7,"p"),a.Ec(8," There are four different sub-types of notifications: error, warning, info, and success. "),a.Rb(),a.Sb(9,"p"),a.Sb(10,"b"),a.Ec(11,"Error"),a.Rb(),a.Nb(12,"br"),a.Ec(13," Reserved for errors, malfunctions, as well as critical issues like license expiration. "),a.Nb(14,"br"),a.Sb(15,"button",3),a.ac("click",(function(){a.wc(e);const n=a.sc(18);return t.openNotify(n,{timeout:3e3,notificationType:"danger",dismissable:!1,progressbar:!1})})),a.Ec(16,"Show Error Notification"),a.Rb(),a.Cc(17,p,2,0,"ng-template",null,4,a.Dc),a.Rb(),a.Sb(19,"p"),a.Sb(20,"b"),a.Ec(21,"Warning"),a.Rb(),a.Nb(22,"br"),a.Ec(23," Reserved for warnings: a message that needs the user attention and aknowledgment but might not cause errors. "),a.Nb(24,"br"),a.Sb(25,"button",5),a.ac("click",(function(){a.wc(e);const n=a.sc(28);return t.openNotify(n,{timeout:3e3,notificationType:"warning",dismissable:!1,progressbar:!1})})),a.Ec(26,"Show Warning Notification"),a.Rb(),a.Cc(27,u,2,0,"ng-template",null,6,a.Dc),a.Rb(),a.Sb(29,"p"),a.Sb(30,"b"),a.Ec(31,"Info"),a.Rb(),a.Nb(32,"br"),a.Ec(33," Provides info to users in context. Shouldn\u2019t be overused to replace regular content. "),a.Nb(34,"br"),a.Sb(35,"button",7),a.ac("click",(function(){a.wc(e);const n=a.sc(38);return t.openNotify(n,{timeout:3e3,notificationType:"info",dismissable:!1,progressbar:!1})})),a.Ec(36,"Show Info Notification"),a.Rb(),a.Cc(37,d,2,0,"ng-template",null,8,a.Dc),a.Rb(),a.Sb(39,"p"),a.Sb(40,"b"),a.Ec(41,"Success"),a.Rb(),a.Nb(42,"br"),a.Ec(43," Reserved to provide to a static persistent success message. "),a.Nb(44,"br"),a.Sb(45,"button",9),a.ac("click",(function(){a.wc(e);const n=a.sc(48);return t.openNotify(n,{timeout:3e3,notificationType:"success",dismissable:!1,progressbar:!1})})),a.Ec(46,"Show Success Notification"),a.Rb(),a.Cc(47,f,2,0,"ng-template",null,10,a.Dc),a.Rb(),a.Sb(49,"h2"),a.Ec(50,"Angular Component"),a.Rb(),a.Sb(51,"p"),a.Ec(52," Notifications will be opened by a service, not by including the notification component in the markup. That way it's possible to use the same markup for multiple notification instances. "),a.Rb(),a.Sb(53,"p"),a.Ec(54," The service will be called with two parameters. The first one defines the content of the notification as a template or string. The second parameter defines the options for the notification, described below. "),a.Rb(),a.Sb(55,"p"),a.Ec(56," The service will return a "),a.Sb(57,"code",11),a.Ec(58,"ClrNotificationRef"),a.Rb(),a.Ec(59," containing a promise "),a.Sb(60,"code",11),a.Ec(61,"result"),a.Rb(),a.Ec(62," which will get resolved after the notification was closed. "),a.Rb(),a.Sb(63,"h3"),a.Ec(64,"Summary of Options"),a.Rb(),a.Sb(65,"table",12),a.Sb(66,"thead"),a.Sb(67,"tr"),a.Sb(68,"th",13),a.Ec(69,"Input"),a.Rb(),a.Sb(70,"th",14),a.Ec(71,"Values"),a.Rb(),a.Sb(72,"th",15),a.Ec(73,"Default"),a.Rb(),a.Sb(74,"th",13),a.Ec(75,"Effect"),a.Rb(),a.Rb(),a.Rb(),a.Sb(76,"tbody"),a.Sb(77,"tr"),a.Sb(78,"td",13),a.Sb(79,"b"),a.Ec(80,"timeout"),a.Rb(),a.Sb(81,"div",16),a.Ec(82,"Type: Number"),a.Rb(),a.Sb(83,"div",16),a.Ec(84,"Default: 2000"),a.Rb(),a.Rb(),a.Sb(85,"td",14),a.Ec(86,"Javascript Number"),a.Rb(),a.Sb(87,"td",15),a.Ec(88,"2000"),a.Rb(),a.Sb(89,"td",13),a.Ec(90,"Time in ms when the notification will be closed automatically. 0 means it stays open until user closes it manually."),a.Rb(),a.Rb(),a.Sb(91,"tr"),a.Sb(92,"td",13),a.Sb(93,"b"),a.Ec(94,"notificationType"),a.Rb(),a.Sb(95,"div",16),a.Ec(96,"Type: String"),a.Rb(),a.Sb(97,"div",16),a.Ec(98,'Default: "info"'),a.Rb(),a.Rb(),a.Sb(99,"td",14),a.Ec(100,'"info", "warning", "success", "danger"'),a.Rb(),a.Sb(101,"td",15),a.Ec(102,'"info"'),a.Rb(),a.Sb(103,"td",13),a.Ec(104," Defines the type of notification. "),a.Rb(),a.Rb(),a.Sb(105,"tr"),a.Sb(106,"td",13),a.Sb(107,"b"),a.Ec(108,"dismissable"),a.Rb(),a.Sb(109,"div",16),a.Ec(110,"Type: Boolean"),a.Rb(),a.Sb(111,"div",16),a.Ec(112,"Default: false"),a.Rb(),a.Rb(),a.Sb(113,"td",14),a.Ec(114,"true, false"),a.Rb(),a.Sb(115,"td",15),a.Ec(116,"false"),a.Rb(),a.Sb(117,"td",13),a.Ec(118," Defines whether the notification is closable by the user manually. "),a.Rb(),a.Rb(),a.Sb(119,"tr"),a.Sb(120,"td",13),a.Sb(121,"b"),a.Ec(122,"progressbar"),a.Rb(),a.Sb(123,"div",16),a.Ec(124,"Type: Boolean"),a.Rb(),a.Sb(125,"div",16),a.Ec(126,"Default: false"),a.Rb(),a.Rb(),a.Sb(127,"td",14),a.Ec(128,"true, false"),a.Rb(),a.Sb(129,"td",15),a.Ec(130,"false"),a.Rb(),a.Sb(131,"td",13),a.Ec(132," Defines whether the progressbar (until notification closes automatically) will be shown. "),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(133,"div",17),a.Sb(134,"h3",18),a.Ec(135,"Code & Examples"),a.Rb(),a.Sb(136,"h4"),a.Ec(137,"Notification from String"),a.Rb(),a.Sb(138,"p"),a.Ec(139,"For simple messages a string can be provided to the notification service."),a.Rb(),a.Nb(140,"clr-code-snippet",19),a.Nb(141,"clr-code-snippet",20),a.Sb(142,"div",21),a.Sb(143,"button",22),a.ac("click",(function(){return t.openString()})),a.Ec(144,"Show Notification from String"),a.Rb(),a.Rb(),a.Sb(145,"h4"),a.Ec(146,"Notification from ng-template"),a.Rb(),a.Sb(147,"p"),a.Ec(148,"For more complex notifications (including buttons etc.) an instance to a TemplateRef can be provided as content."),a.Rb(),a.Nb(149,"clr-code-snippet",19),a.Nb(150,"clr-code-snippet",20),a.Sb(151,"form",23),a.Sb(152,"clr-input-container"),a.Sb(153,"label"),a.Ec(154,"Timeout"),a.Rb(),a.Sb(155,"input",24),a.ac("ngModelChange",(function(e){return t.clrExampleTimeout=e})),a.Rb(),a.Rb(),a.Sb(156,"clr-select-container"),a.Sb(157,"label"),a.Ec(158,"Type"),a.Rb(),a.Sb(159,"select",25),a.ac("ngModelChange",(function(e){return t.clrExampleType=e})),a.Sb(160,"option",26),a.Ec(161,"Info"),a.Rb(),a.Sb(162,"option",27),a.Ec(163,"Warning"),a.Rb(),a.Sb(164,"option",28),a.Ec(165,"Success"),a.Rb(),a.Sb(166,"option",29),a.Ec(167,"Danger"),a.Rb(),a.Rb(),a.Rb(),a.Nb(168,"br"),a.Sb(169,"clr-checkbox-wrapper"),a.Sb(170,"label"),a.Ec(171,"Dismissable"),a.Rb(),a.Sb(172,"input",30),a.ac("ngModelChange",(function(e){return t.clrExampleDismissable=e})),a.Rb(),a.Rb(),a.Sb(173,"clr-checkbox-wrapper"),a.Sb(174,"label"),a.Ec(175,"Progressbar"),a.Rb(),a.Sb(176,"input",31),a.ac("ngModelChange",(function(e){return t.clrExampleProgressbar=e})),a.Rb(),a.Rb(),a.Rb(),a.Sb(177,"div",21),a.Sb(178,"button",22),a.ac("click",(function(){a.wc(e);const n=a.sc(181);return t.openNotify(n,{timeout:t.clrExampleTimeout,notificationType:t.clrExampleType,dismissable:t.clrExampleDismissable,progressbar:t.clrExampleProgressbar})})),a.Ec(179,"Show Notification"),a.Rb(),a.Rb(),a.Cc(180,m,4,0,"ng-template",null,32,a.Dc),a.Rb(),a.Rb(),a.Rb()}2&e&&(a.kc("ng",t.ng)("ui",t.ui)("title",t.title)("newLayout",t.newLayout),a.Ab(140),a.kc("clrCode",t.codeExampleString),a.Ab(1),a.kc("clrCode",t.codeExampleStringTS)("clrLanguage","typescript"),a.Ab(8),a.kc("clrCode",t.codeExample),a.Ab(1),a.kc("clrCode",t.codeExampleTS)("clrLanguage","typescript"),a.Ab(5),a.kc("ngModel",t.clrExampleTimeout),a.Ab(4),a.kc("ngModel",t.clrExampleType),a.Ab(13),a.kc("ngModel",t.clrExampleDismissable),a.Ab(4),a.kc("ngModel",t.clrExampleProgressbar))},directives:[s.a,l.a,i.A,i.n,i.o,c.u,c.E,c.C,c.D,i.s,i.b,c.B,i.m,i.p,c.O,i.w,c.N,i.r,i.z,c.h,i.a,c.f],styles:["#clr-type[_ngcontent-%COMP%]{width:160px}"]}),e})();var g=n("JsA7"),E=n("tyNb"),h=n("XPsC");let R=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[o.c,c.a,b.a,h.a,g.a,E.g.forChild([{path:"",component:S}]),i.h]]}),e})()}}]);