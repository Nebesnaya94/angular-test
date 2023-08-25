"use strict";(self.webpackChunkangular_test=self.webpackChunkangular_test||[]).push([[953],{8953:(B,g,s)=>{s.r(g),s.d(g,{MainModule:()=>j});var M=s(6814),m=s(4828),h=s(830),r=s(5313),t=s(5879),x=s(4664),v=s(7398),P=s(6306),O=s(6232),y=s(9862);let p=(()=>{var n;class a{constructor(e){this.http=e,this.API_URL="https://jsonplaceholder.typicode.com",this.posts=(0,t.tdS)([])}getPosts(){return this.http.get(`${this.API_URL}/users`).pipe((0,x.w)(e=>{const i=e.reduce((c,d)=>(c[d.id]=d.username,c),{});return this.http.get(`${this.API_URL}/posts`).pipe((0,v.U)(c=>{const d=c.map(f=>({...f,userName:i[f.userId]}));return this.posts.set(d),d}))}),(0,P.K)(e=>(console.log("Service error:",e),O.E)))}}return(n=a).\u0275fac=function(e){return new(e||n)(t.LFG(y.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),a})();function _(n,a){1&n&&(t.TgZ(0,"th",10),t._uU(1,"No."),t.qZA())}const u=function(n){return["/details",n]};function Z(n,a){if(1&n&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&n){const o=a.$implicit;t.Q6J("routerLink",t.VKq(2,u,o.id)),t.xp6(1),t.hij(" ",null==o?null:o.id," ")}}function b(n,a){1&n&&(t.TgZ(0,"th",10),t._uU(1,"Author"),t.qZA())}function w(n,a){if(1&n&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&n){const o=a.$implicit;t.Q6J("routerLink",t.VKq(2,u,o.id)),t.xp6(1),t.hij(" ",null==o?null:o.userName," ")}}function A(n,a){1&n&&(t.TgZ(0,"th",10),t._uU(1,"Post"),t.qZA())}function T(n,a){if(1&n&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&n){const o=a.$implicit;t.Q6J("routerLink",t.VKq(2,u,o.id)),t.xp6(1),t.hij(" ",null==o?null:o.title," ")}}function D(n,a){1&n&&t._UZ(0,"tr",12)}function z(n,a){1&n&&t._UZ(0,"tr",13)}const N=function(){return[5,10,20]};let U=(()=>{var n;class a{constructor(e){this.service=e,this.posts=[],this.displayedColumns=["id","userName","title"]}ngOnInit(){const e=this.service.getPosts();this.postsData=e.subscribe(i=>{this.posts=i,this.dataSource=new r.by(this.posts),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.postsData.unsubscribe()}}return(n=a).\u0275fac=function(e){return new(e||n)(t.Y36(p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main"]],viewQuery:function(e,i){if(1&e&&t.Gf(h.NW,5),2&e){let c;t.iGM(c=t.CRH())&&(i.paginator=c.first)}},decls:14,vars:5,consts:[[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"routerLink",4,"matCellDef"],["matColumnDef","userName"],["matColumnDef","title"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of posts",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell","",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"table",1),t.ynx(2,2),t.YNc(3,_,2,0,"th",3),t.YNc(4,Z,2,4,"td",4),t.BQk(),t.ynx(5,5),t.YNc(6,b,2,0,"th",3),t.YNc(7,w,2,4,"td",4),t.BQk(),t.ynx(8,6),t.YNc(9,A,2,0,"th",3),t.YNc(10,T,2,4,"td",4),t.BQk(),t.YNc(11,D,1,0,"tr",7),t.YNc(12,z,1,0,"tr",8),t.qZA(),t._UZ(13,"mat-paginator",9),t.qZA()),2&e&&(t.xp6(1),t.Q6J("dataSource",i.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,N)))},dependencies:[m.rH,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,h.NW],styles:[".mat-elevation-z8[_ngcontent-%COMP%]{padding:30px;margin:0 auto;max-width:900px;box-shadow:none}.mat-elevation-z8[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]{min-width:0;width:100%;margin:30px auto 0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-elevation-z8[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__header-row[_ngcontent-%COMP%]{background:rgba(103,58,183,.075);font-weight:900}.mat-elevation-z8[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__row[_ngcontent-%COMP%]:hover{background:rgba(103,58,183,.03);cursor:pointer;font-weight:500}.mat-elevation-z8[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]   .mat-column-id[_ngcontent-%COMP%]{width:15%}.mat-elevation-z8[_ngcontent-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]   .mat-column-userName[_ngcontent-%COMP%]{width:25%}.mat-elevation-z8[_ngcontent-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]{min-width:0;margin:0 auto;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}"]}),a})();var S=s(2296),l=s(5195);let Q=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{item:"item"},decls:9,vars:4,template:function(e,i){1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA()(),t.TgZ(6,"mat-card-content")(7,"p"),t._uU(8),t.qZA()()()),2&e&&(t.xp6(3),t.AsE("",null==i.item?null:i.item.id,". ",null==i.item?null:i.item.title,""),t.xp6(2),t.hij("created by ",null==i.item?null:i.item.userName,""),t.xp6(3),t.Oqu(null==i.item?null:i.item.body))},dependencies:[l.a8,l.dn,l.dk,l.$j,l.n5],styles:[".mat-mdc-card[_ngcontent-%COMP%]{padding:10px 10px 20px}.mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]{margin-bottom:40px}.mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-title[_ngcontent-%COMP%]{font-size:30px;margin-bottom:10px}.mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-subtitle[_ngcontent-%COMP%]{font-size:16px;letter-spacing:1px}.mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%]{font-size:20px;display:flex;justify-content:flex-end}.mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex-basis:70%;text-align:right}"]}),a})(),R=(()=>{var n;class a{constructor(e,i,c){this.activatedRoute=e,this.service=i,this.router=c,this.detailsItem=void 0,this.detailsItems=[],(0,t.cEC)(()=>{this.detailsItems=this.service.posts()})}ngOnInit(){this.routerParams=this.activatedRoute.params.subscribe(i=>{this.detailsItems.length||this.router.navigate(["/main"]),this.detailsItem=this.detailsItems.find(c=>c.id==i.id)})}ngOnDestroy(){this.routerParams.unsubscribe()}}return(n=a).\u0275fac=function(e){return new(e||n)(t.Y36(m.gz),t.Y36(p),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-details"]],decls:4,vars:1,consts:[[1,"details-wrapper"],["routerLink","/main","mat-button",""],[3,"item"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2,"\u2190 Back"),t.qZA(),t._UZ(3,"app-card",2),t.qZA()),2&e&&(t.xp6(3),t.Q6J("item",i.detailsItem))},dependencies:[m.rH,S.lW,Q],styles:[".details-wrapper[_ngcontent-%COMP%]{max-width:700px;margin:30px auto 0;padding:20px}.details-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:10px}"]}),a})();var C=s(7753);const I=[{path:"main",component:U,canActivate:[C.a]},{path:"details/:id",component:R,canActivate:[C.a]}];let Y=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(I),m.Bz]}),a})();var L=s(6208);let j=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[p],imports:[M.ez,Y,L.m]}),a})()}}]);