!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e=r();for(var n in e)("object"==typeof exports?exports:t)[n]=e[n]}}(window,function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=77)}({12:
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r,e){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var n=e(/*! base64-js */63),o=e(/*! ieee754 */64),i=e(/*! isarray */57);function u(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,r){if(u()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=f.prototype:(null===t&&(t=new f(r)),t.length=r),t}function f(t,r,e){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return s(this,t,r,e)}function s(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);f.TYPED_ARRAY_SUPPORT?(t=r).__proto__=f.prototype:t=l(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!f.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|y(r,e),o=(t=a(t,n)).write(r,e);o!==n&&(t=t.slice(0,o));return t}(t,r,e):function(t,r){if(f.isBuffer(r)){var e=0|p(r.length);return 0===(t=a(t,e)).length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?a(t,0):l(t,r);if("Buffer"===r.type&&i(r.data))return l(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,r){if(c(r),t=a(t,r<0?0:0|p(r)),!f.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r){var e=r.length<0?0:0|p(r.length);t=a(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function y(t,r){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return z(t).length;default:if(n)return N(t).length;r=(""+r).toLowerCase(),n=!0}}function g(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function d(t,r,e,n,o){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof r&&(r=f.from(r,n)),f.isBuffer(r))return 0===r.length?-1:w(t,r,e,n,o);if("number"==typeof r)return r&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):w(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function w(t,r,e,n,o){var i,u=1,a=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,a/=2,f/=2,e/=2}function s(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(o){var c=-1;for(i=e;i<a;i++)if(s(t,i)===s(r,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===f)return c*u}else-1!==c&&(i-=i-c),c=-1}else for(e+f>a&&(e=a-f),i=e;i>=0;i--){for(var h=!0,l=0;l<f;l++)if(s(t,i+l)!==s(r,l)){h=!1;break}if(h)return i}return-1}function v(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var a=parseInt(r.substr(2*u,2),16);if(isNaN(a))return u;t[e+u]=a}return u}function b(t,r,e,n){return F(N(r,t.length-e),t,e,n)}function m(t,r,e,n){return F(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function A(t,r,e,n){return m(t,r,e,n)}function E(t,r,e,n){return F(z(r),t,e,n)}function _(t,r,e,n){return F(function(t,r){for(var e,n,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)e=t.charCodeAt(u),n=e>>8,o=e%256,i.push(o),i.push(n);return i}(r,t.length-e),t,e,n)}function P(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function S(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,u,a,f,s=t[o],c=null,h=s>239?4:s>223?3:s>191?2:1;if(o+h<=e)switch(h){case 1:s<128&&(c=s);break;case 2:128==(192&(i=t[o+1]))&&(f=(31&s)<<6|63&i)>127&&(c=f);break;case 3:i=t[o+1],u=t[o+2],128==(192&i)&&128==(192&u)&&(f=(15&s)<<12|(63&i)<<6|63&u)>2047&&(f<55296||f>57343)&&(c=f);break;case 4:i=t[o+1],u=t[o+2],a=t[o+3],128==(192&i)&&128==(192&u)&&128==(192&a)&&(f=(15&s)<<18|(63&i)<<12|(63&u)<<6|63&a)>65535&&f<1114112&&(c=f)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return function(t){var r=t.length;if(r<=R)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=R));return e}(n)}r.Buffer=f,r.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},r.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=u(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,r,e){return s(null,t,r,e)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,r,e){return function(t,r,e,n){return c(r),r<=0?a(t,r):void 0!==e?"string"==typeof n?a(t,r).fill(e,n):a(t,r).fill(e):a(t,r)}(null,t,r,e)},f.allocUnsafe=function(t){return h(null,t)},f.allocUnsafeSlow=function(t){return h(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,r){if(!f.isBuffer(t)||!f.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,r){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=f.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var u=t[e];if(!f.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,o),o+=u.length}return n},f.byteLength=y,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)g(this,r,r+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)g(this,r,r+3),g(this,r+1,r+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)g(this,r,r+7),g(this,r+1,r+6),g(this,r+2,r+5),g(this,r+3,r+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?S(this,0,t):function(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,r,e);case"utf8":case"utf-8":return S(this,r,e);case"ascii":return T(this,r,e);case"latin1":case"binary":return B(this,r,e);case"base64":return P(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,r,e,n,o){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),a=Math.min(i,u),s=this.slice(n,o),c=t.slice(r,e),h=0;h<a;++h)if(s[h]!==c[h]){i=s[h],u=c[h];break}return i<u?-1:u<i?1:0},f.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},f.prototype.indexOf=function(t,r,e){return d(this,t,r,e,!0)},f.prototype.lastIndexOf=function(t,r,e){return d(this,t,r,e,!1)},f.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return v(this,t,r,e);case"utf8":case"utf-8":return b(this,t,r,e);case"ascii":return m(this,t,r,e);case"latin1":case"binary":return A(this,t,r,e);case"base64":return E(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;function T(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function B(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function O(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=D(t[i]);return o}function U(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function x(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function k(t,r,e,n,o,i){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function Y(t,r,e,n){r<0&&(r=65535+r+1);for(var o=0,i=Math.min(t.length-e,2);o<i;++o)t[e+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function I(t,r,e,n){r<0&&(r=4294967295+r+1);for(var o=0,i=Math.min(t.length-e,4);o<i;++o)t[e+o]=r>>>8*(n?o:3-o)&255}function M(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function C(t,r,e,n,i){return i||M(t,0,e,4),o.write(t,r,e,n,23,4),e+4}function L(t,r,e,n,i){return i||M(t,0,e,8),o.write(t,r,e,n,52,8),e+8}f.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),f.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=f.prototype;else{var o=r-t;e=new f(o,void 0);for(var i=0;i<o;++i)e[i]=this[i+t]}return e},f.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||x(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},f.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||x(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},f.prototype.readUInt8=function(t,r){return r||x(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,r){return r||x(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,r){return r||x(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,r){return r||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,r){return r||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||x(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*r)),n},f.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||x(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},f.prototype.readInt8=function(t,r){return r||x(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,r){r||x(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt16BE=function(t,r){r||x(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt32LE=function(t,r){return r||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,r){return r||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,r){return r||x(t,4,this.length),o.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,r){return r||x(t,4,this.length),o.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,r){return r||x(t,8,this.length),o.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,r){return r||x(t,8,this.length),o.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||k(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},f.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||k(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},f.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},f.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Y(this,t,r,!0),r+2},f.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Y(this,t,r,!1),r+2},f.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):I(this,t,r,!0),r+4},f.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):I(this,t,r,!1),r+4},f.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);k(this,t,r,e,o-1,-o)}var i=0,u=1,a=0;for(this[r]=255&t;++i<e&&(u*=256);)t<0&&0===a&&0!==this[r+i-1]&&(a=1),this[r+i]=(t/u>>0)-a&255;return r+e},f.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);k(this,t,r,e,o-1,-o)}var i=e-1,u=1,a=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===a&&0!==this[r+i+1]&&(a=1),this[r+i]=(t/u>>0)-a&255;return r+e},f.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},f.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Y(this,t,r,!0),r+2},f.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Y(this,t,r,!1),r+2},f.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):I(this,t,r,!0),r+4},f.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):I(this,t,r,!1),r+4},f.prototype.writeFloatLE=function(t,r,e){return C(this,t,r,!0,e)},f.prototype.writeFloatBE=function(t,r,e){return C(this,t,r,!1,e)},f.prototype.writeDoubleLE=function(t,r,e){return L(this,t,r,!0,e)},f.prototype.writeDoubleBE=function(t,r,e){return L(this,t,r,!1,e)},f.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,i=n-e;if(this===t&&e<r&&r<n)for(o=i-1;o>=0;--o)t[o+r]=this[o+e];else if(i<1e3||!f.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+i),r);return i},f.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var i;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=r;i<e;++i)this[i]=t;else{var u=f.isBuffer(t)?t:N(new f(t,n).toString()),a=u.length;for(i=0;i<e-r;++i)this[i+r]=u[i%a]}return this};var j=/[^+\/0-9A-Za-z-_]/g;function D(t){return t<16?"0"+t.toString(16):t.toString(16)}function N(t,r){var e;r=r||1/0;for(var n=t.length,o=null,i=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function z(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(j,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}}).call(this,e(/*! ./../webpack/buildin/global.js */14))},14:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},15:
/*!*********************************************!*\
  !*** ./src/cowjs-core/index.ts + 5 modules ***!
  \*********************************************/
