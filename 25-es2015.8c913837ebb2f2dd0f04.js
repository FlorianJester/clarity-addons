(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"I4/O":function(e,i,n){"use strict";n.r(i),n.d(i,"ProgressSpinnerDemoModule",(function(){return m}));var t=n("3Pt+"),o=n("ofXK"),r=n("8MG2"),s=n("N+3j"),c=n("fXoL"),a=n("0G9f"),l=n("6Y1o"),b=n("vAyd");let d=(()=>{class e extends s.a{constructor(){super("progress-spinner"),this.htmlExample='\n<div class="clr-row">\n    <div class="clr-col-6">\n        <div class="card">\n            <clr-progress-spinner [clrShowSpinner]="cardLoadingState"></clr-progress-spinner>\n            ...\n        </div>\n    </div>\n</div>\n<button class="btn btn-primary" (click)="cardLoadingState = !cardLoadingState">Toggle Loading</button>\n',this.htmlExample2='\n<div>\n  <clr-progress-spinner [clrShowSpinner]="loadingState" clrSize="md"></clr-progress-spinner>\n  <h2>Content Title</h2>\n    <p>...</p>\n</div>\n\n<button class="btn btn-primary" (click)="loadingState = !loadingState">Toggle Loading</button>\n'}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["clr-progress-spinner-demo"]],hostVars:4,hostBindings:function(e,i){2&e&&c.Db("content-area",!0)("dox-content-panel",!0)},features:[c.xb],decls:85,vars:8,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],["id","design-guidelines"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","code-examples"],["id","examples"],[1,"clr-row"],[1,"clr-col-6"],[1,"card"],[3,"clrShowSpinner"],[1,"card-header"],[1,"card-block"],[1,"card-title"],[1,"card-text"],[1,"card-footer"],[1,"btn","btn-primary",3,"click"],[3,"clrCode"],[2,"position","relative","background-color","#ddd","padding","1rem","margin-top","1rem"],["clrSize","md",3,"clrShowSpinner"],[2,"margin-top","0"]],template:function(e,i){1&e&&(c.Sb(0,"clr-doc-wrapper",0),c.Sb(1,"article"),c.Sb(2,"h5",1),c.Ec(3,"The progress spinner of Clarity Addons extends the default progress spinner by an Angular Component which allows the developer to toggle the loading state depending on a boolean input."),c.Rb(),c.Sb(4,"div",2),c.Sb(5,"h3"),c.Ec(6,"Summary of Options"),c.Rb(),c.Sb(7,"table",3),c.Sb(8,"thead"),c.Sb(9,"tr"),c.Sb(10,"th",4),c.Ec(11,"Input"),c.Rb(),c.Sb(12,"th",5),c.Ec(13,"Values"),c.Rb(),c.Sb(14,"th",6),c.Ec(15,"Default"),c.Rb(),c.Sb(16,"th",4),c.Ec(17,"Effect"),c.Rb(),c.Rb(),c.Rb(),c.Sb(18,"tbody"),c.Sb(19,"tr"),c.Sb(20,"td",4),c.Sb(21,"b"),c.Ec(22,"clrShowSpinner"),c.Rb(),c.Sb(23,"div",7),c.Ec(24,"Type: boolean"),c.Rb(),c.Sb(25,"div",7),c.Ec(26,"Default: false"),c.Rb(),c.Rb(),c.Sb(27,"td",5),c.Ec(28,"true, false"),c.Rb(),c.Sb(29,"td",6),c.Ec(30,"false"),c.Rb(),c.Sb(31,"td",4),c.Ec(32,"Controls if the spinner is shown"),c.Rb(),c.Rb(),c.Sb(33,"tr"),c.Sb(34,"td",4),c.Sb(35,"b"),c.Ec(36,"clrSize"),c.Rb(),c.Sb(37,"div",7),c.Ec(38,"Type: String"),c.Rb(),c.Sb(39,"div",7),c.Ec(40,'Default: "sm"'),c.Rb(),c.Rb(),c.Sb(41,"td",5),c.Ec(42,"sm, md, lg"),c.Rb(),c.Sb(43,"td",6),c.Ec(44,'"sm"'),c.Rb(),c.Sb(45,"td",4),c.Ec(46,"Defines the size of progress spinner"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(47,"div",8),c.Sb(48,"h3",9),c.Ec(49,"Code & Examples"),c.Rb(),c.Sb(50,"h4"),c.Ec(51,"The progress spinner on top of any card"),c.Rb(),c.Sb(52,"p"),c.Ec(53,"When having multiple cards which can be loaded independently, it is possible show a progress spinner on any specific card:"),c.Rb(),c.Sb(54,"div",10),c.Sb(55,"div",11),c.Sb(56,"div",12),c.Nb(57,"clr-progress-spinner",13),c.Sb(58,"div",14),c.Ec(59,"Header"),c.Rb(),c.Sb(60,"div",15),c.Sb(61,"div",16),c.Ec(62," Block "),c.Rb(),c.Sb(63,"div",17),c.Ec(64," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis temporibus quod inventore, minus commodi similique corrupti repellat saepe facere aliquam minima deserunt esse nemo, vel illum optio necessitatibus deleniti. "),c.Rb(),c.Rb(),c.Sb(65,"div",18),c.Ec(66," Footer "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(67,"button",19),c.ac("click",(function(){return i.cardLoadingState=!i.cardLoadingState})),c.Ec(68,"Toggle Loading"),c.Rb(),c.Nb(69,"clr-code-snippet",20),c.Sb(70,"h4"),c.Ec(71,"The progress spinner on top of any content"),c.Rb(),c.Sb(72,"p"),c.Ec(73,"When having multiple areas in your applicatoin which can be loaded indepedently, it is possible to show a progress spinner on any specific area:"),c.Rb(),c.Sb(74,"div",21),c.Nb(75,"clr-progress-spinner",22),c.Sb(76,"h2",23),c.Ec(77,"Content Title"),c.Rb(),c.Sb(78,"p"),c.Ec(79,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis temporibus quod inventore, minus commodi similique corrupti repellat saepe facere aliquam minima deserunt esse nemo, vel illum optio necessitatibus deleniti."),c.Rb(),c.Sb(80,"p"),c.Ec(81,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis temporibus quod inventore, minus commodi similique corrupti repellat saepe facere aliquam minima deserunt esse nemo, vel illum optio necessitatibus deleniti."),c.Rb(),c.Rb(),c.Sb(82,"button",19),c.ac("click",(function(){return i.loadingState=!i.loadingState})),c.Ec(83,"Toggle Loading"),c.Rb(),c.Nb(84,"clr-code-snippet",20),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.kc("ng",i.ng)("ui",i.ui)("title",i.title)("newLayout",i.newLayout),c.Ab(57),c.kc("clrShowSpinner",i.cardLoadingState),c.Ab(12),c.kc("clrCode",i.htmlExample),c.Ab(6),c.kc("clrShowSpinner",i.loadingState),c.Ab(9),c.kc("clrCode",i.htmlExample2))},directives:[a.a,l.F,b.a],encapsulation:2}),e})();var p=n("JsA7"),u=n("tyNb"),S=n("XPsC");let m=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(i){return new(i||e)},imports:[[o.c,t.h,r.a,S.a,p.a,u.g.forChild([{path:"",component:d}]),l.a]]}),e})()}}]);