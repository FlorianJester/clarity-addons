"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[886],{52886:(y,a,r)=>{r.r(a),r.d(a,{FormsLayoutDemoModule:()=>g});var s=r(60177),i=r(338),c=r(57519),e=r(69002),p=r(91095),m=r(63275),l=r(54438),u=r(54627),d=r(87620);let F=(()=>{class o{codeExample='\n<form clrForm [clrLayout]="\'horizontal\'" class="clr-row">\n    <h4 class="clr-col-12">Personal Data</h4>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">First name</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Last name</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-radio-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Gender</label>\n        <clr-radio-wrapper>\n            <label>Male</label>\n            <input clrRadio class="clr-col-12 clr-col-sm-4 clr-col-lg-6" type="radio" name="gender"/>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <label>Female</label>\n            <input clrRadio class="clr-col-12 clr-col-sm-4 clr-col-lg-6" type="radio" name="gender"/>\n        </clr-radio-wrapper>\n    </clr-radio-container>\n    <clr-select-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Country</label>\n        <select clrSelect class="clr-col-12 clr-col-sm-3 clr-col-lg-5">\n            <option>Austria</option>\n            <option>Germany</option>\n            <option>United States of America</option>\n        </select>\n    </clr-select-container>\n    <clr-date-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Date of Birth</label>\n        <input clrDate type="text" class="clr-col-12 clr-col-sm-6 clr-col-lg-6"/>\n    </clr-date-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">E-Mail</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Phone</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n\n    <h4 class="clr-col-12">User Data</h4>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Username</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-password-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Password</label>\n        <input clrPassword type="password" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-password-container>\n\n    <h4 class="clr-col-12">Other Data</h4>\n    <clr-date-time-container class="clr-col-12 clr-col-lg-6 clr-row">\n        <clr-date-container>\n            <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Start date & time</label>\n            <input clrDate type="text" class="clr-col-12 clr-col-sm-10 clr-col-lg-9"/>\n        </clr-date-container>\n        <input clrTime type="time" />\n    </clr-date-time-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">End time</label>\n        <input clrInput type="time" class="clr-col-12 clr-col-sm-3 clr-col-lg-5"/>\n    </clr-input-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Daily Donation</label>\n        <input clrInput clrNumeric [clrUnit]="\'\u20ac\'" type="text" class="clr-col-12 clr-col-sm-3 clr-col-lg-5"/>\n    </clr-input-container>\n    <clr-checkbox-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Newsletter Subscriptions</label>\n        <clr-checkbox-wrapper>\n            <label>Weekly</label>\n            <input clrCheckbox class="clr-col-12 clr-col-sm-6 clr-col-lg-6" type="checkbox"/>\n        </clr-checkbox-wrapper>\n        <clr-checkbox-wrapper>\n            <label>Monthly</label>\n            <input clrCheckbox class="clr-col-12 clr-col-sm-6 clr-col-lg-6" type="checkbox"/>\n        </clr-checkbox-wrapper>\n    </clr-checkbox-container>\n    <clr-textarea-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Comment / Feedback</label>\n        <textarea clrTextarea type="text" class="clr-col-12 clr-col-sm-10 clr-col-lg-9"></textarea>\n    </clr-textarea-container>\n</form>\n';static \u0275fac=function(t){return new(t||o)};static \u0275cmp=l.VBU({type:o,selectors:[["clr-forms-layout-demo"]],decls:97,vars:3,consts:[[1,"content-header"],[1,"content-container"],[1,"content-area"],["clrForm","",1,"clr-row",3,"clrLayout"],[1,"clr-col-12"],[1,"clr-col-12","clr-col-lg-6"],[1,"clr-col-12","clr-col-sm-2","clr-col-lg-3"],["clrInput","","type","text",1,"clr-col-12","clr-col-sm-4","clr-col-lg-6"],["clrRadio","","type","radio","name","gender",1,"clr-col-12","clr-col-sm-4","clr-col-lg-6"],["clrSelect","",1,"clr-col-12","clr-col-sm-3","clr-col-lg-5"],["clrDate","","type","text",1,"clr-col-12","clr-col-sm-6","clr-col-lg-6"],["clrPassword","","type","password",1,"clr-col-12","clr-col-sm-4","clr-col-lg-6"],[1,"clr-col-12","clr-col-lg-6","clr-row"],["clrDate","","type","text",1,"clr-col-12","clr-col-sm-10","clr-col-lg-9"],["clrTime","","type","time"],["clrInput","","type","time",1,"clr-col-12","clr-col-sm-3","clr-col-lg-5"],["clrInput","","clrNumeric","","type","text",1,"clr-col-12","clr-col-sm-3","clr-col-lg-5",3,"clrUnit"],["clrCheckbox","","type","checkbox",1,"clr-col-12","clr-col-sm-6","clr-col-lg-6"],["clrTextarea","","type","text",1,"clr-col-12","clr-col-sm-10","clr-col-lg-9"],[1,"clr-row"],[1,"clr-col-8",3,"clrCode"]],template:function(t,k){1&t&&(l.j41(0,"clr-main-container"),l.nrm(1,"clr-demo-menu"),l.j41(2,"div",0),l.nrm(3,"clr-back-button"),l.j41(4,"h2"),l.EFF(5,"Forms Layout"),l.k0s()(),l.j41(6,"div",1)(7,"div",2)(8,"form",3)(9,"h4",4),l.EFF(10,"Personal Data"),l.k0s(),l.j41(11,"clr-input-container",5)(12,"label",6),l.EFF(13,"First name"),l.k0s(),l.nrm(14,"input",7),l.k0s(),l.j41(15,"clr-input-container",5)(16,"label",6),l.EFF(17,"Last name"),l.k0s(),l.nrm(18,"input",7),l.k0s(),l.j41(19,"clr-radio-container",5)(20,"label",6),l.EFF(21,"Gender"),l.k0s(),l.j41(22,"clr-radio-wrapper")(23,"label"),l.EFF(24,"Male"),l.k0s(),l.nrm(25,"input",8),l.k0s(),l.j41(26,"clr-radio-wrapper")(27,"label"),l.EFF(28,"Female"),l.k0s(),l.nrm(29,"input",8),l.k0s()(),l.j41(30,"clr-select-container",5)(31,"label",6),l.EFF(32,"Country"),l.k0s(),l.j41(33,"select",9)(34,"option"),l.EFF(35,"Austria"),l.k0s(),l.j41(36,"option"),l.EFF(37,"Germany"),l.k0s(),l.j41(38,"option"),l.EFF(39,"United States of America"),l.k0s()()(),l.j41(40,"clr-date-container",5)(41,"label",6),l.EFF(42,"Date of Birth"),l.k0s(),l.nrm(43,"input",10),l.k0s(),l.j41(44,"clr-input-container",5)(45,"label",6),l.EFF(46,"E-Mail"),l.k0s(),l.nrm(47,"input",7),l.k0s(),l.j41(48,"clr-input-container",5)(49,"label",6),l.EFF(50,"Phone"),l.k0s(),l.nrm(51,"input",7),l.k0s(),l.j41(52,"h4",4),l.EFF(53,"User Data"),l.k0s(),l.j41(54,"clr-input-container",5)(55,"label",6),l.EFF(56,"Username"),l.k0s(),l.nrm(57,"input",7),l.k0s(),l.j41(58,"clr-password-container",5)(59,"label",6),l.EFF(60,"Password"),l.k0s(),l.nrm(61,"input",11),l.k0s(),l.j41(62,"h4",4),l.EFF(63,"Other Data"),l.k0s(),l.j41(64,"clr-date-time-container",12)(65,"clr-date-container")(66,"label",6),l.EFF(67,"Start date & time"),l.k0s(),l.nrm(68,"input",13),l.k0s(),l.nrm(69,"input",14),l.k0s(),l.j41(70,"clr-input-container",5)(71,"label",6),l.EFF(72,"End time"),l.k0s(),l.nrm(73,"input",15),l.k0s(),l.j41(74,"clr-input-container",5)(75,"label",6),l.EFF(76,"Daily Donation"),l.k0s(),l.nrm(77,"input",16),l.k0s(),l.j41(78,"clr-checkbox-container",5)(79,"label",6),l.EFF(80,"Newsletter Subscriptions"),l.k0s(),l.j41(81,"clr-checkbox-wrapper")(82,"label"),l.EFF(83,"Weekly"),l.k0s(),l.nrm(84,"input",17),l.k0s(),l.j41(85,"clr-checkbox-wrapper")(86,"label"),l.EFF(87,"Monthly"),l.k0s(),l.nrm(88,"input",17),l.k0s()(),l.j41(89,"clr-textarea-container",5)(90,"label",6),l.EFF(91,"Comment / Feedback"),l.k0s(),l.nrm(92,"textarea",18),l.k0s()(),l.j41(93,"h3"),l.EFF(94,"Source Code"),l.k0s(),l.j41(95,"div",19),l.nrm(96,"clr-code-snippet",20),l.k0s()()()()),2&t&&(l.R7$(8),l.Y8G("clrLayout","horizontal"),l.R7$(69),l.Y8G("clrUnit","\u20ac"),l.R7$(19),l.Y8G("clrCode",k.codeExample))},dependencies:[c.aZZ,c.mDd,c.a3p,c.Jej,c.EjB,c.eAx,c.lnv,c._Qf,c.WF1,c.icl,c.Xu5,c.zhI,c.O2Q,c.fkp,c.cWI,c.cIb,c.Yf6,c.hTQ,c.eJj,c.nPv,c.ohH,c.y1j,u.T,e.lHB,e.PDb,e.Edi,e.tZE,e.NQI,e.b2Q,d.z],encapsulation:2})}return o})(),g=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=l.$C({type:o});static \u0275inj=l.G2t({imports:[s.MD,c.PuD,p.P,i.iI.forChild([{path:"",component:F,outlet:"fullpage"}]),e.P8i,m.u]})}return o})()}}]);