(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/en-tete.b9c40e83.png"},33:function(e,a,t){e.exports=t(62)},38:function(e,a,t){},39:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),m=(t(38),t(28)),o=t(6),i=(t(39),t(23)),s=t.n(i);var u={gridArea:"header"},d=function(){return r.a.createElement("header",{style:u,className:""},r.a.createElement("img",{className:"img-fluid",src:s.a,alt:"en-tete"}))},E=t(24),p=t(25),f=t(31),g=t(26),h=t(32),v=t(27),b=t.n(v),y=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(f.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={nom_ville:[]},t}return Object(h.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost/PHP_API/get_ville.php?nom_ville=Bejaia").then((function(a){return e.setState({nom_ville:a.data})}))}},{key:"render",value:function(){return r.a.createElement("footer",{style:N,className:""},r.a.createElement("ul",null,r.a.createElement("li",null,"Adresse : Akbou-Bejaia"),r.a.createElement("li",null,"Tel: 000000000"),r.a.createElement("li",null,"email : contact@infotoolssolutions.com"),r.a.createElement("li",null,this.state.nom_ville)))}}]),a}(r.a.Component),N={backgroundColor:"#DDDDDD",gridArea:"footer"},x=y;var w={gridArea:"pro"},C={gridArea:"user"},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card",style:w},r.a.createElement("div",{className:"card-header"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Je suis un professionnel"),r.a.createElement("p",{className:"card-text"},"Se connecter",r.a.createElement("br",null),"Editer mon profile ",r.a.createElement("br",null),"Gerer mon calendrier",r.a.createElement("br",null)),r.a.createElement("a",{href:"#",className:"btn btn-primary"},"Commencer"))),r.a.createElement("div",{className:"card",style:C},r.a.createElement("div",{className:"card-header"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Prendre un rendez-vous"),r.a.createElement("p",{className:"card-text"},"Se connecter ",r.a.createElement("br",null),"Trouver un professionnel",r.a.createElement("br",null),"Reserver un crenau",r.a.createElement("br",null)),r.a.createElement("a",{href:"#",className:"btn btn-primary"},"Commencer"))))};var k={width:"100%",position:"fixed",display:"grid",gridTemplateColumns:"5fr 1fr 1fr 1fr"},j={marginRight:"10px",marginLeft:"10px",gridColumnStart:"2",gridColumnEnd:"3"},D={marginRight:"10px",marginLeft:"10px",gridColumnStart:"3",gridColumnEnd:"4"},S={color:"blue",padding:"10px",paddingBottom:"0px",gridColumnStart:"4",gridColumnEnd:"5"},_=function(){return r.a.createElement("nav",{className:"navbar",style:k},r.a.createElement("a",{href:"/",className:"nav-item",style:j},"Home"),r.a.createElement("a",{href:"/Login",className:"nav-item",style:D},"Login"),r.a.createElement("button",{href:"#",className:"btn btn-default nav-item",style:S},r.a.createElement("i",{className:"material-icons"},"search")))};var B={margin:"auto",marginTop:"100px",width:"40%"},L=function(){return r.a.createElement("div",{style:B},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email Address or Username",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",class:"form-control",placeholder:"Password",required:!0})),r.a.createElement("button",{type:"submit",class:"btn btn-success"},"Connexion")))};var O={backgroundColor:"#ff0000",gridArea:"search"},P=function(){return r.a.createElement("div",{style:O},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Ville"})))};var T=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(d,null),r.a.createElement(P,null),r.a.createElement(A,null),r.a.createElement(x,null))}}),r.a.createElement(o.a,{path:"/Login",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(L,null))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.97f39877.chunk.js.map