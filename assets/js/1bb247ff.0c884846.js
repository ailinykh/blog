"use strict";(self.webpackChunkailinykh_com=self.webpackChunkailinykh_com||[]).push([[246],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return b}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,g=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return t?n.createElement(g,i(i({ref:r},s),{},{components:t})):n.createElement(g,i({ref:r},s))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4231:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=t(3117),a=(t(7294),t(3905));const o={slug:"homebrew-formula-downgrade",title:"Homebrew package version downgrade",author:"Anton Ilinykh",author_image_url:"https://avatars.githubusercontent.com/u/939390?s=400&v=4",tags:["homebrew","package","formula","rollback","guide"]},i=void 0,l={permalink:"/homebrew-formula-downgrade",editUrl:"https://github.com/ailinykh/blog/edit/master/blog/2021-10-23-homebrew-formula-downgrade.md",source:"@site/blog/2021-10-23-homebrew-formula-downgrade.md",title:"Homebrew package version downgrade",description:"Nowadays rollback to any particular version of the Homebrew package might be tricky since the commands brew versions  and brew switch   are deprecated and no more available.",date:"2021-10-23T00:00:00.000Z",formattedDate:"October 23, 2021",tags:[{label:"homebrew",permalink:"/tags/homebrew"},{label:"package",permalink:"/tags/package"},{label:"formula",permalink:"/tags/formula"},{label:"rollback",permalink:"/tags/rollback"},{label:"guide",permalink:"/tags/guide"}],readingTime:2.45,hasTruncateMarker:!0,authors:[{name:"Anton Ilinykh",imageURL:"https://avatars.githubusercontent.com/u/939390?s=400&v=4"}],frontMatter:{slug:"homebrew-formula-downgrade",title:"Homebrew package version downgrade",author:"Anton Ilinykh",author_image_url:"https://avatars.githubusercontent.com/u/939390?s=400&v=4",tags:["homebrew","package","formula","rollback","guide"]},nextItem:{title:"Testing netwok requests with URLProtocol stubs",permalink:"/network-testing-with-url-protocol-stubbing"}},c={authorsImageUrls:[void 0]},u=[],s={toc:u};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nowadays rollback to any particular version of the Homebrew package might be tricky since the commands ",(0,a.kt)("inlineCode",{parentName:"p"},"brew versions <package>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"brew switch <package> <version>")," are deprecated and no more available."))}m.isMDXComponent=!0}}]);