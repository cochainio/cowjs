!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([
/*!*********************************************!*\
  !*** ./src/cowjs-core/index.ts + 5 modules ***!
  \*********************************************/
/*! exports provided: Network, Plugin, Service, default */
/*! all exports used */function(t,n,e){"use strict";e.r(n);var r,o=function(){function t(){this.port=0}return t.placeholder=function(){return new t},t.fromJSON=function(n){return Object.assign(t.placeholder(),n)},t.prototype.url=function(){return this.protocol+"://"+this.host+(this.port>0?":"+this.port:"")},t.prototype.clone=function(){return t.fromJSON(JSON.parse(JSON.stringify(this)))},t.prototype.isValid=function(){return this.protocol.length&&this.host.length&&this.port||this.chainID.length},t}(),i=function(){function t(t){void 0===t&&(t=""),this.name=t}return t.placeholder=function(){return new t},t.fromJson=function(n){return Object.assign(t.placeholder(),n)},t}(),u=new(function(){function t(){}return t.prototype.loadPlugin=function(t){this.plugin(t.name)||this.plugins.push(t)},t.prototype.plugin=function(t){return this.plugins.find(function(n){return n.name===t})},t.prototype.supportedBlockchains=function(){return this.plugins.map(function(t){return t.name})},t}()),c=(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),a=function(t){function n(e,r){var o=t.call(this,r)||this;return o.code=e,o.message=r,o.name="CowError",Error.captureStackTrace&&Error.captureStackTrace(o,n),o}return c(n,t),n}(Error),l=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,c)}a((r=r.apply(t,n||[])).next())})},s=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},f=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},p=function(){function t(){}return t.callback=function(t,n,e){if(this.callAwaits.has(n)){var r=f(this.callAwaits.get(n),2),o=r[0],i=r[1];this.callAwaits.delete(n);var u=JSON.parse(e);u.code?i(new a(u.code,u.msg)):o(u)}else console.warn("call id "+n+" not found")},t.call=function(n,e,r){return void 0===r&&(r=12e4),l(this,void 0,void 0,function(){var o=this;return s(this,function(i){return window.cochain.callback||(window.cochain.callback=t.callback),[2,new Promise(function(t,i){var u=window.cochain.exec(JSON.stringify({method:n,args:e}));o.callAwaits.has(u)&&i(new a(1,"inconsistent remote exec")),setTimeout(function(){o.callAwaits.has(u)&&(i(new a(1,"timeout")),o.callAwaits.delete(u))},r),o.callAwaits.set(u,[t,i])})]})})},t.callAwaits=new Map,t}();e.d(n,"Network",function(){return o}),e.d(n,"Plugin",function(){return i}),e.d(n,"Service",function(){return p});var h=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,c)}a((r=r.apply(t,n||[])).next())})},d=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},y=function(){function t(){}return t.prototype.loadPlugin=function(t){var n;u.loadPlugin(t),Object.assign(this,((n={})[t.name]=t.signatureProvider(),n[t.name+"Hook"]=t.hookProvider,n))},t.prototype.supportedBlockchains=function(){return u.supportedBlockchains()},t.prototype.getWallets=function(t){return h(this,void 0,void 0,function(){return d(this,function(n){switch(n.label){case 0:return[4,p.call("getWallets",{blockchain:t})];case 1:return[2,n.sent()]}})})},t.prototype.getCurrentWallet=function(){return h(this,void 0,void 0,function(){return d(this,function(t){switch(t.label){case 0:return[4,p.call("getCurrentWallet",{})];case 1:return[2,t.sent()]}})})},t.prototype.shareSNS=function(t,n,e,r){return h(this,void 0,void 0,function(){return d(this,function(o){switch(o.label){case 0:return[4,p.call("shareSNS",{title:t,desc:n,url:e,image:r})];case 1:return[2,o.sent()]}})})},t.prototype.sign=function(t,n,e){return void 0===n&&(n=""),void 0===e&&(e=!1),h(this,void 0,void 0,function(){return d(this,function(r){switch(r.label){case 0:return[4,p.call("sign",{data:t,whatFor:n,isHash:e})];case 1:return[2,r.sent()]}})})},t}();n.default=new y},
/*!**********************************!*\
  !*** ./src/cowjs-eosjs/index.ts ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */,
