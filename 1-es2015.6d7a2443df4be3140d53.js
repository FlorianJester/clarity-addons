(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{bVhy:function(n,t,c){"use strict";c.r(t),c.d(t,"BasepageLayoutDemoModule",(function(){return I}));var e=c("ofXK"),o=c("tyNb"),a=c("8MG2"),i=c("fXoL"),l=c("2HPr"),r=c("6Y1o");const b=["leftContentPanel"],u=["rightContentPanel"];function s(n,t){1&n&&(i.Sb(0,"span"),i.Ec(1,"Base Pagelayout"),i.Rb())}function f(n,t){1&n&&(i.Sb(0,"span"),i.Ec(1,"Command bar"),i.Rb())}function h(n,t){1&n&&(i.Sb(0,"span"),i.Ec(1,"Content Panel"),i.Rb())}function C(n,t){1&n&&(i.Sb(0,"clr-button"),i.Ec(1,"Command1"),i.Rb())}function g(n,t){1&n&&(i.Sb(0,"clr-button"),i.Ec(1,"Command2"),i.Rb())}function d(n,t){if(1&n){const n=i.Tb();i.Sb(0,"clr-button",8),i.ac("click",(function(){return i.wc(n),i.cc(2).toggleRightPanel()})),i.Ec(1,"Show/Hide Right"),i.Rb()}}function m(n,t){if(1&n){const n=i.Tb();i.Sb(0,"clr-button",9),i.ac("click",(function(){return i.wc(n),i.cc(2).toggleLeftPanel()})),i.Ec(1,"Show/Hide Left "),i.Rb()}2&n&&i.kc("clrInMenu",!0)}function P(n,t){if(1&n&&(i.Sb(0,"clr-button-group",4),i.Cc(1,C,2,0,"clr-button",1),i.Cc(2,g,2,0,"clr-button",1),i.Cc(3,d,2,0,"clr-button",5),i.Cc(4,m,2,1,"clr-button",6),i.Sb(5,"clr-button",7),i.Ec(6,"Command3"),i.Rb(),i.Rb()),2&n){const n=i.cc();i.kc("clrMenuPosition","bottom-right"),i.Ab(1),i.kc("ngIf",!n.withContentPanel),i.Ab(1),i.kc("ngIf",!n.withContentPanel),i.Ab(1),i.kc("ngIf",n.withContentPanel),i.Ab(1),i.kc("ngIf",n.withContentPanel),i.Ab(1),i.kc("clrInMenu",!0)}}function p(n,t){if(1&n&&(i.Sb(0,"span"),i.Ec(1),i.Rb()),2&n){const n=i.cc(2);i.Ab(1),i.Gc(" for submenu ",n.id,"")}}function w(n,t){if(1&n&&(i.Sb(0,"div",10),i.Sb(1,"div",11),i.Ec(2," This is the page content"),i.Cc(3,p,2,1,"span",1),i.Rb(),i.Rb()),2&n){const n=i.cc();i.Ab(3),i.kc("ngIf",n.id)}}function R(n,t){1&n&&(i.Sb(0,"clr-content-panel-container"),i.Sb(1,"h2"),i.Ec(2,"Content Area"),i.Rb(),i.Sb(3,"clr-content-panel",12,13),i.Qb(5,14),i.Ec(6,"Left Content Panel"),i.Pb(),i.Qb(7,15),i.Ec(8,"Content"),i.Pb(),i.Rb(),i.Sb(9,"clr-content-panel",null,16),i.Qb(11,14),i.Ec(12,"Right Content Panel"),i.Pb(),i.Qb(13,15),i.Ec(14,"Content"),i.Pb(),i.Rb(),i.Rb())}let k=(()=>{class n{constructor(n){this.router=n,this.withCommandBar=!1,this.withContentPanel=!1}ngOnInit(){this.withCommandBar=this.collectRouteData("withCommand")[0],this.withContentPanel=this.collectRouteData("withPanel")[0],this.id=this.collectRouteData("id")[0]}toggleLeftPanel(){this.leftContentPanel.toggle()}toggleRightPanel(){this.rightContentPanel.toggle()}collectRouteData(n){let t=this.router.routerState.snapshot.root,c=[];for(;t;)t.data&&t.data[n]&&c.push(t.data[n]),t=t.firstChild;return c}}return n.\u0275fac=function(t){return new(t||n)(i.Mb(o.d))},n.\u0275cmp=i.Gb({type:n,selectors:[["clr-basepage-layout-demo"]],viewQuery:function(n,t){var c;1&n&&(i.Kc(b,!0),i.Kc(u,!0)),2&n&&(i.rc(c=i.bc())&&(t.leftContentPanel=c.first),i.rc(c=i.bc())&&(t.rightContentPanel=c.first))},decls:11,vars:6,consts:[[1,"content-header"],[4,"ngIf"],["class","command-bar",3,"clrMenuPosition",4,"ngIf"],["class","content-container",4,"ngIf"],[1,"command-bar",3,"clrMenuPosition"],[3,"click",4,"ngIf"],[3,"clrInMenu","click",4,"ngIf"],[3,"clrInMenu"],[3,"click"],[3,"clrInMenu","click"],[1,"content-container"],[1,"content-area"],["clrDirection","left"],["leftContentPanel",""],["clr-content-panel-title",""],["clr-content-panel-content",""],["rightContentPanel",""]],template:function(n,t){1&n&&(i.Sb(0,"clr-main-container"),i.Nb(1,"clr-demo-menu"),i.Sb(2,"div",0),i.Nb(3,"clr-back-button"),i.Sb(4,"h2"),i.Cc(5,s,2,0,"span",1),i.Cc(6,f,2,0,"span",1),i.Cc(7,h,2,0,"span",1),i.Rb(),i.Cc(8,P,7,6,"clr-button-group",2),i.Rb(),i.Cc(9,w,4,1,"div",3),i.Cc(10,R,15,0,"clr-content-panel-container",1),i.Rb()),2&n&&(i.Ab(5),i.kc("ngIf",!t.withCommandBar&&!t.withContentPanel),i.Ab(1),i.kc("ngIf",t.withCommandBar&&!t.withContentPanel),i.Ab(1),i.kc("ngIf",t.withCommandBar&&t.withContentPanel),i.Ab(1),i.kc("ngIf",t.withCommandBar),i.Ab(1),i.kc("ngIf",!t.withContentPanel),i.Ab(1),i.kc("ngIf",t.withContentPanel))},directives:[a.F,a.S,l.a,r.b,e.q,a.e,a.d,r.i,r.h],encapsulation:2}),n})();var S=c("fTK2");let I=(()=>{class n{}return n.\u0275mod=i.Kb({type:n}),n.\u0275inj=i.Jb({factory:function(t){return new(t||n)},imports:[[e.c,a.a,S.a,o.g.forChild([{path:"",component:k,outlet:"fullpage"}]),r.a]]}),n})()}}]);