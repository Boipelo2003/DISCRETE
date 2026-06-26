<!DOCTYPE html>
<!-- saved from url=(0071)https://chat.deepseek.com/a/chat/s/2b83f8dd-ed9a-4425-bfd2-d500ee944d50 -->
<html lang="en-US" class="notranslate" translate="no" data-qb-installed="true"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Server-side pricing integration guide - DeepSeek</title><meta name="viewport" content="initial-scale=1.0,maximum-scale=1,minimum-scale=1.0,user-scalable=no,width=device-width,viewport-fit=cover"><meta name="commit-id" content="1300ef9f7"><meta name="description" content="Chat with DeepSeek AI – your intelligent assistant for coding, content creation, file reading, and more. Upload documents, engage in long-context conversations, and get expert help in AI, natural language processing, and beyond. | 深度求索（DeepSeek）助力编程代码开发、创意写作、文件处理等任务，支持文件上传及长文本对话，随时为您提供高效的AI支持。"><meta name="keywords" content="DeepSeek,DeepSeek AI,DeepSeek Chat,AI assistant,coding assistant,long-context LLM,Open Source LLM,natural language processing,AI chatbot,AI long text,AI content creation,large language model,深度求索,大语言模型,自然语言处理,AI聊天机器人,代码开发,创意写作,AI助手,长文本对话,文件处理AI,大模型公司,人工智能,AI开发助手"><meta property="og:url" content="https://chat.deepseek.com"><meta property="og:type" content="website"><meta property="og:title" content="DeepSeek"><meta property="og:description" content="Chat with DeepSeek AI."><meta property="og:image" content="https://cdn.deepseek.com/images/deepseek-chat-open-graph-image.jpeg"><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="deepseek.com"><meta property="twitter:url" content="https://chat.deepseek.com"><meta name="twitter:title" content="DeepSeek"><meta name="twitter:description" content="Chat with DeepSeek AI."><meta name="twitter:image" content="https://cdn.deepseek.com/images/deepseek-chat-open-graph-image.jpeg"><meta name="google" content="notranslate"><meta name="ip" content="41.57.16.3"><meta name="region" content="ZA"><link rel="apple-touch-icon" href="https://cdn.deepseek.com/chat/icon.png"><link rel="icon" type="image/x-icon" href="https://fe-static.deepseek.com/chat/favicon.svg"><script>"use strict";(()=>{let e;var t,n={disable_sdk_monitor:!0,enable_ab_test:!1,auto_exposure_expriment:!1,enable_stay_duration:!0,enable_debug:!1},a="volcengine_enabled",o=null,r=()=>{let e=Date.now();if(o&&e-o.timestampMs<=300)return o.state;let t=(()=>{var e,t,n;try{let o=localStorage.getItem("__ds_remote_feature_store");if(!o)return"unknown";let r=JSON.parse(o),s=(null==r?void 0:r.schemaVersion)===2?null==(t=null==(e=null==r?void 0:r.entries)?void 0:e[a])?void 0:t.value:null==(n=null==r?void 0:r.features)?void 0:n[a];return"true"===s?"enabled":"false"===s?"disabled":"unknown"}catch{return"unknown"}})();return o={state:t,timestampMs:e},t},s=e=>{},l=e=>{var t,n,a,o,r,s,l,i,c,d;t=window,n=document,a="apmPlus",o="precollect",r="addEventListener",(s=function(e){l=[].slice.call(arguments),l.push(Date.now(),location.href),(e==o?s.p.a:s.q).push(l)}).q=[],s.p={a:[]},t[a]=s,(i=document.createElement("script")).src="https://apm.volccdn.com/mars-web/apmplus/web/browser.cn.js?aid=0&globalName="+a,i.crossOrigin="anonymous",n.getElementsByTagName("head")[0].appendChild(i),r in t&&(s.pcErr=function(e){(c=(e=e||t.event).target||e.srcElement)instanceof Element||c instanceof HTMLElement?t[a](o,"st",{tagName:c.tagName,url:c.getAttribute("href")||c.getAttribute("src")}):t[a](o,"err",e.error||e.message)},s.pcRej=function(e){e=e||t.event,t[a](o,"reject",e.reason||e.detail&&e.detail.reason)},t[r]("error",s.pcErr,!0),t[r]("unhandledrejection",s.pcRej,!0)),"PerformanceLongTaskTiming"in t&&((d=s.pp={entries:[]}).observer=new PerformanceObserver(function(e){d.entries=d.entries.concat(e.getEntries())}),d.observer.observe({entryTypes:["longtask"]})),window.apmPlus("init",{aid:e.aid,token:e.token,env:e.env,release:e.release,domain:e.domain,plugins:{action:{enable:!0},performance:{longtask:!1},pageview:{routeMode:"manual"}}}),window.apmPlus("start")},i="__ds_report_settlers",c=e=>{let t=window;Array.isArray(t[i])||(t[i]=[]),t[i].push(e)},d=()=>{let e;(e=document.createElement("script")).defer=!0,e.src="https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/5.0/collect-rangers-v5.2.11.js",document.head.appendChild(e)},u=()=>{let e=document.querySelector('meta[name="commit-id"]');return e?e.content:""};(()=>{var e=window,t="collectEvent";if(e.LogAnalyticsObject=t,!e[t]){let n=(...e)=>{n.q.push(e)};n.q=[],e[t]=n}e[t].l=+new Date;let n=r();switch(n){case"enabled":d();return;case"disabled":return;case"unknown":c(e=>{e&&d()});return;default:s(n)}})(),t={timeoutMs:1e4,rootSelector:"#root",resourcePatterns:[/\/main(?:\.[\da-zA-Z-_]+)?\.js$/,/\/main(?:\.[\da-zA-Z-_]+)?\.css$/,/\/default-vendors(?:\.[\da-zA-Z-_]+)?\.js$/],dataFinderConfig:{appId:0x13145ad,channelDomain:"https://gator.volces.com",abChannelDomain:"https://tab.volces.com",enableStorage:!1,commitId:u()}},"enabled"===r()&&(e=Date.now(),window.setTimeout(()=>{var a,o,r,s;let l,i,c=window.collectEvent;"function"==typeof c&&((e=>{if(!0===window.__dsDataFinderStarted)return;let t=window.collectEvent;"function"==typeof t&&(t("init",{...n,app_id:e.appId,channel_domain:e.channelDomain,ab_channel_domain:e.abChannelDomain,enable_storage:e.enableStorage}),t("start"),window.__dsDataFinderStarted=!0,t("config",{commit_id:e.commitId}))})(t.dataFinderConfig),c("blankScreenCheck",{ds_timeoutMs:t.timeoutMs,ds_elapsedMs:Date.now()-e,ds_isBlank:(a=t.rootSelector,null===(l=document.querySelector(a))||0===l.children.length&&""===(l.textContent||"").trim()),ds_visibilityState:document.visibilityState,ds_resourceStatus:(o=t.resourcePatterns,i=null!=(s=null==(r=null==performance?void 0:performance.getEntriesByType)?void 0:r.call(performance,"resource"))?s:[],o.map(e=>{let t,n=i.find(t=>e.test(t.name));return void 0===n?"".concat(e.source,",missing"):"".concat((t=n.name).split("#")[0].split("?")[0].split("/").pop()||t,",").concat(n.responseEnd>0?"loaded":"failed")}).join(";"))}))},t.timeoutMs)),(e=>{let t=r();switch(t){case"enabled":l(e);return;case"disabled":return;case"unknown":c(t=>{t&&l(e)});return;default:s(t)}})({aid:675113,token:"772f2fcc08224a50b0134f8d3c139a21",env:"chat.deepseek.com"===location.hostname?"production":"other",release:u(),domain:"https://apmplus.volces.com"})})()</script><script defer="" src="./products_files/collect-rangers-v5.2.11.js.download"></script><script src="./products_files/browser.cn.js.download" crossorigin="anonymous"></script><style>._sri-logo{position:absolute;left:16px;top:21px;user-select:none;z-index:1}div._sri-ck{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;height:100vh;width:100%;position:absolute;top:0;left:0;background:#fff;color:#1d1d1f}@media (prefers-color-scheme: dark){div._sri-ck{background:#000;color:#f5f5f7}}._sri-ck .img{width:100px;height:100px;margin-bottom:24px}._sri-ck .desc{font-size:15px;line-height:22px;margin:0 0 24px;color:#81858c}@media (prefers-color-scheme: dark){._sri-ck .desc{color:#adb2b8}}._sri-ck .btn{display:inline-flex;align-items:center;justify-content:center;height:36px;min-width:72px;padding:12px 14px;font-size:14px;font-weight:500;color:#fff;background:#3964fe;border:none;border-radius:9999px;cursor:pointer;font-family:inherit;box-sizing:border-box}@media (prefers-color-scheme: dark){._sri-ck .btn{background:#5686fe}}
</style><script>(()=>{"use strict";let e=null,t={disable_sdk_monitor:!0,enable_ab_test:!1,auto_exposure_expriment:!1,enable_stay_duration:!0,enable_debug:!1},o=function(){return"function"!=typeof window.collectEvent?()=>0:window.collectEvent.apply(window,arguments)},a={en:{d:"Unable to load page resources. Please refresh and try again.",b:"Reload",logo:"DeepSeek"},zh:{d:"页面资源加载异常，请刷新重试",b:"重新加载",logo:"DeepSeek"}};window._sriCk=function(){var n;let r,i,s,d,l,c=(e=>{let t=navigator.languages||[navigator.language||""];for(let o=0;o<t.length;o++){let a=t[o].toLowerCase().split("-")[0];if(e.includes(a))return a}return null})(Object.keys(a)),g=c?a[c]:a.en,u='<img src="https://fe-static.deepseek.com/chat/static/web-logo.svg" alt="'+g.logo+'" class="_sri-logo" width=143 height=23>';u+='<div class="_sri-ck"><img class="img" src="https://fe-static.deepseek.com/chat/static/web-error-logo.svg" alt="" width=100 height=100><p class="desc">'+g.d+'</p><button class="btn" onclick="location.reload()">'+g.b+"</button></div>",(i=(r=document).createElement("div"),r.body.replaceChildren(i),i).innerHTML=u,(s=document.head.querySelector('meta[name="commit-id"]'))&&(e=s.getAttribute("content")),n=arguments,!0!==window.__dsDataFinderStarted&&(o("start"),o("init",{...t,app_id:0x13145ad,channel_domain:"https://gator.volces.com",enable_storage:!1}),window.__dsDataFinderStarted=!0),o("scriptLoadError",(l=(e=>{if(!e||!performance||!performance.getEntriesByName)return;let t=performance.getEntriesByName(e)[0];if(t)return t})(d=n[0]?n[0].src:"")||{},{ds_src:d,dsp__commitId:e,ds_duration:l.duration,ds_encodedBodySize:l.encodedBodySize}))}})()</script><script defer="" onerror="_sriCk(this)" src="./products_files/default-vendors.bca4876a42.js.download"></script><script defer="" onerror="_sriCk(this)" src="./products_files/main.876fbaccb8.js.download"></script><link href="./products_files/main.ff1e6216a7.css" rel="stylesheet"><style>
body.change-theme * {
  transition: none !important;
}

body.change-theme *::before {
  transition: none !important;
}

body.change-theme *::after {
  transition: none !important;
}
</style><link data-rspack="@deepseek/chat:chunk-52059" rel="stylesheet" href="./products_files/katex.effce08cb3.css"><link data-rspack="@deepseek/chat:chunk-91851" rel="stylesheet" href="./products_files/previewAll.4ed938354d.css"></head><body class="en_US dark" data-ds-dark-theme="dark" style="--app-height: 732px;"><div id="root"><div class="cb86951c"><div class="cddfb2ed"></div><div class="c3ecdb44"><div class="dc04ec1d a02af2e6"><div class="ca6d4be1 _5a20a69"><div class="_6acebc2"><svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4892_24313)"><path d="M26.5542 4.34393C26.2719 4.20592 26.1506 4.46928 25.9856 4.60268C25.9292 4.64581 25.8815 4.70216 25.8338 4.75391C25.4215 5.19438 24.9396 5.48361 24.3105 5.44911C23.3905 5.39736 22.605 5.68659 21.9104 6.39041C21.7626 5.52271 21.2721 5.00462 20.5258 4.67226C20.1353 4.49976 19.7403 4.32668 19.4666 3.95119C19.2757 3.68381 19.2234 3.38595 19.1279 3.09211C19.0669 2.91501 19.0066 2.73388 18.8024 2.7034C18.5811 2.6689 18.4942 2.85463 18.4074 3.00989C18.0601 3.6447 17.9255 4.34393 17.9388 5.05235C17.9692 6.64572 18.642 7.91478 19.9789 8.81756C20.1307 8.92106 20.1698 9.02457 20.1221 9.1758C20.0307 9.48688 19.9226 9.78876 19.8271 10.0998C19.7662 10.2982 19.6753 10.3419 19.4626 10.2551C18.7288 9.94862 18.0952 9.49493 17.5351 8.94694C16.5846 8.02749 15.7249 7.01258 14.6531 6.21791C14.4013 6.03218 14.1494 5.85967 13.8889 5.69522C12.7952 4.63316 14.0321 3.76086 14.3185 3.65736C14.618 3.54925 14.4225 3.17779 13.4548 3.18239C12.487 3.18642 11.6015 3.51073 10.4727 3.94256C10.3077 4.00754 10.1341 4.05469 9.95637 4.09379C8.93227 3.89944 7.86849 3.85631 6.75755 3.98167C4.66564 4.21455 2.99464 5.20358 1.7664 6.89183C0.290908 8.92106 -0.0564026 11.2269 0.368535 13.6316C0.815324 16.1663 2.10911 18.2645 4.09695 19.905C6.15838 21.6059 8.53263 22.4397 11.2415 22.2799C12.8867 22.185 14.7181 21.9648 16.7841 20.2161C17.3051 20.4755 17.8519 20.579 18.7587 20.6566C19.4574 20.7216 20.1302 20.6221 20.6511 20.514C21.4671 20.3415 21.4107 19.5859 21.1157 19.4473C18.7242 18.3335 19.2492 18.7866 18.772 18.4198C19.987 16.9822 21.8431 14.4269 22.4158 10.9474C22.4722 10.5633 22.5441 10.0222 22.5355 9.71114C22.5309 9.52138 22.5746 9.44778 22.7913 9.42593C23.3905 9.35693 23.9718 9.19305 24.506 8.89921C26.0557 8.05279 26.6808 6.6624 26.828 4.996C26.8498 4.74126 26.8234 4.47791 26.5542 4.34393ZM13.0511 19.3438C10.7332 17.5216 9.60906 16.9219 9.14502 16.9477C8.71089 16.9736 8.78909 17.4704 8.88454 17.7942C8.98459 18.1139 9.11455 18.3341 9.29683 18.6147C9.42276 18.8004 9.50959 19.0764 9.1709 19.284C8.42453 19.7458 7.12671 19.1288 7.06576 19.0983C5.55519 18.2087 4.29245 17.0346 3.40233 15.4285C2.54268 13.8829 2.04356 12.2245 1.96133 10.4546C1.93948 10.0274 2.06541 9.87617 2.49092 9.79854C3.05099 9.69504 3.62831 9.67319 4.1878 9.75541C6.55342 10.101 8.56713 11.1585 10.2554 12.8341C11.2191 13.788 11.9482 14.9283 12.6992 16.0421C13.4979 17.2249 14.357 18.3519 15.4512 19.276C15.8377 19.5997 16.1459 19.8458 16.4408 20.0275C15.5513 20.127 14.0666 20.1483 13.0511 19.345V19.3438ZM14.162 12.1981C14.162 12.0083 14.3139 11.8571 14.5048 11.8571C14.5479 11.8571 14.587 11.8657 14.6221 11.8784C14.6698 11.8956 14.7135 11.9215 14.748 11.9606C14.8089 12.021 14.8434 12.1072 14.8434 12.1981C14.8434 12.3878 14.6916 12.5391 14.5007 12.5391C14.3098 12.5391 14.162 12.3878 14.162 12.1981ZM17.6127 13.968C17.3913 14.0588 17.17 14.1365 16.9572 14.1451C16.6271 14.1623 16.2672 14.0284 16.0717 13.8645C15.7681 13.6098 15.5507 13.4671 15.4599 13.0227C15.4208 12.8329 15.4426 12.5391 15.4771 12.3706C15.5553 12.0078 15.4685 11.7749 15.2126 11.5633C15.0045 11.3908 14.7394 11.343 14.4484 11.343C14.3397 11.343 14.2403 11.2953 14.1661 11.2568C14.0447 11.1964 13.9447 11.0452 14.0401 10.8594C14.0706 10.7991 14.2184 10.6524 14.2529 10.6266C14.6479 10.4017 15.1034 10.4753 15.5248 10.6438C15.9153 10.8037 16.2108 11.0969 16.6358 11.5115C17.0699 12.0124 17.1481 12.1504 17.3954 12.5264C17.5909 12.8203 17.7686 13.1221 17.8905 13.4677C17.9641 13.6834 17.8686 13.8599 17.6127 13.968Z" fill="var(--dsw-alias-brand-primary)"></path></g><defs><clippath id="clip0_4892_24313"><rect width="26.634" height="19.6" fill="white" transform="translate(0.199951 2.69922)"></rect></clippath></defs></svg></div><div class="e5bf614e"><div style="width: 1px;"></div><div role="button" class="ds-button ds-button--iconLabelPrimary ds-button--icon ds-button--capsule ds-button--m ds-button--icon-relative-m _4f3769f" tabindex="0" style="--dsl-button-height: 34px;"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.67272 0.522841C10.8339 0.522841 11.76 0.522714 12.4963 0.602493C13.2453 0.683657 13.8789 0.854248 14.4264 1.25197C14.7504 1.48739 15.0355 1.77247 15.2709 2.0965C15.6686 2.64394 15.8392 3.27758 15.9204 4.02655C16.0002 4.7629 16 5.68895 16 6.85014V9.14986C16 10.3111 16.0002 11.2371 15.9204 11.9735C15.8392 12.7224 15.6686 13.3561 15.2709 13.9035C15.0355 14.2275 14.7504 14.5126 14.4264 14.748C13.8789 15.1458 13.2453 15.3163 12.4963 15.3975C11.76 15.4773 10.8339 15.4772 9.67272 15.4772H6.3273C5.16611 15.4772 4.24006 15.4773 3.50371 15.3975C2.75474 15.3163 2.1211 15.1458 1.57366 14.748C1.24963 14.5126 0.964549 14.2275 0.729131 13.9035C0.331407 13.3561 0.160817 12.7224 0.0796529 11.9735C-0.000126137 11.2371 1.25338e-09 10.3111 1.25338e-09 9.14986V6.85014C1.25329e-09 5.68895 -0.000126137 4.7629 0.0796529 4.02655C0.160817 3.27758 0.331407 2.64394 0.729131 2.0965C0.964549 1.77247 1.24963 1.48739 1.57366 1.25197C2.1211 0.854248 2.75474 0.683657 3.50371 0.602493C4.24006 0.522714 5.16611 0.522841 6.3273 0.522841H9.67272ZM5.54303 1.88715V14.1118C5.78636 14.1128 6.04709 14.1169 6.3273 14.1169H9.67272C10.8639 14.1169 11.7032 14.1164 12.3493 14.0465C12.9824 13.9779 13.3497 13.8494 13.6268 13.6482C13.8354 13.4966 14.0195 13.3125 14.1711 13.1039C14.3723 12.8268 14.5007 12.4595 14.5693 11.8264C14.6393 11.1803 14.6398 10.341 14.6398 9.14986V6.85014C14.6398 5.65896 14.6393 4.81967 14.5693 4.1736C14.5007 3.54048 14.3723 3.17318 14.1711 2.89609C14.0195 2.68747 13.8354 2.50337 13.6268 2.35179C13.3497 2.1506 12.9824 2.02212 12.3493 1.95353C11.7032 1.88358 10.8639 1.88307 9.67272 1.88307H6.3273C6.04709 1.88307 5.78636 1.8862 5.54303 1.88715ZM4.1828 1.91166C3.99125 1.9216 3.8148 1.93577 3.65076 1.95353C3.01764 2.02212 2.65034 2.1506 2.37325 2.35179C2.16463 2.50337 1.98052 2.68747 1.82895 2.89609C1.62776 3.17318 1.49928 3.54048 1.43069 4.1736C1.36074 4.81967 1.36023 5.65896 1.36023 6.85014V9.14986C1.36023 10.341 1.36074 11.1803 1.43069 11.8264C1.49928 12.4595 1.62776 12.8268 1.82895 13.1039C1.98052 13.3125 2.16463 13.4966 2.37325 13.6482C2.65034 13.8494 3.01764 13.9779 3.65076 14.0465C3.81478 14.0642 3.99127 14.0774 4.1828 14.0873V1.91166Z" fill="currentColor"></path></svg></div></div></div><div role="button" class="ds-button ds-button--iconLabelPrimary ds-button--icon ds-button--capsule ds-button--m ds-button--icon-relative-m _4f3769f" tabindex="0" style="--dsl-button-height: 34px;"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.894845 6.647401C11.894845 3.725463 9.534486 1.356779 6.623219 1.35657C3.711786 1.35657 1.351635 3.725338 1.351635 6.647401C1.351843 9.569296 3.711911 11.938273 6.623219 11.938273C9.534361 11.938064 11.894637 9.569171 11.894845 6.647401ZM13.245462 6.647401C13.245254 10.317935 10.280401 13.293613 6.623219 13.293821C2.965871 13.293821 0.000204 10.31806 0 6.647401C0 2.976574 2.965746 0 6.623219 0C10.280526 0.000205 13.245462 2.9767 13.245462 6.647401Z" fill="currentColor"></path><path d="M16.000417 15.041079L15.044449 16.000433L11.530434 12.473588L12.486298 11.514234L16.000417 15.041079Z" fill="currentColor"></path></svg></div></div></div><div role="button" class="ds-button ds-button--iconLabelPrimary ds-button--icon ds-button--capsule ds-button--m ds-button--icon-relative-m _4f3769f" tabindex="0" style="--dsl-button-height: 34px;"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 0.599609C3.91309 0.599609 0.599609 3.91309 0.599609 8C0.599609 9.13376 0.855461 10.2098 1.3125 11.1719L1.5918 11.7588L2.76562 11.2012L2.48633 10.6143C2.11034 9.82278 1.90039 8.93675 1.90039 8C1.90039 4.63106 4.63106 1.90039 8 1.90039C11.3689 1.90039 14.0996 4.63106 14.0996 8C14.0996 11.3689 11.3689 14.0996 8 14.0996C7.31041 14.0996 6.80528 14.0514 6.35742 13.9277C5.91623 13.8059 5.49768 13.6021 4.99707 13.2529C4.26492 12.7422 3.21611 12.5616 2.35156 13.1074L2.33789 13.1162L2.32422 13.126L1.58789 13.6436L2.01953 14.9297L3.0459 14.207C3.36351 14.0065 3.83838 14.0294 4.25293 14.3184C4.84547 14.7317 5.39743 15.011 6.01172 15.1807C6.61947 15.3485 7.25549 15.4004 8 15.4004C12.0869 15.4004 15.4004 12.0869 15.4004 8C15.4004 3.91309 12.0869 0.599609 8 0.599609ZM7.34473 4.93945V7.34961H4.93945V8.65039H7.34473V11.0605H8.64551V8.65039H11.0605V7.34961H8.64551V4.93945H7.34473Z" fill="currentColor"></path></svg></div></div></div></div></div><div class="b8812f16 a2f3d50e _70b689f" style="display: none;"><div class="_262baab"><div class="e066abb8"><svg width="143" height="23" viewBox="0 0 143 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.6785 18.6823H77.1078V16.2472H78.6785C79.6513 16.2472 80.6342 16.0047 81.2672 15.3308C81.9009 14.6569 82.14 13.6232 82.14 12.59C82.14 11.5569 81.9109 10.5231 81.2672 9.84981C80.6247 9.17594 79.6513 8.93343 78.6785 8.93343C77.7056 8.93343 76.7228 9.17594 76.0886 9.84981C75.4549 10.5237 75.2158 11.5569 75.2158 12.59V22.5909H72.4605V6.50781H75.2158V7.53204H75.7209C75.7757 7.4689 75.8304 7.41525 75.8857 7.36161C76.5752 6.73244 77.6308 6.50781 78.6684 6.50781C80.2944 6.50781 81.9193 6.91236 82.9849 8.03549C84.0499 9.15861 84.4265 10.8835 84.4265 12.6001C84.4265 14.3166 84.0404 16.0326 82.9849 17.1647C81.9288 18.2967 80.2944 18.6834 78.6785 18.6834V18.6823Z" fill="var(--dsw-alias-brand-primary)"></path><path d="M36.7486 6.94097H38.3188V9.37609H36.7486C35.7753 9.37609 34.7929 9.61859 34.1593 10.2925C33.5257 10.9663 33.2871 12.0001 33.2871 13.0332C33.2871 14.0664 33.5167 15.0996 34.1593 15.7734C34.8019 16.4473 35.7753 16.6898 36.7486 16.6898C37.722 16.6898 38.7049 16.4473 39.3385 15.7734C39.9722 15.0996 40.2108 14.0664 40.2108 13.0332V3.02344H42.9655V19.116H40.2108V18.0918H39.7057C39.6503 18.1544 39.5956 18.2086 39.5403 18.2622C38.8513 18.8908 37.7952 19.116 36.7576 19.116C35.1321 19.116 33.5067 18.712 32.4416 17.5889C31.3766 16.4658 31 14.7403 31 13.0243C31 11.3083 31.3856 9.59177 32.4416 8.45971C33.5067 7.33658 35.1321 6.94097 36.7486 6.94097Z" fill="var(--dsw-alias-brand-primary)"></path><path d="M56.7855 12.8155V13.795H49.4483V11.8454H54.3152C54.2051 11.1358 53.9481 10.4709 53.4887 9.9853C52.8277 9.2846 51.808 9.03316 50.7983 9.03316C49.7886 9.03316 48.7688 9.2846 48.1078 9.9853C47.4468 10.686 47.2076 11.7555 47.2076 12.816C47.2076 13.8766 47.4462 14.9544 48.1078 15.6462C48.7688 16.338 49.788 16.5989 50.7983 16.5989C51.8085 16.5989 52.8277 16.3475 53.4887 15.6462C53.5804 15.5473 53.6631 15.4395 53.7458 15.3316H56.4642C56.2256 16.1765 55.849 16.9403 55.2796 17.5332C54.1777 18.692 52.479 19.1145 50.7983 19.1145C49.1175 19.1145 47.4188 18.701 46.3169 17.5332C45.215 16.3653 44.8111 14.5862 44.8111 12.816C44.8111 11.0458 45.2061 9.25778 46.3169 8.0989C47.4283 6.94001 49.1175 6.51758 50.7983 6.51758C52.479 6.51758 54.1777 6.93107 55.2796 8.0989C56.3904 9.26672 56.7855 11.0458 56.7855 12.816V12.8155Z" fill="var(--dsw-alias-brand-primary)"></path><path d="M70.6151 12.8155V13.795H63.2779V11.8454H68.1448C68.0341 11.1358 67.7776 10.4709 67.3183 9.9853C66.6573 9.2846 65.6376 9.03316 64.6279 9.03316C63.6182 9.03316 62.5984 9.2846 61.9374 9.9853C61.2764 10.686 61.0372 11.7555 61.0372 12.816C61.0372 13.8766 61.2758 14.9544 61.9374 15.6462C62.5984 16.338 63.6182 16.5989 64.6279 16.5989C65.6376 16.5989 66.6573 16.3475 67.3183 15.6462C67.4105 15.5473 67.4927 15.4395 67.5748 15.3316H70.2938C70.0546 16.1765 69.678 16.9403 69.1086 17.5332C68.0067 18.692 66.3081 19.1145 64.6279 19.1145C62.9476 19.1145 61.2484 18.701 60.1465 17.5332C59.0446 16.3653 58.6406 14.5862 58.6406 12.816C58.6406 11.0458 59.0357 9.25778 60.1465 8.0989C61.2579 6.94001 62.9471 6.51758 64.6279 6.51758C66.3086 6.51758 68.0067 6.93107 69.1086 8.0989C70.22 9.26672 70.6151 11.0458 70.6151 12.816V12.8155Z" fill="var(--dsw-alias-brand-primary)"></path><path d="M92.2781 19.1156C93.9589 19.1156 95.657 18.8731 96.7589 18.1813C97.8608 17.4896 98.2653 16.438 98.2653 15.3959C98.2653 14.3538 97.8697 13.2932 96.7589 12.6104C95.657 11.9276 93.9583 11.6756 92.2781 11.6756C91.5612 11.6756 90.9002 11.5767 90.4319 11.3163C89.9637 11.0464 89.7893 10.6424 89.7893 10.2379C89.7893 9.83332 89.9547 9.42039 90.4319 9.15944C90.9002 8.88955 91.626 8.80015 92.3418 8.80015C93.0576 8.80015 93.7834 8.89905 94.2528 9.15944C94.721 9.42933 94.8954 9.83332 94.8954 10.2379H97.6959C97.6959 9.1952 97.3383 8.13522 96.3376 7.4524C95.3368 6.76958 93.803 6.51758 92.2787 6.51758C90.7543 6.51758 89.2211 6.76008 88.2198 7.4524C87.219 8.14416 86.8603 9.1952 86.8603 10.2379C86.8603 11.2805 87.2185 12.3405 88.2198 13.0233C89.2205 13.7061 90.7538 13.9582 92.2787 13.9582C93.0682 13.9582 93.941 14.0571 94.464 14.3174C94.9881 14.5784 95.1714 14.9913 95.1714 15.3959C95.1714 15.8004 94.9881 16.2133 94.464 16.4743C93.941 16.7347 93.142 16.8336 92.3524 16.8336C91.5629 16.8336 90.7543 16.7347 90.2397 16.4743C89.7256 16.2139 89.5323 15.8004 89.5323 15.3959H86.2998C86.2998 16.4385 86.6943 17.4985 87.8063 18.1813C88.9171 18.8641 90.5979 19.1156 92.2787 19.1156H92.2781Z" fill="var(--dsw-alias-brand-primary)"></path><path d="M112.094 12.8155V13.795H104.757V11.8454H109.624C109.514 11.1358 109.257 10.4709 108.798 9.9853C108.136 9.2846 107.117 9.03316 106.106 9.03316C105.095 9.03316 104.077 9.2846 103.416 9.9853C102.755 10.686 102.517 11.7555 102.517 12.816C102.517 13.8766 102.755 14.9544 103.416 15.6462C104.077 16.338 105.097 16.5989 106.106 16.5989C107.116 16.5989 108.136 16.3475 108.798 15.6462C108.889 15.5473 108.972 15.4395 109.054 15.3316H111.772C111.533 16.1765 111.157 16.9403 110.588 17.5332C109.486 18.692 107.787 19.1145 106.106 19.1145C104.425 19.1145 102.727 18.701 101.625 17.5332C100.524 16.3653 100.12 14.5862 100.12 12.816C100.12 11.0458 100.515 9.25778 101.625 8.0989C102.737 6.94001 104.427 6.51758 106.106 6.51758C107.786 6.51758 109.486 6.93107 110.588 8.0989C111.699 9.26672 112.093 11.0458 112.093 12.816L112.094 12.8155Z" fill="var(--dsw-alias-brand-primary)"></path><path d="M125.924 12.8155V13.795H118.586V11.8454H123.453C123.344 11.1358 123.086 10.4709 122.627 9.9853C121.966 9.2846 120.947 9.03316 119.936 9.03316C118.926 9.03316 117.907 9.2846 117.246 9.9853C116.585 10.686 116.346 11.7555 116.346 12.816C116.346 13.8766 116.585 14.9544 117.246 15.6462C117.907 16.338 118.927 16.5989 119.936 16.5989C120.946 16.5989 121.966 16.3475 122.627 15.6462C122.719 15.5473 122.801 15.4395 122.885 15.3316H125.602C125.363 16.1765 124.987 16.9403 124.418 17.5332C123.316 18.692 121.617 19.1145 119.936 19.1145C118.256 19.1145 116.558 18.701 115.456 17.5332C114.354 16.3653 113.949 14.5862 113.949 12.816C113.949 11.0458 114.344 9.25778 115.456 8.0989C116.567 6.94001 118.256 6.51758 119.936 6.51758C121.617 6.51758 123.315 6.93107 124.418 8.0989C125.529 9.26672 125.924 11.0458 125.924 12.816V12.8155Z" fill="var(--dsw-alias-brand-primary)"></path><path d="M130.524 3.02344H127.77V19.116H130.524V3.02344Z" fill="var(--dsw-alias-brand-primary)"></path><path d="M135.227 12.4384L139.744 19.1146H136.337L131.819 12.4384L136.337 7.07422H139.744L135.227 12.4384Z" fill="var(--dsw-alias-brand-primary)"></path><g clip-path="url(#clip0_4329_19769)"><path d="M26.5174 3.39471C26.235 3.2567 26.1137 3.52006 25.9487 3.65346C25.8923 3.69659 25.8446 3.75294 25.7969 3.80469C25.3846 4.24516 24.9027 4.53439 24.2737 4.49989C23.3536 4.44814 22.5682 4.73737 21.8735 5.44119C21.7258 4.57349 21.2353 4.0554 20.4889 3.72304C20.0985 3.55054 19.7034 3.37746 19.4297 3.00197C19.2388 2.73459 19.1865 2.43673 19.091 2.14289C19.0301 1.96579 18.9697 1.78466 18.7656 1.75418C18.5442 1.71968 18.4574 1.90541 18.3705 2.06067C18.0232 2.69549 17.8887 3.39471 17.9019 4.10313C17.9324 5.6965 18.6051 6.96556 19.9421 7.86834C20.0939 7.97184 20.133 8.07535 20.0852 8.22658C19.9938 8.53766 19.8857 8.83955 19.7903 9.15063C19.7293 9.34901 19.6385 9.39271 19.4257 9.30588C18.692 8.9994 18.0583 8.54571 17.4982 7.99772C16.5477 7.07827 15.6881 6.06336 14.6162 5.26869C14.3644 5.08296 14.1125 4.91045 13.8521 4.746C12.7584 3.68394 13.9952 2.81164 14.2816 2.70814C14.5812 2.60003 14.3857 2.22857 13.4179 2.23317C12.4502 2.2372 11.5646 2.56151 10.4359 2.99335C10.2708 3.05832 10.0972 3.10547 9.91951 3.14457C8.8954 2.95022 7.83162 2.90709 6.72069 3.03245C4.62877 3.26533 2.95777 4.25436 1.72954 5.94261C0.254043 7.97184 -0.0932679 10.2777 0.33167 12.6824C0.778458 15.2171 2.07225 17.3153 4.06008 18.9558C6.12152 20.6567 8.49577 21.4905 11.2047 21.3306C12.8498 21.2358 14.6812 21.0155 16.7473 19.2669C17.2682 19.5262 17.8151 19.6297 18.7219 19.7074C19.4205 19.7724 20.0933 19.6729 20.6143 19.5648C21.4302 19.3923 21.3739 18.6367 21.0789 18.4981C18.6874 17.3843 19.2124 17.8374 18.7351 17.4706C19.9501 16.033 21.8063 13.4776 22.379 9.99821C22.4353 9.61409 22.5072 9.073 22.4986 8.76192C22.494 8.57216 22.5377 8.49856 22.7545 8.47671C23.3536 8.40771 23.935 8.24383 24.4692 7.94999C26.0188 7.10357 26.6439 5.71318 26.7911 4.04678C26.8129 3.79204 26.7865 3.52869 26.5174 3.39471ZM13.0143 18.3946C10.6964 16.5724 9.5722 15.9726 9.10816 15.9985C8.67402 16.0244 8.75222 16.5212 8.84768 16.8449C8.94773 17.1646 9.07768 17.3849 9.25996 17.6655C9.38589 17.8512 9.47272 18.1272 9.13404 18.3348C8.38766 18.7965 7.08985 18.1796 7.0289 18.1491C5.51833 17.2595 4.25559 16.0853 3.36546 14.4793C2.50581 12.9337 2.0067 11.2753 1.92447 9.50542C1.90262 9.07818 2.02855 8.92695 2.45406 8.84932C3.01413 8.74582 3.59144 8.72397 4.15093 8.80619C6.51656 9.15178 8.53027 10.2092 10.2185 11.8848C11.1822 12.8388 11.9114 13.979 12.6623 15.0929C13.461 16.2757 14.3201 17.4027 15.4144 18.3268C15.8008 18.6505 16.109 18.8966 16.404 19.0783C15.5144 19.1778 14.0297 19.1991 13.0143 18.3958V18.3946ZM14.1252 11.2489C14.1252 11.0591 14.277 10.9079 14.4679 10.9079C14.511 10.9079 14.5501 10.9165 14.5852 10.9292C14.6329 10.9464 14.6766 10.9723 14.7111 11.0114C14.7721 11.0718 14.8066 11.158 14.8066 11.2489C14.8066 11.4386 14.6548 11.5899 14.4639 11.5899C14.273 11.5899 14.1252 11.4386 14.1252 11.2489ZM17.5759 13.0188C17.3545 13.1096 17.1331 13.1873 16.9203 13.1959C16.5903 13.2131 16.2303 13.0791 16.0348 12.9153C15.7312 12.6605 15.5139 12.5179 15.423 12.0734C15.3839 11.8837 15.4057 11.5899 15.4402 11.4214C15.5185 11.0585 15.4316 10.8257 15.1757 10.614C14.9676 10.4415 14.7025 10.3938 14.4115 10.3938C14.3029 10.3938 14.2034 10.3461 14.1292 10.3076C14.0079 10.2472 13.9078 10.096 14.0033 9.91023C14.0338 9.84985 14.1815 9.70322 14.216 9.67734C14.6111 9.45251 15.0665 9.52612 15.488 9.6946C15.8784 9.85445 16.174 10.1477 16.5989 10.5623C17.033 11.0631 17.1112 11.2011 17.3585 11.5772C17.554 11.871 17.7317 12.1729 17.8536 12.5185C17.9272 12.7341 17.8317 12.9107 17.5759 13.0188Z" fill="var(--dsw-alias-brand-primary)"></path></g><defs><clippath id="clip0_4329_19769"><rect width="26.634" height="19.6" fill="white" transform="translate(0.163086 1.75)"></rect></clippath></defs></svg></div><div class="_23e1c55"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--m ds-button--icon-relative-m ds-button--sizing-content d05a0287" tabindex="0" style="--dsl-button-height: 34px;"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.894845 6.647401C11.894845 3.725463 9.534486 1.356779 6.623219 1.35657C3.711786 1.35657 1.351635 3.725338 1.351635 6.647401C1.351843 9.569296 3.711911 11.938273 6.623219 11.938273C9.534361 11.938064 11.894637 9.569171 11.894845 6.647401ZM13.245462 6.647401C13.245254 10.317935 10.280401 13.293613 6.623219 13.293821C2.965871 13.293821 0.000204 10.31806 0 6.647401C0 2.976574 2.965746 0 6.623219 0C10.280526 0.000205 13.245462 2.9767 13.245462 6.647401Z" fill="currentColor"></path><path d="M16.000417 15.041079L15.044449 16.000433L11.530434 12.473588L12.486298 11.514234L16.000417 15.041079Z" fill="currentColor"></path></svg></div></div></div><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--m ds-button--icon-relative-m ds-button--sizing-content _7d1f5e2" tabindex="0" style="--dsl-button-height: 34px;"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.67272 0.522841C10.8339 0.522841 11.76 0.522714 12.4963 0.602493C13.2453 0.683657 13.8789 0.854248 14.4264 1.25197C14.7504 1.48739 15.0355 1.77247 15.2709 2.0965C15.6686 2.64394 15.8392 3.27758 15.9204 4.02655C16.0002 4.7629 16 5.68895 16 6.85014V9.14986C16 10.3111 16.0002 11.2371 15.9204 11.9735C15.8392 12.7224 15.6686 13.3561 15.2709 13.9035C15.0355 14.2275 14.7504 14.5126 14.4264 14.748C13.8789 15.1458 13.2453 15.3163 12.4963 15.3975C11.76 15.4773 10.8339 15.4772 9.67272 15.4772H6.3273C5.16611 15.4772 4.24006 15.4773 3.50371 15.3975C2.75474 15.3163 2.1211 15.1458 1.57366 14.748C1.24963 14.5126 0.964549 14.2275 0.729131 13.9035C0.331407 13.3561 0.160817 12.7224 0.0796529 11.9735C-0.000126137 11.2371 1.25338e-09 10.3111 1.25338e-09 9.14986V6.85014C1.25329e-09 5.68895 -0.000126137 4.7629 0.0796529 4.02655C0.160817 3.27758 0.331407 2.64394 0.729131 2.0965C0.964549 1.77247 1.24963 1.48739 1.57366 1.25197C2.1211 0.854248 2.75474 0.683657 3.50371 0.602493C4.24006 0.522714 5.16611 0.522841 6.3273 0.522841H9.67272ZM5.54303 1.88715V14.1118C5.78636 14.1128 6.04709 14.1169 6.3273 14.1169H9.67272C10.8639 14.1169 11.7032 14.1164 12.3493 14.0465C12.9824 13.9779 13.3497 13.8494 13.6268 13.6482C13.8354 13.4966 14.0195 13.3125 14.1711 13.1039C14.3723 12.8268 14.5007 12.4595 14.5693 11.8264C14.6393 11.1803 14.6398 10.341 14.6398 9.14986V6.85014C14.6398 5.65896 14.6393 4.81967 14.5693 4.1736C14.5007 3.54048 14.3723 3.17318 14.1711 2.89609C14.0195 2.68747 13.8354 2.50337 13.6268 2.35179C13.3497 2.1506 12.9824 2.02212 12.3493 1.95353C11.7032 1.88358 10.8639 1.88307 9.67272 1.88307H6.3273C6.04709 1.88307 5.78636 1.8862 5.54303 1.88715ZM4.1828 1.91166C3.99125 1.9216 3.8148 1.93577 3.65076 1.95353C3.01764 2.02212 2.65034 2.1506 2.37325 2.35179C2.16463 2.50337 1.98052 2.68747 1.82895 2.89609C1.62776 3.17318 1.49928 3.54048 1.43069 4.1736C1.36074 4.81967 1.36023 5.65896 1.36023 6.85014V9.14986C1.36023 10.341 1.36074 11.1803 1.43069 11.8264C1.49928 12.4595 1.62776 12.8268 1.82895 13.1039C1.98052 13.3125 2.16463 13.4966 2.37325 13.6482C2.65034 13.8494 3.01764 13.9779 3.65076 14.0465C3.81478 14.0642 3.99127 14.0774 4.1828 14.0873V1.91166Z" fill="currentColor"></path></svg></div></div></div></div></div><div class="_5a8ac7a a084f19e" tabindex="0" style="justify-content: center;"><div class="ds-icon _1c42ad7" style="font-size: 16px; width: 16px; height: 16px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 0.599609C3.91309 0.599609 0.599609 3.91309 0.599609 8C0.599609 9.13376 0.855461 10.2098 1.3125 11.1719L1.5918 11.7588L2.76562 11.2012L2.48633 10.6143C2.11034 9.82278 1.90039 8.93675 1.90039 8C1.90039 4.63106 4.63106 1.90039 8 1.90039C11.3689 1.90039 14.0996 4.63106 14.0996 8C14.0996 11.3689 11.3689 14.0996 8 14.0996C7.31041 14.0996 6.80528 14.0514 6.35742 13.9277C5.91623 13.8059 5.49768 13.6021 4.99707 13.2529C4.26492 12.7422 3.21611 12.5616 2.35156 13.1074L2.33789 13.1162L2.32422 13.126L1.58789 13.6436L2.01953 14.9297L3.0459 14.207C3.36351 14.0065 3.83838 14.0294 4.25293 14.3184C4.84547 14.7317 5.39743 15.011 6.01172 15.1807C6.61947 15.3485 7.25549 15.4004 8 15.4004C12.0869 15.4004 15.4004 12.0869 15.4004 8C15.4004 3.91309 12.0869 0.599609 8 0.599609ZM7.34473 4.93945V7.34961H4.93945V8.65039H7.34473V11.0605H8.64551V8.65039H11.0605V7.34961H8.64551V4.93945H7.34473Z" fill="currentColor"></path></svg></div><span>New chat</span><div class="ds-focus-ring"></div></div><div class="_3586175 ds-scroll-area ds-scroll-area--show-on-focus-within ds-scroll-area--enabled"><div class="ds-scroll-area__gutters" style="--container-height: 0px; position: sticky; top: 0px; left: 0px; right: 0px; width: 100%; height: 0px;"><div class="ds-scroll-area__horizontal-gutter" style="left: 3px; right: 3px; display: block; top: calc(var(--container-height) - 11px); height: 8px;"><div class="ds-scroll-area__horizontal-bar" style="display: none;"></div></div><div class="ds-scroll-area__vertical-gutter" style="right: -10px; top: 3px; bottom: calc(0px - var(--container-height) + 3px); width: 8px;"><div class="ds-scroll-area__vertical-bar" style="top: 0px; height: 68.8316px; display: none;"></div></div></div><div class="_6d215eb ds-scroll-area ds-scroll-area--show-on-focus-within ds-scroll-area--enabled" style="--container-height: 0px;"><div class="_77cdc67 _8a693f3"><div class="_3098d02"><div class="f3d18f6a">Today</div><a class="_546d736 b64fb9ae" href="https://chat.deepseek.com/a/chat/s/2b83f8dd-ed9a-4425-bfd2-d500ee944d50" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Server-side pricing integration guide</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/f4f324e7-61d1-4979-b1e4-25a2f8608dcb" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Code Review Confirms Logic Correct</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/1304a0b8-5c7d-45fa-b954-259282b1c7c0" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Admin Dashboard Code Review</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/5cf5d65e-2a34-4ea2-9119-299d9310c4e0" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Grant Portfolio C# Solution</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/6b1ec2c8-26fb-4b15-b10e-4ca68ce187b9" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Assignment 4 Phase Clarification Request</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a></div><div class="_3098d02"><div class="f3d18f6a">Yesterday</div><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/2239d9b2-0521-4ea6-8739-323cc6a04bc0" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Firebase config safety explanation</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/56018982-e504-4fd3-ace5-0c3858c46506" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Login function replacement</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a></div><div class="_3098d02"><div class="f3d18f6a">7 Days</div><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/e743505d-71c7-4690-872d-fc4d705ff21c" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Password setup guide</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/3267b0ed-11ae-47f8-9e46-6d330cfa399d" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Interaction diagram example communication diagram</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/b1798f6b-4990-4a83-8169-5573f48adde1" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Website Code Review and Fixes</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/d36d65e8-fb3f-4c5f-a50b-435efee150d7" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Vercel PayFast secure integration</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/7ec88bc1-e0bb-4440-9d16-f64fac76b7b8" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Upload Website to Firebase Guide</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/36796a0c-da5a-4fec-a05b-ca5a737f056f" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">PayFast Integration for DISCRETE Checkout</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a></div><div class="_3098d02"><div class="f3d18f6a">30 Days</div><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/d3e337a0-17cd-4b3a-bf27-41c06586747f" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Low Cost Church Fundraising Ideas for June 16</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/a0e9a4e3-adfa-4d7d-893f-9f53d6215546" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Admin Order Dashboard for Discrete Store</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/32033655-b897-4a26-9c59-128d38cdfe7b" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Publish GitHub site to Google Search</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/f8305c9e-2b0c-4f96-948c-d0c779e85d0d" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Project Management Markdown File</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/9ddbdafa-726e-4d73-8a79-249e9b7e0f68" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Enterprise Network Design Step by Step Guide</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/c6bc3e1d-fd9c-4af4-bd12-b04b7d16645d" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Enterprise Network Design Step by Step</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/7b4937b0-f188-403e-bb02-33c843947437" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Trunk Port Configuration Guide</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/43d525c3-7291-408b-8053-eb1f3c499aae" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">ATS Friendly Black White CV Creation</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/45e4cf12-acb7-4d31-abf1-a033b3708f74" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Website outreach message for bakery</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/b1769aa5-2cde-4bea-8e60-15fe61aa740b" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Barber Booking Website Pricing Advice</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/c867d101-f532-4a69-a1a4-5fc1cb4eecd0" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Code Review and Bug Fixes</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/79101efb-7a73-401e-b3e0-a1ce150725d4" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Switch Node Configuration Help</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/bc418908-23fc-439d-a13c-f2e5408a57ec" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">JavaScript Booking System Code Issues</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/09a3af88-3391-4889-aade-a6592d53c954" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Barber Booking Script Review Ready</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/f49d28ef-8eb1-4afd-b722-616b0a45904f" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Separate CSS and JS files</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/001c0550-b440-454c-a98b-c6d5cf559a81" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Viral Short Script for Supportive Family Privilege</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/130e6a75-adcf-4bad-8561-df7801f98e11" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Missing HTML Elements Identified</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/63ff29a0-2f09-4e17-8d83-874b886b4119" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Code Review for Clothing Brand Site</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/ccb42845-1f5b-414a-8836-6c1989026721" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">D06 Product Card D01 Style Fix</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/f021fba9-e94c-4419-b71d-40388e2e95b2" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">HTML Code Review and Feedback</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/dd9872cc-1bea-4cbb-9dc7-0621e46becf2" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Add Four T-Shirt Products to Store</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/b9783a10-815c-4856-8b05-57b615c2b712" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">HTML Product Card Code Review</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/88c52bfc-f71a-425d-bedf-ca10d784e933" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Assignment help request clarification</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/1a8f13e5-032c-4b0b-b857-7d0bbaf50e6f" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">User Asks for Job Qualification</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a></div><div class="_3098d02"><div class="f3d18f6a">2026-05</div><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/b3a1ee91-e6ee-424c-8585-daa47c53d6aa" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Cart Script Review Request</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/7df84099-3c7b-4d5f-adea-7d56917166f4" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Discrete Brand Ecommerce Website</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/12b4811c-80e6-429a-84e7-8c9d6924bf34" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Car review green screen YouTube Shorts guide</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/13f86983-399c-4056-9ef5-8cb47f56aaf4" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">DISCRETE Website Review and Enhancements</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/ab3c3cc1-5e36-4a18-8f34-f86b4cde0b8d" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Discrete website enhancement suggestions</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/d37f10c3-58cb-4f33-9fc1-36472fc86bbe" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">GALXBOY Header Copy</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/bdec516e-33f4-4cd6-8f49-fee8b24644e1" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Assignment help request</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/88de2cf0-22ee-4a85-98e1-cfb37c82c445" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Grant Portfolio Budget Analyser Project Guide</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/08331605-760d-40a9-b717-1734b07e8e58" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Create Word table from data</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/6e466126-81c7-49cc-bb47-0586949341d6" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Steezy's Panenka Website Improvement Suggestions</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/24c1a7b0-d7e7-435d-b58d-02a818c4397f" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">How to Connect Database to Website</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/ae3dd951-8cdc-42b9-86a8-d017bd822afc" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Website Review and Security Analysis</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/72ec6a98-0979-4be2-816e-da4bcb9e7dbb" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Restaurant Website with Image Management</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/47d8deff-510e-40ff-b686-0dbdd386d704" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Steezy's Panenka Website Code Review</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/e762ff20-e5b0-44ac-aca7-a113d9df9ab3" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Steezy's Panenka Website Review</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/222059d9-6b43-4e00-b513-71529637334b" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">PHP LongServiceBonus Class Solution</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/15aeb6bb-4b8c-4655-8ee2-c37f13b3abb6" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Calendar Slot Management Prompt</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/a3932707-f5fc-45d6-9244-6e6b3c2f5076" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Assignment Submission Instructions Explained</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/c1d163e9-94e9-4869-a8b6-e093e2485c9b" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Where to Add Budget Data Fields in Form Code</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/5b106706-f8c0-4cc4-9f02-fe02878c36d8" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Code placement and fix guidance</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/dc251637-a894-422f-a06e-a7f2407f5b56" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Website Feature Suggestions</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/bb51d032-745d-4d9d-88eb-f9931bab2068" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Improve Steezy's Panenka Website</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/a1b77523-6450-4fec-9308-a5c2daa73fc1" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Security Fix Inquiry Response</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/b76eb8f6-0c4a-4fbb-abb3-3b934a032c66" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Barber Booking Website Review</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/63fca05f-6e14-456b-abee-77ac1e968093" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">AI generated text identification analysis</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/8d5f9cac-078d-4db6-a927-77327dfd1b33" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Important features to add to barber booking site</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/29c92147-5c5a-4bac-bea7-6964cdc331b8" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Barber booking system code review and suggestions</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/a752188a-d123-4df5-81a5-087d1b7fd9aa" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Barber Booking App Code Review</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/dddd4634-c582-4887-bf38-dc6165d4cf36" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Anthropic API Key Connection UI</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/46e80f77-cc8e-4c0d-bba2-99ecd1f9f3d9" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Private Barber Booking System Code Review</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/4b6853cf-5dbe-4e16-873e-3a4c6bd3297f" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Assignment 2 Phase 1 Solution Guidance</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/7db4e30e-627b-4a4a-ac7c-fde26bb93324" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Assignment 2 Phases Simplified Explanation</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/3b7c9555-b392-4627-b1df-ff43e6a32e1b" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Grant Portfolio Assignment Help</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/688427b3-420a-45d3-b7a9-a00e54da5fd7" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Caveman Ecosystem Explanation</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/99a6ca5e-9180-4997-a6b9-0569e06aa6be" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Where to fix booking rules and credits</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/e9b69ed2-3948-4ec6-ab0c-c9eec11845c6" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Claude pricing plan explanation</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/a23f3d22-e38c-4960-9898-0fc7dcad4f0a" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Four Digit Postal Code Regex Validation</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/0e2de5b2-179e-4b5d-be00-c0acbeaff8f8" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Google Cloud API key restriction guidance</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/a4169bfc-bcd8-45b5-b8f8-a9edc3cf1ef7" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Fix leaked Google API key on website</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/b1a8be83-5373-401e-b1b4-f23a2ee8a049" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">VOKA STUDIO Agency Creation Guide</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/e525fbd3-19a8-47e7-84f4-c9c5f413fc0a" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Visual Basic array declaration question</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/bca59d4c-e28f-44b0-ae35-f0d7b427b467" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Financial Advice for Sustainable Budget</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a></div><div class="_3098d02"><div class="f3d18f6a">2026-04</div><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/76b56e8e-2b97-44c7-b579-e9e28e03657f" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Simple explanation of PHP constructor</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/79b6d8bc-f24b-4e3e-b2fc-b87a2591f3e4" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">PHP object iteration output question</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/11434928-3f0b-4ca2-b23b-f873094fb454" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">YouTube Creator Motivation Advice</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/9fabae90-ffe0-4f84-aa48-44e6c7771f8e" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Procurement Management Risk Conditions</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/0bf3f6ae-715e-4343-b2e0-03f43301cc7c" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Incremental Life Cycle Description</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/99afb4d9-7a5f-4e82-b4a8-332e4750711e" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Project Schedule Display Gantt Charts</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/ad5c7753-c4e8-419a-9b4b-83b3d2c7502f" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Barber Booking Website Prompt Creation</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/f1307c9a-aa53-4f95-b661-ba6bec64a25b" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Project Management Tools Study Notes</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/aaef0a63-d9a1-49e2-aa0c-91d0a857ff7d" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Incremental Life Cycle SDLC Description</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/9fd49215-d41e-46ff-907b-32f27bb1213a" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">PHP Function Arguments Study Notes</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/6596c4d7-d51f-4343-bcb9-9e7b42b4ac69" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">PHP default function parameters</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/67b15394-013b-4431-b6f5-01a478f3f161" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Firebase deployment guide for barber booking website</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/755b1f81-548f-49a1-b6b2-eb47d2a290ef" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">PHP Pass by Value vs Reference Explanation</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/19d6aaca-ebd2-43a8-b225-8746f9da4bd5" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">PHP function return value topic identification</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/ddc83426-6af7-4cc5-bcd2-8519463211fc" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Firestore location not under Build section</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/ad1c27c5-8b9d-4312-a304-4903655a2707" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Understanding variable length parameter lists in PHP</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/3a09e78f-f7ff-460e-8e02-3966d53daafa" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Why include x to avoid division by zero</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/6b45b4d6-f54f-476d-8850-b432b9696f45" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Simple Explanation of PHP Variable Arguments</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/fcc303f2-62e2-458d-9fe9-29d0e7317afd" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Barbershop Booking System with Firebase</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/63622c27-d485-4886-8d35-a90f7c626eb1" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Simple Explanation of func_get_args Example</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/20e35465-9071-4187-89e6-31674e5417ae" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Understanding func_get_args in PHP</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/cef92536-3b07-446a-ae0e-4644e86e1f7e" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Admin dashboard link button</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/391736cf-8021-45c0-9226-36c5d9edc543" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Barber Booking System MVP</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a><a class="_546d736" href="https://chat.deepseek.com/a/chat/s/7a60f6aa-e5a4-4be6-a817-9ea2273612b9" tabindex="0"><div class="ds-focus-ring"></div><div class="c08e6e93">Understanding func_get_args in PHP</div><div class="_254829d"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l _2090548" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div></div></div></div></a></div></div></div></div><div class="_2afd28d" tabindex="0"><div class="ede5bc47"><img class="fdf01f38" src="./products_files/dOo5kQ3p7EKLgvBk45vpXki1" alt="" aria-hidden="true" style="display: block;"></div><div class="_9d8da05">Bokamoso Mothibi</div><div class="ds-icon _39cc453" style="font-size: 16px; width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55146 8.00001C4.55146 8.63513 4.03659 9.15001 3.40146 9.15001C2.76634 9.15001 2.25146 8.63513 2.25146 8.00001C2.25146 7.36488 2.76634 6.85001 3.40146 6.85001C4.03659 6.85001 4.55146 7.36488 4.55146 8.00001Z" fill="currentColor"></path><path d="M9.1476 8.00001C9.1476 8.63513 8.63273 9.15001 7.9976 9.15001C7.36248 9.15001 6.8476 8.63513 6.8476 8.00001C6.8476 7.36488 7.36248 6.85001 7.9976 6.85001C8.63273 6.85001 9.1476 7.36488 9.1476 8.00001Z" fill="currentColor"></path><path d="M13.7486 8.00001C13.7486 8.63513 13.2338 9.15001 12.5986 9.15001C11.9635 9.15001 11.4486 8.63513 11.4486 8.00001C11.4486 7.36488 11.9635 6.85001 12.5986 6.85001C13.2338 6.85001 13.7486 7.36488 13.7486 8.00001Z" fill="currentColor"></path></svg></div><div class="ds-focus-ring"></div></div></div></div><div class="_4cbcd96 _7d10bb1"></div><div class="_7780f2e"><div class="_765a5cd"><div class="_2be88ba"><div class="f8d1e4c0 the-header"><div class="_9fcbeda"><div class="afa34042 e0a1edb7 e37a04e4 _5a50d80" tabindex="0" style="outline: none;">Server-side pricing integration guide</div><div class="c03d486a"><div class="ds-icon a1ac5b47" style="font-size: 12px; width: 12px; height: 12px;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0289 2.0918C11.6941 2.09186 12.3154 2.42299 12.6871 2.97461L14.8414 6.1709C15.0959 6.54892 15.0625 7.05142 14.7604 7.39258L8.74866 14.1768C8.35077 14.6257 7.64952 14.6257 7.25159 14.1768L1.23987 7.39258C0.937742 7.05136 0.905152 6.54892 1.15979 6.1709L3.31213 2.97461C3.68383 2.42281 4.306 2.0918 4.97131 2.0918H11.0289ZM3.41858 5.46484V6.76562H12.5817V5.46484H3.41858Z" fill="currentColor"></path></svg></div><span class="_46a12ab">Expert</span></div></div></div><div class="_1aa2651 the-header"><div role="button" class="ds-button ds-button--iconLabelPrimary ds-button--icon ds-button--capsule ds-button--xl ds-button--icon-relative-m" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2027 4.90034V6.43655H2.79724V4.90034H17.2027Z" fill="currentColor"></path><path d="M10.9603 13.0634V14.5996H2.79724V13.0634H10.9603Z" fill="currentColor"></path></svg></div></div><div class="_9986c0c"><div class="d00ed9c9">Server-side pricing integration guide</div><div class="c03d486a"><div class="ds-icon a1ac5b47" style="font-size: 12px; width: 12px; height: 12px;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0289 2.0918C11.6941 2.09186 12.3154 2.42299 12.6871 2.97461L14.8414 6.1709C15.0959 6.54892 15.0625 7.05142 14.7604 7.39258L8.74866 14.1768C8.35077 14.6257 7.64952 14.6257 7.25159 14.1768L1.23987 7.39258C0.937742 7.05136 0.905152 6.54892 1.15979 6.1709L3.31213 2.97461C3.68383 2.42281 4.306 2.0918 4.97131 2.0918H11.0289ZM3.41858 5.46484V6.76562H12.5817V5.46484H3.41858Z" fill="currentColor"></path></svg></div><span class="_46a12ab">Expert</span></div></div><div class="_19943ce"></div><div class="_348bebe"></div><div role="button" class="ds-button ds-button--iconLabelPrimary ds-button--icon ds-button--capsule ds-button--xl ds-button--icon-relative-m" tabindex="0" style="min-width: 44px;"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99994 1.22943C5.15598 1.22943 1.22937 5.15604 1.22937 10C1.22937 11.3437 1.5319 12.6189 2.07359 13.7592L2.40673 14.4596L3.8065 13.7942L3.4743 13.0939L3.31625 12.7371C2.97051 11.8938 2.77962 10.97 2.77962 10C2.77962 6.01243 6.01237 2.77968 9.99994 2.77968C13.9875 2.77968 17.2203 6.01243 17.2203 10C17.2203 13.9876 13.9875 17.2203 9.99994 17.2203C9.18334 17.2203 8.5858 17.1622 8.05597 17.0159C7.53397 16.8717 7.03885 16.6305 6.44609 16.2171C5.57744 15.6112 4.33224 15.3975 3.30584 16.0458L3.28975 16.0562L3.27366 16.0676L2.59034 16.5484L3.10425 18.0825L4.14438 17.35C4.51831 17.1207 5.07296 17.1507 5.55834 17.4891C6.26058 17.9789 6.91499 18.3092 7.64333 18.5103C8.3639 18.7093 9.11779 18.7706 9.99994 18.7706C14.8439 18.7706 18.7705 14.844 18.7705 10C18.7705 5.15604 14.8439 1.22943 9.99994 1.22943ZM9.21913 6.36949V9.22487H6.36943V10.7751H9.21913V13.6305H10.7694V10.7751H13.6304V9.22487H10.7694V6.36949H9.21913Z" fill="currentColor"></path></svg></div></div></div><div role="button" class="ds-button ds-button--iconLabelPrimary ds-button--icon ds-button--capsule ds-button--xl ds-button--icon-relative-m _57370c5 _5dedc1e" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.73047 1.98239C9.73046 1.21153 10.6128 0.810523 11.1895 1.25486L11.3008 1.35544L18.3906 8.83005C18.8698 9.33527 18.8696 10.1273 18.3906 10.6328L11.3008 18.1152C10.735 18.7123 9.73046 18.3118 9.73047 17.4892V12.9765C9.05058 12.9603 8.23982 12.9642 7.26075 13.206C5.95079 13.5297 4.32474 14.294 2.49512 16.1133C2.27349 16.3334 1.96525 16.3697 1.72364 16.2793C1.47489 16.1859 1.24879 15.9363 1.25 15.5937L1.25879 15.167C1.33996 13.0226 1.97201 10.7003 3.34278 8.85642C4.71905 7.00534 6.81702 5.67342 9.73047 5.48728V1.98239ZM11.1504 6.15427C11.1502 6.57441 10.8056 6.88304 10.4209 6.88376C7.60432 6.88909 5.7029 8.06242 4.48243 9.70407C3.57516 10.9245 3.03042 12.426 2.79981 13.9394C4.29988 12.7446 5.69229 12.1304 6.91993 11.8271C8.47348 11.4433 9.75076 11.5693 10.4229 11.5713C10.8512 11.5725 11.1504 11.926 11.1504 12.3017V16.209L17.2881 9.73142L11.1504 3.25974V6.15427Z" fill="currentColor"></path></svg></div></div></div></div><div class="ds-virtual-list ds-virtual-list--printable ds-scroll-area ds-scroll-area--show-on-focus-within ds-scroll-area--enabled _2bd7b35" tabindex="0" style="display: flex; flex-direction: column; --container-height: 672px; --dsl-virtual-list-width: 759px;"><div class="ds-scroll-area__gutters" style="--container-height: 672px; position: sticky; top: 0px; left: 0px; right: 0px; width: 100%; height: 0px;"><div class="ds-scroll-area__horizontal-gutter" style="left: 3px; right: 3px; display: none; top: calc(var(--container-height) - 11px); height: 8px;"><div class="ds-scroll-area__horizontal-bar" style="display: none;"></div></div><div class="ds-scroll-area__vertical-gutter" style="right: 3px; top: 3px; bottom: calc(0px - var(--container-height) + 3px); width: 8px;"><div class="ds-scroll-area__vertical-bar" style="top: 219.366px; height: 80.2208px;"></div></div></div><div class="ds-virtual-list-items _6f2c522" style="box-sizing: content-box; padding-top: 0px; padding-left: calc((100% - var(--message-list-max-width)) / 2); padding-right: calc((100% - var(--message-list-max-width)) / 2); flex-shrink: 0; flex-grow: 1; min-height: 5403px;"><div class="ds-virtual-list-visible-items" style="position: relative; transform: translateY(1064px); --dsl-virtual-list-transform-y: 1064px; --dsl-virtual-list-ios-compensation-y: 0px;"><div class="_9663006 _2c189bc" data-virtual-list-item-key="1" style="position: absolute; top: -1064px; left: 0px; right: 0px;"><div class="d29f3d7d ds-message _63c77b1" style="--panel-width: 0px;"><div class="fbb737a4">New file — lib/products.js (place at your project root, alongside your api/ folder — adjust the import paths below if your structure differs):
js// Single source of truth for product prices. Used server-side so a
// payment amount can never be trusted from the browser. Keep this in
// sync with the product titles/prices in index.html, t-shirts.html,
// tracksuits.html, and accessories.html.

