"use strict";(self.webpackChunkailinykh_com=self.webpackChunkailinykh_com||[]).push([[345],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));const a={slug:"mikrotik-ipsec-l2tp-bgp-routing",title:"Mikrotik versus Roskomnadzor",author:"Anton Ilinykh",author_image_url:"https://avatars.githubusercontent.com/u/939390?s=400&v=4",tags:["mikrotik","ipsec","l2tp","bgp","dns","\u0440\u043e\u0441\u043a\u043e\u043c\u043d\u0430\u0434\u0437\u043e\u0440","\u043e\u0431\u0445\u043e\u0434 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a"]},o=void 0,l={permalink:"/mikrotik-ipsec-l2tp-bgp-routing",editUrl:"https://github.com/ailinykh/blog/edit/master/blog/2025-02-14-mikrotik-ipsec.md",source:"@site/blog/2025-02-14-mikrotik-ipsec.md",title:"Mikrotik versus Roskomnadzor",description:"For research purposes, you may need to access certain resources from Roskomnadzor\u2019s blacklist, which may be restricted in your country.",date:"2025-02-14T00:00:00.000Z",formattedDate:"February 14, 2025",tags:[{label:"mikrotik",permalink:"/tags/mikrotik"},{label:"ipsec",permalink:"/tags/ipsec"},{label:"l2tp",permalink:"/tags/l-2-tp"},{label:"bgp",permalink:"/tags/bgp"},{label:"dns",permalink:"/tags/dns"},{label:"\u0440\u043e\u0441\u043a\u043e\u043c\u043d\u0430\u0434\u0437\u043e\u0440",permalink:"/tags/\u0440\u043e\u0441\u043a\u043e\u043c\u043d\u0430\u0434\u0437\u043e\u0440"},{label:"\u043e\u0431\u0445\u043e\u0434 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a",permalink:"/tags/\u043e\u0431\u0445\u043e\u0434-\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a"}],readingTime:2.165,hasTruncateMarker:!0,authors:[{name:"Anton Ilinykh",imageURL:"https://avatars.githubusercontent.com/u/939390?s=400&v=4"}],frontMatter:{slug:"mikrotik-ipsec-l2tp-bgp-routing",title:"Mikrotik versus Roskomnadzor",author:"Anton Ilinykh",author_image_url:"https://avatars.githubusercontent.com/u/939390?s=400&v=4",tags:["mikrotik","ipsec","l2tp","bgp","dns","\u0440\u043e\u0441\u043a\u043e\u043c\u043d\u0430\u0434\u0437\u043e\u0440","\u043e\u0431\u0445\u043e\u0434 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a"]},nextItem:{title:"FFMPEG cheatsheet",permalink:"/ffmpeg-cheatsheet"}},s={authorsImageUrls:[void 0]},p=[{value:"Step I. Run IPSeC server",id:"step-i-run-ipsec-server",level:3},{value:"Step II. L2TP client setup",id:"step-ii-l2tp-client-setup",level:3},{value:"Step III. BGP configuration",id:"step-iii-bgp-configuration",level:3},{value:"Step IV. Firewall configuration",id:"step-iv-firewall-configuration",level:2},{value:"Step V. DNS configuratoin (optional)",id:"step-v-dns-configuratoin-optional",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For research purposes, you may need to access certain resources from ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Internet_censorship_in_Russia#Internet_blacklist"},"Roskomnadzor\u2019s blacklist"),", which may be restricted in your country."),(0,i.kt)("p",null,"There are five small steps to bypass the blacklist using a MikroTik router and an IPsec/L2TP connection on a simple VPS running a Docker container."),(0,i.kt)("h3",{id:"step-i-run-ipsec-server"},"Step I. Run IPSeC server"),(0,i.kt)("p",null,"There are many ways to do this, but I prefer running a simple Docker container on your VPS. On your server, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"compose.yml")," file with the following content, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_SHARED_SECRET")," with a securely generated random password."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  ipsec:\n    image: hwdsl2/ipsec-vpn-server\n    restart: always\n    environment:\n      VPN_IPSEC_PSK: YOUR_SHARED_SECRET\n      VPN_USER: mikrotik\n      VPN_PASSWORD: mikrotik\n    ports:\n      - "500:500/udp"\n      - "4500:4500/udp"\n    privileged: true\n    hostname: ipsec-vpn-server\n    container_name: ipsec-vpn-server\n')),(0,i.kt)("p",null,"Save the file, then run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose up -d")," container and wait for the container to start."),(0,i.kt)("h3",{id:"step-ii-l2tp-client-setup"},"Step II. L2TP client setup"),(0,i.kt)("p",null,"Next, retrieve your VPS hostname or IP address and create a new L2TP client on your MikroTik router using the following terminal command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[admin@MikroTik] > interface l2tp-client add disabled=no name=l2tp-out connect-to=<YOUR_HOST_IP> user=mikrotik password=mikrotik use-ipsec=yes ipsec-secret=<YOUR_SHARED_SECRET>\n[admin@MikroTik] > interface l2tp-client add name=l2tp-out connect-to=new-kittens.ailinykh.com user=mikrotik password=mikrotik use-ipsec=yes ipsec-secret=IAmSittingInTheMorningAtTheDinnerOnTheCorner\n")),(0,i.kt)("p",null,"Check it's working"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[admin@MikroTik] > ping github.com interface=l2tp-out\n")),(0,i.kt)("p",null,"If you receive an ICMP response, it means everything is working perfectly"),(0,i.kt)("h3",{id:"step-iii-bgp-configuration"},"Step III. BGP configuration"),(0,i.kt)("p",null,"There are several services, such as ",(0,i.kt)("a",{parentName:"p",href:"https://antifilter.download/"},"antifilter.download")," and ",(0,i.kt)("a",{parentName:"p",href:"https://antifilter.network/"},"antifilter.network"),", that provide blacklisted routes from RKN. "),(0,i.kt)("p",null,"These services can automatically configure your router via BGP, eliminating the need to update lists manually every day. "),(0,i.kt)("p",null,"To set up BGP, visit ",(0,i.kt)("a",{parentName:"p",href:"https://antifilter.network/bgp"},"antifilter.network bgp page")," and obtain your ",(0,i.kt)("inlineCode",{parentName:"p"},"ASN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Router ID")," (your IP address), and ",(0,i.kt)("inlineCode",{parentName:"p"},"Service IP")),(0,i.kt)("p",null,"Create template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[admin@MikroTik] > /routing/bgp template add as=64999 disabled=no hold-time=4m input.filter=bgp_in .ignore-ad-path-len=yes keepalive-time=1m multihop=yes name=antifilter routing-table=main\n")),(0,i.kt)("p",null,"...and connection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[admin@MikroTik] > /routing/bgp connection add disabled=no hold-time=4m input.filter=bgp_in .ignore-ad-path-len=yes keepalive=time=1m local.role=ebgp multihop=yes name=antifilter_bgp remote.address=51.75.66.20/32 .as=65444 router-id=<YOUR_IP_ADDRESS> routing-table=main templates=antifilter\n")),(0,i.kt)("p",null,"Wait ",(0,i.kt)("strong",{parentName:"p"},"around 5 minutes")," and see if everything works"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'[admin@MikroTik] > /routing/bgp/session print  \nFlags: E - established \n 0 E name="antifilter_bgp-1" \n     remote.address=45.148.244.55 .as=65444 .id=10.75.66.2 .capabilities=mp,rr,gr,as4,err,llgr .afi=ip,ipv6 .hold-time=4m \n     .messages=11991 .bytes=1011967 .gr-time=120 .eor=ip \n     local.address=192.168.88.1 .as=64999 .id=<YOUR_IP_ADDRESS> .cluster-id=<YOUR_IP_ADDRESS> .capabilities=mp,rr,gr,as4 .afi=ip \n     .messages=4 .bytes=76 .eor="" \n     output.procid=20 \n     input.procid=20 .filter=bgp_in .ignore-as-path-len=yes ebgp \n     multihop=yes hold-time=4m keepalive-time=1m uptime=3m1s320ms last-started=2025-02-15 12:22:37 prefix-count=19725 \n')),(0,i.kt)("p",null,"At the end of the output, you'll see the number of prefixes: ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix-count=19725")),(0,i.kt)("h2",{id:"step-iv-firewall-configuration"},"Step IV. Firewall configuration"),(0,i.kt)("p",null,"To route traffic through the correct gateway, add the following rule to Mikrotik's firewall"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'[admin@MikroTik] > /routing/filter/rule add chain=bgp_in disabled=no rule="set gw l2tp-out; accept;"\n')),(0,i.kt)("h2",{id:"step-v-dns-configuratoin-optional"},"Step V. DNS configuratoin (optional)"),(0,i.kt)("p",null,"To avoid seeing unwanted ads, you can also use a DNS blocking service like ",(0,i.kt)("a",{parentName:"p",href:"https://adguard-dns.io/en/blog/adguard-dns-new-addresses.html"},"AdGuard DNS"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[admin@MikroTik] > /ip/dns set servers=94.140.14.14,94.140.15.15\n")),(0,i.kt)("p",null,"Enjoy!"))}c.isMDXComponent=!0}}]);