(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/coca.8734307c.jpg"},19:function(e,t,a){e.exports=a.p+"static/media/carambar.dee7fd4c.jpg"},20:function(e,t,a){e.exports=a.p+"static/media/croco.3844d4a8.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/schtroumpfs.16eb3175.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/sucette.e305c9ca.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/dragibus.70a81973.jpg"},39:function(e,t,a){e.exports=a(86)},44:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},56:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(13),i=a.n(s),o=(a(44),a(31),a(3)),c=a(4),l=a(6),u=a(5),d=a(7),m=(a(47),a(88)),p=a(89),h=a(54),g=a(90),v=a(91),f=(a(49),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).isGiver=function(t){e.props.history.push("/giver"),e.setState({giver:!0})},e.state={giver:!1},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement("h1",{className:"title"},"Candy Hunter's"),r.a.createElement("p",{className:"textHome"},r.a.createElement("strong",null,"Vous \xeates un enfant ? Vous cherchez des bonbons ?")," On vous donne une carte au tr\xe9sor pour les r\xe9cup\xe9rer \xe0 coup s\xfbr !"),r.a.createElement(g.a,{to:"/receiver",className:"button"},"Je cherche des bonbons"),r.a.createElement("p",{className:"textHome"},r.a.createElement("strong",null,"Vous \xeates un adulte ?")," Venez renseigner votre disponibilit\xe9 et vos bonbons afin d'accueillir les monstres du quartier !"),r.a.createElement(g.a,{onClick:this.isGiver,to:"/hackatonHalloween/giver",className:"button"},"Je donne des bonbons"))}}]),t}(n.Component)),y=Object(v.a)(f),b=a(12),E=a(27),N=(a(56),a(11)),C=a(18),w=a.n(C),k=a(19),j=a.n(k),O=a(20),S=a.n(O),P=a(21),M=a.n(P),A=a(22),D=a.n(A),I=a(23),U=a.n(I),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).clickCandy=function(e){!1===a.state[e].selected&&a.checkDistance(e)?a.setState(Object(b.a)({},e,{selected:!a.state[e].selected,style:Object(E.a)({},a.state[e].style,{opacity:"1"})})):a.setState(Object(b.a)({},e,{selected:!a.state[e].selected,style:Object(E.a)({},a.state[e].style,{opacity:"0.7"})}))},a.checkDistance=function(e){for(var t=0;t<a.props.giversArray.length;t++)if(a.calculateDistance(a.props.receiverCoordinates,a.props.giverCoordinates[t])<400&&a.props.giversArray[t].candy[e]&&a.props.giversArray[t].available)return!0;return!1},a.calculateDistance=function(e,t){var a=e.lat*(Math.PI/180),n=t.lat*(Math.PI/180),r=Math.abs(t.lat-e.lat)*(Math.PI/180),s=Math.abs(t.lng-e.lng)*(Math.PI/180),i=Math.sin(r/2)*Math.sin(r/2)+Math.cos(a)*Math.cos(n)*Math.sin(s/2)*Math.sin(s/2);return 6371e3*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))},a.maPosition=function(e){a.setState({userPosition:{lat:e.coords.latitude,lng:e.coords.longitude}})},a.state={coca:{selected:!1,style:{opacity:"0.7",backgroundImage:"url(".concat(w.a,")"),top:window.innerHeight-310}},carambar:{selected:!1,style:{opacity:"0.7",backgroundImage:"url(".concat(j.a,")"),top:window.innerHeight-310}},croco:{selected:!1,style:{opacity:"0.7",backgroundImage:"url(".concat(S.a,")"),top:window.innerHeight-310}},schtroumpfs:{selected:!1,style:{opacity:"0.7",backgroundImage:"url(".concat(M.a,")"),top:window.innerHeight-310}},sucette:{selected:!1,style:{opacity:"0.7",backgroundImage:"url(".concat(D.a,")"),top:window.innerHeight-310}},dragibus:{selected:!1,style:{opacity:"0.7",backgroundImage:"url(".concat(U.a,")"),top:window.innerHeight-310}}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){navigator.geolocation&&navigator.geolocation.watchPosition(this.maPosition)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(N.c,{className:"container"},r.a.createElement(N.d,{className:"container1"},r.a.createElement(N.b,{xs:"3",md:{size:1,offset:1}},r.a.createElement("div",{onClick:function(){return e.clickCandy("coca")},className:"candy position1",style:this.state.coca.style})),r.a.createElement(N.b,{xs:"3",md:{size:1,offset:1}},r.a.createElement("div",{onClick:function(){return e.clickCandy("carambar")},className:"candy position2",style:this.state.carambar.style})),r.a.createElement(N.b,{xs:"3",md:{size:1,offset:1}},r.a.createElement("div",{onClick:function(){return e.clickCandy("croco")},className:"candy position3",style:this.state.croco.style}))),r.a.createElement(N.d,{className:"container2"},r.a.createElement(N.b,{xs:"3",md:{size:1,offset:1}},r.a.createElement("div",{onClick:function(){return e.clickCandy("schtroumpfs")},className:"candy position4",style:this.state.schtroumpfs.style})),r.a.createElement(N.b,{xs:"3",md:{size:1,offset:1}},r.a.createElement("div",{onClick:function(){return e.clickCandy("sucette")},className:"candy position5",style:this.state.sucette.style})),r.a.createElement(N.b,{xs:"3",md:{size:1,offset:1}},r.a.createElement("div",{onClick:function(){return e.clickCandy("dragibus")},className:"candy position6",style:this.state.dragibus.style})))))}}]),t}(n.Component),J=a(14),L=(a(70),a(36)),T=a.n(L),G=function(){return"AIzaSyCKY5OS2THy-jXyAZL-BDlnyQCP8DJt1sw"},z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).maPosition=function(e){a.setState({userPosition:{lat:e.coords.latitude,lng:e.coords.longitude}}),a.props.returnUserPosition(a.state.userPosition)},a.renderAllMarkers=function(){for(var e=[],t=0;t<a.props.giversArray.length;t++)e.push(a.renderOneMarker(a.props.giversArray[t],t));return e},a.renderOneMarker=function(e,t){var n=e.adress.streetNumber+"+"+e.adress.streetType+"+"+e.adress.streetName+"&postcode="+e.adress.postalCode;fetch(a.api+n).then(function(e){return e.json()}).then(function(e){var n=e.features[0].geometry.coordinates[1],r=e.features[0].geometry.coordinates[0];a.pos={lat:n,lng:r};var s=a.state.markers;s[t]=a.pos,a.setState({markers:s}),a.props.returnCoordinates(a.state.markers)})},a.onMarkerClick=function(e,t,n){a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.displayAdress=function(e){if(e)return r.a.createElement("div",null,r.a.createElement("h2",null,e.firstName+" "+e.lastName),r.a.createElement("p",null,e.adress.streetNumber+" "+e.adress.streetType+" "+e.adress.streetName+" "+e.adress.postalCode+" "+e.adress.cityName))},a.displayBonbon=function(e){var t=[];return e&&(e.candy.coca&&t.push(r.a.createElement("img",{src:w.a})),e.candy.croco&&t.push(r.a.createElement("img",{src:S.a})),e.candy.dragibus&&t.push(r.a.createElement("img",{src:U.a})),e.candy.schtroumpfs&&t.push(r.a.createElement("img",{src:M.a})),e.candy.sucette&&t.push(r.a.createElement("img",{src:D.a})),e.candy.carambar&&t.push(r.a.createElement("img",{src:j.a}))),t},a.changeRating=function(e,t){a.setState({rating:e})},a.api="https://api-adresse.data.gouv.fr/search/?q=",a.state={userPosition:{lat:"",lng:""},showingInfoWindow:!1,activeMarker:{},selectedPlace:{},markers:[],rating:3},a.pos={},a.renderAllMarkers(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){navigator.geolocation&&navigator.geolocation.watchPosition(this.maPosition)}},{key:"render",value:function(){var e=this,t=this.state.userPosition.lat,a=this.state.userPosition.lng;return r.a.createElement("div",{id:"mapZone"},r.a.createElement(J.Map,{google:this.props.google,zoom:16,initialCenter:{lat:this.state.userPosition.lat,lng:this.state.userPosition.lng},center:{lat:t,lng:a}},r.a.createElement(J.Marker,{onClick:this.onMarkerClick,name:"Current location",position:{lat:t,lng:a}}),this.state.markers.map(function(t){return r.a.createElement(J.Marker,{onClick:e.onMarkerClick,name:"Current location",position:{lat:t.lat,lng:t.lng},giver:e.props.giversArray[e.state.markers.indexOf(t)]})}),r.a.createElement(J.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},r.a.createElement("div",{style:{width:"70vw"}},r.a.createElement("div",null,this.displayAdress(this.state.selectedPlace.giver),this.displayBonbon(this.state.selectedPlace.giver))),r.a.createElement(T.a,{rating:this.state.rating,starRatedColor:"orange",changeRating:this.changeRating,numberOfStars:5,name:"rating",starDimension:"15px"}))))}}]),t}(n.Component),H=G(),W=Object(J.GoogleApiWrapper)({apiKey:H})(z),B=(a(74),a(76),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setNewUser=function(){a.setState({newUser:!a.state.newUser})},a.getUserName=function(e){a.setState({userName:e.target.value})},a.getPassword=function(e){a.setState({password:e.target.value})},a.renderNewUserInfo=function(){var e=[];return a.state.newUser&&"receiver"==a.props.userStatus?e.push(r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"prenom",placeholder:"Pr\xe9nom"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("input",{type:"password",name:"passwordConfirm",placeholder:"Confirm password"}),r.a.createElement("input",{type:"text",name:"streetNumber",placeholder:"N\xb0 de rue"}),r.a.createElement("input",{type:"text",name:"streetType",placeholder:"Type de rue"}),r.a.createElement("input",{type:"text",name:"streetName",placeholder:"Nom de rue"}),r.a.createElement("input",{type:"text",name:"postalCode",placeholder:"Code postal"}),r.a.createElement("input",{type:"text",name:"city",placeholder:"Ville"}),r.a.createElement("input",{type:"text-area",name:"extra-info",placeholder:"Autres informations (n\xb0 appartement, digicode...)"}))):a.state.newUser?e.push(r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"prenom",placeholder:"Pr\xe9nom"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("input",{type:"password",name:"passwordConfirm",placeholder:"Confirm password"}))):e.push(r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"prenom",placeholder:"Pr\xe9nom",onChange:a.getUserName}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:a.getPassword}))),e},a.checkLogginInfo=function(e,t,n){for(var r=e.map(function(e){return e.firstName}),s=e.map(function(e){return e.password}),i=0;i<r.length;i++)t===r[i]&&n!==s[i]&&alert("Mot de passe \xe9rron\xe9"),t===r[i]&&n===s[i]&&a.props.setLoggedUser(!0)},a.state={newUser:!1,userName:"",password:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"userInfo"},r.a.createElement("div",null,this.renderNewUserInfo()),r.a.createElement("div",{id:"buttonRow"},r.a.createElement("button",{onClick:function(){return e.checkLogginInfo(e.props.giversArray,e.state.userName,e.state.password)}},"OK"),r.a.createElement("button",{onClick:this.setNewUser},"New user")))}}]),t}(n.Component)),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setLoggedUser=function(e){a.setState({loggedUser:e})},a.setCoordinates=function(e){a.setState({giverCoordinates:e})},a.setUserCoordinates=function(e){a.setState({receiverCoordinates:e})},a.state={loggedUser:!1,giverCoordinates:[],receiverCoordinates:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"backgroundReceiver"},this.state.loggedUser?r.a.createElement("div",null,r.a.createElement(W,{giversArray:this.props.giversArray,returnCoordinates:this.setCoordinates,returnUserPosition:this.setUserCoordinates}),r.a.createElement(x,{giversArray:this.props.giversArray,giverCoordinates:this.state.giverCoordinates,receiverCoordinates:this.state.receiverCoordinates})):r.a.createElement(B,{giversArray:this.props.giversArray,userStatus:"Giver",setLoggedUser:this.setLoggedUser}))}}]),t}(n.Component),V=(a(78),function e(t){var a;Object(o.a)(this,e),this.id=t.id,this.firstName=t.firstName,this.lastName=t.lastName,this.password=t.password,this.email=t.email,this.avatar=t.avatar,this.adress={streetNumber:t.adress.streetNumber,streetType:t.adress.streetType,streetName:t.adress.streetName,postalCode:t.adress.postalCode,cityName:t.adress.cityName,aptmtNumber:t.adress.aptmtNumber},this.candy=(a={coca:t.candy.coca,carambar:t.candy.carambar,croco:t.candy.croco},Object(b.a)(a,"coca",t.candy.coca),Object(b.a)(a,"schtroumpfs",t.candy.schtroumpfs),Object(b.a)(a,"sucette",t.candy.sucette),Object(b.a)(a,"dragibus",t.candy.dragibus),a),this.hasCandy=t.hasCandy,this.finalNotation=t.finalNotation,this.notation=[],this.available=t.available}),q=a(37),K=a.n(q),Z=(a(80),function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleSwitch=function(){a.setState(function(e){return{available:!e.available}})};return a.GiverJeanDupont=new V({id:0,firstName:"Martin",lastName:"Durand",password:"password",email:"jeandupont@voila.fr",avatar:"http://image.noelshack.com/fichiers/2018/44/3/1540979367-profilemen.png",adress:{streetNumber:20,streetType:"rue",streetName:"Delandine",postalCode:"69002",cityName:"Lyon",aptmtNumber:""},candy:{coca:!1,crocodile:!1,dragibus:!1,sucette:!1,carambar:!1,schtroumpfs:!1},hasCandy:!0,finalNotation:0,notation:[],available:!0}),a.state={available:!0,showAvailable:"Disponible"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"showInfoJeanDupont",value:function(){var e=[];return e.push(this.GiverJeanDupont.adress.streetNumber," ",this.GiverJeanDupont.adress.streetType," ",this.GiverJeanDupont.adress.streetName," ",this.GiverJeanDupont.adress.postalCode," ",this.GiverJeanDupont.adress.cityName," ",this.GiverJeanDupont.adress.aptmtNumber),e}},{key:"render",value:function(){return r.a.createElement("container",{className:"profileGiver"},r.a.createElement("img",{src:this.GiverJeanDupont.avatar}),r.a.createElement("div",{className:"coordinated"},r.a.createElement("div",{className:"name"},this.GiverJeanDupont.firstName," ",this.GiverJeanDupont.lastName),r.a.createElement("div",{className:"adress"},this.showInfoJeanDupont())),r.a.createElement("div",{className:"buttonActionProfile"},r.a.createElement("button",{className:"buttonChangeProfileInformation"},"Change Informations"),!1===this.state.available?r.a.createElement("div",{className:"showAvailable"},"Absent"):r.a.createElement("div",{className:"showAvailable"},"Disponible"),r.a.createElement(K.a,{className:"availableButton",onClick:this.toggleSwitch,on:this.state.available})))}}]),t}(n.Component)),X=(a(82),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateSelectedCandy=function(e){a.setState({selectedCandy:e.target.value})},a.handleAddClick=function(){var e=a.state.giverInventary;0!==a.state.selectedCandy.length&&e.push(a.state.selectedCandy),a.setState({giverInventary:e})},a.handleDelClick=function(e){var t=a.state.giverInventary;t.splice(e,1),a.setState({giverInventary:t})},a.state={giverInventary:[],selectedCandy:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderCandyTable",value:function(){for(var e=this,t=[],a=function(a){t.push(r.a.createElement("div",{className:"fckCandyTable"},r.a.createElement("tr",null,r.a.createElement("td",null,e.state.giverInventary[a])),r.a.createElement(N.a,{color:"warning",onClick:function(){return e.handleDelClick(a)}},"X")))},n=0;n<this.state.giverInventary.length;n++)a(n);return t}},{key:"render",value:function(){return r.a.createElement("div",{className:"candySelect"},r.a.createElement("select",{onChange:this.updateSelectedCandy},r.a.createElement("option",{selected:!0,disabled:!0},"Choisissez vos bonbons"),r.a.createElement("option",{value:"Dragibus"},"Dragibus"),r.a.createElement("option",{value:"Coca"},"Coca"),r.a.createElement("option",{value:"Schtroumpfs"},"Schtroumpfs"),r.a.createElement("option",{value:"Croco"},"Croco"),r.a.createElement("option",{value:"Carambar"},"Carambar"),r.a.createElement("option",{value:"Sucette"},"Sucette")),r.a.createElement(N.a,{color:"warning",onClick:this.handleAddClick},"Ajoutez"),r.a.createElement("div",null,this.renderCandyTable()))}}]),t}(n.Component)),Q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X,null))}}]),t}(n.Component),Y=(a(84),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setLoggedUser=function(e){a.setState({loggedUser:e})},a.state={loggedUser:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.state.loggedUser?r.a.createElement("div",{className:"giverInterface"},r.a.createElement(Z,null),r.a.createElement(Q,null)):r.a.createElement(B,Object(b.a)({userStatus:this.props.userStatus,setLoggedUser:this.setLoggedUser,giversArray:this.props.giversArray},"setLoggedUser",this.setLoggedUser))))}}]),t}(n.Component)),$=function(e){function t(){var e;Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).setUserStatus=function(t){e.userStatus=t},e.setNotation=function(e,t){e.notation.push(t),e.finalNotation=e.notation.reduce(function(e,t){return e+t})};e.giverJeanDupont=new V({id:0,firstName:"Jean",lastName:"Dupont",password:"JeanDupont",email:"jeandupont@voila.fr",avatar:"citrouille.jpeg",adress:{streetNumber:29,streetType:"rue",streetName:"de Cond\xe9",postalCode:69002,cityName:"Lyon",aptmtNumber:""},candy:{coca:!1,carambar:!1,croco:!1,schtroumpfs:!1,sucette:!1,dragibus:!0},hasCandy:!0,finalNotation:0,notation:[],available:!0});e.giverMartinDurand=new V({id:1,firstName:"Martin",lastName:"Durand",password:"password",email:"martindurand@voila.fr",avatar:"citrouille.jpeg",adress:{streetNumber:20,streetType:"rue",streetName:"Delandine",postalCode:69002,cityName:"Lyon",aptmtNumber:""},candy:{coca:!0,carambar:!0,croco:!0,schtroumpfs:!1,sucette:!1,dragibus:!1},hasCandy:!1,finalNotation:0,notation:[],available:!0});e.giverPaulMachin=new V({id:2,firstName:"Paul",lastName:"Machin",password:"PaulMachin",email:"paulmachin@voila.fr",avatar:"citrouille.jpeg",adress:{streetNumber:48,streetType:"cours",streetName:"Suchet",postalCode:69002,cityName:"Lyon",aptmtNumber:""},candy:{coca:!1,carambar:!1,croco:!1,schtroumpfs:!0,sucette:!1,dragibus:!1},hasCandy:!0,finalNotation:0,notation:[],available:!0});return e.giverLouisPierre=new V({id:3,firstName:"Louis",lastName:"Pierre",password:"password",email:"paulmachin@voila.fr",avatar:"citrouille.jpeg",adress:{streetNumber:38,streetType:"cours",streetName:"Emile Zola",postalCode:69100,cityName:"Villeurbanne",aptmtNumber:""},candy:{coca:!1,carambar:!1,croco:!1,schtroumpfs:!0,sucette:!1,dragibus:!1},hasCandy:!0,finalNotation:0,notation:[],available:!0}),e.giversArray=[e.giverJeanDupont,e.giverMartinDurand,e.giverPaulMachin,e.giverLouisPierre],e.userStatus="",e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(h.a,{exact:!0,path:"/giver",onClick:this.setUserStatus("giver"),render:function(){return r.a.createElement(Y,{userStatus:e.userStatus,giversArray:e.giversArray})}}),r.a.createElement(h.a,{exact:!0,path:"/receiver",onClick:this.setUserStatus("receiver"),render:function(){return r.a.createElement(R,{giversArray:e.giversArray,userStatus:e.userStatus,setNotation:e.setNotation})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.c73bd474.chunk.js.map