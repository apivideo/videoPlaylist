!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(3)},function(e,t,r){(function(e){!function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),r=function(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(r[Symbol.iterator]=function(){return r}),r},n=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},o=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};(function(){try{var t=e.URLSearchParams;return"a=1"===new t("?a=1").toString()&&"function"==typeof t.prototype.set&&"function"==typeof t.prototype.entries}catch(e){return!1}})()||function(){var o=function(e){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var t=typeof e;if("undefined"===t);else if("string"===t)""!==e&&this._fromString(e);else if(e instanceof o){var r=this;e.forEach((function(e,t){r.append(t,e)}))}else{if(null===e||"object"!==t)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(e))for(var n=0;n<e.length;n++){var i=e[n];if("[object Array]"!==Object.prototype.toString.call(i)&&2===i.length)throw new TypeError("Expected [string, any] as entry at index "+n+" of URLSearchParams's input");this.append(i[0],i[1])}else for(var a in e)e.hasOwnProperty(a)&&this.append(a,e[a])}},i=o.prototype;i.append=function(e,t){e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]},i.delete=function(e){delete this._entries[e]},i.get=function(e){return e in this._entries?this._entries[e][0]:null},i.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},i.has=function(e){return e in this._entries},i.set=function(e,t){this._entries[e]=[String(t)]},i.forEach=function(e,t){var r;for(var n in this._entries)if(this._entries.hasOwnProperty(n)){r=this._entries[n];for(var o=0;o<r.length;o++)e.call(t,r[o],n,this)}},i.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),r(e)},i.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),r(e)},i.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),r(e)},t&&(i[Symbol.iterator]=i.entries),i.toString=function(){var e=[];return this.forEach((function(t,r){e.push(n(r)+"="+n(t))})),e.join("&")},e.URLSearchParams=o}();var i=e.URLSearchParams.prototype;"function"!=typeof i.sort&&(i.sort=function(){var e=this,t=[];this.forEach((function(r,n){t.push([n,r]),e._entries||e.delete(n)})),t.sort((function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0})),e._entries&&(e._entries={});for(var r=0;r<t.length;r++)this.append(t[r][0],t[r][1])}),"function"!=typeof i._fromString&&Object.defineProperty(i,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(this._entries)this._entries={};else{var t=[];this.forEach((function(e,r){t.push(r)}));for(var r=0;r<t.length;r++)this.delete(t[r])}var n,i=(e=e.replace(/^\?/,"")).split("&");for(r=0;r<i.length;r++)n=i[r].split("="),this.append(o(n[0]),n.length>1?o(n[1]):"")}})}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this),function(e){if(function(){try{var t=new e.URL("b","http://a");return t.pathname="c d","http://a/c%20d"===t.href&&t.searchParams}catch(e){return!1}}()||function(){var t=e.URL,r=function(t,r){"string"!=typeof t&&(t=String(t)),r&&"string"!=typeof r&&(r=String(r));var n,o=document;if(r&&(void 0===e.location||r!==e.location.href)){r=r.toLowerCase(),(n=(o=document.implementation.createHTMLDocument("")).createElement("base")).href=r,o.head.appendChild(n);try{if(0!==n.href.indexOf(r))throw new Error(n.href)}catch(e){throw new Error("URL unable to set base "+r+" due to "+e)}}var i=o.createElement("a");i.href=t,n&&(o.body.appendChild(i),i.href=i.href);var a=o.createElement("input");if(a.type="url",a.value=t,":"===i.protocol||!/:/.test(i.href)||!a.checkValidity()&&!r)throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:i});var s=new e.URLSearchParams(this.search),c=!0,u=!0,f=this;["append","delete","set"].forEach((function(e){var t=s[e];s[e]=function(){t.apply(s,arguments),c&&(u=!1,f.search=s.toString(),u=!0)}})),Object.defineProperty(this,"searchParams",{value:s,enumerable:!0});var h=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==h&&(h=this.search,u&&(c=!1,this.searchParams._fromString(this.search),c=!0))}})},n=r.prototype;["hash","host","hostname","port","protocol"].forEach((function(e){!function(e){Object.defineProperty(n,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)})),Object.defineProperty(n,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(n,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol],t=this._anchorElement.port!=e&&""!==this._anchorElement.port;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0}}),r.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},r.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},e.URL=r}(),void 0!==e.location&&!("origin"in e.location)){var t=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:t,enumerable:!0})}catch(r){setInterval((function(){e.location.origin=t()}),100)}}}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this)}).call(this,r(2))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.__esModule=!0,t.PlayerSdk=void 0;var o=function(){function e(t,r){var n=this;this.iframe=null,this.playerReady=!1,this.onceReadyCallbacks=[],this.userEventListeners=[],this.playerOrigin=null,this.postMessageCallbacks={},this.sdkPlayerId=e.nextSdkPlayerId++,this.sdkOrigin=window.location.protocol+"//"+window.location.host;var o=document.querySelector(t);if(null==o)throw new Error("No match found for selector "+t);this.iframe="IFRAME"!==o.tagName?this.createIframe(o):o,r=r||{},this.iframeUrl=r.iframeUrl||e.DEFAULT_IFRAME_URL,this.iframe.src?this.bindExistingPlayer(this.iframe):this.createNewPlayer(this.iframe,r),this.onceReadyCallbacks=[],this.userEventListeners=[],this.playerReady=!1,this.playerOrigin=new URL(this.iframeUrl).origin,window.addEventListener("message",(function(e){var t;e.origin===n.playerOrigin&&(null===(t=e.data)||void 0===t?void 0:t.sdkPlayerId)==n.sdkPlayerId&&(e.data.callbackId&&n.postMessageCallbacks[e.data.callbackId]?n.postMessageCallbacks[e.data.callbackId](e.data.arg):n.onEvent(e.data))}),!1)}return e.prototype.createNewPlayer=function(e,t){var r=this.iframeUrl.replace("${id}",t.id).replace("${type}",t.live?"live":"vod");this.setIframeSrc(e,this.addParametersInIframeHash(r+"?"+this.urlParametersFromOptions(t)))},e.prototype.bindExistingPlayer=function(e){this.setIframeSrc(e,this.addParametersInIframeHash(e.src))},e.prototype.addParametersInIframeHash=function(e){return e=this.addParameterInIframeHash(e,"sdkPlayerId",""+this.sdkPlayerId),e=this.addParameterInIframeHash(e,"sdkOrigin",btoa(this.sdkOrigin)),e=this.addParameterInIframeHash(e,"api")},e.prototype.addParameterInIframeHash=function(e,t,r){var n=e.indexOf("#"),o=r?t+":"+r:t;if(-1===n)return e+"#"+o;var i=e.substr(0,n),a=e.substr(n+1);return i+"#"+o+";"+(a=a.replace(new RegExp(t+"(:[^;]+)?;?"),""))},e.prototype.play=function(){this.postMessage({message:"play"})},e.prototype.pause=function(){this.postMessage({message:"pause"})},e.prototype.mute=function(){this.postMessage({message:"mute"})},e.prototype.unmute=function(){this.postMessage({message:"unmute"})},e.prototype.seek=function(e){this.postMessage({message:"seek",seek:e})},e.prototype.setCurrentTime=function(e){this.postMessage({message:"setCurrentTime",currentTime:e})},e.prototype.setVolume=function(e){this.postMessage({message:"setVolume",volume:e})},e.prototype.setLoop=function(e){this.postMessage({message:"setLoop",loop:e})},e.prototype.getPaused=function(e){this.postMessage({message:"getPaused"},e)},e.prototype.getMuted=function(e){this.postMessage({message:"getMuted"},e)},e.prototype.getDuration=function(e){this.postMessage({message:"getDuration"},e)},e.prototype.getCurrentTime=function(e){this.postMessage({message:"getCurrentTime"},e)},e.prototype.getVolume=function(e){this.postMessage({message:"getVolume"},e)},e.prototype.getLoop=function(e){this.postMessage({message:"getLoop"},e)},e.prototype.addEventListener=function(e,t){this.userEventListeners.push({event:e,callback:t})},e.prototype.destroy=function(){var e=this;this.postMessage({message:"destroy"}),setTimeout((function(){var t,r;return null===(r=null===(t=e.iframe)||void 0===t?void 0:t.parentElement)||void 0===r?void 0:r.removeChild(e.iframe)}),0)},e.prototype.urlParametersFromOptions=function(e){return e.ts=(new Date).getTime(),Object.keys(e).map((function(t){return t+"="+e[t]})).join("&")},e.prototype.onEvent=function(e){switch(this.userEventListeners.filter((function(t){return t.event===e.type})).forEach((function(e){return e.callback()})),e.type){case"sdkSync":this.onReady()}},e.prototype.onReady=function(){this.playerReady||(this.playerReady=!0,this.onceReadyCallbacks.forEach((function(e){e()})))},e.prototype.postMessage=function(e,t){var r,o=this;if(this.playerOrigin&&(null===(r=this.iframe)||void 0===r?void 0:r.contentWindow)){var i=n(n({},e),{sdkPlayerId:this.sdkPlayerId});if(t){var a=this.makeId(16);this.postMessageCallbacks[a]=t,i.callbackId=a}this.playerReady&&this.playerOrigin?this.iframe.contentWindow.postMessage(i,this.playerOrigin):this.onceReadyCallbacks.push((function(){var e,t;return o.playerOrigin&&(null===(t=null===(e=o.iframe)||void 0===e?void 0:e.contentWindow)||void 0===t?void 0:t.postMessage(i,o.playerOrigin))}))}},e.prototype.makeId=function(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,o=0;o<e;o++)t+=r.charAt(Math.floor(Math.random()*n));return t},e.prototype.createIframe=function(e){var t=document.createElement("iframe");return t.style.height="100%",t.style.width="100%",t.allowFullscreen=!0,e.appendChild(t),t},e.prototype.setIframeSrc=function(e,t){e.src=t},e.DEFAULT_IFRAME_URL="https://embed.api.video/${type}/${id}",e.nextSdkPlayerId=1,e}();t.PlayerSdk=o}])}));