!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=93)}([,,,,,
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./helpers/bind */61),o=n(/*! is-buffer */95),i=Object.prototype.toString;function u(t){return"[object Array]"===i.call(t)}function a(t){return null!==t&&"object"==typeof t}function s(t){return"[object Function]"===i.call(t)}function c(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),u(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:u,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:s,isStream:function(t){return a(t)&&s(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s,c=[],f=!1,l=-1;function d(){f&&s&&(f=!1,s.length?c=s.concat(c):l=-1,c.length&&p())}function p(){if(!f){var t=a(d);f=!0;for(var e=c.length;e;){for(s=c,c=[];++l<e;)s&&s[l].run();l=-1,e=c.length}s=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||f||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},,,,,,
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";(function(e){var r=n(/*! ./utils */6),o=n(/*! ./helpers/normalizeHeaderName */97),i={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,s={adapter:("undefined"!=typeof XMLHttpRequest?a=n(/*! ./adapters/xhr */62):void 0!==e&&(a=n(/*! ./adapters/http */62)),a),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(u(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){s.headers[t]={}}),r.forEach(["post","put","patch"],function(t){s.headers[t]=r.merge(i)}),t.exports=s}).call(this,n(/*! ./../../process/browser.js */34))},,,,,,,,,,,,,,,,,,,
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./../utils */6),o=n(/*! ./../core/settle */98),i=n(/*! ./../helpers/buildURL */100),u=n(/*! ./../helpers/parseHeaders */101),a=n(/*! ./../helpers/isURLSameOrigin */102),s=n(/*! ../core/createError */63),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(/*! ./../helpers/btoa */103);t.exports=function(t){return new Promise(function(e,f){var l=t.data,d=t.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(t.url)||(p=new window.XDomainRequest,h="onload",v=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var y=t.auth.username||"",m=t.auth.password||"";d.Authorization="Basic "+c(y+":"+m)}if(p.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[h]=function(){if(p&&(4===p.readyState||v)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?u(p.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:t,request:p};o(e,f,r),p=null}},p.onerror=function(){f(s("Network Error",t,null,p)),p=null},p.ontimeout=function(){f(s("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var w=n(/*! ./../helpers/cookies */104),g=(t.withCredentials||a(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;g&&(d[t.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),f(t),p=null)}),void 0===l&&(l=null),p.send(l)})}},
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./enhanceError */99);t.exports=function(t,e,n,o,i){var u=new Error(t);return r(u,e,n,o,i)}},
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},,,,,,,
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){t.exports=n(/*! ./lib/axios */94)},,,,,,,,,,,,,,,,,,,
/*!******************************************************!*\
  !*** ./src/cowjs-eosjs/eosjs-jsonrpc.ts + 1 modules ***!
  \******************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */,
/*!******************************************************!*\
  !*** ./src/cowjs-eosjs/eosjs-jsonrpc.ts + 1 modules ***!
  \******************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */function(t,e,n){"use strict";n.r(e);var r=n(73),o=n.n(r),i=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u},u=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(i(arguments[e]));return t},a=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},s=n(/*! ./ripemd */112).RIPEMD160.hash,c="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var l=function(){for(var t=Array(256).fill(-1),e=0;e<c.length;++e)t[c.charCodeAt(e)]=e;return t}();var d=function(){for(var t=Array(256).fill(-1),e=0;e<f.length;++e)t[f.charCodeAt(e)]=e;return t["=".charCodeAt(0)]=0,t}();function p(t,e){for(var n=new Uint8Array(t),r=0;r<e.length;++r){var o=l[e.charCodeAt(r)];if(o<0)throw new Error("invalid base-58 value");for(var i=0;i<t;++i){var u=58*n[i]+o;n[i]=u,o=u>>8}if(o)throw new Error("base-58 value is out of range")}return n.reverse(),n}var h=33;function v(t,e){for(var n=new Uint8Array(t.length+e.length),r=0;r<t.length;++r)n[r]=t[r];for(r=0;r<e.length;++r)n[t.length+r]=e.charCodeAt(r);return s(n)}function y(t,e,n,r){var o=p(n+4,t),i={type:e,data:new Uint8Array(o.buffer,0,n)},u=new Uint8Array(v(i.data,r));if(u[0]!==o[n+0]||u[1]!==o[n+1]||u[2]!==o[n+2]||u[3]!==o[n+3])throw new Error("checksum doesn't match");return i}function m(t,e,n){for(var r=new Uint8Array(v(t.data,e)),o=new Uint8Array(t.data.length+4),i=0;i<t.data.length;++i)o[i]=t.data[i];for(i=0;i<4;++i)o[i+t.data.length]=r[i];return n+function(t,e){var n,r,o,i;void 0===e&&(e=1);var s=[];try{for(var f=a(t),d=f.next();!d.done;d=f.next()){for(var p=d.value,h=0;h<s.length;++h){var v=(l[s[h]]<<8)+p;s[h]=c.charCodeAt(v%58),p=v/58|0}for(;p;)s.push(c.charCodeAt(p%58)),p=p/58|0}}catch(t){n={error:t}}finally{try{d&&!d.done&&(r=f.return)&&r.call(f)}finally{if(n)throw n.error}}try{for(var y=a(t),m=y.next();!m.done&&!m.value;m=y.next())s.push("1".charCodeAt(0))}catch(t){o={error:t}}finally{try{m&&!m.done&&(i=y.return)&&i.call(y)}finally{if(o)throw o.error}}return s.reverse(),String.fromCharCode.apply(String,u(s))}(o)}function w(t){return"EOS"===t.substr(0,3)?function(t){if(0===t.type&&t.data.length===h)return m(t,"K1","PUB_K1_");if(1===t.type&&t.data.length===h)return m(t,"R1","PUB_R1_");throw new Error("unrecognized public key format")}(function(t){if("string"!=typeof t)throw new Error("expected string containing public key");if("EOS"===t.substr(0,3)){for(var e=p(h+4,t.substr(3)),n={type:0,data:new Uint8Array(h)},r=0;r<h;++r)n.data[r]=e[r];var o=new Uint8Array(s(n.data));if(o[0]!==e[h]||o[1]!==e[34]||o[2]!==e[35]||o[3]!==e[36])throw new Error("checksum doesn't match");return n}if("PUB_K1_"===t.substr(0,7))return y(t.substr(7),0,h,"K1");if("PUB_R1_"===t.substr(0,7))return y(t.substr(7),1,h,"R1");throw new Error("unrecognized public key format")}(t)):t}var g=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,a)}s((r=r.apply(t,e||[])).next())})},b=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},_=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};function x(t){var e,n,r="";try{for(var o=_(t),i=o.next();!i.done;i=o.next()){r+=("00"+i.value.toString(16)).slice(-2)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return r}var E=function(){function t(t,e){void 0===e&&(e={timeout:1e4});var n={url:t,timeout:e.timeout};this.api=o.a.create(n)}return t.prototype.get_abi=function(t){return g(this,void 0,void 0,function(){return b(this,function(e){return[2,this.api.get("/v1/eos/contracts/"+t).then(function(e){var n=e.data.abi,r=JSON.parse(n);return{account_name:t,abi:r}})]})})},t.prototype.get_account=function(t){return g(this,void 0,void 0,function(){return b(this,function(e){return[2,this.api.get("/v1/eos/accounts/"+t).then(function(t){return t.data})]})})},t.prototype.get_block_header_state=function(t){return g(this,void 0,void 0,function(){return b(this,function(t){throw new Error("not implemented")})})},t.prototype.get_block=function(t){return g(this,void 0,void 0,function(){var e;return b(this,function(n){return e={},"number"==typeof t?e={num_start:t,num_end:t+1,num_asc:!0,include_transactions:!0}:e.id=t,[2,this.api.post("/v1/eos/blocks",e).then(function(t){return t.data.blocks[0]})]})})},t.prototype.get_code=function(t,e){return void 0===e&&(e=!1),g(this,void 0,void 0,function(){return b(this,function(n){return[2,this.api.get("/v1/eos/contracts/"+t,{params:{include_code:!0,raw:!0,wast:!e}}).then(function(e){var n=e.data.abi,r=JSON.parse(n);return{account_name:t,abi:r,wasm:e.data.wasm,wast:e.data.wast,code_hash:e.data.code_hash}})]})})},t.prototype.get_currency_balance=function(t,e,n){return void 0===n&&(n=null),g(this,void 0,void 0,function(){return b(this,function(r){return[2,this.api.get("/v1/eos/accounts/"+e+"/balance?contract="+t+"&symbol="+n).then(function(t){return t.data.balances.map(function(t){return t.balance.toFixed(4)+" "+t.symbol})})]})})},t.prototype.get_currency_stats=function(t,e){return g(this,void 0,void 0,function(){return b(this,function(n){return[2,this.api.post("/v1/eos/currency/stats",{currencies:[{contract:t,symbol:e}]}).then(function(t){var n,r=t.data.stats[0];return(n={})[e]={supply:r.supply.toFixed(4)+" "+e,max_supply:r.max_supply.toFixed(4)+" "+e,issuer:r.issuer},n})]})})},t.prototype.get_info=function(){return g(this,void 0,void 0,function(){return b(this,function(t){return[2,this.api.get("/v1/eos/info").then(function(t){return t.data})]})})},t.prototype.get_producer_schedule=function(){return g(this,void 0,void 0,function(){return b(this,function(t){throw new Error("not implemented")})})},t.prototype.get_producers=function(t,e,n){return void 0===t&&(t=!0),void 0===e&&(e=""),void 0===n&&(n=50),g(this,void 0,void 0,function(){return b(this,function(t){throw new Error("not implemented")})})},t.prototype.get_raw_code_and_abi=function(t){return g(this,void 0,void 0,function(){return b(this,function(e){return[2,this.api.get("/v1/eos/contracts/"+t+"?include_code=true&raw=true").then(function(e){return{account_name:t,wasm:e.data.wasm,abi:e.data.abi}})]})})},t.prototype.getRawAbi=function(t){return g(this,void 0,void 0,function(){var e,n;return b(this,function(r){switch(r.label){case 0:return[4,this.get_raw_code_and_abi(t)];case 1:return e=r.sent(),n=function(t){var e=t.length;if(1==(3&e)&&"="===t[e-1]&&(e-=1),0!=(3&e))throw new Error("base-64 value is not padded correctly");var n=e>>2,r=3*n;e>0&&"="===t[e-1]&&("="===t[e-2]?r-=2:r-=1);for(var o=new Uint8Array(r),i=0;i<n;++i){var u=d[t.charCodeAt(4*i+0)],a=d[t.charCodeAt(4*i+1)],s=d[t.charCodeAt(4*i+2)],c=d[t.charCodeAt(4*i+3)];o[3*i+0]=u<<2|a>>4,3*i+1<r&&(o[3*i+1]=(15&a)<<4|s>>2),3*i+2<r&&(o[3*i+2]=(3&s)<<6|c)}return o}(e.abi),[2,{accountName:e.account_name,abi:n}]}})})},t.prototype.get_table_rows=function(t){var e=t.json,n=void 0===e||e,r=t.code,o=t.scope,i=t.table,u=(t.table_key,t.lower_bound),a=void 0===u?"":u,s=t.upper_bound,c=void 0===s?"":s,f=t.limit,l=void 0===f?10:f;return g(this,void 0,void 0,function(){return b(this,function(t){return[2,this.api.post("/v1/eos/table",{code:r,scope:o,table:i,lower_bound:a,upper_bound:c,limit:l,binary:!n}).then(function(t){return t.data})]})})},t.prototype.getRequiredKeys=function(t){return g(this,void 0,void 0,function(){return b(this,function(e){return[2,this.api.post("/v1/eos/required-keys",{tx:t.transaction,available_keys:t.availableKeys}).then(function(t){return t.data.required_keys.map(w)})]})})},t.prototype.push_transaction=function(t){var e=t.signatures,n=t.serializedTransaction;return g(this,void 0,void 0,function(){return b(this,function(t){return[2,this.api.post("/v1/eos/txs",{tx:JSON.stringify({signatures:e,packed_trx:x(n)})}).then(function(t){return{transaction_id:t.data.tx_id}})]})})},t.prototype.db_size_get=function(){return g(this,void 0,void 0,function(){return b(this,function(t){throw new Error("not implemented")})})},t.prototype.history_get_actions=function(t,e,n){return void 0===e&&(e=null),void 0===n&&(n=null),g(this,void 0,void 0,function(){return b(this,function(t){throw new Error("not implemented")})})},t.prototype.history_get_transaction=function(t,e){return void 0===e&&(e=null),g(this,void 0,void 0,function(){return b(this,function(t){throw new Error("not implemented")})})},t.prototype.history_get_key_accounts=function(t){return g(this,void 0,void 0,function(){return b(this,function(e){return[2,this.api.get("/v1/eos/accounts-for-key?public_key="+t).then(function(t){return{account_names:t.data.accounts}})]})})},t.prototype.history_get_controlled_accounts=function(t){return g(this,void 0,void 0,function(){return b(this,function(t){throw new Error("not implemented")})})},t}();e.default=E},
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./utils */6),o=n(/*! ./helpers/bind */61),i=n(/*! ./core/Axios */96),u=n(/*! ./defaults */41);function a(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var s=a(u);s.Axios=i,s.create=function(t){return a(r.merge(u,t))},s.Cancel=n(/*! ./cancel/Cancel */65),s.CancelToken=n(/*! ./cancel/CancelToken */110),s.isCancel=n(/*! ./cancel/isCancel */64),s.all=function(t){return Promise.all(t)},s.spread=n(/*! ./helpers/spread */111),t.exports=s,t.exports.default=s},
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./../defaults */41),o=n(/*! ./../utils */6),i=n(/*! ./InterceptorManager */105),u=n(/*! ./dispatchRequest */106);function a(t){this.defaults=t,this.interceptors={request:new i,response:new i}}a.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[u,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){a.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){a.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=a},
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ../utils */6);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./createError */63);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./../utils */6);function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var u=[];r.forEach(e,function(t,e){null!=t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),u.push(o(e)+"="+o(t))}))}),i=u.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./../utils */6),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,u={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(u[e]&&o.indexOf(e)>=0)return;u[e]="set-cookie"===e?(u[e]?u[e]:[]).concat([n]):u[e]?u[e]+", "+n:n}}),u):u}},
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./../utils */6);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,i=String(t),u="",a=0,s=r;i.charAt(0|a)||(s="=",a%1);u+=s.charAt(63&e>>8-a%1*8)){if((n=i.charCodeAt(a+=.75))>255)throw new o;e=e<<8|n}return u}},
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./../utils */6);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,u){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===u&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./../utils */6);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./../utils */6),o=n(/*! ./transformData */107),i=n(/*! ../cancel/isCancel */64),u=n(/*! ../defaults */41),a=n(/*! ./../helpers/isAbsoluteURL */108),s=n(/*! ./../helpers/combineURLs */109);function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!a(t.url)&&(t.url=s(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||u.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./../utils */6);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r=n(/*! ./Cancel */65);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},
/*!******************************************!*\
  !*** ./node_modules/eosjs/src/ripemd.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";class r{constructor(){}static get_n_pad_bytes(t){return 64-(t+8&63)}static pad(t){const e=t.byteLength,n=r.get_n_pad_bytes(e),[o,i]=((t,e)=>[Math.floor(t/e),t%e])(e,536870912).map((t,e)=>e?8*t:t),u=new Uint8Array(e+n+8);u.set(new Uint8Array(t),0);const a=new DataView(u.buffer);return a.setUint8(e,128),a.setUint32(e+n,i,!0),a.setUint32(e+n+4,o,!0),u.buffer}static f(t,e,n,r){return 0<=t&&t<=15?e^n^r:16<=t&&t<=31?e&n|~e&r:32<=t&&t<=47?(e|~n)^r:48<=t&&t<=63?e&r|n&~r:64<=t&&t<=79?e^(n|~r):void 0}static K(t){return 0<=t&&t<=15?0:16<=t&&t<=31?1518500249:32<=t&&t<=47?1859775393:48<=t&&t<=63?2400959708:64<=t&&t<=79?2840853838:void 0}static KP(t){return 0<=t&&t<=15?1352829926:16<=t&&t<=31?1548603684:32<=t&&t<=47?1836072691:48<=t&&t<=63?2053994217:64<=t&&t<=79?0:void 0}static add_modulo32(){return 0|Array.from(arguments).reduce((t,e)=>t+e,0)}static rol32(t,e){return t<<e|t>>>32-e}static hash(t){const e=r.pad(t),n=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],o=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],i=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],u=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],a=e.byteLength/64,s=new Array(a).fill(void 0).map((t,n)=>new Proxy(new DataView(e,64*n,64),{get:(t,e)=>t.getUint32(4*e,!0)}));let c=[1732584193,4023233417,2562383102,271733878,3285377520];for(let t=0;t<a;++t){let e=c[0],a=c[1],f=c[2],l=c[3],d=c[4],p=e,h=a,v=f,y=l,m=d;for(let c=0;c<80;++c){let w=r.add_modulo32(r.rol32(r.add_modulo32(e,r.f(c,a,f,l),s[t][n[c]],r.K(c)),i[c]),d);e=d,d=l,l=r.rol32(f,10),f=a,a=w,w=r.add_modulo32(r.rol32(r.add_modulo32(p,r.f(79-c,h,v,y),s[t][o[c]],r.KP(c)),u[c]),m),p=m,m=y,y=r.rol32(v,10),v=h,h=w}let w=r.add_modulo32(c[1],f,y);c[1]=r.add_modulo32(c[2],l,m),c[2]=r.add_modulo32(c[3],d,p),c[3]=r.add_modulo32(c[4],e,h),c[4]=r.add_modulo32(c[0],a,v),c[0]=w}const f=new ArrayBuffer(20),l=new DataView(f);return c.forEach((t,e)=>l.setUint32(4*e,t,!0)),f}}t.exports={RIPEMD160:r}}])});
//# sourceMappingURL=cowjs-eosjs-jsonrpc.js.map