export const SHIPPING_COST = 100;

export const PRODUCT_PRICES = {
  'D01 — Discrete Earth Guardian Tee': 400,
  'D02 — Discrete Archive Tee (Works Graphic)': 400,
  'D03 — Discrete Keyholder Tee': 400,
  'D04 — Discrete Initial Tee': 400,
  'D05 — Discrete Petal Code Tee': 400,
  'D06 — Discrete Core Tracksuit': 850,
  'D07 — Discrete Eastside Tracksuit': 1000,
  'D08 — Discrete Cap': 250,
  'D09 — Discrete Skull Cap': 120,
};

// Computes the real order total from a cart array, ignoring any price
// the client attached to each item. Returns null if any item isn't
// recognized, so the caller can reject the request instead of
// mis-pricing it.
export function computeOrderTotal(items) {
  if (!Array.isArray(items) || items.length === 0) return null;

  let subtotal = 0;
  for (const item of items) {
    const realPrice = PRODUCT_PRICES[item?.name];
    if (realPrice === undefined) {
      console.warn('[DISCRETE] Unrecognized product in cart:', item?.name);
      return null;
    }
    subtotal += realPrice;
  }
  return Math.round((subtotal + SHIPPING_COST) * 100) / 100;
}  what msut i do</div></div><div class="_11d6b3a"><div class="_425ea0b"><div class="ds-flex _78e0558 _0bbda35" style="align-items: flex-end; gap: 0px;"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l db183363" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.14929 4.02032C7.11197 4.02032 7.87983 4.02016 8.49597 4.07598C9.12128 4.13269 9.65792 4.25188 10.1415 4.53106C10.7202 4.8653 11.2008 5.3459 11.535 5.92462C11.8142 6.40818 11.9334 6.94481 11.9901 7.57012C12.0459 8.18625 12.0458 8.95419 12.0458 9.9168C12.0458 10.8795 12.0459 11.6473 11.9901 12.2635C11.9334 12.8888 11.8142 13.4254 11.535 13.909C11.2008 14.4877 10.7202 14.9683 10.1415 15.3025C9.65792 15.5817 9.12128 15.7009 8.49597 15.7576C7.87984 15.8134 7.11196 15.8133 6.14929 15.8133C5.18667 15.8133 4.41874 15.8134 3.80261 15.7576C3.1773 15.7009 2.64067 15.5817 2.1571 15.3025C1.5784 14.9683 1.09778 14.4877 0.76355 13.909C0.484366 13.4254 0.365184 12.8888 0.308472 12.2635C0.252649 11.6473 0.252808 10.8795 0.252808 9.9168C0.252808 8.95418 0.252664 8.18625 0.308472 7.57012C0.365184 6.94481 0.484366 6.40818 0.76355 5.92462C1.09777 5.34589 1.57839 4.86529 2.1571 4.53106C2.64067 4.25188 3.1773 4.13269 3.80261 4.07598C4.41874 4.02017 5.18666 4.02032 6.14929 4.02032ZM6.14929 5.37774C5.16181 5.37774 4.46634 5.37761 3.92566 5.42657C3.39434 5.47472 3.07859 5.56574 2.83582 5.70587C2.4632 5.92106 2.15354 6.2307 1.93835 6.60333C1.79823 6.8461 1.70721 7.16185 1.65906 7.69317C1.6101 8.23385 1.61023 8.92933 1.61023 9.9168C1.61023 10.9043 1.61009 11.5998 1.65906 12.1404C1.70721 12.6717 1.79823 12.9875 1.93835 13.2303C2.15356 13.6029 2.46321 13.9126 2.83582 14.1277C3.07859 14.2679 3.39434 14.3589 3.92566 14.407C4.46634 14.456 5.16182 14.4559 6.14929 14.4559C7.13682 14.4559 7.83224 14.456 8.37292 14.407C8.90425 14.3589 9.21999 14.2679 9.46277 14.1277C9.83535 13.9126 10.145 13.6029 10.3602 13.2303C10.5004 12.9875 10.5914 12.6717 10.6395 12.1404C10.6885 11.5998 10.6884 10.9043 10.6884 9.9168C10.6884 8.92934 10.6885 8.23384 10.6395 7.69317C10.5914 7.16185 10.5004 6.8461 10.3602 6.60333C10.1451 6.23071 9.83536 5.92107 9.46277 5.70587C9.21999 5.56574 8.90424 5.47472 8.37292 5.42657C7.83224 5.3776 7.13682 5.37774 6.14929 5.37774ZM9.80164 0.367975C10.7638 0.367975 11.5314 0.36788 12.1473 0.423639C12.7726 0.480307 13.3093 0.598759 13.7928 0.877741C14.3717 1.21192 14.8521 1.69355 15.1864 2.27227C15.4655 2.75574 15.5857 3.29164 15.6425 3.9168C15.6983 4.53301 15.6971 5.3016 15.6971 6.26446V7.82989C15.6971 8.29264 15.6989 8.58993 15.6649 8.84844C15.4668 10.3525 14.401 11.5738 12.9833 11.9988V10.5467C13.6973 10.1903 14.2105 9.49662 14.3192 8.67169C14.3387 8.52347 14.3407 8.3358 14.3407 7.82989V6.26446C14.3407 5.27706 14.3398 4.58149 14.2909 4.04083C14.2428 3.50968 14.1526 3.19372 14.0126 2.95098C13.7974 2.57849 13.4876 2.26869 13.1151 2.05352C12.8724 1.91347 12.5564 1.82237 12.0253 1.77423C11.4847 1.72528 10.7888 1.7254 9.80164 1.7254H7.71472C6.7562 1.72558 5.92665 2.27697 5.52332 3.07891H4.07019C4.54221 1.51132 5.9932 0.368186 7.71472 0.367975H9.80164Z" fill="currentColor"></path></svg></div></div></div><div aria-disabled="false" role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l d4910adc" tabindex="0" style="margin-left: 10px;"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.94076 1.34942C10.7047 0.90231 11.6503 0.902415 12.4143 1.34942C12.7061 1.52015 12.9688 1.79118 13.3104 2.13284C13.6521 2.47448 13.9231 2.73721 14.0939 3.02894C14.5408 3.79294 14.5409 4.73856 14.0939 5.50251C13.9231 5.79415 13.652 6.05704 13.3104 6.39861L6.65932 13.0497C6.28068 13.4284 6.00695 13.7108 5.66543 13.9097C5.32391 14.1085 4.94315 14.2074 4.42705 14.3498L3.24394 14.6761C2.77527 14.8054 2.34538 14.9262 2.00131 14.9684C1.65196 15.0112 1.17964 15.0013 0.810764 14.6325C0.441921 14.2637 0.432107 13.7913 0.47486 13.442C0.517035 13.0979 0.6379 12.668 0.767181 12.1993L1.09352 11.0162C1.23588 10.5001 1.33481 10.1193 1.5336 9.77784C1.7325 9.43632 2.0149 9.1626 2.39355 8.78395L9.04466 2.13284C9.38625 1.79126 9.64911 1.52016 9.94076 1.34942ZM15.5427 14.8398H7.55223L8.96707 13.425H15.5427V14.8398ZM3.39382 9.78422C2.965 10.213 2.84244 10.3436 2.75709 10.49C2.67183 10.6366 2.61862 10.8079 2.45733 11.3925L2.13099 12.5756C2.00183 13.0439 1.92194 13.3419 1.88863 13.5536C2.10041 13.5204 2.39872 13.4416 2.86764 13.3123L4.05075 12.9859C4.63544 12.8246 4.80669 12.7715 4.95323 12.6862C5.09968 12.6008 5.23022 12.4783 5.65905 12.0494L10.721 6.98644L8.45577 4.72121L3.39382 9.78422ZM11.7 2.57079C11.3774 2.38198 10.9777 2.38198 10.6551 2.57079C10.5602 2.62647 10.4487 2.72931 10.0449 3.13311L9.45604 3.72094L11.7213 5.98617L12.3102 5.39833C12.7139 4.99457 12.8168 4.88307 12.8725 4.78818C13.0613 4.46561 13.0612 4.06585 12.8725 3.74326C12.8169 3.64827 12.7146 3.53752 12.3102 3.13311C11.9057 2.72863 11.795 2.6264 11.7 2.57079Z" fill="currentColor"></path></svg></div></div></div></div></div></div></div><div class="_4f9bf79 d7dc56a8 _43c05b5" style="--assistant-last-padding-bottom: 24px;" data-virtual-list-item-key="2"><div class="ds-message _63c77b1" style="--panel-width: 0px;"><div class="_74c0879" style="--collapsible-area-title-height: 38px; --group-title-sticky-base-top: 0px; --group-title-sticky-top: calc(var(--group-title-sticky-base-top) - var(--dsl-virtual-list-transform-y) + var(--dsl-virtual-list-ios-compensation-y));"><div class="_245c867 _34a54ec"><div class="_5ab5d64"><div class="ds-icon _970ac5e" style="font-size: 16px; width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00192 6.64454C8.75026 6.64454 9.35732 7.25169 9.35739 8.00001C9.35739 8.74838 8.7503 9.35548 8.00192 9.35548C7.25367 9.35533 6.64743 8.74829 6.64743 8.00001C6.6475 7.25178 7.25371 6.64468 8.00192 6.64454Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.97165 1.29981C11.5853 0.718916 13.271 0.642197 14.3144 1.68555C15.3577 2.72902 15.2811 4.41466 14.7002 6.02833C14.4707 6.66561 14.1504 7.32937 13.75 8.00001C14.1504 8.67062 14.4707 9.33444 14.7002 9.97169C15.2811 11.5854 15.3578 13.271 14.3144 14.3145C13.271 15.3579 11.5854 15.2811 9.97165 14.7002C9.3344 14.4708 8.67059 14.1505 7.99997 13.75C7.32933 14.1505 6.66558 14.4708 6.02829 14.7002C4.41461 15.2811 2.72899 15.3578 1.68552 14.3145C0.642155 13.271 0.71887 11.5854 1.29977 9.97169C1.52915 9.33454 1.84865 8.67049 2.24899 8.00001C1.84866 7.32953 1.52915 6.66544 1.29977 6.02833C0.718852 4.41459 0.64207 2.729 1.68552 1.68555C2.72897 0.642112 4.41456 0.718887 6.02829 1.29981C6.66541 1.52918 7.32949 1.8487 7.99997 2.24903C8.67045 1.84869 9.33451 1.52919 9.97165 1.29981ZM12.9404 9.2129C12.4391 9.893 11.8616 10.5681 11.2148 11.2149C10.568 11.8616 9.89296 12.4391 9.21286 12.9404C9.62532 13.1579 10.0271 13.338 10.4121 13.4766C11.9146 14.0174 12.9172 13.8738 13.3955 13.3955C13.8737 12.9173 14.0174 11.9146 13.4765 10.4121C13.3379 10.0271 13.1578 9.62535 12.9404 9.2129ZM3.05856 9.2129C2.84121 9.62523 2.66197 10.0272 2.52341 10.4121C1.98252 11.9146 2.12627 12.9172 2.60446 13.3955C3.08278 13.8737 4.08544 14.0174 5.58786 13.4766C5.97264 13.338 6.37389 13.1577 6.7861 12.9404C6.10624 12.4393 5.43168 11.8614 4.78513 11.2149C4.13823 10.5679 3.55992 9.89313 3.05856 9.2129ZM7.99899 3.792C7.23179 4.31419 6.45306 4.95512 5.70407 5.70411C4.95509 6.45309 4.31415 7.23184 3.79196 7.99903C4.3143 8.76666 4.95471 9.54653 5.70407 10.2959C6.45309 11.0449 7.23271 11.6848 7.99997 12.207C8.76725 11.6848 9.54683 11.0449 10.2959 10.2959C11.0449 9.54686 11.6848 8.76729 12.207 8.00001C11.6848 7.23275 11.0449 6.45312 10.2959 5.70411C9.5465 4.95475 8.76662 4.31434 7.99899 3.792ZM5.58786 2.52344C4.08533 1.98255 3.08272 2.12625 2.60446 2.6045C2.12621 3.08275 1.98252 4.08536 2.52341 5.5879C2.66189 5.97253 2.8414 6.37409 3.05856 6.78614C3.55983 6.10611 4.1384 5.43189 4.78513 4.78516C5.43186 4.13843 6.10606 3.55987 6.7861 3.0586C6.37405 2.84144 5.97249 2.66192 5.58786 2.52344ZM13.3955 2.6045C12.9172 2.12631 11.9146 1.98257 10.4121 2.52344C10.0272 2.66201 9.62519 2.84125 9.21286 3.0586C9.8931 3.55996 10.5679 4.13827 11.2148 4.78516C11.8614 5.43172 12.4392 6.10627 12.9404 6.78614C13.1577 6.37393 13.338 5.97267 13.4765 5.5879C14.0174 4.08549 13.8736 3.08281 13.3955 2.6045Z" fill="currentColor"></path></svg></div><span class="_5255ff8 _4d41763">Thought for 5 seconds</span><div class="ds-icon" style="font-size: 14px; width: 14px; height: 14px;"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8486 5.5L11.4238 5.92383L8.69727 8.65137C8.44157 8.90706 8.21562 9.13382 8.01172 9.29785C7.79912 9.46883 7.55595 9.61756 7.25 9.66602C7.08435 9.69222 6.91565 9.69222 6.75 9.66602C6.44405 9.61756 6.20088 9.46883 5.98828 9.29785C5.78438 9.13382 5.55843 8.90706 5.30273 8.65137L2.57617 5.92383L2.15137 5.5L3 4.65137L3.42383 5.07617L6.15137 7.80273C6.42595 8.07732 6.59876 8.24849 6.74023 8.3623C6.87291 8.46904 6.92272 8.47813 6.9375 8.48047C6.97895 8.48703 7.02105 8.48703 7.0625 8.48047C7.07728 8.47813 7.12709 8.46904 7.25977 8.3623C7.40124 8.24849 7.57405 8.07732 7.84863 7.80273L10.5762 5.07617L11 4.65137L11.8486 5.5Z" fill="currentColor"></path></svg></div></div><div class="c99b79f8" style="opacity: 0;"></div></div><div class="c2b72bb8"></div><div class="e1675d8b ds-think-content _767406f"><div class="ddd26891 _9b52f6c" style="width: 16px; height: 16px;"><div class="a510c7ce _0652043"></div></div><div class="_9ecc93a"></div><div class="ds-markdown"><p class="ds-markdown-paragraph"><span class="">We need to interpret the user's query: "New file — lib/products.js (place at your project root, alongside your api/ folder — adjust the import paths below if your structure differs): [code block] what msut i do"</span></p><p class="ds-markdown-paragraph"><span class="">The user has provided a file content for lib/products.js and asks "what must i do". They likely want to know how to use this file, how to integrate it into their project, or what steps they need to take. The file defines product prices, shipping cost, and a computeOrderTotal function. They might be asking: "What do I need to do with this file?" Possibly they've been given this code and need instructions to set up payment verification server-side. The user might be implementing a payment flow for a shop (Discrete) and needs to ensure server-side price verification. The comment says "Keep this in sync with the product titles/prices in index.html, t-shirts.html, tracksuits.html, and accessories.html." So they need to update those HTML files accordingly. The question "what msut i do" (typo: must) could be asking for a step-by-step guide.</span></p><p class="ds-markdown-paragraph"><span class="">I should provide a comprehensive answer: Explain the purpose of the file, where to place it, how to import it in an API route (maybe they use Node.js/Next.js), how to verify cart data before processing payments, and how to ensure price consistency with the frontend. Also note that the shipping cost is 100 (currency units) and adjust import paths if necessary. I should advise on the server-side validation: receive cart items, run computeOrderTotal, if null reject. Show example API endpoint. Also remind to keep product names exactly matching across HTML files. Provide a checklist.</span></p><p class="ds-markdown-paragraph"><span class="">The user might be new to this, so step-by-step is helpful. I'll structure answer: 1. Understand the file's role. 2. Place it correctly. 3. Keep product names/prices synchronized. 4. Use in your payment endpoint. 5. Example code for an API route (assuming Express or Next.js). 6. Frontend considerations (never send price from client). 7. Testing. I'll include caution about trusting client data.</span></p></div></div><div class="_8f7678d"></div></div><div class="ds-markdown ds-assistant-message-main-content"><p class="ds-markdown-paragraph"><span class="">You’ve been given a </span><strong><span class="">server‑side pricing module</span></strong><span class=""> (</span><code>lib/products.js</code><span class="">) that holds the single source of truth for your product catalogue. The goal is to never trust a price or total that comes from the browser – all calculations must happen on the server using this file.</span></p><p class="ds-markdown-paragraph"><span class="">Here’s exactly what you need to do:</span></p><hr><h3><span class="">1. Place the file correctly</span></h3><p class="ds-markdown-paragraph"><span class="">Put </span><code>products.js</code><span class=""> in a </span><code>lib/</code><span class=""> folder at your </span><strong><span class="">project root</span></strong><span class=""> (i.e., on the same level as your </span><code>api/</code><span class=""> folder, not inside it).</span></p><div class="md-code-block md-code-block-dark"><div class="md-code-block-banner-wrap"><div class="md-code-block-banner md-code-block-banner-lite"><div class="_121d384"><div class="d2a24f03"><span class="d813de27">text</span></div><div class="d2a24f03 _246a029"><div class="efa13877"><div role="button" class="ds-button ds-button--borderlessNeutral ds-button--borderless ds-button--capsule ds-button--xs ds-button--icon-relative-m ds-button--min-width" style="margin-right: 2px;" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.14929 4.02032C7.11197 4.02032 7.87983 4.02016 8.49597 4.07598C9.12128 4.13269 9.65792 4.25188 10.1415 4.53106C10.7202 4.8653 11.2008 5.3459 11.535 5.92462C11.8142 6.40818 11.9334 6.94481 11.9901 7.57012C12.0459 8.18625 12.0458 8.95419 12.0458 9.9168C12.0458 10.8795 12.0459 11.6473 11.9901 12.2635C11.9334 12.8888 11.8142 13.4254 11.535 13.909C11.2008 14.4877 10.7202 14.9683 10.1415 15.3025C9.65792 15.5817 9.12128 15.7009 8.49597 15.7576C7.87984 15.8134 7.11196 15.8133 6.14929 15.8133C5.18667 15.8133 4.41874 15.8134 3.80261 15.7576C3.1773 15.7009 2.64067 15.5817 2.1571 15.3025C1.5784 14.9683 1.09778 14.4877 0.76355 13.909C0.484366 13.4254 0.365184 12.8888 0.308472 12.2635C0.252649 11.6473 0.252808 10.8795 0.252808 9.9168C0.252808 8.95418 0.252664 8.18625 0.308472 7.57012C0.365184 6.94481 0.484366 6.40818 0.76355 5.92462C1.09777 5.34589 1.57839 4.86529 2.1571 4.53106C2.64067 4.25188 3.1773 4.13269 3.80261 4.07598C4.41874 4.02017 5.18666 4.02032 6.14929 4.02032ZM6.14929 5.37774C5.16181 5.37774 4.46634 5.37761 3.92566 5.42657C3.39434 5.47472 3.07859 5.56574 2.83582 5.70587C2.4632 5.92106 2.15354 6.2307 1.93835 6.60333C1.79823 6.8461 1.70721 7.16185 1.65906 7.69317C1.6101 8.23385 1.61023 8.92933 1.61023 9.9168C1.61023 10.9043 1.61009 11.5998 1.65906 12.1404C1.70721 12.6717 1.79823 12.9875 1.93835 13.2303C2.15356 13.6029 2.46321 13.9126 2.83582 14.1277C3.07859 14.2679 3.39434 14.3589 3.92566 14.407C4.46634 14.456 5.16182 14.4559 6.14929 14.4559C7.13682 14.4559 7.83224 14.456 8.37292 14.407C8.90425 14.3589 9.21999 14.2679 9.46277 14.1277C9.83535 13.9126 10.145 13.6029 10.3602 13.2303C10.5004 12.9875 10.5914 12.6717 10.6395 12.1404C10.6885 11.5998 10.6884 10.9043 10.6884 9.9168C10.6884 8.92934 10.6885 8.23384 10.6395 7.69317C10.5914 7.16185 10.5004 6.8461 10.3602 6.60333C10.1451 6.23071 9.83536 5.92107 9.46277 5.70587C9.21999 5.56574 8.90424 5.47472 8.37292 5.42657C7.83224 5.3776 7.13682 5.37774 6.14929 5.37774ZM9.80164 0.367975C10.7638 0.367975 11.5314 0.36788 12.1473 0.423639C12.7726 0.480307 13.3093 0.598759 13.7928 0.877741C14.3717 1.21192 14.8521 1.69355 15.1864 2.27227C15.4655 2.75574 15.5857 3.29164 15.6425 3.9168C15.6983 4.53301 15.6971 5.3016 15.6971 6.26446V7.82989C15.6971 8.29264 15.6989 8.58993 15.6649 8.84844C15.4668 10.3525 14.401 11.5738 12.9833 11.9988V10.5467C13.6973 10.1903 14.2105 9.49662 14.3192 8.67169C14.3387 8.52347 14.3407 8.3358 14.3407 7.82989V6.26446C14.3407 5.27706 14.3398 4.58149 14.2909 4.04083C14.2428 3.50968 14.1526 3.19372 14.0126 2.95098C13.7974 2.57849 13.4876 2.26869 13.1151 2.05352C12.8724 1.91347 12.5564 1.82237 12.0253 1.77423C11.4847 1.72528 10.7888 1.7254 9.80164 1.7254H7.71472C6.7562 1.72558 5.92665 2.27697 5.52332 3.07891H4.07019C4.54221 1.51132 5.9932 0.368186 7.71472 0.367975H9.80164Z" fill="currentColor"></path></svg></div><span class="ds-button__content"><span class="code-info-button-text">Copy</span></span></div><div role="button" class="ds-button ds-button--borderlessNeutral ds-button--borderless ds-button--capsule ds-button--xs ds-button--icon-relative-m ds-button--min-width" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3695 11.411L15.1234 12.8866C14.8869 14.3042 13.6603 15.3436 12.223 15.3436H3.77673C2.33958 15.3434 1.1128 14.3042 0.876343 12.8866L0.630249 11.411L2.05408 11.1747L2.29919 12.6493C2.41973 13.3713 3.04475 13.9001 3.77673 13.9003H12.223C12.9551 13.9002 13.58 13.3713 13.7006 12.6493L13.9457 11.1747L15.3695 11.411ZM8.72205 8.994C8.77717 8.93934 8.83792 8.88106 8.90271 8.81627L12.4828 5.23424L13.5043 6.25572L9.92224 9.8358C9.6395 10.1185 9.38763 10.3732 9.15857 10.5575C8.91892 10.7503 8.63953 10.9224 8.2865 10.9784C8.09711 11.0083 7.90363 11.0083 7.71423 10.9784C7.36106 10.9224 7.0809 10.7503 6.84119 10.5575C6.61215 10.3732 6.36022 10.1185 6.07751 9.8358L2.49646 6.25572L3.51697 5.23424L7.09705 8.81627C7.16219 8.88142 7.22331 8.94006 7.27869 8.99498V1.3065H8.72205V8.994Z" fill="currentColor"></path></svg></div><span class="ds-button__content"><span class="code-info-button-text">Download</span></span></div></div></div></div></div></div><pre><span>your-project/</span>
<span>├── api/          (your API routes)</span>
<span>├── lib/</span>
<span>│   └── products.js</span>
<span>├── index.html</span>
<span>├── t-shirts.html</span>
<span>...</span></pre><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="_9bc997d _33882ae"><path d="M-5.24537e-07 0C-2.34843e-07 6.62742 5.37258 12 12 12L0 12L-5.24537e-07 0Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="_9bc997d _28d7e84"><path d="M-5.24537e-07 0C-2.34843e-07 6.62742 5.37258 12 12 12L0 12L-5.24537e-07 0Z" fill="currentColor"></path></svg></div><p class="ds-markdown-paragraph"><span class="">If your project uses a different directory structure (e.g., </span><code>src/</code><span class="">, </span><code>server/</code><span class="">), just adjust the import paths later.</span></p><hr><h3><span class="">2. Keep the front‑end HTML </span><strong><span class="">exactly in sync</span></strong></h3><p class="ds-markdown-paragraph"><span class="">The comment in the file says:</span></p><blockquote><p class="ds-markdown-paragraph"><span class="">Keep this in sync with the product titles/prices in index.html, t-shirts.html, tracksuits.html, and accessories.html.</span></p></blockquote><p class="ds-markdown-paragraph"><span class="">This is critical. The </span><code>PRODUCT_PRICES</code><span class=""> object uses exact product </span><strong><span class="">names</span></strong><span class=""> as keys – e.g. </span><code>'D01 — Discrete Earth Guardian Tee'</code><span class="">. Every product card in your HTML files must display </span><strong><span class="">the identical name and price</span></strong><span class="">. If there’s even a tiny difference (extra space, different dash, missing emoji), </span><code>computeOrderTotal</code><span class=""> will return </span><code>null</code><span class=""> and the order will be rejected.</span></p><p class="ds-markdown-paragraph"><strong><span class="">Action:</span></strong><span class=""> Open those four HTML files and make sure each product’s title and price match what’s in </span><code>PRODUCT_PRICES</code><span class="">.</span></p><hr><h3><span class="">3. Use the module in your payment API endpoint</span></h3><p class="ds-markdown-paragraph"><span class="">The whole point is that your backend receives the cart (the list of items the user wants to buy), calculates the real total using </span><code>computeOrderTotal</code><span class="">, and </span><strong><span class="">only then</span></strong><span class=""> creates a payment intent / processes the transaction.</span></p><p class="ds-markdown-paragraph"><strong><span class="">Never read a </span><code>total</code><span class=""> or </span><code>price</code><span class=""> from the client request body.</span></strong><span class=""> Only read the array of item </span><strong><span class="">names</span></strong><span class=""> (or IDs, but here names are used).</span></p><h4><span class="">Example (Express):</span></h4><div class="md-code-block md-code-block-dark"><div class="md-code-block-banner-wrap"><div class="md-code-block-banner md-code-block-banner-lite"><div class="_121d384"><div class="d2a24f03"><span class="d813de27">js</span></div><div class="d2a24f03 _246a029"><div class="efa13877"><div role="button" class="ds-button ds-button--borderlessNeutral ds-button--borderless ds-button--capsule ds-button--xs ds-button--icon-relative-m ds-button--min-width" style="margin-right: 2px;" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.14929 4.02032C7.11197 4.02032 7.87983 4.02016 8.49597 4.07598C9.12128 4.13269 9.65792 4.25188 10.1415 4.53106C10.7202 4.8653 11.2008 5.3459 11.535 5.92462C11.8142 6.40818 11.9334 6.94481 11.9901 7.57012C12.0459 8.18625 12.0458 8.95419 12.0458 9.9168C12.0458 10.8795 12.0459 11.6473 11.9901 12.2635C11.9334 12.8888 11.8142 13.4254 11.535 13.909C11.2008 14.4877 10.7202 14.9683 10.1415 15.3025C9.65792 15.5817 9.12128 15.7009 8.49597 15.7576C7.87984 15.8134 7.11196 15.8133 6.14929 15.8133C5.18667 15.8133 4.41874 15.8134 3.80261 15.7576C3.1773 15.7009 2.64067 15.5817 2.1571 15.3025C1.5784 14.9683 1.09778 14.4877 0.76355 13.909C0.484366 13.4254 0.365184 12.8888 0.308472 12.2635C0.252649 11.6473 0.252808 10.8795 0.252808 9.9168C0.252808 8.95418 0.252664 8.18625 0.308472 7.57012C0.365184 6.94481 0.484366 6.40818 0.76355 5.92462C1.09777 5.34589 1.57839 4.86529 2.1571 4.53106C2.64067 4.25188 3.1773 4.13269 3.80261 4.07598C4.41874 4.02017 5.18666 4.02032 6.14929 4.02032ZM6.14929 5.37774C5.16181 5.37774 4.46634 5.37761 3.92566 5.42657C3.39434 5.47472 3.07859 5.56574 2.83582 5.70587C2.4632 5.92106 2.15354 6.2307 1.93835 6.60333C1.79823 6.8461 1.70721 7.16185 1.65906 7.69317C1.6101 8.23385 1.61023 8.92933 1.61023 9.9168C1.61023 10.9043 1.61009 11.5998 1.65906 12.1404C1.70721 12.6717 1.79823 12.9875 1.93835 13.2303C2.15356 13.6029 2.46321 13.9126 2.83582 14.1277C3.07859 14.2679 3.39434 14.3589 3.92566 14.407C4.46634 14.456 5.16182 14.4559 6.14929 14.4559C7.13682 14.4559 7.83224 14.456 8.37292 14.407C8.90425 14.3589 9.21999 14.2679 9.46277 14.1277C9.83535 13.9126 10.145 13.6029 10.3602 13.2303C10.5004 12.9875 10.5914 12.6717 10.6395 12.1404C10.6885 11.5998 10.6884 10.9043 10.6884 9.9168C10.6884 8.92934 10.6885 8.23384 10.6395 7.69317C10.5914 7.16185 10.5004 6.8461 10.3602 6.60333C10.1451 6.23071 9.83536 5.92107 9.46277 5.70587C9.21999 5.56574 8.90424 5.47472 8.37292 5.42657C7.83224 5.3776 7.13682 5.37774 6.14929 5.37774ZM9.80164 0.367975C10.7638 0.367975 11.5314 0.36788 12.1473 0.423639C12.7726 0.480307 13.3093 0.598759 13.7928 0.877741C14.3717 1.21192 14.8521 1.69355 15.1864 2.27227C15.4655 2.75574 15.5857 3.29164 15.6425 3.9168C15.6983 4.53301 15.6971 5.3016 15.6971 6.26446V7.82989C15.6971 8.29264 15.6989 8.58993 15.6649 8.84844C15.4668 10.3525 14.401 11.5738 12.9833 11.9988V10.5467C13.6973 10.1903 14.2105 9.49662 14.3192 8.67169C14.3387 8.52347 14.3407 8.3358 14.3407 7.82989V6.26446C14.3407 5.27706 14.3398 4.58149 14.2909 4.04083C14.2428 3.50968 14.1526 3.19372 14.0126 2.95098C13.7974 2.57849 13.4876 2.26869 13.1151 2.05352C12.8724 1.91347 12.5564 1.82237 12.0253 1.77423C11.4847 1.72528 10.7888 1.7254 9.80164 1.7254H7.71472C6.7562 1.72558 5.92665 2.27697 5.52332 3.07891H4.07019C4.54221 1.51132 5.9932 0.368186 7.71472 0.367975H9.80164Z" fill="currentColor"></path></svg></div><span class="ds-button__content"><span class="code-info-button-text">Copy</span></span></div><div role="button" class="ds-button ds-button--borderlessNeutral ds-button--borderless ds-button--capsule ds-button--xs ds-button--icon-relative-m ds-button--min-width" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3695 11.411L15.1234 12.8866C14.8869 14.3042 13.6603 15.3436 12.223 15.3436H3.77673C2.33958 15.3434 1.1128 14.3042 0.876343 12.8866L0.630249 11.411L2.05408 11.1747L2.29919 12.6493C2.41973 13.3713 3.04475 13.9001 3.77673 13.9003H12.223C12.9551 13.9002 13.58 13.3713 13.7006 12.6493L13.9457 11.1747L15.3695 11.411ZM8.72205 8.994C8.77717 8.93934 8.83792 8.88106 8.90271 8.81627L12.4828 5.23424L13.5043 6.25572L9.92224 9.8358C9.6395 10.1185 9.38763 10.3732 9.15857 10.5575C8.91892 10.7503 8.63953 10.9224 8.2865 10.9784C8.09711 11.0083 7.90363 11.0083 7.71423 10.9784C7.36106 10.9224 7.0809 10.7503 6.84119 10.5575C6.61215 10.3732 6.36022 10.1185 6.07751 9.8358L2.49646 6.25572L3.51697 5.23424L7.09705 8.81627C7.16219 8.88142 7.22331 8.94006 7.27869 8.99498V1.3065H8.72205V8.994Z" fill="currentColor"></path></svg></div><span class="ds-button__content"><span class="code-info-button-text">Download</span></span></div></div></div></div></div></div><pre><span><span class="token comment">// api/checkout.js or api/create-payment.js</span></span>
<span><span class="token keyword">import</span> <span class="token punctuation">{</span> computeOrderTotal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../lib/products.js'</span><span class="token punctuation">;</span></span>
<span></span>
<span><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span>  <span class="token keyword">const</span> <span class="token punctuation">{</span> items <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>  <span class="token comment">// items: [{ name: 'D01 — ...' }, ...]</span></span>
<span>  </span>
<span>  <span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token function">computeOrderTotal</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span>  <span class="token keyword">if</span> <span class="token punctuation">(</span>total <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span>    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Invalid cart – product not found.'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span>  <span class="token punctuation">}</span></span>
<span></span>
<span>  <span class="token comment">// Now total is the server‑verified amount in your currency (e.g., Rand)</span></span>
<span>  <span class="token comment">// Use it with your payment provider (PayFast, Stripe, etc.)</span></span>
<span>  <span class="token comment">// ...</span></span>
<span><span class="token punctuation">}</span></span></pre><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="_9bc997d _33882ae"><path d="M-5.24537e-07 0C-2.34843e-07 6.62742 5.37258 12 12 12L0 12L-5.24537e-07 0Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="_9bc997d _28d7e84"><path d="M-5.24537e-07 0C-2.34843e-07 6.62742 5.37258 12 12 12L0 12L-5.24537e-07 0Z" fill="currentColor"></path></svg></div><p class="ds-markdown-paragraph"><span class="">If you’re using </span><strong><span class="">Next.js API routes</span></strong><span class=""> (App Router), export a </span><code>POST</code><span class=""> function similarly. If you’re using plain Node.js with Express, adjust the import to </span><code>require</code><span class=""> if not using ES modules.</span></p><hr><h3><span class="">4. Adjust import paths if needed</span></h3><p class="ds-markdown-paragraph"><span class="">If your </span><code>api/</code><span class=""> folder is not a direct sibling of </span><code>lib/</code><span class="">, fix the path. For example, if your API route is inside </span><code>src/pages/api/</code><span class="">, you might import like:</span></p><div class="md-code-block md-code-block-dark"><div class="md-code-block-banner-wrap"><div class="md-code-block-banner md-code-block-banner-lite"><div class="_121d384"><div class="d2a24f03"><span class="d813de27">js</span></div><div class="d2a24f03 _246a029"><div class="efa13877"><div role="button" class="ds-button ds-button--borderlessNeutral ds-button--borderless ds-button--capsule ds-button--xs ds-button--icon-relative-m ds-button--min-width" style="margin-right: 2px;" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.14929 4.02032C7.11197 4.02032 7.87983 4.02016 8.49597 4.07598C9.12128 4.13269 9.65792 4.25188 10.1415 4.53106C10.7202 4.8653 11.2008 5.3459 11.535 5.92462C11.8142 6.40818 11.9334 6.94481 11.9901 7.57012C12.0459 8.18625 12.0458 8.95419 12.0458 9.9168C12.0458 10.8795 12.0459 11.6473 11.9901 12.2635C11.9334 12.8888 11.8142 13.4254 11.535 13.909C11.2008 14.4877 10.7202 14.9683 10.1415 15.3025C9.65792 15.5817 9.12128 15.7009 8.49597 15.7576C7.87984 15.8134 7.11196 15.8133 6.14929 15.8133C5.18667 15.8133 4.41874 15.8134 3.80261 15.7576C3.1773 15.7009 2.64067 15.5817 2.1571 15.3025C1.5784 14.9683 1.09778 14.4877 0.76355 13.909C0.484366 13.4254 0.365184 12.8888 0.308472 12.2635C0.252649 11.6473 0.252808 10.8795 0.252808 9.9168C0.252808 8.95418 0.252664 8.18625 0.308472 7.57012C0.365184 6.94481 0.484366 6.40818 0.76355 5.92462C1.09777 5.34589 1.57839 4.86529 2.1571 4.53106C2.64067 4.25188 3.1773 4.13269 3.80261 4.07598C4.41874 4.02017 5.18666 4.02032 6.14929 4.02032ZM6.14929 5.37774C5.16181 5.37774 4.46634 5.37761 3.92566 5.42657C3.39434 5.47472 3.07859 5.56574 2.83582 5.70587C2.4632 5.92106 2.15354 6.2307 1.93835 6.60333C1.79823 6.8461 1.70721 7.16185 1.65906 7.69317C1.6101 8.23385 1.61023 8.92933 1.61023 9.9168C1.61023 10.9043 1.61009 11.5998 1.65906 12.1404C1.70721 12.6717 1.79823 12.9875 1.93835 13.2303C2.15356 13.6029 2.46321 13.9126 2.83582 14.1277C3.07859 14.2679 3.39434 14.3589 3.92566 14.407C4.46634 14.456 5.16182 14.4559 6.14929 14.4559C7.13682 14.4559 7.83224 14.456 8.37292 14.407C8.90425 14.3589 9.21999 14.2679 9.46277 14.1277C9.83535 13.9126 10.145 13.6029 10.3602 13.2303C10.5004 12.9875 10.5914 12.6717 10.6395 12.1404C10.6885 11.5998 10.6884 10.9043 10.6884 9.9168C10.6884 8.92934 10.6885 8.23384 10.6395 7.69317C10.5914 7.16185 10.5004 6.8461 10.3602 6.60333C10.1451 6.23071 9.83536 5.92107 9.46277 5.70587C9.21999 5.56574 8.90424 5.47472 8.37292 5.42657C7.83224 5.3776 7.13682 5.37774 6.14929 5.37774ZM9.80164 0.367975C10.7638 0.367975 11.5314 0.36788 12.1473 0.423639C12.7726 0.480307 13.3093 0.598759 13.7928 0.877741C14.3717 1.21192 14.8521 1.69355 15.1864 2.27227C15.4655 2.75574 15.5857 3.29164 15.6425 3.9168C15.6983 4.53301 15.6971 5.3016 15.6971 6.26446V7.82989C15.6971 8.29264 15.6989 8.58993 15.6649 8.84844C15.4668 10.3525 14.401 11.5738 12.9833 11.9988V10.5467C13.6973 10.1903 14.2105 9.49662 14.3192 8.67169C14.3387 8.52347 14.3407 8.3358 14.3407 7.82989V6.26446C14.3407 5.27706 14.3398 4.58149 14.2909 4.04083C14.2428 3.50968 14.1526 3.19372 14.0126 2.95098C13.7974 2.57849 13.4876 2.26869 13.1151 2.05352C12.8724 1.91347 12.5564 1.82237 12.0253 1.77423C11.4847 1.72528 10.7888 1.7254 9.80164 1.7254H7.71472C6.7562 1.72558 5.92665 2.27697 5.52332 3.07891H4.07019C4.54221 1.51132 5.9932 0.368186 7.71472 0.367975H9.80164Z" fill="currentColor"></path></svg></div><span class="ds-button__content"><span class="code-info-button-text">Copy</span></span></div><div role="button" class="ds-button ds-button--borderlessNeutral ds-button--borderless ds-button--capsule ds-button--xs ds-button--icon-relative-m ds-button--min-width" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3695 11.411L15.1234 12.8866C14.8869 14.3042 13.6603 15.3436 12.223 15.3436H3.77673C2.33958 15.3434 1.1128 14.3042 0.876343 12.8866L0.630249 11.411L2.05408 11.1747L2.29919 12.6493C2.41973 13.3713 3.04475 13.9001 3.77673 13.9003H12.223C12.9551 13.9002 13.58 13.3713 13.7006 12.6493L13.9457 11.1747L15.3695 11.411ZM8.72205 8.994C8.77717 8.93934 8.83792 8.88106 8.90271 8.81627L12.4828 5.23424L13.5043 6.25572L9.92224 9.8358C9.6395 10.1185 9.38763 10.3732 9.15857 10.5575C8.91892 10.7503 8.63953 10.9224 8.2865 10.9784C8.09711 11.0083 7.90363 11.0083 7.71423 10.9784C7.36106 10.9224 7.0809 10.7503 6.84119 10.5575C6.61215 10.3732 6.36022 10.1185 6.07751 9.8358L2.49646 6.25572L3.51697 5.23424L7.09705 8.81627C7.16219 8.88142 7.22331 8.94006 7.27869 8.99498V1.3065H8.72205V8.994Z" fill="currentColor"></path></svg></div><span class="ds-button__content"><span class="code-info-button-text">Download</span></span></div></div></div></div></div></div><pre><span><span class="token keyword">import</span> <span class="token punctuation">{</span> computeOrderTotal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../../lib/products.js'</span><span class="token punctuation">;</span></span></pre><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="_9bc997d _33882ae"><path d="M-5.24537e-07 0C-2.34843e-07 6.62742 5.37258 12 12 12L0 12L-5.24537e-07 0Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="_9bc997d _28d7e84"><path d="M-5.24537e-07 0C-2.34843e-07 6.62742 5.37258 12 12 12L0 12L-5.24537e-07 0Z" fill="currentColor"></path></svg></div><p class="ds-markdown-paragraph"><span class="">Make sure your project supports ES modules (</span><code>"type": "module"</code><span class=""> in </span><code>package.json</code><span class=""> or use </span><code>.mjs</code><span class="">).</span></p><hr><h3><span class="">5. What your front‑end should send</span></h3><p class="ds-markdown-paragraph"><span class="">On the client side (in the HTML/JS that builds the cart), send </span><strong><span class="">only the list of item names</span></strong><span class=""> when the user checks out. For example:</span></p><div class="md-code-block md-code-block-dark"><div class="md-code-block-banner-wrap"><div class="md-code-block-banner md-code-block-banner-lite"><div class="_121d384"><div class="d2a24f03"><span class="d813de27">js</span></div><div class="d2a24f03 _246a029"><div class="efa13877"><div role="button" class="ds-button ds-button--borderlessNeutral ds-button--borderless ds-button--capsule ds-button--xs ds-button--icon-relative-m ds-button--min-width" style="margin-right: 2px;" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.14929 4.02032C7.11197 4.02032 7.87983 4.02016 8.49597 4.07598C9.12128 4.13269 9.65792 4.25188 10.1415 4.53106C10.7202 4.8653 11.2008 5.3459 11.535 5.92462C11.8142 6.40818 11.9334 6.94481 11.9901 7.57012C12.0459 8.18625 12.0458 8.95419 12.0458 9.9168C12.0458 10.8795 12.0459 11.6473 11.9901 12.2635C11.9334 12.8888 11.8142 13.4254 11.535 13.909C11.2008 14.4877 10.7202 14.9683 10.1415 15.3025C9.65792 15.5817 9.12128 15.7009 8.49597 15.7576C7.87984 15.8134 7.11196 15.8133 6.14929 15.8133C5.18667 15.8133 4.41874 15.8134 3.80261 15.7576C3.1773 15.7009 2.64067 15.5817 2.1571 15.3025C1.5784 14.9683 1.09778 14.4877 0.76355 13.909C0.484366 13.4254 0.365184 12.8888 0.308472 12.2635C0.252649 11.6473 0.252808 10.8795 0.252808 9.9168C0.252808 8.95418 0.252664 8.18625 0.308472 7.57012C0.365184 6.94481 0.484366 6.40818 0.76355 5.92462C1.09777 5.34589 1.57839 4.86529 2.1571 4.53106C2.64067 4.25188 3.1773 4.13269 3.80261 4.07598C4.41874 4.02017 5.18666 4.02032 6.14929 4.02032ZM6.14929 5.37774C5.16181 5.37774 4.46634 5.37761 3.92566 5.42657C3.39434 5.47472 3.07859 5.56574 2.83582 5.70587C2.4632 5.92106 2.15354 6.2307 1.93835 6.60333C1.79823 6.8461 1.70721 7.16185 1.65906 7.69317C1.6101 8.23385 1.61023 8.92933 1.61023 9.9168C1.61023 10.9043 1.61009 11.5998 1.65906 12.1404C1.70721 12.6717 1.79823 12.9875 1.93835 13.2303C2.15356 13.6029 2.46321 13.9126 2.83582 14.1277C3.07859 14.2679 3.39434 14.3589 3.92566 14.407C4.46634 14.456 5.16182 14.4559 6.14929 14.4559C7.13682 14.4559 7.83224 14.456 8.37292 14.407C8.90425 14.3589 9.21999 14.2679 9.46277 14.1277C9.83535 13.9126 10.145 13.6029 10.3602 13.2303C10.5004 12.9875 10.5914 12.6717 10.6395 12.1404C10.6885 11.5998 10.6884 10.9043 10.6884 9.9168C10.6884 8.92934 10.6885 8.23384 10.6395 7.69317C10.5914 7.16185 10.5004 6.8461 10.3602 6.60333C10.1451 6.23071 9.83536 5.92107 9.46277 5.70587C9.21999 5.56574 8.90424 5.47472 8.37292 5.42657C7.83224 5.3776 7.13682 5.37774 6.14929 5.37774ZM9.80164 0.367975C10.7638 0.367975 11.5314 0.36788 12.1473 0.423639C12.7726 0.480307 13.3093 0.598759 13.7928 0.877741C14.3717 1.21192 14.8521 1.69355 15.1864 2.27227C15.4655 2.75574 15.5857 3.29164 15.6425 3.9168C15.6983 4.53301 15.6971 5.3016 15.6971 6.26446V7.82989C15.6971 8.29264 15.6989 8.58993 15.6649 8.84844C15.4668 10.3525 14.401 11.5738 12.9833 11.9988V10.5467C13.6973 10.1903 14.2105 9.49662 14.3192 8.67169C14.3387 8.52347 14.3407 8.3358 14.3407 7.82989V6.26446C14.3407 5.27706 14.3398 4.58149 14.2909 4.04083C14.2428 3.50968 14.1526 3.19372 14.0126 2.95098C13.7974 2.57849 13.4876 2.26869 13.1151 2.05352C12.8724 1.91347 12.5564 1.82237 12.0253 1.77423C11.4847 1.72528 10.7888 1.7254 9.80164 1.7254H7.71472C6.7562 1.72558 5.92665 2.27697 5.52332 3.07891H4.07019C4.54221 1.51132 5.9932 0.368186 7.71472 0.367975H9.80164Z" fill="currentColor"></path></svg></div><span class="ds-button__content"><span class="code-info-button-text">Copy</span></span></div><div role="button" class="ds-button ds-button--borderlessNeutral ds-button--borderless ds-button--capsule ds-button--xs ds-button--icon-relative-m ds-button--min-width" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3695 11.411L15.1234 12.8866C14.8869 14.3042 13.6603 15.3436 12.223 15.3436H3.77673C2.33958 15.3434 1.1128 14.3042 0.876343 12.8866L0.630249 11.411L2.05408 11.1747L2.29919 12.6493C2.41973 13.3713 3.04475 13.9001 3.77673 13.9003H12.223C12.9551 13.9002 13.58 13.3713 13.7006 12.6493L13.9457 11.1747L15.3695 11.411ZM8.72205 8.994C8.77717 8.93934 8.83792 8.88106 8.90271 8.81627L12.4828 5.23424L13.5043 6.25572L9.92224 9.8358C9.6395 10.1185 9.38763 10.3732 9.15857 10.5575C8.91892 10.7503 8.63953 10.9224 8.2865 10.9784C8.09711 11.0083 7.90363 11.0083 7.71423 10.9784C7.36106 10.9224 7.0809 10.7503 6.84119 10.5575C6.61215 10.3732 6.36022 10.1185 6.07751 9.8358L2.49646 6.25572L3.51697 5.23424L7.09705 8.81627C7.16219 8.88142 7.22331 8.94006 7.27869 8.99498V1.3065H8.72205V8.994Z" fill="currentColor"></path></svg></div><span class="ds-button__content"><span class="code-info-button-text">Download</span></span></div></div></div></div></div></div><pre><span><span class="token keyword">const</span> cartItems <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span>  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'D01 — Discrete Earth Guardian Tee'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span>  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'D08 — Discrete Cap'</span> <span class="token punctuation">}</span></span>
<span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span></span>
<span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/checkout'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span>  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span>  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span>  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">items</span><span class="token operator">:</span> cartItems <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></pre><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="_9bc997d _33882ae"><path d="M-5.24537e-07 0C-2.34843e-07 6.62742 5.37258 12 12 12L0 12L-5.24537e-07 0Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="_9bc997d _28d7e84"><path d="M-5.24537e-07 0C-2.34843e-07 6.62742 5.37258 12 12 12L0 12L-5.24537e-07 0Z" fill="currentColor"></path></svg></div><p class="ds-markdown-paragraph"><span class="">Do </span><strong><span class="">not</span></strong><span class=""> include a </span><code>price</code><span class=""> field from the DOM – the server will look up the real price.</span></p><hr><h3><span class="">6. Understand the shipping cost</span></h3><p class="ds-markdown-paragraph"><code>SHIPPING_COST = 100</code><span class=""> is hardcoded. If you need free shipping under certain conditions, modify </span><code>computeOrderTotal</code><span class=""> accordingly (e.g., add a conditional before adding it). For now, every order adds 100.</span></p><hr><h3><span class="">7. Test thoroughly</span></h3><ul><li><p class="ds-markdown-paragraph"><span class="">Add one of each product to the cart and verify the total on the server matches your expectations.</span></p></li><li><p class="ds-markdown-paragraph"><span class="">Send a request with an unrecognised name (e.g. </span><code>'D10 — Fake Item'</code><span class="">) – it must return an error.</span></p></li><li><p class="ds-markdown-paragraph"><span class="">Send an empty array – it should also return </span><code>null</code><span class=""> (the function rejects empty carts).</span></p></li></ul><hr><h3><span class="">Summary checklist</span></h3><ul><li><p class="ds-markdown-paragraph"><span class="">Place </span><code>lib/products.js</code><span class=""> at the project root.</span></p></li><li><p class="ds-markdown-paragraph"><span class="">Update all HTML files so product titles match the keys in </span><code>PRODUCT_PRICES</code><span class=""> </span><strong><span class="">exactly</span></strong><span class="">.</span></p></li><li><p class="ds-markdown-paragraph"><span class="">Write/update your payment API route to import </span><code>computeOrderTotal</code><span class=""> and reject invalid carts.</span></p></li><li><p class="ds-markdown-paragraph"><span class="">Modify the front‑end checkout logic to send only item names, never prices.</span></p></li><li><p class="ds-markdown-paragraph"><span class="">Test with valid and invalid carts.</span></p></li></ul><p class="ds-markdown-paragraph"><span class="">Once you’ve done that, your shop will be safe from price manipulation because the server always calculates the total from the trusted price list.</span></p><p class="ds-markdown-paragraph"><span class="">If any part of your stack (framework, payment provider) is unclear, just give me a bit more detail and I’ll help you tailor the integration.</span></p></div></div><div class="ds-flex _0a3d93b" style="align-items: center; gap: 10px; flex-wrap: wrap-reverse;"><div class="ds-flex _965abe9 _54866f7" style="align-items: center; gap: 10px;"><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l db183363" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.14929 4.02032C7.11197 4.02032 7.87983 4.02016 8.49597 4.07598C9.12128 4.13269 9.65792 4.25188 10.1415 4.53106C10.7202 4.8653 11.2008 5.3459 11.535 5.92462C11.8142 6.40818 11.9334 6.94481 11.9901 7.57012C12.0459 8.18625 12.0458 8.95419 12.0458 9.9168C12.0458 10.8795 12.0459 11.6473 11.9901 12.2635C11.9334 12.8888 11.8142 13.4254 11.535 13.909C11.2008 14.4877 10.7202 14.9683 10.1415 15.3025C9.65792 15.5817 9.12128 15.7009 8.49597 15.7576C7.87984 15.8134 7.11196 15.8133 6.14929 15.8133C5.18667 15.8133 4.41874 15.8134 3.80261 15.7576C3.1773 15.7009 2.64067 15.5817 2.1571 15.3025C1.5784 14.9683 1.09778 14.4877 0.76355 13.909C0.484366 13.4254 0.365184 12.8888 0.308472 12.2635C0.252649 11.6473 0.252808 10.8795 0.252808 9.9168C0.252808 8.95418 0.252664 8.18625 0.308472 7.57012C0.365184 6.94481 0.484366 6.40818 0.76355 5.92462C1.09777 5.34589 1.57839 4.86529 2.1571 4.53106C2.64067 4.25188 3.1773 4.13269 3.80261 4.07598C4.41874 4.02017 5.18666 4.02032 6.14929 4.02032ZM6.14929 5.37774C5.16181 5.37774 4.46634 5.37761 3.92566 5.42657C3.39434 5.47472 3.07859 5.56574 2.83582 5.70587C2.4632 5.92106 2.15354 6.2307 1.93835 6.60333C1.79823 6.8461 1.70721 7.16185 1.65906 7.69317C1.6101 8.23385 1.61023 8.92933 1.61023 9.9168C1.61023 10.9043 1.61009 11.5998 1.65906 12.1404C1.70721 12.6717 1.79823 12.9875 1.93835 13.2303C2.15356 13.6029 2.46321 13.9126 2.83582 14.1277C3.07859 14.2679 3.39434 14.3589 3.92566 14.407C4.46634 14.456 5.16182 14.4559 6.14929 14.4559C7.13682 14.4559 7.83224 14.456 8.37292 14.407C8.90425 14.3589 9.21999 14.2679 9.46277 14.1277C9.83535 13.9126 10.145 13.6029 10.3602 13.2303C10.5004 12.9875 10.5914 12.6717 10.6395 12.1404C10.6885 11.5998 10.6884 10.9043 10.6884 9.9168C10.6884 8.92934 10.6885 8.23384 10.6395 7.69317C10.5914 7.16185 10.5004 6.8461 10.3602 6.60333C10.1451 6.23071 9.83536 5.92107 9.46277 5.70587C9.21999 5.56574 8.90424 5.47472 8.37292 5.42657C7.83224 5.3776 7.13682 5.37774 6.14929 5.37774ZM9.80164 0.367975C10.7638 0.367975 11.5314 0.36788 12.1473 0.423639C12.7726 0.480307 13.3093 0.598759 13.7928 0.877741C14.3717 1.21192 14.8521 1.69355 15.1864 2.27227C15.4655 2.75574 15.5857 3.29164 15.6425 3.9168C15.6983 4.53301 15.6971 5.3016 15.6971 6.26446V7.82989C15.6971 8.29264 15.6989 8.58993 15.6649 8.84844C15.4668 10.3525 14.401 11.5738 12.9833 11.9988V10.5467C13.6973 10.1903 14.2105 9.49662 14.3192 8.67169C14.3387 8.52347 14.3407 8.3358 14.3407 7.82989V6.26446C14.3407 5.27706 14.3398 4.58149 14.2909 4.04083C14.2428 3.50968 14.1526 3.19372 14.0126 2.95098C13.7974 2.57849 13.4876 2.26869 13.1151 2.05352C12.8724 1.91347 12.5564 1.82237 12.0253 1.77423C11.4847 1.72528 10.7888 1.7254 9.80164 1.7254H7.71472C6.7562 1.72558 5.92665 2.27697 5.52332 3.07891H4.07019C4.54221 1.51132 5.9932 0.368186 7.71472 0.367975H9.80164Z" fill="currentColor"></path></svg></div></div></div><div aria-disabled="false" role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l db183363" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.92136 0.349152C10.3744 0.349234 12.5564 1.5052 13.9557 3.29894L15.1281 2.12759C15.3303 1.92546 15.6767 2.06943 15.6767 2.35538V5.53923C15.6766 5.71626 15.5329 5.85976 15.3559 5.86002H12.171C11.8854 5.8597 11.7426 5.51465 11.9443 5.31249L12.9641 4.29056C11.8237 2.74305 9.98908 1.74106 7.92136 1.74097C4.46436 1.74097 1.66233 4.543 1.66233 8C1.66233 11.457 4.46436 14.259 7.92136 14.259C11.3782 14.2589 14.1804 11.4569 14.1804 8H15.5722C15.5722 12.2251 12.1465 15.6507 7.92136 15.6508C3.69614 15.6508 0.270508 12.2252 0.270508 8C0.270508 3.77478 3.69614 0.349152 7.92136 0.349152Z" fill="currentColor"></path></svg></div></div></div><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l db183363" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.27868 0.811572C8.81991 0.142194 9.79022 0.0421835 10.4538 0.557601L10.5823 0.669306L10.6066 0.693544L10.6097 0.695652L10.6392 0.725159C11.355 1.44679 11.6337 2.49468 11.3716 3.47669L11.3706 3.48091L11.3611 3.51674L11.3601 3.51885L10.889 5.22604C10.8796 5.25997 10.8707 5.29157 10.8627 5.32088C10.8934 5.32095 10.927 5.32194 10.9628 5.32194H11.9007C12.4264 5.32194 12.7831 5.319 13.0651 5.36725C14.8182 5.66719 15.9851 7.34568 15.6565 9.09357C15.6036 9.37487 15.477 9.7092 15.294 10.2022L14.3371 12.7798C14.1402 13.3104 13.9774 13.7518 13.8102 14.1024C13.6376 14.4645 13.4386 14.7793 13.1442 15.0424C12.9712 15.197 12.7802 15.3303 12.5751 15.4386C12.226 15.6231 11.8608 15.7 11.4612 15.7358C11.0743 15.7705 10.6035 15.7695 10.0375 15.7695H4.87377C4.08053 15.7695 3.42928 15.7702 2.90734 15.7137C2.37212 15.6557 1.88991 15.5311 1.46676 15.2237C1.22415 15.0474 1.01078 14.8339 0.834466 14.5914C0.527021 14.1682 0.401373 13.686 0.343384 13.1508C0.286822 12.6287 0.287531 11.9769 0.287531 11.1833V9.51405C0.287531 8.84778 0.281347 8.36714 0.399237 7.9565C0.671152 7.00935 1.41115 6.26832 2.35829 5.99638C2.76894 5.87849 3.24958 5.88573 3.91585 5.88573C4.11983 5.88573 4.14548 5.88319 4.16244 5.88046C4.23532 5.86863 4.30409 5.83663 4.35845 5.78667C4.3711 5.77504 4.38761 5.75604 4.51442 5.59488L8.25655 0.838972L8.2576 0.837918L8.27868 0.811572ZM1.69122 11.1833C1.69122 12.0082 1.69217 12.5711 1.73865 13.0001C1.78371 13.4157 1.86473 13.6221 1.96943 13.7662C2.0592 13.8898 2.16733 13.9989 2.29085 14.0887C2.43501 14.1934 2.64216 14.2744 3.05803 14.3195C3.45897 14.3629 3.97637 14.3656 4.7157 14.3659C4.30801 13.8053 4.06453 13.1171 4.06444 12.371V8.59406H5.46813V12.371C5.46838 13.4733 6.36166 14.3669 7.46407 14.3669H10.0375C10.6286 14.3669 11.0269 14.3663 11.3369 14.3385C11.6339 14.3118 11.7956 14.2638 11.9196 14.1983C12.0241 14.1431 12.1213 14.0747 12.2094 13.996C12.314 13.9025 12.4151 13.7678 12.5435 13.4986C12.6774 13.2176 12.8162 12.845 13.0219 12.2909L13.9788 9.71322C14.1848 9.15816 14.2531 8.96731 14.2781 8.83433C14.4618 7.85692 13.8093 6.91895 12.8291 6.75092C12.6957 6.7281 12.4928 6.72458 11.9007 6.72458H10.9628C10.7737 6.72458 10.5693 6.72657 10.4 6.70666C10.2211 6.68562 9.96702 6.63024 9.74771 6.43161C9.64454 6.33811 9.55957 6.2261 9.4969 6.10177C9.3639 5.83784 9.37799 5.57899 9.40521 5.40097C9.431 5.23261 9.48672 5.03616 9.53694 4.85404L10.008 3.14579L10.0175 3.11102C10.1488 2.61338 10.0078 2.08338 9.64654 1.71681L9.6086 1.67887L9.55064 1.64304C9.48795 1.62043 9.41425 1.63814 9.36938 1.69362L9.35779 1.70627L9.35884 1.70732L5.61672 6.46217C5.51822 6.58735 5.42237 6.7133 5.30689 6.81942C5.05075 7.05471 4.73126 7.20939 4.38796 7.26519C4.23315 7.29032 4.07513 7.28837 3.91585 7.28837C3.15356 7.28837 2.91916 7.2957 2.7461 7.34528C2.26364 7.48379 1.88564 7.86081 1.74708 8.34325C1.69738 8.51636 1.69122 8.7511 1.69122 9.51405V11.1833Z" fill="currentColor"></path></svg></div></div></div><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l db183363" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.72451 15.1086C7.18929 15.7705 6.22975 15.8694 5.57357 15.3597L5.44643 15.2492L5.42247 15.2253L5.41934 15.2232L5.39016 15.194C4.68239 14.4804 4.40679 13.4441 4.66589 12.473L4.66693 12.4689L4.67631 12.4334L4.67735 12.4314L5.14318 10.7431C5.15243 10.7096 5.1613 10.6783 5.16923 10.6493C5.13878 10.6493 5.10558 10.6483 5.07023 10.6483H4.14274C3.62288 10.6483 3.27015 10.6512 2.9912 10.6035C1.25757 10.3069 0.103662 8.64702 0.42863 6.91854C0.480965 6.64037 0.606164 6.30975 0.787119 5.82223L1.73336 3.27321C1.92812 2.74852 2.08912 2.31209 2.25442 1.96535C2.42515 1.60724 2.62191 1.29594 2.91304 1.03578C3.08408 0.882951 3.273 0.751121 3.47579 0.643944C3.82102 0.461504 4.18214 0.38551 4.57731 0.350066C4.95993 0.315784 5.42553 0.316718 5.98521 0.316718H11.0916C11.876 0.316718 12.52 0.31607 13.0362 0.37195C13.5655 0.429293 14.0423 0.552534 14.4608 0.856536C14.7007 1.03085 14.9117 1.24193 15.086 1.48181C15.3901 1.90027 15.5143 2.37709 15.5717 2.90638C15.6276 3.42269 15.6269 4.06721 15.6269 4.85202V6.50274C15.6269 7.1616 15.633 7.6369 15.5164 8.04299C15.2475 8.97962 14.5158 9.71242 13.5791 9.98133C13.173 10.0979 12.6977 10.0908 12.0389 10.0908C11.8372 10.0908 11.8118 10.0933 11.795 10.096C11.723 10.1077 11.6549 10.1393 11.6012 10.1887C11.5887 10.2002 11.5724 10.219 11.447 10.3784L7.74639 15.0815L7.74535 15.0825L7.72451 15.1086ZM14.2388 4.85202C14.2388 4.03628 14.2379 3.47965 14.1919 3.05541C14.1473 2.64443 14.0672 2.4403 13.9637 2.29779C13.8749 2.17562 13.768 2.06769 13.6458 1.9789C13.5033 1.87532 13.2984 1.79523 12.8872 1.75067C12.4907 1.70773 11.979 1.70511 11.2479 1.70482C11.6511 2.25917 11.8918 2.93968 11.8919 3.67755V7.41251H10.5038V3.67755C10.5036 2.58745 9.62023 1.70378 8.53007 1.70378H5.98521C5.40065 1.70378 5.00679 1.70442 4.70028 1.73192C4.40651 1.7583 4.24662 1.80571 4.12399 1.87052C4.02069 1.92511 3.92452 1.99276 3.8374 2.07061C3.73401 2.16306 3.634 2.2962 3.50705 2.56249C3.37462 2.84027 3.23734 3.20873 3.03393 3.75675L2.08768 6.30578C1.88395 6.85467 1.81646 7.0434 1.79172 7.1749C1.61005 8.14146 2.25533 9.06902 3.22464 9.23517C3.35654 9.25774 3.55717 9.26123 4.14274 9.26123H5.07023C5.25717 9.26123 5.4593 9.25926 5.62672 9.27894C5.80364 9.29975 6.05492 9.35452 6.27179 9.55094C6.37381 9.6434 6.45784 9.75417 6.51982 9.87712C6.65133 10.1381 6.6374 10.3941 6.61048 10.5701C6.58498 10.7366 6.52988 10.9309 6.48022 11.111L6.01439 12.8003L6.00501 12.8347C5.87513 13.3268 6.01464 13.8509 6.37184 14.2134L6.40935 14.2509L6.46667 14.2863C6.52866 14.3087 6.60155 14.2912 6.64591 14.2363L6.65738 14.2238L6.65633 14.2228L10.3569 9.52072C10.4543 9.39693 10.5491 9.27238 10.6633 9.16744C10.9166 8.93476 11.2325 8.7818 11.572 8.72662C11.7251 8.70177 11.8814 8.70369 12.0389 8.70369C12.7927 8.70369 13.0245 8.69645 13.1956 8.64742C13.6727 8.51045 14.0465 8.13761 14.1836 7.66053C14.2327 7.48935 14.2388 7.25721 14.2388 6.50274V4.85202Z" fill="currentColor"></path></svg></div></div></div><div role="button" class="ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l db183363" tabindex="0"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.95889 1.52285C7.95888 0.826234 8.76055 0.467983 9.27669 0.875208L9.37524 0.967191L15.1317 7.18358C15.5582 7.64419 15.5582 8.35614 15.1317 8.81676L9.37524 15.0331C8.87034 15.578 7.95888 15.2205 7.95889 14.4775V10.8207C7.10614 10.8432 6.31361 10.9316 5.45468 11.2515C4.39484 11.6463 3.18248 12.413 1.64676 13.9425C1.4533 14.135 1.18329 14.1696 0.969086 14.0908C0.74748 14.0091 0.547307 13.7879 0.54859 13.4844L0.55516 13.1315C0.618924 11.3494 1.11153 9.29838 2.27656 7.63787C3.45289 5.96147 5.29554 4.71635 7.95889 4.54797V1.52285ZM9.20911 5.13366C9.20899 5.50567 8.9031 5.77687 8.56523 5.77755C5.99383 5.78282 4.33736 6.8762 3.29964 8.35496C2.54519 9.43014 2.10739 10.7283 1.9152 11.9939C3.04749 11.0323 4.0569 10.4385 5.01917 10.0801C6.29638 9.60449 7.4406 9.56343 8.56429 9.56295C8.9178 9.5628 9.20894 9.84909 9.20911 10.2068L9.20817 13.3737L14.1837 8.00017L9.20817 2.62571L9.20911 5.13366Z" fill="currentColor"></path></svg></div></div></div></div><div style="flex: 1 1 0%;"></div></div></div></div></div><div style="padding-bottom: 24px;"></div><div class="_871cbca"><div class="d72636e2"></div><div class="aaff8b8f"><div role="button" class="ds-button ds-button--outlinedNeutral ds-button--outlined ds-button--circle ds-button--m ds-button--icon-relative-m ds-button--floating _0706cde" tabindex="0" style="--dsl-button-color: var(--dsw-alias-button-floating-fill); --dsl-button-height: 34px; --dsl-button-hover-color: var(--dsw-alias-button-floating-hover); --dsl-button-icon-size: 14px;"><div class="ds-button__background"></div><div class="ds-button__border"></div><div class="ds-button__icon ds-button__icon--last-child"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8486 5.5L11.4238 5.92383L8.69727 8.65137C8.44157 8.90706 8.21562 9.13382 8.01172 9.29785C7.79912 9.46883 7.55595 9.61756 7.25 9.66602C7.08435 9.69222 6.91565 9.69222 6.75 9.66602C6.44405 9.61756 6.20088 9.46883 5.98828 9.29785C5.78438 9.13382 5.55843 8.90706 5.30273 8.65137L2.57617 5.92383L2.15137 5.5L3 4.65137L3.42383 5.07617L6.15137 7.80273C6.42595 8.07732 6.59876 8.24849 6.74023 8.3623C6.87291 8.46904 6.92272 8.47813 6.9375 8.48047C6.97895 8.48703 7.02105 8.48703 7.0625 8.48047C7.07728 8.47813 7.12709 8.46904 7.25977 8.3623C7.40124 8.24849 7.57405 8.07732 7.84863 7.80273L10.5762 5.07617L11 4.65137L11.8486 5.5Z" fill="currentColor"></path></svg></div></div><div class="_77cefa5 _3d616d3"><div class="_020ab5b"><div class="_24fad49"><template shadowrootmode="closed"><lt-mirror contenteditable="false" style="display: none;"><template shadowrootmode="closed"><qb-highlighter contenteditable="false" style="display: none; z-index: 1 !important;"><qb-div spellcheck="false" class="qb-highlighter__wrapper" style="width: 678.4px !important; height: 60px !important; transform: none !important; transform-origin: 339.2px 30px !important; zoom: 1 !important;"><qb-div class="qb-highlighter__scroll-element" style="top: 0px !important; left: 0px !important; width: 678px !important; height: 60px !important;"></qb-div></qb-div></qb-highlighter><slot style="color-scheme: inherit; forced-color-adjust: inherit; math-depth: inherit; position: inherit; position-anchor: inherit; text-size-adjust: inherit; appearance: inherit; color: inherit; font: inherit; font-palette: inherit; font-synthesis: inherit; position-area: inherit; text-orientation: inherit; text-rendering: inherit; text-spacing-trim: inherit; -webkit-font-smoothing: inherit; -webkit-locale: inherit; -webkit-text-orientation: inherit; -webkit-writing-mode: inherit; writing-mode: inherit; zoom: inherit; accent-color: inherit; place-content: inherit; place-items: inherit; place-self: inherit; alignment-baseline: inherit; anchor-name: inherit; anchor-scope: inherit; animation-composition: inherit; animation: inherit; animation-trigger: inherit; app-region: inherit; aspect-ratio: inherit; backdrop-filter: inherit; backface-visibility: inherit; background: inherit; background-blend-mode: inherit; baseline-shift: inherit; baseline-source: inherit; block-size: inherit; border-block: inherit; border: inherit; border-radius: inherit; border-collapse: inherit; border-end-end-radius: inherit; border-end-start-radius: inherit; border-inline: inherit; border-shape: inherit; border-start-end-radius: inherit; border-start-start-radius: inherit; inset: inherit; box-decoration-break: inherit; box-shadow: inherit; box-sizing: inherit; break-after: inherit; break-before: inherit; break-inside: inherit; buffered-rendering: inherit; caption-side: inherit; caret-animation: inherit; caret-color: inherit; caret-shape: inherit; clear: inherit; clip: inherit; clip-path: inherit; clip-rule: inherit; color-interpolation: inherit; color-interpolation-filters: inherit; color-rendering: inherit; columns: inherit; column-fill: inherit; gap: inherit; rule-break: inherit; rule: inherit; rule-inset: inherit; rule-visibility-items: inherit; column-span: inherit; contain: inherit; contain-intrinsic-block-size: inherit; contain-intrinsic-size: inherit; contain-intrinsic-inline-size: inherit; container: inherit; content: inherit; content-visibility: inherit; corner-shape: inherit; corner-block-end-shape: inherit; corner-block-start-shape: inherit; counter-increment: inherit; counter-reset: inherit; counter-set: inherit; cursor: inherit; cx: inherit; cy: inherit; d: inherit; dominant-baseline: inherit; dynamic-range-limit: inherit; empty-cells: inherit; field-sizing: inherit; fill: inherit; fill-opacity: inherit; fill-rule: inherit; filter: inherit; flex: inherit; flex-flow: inherit; float: inherit; flood-color: inherit; flood-opacity: inherit; grid: inherit; grid-area: inherit; height: inherit; hyphenate-character: inherit; hyphenate-limit-chars: inherit; hyphens: inherit; image-orientation: inherit; image-rendering: inherit; initial-letter: inherit; inline-size: inherit; inset-block: inherit; inset-inline: inherit; interactivity: inherit; interest-delay: inherit; interpolate-size: inherit; isolation: inherit; letter-spacing: inherit; lighting-color: inherit; line-break: inherit; list-style: inherit; margin-block: inherit; margin: inherit; margin-inline: inherit; marker: inherit; mask: inherit; mask-type: inherit; math-shift: inherit; math-style: inherit; max-block-size: inherit; max-height: inherit; max-inline-size: inherit; max-width: inherit; min-block-size: inherit; min-height: inherit; min-inline-size: inherit; min-width: inherit; mix-blend-mode: inherit; object-fit: inherit; object-position: inherit; object-view-box: inherit; offset: inherit; opacity: inherit; order: inherit; orphans: inherit; outline: inherit; outline-offset: inherit; overflow-anchor: inherit; overflow-block: inherit; overflow-clip-margin: inherit; overflow-inline: inherit; overflow-wrap: inherit; overflow: inherit; overlay: inherit; overscroll-behavior-block: inherit; overscroll-behavior-inline: inherit; overscroll-behavior: inherit; padding-block: inherit; padding: inherit; padding-inline: inherit; page: inherit; page-orientation: inherit; paint-order: inherit; perspective: inherit; perspective-origin: inherit; pointer-events: inherit; position-try: inherit; position-visibility: inherit; print-color-adjust: inherit; quotes: inherit; r: inherit; reading-flow: inherit; reading-order: inherit; resize: inherit; rotate: inherit; ruby-align: inherit; ruby-position: inherit; rule-overlap: inherit; rx: inherit; ry: inherit; scale: inherit; scroll-behavior: inherit; scroll-initial-target: inherit; scroll-margin-block: inherit; scroll-margin: inherit; scroll-margin-inline: inherit; scroll-marker-group: inherit; scroll-padding-block: inherit; scroll-padding: inherit; scroll-padding-inline: inherit; scroll-snap-align: inherit; scroll-snap-stop: inherit; scroll-snap-type: inherit; scroll-target-group: inherit; scroll-timeline: inherit; scrollbar-color: inherit; scrollbar-gutter: inherit; scrollbar-width: inherit; shape-image-threshold: inherit; shape-margin: inherit; shape-outside: inherit; shape-rendering: inherit; size: inherit; speak: inherit; stop-color: inherit; stop-opacity: inherit; stroke: inherit; stroke-dasharray: inherit; stroke-dashoffset: inherit; stroke-linecap: inherit; stroke-linejoin: inherit; stroke-miterlimit: inherit; stroke-opacity: inherit; stroke-width: inherit; tab-size: inherit; table-layout: inherit; text-align: inherit; text-align-last: inherit; text-anchor: inherit; text-autospace: inherit; text-box: inherit; text-combine-upright: inherit; text-decoration: inherit; text-decoration-skip-ink: inherit; text-emphasis: inherit; text-emphasis-position: inherit; text-indent: inherit; text-justify: inherit; text-overflow: inherit; text-shadow: inherit; text-transform: inherit; text-underline-offset: inherit; text-underline-position: inherit; text-wrap: inherit; timeline-scope: inherit; timeline-trigger: inherit; touch-action: inherit; transform: inherit; transform-box: inherit; transform-origin: inherit; transform-style: inherit; transition: inherit; translate: inherit; trigger-scope: inherit; user-select: inherit; vector-effect: inherit; vertical-align: inherit; view-timeline: inherit; view-transition-class: inherit; view-transition-group: inherit; view-transition-name: inherit; view-transition-scope: inherit; visibility: inherit; border-spacing: inherit; -webkit-box-align: inherit; -webkit-box-decoration-break: inherit; -webkit-box-direction: inherit; -webkit-box-flex: inherit; -webkit-box-ordinal-group: inherit; -webkit-box-orient: inherit; -webkit-box-pack: inherit; -webkit-box-reflect: inherit; -webkit-line-break: inherit; -webkit-line-clamp: inherit; -webkit-mask-box-image: inherit; -webkit-rtl-ordering: inherit; -webkit-ruby-position: inherit; -webkit-tap-highlight-color: inherit; -webkit-text-combine: inherit; -webkit-text-decorations-in-effect: inherit; -webkit-text-fill-color: inherit; -webkit-text-security: inherit; -webkit-text-stroke: inherit; -webkit-user-drag: inherit; white-space-collapse: inherit; widows: inherit; width: inherit; will-change: inherit; word-break: inherit; word-spacing: inherit; x: inherit; y: inherit; z-index: inherit; display: contents;"></slot></template><lt-div spellcheck="false" class="lt-mirror__wrapper notranslate" data-lt-scroll-top="0" data-lt-scroll-left="0" data-lt-scroll-top-scaled="0" data-lt-scroll-left-scaled="0" data-lt-scroll-top-scaled-and-zoomed="0" data-lt-scroll-left-scaled-and-zoomed="0" style="border: 0px rgb(249, 250, 251) !important; border-radius: 0px !important; direction: ltr !important; font-family: quote-cjk-patch, Inter, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif !important; font-feature-settings: normal !important; font-kerning: auto !important; font-language-override: normal !important; font-size: 16px !important; font-size-adjust: none !important; font-stretch: 100% !important; font-style: normal !important; font-synthesis: weight style small-caps !important; font-variant: no-contextual !important; font-weight: 400 !important; hyphens: manual !important; letter-spacing: normal !important; line-break: auto !important; margin: 0px !important; padding: 12px 12px 0px 16px !important; text-align: start !important; text-decoration: none !important; text-indent: 0px !important; text-rendering: auto !important; text-transform: none !important; transform: none !important; transform-origin: 339.2px 30px !important; unicode-bidi: normal !important; white-space: pre-wrap !important; word-spacing: 0px !important; overflow-wrap: break-word !important; writing-mode: horizontal-tb !important; zoom: 1 !important; -webkit-locale: &quot;en-US&quot; !important; -webkit-rtl-ordering: logical !important; line-height: 24px !important; width: 650.4px !important; height: 48px !important;"><lt-div class="lt-mirror__canvas" style="margin-top: 0px !important; margin-left: 0px !important; width: 650.4px !important; height: 48px !important; align-content: normal !important;"><lt-span></lt-span></lt-div></lt-div></lt-mirror><slot style="color-scheme: inherit; forced-color-adjust: inherit; math-depth: inherit; position: inherit; position-anchor: inherit; text-size-adjust: inherit; appearance: inherit; color: inherit; font: inherit; font-palette: inherit; font-synthesis: inherit; position-area: inherit; text-orientation: inherit; text-rendering: inherit; text-spacing-trim: inherit; -webkit-font-smoothing: inherit; -webkit-locale: inherit; -webkit-text-orientation: inherit; -webkit-writing-mode: inherit; writing-mode: inherit; zoom: inherit; accent-color: inherit; place-content: inherit; place-items: inherit; place-self: inherit; alignment-baseline: inherit; anchor-name: inherit; anchor-scope: inherit; animation-composition: inherit; animation: inherit; animation-trigger: inherit; app-region: inherit; aspect-ratio: inherit; backdrop-filter: inherit; backface-visibility: inherit; background: inherit; background-blend-mode: inherit; baseline-shift: inherit; baseline-source: inherit; block-size: inherit; border-block: inherit; border: inherit; border-radius: inherit; border-collapse: inherit; border-end-end-radius: inherit; border-end-start-radius: inherit; border-inline: inherit; border-shape: inherit; border-start-end-radius: inherit; border-start-start-radius: inherit; inset: inherit; box-decoration-break: inherit; box-shadow: inherit; box-sizing: inherit; break-after: inherit; break-before: inherit; break-inside: inherit; buffered-rendering: inherit; caption-side: inherit; caret-animation: inherit; caret-color: inherit; caret-shape: inherit; clear: inherit; clip: inherit; clip-path: inherit; clip-rule: inherit; color-interpolation: inherit; color-interpolation-filters: inherit; color-rendering: inherit; columns: inherit; column-fill: inherit; gap: inherit; rule-break: inherit; rule: inherit; rule-inset: inherit; rule-visibility-items: inherit; column-span: inherit; contain: inherit; contain-intrinsic-block-size: inherit; contain-intrinsic-size: inherit; contain-intrinsic-inline-size: inherit; container: inherit; content: inherit; content-visibility: inherit; corner-shape: inherit; corner-block-end-shape: inherit; corner-block-start-shape: inherit; counter-increment: inherit; counter-reset: inherit; counter-set: inherit; cursor: inherit; cx: inherit; cy: inherit; d: inherit; dominant-baseline: inherit; dynamic-range-limit: inherit; empty-cells: inherit; field-sizing: inherit; fill: inherit; fill-opacity: inherit; fill-rule: inherit; filter: inherit; flex: inherit; flex-flow: inherit; float: inherit; flood-color: inherit; flood-opacity: inherit; grid: inherit; grid-area: inherit; height: inherit; hyphenate-character: inherit; hyphenate-limit-chars: inherit; hyphens: inherit; image-orientation: inherit; image-rendering: inherit; initial-letter: inherit; inline-size: inherit; inset-block: inherit; inset-inline: inherit; interactivity: inherit; interest-delay: inherit; interpolate-size: inherit; isolation: inherit; letter-spacing: inherit; lighting-color: inherit; line-break: inherit; list-style: inherit; margin-block: inherit; margin: inherit; margin-inline: inherit; marker: inherit; mask: inherit; mask-type: inherit; math-shift: inherit; math-style: inherit; max-block-size: inherit; max-height: inherit; max-inline-size: inherit; max-width: inherit; min-block-size: inherit; min-height: inherit; min-inline-size: inherit; min-width: inherit; mix-blend-mode: inherit; object-fit: inherit; object-position: inherit; object-view-box: inherit; offset: inherit; opacity: inherit; order: inherit; orphans: inherit; outline: inherit; outline-offset: inherit; overflow-anchor: inherit; overflow-block: inherit; overflow-clip-margin: inherit; overflow-inline: inherit; overflow-wrap: inherit; overflow: inherit; overlay: inherit; overscroll-behavior-block: inherit; overscroll-behavior-inline: inherit; overscroll-behavior: inherit; padding-block: inherit; padding: inherit; padding-inline: inherit; page: inherit; page-orientation: inherit; paint-order: inherit; perspective: inherit; perspective-origin: inherit; pointer-events: inherit; position-try: inherit; position-visibility: inherit; print-color-adjust: inherit; quotes: inherit; r: inherit; reading-flow: inherit; reading-order: inherit; resize: inherit; rotate: inherit; ruby-align: inherit; ruby-position: inherit; rule-overlap: inherit; rx: inherit; ry: inherit; scale: inherit; scroll-behavior: inherit; scroll-initial-target: inherit; scroll-margin-block: inherit; scroll-margin: inherit; scroll-margin-inline: inherit; scroll-marker-group: inherit; scroll-padding-block: inherit; scroll-padding: inherit; scroll-padding-inline: inherit; scroll-snap-align: inherit; scroll-snap-stop: inherit; scroll-snap-type: inherit; scroll-target-group: inherit; scroll-timeline: inherit; scrollbar-color: inherit; scrollbar-gutter: inherit; scrollbar-width: inherit; shape-image-threshold: inherit; shape-margin: inherit; shape-outside: inherit; shape-rendering: inherit; size: inherit; speak: inherit; stop-color: inherit; stop-opacity: inherit; stroke: inherit; stroke-dasharray: inherit; stroke-dashoffset: inherit; stroke-linecap: inherit; stroke-linejoin: inherit; stroke-miterlimit: inherit; stroke-opacity: inherit; stroke-width: inherit; tab-size: inherit; table-layout: inherit; text-align: inherit; text-align-last: inherit; text-anchor: inherit; text-autospace: inherit; text-box: inherit; text-combine-upright: inherit; text-decoration: inherit; text-decoration-skip-ink: inherit; text-emphasis: inherit; text-emphasis-position: inherit; text-indent: inherit; text-justify: inherit; text-overflow: inherit; text-shadow: inherit; text-transform: inherit; text-underline-offset: inherit; text-underline-position: inherit; text-wrap: inherit; timeline-scope: inherit; timeline-trigger: inherit; touch-action: inherit; transform: inherit; transform-box: inherit; transform-origin: inherit; transform-style: inherit; transition: inherit; translate: inherit; trigger-scope: inherit; user-select: inherit; vector-effect: inherit; vertical-align: inherit; view-timeline: inherit; view-transition-class: inherit; view-transition-group: inherit; view-transition-name: inherit; view-transition-scope: inherit; visibility: inherit; border-spacing: inherit; -webkit-box-align: inherit; -webkit-box-decoration-break: inherit; -webkit-box-direction: inherit; -webkit-box-flex: inherit; -webkit-box-ordinal-group: inherit; -webkit-box-orient: inherit; -webkit-box-pack: inherit; -webkit-box-reflect: inherit; -webkit-line-break: inherit; -webkit-line-clamp: inherit; -webkit-mask-box-image: inherit; -webkit-rtl-ordering: inherit; -webkit-ruby-position: inherit; -webkit-tap-highlight-color: inherit; -webkit-text-combine: inherit; -webkit-text-decorations-in-effect: inherit; -webkit-text-fill-color: inherit; -webkit-text-security: inherit; -webkit-text-stroke: inherit; -webkit-user-drag: inherit; white-space-collapse: inherit; widows: inherit; width: inherit; will-change: inherit; word-break: inherit; word-spacing: inherit; x: inherit; y: inherit; z-index: inherit; display: contents;"></slot></template><div class="ds-scroll-area__gutters" style="--container-height: 60px; position: absolute; inset: 0px; width: 100%;"><div class="ds-scroll-area__horizontal-gutter" style="left: 2px; right: 2px; display: block; bottom: 2px; height: 6px;"><div class="ds-scroll-area__horizontal-bar" style="display: none;"></div></div><div class="ds-scroll-area__vertical-gutter" style="right: 2px; top: 16px; bottom: 2px; width: 6px;"><div class="ds-scroll-area__vertical-bar" style="display: none;"></div></div></div><textarea class="_27c9245 ds-scroll-area ds-scroll-area--show-on-focus-within ds-scroll-area--enabled d96f2d2a" placeholder="Message DeepSeek" rows="2" autocomplete="off" name="search" style="--container-height: 60px;" data-qb-tmp-id="lt-746700" spellcheck="false" data-gramm="false"></textarea><div class="b13855df">
</div></div><div class="ec4f5d61"><div class="_58b31c9"><div tabindex="0" aria-pressed="true" class="f79352dc ds-toggle-button ds-toggle-button--m ds-toggle-button--selected" style="transform: translateZ(0px);"><div class="ds-toggle-button__icon"><div class="ds-icon" style="font-size: inherit;"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.06431 5.93342C7.68763 5.93342 8.19307 6.43904 8.19322 7.06233C8.19322 7.68573 7.68772 8.19123 7.06431 8.19123C6.44099 8.19113 5.9354 7.68567 5.9354 7.06233C5.93555 6.43911 6.44108 5.93353 7.06431 5.93342Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.6815 0.963693C10.1169 0.447019 11.6266 0.374829 12.5633 1.31135C13.5 2.24805 13.4277 3.75776 12.911 5.19319C12.7126 5.74431 12.4386 6.31796 12.0965 6.89729C12.4969 7.54638 12.8141 8.19018 13.036 8.80647C13.5527 10.2419 13.6251 11.7516 12.6883 12.6883C11.7516 13.625 10.242 13.5527 8.8065 13.036C8.19022 12.8141 7.54641 12.4969 6.89732 12.0965C6.31797 12.4386 5.74435 12.7125 5.19322 12.911C3.75777 13.4276 2.2481 13.5 1.31138 12.5633C0.374859 11.6266 0.447049 10.1168 0.963724 8.68147C1.17185 8.10338 1.46321 7.50063 1.82896 6.8924C1.52182 6.35711 1.27235 5.82825 1.08872 5.31819C0.572068 3.88278 0.499714 2.37306 1.43638 1.43635C2.37308 0.499655 3.8828 0.572044 5.31822 1.08869C5.82828 1.27232 6.35715 1.5218 6.89243 1.82893C7.50066 1.46318 8.10341 1.17181 8.6815 0.963693ZM11.3573 8.01154C10.9083 8.62253 10.3901 9.22873 9.80943 9.8094C9.22877 10.3901 8.62255 10.9083 8.01158 11.3572C8.4257 11.5841 8.8287 11.7688 9.21275 11.9071C10.5456 12.3868 11.4246 12.2547 11.8397 11.8397C12.2548 11.4246 12.3869 10.5456 11.9071 9.21272C11.7688 8.82866 11.5841 8.42568 11.3573 8.01154ZM2.56529 8.02912C2.37344 8.39322 2.21495 8.74796 2.09263 9.08772C1.61291 10.4204 1.74512 11.2995 2.16001 11.7147C2.57505 12.1297 3.45415 12.2618 4.78697 11.7821C5.11057 11.6656 5.44786 11.5164 5.7938 11.3367C5.249 10.9223 4.70922 10.4533 4.19029 9.9344C3.57578 9.31987 3.03169 8.67633 2.56529 8.02912ZM6.90708 3.2469C6.24065 3.70479 5.5646 4.26321 4.91392 4.91389C4.26325 5.56456 3.70482 6.24063 3.24693 6.90705C3.72674 7.63325 4.32777 8.37459 5.03892 9.08576C5.64943 9.69627 6.28183 10.2265 6.90806 10.6678C7.59368 10.2025 8.2908 9.63076 8.96079 8.96076C9.6308 8.29075 10.2025 7.59366 10.6678 6.90803C10.2265 6.2818 9.69631 5.6494 9.08579 5.03889C8.37462 4.32773 7.63328 3.72672 6.90708 3.2469ZM11.7147 2.15998C11.2996 1.74509 10.4204 1.61288 9.08775 2.0926C8.74835 2.21479 8.39382 2.37271 8.03013 2.56428C8.67728 3.03065 9.31995 3.5758 9.93443 4.19026C10.4534 4.7092 10.9223 5.24896 11.3368 5.79377C11.5164 5.44785 11.6656 5.11052 11.7821 4.78694C12.2618 3.45416 12.1297 2.57502 11.7147 2.15998ZM4.91197 2.2176C3.57922 1.73788 2.70004 1.86995 2.28501 2.28498C1.87001 2.70003 1.73791 3.5792 2.21763 4.91194C2.31709 5.18822 2.44112 5.47427 2.58677 5.7674C3.01931 5.1887 3.51474 4.6158 4.06529 4.06526C4.61584 3.5147 5.18872 3.01928 5.76743 2.58674C5.47431 2.4411 5.18824 2.31706 4.91197 2.2176Z" fill="currentColor"></path></svg></div></div><span class="_6dbc175">DeepThink</span><div class="ds-focus-ring" style="--dsl-focus-ring-offset: -1px;"></div></div></div><div class="bf38813a"><div style="width: fit-content;"><div role="button" class="ds-button ds-button--primary ds-button--filled ds-button--circle ds-button--m ds-button--icon-relative-m ds-button--disabled _52c986b bd74640a" style="--dsl-button-height: 34px;"><div class="ds-button__background"></div><div class="ds-button__icon ds-button__icon--last-child"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.3125 0.981587C8.66767 1.0545 8.97902 1.20558 9.2627 1.43374C9.48724 1.61438 9.73029 1.85933 9.97949 2.10854L14.707 6.83608L13.293 8.25014L9 3.95717V15.0431H7V3.95717L2.70703 8.25014L1.29297 6.83608L6.02051 2.10854C6.26971 1.85933 6.51277 1.61438 6.7373 1.43374C6.97662 1.24126 7.28445 1.04542 7.6875 0.981587C7.8973 0.94841 8.1031 0.956564 8.3125 0.981587Z" fill="currentColor"></path></svg></div></div></div></div></div></div></div></div><div class="_0fcaa63">AI-generated, for reference only</div></div></div></div></div></div></div></div><div class="ds-notification-container ds-theme ds-notification-container--top-right"></div><div class="ds-notification-container ds-theme"></div><div id="cf-overlay" style="position: fixed; inset: 0px; background-color: rgba(0, 0, 0, 0.7); border: 1px solid grey; z-index: 10000; display: none;"><p style="color: white; text-align: center; margin-top: 50vh;">One more step before you proceed...</p><div style="display: flex; flex-wrap: nowrap; align-items: center; justify-content: center;" id="cf-turnstile"></div></div><script async="" crossorigin="anonymous" src="./products_files/api.js.download"></script><iframe allow="fullscreen" src="./products_files/usercontent.html" style="display: none; pointer-events: none;"></iframe><qb-toolbar contenteditable="false" id="qb-toolbar-container" style="display: none;"><qb-div class="qb-toolbar__wrapper" style="left: 693px; position: absolute !important; top: 619px !important; bottom: auto !important; z-index: auto; opacity: 1 !important; pointer-events: all !important;"><div style="all: initial !important;"><qb-div style="all: initial !important;"><template shadowrootmode="open"><style>[contenteditable]:focus {
  outline: 0px solid transparent;
}

