(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));t(51),t(24),t(19),t(20),t(52),t(0);var r=t(171);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={id:"welcome",title:"Welcome",author:"Yangshun Tay",author_title:"Front End Engineer @ Facebook",author_url:"https://github.com/yangshun",author_image_url:"https://avatars0.githubusercontent.com/u/1315101?s=400&v=4",tags:["facebook","hello","docusaurus"]},c=[],u={rightToc:c},i="wrapper";function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(i,a({},u,t,{components:n,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},171:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},u=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),l=c(t),s=r,f=l[u+"."+s]||l[s]||p[s]||o;return t?a.a.createElement(f,Object.assign({},{ref:n},i,{components:t})):a.a.createElement(f,Object.assign({},{ref:n},i))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=l;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[i]="string"==typeof e?e:r,c[1]=u;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);