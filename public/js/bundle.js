parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){"use strict";e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:L(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}r.wrap=f;var d={};function p(){}function v(){}function m(){}var y={};l(y,c,function(){return this});var g=Object.getPrototypeOf,_=g&&g(g(j([])));_&&_!==n&&o.call(_,c)&&(y=_);var w=m.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function b(e,r){var n;a(this,"_invoke",{value:function(a,i){function c(){return new r(function(n,c){!function n(a,i,c,u){var s=h(e[a],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):r.resolve(f).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,u)})}u(s.arg)}(a,i,n,c)})}return n=n?n.then(c,c):c()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},x(b.prototype),l(b.prototype,u,function(){return this}),r.AsyncIterator=b,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new b(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(w),l(w,s,"Generator"),l(w,c,function(){return this}),l(w,"toString",function(){return"[object Generator]"}),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise(function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)})}}var o,a,i=document.querySelector(".login"),c=document.querySelector(".header");if(i){var u=function(t,e){c.innerHTML="",clearTimeout(a);var r='<div class="header__alert '.concat(t,'">').concat(e,"</div>");c.insertAdjacentHTML("afterbegin",r),a=setTimeout(function(){c.innerHTML=""},1e4)},s=document.querySelector(".login__content");s.addEventListener("click",function(){var t=n(e().mark(function t(r){var n,o,a,i,c,s,l;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r.target.classList.contains("login__content__button")||r.target.classList.contains("login__content__signup")){t.next=3;break}return t.abrupt("return");case 3:if(n=document.querySelector(".login__content__username"),o=document.querySelector(".login__content__password"),!n.classList.contains("processing")&&!o.classList.contains("processing")){t.next=7;break}return t.abrupt("return");case 7:return a=n.value,i=o.value,[n,o].forEach(function(t){console.log(t),t.classList.toggle("processing")}),c=r.target.classList.contains("login__content__button")?"login":"signup",t.next=13,fetch("/api/v1/auth/".concat(c),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:i})});case 13:return s=t.sent,t.next=16,s.json();case 16:if(l=t.sent,[n,o].forEach(function(t){console.log(t),t.classList.toggle("processing")}),"success"===l.status&&("login"===c&&location.assign("/game"),"signup"===c&&u("created","User created successfully")),"success"===l.status){t.next=21;break}throw new Error(l.message);case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),u("error",t.t0);case 26:case"end":return t.stop()}},t,null,[[0,23]])}));return function(e){return t.apply(this,arguments)}}())}var l=document.querySelector(".game");if(l){var f,h,d=!1,p=5,v=1e3,m=1e3,y=0,g=document.querySelector(".game__score--current"),_=function(t){var e=document.querySelector(".game__timer"),r=document.querySelectorAll(".game__answer");"start"===t&&(e.textContent=p,f=setInterval(function(){Number(e.textContent)>1?e.textContent-=1:(e.textContent="Time up!!!",r.forEach(function(t){return t.classList.add("incorrect")}),setTimeout(L,v),d=!0,clearTimeout(f))},m)),"stop"===t&&clearTimeout(f)},w=function(t,e){if(!d){_("stop"),d=!0;var r=document.querySelector(".game__timer"),n=Number(t);if(n===e)document.querySelector('.game__answer[data-answer="'.concat(e,'"]')).classList.add("correct"),r.textContent="Correct!!!",y++,g.textContent="Current score: ".concat(y);if(n!==e)document.querySelector('.game__answer[data-answer="'.concat(t,'"]')).classList.add("incorrect"),r.textContent="Incorrect...";setTimeout(L,v)}},x=function(){document.querySelector(".game__answers");var t=document.querySelector(".game__question");document.querySelectorAll(".game__answer").forEach(function(t){return t.remove()});t.innerHTML="\n                <svg class='spinner'>\n                  <use xlink:href='/img/icons.svg#icon-loader'>\n                </svg>\n              "},b=function(){var t=n(e().mark(function t(){var r,n,o,a;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return x(),r=document.querySelector(".game__answers"),n=document.querySelector(".game__question"),o=document.querySelectorAll(".game__answer"),(a=document.querySelector(".game__timer")).textContent="Saving score to server...",o.forEach(function(t){return t.remove()}),t.next=9,fetch("/api/v1/auth/saveScore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({score:y})});case 9:a.innerHTML="&nbsp;",n.textContent="Final score: ".concat(y),'<div class="game__answer">Start a new game</div>',r.insertAdjacentHTML("afterbegin",'<div class="game__answer">Start a new game</div>'),document.querySelector(".game__answer").addEventListener("click",function(){location.assign("/game")});case 14:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),L=function(){d=!1;var t=document.querySelector(".game__answers"),e=document.querySelector(".game__question"),r=document.querySelectorAll(".game__answer");r.forEach(function(t){return t.remove()}),e.textContent="";var n="";if(0===h.length)return b();var o=h.pop();e.textContent=o.question,o.answers.forEach(function(t,e){n+='<div class="game__answer" data-answer='.concat(e,">").concat(t,"</div>")}),t.insertAdjacentHTML("afterbegin",n),(r=document.querySelectorAll(".game__answer")).forEach(function(t){return t.addEventListener("click",function(e){e.preventDefault(),w(t.dataset.answer,o.correctAnswer)})}),_("start")},S=function(){var t=n(e().mark(function t(){var r,n;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector(".game__timer").textContent="",x(),t.next=5,fetch("/api/v1/question/normal");case 5:return r=t.sent,t.next=8,r.json();case 8:n=t.sent,h=n.data.questionArr,L();case 11:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();S()}
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/bundle.js.map