:root {
  --new: #499557;
  --new-hover: #41894e;
  --new-secondary: #71b657;
  --new-filter: saturate(150%) hue-rotate(25deg) brightness(92%);
  --new-filter-hover: brightness(90%);
  --new-banner: #6aab76;
  --new-banner-hover: #65986f;

  --traditional-filter: none;
  --traditional-filter-hover: none;
  --traditional-secondary: #8aad67;
  --traditional: #849e63;
  --traditional-hover: #687b50;
  --traditional-banner: #99b576;
  --traditional-banner-hover: #799655;

  --primary: var(--new);
  --secondary: var(--new-secondary);
  --primary-hover: var(--new-hover);
  --image-filter: var(--new-filter);
  --image-filter-hover: var(--new-filter-hover);
  --banner: var(--new-banner);
  --banner-hover: var(--new-banner-hover);

  --default-font: Lato, sans-serif;
}

body {
  background: #fff;
  justify-content: center;
  text-rendering: optimizelegibility;
  margin: 0 !important;
}

.mobile-quill-bottom-controls > div {
  min-width: 48px;
}

textarea {
  resize: none;
}

a {
  text-decoration: none;
  color: white;
}

/* .title {
  width: 500px;
  font-size: 1.5rem;
  display: inline-block;
} */

