"use strict";(self.webpackChunkafricauniontechfront=self.webpackChunkafricauniontechfront||[]).push([[703,946],{5066:(R,_,i)=>{i.d(_,{L:()=>n});var e=i(4893),u=i(2846),s=i(1598),f=i(9808);function t(a,d){if(1&a){const l=e.EpF();e.TgZ(0,"a",4),e.NdJ("click",function(){e.CHM(l);const E=e.oxw();return E.redirect(E.menu.url)}),e._UZ(1,"img",5),e.TgZ(2,"h3",6),e._uU(3),e.qZA()()}if(2&a){const l=e.oxw();e.xp6(1),e.Tol(l.menu.logo?"cover-img":"contain-img"),e.Q6J("src",l.menu.logo?l.menu.logo:"/assets/"+l.menu.name+".png",e.LSH),e.xp6(2),e.hij(" ",l.menu.name," ")}}const p=function(a){return[a]};function o(a,d){if(1&a&&(e.TgZ(0,"a",7),e._UZ(1,"img",5),e.TgZ(2,"h3",6),e._uU(3),e.qZA()()),2&a){const l=e.oxw();e.Q6J("routerLink",e.VKq(5,p,l.menu.url)),e.xp6(1),e.Tol(l.menu.logo?"cover-img":"contain-img"),e.s9C("src",l.menu.logo?l.menu.logo:"/assets/logo.png",e.LSH),e.xp6(2),e.hij(" ",l.menu.name," ")}}let n=(()=>{class a{constructor(l,h){this.appConfig=l,this.router=h,this.token=this.appConfig.getItemFromSessionStorage("token")}ngOnInit(){}redirect(l){console.log("lien active ",l);const h=`${l}?url=${this.getApplicationUrl()}&tkn=${this.token}`;console.log("dest ",h),window.location.href=h}getApplicationUrl(){return window.location.origin}}return a.\u0275fac=function(l){return new(l||a)(e.Y36(u._),e.Y36(s.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-societies"]],inputs:{menu:"menu"},decls:4,vars:2,consts:[[1,"card-exploration","text-centre","text-white","d-flex","py-2","col-sm-12","justify-content-center"],[1,"py-3","text-center"],["target","_blank",3,"click",4,"ngIf"],[3,"routerLink",4,"ngIf"],["target","_blank",3,"click"],["alt","","width","100","height","100",3,"src"],[1,"mt-3"],[3,"routerLink"]],template:function(l,h){1&l&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,t,4,4,"a",2),e.YNc(3,o,4,7,"a",3),e.qZA()()),2&l&&(e.xp6(2),e.Q6J("ngIf",!h.menu.url.includes("/app/")),e.xp6(1),e.Q6J("ngIf",h.menu.url.includes("/app/")))},directives:[f.O5,s.yS],styles:['@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap";.card-exploration[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif!important;border-radius:20px;color:#000!important;transform:scale(1);transition-duration:.9s}.card-exploration[_ngcontent-%COMP%]:hover{transition-duration:.7s;cursor:pointer;box-shadow:0 10px 20px #0090e440;background-color:#3f7652;color:#fff!important;overflow:hidden;transform:scale(1.2)}.card-exploration[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:12px;font-weight:400}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.cover-img[_ngcontent-%COMP%]{object-fit:cover;text-align:center;padding:8%;border-radius:20px;box-shadow:0 0 4px #0005;background-color:#fff}.contain-img[_ngcontent-%COMP%]{object-fit:contain;text-align:center;padding:4%;border-radius:20px;box-shadow:0 0 10px #00000a22;background-color:#ffffffd3}']}),a})()},4793:(R,_,i)=>{i.d(_,{N:()=>n});var e=i(9808),u=i(9444),s=i(1598),f=i(5066),t=i(4893);const p=[{path:"",component:f.L}];let o=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[s.Bz.forChild(p)],s.Bz]}),a})(),n=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[e.ez,u.uH,o]]}),a})()},5703:(R,_,i)=>{i.r(_),i.d(_,{SystemModule:()=>T});var e=i(9808),u=i(1598),s=i(801),f=i(8186),t=i(4893),p=i(2846),o=i(2308),n=i(946),a=i(9444);function d(r,m){if(1&r){const c=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(c);const S=t.oxw().$implicit;return t.oxw().activeApplication(S.id)}),t._uU(1," Activer "),t.qZA()}}function l(r,m){if(1&r){const c=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(c);const S=t.oxw().$implicit;return t.oxw().desactiveApplication(S.id)}),t._uU(1," D\xe9sactiver "),t.qZA()}}function h(r,m){if(1&r&&(t.TgZ(0,"tr")(1,"td",14),t._uU(2),t.qZA(),t.TgZ(3,"td",14),t._UZ(4,"img",15),t.qZA(),t.TgZ(5,"td",14),t._uU(6),t.qZA(),t.TgZ(7,"td",14),t._uU(8),t.qZA(),t.TgZ(9,"td",14),t._uU(10),t.qZA(),t.TgZ(11,"td",14),t._uU(12),t.qZA(),t.TgZ(13,"td",14),t.YNc(14,d,2,0,"button",16),t.YNc(15,l,2,0,"button",17),t.qZA()()),2&r){const c=m.$implicit,g=m.index;t.xp6(2),t.Oqu(g+1),t.xp6(4),t.Oqu(c.name),t.xp6(2),t.Oqu(c.description?c.description:"-"),t.xp6(2),t.Oqu(c.url?c.url:"-"),t.xp6(2),t.Oqu(c.enabled?"Activ\xe9":"D\xe9sactiv\xe9"),t.xp6(2),t.Q6J("ngIf",!c.enabled),t.xp6(1),t.Q6J("ngIf",c.enabled)}}const E=function(){return["/app/settings/config-system"]};let v=(()=>{class r{constructor(c,g,S,w){this.route=c,this.appConfig=g,this.dialog=S,this.configService=w,this.faSearch=s.wn1,this.faBack=s.EyR,this.applications=[]}ngOnInit(){this.getApplicationList()}getApplicationList(){this.appConfig.onStartWaiting(),this.configService.find$("application/list").subscribe({next:c=>{this.appConfig.onStopWaiting(),this.applications=c},error:c=>{this.appConfig.onStopWaiting(),f.H.openInfoDialog(this.dialog,c)}})}activeApplication(c){this.appConfig.onStartWaiting(),this.configService.find$(`application/enable/${c}`).subscribe({next:g=>{this.appConfig.onStopWaiting(),f.H.openInfoDialog(this.dialog,"Application activ\xe9e avec succ\xe8s"),this.getApplicationList()},error:g=>{this.appConfig.onStopWaiting(),f.H.openInfoDialog(this.dialog,g)}})}desactiveApplication(c){this.appConfig.onStartWaiting(),this.configService.find$(`application/disable/${c}`).subscribe({next:g=>{this.appConfig.onStopWaiting(),f.H.openInfoDialog(this.dialog,"Application d\xe9sactiv\xe9e avec succ\xe8s"),this.getApplicationList()},error:g=>{this.appConfig.onStopWaiting(),f.H.openInfoDialog(this.dialog,g)}})}}return r.\u0275fac=function(c){return new(c||r)(t.Y36(u.gz),t.Y36(p._),t.Y36(o.uw),t.Y36(n.E))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-application"]],decls:32,vars:5,consts:[[1,"container"],[1,"btn","btn-secondary","rounded-pill","mx-2","p-2","ms-0",3,"routerLink"],[1,"text-white",3,"icon"],[1,"text-center"],["src","/assets/softwareLogo.png","alt","","width","30","height","30",1,"cover-img","rounded-circle"],[1,"bg-white","px-4","py-4","mt-3","shadow-custom",2,"border-radius","17px"],[1,"d-flex","justify-content-end","mb-3"],[1,"d-flex","col-sm-4","position-relative"],[1,"mt-2"],[1,"text-muted",2,"font-size","15px","position","absolute","left","1rem",3,"icon"],["type","search","placeholder","Rechercher","aria-label","Search",1,"form-control","ps-5"],[1,"table","mt-4"],[1,"table-audev"],[4,"ngFor","ngForOf"],[1,"align-middle"],["src","assets/logo.png","width","50"],["class","btn btn-success rounded-pill mx-2 p-2  ms-0",3,"click",4,"ngIf"],["class","btn btn-danger rounded-pill mx-2 p-2  ms-0",3,"click",4,"ngIf"],[1,"btn","btn-success","rounded-pill","mx-2","p-2","ms-0",3,"click"],[1,"btn","btn-danger","rounded-pill","mx-2","p-2","ms-0",3,"click"]],template:function(c,g){1&c&&(t.TgZ(0,"div",0)(1,"button",1),t._UZ(2,"fa-icon",2),t._uU(3," Retour "),t.qZA(),t.TgZ(4,"h3",3),t._UZ(5,"img",4),t._uU(6," APPLICATION "),t.qZA()(),t.TgZ(7,"div",0)(8,"div",5)(9,"div",6)(10,"div",7)(11,"i",8),t._UZ(12,"fa-icon",9),t.qZA(),t._UZ(13,"input",10),t.qZA()(),t.TgZ(14,"table",11)(15,"thead")(16,"tr",12)(17,"th"),t._uU(18,"#"),t.qZA(),t._UZ(19,"th"),t.TgZ(20,"th"),t._uU(21,"Nom"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Description"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Url"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Status"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Actions"),t.qZA()()(),t.TgZ(30,"tbody"),t.YNc(31,h,16,7,"tr",13),t.qZA()()()()),2&c&&(t.xp6(1),t.Q6J("routerLink",t.DdM(4,E)),t.xp6(1),t.Q6J("icon",g.faBack),t.xp6(10),t.Q6J("icon",g.faSearch),t.xp6(19),t.Q6J("ngForOf",g.applications))},directives:[u.rH,a.BN,e.sg,e.O5],styles:[""]}),r})();var A=i(5066);function I(r,m){1&r&&t._UZ(0,"app-societies",9),2&r&&t.Q6J("menu",m.$implicit)}const O=function(){return["/app/settings-menu"]},x=[{path:"",component:(()=>{class r{constructor(){this.faBack=s.acZ,this.applications=[{name:"APPLICATION",logo:"/assets/softwareLogo.png",url:"/app/settings/config-system/application"},{name:"ORGANISATION",logo:"/assets/organisation.png",url:"/app/settings/config-system/organisation/list"},{name:"CONFIGURATION GEOGRAPHIQUE",logo:"/assets/mapMonde.png",url:"/app/settings/config-system/configuration-geographique/liste-pays"}]}ngOnInit(){}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-system"]],decls:11,vars:4,consts:[[1,"container"],[1,"btn","btn-secondary","rounded-pill","mx-2","p-2","ms-0",3,"routerLink"],[1,"text-white",3,"icon"],[1,"text-center"],["src","/assets/configSystem.png","alt","","width","30","height","30",1,"cover-img","rounded-circle"],[1,"row","mt-4"],[1,"col-12"],[1,"d-flex","justify-content-center","flex-wrap","col-sm-12","position-relative","px-5"],["style","width: 12%;","class","me-3 my-2",3,"menu",4,"ngFor","ngForOf"],[1,"me-3","my-2",2,"width","12%",3,"menu"]],template:function(c,g){1&c&&(t.TgZ(0,"div",0)(1,"button",1),t._UZ(2,"fa-icon",2),t._uU(3," Retour "),t.qZA(),t.TgZ(4,"h3",3),t._UZ(5,"img",4),t._uU(6," CONFIGURATION SYSTEME "),t.qZA(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7),t.YNc(10,I,1,1,"app-societies",8),t.qZA()()()()),2&c&&(t.xp6(1),t.Q6J("routerLink",t.DdM(3,O)),t.xp6(1),t.Q6J("icon",g.faBack),t.xp6(8),t.Q6J("ngForOf",g.applications))},directives:[u.rH,a.BN,e.sg,A.L],styles:[""]}),r})()},{path:"application",component:v},{path:"configuration-geographique",loadChildren:()=>i.e(15).then(i.bind(i,5015)).then(r=>r.ConfigGeoModule)}];let C=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[u.Bz.forChild(x)],u.Bz]}),r})();var y=i(4793);let T=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[e.ez,C,y.N,a.uH]]}),r})()},7957:(R,_,i)=>{i.d(_,{_:()=>f});var e=i(262),u=i(4004),s=i(7111);class f{constructor(p,o,n,a){this._http=p,this._base=o,this._router=n,this._dialog=a}intercept(p,o){const n=localStorage.getItem("browser"),a=localStorage.getItem("os"),d=localStorage.getItem("ipAddress"),l=localStorage.getItem("longitude"),h=localStorage.getItem("latitude"),E=localStorage.getItem("Isp"),v=localStorage.getItem("City"),A=localStorage.getItem("Country"),I=p.clone({setHeaders:{Browser:n||"",OS:a||"","IP-Address":d||"",Longitude:l||"",Latitude:h||"",Isp:E||"",City:v||"",Country:A||""}});return console.log("ddd :",a),o.handle(I).pipe((0,e.K)(O=>{throw 0!==O.status||401!==O.status?(this._router.navigate(["/login"],{replaceUrl:!0}),this._dialog.closeAll(),s.G.SESSION_EXPIRED):s.G.NETWORK_ERROR}))}putFind$(p){return this._http.put(this._base+`/${p}`,"").pipe((0,u.U)(o=>{if("400"==o.status.code)throw o.status.message;if("500"==o.status.code)throw s.G.NETWORK_ERROR;if("401"==o.status.code)throw s.G.SESSION_EXPIRED;return o.response}),(0,e.K)(o=>{throw"string"!=typeof o?0==o.status||200==o.status||401==o.status?(this._router.navigate(["/login"],{replaceUrl:!0}),this._dialog.closeAll(),s.G.SESSION_EXPIRED):s.G.NETWORK_ERROR:o}))}postFind$(p){return this._http.post(this._base+`/${p}`,"").pipe((0,u.U)(o=>{if("400"==o.status.code)throw o.status.message;if("500"==o.status.code)throw s.G.NETWORK_ERROR;if("401"==o.status.code)throw s.G.SESSION_EXPIRED;return o.response}),(0,e.K)(o=>{throw"string"!=typeof o?0==o.status||200==o.status||401==o.status?(this._router.navigate(["/login"],{replaceUrl:!0}),this._dialog.closeAll(),s.G.SESSION_EXPIRED):s.G.NETWORK_ERROR:o}))}find$(p){return this._http.get(this._base+`/${p}`).pipe((0,u.U)(o=>{switch(o.status.code){case"400":case"":default:throw o.status.message;case"500":throw s.G.NETWORK_ERROR;case"401":throw s.G.SESSION_EXPIRED;case"200":return o.response}}),(0,e.K)(o=>{throw"string"!=typeof o?0==o.status||200==o.status||401==o.status?(this._router.navigate(["/login"],{replaceUrl:!0}),this._dialog.closeAll(),s.G.SESSION_EXPIRED):s.G.NETWORK_ERROR:o}))}save$(p,o){return this._http.post(this._base+`/${o}`,p).pipe((0,u.U)(n=>{switch(n.status.code){case"400":case"":case"418":default:throw n.status.message;case"500":throw s.G.NETWORK_ERROR;case"401":throw s.G.SESSION_EXPIRED;case"200":return n.response}}),(0,e.K)(n=>{throw"string"!=typeof n?0==n.status||200==n.status||401==n.status?(this._router.navigate(["/login"],{replaceUrl:!0}),this._dialog.closeAll(),s.G.SESSION_EXPIRED):s.G.NETWORK_ERROR:n}))}update$(p,o){return this._http.put(this._base+`/${o}`,p).pipe((0,u.U)(n=>{switch(n.status.code){case"400":case"":default:throw n.status.message;case"500":throw s.G.NETWORK_ERROR;case"401":throw s.G.SESSION_EXPIRED;case"200":return n.response}}),(0,e.K)(n=>{throw"string"!=typeof n?0==n.status||200==n.status||401==n.status?(this._router.navigate(["/login"],{replaceUrl:!0}),this._dialog.closeAll(),s.G.SESSION_EXPIRED):s.G.NETWORK_ERROR:n}))}delete$(p){return this._http.delete(this._base+`/${p}`).pipe((0,u.U)(o=>{switch(o.status.code){case"400":case"":default:throw o.status.message;case"500":throw s.G.NETWORK_ERROR;case"401":throw s.G.SESSION_EXPIRED;case"200":return o.response}}),(0,e.K)(o=>{throw"string"!=typeof o?0==o.status||200==o.status||401==o.status?(this._router.navigate(["/login"],{replaceUrl:!0}),this._dialog.closeAll(),s.G.SESSION_EXPIRED):s.G.NETWORK_ERROR:o}))}patch$(p,o){return this._http.patch(this._base+`/${o}`,p).pipe((0,u.U)(n=>{switch(n.status.code){case"400":case"":default:throw n.status.message;case"500":throw s.G.NETWORK_ERROR;case"401":throw s.G.SESSION_EXPIRED;case"200":return n.response}}),(0,e.K)(n=>{throw"string"!=typeof n?0==n.status?(this._router.navigate(["/login"],{replaceUrl:!0}),this._dialog.closeAll(),s.G.SESSION_EXPIRED):s.G.NETWORK_ERROR:n}))}}},946:(R,_,i)=>{i.d(_,{E:()=>o});var e=i(2340),u=i(7957),s=i(4893),f=i(520),t=i(1598),p=i(2308);let o=(()=>{class n extends u._{constructor(d,l,h){super(d,`${e.N.baseUrl}/config`,l,h),this._http=d,this._router=l,this._dialog=h}}return n.\u0275fac=function(d){return new(d||n)(s.LFG(f.eN),s.LFG(t.F0),s.LFG(p.uw))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);