!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=10)}({0:
/*!*********************************************!*\
  !*** ./src/cowjs-core/index.ts + 5 modules ***!
  \*********************************************/
/*! exports provided: Network, Plugin, Service, default */
/*! all exports used */function(t,n,e){"use strict";e.r(n);var r,o=function(){function t(){this.port=0}return t.placeholder=function(){return new t},t.fromJSON=function(n){return Object.assign(t.placeholder(),n)},t.prototype.url=function(){return this.protocol+"://"+this.host+(this.port>0?":"+this.port:"")},t.prototype.clone=function(){return t.fromJSON(JSON.parse(JSON.stringify(this)))},t.prototype.isValid=function(){return this.protocol.length&&this.host.length&&this.port||this.chainID.length},t}(),i=function(){function t(t){void 0===t&&(t=""),this.name=t}return t.placeholder=function(){return new t},t.fromJson=function(n){return Object.assign(t.placeholder(),n)},t}(),u=new(function(){function t(){}return t.prototype.loadPlugin=function(t){this.plugin(t.name)||this.plugins.push(t)},t.prototype.plugin=function(t){return this.plugins.find(function(n){return n.name===t})},t.prototype.supportedBlockchains=function(){return this.plugins.map(function(t){return t.name})},t}()),c=(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),a=function(t){function n(e,r){var o=t.call(this,r)||this;return o.code=e,o.message=r,o.name="CowError",Error.captureStackTrace&&Error.captureStackTrace(o,n),o}return c(n,t),n}(Error),l=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,c)}a((r=r.apply(t,n||[])).next())})},f=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},s=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},p=function(){function t(){}return t.callback=function(t,n,e){if(this.callAwaits.has(n)){var r=s(this.callAwaits.get(n),2),o=r[0],i=r[1];this.callAwaits.delete(n);var u=JSON.parse(e);u.code?i(new a(u.code,u.msg)):o(u)}else console.warn("call id "+n+" not found")},t.call=function(n,e,r){return void 0===r&&(r=12e4),l(this,void 0,void 0,function(){var o=this;return f(this,function(i){return window.cochain.callback||(window.cochain.callback=t.callback),[2,new Promise(function(t,i){var u=window.cochain.exec(JSON.stringify({method:n,args:e}));o.callAwaits.has(u)&&i(new a(1,"inconsistent remote exec")),setTimeout(function(){o.callAwaits.has(u)&&(i(new a(1,"timeout")),o.callAwaits.delete(u))},r),o.callAwaits.set(u,[t,i])})]})})},t.callAwaits=new Map,t}();e.d(n,"Network",function(){return o}),e.d(n,"Plugin",function(){return i}),e.d(n,"Service",function(){return p});var h=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,c)}a((r=r.apply(t,n||[])).next())})},d=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},y=function(){function t(){}return t.prototype.loadPlugin=function(t){var n;u.loadPlugin(t),Object.assign(this,((n={})[t.name]=t.signatureProvider(),n[t.name+"Hook"]=t.hookProvider,n))},t.prototype.supportedBlockchains=function(){return u.supportedBlockchains()},t.prototype.getWallets=function(t){return h(this,void 0,void 0,function(){return d(this,function(n){switch(n.label){case 0:return[4,p.call("getWallets",{blockchain:t})];case 1:return[2,n.sent()]}})})},t.prototype.getCurrentWallet=function(){return h(this,void 0,void 0,function(){return d(this,function(t){switch(t.label){case 0:return[4,p.call("getCurrentWallet",{})];case 1:return[2,t.sent()]}})})},t.prototype.shareSNS=function(t,n,e,r){return h(this,void 0,void 0,function(){return d(this,function(o){switch(o.label){case 0:return[4,p.call("shareSNS",{title:t,desc:n,url:e,image:r})];case 1:return[2,o.sent()]}})})},t.prototype.sign=function(t,n,e){return void 0===n&&(n=""),void 0===e&&(e=!1),h(this,void 0,void 0,function(){return d(this,function(r){switch(r.label){case 0:return[4,p.call("sign",{data:t,whatFor:n,isHash:e})];case 1:return[2,r.sent()]}})})},t}();n.default=new y},10:
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default, CowjsEos */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */function(t,n,e){"use strict";e.r(n);var r=e(/*! ./cowjs-core */0),o=e(/*! ./cowjs-eosjs */2);e.d(n,"CowjsEos",function(){return o.default}),n.default=r.default},2:
/*!**********************************!*\
  !*** ./src/cowjs-eosjs/index.ts ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */function(t,n,e){"use strict";e.r(n);var r,o=e(/*! ../cowjs-core */0),i=(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),u=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,c)}a((r=r.apply(t,n||[])).next())})},c=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},l=function(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(a(arguments[n]));return t},f=function(t){function n(){return t.call(this,n.blockchain)||this}return i(n,t),n.prototype.hookProvider=function(t,e){var r=this;return{getAvailableKeys:function(){return u(r,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,o.Service.call("getAvailableKeys",{blockchain:n.blockchain})];case 1:return[2,t.sent()]}})})},sign:function(i){return u(r,void 0,void 0,function(){var r,u;return c(this,function(c){switch(c.label){case 0:return r=e?e():{},u={blockchain:n.blockchain,network:t,signatureProviderArgs:i,requiredFields:r},[4,o.Service.call("signTransaction",u)];case 1:return[2,c.sent()]}})})}}},n.prototype.signatureProvider=function(){var t=this;return function(n,e,r){if(!n.isValid())throw new Error("invalid network");var o={},i=t.hookProvider(n,function(){return o});return new Proxy(new e(Object.assign(r,{signatureProvider:i})),{get:function(t,n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var i=e.find(function(t){return t.hasOwnProperty("requiredFields")});return o=i?i.requiredFields:{},t[n].apply(t,l(e))}}})}},n.blockchain="eos",n}(o.Plugin);n.default=f}})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY293anMtY29yZS9uZXR3b3JrLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3dqcy1jb3JlL3BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY293anMtY29yZS9wbHVnaW4tcmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY293anMtY29yZS9lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY293anMtY29yZS9zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3dqcy1jb3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY293anMtZW9zanMvaW5kZXgudHMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiYSIsImkiLCJ3aW5kb3ciLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJOZXR3b3JrIiwidGhpcyIsInBvcnQiLCJwbGFjZWhvbGRlciIsImZyb21KU09OIiwianNvbiIsImFzc2lnbiIsInVybCIsInByb3RvY29sIiwiaG9zdCIsImNsb25lIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaXNWYWxpZCIsImxlbmd0aCIsImNoYWluSUQiLCJQbHVnaW4iLCJmcm9tSnNvbiIsInBsdWdpbl9yZXBvc2l0b3J5IiwiUGx1Z2luUmVwb3NpdG9yeVNpbmdsZXRvbiIsImxvYWRQbHVnaW4iLCJwbHVnaW4iLCJwbHVnaW5zIiwicHVzaCIsImZpbmQiLCJzdXBwb3J0ZWRCbG9ja2NoYWlucyIsIm1hcCIsIl9zdXBlciIsIkNvd0Vycm9yIiwiY29kZSIsIm1lc3NhZ2UiLCJfdGhpcyIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJfX2V4dGVuZHMiLCJzZXJ2aWNlIiwiU2VydmljZSIsImNhbGxiYWNrIiwibWV0aG9kIiwibWV0aG9kSUQiLCJyZXNwb25zZSIsImNhbGxBd2FpdHMiLCJoYXMiLCJfYSIsIl9fcmVhZCIsInJlc29sdmUiLCJyZWplY3QiLCJkZWxldGUiLCJyZXAiLCJlcnJvciIsIm1zZyIsImNvbnNvbGUiLCJ3YXJuIiwiYXJncyIsInRpbWVvdXQiLCJjb2NoYWluIiwiUHJvbWlzZSIsImV4ZWMiLCJzZXRUaW1lb3V0Iiwic2V0IiwiTWFwIiwiY293anNfY29yZV9Db3ciLCJDb3ciLCJzaWduYXR1cmVQcm92aWRlciIsImhvb2tQcm92aWRlciIsImdldFdhbGxldHMiLCJibG9ja2NoYWluIiwic2VudCIsImdldEN1cnJlbnRXYWxsZXQiLCJzaGFyZVNOUyIsInRpdGxlIiwiZGVzYyIsImltYWdlIiwic2lnbiIsImRhdGEiLCJ3aGF0Rm9yIiwiaXNIYXNoIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIl9jb3dqc19jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfY293anNfZW9zanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyIsIkNvd0VPUyIsIm5ldHdvcmsiLCJmaWVsZHNGZXRjaGVyIiwiZ2V0QXZhaWxhYmxlS2V5cyIsIl9fYXdhaXRlciIsInNpZ25hdHVyZVByb3ZpZGVyQXJncyIsInJlcXVpcmVkRmllbGRzIiwiZW9zanMiLCJvcHRpb25zIiwiUHJveHkiLCJlb3Nqc0luc3RhbmNlIiwiX2kiLCJhcmd1bWVudHMiLCJycWYiLCJhcmciLCJhcHBseSIsIl9fc3ByZWFkIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFBQSxFQUFBQyxHQUNBLG9CQUFBQyxTQUFBLGlCQUFBQyxPQUNBQSxPQUFBRCxRQUFBRCxTQUNBLHNCQUFBRyxlQUFBQyxJQUNBRCxPQUFBLEdBQUFILE9BQ0EsQ0FDQSxJQUFBSyxFQUFBTCxJQUNBLFFBQUFNLEtBQUFELEdBQUEsaUJBQUFKLGdCQUFBRixHQUFBTyxHQUFBRCxFQUFBQyxJQVBBLENBU0NDLE9BQUEsV0FDRCxtQkNUQSxJQUFBQyxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFULFFBR0EsSUFBQUMsRUFBQU0sRUFBQUUsR0FBQSxDQUNBSixFQUFBSSxFQUNBQyxHQUFBLEVBQ0FWLFFBQUEsSUFVQSxPQU5BVyxFQUFBRixHQUFBRyxLQUFBWCxFQUFBRCxRQUFBQyxJQUFBRCxRQUFBUSxHQUdBUCxFQUFBUyxHQUFBLEVBR0FULEVBQUFELFFBMERBLE9BckRBUSxFQUFBSyxFQUFBRixFQUdBSCxFQUFBTSxFQUFBUCxFQUdBQyxFQUFBTyxFQUFBLFNBQUFmLEVBQUFnQixFQUFBQyxHQUNBVCxFQUFBVSxFQUFBbEIsRUFBQWdCLElBQ0FHLE9BQUFDLGVBQUFwQixFQUFBZ0IsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1QsRUFBQWUsRUFBQSxTQUFBdkIsR0FDQSxvQkFBQXdCLGVBQUFDLGFBQ0FOLE9BQUFDLGVBQUFwQixFQUFBd0IsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQXBCLEVBQUEsY0FBaUQwQixPQUFBLEtBUWpEbEIsRUFBQW1CLEVBQUEsU0FBQUQsRUFBQUUsR0FFQSxHQURBLEVBQUFBLElBQUFGLEVBQUFsQixFQUFBa0IsSUFDQSxFQUFBRSxFQUFBLE9BQUFGLEVBQ0EsS0FB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U0FBT1ksR0FBNEMsT0FBQUQsRUFBQXJELE9BQUEsNkVBU25DLE9BUlp1RCxFQUFpQkosRUFBZ0JBLElBQWtCLEdBRW5EN0IsRUFBTyxDQUNUYSxXQUFZYyxFQUFPZCxXQUNuQmUsUUFBT0EsRUFDUEksc0JBQXFCQSxFQUNyQkMsZUFBY0EsR0FFQSxHQUFNUixFQUFBLFFBQVE1RyxLQUFLLGtCQUFtQm1GLFdBQ3hELFNBRGtCVixFQUFBd0IsZ0JBTTlCYSxFQUFBckYsVUFBQW9FLGtCQUFBLGVBQUFoQyxFQUFBL0IsS0FDSSxPQUFPLFNBQUNpRixFQUFrQk0sRUFBWUMsR0FDbEMsSUFBS1AsRUFBUXBFLFVBQ1QsTUFBTSxJQUFJbUIsTUFBTSxtQkFHcEIsSUFBSXNELEVBQWlCLEdBRWZ2QixFQUFvQmhDLEVBQUtpQyxhQUFhaUIsRUFEdEIsV0FBTSxPQUFBSyxJQUc1QixPQUFPLElBQUlHLE1BQU0sSUFBSUYsRUFBTTlHLE9BQU80QixPQUFPbUYsRUFBUyxDQUFFekIsa0JBQWlCQSxLQUFNLENBQ3ZFbkYsSUFBRyxTQUFFOEcsRUFBZXBELEdBQ2hCLE9BQU8sZUFBQyxJQUFBZSxFQUFBLEdBQUFzQyxFQUFBLEVBQUFBLEVBQUFDLFVBQUE5RSxPQUFBNkUsSUFBQXRDLEVBQUFzQyxHQUFBQyxVQUFBRCxHQUNKLElBQU1FLEVBQU14QyxFQUFLN0IsS0FBSyxTQUFBc0UsR0FBTyxPQUFBQSxFQUFJbEcsZUFBZSxvQkFFaEQsT0FEQTBGLEVBQWlCTyxFQUFNQSxFQUFJUCxlQUFpQixHQUNyQ0ksRUFBY3BELEdBQU95RCxNQUFyQkwsRUFBYU0sRUFBWTNDLFVBN0M3QzJCLEVBQUFkLFdBQXFCLE1BbURoQ2MsRUFwREEsQ0FBb0NGLEVBQUEsUUFBZkQsRUFBQSIsImZpbGUiOiJjb3dqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcclxuICAgIHN0YXRpYyBwbGFjZWhvbGRlciAoKSB7IHJldHVybiBuZXcgTmV0d29yaygpIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUpTT04gKGpzb246IG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE5ldHdvcmsucGxhY2Vob2xkZXIoKSwganNvbilcclxuICAgIH1cclxuXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHByb3RvY29sOiBzdHJpbmdcclxuICAgIGhvc3Q6IHN0cmluZ1xyXG4gICAgcG9ydDogbnVtYmVyID0gMFxyXG4gICAgYmxvY2tjaGFpbjogc3RyaW5nXHJcbiAgICBjaGFpbklEOiBzdHJpbmdcclxuXHJcbiAgICB1cmwgKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByb3RvY29sfTovLyR7dGhpcy5ob3N0fWAgKyAodGhpcy5wb3J0ID4gMCA/IGA6JHt0aGlzLnBvcnR9YCA6ICcnKVxyXG4gICAgfVxyXG5cclxuICAgIGNsb25lICgpIHtcclxuICAgICAgICByZXR1cm4gTmV0d29yay5mcm9tSlNPTihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKSlcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMucHJvdG9jb2wubGVuZ3RoICYmIHRoaXMuaG9zdC5sZW5ndGggJiYgdGhpcy5wb3J0KSB8fCB0aGlzLmNoYWluSUQubGVuZ3RoXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luIHtcclxuICAgIHN0YXRpYyBwbGFjZWhvbGRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbHVnaW4oKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tSnNvbiAoanNvbjogb2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oUGx1Z2luLnBsYWNlaG9sZGVyKCksIGpzb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBuYW1lID0gJycpIHt9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL3BsdWdpbidcclxuXHJcbmV4cG9ydCBjbGFzcyBQbHVnaW5SZXBvc2l0b3J5U2luZ2xldG9uIHtcclxuICAgIHBsdWdpbnM6IFBsdWdpbltdXHJcblxyXG4gICAgbG9hZFBsdWdpbiAocGx1Z2luOiBQbHVnaW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMucGx1Z2luKHBsdWdpbi5uYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChwbHVnaW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsdWdpbiAobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2lucy5maW5kKHBsdWdpbiA9PiBwbHVnaW4ubmFtZSA9PT0gbmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBzdXBwb3J0ZWRCbG9ja2NoYWlucyAoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnMubWFwKHBsdWdpbiA9PiBwbHVnaW4ubmFtZSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUGx1Z2luUmVwb3NpdG9yeSA9IG5ldyBQbHVnaW5SZXBvc2l0b3J5U2luZ2xldG9uKClcclxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luUmVwb3NpdG9yeVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3dFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIG5hbWUgPSAnQ293RXJyb3InXHJcblxyXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBjb2RlOiBudW1iZXIsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKVxyXG5cclxuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcclxuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQ293RXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb3dFcnJvciBmcm9tICcuL2Vycm9yJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZSB7XHJcbiAgICBzdGF0aWMgY2FsbGJhY2sgKG1ldGhvZDogc3RyaW5nLCBtZXRob2RJRDogbnVtYmVyLCByZXNwb25zZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbGxBd2FpdHMuaGFzKG1ldGhvZElEKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYGNhbGwgaWQgJHttZXRob2RJRH0gbm90IGZvdW5kYClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFsgcmVzb2x2ZSwgcmVqZWN0IF0gPSB0aGlzLmNhbGxBd2FpdHMuZ2V0KG1ldGhvZElEKVxyXG4gICAgICAgIHRoaXMuY2FsbEF3YWl0cy5kZWxldGUobWV0aG9kSUQpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcCA9IEpTT04ucGFyc2UocmVzcG9uc2UpXHJcbiAgICAgICAgaWYgKHJlcC5jb2RlKSB7IC8vIGZhaWxlZFxyXG4gICAgICAgICAgICByZWplY3QobmV3IENvd0Vycm9yKHJlcC5jb2RlLCByZXAubXNnKSlcclxuICAgICAgICB9IGVsc2UgeyAvLyBzdWNjZWVkZWRcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBjYWxsIChtZXRob2Q6IHN0cmluZywgYXJnczogb2JqZWN0LCB0aW1lb3V0OiBudW1iZXIgPSAxMjAwMDApIHsgLy8gZGVmYXVsdCB0aW1lb3V0IGlzIDEyMHNcclxuICAgICAgICAvLyBMYXppbHkgc2V0IGNhbGxiYWNrXHJcbiAgICAgICAgaWYgKCEod2luZG93IGFzIGFueSkuY29jaGFpbi5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkuY29jaGFpbi5jYWxsYmFjayA9IFNlcnZpY2UuY2FsbGJhY2tcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZElEID0gKHdpbmRvdyBhcyBhbnkpLmNvY2hhaW4uZXhlYyhKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbEF3YWl0cy5oYXMobWV0aG9kSUQpKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IENvd0Vycm9yKDEsICdpbmNvbnNpc3RlbnQgcmVtb3RlIGV4ZWMnKSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsQXdhaXRzLmhhcyhtZXRob2RJRCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IENvd0Vycm9yKDEsICd0aW1lb3V0JykpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQXdhaXRzLmRlbGV0ZShtZXRob2RJRClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGltZW91dClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEF3YWl0cy5zZXQobWV0aG9kSUQsIFtyZXNvbHZlLCByZWplY3RdKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FsbEF3YWl0cyA9IG5ldyBNYXA8bnVtYmVyLCBbYW55LCBhbnldPigpXHJcbn1cclxuIiwiaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJ1xyXG5pbXBvcnQgUGx1Z2luIGZyb20gJy4vcGx1Z2luJ1xyXG5pbXBvcnQgUGx1Z2luUmVwb3NpdG9yeSBmcm9tICcuL3BsdWdpbi1yZXBvc2l0b3J5J1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnXHJcblxyXG5leHBvcnQgeyBOZXR3b3JrLCBQbHVnaW4sIFNlcnZpY2UgfVxyXG5cclxuY2xhc3MgQ293IHtcclxuICAgIGxvYWRQbHVnaW4gKHBsdWdpbjogUGx1Z2luKSB7XHJcbiAgICAgICAgUGx1Z2luUmVwb3NpdG9yeS5sb2FkUGx1Z2luKHBsdWdpbilcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XHJcbiAgICAgICAgICAgIFtwbHVnaW4ubmFtZV06IChwbHVnaW4gYXMgYW55KS5zaWduYXR1cmVQcm92aWRlcigpLFxyXG4gICAgICAgICAgICBbcGx1Z2luLm5hbWUgKyAnSG9vayddOiAocGx1Z2luIGFzIGFueSkuaG9va1Byb3ZpZGVyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdXBwb3J0ZWRCbG9ja2NoYWlucyAoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBQbHVnaW5SZXBvc2l0b3J5LnN1cHBvcnRlZEJsb2NrY2hhaW5zKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYWxsIHdhbGxldHMgb2Ygc3BlY2lmaWVkIGJsb2NrY2hhaW4gdHlwZSBvciBhbGwgYmxvY2tjaGFpbiB0eXBlc1xyXG4gICAgYXN5bmMgZ2V0V2FsbGV0cyAoYmxvY2tjaGFpbj86IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBTZXJ2aWNlLmNhbGwoJ2dldFdhbGxldHMnLCB7XHJcbiAgICAgICAgICAgIGJsb2NrY2hhaW5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEN1cnJlbnRXYWxsZXQgKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBTZXJ2aWNlLmNhbGwoJ2dldEN1cnJlbnRXYWxsZXQnLCB7fSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaGFyZVNOUyAodGl0bGU6IHN0cmluZywgZGVzYzogc3RyaW5nLCB1cmw6IHN0cmluZywgaW1hZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBTZXJ2aWNlLmNhbGwoJ3NoYXJlU05TJywge1xyXG4gICAgICAgICAgICB0aXRsZSwgZGVzYywgdXJsLCBpbWFnZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2lnbiBhcmJpdHJhcnkgZGF0YSB1c2luZyBwcml2YXRlIGtleSBvZiBjdXJyZW50IHdhbGxldFxyXG4gICAgYXN5bmMgc2lnbiAoZGF0YTogc3RyaW5nLCB3aGF0Rm9yOiBzdHJpbmcgPSAnJywgaXNIYXNoOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgU2VydmljZS5jYWxsKCdzaWduJywge1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICB3aGF0Rm9yLFxyXG4gICAgICAgICAgICBpc0hhc2hcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBhc3luYyBnZXRQdWJsaWNLZXkgKGJsb2NrY2hhaW46IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBTZXJ2aWNlLmNhbGwoJ2dldFB1YmxpY0tleScsIHtcclxuICAgICAgICAgICAgYmxvY2tjaGFpblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ293KClcclxuIiwiaW1wb3J0IENvd2pzIGZyb20gJy4vY293anMtY29yZSdcclxuaW1wb3J0IENvd2pzRW9zIGZyb20gJy4vY293anMtZW9zanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3dqc1xyXG5leHBvcnQgeyBDb3dqc0VvcyB9XHJcbiIsImltcG9ydCB7IE5ldHdvcmssIFBsdWdpbiwgU2VydmljZSB9IGZyb20gJy4uL2Nvd2pzLWNvcmUnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJpbmFyeUFiaSB7XHJcbiAgICBhY2NvdW50X25hbWU6IHN0cmluZ1xyXG4gICAgYWJpOiBVaW50OEFycmF5XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmF0dXJlUHJvdmlkZXJBcmdzIHtcclxuICAgIC8qKiBDaGFpbiB0cmFuc2FjdGlvbiBpcyBmb3IgKi9cclxuICAgIGNoYWluSWQ6IHN0cmluZ1xyXG5cclxuICAgIC8qKiBQdWJsaWMga2V5cyBhc3NvY2lhdGVkIHdpdGggdGhlIHByaXZhdGUga2V5cyBuZWVkZWQgdG8gc2lnbiB0aGUgdHJhbnNhY3Rpb24gKi9cclxuICAgIHJlcXVpcmVkS2V5czogc3RyaW5nW11cclxuXHJcbiAgICAvKiogVHJhbnNhY3Rpb24gdG8gc2lnbiAqL1xyXG4gICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uOiBVaW50OEFycmF5XHJcblxyXG4gICAgLyoqIEFCSXMgZm9yIGFsbCBjb250cmFjdHMgd2l0aCBhY3Rpb25zIGluY2x1ZGVkIGluIGBzZXJpYWxpemVkVHJhbnNhY3Rpb25gICovXHJcbiAgICBhYmlzOiBCaW5hcnlBYmlbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hdHVyZVByb3ZpZGVyIHtcclxuICAgIC8qKiBQdWJsaWMga2V5cyBhc3NvY2lhdGVkIHdpdGggdGhlIHByaXZhdGUga2V5cyB0aGF0IHRoZSBgU2lnbmF0dXJlUHJvdmlkZXJgIGhvbGRzICovXHJcbiAgICBnZXRBdmFpbGFibGVLZXlzOiAoKSA9PiBQcm9taXNlPHN0cmluZ1tdPlxyXG5cclxuICAgIC8qKiBTaWduIGEgdHJhbnNhY3Rpb24gKi9cclxuICAgIHNpZ246IChhcmdzOiBTaWduYXR1cmVQcm92aWRlckFyZ3MpID0+IFByb21pc2U8c3RyaW5nW10+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvd0VPUyBleHRlbmRzIFBsdWdpbiB7XHJcbiAgICBzdGF0aWMgYmxvY2tjaGFpbjogc3RyaW5nID0gJ2VvcydcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoQ293RU9TLmJsb2NrY2hhaW4pXHJcbiAgICB9XHJcblxyXG4gICAgaG9va1Byb3ZpZGVyIChuZXR3b3JrOiBOZXR3b3JrLCBmaWVsZHNGZXRjaGVyPzogKCkgPT4gb2JqZWN0KTogU2lnbmF0dXJlUHJvdmlkZXIge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdldEF2YWlsYWJsZUtleXM6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBhd2FpdCBTZXJ2aWNlLmNhbGwoJ2dldEF2YWlsYWJsZUtleXMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogQ293RU9TLmJsb2NrY2hhaW5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5cyBhcyBzdHJpbmdbXVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2lnbjogYXN5bmMgKHNpZ25hdHVyZVByb3ZpZGVyQXJnczogU2lnbmF0dXJlUHJvdmlkZXJBcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IGZpZWxkc0ZldGNoZXIgPyBmaWVsZHNGZXRjaGVyKCkgOiB7fVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogQ293RU9TLmJsb2NrY2hhaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yayxcclxuICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmVQcm92aWRlckFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRGaWVsZHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZ2F0dXJlcyA9IGF3YWl0IFNlcnZpY2UuY2FsbCgnc2lnblRyYW5zYWN0aW9uJywgYXJncylcclxuICAgICAgICAgICAgICAgIHJldHVybiBzaWdhdHVyZXMgYXMgc3RyaW5nW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaWduYXR1cmVQcm92aWRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChuZXR3b3JrOiBOZXR3b3JrLCBlb3NqczogYW55LCBvcHRpb25zOiBvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFuZXR3b3JrLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG5ldHdvcmsnKSAvLyBUT0RPXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCByZXF1aXJlZEZpZWxkcyA9IHt9XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc0ZldGNoZXIgPSAoKSA9PiByZXF1aXJlZEZpZWxkc1xyXG4gICAgICAgICAgICBjb25zdCBzaWduYXR1cmVQcm92aWRlciA9IHRoaXMuaG9va1Byb3ZpZGVyKG5ldHdvcmssIGZpZWxkc0ZldGNoZXIpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3h5KG5ldyBlb3NqcyhPYmplY3QuYXNzaWduKG9wdGlvbnMsIHsgc2lnbmF0dXJlUHJvdmlkZXIgfSkpLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQgKGVvc2pzSW5zdGFuY2UsIG1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcnFmID0gYXJncy5maW5kKGFyZyA9PiBhcmcuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkRmllbGRzJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkRmllbGRzID0gcnFmID8gcnFmLnJlcXVpcmVkRmllbGRzIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVvc2pzSW5zdGFuY2VbbWV0aG9kXSguLi5hcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==