.btn {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.3s;
}

/* hide google re-captcha */

.go-premium-btn {
  width: 150px;
  text-align: center;
  padding: 4px 20px !important;
  margin: auto;
  font-weight: bold !important;
  color: #fff;
  cursor: pointer;
}

.no-box-shadow {
  box-shadow: none !important;
}

.login-offer-text {
  margin: -2px 2px;
}

.green-text {
  transition: all 0.15s;
  color: var(--primary);
  cursor: pointer;
}

.green-text:hover {
  color: var(--primary-hover);
}

.word-prompt-items {
  display: flex;
}

.article-sentence {
  display: inline;
  -webkit-transition: all 0.15s;
  -moz-transition: all 0.15s;
  -o-transition: all 0.15s;
  -ms-transition: all 0.15s;
  transition: all 0.15s;
  /* padding: 4.5px 0px; */
}

.similarity-score {
  color: black;
  font-size: 0.65em;
  margin-left: 5px;
}

.error-message {
  color: #ee1212;
  font-family: Lato, serif;
  font-size: 0.8rem;
  text-align: center;
  line-height: 18px;
  width: 100%;
  display: block;
}

.success-message {
  color: #00ff00;
  font-family: Lato, serif;
  font-size: 0.8rem;
  text-align: center;
  line-height: 18px;
}

