!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jQuery"));else if("function"==typeof define&&define.amd)define(["jQuery"],t);else{var r=t("object"==typeof exports?require("jQuery"):e.jQuery);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),f=0,i="";if(!o.default.fn.labelFor){var u=function(){var e,t,r,n;if(t=(0,o.default)(this),n=t.attr("for")){switch(n=n.split(" "),r=n.shift(),n=n.join(" "),r){case"_next":e=t.next();break;case"_prev":e=t.prev();break;default:e={length:0}}e.length&&(n&&(e=e.find(n)),e.attr("id")?i=e.attr("id"):(f++,i="labelfor___"+f,e.attr("id",i)),t.attr("for",i)),i=""}};o.default.fn.labelFor=function(){"label"==this[0].tagName.toLowerCase()?u.apply(this):this.find("label").each(function(){u.apply(this)})}}},function(t,r){t.exports=e}])});