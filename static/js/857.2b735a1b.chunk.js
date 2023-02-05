"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[857],{3857:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(2791),a=n(1523),i=n(6842),o=n(184),s=function(e){var t=e.data;return(0,o.jsx)("article",{className:"degree-container",children:(0,o.jsxs)("header",{children:[(0,o.jsx)("h4",{className:"degree",children:t.degree}),(0,o.jsxs)("p",{className:"school",children:[(0,o.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"education",children:[(0,o.jsx)("div",{className:"link-to",id:"education"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,o.jsx)(s,{data:e},e.degree)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return(0,o.jsxs)("article",{className:"jobs-container",children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("h4",{children:[(0,o.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,o.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,o.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"experience"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"IT Experience"})}),t.map((function(e){return(0,o.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d,m=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"art experience"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Art Experience"})}),t.map((function(e){return(0,o.jsx)(u,{data:e},e.company)}))]})};m.defaultProps={data:[]};var f=m;var y=n(9142);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(0,y.Z)(r.key),r)}}var v=n(9611);function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var g=n(1002);function j(e,t){if(t&&("object"===(0,g.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var k=n(4942),w=n(1413),S=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,o.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},N=function(e){var t=e.data,n=e.categories,r=t.category,a=t.competency,i=t.title,s={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,w.Z)((0,w.Z)({},s),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return(0,o.jsxs)("div",{className:"skillbar clearfix",children:[(0,o.jsx)("div",{className:"skillbar-title",style:s,children:(0,o.jsx)("span",{children:i})}),(0,o.jsx)("div",{className:"skillbar-bar",style:c}),(0,o.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};N.defaultProps={categories:[]};var C=N,O=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,w.Z)((0,w.Z)({},e),{},(0,k.Z)({},t,!1))}),{All:!0}),skills:n}},P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,v.Z)(e,t)}(i,e);var t,n,r,a=x(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,w.Z)((0,w.Z)({},n),{},(0,k.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=O({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,o.jsx)(C,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,o.jsx)(S,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,o.jsxs)("div",{className:"skills",children:[(0,o.jsx)("div",{className:"link-to",id:"skills"}),(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h3",{children:"Skills"}),(0,o.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,o.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,o.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);P.defaultProps={skills:[],categories:[]};var A=P,D=function(e){var t=e.data,n=e.last;return(0,o.jsxs)("li",{className:"course-container",children:[(0,o.jsxs)("a",{href:t.link,children:[(0,o.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,o.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,o.jsx)("div",{className:"course-dot",children:(0,o.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var Z=D,E=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,o.jsx)(Z,{data:t,last:n===e.length-1},t.title)}))},J=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"courses",children:[(0,o.jsx)("div",{className:"link-to",id:"courses"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Other Courses"})}),(0,o.jsx)("ul",{className:"course-list",children:E(t)})]})};J.defaultProps={data:[]};var T=J,L=[{title:"Next.js with Sanity CMS",number:"May 2021",link:"http://stanford.edu/class/ee364a/",university:"Udemy"},{title:"The modern React Bootcamp",number:"Jul 2021",link:"http://cs229.stanford.edu/",university:"Udemy"},{title:"Arte e internet: la red como campo de investigaci\xf3n para las nuevas pr\xe1cticas art\xedsticas",number:"Jul 2017",link:"https://www.medialab-matadero.es/actividades/arte-e-internet-la-red-como-campo-de-investigacion-para-las-nuevas-practicas-artisticas",university:"Stanford"}],R=[{school:"DuocUC, Chile",degree:"Computer Engineering",link:"https://www.duoc.cl/wp-content/uploads/2021/10/INGE-INFORMATICA.pdf",year:2020},{school:"DuocUC, Chile",degree:"Programmer Analyst",link:"https://www.duoc.cl/wp-content/uploads/2021/10/ANALISTA-PROG.pdf",year:2015},{school:"Universidad de Chile, Chile",degree:"Music Composition",link:"https://www.uchile.cl/carreras/57017/composicion-musical",year:2011},{school:"Universidad de Chile, Chile",degree:"Music Theory",link:"https://www.uchile.cl/carreras/4954/teoria-de-la-musica",year:2008}],M=[{company:"ILO",position:"Consultant",link:"",daterange:"Nov, 2020 -- Jan, 2021",points:["Web scraping to public job portals in Latin America."]},{company:"SCLOUD",position:"SAPUI5 -IoT Consultant",link:"",daterange:"Jul, 2019 -- Jan, 2020",points:["IoT prototype with dashboard for vineyard (Esp32, SAPUI5).","Hybrid mobile application for Telecommunications company","Augmented Reality Prototype for Retail Company"]},{company:"Karibu",position:"Development Engineer",link:"https://karibu.cl/",daterange:"May, 2016 -- Nov, 2017",points:["Java Microservices, developments in Java with Agile Methodology","Point of Sale desktop application in Java Swing","Flow changes and minor enhancements to native Android app."]},{company:"Analyze",position:"QA, Testing",link:"https://www.analyze.cl/",daterange:"Jun, 2015 -- Feb, 2016",points:["Testing for agricultural software","Quality assurance for ERP software."]}],I=[{company:"Radier",position:"music album",link:"google.com",daterange:"Sept, 2021",points:["free latin rock"]},{company:"Efecto Caracola",position:"Sound art installation, Museo Arte Contempor\xe1neo, CL",link:"google.com",daterange:"Aug, 2017",points:["webscraping, multi channel digital synthesis, video projection"]},{company:"Petra",position:"Sound design, Centro Experimental de Arte Tessier",link:"google.com",daterange:"Aug, 2016",points:["synthesis, time strechting"]},{company:"Arrojo y Molestia",position:"music album",link:"google.com",daterange:"Jun, 2014",points:["post-hardcore"]}],W=n(907);var U=n(181);var B,_=[{title:"Javascript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"Java",competency:4,category:["Web Development","Framework","Java"]},{title:"SpringBoot",competency:3,category:["Web Development","Languages","Java"]},{title:"Docker",competency:3,category:["Tools"]},{title:"Node.JS",competency:2,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:3,category:["Tools","Languages"]},{title:"MongoDB",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:3,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:1,category:["Web Development","Javascript"]},{title:"D3",competency:1,category:["Web Development","Javascript"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:2,category:["Languages","Python"]},{title:"C++",competency:2,category:["Languages"]},{title:"Latex",competency:1,category:["Languages"]},{title:"Data Visualization",competency:1,category:["Data Science","Javascript"]}].map((function(e){return(0,w.Z)((0,w.Z)({},e),{},{category:e.category.sort()})})),F=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],Q=(B=new Set(_.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,W.Z)(e)}(B)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(B)||(0,U.Z)(B)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:F[t]}})),z=["Education","Experience","Art Experience","Skills","Courses"],G=function(){return(0,o.jsx)(i.Z,{title:"Resume",description:"Sebasti\xe1n Vel\xe1squez Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:(0,o.jsxs)("article",{className:"post",id:"resume",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(a.rU,{to:"resume",children:"Resume"})}),(0,o.jsx)("div",{className:"link-container",children:z.map((function(e){return(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,o.jsx)(l,{data:R}),(0,o.jsx)(p,{data:M}),(0,o.jsx)(f,{data:I}),(0,o.jsx)(A,{skills:_,categories:Q}),(0,o.jsx)(T,{data:L})]})})}},4942:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(9142);function a(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},9142:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(1002);function a(e){var t=function(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==(0,r.Z)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}},1002:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=857.2b735a1b.chunk.js.map