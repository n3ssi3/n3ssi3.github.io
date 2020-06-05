(this["webpackJsonpmy-cv"]=this["webpackJsonpmy-cv"]||[]).push([[0],{21:function(e,a,t){e.exports=t(32)},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(17),l=t.n(s),o=t(18),c=t.n(o),i=t(1),m=t(2),d=t(4),p=t(3),u=t(19),v=t(5),h=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("a",{className:"cc-facebook btn btn-link",href:"https://www.facebook.com/nessie.arya"},r.a.createElement("i",{className:"fab fa-facebook fa-2x ","aria-hidden":"true"})),r.a.createElement("a",{className:"cc-twitter btn btn-link ",href:"https://twitter.com/n3ssi3"},r.a.createElement("i",{className:"fab fa-twitter fa-2x ","aria-hidden":"true"})),r.a.createElement("a",{className:"cc-instagram btn btn-link",href:"https://www.instagram.com/n3ssi3.m3/"},r.a.createElement("i",{className:"fab fa-instagram fa-2x ","aria-hidden":"true"}))),r.a.createElement("div",{className:"h4 title text-center"},"Vanessa Aryanata"))}}]),t}(n.Component),g=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).updateWindowDimensions=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>=400&&" navbar-transparent"===n.state.cssClass?n.setState({cssClass:""}):(window.pageYOffset||e.scrollTop)-(e.clientTop||0)<400&&""===n.state.cssClass&&n.setState({cssClass:" navbar-transparent"})},n.state={cssClass:"",isNavbarOpen:!1},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("scroll",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this;return r.a.createElement("header",null,r.a.createElement("div",{className:"profile-page sidebar-collapse"},r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top bg-primary"+this.state.cssClass,"color-on-scroll":"400"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-translate"},r.a.createElement("button",{className:"navbar-toggler navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navigation","aria-controls":"navigation","aria-expanded":this.state.isNavbarOpen?"true":"false","aria-label":"Toggle navigation",onClick:function(){return e.setState({isNavbarOpen:!e.state.isNavbarOpen})}},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end ".concat(this.state.isNavbarOpen?"show":""),id:"navigation"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link smooth-scroll",href:"./#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link smooth-scroll",href:"./#skill"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link smooth-scroll",href:"./#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link smooth-scroll",href:"./#contact"},"Contact"))))))))}}]),t}(n.Component),E=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={email:'<button class="btn btn-info">Show Email</button>',phone:'<button class="btn btn-info">Show Phone Number</button>'},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"section",id:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card","data-aos":"fade-up","data-aos-offset":"10"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h4 mt-0 title"},"About"),r.a.createElement("p",null,"Hello! I am Vanessa Aryanata-H\xe4nni, a pationate Javascript / Web Developer and currently employed as a Senior Frontend Engineer."),r.a.createElement("p",null,"As an experienced digital marketing manager and online sales manager, my tenacious and proactive approach resulted in numerous important contract wins.",r.a.createElement("br",null),"My real passion, however, lies in making the internet beautiful. I love to create websites and playing around utilizing the latest technologies."))),r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h4 mt-0 title"},"Basic Information"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("strong",{className:"text-uppercase"},"Age:")),r.a.createElement("div",{className:"col-sm-8"},"30")),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("strong",{className:"text-uppercase"},"Email:")),r.a.createElement("div",{className:"col-sm-8",onClick:function(){e.setState({email:'<a href="mailto:vanessa.haenni@gmail.com">vanessa.haenni@gmail.com</a>'})}},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.state.email}}))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("strong",{className:"text-uppercase"},"Phone:")),r.a.createElement("div",{className:"col-sm-8",onClick:function(){e.setState({phone:'<a href="tel:+41788726843">+41 78 872 6243</a>'})}},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.state.phone}}))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("strong",{className:"text-uppercase"},"Address:")),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("p",null,"Zurich, Switzerland"))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("strong",{className:"text-uppercase"},"Languages:")),r.a.createElement("div",{className:"col-sm-8"},"German, English, Indonesian, French, Balinese"))))))))}}]),t}(n.Component),f=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={email:'<button class="btn btn-info">Show Email</button>',phone:'<button class="btn btn-info">Show Phone Number</button>'},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"section",id:"contact"},r.a.createElement("div",{className:"cc-contact-information"},r.a.createElement("div",{className:"container cc-contact"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"card mb-0","data-aos":"zoom-in"},r.a.createElement("div",{className:"h4 text-center title"},"Contact Me"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{action:"https://formspree.io/vanessa.haenni+contact@gmail.com",method:"POST"},r.a.createElement("input",{type:"hidden",name:"_next",value:window.location.hostname+"/thankyou"}),r.a.createElement("div",{className:"p pb-3"},r.a.createElement("strong",null,"Feel free to contact me ")),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-user-circle"})),r.a.createElement("input",{className:"form-control",type:"text",name:"name",placeholder:"Name",required:"required"})))),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-file-alt"})),r.a.createElement("input",{className:"form-control",type:"text",name:"Subject",placeholder:"Subject",required:"required"})))),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-envelope"})),r.a.createElement("input",{className:"form-control",type:"email",name:"_replyto",placeholder:"E-mail",required:"required"})))),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",name:"message",placeholder:"Your Message",required:"required"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Send")))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"mb-0"},r.a.createElement("strong",null,"Address ")),r.a.createElement("p",{className:"pb-2"},"Zurich, Switzerland"),r.a.createElement("p",{className:"mb-0"},r.a.createElement("strong",null,"Phone")),r.a.createElement("p",{className:"pb-2",onClick:function(){e.setState({phone:'<a href="tel:+41788726843">+41 78 872 6243</a>'})}},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.state.phone}})),r.a.createElement("p",{className:"mb-0"},r.a.createElement("strong",null,"Email")),r.a.createElement("p",{onClick:function(){e.setState({email:'<a href="mailto:vanessa.haenni@gmail.com">vanessa.haenni@gmail.com</a>'})}},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.state.email}})))))))))))}}]),t}(n.Component),b=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container cc-education"},r.a.createElement("div",{className:"h4 text-center mb-4 title"},"Education"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 bg-primary","data-aos":"fade-right","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body cc-education-header"},r.a.createElement("p",null,"2004 - 2008"),r.a.createElement("div",{className:"h5"},"High School"))),r.a.createElement("div",{className:"col-md-9","data-aos":"fade-left","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h5"},"Computer Science"),r.a.createElement("p",{className:"category"},"Kantonsschule Hottingen"),r.a.createElement("p",null,"4 years of high school with focus on economics and information technology. Part of the education is an internship in a company where you also have to write your thesis.")))))))}}]),t}(n.Component),N=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section",id:"experience"},r.a.createElement("div",{className:"container cc-experience"},r.a.createElement("div",{className:"h4 text-center mb-4 title"},"Work Experience"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 bg-primary","data-aos":"fade-right","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body cc-experience-header"},r.a.createElement("p",null,"April 2019 - present"),r.a.createElement("div",{className:"h5"},"Datatrans"))),r.a.createElement("div",{className:"col-md-9","data-aos":"fade-left","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h5"},"Senior Software Engineer"),r.a.createElement("p",null,"Datatrans' modern payment solutions reduce customers' workload while generating higher conversion rates."))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 bg-primary","data-aos":"fade-right","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body cc-experience-header"},r.a.createElement("p",null,"Dec 2016 - Nov 2018"),r.a.createElement("div",{className:"h5"},"Bali Hai"))),r.a.createElement("div",{className:"col-md-9","data-aos":"fade-left","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h5"},"Digital Marketing / Online Manager"),r.a.createElement("p",null,"Bali Hai is a group of 10 sister companies based in Bali, with an Australian management and board. Bali Hai owns a cruise company which operates day from Bali to Lembongan and evening cruises around Bali. Hai Tide Beach Resort is based in Lembongan and situated right next to Bali Hai\u2019s own private Beach Club. Off the coast there is a Pontoon which provides the perfect location for Scuba Diving and Aquanauts (sea walking). On Lembongan island there are two restaurants which can also be booked for weddings organized by Bali Hai. I was hired as a Marketing Advisor, but soon took over the whole IT department as well. Leading a small team in the IT department, overseeing our Social Media content and taking care of all the online agents is just a small part of all my responsibilities. I am also in charge of the complete online rebranding and new website developments. With new fresh designs and a seamless booking process the goal is to increase direct bookings, and therefore the yield."))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 bg-primary","data-aos":"fade-right","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body cc-experience-header"},r.a.createElement("p",null,"Dec 2015 - Jan 2017"),r.a.createElement("div",{className:"h5"},"Blackriverdata"))),r.a.createElement("div",{className:"col-md-9","data-aos":"fade-left","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h5"},"Lead Frondend Developer"),r.a.createElement("p",null,"Blackriverdata is a very small startup, which gives me the opportunity to take a lot of different responsibilities. Due to my education I focus on the frontend, but I am also the SCRUM master. At Blackriverdata we believe that everyone should help everyone. If I can take over a task from someone else I am do that, no matter if it is part of project management or backend development."))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 bg-primary","data-aos":"fade-right","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body cc-experience-header"},r.a.createElement("p",null,"Feb 2015 - Nov 2015"),r.a.createElement("div",{className:"h5"},"Tauch Terminal Tulamben"))),r.a.createElement("div",{className:"col-md-9","data-aos":"fade-left","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h5"},"Intern - SSI Scuba Dive Instructor"),r.a.createElement("p",null,"As german speaking intern in a german speaking resort I was where ever I was needed. I help in the office, fixed the server setup as well as acted as dolmetscher for the guests and the staff.",r.a.createElement("br",null),"During my education I learned very valuable skills in teaching and handling difficult situations. Diving can be a very risky sport and I encountered many situations where there were lives at stake. This kind of pressure tests your body and mind.",r.a.createElement("br",null),"Diving is also a sport for all kind of persons. So you learn a lot about different age groups, religious and other cultures manners."))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 bg-primary","data-aos":"fade-right","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body cc-experience-header"},r.a.createElement("p",null,"Oct 2013 - Jan 2015"),r.a.createElement("div",{className:"h5"},"Divio AG"))),r.a.createElement("div",{className:"col-md-9","data-aos":"fade-left","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h5"},"Senior Frontend Developer"),r.a.createElement("p",null,"As a senior frontend developer my main tasks were programming and helping the team to improve their programming skills.",r.a.createElement("br",null),"One of my most technically challenging projects was Fanpictor (https://www.fanpictor.com/) in particular their Choreography Editor. The marketing website is done with Django CMS, while the Editor is a custom application in EmberJS.",r.a.createElement("br",null),"I also worked for the Zurcher Kantonalbank(https://www.zkb.ch/). There I delivered the HTML and CSS. ZKB values on accessibility which by me before was never done to that extent. The whole website is navigable only with the keyboard, as well as optimised for color blinds and screen readers.",r.a.createElement("br",null),"There were many other smaller projects, but the biggest one was by far SALT(https://www.salt.ch). Orange was one of Divio\u2019s first clients. And when Orange needed a redesign for their rebranding, Divio was the first choice.",r.a.createElement("br",null),"I personally came later on that project. I was put on that project first just to help out with Project management and team management. Planned was for me to work 10-20% for Salt and the rest stay with my other projects and responsibilities. But soon it was clear that this was not working out. I took over the project completely and managed to bring it back on track. It was very exhausting, but one of my best experiences."))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 bg-primary","data-aos":"fade-right","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body cc-experience-header"},r.a.createElement("p",null,"Aug 2009 - Jun 2013"),r.a.createElement("div",{className:"h5"},"Liip AG"))),r.a.createElement("div",{className:"col-md-9","data-aos":"fade-left","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h5"},"Intern - Frontend Developer"),r.a.createElement("p",null,"In my time at Liip I had the opportunity to specialise in front-end development.",r.a.createElement("br",null),"I was responsible for the frontend in our webshop team. My team worked with a PHP-Webshop-Framework called Magento (http://www.magentocommerce.com/) as well as with Symfony 2 (http://symfony.com/) and other smaller PHP Frameworks.",r.a.createElement("br",null),"In 2011 we even won a price with our CMS Editor (http://liip.to/Vd3) for which we used Symfony 2, jQuery, Hallo.js and Create.js. One of the most interesting projects was a Webpaper for a big newspaper company in Switzerland, NZZ(http://webpaper.nzz.ch). The main goal was to make the printed newspaper available in the web. Until 2010 NZZ had to separate editorial offices, one for online and one for printed news. Putting all the articles from both offices into one backend and displaying them all in the same frontend was a challenge, especially performance was a problem. We're precaching the articles and save them in WebSQL so the front end feels like a desktop app and is really fast.",r.a.createElement("br",null),"During my time at Liip I had the chance to work for some rather big clients like Jungfraubahnen (shop.jungfrau.ch), a booking platform for all kinds of activities in the Jungfrau region, SCHILD (schild.ch), a huge clothing brand in Switzerland and Raiffeisen (memberplus.raiffeisen.ch), another booking platform where Raiffeisen can put up special offers for their shareholders. In my last month at Liip I took over the Product Owner role for our Jungfrau project. Which is a great opportunity to learn more about project management as well as budgeting and time management."))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 bg-primary","data-aos":"fade-right","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body cc-experience-header"},r.a.createElement("p",null,"Aug 2008 - May 2009"),r.a.createElement("div",{className:"h5"},"Zattoo Inc"))),r.a.createElement("div",{className:"col-md-9","data-aos":"fade-left","data-aos-offset":"50","data-aos-duration":"500"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"h5"},"Intern"),r.a.createElement("p",null,"Zattoo was a start-up at that time which made and still makes TV channels available for online receiving. As an Intern I was responsible for expanding the channel offering in Europe as well as for maintaining the current Server setup. Part of expanding was also setting up new satellite dishes, where I learned a lot about radio signals and how to measure them.")))))))}}]),t}(n.Component),w=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"profile-page"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"page-header page-header-small","filter-color":"green"},r.a.createElement("div",{className:"page-header-image","data-parallax":"true"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content-center"},r.a.createElement("div",{className:"cc-profile-image"},r.a.createElement("img",{src:"images/nessa.jpg",alt:"Vanessa Aryanata H\xe4nni"})),r.a.createElement("div",{className:"h2 title"},"Vanessa Aryanata"),r.a.createElement("p",{className:"category text-white"},"Web Developer, Digital Marketing, Scuba Diving Instructor"),r.a.createElement("a",{className:"btn btn-primary smooth-scroll mr-2",href:"#contact","data-aos":"zoom-in","data-aos-anchor":"data-aos-anchor"},"Hire Me"),r.a.createElement("a",{className:"btn btn-primary",tartet:"_blank",href:"https://docs.google.com/document/d/1EteBQUjz8jguXokpn00sabFe_MAmVpy0zZwY0uwmhMk/edit?usp=sharing","data-aos":"zoom-in","data-aos-anchor":"data-aos-anchor"},"Download CV"))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"button-container"},r.a.createElement("a",{className:"btn btn-default btn-round btn-lg btn-icon",href:"https://www.facebook.com/nessie.arya",rel:"tooltip",title:"Follow me on Facebook"},r.a.createElement("i",{className:"fab fa-facebook"})),r.a.createElement("a",{className:"btn btn-default btn-round btn-lg btn-icon",href:"https://twitter.com/n3ssi3",rel:"tooltip",title:"Follow me on Twitter"},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement("a",{className:"btn btn-default btn-round btn-lg btn-icon",href:"https://www.instagram.com/n3ssi3.m3",rel:"tooltip",title:"Follow me on Instagram"},r.a.createElement("i",{className:"fab fa-instagram"}))))))))}}]),t}(n.Component),y=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section",id:"skill"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"h4 text-center mb-4 title"},"Professional Skills"),r.a.createElement("div",{className:"card","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"HTML"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"100%"}}),r.a.createElement("span",{className:"progress-value"},"100%")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"CSS"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"100%"}}),r.a.createElement("span",{className:"progress-value"},"100%"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"SASS"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"90%"}}),r.a.createElement("span",{className:"progress-value"},"90%")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"Bootstrap"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"85%"}}),r.a.createElement("span",{className:"progress-value"},"85%"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"JavaScript (ES6)"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"75%"}}),r.a.createElement("span",{className:"progress-value"},"75%")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"PHP"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"85%"}}),r.a.createElement("span",{className:"progress-value"},"85%"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"Marketing"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"70%"}}),r.a.createElement("span",{className:"progress-value"},"70%")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"Social Media Campaign"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"60%"}}),r.a.createElement("span",{className:"progress-value"},"60%"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"Agile Management"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"75%"}}),r.a.createElement("span",{className:"progress-value"},"75%")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress-container progress-primary"},r.a.createElement("span",{className:"progress-badge"},"Photoshop"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-primary","data-aos":"progress-full","data-aos-offset":"10","data-aos-duration":"2000",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"55%"}}),r.a.createElement("span",{className:"progress-value"},"55%")))))))))}}]),t}(n.Component),k=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-content"},r.a.createElement(w,null),r.a.createElement(E,null),r.a.createElement(y,null),r.a.createElement(N,null),r.a.createElement(b,null),r.a.createElement(f,null))}}]),t}(n.Component),j=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"profile-page"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"page-header page-header-small","filter-color":"green",style:{height:"60vh",maxHeight:"440px",minHeight:0}},r.a.createElement("div",{className:"page-header-image","data-parallax":"true"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content-center"},r.a.createElement("div",{className:"h2 title"},"Thank you!"),r.a.createElement("p",null,"I will get back to you as soon as I can."))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"button-container"},r.a.createElement("a",{className:"btn btn-default btn-round btn-lg btn-icon",href:"https://www.facebook.com/vanessa.aryanata",rel:"tooltip",title:"Follow me on Facebook"},r.a.createElement("i",{className:"fab fa-facebook"})),r.a.createElement("a",{className:"btn btn-default btn-round btn-lg btn-icon",href:"https://twitter.com/n3ssi3",rel:"tooltip",title:"Follow me on Twitter"},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement("a",{className:"btn btn-default btn-round btn-lg btn-icon",href:"https://plus.google.com/u/1/+vanessah\xe4nni",rel:"tooltip",title:"Follow me on Google+"},r.a.createElement("i",{className:"fab fa-google-plus"})),r.a.createElement("a",{className:"btn btn-default btn-round btn-lg btn-icon",href:"https://www.instagram.com/n3ssi3.m3/",rel:"tooltip",title:"Follow me on Instagram"},r.a.createElement("i",{className:"fab fa-instagram"}))))))))}}]),t}(n.Component),O=(t(26),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"top"},r.a.createElement(g,null),r.a.createElement(u.a,null,r.a.createElement("div",{className:"page-content"},r.a.createElement(v.a,{path:"/",exact:!0,component:k}),r.a.createElement(v.a,{path:"/thankyou",component:j}))),r.a.createElement(h,null))}}]),t}(n.Component)),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");S?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):x(e)}))}}(),c.a.init()}},[[21,1,2]]]);
//# sourceMappingURL=main.03f0265c.chunk.js.map