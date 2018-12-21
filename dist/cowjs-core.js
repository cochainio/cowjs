!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=15)}({15:
/*!*********************************************!*\
  !*** ./src/cowjs-core/index.ts + 5 modules ***!
  \*********************************************/
/*! exports provided: Network, Plugin, Service, default */
/*! all exports used */function(t,n,e){"use strict";e.r(n);var r,o=function(){function t(){this.port=0}return t.placeholder=function(){return new t},t.fromJSON=function(n){return Object.assign(t.placeholder(),n)},t.prototype.url=function(){return this.protocol+"://"+this.host+(this.port>0?":"+this.port:"")},t.prototype.clone=function(){return t.fromJSON(JSON.parse(JSON.stringify(this)))},t.prototype.isValid=function(){return this.protocol.length&&this.host.length&&this.port||this.chainID.length},t}(),i=function(){function t(t){void 0===t&&(t=""),this.name=t}return t.placeholder=function(){return new t},t.fromJson=function(n){return Object.assign(t.placeholder(),n)},t}(),u=new(function(){function t(){this.plugins=[]}return t.prototype.loadPlugin=function(t){this.plugin(t.name)||this.plugins.push(t)},t.prototype.plugin=function(t){return this.plugins.find(function(n){return n.name===t})},t.prototype.supportedBlockchains=function(){return this.plugins.map(function(t){return t.name})},t}()),c=(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),a=function(t){function n(e,r){var o=t.call(this,r)||this;return o.code=e,o.message=r,o.name="CowError",Error.captureStackTrace&&Error.captureStackTrace(o,n),o}return c(n,t),n.prototype.toString=function(){return this.name+": < code: "+this.code+", message: "+this.message+" >"},n}(Error),l=function(){return(l=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},s=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,c)}a((r=r.apply(t,n||[])).next())})},f=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},p=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},h=function(){function t(){}return t.callback=function(n,e,r){if(console.log(n,e,JSON.parse(r)),t.callAwaits.has(e)){var o=p(t.callAwaits.get(e),2),i=o[0],u=o[1];t.callAwaits.delete(e);var c=JSON.parse(r);c.code?u(new a(c.code,c.msg)):i(c)}else console.warn("call id "+e+" not found")},t.call=function(n,e,r){return void 0===r&&(r=12e4),s(this,void 0,void 0,function(){var o;return f(this,function(i){return(o=window).cochain.callback||(o.cochain.callback=t.callback),[2,new Promise(function(i,u){var c,s={method:n,args:e};if(o.cochain.exec)c=o.cochain.exec(JSON.stringify(s));else{if(!(o.webkit&&o.webkit.messageHandlers&&o.webkit.messageHandlers.cochain))return void u(new a(1,"only support android or ios platform under cordova"));if(!((c=o.cochain.nextMethodID++)>=0))return void u(new a(1,"no valid method id"));o.webkit.messageHandlers.cochain.postMessage(l({},s,{methodID:c}))}t.callAwaits.has(c)&&u(new a(1,"inconsistent remote exec")),setTimeout(function(){t.callAwaits.has(c)&&(u(new a(1,"timeout")),t.callAwaits.delete(c))},r),t.callAwaits.set(c,[i,u])})]})})},t.callAwaits=new Map,t}();e.d(n,"Network",function(){return o}),e.d(n,"Plugin",function(){return i}),e.d(n,"Service",function(){return h});var d=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,c)}a((r=r.apply(t,n||[])).next())})},y=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},b=function(){function t(){}return t.prototype.loadPlugin=function(t){var n;u.loadPlugin(t),Object.assign(this,((n={})[t.name]=t.signatureProvider(),n[t.name+"Hook"]=t.hookProvider,n))},t.prototype.supportedBlockchains=function(){return u.supportedBlockchains()},t.prototype.getWallets=function(t){return d(this,void 0,void 0,function(){return y(this,function(n){switch(n.label){case 0:return[4,h.call("getWallets",{blockchain:t})];case 1:return[2,n.sent()]}})})},t.prototype.getCurrentWallet=function(){return d(this,void 0,void 0,function(){return y(this,function(t){switch(t.label){case 0:return[4,h.call("getCurrentWallet",{})];case 1:return[2,t.sent()]}})})},t.prototype.shareSNS=function(t,n,e,r){return d(this,void 0,void 0,function(){return y(this,function(o){switch(o.label){case 0:return[4,h.call("shareSNS",{title:t,desc:n,url:e,image:r})];case 1:return[2,o.sent()]}})})},t.prototype.sign=function(t,n,e){return void 0===n&&(n=""),void 0===e&&(e=!1),d(this,void 0,void 0,function(){return y(this,function(r){switch(r.label){case 0:return[4,h.call("sign",{data:t,whatFor:n,isHash:e})];case 1:return[2,r.sent()]}})})},t}();n.default=new b}})});
//# sourceMappingURL=cowjs-core.js.map