.color-scale {
  width: 100%;
  height: 12px;
  display: flex;
  justify-content: space-around;
  padding: 2px;
  margin-top: 6px;
  margin-left: -1px;
}

.color-button {
  width: 12px;
  height: 12px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #737373;
  margin-top: -2px;
  margin: 8px 8px;
  transition: all 0.1s;
}

.color-button-inside {
  width: 8px;
  height: 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.1s;
  margin-top: -2px;
  margin: 2px 2px;
}

.article-color-button {
  background-color: #f8f8f8;
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #737373;
  margin-top: -2px;
  margin: 3px 4px;
  transition: all 0.1s;
}

.article-color-button-inside {
  background-color: #f8f8f8;
  width: 8px;
  height: 8px;
  cursor: pointer;
  border-radius: 8px;
  margin-top: -2px;
  margin: 1px 1px;
  transition: all 0.1s;
}

.recaptcha-container {
  position: absolute;
}

#example1 {
  transition: all 0.1s;
}

.processing-payment {
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 0;
  margin-left: 0;
  text-align: center;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.my-tooltip {
  line-height: 20px;
  font-size: 0.9em;
  width: 210px;
  text-align: center;
  transition: all 0s;
  z-index: 9000000;
}

.my-tooltip > h6 {
  line-height: 0px;
  margin-top: 18px;
  font-size: 0.9em;
  margin-bottom: 18px;
  filter: brightness(100);
  text-align: center;
  transition: all 0s;
}

.p-lock {
  margin-left: 1px;
  width: 14px;
  height: 14px;
  opacity: 0.69;
}

.ap-lock {
  width: 12px;
  height: 12px;
  opacity: 0.69;
  margin-top: 3px;
  cursor: pointer;
}

.strength-list {
  display: flex;
  margin-top: 6px;
  flex-direction: column;
  margin-left: 4px;
}

.strength-list-row {
  display: flex;
  cursor: pointer;
}

.strength-tag {
  color: rgb(86, 86, 86);
  font-size: 0.8em;
  line-height: 33px;
  font-weight: bold;
}

.priority-divider {
  border-top: 1px solid rgb(153, 153, 153);
  width: 70%;
  margin-left: 5%;
  margin-top: 7px;
  margin-bottom: 3px;
  margin-left: 12%;
  margin-right: auto;
}

.credit-cards {
  margin-right: 0px;
  cursor: pointer;
}

.credit-cards img {
  padding-right: 5px;
}

.paypal-logo-click {
  cursor: pointer;
}

.article-copy-textarea {
  width: 100%;
  height: 100%;
  padding: 5px;
  font-family: Lato, sans-serif;
  font-size: 1em;
}

/* ::-webkit-scrollbar {
  width: 5px;
  cursor: default;
}
*/
/* Track */
/* ::-webkit-scrollbar-track {
  border-radius: 10px;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
  background: gray;
} */

/* Loader css */
#overlay {
  background: #000000;
  /* color: #666666; */
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5000;
  top: 0;
  left: 0;
  float: left;
  text-align: center;
  opacity: 0.4;
}

