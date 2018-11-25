parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"FRpO":[function(require,module,exports) {
function e(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function t(e){return"function"==typeof e}function s(e){return"number"==typeof e}function n(e){return"object"==typeof e&&null!==e}function i(e){return void 0===e}module.exports=e,e.EventEmitter=e,e.prototype._events=void 0,e.prototype._maxListeners=void 0,e.defaultMaxListeners=10,e.prototype.setMaxListeners=function(e){if(!s(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},e.prototype.emit=function(e){var s,r,o,h,v,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||n(this._events.error)&&!this._events.error.length)){if((s=arguments[1])instanceof Error)throw s;var u=new Error('Uncaught, unspecified "error" event. ('+s+")");throw u.context=s,u}if(i(r=this._events[e]))return!1;if(t(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:h=Array.prototype.slice.call(arguments,1),r.apply(this,h)}else if(n(r))for(h=Array.prototype.slice.call(arguments,1),o=(l=r.slice()).length,v=0;v<o;v++)l[v].apply(this,h);return!0},e.prototype.addListener=function(s,r){var o;if(!t(r))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",s,t(r.listener)?r.listener:r),this._events[s]?n(this._events[s])?this._events[s].push(r):this._events[s]=[this._events[s],r]:this._events[s]=r,n(this._events[s])&&!this._events[s].warned&&(o=i(this._maxListeners)?e.defaultMaxListeners:this._maxListeners)&&o>0&&this._events[s].length>o&&(this._events[s].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[s].length),"function"==typeof console.trace&&console.trace()),this},e.prototype.on=e.prototype.addListener,e.prototype.once=function(e,s){if(!t(s))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(e,i),n||(n=!0,s.apply(this,arguments))}return i.listener=s,this.on(e,i),this},e.prototype.removeListener=function(e,s){var i,r,o,h;if(!t(s))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(i=this._events[e]).length,r=-1,i===s||t(i.listener)&&i.listener===s)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,s);else if(n(i)){for(h=o;h-- >0;)if(i[h]===s||i[h].listener&&i[h].listener===s){r=h;break}if(r<0)return this;1===i.length?(i.length=0,delete this._events[e]):i.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,s)}return this},e.prototype.removeAllListeners=function(e){var s,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(s in this._events)"removeListener"!==s&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events={},this}if(t(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},e.prototype.listeners=function(e){return this._events&&this._events[e]?t(this._events[e])?[this._events[e]]:this._events[e].slice():[]},e.prototype.listenerCount=function(e){if(this._events){var s=this._events[e];if(t(s))return 1;if(s)return s.length}return 0},e.listenerCount=function(e,t){return e.listenerCount(t)};
},{}],"lNMl":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],o=null;"undefined"!=typeof WebSocket?o=WebSocket:"undefined"!=typeof MozWebSocket?o=MozWebSocket:void 0!==e?o=e.WebSocket||e.MozWebSocket:"undefined"!=typeof window?o=window.WebSocket||window.MozWebSocket:"undefined"!=typeof self&&(o=self.WebSocket||self.MozWebSocket),module.exports=o;
},{}],"qsOc":[function(require,module,exports) {
function e(t){var r="function"==typeof Map?new Map:void 0;return(e=function(e){if(null===e||!o(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return n(e,arguments,h(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),b(t,e)})(t)}function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function n(e,o,r){return(n=t()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&b(r,n.prototype),r}).apply(null,arguments)}function o(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=require("events"),d=require("isomorphic-ws");function v(e){return e.replace(/(_[a-z])/g,function(e){return e.toUpperCase().replace("_","")})}var k=function(e){function t(e){var n;return c(this,t),(n=u(this,h(t).call(this)))._console=n._getConsole(e||{}),n._settings=n._configure(e||{}),n._backoffDelay=n._settings.backoffDelayMin,n._pendingRequests={},n._webSocket=null,n._delegateEvents(),n._settings.autoConnect&&n.connect(),n}return p(t,y),l(t,[{key:"_getConsole",value:function(e){if(void 0!==e.console)return e.console;var t="undefined"!=typeof console&&console||{};return t.log=t.log||function(){},t.warn=t.warn||function(){},t.error=t.error||function(){},t}},{key:"_configure",value:function(e){var t=i({},e),n="undefined"!=typeof document&&"https:"===document.location.protocol?"wss://":"ws://",o="undefined"!=typeof document&&document.location.host||"localhost";return t.webSocketUrl=e.webSocketUrl||"".concat(n).concat(o,"/mopidy/ws"),!1!==e.autoConnect&&(t.autoConnect=!0),t.backoffDelayMin=e.backoffDelayMin||1e3,t.backoffDelayMax=e.backoffDelayMax||64e3,t}},{key:"_delegateEvents",value:function(){this.removeAllListeners("websocket:close"),this.removeAllListeners("websocket:error"),this.removeAllListeners("websocket:incomingMessage"),this.removeAllListeners("websocket:open"),this.removeAllListeners("state:offline"),this.on("websocket:close",this._cleanup),this.on("websocket:error",this._handleWebSocketError),this.on("websocket:incomingMessage",this._handleMessage),this.on("websocket:open",this._resetBackoffDelay),this.on("websocket:open",this._getApiSpec),this.on("state:offline",this._reconnect)}},{key:"off",value:function(){if(0===arguments.length)this.removeAllListeners();else if(1===arguments.length){var e=arguments.length<=0?void 0:arguments[0];if("string"!=typeof e)throw Error("Expected no arguments, a string, or a string and a listener.");this.removeAllListeners(e)}else this.removeListener.apply(this,arguments)}},{key:"connect",value:function(){var e=this;if(this._webSocket){if(this._webSocket.readyState===t.WebSocket.OPEN)return;this._webSocket.close()}this._webSocket=this._settings.webSocket||new t.WebSocket(this._settings.webSocketUrl),this._webSocket.onclose=function(t){e.emit("websocket:close",t)},this._webSocket.onerror=function(t){e.emit("websocket:error",t)},this._webSocket.onopen=function(){e.emit("websocket:open")},this._webSocket.onmessage=function(t){e.emit("websocket:incomingMessage",t)}}},{key:"_cleanup",value:function(e){var n=this;Object.keys(this._pendingRequests).forEach(function(o){var r=n._pendingRequests[o].reject;delete n._pendingRequests[o];var i=new t.ConnectionError("WebSocket closed");i.closeEvent=e,r(i)}),this.emit("state","state:offline"),this.emit("state:offline")}},{key:"_reconnect",value:function(){var e=this;this.emit("state","reconnectionPending",{timeToAttempt:this._backoffDelay}),this.emit("reconnectionPending",{timeToAttempt:this._backoffDelay}),setTimeout(function(){e.emit("state","reconnecting"),e.emit("reconnecting"),e.connect()},this._backoffDelay),this._backoffDelay=2*this._backoffDelay,this._backoffDelay>this._settings.backoffDelayMax&&(this._backoffDelay=this._settings.backoffDelayMax)}},{key:"_resetBackoffDelay",value:function(){this._backoffDelay=this._settings.backoffDelayMin}},{key:"close",value:function(){this.off("state:offline",this._reconnect),this._webSocket&&this._webSocket.close()}},{key:"_handleWebSocketError",value:function(e){this._console.warn("WebSocket error:",e.stack||e)}},{key:"_send",value:function(e){var n=this;switch(this._webSocket.readyState){case t.WebSocket.CONNECTING:return Promise.reject(new t.ConnectionError("WebSocket is still connecting"));case t.WebSocket.CLOSING:return Promise.reject(new t.ConnectionError("WebSocket is closing"));case t.WebSocket.CLOSED:return Promise.reject(new t.ConnectionError("WebSocket is closed"));default:return new Promise(function(t,o){var r=i({},e,{jsonrpc:"2.0",id:n._nextRequestId()});n._pendingRequests[r.id]={resolve:t,reject:o},n._webSocket.send(JSON.stringify(r)),n.emit("websocket:outgoingMessage",r)})}}},{key:"_handleMessage",value:function(e){try{var t=JSON.parse(e.data);Object.hasOwnProperty.call(t,"id")?this._handleResponse(t):Object.hasOwnProperty.call(t,"event")?this._handleEvent(t):this._console.warn("Unknown message type received. Message was: ".concat(e.data))}catch(n){if(!(n instanceof SyntaxError))throw n;this._console.warn("WebSocket message parsing failed. Message was: ".concat(e.data))}}},{key:"_handleResponse",value:function(e){if(Object.hasOwnProperty.call(this._pendingRequests,e.id)){var n=this._pendingRequests[e.id],o=n.resolve,r=n.reject;if(delete this._pendingRequests[e.id],Object.hasOwnProperty.call(e,"result"))o(e.result);else if(Object.hasOwnProperty.call(e,"error")){var i=new t.ServerError(e.error.message);i.code=e.error.code,i.data=e.error.data,r(i),this._console.warn("Server returned error:",e.error)}else{var s=new Error("Response without 'result' or 'error' received");s.data={response:e},r(s),this._console.warn("Response without 'result' or 'error' received. Message was:",e)}}else this._console.warn("Unexpected response received. Message was:",e)}},{key:"_handleEvent",value:function(e){var t=i({},e);delete t.event;var n="event:".concat(v(e.event));this.emit("event",n,t),this.emit(n,t)}},{key:"_getApiSpec",value:function(){return this._send({method:"core.describe"}).then(this._createApi.bind(this)).catch(this._handleWebSocketError)}},{key:"_createApi",value:function(e){var t=this;Object.keys(e).forEach(function(n){var o,r,i,s,c=((o=n.split(".")).length>=1&&"core"===o[0]&&(o=o.slice(1)),o),a=v(c.slice(-1)[0]),l=(r=c.slice(0,-1),i=t,r.forEach(function(e){var t=v(e);i[t]=i[t]||{},i=i[t]}),i);l[a]=(s=n,function(){for(var e={method:s},n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return 0===o.length?t._send(e):o.length>1?Promise.reject(new Error("Expected zero arguments, a single array, or a single object.")):Array.isArray(o[0])||o[0]===Object(o[0])?(e.params=o[0],t._send(e)):Promise.reject(new TypeError("Expected an array or an object."))}),l[a].description=e[n].description,l[a].params=e[n].params}),this.emit("state","state:online"),this.emit("state:online")}}]),t}(),_=function(t){function n(e){var t;return c(this,n),(t=u(this,h(n).call(this,e))).name="ConnectionError",t}return p(n,e(Error)),n}();k.ConnectionError=_;var w=function(t){function n(e){var t;return c(this,n),(t=u(this,h(n).call(this,e))).name="ServerError",t}return p(n,e(Error)),n}();k.ServerError=w,k.WebSocket=d,k.prototype._nextRequestId=function(){var e=-1;return function(){return e+=1}}(),module.exports=k;
},{"events":"FRpO","isomorphic-ws":"lNMl"}]},{},["qsOc"], "Mopidy")
//# sourceMappingURL=/mopidy.map