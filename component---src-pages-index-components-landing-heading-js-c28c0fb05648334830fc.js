(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/e88":function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"10Zl":function(e,a,t){e.exports={headerContainer:"header-module--header-container--pSuWd",contactInfo:"header-module--contact-info--2qCg8",title:"header-module--title--NPYyh",headingSubtext:"header-module--heading-subtext--1D-cz",navBar:"header-module--nav-bar--1D0KD",hamburgerMenu:"header-module--hamburger-menu--3ze7d"}},LbRr:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("Wbzz"),c=t("10Zl"),l=t.n(c);a.a=function(e){var a;"undefined"!=typeof window&&(a=window.matchMedia("only screen and (max-width: 768px)").matches),console.log("Mobile? "+a);var t=Object(n.useState)(!a),c=t[0],i=t[1];console.log(c);var u={},s={};"true"===e.transparantBackground?u.background="none":"true"===e.darkMode?u.background="var(--gunmetal)":u.background="var(--light-grey)","true"===e.whiteFont&&(u.color="#ffffff",s.color="#ffffff"),c&&(s.color="#ffffff");var d=function(){console.log(c),i(!c)};return"true"===e.fixedHeader?u.position="fixed":u.position="relative",r.a.createElement("header",{className:l.a.headerContainer,style:u},r.a.createElement(o.a,{to:"/",className:l.a.title,style:{}},r.a.createElement("span",null,"Farasat ",r.a.createElement("span",{className:"gold-font"},"M.")),r.a.createElement("div",{className:l.a.headingSubtext},"Architect & Designer")),r.a.createElement("div",{className:l.a.contactInfo},"+971 52 998 7374"),c&&r.a.createElement("div",{className:l.a.navBar,id:"navBar"},r.a.createElement(o.a,{to:"/",className:"hover-underline",onClick:d},"Home"),r.a.createElement(o.a,{to:"/projects/",className:"hover-underline",onClick:d},"Projects"),r.a.createElement(o.a,{to:"/about/",className:"hover-underline",onClick:d},"About"),r.a.createElement(o.a,{to:"/contact/",className:"hover-underline",onClick:d},"Contact")),r.a.createElement("button",{className:l.a.hamburgerMenu,style:s,onClick:d},"☰"))}},Wbzz:function(e,a,t){"use strict";t.d(a,"b",(function(){return u}));t("xfY5");var n=t("q1tI"),r=t.n(n),o=t("+ZDr"),c=t.n(o);t.d(a,"a",(function(){return c.a}));t("lw3w"),t("emEt").default.enqueue;var l=r.a.createContext({});function i(e){var a=e.staticQueryData,t=e.data,n=e.query,o=e.render,c=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,c&&o(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var a=e.data,t=e.query,n=e.render,o=e.children;return r.a.createElement(l.Consumer,null,(function(e){return r.a.createElement(i,{data:a,query:t,render:n||o,staticQueryData:e})}))}},kL2R:function(e,a,t){"use strict";t.r(a);t("KKXr");var n=t("q1tI"),r=t.n(n),o=t("Wbzz"),c=t("9eSz"),l=t.n(c),i=t("y0lT"),u=t.n(i),s=t("LbRr");a.default=function(e){var a,t,c=e.projects,i=Object(n.useState)(0),d=i[0],m=i[1];null!=c&&(a=c.length-1);var f=function(){m(d===a?0:d+1)};return null!=c&&(t=c[d]),setTimeout((function(){f()}),1e4),null!=c?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:u.a.landingSection},r.a.createElement(s.a,{transparantBackground:"true",darkMode:"false",whiteFont:"true",darktitle:"true",fixedHeader:""}),r.a.createElement("div",{className:u.a.headerGradient}),r.a.createElement(o.a,{to:"/project/"+t.node.fields.slug,className:u.a.imgLink},r.a.createElement(l.a,{loading:"eager",className:u.a.carouselImg,fluid:t.heroImage.node.childImageSharp.fluid,alt:t.heroImage.node.base.split(".")[1],imgStyle:{objectPosition:"center center"}})),r.a.createElement("div",{className:u.a.carouselCaptionContainer},r.a.createElement(o.a,{to:"/project/"+t.node.fields.slug,className:u.a.carouselCaption},r.a.createElement("h2",null,t.node.frontmatter.projectName," ",t.node.frontmatter.projectNameGold),r.a.createElement("p",{className:u.a.projectDescription},t.node.frontmatter.featuredDescription))),r.a.createElement("div",{className:u.a.carouselControl},r.a.createElement("div",{className:u.a.carouselImgCircles,onClick:function(){return m(0===d?a:d-1)}}),r.a.createElement("div",{className:u.a.carouselImgCircles,onClick:f})))):null}},lw3w:function(e,a,t){var n;e.exports=(n=t("rzlk"))&&n.default||n},qncB:function(e,a,t){var n=t("XKFU"),r=t("vhPU"),o=t("eeVq"),c=t("/e88"),l="["+c+"]",i=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),s=function(e,a,t){var r={},l=o((function(){return!!c[e]()||"​"!="​"[e]()})),i=r[e]=l?a(d):c[e];t&&(r[t]=i),n(n.P+n.F*l,"String",r)},d=s.trim=function(e,a){return e=String(r(e)),1&a&&(e=e.replace(i,"")),2&a&&(e=e.replace(u,"")),e};e.exports=s},rzlk:function(e,a,t){"use strict";t.r(a);t("91GP");var n=t("q1tI"),r=t.n(n),o=t("IOVJ");a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null}},xfY5:function(e,a,t){"use strict";var n=t("dyZX"),r=t("aagx"),o=t("LZWt"),c=t("Xbzi"),l=t("apmT"),i=t("eeVq"),u=t("kJMx").f,s=t("EemH").f,d=t("hswa").f,m=t("qncB").trim,f=n.Number,g=f,p=f.prototype,h="Number"==o(t("Kuth")(p)),v="trim"in String.prototype,E=function(e){var a=l(e,!1);if("string"==typeof a&&a.length>2){var t,n,r,o=(a=v?a.trim():m(a,3)).charCodeAt(0);if(43===o||45===o){if(88===(t=a.charCodeAt(2))||120===t)return NaN}else if(48===o){switch(a.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+a}for(var c,i=a.slice(2),u=0,s=i.length;u<s;u++)if((c=i.charCodeAt(u))<48||c>r)return NaN;return parseInt(i,n)}}return+a};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var a=arguments.length<1?0:e,t=this;return t instanceof f&&(h?i((function(){p.valueOf.call(t)})):"Number"!=o(t))?c(new g(E(a)),t,f):E(a)};for(var N,I=t("nh4g")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;I.length>b;b++)r(g,N=I[b])&&!r(f,N)&&d(f,N,s(g,N));f.prototype=p,p.constructor=f,t("KroJ")(n,"Number",f)}},y0lT:function(e,a,t){e.exports={landingSection:"LandingHeader-module--landing-section--3v9sW",headerGradient:"LandingHeader-module--header-gradient--1KIPU",imgLink:"LandingHeader-module--img-link--2SwFQ",carouselImg:"LandingHeader-module--carousel-img--2E2Yp",carouselControl:"LandingHeader-module--carousel-control--2I3G0",carouselImgCircles:"LandingHeader-module--carousel-img-circles--2mqRO",carouselCaptionContainer:"LandingHeader-module--carousel-caption-container--1qiy4",carouselCaption:"LandingHeader-module--carousel-caption--3VUBz",projectDescription:"LandingHeader-module--project-description--2U7sq"}}}]);
//# sourceMappingURL=component---src-pages-index-components-landing-heading-js-c28c0fb05648334830fc.js.map