.spinner {
  margin: 0 auto;
  height: 64px;
  width: 64px;
  animation: rotate 0.8s infinite linear;
  border: 5px solid;
  border-right-color: transparent;
  border-radius: 50%;
}

.hotkey-command {
  /* color: #8f8f8f !important; */
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*================ new css code for new project ====================== */

.container {
  max-width: 1300px;
  margin: auto;
  padding: 0px 12px;
  width: 100%;
}

.extHeader {
  /* background: #f1f7f3; */
  position: sticky;
  top: 0;
  z-index: 1;
}

.maximizeouticon {
  width: 35px;
  background: #828282;
  height: 3px;
  margin: auto;
  border-radius: 5px;
  margin-bottom: 11px;
  display: block;
}

.kebabBtn {
  padding: 6px 0px;
  text-align: right;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  :root {
    --new: #499557;
    --new-hover: #41894e;
    --new-secondary: #71b657;
    --new-filter: saturate(150%) hue-rotate(25deg) brightness(92%);
    --new-filter-hover: brightness(90%);
    --new-banner: #6aab76;
    --new-banner-hover: #65986f;

    --traditional-filter: none;
    --traditional-filter-hover: none;
    --traditional-secondary: #8aad67;
    --traditional: #849e63;
    --traditional-hover: #687b50;
    --traditional-banner: #99b576;
    --traditional-banner-hover: #799655;

    --primary: var(--new);
    --secondary: #71b657;
    --primary-hover: #41894e;
    --image-filter: var(--new-filter);
    --image-filter-hover: var(--new-filter-hover);
    --banner: var(--new-banner);
    --banner-hover: var(--new-banner-hover);

    --default-font: Lato, sans-serif;
  }

  body {
    text-rendering: optimizelegibility;
    margin: 0 !important;
  }

  .manual-payment-container {
    margin: auto;
    margin-top: auto;
    text-align: center;
    max-width: 400px;
    width: 100%;
    display: block;
    padding: 10px;
    border: 0px solid #499557;
    border-radius: 6px;
    margin-top: 20px;
    min-height: 162px;
  }

  .processing-payment {
    position: absolute;
    background-color: #ccc;
    opacity: 0.4;
    height: 100%;
    margin: auto;
    left: 0px;
    top: 0px;
    width: 100%;
    text-align: center;
  }

  .__react_component_tooltip.show {
    opacity: 1;
    transition: all 0s;
  }

  .green-text {
    transition: all 0.15s;
    color: #499557;
    cursor: pointer;
  }

  .green-text:hover {
    color: #41894e;
  }
}

/* Forcing font everywhere to be open sans. This not working*/
body {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 14px;
  background: #fff;
  overflow-y: auto;
  overscroll-behavior-y: none;
  scroll-behavior: smooth;
}

/*
using in commented code
.nd-input-toast-container {
  bottom: 25px;
  width: calc(100% - 20px);
  background: #2c2d33;
  text-align: center;
  font-family: monospace;
  padding: 5px;
  border-radius: 0px 0px 5px 5px;
  margin: 2px 5px 5px 5px;
  color: white;
}*/

.nd-word {
  transition: all 0.05s;
  position: relative;
}

/* #inputText[placeholder]:empty::before { // check
  content: attr(placeholder);
  color: #8497aa;
} */

#inputText[placeholder]:empty:focus::before {
  content: '';
}