/*! exports provided: Network, Plugin, Service, default */
/*! all exports used */function(t,r,e){"use strict";e.r(r);var n,o=function(){function t(){this.port=0}return t.placeholder=function(){return new t},t.fromJSON=function(r){return Object.assign(t.placeholder(),r)},t.prototype.url=function(){return this.protocol+"://"+this.host+(this.port>0?":"+this.port:"")},t.prototype.clone=function(){return t.fromJSON(JSON.parse(JSON.stringify(this)))},t.prototype.isValid=function(){return this.protocol.length&&this.host.length&&this.port||this.chainID.length},t}(),i=function(){function t(t){void 0===t&&(t=""),this.name=t}return t.placeholder=function(){return new t},t.fromJson=function(r){return Object.assign(t.placeholder(),r)},t}(),u=new(function(){function t(){this.plugins=[]}return t.prototype.loadPlugin=function(t){this.plugin(t.name)||this.plugins.push(t)},t.prototype.plugin=function(t){return this.plugins.find(function(r){return r.name===t})},t.prototype.supportedBlockchains=function(){return this.plugins.map(function(t){return t.name})},t}()),a=(n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)},function(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}),f=function(t){function r(e,n){var o=t.call(this,n)||this;return o.code=e,o.message=n,o.name="CowError",Error.captureStackTrace&&Error.captureStackTrace(o,r),o}return a(r,t),r.prototype.toString=function(){return this.name+": < code: "+this.code+", message: "+this.message+" >"},r}(Error),s=function(){return(s=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},c=function(t,r,e,n){return new(e||(e=Promise))(function(o,i){function u(t){try{f(n.next(t))}catch(t){i(t)}}function a(t){try{f(n.throw(t))}catch(t){i(t)}}function f(t){t.done?o(t.value):new e(function(r){r(t.value)}).then(u,a)}f((n=n.apply(t,r||[])).next())})},h=function(t,r){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(t,u)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},l=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},p=function(){function t(){}return t.callback=function(r,e,n){if(console.log(r,e,JSON.parse(n)),t.callAwaits.has(e)){var o=l(t.callAwaits.get(e),2),i=o[0],u=o[1];t.callAwaits.delete(e);var a=JSON.parse(n);a.code?u(new f(a.code,a.msg)):i(a)}else console.warn("call id "+e+" not found")},t.call=function(r,e,n){return void 0===n&&(n=12e4),c(this,void 0,void 0,function(){var o;return h(this,function(i){return(o=window).cochain.callback||(o.cochain.callback=t.callback),[2,new Promise(function(i,u){var a,c={method:r,args:e};if(o.cochain.exec)a=o.cochain.exec(JSON.stringify(c));else{if(!(o.webkit&&o.webkit.messageHandlers&&o.webkit.messageHandlers.cochain))return void u(new f(1,"only support android or ios platform under cordova"));if(!((a=o.cochain.nextMethodID++)>=0))return void u(new f(1,"no valid method id"));o.webkit.messageHandlers.cochain.postMessage(s({},c,{methodID:a}))}t.callAwaits.has(a)&&u(new f(1,"inconsistent remote exec")),setTimeout(function(){t.callAwaits.has(a)&&(u(new f(1,"timeout")),t.callAwaits.delete(a))},n),t.callAwaits.set(a,[i,u])})]})})},t.callAwaits=new Map,t}();e.d(r,"Network",function(){return o}),e.d(r,"Plugin",function(){return i}),e.d(r,"Service",function(){return p});var y=function(t,r,e,n){return new(e||(e=Promise))(function(o,i){function u(t){try{f(n.next(t))}catch(t){i(t)}}function a(t){try{f(n.throw(t))}catch(t){i(t)}}function f(t){t.done?o(t.value):new e(function(r){r(t.value)}).then(u,a)}f((n=n.apply(t,r||[])).next())})},g=function(t,r){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(t,u)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},d=function(){function t(){}return t.prototype.loadPlugin=function(t){var r;u.loadPlugin(t),Object.assign(this,((r={})[t.name]=t.signatureProvider(),r[t.name+"Hook"]=t.hookProvider,r))},t.prototype.supportedBlockchains=function(){return u.supportedBlockchains()},t.prototype.getWallets=function(t){return y(this,void 0,void 0,function(){return g(this,function(r){switch(r.label){case 0:return[4,p.call("getWallets",{blockchain:t})];case 1:return[2,r.sent()]}})})},t.prototype.getCurrentWallet=function(){return y(this,void 0,void 0,function(){return g(this,function(t){switch(t.label){case 0:return[4,p.call("getCurrentWallet",{})];case 1:return[2,t.sent()]}})})},t.prototype.shareSNS=function(t,r,e,n){return y(this,void 0,void 0,function(){return g(this,function(o){switch(o.label){case 0:return[4,p.call("shareSNS",{title:t,desc:r,url:e,image:n})];case 1:return[2,o.sent()]}})})},t.prototype.sign=function(t,r,e){return void 0===r&&(r=""),void 0===e&&(e=!1),y(this,void 0,void 0,function(){return g(this,function(n){switch(n.label){case 0:return[4,p.call("sign",{data:t,whatFor:r,isHash:e})];case 1:return[2,n.sent()]}})})},t}();r.default=new d},57:
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},63:
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r,e){"use strict";r.byteLength=function(t){var r=s(t),e=r[0],n=r[1];return 3*(e+n)/4-n},r.toByteArray=function(t){for(var r,e=s(t),n=e[0],u=e[1],a=new i(function(t,r,e){return 3*(r+e)/4-e}(0,n,u)),f=0,c=u>0?n-4:n,h=0;h<c;h+=4)r=o[t.charCodeAt(h)]<<18|o[t.charCodeAt(h+1)]<<12|o[t.charCodeAt(h+2)]<<6|o[t.charCodeAt(h+3)],a[f++]=r>>16&255,a[f++]=r>>8&255,a[f++]=255&r;2===u&&(r=o[t.charCodeAt(h)]<<2|o[t.charCodeAt(h+1)]>>4,a[f++]=255&r);1===u&&(r=o[t.charCodeAt(h)]<<10|o[t.charCodeAt(h+1)]<<4|o[t.charCodeAt(h+2)]>>2,a[f++]=r>>8&255,a[f++]=255&r);return a},r.fromByteArray=function(t){for(var r,e=t.length,o=e%3,i=[],u=0,a=e-o;u<a;u+=16383)i.push(c(t,u,u+16383>a?a:u+16383));1===o?(r=t[e-1],i.push(n[r>>2]+n[r<<4&63]+"==")):2===o&&(r=(t[e-2]<<8)+t[e-1],i.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return i.join("")};for(var n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,f=u.length;a<f;++a)n[a]=u[a],o[u.charCodeAt(a)]=a;function s(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function c(t,r,e){for(var o,i,u=[],a=r;a<e;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),u.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return u.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},64:
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){r.read=function(t,r,e,n,o){var i,u,a=8*o-n-1,f=(1<<a)-1,s=f>>1,c=-7,h=e?o-1:0,l=e?-1:1,p=t[r+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+t[r+h],h+=l,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=n;c>0;u=256*u+t[r+h],h+=l,c-=8);if(0===i)i=1-s;else{if(i===f)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=s}return(p?-1:1)*u*Math.pow(2,i-n)},r.write=function(t,r,e,n,o,i){var u,a,f,s=8*i-o-1,c=(1<<s)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(a=isNaN(r)?1:0,u=c):(u=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-u))<1&&(u--,f*=2),(r+=u+h>=1?l/f:l*Math.pow(2,1-h))*f>=2&&(u++,f/=2),u+h>=c?(a=0,u=c):u+h>=1?(a=(r*f-1)*Math.pow(2,o),u+=h):(a=r*Math.pow(2,h-1)*Math.pow(2,o),u=0));o>=8;t[e+p]=255&a,p+=y,a/=256,o-=8);for(u=u<<o|a,s+=o;s>0;t[e+p]=255&u,p+=y,u/=256,s-=8);t[e+p-y]|=128*g}},77:
/*!**********************************!*\
  !*** ./src/cowjs-eosjs/index.ts ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module uses injected variables (Buffer) */function(t,r,e){"use strict";e.r(r),function(t){var n,o=e(/*! ../cowjs-core */15),i=(n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)},function(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}),u=function(){return(u=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},a=function(t,r,e,n){return new(e||(e=Promise))(function(o,i){function u(t){try{f(n.next(t))}catch(t){i(t)}}function a(t){try{f(n.throw(t))}catch(t){i(t)}}function f(t){t.done?o(t.value):new e(function(r){r(t.value)}).then(u,a)}f((n=n.apply(t,r||[])).next())})},f=function(t,r){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(t,u)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},c=function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(s(arguments[r]));return t},h=function(r){function e(t){void 0===t&&(t="EOS");var e=r.call(this,t)||this;return e.blockchain=t,e}return i(e,r),e.prototype.hookProvider=function(r,e){var n=this;return{getAvailableKeys:function(){return a(n,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return[4,o.Service.call("getAvailableKeys",{blockchain:this.blockchain})];case 1:return[2,t.sent()]}})})},sign:function(i){return a(n,void 0,void 0,function(){var n,a,s,c;return f(this,function(f){switch(f.label){case 0:return n=e?e():{},a=n.eos,delete n.eos,[4,a.deserializeTransactionWithActions(i.serializedTransaction)];case 1:return s=f.sent(),c={blockchain:this.blockchain,network:r,signatureProviderArgs:u({},i,{serializedTransaction:t.from(i.serializedTransaction).toString("hex"),transaction:s}),requiredFields:n},[4,o.Service.call("signTransaction",c)];case 2:return[2,f.sent()]}})})}}},e.prototype.signatureProvider=function(){var t=this;return function(r,e,n){var i=o.Network.fromJSON(r);if(!i.isValid())throw new Error("invalid network");var a={},f=t.hookProvider(i,function(){return a}),s=new e(Object.assign(n,{signatureProvider:f}));return new Proxy(s,{get:function(t,r){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=e.find(function(t){return t.hasOwnProperty("requiredFields")});return a=u({},o?o.requiredFields:{},{eos:s}),t[r].apply(t,c(e))}}})}},e}(o.Plugin);r.default=h}.call(this,e(/*! ./../../node_modules/buffer/index.js */12).Buffer)}})});
//# sourceMappingURL=cowjs-eosjs.js.map