/*!**********************************!*\
  !*** ./src/cowjs-eosjs/index.ts ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */function(t,n,e){"use strict";e.r(n);var r,o=e(/*! ../cowjs-core */0),i=(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),u=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,c)}a((r=r.apply(t,n||[])).next())})},c=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},l=function(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(a(arguments[n]));return t},s=function(t){function n(){return t.call(this,n.blockchain)||this}return i(n,t),n.prototype.hookProvider=function(t,e){var r=this;return{getAvailableKeys:function(){return u(r,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,o.Service.call("getAvailableKeys",{blockchain:n.blockchain})];case 1:return[2,t.sent()]}})})},sign:function(i){return u(r,void 0,void 0,function(){var r,u;return c(this,function(c){switch(c.label){case 0:return r=e?e():{},u={blockchain:n.blockchain,network:t,signatureProviderArgs:i,requiredFields:r},[4,o.Service.call("signTransaction",u)];case 1:return[2,c.sent()]}})})}}},n.prototype.signatureProvider=function(){var t=this;return function(n,e,r){if(!n.isValid())throw new Error("invalid network");var o={},i=t.hookProvider(n,function(){return o});return new Proxy(new e(Object.assign(r,{signatureProvider:i})),{get:function(t,n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var i=e.find(function(t){return t.hasOwnProperty("requiredFields")});return o=i?i.requiredFields:{},t[n].apply(t,l(e))}}})}},n.blockchain="eos",n}(o.Plugin);n.default=s}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY293anMtY29yZS9uZXR3b3JrLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3dqcy1jb3JlL3BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY293anMtY29yZS9wbHVnaW4tcmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY293anMtY29yZS9lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY293anMtY29yZS9zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3dqcy1jb3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3dqcy1lb3Nqcy9pbmRleC50cyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJhIiwiaSIsIndpbmRvdyIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIk5ldHdvcmsiLCJ0aGlzIiwicG9ydCIsInBsYWNlaG9sZGVyIiwiZnJvbUpTT04iLCJqc29uIiwiYXNzaWduIiwidXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJpc1ZhbGlkIiwibGVuZ3RoIiwiY2hhaW5JRCIsIlBsdWdpbiIsImZyb21Kc29uIiwicGx1Z2luX3JlcG9zaXRvcnkiLCJQbHVnaW5SZXBvc2l0b3J5U2luZ2xldG9uIiwibG9hZFBsdWdpbiIsInBsdWdpbiIsInBsdWdpbnMiLCJwdXNoIiwiZmluZCIsInN1cHBvcnRlZEJsb2NrY2hhaW5zIiwibWFwIiwiX3N1cGVyIiwiQ293RXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsIl90aGlzIiwiRXJyb3IiLCJjYXB0dXJlU3RhY2tUcmFjZSIsIl9fZXh0ZW5kcyIsInNlcnZpY2UiLCJTZXJ2aWNlIiwiY2FsbGJhY2siLCJtZXRob2QiLCJtZXRob2RJRCIsInJlc3BvbnNlIiwiY2FsbEF3YWl0cyIsImhhcyIsIl9hIiwiX19yZWFkIiwicmVzb2x2ZSIsInJlamVjdCIsImRlbGV0ZSIsInJlcCIsImVycm9yIiwibXNnIiwiY29uc29sZSIsIndhcm4iLCJhcmdzIiwidGltZW91dCIsImNvY2hhaW4iLCJQcm9taXNlIiwiZXhlYyIsInNldFRpbWVvdXQiLCJzZXQiLCJNYXAiLCJjb3dqc19jb3JlX0NvdyIsIkNvdyIsInNpZ25hdHVyZVByb3ZpZGVyIiwiaG9va1Byb3ZpZGVyIiwiZ2V0V2FsbGV0cyIsImJsb2NrY2hhaW4iLCJzZW50IiwiZ2V0Q3VycmVudFdhbGxldCIsInNoYXJlU05TIiwidGl0bGUiLCJkZXNjIiwiaW1hZ2UiLCJzaWduIiwiZGF0YSIsIndoYXRGb3IiLCJpc0hhc2giLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwiQ293RU9TIiwibmV0d29yayIsImZpZWxkc0ZldGNoZXIiLCJnZXRBdmFpbGFibGVLZXlzIiwiX19hd2FpdGVyIiwiX2Nvd2pzX2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsInNpZ25hdHVyZVByb3ZpZGVyQXJncyIsInJlcXVpcmVkRmllbGRzIiwiZW9zanMiLCJvcHRpb25zIiwiUHJveHkiLCJlb3Nqc0luc3RhbmNlIiwiX2kiLCJhcmd1bWVudHMiLCJycWYiLCJhcmciLCJh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OUJXLEVBQUFuRixVQUFBb0Usa0JBQUEsZUFBQWhDLEVBQUEvQixLQUNJLE9BQU8sU0FBQytFLEVBQWtCTyxFQUFZQyxHQUNsQyxJQUFLUixFQUFRbEUsVUFDVCxNQUFNLElBQUltQixNQUFNLG1CQUdwQixJQUFJcUQsRUFBaUIsR0FFZnRCLEVBQW9CaEMsRUFBS2lDLGFBQWFlLEVBRHRCLFdBQU0sT0FBQU0sSUFHNUIsT0FBTyxJQUFJRyxNQUFNLElBQUlGLEVBQU03RyxPQUFPNEIsT0FBT2tGLEVBQVMsQ0FBRXhCLGtCQUFpQkEsS0FBTSxDQUN2RW5GLElBQUcsU0FBRTZHLEVBQWVuRCxHQUNoQixPQUFPLGVBQUMsSUFBQWUsRUFBQSxHQUFBcUMsRUFBQSxFQUFBQSxFQUFBQyxVQUFBN0UsT0FBQTRFLElBQUFyQyxFQUFBcUMsR0FBQUMsVUFBQUQsR0FDSixJQUFNRSxFQUFNdkMsRUFBSzdCLEtBQUssU0FBQXFFLEdBQU8sT0FBQUEsRUFBSWpHLGVBQWUsb0JBRWhELE9BREF5RixFQUFpQk8sRUFBTUEsRUFBSVAsZUFBaUIsR0FDckNJLEVBQWNuRCxHQUFPd0QsTUFBckJMLEVBQWFNLEVBQVkxQyxVQTdDN0N5QixFQUFBWixXQUFxQixNQW1EaENZLEVBcERBLENBQW9DSyxFQUFBLFFBQWZOLEVBQUEiLCJmaWxlIjoiY293anMtZW9zanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcclxuICAgIHN0YXRpYyBwbGFjZWhvbGRlciAoKSB7IHJldHVybiBuZXcgTmV0d29yaygpIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUpTT04gKGpzb246IG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE5ldHdvcmsucGxhY2Vob2xkZXIoKSwganNvbilcclxuICAgIH1cclxuXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHByb3RvY29sOiBzdHJpbmdcclxuICAgIGhvc3Q6IHN0cmluZ1xyXG4gICAgcG9ydDogbnVtYmVyID0gMFxyXG4gICAgYmxvY2tjaGFpbjogc3RyaW5nXHJcbiAgICBjaGFpbklEOiBzdHJpbmdcclxuXHJcbiAgICB1cmwgKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByb3RvY29sfTovLyR7dGhpcy5ob3N0fWAgKyAodGhpcy5wb3J0ID4gMCA/IGA6JHt0aGlzLnBvcnR9YCA6ICcnKVxyXG4gICAgfVxyXG5cclxuICAgIGNsb25lICgpIHtcclxuICAgICAgICByZXR1cm4gTmV0d29yay5mcm9tSlNPTihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKSlcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMucHJvdG9jb2wubGVuZ3RoICYmIHRoaXMuaG9zdC5sZW5ndGggJiYgdGhpcy5wb3J0KSB8fCB0aGlzLmNoYWluSUQubGVuZ3RoXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luIHtcclxuICAgIHN0YXRpYyBwbGFjZWhvbGRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbHVnaW4oKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tSnNvbiAoanNvbjogb2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oUGx1Z2luLnBsYWNlaG9sZGVyKCksIGpzb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBuYW1lID0gJycpIHt9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbiBmcm9tICcuL3BsdWdpbidcclxuXHJcbmV4cG9ydCBjbGFzcyBQbHVnaW5SZXBvc2l0b3J5U2luZ2xldG9uIHtcclxuICAgIHBsdWdpbnM6IFBsdWdpbltdXHJcblxyXG4gICAgbG9hZFBsdWdpbiAocGx1Z2luOiBQbHVnaW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMucGx1Z2luKHBsdWdpbi5uYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChwbHVnaW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsdWdpbiAobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2lucy5maW5kKHBsdWdpbiA9PiBwbHVnaW4ubmFtZSA9PT0gbmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBzdXBwb3J0ZWRCbG9ja2NoYWlucyAoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnMubWFwKHBsdWdpbiA9PiBwbHVnaW4ubmFtZSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUGx1Z2luUmVwb3NpdG9yeSA9IG5ldyBQbHVnaW5SZXBvc2l0b3J5U2luZ2xldG9uKClcclxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luUmVwb3NpdG9yeVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3dFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIG5hbWUgPSAnQ293RXJyb3InXHJcblxyXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBjb2RlOiBudW1iZXIsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKVxyXG5cclxuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcclxuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQ293RXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb3dFcnJvciBmcm9tICcuL2Vycm9yJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZSB7XHJcbiAgICBzdGF0aWMgY2FsbGJhY2sgKG1ldGhvZDogc3RyaW5nLCBtZXRob2RJRDogbnVtYmVyLCByZXNwb25zZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbGxBd2FpdHMuaGFzKG1ldGhvZElEKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYGNhbGwgaWQgJHttZXRob2RJRH0gbm90IGZvdW5kYClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFsgcmVzb2x2ZSwgcmVqZWN0IF0gPSB0aGlzLmNhbGxBd2FpdHMuZ2V0KG1ldGhvZElEKVxyXG4gICAgICAgIHRoaXMuY2FsbEF3YWl0cy5kZWxldGUobWV0aG9kSUQpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcCA9IEpTT04ucGFyc2UocmVzcG9uc2UpXHJcbiAgICAgICAgaWYgKHJlcC5jb2RlKSB7IC8vIGZhaWxlZFxyXG4gICAgICAgICAgICByZWplY3QobmV3IENvd0Vycm9yKHJlcC5jb2RlLCByZXAubXNnKSlcclxuICAgICAgICB9IGVsc2UgeyAvLyBzdWNjZWVkZWRcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBjYWxsIChtZXRob2Q6IHN0cmluZywgYXJnczogb2JqZWN0LCB0aW1lb3V0OiBudW1iZXIgPSAxMjAwMDApIHsgLy8gZGVmYXVsdCB0aW1lb3V0IGlzIDEyMHNcclxuICAgICAgICAvLyBMYXppbHkgc2V0IGNhbGxiYWNrXHJcbiAgICAgICAgaWYgKCEod2luZG93IGFzIGFueSkuY29jaGFpbi5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkuY29jaGFpbi5jYWxsYmFjayA9IFNlcnZpY2UuY2FsbGJhY2tcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZElEID0gKHdpbmRvdyBhcyBhbnkpLmNvY2hhaW4uZXhlYyhKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbEF3YWl0cy5oYXMobWV0aG9kSUQpKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IENvd0Vycm9yKDEsICdpbmNvbnNpc3RlbnQgcmVtb3RlIGV4ZWMnKSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsQXdhaXRzLmhhcyhtZXRob2RJRCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IENvd0Vycm9yKDEsICd0aW1lb3V0JykpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQXdhaXRzLmRlbGV0ZShtZXRob2RJRClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGltZW91dClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEF3YWl0cy5zZXQobWV0aG9kSUQsIFtyZXNvbHZlLCByZWplY3RdKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FsbEF3YWl0cyA9IG5ldyBNYXA8bnVtYmVyLCBbYW55LCBhbnldPigpXHJcbn1cclxuIiwiaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi9uZXR3b3JrJ1xyXG5pbXBvcnQgUGx1Z2luIGZyb20gJy4vcGx1Z2luJ1xyXG5pbXBvcnQgUGx1Z2luUmVwb3NpdG9yeSBmcm9tICcuL3BsdWdpbi1yZXBvc2l0b3J5J1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnXHJcblxyXG5leHBvcnQgeyBOZXR3b3JrLCBQbHVnaW4sIFNlcnZpY2UgfVxyXG5cclxuY2xhc3MgQ293IHtcclxuICAgIGxvYWRQbHVnaW4gKHBsdWdpbjogUGx1Z2luKSB7XHJcbiAgICAgICAgUGx1Z2luUmVwb3NpdG9yeS5sb2FkUGx1Z2luKHBsdWdpbilcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XHJcbiAgICAgICAgICAgIFtwbHVnaW4ubmFtZV06IChwbHVnaW4gYXMgYW55KS5zaWduYXR1cmVQcm92aWRlcigpLFxyXG4gICAgICAgICAgICBbcGx1Z2luLm5hbWUgKyAnSG9vayddOiAocGx1Z2luIGFzIGFueSkuaG9va1Byb3ZpZGVyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdXBwb3J0ZWRCbG9ja2NoYWlucyAoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBQbHVnaW5SZXBvc2l0b3J5LnN1cHBvcnRlZEJsb2NrY2hhaW5zKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYWxsIHdhbGxldHMgb2Ygc3BlY2lmaWVkIGJsb2NrY2hhaW4gdHlwZSBvciBhbGwgYmxvY2tjaGFpbiB0eXBlc1xyXG4gICAgYXN5bmMgZ2V0V2FsbGV0cyAoYmxvY2tjaGFpbj86IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBTZXJ2aWNlLmNhbGwoJ2dldFdhbGxldHMnLCB7XHJcbiAgICAgICAgICAgIGJsb2NrY2hhaW5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEN1cnJlbnRXYWxsZXQgKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBTZXJ2aWNlLmNhbGwoJ2dldEN1cnJlbnRXYWxsZXQnLCB7fSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaGFyZVNOUyAodGl0bGU6IHN0cmluZywgZGVzYzogc3RyaW5nLCB1cmw6IHN0cmluZywgaW1hZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBTZXJ2aWNlLmNhbGwoJ3NoYXJlU05TJywge1xyXG4gICAgICAgICAgICB0aXRsZSwgZGVzYywgdXJsLCBpbWFnZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2lnbiBhcmJpdHJhcnkgZGF0YSB1c2luZyBwcml2YXRlIGtleSBvZiBjdXJyZW50IHdhbGxldFxyXG4gICAgYXN5bmMgc2lnbiAoZGF0YTogc3RyaW5nLCB3aGF0Rm9yOiBzdHJpbmcgPSAnJywgaXNIYXNoOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgU2VydmljZS5jYWxsKCdzaWduJywge1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICB3aGF0Rm9yLFxyXG4gICAgICAgICAgICBpc0hhc2hcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBhc3luYyBnZXRQdWJsaWNLZXkgKGJsb2NrY2hhaW46IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBTZXJ2aWNlLmNhbGwoJ2dldFB1YmxpY0tleScsIHtcclxuICAgICAgICAgICAgYmxvY2tjaGFpblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ293KClcclxuIiwiaW1wb3J0IHsgTmV0d29yaywgUGx1Z2luLCBTZXJ2aWNlIH0gZnJvbSAnLi4vY293anMtY29yZSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmluYXJ5QWJpIHtcclxuICAgIGFjY291bnRfbmFtZTogc3RyaW5nXHJcbiAgICBhYmk6IFVpbnQ4QXJyYXlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduYXR1cmVQcm92aWRlckFyZ3Mge1xyXG4gICAgLyoqIENoYWluIHRyYW5zYWN0aW9uIGlzIGZvciAqL1xyXG4gICAgY2hhaW5JZDogc3RyaW5nXHJcblxyXG4gICAgLyoqIFB1YmxpYyBrZXlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpdmF0ZSBrZXlzIG5lZWRlZCB0byBzaWduIHRoZSB0cmFuc2FjdGlvbiAqL1xyXG4gICAgcmVxdWlyZWRLZXlzOiBzdHJpbmdbXVxyXG5cclxuICAgIC8qKiBUcmFuc2FjdGlvbiB0byBzaWduICovXHJcbiAgICBzZXJpYWxpemVkVHJhbnNhY3Rpb246IFVpbnQ4QXJyYXlcclxuXHJcbiAgICAvKiogQUJJcyBmb3IgYWxsIGNvbnRyYWN0cyB3aXRoIGFjdGlvbnMgaW5jbHVkZWQgaW4gYHNlcmlhbGl6ZWRUcmFuc2FjdGlvbmAgKi9cclxuICAgIGFiaXM6IEJpbmFyeUFiaVtdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmF0dXJlUHJvdmlkZXIge1xyXG4gICAgLyoqIFB1YmxpYyBrZXlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpdmF0ZSBrZXlzIHRoYXQgdGhlIGBTaWduYXR1cmVQcm92aWRlcmAgaG9sZHMgKi9cclxuICAgIGdldEF2YWlsYWJsZUtleXM6ICgpID0+IFByb21pc2U8c3RyaW5nW10+XHJcblxyXG4gICAgLyoqIFNpZ24gYSB0cmFuc2FjdGlvbiAqL1xyXG4gICAgc2lnbjogKGFyZ3M6IFNpZ25hdHVyZVByb3ZpZGVyQXJncykgPT4gUHJvbWlzZTxzdHJpbmdbXT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ293RU9TIGV4dGVuZHMgUGx1Z2luIHtcclxuICAgIHN0YXRpYyBibG9ja2NoYWluOiBzdHJpbmcgPSAnZW9zJ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcihDb3dFT1MuYmxvY2tjaGFpbilcclxuICAgIH1cclxuXHJcbiAgICBob29rUHJvdmlkZXIgKG5ldHdvcms6IE5ldHdvcmssIGZpZWxkc0ZldGNoZXI/OiAoKSA9PiBvYmplY3QpOiBTaWduYXR1cmVQcm92aWRlciB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0QXZhaWxhYmxlS2V5czogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IFNlcnZpY2UuY2FsbCgnZ2V0QXZhaWxhYmxlS2V5cycsIHtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja2NoYWluOiBDb3dFT1MuYmxvY2tjaGFpblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXlzIGFzIHN0cmluZ1tdXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzaWduOiBhc3luYyAoc2lnbmF0dXJlUHJvdmlkZXJBcmdzOiBTaWduYXR1cmVQcm92aWRlckFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gZmllbGRzRmV0Y2hlciA/IGZpZWxkc0ZldGNoZXIoKSA6IHt9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja2NoYWluOiBDb3dFT1MuYmxvY2tjaGFpbixcclxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZVByb3ZpZGVyQXJncyxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lnYXR1cmVzID0gYXdhaXQgU2VydmljZS5jYWxsKCdzaWduVHJhbnNhY3Rpb24nLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ2F0dXJlcyBhcyBzdHJpbmdbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNpZ25hdHVyZVByb3ZpZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKG5ldHdvcms6IE5ldHdvcmssIGVvc2pzOiBhbnksIG9wdGlvbnM6IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5ldHdvcmsuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgbmV0d29yaycpIC8vIFRPRE9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlcXVpcmVkRmllbGRzID0ge31cclxuICAgICAgICAgICAgY29uc3QgZmllbGRzRmV0Y2hlciA9ICgpID0+IHJlcXVpcmVkRmllbGRzXHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZVByb3ZpZGVyID0gdGhpcy5ob29rUHJvdmlkZXIobmV0d29yaywgZmllbGRzRmV0Y2hlcilcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJveHkobmV3IGVvc2pzKE9iamVjdC5hc3NpZ24ob3B0aW9ucywgeyBzaWduYXR1cmVQcm92aWRlciB9KSksIHtcclxuICAgICAgICAgICAgICAgIGdldCAoZW9zanNJbnN0YW5jZSwgbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBycWYgPSBhcmdzLmZpbmQoYXJnID0+IGFyZy5oYXNPd25Qcm9wZXJ0eSgncmVxdWlyZWRGaWVsZHMnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRGaWVsZHMgPSBycWYgPyBycWYucmVxdWlyZWRGaWVsZHMgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW9zanNJbnN0YW5jZVttZXRob2RdKC4uLmFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9