if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/724-b5d826316b920c10ecc0.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/commons-946dbd97d15ace3a0c7b.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/framework-234c83bbdcb3323e151e.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/main-8a4aed2e419fee45b060.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/pages/_app-94c5d57a33da0b772baa.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/pages/_error-cda26f54108235d6dd7e.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/pages/index-6b974365aea207588548.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/pages/learn-f2adb94e09701b699367.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/pages/new-aa6f32448ce04159fb96.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/chunks/webpack-bab0327125c0729dc45d.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/css/61ab4000f480d91339b0.css",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/css/69a9d09baa0ac5a2840b.css",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/css/99d170292583dcbff5bb.css",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/css/e8a67a252e57d2ee0fe6.css",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/szw-pgehRxoBzbZVJY2o5/_buildManifest.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/_next/static/szw-pgehRxoBzbZVJY2o5/_ssgManifest.js",revision:"szw-pgehRxoBzbZVJY2o5"},{url:"/favicon.ico",revision:"8dd409dfa43dd2a3de5a61d57e9abeb6"},{url:"/icons/apple-touch-icon.png",revision:"7e5b843c4f371188406d418cc2f81f0b"},{url:"/icons/icon-192x192.png",revision:"d48f11df94aea7cb298858f8f3506f3d"},{url:"/icons/icon-256x256.png",revision:"99f67af3e01728e56d577f59c2d4e113"},{url:"/icons/icon-384x384.png",revision:"3a7346a3a3044a71ca7d821697192e03"},{url:"/icons/icon-512x512.png",revision:"29f9488c8e7b2a8adbaa48f528ecdbd9"},{url:"/manifest.webmanifest",revision:"9ee0fcc55a53c65895b7ad05ead4f09f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
