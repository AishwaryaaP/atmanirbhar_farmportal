(this.webpackJsonpfarmerportal=this.webpackJsonpfarmerportal||[]).push([[0],{171:function(e,a,t){e.exports=t(394)},179:function(e,a,t){},180:function(e,a,t){},394:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(22),c=t.n(r),o=(t(176),t(177),t(178),t(179),t(17)),i=t(18),s=t(19),m=t(20),u=(t(180),t(24)),d=t(3),h=t(4),p=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).toggleNav=n.toggleNav.bind(Object(u.a)(n)),n.state={isNavOpen:!1},n}return Object(i.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.j,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-header"},l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("h1",null,"Krishi Seva Portal"))))),l.a.createElement(d.n,{dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(d.p,{onClick:this.toggleNav}),l.a.createElement(d.o,{className:"mr-auto",href:"/"},l.a.createElement("img",{src:"/atmanirbhar_farmportal/images/logo.PNG",height:"45",width:"41",alt:"Krishi Seva"})),l.a.createElement(d.e,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(d.l,{navbar:!0},l.a.createElement(d.m,null,l.a.createElement(h.c,{className:"nav-link",to:"/home"},l.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),l.a.createElement(d.m,null,l.a.createElement(h.c,{className:"nav-link",to:"/aboutus"},l.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),l.a.createElement(d.m,null,l.a.createElement(h.c,{className:"nav-link",to:"/contactus"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us")),l.a.createElement(d.m,null,l.a.createElement(h.c,{className:"nav-link",to:"/policies"},l.a.createElement("span",{className:"fa fa-book fa-lg"})," Policies&Schemes")),l.a.createElement(d.m,null,l.a.createElement(h.c,{className:"nav-link",to:"/news"},l.a.createElement("span",{className:"fa fa-search-plus fa-lg"}),"News")))))))}}]),t}(n.Component);var f=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},l.a.createElement("h5",null,"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement(h.b,{to:"/home"},"Home")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/aboutus"},"AboutUs")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/contactus"},"Contact")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/policies"},"Policies&Schemes")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/news"},"News")))),l.a.createElement("div",{className:"col-7 col-sm-5"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"666,Upper IndiraNagar,",l.a.createElement("br",null),"Bibwewadi ,Pune",l.a.createElement("br",null),"Maharashtra",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +91 9834360258",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",l.a.createElement("a",{href:"mailto:krishiseva@agri.net"},"krishiseva@agri.net"))),l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},l.a.createElement("i",{className:"fa fa-google-plus"})),l.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},l.a.createElement("i",{className:"fa fa-youtube"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},l.a.createElement("i",{className:"fa fa-envelope-o"}))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",null,"\xa9 Copyright 2020 All Rights Reserved")))))},E=t(32),g=t(167),b=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleBlur=function(e){return function(a){n.setState({touched:Object(g.a)({},n.state.touched,Object(E.a)({},e,!0))})}},n.state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",feedback:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(E.a)({},n,t))}},{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(this.state)),alert("Current State is: "+JSON.stringify(this.state)),e.preventDefault()}},{key:"validate",value:function(e,a,t,n){var l={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.length<3?l.firstname="FirstName should be >=3 characters":this.state.touched.firstname&&e.length>10&&(l.firstname="FirstName should be <=10 characters"),this.state.touched.lastname&&a.length<3?l.lastname="FirstName should be >=3 characters":this.state.touched.lastname&&a.length>10&&(l.lastname="FirstName should be <=10 characters");return this.state.touched.telnum&&!/^\d+$/.test(t)&&(l.telnum="Tel. Num should contain only numbers"),this.state.touched.email&&1!==n.split("").filter((function(e){return"@"===e})).length&&(l.email="Email should contain a @"),l}},{key:"render",value:function(){var e=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.b,{to:"/home",style:{color:"blue"}},"Home")),l.a.createElement(d.b,{active:!0,style:{color:"red"}},"ContactUs"))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Location Information")),l.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",{style:{color:"black"}},"666,Upper IndiraNagar,",l.a.createElement("br",null),"Bibwewadi ,Pune",l.a.createElement("br",null),"Maharashtra",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +91 9834360258",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",l.a.createElement("a",{href:"mailto:krishiseva@agri.net"},"krishiseva@agri.net"))),l.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},l.a.createElement("h5",null,"Map of our Location")),l.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},l.a.createElement("div",{className:"btn-group",role:"group"},l.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},l.a.createElement("i",{className:"fa fa-phone"})," Call"),l.a.createElement("a",{role:"button",className:"btn btn-info"},l.a.createElement("i",{className:"fa fa-skype"})," Skype"),l.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Send us Your Feedback")),l.a.createElement("div",{className:"col-12 col-md-9"},l.a.createElement(d.f,{onSubmit:this.handleSubmit,action:"/submit",method:"post"},l.a.createElement(d.h,{row:!0},l.a.createElement(d.k,{htmlFor:"firstname",md:2},"First Name"),l.a.createElement(d.d,{md:10},l.a.createElement(d.i,{type:"text",id:"firstname",name:"firstname",placeholder:"First Name",value:this.state.firstname,valid:""===e.firstname,invalid:""!==e.firstname,onBlur:this.handleBlur("firstname"),onChange:this.handleInputChange}),l.a.createElement(d.g,null,e.firstname))),l.a.createElement(d.h,{row:!0},l.a.createElement(d.k,{htmlFor:"lastname",md:2},"Last Name"),l.a.createElement(d.d,{md:10},l.a.createElement(d.i,{type:"text",id:"lastname",name:"lastname",placeholder:"Last Name",value:this.state.lastname,valid:""===e.lastname,invalid:""!==e.lastname,onBlur:this.handleBlur("lastname"),onChange:this.handleInputChange}),l.a.createElement(d.g,null,e.lastname))),l.a.createElement(d.h,{row:!0},l.a.createElement(d.k,{htmlFor:"telnum",md:2},"Contact Tel."),l.a.createElement(d.d,{md:10},l.a.createElement(d.i,{type:"tel",id:"telnum",name:"telnum",placeholder:"Tel. Number",value:this.state.telnum,valid:""===e.telnum,invalid:""!==e.telnum,onBlur:this.handleBlur("telnum"),onChange:this.handleInputChange}),l.a.createElement(d.g,null,e.telnum))),l.a.createElement(d.h,{row:!0},l.a.createElement(d.k,{htmlFor:"email",md:2},"Email"),l.a.createElement(d.d,{md:10},l.a.createElement(d.i,{type:"email",id:"email",name:"email",placeholder:"Email",value:this.state.email,valid:""===e.email,invalid:""!==e.email,onBlur:this.handleBlur("email"),onChange:this.handleInputChange}),l.a.createElement(d.g,null,e.email))),l.a.createElement(d.h,null,l.a.createElement(d.d,{md:{size:6,offset:2}},l.a.createElement(d.h,{check:!0},l.a.createElement(d.k,{check:!0},l.a.createElement(d.i,{type:"checkbox",name:"agree",checked:this.state.agree,onChange:this.handleInputChange})," ",l.a.createElement("strong",null,"May we contact you?")))),l.a.createElement(d.d,{md:{size:2,offset:2}},l.a.createElement(d.i,{type:"select",name:"contactType",value:this.state.contactType,onChange:this.handleInputChange},l.a.createElement("option",null,"Tel."),l.a.createElement("option",null,"Email")))),l.a.createElement(d.h,{row:!0},l.a.createElement(d.k,{htmlFor:"feedback",md:2},"Your Feedback"),l.a.createElement(d.d,{md:10},l.a.createElement(d.i,{type:"textarea",id:"feedback",name:"feedback",rows:"12",value:this.state.feedback,onChange:this.handleInputChange}))),l.a.createElement(d.h,{row:!0},l.a.createElement(d.d,{md:{size:10,offset:2}},l.a.createElement(d.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),v=t(168);t(194);var y=function(){return l.a.createElement("div",{className:"slider-container"},l.a.createElement(v.Carousel,{infiniteLoop:!0,useKeyboardArrows:!0,autoPlay:!0,className:"container"},l.a.createElement("div",null,l.a.createElement("img",{id:"s1",src:"/atmanirbhar_farmportal/images/crop.jpg",alt:"img1"})),l.a.createElement("div",null,l.a.createElement("img",{id:"s2",src:"/atmanirbhar_farmportal/images/crop3.jpg",alt:"img2"})),l.a.createElement("div",null,l.a.createElement("img",{id:"s3",src:"/atmanirbhar_farmportal/images/crop5.jpg",alt:"img3"})),l.a.createElement("div",null,l.a.createElement("img",{id:"s4",src:"/atmanirbhar_farmportal/images/crop7.jpeg",alt:"img4"})),l.a.createElement("div",null,l.a.createElement("img",{id:"s5",src:"/atmanirbhar_farmportal/images/crop6.jpg",alt:"img5"})),l.a.createElement("div",null,l.a.createElement("img",{id:"s6",src:"/atmanirbhar_farmportal/images/crop4.jpg",alt:"img6"}))))},w=t(33),k=t(47),N=t.n(k),C=t(170),j=t.n(C);N.a.setApiKey("[AIzaSyD8xriOJjkMV96msupiknmZfivcCb-EDzU]"),N.a.enableDebug();var S=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).getCity=function(e){for(var a=0;a<e.length;a++)if(e[a].types[0]&&"administrative_area_level_2"===e[a].types[0])return e[a].long_name},n.getArea=function(e){for(var a=0;a<e.length;a++)if(e[a].types[0])for(var t=0;t<e[a].types.length;t++)if("sublocality_level_1"===e[a].types[t]||"locality"===e[a].types[t])return e[a].long_name},n.getState=function(e){for(var a=0;a<e.length;a++)for(var t=0;t<e.length;t++)if(e[t].types[0]&&"administrative_area_level_1"===e[t].types[0])return e[t].long_name},n.onInfoWindowClose=function(e){},n.onMarkerDragEnd=function(e){var a=e.latLng.lat(),t=e.latLng.lng();N.a.fromLatLng(a,t).then((function(e){var l=e.results[0].formatted_address,r=e.results[0].address_components,c=n.getCity(r),o=n.getArea(r),i=n.getState(r);n.setState({address:l||"",area:o||"",city:c||"",state:i||"",markerPosition:{lat:a,lng:t},mapPosition:{lat:a,lng:t}})}),(function(e){console.error(e),window.alert(e)}))},n.onPlaceSelected=function(e){console.log("plc",e);var a=e.formatted_address,t=e.address_components,l=n.getCity(t),r=n.getArea(t),c=n.getState(t),o=e.geometry.location.lat(),i=e.geometry.location.lng();n.setState({address:a||"",area:r||"",city:l||"",state:c||"",markerPosition:{lat:o,lng:i},mapPosition:{lat:o,lng:i}})},n.state={address:"",city:"",area:"",state:"",mapPosition:{lat:n.props.center.lat,lng:n.props.center.lng},markerPosition:{lat:n.props.center.lat,lng:n.props.center.lng}},n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.fromLatLng(this.state.mapPosition.lat,this.state.mapPosition.lng).then((function(a){var t=a.results[0].formatted_address,n=a.results[0].address_components,l=e.getCity(n),r=e.getArea(n),c=e.getState(n);console.log("city",l,r,c),e.setState({address:t||"",area:r||"",city:l||"",state:c||""})}),(function(e){console.error(e)}))}},{key:"shouldComponentUpdate",value:function(e,a){return this.state.markerPosition.lat!==this.props.center.lat||this.state.address!==a.address||this.state.city!==a.city||this.state.area!==a.area||this.state.state!==a.state||this.props.center.lat!==e.center.lat&&void 0}},{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(E.a)({},n,t))}},{key:"render",value:function(){var e=this,a=Object(w.withScriptjs)(Object(w.withGoogleMap)((function(a){return l.a.createElement(w.GoogleMap,{google:e.props.google,defaultZoom:e.props.zoom,defaultCenter:{lat:e.state.mapPosition.lat,lng:e.state.mapPosition.lng}},l.a.createElement(j.a,{style:{width:"100%",height:"40px",paddingLeft:"16px",marginTop:"2px",marginBottom:"100px"},onPlaceSelected:e.onPlaceSelected,types:["(regions)"]}),l.a.createElement(w.Marker,{google:e.props.google,name:"Dolores park",draggable:!0,onDragEnd:e.onMarkerDragEnd,position:{lat:e.state.markerPosition.lat,lng:e.state.markerPosition.lng}}),l.a.createElement(w.Marker,null),l.a.createElement(w.InfoWindow,{position:{lat:e.state.markerPosition.lat+.0018,lng:e.state.markerPosition.lng}},l.a.createElement("div",null,l.a.createElement("span",{style:{padding:0,margin:0}},e.state.address))))})));return void 0!==this.props.center.lat?l.a.createElement("div",null,l.a.createElement("div",{className:"container col-12 col-sm-9"},l.a.createElement(d.h,{row:!0},l.a.createElement(d.d,{md:{size:12,offset:2},style:{color:"blue","font-size":"25px"}},l.a.createElement("strong",null,"Enter Your State and District"))),l.a.createElement(d.h,{row:!0},l.a.createElement(d.k,{htmlFor:"",md:{size:1,offset:2}},l.a.createElement("strong",null,"City")),l.a.createElement(d.d,{md:{size:3,offset:-6}},l.a.createElement(d.i,{type:"text",id:"city",name:"city",placeholder:"City Name",onChange:this.handleInputChange,value:this.state.city})),l.a.createElement(d.k,{htmlFor:"",md:{size:1,offset:-2}},l.a.createElement("strong",null,"Area")),l.a.createElement(d.d,{md:{size:3,offset:-6}},l.a.createElement(d.i,{type:"text",name:"area",id:"area",onChange:this.handleInputChange,placeholder:"Area",value:this.state.area}))),l.a.createElement(d.h,{row:!0},l.a.createElement(d.k,{htmlFor:"",md:{size:1,offset:2}},l.a.createElement("strong",null,"State")),l.a.createElement(d.d,{md:{size:3,offset:-6}},l.a.createElement(d.i,{type:"text",name:"state",id:"state",placeholder:"State Name",onChange:this.handleInputChange,value:this.state.state})),l.a.createElement(d.k,{htmlFor:"",md:{size:1,offset:-2}},l.a.createElement("strong",null,"Address")),l.a.createElement(d.d,{md:{size:3,offset:-6}},l.a.createElement(d.i,{type:"text",name:"address",id:"address",onChange:this.handleInputChange,placeholder:"Address",value:this.state.address})))),l.a.createElement(a,{googleMapURL:"https://maps.googleapis.com/maps/api/js?&key=AIzaSyB445mQbS-Mv9N4pNyi03A5tAqEsXeDXGg&libraries=places",style:{"background-color":"green"},loadingElement:l.a.createElement("div",{className:"center",style:{position:"relative",width:"50vw",height:"100vh"}}),containerElement:l.a.createElement("div",{className:"center",style:{position:"relative",width:"50vw",height:"100vh"}}),mapElement:l.a.createElement("div",{className:"center",style:{position:"relative",width:"50vw",height:"100vh"}})})):l.a.createElement("div",{className:"center",style:{position:"relative",width:"50vw",height:"100vh"}})}}]),t}(n.Component);var O=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.b,{to:"/home",style:{color:"blue"}},"Home")),l.a.createElement(d.b,{active:!0,style:{color:"red"}},"About Us")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"About Us"),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,'"Agriculture is the backbone of the Indian Economy"'),"- said Mahatma Gandhi, six decades ago. ",l.a.createElement("br",null),"Even today, the situation is still the same, with almost the entire economy being sustained by agriculture, which is the mainstay of the villages. It contributes 16% of the overall GDP and accounts for employment of approximately 52% of the Indian population. Rapid growth in agriculture is essential not only for self-reliance but also to earn valuable foreign exchange.",l.a.createElement("br",null),l.a.createElement("br",null),"Indian farmers are second to none in production and productivity despite of the fact that millions are marginal and small farmers. They adopt improved agriculture technology as efficiently as farmers in developed countries. It is felt that with provision of timely and adequate inputs such as fertilizers, seeds, pesticides and by making available affordable agricultural credit /crop insurance, Indian farmers are going to ensure food and nutritional security to the Nation.It is envisaged to make available relevant information and services to the farming community and private sector through the use of information and communication technologies, to supplement the existing delivery channels provided for by the department. Farmers\u2019 Portal is an endeavour in this direction to create one stop shop for meeting all informational needs relating to Agriculture, Animal Husbandry and Fisheries sectors production, sale/storage of an Indian farmer.",l.a.createElement("br",null),l.a.createElement("br",null)," With this Indian Farmer will not be required to sift through maze of websites created for specific purposes.Once in the KrishiSeva Portal, a farmer will be able to get all relevant information on specific subjects around his village/block /district or state. This information will be delivered in the form of text, SMS, email and audio/video in the language he or she understands. These levels can be easily reached through the Map of India placed on the Home page. Farmers will also be able to ask specific queries as well as give valuable feedback through the feedback form.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"Our Portal is the unique portal ,that helps farmers by recommending the crop taking in account all the factors that affect the growth of the crop.Also a feature of suggesting a proper arrangement of multiple crops on the farmers cultivable land is provided ,such that the profit at the end is maximised.")))))},x=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(h.b,{to:"/home",style:{color:"blue"}},"Home")),l.a.createElement(d.b,{active:!0,style:{color:"red"}},"Policies and Schemes"))),l.a.createElement("ul",null,l.a.createElement("li",null,"Pradhan Mantri Kisan Samman Nidhi Yojana"),l.a.createElement("a",{style:{color:"purple"},href:"www.pmkisan.gov.in/"},"(www.pmkisan.gov.in/)"),l.a.createElement("li",null,"Pradhan Mantri Kisan Maandhan yojana"),l.a.createElement("a",{style:{color:"purple"},href:"pmkmy.gov.in/"},"(pmkmy.gov.in/)"),l.a.createElement("li",null,"Pradhan Mantri Fasal Bima Yojana (PMFBY)"),l.a.createElement("a",{style:{color:"purple"},href:" pmfby.gov.in/"}," (pmfby.gov.in/)"),l.a.createElement("li",null,"Kisan Credit Card (KCC) scheme"),l.a.createElement("a",{style:{color:"purple"},href:"https://www.pmkisan.gov.in/Documents/finalKCCCircular.pdf"},"(https://www.pmkisan.gov.in/Documents/finalKCCCircular.pdf)"),l.a.createElement("li",null,"Paramparagat Krishi Vikas Yojana (PKVY)"),l.a.createElement("a",{href:"https://pgsindia-ncof.gov.in/pkvy/index.aspx",style:{color:"purple"}},"(https://pgsindia-ncof.gov.in/pkvy/index.aspx)"),l.a.createElement("li",null,"Pradhan Mantri Krishi Sinchai Yojana (PMKSY)"),l.a.createElement("a",{href:"https://pmksy.gov.in/",style:{color:"purple"}},"(https://pmksy.gov.in/)"),l.a.createElement("li",null,"National Agriculture Market (e-NAM)"),l.a.createElement("a",{href:"https://www.enam.gov.in/web/",style:{color:"purple"}},"(https://www.enam.gov.in/web/)"),l.a.createElement("li",null,"Dairy Entrepreneurship Development Scheme"),l.a.createElement("a",{style:{color:"purple"}}),l.a.createElement("li",null," Soil Health Card Scheme"),l.a.createElement("a",{style:{color:"purple"},href:" soilhealth.dac.gov.in/"},"(soilhealth.dac.gov.in/)"),l.a.createElement("li",null,"National Mission for Sustainable Agriculture (NMSA)")),l.a.createElement("div",{className:"container border"},l.a.createElement("p",{style:{color:"orange","font-size":"20px"}},l.a.createElement("strong",null,"Video Links For the Government initiatives taken for Farmers")),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/5c8J9cv1oTI",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/xkKRb-xG8dc",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/AJRuvq06mhk",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/T7z3Zg4dPkI",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/x1gxLD2ZEnI",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/XvORzaanxt8",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/Twl4--EiYSM",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/QAwMPIyVkhI",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/qhj6stgAH9g",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/5jM7MDPEJrk",frameborder:"10",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}))))}}]),t}(n.Component),P=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(h.f,null,l.a.createElement(h.e,{path:"/home",component:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(S,{google:e.props.google,center:{lat:18.5204,lng:73.8567},height:"450px",zoom:6}))}}),l.a.createElement(h.e,{exact:!0,path:"/contactus",component:b}),l.a.createElement(h.e,{exact:!0,path:"/aboutus",component:O}),l.a.createElement(h.e,{exact:!0,path:"/policies",component:x}),l.a.createElement(h.d,{to:"/home"})),l.a.createElement(f,null))}}]),t}(n.Component),I=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(P,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.2f6d2c35.chunk.js.map