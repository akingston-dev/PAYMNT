(this["webpackJsonprandom-react"]=this["webpackJsonprandom-react"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},26:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var c=s(2),i=s(16),n=s.n(i),a=(s(23),s(15)),r=s(3),l=s(10),o=s(7),b=(s(24),s(1)),j=["btn--primary","btn--outline"],d=["btn--medium","btn--large","btn--mobile","btn--wide"],h=["primary","blue","red","green"],m=function(e){var t=e.children,s=e.type,c=e.onClick,i=e.buttonStyle,n=e.buttonSize,a=e.buttonColor,r=j.includes(i)?i:j[0],l=d.includes(n)?n:d[0],o=h.includes(a)?a:null;return Object(b.jsxs)("button",{className:"btn ".concat(r," ").concat(l," ").concat(o," "),onClick:c,type:s,children:[" ",t," "]})},u=(s(26),s(0));var x=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)(!0),j=Object(a.a)(n,2),d=j[0],h=j[1],x=function(){return i(!1)},O=function(){window.innerWidth<=960?h(!1):h(!0)};return Object(c.useEffect)((function(){O()}),[]),window.addEventListener("resize",O),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u.b.Provider,{value:{color:"#fff"},children:Object(b.jsx)("div",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-container container",children:[Object(b.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:x,children:[Object(b.jsx)(l.a,{className:"navbar-icon"}),"PAYMNT"]}),Object(b.jsx)("div",{className:"menu-icon",onClick:function(){return i(!s)},children:s?Object(b.jsx)(o.e,{}):Object(b.jsx)(o.a,{})}),Object(b.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{to:"/",className:"nav-links",onClick:x,children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{to:"/services",className:"nav-links",onClick:x,children:"Services"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{to:"/products",className:"nav-links",onClick:x,children:"Products"})}),Object(b.jsx)("li",{className:"nav-btn",children:d?Object(b.jsx)(r.b,{to:"/sign-up",className:"btn-link",onClick:x,children:Object(b.jsx)(m,{buttonStyle:"btn--outline",children:"SIGN UP"})}):Object(b.jsx)(r.b,{to:"/sign-up",className:"btn-link",children:Object(b.jsx)(m,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:"SIGN UP"})})})]})]})})})})},O=s(4),g=s(9);s(35);var v=function(e){var t=e.lightBg,s=e.topLine,c=e.lightText,i=e.lightTextDesc,n=e.headline,a=e.description,l=e.buttonLabel,o=e.img,j=e.alt,d=e.imgStart;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===d?"row-reverse":"row"},children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(b.jsxs)("div",{className:"top-line",children:[" ",s," "]}),Object(b.jsxs)("h1",{className:c?"heading":"heading dark",children:[" ",n," "]}),Object(b.jsxs)("p",{className:i?"home__hero-subtitle":"home__hero-subtitle dark",children:[" ",a," "]}),Object(b.jsx)(r.b,{to:"/sign-up",children:Object(b.jsxs)(m,{buttonSize:"btn--wide",buttonColor:"blue",children:[" ",l," "]})})]})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"home__hero-img-wrapper",children:Object(b.jsx)("img",{src:o,alt:j,className:"home__hero-img"})})})]})})})})},p={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"images/svg-1.svg",alt:"Credit Card"},N={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"100% SECURE",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"",img:"images/svg-5.svg",alt:"Vault"},f={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"images/svg-7.svg",alt:"Vault"},k={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"images/svg-8.svg",alt:"Vault"};var w=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,Object(g.a)({},p)),Object(b.jsx)(v,Object(g.a)({},f)),Object(b.jsx)(v,Object(g.a)({},N)),Object(b.jsx)(v,Object(g.a)({},k))]})};s(36);var y=function(){return Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsxs)("section",{className:"footer-subscription",children:[Object(b.jsx)("p",{className:"footer-subscription-heading",children:"Join our exclusive membership to receive the latest news and trends"}),Object(b.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(b.jsx)("div",{className:"input-areas",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(b.jsx)(m,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(b.jsxs)("div",{className:"footer-links",children:[Object(b.jsxs)("div",{className:"footer-link-wrapper",children:[Object(b.jsxs)("div",{className:"footer-link-items",children:[Object(b.jsx)("h2",{children:"About Us"}),Object(b.jsx)(r.b,{to:"/sign-up",children:"How it works"}),Object(b.jsx)(r.b,{to:"/",children:"Testimonials"}),Object(b.jsx)(r.b,{to:"/",children:"Careers"}),Object(b.jsx)(r.b,{to:"/",children:"Investors"}),Object(b.jsx)(r.b,{to:"/",children:"Terms of Service"})]}),Object(b.jsxs)("div",{className:"footer-link-items",children:[Object(b.jsx)("h2",{children:"Contact Us"}),Object(b.jsx)(r.b,{to:"/",children:"Contact"}),Object(b.jsx)(r.b,{to:"/",children:"Support"}),Object(b.jsx)(r.b,{to:"/",children:"Destinations"}),Object(b.jsx)(r.b,{to:"/",children:"Sponsorships"})]})]}),Object(b.jsxs)("div",{className:"footer-link-wrapper",children:[Object(b.jsxs)("div",{className:"footer-link-items",children:[Object(b.jsx)("h2",{children:"Videos"}),Object(b.jsx)(r.b,{to:"/",children:"Submit Video"}),Object(b.jsx)(r.b,{to:"/",children:"Ambassadors"}),Object(b.jsx)(r.b,{to:"/",children:"Agency"}),Object(b.jsx)(r.b,{to:"/",children:"Influencer"})]}),Object(b.jsxs)("div",{className:"footer-link-items",children:[Object(b.jsx)("h2",{children:"Social Media"}),Object(b.jsx)(r.b,{to:"/",children:"Instagram"}),Object(b.jsx)(r.b,{to:"/",children:"Facebook"}),Object(b.jsx)(r.b,{to:"/",children:"Youtube"}),Object(b.jsx)(r.b,{to:"/",children:"Twitter"})]})]})]}),Object(b.jsx)("section",{className:"social-media",children:Object(b.jsxs)("div",{className:"social-media-wrap",children:[Object(b.jsx)("div",{className:"footer-logo",children:Object(b.jsxs)(r.b,{to:"/",className:"social-logo",children:[Object(b.jsx)(l.a,{className:"navbar-icon"}),"LAVISH"]})}),Object(b.jsx)("small",{className:"website-rights",children:"LAVISH \xa9 2020"}),Object(b.jsxs)("div",{className:"social-icons",children:[Object(b.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook",children:Object(b.jsx)(o.b,{})}),Object(b.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram",children:Object(b.jsx)(o.c,{})}),Object(b.jsx)(r.b,{className:"social-icon-link",to:"//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber",target:"_blank","aria-label":"Youtube",children:Object(b.jsx)(o.g,{})}),Object(b.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter",children:Object(b.jsx)(o.f,{})}),Object(b.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(b.jsx)(o.d,{})})]})]})})]})};var S=function(){return Object(b.jsxs)(r.a,{children:[Object(b.jsx)(x,{}),Object(b.jsx)(O.c,{children:Object(b.jsx)(O.a,{path:"/",exact:!0,component:w})}),Object(b.jsx)(y,{})]})};n.a.render(Object(b.jsx)(S,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.304fef3a.chunk.js.map