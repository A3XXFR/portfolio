(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+7Uq":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),l=a("9eSz"),c=a.n(l),d=a("W37f"),s=a.n(d);t.a=function(e){return n.a.createElement(o.a,{to:"/project/"+e.slug,className:s.a.card},n.a.createElement(c.a,{fluid:e.thumbnail.node.childImageSharp.fluid,className:s.a.bgImage}),n.a.createElement("div",{className:s.a.imgOverlay},n.a.createElement("div",{className:s.a.info},n.a.createElement("div",{className:s.a.title},n.a.createElement("h3",null,e.projectName,n.a.createElement("br",null),n.a.createElement("span",{className:"gold-font"},e.projectNameGold))),n.a.createElement("div",{className:s.a.projectAddress},n.a.createElement("span",{className:"gold-font"},e.projectDate)," ",e.projectAddress)),n.a.createElement("div",{className:s.a.verticalText},e.projectType)))}},"/rOE":function(e,t,a){e.exports={cardsContainer:"project-module--cards-container--3R8ha",largeTitle:"project-module--large-title--1Ngkg"}},"16l3":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var r=a("q1tI"),n=a.n(r),o=a("Bl7J"),l=a("+7Uq"),c=a("/rOE"),d=a.n(c),s=a("hIod");t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,r=t.allFile.edges;return a.map((function(e,t){var n=e.node.fileAbsolutePath.substring(0,e.node.fileAbsolutePath.lastIndexOf("/"))+"/images/"+e.node.frontmatter.thumbnail;a[t].thumbnail=r.find((function(e){return e.node.absolutePath===n}))})),n.a.createElement(o.a,null,n.a.createElement(s.a,{title:"Browse Projects",description:"Browse featured projects and an extensive archive of work."}),n.a.createElement("div",{className:d.a.largeTitle}," Projects "),n.a.createElement("div",{className:d.a.cardsContainer},a.map((function(e){return n.a.createElement(l.a,{key:e.node.id,slug:e.node.fields.slug,projectName:e.node.frontmatter.projectName,projectNameGold:e.node.frontmatter.projectNameGold,projectDate:e.node.frontmatter.projectDate,projectAddress:e.node.frontmatter.projectAddress,projectType:e.node.frontmatter.projectType,thumbnail:e.thumbnail})}))))};var m="2555433051"},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("LbRr"),l=a("W/9C");t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null),e.children,n.a.createElement(l.a,null))}},W37f:function(e,t,a){e.exports={card:"project-card-module--card--15zrO",bgImage:"project-card-module--bg-image--3yvEZ",imgOverlay:"project-card-module--img-overlay--1K629",info:"project-card-module--info--3PQ5r",title:"project-card-module--title--sktRr",projectAddress:"project-card-module--project-address--2woSM",verticalText:"project-card-module--vertical-text--3T6E_"}}}]);
//# sourceMappingURL=component---src-pages-projects-js-1f497902cbc3a69fd89b.js.map