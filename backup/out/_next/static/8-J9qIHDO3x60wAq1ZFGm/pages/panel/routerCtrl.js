(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"/iDT":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("h4VS"),r=n("q1tI"),o=n.n(r),i=n("vOnD"),l=o.a.createElement;function u(){var e=Object(a.a)(["\n  width: 100%;\n  max-width: 14rem;\n  height: auto;\n  margin-bottom: 1rem;\n  cursor: pointer;\n"]);return u=function(){return e},e}function c(){var e=Object(a.a)(["\n  background: #f5f5f5;\n  min-width: 30rem;\n  border-radius: 0.5rem;\n  min-height: 20rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  h6 {\n    font-size: 2.1rem;\n  }\n"]);return c=function(){return e},e}function s(){var e=Object(a.a)(["\n  font-size: 1.6rem;\n  margin-bottom: 1rem;\n"]);return s=function(){return e},e}var m=i.a.h1(s()),d=i.a.div(c()),f=i.a.img(u()),p=function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!t||11!=t[7].length)&&t[7]};function v(e){var t=e.title,n=e.id,a=e.height,r=e.width,i=e.type,u=e.purePlay,c="";if(n)if("youtube"==i){console.warn("===>",p(n));var s=p(n);c="https://www.youtube.com/embed/".concat(s)}else"twitchtv"==i&&(c="https://player.twitch.tv/?channel=".concat(n,"&html5"));return n?l(o.a.Fragment,null,!u&&l(m,null,t),l("iframe",{width:r,height:a,src:c,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):l(d,{style:{width:r,height:a}},l(f,{src:"./images/player-boy-painel.svg",alt:"beRapTV"}),l("h6",null,"Pr\xe9-visualizar transmiss\xe3o"))}},"9yWU":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F}));var a=n("o0o1"),r=n.n(a),o=n("ODXe"),i=n("h4VS"),l=n("q1tI"),u=n.n(l),c=n("vOnD"),s=n("tRbT"),m=n("r9w1"),d=n("Z3vd"),f=n("R/WZ"),p=n("1AYd"),v=n("cVXz"),b=n("ADg1"),g=n("kfFl"),h=n("+JwS"),w=n("EQI2"),y=n("++HY"),O=n("yv+Y"),S=(n("t+wi"),n("/iDT")),x=n("vDqi"),j=n.n(x),C=u.a.createElement;function k(){var e=Object(i.a)(["\n          background: #90111b !important;\n        "]);return k=function(){return e},e}function z(){var e=Object(i.a)(["\n  position: absolute;\n  top: 1rem;\n  ul {\n    display: flex;\n    li {\n      background: #ac1420;\n      ","\n      text-align: left;\n      padding: 1.5rem 1.5rem;\n      border-bottom: 0.1rem solid #ac1420;\n      list-style: none;\n      color: #fff;\n      transition: 0.5s;\n      cursor: pointer;\n      &:hover {\n        background: #90111b;\n      }\n    }\n  }\n\n  @media (max-width: 600px) {\n    top: 8rem;\n  }\n"]);return z=function(){return e},e}function P(){var e=Object(i.a)(["\n  margin-top: 1rem;\n  margin-bottom: -1rem;\n  @media (max-width: 600px) {\n    margin-top: 14rem;\n  }\n"]);return P=function(){return e},e}var T=Object(f.a)((function(e){return{formControl:{minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),q=c.a.h1(P()),E=c.a.nav(z(),(function(e){return e.selected&&css(k())}));function F(){var e=T(),t=Object(l.useState)(!1),n=t[0],a=t[1],i=Object(l.useState)("create"),c=i[0],f=i[1],x=Object(l.useState)("youtube"),k=x[0],z=x[1],P=Object(l.useState)("youtube"),F=P[0],I=P[1],B=Object(l.useState)(!1),N=(B[0],B[1],Object(l.useState)(!1)),D=N[0],_=N[1],R=Object(l.useState)(!1),V=R[0],J=R[1],W=u.a.useState(!1),A=Object(o.a)(W,2),X=A[0],Y=A[1],Z=function(){Y(!1)},M=function(e){z(e.target.value)},L=function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!t||11!=t[7].length)&&t[7]};Object(l.useEffect)((function(){console.log(JSON.parse(localStorage.info).idRoda),function(e){var t,n;r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return J(JSON.parse(localStorage.info).idRoda),t="https://berap.com.br/api-tv/pagina-live?id_roda=".concat(e,"}"),a.next=4,r.a.awrap(j.a.get(t));case 4:n=a.sent,console.warn("battle =>",n.data),1==n.data.liveAtiva&&_(!0),J(JSON.parse(localStorage.info).idRoda);case 9:case"end":return a.stop()}}),null,null,null,Promise)}(JSON.parse(localStorage.info).idRoda)}),[]);return C(u.a.Fragment,null,C(s.a,{container:!0,spacing:3},C(s.a,{item:!0,xs:12,sm:12},C(E,null,C("ul",null,C("li",{style:{background:"create"==c?"#90111b":"#ac1420",display:D?"none":"inline-block"},onClick:function(){return f("create")},selected:!0},"Cadastrar")))),D?C(u.a.Fragment,null,C(s.a,{item:!0,xs:12,sm:12},C(q,null,"Sua live j\xe1 foi criada e est\xe1 em andamento, deseja finalizar ela?")),C(s.a,{item:!0,xs:12,sm:12},C(d.a,{variant:"contained",color:"secondary",onClick:function(){Y(!0)}},"Finalizar live"))):C(u.a.Fragment,null,C(s.a,{item:!0,xs:12,sm:12},C(q,null,"Cadastrar novo confronto")),C(s.a,{item:!0,xs:12,sm:12},C(m.a,{required:!0,autoFocus:!0,id:"nameBattle",name:"nameBattle",label:"T\xedtulo",fullWidth:!0,autoComplete:"nBattle",variant:"outlined",onChange:function(){return I(event.target.value)},inputProps:{style:{fontSize:"1.6rem"}},InputLabelProps:{style:{fontSize:"1.6rem"}}})),C(s.a,{item:!0,xs:12,sm:2},C(b.a,{variant:"outlined",className:e.formControl},C(p.a,{htmlFor:"Origem",style:{fontSize:"1.6rem"}},"Origem"),C(v.a,{native:!0,value:k,onChange:M,label:"Origem",inputProps:{name:"Origem",id:"Origem"},style:{fontSize:"1.6rem"}},C("option",{value:"youtube"},"Youtube"),C("option",{value:"twitchtv"},"Twitch TV")))),C(s.a,{item:!0,xs:12,sm:10},C(m.a,{required:!0,id:"idChannel",name:"idChannel",label:"youtube"==k?"Url da transmiss\xe3o no Youtube":"Nome do canal TwitchTV",fullWidth:!0,autoComplete:"dBattle",variant:"outlined",onChange:function(e){return a(e.target.value)},inputProps:{style:{fontSize:"1.6rem"}},InputLabelProps:{style:{fontSize:"1.6rem"}}})),C(s.a,{item:!0,xs:12,sm:6},C(S.a,{title:F,id:n,height:"315",width:"100%",type:k,purePlay:!0})),C(s.a,{item:!0,xs:12,sm:6},C(d.a,{variant:"contained",color:"secondary",onClick:function(){return function(e,t){var a,o,i;return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L(n),o="https://berap.com.br/api-tv/cria-live?id_roda=".concat(V,"&embed=").concat(a,"&titulo=").concat(F),e.next=4,r.a.awrap(j.a.get(o));case 4:i=e.sent,console.warn("response =>",i),_(!0);case 7:case"end":return e.stop()}}),null,null,null,Promise)}()}},"Criar live")))),C(g.a,{open:X,onClose:Z,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},C(O.a,{id:"alert-dialog-title"},"Deseja realmente finalizar a live?"),C(w.a,null,C(y.a,{id:"alert-dialog-description"},"Ao finalizar a live as pessoas ser\xe3o avisadas.")),C(h.a,null,C(d.a,{onClick:Z,color:"primary"},"Cancelar"),C(d.a,{onClick:function(){var e,t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://berap.com.br/api-tv/encerra-live?id_roda=".concat(V),n.next=3,r.a.awrap(j.a.get(e));case 3:t=n.sent,console.log("resp finish",t),Z(),_(!1);case 7:case"end":return n.stop()}}),null,null,null,Promise)},color:"primary",autoFocus:!0},"Confirmar"))))}},McNX:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n("o0o1"),r=n.n(a),o=n("h4VS"),i=n("q1tI"),l=n.n(i),u=n("vOnD"),c=n("tRbT"),s=n("r9w1"),m=n("Z3vd"),d=n("iae6"),f=n("vDqi"),p=n.n(f),v=l.a.createElement;function b(){var e=Object(o.a)(["\n  width: 20rem;\n  height: auto;\n  margin-bottom: 1rem;\n"]);return b=function(){return e},e}function g(){var e=Object(o.a)(["\n  margin-top: 1rem;\n  margin-bottom: -1rem;\n  @media (max-width: 600px) {\n    margin-top: 14rem;\n  }\n"]);return g=function(){return e},e}u.a.h1(g());var h=u.a.img(b());function w(){var e=Object(i.useState)(""),t=e[0],n=e[1],a=Object(i.useState)(!1),o=a[0],u=a[1];Object(i.useEffect)((function(){n(localStorage.nameBattle)}),[]);return v(l.a.Fragment,null,v(c.a,{item:!0,xs:12,sm:4},v(h,{src:"/images/group.svg"})),v(c.a,{item:!0,xs:12,sm:4},v(s.a,{required:!0,autoFocus:!0,id:"nameBattle",name:"nameBattle",label:"Nome da sua roda de rima",value:t,fullWidth:!0,autoComplete:"nBattle",onChange:function(){return n(event.target.value)},inputProps:{style:{fontSize:"1.6rem"}},InputLabelProps:{style:{fontSize:"1.6rem"}}})),v(c.a,{item:!0,xs:12,sm:2},o?v(d.a,{color:"secondary"}):v(m.a,{variant:"contained",onClick:function(){return function(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return u(!0),console.warn("alter name",t),localStorage.setItem("nameBattle",t),e="https://berap.com.br/api-tv/atualiza-roda?id=1&nome_roda=".concat(t),a.next=6,r.a.awrap(p.a.get(e));case 6:n=a.sent,console.warn("response =>",n),setTimeout((function(){u(!1),location.reload()}),2e3);case 9:case"end":return a.stop()}}),null,null,null,Promise)}()},color:"primary",size:"large"},"Alterar")))}},OESq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n("q1tI"),r=n.n(a).a.createElement;function o(){return r("div",null,r("h1",null,"aaaaaaaaaa"))}},wZuI:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("q1tI"),r=n.n(a),o=n("nOHt"),i=n("9yWU"),l=n("McNX"),u=n("OESq"),c=r.a.createElement;function s(){var e=Object(o.useRouter)().query.page,t=c(i.default,null);switch(e){case"CreateBattle":t=c(i.default,null);break;case"myAccount":t=c(l.default,null);break;case"controlVotation":t=c(u.default,null);break;case"logout":t=c("h1",null,"Sair :( ")}return t}},"x+M1":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/panel/routerCtrl",function(){return n("wZuI")}])}},[["x+M1",0,1,12,2,4,3,5,6,8,7,9,10,11,13]]]);