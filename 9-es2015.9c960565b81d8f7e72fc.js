(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rbve:function(c,e,a){"use strict";a.r(e),a.d(e,"CardsDemoModule",(function(){return f}));var t=a("3Pt+"),d=a("ofXK"),n=a("8MG2"),i=a("N+3j"),l=a("fXoL"),r=a("0G9f"),o=a("vAyd");function s(c,e){1&c&&(l.Sb(0,"div",7),l.Ec(1," Click to select me "),l.Rb())}function b(c,e){1&c&&(l.Sb(0,"div",7),l.Ec(1," I am the selected card "),l.Rb())}function v(c,e){if(1&c){const c=l.Tb();l.Sb(0,"div",4),l.Sb(1,"div",20),l.ac("click",(function(){l.wc(c);const a=e.index;return l.cc().activateCard(a)})),l.Sb(2,"div",6),l.Ec(3),l.Rb(),l.Cc(4,s,2,0,"div",21),l.Cc(5,b,2,0,"div",21),l.Rb(),l.Rb()}if(2&c){const c=e.$implicit;l.Ab(1),l.Db("card-active",c.active),l.Ab(2),l.Gc(" ",c.title," "),l.Ab(1),l.kc("ngIf",!c.active),l.Ab(1),l.kc("ngIf",c.active)}}function h(c,e){1&c&&(l.Sb(0,"clr-dropdown-menu",22),l.Sb(1,"button",23),l.Ec(2," Edit "),l.Rb(),l.Sb(3,"button",23),l.Ec(4," Duplicate "),l.Rb(),l.Sb(5,"button",23),l.Ec(6," Delete "),l.Rb(),l.Rb())}let p=(()=>{class c extends i.a{constructor(){super("cards"),this.htmlExample='\n<div class="clr-row">\n    <div class="clr-col-4">\n        <div class="card card-active clickable">\n            <div class="card-header">\n                I am an active card\n            </div>\n            <div class="card-block">\n                I am also clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card clickable">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                But I am clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                And I am also not clickable\n            </div>\n        </div>\n    </div>\n</div>\n',this.htmlExamplePlaceholder='\n<div class="card card-placeholder">\n    <div class="card-header">\n        Placeholder card\n    </div>\n    <div class="card-block">\n        Card block\n        <div>\n            <a class="btn btn-link">Action</a>\n        </div>\n    </div>\n</div>\n',this.htmlExampleCustomActions='\n<div class="card">\n    <div class="card-header">\n        Card header with custom actions\n        <clr-dropdown class="card-actions">\n            <button type="button" class="btn btn-icon btn-link card-action dropdown-toggle" clrDropdownTrigger>\n                <clr-icon shape="ellipsis-vertical"></clr-icon>\n            </button>\n            <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n                ...\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    <div class="card-block">\n        Card Block\n    </div>\n</div>\n',this.cards=[{title:"Selectable card",active:!0},{title:"Selectable card",active:!1},{title:"Selectable card",active:!1}]}activateCard(c){for(let e of this.cards)e.active=!1;this.cards[c].active=!0}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=l.Gb({type:c,selectors:[["clr-cards-demo"]],hostVars:4,hostBindings:function(c,e){2&c&&l.Db("content-area",!0)("dox-content-panel",!0)},features:[l.xb],decls:85,vars:8,consts:[[3,"ng","ui","title","newLayout"],["id","cards-header",1,"component-summary"],["id","design-guidelines"],[1,"clr-row"],[1,"clr-col-4"],[1,"card","clickable"],[1,"card-header"],[1,"card-block"],["href","https://clarity.design/documentation/cards"],["class","clr-col-4",4,"ngFor","ngForOf"],[1,"clr-code"],["id","examples"],[3,"clrCode"],[1,"card","card-placeholder"],[1,"btn","btn-link"],[1,"card"],[1,"card-actions"],["type","button","clrDropdownTrigger","",1,"btn","btn-icon","btn-link","card-action","dropdown-toggle"],["shape","ellipsis-vertical"],["clrPosition","bottom-right",4,"clrIfOpen"],[1,"card","selectable",3,"click"],["class","card-block",4,"ngIf"],["clrPosition","bottom-right"],["type","button","clrDropdownItem",""]],template:function(c,e){1&c&&(l.Sb(0,"clr-doc-wrapper",0),l.Sb(1,"article"),l.Sb(2,"h5",1),l.Ec(3,"The Addons extend the default Clarity cards by providing following additional types:"),l.Rb(),l.Sb(4,"ul"),l.Sb(5,"li"),l.Ec(6,"Selectable card. The selected stays visually highlighted."),l.Rb(),l.Sb(7,"li"),l.Ec(8,"Placeholder card. Represents an empty card which can be filled by user actions."),l.Rb(),l.Rb(),l.Sb(9,"h2"),l.Ec(10,"Selectable card"),l.Rb(),l.Sb(11,"div",2),l.Sb(12,"h3"),l.Ec(13,"Behavior"),l.Rb(),l.Sb(14,"p"),l.Ec(15,"Only one card at the time can have the selection indicator. Compare this behavior to a radio button. Note the different hover style in the example below."),l.Rb(),l.Sb(16,"h6"),l.Ec(17,"Default clickable card (Standard Clarity)"),l.Rb(),l.Sb(18,"div",3),l.Sb(19,"div",4),l.Sb(20,"div",5),l.Sb(21,"div",6),l.Ec(22," Default card "),l.Rb(),l.Sb(23,"div",7),l.Ec(24," See the official "),l.Sb(25,"a",8),l.Ec(26,"Clarity documentation"),l.Rb(),l.Ec(27," for details. "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(28,"h6"),l.Ec(29,"Selectable card (Clarity Addons)"),l.Rb(),l.Sb(30,"div",3),l.Cc(31,v,6,5,"div",9),l.Rb(),l.Sb(32,"h3"),l.Ec(33,"Usage"),l.Rb(),l.Sb(34,"p"),l.Ec(35," On contrast to the default clickable-cards, the selectable card does not start an action, it is only marked as selected. Note that multiple selection is not supported. If you depend on multi-selection, use a different element such as a checkbox. A selectable card should have the class "),l.Sb(36,"code",10),l.Ec(37,"selectable"),l.Rb(),l.Ec(38," instead of the clarity-default "),l.Sb(39,"code",10),l.Ec(40,"clickable"),l.Rb(),l.Ec(41," class. Use the "),l.Sb(42,"code",10),l.Ec(43,"card-active"),l.Rb(),l.Ec(44," class to mark the currently selected one. "),l.Rb(),l.Rb(),l.Sb(45,"div",11),l.Nb(46,"clr-code-snippet",12),l.Rb(),l.Sb(47,"h2"),l.Ec(48,"Placeholder card"),l.Rb(),l.Ec(49," The placeholder card represents an empty card by a dashed border. The style is provided by class "),l.Sb(50,"code",10),l.Ec(51,"card-placeholder"),l.Rb(),l.Ec(52,". All buttons inside a placeholder card should be flat (btn-link). "),l.Sb(53,"div",3),l.Sb(54,"div",4),l.Sb(55,"div",13),l.Sb(56,"div",6),l.Ec(57," Placeholder card "),l.Rb(),l.Sb(58,"div",7),l.Ec(59," Card block "),l.Sb(60,"div"),l.Sb(61,"a",14),l.Ec(62,"Action"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Nb(63,"clr-code-snippet",12),l.Sb(64,"h2"),l.Ec(65,"Card with custom actions"),l.Rb(),l.Ec(66," To use a card with custom actions, use the classes "),l.Sb(67,"code",10),l.Ec(68,"card-actions"),l.Rb(),l.Ec(69," on the dropdown itself and "),l.Sb(70,"code",10),l.Ec(71,"card-action"),l.Rb(),l.Ec(72," on the dropdown-toggle. "),l.Sb(73,"div",3),l.Sb(74,"div",4),l.Sb(75,"div",15),l.Sb(76,"div",6),l.Ec(77," Card header with custom actions "),l.Sb(78,"clr-dropdown",16),l.Sb(79,"button",17),l.Nb(80,"clr-icon",18),l.Rb(),l.Cc(81,h,7,0,"clr-dropdown-menu",19),l.Rb(),l.Rb(),l.Sb(82,"div",7),l.Ec(83," Card Block "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Nb(84,"clr-code-snippet",12),l.Rb(),l.Rb()),2&c&&(l.kc("ng",e.ng)("ui",e.ui)("title",e.title)("newLayout",e.newLayout),l.Ab(31),l.kc("ngForOf",e.cards),l.Ab(15),l.kc("clrCode",e.htmlExample),l.Ab(17),l.kc("clrCode",e.htmlExamplePlaceholder),l.Ab(21),l.kc("clrCode",e.htmlExampleCustomActions))},directives:[r.a,d.p,o.a,n.q,n.t,n.x,n.A,d.q,n.s,n.r],encapsulation:2}),c})();var u=a("JsA7"),S=a("tyNb"),m=a("XPsC"),R=a("6Y1o");let f=(()=>{class c{}return c.\u0275mod=l.Kb({type:c}),c.\u0275inj=l.Jb({factory:function(e){return new(e||c)},imports:[[d.c,t.h,n.a,m.a,u.a,S.g.forChild([{path:"",component:p}]),R.a]]}),c})()}}]);