/* #inputBoxSummarizer[placeholder]:empty::before {
  content: attr(placeholder);
  color: #dcdcdc;
} */

#inputBoxSummarizer[placeholder]:empty:focus::before {
  content: '';
}

/* ============= new design 2 css ================= */

/* start of CSS for splitter */
.Resizer {
  background: #000;
  opacity: 0.2;
  z-index: 1;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-background-clip: padding;
  -webkit-background-clip: padding;
  background-clip: padding-box;
}

.Pane {
  display: flex;
}

/* .Resizer:hover {
  -webkit-transition: all 2s ease;
  transition: all 2s ease;
} */

.extensionMidContainerWithScroll .Pane2 {
  height: 40%;
}

.Resizer.horizontal {
  height: 3px;
  margin: -2.5px 0 -3.5px 0;
  cursor: row-resize;
  width: 100%;
  background-color: #000;
  opacity: 0.2;
  min-height: 3px;
}

.Resizer.horizontal:hover {
  background-color: #5f6368;
}

.Resizer.vertical {
  width: 7px;
  margin-right: -4px;
  border-right: 4px solid rgba(255, 255, 255, 0);
  cursor: col-resize;
  border-bottom: 0px;
}

.Resizer.vertical:hover {
  border-right: 4px solid rgba(0, 0, 0, 1);
  width: 7px;
}
.Resizer.disabled {
  cursor: not-allowed;
}
.Resizer.disabled:hover {
  border-color: transparent;
}

/* =========== new design 3 =============== */

.root-container {
  flex-direction: column;
  flex-wrap: unset !important;
  display: flex;
  min-height: calc(100vh - 280px);
  /* background-color: #fff; */
  padding-top: 25px !important;
  padding-bottom: 30px !important;
}

.auth-root {
  /* background-color: rgba(249, 250, 255); */
  min-height: calc(100vh - 280px);
}

.mid-container {
  max-width: 1300px !important;
  width: 100%;
}

.page-header {
  /* color: #4f4f4f; */
  text-align: center;
}

.page-header:first-child,
.page-header > p:first-child {
  font-size: 28px !important;
  text-align: center;
}

.home-container-gray {
  /* background-color: #f1f1f1; */
  min-height: unset;
  padding-bottom: 40px !important;
}

.nd-mobile-container {
  padding: 0px !important;
  padding-top: 0px !important;
  /* background: #fff; */
}

.nd-mobile-container-focused-content {
  padding-top: 0px !important;
}

.home-container-premium {
  min-height: calc(100vh - 60px);
}

.qbp-d-flex {
  display: flex !important;
}

.qbp-pb50 {
  padding-bottom: 50px !important;
}

.p-0 {
  padding: 0 !important;
}

.pl-0 {
  padding-left: 0 !important;
}

.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.m-0 {
  margin: 0 !important;
}

.b-shadow {
  box-shadow: none !important;
}

.w-100 {
  width: 100% !important;
}
/* == start from here === */
.qbp-pb10 {
  padding-bottom: 10px !important;
}

.qbp-pt20 {
  padding-top: 20px !important;
}

.qbp-pb20 {
  padding-bottom: 20px !important;
}

.qbp-textCenter {
  text-align: center !important;
}

.qbp-mx16 {
  margin: 0 16px !important;
}

.qbp-pb20 {
  padding-bottom: 20px !important;
}

.qbp-py20 {
  padding: 20px 0 !important;
}

.qbp-textYellow {
  color: #ffb800;
}

.qbp-semibold {
  font-weight: 600 !important;
}

.qbp-settings-item {
  display: flex;
  padding: 25px 0 15px !important;
  justify-content: space-between;
  border-bottom: 1px solid #8f8f8f;
  color: #000;
  align-items: center;
}

.card-pad {
  padding: 10px 0 1px 0 !important;
}

.qbp-settings-item:last-child {
  border-bottom: 0;
}

.details-subtitle {
  display: inline-block;
  color: rgba(0, 0, 0, 0.6);
  font-weight: normal;
  font-size: 14px !important;
}

.settting-span {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.details-subtitle-highlight {
  display: inline-block;
  color: rgba(0, 0, 0, 0.6);
  /* font-weight: bold !important; */
  font-size: 14px !important;
}

.premium-container {
  padding-top: 0 !important;
}

/*************************** Login/Sign up popup css ******************************/

.auth-container {
  max-width: 480px;
  width: 100%;

  /* background-color: white; */
  position: relative;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 100px;
}

@media (max-width: 480px) {
  .auth-root {
    padding: 0px 15px;
  }
}

.auth-container-top-border {
  height: 5px;
  width: 100%;
  background: rgb(33, 150, 83);
  background: linear-gradient(90deg, rgba(33, 150, 83, 1) 11.34%, rgba(41, 113, 254, 1) 100%);
}

.social-auth-btn {
  margin: auto !important;
  position: relative;
}

.social-auth-btn img {
  position: absolute;
  left: 15px;
  height: 16px;
}

.auth-btn {
  line-height: 32px !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  height: 45px;
}

.qbp-useraccount-text {
  color: #8a8a8a;
  padding-bottom: 5px;
  font-size: 12px;
}

.qbp-reg-input {
  border: 1px solid #a6a5a5;
  color: #5b5b5b;
  width: 100%;
  display: block;
  float: unset;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 14px;
  transition: ease all 0.3s;
  height: 45px;
}

.qbp-reg-input:focus {
  box-shadow: 0px 0 16px 0 rgba(0, 0, 0, 0.4);
  outline: none !important;
}

.qbp-error-message {
  font-size: 11px;
  position: absolute;
  bottom: 9px;
  left: 0;
  color: #ee1212;
}

.qbp-error-message1 {
  font-size: 11px;
  padding-bottom: 10px;
  color: #ee1212;
}

.qbp-success-message {
  color: #27b027;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}

.qbp-prem-input {
  font-weight: normal;
  font-size: 14px;
  color: #151515 !important;
  background-color: #fff;
  width: 100%;
  font-family: arial;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  height: 40px;
  padding: 0px 15px;
  outline: 0;
}

.login-drawer {
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: flex-start;
}

.style01 {
  font-size: 1.5em;
  font-weight: 600;
  /* color: #fff; */
}

.linkstyle01 {
  color: #fff;
  padding: 0 5px;
  cursor: pointer;
  text-decoration: underline;
}

.flipperTextContainer {
  padding: 0px 32px 0px 15px;
  /* border-left: 1px solid #e0e0e0;*/
  /* color: rgb(0, 0, 0, 0.75); */
}

.flipperTextContainer:hover {
  /* color: black; */
}

.top-tabs .MuiButtonBase-root {
  /* display: inline-block !important; */
  text-transform: capitalize;
  font-size: 1rem;
}

.payment-status {
  font-weight: 600;
  color: #a1a197;
}

/**************************Survey popup css stuff **********************/
.survey-modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  display: flex;
  min-width: 100vw;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  z-index: 1201;
}

.survey-container {
  background-color: white;
  max-width: 650px;
  padding: 10px 15px 15px !important;
  margin: auto !important;
  position: relative !important;
}

@media (max-width: 350px) {
  .survey-container {
    margin: auto 12 !important;
  }
}

@media (max-width: 960px) {
  .survey-container {
    max-width: 350px;
  }
}

.survey-header {
  font-size: 20px !important;
  font-weight: 700 !important;
  color: #000 !important;
}

.survey-close-btn {
  position: absolute !important;
  top: 0;
  right: 0;
}

.survey-question {
  font-size: 13px !important;
  padding-bottom: 10px;
}

.so-checkbox-label {
  font-size: 12px !important;
  display: flex;
  padding-bottom: 8px;
  color: #5f6368;
}

.survey-submit-btn {
  color: #2971fe !important;
  font-size: 14px !important;
  float: right;
  font-weight: 500;
  text-transform: uppercase;
}

.unsubscribe-reason {
  width: 100%;
}

.steps {
  font-weight: bold !important;
}

.feedback-textarea {
  width: 100%;
  height: 91px;
  padding: 5px;
  font-size: 0.87rem;
  font-family: 'Open Sans', sans-serif;
}
/* .prompt-container {
  background-color: #fff;
  position: absolute;
  top: 23px;
  z-index: 1150;
  border: 1px solid #bbb;
  border-radius: 2px;
  padding-bottom: 0;
  transition: all 0.15s;

  box-shadow: 0px 1px 1px #999;
} */

/* ============= do not remove this css =============*/
.grecaptcha-badge {
  visibility: hidden;
}
/* =========== do not remove css inside comment area ========== */

/*================== responsive codes ============== */

@media (max-width: 960px) {
  .terms-main-container ol {
    margin: 10px 0px;
    padding-left: 20px;
    word-break: break-word;
  }

  .terms-main-container ol li {
    margin: 10px 0px;
    padding-left: 20px;
    word-break: break-word;
  }
}

.CardElementHolder {
  border: 1px #c4c4c4 solid;
  border-radius: 3px;
  margin-top: 8px;
  padding: 11px 15px 10px;
}

.CardField-child {
  background: #f00 !important;
}

/* ======= new global css start ============= */
p {
  font-size: 16px;
}
a {
  color: #1d7afc;
}

.btn-link {
  /* color: #2971fe !important; */
  cursor: pointer;
}
.btn-link:hover {
  text-decoration: underline;
}

.pageTitle {
  font-size: 30px;
  margin: 30px 15px 15px;
  line-height: 41px;
  font-weight: normal;
  text-align: center;
}

.terms-main-container ol li::marker {
  font-size: 16px;
  font-weight: bold;
}
.terms-main-container ol li p b {
  font-weight: 600;
}

/* .CbHosted--focus {
  border: 1px solid #499557 !important;
} */

.chargebee-overwrites::placeholder {
  color: #a0a0a0 !important;
}

.shadow-container {
  height: 6px;
  width: 100%;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

.fix-error {
  background: rgba(73, 149, 87, 0.2) !important;
}

#RESEARCH_EDITOR:before {
  color: #828282;
  margin-left: 60px;
  margin-right: 60px;
  margin: 0 auto;
}

#RESEARCH_EDITOR * {
  max-width: 672px;
  white-space: pre-wrap !important;
}
/* .grammarbot-popover-root {
  pointer-events: none !important;
} */

.page-wrapper {
  padding: var(--main-editor__mce-content-body--padding-y) var(--main-editor__mce-content-body--padding-x);
}

#grammarbot:before {
  color: #828282;
  /* margin-left: 137px;
  margin-right: 138px; */
}

#wordCounterBot:before {
  color: #828282;
}

.grammarbot-correction-card-ignore-button {
  padding-top: 13px;
}
.grammarbot-status-icons {
  font-size: 40px !important;
}

.correction-card-wrapper {
  margin-top: -10px;
  padding-top: 8px;
}

.grammarbot-fix-all {
  position: absolute !important;
  top: -48px !important;
  right: 30% !important;
  z-index: 1 !important;
}

.notepadeditor:before {
  color: #828282;
  margin-left: 0px;
}

.notepadeditor {
  width: 100%;
  font-size: 13px !important;
  margin-top: 12px !important;
}

.notepadeditor > p {
  margin-block-start: 0em !important;
  font-size: 13px !important;
}

#main-editor-parent {
  /* ! THESE VARIABLES ARE BEING USED IN SCRIPTS */
  --main-editor__mce-content-body--padding-x: 90px;
  --main-editor__mce-content-body--padding-y: 90px;
}

#main-editor > .mce-content-body {
  /* padding: var(--main-editor__mce-content-body--padding-y, 36px)
    var(--main-editor__mce-content-body--padding-x, 36px); */
  min-height: calc(100vh - 190px);

  /* color: #252525; */
}

#rough-editor {
  width: 100%;
  overflow: auto;
}

#rough-editor > .mce-content-body {
  height: calc(100vh - 122px);
  width: 100%;
  margin: 14px;
  color: #252525;
  overflow: auto;
}

#main-editor > .mce-content-body {
  word-break: break-word !important;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
}

#main-editor > .mce-content-body > p,
#main-editor > .mce-content-body > .page-wrapper > p {
  font-size: 14px !important;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0px;
}

sup,
sub {
  white-space: pre-wrap !important;
}

.tox-tinymce {
  border: none !important;
  position: absolute !important;
  visibility: visible !important;
  display: block !important;
}

#main-editor .tox-editor-header {
  border: none !important;
  border-bottom: 1px solid !important;
}

#toolbar-location .tox-editor-header {
  border: none !important;
  top: 20px !important;
  left: 14px !important;
}

#toolbar-location .tox-toolbar {
  background: none !important;
}

.tox .tox-toolbar-overlord {
  background: none !important;
}

.tox-notification {
  display: none !important;
}

.tox .tox-tbtn svg {
  fill: #666666 !important;
}

.tox .tox-tbtn--disabled svg,
.tox .tox-tbtn--disabled:hover svg,
.tox .tox-tbtn:disabled svg,
.tox .tox-tbtn:disabled:hover svg {
  fill: rgba(34, 47, 62, 0.5) !important;
}

.tox .tox-tbtn__select-label {
  color: #666666 !important;
}

.tox .tox-autocompleter {
  max-width: 35em !important;
}

.tox .tox-autocompleter .tox-menu {
  max-width: 35em !important;
}

.tox.tox-tinymce--toolbar-sticky-on .tox-editor-header {
  box-shadow: none !important;
}

.tox-editor-header {
  border-right: none !important;
}

.tox-toolbar__primary {
  background: none !important;
  /* box-shadow: 0px 1px 8px 0px rgba(31, 31, 31, 0.15) !important; */
  /* border-bottom: 1px solid #ccc !important; */
  /* border-top: 1px solid #ccc !important; */
  /* padding-left: 15px !important; */
  width: 100% !important;
}

.tox-toolbar__group {
  border: none !important;
  /* box-shadow: 2px -1px 3px -2px rgba(31, 31, 31, 0.15) !important; */
}

.tox-toolbar__group:last-child:after {
  content: '';
}

.tox .tox-menu.tox-collection.tox-collection--list {
  width: max-content;
}

.tox-toolbar__primary > .tox-toolbar__group:last-child {
  box-shadow: none !important;
}

.quillSettingSpace {
  -webkit-transition: all 0.1s ease-in-out !important;
  -moz-transition: all 0.1s ease-in-out !important;
  -o-transition: all 0.1s ease-in-out !important;
  transition: all 0.1s ease-in-out !important;
  margin-top: 26px !important;
}

.tox-tbtn,
.tox-tbtn__select-label {
  cursor: pointer !important;
}

.tox-tbtn--disabled {
  cursor: not-allowed !important;
}

@media (max-width: 600px) {
  body {
    margin: 26px 16px 0px 20px;
  }
}

.showFadeEffect {
  --animation-time: 2s;
  animation: opacity-fade var(--animation-time) !important;
}

.dataRefHidden {
  display: none !important;
}

.pulseLoader {
  content: ' ';
  width: 90px;
  height: 12px;
  display: inline-block;
  background-color: #ccc;
  animation: new-animation 1s infinite;
  vertical-align: text-bottom;
  border-radius: 3px;
  margin-left: -5px;
}

@keyframes new-animation {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
}

@keyframes opacity-fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#doc-title {
  padding: 46px 0px 13px 137px;
  width: 70%;
  font-weight: 600;
  font-size: 20px;
}

.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
  content: attr(placeholder);
  pointer-events: none;
  display: block; /* For Firefox */
  color: #828282 !important;
}

[contenteditable='true']:empty:before {
  content: attr(placeholder);
  pointer-events: none;
  display: block; /* For Firefox */
  color: #828282 !important;
}

.red-underline {
  border-bottom: #fb3f4b 2px solid;
  transition: all 0.3s ease-in-out;
}

