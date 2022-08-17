"use strict";(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[247],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{G:function(){return _},L:function(){return g},M:function(){return w},P:function(){return b},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,m=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return r.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},y=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,f),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var E=["fallback"],b=function(e){var t=e.fallback,a=s(e,E);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var w=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=y.propTypes;var N,C,L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],I=new Set,T=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,h=e.onError,f=s(e,S),v=i.width,y=i.height,E=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,y,E),w=b.style,L=b.className,k=s(b,x),T=(0,r.useRef)(),_=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var A=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,v,y);return(0,r.useEffect)((function(){N||(N=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=T.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(_)):C&&I.has(_)?void 0:(N.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;T.current&&(T.current.innerHTML=r(o({isLoading:!0,isLoaded:I.has(_),image:i},f)),I.has(_)||(e=requestAnimationFrame((function(){T.current&&(t=n(T.current,_,I,c,p,g,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){I.has(_)&&C&&(T.current.innerHTML=C(o({isLoading:I.has(_),isLoaded:I.has(_),image:i},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},k,{style:o({},w,c,{backgroundColor:u}),className:L+(d?" "+d:""),ref:T,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));_.propTypes=k,_.displayName="GatsbyImage";var A,O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:L,width:q,height:q,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(A=_,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,O);return n&&console.warn(n),a?r.createElement(A,o({image:a},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=M},4808:function(e,t,a){a.d(t,{T:function(){return n}});var r=a(7294),n=function(e){var t=e.title,a=e.children,n=(0,r.useRef)(null);return(0,r.useEffect)((function(){n.current&&n.current.scrollIntoView()}),[]),r.createElement("div",{ref:n,className:"Page-module--page--2Y5e7"},r.createElement("div",{className:"Page-module--inner--3HKeR"},t&&r.createElement("h1",{className:"Page-module--title--Z69a4"},t),r.createElement("div",{className:"Page-module--body--hPYHN"},a)))}},20:function(e,t,a){a.d(t,{Y:function(){return y}});var r=a(7294),n=a(7783),i=a(1597),o=a(3366),s=a(7059),l=["path"],c=function(e){var t=e.path,a=(0,o.Z)(e,l);return r.createElement(i.StaticQuery,{query:"63107425",render:function(e){var n=e.images,i=(n=void 0===n?{}:n).edges,o=(void 0===i?[]:i).find((function(e){return e.node.absolutePath.includes(t)}));if(!o)return null;var l=o.node.childImageSharp;return r.createElement(s.G,Object.assign({},a,{image:l.gatsbyImageData}))}})},u="Author-module--link--1dqxo",d="Author-module--title--2UdHe",m=function(e){var t=e.author,a=e.isIndex;return r.createElement("div",{className:"Author-module--author--12DFk"},r.createElement(i.Link,{to:"/"},r.createElement(c,{alt:t.name,path:t.photo,className:"Author-module--photo--1WT_U"})),a?r.createElement("h1",{className:d},r.createElement(i.Link,{className:u,to:"/"},t.name)):r.createElement("h2",{className:d},r.createElement(i.Link,{className:u,to:"/"},t.name)),r.createElement("p",{className:"Author-module--subtitle--3HDSh"},t.bio))},p=function(e){var t=e.name,a=e.icon;return r.createElement("svg",{className:"Icon-module--icon--fdMTB",viewBox:a.viewBox},r.createElement("title",null,t),r.createElement("path",{d:a.path}))},g=a(2713),h=function(e){var t=e.contacts;return r.createElement("div",{className:"Contacts-module--contacts--3rFuK"},r.createElement("ul",{className:"Contacts-module--list--3gIi_"},Object.keys(t).map((function(e){return t[e]?r.createElement("li",{className:"Contacts-module--item--3aZ8X",key:e},r.createElement("a",{className:"Contacts-module--link--2rGsi",href:(0,g.KA)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.createElement(p,{name:e,icon:(0,g.q7)(e)}))):null}))))},f=function(e){var t=e.copyright;return r.createElement("div",{className:"Copyright-module--copyright--1IQFN"},t)},v=function(e){var t=e.menu;return r.createElement("nav",{className:"Menu-module--menu--3SbXJ"},r.createElement("ul",{className:"Menu-module--list--1n4ZI"},t.map((function(e){return r.createElement("li",{className:"Menu-module--item--DDbJ8",key:e.path},r.createElement(i.Link,{to:e.path,className:"Menu-module--link--3lstV",activeClassName:"Menu-module--active--aYO_r"},e.label))}))))},y=function(e){var t=e.isIndex,a=(0,n.$W)(),i=a.author,o=a.copyright,s=a.menu;return r.createElement("div",{className:"Sidebar-module--sidebar--1NhQN"},r.createElement("div",{className:"Sidebar-module--inner--12iqG"},r.createElement(m,{author:i,isIndex:t}),r.createElement(v,{menu:s}),r.createElement(h,{contacts:i.contacts}),r.createElement(f,{copyright:o})))}}}]);
//# sourceMappingURL=8c0bf5563d7c85ffec1e86bdb55530b32ab45e29-cee861e921fdbd56a4b2.js.map