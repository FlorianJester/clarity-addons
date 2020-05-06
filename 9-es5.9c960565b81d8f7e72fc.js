function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,c=function(){};return{s:c,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,a=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,n=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,r=new Array(t);c<t;c++)r[c]=e[c];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var r=t[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var c,r=_getPrototypeOf(e);if(t){var n=_getPrototypeOf(this).constructor;c=Reflect.construct(r,arguments,n)}else c=r.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rbve:function(e,t,c){"use strict";c.r(t),c.d(t,"CardsDemoModule",(function(){return E}));var r=c("3Pt+"),n=c("ofXK"),a=c("8MG2"),o=c("N+3j"),i=c("fXoL"),l=c("0G9f"),d=c("vAyd");function s(e,t){1&e&&(i.Sb(0,"div",7),i.Ec(1," Click to select me "),i.Rb())}function b(e,t){1&e&&(i.Sb(0,"div",7),i.Ec(1," I am the selected card "),i.Rb())}function u(e,t){if(1&e){var c=i.Tb();i.Sb(0,"div",4),i.Sb(1,"div",20),i.ac("click",(function(){i.wc(c);var e=t.index;return i.cc().activateCard(e)})),i.Sb(2,"div",6),i.Ec(3),i.Rb(),i.Cc(4,s,2,0,"div",21),i.Cc(5,b,2,0,"div",21),i.Rb(),i.Rb()}if(2&e){var r=t.$implicit;i.Ab(1),i.Db("card-active",r.active),i.Ab(2),i.Gc(" ",r.title," "),i.Ab(1),i.kc("ngIf",!r.active),i.Ab(1),i.kc("ngIf",r.active)}}function f(e,t){1&e&&(i.Sb(0,"clr-dropdown-menu",22),i.Sb(1,"button",23),i.Ec(2," Edit "),i.Rb(),i.Sb(3,"button",23),i.Ec(4," Duplicate "),i.Rb(),i.Sb(5,"button",23),i.Ec(6," Delete "),i.Rb(),i.Rb())}var p,v,h=((p=function(e){_inherits(c,e);var t=_createSuper(c);function c(){var e;return _classCallCheck(this,c),(e=t.call(this,"cards")).htmlExample='\n<div class="clr-row">\n    <div class="clr-col-4">\n        <div class="card card-active clickable">\n            <div class="card-header">\n                I am an active card\n            </div>\n            <div class="card-block">\n                I am also clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card clickable">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                But I am clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                And I am also not clickable\n            </div>\n        </div>\n    </div>\n</div>\n',e.htmlExamplePlaceholder='\n<div class="card card-placeholder">\n    <div class="card-header">\n        Placeholder card\n    </div>\n    <div class="card-block">\n        Card block\n        <div>\n            <a class="btn btn-link">Action</a>\n        </div>\n    </div>\n</div>\n',e.htmlExampleCustomActions='\n<div class="card">\n    <div class="card-header">\n        Card header with custom actions\n        <clr-dropdown class="card-actions">\n            <button type="button" class="btn btn-icon btn-link card-action dropdown-toggle" clrDropdownTrigger>\n                <clr-icon shape="ellipsis-vertical"></clr-icon>\n            </button>\n            <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n                ...\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    <div class="card-block">\n        Card Block\n    </div>\n</div>\n',e.cards=[{title:"Selectable card",active:!0},{title:"Selectable card",active:!1},{title:"Selectable card",active:!1}],e}return _createClass(c,[{key:"activateCard",value:function(e){var t,c=_createForOfIteratorHelper(this.cards);try{for(c.s();!(t=c.n()).done;)t.value.active=!1}catch(r){c.e(r)}finally{c.f()}this.cards[e].active=!0}}]),c}(o.a)).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=i.Gb({type:p,selectors:[["clr-cards-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&i.Db("content-area",!0)("dox-content-panel",!0)},features:[i.xb],decls:85,vars:8,consts:[[3,"ng","ui","title","newLayout"],["id","cards-header",1,"component-summary"],["id","design-guidelines"],[1,"clr-row"],[1,"clr-col-4"],[1,"card","clickable"],[1,"card-header"],[1,"card-block"],["href","https://clarity.design/documentation/cards"],["class","clr-col-4",4,"ngFor","ngForOf"],[1,"clr-code"],["id","examples"],[3,"clrCode"],[1,"card","card-placeholder"],[1,"btn","btn-link"],[1,"card"],[1,"card-actions"],["type","button","clrDropdownTrigger","",1,"btn","btn-icon","btn-link","card-action","dropdown-toggle"],["shape","ellipsis-vertical"],["clrPosition","bottom-right",4,"clrIfOpen"],[1,"card","selectable",3,"click"],["class","card-block",4,"ngIf"],["clrPosition","bottom-right"],["type","button","clrDropdownItem",""]],template:function(e,t){1&e&&(i.Sb(0,"clr-doc-wrapper",0),i.Sb(1,"article"),i.Sb(2,"h5",1),i.Ec(3,"The Addons extend the default Clarity cards by providing following additional types:"),i.Rb(),i.Sb(4,"ul"),i.Sb(5,"li"),i.Ec(6,"Selectable card. The selected stays visually highlighted."),i.Rb(),i.Sb(7,"li"),i.Ec(8,"Placeholder card. Represents an empty card which can be filled by user actions."),i.Rb(),i.Rb(),i.Sb(9,"h2"),i.Ec(10,"Selectable card"),i.Rb(),i.Sb(11,"div",2),i.Sb(12,"h3"),i.Ec(13,"Behavior"),i.Rb(),i.Sb(14,"p"),i.Ec(15,"Only one card at the time can have the selection indicator. Compare this behavior to a radio button. Note the different hover style in the example below."),i.Rb(),i.Sb(16,"h6"),i.Ec(17,"Default clickable card (Standard Clarity)"),i.Rb(),i.Sb(18,"div",3),i.Sb(19,"div",4),i.Sb(20,"div",5),i.Sb(21,"div",6),i.Ec(22," Default card "),i.Rb(),i.Sb(23,"div",7),i.Ec(24," See the official "),i.Sb(25,"a",8),i.Ec(26,"Clarity documentation"),i.Rb(),i.Ec(27," for details. "),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(28,"h6"),i.Ec(29,"Selectable card (Clarity Addons)"),i.Rb(),i.Sb(30,"div",3),i.Cc(31,u,6,5,"div",9),i.Rb(),i.Sb(32,"h3"),i.Ec(33,"Usage"),i.Rb(),i.Sb(34,"p"),i.Ec(35," On contrast to the default clickable-cards, the selectable card does not start an action, it is only marked as selected. Note that multiple selection is not supported. If you depend on multi-selection, use a different element such as a checkbox. A selectable card should have the class "),i.Sb(36,"code",10),i.Ec(37,"selectable"),i.Rb(),i.Ec(38," instead of the clarity-default "),i.Sb(39,"code",10),i.Ec(40,"clickable"),i.Rb(),i.Ec(41," class. Use the "),i.Sb(42,"code",10),i.Ec(43,"card-active"),i.Rb(),i.Ec(44," class to mark the currently selected one. "),i.Rb(),i.Rb(),i.Sb(45,"div",11),i.Nb(46,"clr-code-snippet",12),i.Rb(),i.Sb(47,"h2"),i.Ec(48,"Placeholder card"),i.Rb(),i.Ec(49," The placeholder card represents an empty card by a dashed border. The style is provided by class "),i.Sb(50,"code",10),i.Ec(51,"card-placeholder"),i.Rb(),i.Ec(52,". All buttons inside a placeholder card should be flat (btn-link). "),i.Sb(53,"div",3),i.Sb(54,"div",4),i.Sb(55,"div",13),i.Sb(56,"div",6),i.Ec(57," Placeholder card "),i.Rb(),i.Sb(58,"div",7),i.Ec(59," Card block "),i.Sb(60,"div"),i.Sb(61,"a",14),i.Ec(62,"Action"),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Nb(63,"clr-code-snippet",12),i.Sb(64,"h2"),i.Ec(65,"Card with custom actions"),i.Rb(),i.Ec(66," To use a card with custom actions, use the classes "),i.Sb(67,"code",10),i.Ec(68,"card-actions"),i.Rb(),i.Ec(69," on the dropdown itself and "),i.Sb(70,"code",10),i.Ec(71,"card-action"),i.Rb(),i.Ec(72," on the dropdown-toggle. "),i.Sb(73,"div",3),i.Sb(74,"div",4),i.Sb(75,"div",15),i.Sb(76,"div",6),i.Ec(77," Card header with custom actions "),i.Sb(78,"clr-dropdown",16),i.Sb(79,"button",17),i.Nb(80,"clr-icon",18),i.Rb(),i.Cc(81,f,7,0,"clr-dropdown-menu",19),i.Rb(),i.Rb(),i.Sb(82,"div",7),i.Ec(83," Card Block "),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Nb(84,"clr-code-snippet",12),i.Rb(),i.Rb()),2&e&&(i.kc("ng",t.ng)("ui",t.ui)("title",t.title)("newLayout",t.newLayout),i.Ab(31),i.kc("ngForOf",t.cards),i.Ab(15),i.kc("clrCode",t.htmlExample),i.Ab(17),i.kc("clrCode",t.htmlExamplePlaceholder),i.Ab(21),i.kc("clrCode",t.htmlExampleCustomActions))},directives:[l.a,n.p,d.a,a.q,a.t,a.x,a.A,n.q,a.s,a.r],encapsulation:2}),p),y=c("JsA7"),m=c("tyNb"),S=c("XPsC"),R=c("6Y1o"),E=((v=function e(){_classCallCheck(this,e)}).\u0275mod=i.Kb({type:v}),v.\u0275inj=i.Jb({factory:function(e){return new(e||v)},imports:[[n.c,r.h,a.a,S.a,y.a,m.g.forChild([{path:"",component:h}]),R.a]]}),v)}}]);