"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[391],{38532:(C,r,o)=>{o.r(r),o.d(r,{GetStartedModule:()=>A});var a=o(69808),i=o(19061),l=o(24603),t=o(31223),p=o(71884);let g=(()=>{class e{constructor(){this.nodeImports='\n"styles": [\n      ... clarity styles\n      "node_modules/@porscheinformatik/clr-addons/styles/clr-addons-phs.min.css",\n      ... any other styles\n]\n',this.htmlImports='\n<link rel="stylesheet" href="path/to/node_modules/@porscheinformatik/clr-addons/styles/clr-addons-phs.min.css">\n',this.phsTheme='\n<html cds-theme="phs">\n',this.ngModuleExample='\nimport { NgModule } from "@angular/core";\nimport { ClrAddonsModule } from \'@porscheinformatik/clr-addons\';\nimport { AppComponent } from "./app.component";\n\n@NgModule({\n    imports: [\n        ClrAddonsModule,\n        ...\n     ],\n     declarations: [ AppComponent ],\n     bootstrap: [ AppComponent ]\n})\nexport class AppModule { }\n'}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["get-started"]],hostVars:2,hostBindings:function(n,d){2&n&&t.ekj("content-area",!0)},decls:75,vars:7,consts:[[1,"dox-content"],["id","introduction"],["href","https://clarity.design/"],["id","howToUse"],["id","installclarity"],["href","https://clarity.design/documentation/get-started"],["id","installing"],["clrLanguage","bash",3,"clrCode"],["id","styles"],[1,"clr-code"],["clrLanguage","json",3,"clrCode"],["clrLanguage","html",3,"clrCode"],["id","theme"],["id","angular"],["clrLanguage","typescript",3,"clrCode"],["id","run-your-app"],["id","update"],["id","contribute_guidelines"],["href","https://confluence.porscheinformatik.com/confluence/display/PSACNG/Contribution+to+Clarity-Addons"],[2,"visibility","hidden","height","80vh"]],template:function(n,d){1&n&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2,"Clarity-Addons"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Project Clarity-Addons is an addon to "),t.TgZ(5,"a",2),t._uU(6,"Clarity"),t.qZA()(),t.TgZ(7,"p"),t._uU(8,"It contains additional components and patterns which are not in scope of Clarity and also provides customized themes. "),t.qZA(),t.TgZ(9,"h2",3),t._uU(10,"How to Use Clarity-Addons"),t.qZA(),t.TgZ(11,"h4",4),t._uU(12,"Step 0: Install Clarity"),t.qZA(),t.TgZ(13,"p"),t._uU(14,"Prerequisite ist an installed clarity package. See "),t.TgZ(15,"a",5),t._uU(16,"Clarity Get Started"),t.qZA()(),t.TgZ(17,"h4",6),t._uU(18,"Step 1: Install Clarity-Addons package"),t.qZA(),t.TgZ(19,"p"),t._UZ(20,"clr-code-snippet",7),t.qZA(),t.TgZ(21,"h5",8),t._uU(22,"Step 2: Adding customized styles"),t.qZA(),t.TgZ(23,"p"),t._uU(24,"You can find the component styles and PHS theme in "),t.TgZ(25,"code",9),t._uU(26,"node_modules/@porscheinformatik/clr-addons/styles/"),t.qZA(),t._uU(27,"."),t.qZA(),t.TgZ(28,"p"),t._uU(29,"If you are using the Angular CLI, you need to add the style to "),t.TgZ(30,"code",9),t._uU(31,".angular.json"),t.qZA(),t._uU(32," file."),t.qZA(),t.TgZ(33,"p"),t._uU(34,"Find the "),t.TgZ(35,"code",9),t._uU(36,"styles"),t.qZA(),t._uU(37," arrays and add the following: "),t._UZ(38,"clr-code-snippet",10),t.qZA(),t._UZ(39,"p"),t.TgZ(40,"p"),t._uU(41,"If you are not using the CLI, you'll need to add the files listed above to your build tooling or you could also put them in the head of the index.html file like: "),t._UZ(42,"clr-code-snippet",11),t.qZA(),t._UZ(43,"p"),t.TgZ(44,"h6",12),t._uU(45,"Activate PHS theme"),t.qZA(),t.TgZ(46,"p"),t._uU(47,"To activate the PHS theme you need to add the attribute "),t.TgZ(48,"code",9),t._uU(49,'cds-theme="phs"'),t.qZA(),t._uU(50," to the HTML tag "),t._UZ(51,"clr-code-snippet",11),t.qZA(),t.TgZ(52,"h5",13),t._uU(53,"Step 3: Add Clarity-Addons to Angular application"),t.qZA(),t.TgZ(54,"p"),t._uU(55,"Import the ClarityAddonsModule into your Angular application's module. Your application's main module might look like this: "),t._UZ(56,"clr-code-snippet",14),t.qZA(),t.TgZ(57,"h4",15),t._uU(58,"Step 4: Run Your App"),t.qZA(),t._UZ(59,"clr-code-snippet",7),t.TgZ(60,"h4",16),t._uU(61,"Step 5: Update Clarity-Addons"),t.qZA(),t.TgZ(62,"p"),t._uU(63,"In order to keep up with Clarity-Addons, you can use ng update to automatically update Clarity-Addons to the latest version in your Angular project."),t.qZA(),t._UZ(64,"clr-code-snippet",7),t.TgZ(65,"h2",17),t._uU(66,"Contributing to Clarity-Addons"),t.qZA(),t.TgZ(67,"p"),t._uU(68,"The Clarity-Addons team welcomes contributions from the community. Same rules apply as for Clarity Contributions. "),t.qZA(),t.TgZ(69,"p"),t._uU(70,"Internal Porsche Informatik Guidelines can be found here: "),t.TgZ(71,"a",18),t._uU(72,"Porsche Informatik Guidelines"),t.qZA()(),t.TgZ(73,"div",19),t._uU(74,"This is a spacer to force sidenav highlighting on scroll"),t.qZA()()),2&n&&(t.xp6(20),t.Q6J("clrCode","npm install @porscheinformatik/clr-addons --save"),t.xp6(18),t.Q6J("clrCode",d.nodeImports),t.xp6(4),t.Q6J("clrCode",d.htmlImports),t.xp6(9),t.Q6J("clrCode",d.phsTheme),t.xp6(5),t.Q6J("clrCode",d.ngModuleExample),t.xp6(3),t.Q6J("clrCode","npm start"),t.xp6(5),t.Q6J("clrCode","ng update @porscheinformatik/clr-addons"))},directives:[p.O],encapsulation:2}),e})();var Z=o(65909);const y=[{path:"",component:g,data:{browserTitle:"Get Started"}}];let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[],imports:[[a.ez,i.K6A,l.A,Z.Bz.forChild(y)]]}),e})()}}]);