.red-underline:hover {
  background-color: #fb3f4c14;
  border-radius: 2px;
}

.red-underline.error-hovered {
  background-color: #fb3f4c14;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}

.blue-underline {
  border-bottom: #0067c5 2px solid;
  transition: all 0.3s ease-in-out;
}

.blue-underline:hover {
  background-color: #0067c514;
  border-radius: 2px;
}

.blue-underline.error-hovered {
  background-color: #0067c514;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}

.yellow-underline {
  border-bottom: #f2b518 2px solid;
  transition: all 0.3s ease-in-out;
}

.yellow-underline:hover {
  background-color: #f2b51840;
  border-radius: 2px;
}

.yellow-underline.error-hovered {
  background-color: #f2b51840;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}

.magenta-underline {
  border-bottom: #8051ff 2px solid;
  transition: all 0.3s ease-in-out;
}

.magenta-underline:hover {
  background-color: #8051ff24;
  border-radius: 2px;
}

.magenta-underline.error-hovered {
  background-color: #8051ff24;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}

#fixed-toolbar-container .tox-tinymce-inline .tox-editor-header {
  border: none !important;
}
/*
  Citation Marker style
*/
#main-editor .CitationMarkerStyle {
  padding: 3px;
}

.CitationMarkerStyle_Burst {
  background-color: #ffefde !important;
  color: orange !important;
}

.reduce-margin-block-end {
  margin-block-end: -1em !important;
}

#grammar-checker pre {
  white-space: pre-wrap;
}

#word-counter pre {
  white-space: pre-wrap;
}

.sound-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sound-wave {
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.sound-wave .audioOnWithSpeech {
  display: block;
  width: 5px;
  margin-right: 1px;
  height: 90px;
  background: #499557;
  animation: sound 0ms -800ms linear infinite alternate;
  transition: height 0.8s;
}

.sound-wave .audioOff {
  display: block;
  width: 5px;
  margin-right: 0px;
  height: 12px;
  background: #9f9f9f;
}

.sound-wave .audioOnWithoutSpeech {
  display: block;
  width: 5px;
  margin-right: 0px;
  height: 12px;
  background: #499557;
}

@keyframes sound {
  0% {
    opacity: 0.35;
    height: 6px;
  }
  100% {
    opacity: 1;
    height: 46px;
  }
}

@keyframes sound2 {
  0% {
    opacity: 0.35;
    height: 6px;
  }
  100% {
    opacity: 1;
    height: 120px;
  }
}

.audioOnWithSpeech:nth-child(1) {
  height: 2px;
  animation-duration: 274ms;
}

.audioOnWithSpeech:nth-child(2) {
  height: 10px;
  animation-duration: 233ms;
}

.audioOnWithSpeech:nth-child(3) {
  height: 18px;
  animation-duration: 207ms;
}

.audioOnWithSpeech:nth-child(4) {
  height: 26px;
  animation-duration: 258ms;
}

.audioOnWithSpeech:nth-child(5) {
  height: 30px;
  animation-duration: 200ms;
}

.audioOnWithSpeech:nth-child(6) {
  height: 32px;
  animation-duration: 227ms;
}

.audioOnWithSpeech:nth-child(7) {
  height: 34px;
  animation-duration: 241ms;
}

.audioOnWithSpeech:nth-child(8) {
  height: 36px;
  animation-duration: 219ms;
}

.audioOnWithSpeech:nth-child(9) {
  height: 40px;
  animation-duration: 287ms;
}

.audioOnWithSpeech:nth-child(10) {
  height: 46px;
  animation-duration: 242ms;
}

.audioOnWithSpeech:nth-child(11) {
  height: 2px;
  animation-duration: 274ms;
}

.audioOnWithSpeech:nth-child(12) {
  height: 10px;
  animation-duration: 233ms;
}

.audioOnWithSpeech:nth-child(13) {
  height: 18px;
  animation-duration: 207ms;
}

.audioOnWithSpeech:nth-child(14) {
  height: 26px;
  animation-duration: 258ms;
}

.audioOnWithSpeech:nth-child(15) {
  height: 30px;
  animation-duration: 200ms;
}

.audioOnWithSpeech:nth-child(16) {
  height: 32px;
  animation-duration: 227ms;
}

.audioOnWithSpeech:nth-child(17) {
  height: 34px;
  animation-duration: 241ms;
}

.audioOnWithSpeech:nth-child(18) {
  height: 36px;
  animation-duration: 219ms;
}

.audioOnWithSpeech:nth-child(19) {
  height: 40px;
  animation-duration: 287ms;
}

.audioOnWithSpeech:nth-child(20) {
  height: 46px;
  animation-duration: 242ms;
}

.audioOnWithSpeech:nth-child(21) {
  height: 2px;
  animation-duration: 274ms;
}

.audioOnWithSpeech:nth-child(22) {
  height: 10px;
  animation-duration: 233ms;
}

.audioOnWithSpeech:nth-child(23) {
  height: 18px;
  animation-duration: 207ms;
}

.audioOnWithSpeech:nth-child(24) {
  height: 26px;
  animation-duration: 258ms;
}

.audioOnWithSpeech:nth-child(25) {
  height: 30px;
  animation-duration: 200ms;
}

.audioOnWithSpeech:nth-child(26) {
  height: 32px;
  animation-duration: 227ms;
}

.audioOnWithSpeech:nth-child(27) {
  height: 34px;
  animation-duration: 241ms;
}

.mce-content-body [contentEditable='false'][data-mce-selected] {
  cursor: not-allowed;
  outline: 3px solid #f1f1f1 !important;
}

.display--none {
  display: none;
}

/* [title='Font sizes'] {
  width: 65px !important;
} */

.wave .dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  /* margin-right: 1px; */
  background: #499557;
  animation: wave 1s linear infinite;
}
.wave .dot:nth-child(1) {
  animation-delay: -0.9s;
}
.wave .dot:nth-child(2) {
  animation-delay: -0.7s;
}
.wave .dot:nth-child(3) {
  animation-delay: -0.5s;
}

@keyframes wave {
  0%,
  60%,
  100% {
    transform: initial;
  }
  30% {
    transform: translateY(-4px);
  }
}

.cms-color-4C9459 {
  color: #4c9459 !important;
}

.cms-color-E86060 {
  color: #e86060 !important;
}

.default .text-default {
  color: #434343;
}
.default .text-bold {
  color: #252525;
}
.default .text-subtle {
  color: #7c7c7c;
}
.default .text-stark {
  color: #000000;
}
.default .text-inverse-default {
  color: #f4f4f4;
}
.default .text-inverse-bold {
  color: #ffffff;
}
.default .text-selected {
  color: #178733;
}
.default .text-link-default {
  color: #0067c5;
}
.default .text-link-pressed {
  color: #00488a;
}
.default .text-link-inverse {
  color: #ffffff;
}
.default .text-disabled {
  color: #b4b4b4;
}
.default .text-error-bold {
  color: #8f1c12;
}
.default .text-warning-bold {
  color: #bd8800;
}
.default .text-info-bold {
  color: #00488a;
}
.default .text-highlight-bold {
  color: #3700ad;
}
.default .text-success-bold {
  color: #0c6124;
}

.dark .text-default {
  color: #d3d3d3;
}
.dark .text-bold {
  color: #e0e0e0;
}
.dark .text-subtle {
  color: #a8a8a8;
}
.dark .text-stark {
  color: #ffffff;
}
.dark .text-inverse-default {
  color: #303030;
}
.dark .text-inverse-bold {
  color: #000000;
}
.dark .text-selected {
  color: #2da74c;
}
.dark .text-link-default {
  color: #0067c5;
}
.dark .text-link-pressed {
  color: #319dff;
}
.dark .text-link-inverse {
  color: #000000;
}
.dark .text-disabled {
  color: #717171;
}
.dark .text-error-bold {
  color: #f96767;
}
.dark .text-warning-bold {
  color: #ffc754;
}
.dark .text-info-bold {
  color: #319dff;
}
.dark .text-highlight-bold {
  color: #bea3fc;
}
.dark .text-success-bold {
  color: #71c185;
}

.font-display {
  font-size: 56px;
  font-weight: 400;
  line-height: 68px;
}
.font-h1 {
  font-size: 44px;
  font-weight: 400;
  line-height: 52px;
}
.font-h2 {
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
}
.font-h3 {
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
}
.font-h4 {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}
.font-h5 {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.font-h6 {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.font-p1 {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}
.font-p2 {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.font-p3 {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.font-subtitle1 {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.font-subtitle2 {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.font-subtitle3 {
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
.font-caption {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

/* New UI Refresh colors */
.default-refresh .text-default {
  color: #2c3e5d;
}
.default-refresh .text-bold {
  color: #172b4d;
}
.default-refresh .text-subtle {
  color: #626f86;
}
.default-refresh .text-stark {
  color: #101214;
}
.default-refresh .text-inverse-default {
  color: #f1f2f4;
}
.default-refresh .text-inverse-bold {
  color: #ffffff;
}
.default-refresh .text-selected {
  color: #008847;
}
.default-refresh .text-link-default {
  color: #1d7afc;
}
.default-refresh .text-link-pressed {
  color: #0055cc;
}
.default-refresh .text-link-inverse {
  color: #ffffff;
}
.default-refresh .text-disabled {
  color: #8590a2;
}
.default-refresh .text-error-bold {
  color: #ae2a19;
}
.default-refresh .text-warning-bold {
  color: #7f5f01;
}
.default-refresh .text-info-bold {
  color: #0055cc;
}
.default-refresh .text-highlight-bold {
  color: #5004c8;
}
.default-refresh .text-success-bold {
  color: #115735;
}

.dark-refresh .text-default {
  color: #b6c2cf;
}
.dark-refresh .text-bold {
  color: #c7d1db;
}
.dark-refresh .text-subtle {
  color: #8c9bab;
}
.dark-refresh .text-stark {
  color: #ffffff;
}
.dark-refresh .text-inverse-default {
  color: #22272b;
}
.dark-refresh .text-inverse-bold {
  color: #101214;
}
.dark-refresh .text-selected {
  color: #18ab64;
}
.dark-refresh .text-link-default {
  color: #388bff;
}
.dark-refresh .text-link-pressed {
  color: #85b8ff;
}
.dark-refresh .text-link-inverse {
  color: #101214;
}
.dark-refresh .text-disabled {
  color: #596773;
}
.dark-refresh .text-error-bold {
  color: #ff9c8f;
}
.dark-refresh .text-warning-bold {
  color: #f5cd47;
}
.dark-refresh .text-info-bold {
  color: #85b8ff;
}
.dark-refresh .text-highlight-bold {
  color: #c8acf6;
}
.dark-refresh .text-success-bold {
  color: #96eac2;
}

.hide-premium {
  a[href*='/premium'],
  [data-testid*='premium'] {
    display: none !important;
  }

  a[href*='/upgrade'] {
    display: none !important;
  }
}
</style><style><style data-emotion="extn-css" data-s="">.extn-css-pud6r9{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;cursor:inherit;}</style><style data-emotion="extn-css" data-s="">.extn-css-9k2vut{z-index:1500;}</style><style data-emotion="extn-css" data-s="">.extn-css-9k2vut .MuiTooltip-tooltip{border-radius:4px;font-size:12px;text-align:center;padding:8px 16px;font-weight:400;line-height:normal;max-width:20em;background-color:#232f27;-webkit-filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));padding:4px;font-family:'Open Sans',sans-serif;font-size:12px;font-weight:400;line-height:16px;color:#161f19;color:#ffffff;}</style><style data-emotion="extn-css" data-s="">.extn-css-9k2vut .MuiTooltip-arrow{color:#232f27;}</style><style data-emotion="extn-css" data-s="">.extn-css-18biwo{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh{z-index:1500;pointer-events:none;z-index:1500;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh[data-popper-placement*="bottom"] .MuiTooltip-arrow{top:0;margin-top:-0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh[data-popper-placement*="bottom"] .MuiTooltip-arrow::before{transform-origin:0 100%;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh[data-popper-placement*="top"] .MuiTooltip-arrow{bottom:0;margin-bottom:-0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh[data-popper-placement*="top"] .MuiTooltip-arrow::before{transform-origin:100% 0;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh[data-popper-placement*="right"] .MuiTooltip-arrow{left:0;margin-left:-0.71em;height:1em;width:0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh[data-popper-placement*="right"] .MuiTooltip-arrow::before{transform-origin:100% 100%;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh[data-popper-placement*="left"] .MuiTooltip-arrow{right:0;margin-right:-0.71em;height:1em;width:0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh[data-popper-placement*="left"] .MuiTooltip-arrow::before{transform-origin:0 0;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh .MuiTooltip-tooltip{border-radius:4px;font-size:12px;text-align:center;padding:8px 16px;font-weight:400;line-height:normal;max-width:20em;background-color:#232f27;-webkit-filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));padding:4px;font-family:'Open Sans',sans-serif;font-size:12px;font-weight:400;line-height:16px;color:#161f19;color:#ffffff;}</style><style data-emotion="extn-css" data-s="">.extn-css-50mdmh .MuiTooltip-arrow{color:#232f27;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v{z-index:1500;pointer-events:none;z-index:1500;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v[data-popper-placement*="bottom"] .MuiTooltip-arrow{top:0;margin-top:-0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v[data-popper-placement*="bottom"] .MuiTooltip-arrow::before{transform-origin:0 100%;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v[data-popper-placement*="top"] .MuiTooltip-arrow{bottom:0;margin-bottom:-0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v[data-popper-placement*="top"] .MuiTooltip-arrow::before{transform-origin:100% 0;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v[data-popper-placement*="right"] .MuiTooltip-arrow{left:0;margin-left:-0.71em;height:1em;width:0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v[data-popper-placement*="right"] .MuiTooltip-arrow::before{transform-origin:100% 100%;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v[data-popper-placement*="left"] .MuiTooltip-arrow{right:0;margin-right:-0.71em;height:1em;width:0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v[data-popper-placement*="left"] .MuiTooltip-arrow::before{transform-origin:0 0;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v .MuiTooltip-tooltip{border-radius:4px;font-size:12px;text-align:center;padding:8px 16px;font-weight:400;line-height:normal;max-width:20em;background-color:#232f27;-webkit-filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));padding:4px;font-family:'Open Sans',sans-serif;font-size:12px;font-weight:400;line-height:16px;color:#161f19;color:#ffffff;}</style><style data-emotion="extn-css" data-s="">.extn-css-13ps07v .MuiTooltip-arrow{color:#232f27;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h{z-index:1500;pointer-events:auto;z-index:1500;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h[data-popper-placement*="bottom"] .MuiTooltip-arrow{top:0;margin-top:-0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h[data-popper-placement*="bottom"] .MuiTooltip-arrow::before{transform-origin:0 100%;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h[data-popper-placement*="top"] .MuiTooltip-arrow{bottom:0;margin-bottom:-0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h[data-popper-placement*="top"] .MuiTooltip-arrow::before{transform-origin:100% 0;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h[data-popper-placement*="right"] .MuiTooltip-arrow{left:0;margin-left:-0.71em;height:1em;width:0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h[data-popper-placement*="right"] .MuiTooltip-arrow::before{transform-origin:100% 100%;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h[data-popper-placement*="left"] .MuiTooltip-arrow{right:0;margin-right:-0.71em;height:1em;width:0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h[data-popper-placement*="left"] .MuiTooltip-arrow::before{transform-origin:0 0;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h .MuiTooltip-tooltip{border-radius:4px;font-size:12px;text-align:center;padding:8px 16px;font-weight:400;line-height:normal;max-width:20em;background-color:#232f27;-webkit-filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));padding:4px;font-family:'Open Sans',sans-serif;font-size:12px;font-weight:400;line-height:16px;color:#161f19;color:#ffffff;}</style><style data-emotion="extn-css" data-s="">.extn-css-1trah6h .MuiTooltip-arrow{color:#232f27;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb{z-index:1500;pointer-events:auto;z-index:1500;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb[data-popper-placement*="bottom"] .MuiTooltip-arrow{top:0;margin-top:-0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb[data-popper-placement*="bottom"] .MuiTooltip-arrow::before{transform-origin:0 100%;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb[data-popper-placement*="top"] .MuiTooltip-arrow{bottom:0;margin-bottom:-0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb[data-popper-placement*="top"] .MuiTooltip-arrow::before{transform-origin:100% 0;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb[data-popper-placement*="right"] .MuiTooltip-arrow{left:0;margin-left:-0.71em;height:1em;width:0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb[data-popper-placement*="right"] .MuiTooltip-arrow::before{transform-origin:100% 100%;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb[data-popper-placement*="left"] .MuiTooltip-arrow{right:0;margin-right:-0.71em;height:1em;width:0.71em;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb[data-popper-placement*="left"] .MuiTooltip-arrow::before{transform-origin:0 0;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb .MuiTooltip-tooltip{border-radius:4px;font-size:12px;text-align:center;padding:8px 16px;font-weight:400;line-height:normal;max-width:20em;background-color:#232f27;-webkit-filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.20));padding:4px;font-family:'Open Sans',sans-serif;font-size:12px;font-weight:400;line-height:16px;color:#161f19;color:#ffffff;}</style><style data-emotion="extn-css" data-s="">.extn-css-stplqb .MuiTooltip-arrow{color:#232f27;}</style><style data-emotion="extn-css" data-s="">.extn-css-nqtrr4{background-color:rgba(97, 97, 97, 0.92);border-radius:4px;color:#fff;font-family:'Open Sans',sans-serif;padding:4px 8px;font-size:0.6875rem;max-width:300px;margin:0;word-wrap:break-word;font-weight:500;position:relative;}</style><style data-emotion="extn-css" data-s="">.MuiTooltip-popper[data-popper-placement*="left"] .extn-css-nqtrr4{transform-origin:right center;margin-right:14px;}</style><style data-emotion="extn-css" data-s="">.MuiTooltip-popper[data-popper-placement*="right"] .extn-css-nqtrr4{transform-origin:left center;margin-left:14px;}</style><style data-emotion="extn-css" data-s="">.MuiTooltip-popper[data-popper-placement*="top"] .extn-css-nqtrr4{transform-origin:center bottom;margin-bottom:14px;}</style><style data-emotion="extn-css" data-s="">.MuiTooltip-popper[data-popper-placement*="bottom"] .extn-css-nqtrr4{transform-origin:center top;margin-top:14px;}</style><style data-emotion="extn-css" data-s="">.extn-css-5j921e{box-sizing:border-box;max-width:100%;padding-inline:4px;white-space:pre-wrap;width:-webkit-max-content;width:-moz-max-content;width:max-content;}</style><style data-emotion="extn-css" data-s="">.extn-css-1urvb1y{overflow:hidden;position:absolute;width:1em;height:0.71em;box-sizing:border-box;color:rgba(97, 97, 97, 0.9);}</style><style data-emotion="extn-css" data-s="">.extn-css-1urvb1y::before{content:"";margin:auto;display:block;width:100%;height:100%;background-color:currentColor;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}</style></style><style data-styled="active" data-styled-version="6.1.11">.cgKesq{position:relative;transition:scale 0.3s,translate 0.3s,background-color 0.3s,opacity 0.3s,background-image,background-position!important;scale:1;translate:0px 0px;transform-origin:right bottom;pointer-events:all;scale:1;width:20px;height:20px;}.bEaYKb{background-color:#ffffff;display:flex;border-radius:16px;box-shadow:0px 0px 2px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.12);position:absolute;bottom:0px;right:0px;height:20px;flex-direction:row-reverse;}.byTskm{display:flex;overflow:hidden;flex-direction:row;width:0px;transition:width 0.3s ease-out;}.hWjjyq{display:flex;overflow:hidden;flex-direction:row;width:40px;transition:width 0.3s ease-out;}.cpMmND{position:relative;display:inline-flex;line-height:0;}.jpcxfy{display:flex;justify-content:center;align-items:center;background-color:#ffffff;height:100%;min-height:20px;min-width:20px;cursor:pointer;border-top-left-radius:16px;border-bottom-left-radius:16px;}.jpcxfy:hover{background-color:#ebffe5;}.jLEKgb{display:flex;justify-content:center;align-items:center;background-color:#ffffff;height:100%;min-height:20px;min-width:20px;cursor:pointer;border-radius:0px;}.jLEKgb:hover{background-color:#ebffe5;}.deimYU{transition:all 0.2s ease-in-out;position:relative;top:-0.5px;}.lKjPa{position:relative;display:flex;justify-content:center;align-items:center;height:100%;min-height:20px;min-width:20px;overflow:visible;background-color:#45c740;color:white;font-style:normal;font-weight:700;cursor:pointer;transition:background-color 0.3s ease;border-radius:100%;}.lKjPa:hover{background-color:#45c740;}.oFHit{position:relative;display:flex;justify-content:center;align-items:center;height:100%;min-height:20px;min-width:20px;overflow:visible;background-color:#45c740;color:white;font-style:normal;font-weight:700;cursor:pointer;transition:background-color 0.3s ease;border-radius:100%;}.oFHit:hover{background-color:#6adc60;}.dxeXmR{position:relative;display:flex;justify-content:center;align-items:center;height:100%;min-height:20px;min-width:20px;overflow:visible;background-color:#45c740;color:white;font-style:normal;font-weight:700;cursor:pointer;transition:background-color 0.3s ease;border-top-right-radius:16px;border-bottom-right-radius:16px;}.dxeXmR:hover{background-color:#6adc60;}.dUPnUV{display:flex;justify-content:center;cursor:pointer;align-items:center;background-color:#ffffff;height:100%;min-height:20px;min-width:20px;border-top-left-radius:16px;border-bottom-left-radius:16px;}.dUPnUV:hover{background-color:#ebffe5;}</style><div id="qb-toolbar-container" class="styles__OuterContainer-sc-10g6rmm-0 cgKesq"><div class="styles__Container-sc-10g6rmm-1 bEaYKb"><div class="MuiBox-root extn-css-pud6r9" aria-label="Click to open Quillbot"><span class="MuiBox-root extn-css-18biwo"><span class="IndicatorBadge__Wrapper-sc-17kich7-0 cpMmND"><div class="QbLauncher__LauncherStyledContainer-sc-sg6m3m-0 oFHit"><svg fill="#313f36" height="13px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 11 13" width="11px" xmlns="http://www.w3.org/2000/svg" class="ToolbarQuilly__StyledSvg-sc-1axa5ks-0 deimYU"><path d="M9.80041 3.94065H5.79964L7.45106 3.125V2.24057H5.79964L7.45106 1.62146V1.21855L5.79964 0H5.18036L3.53876 1.21855V1.63129L5.18036 2.25039H3.53876V3.16431L5.18036 3.94065H1.17959L0 5.08058V11.3306L1.17959 12.5H9.80041L10.98 11.3306V5.08058L9.80041 3.94065ZM3.82383 9.4831C3.13574 9.4831 2.55577 8.92296 2.55577 8.21541C2.55577 7.50786 3.13574 6.94772 3.82383 6.94772C4.51192 6.94772 5.09189 7.50786 5.09189 8.21541C5.09189 8.92296 4.53158 9.4831 3.82383 9.4831ZM7.14634 9.4831C6.45825 9.4831 5.87828 8.92296 5.87828 8.21541C5.87828 7.50786 6.45825 6.94772 7.14634 6.94772C7.83443 6.94772 8.4144 7.50786 8.4144 8.21541C8.4144 8.92296 7.85409 9.4831 7.14634 9.4831Z" fill="#313f36"></path></svg></div></span></span></div><div class="styles__CollapsedElements-sc-10g6rmm-2 byTskm" style="overflow: hidden;"><div class="MuiBox-root extn-css-pud6r9" aria-label="Open quick settings"><span class="MuiBox-root extn-css-18biwo"><div data-testid="quick-settings-button" class="StandbyContainer__StandbyStyledContainer-sc-14nvg7m-0 dUPnUV"><svg fill="none" height="11" preserveAspectRatio="xMidYMid meet" viewBox="2.2 2.0 12.6 12.6" width="11" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.75977 7.75C7.75977 8.16 8.09977 8.5 8.50977 8.5C8.91977 8.5 9.25977 8.16 9.25977 7.75V2.75C9.25977 2.34 8.91977 2 8.50977 2C8.09977 2 7.75977 2.34 7.75977 2.75V7.75ZM4.08977 12.1699C5.26977 13.3499 6.83977 13.9999 8.50977 13.9999C10.1798 13.9999 11.7498 13.3499 12.9298 12.1699C14.1098 10.9899 14.7598 9.41994 14.7598 7.74994C14.7598 5.66994 13.7298 3.79994 11.9198 2.61994C11.5698 2.39994 11.1098 2.48994 10.8798 2.83994C10.6498 3.18994 10.7498 3.64994 11.0998 3.87994C12.4698 4.76994 13.2598 6.17994 13.2598 7.74994C13.2598 9.01994 12.7698 10.2099 11.8698 11.1099C10.9698 12.0099 9.77977 12.4999 8.50977 12.4999C7.23977 12.4999 6.04977 12.0099 5.14977 11.1099C4.24977 10.2099 3.75977 9.01994 3.75977 7.74994C3.75977 6.18994 4.54977 4.76994 5.91977 3.87994C6.26977 3.64994 6.36977 3.18994 6.13977 2.83994C5.90977 2.48994 5.44977 2.38994 5.09977 2.61994C3.29977 3.79994 2.25977 5.66994 2.25977 7.74994C2.25977 9.41994 2.90977 10.9899 4.08977 12.1699Z" fill="#313f36" fill-rule="evenodd"></path></svg></div></span></div><div class="MuiBox-root extn-css-pud6r9" aria-label="Use AI"><span class="MuiBox-root extn-css-18biwo"><div data-qb-pphr-btn="true" class="ParaphraserContainer__PphrStyledContainer-sc-qvrut5-0 jpcxfy"><img alt="contextual cursor" height="16" src="chrome-extension://cphpplikchcioccedpjacdanfibnimmh/assets/images/contextual-cursor-icon.svg" width="16"></div></span></div></div></div> </div></template></qb-div></div></qb-div></qb-toolbar><div class="ds-floating-container" style="z-index: 0;"><div class="ds-floating-position-wrapper ds-theme" style="z-index: 0; left: 630.125px; top: 627.2px;" data-transform-origin="bottom"></div></div></body></html>